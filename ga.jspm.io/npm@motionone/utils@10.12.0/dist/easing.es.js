import { isEasingList } from "./is.es.js";
import { wrap } from "./wrap.es.js";

function getEasingForSegment(easing, i) {
  return isEasingList(easing) ? easing[wrap(0, easing.length, i)] : easing;
}

export { getEasingForSegment };
