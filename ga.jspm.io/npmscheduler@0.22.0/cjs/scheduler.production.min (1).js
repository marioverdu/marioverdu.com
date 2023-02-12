import e from "process";
var n = {};
var t = e;
function f(e, n) {
  var t = e.length;
  e.push(n);
  e: for (; 0 < t; ) {
    var a = (t - 1) >>> 1,
      l = e[a];
    if (!(0 < g(l, n))) break e;
    (e[a] = n), (e[t] = l), (t = a);
  }
}
function h(e) {
  return 0 === e.length ? null : e[0];
}
function k(e) {
  if (0 === e.length) return null;
  var n = e[0],
    t = e.pop();
  if (t !== n) {
    e[0] = t;
    e: for (var a = 0, l = e.length, r = l >>> 1; a < r; ) {
      var i = 2 * (a + 1) - 1,
        u = e[i],
        o = i + 1,
        s = e[o];
      if (0 > g(u, t))
        o < l && 0 > g(s, u)
          ? ((e[a] = s), (e[o] = t), (a = o))
          : ((e[a] = u), (e[i] = t), (a = i));
      else {
        if (!(o < l && 0 > g(s, t))) break e;
        (e[a] = s), (e[o] = t), (a = o);
      }
    }
  }
  return n;
}
function g(e, n) {
  var t = e.sortIndex - n.sortIndex;
  return 0 !== t ? t : e.id - n.id;
}
if ("object" === typeof performance && "function" === typeof performance.now) {
  var a = performance;
  n.unstable_now = function () {
    return a.now();
  };
} else {
  var l = Date,
    r = l.now();
  n.unstable_now = function () {
    return l.now() - r;
  };
}
var i = [],
  u = [],
  o = 1,
  s = null,
  c = 3,
  b = !1,
  _ = !1,
  d = !1,
  p = "function" === typeof setTimeout ? setTimeout : null,
  v = "function" === typeof clearTimeout ? clearTimeout : null,
  y = "undefined" !== typeof t.nextTick ? t.nextTick : null;
"undefined" !== typeof navigator &&
  void 0 !== navigator.scheduling &&
  void 0 !== navigator.scheduling.isInputPending &&
  navigator.scheduling.isInputPending.bind(navigator.scheduling);
function G(e) {
  for (var n = h(u); null !== n; ) {
    if (null === n.callback) k(u);
    else {
      if (!(n.startTime <= e)) break;
      k(u), (n.sortIndex = n.expirationTime), f(i, n);
    }
    n = h(u);
  }
}
function H(e) {
  d = !1;
  G(e);
  if (!_)
    if (null !== h(i)) (_ = !0), I(J);
    else {
      var n = h(u);
      null !== n && K(H, n.startTime - e);
    }
}
function J(e, t) {
  _ = !1;
  d && ((d = !1), v(P), (P = -1));
  b = !0;
  var a = c;
  try {
    G(t);
    for (s = h(i); null !== s && (!(s.expirationTime > t) || (e && !M())); ) {
      var l = s.callback;
      if ("function" === typeof l) {
        s.callback = null;
        c = s.priorityLevel;
        var r = l(s.expirationTime <= t);
        t = n.unstable_now();
        "function" === typeof r ? (s.callback = r) : s === h(i) && k(i);
        G(t);
      } else k(i);
      s = h(i);
    }
    if (null !== s) var o = !0;
    else {
      var p = h(u);
      null !== p && K(H, p.startTime - t);
      o = !1;
    }
    return o;
  } finally {
    (s = null), (c = a), (b = !1);
  }
}
var m = !1,
  w = null,
  P = -1,
  x = 5,
  T = -1;
function M() {
  return !(n.unstable_now() - T < x);
}
function R() {
  if (null !== w) {
    var e = n.unstable_now();
    T = e;
    var t = !0;
    try {
      t = w(!0, e);
    } finally {
      t ? C() : ((m = !1), (w = null));
    }
  } else m = !1;
}
var C;
if ("function" === typeof y)
  C = function () {
    y(R);
  };
else if ("undefined" !== typeof MessageChannel) {
  var L = new MessageChannel(),
    F = L.port2;
  L.port1.onmessage = R;
  C = function () {
    F.postMessage(null);
  };
} else
  C = function () {
    p(R, 0);
  };
