import * as r from "react";
import * as a from "scheduler";
var i = "default" in r ? r.default : r;
var o = "default" in a ? a.default : a;
var s = {};
var v = i,
  S = o;
function p(r) {
  for (
    var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, i = 1;
    i < arguments.length;
    i++
  )
    a += "&args[]=" + encodeURIComponent(arguments[i]);
  return (
    "Minified React error #" +
    r +
    "; visit " +
    a +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var x = new Set(),
  C = {};
function fa(r, a) {
  ha(r, a);
  ha(r + "Capture", a);
}
function ha(r, a) {
  C[r] = a;
  for (r = 0; r < a.length; r++) x.add(a[r]);
}
var z = !(
    "undefined" === typeof window ||
    "undefined" === typeof window.document ||
    "undefined" === typeof window.document.createElement
  ),
  N = Object.prototype.hasOwnProperty,
  j =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _ = {},
  P = {};
function na(r) {
  if (N.call(P, r)) return !0;
  if (N.call(_, r)) return !1;
  if (j.test(r)) return (P[r] = !0);
  _[r] = !0;
  return !1;
}
function oa(r, a, i, o) {
  if (null !== i && 0 === i.type) return !1;
  switch (typeof a) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      if (o) return !1;
      if (null !== i) return !i.acceptsBooleans;
      r = r.toLowerCase().slice(0, 5);
      return "data-" !== r && "aria-" !== r;
    default:
      return !1;
  }
}
function pa(r, a, i, o) {
  if (null === a || "undefined" === typeof a || oa(r, a, i, o)) return !0;
  if (o) return !1;
  if (null !== i)
    switch (i.type) {
      case 3:
        return !a;
      case 4:
        return !1 === a;
      case 5:
        return isNaN(a);
      case 6:
        return isNaN(a) || 1 > a;
    }
  return !1;
}
function t(r, a, i, o, s, v, S) {
  this.acceptsBooleans = 2 === a || 3 === a || 4 === a;
  this.attributeName = o;
  this.attributeNamespace = s;
  this.mustUseProperty = i;
  this.propertyName = r;
  this.type = a;
  this.sanitizeURL = v;
  this.removeEmptyString = S;
}
var L = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (r) {
    L[r] = new t(r, 0, !1, r, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (r) {
  var a = r[0];
  L[a] = new t(a, 1, !1, r[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (r) {
  L[r] = new t(r, 2, !1, r.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (r) {
  L[r] = new t(r, 2, !1, r, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (r) {
    L[r] = new t(r, 3, !1, r.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (r) {
  L[r] = new t(r, 3, !0, r, null, !1, !1);
});
["capture", "download"].forEach(function (r) {
  L[r] = new t(r, 4, !1, r, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (r) {
  L[r] = new t(r, 6, !1, r, null, !1, !1);
});
["rowSpan", "start"].forEach(function (r) {
  L[r] = new t(r, 5, !1, r.toLowerCase(), null, !1, !1);
});
var T = /[\-:]([a-z])/g;
function ra(r) {
  return r[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (r) {
    var a = r.replace(T, ra);
    L[a] = new t(a, 1, !1, r, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (r) {
    var a = r.replace(T, ra);
    L[a] = new t(a, 1, !1, r, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (r) {
  var a = r.replace(T, ra);
  L[a] = new t(a, 1, !1, r, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (r) {
  L[r] = new t(r, 1, !1, r.toLowerCase(), null, !1, !1);
});
L.xlinkHref = new t(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (r) {
  L[r] = new t(r, 1, !1, r.toLowerCase(), null, !0, !0);
});
function sa(r, a, i, o) {
  var s = L.hasOwnProperty(a) ? L[a] : null;
  (null !== s
    ? 0 !== s.type
    : o ||
      !(2 < a.length) ||
      ("o" !== a[0] && "O" !== a[0]) ||
      ("n" !== a[1] && "N" !== a[1])) &&
    (pa(a, i, s, o) && (i = null),
    o || null === s
      ? na(a) && (null === i ? r.removeAttribute(a) : r.setAttribute(a, "" + i))
      : s.mustUseProperty
      ? (r[s.propertyName] = null === i ? 3 !== s.type && "" : i)
      : ((a = s.attributeName),
        (o = s.attributeNamespace),
        null === i
          ? r.removeAttribute(a)
          : ((s = s.type),
            (i = 3 === s || (4 === s && !0 === i) ? "" : "" + i),
            o ? r.setAttributeNS(o, a, i) : r.setAttribute(a, i))));
}
var F = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  M = Symbol.for("react.element"),
  R = Symbol.for("react.portal"),
  I = Symbol.for("react.fragment"),
  A = Symbol.for("react.strict_mode"),
  B = Symbol.for("react.profiler"),
  $ = Symbol.for("react.provider"),
  V = Symbol.for("react.context"),
  W = Symbol.for("react.forward_ref"),
  H = Symbol.for("react.suspense"),
  K = Symbol.for("react.suspense_list"),
  Y = Symbol.for("react.memo"),
  X = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var Z = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var ee = Symbol.iterator;
function Ja(r) {
  if (null === r || "object" !== typeof r) return null;
  r = (ee && r[ee]) || r["@@iterator"];
  return "function" === typeof r ? r : null;
}
var ae,
  oe = Object.assign;
function La(r) {
  if (void 0 === ae)
    try {
      throw Error();
    } catch (r) {
      var a = r.stack.trim().match(/\n( *(at )?)/);
      ae = (a && a[1]) || "";
    }
  return "\n" + ae + r;
}
var ce = !1;
function Na(r, a) {
  if (!r || ce) return "";
  ce = !0;
  var i = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (a)
      if (
        ((a = function () {
          throw Error();
        }),
        Object.defineProperty(a.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        "object" === typeof Reflect && Reflect.construct)
      ) {
        try {
          Reflect.construct(a, []);
        } catch (r) {
          var o = r;
        }
        Reflect.construct(r, [], a);
      } else {
        try {
          a.call();
        } catch (r) {
          o = r;
        }
        r.call(a.prototype);
      }
    else {
      try {
        throw Error();
      } catch (r) {
        o = r;
      }
      r();
    }
  } catch (a) {
    if (a && o && "string" === typeof a.stack) {
      for (
        var s = a.stack.split("\n"),
          v = o.stack.split("\n"),
          S = s.length - 1,
          x = v.length - 1;
        1 <= S && 0 <= x && s[S] !== v[x];

      )
        x--;
      for (; 1 <= S && 0 <= x; S--, x--)
        if (s[S] !== v[x]) {
          if (1 !== S || 1 !== x)
            do {
              if ((S--, x--, 0 > x || s[S] !== v[x])) {
                var C = "\n" + s[S].replace(" at new ", " at ");
                r.displayName &&
                  C.includes("<anonymous>") &&
                  (C = C.replace("<anonymous>", r.displayName));
                return C;
              }
            } while (1 <= S && 0 <= x);
          break;
        }
    }
  } finally {
    (ce = !1), (Error.prepareStackTrace = i);
  }
  return (r = r ? r.displayName || r.name : "") ? La(r) : "";
}
function Oa(r) {
  switch (r.tag) {
    case 5:
      return La(r.type);
    case 16:
      return La("Lazy");
    case 13:
      return La("Suspense");
    case 19:
      return La("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (r = Na(r.type, !1)), r;
    case 11:
      return (r = Na(r.type.render, !1)), r;
    case 1:
      return (r = Na(r.type, !0)), r;
    default:
      return "";
  }
}
function Pa(r) {
  if (null == r) return null;
  if ("function" === typeof r) return r.displayName || r.name || null;
  if ("string" === typeof r) return r;
  switch (r) {
    case I:
      return "Fragment";
    case R:
      return "Portal";
    case B:
      return "Profiler";
    case A:
      return "StrictMode";
    case H:
      return "Suspense";
    case K:
      return "SuspenseList";
  }
  if ("object" === typeof r)
    switch (r.$$typeof) {
      case V:
        return (r.displayName || "Context") + ".Consumer";
      case $:
        return (r._context.displayName || "Context") + ".Provider";
      case W:
        var a = r.render;
        r = r.displayName;
        r ||
          ((r = a.displayName || a.name || ""),
          (r = "" !== r ? "ForwardRef(" + r + ")" : "ForwardRef"));
        return r;
      case Y:
        return (
          (a = r.displayName || null), null !== a ? a : Pa(r.type) || "Memo"
        );
      case X:
        a = r._payload;
        r = r._init;
        try {
          return Pa(r(a));
        } catch (r) {}
    }
  return null;
}
function Qa(r) {
  var a = r.type;
  switch (r.tag) {
    case 24:
      return "Cache";
    case 9:
      return (a.displayName || "Context") + ".Consumer";
    case 10:
      return (a._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (r = a.render),
        (r = r.displayName || r.name || ""),
        a.displayName || ("" !== r ? "ForwardRef(" + r + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return a;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pa(a);
    case 8:
      return a === A ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
  }
  return null;
}
function Ra(r) {
  switch (typeof r) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return r;
    case "object":
      return r;
    default:
      return "";
  }
}
function Sa(r) {
  var a = r.type;
  return (
    (r = r.nodeName) &&
    "input" === r.toLowerCase() &&
    ("checkbox" === a || "radio" === a)
  );
}
function Ta(r) {
  var a = Sa(r) ? "checked" : "value",
    i = Object.getOwnPropertyDescriptor(r.constructor.prototype, a),
    o = "" + r[a];
  if (
    !r.hasOwnProperty(a) &&
    "undefined" !== typeof i &&
    "function" === typeof i.get &&
    "function" === typeof i.set
  ) {
    var s = i.get,
      v = i.set;
    Object.defineProperty(r, a, {
      configurable: !0,
      get: function () {
        return s.call(this);
      },
      set: function (r) {
        o = "" + r;
        v.call(this, r);
      },
    });
    Object.defineProperty(r, a, { enumerable: i.enumerable });
    return {
      getValue: function () {
        return o;
      },
      setValue: function (r) {
        o = "" + r;
      },
      stopTracking: function () {
        r._valueTracker = null;
        delete r[a];
      },
    };
  }
}
function Ua(r) {
  r._valueTracker || (r._valueTracker = Ta(r));
}
function Va(r) {
  if (!r) return !1;
  var a = r._valueTracker;
  if (!a) return !0;
  var i = a.getValue();
  var o = "";
  r && (o = Sa(r) ? (r.checked ? "true" : "false") : r.value);
  r = o;
  return r !== i && (a.setValue(r), !0);
}
function Wa(r) {
  r = r || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof r) return null;
  try {
    return r.activeElement || r.body;
  } catch (a) {
    return r.body;
  }
}
function Xa(r, a) {
  var i = a.checked;
  return oe({}, a, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != i ? i : r._wrapperState.initialChecked,
  });
}
function Ya(r, a) {
  var i = null == a.defaultValue ? "" : a.defaultValue,
    o = null != a.checked ? a.checked : a.defaultChecked;
  i = Ra(null != a.value ? a.value : i);
  r._wrapperState = {
    initialChecked: o,
    initialValue: i,
    controlled:
      "checkbox" === a.type || "radio" === a.type
        ? null != a.checked
        : null != a.value,
  };
}
function Za(r, a) {
  a = a.checked;
  null != a && sa(r, "checked", a, !1);
}
function $a(r, a) {
  Za(r, a);
  var i = Ra(a.value),
    o = a.type;
  if (null != i)
    "number" === o
      ? ((0 === i && "" === r.value) || r.value != i) && (r.value = "" + i)
      : r.value !== "" + i && (r.value = "" + i);
  else if ("submit" === o || "reset" === o) {
    r.removeAttribute("value");
    return;
  }
  a.hasOwnProperty("value")
    ? bb(r, a.type, i)
    : a.hasOwnProperty("defaultValue") && bb(r, a.type, Ra(a.defaultValue));
  null == a.checked &&
    null != a.defaultChecked &&
    (r.defaultChecked = !!a.defaultChecked);
}
function cb(r, a, i) {
  if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
    var o = a.type;
    if (
      !(
        ("submit" !== o && "reset" !== o) ||
        (void 0 !== a.value && null !== a.value)
      )
    )
      return;
    a = "" + r._wrapperState.initialValue;
    i || a === r.value || (r.value = a);
    r.defaultValue = a;
  }
  i = r.name;
  "" !== i && (r.name = "");
  r.defaultChecked = !!r._wrapperState.initialChecked;
  "" !== i && (r.name = i);
}
function bb(r, a, i) {
  ("number" === a && Wa(r.ownerDocument) === r) ||
    (null == i
      ? (r.defaultValue = "" + r._wrapperState.initialValue)
      : r.defaultValue !== "" + i && (r.defaultValue = "" + i));
}
var de = Array.isArray;
function eb(r, a, i, o) {
  r = r.options;
  if (a) {
    a = {};
    for (var s = 0; s < i.length; s++) a["$" + i[s]] = !0;
    for (i = 0; i < r.length; i++)
      (s = a.hasOwnProperty("$" + r[i].value)),
        r[i].selected !== s && (r[i].selected = s),
        s && o && (r[i].defaultSelected = !0);
  } else {
    i = "" + Ra(i);
    a = null;
    for (s = 0; s < r.length; s++) {
      if (r[s].value === i) {
        r[s].selected = !0;
        o && (r[s].defaultSelected = !0);
        return;
      }
      null !== a || r[s].disabled || (a = r[s]);
    }
    null !== a && (a.selected = !0);
  }
}
function fb(r, a) {
  if (null != a.dangerouslySetInnerHTML) throw Error(p(91));
  return oe({}, a, {
    value: void 0,
    defaultValue: void 0,
    children: "" + r._wrapperState.initialValue,
  });
}
function gb(r, a) {
  var i = a.value;
  if (null == i) {
    i = a.children;
    a = a.defaultValue;
    if (null != i) {
      if (null != a) throw Error(p(92));
      if (de(i)) {
        if (1 < i.length) throw Error(p(93));
        i = i[0];
      }
      a = i;
    }
    null == a && (a = "");
    i = a;
  }
  r._wrapperState = { initialValue: Ra(i) };
}
function hb(r, a) {
  var i = Ra(a.value),
    o = Ra(a.defaultValue);
  null != i &&
    ((i = "" + i),
    i !== r.value && (r.value = i),
    null == a.defaultValue && r.defaultValue !== i && (r.defaultValue = i));
  null != o && (r.defaultValue = "" + o);
}
function ib(r) {
  var a = r.textContent;
  a === r._wrapperState.initialValue && "" !== a && null !== a && (r.value = a);
}
function jb(r) {
  switch (r) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kb(r, a) {
  return null == r || "http://www.w3.org/1999/xhtml" === r
    ? jb(a)
    : "http://www.w3.org/2000/svg" === r && "foreignObject" === a
    ? "http://www.w3.org/1999/xhtml"
    : r;
}
var pe,
  he = (function (r) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
      ? function (a, i, o, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return r(a, i, o, s);
          });
        }
      : r;
  })(function (r, a) {
    if ("http://www.w3.org/2000/svg" !== r.namespaceURI || "innerHTML" in r)
      r.innerHTML = a;
    else {
      pe = pe || document.createElement("div");
      pe.innerHTML = "<svg>" + a.valueOf().toString() + "</svg>";
      for (a = pe.firstChild; r.firstChild; ) r.removeChild(r.firstChild);
      for (; a.firstChild; ) r.appendChild(a.firstChild);
    }
  });
function nb(r, a) {
  if (a) {
    var i = r.firstChild;
    if (i && i === r.lastChild && 3 === i.nodeType) {
      i.nodeValue = a;
      return;
    }
  }
  r.textContent = a;
}
var ve = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  be = ["Webkit", "ms", "Moz", "O"];
Object.keys(ve).forEach(function (r) {
  be.forEach(function (a) {
    a = a + r.charAt(0).toUpperCase() + r.substring(1);
    ve[a] = ve[r];
  });
});
function qb(r, a, i) {
  return null == a || "boolean" === typeof a || "" === a
    ? ""
    : i || "number" !== typeof a || 0 === a || (ve.hasOwnProperty(r) && ve[r])
    ? ("" + a).trim()
    : a + "px";
}
function rb(r, a) {
  r = r.style;
  for (var i in a)
    if (a.hasOwnProperty(i)) {
      var o = 0 === i.indexOf("--"),
        s = qb(i, a[i], o);
      "float" === i && (i = "cssFloat");
      o ? r.setProperty(i, s) : (r[i] = s);
    }
}
var ye = oe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function tb(r, a) {
  if (a) {
    if (ye[r] && (null != a.children || null != a.dangerouslySetInnerHTML))
      throw Error(p(137, r));
    if (null != a.dangerouslySetInnerHTML) {
      if (null != a.children) throw Error(p(60));
      if (
        "object" !== typeof a.dangerouslySetInnerHTML ||
        !("__html" in a.dangerouslySetInnerHTML)
      )
        throw Error(p(61));
    }
    if (null != a.style && "object" !== typeof a.style) throw Error(p(62));
  }
}
function ub(r, a) {
  if (-1 === r.indexOf("-")) return "string" === typeof a.is;
  switch (r) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ke = null;
function wb(r) {
  r = r.target || r.srcElement || window;
  r.correspondingUseElement && (r = r.correspondingUseElement);
  return 3 === r.nodeType ? r.parentNode : r;
}
var we = null,
  Se = null,
  xe = null;
function Ab(r) {
  if ((r = Bb(r))) {
    if ("function" !== typeof we) throw Error(p(280));
    var a = r.stateNode;
    a && ((a = Cb(a)), we(r.stateNode, r.type, a));
  }
}
function Db(r) {
  Se ? (xe ? xe.push(r) : (xe = [r])) : (Se = r);
}
function Eb() {
  if (Se) {
    var r = Se,
      a = xe;
    xe = Se = null;
    Ab(r);
    if (a) for (r = 0; r < a.length; r++) Ab(a[r]);
  }
}
function Fb(r, a) {
  return r(a);
}
function Gb() {}
var _e = !1;
function Ib(r, a, i) {
  if (_e) return r(a, i);
  _e = !0;
  try {
    return Fb(r, a, i);
  } finally {
    ((_e = !1), null !== Se || null !== xe) && (Gb(), Eb());
  }
}
function Jb(r, a) {
  var i = r.stateNode;
  if (null === i) return null;
  var o = Cb(i);
  if (null === o) return null;
  i = o[a];
  e: switch (a) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (o = !o.disabled) ||
        ((r = r.type),
        (o = !(
          "button" === r ||
          "input" === r ||
          "select" === r ||
          "textarea" === r
        )));
      r = !o;
      break e;
    default:
      r = !1;
  }
  if (r) return null;
  if (i && "function" !== typeof i) throw Error(p(231, a, typeof i));
  return i;
}
var Pe = !1;
if (z)
  try {
    var Oe = {};
    Object.defineProperty(Oe, "passive", {
      get: function () {
        Pe = !0;
      },
    });
    window.addEventListener("test", Oe, Oe);
    window.removeEventListener("test", Oe, Oe);
  } catch (r) {
    Pe = !1;
  }
function Mb(r, a, i, o, s, v, S, x, C) {
  var z = Array.prototype.slice.call(arguments, 3);
  try {
    a.apply(i, z);
  } catch (r) {
    this.onError(r);
  }
}
var Re = !1,
  Qe = null,
  $e = !1,
  Ve = null,
  We = {
    onError: function (r) {
      Re = !0;
      Qe = r;
    },
  };
function Sb(r, a, i, o, s, v, S, x, C) {
  Re = !1;
  Qe = null;
  Mb.apply(We, arguments);
}
function Tb(r, a, i, o, s, v, S, x, C) {
  Sb.apply(this, arguments);
  if (Re) {
    if (!Re) throw Error(p(198));
    var z = Qe;
    Re = !1;
    Qe = null;
    $e || (($e = !0), (Ve = z));
  }
}
function Ub(r) {
  var a = r,
    i = r;
  if (r.alternate) for (; a.return; ) a = a.return;
  else {
    r = a;
    do {
      (a = r), 0 !== (4098 & a.flags) && (i = a.return), (r = a.return);
    } while (r);
  }
  return 3 === a.tag ? i : null;
}
function Vb(r) {
  if (13 === r.tag) {
    var a = r.memoizedState;
    null === a && ((r = r.alternate), null !== r && (a = r.memoizedState));
    if (null !== a) return a.dehydrated;
  }
  return null;
}
function Wb(r) {
  if (Ub(r) !== r) throw Error(p(188));
}
function Xb(r) {
  var a = r.alternate;
  if (!a) {
    a = Ub(r);
    if (null === a) throw Error(p(188));
    return a !== r ? null : r;
  }
  for (var i = r, o = a; ; ) {
    var s = i.return;
    if (null === s) break;
    var v = s.alternate;
    if (null === v) {
      o = s.return;
      if (null !== o) {
        i = o;
        continue;
      }
      break;
    }
    if (s.child === v.child) {
      for (v = s.child; v; ) {
        if (v === i) return Wb(s), r;
        if (v === o) return Wb(s), a;
        v = v.sibling;
      }
      throw Error(p(188));
    }
    if (i.return !== o.return) (i = s), (o = v);
    else {
      for (var S = !1, x = s.child; x; ) {
        if (x === i) {
          S = !0;
          i = s;
          o = v;
          break;
        }
        if (x === o) {
          S = !0;
          o = s;
          i = v;
          break;
        }
        x = x.sibling;
      }
      if (!S) {
        for (x = v.child; x; ) {
          if (x === i) {
            S = !0;
            i = v;
            o = s;
            break;
          }
          if (x === o) {
            S = !0;
            o = v;
            i = s;
            break;
          }
          x = x.sibling;
        }
        if (!S) throw Error(p(189));
      }
    }
    if (i.alternate !== o) throw Error(p(190));
  }
  if (3 !== i.tag) throw Error(p(188));
  return i.stateNode.current === i ? r : a;
}
function Yb(r) {
  r = Xb(r);
  return null !== r ? Zb(r) : null;
}
function Zb(r) {
  if (5 === r.tag || 6 === r.tag) return r;
  for (r = r.child; null !== r; ) {
    var a = Zb(r);
    if (null !== a) return a;
    r = r.sibling;
  }
  return null;
}
var Ge = S.unstable_scheduleCallback,
  Xe = S.unstable_cancelCallback,
  Ze = S.unstable_shouldYield,
  en = S.unstable_requestPaint,
  nn = S.unstable_now,
  tn = S.unstable_getCurrentPriorityLevel,
  rn = S.unstable_ImmediatePriority,
  ln = S.unstable_UserBlockingPriority,
  an = S.unstable_NormalPriority,
  un = S.unstable_LowPriority,
  on = S.unstable_IdlePriority,
  sn = null,
  cn = null;
function lc(r) {
  if (cn && "function" === typeof cn.onCommitFiberRoot)
    try {
      cn.onCommitFiberRoot(sn, r, void 0, 128 === (128 & r.current.flags));
    } catch (r) {}
}
var fn = Math.clz32 ? Math.clz32 : mc,
  dn = Math.log,
  pn = Math.LN2;
function mc(r) {
  r >>>= 0;
  return 0 === r ? 32 : (31 - ((dn(r) / pn) | 0)) | 0;
}
var hn = 64,
  gn = 4194304;
function sc(r) {
  switch (r & -r) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & r;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & r;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return r;
  }
}
function tc(r, a) {
  var i = r.pendingLanes;
  if (0 === i) return 0;
  var o = 0,
    s = r.suspendedLanes,
    v = r.pingedLanes,
    S = 268435455 & i;
  if (0 !== S) {
    var x = S & ~s;
    0 !== x ? (o = sc(x)) : ((v &= S), 0 !== v && (o = sc(v)));
  } else (S = i & ~s), 0 !== S ? (o = sc(S)) : 0 !== v && (o = sc(v));
  if (0 === o) return 0;
  if (
    0 !== a &&
    a !== o &&
    0 === (a & s) &&
    ((s = o & -o), (v = a & -a), s >= v || (16 === s && 0 !== (4194240 & v)))
  )
    return a;
  0 !== (4 & o) && (o |= 16 & i);
  a = r.entangledLanes;
  if (0 !== a)
    for (r = r.entanglements, a &= o; 0 < a; )
      (i = 31 - fn(a)), (s = 1 << i), (o |= r[i]), (a &= ~s);
  return o;
}
function uc(r, a) {
  switch (r) {
    case 1:
    case 2:
    case 4:
      return a + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vc(r, a) {
  for (
    var i = r.suspendedLanes,
      o = r.pingedLanes,
      s = r.expirationTimes,
      v = r.pendingLanes;
    0 < v;

  ) {
    var S = 31 - fn(v),
      x = 1 << S,
      C = s[S];
    -1 === C
      ? (0 !== (x & i) && 0 === (x & o)) || (s[S] = uc(x, a))
      : C <= a && (r.expiredLanes |= x);
    v &= ~x;
  }
}
function wc(r) {
  r = -1073741825 & r.pendingLanes;
  return 0 !== r ? r : 1073741824 & r ? 1073741824 : 0;
}
function xc() {
  var r = hn;
  hn <<= 1;
  0 === (4194240 & hn) && (hn = 64);
  return r;
}
function yc(r) {
  for (var a = [], i = 0; 31 > i; i++) a.push(r);
  return a;
}
function zc(r, a, i) {
  r.pendingLanes |= a;
  536870912 !== a && ((r.suspendedLanes = 0), (r.pingedLanes = 0));
  r = r.eventTimes;
  a = 31 - fn(a);
  r[a] = i;
}
function Ac(r, a) {
  var i = r.pendingLanes & ~a;
  r.pendingLanes = a;
  r.suspendedLanes = 0;
  r.pingedLanes = 0;
  r.expiredLanes &= a;
  r.mutableReadLanes &= a;
  r.entangledLanes &= a;
  a = r.entanglements;
  var o = r.eventTimes;
  for (r = r.expirationTimes; 0 < i; ) {
    var s = 31 - fn(i),
      v = 1 << s;
    a[s] = 0;
    o[s] = -1;
    r[s] = -1;
    i &= ~v;
  }
}
function Bc(r, a) {
  var i = (r.entangledLanes |= a);
  for (r = r.entanglements; i; ) {
    var o = 31 - fn(i),
      s = 1 << o;
    (s & a) | (r[o] & a) && (r[o] |= a);
    i &= ~s;
  }
}
var mn = 0;
function Cc(r) {
  r &= -r;
  return 1 < r ? (4 < r ? (0 !== (268435455 & r) ? 16 : 536870912) : 4) : 1;
}
var vn,
  bn,
  yn,
  kn,
  wn,
  Sn = !1,
  En = [],
  xn = null,
  Cn = null,
  zn = null,
  Nn = new Map(),
  jn = new Map(),
  _n = [],
  Pn =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Rc(r, a) {
  switch (r) {
    case "focusin":
    case "focusout":
      xn = null;
      break;
    case "dragenter":
    case "dragleave":
      Cn = null;
      break;
    case "mouseover":
    case "mouseout":
      zn = null;
      break;
    case "pointerover":
    case "pointerout":
      Nn.delete(a.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jn.delete(a.pointerId);
  }
}
function Sc(r, a, i, o, s, v) {
  if (null === r || r.nativeEvent !== v)
    return (
      (r = {
        blockedOn: a,
        domEventName: i,
        eventSystemFlags: o,
        nativeEvent: v,
        targetContainers: [s],
      }),
      null !== a && ((a = Bb(a)), null !== a && bn(a)),
      r
    );
  r.eventSystemFlags |= o;
  a = r.targetContainers;
  null !== s && -1 === a.indexOf(s) && a.push(s);
  return r;
}
function Tc(r, a, i, o, s) {
  switch (a) {
    case "focusin":
      return (xn = Sc(xn, r, a, i, o, s)), !0;
    case "dragenter":
      return (Cn = Sc(Cn, r, a, i, o, s)), !0;
    case "mouseover":
      return (zn = Sc(zn, r, a, i, o, s)), !0;
    case "pointerover":
      var v = s.pointerId;
      Nn.set(v, Sc(Nn.get(v) || null, r, a, i, o, s));
      return !0;
    case "gotpointercapture":
      return (
        (v = s.pointerId), jn.set(v, Sc(jn.get(v) || null, r, a, i, o, s)), !0
      );
  }
  return !1;
}
function Uc(r) {
  var a = Vc(r.target);
  if (null !== a) {
    var i = Ub(a);
    if (null !== i)
      if (((a = i.tag), 13 === a)) {
        if (((a = Vb(i)), null !== a)) {
          r.blockedOn = a;
          wn(r.priority, function () {
            yn(i);
          });
          return;
        }
      } else if (3 === a && i.stateNode.current.memoizedState.isDehydrated) {
        r.blockedOn = 3 === i.tag ? i.stateNode.containerInfo : null;
        return;
      }
  }
  r.blockedOn = null;
}
function Wc(r) {
  if (null !== r.blockedOn) return !1;
  for (var a = r.targetContainers; 0 < a.length; ) {
    var i = Xc(r.domEventName, r.eventSystemFlags, a[0], r.nativeEvent);
    if (null !== i)
      return (a = Bb(i)), null !== a && bn(a), (r.blockedOn = i), !1;
    i = r.nativeEvent;
    var o = new i.constructor(i.type, i);
    ke = o;
    i.target.dispatchEvent(o);
    ke = null;
    a.shift();
  }
  return !0;
}
function Yc(r, a, i) {
  Wc(r) && i.delete(a);
}
function Zc() {
  Sn = !1;
  null !== xn && Wc(xn) && (xn = null);
  null !== Cn && Wc(Cn) && (Cn = null);
  null !== zn && Wc(zn) && (zn = null);
  Nn.forEach(Yc);
  jn.forEach(Yc);
}
function $c(r, a) {
  r.blockedOn === a &&
    ((r.blockedOn = null),
    Sn ||
      ((Sn = !0), S.unstable_scheduleCallback(S.unstable_NormalPriority, Zc)));
}
function ad(r) {
  function b(a) {
    return $c(a, r);
  }
  if (0 < En.length) {
    $c(En[0], r);
    for (var a = 1; a < En.length; a++) {
      var i = En[a];
      i.blockedOn === r && (i.blockedOn = null);
    }
  }
  null !== xn && $c(xn, r);
  null !== Cn && $c(Cn, r);
  null !== zn && $c(zn, r);
  Nn.forEach(b);
  jn.forEach(b);
  for (a = 0; a < _n.length; a++)
    (i = _n[a]), i.blockedOn === r && (i.blockedOn = null);
  for (; 0 < _n.length && ((a = _n[0]), null === a.blockedOn); )
    Uc(a), null === a.blockedOn && _n.shift();
}
var Ln = F.ReactCurrentBatchConfig,
  Tn = !0;
function dd(r, a, i, o) {
  var s = mn,
    v = Ln.transition;
  Ln.transition = null;
  try {
    (mn = 1), ed(r, a, i, o);
  } finally {
    (mn = s), (Ln.transition = v);
  }
}
function fd(r, a, i, o) {
  var s = mn,
    v = Ln.transition;
  Ln.transition = null;
  try {
    (mn = 4), ed(r, a, i, o);
  } finally {
    (mn = s), (Ln.transition = v);
  }
}
function ed(r, a, i, o) {
  if (Tn) {
    var s = Xc(r, a, i, o);
    if (null === s) gd(r, a, o, Dn, i), Rc(r, o);
    else if (Tc(s, r, a, i, o)) o.stopPropagation();
    else if ((Rc(r, o), 4 & a && -1 < Pn.indexOf(r))) {
      for (; null !== s; ) {
        var v = Bb(s);
        null !== v && vn(v);
        v = Xc(r, a, i, o);
        null === v && gd(r, a, o, Dn, i);
        if (v === s) break;
        s = v;
      }
      null !== s && o.stopPropagation();
    } else gd(r, a, o, null, i);
  }
}
var Dn = null;
function Xc(r, a, i, o) {
  Dn = null;
  r = wb(o);
  r = Vc(r);
  if (null !== r)
    if (((a = Ub(r)), null === a)) r = null;
    else if (((i = a.tag), 13 === i)) {
      r = Vb(a);
      if (null !== r) return r;
      r = null;
    } else if (3 === i) {
      if (a.stateNode.current.memoizedState.isDehydrated)
        return 3 === a.tag ? a.stateNode.containerInfo : null;
      r = null;
    } else a !== r && (r = null);
  Dn = r;
  return null;
}
function id(r) {
  switch (r) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (tn()) {
        case rn:
          return 1;
        case ln:
          return 4;
        case an:
        case un:
          return 16;
        case on:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var On = null,
  Fn = null,
  Mn = null;
function md() {
  if (Mn) return Mn;
  var r,
    a,
    i = Fn,
    o = i.length,
    s = "value" in On ? On.value : On.textContent,
    v = s.length;
  for (r = 0; r < o && i[r] === s[r]; r++);
  var S = o - r;
  for (a = 1; a <= S && i[o - a] === s[v - a]; a++);
  return (Mn = s.slice(r, 1 < a ? 1 - a : void 0));
}
function nd(r) {
  var a = r.keyCode;
  "charCode" in r
    ? ((r = r.charCode), 0 === r && 13 === a && (r = 13))
    : (r = a);
  10 === r && (r = 13);
  return 32 <= r || 13 === r ? r : 0;
}
function od() {
  return !0;
}
function pd() {
  return !1;
}
function qd(r) {
  function b(a, i, o, s, v) {
    this._reactName = a;
    this._targetInst = o;
    this.type = i;
    this.nativeEvent = s;
    this.target = v;
    this.currentTarget = null;
    for (var S in r)
      r.hasOwnProperty(S) && ((a = r[S]), (this[S] = a ? a(s) : s[S]));
    this.isDefaultPrevented = (
      null != s.defaultPrevented ? s.defaultPrevented : !1 === s.returnValue
    )
      ? od
      : pd;
    this.isPropagationStopped = pd;
    return this;
  }
  oe(b.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var r = this.nativeEvent;
      r &&
        (r.preventDefault
          ? r.preventDefault()
          : "unknown" !== typeof r.returnValue && (r.returnValue = !1),
        (this.isDefaultPrevented = od));
    },
    stopPropagation: function () {
      var r = this.nativeEvent;
      r &&
        (r.stopPropagation
          ? r.stopPropagation()
          : "unknown" !== typeof r.cancelBubble && (r.cancelBubble = !0),
        (this.isPropagationStopped = od));
    },
    persist: function () {},
    isPersistent: od,
  });
  return b;
}
var Rn,
  Un,
  In,
  An = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (r) {
      return r.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Qn = qd(An),
  Bn = oe({}, An, { view: 0, detail: 0 }),
  $n = qd(Bn),
  Vn = oe({}, Bn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: yd,
    button: 0,
    buttons: 0,
    relatedTarget: function (r) {
      return void 0 === r.relatedTarget
        ? r.fromElement === r.srcElement
          ? r.toElement
          : r.fromElement
        : r.relatedTarget;
    },
    movementX: function (r) {
      if ("movementX" in r) return r.movementX;
      r !== In &&
        (In && "mousemove" === r.type
          ? ((Rn = r.screenX - In.screenX), (Un = r.screenY - In.screenY))
          : (Un = Rn = 0),
        (In = r));
      return Rn;
    },
    movementY: function (r) {
      return "movementY" in r ? r.movementY : Un;
    },
  }),
  Wn = qd(Vn),
  Hn = oe({}, Vn, { dataTransfer: 0 }),
  qn = qd(Hn),
  Gn = oe({}, Bn, { relatedTarget: 0 }),
  Jn = qd(Gn),
  Kn = oe({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yn = qd(Kn),
  Xn = oe({}, An, {
    clipboardData: function (r) {
      return "clipboardData" in r ? r.clipboardData : window.clipboardData;
    },
  }),
  Zn = qd(Xn),
  et = oe({}, An, { data: 0 }),
  nt = qd(et),
  tt = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  rt = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  lt = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Od(r) {
  var a = this.nativeEvent;
  return a.getModifierState ? a.getModifierState(r) : !!(r = lt[r]) && !!a[r];
}
function yd() {
  return Od;
}
var at = oe({}, Bn, {
    key: function (r) {
      if (r.key) {
        var a = tt[r.key] || r.key;
        if ("Unidentified" !== a) return a;
      }
      return "keypress" === r.type
        ? ((r = nd(r)), 13 === r ? "Enter" : String.fromCharCode(r))
        : "keydown" === r.type || "keyup" === r.type
        ? rt[r.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yd,
    charCode: function (r) {
      return "keypress" === r.type ? nd(r) : 0;
    },
    keyCode: function (r) {
      return "keydown" === r.type || "keyup" === r.type ? r.keyCode : 0;
    },
    which: function (r) {
      return "keypress" === r.type
        ? nd(r)
        : "keydown" === r.type || "keyup" === r.type
        ? r.keyCode
        : 0;
    },
  }),
  it = qd(at),
  ut = oe({}, Vn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ot = qd(ut),
  st = oe({}, Bn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yd,
  }),
  ct = qd(st),
  ft = oe({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dt = qd(ft),
  pt = oe({}, Vn, {
    deltaX: function (r) {
      return "deltaX" in r ? r.deltaX : "wheelDeltaX" in r ? -r.wheelDeltaX : 0;
    },
    deltaY: function (r) {
      return "deltaY" in r
        ? r.deltaY
        : "wheelDeltaY" in r
        ? -r.wheelDeltaY
        : "wheelDelta" in r
        ? -r.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ht = qd(pt),
  gt = [9, 13, 27, 32],
  mt = z && "CompositionEvent" in window,
  vt = null;
z && "documentMode" in document && (vt = document.documentMode);
var bt = z && "TextEvent" in window && !vt,
  yt = z && (!mt || (vt && 8 < vt && 11 >= vt)),
  kt = String.fromCharCode(32),
  wt = !1;
function fe(r, a) {
  switch (r) {
    case "keyup":
      return -1 !== gt.indexOf(a.keyCode);
    case "keydown":
      return 229 !== a.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ge(r) {
  r = r.detail;
  return "object" === typeof r && "data" in r ? r.data : null;
}
var St = !1;
function ie(r, a) {
  switch (r) {
    case "compositionend":
      return ge(a);
    case "keypress":
      if (32 !== a.which) return null;
      wt = !0;
      return kt;
    case "textInput":
      return (r = a.data), r === kt && wt ? null : r;
    default:
      return null;
  }
}
function je(r, a) {
  if (St)
    return "compositionend" === r || (!mt && fe(r, a))
      ? ((r = md()), (Mn = Fn = On = null), (St = !1), r)
      : null;
  switch (r) {
    case "paste":
      return null;
    case "keypress":
      if (!(a.ctrlKey || a.altKey || a.metaKey) || (a.ctrlKey && a.altKey)) {
        if (a.char && 1 < a.char.length) return a.char;
        if (a.which) return String.fromCharCode(a.which);
      }
      return null;
    case "compositionend":
      return yt && "ko" !== a.locale ? null : a.data;
    default:
      return null;
  }
}
var Et = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function le(r) {
  var a = r && r.nodeName && r.nodeName.toLowerCase();
  return "input" === a ? !!Et[r.type] : "textarea" === a;
}
function me(r, a, i, o) {
  Db(o);
  a = ne(a, "onChange");
  0 < a.length &&
    ((i = new Qn("onChange", "change", null, i, o)),
    r.push({ event: i, listeners: a }));
}
var xt = null,
  Ct = null;
function qe(r) {
  re(r, 0);
}
function se(r) {
  var a = te(r);
  if (Va(a)) return r;
}
function ue(r, a) {
  if ("change" === r) return a;
}
var zt = !1;
if (z) {
  var Nt;
  if (z) {
    var jt = "oninput" in document;
    if (!jt) {
      var _t = document.createElement("div");
      _t.setAttribute("oninput", "return;");
      jt = "function" === typeof _t.oninput;
    }
    Nt = jt;
  } else Nt = !1;
  zt = Nt && (!document.documentMode || 9 < document.documentMode);
}
function ze() {
  xt && (xt.detachEvent("onpropertychange", Ae), (Ct = xt = null));
}
function Ae(r) {
  if ("value" === r.propertyName && se(Ct)) {
    var a = [];
    me(a, Ct, r, wb(r));
    Ib(qe, a);
  }
}
function Be(r, a, i) {
  "focusin" === r
    ? (ze(), (xt = a), (Ct = i), xt.attachEvent("onpropertychange", Ae))
    : "focusout" === r && ze();
}
function Ce(r) {
  if ("selectionchange" === r || "keyup" === r || "keydown" === r)
    return se(Ct);
}
function De(r, a) {
  if ("click" === r) return se(a);
}
function Ee(r, a) {
  if ("input" === r || "change" === r) return se(a);
}
function Fe(r, a) {
  return (r === a && (0 !== r || 1 / r === 1 / a)) || (r !== r && a !== a);
}
var Pt = "function" === typeof Object.is ? Object.is : Fe;
function He(r, a) {
  if (Pt(r, a)) return !0;
  if (
    "object" !== typeof r ||
    null === r ||
    "object" !== typeof a ||
    null === a
  )
    return !1;
  var i = Object.keys(r),
    o = Object.keys(a);
  if (i.length !== o.length) return !1;
  for (o = 0; o < i.length; o++) {
    var s = i[o];
    if (!N.call(a, s) || !Pt(r[s], a[s])) return !1;
  }
  return !0;
}
function Ie(r) {
  for (; r && r.firstChild; ) r = r.firstChild;
  return r;
}
function Je(r, a) {
  var i = Ie(r);
  r = 0;
  for (var o; i; ) {
    if (3 === i.nodeType) {
      o = r + i.textContent.length;
      if (r <= a && o >= a) return { node: i, offset: a - r };
      r = o;
    }
    e: {
      for (; i; ) {
        if (i.nextSibling) {
          i = i.nextSibling;
          break e;
        }
        i = i.parentNode;
      }
      i = void 0;
    }
    i = Ie(i);
  }
}
function Ke(r, a) {
  return (
    !(!r || !a) &&
    (r === a ||
      ((!r || 3 !== r.nodeType) &&
        (a && 3 === a.nodeType
          ? Ke(r, a.parentNode)
          : "contains" in r
          ? r.contains(a)
          : !!r.compareDocumentPosition &&
            !!(16 & r.compareDocumentPosition(a)))))
  );
}
function Le() {
  for (var r = window, a = Wa(); a instanceof r.HTMLIFrameElement; ) {
    try {
      var i = "string" === typeof a.contentWindow.location.href;
    } catch (r) {
      i = !1;
    }
    if (!i) break;
    r = a.contentWindow;
    a = Wa(r.document);
  }
  return a;
}
function Me(r) {
  var a = r && r.nodeName && r.nodeName.toLowerCase();
  return (
    a &&
    (("input" === a &&
      ("text" === r.type ||
        "search" === r.type ||
        "tel" === r.type ||
        "url" === r.type ||
        "password" === r.type)) ||
      "textarea" === a ||
      "true" === r.contentEditable)
  );
}
function Ne(r) {
  var a = Le(),
    i = r.focusedElem,
    o = r.selectionRange;
  if (
    a !== i &&
    i &&
    i.ownerDocument &&
    Ke(i.ownerDocument.documentElement, i)
  ) {
    if (null !== o && Me(i))
      if (
        ((a = o.start),
        (r = o.end),
        void 0 === r && (r = a),
        "selectionStart" in i)
      )
        (i.selectionStart = a), (i.selectionEnd = Math.min(r, i.value.length));
      else if (
        ((r = ((a = i.ownerDocument || document) && a.defaultView) || window),
        r.getSelection)
      ) {
        r = r.getSelection();
        var s = i.textContent.length,
          v = Math.min(o.start, s);
        o = void 0 === o.end ? v : Math.min(o.end, s);
        !r.extend && v > o && ((s = o), (o = v), (v = s));
        s = Je(i, v);
        var S = Je(i, o);
        s &&
          S &&
          (1 !== r.rangeCount ||
            r.anchorNode !== s.node ||
            r.anchorOffset !== s.offset ||
            r.focusNode !== S.node ||
            r.focusOffset !== S.offset) &&
          ((a = a.createRange()),
          a.setStart(s.node, s.offset),
          r.removeAllRanges(),
          v > o
            ? (r.addRange(a), r.extend(S.node, S.offset))
            : (a.setEnd(S.node, S.offset), r.addRange(a)));
      }
    a = [];
    for (r = i; (r = r.parentNode); )
      1 === r.nodeType &&
        a.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
    "function" === typeof i.focus && i.focus();
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        (r.element.scrollLeft = r.left),
        (r.element.scrollTop = r.top);
  }
}
var Lt = z && "documentMode" in document && 11 >= document.documentMode,
  Tt = null,
  Dt = null,
  Ot = null,
  Ft = !1;
function Te(r, a, i) {
  var o = i.window === i ? i.document : 9 === i.nodeType ? i : i.ownerDocument;
  Ft ||
    null == Tt ||
    Tt !== Wa(o) ||
    ((o = Tt),
    "selectionStart" in o && Me(o)
      ? (o = { start: o.selectionStart, end: o.selectionEnd })
      : ((o = (
          (o.ownerDocument && o.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (o = {
          anchorNode: o.anchorNode,
          anchorOffset: o.anchorOffset,
          focusNode: o.focusNode,
          focusOffset: o.focusOffset,
        })),
    (Ot && He(Ot, o)) ||
      ((Ot = o),
      (o = ne(Dt, "onSelect")),
      0 < o.length &&
        ((a = new Qn("onSelect", "select", null, a, i)),
        r.push({ event: a, listeners: o }),
        (a.target = Tt))));
}
function Ue(r, a) {
  var i = {};
  i[r.toLowerCase()] = a.toLowerCase();
  i["Webkit" + r] = "webkit" + a;
  i["Moz" + r] = "moz" + a;
  return i;
}
var Mt = {
    animationend: Ue("Animation", "AnimationEnd"),
    animationiteration: Ue("Animation", "AnimationIteration"),
    animationstart: Ue("Animation", "AnimationStart"),
    transitionend: Ue("Transition", "TransitionEnd"),
  },
  Rt = {},
  Ut = {};
z &&
  ((Ut = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Mt.animationend.animation,
    delete Mt.animationiteration.animation,
    delete Mt.animationstart.animation),
  "TransitionEvent" in window || delete Mt.transitionend.transition);
function Ye(r) {
  if (Rt[r]) return Rt[r];
  if (!Mt[r]) return r;
  var a,
    i = Mt[r];
  for (a in i) if (i.hasOwnProperty(a) && a in Ut) return (Rt[r] = i[a]);
  return r;
}
var It = Ye("animationend"),
  At = Ye("animationiteration"),
  Qt = Ye("animationstart"),
  Bt = Ye("transitionend"),
  $t = new Map(),
  Vt =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ef(r, a) {
  $t.set(r, a);
  fa(a, [r]);
}
for (var Wt = 0; Wt < Vt.length; Wt++) {
  var Ht = Vt[Wt],
    qt = Ht.toLowerCase(),
    Gt = Ht[0].toUpperCase() + Ht.slice(1);
  ef(qt, "on" + Gt);
}
ef(It, "onAnimationEnd");
ef(At, "onAnimationIteration");
ef(Qt, "onAnimationStart");
ef("dblclick", "onDoubleClick");
ef("focusin", "onFocus");
ef("focusout", "onBlur");
ef(Bt, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
fa(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
fa(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
fa(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Jt =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Kt = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jt));
function mf(r, a, i) {
  var o = r.type || "unknown-event";
  r.currentTarget = i;
  Tb(o, a, void 0, r);
  r.currentTarget = null;
}
function re(r, a) {
  a = 0 !== (4 & a);
  for (var i = 0; i < r.length; i++) {
    var o = r[i],
      s = o.event;
    o = o.listeners;
    e: {
      var v = void 0;
      if (a)
        for (var S = o.length - 1; 0 <= S; S--) {
          var x = o[S],
            C = x.instance,
            z = x.currentTarget;
          x = x.listener;
          if (C !== v && s.isPropagationStopped()) break e;
          mf(s, x, z);
          v = C;
        }
      else
        for (S = 0; S < o.length; S++) {
          x = o[S];
          C = x.instance;
          z = x.currentTarget;
          x = x.listener;
          if (C !== v && s.isPropagationStopped()) break e;
          mf(s, x, z);
          v = C;
        }
    }
  }
  if ($e) throw ((r = Ve), ($e = !1), (Ve = null), r);
}
function D(r, a) {
  var i = a[cr];
  void 0 === i && (i = a[cr] = new Set());
  var o = r + "__bubble";
  i.has(o) || (of(a, r, 2, !1), i.add(o));
}
function pf(r, a, i) {
  var o = 0;
  a && (o |= 4);
  of(i, r, o, a);
}
var Yt = "_reactListening" + Math.random().toString(36).slice(2);
function rf(r) {
  if (!r[Yt]) {
    r[Yt] = !0;
    x.forEach(function (a) {
      "selectionchange" !== a && (Kt.has(a) || pf(a, !1, r), pf(a, !0, r));
    });
    var a = 9 === r.nodeType ? r : r.ownerDocument;
    null === a || a[Yt] || ((a[Yt] = !0), pf("selectionchange", !1, a));
  }
}
function of(r, a, i, o) {
  switch (id(a)) {
    case 1:
      var s = dd;
      break;
    case 4:
      s = fd;
      break;
    default:
      s = ed;
  }
  i = s.bind(null, a, i, r);
  s = void 0;
  !Pe || ("touchstart" !== a && "touchmove" !== a && "wheel" !== a) || (s = !0);
  o
    ? void 0 !== s
      ? r.addEventListener(a, i, { capture: !0, passive: s })
      : r.addEventListener(a, i, !0)
    : void 0 !== s
    ? r.addEventListener(a, i, { passive: s })
    : r.addEventListener(a, i, !1);
}
function gd(r, a, i, o, s) {
  var v = o;
  if (0 === (1 & a) && 0 === (2 & a) && null !== o)
    e: for (;;) {
      if (null === o) return;
      var S = o.tag;
      if (3 === S || 4 === S) {
        var x = o.stateNode.containerInfo;
        if (x === s || (8 === x.nodeType && x.parentNode === s)) break;
        if (4 === S)
          for (S = o.return; null !== S; ) {
            var C = S.tag;
            if (
              (3 === C || 4 === C) &&
              ((C = S.stateNode.containerInfo),
              C === s || (8 === C.nodeType && C.parentNode === s))
            )
              return;
            S = S.return;
          }
        for (; null !== x; ) {
          S = Vc(x);
          if (null === S) return;
          C = S.tag;
          if (5 === C || 6 === C) {
            o = v = S;
            continue e;
          }
          x = x.parentNode;
        }
      }
      o = o.return;
    }
  Ib(function () {
    var o = v,
      s = wb(i),
      S = [];
    e: {
      var x = $t.get(r);
      if (void 0 !== x) {
        var C = Qn,
          z = r;
        switch (r) {
          case "keypress":
            if (0 === nd(i)) break e;
          case "keydown":
          case "keyup":
            C = it;
            break;
          case "focusin":
            z = "focus";
            C = Jn;
            break;
          case "focusout":
            z = "blur";
            C = Jn;
            break;
          case "beforeblur":
          case "afterblur":
            C = Jn;
            break;
          case "click":
            if (2 === i.button) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = Wn;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = qn;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = ct;
            break;
          case It:
          case At:
          case Qt:
            C = Yn;
            break;
          case Bt:
            C = dt;
            break;
          case "scroll":
            C = $n;
            break;
          case "wheel":
            C = ht;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = Zn;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = ot;
        }
        var N = 0 !== (4 & a),
          j = !N && "scroll" === r,
          _ = N ? (null !== x ? x + "Capture" : null) : x;
        N = [];
        for (var P, L = o; null !== L; ) {
          P = L;
          var T = P.stateNode;
          5 === P.tag &&
            null !== T &&
            ((P = T),
            null !== _ && ((T = Jb(L, _)), null != T && N.push(sf(L, T, P))));
          if (j) break;
          L = L.return;
        }
        0 < N.length &&
          ((x = new C(x, z, null, i, s)), S.push({ event: x, listeners: N }));
      }
    }
    if (0 === (7 & a)) {
      x = "mouseover" === r || "pointerover" === r;
      C = "mouseout" === r || "pointerout" === r;
      if (
        (!x ||
          i === ke ||
          !(z = i.relatedTarget || i.fromElement) ||
          (!Vc(z) && !z[sr])) &&
        (C || x)
      ) {
        x =
          s.window === s
            ? s
            : (x = s.ownerDocument)
            ? x.defaultView || x.parentWindow
            : window;
        C
          ? ((z = i.relatedTarget || i.toElement),
            (C = o),
            (z = z ? Vc(z) : null),
            null !== z &&
              ((j = Ub(z)), z !== j || (5 !== z.tag && 6 !== z.tag))) &&
            (z = null)
          : ((C = null), (z = o));
        if (C !== z) {
          N = Wn;
          T = "onMouseLeave";
          _ = "onMouseEnter";
          L = "mouse";
          ("pointerout" !== r && "pointerover" !== r) ||
            ((N = ot),
            (T = "onPointerLeave"),
            (_ = "onPointerEnter"),
            (L = "pointer"));
          j = null == C ? x : te(C);
          P = null == z ? x : te(z);
          x = new N(T, L + "leave", C, i, s);
          x.target = j;
          x.relatedTarget = P;
          T = null;
          Vc(s) === o &&
            ((N = new N(_, L + "enter", z, i, s)),
            (N.target = P),
            (N.relatedTarget = j),
            (T = N));
          j = T;
          if (C && z)
            e: {
              N = C;
              _ = z;
              L = 0;
              for (P = N; P; P = uf(P)) L++;
              P = 0;
              for (T = _; T; T = uf(T)) P++;
              for (; 0 < L - P; ) (N = uf(N)), L--;
              for (; 0 < P - L; ) (_ = uf(_)), P--;
              for (; L--; ) {
                if (N === _ || (null !== _ && N === _.alternate)) break e;
                N = uf(N);
                _ = uf(_);
              }
              N = null;
            }
          else N = null;
          null !== C && vf(S, x, C, N, !1);
          null !== z && null !== j && vf(S, j, z, N, !0);
        }
      }
      x = o ? te(o) : window;
      C = x.nodeName && x.nodeName.toLowerCase();
      if ("select" === C || ("input" === C && "file" === x.type)) var F = ue;
      else if (le(x))
        if (zt) F = Ee;
        else {
          F = Ce;
          var M = Be;
        }
      else
        (C = x.nodeName) &&
          "input" === C.toLowerCase() &&
          ("checkbox" === x.type || "radio" === x.type) &&
          (F = De);
      if (F && (F = F(r, o))) me(S, F, i, s);
      else {
        M && M(r, x, o);
        "focusout" === r &&
          (M = x._wrapperState) &&
          M.controlled &&
          "number" === x.type &&
          bb(x, "number", x.value);
      }
      M = o ? te(o) : window;
      switch (r) {
        case "focusin":
          (le(M) || "true" === M.contentEditable) &&
            ((Tt = M), (Dt = o), (Ot = null));
          break;
        case "focusout":
          Ot = Dt = Tt = null;
          break;
        case "mousedown":
          Ft = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ft = !1;
          Te(S, i, s);
          break;
        case "selectionchange":
          if (Lt) break;
        case "keydown":
        case "keyup":
          Te(S, i, s);
      }
      var R;
      if (mt)
        e: {
          switch (r) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        St
          ? fe(r, i) && (I = "onCompositionEnd")
          : "keydown" === r && 229 === i.keyCode && (I = "onCompositionStart");
      I &&
        (yt &&
          "ko" !== i.locale &&
          (St || "onCompositionStart" !== I
            ? "onCompositionEnd" === I && St && (R = md())
            : ((On = s),
              (Fn = "value" in On ? On.value : On.textContent),
              (St = !0))),
        (M = ne(o, I)),
        0 < M.length &&
          ((I = new nt(I, r, null, i, s)),
          S.push({ event: I, listeners: M }),
          R ? (I.data = R) : ((R = ge(i)), null !== R && (I.data = R))));
      (R = bt ? ie(r, i) : je(r, i)) &&
        ((o = ne(o, "onBeforeInput")),
        0 < o.length &&
          ((s = new nt("onBeforeInput", "beforeinput", null, i, s)),
          S.push({ event: s, listeners: o }),
          (s.data = R)));
    }
    re(S, a);
  });
}
function sf(r, a, i) {
  return { instance: r, listener: a, currentTarget: i };
}
function ne(r, a) {
  for (var i = a + "Capture", o = []; null !== r; ) {
    var s = r,
      v = s.stateNode;
    5 === s.tag &&
      null !== v &&
      ((s = v),
      (v = Jb(r, i)),
      null != v && o.unshift(sf(r, v, s)),
      (v = Jb(r, a)),
      null != v && o.push(sf(r, v, s)));
    r = r.return;
  }
  return o;
}
function uf(r) {
  if (null === r) return null;
  do {
    r = r.return;
  } while (r && 5 !== r.tag);
  return r || null;
}
function vf(r, a, i, o, s) {
  for (var v = a._reactName, S = []; null !== i && i !== o; ) {
    var x = i,
      C = x.alternate,
      z = x.stateNode;
    if (null !== C && C === o) break;
    5 === x.tag &&
      null !== z &&
      ((x = z),
      s
        ? ((C = Jb(i, v)), null != C && S.unshift(sf(i, C, x)))
        : s || ((C = Jb(i, v)), null != C && S.push(sf(i, C, x))));
    i = i.return;
  }
  0 !== S.length && r.push({ event: a, listeners: S });
}
var Xt = /\r\n?/g,
  Zt = /\u0000|\uFFFD/g;
function yf(r) {
  return ("string" === typeof r ? r : "" + r).replace(Xt, "\n").replace(Zt, "");
}
function zf(r, a, i) {
  a = yf(a);
  if (yf(r) !== a && i) throw Error(p(425));
}
function Af() {}
var er = null,
  nr = null;
function Df(r, a) {
  return (
    "textarea" === r ||
    "noscript" === r ||
    "string" === typeof a.children ||
    "number" === typeof a.children ||
    ("object" === typeof a.dangerouslySetInnerHTML &&
      null !== a.dangerouslySetInnerHTML &&
      null != a.dangerouslySetInnerHTML.__html)
  );
}
var tr = "function" === typeof setTimeout ? setTimeout : void 0,
  rr = "function" === typeof clearTimeout ? clearTimeout : void 0,
  lr = "function" === typeof Promise ? Promise : void 0,
  ar =
    "function" === typeof queueMicrotask
      ? queueMicrotask
      : "undefined" !== typeof lr
      ? function (r) {
          return lr.resolve(null).then(r).catch(Hf);
        }
      : tr;
function Hf(r) {
  setTimeout(function () {
    throw r;
  });
}
function Jf(r, a) {
  var i = a,
    o = 0;
  do {
    var s = i.nextSibling;
    r.removeChild(i);
    if (s && 8 === s.nodeType)
      if (((i = s.data), "/$" === i)) {
        if (0 === o) {
          r.removeChild(s);
          ad(a);
          return;
        }
        o--;
      } else ("$" !== i && "$?" !== i && "$!" !== i) || o++;
    i = s;
  } while (i);
  ad(a);
}
function Kf(r) {
  for (; null != r; r = r.nextSibling) {
    var a = r.nodeType;
    if (1 === a || 3 === a) break;
    if (8 === a) {
      a = r.data;
      if ("$" === a || "$!" === a || "$?" === a) break;
      if ("/$" === a) return null;
    }
  }
  return r;
}
function Lf(r) {
  r = r.previousSibling;
  for (var a = 0; r; ) {
    if (8 === r.nodeType) {
      var i = r.data;
      if ("$" === i || "$!" === i || "$?" === i) {
        if (0 === a) return r;
        a--;
      } else "/$" === i && a++;
    }
    r = r.previousSibling;
  }
  return null;
}
var ir = Math.random().toString(36).slice(2),
  ur = "__reactFiber$" + ir,
  or = "__reactProps$" + ir,
  sr = "__reactContainer$" + ir,
  cr = "__reactEvents$" + ir,
  fr = "__reactListeners$" + ir,
  dr = "__reactHandles$" + ir;
function Vc(r) {
  var a = r[ur];
  if (a) return a;
  for (var i = r.parentNode; i; ) {
    if ((a = i[sr] || i[ur])) {
      i = a.alternate;
      if (null !== a.child || (null !== i && null !== i.child))
        for (r = Lf(r); null !== r; ) {
          if ((i = r[ur])) return i;
          r = Lf(r);
        }
      return a;
    }
    r = i;
    i = r.parentNode;
  }
  return null;
}
function Bb(r) {
  r = r[ur] || r[sr];
  return !r || (5 !== r.tag && 6 !== r.tag && 13 !== r.tag && 3 !== r.tag)
    ? null
    : r;
}
function te(r) {
  if (5 === r.tag || 6 === r.tag) return r.stateNode;
  throw Error(p(33));
}
function Cb(r) {
  return r[or] || null;
}
var pr = [],
  hr = -1;
function Tf(r) {
  return { current: r };
}
function E(r) {
  0 > hr || ((r.current = pr[hr]), (pr[hr] = null), hr--);
}
function G(r, a) {
  hr++;
  pr[hr] = r.current;
  r.current = a;
}
var gr = {},
  mr = Tf(gr),
  vr = Tf(!1),
  br = gr;
function Xf(r, a) {
  var i = r.type.contextTypes;
  if (!i) return gr;
  var o = r.stateNode;
  if (o && o.__reactInternalMemoizedUnmaskedChildContext === a)
    return o.__reactInternalMemoizedMaskedChildContext;
  var s,
    v = {};
  for (s in i) v[s] = a[s];
  o &&
    ((r = r.stateNode),
    (r.__reactInternalMemoizedUnmaskedChildContext = a),
    (r.__reactInternalMemoizedMaskedChildContext = v));
  return v;
}
function Yf(r) {
  r = r.childContextTypes;
  return null !== r && void 0 !== r;
}
function Zf() {
  E(vr);
  E(mr);
}
function $f(r, a, i) {
  if (mr.current !== gr) throw Error(p(168));
  G(mr, a);
  G(vr, i);
}
function ag(r, a, i) {
  var o = r.stateNode;
  a = a.childContextTypes;
  if ("function" !== typeof o.getChildContext) return i;
  o = o.getChildContext();
  for (var s in o) if (!(s in a)) throw Error(p(108, Qa(r) || "Unknown", s));
  return oe({}, i, o);
}
function bg(r) {
  r = ((r = r.stateNode) && r.__reactInternalMemoizedMergedChildContext) || gr;
  br = mr.current;
  G(mr, r);
  G(vr, vr.current);
  return !0;
}
function cg(r, a, i) {
  var o = r.stateNode;
  if (!o) throw Error(p(169));
  i
    ? ((r = ag(r, a, br)),
      (o.__reactInternalMemoizedMergedChildContext = r),
      E(vr),
      E(mr),
      G(mr, r))
    : E(vr);
  G(vr, i);
}
var yr = null,
  kr = !1,
  wr = !1;
function gg(r) {
  null === yr ? (yr = [r]) : yr.push(r);
}
function hg(r) {
  kr = !0;
  gg(r);
}
function ig() {
  if (!wr && null !== yr) {
    wr = !0;
    var r = 0,
      a = mn;
    try {
      var i = yr;
      for (mn = 1; r < i.length; r++) {
        var o = i[r];
        do {
          o = o(!0);
        } while (null !== o);
      }
      yr = null;
      kr = !1;
    } catch (a) {
      throw (null !== yr && (yr = yr.slice(r + 1)), Ge(rn, ig), a);
    } finally {
      (mn = a), (wr = !1);
    }
  }
  return null;
}
var Sr = F.ReactCurrentBatchConfig;
function kg(r, a) {
  if (r && r.defaultProps) {
    a = oe({}, a);
    r = r.defaultProps;
    for (var i in r) void 0 === a[i] && (a[i] = r[i]);
    return a;
  }
  return a;
}
var Er = Tf(null),
  xr = null,
  Cr = null,
  zr = null;
function pg() {
  zr = Cr = xr = null;
}
function qg(r) {
  var a = Er.current;
  E(Er);
  r._currentValue = a;
}
function rg(r, a, i) {
  for (; null !== r; ) {
    var o = r.alternate;
    (r.childLanes & a) !== a
      ? ((r.childLanes |= a), null !== o && (o.childLanes |= a))
      : null !== o && (o.childLanes & a) !== a && (o.childLanes |= a);
    if (r === i) break;
    r = r.return;
  }
}
function sg(r, a) {
  xr = r;
  zr = Cr = null;
  r = r.dependencies;
  null !== r &&
    null !== r.firstContext &&
    (0 !== (r.lanes & a) && (Dl = !0), (r.firstContext = null));
}
function ug(r) {
  var a = r._currentValue;
  if (zr !== r)
    if (((r = { context: r, memoizedValue: a, next: null }), null === Cr)) {
      if (null === xr) throw Error(p(308));
      Cr = r;
      xr.dependencies = { lanes: 0, firstContext: r };
    } else Cr = Cr.next = r;
  return a;
}
var Nr = null,
  jr = !1;
function xg(r) {
  r.updateQueue = {
    baseState: r.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function yg(r, a) {
  r = r.updateQueue;
  a.updateQueue === r &&
    (a.updateQueue = {
      baseState: r.baseState,
      firstBaseUpdate: r.firstBaseUpdate,
      lastBaseUpdate: r.lastBaseUpdate,
      shared: r.shared,
      effects: r.effects,
    });
}
function zg(r, a) {
  return {
    eventTime: r,
    lane: a,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ag(r, a) {
  var i = r.updateQueue;
  null !== i &&
    ((i = i.shared),
    Bg(r)
      ? ((r = i.interleaved),
        null === r
          ? ((a.next = a), null === Nr ? (Nr = [i]) : Nr.push(i))
          : ((a.next = r.next), (r.next = a)),
        (i.interleaved = a))
      : ((r = i.pending),
        null === r ? (a.next = a) : ((a.next = r.next), (r.next = a)),
        (i.pending = a)));
}
function Cg(r, a, i) {
  a = a.updateQueue;
  if (null !== a && ((a = a.shared), 0 !== (4194240 & i))) {
    var o = a.lanes;
    o &= r.pendingLanes;
    i |= o;
    a.lanes = i;
    Bc(r, i);
  }
}
function Dg(r, a) {
  var i = r.updateQueue,
    o = r.alternate;
  if (null === o || ((o = o.updateQueue), i !== o)) {
    r = i.lastBaseUpdate;
    null === r ? (i.firstBaseUpdate = a) : (r.next = a);
    i.lastBaseUpdate = a;
  } else {
    var s = null,
      v = null;
    i = i.firstBaseUpdate;
    if (null !== i) {
      do {
        var S = {
          eventTime: i.eventTime,
          lane: i.lane,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        };
        null === v ? (s = v = S) : (v = v.next = S);
        i = i.next;
      } while (null !== i);
      null === v ? (s = v = a) : (v = v.next = a);
    } else s = v = a;
    i = {
      baseState: o.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: v,
      shared: o.shared,
      effects: o.effects,
    };
    r.updateQueue = i;
  }
}
function Eg(r, a, i, o) {
  var s = r.updateQueue;
  jr = !1;
  var v = s.firstBaseUpdate,
    S = s.lastBaseUpdate,
    x = s.shared.pending;
  if (null !== x) {
    s.shared.pending = null;
    var C = x,
      z = C.next;
    C.next = null;
    null === S ? (v = z) : (S.next = z);
    S = C;
    var N = r.alternate;
    null !== N &&
      ((N = N.updateQueue),
      (x = N.lastBaseUpdate),
      x !== S &&
        (null === x ? (N.firstBaseUpdate = z) : (x.next = z),
        (N.lastBaseUpdate = C)));
  }
  if (null !== v) {
    var j = s.baseState;
    S = 0;
    N = z = C = null;
    x = v;
    do {
      var _ = x.lane,
        P = x.eventTime;
      if ((o & _) === _) {
        null !== N &&
          (N = N.next =
            {
              eventTime: P,
              lane: 0,
              tag: x.tag,
              payload: x.payload,
              callback: x.callback,
              next: null,
            });
        e: {
          var L = r,
            T = x;
          _ = a;
          P = i;
          switch (T.tag) {
            case 1:
              L = T.payload;
              if ("function" === typeof L) {
                j = L.call(P, j, _);
                break e;
              }
              j = L;
              break e;
            case 3:
              L.flags = (-65537 & L.flags) | 128;
            case 0:
              L = T.payload;
              _ = "function" === typeof L ? L.call(P, j, _) : L;
              if (null === _ || void 0 === _) break e;
              j = oe({}, j, _);
              break e;
            case 2:
              jr = !0;
          }
        }
        null !== x.callback &&
          0 !== x.lane &&
          ((r.flags |= 64),
          (_ = s.effects),
          null === _ ? (s.effects = [x]) : _.push(x));
      } else
        (P = {
          eventTime: P,
          lane: _,
          tag: x.tag,
          payload: x.payload,
          callback: x.callback,
          next: null,
        }),
          null === N ? ((z = N = P), (C = j)) : (N = N.next = P),
          (S |= _);
      x = x.next;
      if (null === x) {
        if (((x = s.shared.pending), null === x)) break;
        (_ = x),
          (x = _.next),
          (_.next = null),
          (s.lastBaseUpdate = _),
          (s.shared.pending = null);
      }
    } while (1);
    null === N && (C = j);
    s.baseState = C;
    s.firstBaseUpdate = z;
    s.lastBaseUpdate = N;
    a = s.shared.interleaved;
    if (null !== a) {
      s = a;
      do {
        (S |= s.lane), (s = s.next);
      } while (s !== a);
    } else null === v && (s.shared.lanes = 0);
    ta |= S;
    r.lanes = S;
    r.memoizedState = j;
  }
}
function Gg(r, a, i) {
  r = a.effects;
  a.effects = null;
  if (null !== r)
    for (a = 0; a < r.length; a++) {
      var o = r[a],
        s = o.callback;
      if (null !== s) {
        o.callback = null;
        o = i;
        if ("function" !== typeof s) throw Error(p(191, s));
        s.call(o);
      }
    }
}
var _r = new v.Component().refs;
function Ig(r, a, i, o) {
  a = r.memoizedState;
  i = i(o, a);
  i = null === i || void 0 === i ? a : oe({}, a, i);
  r.memoizedState = i;
  0 === r.lanes && (r.updateQueue.baseState = i);
}
var Pr = {
  isMounted: function (r) {
    return !!(r = r._reactInternals) && Ub(r) === r;
  },
  enqueueSetState: function (r, a, i) {
    r = r._reactInternals;
    var o = Jg(),
      s = Kg(r),
      v = zg(o, s);
    v.payload = a;
    void 0 !== i && null !== i && (v.callback = i);
    Ag(r, v);
    a = Lg(r, s, o);
    null !== a && Cg(a, r, s);
  },
  enqueueReplaceState: function (r, a, i) {
    r = r._reactInternals;
    var o = Jg(),
      s = Kg(r),
      v = zg(o, s);
    v.tag = 1;
    v.payload = a;
    void 0 !== i && null !== i && (v.callback = i);
    Ag(r, v);
    a = Lg(r, s, o);
    null !== a && Cg(a, r, s);
  },
  enqueueForceUpdate: function (r, a) {
    r = r._reactInternals;
    var i = Jg(),
      o = Kg(r),
      s = zg(i, o);
    s.tag = 2;
    void 0 !== a && null !== a && (s.callback = a);
    Ag(r, s);
    a = Lg(r, o, i);
    null !== a && Cg(a, r, o);
  },
};
function Ng(r, a, i, o, s, v, S) {
  r = r.stateNode;
  return "function" === typeof r.shouldComponentUpdate
    ? r.shouldComponentUpdate(o, v, S)
    : !a.prototype ||
        !a.prototype.isPureReactComponent ||
        !He(i, o) ||
        !He(s, v);
}
function Og(r, a, i) {
  var o = !1,
    s = gr;
  var v = a.contextType;
  "object" === typeof v && null !== v
    ? (v = ug(v))
    : ((s = Yf(a) ? br : mr.current),
      (o = a.contextTypes),
      (v = (o = null !== o && void 0 !== o) ? Xf(r, s) : gr));
  a = new a(i, v);
  r.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null;
  a.updater = Pr;
  r.stateNode = a;
  a._reactInternals = r;
  o &&
    ((r = r.stateNode),
    (r.__reactInternalMemoizedUnmaskedChildContext = s),
    (r.__reactInternalMemoizedMaskedChildContext = v));
  return a;
}
function Pg(r, a, i, o) {
  r = a.state;
  "function" === typeof a.componentWillReceiveProps &&
    a.componentWillReceiveProps(i, o);
  "function" === typeof a.UNSAFE_componentWillReceiveProps &&
    a.UNSAFE_componentWillReceiveProps(i, o);
  a.state !== r && Pr.enqueueReplaceState(a, a.state, null);
}
function Qg(r, a, i, o) {
  var s = r.stateNode;
  s.props = i;
  s.state = r.memoizedState;
  s.refs = _r;
  xg(r);
  var v = a.contextType;
  "object" === typeof v && null !== v
    ? (s.context = ug(v))
    : ((v = Yf(a) ? br : mr.current), (s.context = Xf(r, v)));
  s.state = r.memoizedState;
  v = a.getDerivedStateFromProps;
  "function" === typeof v && (Ig(r, a, v, i), (s.state = r.memoizedState));
  "function" === typeof a.getDerivedStateFromProps ||
    "function" === typeof s.getSnapshotBeforeUpdate ||
    ("function" !== typeof s.UNSAFE_componentWillMount &&
      "function" !== typeof s.componentWillMount) ||
    ((a = s.state),
    "function" === typeof s.componentWillMount && s.componentWillMount(),
    "function" === typeof s.UNSAFE_componentWillMount &&
      s.UNSAFE_componentWillMount(),
    a !== s.state && Pr.enqueueReplaceState(s, s.state, null),
    Eg(r, i, s, o),
    (s.state = r.memoizedState));
  "function" === typeof s.componentDidMount && (r.flags |= 4194308);
}
var Lr = [],
  Tr = 0,
  Dr = null,
  Or = 0,
  Fr = [],
  Mr = 0,
  Rr = null,
  Ur = 1,
  Ir = "";
function $g(r, a) {
  Lr[Tr++] = Or;
  Lr[Tr++] = Dr;
  Dr = r;
  Or = a;
}
function ah(r, a, i) {
  Fr[Mr++] = Ur;
  Fr[Mr++] = Ir;
  Fr[Mr++] = Rr;
  Rr = r;
  var o = Ur;
  r = Ir;
  var s = 32 - fn(o) - 1;
  o &= ~(1 << s);
  i += 1;
  var v = 32 - fn(a) + s;
  if (30 < v) {
    var S = s - (s % 5);
    v = (o & ((1 << S) - 1)).toString(32);
    o >>= S;
    s -= S;
    Ur = (1 << (32 - fn(a) + s)) | (i << s) | o;
    Ir = v + r;
  } else (Ur = (1 << v) | (i << s) | o), (Ir = r);
}
function bh(r) {
  null !== r.return && ($g(r, 1), ah(r, 1, 0));
}
function ch(r) {
  for (; r === Dr; )
    (Dr = Lr[--Tr]), (Lr[Tr] = null), (Or = Lr[--Tr]), (Lr[Tr] = null);
  for (; r === Rr; )
    (Rr = Fr[--Mr]),
      (Fr[Mr] = null),
      (Ir = Fr[--Mr]),
      (Fr[Mr] = null),
      (Ur = Fr[--Mr]),
      (Fr[Mr] = null);
}
var Ar = null,
  Qr = null,
  Br = !1,
  $r = null;
function gh(r, a) {
  var i = hh(5, null, null, 0);
  i.elementType = "DELETED";
  i.stateNode = a;
  i.return = r;
  a = r.deletions;
  null === a ? ((r.deletions = [i]), (r.flags |= 16)) : a.push(i);
}
function ih(r, a) {
  switch (r.tag) {
    case 5:
      var i = r.type;
      a =
        1 !== a.nodeType || i.toLowerCase() !== a.nodeName.toLowerCase()
          ? null
          : a;
      return (
        null !== a && ((r.stateNode = a), (Ar = r), (Qr = Kf(a.firstChild)), !0)
      );
    case 6:
      return (
        (a = "" === r.pendingProps || 3 !== a.nodeType ? null : a),
        null !== a && ((r.stateNode = a), (Ar = r), (Qr = null), !0)
      );
    case 13:
      return (
        (a = 8 !== a.nodeType ? null : a),
        null !== a &&
          ((i = null !== Rr ? { id: Ur, overflow: Ir } : null),
          (r.memoizedState = {
            dehydrated: a,
            treeContext: i,
            retryLane: 1073741824,
          }),
          (i = hh(18, null, null, 0)),
          (i.stateNode = a),
          (i.return = r),
          (r.child = i),
          (Ar = r),
          (Qr = null),
          !0)
      );
    default:
      return !1;
  }
}
function jh(r) {
  return 0 !== (1 & r.mode) && 0 === (128 & r.flags);
}
function kh(r) {
  if (Br) {
    var a = Qr;
    if (a) {
      var i = a;
      if (!ih(r, a)) {
        if (jh(r)) throw Error(p(418));
        a = Kf(i.nextSibling);
        var o = Ar;
        a && ih(r, a)
          ? gh(o, i)
          : ((r.flags = (-4097 & r.flags) | 2), (Br = !1), (Ar = r));
      }
    } else {
      if (jh(r)) throw Error(p(418));
      r.flags = (-4097 & r.flags) | 2;
      Br = !1;
      Ar = r;
    }
  }
}
function lh(r) {
  for (r = r.return; null !== r && 5 !== r.tag && 3 !== r.tag && 13 !== r.tag; )
    r = r.return;
  Ar = r;
}
function mh(r) {
  if (r !== Ar) return !1;
  if (!Br) return lh(r), (Br = !0), !1;
  var a;
  (a = 3 !== r.tag) &&
    !(a = 5 !== r.tag) &&
    ((a = r.type),
    (a = "head" !== a && "body" !== a && !Df(r.type, r.memoizedProps)));
  if (a && (a = Qr)) {
    if (jh(r)) {
      for (r = Qr; r; ) r = Kf(r.nextSibling);
      throw Error(p(418));
    }
    for (; a; ) gh(r, a), (a = Kf(a.nextSibling));
  }
  lh(r);
  if (13 === r.tag) {
    r = r.memoizedState;
    r = null !== r ? r.dehydrated : null;
    if (!r) throw Error(p(317));
    e: {
      r = r.nextSibling;
      for (a = 0; r; ) {
        if (8 === r.nodeType) {
          var i = r.data;
          if ("/$" === i) {
            if (0 === a) {
              Qr = Kf(r.nextSibling);
              break e;
            }
            a--;
          } else ("$" !== i && "$!" !== i && "$?" !== i) || a++;
        }
        r = r.nextSibling;
      }
      Qr = null;
    }
  } else Qr = Ar ? Kf(r.stateNode.nextSibling) : null;
  return !0;
}
function nh() {
  Qr = Ar = null;
  Br = !1;
}
function oh(r) {
  null === $r ? ($r = [r]) : $r.push(r);
}
function ph(r, a, i) {
  r = i.ref;
  if (null !== r && "function" !== typeof r && "object" !== typeof r) {
    if (i._owner) {
      i = i._owner;
      if (i) {
        if (1 !== i.tag) throw Error(p(309));
        var o = i.stateNode;
      }
      if (!o) throw Error(p(147, r));
      var s = o,
        v = "" + r;
      if (
        null !== a &&
        null !== a.ref &&
        "function" === typeof a.ref &&
        a.ref._stringRef === v
      )
        return a.ref;
      a = function (r) {
        var a = s.refs;
        a === _r && (a = s.refs = {});
        null === r ? delete a[v] : (a[v] = r);
      };
      a._stringRef = v;
      return a;
    }
    if ("string" !== typeof r) throw Error(p(284));
    if (!i._owner) throw Error(p(290, r));
  }
  return r;
}
function qh(r, a) {
  r = Object.prototype.toString.call(a);
  throw Error(
    p(
      31,
      "[object Object]" === r
        ? "object with keys {" + Object.keys(a).join(", ") + "}"
        : r
    )
  );
}
function rh(r) {
  var a = r._init;
  return a(r._payload);
}
function sh(r) {
  function b(a, i) {
    if (r) {
      var o = a.deletions;
      null === o ? ((a.deletions = [i]), (a.flags |= 16)) : o.push(i);
    }
  }
  function c(a, i) {
    if (!r) return null;
    for (; null !== i; ) b(a, i), (i = i.sibling);
    return null;
  }
  function d(r, a) {
    for (r = new Map(); null !== a; )
      null !== a.key ? r.set(a.key, a) : r.set(a.index, a), (a = a.sibling);
    return r;
  }
  function e(r, a) {
    r = th(r, a);
    r.index = 0;
    r.sibling = null;
    return r;
  }
  function f(a, i, o) {
    a.index = o;
    if (!r) return (a.flags |= 1048576), i;
    o = a.alternate;
    if (null !== o) return (o = o.index), o < i ? ((a.flags |= 2), i) : o;
    a.flags |= 2;
    return i;
  }
  function g(a) {
    r && null === a.alternate && (a.flags |= 2);
    return a;
  }
  function h(r, a, i, o) {
    if (null === a || 6 !== a.tag)
      return (a = uh(i, r.mode, o)), (a.return = r), a;
    a = e(a, i);
    a.return = r;
    return a;
  }
  function k(r, a, i, o) {
    var s = i.type;
    if (s === I) return n(r, a, i.props.children, o, i.key);
    if (
      null !== a &&
      (a.elementType === s ||
        ("object" === typeof s &&
          null !== s &&
          s.$$typeof === X &&
          rh(s) === a.type))
    )
      return (o = e(a, i.props)), (o.ref = ph(r, a, i)), (o.return = r), o;
    o = vh(i.type, i.key, i.props, null, r.mode, o);
    o.ref = ph(r, a, i);
    o.return = r;
    return o;
  }
  function l(r, a, i, o) {
    if (
      null === a ||
      4 !== a.tag ||
      a.stateNode.containerInfo !== i.containerInfo ||
      a.stateNode.implementation !== i.implementation
    )
      return (a = wh(i, r.mode, o)), (a.return = r), a;
    a = e(a, i.children || []);
    a.return = r;
    return a;
  }
  function n(r, a, i, o, s) {
    if (null === a || 7 !== a.tag)
      return (a = xh(i, r.mode, o, s)), (a.return = r), a;
    a = e(a, i);
    a.return = r;
    return a;
  }
  function u(r, a, i) {
    if (("string" === typeof a && "" !== a) || "number" === typeof a)
      return (a = uh("" + a, r.mode, i)), (a.return = r), a;
    if ("object" === typeof a && null !== a) {
      switch (a.$$typeof) {
        case M:
          return (
            (i = vh(a.type, a.key, a.props, null, r.mode, i)),
            (i.ref = ph(r, null, a)),
            (i.return = r),
            i
          );
        case R:
          return (a = wh(a, r.mode, i)), (a.return = r), a;
        case X:
          var o = a._init;
          return u(r, o(a._payload), i);
      }
      if (de(a) || Ja(a))
        return (a = xh(a, r.mode, i, null)), (a.return = r), a;
      qh(r, a);
    }
    return null;
  }
  function q(r, a, i, o) {
    var s = null !== a ? a.key : null;
    if (("string" === typeof i && "" !== i) || "number" === typeof i)
      return null !== s ? null : h(r, a, "" + i, o);
    if ("object" === typeof i && null !== i) {
      switch (i.$$typeof) {
        case M:
          return i.key === s ? k(r, a, i, o) : null;
        case R:
          return i.key === s ? l(r, a, i, o) : null;
        case X:
          return (s = i._init), q(r, a, s(i._payload), o);
      }
      if (de(i) || Ja(i)) return null !== s ? null : n(r, a, i, o, null);
      qh(r, i);
    }
    return null;
  }
  function y(r, a, i, o, s) {
    if (("string" === typeof o && "" !== o) || "number" === typeof o)
      return (r = r.get(i) || null), h(a, r, "" + o, s);
    if ("object" === typeof o && null !== o) {
      switch (o.$$typeof) {
        case M:
          return (r = r.get(null === o.key ? i : o.key) || null), k(a, r, o, s);
        case R:
          return (r = r.get(null === o.key ? i : o.key) || null), l(a, r, o, s);
        case X:
          var v = o._init;
          return y(r, a, i, v(o._payload), s);
      }
      if (de(o) || Ja(o)) return (r = r.get(i) || null), n(a, r, o, s, null);
      qh(a, o);
    }
    return null;
  }
  function m(a, i, o, s) {
    for (
      var v = null, S = null, x = i, C = (i = 0), z = null;
      null !== x && C < o.length;
      C++
    ) {
      x.index > C ? ((z = x), (x = null)) : (z = x.sibling);
      var N = q(a, x, o[C], s);
      if (null === N) {
        null === x && (x = z);
        break;
      }
      r && x && null === N.alternate && b(a, x);
      i = f(N, i, C);
      null === S ? (v = N) : (S.sibling = N);
      S = N;
      x = z;
    }
    if (C === o.length) return c(a, x), Br && $g(a, C), v;
    if (null === x) {
      for (; C < o.length; C++)
        (x = u(a, o[C], s)),
          null !== x &&
            ((i = f(x, i, C)), null === S ? (v = x) : (S.sibling = x), (S = x));
      Br && $g(a, C);
      return v;
    }
    for (x = d(a, x); C < o.length; C++)
      (z = y(x, a, C, o[C], s)),
        null !== z &&
          (r && null !== z.alternate && x.delete(null === z.key ? C : z.key),
          (i = f(z, i, C)),
          null === S ? (v = z) : (S.sibling = z),
          (S = z));
    r &&
      x.forEach(function (r) {
        return b(a, r);
      });
    Br && $g(a, C);
    return v;
  }
  function w(a, i, o, s) {
    var v = Ja(o);
    if ("function" !== typeof v) throw Error(p(150));
    o = v.call(o);
    if (null == o) throw Error(p(151));
    for (
      var S = (v = null), x = i, C = (i = 0), z = null, N = o.next();
      null !== x && !N.done;
      C++, N = o.next()
    ) {
      x.index > C ? ((z = x), (x = null)) : (z = x.sibling);
      var j = q(a, x, N.value, s);
      if (null === j) {
        null === x && (x = z);
        break;
      }
      r && x && null === j.alternate && b(a, x);
      i = f(j, i, C);
      null === S ? (v = j) : (S.sibling = j);
      S = j;
      x = z;
    }
    if (N.done) return c(a, x), Br && $g(a, C), v;
    if (null === x) {
      for (; !N.done; C++, N = o.next())
        (N = u(a, N.value, s)),
          null !== N &&
            ((i = f(N, i, C)), null === S ? (v = N) : (S.sibling = N), (S = N));
      Br && $g(a, C);
      return v;
    }
    for (x = d(a, x); !N.done; C++, N = o.next())
      (N = y(x, a, C, N.value, s)),
        null !== N &&
          (r && null !== N.alternate && x.delete(null === N.key ? C : N.key),
          (i = f(N, i, C)),
          null === S ? (v = N) : (S.sibling = N),
          (S = N));
    r &&
      x.forEach(function (r) {
        return b(a, r);
      });
    Br && $g(a, C);
    return v;
  }
  function J(r, a, i, o) {
    "object" === typeof i &&
      null !== i &&
      i.type === I &&
      null === i.key &&
      (i = i.props.children);
    if ("object" === typeof i && null !== i) {
      switch (i.$$typeof) {
        case M:
          e: {
            for (var s = i.key, v = a; null !== v; ) {
              if (v.key === s) {
                s = i.type;
                if (s === I) {
                  if (7 === v.tag) {
                    c(r, v.sibling);
                    a = e(v, i.props.children);
                    a.return = r;
                    r = a;
                    break e;
                  }
                } else if (
                  v.elementType === s ||
                  ("object" === typeof s &&
                    null !== s &&
                    s.$$typeof === X &&
                    rh(s) === v.type)
                ) {
                  c(r, v.sibling);
                  a = e(v, i.props);
                  a.ref = ph(r, v, i);
                  a.return = r;
                  r = a;
                  break e;
                }
                c(r, v);
                break;
              }
              b(r, v);
              v = v.sibling;
            }
            i.type === I
              ? ((a = xh(i.props.children, r.mode, o, i.key)),
                (a.return = r),
                (r = a))
              : ((o = vh(i.type, i.key, i.props, null, r.mode, o)),
                (o.ref = ph(r, a, i)),
                (o.return = r),
                (r = o));
          }
          return g(r);
        case R:
          e: {
            for (v = i.key; null !== a; ) {
              if (a.key === v) {
                if (
                  4 === a.tag &&
                  a.stateNode.containerInfo === i.containerInfo &&
                  a.stateNode.implementation === i.implementation
                ) {
                  c(r, a.sibling);
                  a = e(a, i.children || []);
                  a.return = r;
                  r = a;
                  break e;
                }
                c(r, a);
                break;
              }
              b(r, a);
              a = a.sibling;
            }
            a = wh(i, r.mode, o);
            a.return = r;
            r = a;
          }
          return g(r);
        case X:
          return (v = i._init), J(r, a, v(i._payload), o);
      }
      if (de(i)) return m(r, a, i, o);
      if (Ja(i)) return w(r, a, i, o);
      qh(r, i);
    }
    return ("string" === typeof i && "" !== i) || "number" === typeof i
      ? ((i = "" + i),
        null !== a && 6 === a.tag
          ? (c(r, a.sibling), (a = e(a, i)), (a.return = r), (r = a))
          : (c(r, a), (a = uh(i, r.mode, o)), (a.return = r), (r = a)),
        g(r))
      : c(r, a);
  }
  return J;
}
var Vr = sh(!0),
  Wr = sh(!1),
  Hr = {},
  qr = Tf(Hr),
  Gr = Tf(Hr),
  Jr = Tf(Hr);
function Eh(r) {
  if (r === Hr) throw Error(p(174));
  return r;
}
function Fh(r, a) {
  G(Jr, a);
  G(Gr, r);
  G(qr, Hr);
  r = a.nodeType;
  switch (r) {
    case 9:
    case 11:
      a = (a = a.documentElement) ? a.namespaceURI : kb(null, "");
      break;
    default:
      (r = 8 === r ? a.parentNode : a),
        (a = r.namespaceURI || null),
        (r = r.tagName),
        (a = kb(a, r));
  }
  E(qr);
  G(qr, a);
}
function Gh() {
  E(qr);
  E(Gr);
  E(Jr);
}
function Hh(r) {
  Eh(Jr.current);
  var a = Eh(qr.current);
  var i = kb(a, r.type);
  a !== i && (G(Gr, r), G(qr, i));
}
function Ih(r) {
  Gr.current === r && (E(qr), E(Gr));
}
var Kr = Tf(0);
function Jh(r) {
  for (var a = r; null !== a; ) {
    if (13 === a.tag) {
      var i = a.memoizedState;
      if (
        null !== i &&
        ((i = i.dehydrated), null === i || "$?" === i.data || "$!" === i.data)
      )
        return a;
    } else if (19 === a.tag && void 0 !== a.memoizedProps.revealOrder) {
      if (0 !== (128 & a.flags)) return a;
    } else if (null !== a.child) {
      a.child.return = a;
      a = a.child;
      continue;
    }
    if (a === r) break;
    for (; null === a.sibling; ) {
      if (null === a.return || a.return === r) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    a = a.sibling;
  }
  return null;
}
var Yr = [];
function Lh() {
  for (var r = 0; r < Yr.length; r++)
    Yr[r]._workInProgressVersionPrimary = null;
  Yr.length = 0;
}
var Xr = F.ReactCurrentDispatcher,
  Zr = F.ReactCurrentBatchConfig,
  tl = 0,
  rl = null,
  ul = null,
  sl = null,
  vl = !1,
  yl = !1,
  wl = 0,
  Sl = 0;
function O() {
  throw Error(p(321));
}
function Th(r, a) {
  if (null === a) return !1;
  for (var i = 0; i < a.length && i < r.length; i++)
    if (!Pt(r[i], a[i])) return !1;
  return !0;
}
function Uh(r, a, i, o, s, v) {
  tl = v;
  rl = a;
  a.memoizedState = null;
  a.updateQueue = null;
  a.lanes = 0;
  Xr.current = null === r || null === r.memoizedState ? xl : Cl;
  r = i(o, s);
  if (yl) {
    v = 0;
    do {
      yl = !1;
      wl = 0;
      if (25 <= v) throw Error(p(301));
      v += 1;
      sl = ul = null;
      a.updateQueue = null;
      Xr.current = zl;
      r = i(o, s);
    } while (yl);
  }
  Xr.current = El;
  a = null !== ul && null !== ul.next;
  tl = 0;
  sl = ul = rl = null;
  vl = !1;
  if (a) throw Error(p(300));
  return r;
}
function Zh() {
  var r = 0 !== wl;
  wl = 0;
  return r;
}
function $h() {
  var r = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  null === sl ? (rl.memoizedState = sl = r) : (sl = sl.next = r);
  return sl;
}
function ai() {
  if (null === ul) {
    var r = rl.alternate;
    r = null !== r ? r.memoizedState : null;
  } else r = ul.next;
  var a = null === sl ? rl.memoizedState : sl.next;
  if (null !== a) (sl = a), (ul = r);
  else {
    if (null === r) throw Error(p(310));
    ul = r;
    r = {
      memoizedState: ul.memoizedState,
      baseState: ul.baseState,
      baseQueue: ul.baseQueue,
      queue: ul.queue,
      next: null,
    };
    null === sl ? (rl.memoizedState = sl = r) : (sl = sl.next = r);
  }
  return sl;
}
function bi(r, a) {
  return "function" === typeof a ? a(r) : a;
}
function ci(r) {
  var a = ai(),
    i = a.queue;
  if (null === i) throw Error(p(311));
  i.lastRenderedReducer = r;
  var o = ul,
    s = o.baseQueue,
    v = i.pending;
  if (null !== v) {
    if (null !== s) {
      var S = s.next;
      s.next = v.next;
      v.next = S;
    }
    o.baseQueue = s = v;
    i.pending = null;
  }
  if (null !== s) {
    v = s.next;
    o = o.baseState;
    var x = (S = null),
      C = null,
      z = v;
    do {
      var N = z.lane;
      if ((tl & N) === N)
        null !== C &&
          (C = C.next =
            {
              lane: 0,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null,
            }),
          (o = z.hasEagerState ? z.eagerState : r(o, z.action));
      else {
        var j = {
          lane: N,
          action: z.action,
          hasEagerState: z.hasEagerState,
          eagerState: z.eagerState,
          next: null,
        };
        null === C ? ((x = C = j), (S = o)) : (C = C.next = j);
        rl.lanes |= N;
        ta |= N;
      }
      z = z.next;
    } while (null !== z && z !== v);
    null === C ? (S = o) : (C.next = x);
    Pt(o, a.memoizedState) || (Dl = !0);
    a.memoizedState = o;
    a.baseState = S;
    a.baseQueue = C;
    i.lastRenderedState = o;
  }
  r = i.interleaved;
  if (null !== r) {
    s = r;
    do {
      (v = s.lane), (rl.lanes |= v), (ta |= v), (s = s.next);
    } while (s !== r);
  } else null === s && (i.lanes = 0);
  return [a.memoizedState, i.dispatch];
}
function di(r) {
  var a = ai(),
    i = a.queue;
  if (null === i) throw Error(p(311));
  i.lastRenderedReducer = r;
  var o = i.dispatch,
    s = i.pending,
    v = a.memoizedState;
  if (null !== s) {
    i.pending = null;
    var S = (s = s.next);
    do {
      (v = r(v, S.action)), (S = S.next);
    } while (S !== s);
    Pt(v, a.memoizedState) || (Dl = !0);
    a.memoizedState = v;
    null === a.baseQueue && (a.baseState = v);
    i.lastRenderedState = v;
  }
  return [v, o];
}
function ei() {}
function fi(r, a) {
  var i = rl,
    o = ai(),
    s = a(),
    v = !Pt(o.memoizedState, s);
  v && ((o.memoizedState = s), (Dl = !0));
  o = o.queue;
  gi(hi.bind(null, i, o, r), [r]);
  if (o.getSnapshot !== a || v || (null !== sl && 1 & sl.memoizedState.tag)) {
    i.flags |= 2048;
    ii(9, ji.bind(null, i, o, s, a), void 0, null);
    if (null === Gl) throw Error(p(349));
    0 !== (30 & tl) || ki(i, a, s);
  }
  return s;
}
function ki(r, a, i) {
  r.flags |= 16384;
  r = { getSnapshot: a, value: i };
  a = rl.updateQueue;
  null === a
    ? ((a = { lastEffect: null, stores: null }),
      (rl.updateQueue = a),
      (a.stores = [r]))
    : ((i = a.stores), null === i ? (a.stores = [r]) : i.push(r));
}
function ji(r, a, i, o) {
  a.value = i;
  a.getSnapshot = o;
  li(a) && Lg(r, 1, -1);
}
function hi(r, a, i) {
  return i(function () {
    li(a) && Lg(r, 1, -1);
  });
}
function li(r) {
  var a = r.getSnapshot;
  r = r.value;
  try {
    var i = a();
    return !Pt(r, i);
  } catch (r) {
    return !0;
  }
}
function mi(r) {
  var a = $h();
  "function" === typeof r && (r = r());
  a.memoizedState = a.baseState = r;
  r = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: bi,
    lastRenderedState: r,
  };
  a.queue = r;
  r = r.dispatch = ni.bind(null, rl, r);
  return [a.memoizedState, r];
}
function ii(r, a, i, o) {
  r = { tag: r, create: a, destroy: i, deps: o, next: null };
  a = rl.updateQueue;
  null === a
    ? ((a = { lastEffect: null, stores: null }),
      (rl.updateQueue = a),
      (a.lastEffect = r.next = r))
    : ((i = a.lastEffect),
      null === i
        ? (a.lastEffect = r.next = r)
        : ((o = i.next), (i.next = r), (r.next = o), (a.lastEffect = r)));
  return r;
}
function oi() {
  return ai().memoizedState;
}
function pi(r, a, i, o) {
  var s = $h();
  rl.flags |= r;
  s.memoizedState = ii(1 | a, i, void 0, void 0 === o ? null : o);
}
function qi(r, a, i, o) {
  var s = ai();
  o = void 0 === o ? null : o;
  var v = void 0;
  if (null !== ul) {
    var S = ul.memoizedState;
    v = S.destroy;
    if (null !== o && Th(o, S.deps)) {
      s.memoizedState = ii(a, i, v, o);
      return;
    }
  }
  rl.flags |= r;
  s.memoizedState = ii(1 | a, i, v, o);
}
function ri(r, a) {
  return pi(8390656, 8, r, a);
}
function gi(r, a) {
  return qi(2048, 8, r, a);
}
function si(r, a) {
  return qi(4, 2, r, a);
}
function ti(r, a) {
  return qi(4, 4, r, a);
}
function ui(r, a) {
  return "function" === typeof a
    ? ((r = r()),
      a(r),
      function () {
        a(null);
      })
    : null !== a && void 0 !== a
    ? ((r = r()),
      (a.current = r),
      function () {
        a.current = null;
      })
    : void 0;
}
function vi(r, a, i) {
  i = null !== i && void 0 !== i ? i.concat([r]) : null;
  return qi(4, 4, ui.bind(null, a, r), i);
}
function wi() {}
function xi(r, a) {
  var i = ai();
  a = void 0 === a ? null : a;
  var o = i.memoizedState;
  if (null !== o && null !== a && Th(a, o[1])) return o[0];
  i.memoizedState = [r, a];
  return r;
}
function yi(r, a) {
  var i = ai();
  a = void 0 === a ? null : a;
  var o = i.memoizedState;
  if (null !== o && null !== a && Th(a, o[1])) return o[0];
  r = r();
  i.memoizedState = [r, a];
  return r;
}
function zi(r, a, i) {
  if (0 === (21 & tl))
    return (
      r.baseState && ((r.baseState = !1), (Dl = !0)), (r.memoizedState = i)
    );
  Pt(i, a) || ((i = xc()), (rl.lanes |= i), (ta |= i), (r.baseState = !0));
  return a;
}
function Ai(r, a) {
  var i = mn;
  mn = 0 !== i && 4 > i ? i : 4;
  r(!0);
  var o = Zr.transition;
  Zr.transition = {};
  try {
    r(!1), a();
  } finally {
    (mn = i), (Zr.transition = o);
  }
}
function Bi() {
  return ai().memoizedState;
}
function Ci(r, a, i) {
  var o = Kg(r);
  i = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null };
  Di(r)
    ? Ei(a, i)
    : (Fi(r, a, i), (i = Jg()), (r = Lg(r, o, i)), null !== r && Gi(r, a, o));
}
function ni(r, a, i) {
  var o = Kg(r),
    s = { lane: o, action: i, hasEagerState: !1, eagerState: null, next: null };
  if (Di(r)) Ei(a, s);
  else {
    Fi(r, a, s);
    var v = r.alternate;
    if (
      0 === r.lanes &&
      (null === v || 0 === v.lanes) &&
      ((v = a.lastRenderedReducer), null !== v)
    )
      try {
        var S = a.lastRenderedState,
          x = v(S, i);
        s.hasEagerState = !0;
        s.eagerState = x;
        if (Pt(x, S)) return;
      } catch (r) {}
    i = Jg();
    r = Lg(r, o, i);
    null !== r && Gi(r, a, o);
  }
}
function Di(r) {
  var a = r.alternate;
  return r === rl || (null !== a && a === rl);
}
function Ei(r, a) {
  yl = vl = !0;
  var i = r.pending;
  null === i ? (a.next = a) : ((a.next = i.next), (i.next = a));
  r.pending = a;
}
function Fi(r, a, i) {
  Bg(r)
    ? ((r = a.interleaved),
      null === r
        ? ((i.next = i), null === Nr ? (Nr = [a]) : Nr.push(a))
        : ((i.next = r.next), (r.next = i)),
      (a.interleaved = i))
    : ((r = a.pending),
      null === r ? (i.next = i) : ((i.next = r.next), (r.next = i)),
      (a.pending = i));
}
function Gi(r, a, i) {
  if (0 !== (4194240 & i)) {
    var o = a.lanes;
    o &= r.pendingLanes;
    i |= o;
    a.lanes = i;
    Bc(r, i);
  }
}
var El = {
    readContext: ug,
    useCallback: O,
    useContext: O,
    useEffect: O,
    useImperativeHandle: O,
    useInsertionEffect: O,
    useLayoutEffect: O,
    useMemo: O,
    useReducer: O,
    useRef: O,
    useState: O,
    useDebugValue: O,
    useDeferredValue: O,
    useTransition: O,
    useMutableSource: O,
    useSyncExternalStore: O,
    useId: O,
    unstable_isNewReconciler: !1,
  },
  xl = {
    readContext: ug,
    useCallback: function (r, a) {
      $h().memoizedState = [r, void 0 === a ? null : a];
      return r;
    },
    useContext: ug,
    useEffect: ri,
    useImperativeHandle: function (r, a, i) {
      i = null !== i && void 0 !== i ? i.concat([r]) : null;
      return pi(4194308, 4, ui.bind(null, a, r), i);
    },
    useLayoutEffect: function (r, a) {
      return pi(4194308, 4, r, a);
    },
    useInsertionEffect: function (r, a) {
      return pi(4, 2, r, a);
    },
    useMemo: function (r, a) {
      var i = $h();
      a = void 0 === a ? null : a;
      r = r();
      i.memoizedState = [r, a];
      return r;
    },
    useReducer: function (r, a, i) {
      var o = $h();
      a = void 0 !== i ? i(a) : a;
      o.memoizedState = o.baseState = a;
      r = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: r,
        lastRenderedState: a,
      };
      o.queue = r;
      r = r.dispatch = Ci.bind(null, rl, r);
      return [o.memoizedState, r];
    },
    useRef: function (r) {
      var a = $h();
      r = { current: r };
      return (a.memoizedState = r);
    },
    useState: mi,
    useDebugValue: wi,
    useDeferredValue: function (r) {
      return ($h().memoizedState = r);
    },
    useTransition: function () {
      var r = mi(!1),
        a = r[0];
      r = Ai.bind(null, r[1]);
      $h().memoizedState = r;
      return [a, r];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (r, a, i) {
      var o = rl,
        s = $h();
      if (Br) {
        if (void 0 === i) throw Error(p(407));
        i = i();
      } else {
        i = a();
        if (null === Gl) throw Error(p(349));
        0 !== (30 & tl) || ki(o, a, i);
      }
      s.memoizedState = i;
      var v = { value: i, getSnapshot: a };
      s.queue = v;
      ri(hi.bind(null, o, v, r), [r]);
      o.flags |= 2048;
      ii(9, ji.bind(null, o, v, i, a), void 0, null);
      return i;
    },
    useId: function () {
      var r = $h(),
        a = Gl.identifierPrefix;
      if (Br) {
        var i = Ir;
        var o = Ur;
        i = (o & ~(1 << (32 - fn(o) - 1))).toString(32) + i;
        a = ":" + a + "R" + i;
        i = wl++;
        0 < i && (a += "H" + i.toString(32));
        a += ":";
      } else (i = Sl++), (a = ":" + a + "r" + i.toString(32) + ":");
      return (r.memoizedState = a);
    },
    unstable_isNewReconciler: !1,
  },
  Cl = {
    readContext: ug,
    useCallback: xi,
    useContext: ug,
    useEffect: gi,
    useImperativeHandle: vi,
    useInsertionEffect: si,
    useLayoutEffect: ti,
    useMemo: yi,
    useReducer: ci,
    useRef: oi,
    useState: function () {
      return ci(bi);
    },
    useDebugValue: wi,
    useDeferredValue: function (r) {
      var a = ai();
      return zi(a, ul.memoizedState, r);
    },
    useTransition: function () {
      var r = ci(bi)[0],
        a = ai().memoizedState;
      return [r, a];
    },
    useMutableSource: ei,
    useSyncExternalStore: fi,
    useId: Bi,
    unstable_isNewReconciler: !1,
  },
  zl = {
    readContext: ug,
    useCallback: xi,
    useContext: ug,
    useEffect: gi,
    useImperativeHandle: vi,
    useInsertionEffect: si,
    useLayoutEffect: ti,
    useMemo: yi,
    useReducer: di,
    useRef: oi,
    useState: function () {
      return di(bi);
    },
    useDebugValue: wi,
    useDeferredValue: function (r) {
      var a = ai();
      return null === ul ? (a.memoizedState = r) : zi(a, ul.memoizedState, r);
    },
    useTransition: function () {
      var r = di(bi)[0],
        a = ai().memoizedState;
      return [r, a];
    },
    useMutableSource: ei,
    useSyncExternalStore: fi,
    useId: Bi,
    unstable_isNewReconciler: !1,
  };
function Hi(r, a) {
  try {
    var i = "",
      o = a;
    do {
      (i += Oa(o)), (o = o.return);
    } while (o);
    var s = i;
  } catch (r) {
    s = "\nError generating stack: " + r.message + "\n" + r.stack;
  }
  return { value: r, source: a, stack: s };
}
function Ii(r, a) {
  try {
    console.error(a.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Nl = "function" === typeof WeakMap ? WeakMap : Map;
function Ki(r, a, i) {
  i = zg(-1, i);
  i.tag = 3;
  i.payload = { element: null };
  var o = a.value;
  i.callback = function () {
    ma || ((ma = !0), (va = o));
    Ii(r, a);
  };
  return i;
}
function Ni(r, a, i) {
  i = zg(-1, i);
  i.tag = 3;
  var o = r.type.getDerivedStateFromError;
  if ("function" === typeof o) {
    var s = a.value;
    i.payload = function () {
      return o(s);
    };
    i.callback = function () {
      Ii(r, a);
    };
  }
  var v = r.stateNode;
  null !== v &&
    "function" === typeof v.componentDidCatch &&
    (i.callback = function () {
      Ii(r, a);
      "function" !== typeof o &&
        (null === ba ? (ba = new Set([this])) : ba.add(this));
      var i = a.stack;
      this.componentDidCatch(a.value, { componentStack: null !== i ? i : "" });
    });
  return i;
}
function Pi(r, a, i) {
  var o = r.pingCache;
  if (null === o) {
    o = r.pingCache = new Nl();
    var s = new Set();
    o.set(a, s);
  } else (s = o.get(a)), void 0 === s && ((s = new Set()), o.set(a, s));
  s.has(i) || (s.add(i), (r = Qi.bind(null, r, a, i)), a.then(r, r));
}
function Ri(r) {
  do {
    var a;
    (a = 13 === r.tag) &&
      ((a = r.memoizedState), (a = null === a || null !== a.dehydrated));
    if (a) return r;
    r = r.return;
  } while (null !== r);
  return null;
}
function Si(r, a, i, o, s) {
  if (0 === (1 & r.mode))
    return (
      r === a
        ? (r.flags |= 65536)
        : ((r.flags |= 128),
          (i.flags |= 131072),
          (i.flags &= -52805),
          1 === i.tag &&
            (null === i.alternate
              ? (i.tag = 17)
              : ((a = zg(-1, 1)), (a.tag = 2), Ag(i, a))),
          (i.lanes |= 1)),
      r
    );
  r.flags |= 65536;
  r.lanes = s;
  return r;
}
var jl, _l, Pl, Ll;
jl = function (r, a) {
  for (var i = a.child; null !== i; ) {
    if (5 === i.tag || 6 === i.tag) r.appendChild(i.stateNode);
    else if (4 !== i.tag && null !== i.child) {
      i.child.return = i;
      i = i.child;
      continue;
    }
    if (i === a) break;
    for (; null === i.sibling; ) {
      if (null === i.return || i.return === a) return;
      i = i.return;
    }
    i.sibling.return = i.return;
    i = i.sibling;
  }
};
_l = function () {};
Pl = function (r, a, i, o) {
  var s = r.memoizedProps;
  if (s !== o) {
    r = a.stateNode;
    Eh(qr.current);
    var v = null;
    switch (i) {
      case "input":
        s = Xa(r, s);
        o = Xa(r, o);
        v = [];
        break;
      case "select":
        s = oe({}, s, { value: void 0 });
        o = oe({}, o, { value: void 0 });
        v = [];
        break;
      case "textarea":
        s = fb(r, s);
        o = fb(r, o);
        v = [];
        break;
      default:
        "function" !== typeof s.onClick &&
          "function" === typeof o.onClick &&
          (r.onclick = Af);
    }
    tb(i, o);
    var S;
    i = null;
    for (N in s)
      if (!o.hasOwnProperty(N) && s.hasOwnProperty(N) && null != s[N])
        if ("style" === N) {
          var x = s[N];
          for (S in x) x.hasOwnProperty(S) && (i || (i = {}), (i[S] = ""));
        } else
          "dangerouslySetInnerHTML" !== N &&
            "children" !== N &&
            "suppressContentEditableWarning" !== N &&
            "suppressHydrationWarning" !== N &&
            "autoFocus" !== N &&
            (C.hasOwnProperty(N) ? v || (v = []) : (v = v || []).push(N, null));
    for (N in o) {
      var z = o[N];
      x = null != s ? s[N] : void 0;
      if (o.hasOwnProperty(N) && z !== x && (null != z || null != x))
        if ("style" === N)
          if (x) {
            for (S in x)
              !x.hasOwnProperty(S) ||
                (z && z.hasOwnProperty(S)) ||
                (i || (i = {}), (i[S] = ""));
            for (S in z)
              z.hasOwnProperty(S) &&
                x[S] !== z[S] &&
                (i || (i = {}), (i[S] = z[S]));
          } else i || (v || (v = []), v.push(N, i)), (i = z);
        else
          "dangerouslySetInnerHTML" === N
            ? ((z = z ? z.__html : void 0),
              (x = x ? x.__html : void 0),
              null != z && x !== z && (v = v || []).push(N, z))
            : "children" === N
            ? ("string" !== typeof z && "number" !== typeof z) ||
              (v = v || []).push(N, "" + z)
            : "suppressContentEditableWarning" !== N &&
              "suppressHydrationWarning" !== N &&
              (C.hasOwnProperty(N)
                ? (null != z && "onScroll" === N && D("scroll", r),
                  v || x === z || (v = []))
                : (v = v || []).push(N, z));
    }
    i && (v = v || []).push("style", i);
    var N = v;
    (a.updateQueue = N) && (a.flags |= 4);
  }
};
Ll = function (r, a, i, o) {
  i !== o && (a.flags |= 4);
};
function Xi(r, a) {
  if (!Br)
    switch (r.tailMode) {
      case "hidden":
        a = r.tail;
        for (var i = null; null !== a; )
          null !== a.alternate && (i = a), (a = a.sibling);
        null === i ? (r.tail = null) : (i.sibling = null);
        break;
      case "collapsed":
        i = r.tail;
        for (var o = null; null !== i; )
          null !== i.alternate && (o = i), (i = i.sibling);
        null === o
          ? a || null === r.tail
            ? (r.tail = null)
            : (r.tail.sibling = null)
          : (o.sibling = null);
    }
}
function Q(r) {
  var a = null !== r.alternate && r.alternate.child === r.child,
    i = 0,
    o = 0;
  if (a)
    for (var s = r.child; null !== s; )
      (i |= s.lanes | s.childLanes),
        (o |= 14680064 & s.subtreeFlags),
        (o |= 14680064 & s.flags),
        (s.return = r),
        (s = s.sibling);
  else
    for (s = r.child; null !== s; )
      (i |= s.lanes | s.childLanes),
        (o |= s.subtreeFlags),
        (o |= s.flags),
        (s.return = r),
        (s = s.sibling);
  r.subtreeFlags |= o;
  r.childLanes = i;
  return a;
}
function Yi(r, a, i) {
  var o = a.pendingProps;
  ch(a);
  switch (a.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Q(a), null;
    case 1:
      return Yf(a.type) && Zf(), Q(a), null;
    case 3:
      o = a.stateNode;
      Gh();
      E(vr);
      E(mr);
      Lh();
      o.pendingContext &&
        ((o.context = o.pendingContext), (o.pendingContext = null));
      (null !== r && null !== r.child) ||
        (mh(a)
          ? (a.flags |= 4)
          : null === r ||
            (r.memoizedState.isDehydrated && 0 === (256 & a.flags)) ||
            ((a.flags |= 1024), null !== $r && (Zi($r), ($r = null))));
      _l(r, a);
      Q(a);
      return null;
    case 5:
      Ih(a);
      var s = Eh(Jr.current);
      i = a.type;
      if (null !== r && null != a.stateNode)
        Pl(r, a, i, o, s),
          r.ref !== a.ref && ((a.flags |= 512), (a.flags |= 2097152));
      else {
        if (!o) {
          if (null === a.stateNode) throw Error(p(166));
          Q(a);
          return null;
        }
        r = Eh(qr.current);
        if (mh(a)) {
          o = a.stateNode;
          i = a.type;
          var v = a.memoizedProps;
          o[ur] = a;
          o[or] = v;
          r = 0 !== (1 & a.mode);
          switch (i) {
            case "dialog":
              D("cancel", o);
              D("close", o);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", o);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Jt.length; s++) D(Jt[s], o);
              break;
            case "source":
              D("error", o);
              break;
            case "img":
            case "image":
            case "link":
              D("error", o);
              D("load", o);
              break;
            case "details":
              D("toggle", o);
              break;
            case "input":
              Ya(o, v);
              D("invalid", o);
              break;
            case "select":
              o._wrapperState = { wasMultiple: !!v.multiple };
              D("invalid", o);
              break;
            case "textarea":
              gb(o, v), D("invalid", o);
          }
          tb(i, v);
          s = null;
          for (var S in v)
            if (v.hasOwnProperty(S)) {
              var x = v[S];
              "children" === S
                ? "string" === typeof x
                  ? o.textContent !== x &&
                    (!0 !== v.suppressHydrationWarning &&
                      zf(o.textContent, x, r),
                    (s = ["children", x]))
                  : "number" === typeof x &&
                    o.textContent !== "" + x &&
                    (!0 !== v.suppressHydrationWarning &&
                      zf(o.textContent, x, r),
                    (s = ["children", "" + x]))
                : C.hasOwnProperty(S) &&
                  null != x &&
                  "onScroll" === S &&
                  D("scroll", o);
            }
          switch (i) {
            case "input":
              Ua(o);
              cb(o, v, !0);
              break;
            case "textarea":
              Ua(o);
              ib(o);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof v.onClick && (o.onclick = Af);
          }
          o = s;
          a.updateQueue = o;
          null !== o && (a.flags |= 4);
        } else {
          S = 9 === s.nodeType ? s : s.ownerDocument;
          "http://www.w3.org/1999/xhtml" === r && (r = jb(i));
          "http://www.w3.org/1999/xhtml" === r
            ? "script" === i
              ? ((r = S.createElement("div")),
                (r.innerHTML = "<script></script>"),
                (r = r.removeChild(r.firstChild)))
              : "string" === typeof o.is
              ? (r = S.createElement(i, { is: o.is }))
              : ((r = S.createElement(i)),
                "select" === i &&
                  ((S = r),
                  o.multiple ? (S.multiple = !0) : o.size && (S.size = o.size)))
            : (r = S.createElementNS(r, i));
          r[ur] = a;
          r[or] = o;
          jl(r, a, !1, !1);
          a.stateNode = r;
          e: {
            S = ub(i, o);
            switch (i) {
              case "dialog":
                D("cancel", r);
                D("close", r);
                s = o;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", r);
                s = o;
                break;
              case "video":
              case "audio":
                for (s = 0; s < Jt.length; s++) D(Jt[s], r);
                s = o;
                break;
              case "source":
                D("error", r);
                s = o;
                break;
              case "img":
              case "image":
              case "link":
                D("error", r);
                D("load", r);
                s = o;
                break;
              case "details":
                D("toggle", r);
                s = o;
                break;
              case "input":
                Ya(r, o);
                s = Xa(r, o);
                D("invalid", r);
                break;
              case "option":
                s = o;
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple };
                s = oe({}, o, { value: void 0 });
                D("invalid", r);
                break;
              case "textarea":
                gb(r, o);
                s = fb(r, o);
                D("invalid", r);
                break;
              default:
                s = o;
            }
            tb(i, s);
            x = s;
            for (v in x)
              if (x.hasOwnProperty(v)) {
                var z = x[v];
                "style" === v
                  ? rb(r, z)
                  : "dangerouslySetInnerHTML" === v
                  ? ((z = z ? z.__html : void 0), null != z && he(r, z))
                  : "children" === v
                  ? "string" === typeof z
                    ? ("textarea" !== i || "" !== z) && nb(r, z)
                    : "number" === typeof z && nb(r, "" + z)
                  : "suppressContentEditableWarning" !== v &&
                    "suppressHydrationWarning" !== v &&
                    "autoFocus" !== v &&
                    (C.hasOwnProperty(v)
                      ? null != z && "onScroll" === v && D("scroll", r)
                      : null != z && sa(r, v, z, S));
              }
            switch (i) {
              case "input":
                Ua(r);
                cb(r, o, !1);
                break;
              case "textarea":
                Ua(r);
                ib(r);
                break;
              case "option":
                null != o.value && r.setAttribute("value", "" + Ra(o.value));
                break;
              case "select":
                r.multiple = !!o.multiple;
                v = o.value;
                null != v
                  ? eb(r, !!o.multiple, v, !1)
                  : null != o.defaultValue &&
                    eb(r, !!o.multiple, o.defaultValue, !0);
                break;
              default:
                "function" === typeof s.onClick && (r.onclick = Af);
            }
            switch (i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
          }
          o && (a.flags |= 4);
        }
        null !== a.ref && ((a.flags |= 512), (a.flags |= 2097152));
      }
      Q(a);
      return null;
    case 6:
      if (r && null != a.stateNode) Ll(r, a, r.memoizedProps, o);
      else {
        if ("string" !== typeof o && null === a.stateNode) throw Error(p(166));
        i = Eh(Jr.current);
        Eh(qr.current);
        if (mh(a)) {
          o = a.stateNode;
          i = a.memoizedProps;
          o[ur] = a;
          if ((v = o.nodeValue !== i) && ((r = Ar), null !== r))
            switch (r.tag) {
              case 3:
                zf(o.nodeValue, i, 0 !== (1 & r.mode));
                break;
              case 5:
                !0 !== r.memoizedProps.suppressHydrationWarning &&
                  zf(o.nodeValue, i, 0 !== (1 & r.mode));
            }
          v && (a.flags |= 4);
        } else
          (o = (9 === i.nodeType ? i : i.ownerDocument).createTextNode(o)),
            (o[ur] = a),
            (a.stateNode = o);
      }
      Q(a);
      return null;
    case 13:
      E(Kr);
      o = a.memoizedState;
      if (Br && null !== Qr && 0 !== (1 & a.mode) && 0 === (128 & a.flags)) {
        for (o = Qr; o; ) o = Kf(o.nextSibling);
        nh();
        a.flags |= 98560;
        return a;
      }
      if (null !== o && null !== o.dehydrated) {
        o = mh(a);
        if (null === r) {
          if (!o) throw Error(p(318));
          o = a.memoizedState;
          o = null !== o ? o.dehydrated : null;
          if (!o) throw Error(p(317));
          o[ur] = a;
        } else
          nh(),
            0 === (128 & a.flags) && (a.memoizedState = null),
            (a.flags |= 4);
        Q(a);
        return null;
      }
      null !== $r && (Zi($r), ($r = null));
      if (0 !== (128 & a.flags)) return (a.lanes = i), a;
      o = null !== o;
      i = !1;
      null === r ? mh(a) : (i = null !== r.memoizedState);
      o !== i &&
        o &&
        ((a.child.flags |= 8192),
        0 !== (1 & a.mode) &&
          (null === r || 0 !== (1 & Kr.current) ? 0 === Zl && (Zl = 3) : $i()));
      null !== a.updateQueue && (a.flags |= 4);
      Q(a);
      return null;
    case 4:
      return (
        Gh(), _l(r, a), null === r && rf(a.stateNode.containerInfo), Q(a), null
      );
    case 10:
      return qg(a.type._context), Q(a), null;
    case 17:
      return Yf(a.type) && Zf(), Q(a), null;
    case 19:
      E(Kr);
      v = a.memoizedState;
      if (null === v) return Q(a), null;
      o = 0 !== (128 & a.flags);
      S = v.rendering;
      if (null === S)
        if (o) Xi(v, !1);
        else {
          if (0 !== Zl || (null !== r && 0 !== (128 & r.flags)))
            for (r = a.child; null !== r; ) {
              S = Jh(r);
              if (null !== S) {
                a.flags |= 128;
                Xi(v, !1);
                o = S.updateQueue;
                null !== o && ((a.updateQueue = o), (a.flags |= 4));
                a.subtreeFlags = 0;
                o = i;
                for (i = a.child; null !== i; )
                  (v = i),
                    (r = o),
                    (v.flags &= 14680066),
                    (S = v.alternate),
                    null === S
                      ? ((v.childLanes = 0),
                        (v.lanes = r),
                        (v.child = null),
                        (v.subtreeFlags = 0),
                        (v.memoizedProps = null),
                        (v.memoizedState = null),
                        (v.updateQueue = null),
                        (v.dependencies = null),
                        (v.stateNode = null))
                      : ((v.childLanes = S.childLanes),
                        (v.lanes = S.lanes),
                        (v.child = S.child),
                        (v.subtreeFlags = 0),
                        (v.deletions = null),
                        (v.memoizedProps = S.memoizedProps),
                        (v.memoizedState = S.memoizedState),
                        (v.updateQueue = S.updateQueue),
                        (v.type = S.type),
                        (r = S.dependencies),
                        (v.dependencies =
                          null === r
                            ? null
                            : {
                                lanes: r.lanes,
                                firstContext: r.firstContext,
                              })),
                    (i = i.sibling);
                G(Kr, (1 & Kr.current) | 2);
                return a.child;
              }
              r = r.sibling;
            }
          null !== v.tail &&
            nn() > da &&
            ((a.flags |= 128), (o = !0), Xi(v, !1), (a.lanes = 4194304));
        }
      else {
        if (!o)
          if (((r = Jh(S)), null !== r)) {
            if (
              ((a.flags |= 128),
              (o = !0),
              (i = r.updateQueue),
              null !== i && ((a.updateQueue = i), (a.flags |= 4)),
              Xi(v, !0),
              null === v.tail && "hidden" === v.tailMode && !S.alternate && !Br)
            )
              return Q(a), null;
          } else
            2 * nn() - v.renderingStartTime > da &&
              1073741824 !== i &&
              ((a.flags |= 128), (o = !0), Xi(v, !1), (a.lanes = 4194304));
        v.isBackwards
          ? ((S.sibling = a.child), (a.child = S))
          : ((i = v.last),
            null !== i ? (i.sibling = S) : (a.child = S),
            (v.last = S));
      }
      if (null !== v.tail)
        return (
          (a = v.tail),
          (v.rendering = a),
          (v.tail = a.sibling),
          (v.renderingStartTime = nn()),
          (a.sibling = null),
          (i = Kr.current),
          G(Kr, o ? (1 & i) | 2 : 1 & i),
          a
        );
      Q(a);
      return null;
    case 22:
    case 23:
      return (
        bj(),
        (o = null !== a.memoizedState),
        null !== r && (null !== r.memoizedState) !== o && (a.flags |= 8192),
        o && 0 !== (1 & a.mode)
          ? 0 !== (1073741824 & Yl) &&
            (Q(a), 6 & a.subtreeFlags && (a.flags |= 8192))
          : Q(a),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, a.tag));
}
var Tl = F.ReactCurrentOwner,
  Dl = !1;
function ej(r, a, i, o) {
  a.child = null === r ? Wr(a, null, i, o) : Vr(a, r.child, i, o);
}
function fj(r, a, i, o, s) {
  i = i.render;
  var v = a.ref;
  sg(a, s);
  o = Uh(r, a, i, o, v, s);
  i = Zh();
  if (null !== r && !Dl)
    return (
      (a.updateQueue = r.updateQueue),
      (a.flags &= -2053),
      (r.lanes &= ~s),
      gj(r, a, s)
    );
  Br && i && bh(a);
  a.flags |= 1;
  ej(r, a, o, s);
  return a.child;
}
function hj(r, a, i, o, s) {
  if (null === r) {
    var v = i.type;
    if (
      "function" === typeof v &&
      !ij(v) &&
      void 0 === v.defaultProps &&
      null === i.compare &&
      void 0 === i.defaultProps
    )
      return (a.tag = 15), (a.type = v), jj(r, a, v, o, s);
    r = vh(i.type, null, o, a, a.mode, s);
    r.ref = a.ref;
    r.return = a;
    return (a.child = r);
  }
  v = r.child;
  if (0 === (r.lanes & s)) {
    var S = v.memoizedProps;
    i = i.compare;
    i = null !== i ? i : He;
    if (i(S, o) && r.ref === a.ref) return gj(r, a, s);
  }
  a.flags |= 1;
  r = th(v, o);
  r.ref = a.ref;
  r.return = a;
  return (a.child = r);
}
function jj(r, a, i, o, s) {
  if (null !== r) {
    var v = r.memoizedProps;
    if (He(v, o) && r.ref === a.ref) {
      if (((Dl = !1), (a.pendingProps = o = v), 0 === (r.lanes & s)))
        return (a.lanes = r.lanes), gj(r, a, s);
      0 !== (131072 & r.flags) && (Dl = !0);
    }
  }
  return kj(r, a, i, o, s);
}
function lj(r, a, i) {
  var o = a.pendingProps,
    s = o.children,
    v = null !== r ? r.memoizedState : null;
  if ("hidden" === o.mode)
    if (0 === (1 & a.mode))
      (a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(Xl, Yl),
        (Yl |= i);
    else {
      if (0 === (1073741824 & i))
        return (
          (r = null !== v ? v.baseLanes | i : i),
          (a.lanes = a.childLanes = 1073741824),
          (a.memoizedState = {
            baseLanes: r,
            cachePool: null,
            transitions: null,
          }),
          (a.updateQueue = null),
          G(Xl, Yl),
          (Yl |= r),
          null
        );
      (a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (o = null !== v ? v.baseLanes : i),
        G(Xl, Yl),
        (Yl |= o);
    }
  else
    null !== v ? ((o = v.baseLanes | i), (a.memoizedState = null)) : (o = i),
      G(Xl, Yl),
      (Yl |= o);
  ej(r, a, s, i);
  return a.child;
}
function nj(r, a) {
  var i = a.ref;
  ((null === r && null !== i) || (null !== r && r.ref !== i)) &&
    ((a.flags |= 512), (a.flags |= 2097152));
}
function kj(r, a, i, o, s) {
  var v = Yf(i) ? br : mr.current;
  v = Xf(a, v);
  sg(a, s);
  i = Uh(r, a, i, o, v, s);
  o = Zh();
  if (null !== r && !Dl)
    return (
      (a.updateQueue = r.updateQueue),
      (a.flags &= -2053),
      (r.lanes &= ~s),
      gj(r, a, s)
    );
  Br && o && bh(a);
  a.flags |= 1;
  ej(r, a, i, s);
  return a.child;
}
function oj(r, a, i, o, s) {
  if (Yf(i)) {
    var v = !0;
    bg(a);
  } else v = !1;
  sg(a, s);
  if (null === a.stateNode)
    null !== r && ((r.alternate = null), (a.alternate = null), (a.flags |= 2)),
      Og(a, i, o),
      Qg(a, i, o, s),
      (o = !0);
  else if (null === r) {
    var S = a.stateNode,
      x = a.memoizedProps;
    S.props = x;
    var C = S.context,
      z = i.contextType;
    "object" === typeof z && null !== z
      ? (z = ug(z))
      : ((z = Yf(i) ? br : mr.current), (z = Xf(a, z)));
    var N = i.getDerivedStateFromProps,
      j =
        "function" === typeof N ||
        "function" === typeof S.getSnapshotBeforeUpdate;
    j ||
      ("function" !== typeof S.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof S.componentWillReceiveProps) ||
      ((x !== o || C !== z) && Pg(a, S, o, z));
    jr = !1;
    var _ = a.memoizedState;
    S.state = _;
    Eg(a, o, S, s);
    C = a.memoizedState;
    x !== o || _ !== C || vr.current || jr
      ? ("function" === typeof N && (Ig(a, i, N, o), (C = a.memoizedState)),
        (x = jr || Ng(a, i, x, o, _, C, z))
          ? (j ||
              ("function" !== typeof S.UNSAFE_componentWillMount &&
                "function" !== typeof S.componentWillMount) ||
              ("function" === typeof S.componentWillMount &&
                S.componentWillMount(),
              "function" === typeof S.UNSAFE_componentWillMount &&
                S.UNSAFE_componentWillMount()),
            "function" === typeof S.componentDidMount && (a.flags |= 4194308))
          : ("function" === typeof S.componentDidMount && (a.flags |= 4194308),
            (a.memoizedProps = o),
            (a.memoizedState = C)),
        (S.props = o),
        (S.state = C),
        (S.context = z),
        (o = x))
      : ("function" === typeof S.componentDidMount && (a.flags |= 4194308),
        (o = !1));
  } else {
    S = a.stateNode;
    yg(r, a);
    x = a.memoizedProps;
    z = a.type === a.elementType ? x : kg(a.type, x);
    S.props = z;
    j = a.pendingProps;
    _ = S.context;
    C = i.contextType;
    "object" === typeof C && null !== C
      ? (C = ug(C))
      : ((C = Yf(i) ? br : mr.current), (C = Xf(a, C)));
    var P = i.getDerivedStateFromProps;
    (N =
      "function" === typeof P ||
      "function" === typeof S.getSnapshotBeforeUpdate) ||
      ("function" !== typeof S.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof S.componentWillReceiveProps) ||
      ((x !== j || _ !== C) && Pg(a, S, o, C));
    jr = !1;
    _ = a.memoizedState;
    S.state = _;
    Eg(a, o, S, s);
    var L = a.memoizedState;
    x !== j || _ !== L || vr.current || jr
      ? ("function" === typeof P && (Ig(a, i, P, o), (L = a.memoizedState)),
        (z = jr || Ng(a, i, z, o, _, L, C) || !1)
          ? (N ||
              ("function" !== typeof S.UNSAFE_componentWillUpdate &&
                "function" !== typeof S.componentWillUpdate) ||
              ("function" === typeof S.componentWillUpdate &&
                S.componentWillUpdate(o, L, C),
              "function" === typeof S.UNSAFE_componentWillUpdate &&
                S.UNSAFE_componentWillUpdate(o, L, C)),
            "function" === typeof S.componentDidUpdate && (a.flags |= 4),
            "function" === typeof S.getSnapshotBeforeUpdate &&
              (a.flags |= 1024))
          : ("function" !== typeof S.componentDidUpdate ||
              (x === r.memoizedProps && _ === r.memoizedState) ||
              (a.flags |= 4),
            "function" !== typeof S.getSnapshotBeforeUpdate ||
              (x === r.memoizedProps && _ === r.memoizedState) ||
              (a.flags |= 1024),
            (a.memoizedProps = o),
            (a.memoizedState = L)),
        (S.props = o),
        (S.state = L),
        (S.context = C),
        (o = z))
      : ("function" !== typeof S.componentDidUpdate ||
          (x === r.memoizedProps && _ === r.memoizedState) ||
          (a.flags |= 4),
        "function" !== typeof S.getSnapshotBeforeUpdate ||
          (x === r.memoizedProps && _ === r.memoizedState) ||
          (a.flags |= 1024),
        (o = !1));
  }
  return pj(r, a, i, o, v, s);
}
function pj(r, a, i, o, s, v) {
  nj(r, a);
  var S = 0 !== (128 & a.flags);
  if (!o && !S) return s && cg(a, i, !1), gj(r, a, v);
  o = a.stateNode;
  Tl.current = a;
  var x =
    S && "function" !== typeof i.getDerivedStateFromError ? null : o.render();
  a.flags |= 1;
  null !== r && S
    ? ((a.child = Vr(a, r.child, null, v)), (a.child = Vr(a, null, x, v)))
    : ej(r, a, x, v);
  a.memoizedState = o.state;
  s && cg(a, i, !0);
  return a.child;
}
function qj(r) {
  var a = r.stateNode;
  a.pendingContext
    ? $f(r, a.pendingContext, a.pendingContext !== a.context)
    : a.context && $f(r, a.context, !1);
  Fh(r, a.containerInfo);
}
function rj(r, a, i, o, s) {
  nh();
  oh(s);
  a.flags |= 256;
  ej(r, a, i, o);
  return a.child;
}
var Ol = { dehydrated: null, treeContext: null, retryLane: 0 };
function tj(r) {
  return { baseLanes: r, cachePool: null, transitions: null };
}
function uj(r, a) {
  return {
    baseLanes: r.baseLanes | a,
    cachePool: null,
    transitions: r.transitions,
  };
}
function vj(r, a, i) {
  var o,
    s = a.pendingProps,
    v = Kr.current,
    S = !1,
    x = 0 !== (128 & a.flags);
  (o = x) || (o = (null === r || null !== r.memoizedState) && 0 !== (2 & v));
  o
    ? ((S = !0), (a.flags &= -129))
    : (null !== r && null === r.memoizedState) || (v |= 1);
  G(Kr, 1 & v);
  if (null === r) {
    kh(a);
    r = a.memoizedState;
    if (null !== r && ((r = r.dehydrated), null !== r))
      return (
        0 === (1 & a.mode)
          ? (a.lanes = 1)
          : "$!" === r.data
          ? (a.lanes = 8)
          : (a.lanes = 1073741824),
        null
      );
    v = s.children;
    r = s.fallback;
    return S
      ? ((s = a.mode),
        (S = a.child),
        (v = { mode: "hidden", children: v }),
        0 === (1 & s) && null !== S
          ? ((S.childLanes = 0), (S.pendingProps = v))
          : (S = wj(v, s, 0, null)),
        (r = xh(r, s, i, null)),
        (S.return = a),
        (r.return = a),
        (S.sibling = r),
        (a.child = S),
        (a.child.memoizedState = tj(i)),
        (a.memoizedState = Ol),
        r)
      : xj(a, v);
  }
  v = r.memoizedState;
  if (null !== v) {
    o = v.dehydrated;
    if (null !== o) {
      if (x) {
        if (256 & a.flags) return (a.flags &= -257), yj(r, a, i, Error(p(422)));
        if (null !== a.memoizedState)
          return (a.child = r.child), (a.flags |= 128), null;
        S = s.fallback;
        v = a.mode;
        s = wj({ mode: "visible", children: s.children }, v, 0, null);
        S = xh(S, v, i, null);
        S.flags |= 2;
        s.return = a;
        S.return = a;
        s.sibling = S;
        a.child = s;
        0 !== (1 & a.mode) && Vr(a, r.child, null, i);
        a.child.memoizedState = tj(i);
        a.memoizedState = Ol;
        return S;
      }
      if (0 === (1 & a.mode)) a = yj(r, a, i, null);
      else if ("$!" === o.data) a = yj(r, a, i, Error(p(419)));
      else if (((s = 0 !== (i & r.childLanes)), Dl || s)) {
        s = Gl;
        if (null !== s) {
          switch (i & -i) {
            case 4:
              S = 2;
              break;
            case 16:
              S = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              S = 32;
              break;
            case 536870912:
              S = 268435456;
              break;
            default:
              S = 0;
          }
          s = 0 !== (S & (s.suspendedLanes | i)) ? 0 : S;
          0 !== s && s !== v.retryLane && ((v.retryLane = s), Lg(r, s, -1));
        }
        $i();
        a = yj(r, a, i, Error(p(421)));
      } else
        "$?" === o.data
          ? ((a.flags |= 128),
            (a.child = r.child),
            (a = zj.bind(null, r)),
            (o._reactRetry = a),
            (a = null))
          : ((i = v.treeContext),
            (Qr = Kf(o.nextSibling)),
            (Ar = a),
            (Br = !0),
            ($r = null),
            null !== i &&
              ((Fr[Mr++] = Ur),
              (Fr[Mr++] = Ir),
              (Fr[Mr++] = Rr),
              (Ur = i.id),
              (Ir = i.overflow),
              (Rr = a)),
            (a = xj(a, a.pendingProps.children)),
            (a.flags |= 4096));
      return a;
    }
    if (S)
      return (
        (s = Aj(r, a, s.children, s.fallback, i)),
        (S = a.child),
        (v = r.child.memoizedState),
        (S.memoizedState = null === v ? tj(i) : uj(v, i)),
        (S.childLanes = r.childLanes & ~i),
        (a.memoizedState = Ol),
        s
      );
    i = Bj(r, a, s.children, i);
    a.memoizedState = null;
    return i;
  }
  if (S)
    return (
      (s = Aj(r, a, s.children, s.fallback, i)),
      (S = a.child),
      (v = r.child.memoizedState),
      (S.memoizedState = null === v ? tj(i) : uj(v, i)),
      (S.childLanes = r.childLanes & ~i),
      (a.memoizedState = Ol),
      s
    );
  i = Bj(r, a, s.children, i);
  a.memoizedState = null;
  return i;
}
function xj(r, a) {
  a = wj({ mode: "visible", children: a }, r.mode, 0, null);
  a.return = r;
  return (r.child = a);
}
function Bj(r, a, i, o) {
  var s = r.child;
  r = s.sibling;
  i = th(s, { mode: "visible", children: i });
  0 === (1 & a.mode) && (i.lanes = o);
  i.return = a;
  i.sibling = null;
  null !== r &&
    ((o = a.deletions),
    null === o ? ((a.deletions = [r]), (a.flags |= 16)) : o.push(r));
  return (a.child = i);
}
function Aj(r, a, i, o, s) {
  var v = a.mode;
  r = r.child;
  var S = r.sibling,
    x = { mode: "hidden", children: i };
  0 === (1 & v) && a.child !== r
    ? ((i = a.child),
      (i.childLanes = 0),
      (i.pendingProps = x),
      (a.deletions = null))
    : ((i = th(r, x)), (i.subtreeFlags = 14680064 & r.subtreeFlags));
  null !== S ? (o = th(S, o)) : ((o = xh(o, v, s, null)), (o.flags |= 2));
  o.return = a;
  i.return = a;
  i.sibling = o;
  a.child = i;
  return o;
}
function yj(r, a, i, o) {
  null !== o && oh(o);
  Vr(a, r.child, null, i);
  r = xj(a, a.pendingProps.children);
  r.flags |= 2;
  a.memoizedState = null;
  return r;
}
function Cj(r, a, i) {
  r.lanes |= a;
  var o = r.alternate;
  null !== o && (o.lanes |= a);
  rg(r.return, a, i);
}
function Dj(r, a, i, o, s) {
  var v = r.memoizedState;
  null === v
    ? (r.memoizedState = {
        isBackwards: a,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: i,
        tailMode: s,
      })
    : ((v.isBackwards = a),
      (v.rendering = null),
      (v.renderingStartTime = 0),
      (v.last = o),
      (v.tail = i),
      (v.tailMode = s));
}
function Ej(r, a, i) {
  var o = a.pendingProps,
    s = o.revealOrder,
    v = o.tail;
  ej(r, a, o.children, i);
  o = Kr.current;
  if (0 !== (2 & o)) (o = (1 & o) | 2), (a.flags |= 128);
  else {
    if (null !== r && 0 !== (128 & r.flags))
      e: for (r = a.child; null !== r; ) {
        if (13 === r.tag) null !== r.memoizedState && Cj(r, i, a);
        else if (19 === r.tag) Cj(r, i, a);
        else if (null !== r.child) {
          r.child.return = r;
          r = r.child;
          continue;
        }
        if (r === a) break e;
        for (; null === r.sibling; ) {
          if (null === r.return || r.return === a) break e;
          r = r.return;
        }
        r.sibling.return = r.return;
        r = r.sibling;
      }
    o &= 1;
  }
  G(Kr, o);
  if (0 === (1 & a.mode)) a.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        i = a.child;
        for (s = null; null !== i; )
          (r = i.alternate),
            null !== r && null === Jh(r) && (s = i),
            (i = i.sibling);
        i = s;
        null === i
          ? ((s = a.child), (a.child = null))
          : ((s = i.sibling), (i.sibling = null));
        Dj(a, !1, s, i, v);
        break;
      case "backwards":
        i = null;
        s = a.child;
        for (a.child = null; null !== s; ) {
          r = s.alternate;
          if (null !== r && null === Jh(r)) {
            a.child = s;
            break;
          }
          r = s.sibling;
          s.sibling = i;
          i = s;
          s = r;
        }
        Dj(a, !0, i, null, v);
        break;
      case "together":
        Dj(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
  return a.child;
}
function gj(r, a, i) {
  null !== r && (a.dependencies = r.dependencies);
  ta |= a.lanes;
  if (0 === (i & a.childLanes)) return null;
  if (null !== r && a.child !== r.child) throw Error(p(153));
  if (null !== a.child) {
    r = a.child;
    i = th(r, r.pendingProps);
    a.child = i;
    for (i.return = a; null !== r.sibling; )
      (r = r.sibling), (i = i.sibling = th(r, r.pendingProps)), (i.return = a);
    i.sibling = null;
  }
  return a.child;
}
function Fj(r, a, i) {
  switch (a.tag) {
    case 3:
      qj(a);
      nh();
      break;
    case 5:
      Hh(a);
      break;
    case 1:
      Yf(a.type) && bg(a);
      break;
    case 4:
      Fh(a, a.stateNode.containerInfo);
      break;
    case 10:
      var o = a.type._context,
        s = a.memoizedProps.value;
      G(Er, o._currentValue);
      o._currentValue = s;
      break;
    case 13:
      o = a.memoizedState;
      if (null !== o) {
        if (null !== o.dehydrated)
          return G(Kr, 1 & Kr.current), (a.flags |= 128), null;
        if (0 !== (i & a.child.childLanes)) return vj(r, a, i);
        G(Kr, 1 & Kr.current);
        r = gj(r, a, i);
        return null !== r ? r.sibling : null;
      }
      G(Kr, 1 & Kr.current);
      break;
    case 19:
      o = 0 !== (i & a.childLanes);
      if (0 !== (128 & r.flags)) {
        if (o) return Ej(r, a, i);
        a.flags |= 128;
      }
      s = a.memoizedState;
      null !== s &&
        ((s.rendering = null), (s.tail = null), (s.lastEffect = null));
      G(Kr, Kr.current);
      if (o) break;
      return null;
    case 22:
    case 23:
      return (a.lanes = 0), lj(r, a, i);
  }
  return gj(r, a, i);
}
function Gj(r, a) {
  ch(a);
  switch (a.tag) {
    case 1:
      return (
        Yf(a.type) && Zf(),
        (r = a.flags),
        65536 & r ? ((a.flags = (-65537 & r) | 128), a) : null
      );
    case 3:
      return (
        Gh(),
        E(vr),
        E(mr),
        Lh(),
        (r = a.flags),
        0 !== (65536 & r) && 0 === (128 & r)
          ? ((a.flags = (-65537 & r) | 128), a)
          : null
      );
    case 5:
      return Ih(a), null;
    case 13:
      E(Kr);
      r = a.memoizedState;
      if (null !== r && null !== r.dehydrated) {
        if (null === a.alternate) throw Error(p(340));
        nh();
      }
      r = a.flags;
      return 65536 & r ? ((a.flags = (-65537 & r) | 128), a) : null;
    case 19:
      return E(Kr), null;
    case 4:
      return Gh(), null;
    case 10:
      return qg(a.type._context), null;
    case 22:
    case 23:
      return bj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fl = !1,
  Ml = !1,
  Rl = "function" === typeof WeakSet ? WeakSet : Set,
  Ul = null;
function Jj(r, a) {
  var i = r.ref;
  if (null !== i)
    if ("function" === typeof i)
      try {
        i(null);
      } catch (i) {
        U(r, a, i);
      }
    else i.current = null;
}
function Kj(r, a, i) {
  try {
    i();
  } catch (i) {
    U(r, a, i);
  }
}
var Il = !1;
function Mj(r, a) {
  er = Tn;
  r = Le();
  if (Me(r)) {
    if ("selectionStart" in r)
      var i = { start: r.selectionStart, end: r.selectionEnd };
    else
      e: {
        i = ((i = r.ownerDocument) && i.defaultView) || window;
        var o = i.getSelection && i.getSelection();
        if (o && 0 !== o.rangeCount) {
          i = o.anchorNode;
          var s = o.anchorOffset,
            v = o.focusNode;
          o = o.focusOffset;
          try {
            i.nodeType, v.nodeType;
          } catch (r) {
            i = null;
            break e;
          }
          var S = 0,
            x = -1,
            C = -1,
            z = 0,
            N = 0,
            j = r,
            _ = null;
          n: for (;;) {
            for (var P; ; ) {
              j !== i || (0 !== s && 3 !== j.nodeType) || (x = S + s);
              j !== v || (0 !== o && 3 !== j.nodeType) || (C = S + o);
              3 === j.nodeType && (S += j.nodeValue.length);
              if (null === (P = j.firstChild)) break;
              _ = j;
              j = P;
            }
            for (;;) {
              if (j === r) break n;
              _ === i && ++z === s && (x = S);
              _ === v && ++N === o && (C = S);
              if (null !== (P = j.nextSibling)) break;
              j = _;
              _ = j.parentNode;
            }
            j = P;
          }
          i = -1 === x || -1 === C ? null : { start: x, end: C };
        } else i = null;
      }
    i = i || { start: 0, end: 0 };
  } else i = null;
  nr = { focusedElem: r, selectionRange: i };
  Tn = !1;
  for (Ul = a; null !== Ul; )
    if (((a = Ul), (r = a.child), 0 !== (1028 & a.subtreeFlags) && null !== r))
      (r.return = a), (Ul = r);
    else
      for (; null !== Ul; ) {
        a = Ul;
        try {
          var L = a.alternate;
          if (0 !== (1024 & a.flags))
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== L) {
                  var T = L.memoizedProps,
                    F = L.memoizedState,
                    M = a.stateNode,
                    R = M.getSnapshotBeforeUpdate(
                      a.elementType === a.type ? T : kg(a.type, T),
                      F
                    );
                  M.__reactInternalSnapshotBeforeUpdate = R;
                }
                break;
              case 3:
                var I = a.stateNode.containerInfo;
                if (1 === I.nodeType) I.textContent = "";
                else if (9 === I.nodeType) {
                  var A = I.body;
                  null != A && (A.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (r) {
          U(a, a.return, r);
        }
        r = a.sibling;
        if (null !== r) {
          r.return = a.return;
          Ul = r;
          break;
        }
        Ul = a.return;
      }
  L = Il;
  Il = !1;
  return L;
}
function Nj(r, a, i) {
  var o = a.updateQueue;
  o = null !== o ? o.lastEffect : null;
  if (null !== o) {
    var s = (o = o.next);
    do {
      if ((s.tag & r) === r) {
        var v = s.destroy;
        s.destroy = void 0;
        void 0 !== v && Kj(a, i, v);
      }
      s = s.next;
    } while (s !== o);
  }
}
function Oj(r, a) {
  a = a.updateQueue;
  a = null !== a ? a.lastEffect : null;
  if (null !== a) {
    var i = (a = a.next);
    do {
      if ((i.tag & r) === r) {
        var o = i.create;
        i.destroy = o();
      }
      i = i.next;
    } while (i !== a);
  }
}
function Pj(r) {
  var a = r.ref;
  if (null !== a) {
    var i = r.stateNode;
    switch (r.tag) {
      case 5:
        r = i;
        break;
      default:
        r = i;
    }
    "function" === typeof a ? a(r) : (a.current = r);
  }
}
function Qj(r) {
  var a = r.alternate;
  null !== a && ((r.alternate = null), Qj(a));
  r.child = null;
  r.deletions = null;
  r.sibling = null;
  5 === r.tag &&
    ((a = r.stateNode),
    null !== a &&
      (delete a[ur], delete a[or], delete a[cr], delete a[fr], delete a[dr]));
  r.stateNode = null;
  r.return = null;
  r.dependencies = null;
  r.memoizedProps = null;
  r.memoizedState = null;
  r.pendingProps = null;
  r.stateNode = null;
  r.updateQueue = null;
}
function Rj(r) {
  return 5 === r.tag || 3 === r.tag || 4 === r.tag;
}
function Sj(r) {
  e: for (;;) {
    for (; null === r.sibling; ) {
      if (null === r.return || Rj(r.return)) return null;
      r = r.return;
    }
    r.sibling.return = r.return;
    for (r = r.sibling; 5 !== r.tag && 6 !== r.tag && 18 !== r.tag; ) {
      if (2 & r.flags) continue e;
      if (null === r.child || 4 === r.tag) continue e;
      (r.child.return = r), (r = r.child);
    }
    if (!(2 & r.flags)) return r.stateNode;
  }
}
function Tj(r, a, i) {
  var o = r.tag;
  if (5 === o || 6 === o)
    (r = r.stateNode),
      a
        ? 8 === i.nodeType
          ? i.parentNode.insertBefore(r, a)
          : i.insertBefore(r, a)
        : (8 === i.nodeType
            ? ((a = i.parentNode), a.insertBefore(r, i))
            : ((a = i), a.appendChild(r)),
          (i = i._reactRootContainer),
          (null !== i && void 0 !== i) ||
            null !== a.onclick ||
            (a.onclick = Af));
  else if (4 !== o && ((r = r.child), null !== r))
    for (Tj(r, a, i), r = r.sibling; null !== r; ) Tj(r, a, i), (r = r.sibling);
}
function Uj(r, a, i) {
  var o = r.tag;
  if (5 === o || 6 === o)
    (r = r.stateNode), a ? i.insertBefore(r, a) : i.appendChild(r);
  else if (4 !== o && ((r = r.child), null !== r))
    for (Uj(r, a, i), r = r.sibling; null !== r; ) Uj(r, a, i), (r = r.sibling);
}
var Al = null,
  Ql = !1;
function Wj(r, a, i) {
  for (i = i.child; null !== i; ) Xj(r, a, i), (i = i.sibling);
}
function Xj(r, a, i) {
  if (cn && "function" === typeof cn.onCommitFiberUnmount)
    try {
      cn.onCommitFiberUnmount(sn, i);
    } catch (r) {}
  switch (i.tag) {
    case 5:
      Ml || Jj(i, a);
    case 6:
      var o = Al,
        s = Ql;
      Al = null;
      Wj(r, a, i);
      Al = o;
      Ql = s;
      null !== Al &&
        (Ql
          ? ((r = Al),
            (i = i.stateNode),
            8 === r.nodeType ? r.parentNode.removeChild(i) : r.removeChild(i))
          : Al.removeChild(i.stateNode));
      break;
    case 18:
      null !== Al &&
        (Ql
          ? ((r = Al),
            (i = i.stateNode),
            8 === r.nodeType
              ? Jf(r.parentNode, i)
              : 1 === r.nodeType && Jf(r, i),
            ad(r))
          : Jf(Al, i.stateNode));
      break;
    case 4:
      o = Al;
      s = Ql;
      Al = i.stateNode.containerInfo;
      Ql = !0;
      Wj(r, a, i);
      Al = o;
      Ql = s;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ml &&
        ((o = i.updateQueue), null !== o && ((o = o.lastEffect), null !== o))
      ) {
        s = o = o.next;
        do {
          var v = s,
            S = v.destroy;
          v = v.tag;
          void 0 !== S && (0 !== (2 & v) || 0 !== (4 & v)) && Kj(i, a, S);
          s = s.next;
        } while (s !== o);
      }
      Wj(r, a, i);
      break;
    case 1:
      if (
        !Ml &&
        (Jj(i, a),
        (o = i.stateNode),
        "function" === typeof o.componentWillUnmount)
      )
        try {
          (o.props = i.memoizedProps),
            (o.state = i.memoizedState),
            o.componentWillUnmount();
        } catch (r) {
          U(i, a, r);
        }
      Wj(r, a, i);
      break;
    case 21:
      Wj(r, a, i);
      break;
    case 22:
      1 & i.mode
        ? ((Ml = (o = Ml) || null !== i.memoizedState), Wj(r, a, i), (Ml = o))
        : Wj(r, a, i);
      break;
    default:
      Wj(r, a, i);
  }
}
function Yj(r) {
  var a = r.updateQueue;
  if (null !== a) {
    r.updateQueue = null;
    var i = r.stateNode;
    null === i && (i = r.stateNode = new Rl());
    a.forEach(function (a) {
      var o = Zj.bind(null, r, a);
      i.has(a) || (i.add(a), a.then(o, o));
    });
  }
}
function ak(r, a) {
  var i = a.deletions;
  if (null !== i)
    for (var o = 0; o < i.length; o++) {
      var s = i[o];
      try {
        var v = r,
          S = a,
          x = S;
        e: for (; null !== x; ) {
          switch (x.tag) {
            case 5:
              Al = x.stateNode;
              Ql = !1;
              break e;
            case 3:
              Al = x.stateNode.containerInfo;
              Ql = !0;
              break e;
            case 4:
              Al = x.stateNode.containerInfo;
              Ql = !0;
              break e;
          }
          x = x.return;
        }
        if (null === Al) throw Error(p(160));
        Xj(v, S, s);
        Al = null;
        Ql = !1;
        var C = s.alternate;
        null !== C && (C.return = null);
        s.return = null;
      } catch (r) {
        U(s, a, r);
      }
    }
  if (12854 & a.subtreeFlags)
    for (a = a.child; null !== a; ) bk(a, r), (a = a.sibling);
}
function bk(r, a) {
  var i = r.alternate,
    o = r.flags;
  switch (r.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ak(a, r);
      ck(r);
      if (4 & o) {
        try {
          Nj(3, r, r.return), Oj(3, r);
        } catch (a) {
          U(r, r.return, a);
        }
        try {
          Nj(5, r, r.return);
        } catch (a) {
          U(r, r.return, a);
        }
      }
      break;
    case 1:
      ak(a, r);
      ck(r);
      512 & o && null !== i && Jj(i, i.return);
      break;
    case 5:
      ak(a, r);
      ck(r);
      512 & o && null !== i && Jj(i, i.return);
      if (32 & r.flags) {
        var s = r.stateNode;
        try {
          nb(s, "");
        } catch (a) {
          U(r, r.return, a);
        }
      }
      if (4 & o && ((s = r.stateNode), null != s)) {
        var v = r.memoizedProps,
          S = null !== i ? i.memoizedProps : v,
          x = r.type,
          C = r.updateQueue;
        r.updateQueue = null;
        if (null !== C)
          try {
            "input" === x && "radio" === v.type && null != v.name && Za(s, v);
            ub(x, S);
            var z = ub(x, v);
            for (S = 0; S < C.length; S += 2) {
              var N = C[S],
                j = C[S + 1];
              "style" === N
                ? rb(s, j)
                : "dangerouslySetInnerHTML" === N
                ? he(s, j)
                : "children" === N
                ? nb(s, j)
                : sa(s, N, j, z);
            }
            switch (x) {
              case "input":
                $a(s, v);
                break;
              case "textarea":
                hb(s, v);
                break;
              case "select":
                var _ = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!v.multiple;
                var P = v.value;
                null != P
                  ? eb(s, !!v.multiple, P, !1)
                  : _ !== !!v.multiple &&
                    (null != v.defaultValue
                      ? eb(s, !!v.multiple, v.defaultValue, !0)
                      : eb(s, !!v.multiple, v.multiple ? [] : "", !1));
            }
            s[or] = v;
          } catch (a) {
            U(r, r.return, a);
          }
      }
      break;
    case 6:
      ak(a, r);
      ck(r);
      if (4 & o) {
        if (null === r.stateNode) throw Error(p(162));
        z = r.stateNode;
        N = r.memoizedProps;
        try {
          z.nodeValue = N;
        } catch (a) {
          U(r, r.return, a);
        }
      }
      break;
    case 3:
      ak(a, r);
      ck(r);
      if (4 & o && null !== i && i.memoizedState.isDehydrated)
        try {
          ad(a.containerInfo);
        } catch (a) {
          U(r, r.return, a);
        }
      break;
    case 4:
      ak(a, r);
      ck(r);
      break;
    case 13:
      ak(a, r);
      ck(r);
      z = r.child;
      8192 & z.flags &&
        null !== z.memoizedState &&
        (null === z.alternate || null === z.alternate.memoizedState) &&
        (ca = nn());
      4 & o && Yj(r);
      break;
    case 22:
      z = null !== i && null !== i.memoizedState;
      1 & r.mode ? ((Ml = (N = Ml) || z), ak(a, r), (Ml = N)) : ak(a, r);
      ck(r);
      if (8192 & o) {
        N = null !== r.memoizedState;
        e: for (j = null, _ = r; ; ) {
          if (5 === _.tag) {
            if (null === j) {
              j = _;
              try {
                (s = _.stateNode),
                  N
                    ? ((v = s.style),
                      "function" === typeof v.setProperty
                        ? v.setProperty("display", "none", "important")
                        : (v.display = "none"))
                    : ((x = _.stateNode),
                      (C = _.memoizedProps.style),
                      (S =
                        void 0 !== C &&
                        null !== C &&
                        C.hasOwnProperty("display")
                          ? C.display
                          : null),
                      (x.style.display = qb("display", S)));
              } catch (a) {
                U(r, r.return, a);
              }
            }
          } else if (6 === _.tag) {
            if (null === j)
              try {
                _.stateNode.nodeValue = N ? "" : _.memoizedProps;
              } catch (a) {
                U(r, r.return, a);
              }
          } else if (
            ((22 !== _.tag && 23 !== _.tag) ||
              null === _.memoizedState ||
              _ === r) &&
            null !== _.child
          ) {
            _.child.return = _;
            _ = _.child;
            continue;
          }
          if (_ === r) break e;
          for (; null === _.sibling; ) {
            if (null === _.return || _.return === r) break e;
            j === _ && (j = null);
            _ = _.return;
          }
          j === _ && (j = null);
          _.sibling.return = _.return;
          _ = _.sibling;
        }
        if (N && !z && 0 !== (1 & r.mode))
          for (Ul = r, r = r.child; null !== r; ) {
            for (z = Ul = r; null !== Ul; ) {
              N = Ul;
              j = N.child;
              switch (N.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nj(4, N, N.return);
                  break;
                case 1:
                  Jj(N, N.return);
                  v = N.stateNode;
                  if ("function" === typeof v.componentWillUnmount) {
                    _ = N;
                    P = N.return;
                    try {
                      (s = _),
                        (v.props = s.memoizedProps),
                        (v.state = s.memoizedState),
                        v.componentWillUnmount();
                    } catch (r) {
                      U(_, P, r);
                    }
                  }
                  break;
                case 5:
                  Jj(N, N.return);
                  break;
                case 22:
                  if (null !== N.memoizedState) {
                    ek(z);
                    continue;
                  }
              }
              null !== j ? ((j.return = N), (Ul = j)) : ek(z);
            }
            r = r.sibling;
          }
      }
      break;
    case 19:
      ak(a, r);
      ck(r);
      4 & o && Yj(r);
      break;
    case 21:
      break;
    default:
      ak(a, r), ck(r);
  }
}
function ck(r) {
  var a = r.flags;
  if (2 & a) {
    try {
      e: {
        for (var i = r.return; null !== i; ) {
          if (Rj(i)) {
            var o = i;
            break e;
          }
          i = i.return;
        }
        throw Error(p(160));
      }
      switch (o.tag) {
        case 5:
          var s = o.stateNode;
          32 & o.flags && (nb(s, ""), (o.flags &= -33));
          var v = Sj(r);
          Uj(r, v, s);
          break;
        case 3:
        case 4:
          var S = o.stateNode.containerInfo,
            x = Sj(r);
          Tj(r, x, S);
          break;
        default:
          throw Error(p(161));
      }
    } catch (a) {
      U(r, r.return, a);
    }
    r.flags &= -3;
  }
  4096 & a && (r.flags &= -4097);
}
function fk(r, a, i) {
  Ul = r;
  gk(r, a, i);
}
function gk(r, a, i) {
  for (var o = 0 !== (1 & r.mode); null !== Ul; ) {
    var s = Ul,
      v = s.child;
    if (22 === s.tag && o) {
      var S = null !== s.memoizedState || Fl;
      if (!S) {
        var x = s.alternate,
          C = (null !== x && null !== x.memoizedState) || Ml;
        x = Fl;
        var z = Ml;
        Fl = S;
        if ((Ml = C) && !z)
          for (Ul = s; null !== Ul; )
            (S = Ul),
              (C = S.child),
              22 === S.tag && null !== S.memoizedState
                ? hk(s)
                : null !== C
                ? ((C.return = S), (Ul = C))
                : hk(s);
        for (; null !== v; ) (Ul = v), gk(v, a, i), (v = v.sibling);
        Ul = s;
        Fl = x;
        Ml = z;
      }
      ik(r, a, i);
    } else
      0 !== (8772 & s.subtreeFlags) && null !== v
        ? ((v.return = s), (Ul = v))
        : ik(r, a, i);
  }
}
function ik(r) {
  for (; null !== Ul; ) {
    var a = Ul;
    if (0 !== (8772 & a.flags)) {
      var i = a.alternate;
      try {
        if (0 !== (8772 & a.flags))
          switch (a.tag) {
            case 0:
            case 11:
            case 15:
              Ml || Oj(5, a);
              break;
            case 1:
              var o = a.stateNode;
              if (4 & a.flags && !Ml)
                if (null === i) o.componentDidMount();
                else {
                  var s =
                    a.elementType === a.type
                      ? i.memoizedProps
                      : kg(a.type, i.memoizedProps);
                  o.componentDidUpdate(
                    s,
                    i.memoizedState,
                    o.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var v = a.updateQueue;
              null !== v && Gg(a, v, o);
              break;
            case 3:
              var S = a.updateQueue;
              if (null !== S) {
                i = null;
                if (null !== a.child)
                  switch (a.child.tag) {
                    case 5:
                      i = a.child.stateNode;
                      break;
                    case 1:
                      i = a.child.stateNode;
                  }
                Gg(a, S, i);
              }
              break;
            case 5:
              var x = a.stateNode;
              if (null === i && 4 & a.flags) {
                i = x;
                var C = a.memoizedProps;
                switch (a.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    C.autoFocus && i.focus();
                    break;
                  case "img":
                    C.src && (i.src = C.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === a.memoizedState) {
                var z = a.alternate;
                if (null !== z) {
                  var N = z.memoizedState;
                  if (null !== N) {
                    var j = N.dehydrated;
                    null !== j && ad(j);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(p(163));
          }
        Ml || (512 & a.flags && Pj(a));
      } catch (r) {
        U(a, a.return, r);
      }
    }
    if (a === r) {
      Ul = null;
      break;
    }
    i = a.sibling;
    if (null !== i) {
      i.return = a.return;
      Ul = i;
      break;
    }
    Ul = a.return;
  }
}
function ek(r) {
  for (; null !== Ul; ) {
    var a = Ul;
    if (a === r) {
      Ul = null;
      break;
    }
    var i = a.sibling;
    if (null !== i) {
      i.return = a.return;
      Ul = i;
      break;
    }
    Ul = a.return;
  }
}
function hk(r) {
  for (; null !== Ul; ) {
    var a = Ul;
    try {
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          var i = a.return;
          try {
            Oj(4, a);
          } catch (r) {
            U(a, i, r);
          }
          break;
        case 1:
          var o = a.stateNode;
          if ("function" === typeof o.componentDidMount) {
            var s = a.return;
            try {
              o.componentDidMount();
            } catch (r) {
              U(a, s, r);
            }
          }
          var v = a.return;
          try {
            Pj(a);
          } catch (r) {
            U(a, v, r);
          }
          break;
        case 5:
          var S = a.return;
          try {
            Pj(a);
          } catch (r) {
            U(a, S, r);
          }
      }
    } catch (r) {
      U(a, a.return, r);
    }
    if (a === r) {
      Ul = null;
      break;
    }
    var x = a.sibling;
    if (null !== x) {
      x.return = a.return;
      Ul = x;
      break;
    }
    Ul = a.return;
  }
}
var Bl = Math.ceil,
  $l = F.ReactCurrentDispatcher,
  Vl = F.ReactCurrentOwner,
  Wl = F.ReactCurrentBatchConfig,
  Hl = 0,
  Gl = null,
  Jl = null,
  Kl = 0,
  Yl = 0,
  Xl = Tf(0),
  Zl = 0,
  ea = null,
  ta = 0,
  la = 0,
  aa = 0,
  ia = null,
  ua = null,
  ca = 0,
  da = Infinity,
  ga = null,
  ma = !1,
  va = null,
  ba = null,
  ya = !1,
  ka = null,
  wa = 0,
  Ea = 0,
  xa = null,
  Ca = -1,
  za = 0;
function Jg() {
  return 0 !== (6 & Hl) ? nn() : -1 !== Ca ? Ca : (Ca = nn());
}
function Kg(r) {
  if (0 === (1 & r.mode)) return 1;
  if (0 !== (2 & Hl) && 0 !== Kl) return Kl & -Kl;
  if (null !== Sr.transition) return 0 === za && (za = xc()), za;
  r = mn;
  if (0 !== r) return r;
  r = window.event;
  r = void 0 === r ? 16 : id(r.type);
  return r;
}
function Lg(r, a, i) {
  if (50 < Ea) throw ((Ea = 0), (xa = null), Error(p(185)));
  var o = Ak(r, a);
  if (null === o) return null;
  zc(o, a, i);
  (0 !== (2 & Hl) && o === Gl) ||
    (o === Gl && (0 === (2 & Hl) && (la |= a), 4 === Zl && Bk(o, Kl)),
    Ck(o, i),
    1 === a &&
      0 === Hl &&
      0 === (1 & r.mode) &&
      ((da = nn() + 500), kr && ig()));
  return o;
}
function Ak(r, a) {
  r.lanes |= a;
  var i = r.alternate;
  null !== i && (i.lanes |= a);
  i = r;
  for (r = r.return; null !== r; )
    (r.childLanes |= a),
      (i = r.alternate),
      null !== i && (i.childLanes |= a),
      (i = r),
      (r = r.return);
  return 3 === i.tag ? i.stateNode : null;
}
function Bg(r) {
  return (null !== Gl || null !== Nr) && 0 !== (1 & r.mode) && 0 === (2 & Hl);
}
function Ck(r, a) {
  var i = r.callbackNode;
  vc(r, a);
  var o = tc(r, r === Gl ? Kl : 0);
  if (0 === o)
    null !== i && Xe(i), (r.callbackNode = null), (r.callbackPriority = 0);
  else if (((a = o & -o), r.callbackPriority !== a)) {
    null != i && Xe(i);
    if (1 === a)
      0 === r.tag ? hg(Dk.bind(null, r)) : gg(Dk.bind(null, r)),
        ar(function () {
          0 === Hl && ig();
        }),
        (i = null);
    else {
      switch (Cc(o)) {
        case 1:
          i = rn;
          break;
        case 4:
          i = ln;
          break;
        case 16:
          i = an;
          break;
        case 536870912:
          i = on;
          break;
        default:
          i = an;
      }
      i = Ek(i, Fk.bind(null, r));
    }
    r.callbackPriority = a;
    r.callbackNode = i;
  }
}
function Fk(r, a) {
  Ca = -1;
  za = 0;
  if (0 !== (6 & Hl)) throw Error(p(327));
  var i = r.callbackNode;
  if (Gk() && r.callbackNode !== i) return null;
  var o = tc(r, r === Gl ? Kl : 0);
  if (0 === o) return null;
  if (0 !== (30 & o) || 0 !== (o & r.expiredLanes) || a) a = Hk(r, o);
  else {
    a = o;
    var s = Hl;
    Hl |= 2;
    var v = Ik();
    (Gl === r && Kl === a) || ((ga = null), (da = nn() + 500), Jk(r, a));
    do {
      try {
        Kk();
        break;
      } catch (a) {
        Lk(r, a);
      }
    } while (1);
    pg();
    $l.current = v;
    Hl = s;
    null !== Jl ? (a = 0) : ((Gl = null), (Kl = 0), (a = Zl));
  }
  if (0 !== a) {
    2 === a && ((s = wc(r)), 0 !== s && ((o = s), (a = Mk(r, s))));
    if (1 === a) throw ((i = ea), Jk(r, 0), Bk(r, o), Ck(r, nn()), i);
    if (6 === a) Bk(r, o);
    else {
      s = r.current.alternate;
      if (
        0 === (30 & o) &&
        !Nk(s) &&
        ((a = Hk(r, o)),
        2 === a && ((v = wc(r)), 0 !== v && ((o = v), (a = Mk(r, v)))),
        1 === a)
      )
        throw ((i = ea), Jk(r, 0), Bk(r, o), Ck(r, nn()), i);
      r.finishedWork = s;
      r.finishedLanes = o;
      switch (a) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Ok(r, ua, ga);
          break;
        case 3:
          Bk(r, o);
          if ((130023424 & o) === o && ((a = ca + 500 - nn()), 10 < a)) {
            if (0 !== tc(r, 0)) break;
            s = r.suspendedLanes;
            if ((s & o) !== o) {
              Jg();
              r.pingedLanes |= r.suspendedLanes & s;
              break;
            }
            r.timeoutHandle = tr(Ok.bind(null, r, ua, ga), a);
            break;
          }
          Ok(r, ua, ga);
          break;
        case 4:
          Bk(r, o);
          if ((4194240 & o) === o) break;
          a = r.eventTimes;
          for (s = -1; 0 < o; ) {
            var S = 31 - fn(o);
            v = 1 << S;
            S = a[S];
            S > s && (s = S);
            o &= ~v;
          }
          o = s;
          o = nn() - o;
          o =
            (120 > o
              ? 120
              : 480 > o
              ? 480
              : 1080 > o
              ? 1080
              : 1920 > o
              ? 1920
              : 3e3 > o
              ? 3e3
              : 4320 > o
              ? 4320
              : 1960 * Bl(o / 1960)) - o;
          if (10 < o) {
            r.timeoutHandle = tr(Ok.bind(null, r, ua, ga), o);
            break;
          }
          Ok(r, ua, ga);
          break;
        case 5:
          Ok(r, ua, ga);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Ck(r, nn());
  return r.callbackNode === i ? Fk.bind(null, r) : null;
}
function Mk(r, a) {
  var i = ia;
  r.current.memoizedState.isDehydrated && (Jk(r, a).flags |= 256);
  r = Hk(r, a);
  2 !== r && ((a = ua), (ua = i), null !== a && Zi(a));
  return r;
}
function Zi(r) {
  null === ua ? (ua = r) : ua.push.apply(ua, r);
}
function Nk(r) {
  for (var a = r; ; ) {
    if (16384 & a.flags) {
      var i = a.updateQueue;
      if (null !== i && ((i = i.stores), null !== i))
        for (var o = 0; o < i.length; o++) {
          var s = i[o],
            v = s.getSnapshot;
          s = s.value;
          try {
            if (!Pt(v(), s)) return !1;
          } catch (r) {
            return !1;
          }
        }
    }
    i = a.child;
    if (16384 & a.subtreeFlags && null !== i) (i.return = a), (a = i);
    else {
      if (a === r) break;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === r) return !0;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
  }
  return !0;
}
function Bk(r, a) {
  a &= ~aa;
  a &= ~la;
  r.suspendedLanes |= a;
  r.pingedLanes &= ~a;
  for (r = r.expirationTimes; 0 < a; ) {
    var i = 31 - fn(a),
      o = 1 << i;
    r[i] = -1;
    a &= ~o;
  }
}
function Dk(r) {
  if (0 !== (6 & Hl)) throw Error(p(327));
  Gk();
  var a = tc(r, 0);
  if (0 === (1 & a)) return Ck(r, nn()), null;
  var i = Hk(r, a);
  if (0 !== r.tag && 2 === i) {
    var o = wc(r);
    0 !== o && ((a = o), (i = Mk(r, o)));
  }
  if (1 === i) throw ((i = ea), Jk(r, 0), Bk(r, a), Ck(r, nn()), i);
  if (6 === i) throw Error(p(345));
  r.finishedWork = r.current.alternate;
  r.finishedLanes = a;
  Ok(r, ua, ga);
  Ck(r, nn());
  return null;
}
function Pk(r, a) {
  var i = Hl;
  Hl |= 1;
  try {
    return r(a);
  } finally {
    (Hl = i), 0 === Hl && ((da = nn() + 500), kr && ig());
  }
}
function Qk(r) {
  null !== ka && 0 === ka.tag && 0 === (6 & Hl) && Gk();
  var a = Hl;
  Hl |= 1;
  var i = Wl.transition,
    o = mn;
  try {
    if (((Wl.transition = null), (mn = 1), r)) return r();
  } finally {
    (mn = o), (Wl.transition = i), (Hl = a), 0 === (6 & Hl) && ig();
  }
}
function bj() {
  Yl = Xl.current;
  E(Xl);
}
function Jk(r, a) {
  r.finishedWork = null;
  r.finishedLanes = 0;
  var i = r.timeoutHandle;
  -1 !== i && ((r.timeoutHandle = -1), rr(i));
  if (null !== Jl)
    for (i = Jl.return; null !== i; ) {
      var o = i;
      ch(o);
      switch (o.tag) {
        case 1:
          o = o.type.childContextTypes;
          null !== o && void 0 !== o && Zf();
          break;
        case 3:
          Gh();
          E(vr);
          E(mr);
          Lh();
          break;
        case 5:
          Ih(o);
          break;
        case 4:
          Gh();
          break;
        case 13:
          E(Kr);
          break;
        case 19:
          E(Kr);
          break;
        case 10:
          qg(o.type._context);
          break;
        case 22:
        case 23:
          bj();
      }
      i = i.return;
    }
  Gl = r;
  Jl = r = th(r.current, null);
  Kl = Yl = a;
  Zl = 0;
  ea = null;
  aa = la = ta = 0;
  ua = ia = null;
  if (null !== Nr) {
    for (a = 0; a < Nr.length; a++)
      if (((i = Nr[a]), (o = i.interleaved), null !== o)) {
        i.interleaved = null;
        var s = o.next,
          v = i.pending;
        if (null !== v) {
          var S = v.next;
          v.next = s;
          o.next = S;
        }
        i.pending = o;
      }
    Nr = null;
  }
  return r;
}
function Lk(r, a) {
  do {
    var i = Jl;
    try {
      pg();
      Xr.current = El;
      if (vl) {
        for (var o = rl.memoizedState; null !== o; ) {
          var s = o.queue;
          null !== s && (s.pending = null);
          o = o.next;
        }
        vl = !1;
      }
      tl = 0;
      sl = ul = rl = null;
      yl = !1;
      wl = 0;
      Vl.current = null;
      if (null === i || null === i.return) {
        Zl = 1;
        ea = a;
        Jl = null;
        break;
      }
      e: {
        var v = r,
          S = i.return,
          x = i,
          C = a;
        a = Kl;
        x.flags |= 32768;
        if (
          null !== C &&
          "object" === typeof C &&
          "function" === typeof C.then
        ) {
          var z = C,
            N = x,
            j = N.tag;
          if (0 === (1 & N.mode) && (0 === j || 11 === j || 15 === j)) {
            var _ = N.alternate;
            _
              ? ((N.updateQueue = _.updateQueue),
                (N.memoizedState = _.memoizedState),
                (N.lanes = _.lanes))
              : ((N.updateQueue = null), (N.memoizedState = null));
          }
          var P = Ri(S);
          if (null !== P) {
            P.flags &= -257;
            Si(P, S, x, v, a);
            1 & P.mode && Pi(v, z, a);
            a = P;
            C = z;
            var L = a.updateQueue;
            if (null === L) {
              var T = new Set();
              T.add(C);
              a.updateQueue = T;
            } else L.add(C);
            break e;
          }
          if (0 === (1 & a)) {
            Pi(v, z, a);
            $i();
            break e;
          }
          C = Error(p(426));
        } else if (Br && 1 & x.mode) {
          var F = Ri(S);
          if (null !== F) {
            0 === (65536 & F.flags) && (F.flags |= 256);
            Si(F, S, x, v, a);
            oh(C);
            break e;
          }
        }
        v = C;
        4 !== Zl && (Zl = 2);
        null === ia ? (ia = [v]) : ia.push(v);
        C = Hi(C, x);
        x = S;
        do {
          switch (x.tag) {
            case 3:
              x.flags |= 65536;
              a &= -a;
              x.lanes |= a;
              var M = Ki(x, C, a);
              Dg(x, M);
              break e;
            case 1:
              v = C;
              var R = x.type,
                I = x.stateNode;
              if (
                0 === (128 & x.flags) &&
                ("function" === typeof R.getDerivedStateFromError ||
                  (null !== I &&
                    "function" === typeof I.componentDidCatch &&
                    (null === ba || !ba.has(I))))
              ) {
                x.flags |= 65536;
                a &= -a;
                x.lanes |= a;
                var A = Ni(x, v, a);
                Dg(x, A);
                break e;
              }
          }
          x = x.return;
        } while (null !== x);
      }
      Rk(i);
    } catch (r) {
      a = r;
      Jl === i && null !== i && (Jl = i = i.return);
      continue;
    }
    break;
  } while (1);
}
function Ik() {
  var r = $l.current;
  $l.current = El;
  return null === r ? El : r;
}
function $i() {
  (0 !== Zl && 3 !== Zl && 2 !== Zl) || (Zl = 4);
  null === Gl ||
    (0 === (268435455 & ta) && 0 === (268435455 & la)) ||
    Bk(Gl, Kl);
}
function Hk(r, a) {
  var i = Hl;
  Hl |= 2;
  var o = Ik();
  (Gl === r && Kl === a) || ((ga = null), Jk(r, a));
  do {
    try {
      Sk();
      break;
    } catch (a) {
      Lk(r, a);
    }
  } while (1);
  pg();
  Hl = i;
  $l.current = o;
  if (null !== Jl) throw Error(p(261));
  Gl = null;
  Kl = 0;
  return Zl;
}
function Sk() {
  for (; null !== Jl; ) Tk(Jl);
}
function Kk() {
  for (; null !== Jl && !Ze(); ) Tk(Jl);
}
function Tk(r) {
  var a = ja(r.alternate, r, Yl);
  r.memoizedProps = r.pendingProps;
  null === a ? Rk(r) : (Jl = a);
  Vl.current = null;
}
function Rk(r) {
  var a = r;
  do {
    var i = a.alternate;
    r = a.return;
    if (0 === (32768 & a.flags)) {
      if (((i = Yi(i, a, Yl)), null !== i)) {
        Jl = i;
        return;
      }
    } else {
      i = Gj(i, a);
      if (null !== i) {
        i.flags &= 32767;
        Jl = i;
        return;
      }
      if (null === r) {
        Zl = 6;
        Jl = null;
        return;
      }
      (r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null);
    }
    a = a.sibling;
    if (null !== a) {
      Jl = a;
      return;
    }
    Jl = a = r;
  } while (null !== a);
  0 === Zl && (Zl = 5);
}
function Ok(r, a, i) {
  var o = mn,
    s = Wl.transition;
  try {
    (Wl.transition = null), (mn = 1), Vk(r, a, i, o);
  } finally {
    (Wl.transition = s), (mn = o);
  }
  return null;
}
function Vk(r, a, i, o) {
  do {
    Gk();
  } while (null !== ka);
  if (0 !== (6 & Hl)) throw Error(p(327));
  i = r.finishedWork;
  var s = r.finishedLanes;
  if (null === i) return null;
  r.finishedWork = null;
  r.finishedLanes = 0;
  if (i === r.current) throw Error(p(177));
  r.callbackNode = null;
  r.callbackPriority = 0;
  var v = i.lanes | i.childLanes;
  Ac(r, v);
  r === Gl && ((Jl = Gl = null), (Kl = 0));
  (0 === (2064 & i.subtreeFlags) && 0 === (2064 & i.flags)) ||
    ya ||
    ((ya = !0),
    Ek(an, function () {
      Gk();
      return null;
    }));
  v = 0 !== (15990 & i.flags);
  if (0 !== (15990 & i.subtreeFlags) || v) {
    v = Wl.transition;
    Wl.transition = null;
    var S = mn;
    mn = 1;
    var x = Hl;
    Hl |= 4;
    Vl.current = null;
    Mj(r, i);
    bk(i, r);
    Ne(nr);
    Tn = !!er;
    nr = er = null;
    r.current = i;
    fk(i, r, s);
    en();
    Hl = x;
    mn = S;
    Wl.transition = v;
  } else r.current = i;
  ya && ((ya = !1), (ka = r), (wa = s));
  v = r.pendingLanes;
  0 === v && (ba = null);
  lc(i.stateNode, o);
  Ck(r, nn());
  if (null !== a)
    for (o = r.onRecoverableError, i = 0; i < a.length; i++) o(a[i]);
  if (ma) throw ((ma = !1), (r = va), (va = null), r);
  0 !== (1 & wa) && 0 !== r.tag && Gk();
  v = r.pendingLanes;
  0 !== (1 & v) ? (r === xa ? Ea++ : ((Ea = 0), (xa = r))) : (Ea = 0);
  ig();
  return null;
}
function Gk() {
  if (null !== ka) {
    var r = Cc(wa),
      a = Wl.transition,
      i = mn;
    try {
      Wl.transition = null;
      mn = 16 > r ? 16 : r;
      if (null === ka) var o = !1;
      else {
        r = ka;
        ka = null;
        wa = 0;
        if (0 !== (6 & Hl)) throw Error(p(331));
        var s = Hl;
        Hl |= 4;
        for (Ul = r.current; null !== Ul; ) {
          var v = Ul,
            S = v.child;
          if (0 !== (16 & Ul.flags)) {
            var x = v.deletions;
            if (null !== x) {
              for (var C = 0; C < x.length; C++) {
                var z = x[C];
                for (Ul = z; null !== Ul; ) {
                  var N = Ul;
                  switch (N.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(8, N, v);
                  }
                  var j = N.child;
                  if (null !== j) (j.return = N), (Ul = j);
                  else
                    for (; null !== Ul; ) {
                      N = Ul;
                      var _ = N.sibling,
                        P = N.return;
                      Qj(N);
                      if (N === z) {
                        Ul = null;
                        break;
                      }
                      if (null !== _) {
                        _.return = P;
                        Ul = _;
                        break;
                      }
                      Ul = P;
                    }
                }
              }
              var L = v.alternate;
              if (null !== L) {
                var T = L.child;
                if (null !== T) {
                  L.child = null;
                  do {
                    var F = T.sibling;
                    T.sibling = null;
                    T = F;
                  } while (null !== T);
                }
              }
              Ul = v;
            }
          }
          if (0 !== (2064 & v.subtreeFlags) && null !== S)
            (S.return = v), (Ul = S);
          else
            e: for (; null !== Ul; ) {
              v = Ul;
              if (0 !== (2048 & v.flags))
                switch (v.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Nj(9, v, v.return);
                }
              var M = v.sibling;
              if (null !== M) {
                M.return = v.return;
                Ul = M;
                break e;
              }
              Ul = v.return;
            }
        }
        var R = r.current;
        for (Ul = R; null !== Ul; ) {
          S = Ul;
          var I = S.child;
          if (0 !== (2064 & S.subtreeFlags) && null !== I)
            (I.return = S), (Ul = I);
          else
            e: for (S = R; null !== Ul; ) {
              x = Ul;
              if (0 !== (2048 & x.flags))
                try {
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oj(9, x);
                  }
                } catch (r) {
                  U(x, x.return, r);
                }
              if (x === S) {
                Ul = null;
                break e;
              }
              var A = x.sibling;
              if (null !== A) {
                A.return = x.return;
                Ul = A;
                break e;
              }
              Ul = x.return;
            }
        }
        Hl = s;
        ig();
        if (cn && "function" === typeof cn.onPostCommitFiberRoot)
          try {
            cn.onPostCommitFiberRoot(sn, r);
          } catch (r) {}
        o = !0;
      }
      return o;
    } finally {
      (mn = i), (Wl.transition = a);
    }
  }
  return !1;
}
function Wk(r, a, i) {
  a = Hi(i, a);
  a = Ki(r, a, 1);
  Ag(r, a);
  a = Jg();
  r = Ak(r, 1);
  null !== r && (zc(r, 1, a), Ck(r, a));
}
function U(r, a, i) {
  if (3 === r.tag) Wk(r, r, i);
  else
    for (; null !== a; ) {
      if (3 === a.tag) {
        Wk(a, r, i);
        break;
      }
      if (1 === a.tag) {
        var o = a.stateNode;
        if (
          "function" === typeof a.type.getDerivedStateFromError ||
          ("function" === typeof o.componentDidCatch &&
            (null === ba || !ba.has(o)))
        ) {
          r = Hi(i, r);
          r = Ni(a, r, 1);
          Ag(a, r);
          r = Jg();
          a = Ak(a, 1);
          null !== a && (zc(a, 1, r), Ck(a, r));
          break;
        }
      }
      a = a.return;
    }
}
function Qi(r, a, i) {
  var o = r.pingCache;
  null !== o && o.delete(a);
  a = Jg();
  r.pingedLanes |= r.suspendedLanes & i;
  Gl === r &&
    (Kl & i) === i &&
    (4 === Zl || (3 === Zl && (130023424 & Kl) === Kl && 500 > nn() - ca)
      ? Jk(r, 0)
      : (aa |= i));
  Ck(r, a);
}
function Xk(r, a) {
  0 === a &&
    (0 === (1 & r.mode)
      ? (a = 1)
      : ((a = gn), (gn <<= 1), 0 === (130023424 & gn) && (gn = 4194304)));
  var i = Jg();
  r = Ak(r, a);
  null !== r && (zc(r, a, i), Ck(r, i));
}
function zj(r) {
  var a = r.memoizedState,
    i = 0;
  null !== a && (i = a.retryLane);
  Xk(r, i);
}
function Zj(r, a) {
  var i = 0;
  switch (r.tag) {
    case 13:
      var o = r.stateNode;
      var s = r.memoizedState;
      null !== s && (i = s.retryLane);
      break;
    case 19:
      o = r.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== o && o.delete(a);
  Xk(r, i);
}
var ja;
ja = function (r, a, i) {
  if (null !== r)
    if (r.memoizedProps !== a.pendingProps || vr.current) Dl = !0;
    else {
      if (0 === (r.lanes & i) && 0 === (128 & a.flags))
        return (Dl = !1), Fj(r, a, i);
      Dl = 0 !== (131072 & r.flags);
    }
  else (Dl = !1), Br && 0 !== (1048576 & a.flags) && ah(a, Or, a.index);
  a.lanes = 0;
  switch (a.tag) {
    case 2:
      var o = a.type;
      null !== r &&
        ((r.alternate = null), (a.alternate = null), (a.flags |= 2));
      r = a.pendingProps;
      var s = Xf(a, mr.current);
      sg(a, i);
      s = Uh(null, a, o, r, s, i);
      var v = Zh();
      a.flags |= 1;
      "object" === typeof s &&
      null !== s &&
      "function" === typeof s.render &&
      void 0 === s.$$typeof
        ? ((a.tag = 1),
          (a.memoizedState = null),
          (a.updateQueue = null),
          Yf(o) ? ((v = !0), bg(a)) : (v = !1),
          (a.memoizedState =
            null !== s.state && void 0 !== s.state ? s.state : null),
          xg(a),
          (s.updater = Pr),
          (a.stateNode = s),
          (s._reactInternals = a),
          Qg(a, o, r, i),
          (a = pj(null, a, o, !0, v, i)))
        : ((a.tag = 0), Br && v && bh(a), ej(null, a, s, i), (a = a.child));
      return a;
    case 16:
      o = a.elementType;
      e: {
        null !== r &&
          ((r.alternate = null), (a.alternate = null), (a.flags |= 2));
        r = a.pendingProps;
        s = o._init;
        o = s(o._payload);
        a.type = o;
        s = a.tag = Yk(o);
        r = kg(o, r);
        switch (s) {
          case 0:
            a = kj(null, a, o, r, i);
            break e;
          case 1:
            a = oj(null, a, o, r, i);
            break e;
          case 11:
            a = fj(null, a, o, r, i);
            break e;
          case 14:
            a = hj(null, a, o, kg(o.type, r), i);
            break e;
        }
        throw Error(p(306, o, ""));
      }
      return a;
    case 0:
      return (
        (o = a.type),
        (s = a.pendingProps),
        (s = a.elementType === o ? s : kg(o, s)),
        kj(r, a, o, s, i)
      );
    case 1:
      return (
        (o = a.type),
        (s = a.pendingProps),
        (s = a.elementType === o ? s : kg(o, s)),
        oj(r, a, o, s, i)
      );
    case 3:
      e: {
        qj(a);
        if (null === r) throw Error(p(387));
        o = a.pendingProps;
        v = a.memoizedState;
        s = v.element;
        yg(r, a);
        Eg(a, o, null, i);
        var S = a.memoizedState;
        o = S.element;
        if (v.isDehydrated) {
          if (
            ((v = {
              element: o,
              isDehydrated: !1,
              cache: S.cache,
              pendingSuspenseBoundaries: S.pendingSuspenseBoundaries,
              transitions: S.transitions,
            }),
            (a.updateQueue.baseState = v),
            (a.memoizedState = v),
            256 & a.flags)
          ) {
            s = Error(p(423));
            a = rj(r, a, o, i, s);
            break e;
          }
          if (o !== s) {
            s = Error(p(424));
            a = rj(r, a, o, i, s);
            break e;
          }
          for (
            Qr = Kf(a.stateNode.containerInfo.firstChild),
              Ar = a,
              Br = !0,
              $r = null,
              i = Wr(a, null, o, i),
              a.child = i;
            i;

          )
            (i.flags = (-3 & i.flags) | 4096), (i = i.sibling);
        } else {
          nh();
          if (o === s) {
            a = gj(r, a, i);
            break e;
          }
          ej(r, a, o, i);
        }
        a = a.child;
      }
      return a;
    case 5:
      return (
        Hh(a),
        null === r && kh(a),
        (o = a.type),
        (s = a.pendingProps),
        (v = null !== r ? r.memoizedProps : null),
        (S = s.children),
        Df(o, s) ? (S = null) : null !== v && Df(o, v) && (a.flags |= 32),
        nj(r, a),
        ej(r, a, S, i),
        a.child
      );
    case 6:
      return null === r && kh(a), null;
    case 13:
      return vj(r, a, i);
    case 4:
      return (
        Fh(a, a.stateNode.containerInfo),
        (o = a.pendingProps),
        null === r ? (a.child = Vr(a, null, o, i)) : ej(r, a, o, i),
        a.child
      );
    case 11:
      return (
        (o = a.type),
        (s = a.pendingProps),
        (s = a.elementType === o ? s : kg(o, s)),
        fj(r, a, o, s, i)
      );
    case 7:
      return ej(r, a, a.pendingProps, i), a.child;
    case 8:
      return ej(r, a, a.pendingProps.children, i), a.child;
    case 12:
      return ej(r, a, a.pendingProps.children, i), a.child;
    case 10:
      e: {
        o = a.type._context;
        s = a.pendingProps;
        v = a.memoizedProps;
        S = s.value;
        G(Er, o._currentValue);
        o._currentValue = S;
        if (null !== v)
          if (Pt(v.value, S)) {
            if (v.children === s.children && !vr.current) {
              a = gj(r, a, i);
              break e;
            }
          } else
            for (v = a.child, null !== v && (v.return = a); null !== v; ) {
              var x = v.dependencies;
              if (null !== x) {
                S = v.child;
                for (var C = x.firstContext; null !== C; ) {
                  if (C.context === o) {
                    if (1 === v.tag) {
                      C = zg(-1, i & -i);
                      C.tag = 2;
                      var z = v.updateQueue;
                      if (null !== z) {
                        z = z.shared;
                        var N = z.pending;
                        null === N
                          ? (C.next = C)
                          : ((C.next = N.next), (N.next = C));
                        z.pending = C;
                      }
                    }
                    v.lanes |= i;
                    C = v.alternate;
                    null !== C && (C.lanes |= i);
                    rg(v.return, i, a);
                    x.lanes |= i;
                    break;
                  }
                  C = C.next;
                }
              } else if (10 === v.tag) S = v.type === a.type ? null : v.child;
              else if (18 === v.tag) {
                S = v.return;
                if (null === S) throw Error(p(341));
                S.lanes |= i;
                x = S.alternate;
                null !== x && (x.lanes |= i);
                rg(S, i, a);
                S = v.sibling;
              } else S = v.child;
              if (null !== S) S.return = v;
              else
                for (S = v; null !== S; ) {
                  if (S === a) {
                    S = null;
                    break;
                  }
                  v = S.sibling;
                  if (null !== v) {
                    v.return = S.return;
                    S = v;
                    break;
                  }
                  S = S.return;
                }
              v = S;
            }
        ej(r, a, s.children, i);
        a = a.child;
      }
      return a;
    case 9:
      return (
        (s = a.type),
        (o = a.pendingProps.children),
        sg(a, i),
        (s = ug(s)),
        (o = o(s)),
        (a.flags |= 1),
        ej(r, a, o, i),
        a.child
      );
    case 14:
      return (
        (o = a.type),
        (s = kg(o, a.pendingProps)),
        (s = kg(o.type, s)),
        hj(r, a, o, s, i)
      );
    case 15:
      return jj(r, a, a.type, a.pendingProps, i);
    case 17:
      return (
        (o = a.type),
        (s = a.pendingProps),
        (s = a.elementType === o ? s : kg(o, s)),
        null !== r &&
          ((r.alternate = null), (a.alternate = null), (a.flags |= 2)),
        (a.tag = 1),
        Yf(o) ? ((r = !0), bg(a)) : (r = !1),
        sg(a, i),
        Og(a, o, s),
        Qg(a, o, s, i),
        pj(null, a, o, !0, r, i)
      );
    case 19:
      return Ej(r, a, i);
    case 22:
      return lj(r, a, i);
  }
  throw Error(p(156, a.tag));
};
function Ek(r, a) {
  return Ge(r, a);
}
function Zk(r, a, i, o) {
  this.tag = r;
  this.key = i;
  this.sibling =
    this.child =
    this.return =
    this.stateNode =
    this.type =
    this.elementType =
      null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = a;
  this.dependencies =
    this.memoizedState =
    this.updateQueue =
    this.memoizedProps =
      null;
  this.mode = o;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function hh(r, a, i, o) {
  return new Zk(r, a, i, o);
}
function ij(r) {
  r = r.prototype;
  return !(!r || !r.isReactComponent);
}
function Yk(r) {
  if ("function" === typeof r) return ij(r) ? 1 : 0;
  if (void 0 !== r && null !== r) {
    r = r.$$typeof;
    if (r === W) return 11;
    if (r === Y) return 14;
  }
  return 2;
}
function th(r, a) {
  var i = r.alternate;
  null === i
    ? ((i = hh(r.tag, a, r.key, r.mode)),
      (i.elementType = r.elementType),
      (i.type = r.type),
      (i.stateNode = r.stateNode),
      (i.alternate = r),
      (r.alternate = i))
    : ((i.pendingProps = a),
      (i.type = r.type),
      (i.flags = 0),
      (i.subtreeFlags = 0),
      (i.deletions = null));
  i.flags = 14680064 & r.flags;
  i.childLanes = r.childLanes;
  i.lanes = r.lanes;
  i.child = r.child;
  i.memoizedProps = r.memoizedProps;
  i.memoizedState = r.memoizedState;
  i.updateQueue = r.updateQueue;
  a = r.dependencies;
  i.dependencies =
    null === a ? null : { lanes: a.lanes, firstContext: a.firstContext };
  i.sibling = r.sibling;
  i.index = r.index;
  i.ref = r.ref;
  return i;
}
function vh(r, a, i, o, s, v) {
  var S = 2;
  o = r;
  if ("function" === typeof r) ij(r) && (S = 1);
  else if ("string" === typeof r) S = 5;
  else
    e: switch (r) {
      case I:
        return xh(i.children, s, v, a);
      case A:
        S = 8;
        s |= 8;
        break;
      case B:
        return (r = hh(12, i, a, 2 | s)), (r.elementType = B), (r.lanes = v), r;
      case H:
        return (r = hh(13, i, a, s)), (r.elementType = H), (r.lanes = v), r;
      case K:
        return (r = hh(19, i, a, s)), (r.elementType = K), (r.lanes = v), r;
      case Z:
        return wj(i, s, v, a);
      default:
        if ("object" === typeof r && null !== r)
          switch (r.$$typeof) {
            case $:
              S = 10;
              break e;
            case V:
              S = 9;
              break e;
            case W:
              S = 11;
              break e;
            case Y:
              S = 14;
              break e;
            case X:
              S = 16;
              o = null;
              break e;
          }
        throw Error(p(130, null == r ? r : typeof r, ""));
    }
  a = hh(S, i, a, s);
  a.elementType = r;
  a.type = o;
  a.lanes = v;
  return a;
}
function xh(r, a, i, o) {
  r = hh(7, r, o, a);
  r.lanes = i;
  return r;
}
function wj(r, a, i, o) {
  r = hh(22, r, o, a);
  r.elementType = Z;
  r.lanes = i;
  r.stateNode = {};
  return r;
}
function uh(r, a, i) {
  r = hh(6, r, null, a);
  r.lanes = i;
  return r;
}
function wh(r, a, i) {
  a = hh(4, null !== r.children ? r.children : [], r.key, a);
  a.lanes = i;
  a.stateNode = {
    containerInfo: r.containerInfo,
    pendingChildren: null,
    implementation: r.implementation,
  };
  return a;
}
function $k(r, a, i, o, s) {
  this.tag = a;
  this.containerInfo = r;
  this.finishedWork =
    this.pingCache =
    this.current =
    this.pendingChildren =
      null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = yc(0);
  this.expirationTimes = yc(-1);
  this.entangledLanes =
    this.finishedLanes =
    this.mutableReadLanes =
    this.expiredLanes =
    this.pingedLanes =
    this.suspendedLanes =
    this.pendingLanes =
      0;
  this.entanglements = yc(0);
  this.identifierPrefix = o;
  this.onRecoverableError = s;
  this.mutableSourceEagerHydrationData = null;
}
function al(r, a, i, o, s, v, S, x, C) {
  r = new $k(r, a, i, x, C);
  1 === a ? ((a = 1), !0 === v && (a |= 8)) : (a = 0);
  v = hh(3, null, null, a);
  r.current = v;
  v.stateNode = r;
  v.memoizedState = {
    element: o,
    isDehydrated: i,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null,
  };
  xg(v);
  return r;
}
function bl(r, a, i) {
  var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: R,
    key: null == o ? null : "" + o,
    children: r,
    containerInfo: a,
    implementation: i,
  };
}
function cl(r) {
  if (!r) return gr;
  r = r._reactInternals;
  e: {
    if (Ub(r) !== r || 1 !== r.tag) throw Error(p(170));
    var a = r;
    do {
      switch (a.tag) {
        case 3:
          a = a.stateNode.context;
          break e;
        case 1:
          if (Yf(a.type)) {
            a = a.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      a = a.return;
    } while (null !== a);
    throw Error(p(171));
  }
  if (1 === r.tag) {
    var i = r.type;
    if (Yf(i)) return ag(r, i, a);
  }
  return a;
}
function dl(r, a, i, o, s, v, S, x, C) {
  r = al(i, o, !0, r, s, v, S, x, C);
  r.context = cl(null);
  i = r.current;
  o = Jg();
  s = Kg(i);
  v = zg(o, s);
  v.callback = void 0 !== a && null !== a ? a : null;
  Ag(i, v);
  r.current.lanes = s;
  zc(r, s, o);
  Ck(r, o);
  return r;
}
function el(r, a, i, o) {
  var s = a.current,
    v = Jg(),
    S = Kg(s);
  i = cl(i);
  null === a.context ? (a.context = i) : (a.pendingContext = i);
  a = zg(v, S);
  a.payload = { element: r };
  o = void 0 === o ? null : o;
  null !== o && (a.callback = o);
  Ag(s, a);
  r = Lg(s, S, v);
  null !== r && Cg(r, s, S);
  return S;
}
function fl(r) {
  r = r.current;
  if (!r.child) return null;
  switch (r.child.tag) {
    case 5:
      return r.child.stateNode;
    default:
      return r.child.stateNode;
  }
}
function gl(r, a) {
  r = r.memoizedState;
  if (null !== r && null !== r.dehydrated) {
    var i = r.retryLane;
    r.retryLane = 0 !== i && i < a ? i : a;
  }
}
function hl(r, a) {
  gl(r, a);
  (r = r.alternate) && gl(r, a);
}
function il() {
  return null;
}
var _a =
  "function" === typeof reportError
    ? reportError
    : function (r) {
        console.error(r);
      };
function kl(r) {
  this._internalRoot = r;
}
ll.prototype.render = kl.prototype.render = function (r) {
  var a = this._internalRoot;
  if (null === a) throw Error(p(409));
  el(r, a, null, null);
};
ll.prototype.unmount = kl.prototype.unmount = function () {
  var r = this._internalRoot;
  if (null !== r) {
    this._internalRoot = null;
    var a = r.containerInfo;
    Qk(function () {
      el(null, r, null, null);
    });
    a[sr] = null;
  }
};
function ll(r) {
  this._internalRoot = r;
}
ll.prototype.unstable_scheduleHydration = function (r) {
  if (r) {
    var a = kn();
    r = { blockedOn: null, target: r, priority: a };
    for (var i = 0; i < _n.length && 0 !== a && a < _n[i].priority; i++);
    _n.splice(i, 0, r);
    0 === i && Uc(r);
  }
};
function ml(r) {
  return !(!r || (1 !== r.nodeType && 9 !== r.nodeType && 11 !== r.nodeType));
}
function nl(r) {
  return !(
    !r ||
    (1 !== r.nodeType &&
      9 !== r.nodeType &&
      11 !== r.nodeType &&
      (8 !== r.nodeType || " react-mount-point-unstable " !== r.nodeValue))
  );
}
function ol() {}
function pl(r, a, i, o, s) {
  if (s) {
    if ("function" === typeof o) {
      var v = o;
      o = function () {
        var r = fl(S);
        v.call(r);
      };
    }
    var S = dl(a, o, r, 0, null, !1, !1, "", ol);
    r._reactRootContainer = S;
    r[sr] = S.current;
    rf(8 === r.nodeType ? r.parentNode : r);
    Qk();
    return S;
  }
  for (; (s = r.lastChild); ) r.removeChild(s);
  if ("function" === typeof o) {
    var x = o;
    o = function () {
      var r = fl(C);
      x.call(r);
    };
  }
  var C = al(r, 0, !1, null, null, !1, !1, "", ol);
  r._reactRootContainer = C;
  r[sr] = C.current;
  rf(8 === r.nodeType ? r.parentNode : r);
  Qk(function () {
    el(a, C, i, o);
  });
  return C;
}
function ql(r, a, i, o, s) {
  var v = i._reactRootContainer;
  if (v) {
    var S = v;
    if ("function" === typeof s) {
      var x = s;
      s = function () {
        var r = fl(S);
        x.call(r);
      };
    }
    el(a, S, r, s);
  } else S = pl(i, a, r, s, o);
  return fl(S);
}
vn = function (r) {
  switch (r.tag) {
    case 3:
      var a = r.stateNode;
      if (a.current.memoizedState.isDehydrated) {
        var i = sc(a.pendingLanes);
        0 !== i &&
          (Bc(a, 1 | i),
          Ck(a, nn()),
          0 === (6 & Hl) && ((da = nn() + 500), ig()));
      }
      break;
    case 13:
      var o = Jg();
      Qk(function () {
        return Lg(r, 1, o);
      });
      hl(r, 1);
  }
};
bn = function (r) {
  if (13 === r.tag) {
    var a = Jg();
    Lg(r, 134217728, a);
    hl(r, 134217728);
  }
};
yn = function (r) {
  if (13 === r.tag) {
    var a = Jg(),
      i = Kg(r);
    Lg(r, i, a);
    hl(r, i);
  }
};
kn = function () {
  return mn;
};
wn = function (r, a) {
  var i = mn;
  try {
    return (mn = r), a();
  } finally {
    mn = i;
  }
};
we = function (r, a, i) {
  switch (a) {
    case "input":
      $a(r, i);
      a = i.name;
      if ("radio" === i.type && null != a) {
        for (i = r; i.parentNode; ) i = i.parentNode;
        i = i.querySelectorAll(
          "input[name=" + JSON.stringify("" + a) + '][type="radio"]'
        );
        for (a = 0; a < i.length; a++) {
          var o = i[a];
          if (o !== r && o.form === r.form) {
            var s = Cb(o);
            if (!s) throw Error(p(90));
            Va(o);
            $a(o, s);
          }
        }
      }
      break;
    case "textarea":
      hb(r, i);
      break;
    case "select":
      (a = i.value), null != a && eb(r, !!i.multiple, a, !1);
  }
};
Fb = Pk;
Gb = Qk;
var Da = { usingClientEntryPoint: !1, Events: [Bb, te, Cb, Db, Eb, Pk] },
  Fa = {
    findFiberByHostInstance: Vc,
    bundleType: 0,
    version: "18.1.0",
    rendererPackageName: "react-dom",
  };
var Ma = {
  bundleType: Fa.bundleType,
  version: Fa.version,
  rendererPackageName: Fa.rendererPackageName,
  rendererConfig: Fa.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: F.ReactCurrentDispatcher,
  findHostInstanceByFiber: function (r) {
    r = Yb(r);
    return null === r ? null : r.stateNode;
  },
  findFiberByHostInstance: Fa.findFiberByHostInstance || il,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.1.0-next-22edb9f77-20220426",
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var Ia = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ia.isDisabled && Ia.supportsFiber)
    try {
      (sn = Ia.inject(Ma)), (cn = Ia);
    } catch (r) {}
}
s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Da;
s.createPortal = function (r, a) {
  var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ml(a)) throw Error(p(200));
  return bl(r, a, null, i);
};
s.createRoot = function (r, a) {
  if (!ml(r)) throw Error(p(299));
  var i = !1,
    o = "",
    s = _a;
  null !== a &&
    void 0 !== a &&
    (!0 === a.unstable_strictMode && (i = !0),
    void 0 !== a.identifierPrefix && (o = a.identifierPrefix),
    void 0 !== a.onRecoverableError && (s = a.onRecoverableError));
  a = al(r, 1, !1, null, null, i, !1, o, s);
  r[sr] = a.current;
  rf(8 === r.nodeType ? r.parentNode : r);
  return new kl(a);
};
s.findDOMNode = function (r) {
  if (null == r) return null;
  if (1 === r.nodeType) return r;
  var a = r._reactInternals;
  if (void 0 === a) {
    if ("function" === typeof r.render) throw Error(p(188));
    r = Object.keys(r).join(",");
    throw Error(p(268, r));
  }
  r = Yb(a);
  r = null === r ? null : r.stateNode;
  return r;
};
s.flushSync = function (r) {
  return Qk(r);
};
s.hydrate = function (r, a, i) {
  if (!nl(a)) throw Error(p(200));
  return ql(null, r, a, !0, i);
};
s.hydrateRoot = function (r, a, i) {
  if (!ml(r)) throw Error(p(405));
  var o = (null != i && i.hydratedSources) || null,
    s = !1,
    v = "",
    S = _a;
  null !== i &&
    void 0 !== i &&
    (!0 === i.unstable_strictMode && (s = !0),
    void 0 !== i.identifierPrefix && (v = i.identifierPrefix),
    void 0 !== i.onRecoverableError && (S = i.onRecoverableError));
  a = dl(a, null, r, 1, null != i ? i : null, s, !1, v, S);
  r[sr] = a.current;
  rf(r);
  if (o)
    for (r = 0; r < o.length; r++)
      (i = o[r]),
        (s = i._getVersion),
        (s = s(i._source)),
        null == a.mutableSourceEagerHydrationData
          ? (a.mutableSourceEagerHydrationData = [i, s])
          : a.mutableSourceEagerHydrationData.push(i, s);
  return new ll(a);
};
s.render = function (r, a, i) {
  if (!nl(a)) throw Error(p(200));
  return ql(null, r, a, !1, i);
};
s.unmountComponentAtNode = function (r) {
  if (!nl(r)) throw Error(p(40));
  return (
    !!r._reactRootContainer &&
    (Qk(function () {
      ql(null, null, r, !1, function () {
        r._reactRootContainer = null;
        r[sr] = null;
      });
    }),
    !0)
  );
};
s.unstable_batchedUpdates = Pk;
s.unstable_renderSubtreeIntoContainer = function (r, a, i, o) {
  if (!nl(i)) throw Error(p(200));
  if (null == r || void 0 === r._reactInternals) throw Error(p(38));
  return ql(r, a, i, !1, o);
};
s.version = "18.1.0-next-22edb9f77-20220426";
function checkDCE() {
  if (
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (r) {
      console.error(r);
    }
}
checkDCE();
var Aa = s;
var Ba = Aa;
const Ha = Aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qa = Aa.createPortal,
  Ga = Aa.createRoot,
  Ka = Aa.findDOMNode,
  _i = Aa.flushSync,
  Li = Aa.hydrate,
  Ti = Aa.hydrateRoot,
  Oi = Aa.render,
  Mi = Aa.unmountComponentAtNode,
  Ui = Aa.unstable_batchedUpdates,
  Vi = Aa.unstable_renderSubtreeIntoContainer,
  Wi = Aa.version;
export {
  Ha as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qa as createPortal,
  Ga as createRoot,
  Ba as default,
  Ka as findDOMNode,
  _i as flushSync,
  Li as hydrate,
  Ti as hydrateRoot,
  Oi as render,
  Mi as unmountComponentAtNode,
  Ui as unstable_batchedUpdates,
  Vi as unstable_renderSubtreeIntoContainer,
  Wi as version,
};

//# sourceMappingURL=index.js.map
