import { MotionValue as e } from "@motionone/types";
import {
  noopReturn as t,
  addUniqueItem as n,
  isCubicBezier as o,
  defaults as i,
  isEasingGenerator as s,
  isNumber as r,
  time as a,
  isEasingList as c,
  noop as l,
  removeItem as f,
  mix as u,
  getEasingForSegment as d,
  isString as g,
  defaultOffset as m,
  fillOffset as h,
  progress as p,
  velocityPerSecond as v,
  interpolate as y,
} from "@motionone/utils";
import { Animation as w, getEasingFunction as E } from "@motionone/animation";
import { __rest as b } from "tslib";
import { invariant as S } from "hey-listen";
import {
  pregenerateKeyframes as A,
  calcGeneratorVelocity as O,
  spring as x,
  glide as V,
} from "@motionone/generators";
const z = new WeakMap();
function getAnimationData(e) {
  z.has(e) || z.set(e, { transforms: [], values: new Map() });
  return z.get(e);
}
function getMotionValue(t, n) {
  t.has(n) || t.set(n, new e());
  return t.get(n);
}
const W = ["", "X", "Y", "Z"];
const L = ["translate", "scale", "rotate", "skew"];
const T = { x: "translateX", y: "translateY", z: "translateZ" };
const D = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (e) => e + "deg",
};
const M = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (e) => e + "px",
  },
  rotate: D,
  scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: t },
  skew: D,
};
const k = new Map();
const asTransformCssVar = (e) => `--motion-${e}`;
const B = ["x", "y", "z"];
L.forEach((e) => {
  W.forEach((t) => {
    B.push(e + t);
    k.set(asTransformCssVar(e + t), M[e]);
  });
});
const compareTransformOrder = (e, t) => B.indexOf(e) - B.indexOf(t);
const j = new Set(B);
const isTransform = (e) => j.has(e);
const addTransformToElement = (e, t) => {
  T[t] && (t = T[t]);
  const { transforms: o } = getAnimationData(e);
  n(o, t);
  e.style.transform = buildTransformTemplate(o);
};
const buildTransformTemplate = (e) =>
  e.sort(compareTransformOrder).reduce(transformListToString, "").trim();
const transformListToString = (e, t) =>
  `${e} ${t}(var(${asTransformCssVar(t)}))`;
const isCssVar = (e) => e.startsWith("--");
const P = new Set();
function registerCssVariable(e) {
  if (!P.has(e)) {
    P.add(e);
    try {
      const { syntax: t, initialValue: n } = k.has(e) ? k.get(e) : {};
      CSS.registerProperty({
        name: e,
        inherits: false,
        syntax: t,
        initialValue: n,
      });
    } catch (e) {}
  }
}
const convertEasing = (e) => (o(e) ? cubicBezierAsString(e) : e);
const cubicBezierAsString = ([e, t, n, o]) =>
  `cubic-bezier(${e}, ${t}, ${n}, ${o})`;
const testAnimation = (e) =>
  document.createElement("div").animate(e, { duration: 0.001 });
const C = {
  cssRegisterProperty: () =>
    "undefined" !== typeof CSS &&
    Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      testAnimation({ opacity: [1] });
    } catch (e) {
      return false;
    }
    return true;
  },
  finished: () => Boolean(testAnimation({ opacity: [0, 1] }).finished),
};
const $ = {};
const R = {};
for (const e in C)
  R[e] = () => {
    void 0 === $[e] && ($[e] = C[e]());
    return $[e];
  };