function I(e) {
  w = e;
  m || ((m = !0), C());
}
function K(e, t) {
  P = p(function () {
    e(n.unstable_now());
  }, t);
}
n.unstable_IdlePriority = 5;
n.unstable_ImmediatePriority = 1;
n.unstable_LowPriority = 4;
n.unstable_NormalPriority = 3;
n.unstable_Profiling = null;
n.unstable_UserBlockingPriority = 2;
n.unstable_cancelCallback = function (e) {
  e.callback = null;
};
n.unstable_continueExecution = function () {
  _ || b || ((_ = !0), I(J));
};
n.unstable_forceFrameRate = function (e) {
  0 > e || 125 < e
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      )
    : (x = 0 < e ? Math.floor(1e3 / e) : 5);
};
n.unstable_getCurrentPriorityLevel = function () {
  return c;
};
n.unstable_getFirstCallbackNode = function () {
  return h(i);
};
n.unstable_next = function (e) {
  switch (c) {
    case 1:
    case 2:
    case 3:
      var n = 3;
      break;
    default:
      n = c;
  }
  var t = c;
  c = n;
  try {
    return e();
  } finally {
    c = t;
  }
};
n.unstable_pauseExecution = function () {};
n.unstable_requestPaint = function () {};
n.unstable_runWithPriority = function (e, n) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var t = c;
  c = e;
  try {
    return n();
  } finally {
    c = t;
  }
};
n.unstable_scheduleCallback = function (e, t, a) {
  var l = n.unstable_now();
  "object" === typeof a && null !== a
    ? ((a = a.delay), (a = "number" === typeof a && 0 < a ? l + a : l))
    : (a = l);
  switch (e) {
    case 1:
      var r = -1;
      break;
    case 2:
      r = 250;
      break;
    case 5:
      r = 1073741823;
      break;
    case 4:
      r = 1e4;
      break;
    default:
      r = 5e3;
  }
  r = a + r;
  e = {
    id: o++,
    callback: t,
    priorityLevel: e,
    startTime: a,
    expirationTime: r,
    sortIndex: -1,
  };
  a > l
    ? ((e.sortIndex = a),
      f(u, e),
      null === h(i) &&
        e === h(u) &&
        (d ? (v(P), (P = -1)) : (d = !0), K(H, a - l)))
    : ((e.sortIndex = r), f(i, e), _ || b || ((_ = !0), I(J)));
  return e;
};
n.unstable_shouldYield = M;
n.unstable_wrapCallback = function (e) {
  var n = c;
  return function () {
    var t = c;
    c = n;
    try {
      return e.apply(this, arguments);
    } finally {
      c = t;
    }
  };
};
const E = n.unstable_now,
  N = n.unstable_IdlePriority,
  j = n.unstable_ImmediatePriority,
  q = n.unstable_LowPriority,
  B = n.unstable_NormalPriority,
  U = n.unstable_Profiling,
  W = n.unstable_UserBlockingPriority,
  Y = n.unstable_cancelCallback,
  D = n.unstable_continueExecution,
  z = n.unstable_forceFrameRate,
  A = n.unstable_getCurrentPriorityLevel,
  O = n.unstable_getFirstCallbackNode,
  Q = n.unstable_next,
  S = n.unstable_pauseExecution,
  V = n.unstable_requestPaint,
  X = n.unstable_runWithPriority,
  Z = n.unstable_scheduleCallback,
  $ = n.unstable_shouldYield,
  ee = n.unstable_wrapCallback;
export {
  n as default,
  N as unstable_IdlePriority,
  j as unstable_ImmediatePriority,
  q as unstable_LowPriority,
  B as unstable_NormalPriority,
  U as unstable_Profiling,
  W as unstable_UserBlockingPriority,
  Y as unstable_cancelCallback,
  D as unstable_continueExecution,
  z as unstable_forceFrameRate,
  A as unstable_getCurrentPriorityLevel,
  O as unstable_getFirstCallbackNode,
  Q as unstable_next,
  E as unstable_now,
  S as unstable_pauseExecution,
  V as unstable_requestPaint,
  X as unstable_runWithPriority,
  Z as unstable_scheduleCallback,
  $ as unstable_shouldYield,
  ee as unstable_wrapCallback,
};

//# sourceMappingURL=scheduler.production.min.js.map
