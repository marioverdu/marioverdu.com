var e = {};
var t = Symbol.for("react.element"),
  r = Symbol.for("react.portal"),
  n = Symbol.for("react.fragment"),
  o = Symbol.for("react.strict_mode"),
  u = Symbol.for("react.profiler"),
  a = Symbol.for("react.provider"),
  c = Symbol.for("react.context"),
  i = Symbol.for("react.forward_ref"),
  f = Symbol.for("react.suspense"),
  s = Symbol.for("react.memo"),
  l = Symbol.for("react.lazy"),
  p = Symbol.iterator;
function A(e) {
  if (null === e || "object" !== typeof e) return null;
  e = (p && e[p]) || e["@@iterator"];
  return "function" === typeof e ? e : null;
}
var y = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  d = Object.assign,
  _ = {};
function E(e, t, r) {
  this.props = e;
  this.context = t;
  this.refs = _;
  this.updater = r || y;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function (e, t) {
  if ("object" !== typeof e && "function" !== typeof e && null != e)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
E.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function F() {}
F.prototype = E.prototype;
function G(e, t, r) {
  this.props = e;
  this.context = t;
  this.refs = _;
  this.updater = r || y;
}
var m = (G.prototype = new F());
m.constructor = G;
d(m, E.prototype);
m.isPureReactComponent = !0;
var h = Array.isArray,
  v = Object.prototype.hasOwnProperty,
  b = { current: null },
  C = { key: !0, ref: !0, __self: !0, __source: !0 };
function M(e, r, n) {
  var o,
    u = {},
    a = null,
    c = null;
  if (null != r)
    for (o in (void 0 !== r.ref && (c = r.ref),
    void 0 !== r.key && (a = "" + r.key),
    r))
      v.call(r, o) && !C.hasOwnProperty(o) && (u[o] = r[o]);
  var i = arguments.length - 2;
  if (1 === i) u.children = n;
  else if (1 < i) {
    for (var f = Array(i), s = 0; s < i; s++) f[s] = arguments[s + 2];
    u.children = f;
  }
  if (e && e.defaultProps)
    for (o in ((i = e.defaultProps), i)) void 0 === u[o] && (u[o] = i[o]);
  return { $$typeof: t, type: e, key: a, ref: c, props: u, _owner: b.current };
}
function N(e, r) {
  return {
    $$typeof: t,
    type: e.type,
    key: r,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function O(e) {
  return "object" === typeof e && null !== e && e.$$typeof === t;
}
function escape(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (e) {
      return t[e];
    })
  );
}
var w = /\/+/g;
function Q(e, t) {
  return "object" === typeof e && null !== e && null != e.key
    ? escape("" + e.key)
    : t.toString(36);
}
function R(e, n, o, u, a) {
  var c = typeof e;
  ("undefined" !== c && "boolean" !== c) || (e = null);
  var i = !1;
  if (null === e) i = !0;
  else
    switch (c) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case t:
          case r:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (a = a(i)),
      (e = "" === u ? "." + Q(i, 0) : u),
      h(a)
        ? ((o = ""),
          null != e && (o = e.replace(w, "$&/") + "/"),
          R(a, n, o, "", function (e) {
            return e;
          }))
        : null != a &&
          (O(a) &&
            (a = N(
              a,
              o +
                (!a.key || (i && i.key === a.key)
                  ? ""
                  : ("" + a.key).replace(w, "$&/") + "/") +
                e
            )),
          n.push(a)),
      1
    );
  i = 0;
  u = "" === u ? "." : u + ":";
  if (h(e))
    for (var f = 0; f < e.length; f++) {
      c = e[f];
      var s = u + Q(c, f);
      i += R(c, n, o, s, a);
    }
  else if (((s = A(e)), "function" === typeof s))
    for (e = s.call(e), f = 0; !(c = e.next()).done; )
      (c = c.value), (s = u + Q(c, f++)), (i += R(c, n, o, s, a));
  else if ("object" === c)
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          ("[object Object]" === n
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function S(e, t, r) {
  if (null == e) return e;
  var n = [],
    o = 0;
  R(e, n, "", "", function (e) {
    return t.call(r, e, o++);
  });
  return n;
}
function T(e) {
  if (-1 === e._status) {
    var t = e._result;
    t = t();
    t.then(
      function (t) {
        (0 !== e._status && -1 !== e._status) ||
          ((e._status = 1), (e._result = t));
      },
      function (t) {
        (0 !== e._status && -1 !== e._status) ||
          ((e._status = 2), (e._result = t));
      }
    );
    -1 === e._status && ((e._status = 0), (e._result = t));
  }
  if (1 === e._status) return e._result.default;
  throw e._result;
}
var $ = { current: null },
  k = { transition: null },
  g = {
    ReactCurrentDispatcher: $,
    ReactCurrentBatchConfig: k,
    ReactCurrentOwner: b,
  };
e.Children = {
  map: S,
  forEach: function (e, t, r) {
    S(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    S(e, function () {
      t++;
    });
    return t;
  },
  toArray: function (e) {
    return (
      S(e, function (e) {
        return e;
      }) || []
    );
  },
  only: function (e) {
    if (!O(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
e.Component = E;
e.Fragment = n;
e.Profiler = u;
e.PureComponent = G;
e.StrictMode = o;
e.Suspense = f;
e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g;
e.cloneElement = function (e, r, n) {
  if (null === e || void 0 === e)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var o = d({}, e.props),
    u = e.key,
    a = e.ref,
    c = e._owner;
  if (null != r) {
    void 0 !== r.ref && ((a = r.ref), (c = b.current));
    void 0 !== r.key && (u = "" + r.key);
    if (e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (f in r)
      v.call(r, f) &&
        !C.hasOwnProperty(f) &&
        (o[f] = void 0 === r[f] && void 0 !== i ? i[f] : r[f]);
  }
  var f = arguments.length - 2;
  if (1 === f) o.children = n;
  else if (1 < f) {
    i = Array(f);
    for (var s = 0; s < f; s++) i[s] = arguments[s + 2];
    o.children = i;
  }
  return { $$typeof: t, type: e.type, key: u, ref: a, props: o, _owner: c };
};
e.createContext = function (e) {
  e = {
    $$typeof: c,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null,
  };
  e.Provider = { $$typeof: a, _context: e };
  return (e.Consumer = e);
};
e.createElement = M;
e.createFactory = function (e) {
  var t = M.bind(null, e);
  t.type = e;
  return t;
};
e.createRef = function () {
  return { current: null };
};
e.forwardRef = function (e) {
  return { $$typeof: i, render: e };
};
e.isValidElement = O;
e.lazy = function (e) {
  return { $$typeof: l, _payload: { _status: -1, _result: e }, _init: T };
};
e.memo = function (e, t) {
  return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
};
e.startTransition = function (e) {
  var t = k.transition;
  k.transition = {};
  try {
    e();
  } finally {
    k.transition = t;
  }
};
e.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
e.useCallback = function (e, t) {
  return $.current.useCallback(e, t);
};
e.useContext = function (e) {
  return $.current.useContext(e);
};
e.useDebugValue = function () {};
e.useDeferredValue = function (e) {
  return $.current.useDeferredValue(e);
};
e.useEffect = function (e, t) {
  return $.current.useEffect(e, t);
};
e.useId = function () {
  return $.current.useId();
};
e.useImperativeHandle = function (e, t, r) {
  return $.current.useImperativeHandle(e, t, r);
};
e.useInsertionEffect = function (e, t) {
  return $.current.useInsertionEffect(e, t);
};
e.useLayoutEffect = function (e, t) {
  return $.current.useLayoutEffect(e, t);
};
e.useMemo = function (e, t) {
  return $.current.useMemo(e, t);
};
e.useReducer = function (e, t, r) {
  return $.current.useReducer(e, t, r);
};
e.useRef = function (e) {
  return $.current.useRef(e);
};
e.useState = function (e) {
  return $.current.useState(e);
};
e.useSyncExternalStore = function (e, t, r) {
  return $.current.useSyncExternalStore(e, t, r);
};
e.useTransition = function () {
  return $.current.useTransition();
};
e.version = "18.1.0";
const j = e.Children,
  I = e.Component,
  x = e.Fragment,
  P = e.Profiler,
  D = e.PureComponent,
  V = e.StrictMode,
  L = e.Suspense,
  U = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  q = e.cloneElement,
  z = e.createContext,
  B = e.createElement,
  H = e.createFactory,
  W = e.createRef,
  Y = e.forwardRef,
  J = e.isValidElement,
  K = e.lazy,
  X = e.memo,
  Z = e.startTransition,
  ee = e.unstable_act,
  te = e.useCallback,
  re = e.useContext,
  ne = e.useDebugValue,
  oe = e.useDeferredValue,
  ue = e.useEffect,
  ae = e.useId,
  ce = e.useImperativeHandle,
  ie = e.useInsertionEffect,
  fe = e.useLayoutEffect,
  se = e.useMemo,
  le = e.useReducer,
  pe = e.useRef,
  ye = e.useState,
  de = e.useSyncExternalStore,
  _e = e.useTransition,
  me = e.version;
export {
  j as Children,
  I as Component,
  x as Fragment,
  P as Profiler,
  D as PureComponent,
  V as StrictMode,
  L as Suspense,
  U as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  q as cloneElement,
  z as createContext,
  B as createElement,
  H as createFactory,
  W as createRef,
  e as default,
  Y as forwardRef,
  J as isValidElement,
  K as lazy,
  X as memo,
  Z as startTransition,
  ee as unstable_act,
  te as useCallback,
  re as useContext,
  ne as useDebugValue,
  oe as useDeferredValue,
  ue as useEffect,
  ae as useId,
  ce as useImperativeHandle,
  ie as useInsertionEffect,
  fe as useLayoutEffect,
  se as useMemo,
  le as useReducer,
  pe as useRef,
  ye as useState,
  de as useSyncExternalStore,
  _e as useTransition,
  me as version,
};

//# sourceMappingURL=index.js.map