function hydrateKeyframes(e, t) {
  for (let n = 0; n < e.length; n++)
    null === e[n] && (e[n] = n ? e[n - 1] : t());
  return e;
}
const keyframesList = (e) => (Array.isArray(e) ? e : [e]);
function getStyleName(e) {
  T[e] && (e = T[e]);
  return isTransform(e) ? asTransformCssVar(e) : e;
}
const H = {
  get: (e, t) => {
    t = getStyleName(t);
    let n = isCssVar(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
    if (!n && 0 !== n) {
      const e = k.get(t);
      e && (n = e.initialValue);
    }
    return n;
  },
  set: (e, t, n) => {
    t = getStyleName(t);
    isCssVar(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
  },
};
function stopAnimation(e, t = true) {
  if (e && "finished" !== e.playState)
    try {
      if (e.stop) e.stop();
      else {
        t && e.commitStyles();
        e.cancel();
      }
    } catch (e) {}
}
function getDevToolsRecord() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function animateStyle(e, t, n, o = {}) {
  const f = getDevToolsRecord();
  const u = false !== o.record && f;
  let d;
  let {
    duration: g = i.duration,
    delay: m = i.delay,
    endDelay: h = i.endDelay,
    repeat: p = i.repeat,
    easing: v = i.easing,
    direction: y,
    offset: E,
    allowWebkitAcceleration: b = false,
  } = o;
  const S = getAnimationData(e);
  let A = R.waapi();
  const O = isTransform(t);
  O && addTransformToElement(e, t);
  const x = getStyleName(t);
  const V = getMotionValue(S.values, x);
  const z = k.get(x);
  stopAnimation(V.animation, !(s(v) && V.generator) && false !== o.record);
  return () => {
    const readInitialValue = () => {
      var t, n;
      return null !==
        (n =
          null !== (t = H.get(e, x)) && void 0 !== t
            ? t
            : null === z || void 0 === z
            ? void 0
            : z.initialValue) && void 0 !== n
        ? n
        : 0;
    };
    let i = hydrateKeyframes(keyframesList(n), readInitialValue);
    if (s(v)) {
      const e = v.createAnimation(i, readInitialValue, O, x, V);
      v = e.easing;
      void 0 !== e.keyframes && (i = e.keyframes);
      void 0 !== e.duration && (g = e.duration);
    }
    isCssVar(x) &&
      (R.cssRegisterProperty() ? registerCssVariable(x) : (A = false));
    if (A) {
      z && (i = i.map((e) => (r(e) ? z.toDefaultUnit(e) : e)));
      1 !== i.length ||
        (R.partialKeyframes() && !u) ||
        i.unshift(readInitialValue());
      const t = {
        delay: a.ms(m),
        duration: a.ms(g),
        endDelay: a.ms(h),
        easing: c(v) ? void 0 : convertEasing(v),
        direction: y,
        iterations: p + 1,
        fill: "both",
      };
      d = e.animate(
        { [x]: i, offset: E, easing: c(v) ? v.map(convertEasing) : void 0 },
        t
      );
      d.finished ||
        (d.finished = new Promise((e, t) => {
          d.onfinish = e;
          d.oncancel = t;
        }));
      const n = i[i.length - 1];
      d.finished
        .then(() => {
          H.set(e, x, n);
          d.cancel();
        })
        .catch(l);
      b || (d.playbackRate = 1.000001);
    } else if (O) {
      i = i.map((e) => ("string" === typeof e ? parseFloat(e) : e));
      1 === i.length && i.unshift(parseFloat(readInitialValue()));
      const render = (t) => {
        z && (t = z.toDefaultUnit(t));
        H.set(e, x, t);
      };
      d = new w(
        render,
        i,
        Object.assign(Object.assign({}, o), { duration: g, easing: v })
      );
    } else {
      const t = i[i.length - 1];
      H.set(e, x, z && r(t) ? z.toDefaultUnit(t) : t);
    }
    u &&
      f(
        e,
        t,
        i,
        { duration: g, delay: m, easing: v, repeat: p, offset: E },
        "motion-one"
      );
    V.setAnimation(d);
    return d;
  };
}
const getOptions = (e, t) =>
  e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e);
function resolveElements(e, t) {
  var n;
  if ("string" === typeof e)
    if (t) {
      null !== (n = t[e]) && void 0 !== n
        ? n
        : (t[e] = document.querySelectorAll(e));
      e = t[e];
    } else e = document.querySelectorAll(e);
  else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
const createAnimation = (e) => e();
const withControls = (e, t, n = i.duration) =>
  new Proxy(
    {
      animations: e.map(createAnimation).filter(Boolean),
      duration: n,
      options: t,
    },
    I
  );
const getActiveAnimation = (e) => e.animations[0];
const I = {
  get: (e, t) => {
    const n = getActiveAnimation(e);
    switch (t) {
      case "duration":
        return e.duration;
      case "currentTime":
        return a.s((null === n || void 0 === n ? void 0 : n[t]) || 0);
      case "playbackRate":
      case "playState":
        return null === n || void 0 === n ? void 0 : n[t];
      case "finished":
        e.finished ||
          (e.finished = Promise.all(e.animations.map(selectFinished)).catch(l));
        return e.finished;
      case "stop":
        return () => {
          e.animations.forEach((e) => stopAnimation(e));
        };
      case "forEachNative":
        return (t) => {
          e.animations.forEach((n) => t(n, e));
        };
      default:
        return "undefined" ===
          typeof (null === n || void 0 === n ? void 0 : n[t])
          ? void 0
          : () => e.animations.forEach((e) => e[t]());
    }
  },
  set: (e, t, n) => {
    switch (t) {
      case "currentTime":
        n = a.ms(n);
      case "currentTime":
      case "playbackRate":
        for (let o = 0; o < e.animations.length; o++) e.animations[o][t] = n;
        return true;
    }
    return false;
  },
};
const selectFinished = (e) => e.finished;
function stagger(e = 0.1, { start: t = 0, from: n = 0, easing: o } = {}) {
  return (i, s) => {
    const a = r(n) ? n : getFromIndex(n, s);
    const c = Math.abs(a - i);
    let l = e * c;
    if (o) {
      const t = s * e;
      const n = E(o);
      l = n(l / t) * t;
    }
    return t + l;
  };
}
function getFromIndex(e, t) {
  if ("first" === e) return 0;
  {
    const n = t - 1;
    return "last" === e ? n : n / 2;
  }
}
function resolveOption(e, t, n) {
  return "function" === typeof e ? e(t, n) : e;
}
function animate(e, t, n = {}) {
  e = resolveElements(e);
  const o = e.length;
  const i = [];
  for (let s = 0; s < o; s++) {
    const r = e[s];
    for (const e in t) {
      const a = getOptions(n, e);
      a.delay = resolveOption(a.delay, s, o);
      const c = animateStyle(r, e, t[e], a);
      i.push(c);
    }
  }
  return withControls(i, n, n.duration);
}
function calcNextTime(e, t, n, o) {
  var i;
  return r(t)
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : "<" === t
    ? n
    : null !== (i = o.get(t)) && void 0 !== i
    ? i
    : e;
}
function eraseKeyframes(e, t, n) {
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (i.at > t && i.at < n) {
      f(e, i);
      o--;
    }
  }
}
function addKeyframes(e, t, n, o, i, s) {
  eraseKeyframes(e, i, s);
  for (let r = 0; r < t.length; r++)
    e.push({ value: t[r], at: u(i, s, o[r]), easing: d(n, r) });
}
function compareByTime(e, t) {
  return e.at === t.at ? (null === e.value ? 1 : -1) : e.at - t.at;
}
function timeline(e, t = {}) {
  var n;
  const o = createAnimationsFromTimeline(e, t);
  const i = o.map((e) => animateStyle(...e)).filter(Boolean);
  return withControls(
    i,
    t,
    null === (n = o[0]) || void 0 === n ? void 0 : n[3].duration
  );
}
function createAnimationsFromTimeline(e, t = {}) {
  var { defaultOptions: n = {} } = t,
    o = b(t, ["defaultOptions"]);
  const r = [];
  const a = new Map();
  const c = {};
  const l = new Map();
  let f = 0;
  let u = 0;
  let d = 0;
  for (let t = 0; t < e.length; t++) {
    const o = e[t];
    if (g(o)) {
      l.set(o, u);
      continue;
    }
    if (!Array.isArray(o)) {
      l.set(o.name, calcNextTime(u, o.at, f, l));
      continue;
    }
    const [r, p, v = {}] = o;
    void 0 !== v.at && (u = calcNextTime(u, v.at, f, l));
    let y = 0;
    const w = resolveElements(r, c);
    const E = w.length;
    for (let e = 0; e < E; e++) {
      const t = w[e];
      const o = getElementSequence(t, a);
      for (const t in p) {
        const r = getValueSequence(t, o);
        let a = keyframesList(p[t]);
        const c = getOptions(v, t);
        let {
          duration: l = n.duration || i.duration,
          easing: f = n.easing || i.easing,
        } = c;
        if (s(f)) {
          const e = isTransform(t);
          S(
            2 === a.length || !e,
            "spring must be provided 2 keyframes within timeline"
          );
          const n = f.createAnimation(a, () => "0", e);
          f = n.easing;
          void 0 !== n.keyframes && (a = n.keyframes);
          void 0 !== n.duration && (l = n.duration);
        }
        const g = resolveOption(v.delay, e, E) || 0;
        const w = u + g;
        const b = w + l;
        let { offset: A = m(a.length) } = c;
        1 === A.length && 0 === A[0] && (A[1] = 1);
        const O = length - a.length;
        O > 0 && h(A, O);
        1 === a.length && a.unshift(null);
        addKeyframes(r, a, f, A, w, b);
        y = Math.max(g + l, y);
        d = Math.max(b, d);
      }
    }
    f = u;
    u += y;
  }
  a.forEach((e, t) => {
    for (const s in e) {
      const a = e[s];
      a.sort(compareByTime);
      const c = [];
      const l = [];
      const f = [];
      for (let e = 0; e < a.length; e++) {
        const { at: t, value: n, easing: o } = a[e];
        c.push(n);
        l.push(p(0, d, t));
        f.push(o || i.easing);
      }
      if (0 !== l[0]) {
        l.unshift(0);
        c.unshift(c[0]);
        f.unshift("linear");
      }
      if (1 !== l[l.length - 1]) {
        l.push(1);
        c.push(null);
      }
      r.push([
        t,
        s,
        c,
        Object.assign(
          Object.assign(Object.assign({}, n), {
            duration: d,
            easing: f,
            offset: l,
          }),
          o
        ),
      ]);
    }
  });
  return r;
}
function getElementSequence(e, t) {
  !t.has(e) && t.set(e, {});
  return t.get(e);
}
function getValueSequence(e, t) {
  t[e] || (t[e] = []);
  return t[e];
}
function createGeneratorEasing(e) {
  const t = new WeakMap();
  return (n = {}) => {
    const o = new Map();
    const getGenerator = (t = 0, i = 100, s = 0, r = false) => {
      const a = `${t}-${i}-${s}-${r}`;
      o.has(a) ||
        o.set(
          a,
          e(
            Object.assign(
              {
                from: t,
                to: i,
                velocity: s,
                restSpeed: r ? 0.05 : 2,
                restDistance: r ? 0.01 : 0.5,
              },
              n
            )
          )
        );
      return o.get(a);
    };
    const getKeyframes = (e) => {
      t.has(e) || t.set(e, A(e));
      return t.get(e);
    };
    return {
      createAnimation: (e, t, n, o, i) => {
        var s, r;
        let a;
        const c = e.length;
        let l = n && c <= 2 && e.every(isNumberOrNull);
        if (l) {
          const n = e[c - 1];
          const l = 1 === c ? null : e[0];
          let f = 0;
          let u = 0;
          const d = null === i || void 0 === i ? void 0 : i.generator;
          if (d) {
            const { animation: t, generatorStartTime: n } = i;
            const o =
              (null === t || void 0 === t ? void 0 : t.startTime) || n || 0;
            const r =
              (null === t || void 0 === t ? void 0 : t.currentTime) ||
              performance.now() - o;
            const a = d(r).current;
            u = null !== (s = l) && void 0 !== s ? s : a;
            (1 === c || (2 === c && null === e[0])) &&
              (f = O((e) => d(e).current, r, a));
          } else u = null !== (r = l) && void 0 !== r ? r : parseFloat(t());
          const g = getGenerator(
            u,
            n,
            f,
            null === o || void 0 === o ? void 0 : o.includes("scale")
          );
          const m = getKeyframes(g);
          a = Object.assign(Object.assign({}, m), { easing: "linear" });
          if (i) {
            i.generator = g;
            i.generatorStartTime = performance.now();
          }
        } else {
          const e = getKeyframes(getGenerator(0, 100));
          a = { easing: "ease", duration: e.overshootDuration };
        }
        return a;
      },
    };
  };
}
const isNumberOrNull = (e) => "string" !== typeof e;
const N = createGeneratorEasing(x);
const F = createGeneratorEasing(V);
const U = { any: 0, all: 1 };
function inView$1(e, t, { root: n, margin: o, amount: i = "any" } = {}) {
  if ("undefined" === typeof IntersectionObserver) return () => {};
  const s = resolveElements(e);
  const r = new WeakMap();
  const onIntersectionChange = (e) => {
    e.forEach((e) => {
      const n = r.get(e.target);
      if (e.isIntersecting !== Boolean(n))
        if (e.isIntersecting) {
          const n = t(e);
          "function" === typeof n ? r.set(e.target, n) : a.unobserve(e.target);
        } else if (n) {
          n(e);
          r.delete(e.target);
        }
    });
  };
  const a = new IntersectionObserver(onIntersectionChange, {
    root: n,
    rootMargin: o,
    threshold: "number" === typeof i ? i : U[i],
  });
  s.forEach((e) => a.observe(e));
  return () => a.disconnect();
}
const q = new WeakMap();
let K;
function getElementSize(e, t) {
  if (t) {
    const { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && "getBBox" in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function notifyTarget({ target: e, contentRect: t, borderBoxSize: n }) {
  var o;
  null === (o = q.get(e)) || void 0 === o
    ? void 0
    : o.forEach((o) => {
        o({
          target: e,
          contentSize: t,
          get size() {
            return getElementSize(e, n);
          },
        });
      });
}
function notifyAll(e) {
  e.forEach(notifyTarget);
}
function createResizeObserver() {
  "undefined" !== typeof ResizeObserver && (K = new ResizeObserver(notifyAll));
}
function resizeElement(e, t) {
  K || createResizeObserver();
  const n = resolveElements(e);
  n.forEach((e) => {
    let n = q.get(e);
    if (!n) {
      n = new Set();
      q.set(e, n);
    }
    n.add(t);
    null === K || void 0 === K ? void 0 : K.observe(e);
  });
  return () => {
    n.forEach((e) => {
      const n = q.get(e);
      null === n || void 0 === n ? void 0 : n.delete(t);
      (null === n || void 0 === n ? void 0 : n.size) ||
        (null === K || void 0 === K ? void 0 : K.unobserve(e));
    });
  };
}
const G = new Set();
let _;
function createWindowResizeHandler() {
  _ = () => {
    const e = { width: window.innerWidth, height: window.innerHeight };
    const t = { target: window, size: e, contentSize: e };
    G.forEach((e) => e(t));
  };
  window.addEventListener("resize", _);
}
function resizeWindow(e) {
  G.add(e);
  _ || createWindowResizeHandler();
  return () => {
    G.delete(e);
    !G.size && _ && (_ = void 0);
  };
}
function resize(e, t) {
  return "function" === typeof e ? resizeWindow(e) : resizeElement(e, t);
}
const Z = 50;
const createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0,
});
const createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo(),
});
const X = {
  x: { length: "Width", position: "Left" },
  y: { length: "Height", position: "Top" },
};
function updateAxisInfo(e, t, n, o) {
  const i = n[t];
  const { length: s, position: r } = X[t];
  const a = i.current;
  const c = n.time;
  i.current = e["scroll" + r];
  i.scrollLength = e["scroll" + s] - e["client" + s];
  i.offset.length = 0;
  i.offset[0] = 0;
  i.offset[1] = i.scrollLength;
  i.progress = p(0, i.scrollLength, i.current);
  const l = o - c;
  i.velocity = l > Z ? 0 : v(i.current - a, l);
}
function updateScrollInfo(e, t, n) {
  updateAxisInfo(e, "x", t, n);
  updateAxisInfo(e, "y", t, n);
  t.time = n;
}
function calcInset(e, t) {
  let n = { x: 0, y: 0 };
  let o = e;
  while (o && o !== t)
    if (o instanceof HTMLElement) {
      n.x += o.offsetLeft;
      n.y += o.offsetTop;
      o = o.offsetParent;
    } else if (o instanceof SVGGraphicsElement && "getBBox" in o) {
      const { top: e, left: t } = o.getBBox();
      n.x += t;
      n.y += e;
      while (o && "svg" !== o.tagName) o = o.parentNode;
    }
  return n;
}
const Y = {
  Enter: [
    [0, 1],
    [1, 1],
  ],
  Exit: [
    [0, 0],
    [1, 0],
  ],
  Any: [
    [1, 0],
    [0, 1],
  ],
  All: [
    [0, 0],
    [1, 1],
  ],
};
const J = { start: 0, center: 0.5, end: 1 };
function resolveEdge(e, t, n = 0) {
  let o = 0;
  void 0 !== J[e] && (e = J[e]);
  if (g(e)) {
    const t = parseFloat(e);
    e.endsWith("px")
      ? (o = t)
      : e.endsWith("%")
      ? (e = t / 100)
      : e.endsWith("vw")
      ? (o = (t / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (o = (t / 100) * document.documentElement.clientHeight)
      : (e = t);
  }
  r(e) && (o = t * e);
  return n + o;
}
const Q = [0, 0];
function resolveOffset(e, t, n, o) {
  let i = Array.isArray(e) ? e : Q;
  let s = 0;
  let a = 0;
  if (r(e)) i = [e, e];
  else if (g(e)) {
    e = e.trim();
    i = e.includes(" ") ? e.split(" ") : [e, J[e] ? e : "0"];
  }
  s = resolveEdge(i[0], n, o);
  a = resolveEdge(i[1], t);
  return s - a;
}
const ee = { x: 0, y: 0 };
function resolveOffsets(e, t, n) {
  let { offset: o = Y.All } = n;
  const { target: i = e, axis: s = "y" } = n;
  const r = "y" === s ? "height" : "width";
  const a = i !== e ? calcInset(i, e) : ee;
  const c =
    i === e
      ? { width: e.scrollWidth, height: e.scrollHeight }
      : { width: i.clientWidth, height: i.clientHeight };
  const l = { width: e.clientWidth, height: e.clientHeight };
  t[s].offset.length = 0;
  let f = !t[s].interpolate;
  const u = o.length;
  for (let e = 0; e < u; e++) {
    const n = resolveOffset(o[e], l[r], c[r], a[s]);
    f || n === t[s].interpolatorOffsets[e] || (f = true);
    t[s].offset[e] = n;
  }
  if (f) {
    t[s].interpolate = y(m(u), t[s].offset);
    t[s].interpolatorOffsets = [...t[s].offset];
  }
  t[s].progress = t[s].interpolate(t[s].current);
}
function measure(e, t = e, n) {
  n.x.targetOffset = 0;
  n.y.targetOffset = 0;
  if (t !== e) {
    let o = t;
    while (o && o != e) {
      n.x.targetOffset += o.offsetLeft;
      n.y.targetOffset += o.offsetTop;
      o = o.offsetParent;
    }
  }
  n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth;
  n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight;
  n.x.containerLength = e.clientWidth;
  n.y.containerLength = e.clientHeight;
}
function createOnScrollHandler(e, t, n, o = {}) {
  const i = o.axis || "y";
  return {
    measure: () => measure(e, o.target, n),
    update: (t) => {
      updateScrollInfo(e, n, t);
      (o.offset || o.target) && resolveOffsets(e, n, o);
    },
    notify: "function" === typeof t ? () => t(n) : scrubAnimation(t, n[i]),
  };
}
function scrubAnimation(e, n) {
  e.pause();
  e.forEachNative((e, { easing: n }) => {
    var o, i;
    if (e.updateDuration) {
      n || (e.easing = t);
      e.updateDuration(1);
    } else {
      const t = { duration: 1e3 };
      n || (t.easing = "linear");
      null ===
        (i =
          null === (o = e.effect) || void 0 === o ? void 0 : o.updateTiming) ||
      void 0 === i
        ? void 0
        : i.call(o, t);
    }
  });
  return () => {
    e.currentTime = n.progress;
  };
}
const te = new WeakMap();
const ne = new WeakMap();
const oe = new WeakMap();
const getEventTarget = (e) => (e === document.documentElement ? window : e);
function scroll(e, t = {}) {
  var { container: n = document.documentElement } = t,
    o = b(t, ["container"]);
  let i = oe.get(n);
  if (!i) {
    i = new Set();
    oe.set(n, i);
  }
  const s = createScrollInfo();
  const r = createOnScrollHandler(n, e, s, o);
  i.add(r);
  if (!te.has(n)) {
    const listener = () => {
      const e = performance.now();
      for (const e of i) e.measure();
      for (const t of i) t.update(e);
      for (const e of i) e.notify();
    };
    te.set(n, listener);
    const e = getEventTarget(n);
    window.addEventListener("resize", listener, { passive: true });
    n !== document.documentElement && ne.set(n, resize(n, listener));
    e.addEventListener("scroll", listener, { passive: true });
  }
  const a = te.get(n);
  const c = requestAnimationFrame(a);
  return () => {
    var t;
    "function" !== typeof e && e.stop();
    cancelAnimationFrame(c);
    const o = oe.get(n);
    if (!o) return;
    o.delete(r);
    if (o.size) return;
    const i = te.get(n);
    te.delete(n);
    if (i) {
      getEventTarget(n).removeEventListener("scroll", i);
      null === (t = ne.get(n)) || void 0 === t ? void 0 : t();
      window.removeEventListener("resize", i);
    }
  };
}
function hasChanged(e, t) {
  return (
    typeof e !== typeof t ||
    (Array.isArray(e) && Array.isArray(t) ? !shallowCompare(e, t) : e !== t)
  );
}
function shallowCompare(e, t) {
  const n = t.length;
  if (n !== e.length) return false;
  for (let o = 0; o < n; o++) if (t[o] !== e[o]) return false;
  return true;
}
function isVariant(e) {
  return "object" === typeof e;
}
function resolveVariant(e, t) {
  return isVariant(e) ? e : e && t ? t[e] : void 0;
}
let ie;
function processScheduledAnimations() {
  if (!ie) return;
  const e = ie.sort(compareByDepth).map(fireAnimateUpdates);
  e.forEach(fireNext);
  e.forEach(fireNext);
  ie = void 0;
}
function scheduleAnimation(e) {
  if (ie) n(ie, e);
  else {
    ie = [e];
    requestAnimationFrame(processScheduledAnimations);
  }
}
function unscheduleAnimation(e) {
  ie && f(ie, e);
}
const compareByDepth = (e, t) => e.getDepth() - t.getDepth();
const fireAnimateUpdates = (e) => e.animateUpdates();
const fireNext = (e) => e.next();
const motionEvent = (e, t) => new CustomEvent(e, { detail: { target: t } });
function dispatchPointerEvent(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function dispatchViewEvent(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
const se = {
  isActive: (e) => Boolean(e.inView),
  subscribe: (e, { enable: t, disable: n }, { inViewOptions: o = {} }) => {
    const { once: i } = o,
      s = b(o, ["once"]);
    return inView$1(
      e,
      (o) => {
        t();
        dispatchViewEvent(e, "viewenter", o);
        if (!i)
          return (t) => {
            n();
            dispatchViewEvent(e, "viewleave", t);
          };
      },
      s
    );
  },
};
const mouseEvent = (e, t, n) => (o) => {
  if (!o.pointerType || "mouse" === o.pointerType) {
    n();
    dispatchPointerEvent(e, t, o);
  }
};
const re = {
  isActive: (e) => Boolean(e.hover),
  subscribe: (e, { enable: t, disable: n }) => {
    const o = mouseEvent(e, "hoverstart", t);
    const i = mouseEvent(e, "hoverend", n);
    e.addEventListener("pointerenter", o);
    e.addEventListener("pointerleave", i);
    return () => {
      e.removeEventListener("pointerenter", o);
      e.removeEventListener("pointerleave", i);
    };
  },
};
const ae = {
  isActive: (e) => Boolean(e.press),
  subscribe: (e, { enable: t, disable: n }) => {
    const onPointerUp = (t) => {
      n();
      dispatchPointerEvent(e, "pressend", t);
      window.removeEventListener("pointerup", onPointerUp);
    };
    const onPointerDown = (n) => {
      t();
      dispatchPointerEvent(e, "pressstart", n);
      window.addEventListener("pointerup", onPointerUp);
    };
    e.addEventListener("pointerdown", onPointerDown);
    return () => {
      e.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
    };
  },
};
const ce = { inView: se, hover: re, press: ae };
const le = ["initial", "animate", ...Object.keys(ce), "exit"];
const fe = new WeakMap();
function createMotionState(e = {}, t) {
  let n;
  let o = t ? t.getDepth() + 1 : 0;
  const i = { initial: true, animate: true };
  const s = {};
  const r = {};
  for (const n of le)
    r[n] =
      "string" === typeof e[n]
        ? e[n]
        : null === t || void 0 === t
        ? void 0
        : t.getContext()[n];
  const a = false === e.initial ? "animate" : "initial";
  let c = resolveVariant(e[a] || r[a], e.variants) || {},
    f = b(c, ["transition"]);
  const u = Object.assign({}, f);
  function* animateUpdates() {
    var t, o;
    const s = f;
    f = {};
    const r = {};
    for (const n of le) {
      if (!i[n]) continue;
      const s = resolveVariant(e[n]);
      if (s)
        for (const n in s)
          if ("transition" !== n) {
            f[n] = s[n];
            r[n] = getOptions(
              null !==
                (o =
                  null !== (t = s.transition) && void 0 !== t
                    ? t
                    : e.transition) && void 0 !== o
                ? o
                : {},
              n
            );
          }
    }
    const a = new Set([...Object.keys(f), ...Object.keys(s)]);
    const c = [];
    a.forEach((e) => {
      var t;
      void 0 === f[e] && (f[e] = u[e]);
      if (hasChanged(s[e], f[e])) {
        null !== (t = u[e]) && void 0 !== t ? t : (u[e] = H.get(n, e));
        c.push(animateStyle(n, e, f[e], r[e]));
      }
    });
    yield;
    const d = c.map((e) => e()).filter(Boolean);
    if (!d.length) return;
    const g = f;
    n.dispatchEvent(motionEvent("motionstart", g));
    Promise.all(d.map((e) => e.finished))
      .then(() => {
        n.dispatchEvent(motionEvent("motioncomplete", g));
      })
      .catch(l);
  }
  const setGesture = (e, t) => () => {
    i[e] = t;
    scheduleAnimation(d);
  };
  const updateGestureSubscriptions = () => {
    for (const t in ce) {
      const o = ce[t].isActive(e);
      const i = s[t];
      if (o && !i)
        s[t] = ce[t].subscribe(
          n,
          { enable: setGesture(t, true), disable: setGesture(t, false) },
          e
        );
      else if (!o && i) {
        i();
        delete s[t];
      }
    }
  };
  const d = {
    update: (t) => {
      if (n) {
        e = t;
        updateGestureSubscriptions();
        scheduleAnimation(d);
      }
    },
    setActive: (e, t) => {
      if (n) {
        i[e] = t;
        scheduleAnimation(d);
      }
    },
    animateUpdates: animateUpdates,
    getDepth: () => o,
    getTarget: () => f,
    getOptions: () => e,
    getContext: () => r,
    mount: (e) => {
      S(Boolean(e), "Animation state must be mounted with valid Element");
      n = e;
      fe.set(n, d);
      updateGestureSubscriptions();
      return () => {
        fe.delete(n);
        unscheduleAnimation(d);
        for (const e in s) s[e]();
      };
    },
    isMounted: () => Boolean(n),
  };
  return d;
}
function createStyles(e) {
  const t = {};
  const n = [];
  for (let o in e) {
    const i = e[o];
    if (isTransform(o)) {
      T[o] && (o = T[o]);
      n.push(o);
      o = asTransformCssVar(o);
    }
    let s = Array.isArray(i) ? i[0] : i;
    const a = k.get(o);
    a && (s = r(i) ? a.toDefaultUnit(i) : i);
    t[o] = s;
  }
  n.length && (t.transform = buildTransformTemplate(n));
  return t;
}
const camelLetterToPipeLetter = (e) => `-${e.toLowerCase()}`;
const camelToPipeCase = (e) => e.replace(/[A-Z]/g, camelLetterToPipeLetter);
function createStyleString(e = {}) {
  const t = createStyles(e);
  let n = "";
  for (const e in t) {
    n += e.startsWith("--") ? e : camelToPipeCase(e);
    n += `: ${t[e]}; `;
  }
  return n;
}
export {
  Y as ScrollOffset,
  animate,
  animateStyle,
  createMotionState,
  createStyleString,
  createStyles,
  getAnimationData,
  getStyleName,
  F as glide,
  inView$1 as inView,
  fe as mountedStates,
  resize,
  scroll,
  N as spring,
  stagger,
  H as style,
  timeline,
  withControls,
};

//# sourceMappingURL=index.es.js.map
