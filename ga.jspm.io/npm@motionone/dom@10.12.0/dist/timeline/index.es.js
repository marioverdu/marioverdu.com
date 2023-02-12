import { __rest } from "tslib";
import { invariant } from "hey-listen";
import {
  isString,
  defaults,
  isEasingGenerator,
  defaultOffset,
  fillOffset,
  progress,
} from "@motionone/utils";
import { resolveOption } from "../utils/stagger.es.js";
import { animateStyle } from "../animate/animate-style.es.js";
import { withControls } from "../animate/utils/controls.es.js";
import { keyframesList } from "../animate/utils/keyframes.es.js";
import { getOptions } from "../animate/utils/options.es.js";
import { resolveElements } from "../utils/resolve-elements.es.js";
import { isTransform } from "../animate/utils/transforms.es.js";
import { calcNextTime } from "./utils/calc-time.es.js";
import { addKeyframes } from "./utils/edit.es.js";
import { compareByTime } from "./utils/sort.es.js";

function timeline(definition, options = {}) {
  var _a;
  const animationDefinitions = createAnimationsFromTimeline(
    definition,
    options
  );
  /**
   * Create and start animations
   */
  const animationFactories = animationDefinitions
    .map((definition) => animateStyle(...definition))
    .filter(Boolean);
  return withControls(
    animationFactories,
    options,
    // Get the duration from the first animation definition
    (_a = animationDefinitions[0]) === null || _a === void 0
      ? void 0
      : _a[3].duration
  );
}
function createAnimationsFromTimeline(definition, _a = {}) {
  var { defaultOptions = {} } = _a,
    timelineOptions = __rest(_a, ["defaultOptions"]);
  const animationDefinitions = [];
  const elementSequences = new Map();
  const elementCache = {};
  const timeLabels = new Map();
  let prevTime = 0;
  let currentTime = 0;
  let totalDuration = 0;
  /**
   * Build the timeline by mapping over the definition array and converting
   * the definitions into keyframes and offsets with absolute time values.
   * These will later get converted into relative offsets in a second pass.
   */
  for (let i = 0; i < definition.length; i++) {
    const segment = definition[i];
    /**
     * If this is a timeline label, mark it and skip the rest of this iteration.
     */
    if (isString(segment)) {
      timeLabels.set(segment, currentTime);
      continue;
    } else if (!Array.isArray(segment)) {
      timeLabels.set(
        segment.name,
        calcNextTime(currentTime, segment.at, prevTime, timeLabels)
      );
      continue;
    }
    const [elementDefinition, keyframes, options = {}] = segment;
    /**
     * If a relative or absolute time value has been specified we need to resolve
     * it in relation to the currentTime.
     */
    if (options.at !== undefined) {
      currentTime = calcNextTime(currentTime, options.at, prevTime, timeLabels);
    }
    /**
     * Keep track of the maximum duration in this definition. This will be
     * applied to currentTime once the definition has been parsed.
     */
    let maxDuration = 0;
    /**
     * Find all the elements specified in the definition and parse value
     * keyframes from their timeline definitions.
     */
    const elements = resolveElements(elementDefinition, elementCache);
    const numElements = elements.length;
    for (let elementIndex = 0; elementIndex < numElements; elementIndex++) {
      const element = elements[elementIndex];
      const elementSequence = getElementSequence(element, elementSequences);
      for (const key in keyframes) {
        const valueSequence = getValueSequence(key, elementSequence);
        let valueKeyframes = keyframesList(keyframes[key]);
        const valueOptions = getOptions(options, key);
        let {
          duration = defaultOptions.duration || defaults.duration,
          easing = defaultOptions.easing || defaults.easing,
        } = valueOptions;
        if (isEasingGenerator(easing)) {
          const valueIsTransform = isTransform(key);
          invariant(
            valueKeyframes.length === 2 || !valueIsTransform,
            "spring must be provided 2 keyframes within timeline"
          );
          const custom = easing.createAnimation(
            valueKeyframes,
            // TODO We currently only support explicit keyframes
            // so this doesn't currently read from the DOM
            () => "0",
            valueIsTransform
          );
          easing = custom.easing;
          if (custom.keyframes !== undefined) valueKeyframes = custom.keyframes;
          if (custom.duration !== undefined) duration = custom.duration;
        }
        const delay =
          resolveOption(options.delay, elementIndex, numElements) || 0;
        const startTime = currentTime + delay;
        const targetTime = startTime + duration;
        /**
         *
         */
        let { offset = defaultOffset(valueKeyframes.length) } = valueOptions;
        /**
         * If there's only one offset of 0, fill in a second with length 1
         *
         * TODO: Ensure there's a test that covers this removal
         */
        if (offset.length === 1 && offset[0] === 0) {
          offset[1] = 1;
        }
        /**
         * Fill out if offset if fewer offsets than keyframes
         */
        const remainder = length - valueKeyframes.length;
        remainder > 0 && fillOffset(offset, remainder);
        /**
         * If only one value has been set, ie [1], push a null to the start of
         * the keyframe array. This will let us mark a keyframe at this point
         * that will later be hydrated with the previous value.
         */
        valueKeyframes.length === 1 && valueKeyframes.unshift(null);
        /**
         * Add keyframes, mapping offsets to absolute time.
         */
        addKeyframes(
          valueSequence,
          valueKeyframes,
          easing,
          offset,
          startTime,
          targetTime
        );
        maxDuration = Math.max(delay + duration, maxDuration);
        totalDuration = Math.max(targetTime, totalDuration);
      }
    }
    prevTime = currentTime;
    currentTime += maxDuration;
  }
  /**
   * For every element and value combination create a new animation.
   */
  elementSequences.forEach((valueSequences, element) => {
    for (const key in valueSequences) {
      const valueSequence = valueSequences[key];
      /**
       * Arrange all the keyframes in ascending time order.
       */
      valueSequence.sort(compareByTime);
      const keyframes = [];
      const valueOffset = [];
      const valueEasing = [];
      /**
       * For each keyframe, translate absolute times into
       * relative offsets based on the total duration of the timeline.
       */
      for (let i = 0; i < valueSequence.length; i++) {
        const { at, value, easing } = valueSequence[i];
        keyframes.push(value);
        valueOffset.push(progress(0, totalDuration, at));
        valueEasing.push(easing || defaults.easing);
      }
      /**
       * If the first keyframe doesn't land on offset: 0
       * provide one by duplicating the initial keyframe. This ensures
       * it snaps to the first keyframe when the animation starts.
       */
      if (valueOffset[0] !== 0) {
        valueOffset.unshift(0);
        keyframes.unshift(keyframes[0]);
        valueEasing.unshift("linear");
      }
      /**
       * If the last keyframe doesn't land on offset: 1
       * provide one with a null wildcard value. This will ensure it
       * stays static until the end of the animation.
       */
      if (valueOffset[valueOffset.length - 1] !== 1) {
        valueOffset.push(1);
        keyframes.push(null);
      }
      animationDefinitions.push([
        element,
        key,
        keyframes,
        Object.assign(
          Object.assign(Object.assign({}, defaultOptions), {
            duration: totalDuration,
            easing: valueEasing,
            offset: valueOffset,
          }),
          timelineOptions
        ),
      ]);
    }
  });
  return animationDefinitions;
}
function getElementSequence(element, sequences) {
  !sequences.has(element) && sequences.set(element, {});
  return sequences.get(element);
}
function getValueSequence(name, sequences) {
  if (!sequences[name]) sequences[name] = [];
  return sequences[name];
}

export { createAnimationsFromTimeline, timeline };
