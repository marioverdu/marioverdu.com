var h = Object.create;
var f = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var j = Object.getOwnPropertyNames;
var k = Object.getPrototypeOf,
  l = Object.prototype.hasOwnProperty;
var p = ((a) =>
  typeof require != "undefined"
    ? require
    : typeof Proxy != "undefined"
    ? new Proxy(a, {
        get: (b, c) => (typeof require != "undefined" ? require : b)[c],
      })
    : a)(function (a) {
  if (typeof require != "undefined") return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + a + '" is not supported');
});
var q = (a, b) => () => (a && (b = a((a = 0))), b);
var r = (a, b) => () => (b || a((b = { exports: {} }).exports, b), b.exports),
  s = (a, b) => {
    for (var c in b) f(a, c, { get: b[c], enumerable: !0 });
  },
  m = (a, b, c, d) => {
    if ((b && typeof b == "object") || typeof b == "function")
      for (let e of j(b))
        !l.call(a, e) &&
          e !== c &&
          f(a, e, {
            get: () => b[e],
            enumerable: !(d = i(b, e)) || d.enumerable,
          });
    return a;
  };
var t = (a, b, c) => (
  (c = a != null ? h(k(a)) : {}),
  m(
    b || !a || !a.__esModule
      ? f(c, "default", { value: a, enumerable: !0 })
      : c,
    a
  )
);
var g = (a, b, c) => {
  if (!b.has(a)) throw TypeError("Cannot " + c);
};
var n = (a, b, c) => (
    g(a, b, "read from private field"), c ? c.call(a) : b.get(a)
  ),
  u = (a, b, c) => {
    if (b.has(a))
      throw TypeError("Cannot add the same private member more than once");
    b instanceof WeakSet ? b.add(a) : b.set(a, c);
  },
  o = (a, b, c, d) => (
    g(a, b, "write to private field"), d ? d.call(a, c) : b.set(a, c), c
  ),
  v = (a, b, c, d) => ({
    set _(e) {
      o(a, b, e, c);
    },
    get _() {
      return n(a, b, d);
    },
  }),
  w = (a, b, c) => (g(a, b, "access private method"), c);
export {
  p as a,
  q as b,
  r as c,
  s as d,
  t as e,
  n as f,
  u as g,
  o as h,
  v as i,
  w as j,
};
//# sourceMappingURL=https://app.framerstatic.com/chunk-XVZMMKAV.js.map
