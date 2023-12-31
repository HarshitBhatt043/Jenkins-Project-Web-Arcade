/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = {},
    l = "1.11.3",
    m = function (a, b) {
      return new m.fn.init(a, b);
    },
    n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    o = /^-ms-/,
    p = /-([\da-z])/gi,
    q = function (a, b) {
      return b.toUpperCase();
    };
  (m.fn = m.prototype =
    {
      jquery: l,
      constructor: m,
      selector: "",
      length: 0,
      toArray: function () {
        return d.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : d.call(this);
      },
      pushStack: function (a) {
        var b = m.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a, b) {
        return m.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          m.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
    }),
    (m.extend = m.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || m.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (e = arguments[h]))
            for (d in e)
              (a = g[d]),
                (c = e[d]),
                g !== c &&
                  (j && c && (m.isPlainObject(c) || (b = m.isArray(c)))
                    ? (b
                        ? ((b = !1), (f = a && m.isArray(a) ? a : []))
                        : (f = a && m.isPlainObject(a) ? a : {}),
                      (g[d] = m.extend(j, f, c)))
                    : void 0 !== c && (g[d] = c));
        return g;
      }),
    m.extend({
      expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === m.type(a);
      },
      isArray:
        Array.isArray ||
        function (a) {
          return "array" === m.type(a);
        },
      isWindow: function (a) {
        return null != a && a == a.window;
      },
      isNumeric: function (a) {
        return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !j.call(a, "constructor") &&
            !j.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        if (k.ownLast) for (b in a) return j.call(a, b);
        for (b in a);
        return void 0 === b || j.call(a, b);
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? h[i.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (b) {
        b &&
          m.trim(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(o, "ms-").replace(p, q);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, c) {
        var d,
          e = 0,
          f = a.length,
          g = r(a);
        if (c) {
          if (g) {
            for (; f > e; e++) if (((d = b.apply(a[e], c)), d === !1)) break;
          } else for (e in a) if (((d = b.apply(a[e], c)), d === !1)) break;
        } else if (g) {
          for (; f > e; e++) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        } else for (e in a) if (((d = b.call(a[e], e, a[e])), d === !1)) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : (a + "").replace(n, "");
      },
      makeArray: function (a, b) {
        var c = b || [];
        return (
          null != a &&
            (r(Object(a))
              ? m.merge(c, "string" == typeof a ? [a] : a)
              : f.call(c, a)),
          c
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (g) return g.call(b, a, c);
          for (
            d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0;
            d > c;
            c++
          )
            if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, b) {
        var c = +b.length,
          d = 0,
          e = a.length;
        while (c > d) a[e++] = b[d++];
        if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, c) {
        var d,
          f = 0,
          g = a.length,
          h = r(a),
          i = [];
        if (h) for (; g > f; f++) (d = b(a[f], f, c)), null != d && i.push(d);
        else for (f in a) (d = b(a[f], f, c)), null != d && i.push(d);
        return e.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, f;
        return (
          "string" == typeof b && ((f = a[b]), (b = a), (a = f)),
          m.isFunction(a)
            ? ((c = d.call(arguments, 2)),
              (e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)));
              }),
              (e.guid = a.guid = a.guid || m.guid++),
              e)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: k,
    }),
    m.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function r(a) {
    var b = "length" in a && a.length,
      c = m.type(a);
    return "function" === c || m.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a);
  }
  var s = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0;
      },
      C = 1 << 31,
      D = {}.hasOwnProperty,
      E = [],
      F = E.pop,
      G = E.push,
      H = E.push,
      I = E.slice,
      J = function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1;
      },
      K =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      L = "[\\x20\\t\\r\\n\\f]",
      M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      N = M.replace("w", "w#"),
      O =
        "\\[" +
        L +
        "*(" +
        M +
        ")(?:" +
        L +
        "*([*^$|!~]?=)" +
        L +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        N +
        "))|)" +
        L +
        "*\\]",
      P =
        ":(" +
        M +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        O +
        ")*)|.*)\\)|)",
      Q = new RegExp(L + "+", "g"),
      R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
      S = new RegExp("^" + L + "*," + L + "*"),
      T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
      U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
      V = new RegExp(P),
      W = new RegExp("^" + N + "$"),
      X = {
        ID: new RegExp("^#(" + M + ")"),
        CLASS: new RegExp("^\\.(" + M + ")"),
        TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + O),
        PSEUDO: new RegExp("^" + P),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            L +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            L +
            "*(?:([+-]|)" +
            L +
            "*(\\d+)|))" +
            L +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            L +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            L +
            "*((?:-\\d)?\\d*)" +
            L +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      $ = /^[^{]+\{\s*\[native \w/,
      _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      aa = /[+~]/,
      ba = /'|\\/g,
      ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
      da = function (a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : 0 > d
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ea = function () {
        m();
      };
    try {
      H.apply((E = I.call(v.childNodes)), v.childNodes),
        E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = {
        apply: E.length
          ? function (a, b) {
              G.apply(a, I.call(b));
            }
          : function (a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            },
      };
    }
    function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;
      if (
        ((b ? b.ownerDocument || b : v) !== n && m(b),
        (b = b || n),
        (d = d || []),
        (k = b.nodeType),
        "string" != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))
      )
        return d;
      if (!e && p) {
        if (11 !== k && (f = _.exec(a)))
          if ((j = f[1])) {
            if (9 === k) {
              if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
              if (h.id === j) return d.push(h), d;
            } else if (
              b.ownerDocument &&
              (h = b.ownerDocument.getElementById(j)) &&
              t(b, h) &&
              h.id === j
            )
              return d.push(h), d;
          } else {
            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
            if ((j = f[3]) && c.getElementsByClassName)
              return H.apply(d, b.getElementsByClassName(j)), d;
          }
        if (c.qsa && (!q || !q.test(a))) {
          if (
            ((s = r = u),
            (w = b),
            (x = 1 !== k && a),
            1 === k && "object" !== b.nodeName.toLowerCase())
          ) {
            (o = g(a)),
              (r = b.getAttribute("id"))
                ? (s = r.replace(ba, "\\$&"))
                : b.setAttribute("id", s),
              (s = "[id='" + s + "'] "),
              (l = o.length);
            while (l--) o[l] = s + ra(o[l]);
            (w = (aa.test(a) && pa(b.parentNode)) || b), (x = o.join(","));
          }
          if (x)
            try {
              return H.apply(d, w.querySelectorAll(x)), d;
            } catch (y) {
            } finally {
              r || b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(R, "$1"), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement("div");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split("|"),
        e = a.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement;
          return b ? "HTML" !== b.nodeName : !1;
        }),
      (m = ga.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v;
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = g.documentElement),
              (e = g.defaultView),
              e &&
                e !== e.top &&
                (e.addEventListener
                  ? e.addEventListener("unload", ea, !1)
                  : e.attachEvent && e.attachEvent("onunload", ea)),
              (p = !f(g)),
              (c.attributes = ja(function (a) {
                return (a.className = "i"), !a.getAttribute("className");
              })),
              (c.getElementsByTagName = ja(function (a) {
                return (
                  a.appendChild(g.createComment("")),
                  !a.getElementsByTagName("*").length
                );
              })),
              (c.getElementsByClassName = $.test(g.getElementsByClassName)),
              (c.getById = ja(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !g.getElementsByName || !g.getElementsByName(u).length
                );
              })),
              c.getById
                ? ((d.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                      var c = b.getElementById(a);
                      return c && c.parentNode ? [c] : [];
                    }
                  }),
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      return a.getAttribute("id") === b;
                    };
                  }))
                : (delete d.find.ID,
                  (d.filter.ID = function (a) {
                    var b = a.replace(ca, da);
                    return function (a) {
                      var c =
                        "undefined" != typeof a.getAttributeNode &&
                        a.getAttributeNode("id");
                      return c && c.value === b;
                    };
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a);
                    if ("*" === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                      return d;
                    }
                    return f;
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  return p ? b.getElementsByClassName(a) : void 0;
                }),
              (r = []),
              (q = []),
              (c.qsa = $.test(g.querySelectorAll)) &&
                (ja(function (a) {
                  (o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\f]' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length ||
                      q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length ||
                      q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length ||
                      q.push(".#.+[+~]");
                }),
                ja(function (a) {
                  var b = g.createElement("input");
                  b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length &&
                      q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length ||
                      q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:");
                })),
              (c.matchesSelector = $.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ja(function (a) {
                  (c.disconnectedMatch = s.call(a, "div")),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", P);
                }),
              (q = q.length && new RegExp(q.join("|"))),
              (r = r.length && new RegExp(r.join("|"))),
              (b = $.test(o.compareDocumentPosition)),
              (t =
                b || $.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      );
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0;
                      return !1;
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === g || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === g || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? J(k, a) - J(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1);
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0;
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      h = [a],
                      i = [b];
                    if (!e || !f)
                      return a === g
                        ? -1
                        : b === g
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? J(k, a) - J(k, b)
                        : 0;
                    if (e === f) return la(a, b);
                    c = a;
                    while ((c = c.parentNode)) h.unshift(c);
                    c = b;
                    while ((c = c.parentNode)) i.unshift(c);
                    while (h[d] === i[d]) d++;
                    return d
                      ? la(h[d], i[d])
                      : h[d] === v
                      ? -1
                      : i[d] === v
                      ? 1
                      : 0;
                  }),
              g)
            : n;
        }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(U, "='$1']")),
          !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function (a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null;
      }),
      (ga.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText =
        function (a) {
          var b,
            c = "",
            d = 0,
            f = a.nodeType;
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ("string" == typeof a.textContent) return a.textContent;
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
            } else if (3 === f || 4 === f) return a.nodeValue;
          } else while ((b = a[d++])) c += e(b);
          return c;
        }),
      (d = ga.selectors =
        {
          cacheLength: 50,
          createPseudo: ia,
          match: X,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(ca, da)),
                (a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da)),
                "~=" === a[2] && (a[3] = " " + a[3] + " "),
                a.slice(0, 4)
              );
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                "nth" === a[1].slice(0, 3)
                  ? (a[3] || ga.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ("even" === a[3] || "odd" === a[3]))),
                    (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                  : a[3] && ga.error(a[0]),
                a
              );
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2];
              return X.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || "")
                    : c &&
                      V.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(")", c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3));
            },
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(ca, da).toLowerCase();
              return "*" === a
                ? function () {
                    return !0;
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b;
                  };
            },
            CLASS: function (a) {
              var b = y[a + " "];
              return (
                b ||
                ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                  y(a, function (a) {
                    return b.test(
                      ("string" == typeof a.className && a.className) ||
                        ("undefined" != typeof a.getAttribute &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = ga.attr(d, a);
                return null == e
                  ? "!=" === b
                  : b
                  ? ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                      ? e !== c
                      : "^=" === b
                      ? c && 0 === e.indexOf(c)
                      : "*=" === b
                      ? c && e.indexOf(c) > -1
                      : "$=" === b
                      ? c && e.slice(-c.length) === c
                      : "~=" === b
                      ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1
                      : "|=" === b
                      ? e === c || e.slice(0, c.length + 1) === c + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (a, b, c, d, e) {
              var f = "nth" !== a.slice(0, 3),
                g = "last" !== a.slice(-4),
                h = "of-type" === b;
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode;
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? "nextSibling" : "previousSibling",
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h;
                    if (q) {
                      if (f) {
                        while (p) {
                          l = b;
                          while ((l = l[p]))
                            if (
                              h
                                ? l.nodeName.toLowerCase() === r
                                : 1 === l.nodeType
                            )
                              return !1;
                          o = p = "only" === a && !o && "nextSibling";
                        }
                        return !0;
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        (k = q[u] || (q[u] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (m = j[0] === w && j[2]),
                          (l = n && q.childNodes[n]);
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [w, n, m];
                            break;
                          }
                      } else if (
                        s &&
                        (j = (b[u] || (b[u] = {}))[a]) &&
                        j[0] === w
                      )
                        m = j[1];
                      else
                        while (
                          (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? l.nodeName.toLowerCase() === r
                              : 1 === l.nodeType) &&
                            ++m &&
                            (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)
                          )
                            break;
                      return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                    }
                  };
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  ga.error("unsupported pseudo: " + a);
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ia(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function (a) {
                        return e(a, 0, c);
                      })
                : e;
            },
          },
          pseudos: {
            not: ia(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(R, "$1"));
              return d[u]
                ? ia(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length;
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                  })
                : function (a, e, f) {
                    return (
                      (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                    );
                  };
            }),
            has: ia(function (a) {
              return function (b) {
                return ga(a, b).length > 0;
              };
            }),
            contains: ia(function (a) {
              return (
                (a = a.replace(ca, da)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                }
              );
            }),
            lang: ia(function (a) {
              return (
                W.test(a || "") || ga.error("unsupported lang: " + a),
                (a = a.replace(ca, da).toLowerCase()),
                function (b) {
                  var c;
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + "-")
                      );
                  while ((b = b.parentNode) && 1 === b.nodeType);
                  return !1;
                }
              );
            }),
            target: function (b) {
              var c = a.location && a.location.hash;
              return c && c.slice(1) === b.id;
            },
            root: function (a) {
              return a === o;
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              );
            },
            enabled: function (a) {
              return a.disabled === !1;
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              var b = a.nodeName.toLowerCase();
              return (
                ("input" === b && !!a.checked) ||
                ("option" === b && !!a.selected)
              );
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              );
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1;
              return !0;
            },
            parent: function (a) {
              return !d.pseudos.empty(a);
            },
            header: function (a) {
              return Z.test(a.nodeName);
            },
            input: function (a) {
              return Y.test(a.nodeName);
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return ("input" === b && "button" === a.type) || "button" === b;
            },
            text: function (a) {
              var b;
              return (
                "input" === a.nodeName.toLowerCase() &&
                "text" === a.type &&
                (null == (b = a.getAttribute("type")) ||
                  "text" === b.toLowerCase())
              );
            },
            first: oa(function () {
              return [0];
            }),
            last: oa(function (a, b) {
              return [b - 1];
            }),
            eq: oa(function (a, b, c) {
              return [0 > c ? c + b : c];
            }),
            even: oa(function (a, b) {
              for (var c = 0; b > c; c += 2) a.push(c);
              return a;
            }),
            odd: oa(function (a, b) {
              for (var c = 1; b > c; c += 2) a.push(c);
              return a;
            }),
            lt: oa(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
              return a;
            }),
            gt: oa(function (a, b, c) {
              for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
              return a;
            }),
          },
        }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function qa() {}
    (qa.prototype = d.filters = d.pseudos),
      (d.setFilters = new qa()),
      (g = ga.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + " "];
          if (k) return b ? 0 : k.slice(0);
          (h = a), (i = []), (j = d.preFilter);
          while (h) {
            (!c || (e = S.exec(h))) &&
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = T.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(R, " ") }),
                (h = h.slice(c.length)));
            for (g in d.filter)
              !(e = X[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)));
            if (!c) break;
          }
          return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        });
    function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d;
    }
    function sa(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = x++;
      return b.first
        ? function (b, c, f) {
            while ((b = b[d])) if (1 === b.nodeType || e) return a(b, c, f);
          }
        : function (b, c, g) {
            var h,
              i,
              j = [w, f];
            if (g) {
              while ((b = b[d]))
                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || e) {
                  if (
                    ((i = b[u] || (b[u] = {})),
                    (h = i[d]) && h[0] === w && h[1] === f)
                  )
                    return (j[2] = h[2]);
                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                }
          };
    }
    function ta(a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
      return c;
    }
    function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g;
    }
    function wa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = wa(d)),
        e && !e[u] && (e = wa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : va(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = va(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? J(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = va(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
        })
      );
    }
    function xa(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = sa(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          l = sa(
            function (a) {
              return J(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            },
          ];
        f > i;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [sa(ta(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
            return wa(
              i > 1 && ta(m),
              i > 1 &&
                ra(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              c,
              e > i && xa(a.slice(i, e)),
              f > e && xa((a = a.slice(e))),
              f > e && ra(a)
            );
          }
          m.push(c);
        }
      return ta(m);
    }
    function ya(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            m,
            o,
            p = 0,
            q = "0",
            r = f && [],
            s = [],
            t = j,
            u = f || (e && d.find.TAG("*", k)),
            v = (w += null == t ? 1 : Math.random() || 0.1),
            x = u.length;
          for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
            if (e && l) {
              m = 0;
              while ((o = a[m++]))
                if (o(l, g, h)) {
                  i.push(l);
                  break;
                }
              k && (w = v);
            }
            c && ((l = !o && l) && p--, f && r.push(l));
          }
          if (((p += q), c && q !== p)) {
            m = 0;
            while ((o = b[m++])) o(r, s, g, h);
            if (f) {
              if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
              s = va(s);
            }
            H.apply(i, s),
              k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = v), (j = t)), r;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + " "];
          if (!f) {
            b || (b = g(a)), (c = b.length);
            while (c--) (f = xa(b[c])), f[u] ? d.push(f) : e.push(f);
            (f = A(a, ya(e, d))), (f.selector = a);
          }
          return f;
        }),
      (i = ga.select =
        function (a, b, e, f) {
          var i,
            j,
            k,
            l,
            m,
            n = "function" == typeof a && a,
            o = !f && g((a = n.selector || a));
          if (((e = e || []), 1 === o.length)) {
            if (
              ((j = o[0] = o[0].slice(0)),
              j.length > 2 &&
                "ID" === (k = j[0]).type &&
                c.getById &&
                9 === b.nodeType &&
                p &&
                d.relative[j[1].type])
            ) {
              if (
                ((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0]),
                !b)
              )
                return e;
              n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
            }
            i = X.needsContext.test(a) ? 0 : j.length;
            while (i--) {
              if (((k = j[i]), d.relative[(l = k.type)])) break;
              if (
                (m = d.find[l]) &&
                (f = m(
                  k.matches[0].replace(ca, da),
                  (aa.test(j[0].type) && pa(b.parentNode)) || b
                ))
              ) {
                if ((j.splice(i, 1), (a = f.length && ra(j)), !a))
                  return H.apply(e, f), e;
                break;
              }
            }
          }
          return (
            (n || h(a, o))(f, b, !p, e, (aa.test(a) && pa(b.parentNode)) || b),
            e
          );
        }),
      (c.sortStable = u.split("").sort(B).join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement("div"));
      })),
      ja(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ka("type|href|height|width", function (a, b, c) {
          return c
            ? void 0
            : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ka("value", function (a, b, c) {
          return c || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      ja(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        ka(K, function (a, b, c) {
          var d;
          return c
            ? void 0
            : a[b] === !0
            ? b.toLowerCase()
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
      ga
    );
  })(a);
  (m.find = s),
    (m.expr = s.selectors),
    (m.expr[":"] = m.expr.pseudos),
    (m.unique = s.uniqueSort),
    (m.text = s.getText),
    (m.isXMLDoc = s.isXML),
    (m.contains = s.contains);
  var t = m.expr.match.needsContext,
    u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    v = /^.[^:#\[\.,]*$/;
  function w(a, b, c) {
    if (m.isFunction(b))
      return m.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return m.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (v.test(b)) return m.filter(b, a, c);
      b = m.filter(b, a);
    }
    return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c;
    });
  }
  (m.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? m.find.matchesSelector(d, a)
          ? [d]
          : []
        : m.find.matches(
            a,
            m.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    m.fn.extend({
      find: function (a) {
        var b,
          c = [],
          d = this,
          e = d.length;
        if ("string" != typeof a)
          return this.pushStack(
            m(a).filter(function () {
              for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0;
            })
          );
        for (b = 0; e > b; b++) m.find(a, d[b], c);
        return (
          (c = this.pushStack(e > 1 ? m.unique(c) : c)),
          (c.selector = this.selector ? this.selector + " " + a : a),
          c
        );
      },
      filter: function (a) {
        return this.pushStack(w(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(w(this, a || [], !0));
      },
      is: function (a) {
        return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1)
          .length;
      },
    });
  var x,
    y = a.document,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    A = (m.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (
          ((c =
            "<" === a.charAt(0) &&
            ">" === a.charAt(a.length - 1) &&
            a.length >= 3
              ? [null, a, null]
              : z.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery
            ? (b || x).find(a)
            : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof m ? b[0] : b),
            m.merge(
              this,
              m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)
            ),
            u.test(c[1]) && m.isPlainObject(b))
          )
            for (c in b)
              m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        if (((d = y.getElementById(c[2])), d && d.parentNode)) {
          if (d.id !== c[2]) return x.find(a);
          (this.length = 1), (this[0] = d);
        }
        return (this.context = y), (this.selector = a), this;
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : m.isFunction(a)
        ? "undefined" != typeof x.ready
          ? x.ready(a)
          : a(m)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          m.makeArray(a, this));
    });
  (A.prototype = m.fn), (x = m(y));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  m.extend({
    dir: function (a, b, c) {
      var d = [],
        e = a[b];
      while (
        e &&
        9 !== e.nodeType &&
        (void 0 === c || 1 !== e.nodeType || !m(e).is(c))
      )
        1 === e.nodeType && d.push(e), (e = e[b]);
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    m.fn.extend({
      has: function (a) {
        var b,
          c = m(a, this),
          d = c.length;
        return this.filter(function () {
          for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && m.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? m.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? m.inArray(this[0], m(a))
            : m.inArray(a.jquery ? a[0] : a, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    });
  function D(a, b) {
    do a = a[b];
    while (a && 1 !== a.nodeType);
    return a;
  }
  m.each(
    {
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function (a) {
        return m.dir(a, "parentNode");
      },
      parentsUntil: function (a, b, c) {
        return m.dir(a, "parentNode", c);
      },
      next: function (a) {
        return D(a, "nextSibling");
      },
      prev: function (a) {
        return D(a, "previousSibling");
      },
      nextAll: function (a) {
        return m.dir(a, "nextSibling");
      },
      prevAll: function (a) {
        return m.dir(a, "previousSibling");
      },
      nextUntil: function (a, b, c) {
        return m.dir(a, "nextSibling", c);
      },
      prevUntil: function (a, b, c) {
        return m.dir(a, "previousSibling", c);
      },
      siblings: function (a) {
        return m.sibling((a.parentNode || {}).firstChild, a);
      },
      children: function (a) {
        return m.sibling(a.firstChild);
      },
      contents: function (a) {
        return m.nodeName(a, "iframe")
          ? a.contentDocument || a.contentWindow.document
          : m.merge([], a.childNodes);
      },
    },
    function (a, b) {
      m.fn[a] = function (c, d) {
        var e = m.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = m.filter(d, e)),
          this.length > 1 &&
            (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())),
          this.pushStack(e)
        );
      };
    }
  );
  var E = /\S+/g,
    F = {};
  function G(a) {
    var b = (F[a] = {});
    return (
      m.each(a.match(E) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  (m.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
    var b,
      c,
      d,
      e,
      f,
      g,
      h = [],
      i = !a.once && [],
      j = function (l) {
        for (
          c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0;
          h && e > f;
          f++
        )
          if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break;
          }
        (b = !1),
          h && (i ? i.length && j(i.shift()) : c ? (h = []) : k.disable());
      },
      k = {
        add: function () {
          if (h) {
            var d = h.length;
            !(function f(b) {
              m.each(b, function (b, c) {
                var d = m.type(c);
                "function" === d
                  ? (a.unique && k.has(c)) || h.push(c)
                  : c && c.length && "string" !== d && f(c);
              });
            })(arguments),
              b ? (e = h.length) : c && ((g = d), j(c));
          }
          return this;
        },
        remove: function () {
          return (
            h &&
              m.each(arguments, function (a, c) {
                var d;
                while ((d = m.inArray(c, h, d)) > -1)
                  h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
        },
        empty: function () {
          return (h = []), (e = 0), this;
        },
        disable: function () {
          return (h = i = c = void 0), this;
        },
        disabled: function () {
          return !h;
        },
        lock: function () {
          return (i = void 0), c || k.disable(), this;
        },
        locked: function () {
          return !i;
        },
        fireWith: function (a, c) {
          return (
            !h ||
              (d && !i) ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              b ? i.push(c) : j(c)),
            this
          );
        },
        fire: function () {
          return k.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return k;
  }),
    m.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", m.Callbacks("once memory"), "resolved"],
            ["reject", "fail", m.Callbacks("once memory"), "rejected"],
            ["notify", "progress", m.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return m
                .Deferred(function (c) {
                  m.each(b, function (b, f) {
                    var g = m.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && m.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? m.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          m.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || (a && m.isFunction(a.promise)) ? e : 0,
          g = 1 === f ? a : m.Deferred(),
          h = function (a, b, c) {
            return function (e) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          },
          i,
          j,
          k;
        if (e > 1)
          for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
            c[b] && m.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(h(b, k, c))
                  .fail(g.reject)
                  .progress(h(b, j, i))
              : --f;
        return f || g.resolveWith(k, c), g.promise();
      },
    });
  var H;
  (m.fn.ready = function (a) {
    return m.ready.promise().done(a), this;
  }),
    m.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? m.readyWait++ : m.ready(!0);
      },
      ready: function (a) {
        if (a === !0 ? !--m.readyWait : !m.isReady) {
          if (!y.body) return setTimeout(m.ready);
          (m.isReady = !0),
            (a !== !0 && --m.readyWait > 0) ||
              (H.resolveWith(y, [m]),
              m.fn.triggerHandler &&
                (m(y).triggerHandler("ready"), m(y).off("ready")));
        }
      },
    });
  function I() {
    y.addEventListener
      ? (y.removeEventListener("DOMContentLoaded", J, !1),
        a.removeEventListener("load", J, !1))
      : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }
  function J() {
    (y.addEventListener ||
      "load" === event.type ||
      "complete" === y.readyState) &&
      (I(), m.ready());
  }
  m.ready.promise = function (b) {
    if (!H)
      if (((H = m.Deferred()), "complete" === y.readyState))
        setTimeout(m.ready);
      else if (y.addEventListener)
        y.addEventListener("DOMContentLoaded", J, !1),
          a.addEventListener("load", J, !1);
      else {
        y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
        var c = !1;
        try {
          c = null == a.frameElement && y.documentElement;
        } catch (d) {}
        c &&
          c.doScroll &&
          !(function e() {
            if (!m.isReady) {
              try {
                c.doScroll("left");
              } catch (a) {
                return setTimeout(e, 50);
              }
              I(), m.ready();
            }
          })();
      }
    return H.promise(b);
  };
  var K = "undefined",
    L;
  for (L in m(k)) break;
  (k.ownLast = "0" !== L),
    (k.inlineBlockNeedsLayout = !1),
    m(function () {
      var a, b, c, d;
      (c = y.getElementsByTagName("body")[0]),
        c &&
          c.style &&
          ((b = y.createElement("div")),
          (d = y.createElement("div")),
          (d.style.cssText =
            "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
          c.appendChild(d).appendChild(b),
          typeof b.style.zoom !== K &&
            ((b.style.cssText =
              "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
            (k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth),
            a && (c.style.zoom = 1)),
          c.removeChild(d));
    }),
    (function () {
      var a = y.createElement("div");
      if (null == k.deleteExpando) {
        k.deleteExpando = !0;
        try {
          delete a.test;
        } catch (b) {
          k.deleteExpando = !1;
        }
      }
      a = null;
    })(),
    (m.acceptData = function (a) {
      var b = m.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return 1 !== c && 9 !== c
        ? !1
        : !b || (b !== !0 && a.getAttribute("classid") === b);
    });
  var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    N = /([A-Z])/g;
  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();
      if (((c = a.getAttribute(d)), "string" == typeof c)) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : M.test(c)
              ? m.parseJSON(c)
              : c;
        } catch (e) {}
        m.data(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  function P(a) {
    var b;
    for (b in a)
      if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;

    return !0;
  }
  function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f,
        g,
        h = m.expando,
        i = a.nodeType,
        j = i ? m.cache : a,
        k = i ? a[h] : a[h] && h;
      if (
        (k && j[k] && (e || j[k].data)) ||
        void 0 !== d ||
        "string" != typeof b
      )
        return (
          k || (k = i ? (a[h] = c.pop() || m.guid++) : h),
          j[k] || (j[k] = i ? {} : { toJSON: m.noop }),
          ("object" == typeof b || "function" == typeof b) &&
            (e
              ? (j[k] = m.extend(j[k], b))
              : (j[k].data = m.extend(j[k].data, b))),
          (g = j[k]),
          e || (g.data || (g.data = {}), (g = g.data)),
          void 0 !== d && (g[m.camelCase(b)] = d),
          "string" == typeof b
            ? ((f = g[b]), null == f && (f = g[m.camelCase(b)]))
            : (f = g),
          f
        );
    }
  }
  function R(a, b, c) {
    if (m.acceptData(a)) {
      var d,
        e,
        f = a.nodeType,
        g = f ? m.cache : a,
        h = f ? a[m.expando] : m.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b)
            ? (b = b.concat(m.map(b, m.camelCase)))
            : b in d
            ? (b = [b])
            : ((b = m.camelCase(b)), (b = b in d ? [b] : b.split(" "))),
            (e = b.length);
          while (e--) delete d[b[e]];
          if (c ? !P(d) : !m.isEmptyObject(d)) return;
        }
        (c || (delete g[h].data, P(g[h]))) &&
          (f
            ? m.cleanData([a], !0)
            : k.deleteExpando || g != g.window
            ? delete g[h]
            : (g[h] = null));
      }
    }
  }
  m.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando]), !!a && !P(a)
      );
    },
    data: function (a, b, c) {
      return Q(a, b, c);
    },
    removeData: function (a, b) {
      return R(a, b);
    },
    _data: function (a, b, c) {
      return Q(a, b, c, !0);
    },
    _removeData: function (a, b) {
      return R(a, b, !0);
    },
  }),
    m.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = m.data(f)), 1 === f.nodeType && !m._data(f, "parsedAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = m.camelCase(d.slice(5))), O(f, d, e[d])));
            m._data(f, "parsedAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              m.data(this, a);
            })
          : arguments.length > 1
          ? this.each(function () {
              m.data(this, a, b);
            })
          : f
          ? O(f, a, m.data(f, a))
          : void 0;
      },
      removeData: function (a) {
        return this.each(function () {
          m.removeData(this, a);
        });
      },
    }),
    m.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = m._data(a, b)),
            c &&
              (!d || m.isArray(c)
                ? (d = m._data(a, b, m.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = m.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = m._queueHooks(a, b),
          g = function () {
            m.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          m._data(a, c) ||
          m._data(a, c, {
            empty: m.Callbacks("once memory").add(function () {
              m._removeData(a, b + "queue"), m._removeData(a, c);
            }),
          })
        );
      },
    }),
    m.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? m.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          m.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = m.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = m._data(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    T = ["Top", "Right", "Bottom", "Left"],
    U = function (a, b) {
      return (
        (a = b || a),
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
      );
    },
    V = (m.access = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === m.type(c)) {
        e = !0;
        for (h in c) m.access(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        m.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(m(a), c);
              }))),
        b)
      )
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }),
    W = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = y.createElement("input"),
      b = y.createElement("div"),
      c = y.createDocumentFragment();
    if (
      ((b.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (k.leadingWhitespace = 3 === b.firstChild.nodeType),
      (k.tbody = !b.getElementsByTagName("tbody").length),
      (k.htmlSerialize = !!b.getElementsByTagName("link").length),
      (k.html5Clone =
        "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML),
      (a.type = "checkbox"),
      (a.checked = !0),
      c.appendChild(a),
      (k.appendChecked = a.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue),
      c.appendChild(b),
      (b.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (k.noCloneEvent = !0),
      b.attachEvent &&
        (b.attachEvent("onclick", function () {
          k.noCloneEvent = !1;
        }),
        b.cloneNode(!0).click()),
      null == k.deleteExpando)
    ) {
      k.deleteExpando = !0;
      try {
        delete b.test;
      } catch (d) {
        k.deleteExpando = !1;
      }
    }
  })(),
    (function () {
      var b,
        c,
        d = y.createElement("div");
      for (b in { submit: !0, change: !0, focusin: !0 })
        (c = "on" + b),
          (k[b + "Bubbles"] = c in a) ||
            (d.setAttribute(c, "t"),
            (k[b + "Bubbles"] = d.attributes[c].expando === !1));
      d = null;
    })();
  var X = /^(?:input|select|textarea)$/i,
    Y = /^key/,
    Z = /^(?:mouse|pointer|contextmenu)|click/,
    $ = /^(?:focusinfocus|focusoutblur)$/,
    _ = /^([^.]*)(?:\.(.+)|)$/;
  function aa() {
    return !0;
  }
  function ba() {
    return !1;
  }
  function ca() {
    try {
      return y.activeElement;
    } catch (a) {}
  }
  (m.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        n,
        o,
        p,
        q,
        r = m._data(a);
      if (r) {
        c.handler && ((i = c), (c = i.handler), (e = i.selector)),
          c.guid || (c.guid = m.guid++),
          (g = r.events) || (g = r.events = {}),
          (k = r.handle) ||
            ((k = r.handle =
              function (a) {
                return typeof m === K || (a && m.event.triggered === a.type)
                  ? void 0
                  : m.event.dispatch.apply(k.elem, arguments);
              }),
            (k.elem = a)),
          (b = (b || "").match(E) || [""]),
          (h = b.length);
        while (h--)
          (f = _.exec(b[h]) || []),
            (o = q = f[1]),
            (p = (f[2] || "").split(".").sort()),
            o &&
              ((j = m.event.special[o] || {}),
              (o = (e ? j.delegateType : j.bindType) || o),
              (j = m.event.special[o] || {}),
              (l = m.extend(
                {
                  type: o,
                  origType: q,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && m.expr.match.needsContext.test(e),
                  namespace: p.join("."),
                },
                i
              )),
              (n = g[o]) ||
                ((n = g[o] = []),
                (n.delegateCount = 0),
                (j.setup && j.setup.call(a, d, p, k) !== !1) ||
                  (a.addEventListener
                    ? a.addEventListener(o, k, !1)
                    : a.attachEvent && a.attachEvent("on" + o, k))),
              j.add &&
                (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
              e ? n.splice(n.delegateCount++, 0, l) : n.push(l),
              (m.event.global[o] = !0));
        a = null;
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        n,
        o,
        p,
        q,
        r = m.hasData(a) && m._data(a);
      if (r && (k = r.events)) {
        (b = (b || "").match(E) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = _.exec(b[j]) || []),
            (o = q = h[1]),
            (p = (h[2] || "").split(".").sort()),
            o)
          ) {
            (l = m.event.special[o] || {}),
              (o = (d ? l.delegateType : l.bindType) || o),
              (n = k[o] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (i = f = n.length);
            while (f--)
              (g = n[f]),
                (!e && q !== g.origType) ||
                  (c && c.guid !== g.guid) ||
                  (h && !h.test(g.namespace)) ||
                  (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                  (n.splice(f, 1),
                  g.selector && n.delegateCount--,
                  l.remove && l.remove.call(a, g));
            i &&
              !n.length &&
              ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                m.removeEvent(a, o, r.handle),
              delete k[o]);
          } else for (o in k) m.event.remove(a, o + b[j], c, d, !0);
        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        k,
        l,
        n,
        o = [d || y],
        p = j.call(b, "type") ? b.type : b,
        q = j.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = l = d = d || y),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !$.test(p + m.event.triggered) &&
          (p.indexOf(".") >= 0 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (g = p.indexOf(":") < 0 && "on" + p),
          (b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : m.makeArray(c, [b])),
          (k = m.event.special[p] || {}),
          e || !k.trigger || k.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (
            i = k.delegateType || p, $.test(i + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (l = h);
          l === (d.ownerDocument || y) &&
            o.push(l.defaultView || l.parentWindow || a);
        }
        n = 0;
        while ((h = o[n++]) && !b.isPropagationStopped())
          (b.type = n > 1 ? i : k.bindType || p),
            (f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle")),
            f && f.apply(h, c),
            (f = g && h[g]),
            f &&
              f.apply &&
              m.acceptData(h) &&
              ((b.result = f.apply(h, c)),
              b.result === !1 && b.preventDefault());
        if (
          ((b.type = p),
          !e &&
            !b.isDefaultPrevented() &&
            (!k._default || k._default.apply(o.pop(), c) === !1) &&
            m.acceptData(d) &&
            g &&
            d[p] &&
            !m.isWindow(d))
        ) {
          (l = d[g]), l && (d[g] = null), (m.event.triggered = p);
          try {
            d[p]();
          } catch (r) {}
          (m.event.triggered = void 0), l && (d[g] = l);
        }
        return b.result;
      }
    },
    dispatch: function (a) {
      a = m.event.fix(a);
      var b,
        c,
        e,
        f,
        g,
        h = [],
        i = d.call(arguments),
        j = (m._data(this, "events") || {})[a.type] || [],
        k = m.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, a) !== !1)
      ) {
        (h = m.event.handlers.call(this, a, j)), (b = 0);
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          (a.currentTarget = f.elem), (g = 0);
          while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
            (!a.namespace_re || a.namespace_re.test(e.namespace)) &&
              ((a.handleObj = e),
              (a.data = e.data),
              (c = (
                (m.event.special[e.origType] || {}).handle || e.handler
              ).apply(f.elem, i)),
              void 0 !== c &&
                (a.result = c) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (e = [], f = 0; h > f; f++)
              (d = b[f]),
                (c = d.selector + " "),
                void 0 === e[c] &&
                  (e[c] = d.needsContext
                    ? m(c, this).index(i) >= 0
                    : m.find(c, this, null, [i]).length),
                e[c] && e.push(d);
            e.length && g.push({ elem: i, handlers: e });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    fix: function (a) {
      if (a[m.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      g ||
        (this.fixHooks[e] = g =
          Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}),
        (d = g.props ? this.props.concat(g.props) : this.props),
        (a = new m.Event(f)),
        (b = d.length);
      while (b--) (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = f.srcElement || y),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        g.filter ? g.filter(a, f) : a
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button,
          g = b.fromElement;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((d = a.target.ownerDocument || y),
            (e = d.documentElement),
            (c = d.body),
            (a.pageX =
              b.clientX +
              ((e && e.scrollLeft) || (c && c.scrollLeft) || 0) -
              ((e && e.clientLeft) || (c && c.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((e && e.scrollTop) || (c && c.scrollTop) || 0) -
              ((e && e.clientTop) || (c && c.clientTop) || 0))),
          !a.relatedTarget &&
            g &&
            (a.relatedTarget = g === a.target ? b.toElement : g),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ca() && this.focus)
            try {
              return this.focus(), !1;
            } catch (a) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === ca() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return m.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return m.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = m.extend(new m.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (m.removeEvent = y.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
        }),
    (m.Event = function (a, b) {
      return this instanceof m.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? aa
                  : ba))
            : (this.type = a),
          b && m.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || m.now()),
          void (this[m.expando] = !0))
        : new m.Event(a, b);
    }),
    (m.Event.prototype = {
      isDefaultPrevented: ba,
      isPropagationStopped: ba,
      isImmediatePropagationStopped: ba,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = aa),
          a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = aa),
          a &&
            (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = aa),
          a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    m.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (a, b) {
        m.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !m.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    k.submitBubbles ||
      (m.event.special.submit = {
        setup: function () {
          return m.nodeName(this, "form")
            ? !1
            : void m.event.add(
                this,
                "click._submit keypress._submit",
                function (a) {
                  var b = a.target,
                    c =
                      m.nodeName(b, "input") || m.nodeName(b, "button")
                        ? b.form
                        : void 0;
                  c &&
                    !m._data(c, "submitBubbles") &&
                    (m.event.add(c, "submit._submit", function (a) {
                      a._submit_bubble = !0;
                    }),
                    m._data(c, "submitBubbles", !0));
                }
              );
        },
        postDispatch: function (a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode &&
              !a.isTrigger &&
              m.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function () {
          return m.nodeName(this, "form")
            ? !1
            : void m.event.remove(this, "._submit");
        },
      }),
    k.changeBubbles ||
      (m.event.special.change = {
        setup: function () {
          return X.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (m.event.add(this, "propertychange._change", function (a) {
                  "checked" === a.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                m.event.add(this, "click._change", function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    (this._just_changed = !1),
                    m.event.simulate("change", this, a, !0);
                })),
              !1)
            : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) &&
                  !m._data(b, "changeBubbles") &&
                  (m.event.add(b, "change._change", function (a) {
                    !this.parentNode ||
                      a.isSimulated ||
                      a.isTrigger ||
                      m.event.simulate("change", this.parentNode, a, !0);
                  }),
                  m._data(b, "changeBubbles", !0));
              });
        },
        handle: function (a) {
          var b = a.target;
          return this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            ("radio" !== b.type && "checkbox" !== b.type)
            ? a.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return m.event.remove(this, "._change"), !X.test(this.nodeName);
        },
      }),
    k.focusinBubbles ||
      m.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          m.event.simulate(b, a.target, m.event.fix(a), !0);
        };
        m.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = m._data(d, b);
            e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = m._data(d, b) - 1;
            e
              ? m._data(d, b, e)
              : (d.removeEventListener(a, c, !0), m._removeData(d, b));
          },
        };
      }),
    m.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (f in a) this.on(f, b, c, a[f], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = ba;
        else if (!d) return this;
        return (
          1 === e &&
            ((g = d),
            (d = function (a) {
              return m().off(a), g.apply(this, arguments);
            }),
            (d.guid = g.guid || (g.guid = m.guid++))),
          this.each(function () {
            m.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            m(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = ba),
          this.each(function () {
            m.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          m.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? m.event.trigger(a, b, c, !0) : void 0;
      },
    });
  function da(a) {
    var b = ea.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  var ea =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    fa = / jQuery\d+="(?:null|\d+)"/g,
    ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
    ha = /^\s+/,
    ia =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ja = /<([\w:]+)/,
    ka = /<tbody/i,
    la = /<|&#?\w+;/,
    ma = /<(?:script|style|link)/i,
    na = /checked\s*(?:[^=]|=\s*.checked.)/i,
    oa = /^$|\/(?:java|ecma)script/i,
    pa = /^true\/(.*)/,
    qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ra = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    sa = da(y),
    ta = sa.appendChild(y.createElement("div"));
  (ra.optgroup = ra.option),
    (ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead),
    (ra.th = ra.td);
  function ua(a, b) {
    var c,
      d,
      e = 0,
      f =
        typeof a.getElementsByTagName !== K
          ? a.getElementsByTagName(b || "*")
          : typeof a.querySelectorAll !== K
          ? a.querySelectorAll(b || "*")
          : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)
        !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
    return void 0 === b || (b && m.nodeName(a, b)) ? m.merge([a], f) : f;
  }
  function va(a) {
    W.test(a.type) && (a.defaultChecked = a.checked);
  }
  function wa(a, b) {
    return m.nodeName(a, "table") &&
      m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function xa(a) {
    return (a.type = (null !== m.find.attr(a, "type")) + "/" + a.type), a;
  }
  function ya(a) {
    var b = pa.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function za(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++)
      m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
  }
  function Aa(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c,
        d,
        e,
        f = m._data(a),
        g = m._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, (g.events = {});
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]);
      }
      g.data && (g.data = m.extend({}, g.data));
    }
  }
  function Ba(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (((c = b.nodeName.toLowerCase()), !k.noCloneEvent && b[m.expando])) {
        e = m._data(b);
        for (d in e.events) m.removeEvent(b, d, e.handle);
        b.removeAttribute(m.expando);
      }
      "script" === c && b.text !== a.text
        ? ((xa(b).text = a.text), ya(b))
        : "object" === c
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          k.html5Clone &&
            a.innerHTML &&
            !m.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : "input" === c && W.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : "option" === c
        ? (b.defaultSelected = b.selected = a.defaultSelected)
        : ("input" === c || "textarea" === c) &&
          (b.defaultValue = a.defaultValue);
    }
  }
  m.extend({
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i = m.contains(a.ownerDocument, a);
      if (
        (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">")
          ? (f = a.cloneNode(!0))
          : ((ta.innerHTML = a.outerHTML), ta.removeChild((f = ta.firstChild))),
        !(
          (k.noCloneEvent && k.noCloneChecked) ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          m.isXMLDoc(a)
        ))
      )
        for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g)
          d[g] && Ba(e, d[g]);
      if (b)
        if (c)
          for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++)
            Aa(e, d[g]);
        else Aa(a, f);
      return (
        (d = ua(f, "script")),
        d.length > 0 && za(d, !i && ua(a, "script")),
        (d = h = e = null),
        f
      );
    },
    buildFragment: function (a, b, c, d) {
      for (
        var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0;
        n > q;
        q++
      )
        if (((f = a[q]), f || 0 === f))
          if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
          else if (la.test(f)) {
            (h = h || o.appendChild(b.createElement("div"))),
              (i = (ja.exec(f) || ["", ""])[1].toLowerCase()),
              (l = ra[i] || ra._default),
              (h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2]),
              (e = l[0]);
            while (e--) h = h.lastChild;
            if (
              (!k.leadingWhitespace &&
                ha.test(f) &&
                p.push(b.createTextNode(ha.exec(f)[0])),
              !k.tbody)
            ) {
              (f =
                "table" !== i || ka.test(f)
                  ? "<table>" !== l[1] || ka.test(f)
                    ? 0
                    : h
                  : h.firstChild),
                (e = f && f.childNodes.length);
              while (e--)
                m.nodeName((j = f.childNodes[e]), "tbody") &&
                  !j.childNodes.length &&
                  f.removeChild(j);
            }
            m.merge(p, h.childNodes), (h.textContent = "");
            while (h.firstChild) h.removeChild(h.firstChild);
            h = o.lastChild;
          } else p.push(b.createTextNode(f));
      h && o.removeChild(h),
        k.appendChecked || m.grep(ua(p, "input"), va),
        (q = 0);
      while ((f = p[q++]))
        if (
          (!d || -1 === m.inArray(f, d)) &&
          ((g = m.contains(f.ownerDocument, f)),
          (h = ua(o.appendChild(f), "script")),
          g && za(h),
          c)
        ) {
          e = 0;
          while ((f = h[e++])) oa.test(f.type || "") && c.push(f);
        }
      return (h = null), o;
    },
    cleanData: function (a, b) {
      for (
        var d,
          e,
          f,
          g,
          h = 0,
          i = m.expando,
          j = m.cache,
          l = k.deleteExpando,
          n = m.event.special;
        null != (d = a[h]);
        h++
      )
        if ((b || m.acceptData(d)) && ((f = d[i]), (g = f && j[f]))) {
          if (g.events)
            for (e in g.events)
              n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
          j[f] &&
            (delete j[f],
            l
              ? delete d[i]
              : typeof d.removeAttribute !== K
              ? d.removeAttribute(i)
              : (d[i] = null),
            c.push(f));
        }
    },
  }),
    m.fn.extend({
      text: function (a) {
        return V(
          this,
          function (a) {
            return void 0 === a
              ? m.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || y).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = wa(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = wa(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (
          var c, d = a ? m.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || m.cleanData(ua(c)),
            c.parentNode &&
              (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
          1 === a.nodeType && m.cleanData(ua(a, !1));
          while (a.firstChild) a.removeChild(a.firstChild);
          a.options && m.nodeName(a, "select") && (a.options.length = 0);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return m.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return V(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a)
              return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
            if (
              !(
                "string" != typeof a ||
                ma.test(a) ||
                (!k.htmlSerialize && ga.test(a)) ||
                (!k.leadingWhitespace && ha.test(a)) ||
                ra[(ja.exec(a) || ["", ""])[1].toLowerCase()]
              )
            ) {
              a = a.replace(ia, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (m.cleanData(ua(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              m.cleanData(ua(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = e.apply([], a);
        var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          n = this,
          o = l - 1,
          p = a[0],
          q = m.isFunction(p);
        if (q || (l > 1 && "string" == typeof p && !k.checkClone && na.test(p)))
          return this.each(function (c) {
            var d = n.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          l &&
          ((i = m.buildFragment(a, this[0].ownerDocument, !1, this)),
          (c = i.firstChild),
          1 === i.childNodes.length && (i = c),
          c)
        ) {
          for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++)
            (d = i),
              j !== o &&
                ((d = m.clone(d, !0, !0)), f && m.merge(g, ua(d, "script"))),
              b.call(this[j], d, j);
          if (f)
            for (
              h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0;
              f > j;
              j++
            )
              (d = g[j]),
                oa.test(d.type || "") &&
                  !m._data(d, "globalEval") &&
                  m.contains(h, d) &&
                  (d.src
                    ? m._evalUrl && m._evalUrl(d.src)
                    : m.globalEval(
                        (d.text || d.textContent || d.innerHTML || "").replace(
                          qa,
                          ""
                        )
                      ));
          i = c = null;
        }
        return this;
      },
    }),
    m.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        m.fn[a] = function (a) {
          for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
            (c = d === h ? this : this.clone(!0)),
              m(g[d])[b](c),
              f.apply(e, c.get());
          return this.pushStack(e);
        };
      }
    );
  var Ca,
    Da = {};
  function Ea(b, c) {
    var d,
      e = m(c.createElement(b)).appendTo(c.body),
      f =
        a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0]))
          ? d.display
          : m.css(e[0], "display");
    return e.detach(), f;
  }
  function Fa(a) {
    var b = y,
      c = Da[a];
    return (
      c ||
        ((c = Ea(a, b)),
        ("none" !== c && c) ||
          ((Ca = (
            Ca || m("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = (Ca[0].contentWindow || Ca[0].contentDocument).document),
          b.write(),
          b.close(),
          (c = Ea(a, b)),
          Ca.detach()),
        (Da[a] = c)),
      c
    );
  }
  !(function () {
    var a;
    k.shrinkWrapBlocks = function () {
      if (null != a) return a;
      a = !1;
      var b, c, d;
      return (
        (c = y.getElementsByTagName("body")[0]),
        c && c.style
          ? ((b = y.createElement("div")),
            (d = y.createElement("div")),
            (d.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== K &&
              ((b.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (b.appendChild(y.createElement("div")).style.width = "5px"),
              (a = 3 !== b.offsetWidth)),
            c.removeChild(d),
            a)
          : void 0
      );
    };
  })();
  var Ga = /^margin/,
    Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
    Ia,
    Ja,
    Ka = /^(top|right|bottom|left)$/;
  a.getComputedStyle
    ? ((Ia = function (b) {
        return b.ownerDocument.defaultView.opener
          ? b.ownerDocument.defaultView.getComputedStyle(b, null)
          : a.getComputedStyle(b, null);
      }),
      (Ja = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ia(a)),
          (g = c ? c.getPropertyValue(b) || c[b] : void 0),
          c &&
            ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)),
            Ha.test(g) &&
              Ga.test(b) &&
              ((d = h.width),
              (e = h.minWidth),
              (f = h.maxWidth),
              (h.minWidth = h.maxWidth = h.width = g),
              (g = c.width),
              (h.width = d),
              (h.minWidth = e),
              (h.maxWidth = f))),
          void 0 === g ? g : g + ""
        );
      }))
    : y.documentElement.currentStyle &&
      ((Ia = function (a) {
        return a.currentStyle;
      }),
      (Ja = function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.style;
        return (
          (c = c || Ia(a)),
          (g = c ? c[b] : void 0),
          null == g && h && h[b] && (g = h[b]),
          Ha.test(g) &&
            !Ka.test(b) &&
            ((d = h.left),
            (e = a.runtimeStyle),
            (f = e && e.left),
            f && (e.left = a.currentStyle.left),
            (h.left = "fontSize" === b ? "1em" : g),
            (g = h.pixelLeft + "px"),
            (h.left = d),
            f && (e.left = f)),
          void 0 === g ? g : g + "" || "auto"
        );
      }));
  function La(a, b) {
    return {
      get: function () {
        var c = a();
        if (null != c)
          return c
            ? void delete this.get
            : (this.get = b).apply(this, arguments);
      },
    };
  }
  !(function () {
    var b, c, d, e, f, g, h;
    if (
      ((b = y.createElement("div")),
      (b.innerHTML =
        "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (d = b.getElementsByTagName("a")[0]),
      (c = d && d.style))
    ) {
      (c.cssText = "float:left;opacity:.5"),
        (k.opacity = "0.5" === c.opacity),
        (k.cssFloat = !!c.cssFloat),
        (b.style.backgroundClip = "content-box"),
        (b.cloneNode(!0).style.backgroundClip = ""),
        (k.clearCloneStyle = "content-box" === b.style.backgroundClip),
        (k.boxSizing =
          "" === c.boxSizing ||
          "" === c.MozBoxSizing ||
          "" === c.WebkitBoxSizing),
        m.extend(k, {
          reliableHiddenOffsets: function () {
            return null == g && i(), g;
          },
          boxSizingReliable: function () {
            return null == f && i(), f;
          },
          pixelPosition: function () {
            return null == e && i(), e;
          },
          reliableMarginRight: function () {
            return null == h && i(), h;
          },
        });
      function i() {
        var b, c, d, i;
        (c = y.getElementsByTagName("body")[0]),
          c &&
            c.style &&
            ((b = y.createElement("div")),
            (d = y.createElement("div")),
            (d.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            c.appendChild(d).appendChild(b),
            (b.style.cssText =
              "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
            (e = f = !1),
            (h = !0),
            a.getComputedStyle &&
              ((e = "1%" !== (a.getComputedStyle(b, null) || {}).top),
              (f =
                "4px" ===
                (a.getComputedStyle(b, null) || { width: "4px" }).width),
              (i = b.appendChild(y.createElement("div"))),
              (i.style.cssText = b.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (i.style.marginRight = i.style.width = "0"),
              (b.style.width = "1px"),
              (h = !parseFloat(
                (a.getComputedStyle(i, null) || {}).marginRight
              )),
              b.removeChild(i)),
            (b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (i = b.getElementsByTagName("td")),
            (i[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
            (g = 0 === i[0].offsetHeight),
            g &&
              ((i[0].style.display = ""),
              (i[1].style.display = "none"),
              (g = 0 === i[0].offsetHeight)),
            c.removeChild(d));
      }
    }
  })(),
    (m.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var Ma = /alpha\([^)]*\)/i,
    Na = /opacity\s*=\s*([^)]*)/,
    Oa = /^(none|table(?!-c[ea]).+)/,
    Pa = new RegExp("^(" + S + ")(.*)$", "i"),
    Qa = new RegExp("^([+-])=(" + S + ")", "i"),
    Ra = { position: "absolute", visibility: "hidden", display: "block" },
    Sa = { letterSpacing: "0", fontWeight: "400" },
    Ta = ["Webkit", "O", "Moz", "ms"];
  function Ua(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1),
      d = b,
      e = Ta.length;
    while (e--) if (((b = Ta[e] + c), b in a)) return b;
    return d;
  }
  function Va(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = m._data(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                U(d) &&
                (f[g] = m._data(d, "olddisplay", Fa(d.nodeName))))
            : ((e = U(d)),
              ((c && "none" !== c) || !e) &&
                m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function Wa(a, b, c) {
    var d = Pa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Xa(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += m.css(a, c + T[f], !0, e)),
        d
          ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)),
            "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e)))
          : ((g += m.css(a, "padding" + T[f], !0, e)),
            "padding" !== c &&
              (g += m.css(a, "border" + T[f] + "Width", !0, e)));
    return g;
  }
  function Ya(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Ia(a),
      g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = Ja(a, b, f)),
        (0 > e || null == e) && (e = a.style[b]),
        Ha.test(e))
      )
        return e;
      (d = g && (k.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  m.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Ja(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: k.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = m.camelCase(b),
          i = a.style;
        if (
          ((b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h))),
          (g = m.cssHooks[b] || m.cssHooks[h]),
          void 0 === c)
        )
          return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (
          ((f = typeof c),
          "string" === f &&
            (e = Qa.exec(c)) &&
            ((c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b))), (f = "number")),
          null != c &&
            c === c &&
            ("number" !== f || m.cssNumber[h] || (c += "px"),
            k.clearCloneStyle ||
              "" !== c ||
              0 !== b.indexOf("background") ||
              (i[b] = "inherit"),
            !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
        )
          try {
            i[b] = c;
          } catch (j) {}
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = m.camelCase(b);
      return (
        (b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h))),
        (g = m.cssHooks[b] || m.cssHooks[h]),
        g && "get" in g && (f = g.get(a, !0, c)),
        void 0 === f && (f = Ja(a, b, d)),
        "normal" === f && b in Sa && (f = Sa[b]),
        "" === c || c
          ? ((e = parseFloat(f)), c === !0 || m.isNumeric(e) ? e || 0 : f)
          : f
      );
    },
  }),
    m.each(["height", "width"], function (a, b) {
      m.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth
              ? m.swap(a, Ra, function () {
                  return Ya(a, b, d);
                })
              : Ya(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Ia(a);
          return Wa(
            a,
            c,
            d
              ? Xa(
                  a,
                  b,
                  d,
                  k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e),
                  e
                )
              : 0
          );
        },
      };
    }),
    k.opacity ||
      (m.cssHooks.opacity = {
        get: function (a, b) {
          return Na.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
            f = (d && d.filter) || c.filter || "";
          (c.zoom = 1),
            ((b >= 1 || "" === b) &&
              "" === m.trim(f.replace(Ma, "")) &&
              c.removeAttribute &&
              (c.removeAttribute("filter"), "" === b || (d && !d.filter))) ||
              (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e);
        },
      }),
    (m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
      return b
        ? m.swap(a, { display: "inline-block" }, Ja, [a, "marginRight"])
        : void 0;
    })),
    m.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (m.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Ga.test(a) || (m.cssHooks[a + b].set = Wa);
    }),
    m.fn.extend({
      css: function (a, b) {
        return V(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (m.isArray(b)) {
              for (d = Ia(a), e = b.length; e > g; g++)
                f[b[g]] = m.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Va(this, !0);
      },
      hide: function () {
        return Va(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              U(this) ? m(this).show() : m(this).hide();
            });
      },
    });
  function Za(a, b, c, d, e) {
    return new Za.prototype.init(a, b, c, d, e);
  }
  (m.Tween = Za),
    (Za.prototype = {
      constructor: Za,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (m.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = Za.propHooks[this.prop];
        return a && a.get ? a.get(this) : Za.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = Za.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                m.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Za.propHooks._default.set(this),
          this
        );
      },
    }),
    (Za.prototype.init.prototype = Za.prototype),
    (Za.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = m.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          m.fx.step[a.prop]
            ? m.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop])
            ? m.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Za.propHooks.scrollTop = Za.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (m.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (m.fx = Za.prototype.init),
    (m.fx.step = {});
  var $a,
    _a,
    ab = /^(?:toggle|show|hide)$/,
    bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
    cb = /queueHooks$/,
    db = [ib],
    eb = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = bb.exec(b),
            f = (e && e[3]) || (m.cssNumber[a] ? "" : "px"),
            g =
              (m.cssNumber[a] || ("px" !== f && +d)) &&
              bb.exec(m.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || ".5"), (g /= h), m.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  function fb() {
    return (
      setTimeout(function () {
        $a = void 0;
      }),
      ($a = m.now())
    );
  }
  function gb(a, b) {
    var c,
      d = { height: a },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b)
      (c = T[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function hb(a, b, c) {
    for (
      var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ib(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      l,
      n = this,
      o = {},
      p = a.style,
      q = a.nodeType && U(a),
      r = m._data(a, "fxshow");
    c.queue ||
      ((h = m._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      n.always(function () {
        n.always(function () {
          h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (j = m.css(a, "display")),
        (l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j),
        "inline" === l &&
          "none" === m.css(a, "float") &&
          (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      c.overflow &&
        ((p.overflow = "hidden"),
        k.shrinkWrapBlocks() ||
          n.always(function () {
            (p.overflow = c.overflow[0]),
              (p.overflowX = c.overflow[1]),
              (p.overflowY = c.overflow[2]);
          }));
    for (d in b)
      if (((e = b[d]), ab.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (q ? "hide" : "show"))
        ) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }
        o[d] = (r && r[d]) || m.style(a, d);
      } else j = void 0;
    if (m.isEmptyObject(o))
      "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
    else {
      r ? "hidden" in r && (q = r.hidden) : (r = m._data(a, "fxshow", {})),
        f && (r.hidden = !q),
        q
          ? m(a).show()
          : n.done(function () {
              m(a).hide();
            }),
        n.done(function () {
          var b;
          m._removeData(a, "fxshow");
          for (b in o) m.style(a, b, o[b]);
        });
      for (d in o)
        (g = hb(q ? r[d] : 0, d, n)),
          d in r ||
            ((r[d] = g.start),
            q &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = m.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        m.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = m.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function kb(a, b, c) {
    var d,
      e,
      f = 0,
      g = db.length,
      h = m.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = $a || fb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: m.extend({}, b),
        opts: m.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: $a || fb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = m.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (jb(k, j.opts.specialEasing); g > f; f++)
      if ((d = db[f].call(j, a, k, j.opts))) return d;
    return (
      m.map(k, hb, j),
      m.isFunction(j.opts.start) && j.opts.start.call(a, j),
      m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (m.Animation = m.extend(kb, {
    tweener: function (a, b) {
      m.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (eb[c] = eb[c] || []), eb[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? db.unshift(a) : db.push(a);
    },
  })),
    (m.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? m.extend({}, a)
          : {
              complete: c || (!c && b) || (m.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !m.isFunction(b) && b),
            };
      return (
        (d.duration = m.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in m.fx.speeds
          ? m.fx.speeds[d.duration]
          : m.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          m.isFunction(d.old) && d.old.call(this),
            d.queue && m.dequeue(this, d.queue);
        }),
        d
      );
    }),
    m.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(U)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = m.isEmptyObject(a),
          f = m.speed(b, c, d),
          g = function () {
            var b = kb(this, m.extend({}, a), f);
            (e || m._data(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = m.timers,
              g = m._data(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && m.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = m._data(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = m.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                m.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    m.each(["toggle", "show", "hide"], function (a, b) {
      var c = m.fn[b];
      m.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(gb(b, !0), a, d, e);
      };
    }),
    m.each(
      {
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        m.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (m.timers = []),
    (m.fx.tick = function () {
      var a,
        b = m.timers,
        c = 0;
      for ($a = m.now(); c < b.length; c++)
        (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
      b.length || m.fx.stop(), ($a = void 0);
    }),
    (m.fx.timer = function (a) {
      m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
    }),
    (m.fx.interval = 13),
    (m.fx.start = function () {
      _a || (_a = setInterval(m.fx.tick, m.fx.interval));
    }),
    (m.fx.stop = function () {
      clearInterval(_a), (_a = null);
    }),
    (m.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (m.fn.delay = function (a, b) {
      return (
        (a = m.fx ? m.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a, b, c, d, e;
      (b = y.createElement("div")),
        b.setAttribute("className", "t"),
        (b.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (d = b.getElementsByTagName("a")[0]),
        (c = y.createElement("select")),
        (e = c.appendChild(y.createElement("option"))),
        (a = b.getElementsByTagName("input")[0]),
        (d.style.cssText = "top:1px"),
        (k.getSetAttribute = "t" !== b.className),
        (k.style = /top/.test(d.getAttribute("style"))),
        (k.hrefNormalized = "/a" === d.getAttribute("href")),
        (k.checkOn = !!a.value),
        (k.optSelected = e.selected),
        (k.enctype = !!y.createElement("form").enctype),
        (c.disabled = !0),
        (k.optDisabled = !e.disabled),
        (a = y.createElement("input")),
        a.setAttribute("value", ""),
        (k.input = "" === a.getAttribute("value")),
        (a.value = "t"),
        a.setAttribute("type", "radio"),
        (k.radioValue = "t" === a.value);
    })();
  var lb = /\r/g;
  m.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = m.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, m(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : m.isArray(e) &&
                    (e = m.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  m.valHooks[this.type] ||
                  m.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
          );
      }
    },
  }),
    m.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = m.find.attr(a, "value");
            return null != b ? b : m.trim(m.text(a));
          },
        },
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (k.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    m.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = m(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = m.makeArray(b),
              g = e.length;
            while (g--)
              if (((d = e[g]), m.inArray(m.valHooks.option.get(d), f) >= 0))
                try {
                  d.selected = c = !0;
                } catch (h) {
                  d.scrollHeight;
                }
              else d.selected = !1;
            return c || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    m.each(["radio", "checkbox"], function () {
      (m.valHooks[this] = {
        set: function (a, b) {
          return m.isArray(b)
            ? (a.checked = m.inArray(m(a).val(), b) >= 0)
            : void 0;
        },
      }),
        k.checkOn ||
          (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var mb,
    nb,
    ob = m.expr.attrHandle,
    pb = /^(?:checked|selected)$/i,
    qb = k.getSetAttribute,
    rb = k.input;
  m.fn.extend({
    attr: function (a, b) {
      return V(this, m.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        m.removeAttr(this, a);
      });
    },
  }),
    m.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === K
            ? m.prop(a, b, c)
            : ((1 === f && m.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = m.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ""), c)
                : void m.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(E);
        if (f && 1 === a.nodeType)
          while ((c = f[e++]))
            (d = m.propFix[c] || c),
              m.expr.match.bool.test(c)
                ? (rb && qb) || !pb.test(c)
                  ? (a[d] = !1)
                  : (a[m.camelCase("default-" + c)] = a[d] = !1)
                : m.attr(a, c, ""),
              a.removeAttribute(qb ? c : d);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (nb = {
      set: function (a, b, c) {
        return (
          b === !1
            ? m.removeAttr(a, c)
            : (rb && qb) || !pb.test(c)
            ? a.setAttribute((!qb && m.propFix[c]) || c, c)
            : (a[m.camelCase("default-" + c)] = a[c] = !0),
          c
        );
      },
    }),
    m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = ob[b] || m.find.attr;
      ob[b] =
        (rb && qb) || !pb.test(b)
          ? function (a, b, d) {
              var e, f;
              return (
                d ||
                  ((f = ob[b]),
                  (ob[b] = e),
                  (e = null != c(a, b, d) ? b.toLowerCase() : null),
                  (ob[b] = f)),
                e
              );
            }
          : function (a, b, c) {
              return c
                ? void 0
                : a[m.camelCase("default-" + b)]
                ? b.toLowerCase()
                : null;
            };
    }),
    (rb && qb) ||
      (m.attrHooks.value = {
        set: function (a, b, c) {
          return m.nodeName(a, "input")
            ? void (a.defaultValue = b)
            : mb && mb.set(a, b, c);
        },
      }),
    qb ||
      ((mb = {
        set: function (a, b, c) {
          var d = a.getAttributeNode(c);
          return (
            d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))),
            (d.value = b += ""),
            "value" === c || b === a.getAttribute(c) ? b : void 0
          );
        },
      }),
      (ob.id =
        ob.name =
        ob.coords =
          function (a, b, c) {
            var d;
            return c
              ? void 0
              : (d = a.getAttributeNode(b)) && "" !== d.value
              ? d.value
              : null;
          }),
      (m.valHooks.button = {
        get: function (a, b) {
          var c = a.getAttributeNode(b);
          return c && c.specified ? c.value : void 0;
        },
        set: mb.set,
      }),
      (m.attrHooks.contenteditable = {
        set: function (a, b, c) {
          mb.set(a, "" === b ? !1 : b, c);
        },
      }),
      m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
          set: function (a, c) {
            return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
          },
        };
      })),
    k.style ||
      (m.attrHooks.style = {
        get: function (a) {
          return a.style.cssText || void 0;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      });
  var sb = /^(?:input|select|textarea|button|object)$/i,
    tb = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function (a, b) {
      return V(this, m.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = m.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = void 0), delete this[a];
          } catch (b) {}
        })
      );
    },
  }),
    m.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !m.isXMLDoc(a)),
            f && ((b = m.propFix[b] || b), (e = m.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = m.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : sb.test(a.nodeName) || (tb.test(a.nodeName) && a.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    k.hrefNormalized ||
      m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
          get: function (a) {
            return a.getAttribute(b, 4);
          },
        };
      }),
    k.optSelected ||
      (m.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
      }),
    m.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        m.propFix[this.toLowerCase()] = this;
      }
    ),
    k.enctype || (m.propFix.enctype = "encoding");
  var ub = /[\t\r\n\f]/g;
  m.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length,
        j = "string" == typeof a && a;
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).addClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || "").match(E) || []; i > h; h++)
          if (
            ((c = this[h]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")))
          ) {
            f = 0;
            while ((e = b[f++])) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = m.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0,
        i = this.length,
        j = 0 === arguments.length || ("string" == typeof a && a);
      if (m.isFunction(a))
        return this.each(function (b) {
          m(this).removeClass(a.call(this, b, this.className));
        });
      if (j)
        for (b = (a || "").match(E) || []; i > h; h++)
          if (
            ((c = this[h]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(ub, " ") : "")))
          ) {
            f = 0;
            while ((e = b[f++]))
              while (d.indexOf(" " + e + " ") >= 0)
                d = d.replace(" " + e + " ", " ");
            (g = a ? m.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            m.isFunction(a)
              ? function (c) {
                  m(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c) {
                    var b,
                      d = 0,
                      e = m(this),
                      f = a.match(E) || [];
                    while ((b = f[d++]))
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  } else
                    (c === K || "boolean" === c) &&
                      (this.className &&
                        m._data(this, "__className__", this.className),
                      (this.className =
                        this.className || a === !1
                          ? ""
                          : m._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  }),
    m.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        m.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    m.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var vb = m.now(),
    wb = /\?/,
    xb =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
      d = null,
      e = m.trim(b + "");
    return e &&
      !m.trim(
        e.replace(xb, function (a, b, e, f) {
          return (
            c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "")
          );
        })
      )
      ? Function("return " + e)()
      : m.error("Invalid JSON: " + b);
  }),
    (m.parseXML = function (b) {
      var c, d;
      if (!b || "string" != typeof b) return null;
      try {
        a.DOMParser
          ? ((d = new DOMParser()), (c = d.parseFromString(b, "text/xml")))
          : ((c = new ActiveXObject("Microsoft.XMLDOM")),
            (c.async = "false"),
            c.loadXML(b));
      } catch (e) {
        c = void 0;
      }
      return (
        (c &&
          c.documentElement &&
          !c.getElementsByTagName("parsererror").length) ||
          m.error("Invalid XML: " + b),
        c
      );
    });
  var yb,
    zb,
    Ab = /#.*$/,
    Bb = /([?&])_=[^&]*/,
    Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Eb = /^(?:GET|HEAD)$/,
    Fb = /^\/\//,
    Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Hb = {},
    Ib = {},
    Jb = "*/".concat("*");
  try {
    zb = location.href;
  } catch (Kb) {
    (zb = y.createElement("a")), (zb.href = ""), (zb = zb.href);
  }
  yb = Gb.exec(zb.toLowerCase()) || [];
  function Lb(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(E) || [];
      if (m.isFunction(c))
        while ((d = f[e++]))
          "+" === d.charAt(0)
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Mb(a, b, c, d) {
    var e = {},
      f = a === Ib;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        m.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Nb(a, b) {
    var c,
      d,
      e = m.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && m.extend(!0, a, c), a;
  }
  function Ob(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }
        d || (d = g);
      }
      f = f || d;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function Pb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  m.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: zb,
      type: "GET",
      isLocal: Db.test(yb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Jb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": m.parseJSON,
        "text xml": m.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (a, b) {
      return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a);
    },
    ajaxPrefilter: Lb(Hb),
    ajaxTransport: Lb(Ib),
    ajax: function (a, b) {
      "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = m.ajaxSetup({}, b),
        l = k.context || k,
        n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
        o = m.Deferred(),
        p = m.Callbacks("once memory"),
        q = k.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (2 === t) {
              if (!j) {
                j = {};
                while ((b = Cb.exec(f))) j[b[1].toLowerCase()] = b[2];
              }
              b = j[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function () {
            return 2 === t ? f : null;
          },
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
          },
          overrideMimeType: function (a) {
            return t || (k.mimeType = a), this;
          },
          statusCode: function (a) {
            var b;
            if (a)
              if (2 > t) for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this;
          },
          abort: function (a) {
            var b = a || u;
            return i && i.abort(b), x(0, b), this;
          },
        };
      if (
        ((o.promise(v).complete = p.add),
        (v.success = v.done),
        (v.error = v.fail),
        (k.url = ((a || k.url || zb) + "")
          .replace(Ab, "")
          .replace(Fb, yb[1] + "//")),
        (k.type = b.method || b.type || k.method || k.type),
        (k.dataTypes = m
          .trim(k.dataType || "*")
          .toLowerCase()
          .match(E) || [""]),
        null == k.crossDomain &&
          ((c = Gb.exec(k.url.toLowerCase())),
          (k.crossDomain = !(
            !c ||
            (c[1] === yb[1] &&
              c[2] === yb[2] &&
              (c[3] || ("http:" === c[1] ? "80" : "443")) ===
                (yb[3] || ("http:" === yb[1] ? "80" : "443")))
          ))),
        k.data &&
          k.processData &&
          "string" != typeof k.data &&
          (k.data = m.param(k.data, k.traditional)),
        Mb(Hb, k, b, v),
        2 === t)
      )
        return v;
      (h = m.event && k.global),
        h && 0 === m.active++ && m.event.trigger("ajaxStart"),
        (k.type = k.type.toUpperCase()),
        (k.hasContent = !Eb.test(k.type)),
        (e = k.url),
        k.hasContent ||
          (k.data &&
            ((e = k.url += (wb.test(e) ? "&" : "?") + k.data), delete k.data),
          k.cache === !1 &&
            (k.url = Bb.test(e)
              ? e.replace(Bb, "$1_=" + vb++)
              : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)),
        k.ifModified &&
          (m.lastModified[e] &&
            v.setRequestHeader("If-Modified-Since", m.lastModified[e]),
          m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),
        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
          v.setRequestHeader("Content-Type", k.contentType),
        v.setRequestHeader(
          "Accept",
          k.dataTypes[0] && k.accepts[k.dataTypes[0]]
            ? k.accepts[k.dataTypes[0]] +
                ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "")
            : k.accepts["*"]
        );
      for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
        return v.abort();
      u = "abort";
      for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]);
      if ((i = Mb(Ib, k, b, v))) {
        (v.readyState = 1),
          h && n.trigger("ajaxSend", [v, k]),
          k.async &&
            k.timeout > 0 &&
            (g = setTimeout(function () {
              v.abort("timeout");
            }, k.timeout));
        try {
          (t = 1), i.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");
      function x(a, b, c, d) {
        var j,
          r,
          s,
          u,
          w,
          x = b;
        2 !== t &&
          ((t = 2),
          g && clearTimeout(g),
          (i = void 0),
          (f = d || ""),
          (v.readyState = a > 0 ? 4 : 0),
          (j = (a >= 200 && 300 > a) || 304 === a),
          c && (u = Ob(k, v, c)),
          (u = Pb(k, u, v, j)),
          j
            ? (k.ifModified &&
                ((w = v.getResponseHeader("Last-Modified")),
                w && (m.lastModified[e] = w),
                (w = v.getResponseHeader("etag")),
                w && (m.etag[e] = w)),
              204 === a || "HEAD" === k.type
                ? (x = "nocontent")
                : 304 === a
                ? (x = "notmodified")
                : ((x = u.state), (r = u.data), (s = u.error), (j = !s)))
            : ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
          (v.status = a),
          (v.statusText = (b || x) + ""),
          j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
          v.statusCode(q),
          (q = void 0),
          h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
          p.fireWith(l, [v, x]),
          h &&
            (n.trigger("ajaxComplete", [v, k]),
            --m.active || m.event.trigger("ajaxStop")));
      }
      return v;
    },
    getJSON: function (a, b, c) {
      return m.get(a, b, c, "json");
    },
    getScript: function (a, b) {
      return m.get(a, void 0, b, "script");
    },
  }),
    m.each(["get", "post"], function (a, b) {
      m[b] = function (a, c, d, e) {
        return (
          m.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          m.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    (m._evalUrl = function (a) {
      return m.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    m.fn.extend({
      wrapAll: function (a) {
        if (m.isFunction(a))
          return this.each(function (b) {
            m(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return this.each(
          m.isFunction(a)
            ? function (b) {
                m(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = m(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = m.isFunction(a);
        return this.each(function (c) {
          m(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (m.expr.filters.hidden = function (a) {
      return (
        (a.offsetWidth <= 0 && a.offsetHeight <= 0) ||
        (!k.reliableHiddenOffsets() &&
          "none" === ((a.style && a.style.display) || m.css(a, "display")))
      );
    }),
    (m.expr.filters.visible = function (a) {
      return !m.expr.filters.hidden(a);
    });
  var Qb = /%20/g,
    Rb = /\[\]$/,
    Sb = /\r?\n/g,
    Tb = /^(?:submit|button|image|reset|file)$/i,
    Ub = /^(?:input|select|textarea|keygen)/i;
  function Vb(a, b, c, d) {
    var e;
    if (m.isArray(b))
      m.each(b, function (b, e) {
        c || Rb.test(a)
          ? d(a, e)
          : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== m.type(b)) d(a, b);
    else for (e in b) Vb(a + "[" + e + "]", b[e], c, d);
  }
  (m.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = m.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
      m.isArray(a) || (a.jquery && !m.isPlainObject(a)))
    )
      m.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Vb(c, a[c], b, e);
    return d.join("&").replace(Qb, "+");
  }),
    m.fn.extend({
      serialize: function () {
        return m.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = m.prop(this, "elements");
          return a ? m.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !m(this).is(":disabled") &&
              Ub.test(this.nodeName) &&
              !Tb.test(a) &&
              (this.checked || !W.test(a))
            );
          })
          .map(function (a, b) {
            var c = m(this).val();
            return null == c
              ? null
              : m.isArray(c)
              ? m.map(c, function (a) {
                  return { name: b.name, value: a.replace(Sb, "\r\n") };
                })
              : { name: b.name, value: c.replace(Sb, "\r\n") };
          })
          .get();
      },
    }),
    (m.ajaxSettings.xhr =
      void 0 !== a.ActiveXObject
        ? function () {
            return (
              (!this.isLocal &&
                /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                Zb()) ||
              $b()
            );
          }
        : Zb);
  var Wb = 0,
    Xb = {},
    Yb = m.ajaxSettings.xhr();
  a.attachEvent &&
    a.attachEvent("onunload", function () {
      for (var a in Xb) Xb[a](void 0, !0);
    }),
    (k.cors = !!Yb && "withCredentials" in Yb),
    (Yb = k.ajax = !!Yb),
    Yb &&
      m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
          var b;
          return {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Wb;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
              f.send((a.hasContent && a.data) || null),
                (b = function (c, e) {
                  var h, i, j;
                  if (b && (e || 4 === f.readyState))
                    if (
                      (delete Xb[g],
                      (b = void 0),
                      (f.onreadystatechange = m.noop),
                      e)
                    )
                      4 !== f.readyState && f.abort();
                    else {
                      (j = {}),
                        (h = f.status),
                        "string" == typeof f.responseText &&
                          (j.text = f.responseText);
                      try {
                        i = f.statusText;
                      } catch (k) {
                        i = "";
                      }
                      h || !a.isLocal || a.crossDomain
                        ? 1223 === h && (h = 204)
                        : (h = j.text ? 200 : 404);
                    }
                  j && d(h, i, j, f.getAllResponseHeaders());
                }),
                a.async
                  ? 4 === f.readyState
                    ? setTimeout(b)
                    : (f.onreadystatechange = Xb[g] = b)
                  : b();
            },
            abort: function () {
              b && b(void 0, !0);
            },
          };
        }
      });
  function Zb() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function $b() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  m.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      "text script": function (a) {
        return m.globalEval(a), a;
      },
    },
  }),
    m.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    m.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b,
          c = y.head || m("head")[0] || y.documentElement;
        return {
          send: function (d, e) {
            (b = y.createElement("script")),
              (b.async = !0),
              a.scriptCharset && (b.charset = a.scriptCharset),
              (b.src = a.url),
              (b.onload = b.onreadystatechange =
                function (a, c) {
                  (c ||
                    !b.readyState ||
                    /loaded|complete/.test(b.readyState)) &&
                    ((b.onload = b.onreadystatechange = null),
                    b.parentNode && b.parentNode.removeChild(b),
                    (b = null),
                    c || e(200, "success"));
                }),
              c.insertBefore(b, c.firstChild);
          },
          abort: function () {
            b && b.onload(void 0, !0);
          },
        };
      }
    });
  var _b = [],
    ac = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = _b.pop() || m.expando + "_" + vb++;
      return (this[a] = !0), a;
    },
  }),
    m.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (ac.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              ac.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            m.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(ac, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), _b.push(e)),
              g && m.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (m.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || y);
      var d = u.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = m.buildFragment([a], b, e)),
          e && e.length && m(e).remove(),
          m.merge([], d.childNodes));
    });
  var bc = m.fn.load;
  (m.fn.load = function (a, b, c) {
    if ("string" != typeof a && bc) return bc.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = m.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
      m.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (f = "POST"),
      g.length > 0 &&
        m
          .ajax({ url: a, type: f, dataType: "html", data: b })
          .done(function (a) {
            (e = arguments),
              g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, e || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    m.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        m.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (m.expr.filters.animated = function (a) {
      return m.grep(m.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var cc = a.document.documentElement;
  function dc(a) {
    return m.isWindow(a)
      ? a
      : 9 === a.nodeType
      ? a.defaultView || a.parentWindow
      : !1;
  }
  (m.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = m.css(a, "position"),
        l = m(a),
        n = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = m.css(a, "top")),
        (i = m.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) &&
          m.inArray("auto", [f, i]) > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        m.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (n.top = b.top - h.top + g),
        null != b.left && (n.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, n) : l.css(n);
    },
  }),
    m.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                m.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            m.contains(b, e)
              ? (typeof e.getBoundingClientRect !== K &&
                  (d = e.getBoundingClientRect()),
                (c = dc(f)),
                {
                  top:
                    d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                  left:
                    d.left +
                    (c.pageXOffset || b.scrollLeft) -
                    (b.clientLeft || 0),
                })
              : d
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];
          return (
            "fixed" === m.css(d, "position")
              ? (b = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                m.nodeName(a[0], "html") || (c = a.offset()),
                (c.top += m.css(a[0], "borderTopWidth", !0)),
                (c.left += m.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - c.top - m.css(d, "marginTop", !0),
              left: b.left - c.left - m.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || cc;
          while (
            a &&
            !m.nodeName(a, "html") &&
            "static" === m.css(a, "position")
          )
            a = a.offsetParent;
          return a || cc;
        });
      },
    }),
    m.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
          return V(
            this,
            function (a, d, e) {
              var f = dc(a);
              return void 0 === e
                ? f
                  ? b in f
                    ? f[b]
                    : f.document.documentElement[d]
                  : a[d]
                : void (f
                    ? f.scrollTo(
                        c ? m(f).scrollLeft() : e,
                        c ? e : m(f).scrollTop()
                      )
                    : (a[d] = e));
            },
            a,
            d,
            arguments.length,
            null
          );
        };
      }
    ),
    m.each(["top", "left"], function (a, b) {
      m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
        return c
          ? ((c = Ja(a, b)), Ha.test(c) ? m(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    m.each({ Height: "height", Width: "width" }, function (a, b) {
      m.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          m.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return V(
              this,
              function (b, c, d) {
                var e;
                return m.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? m.css(b, c, g)
                  : m.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    (m.fn.size = function () {
      return this.length;
    }),
    (m.fn.andSelf = m.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return m;
      });
  var ec = a.jQuery,
    fc = a.$;
  return (
    (m.noConflict = function (b) {
      return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m;
    }),
    typeof b === K && (a.jQuery = a.$ = m),
    m
  );
});

// Copyright 2011 Google Inc. All Rights Reserved.
(function () {
  var l,
    aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ba = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      return b ? b.call(a) : { next: aa(a) };
    },
    ca = function (a) {
      if (!(a instanceof Array)) {
        a = ba(a);
        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
        a = c;
      }
      return a;
    },
    da =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ea;
  if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
  else {
    var fa;
    a: {
      var ha = { ee: !0 },
        ia = {};
      try {
        ia.__proto__ = ha;
        fa = ia.ee;
        break a;
      } catch (a) {}
      fa = !1;
    }
    ea = fa
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ka = ea,
    p = function (a, b) {
      a.prototype = da(b.prototype);
      a.prototype.constructor = a;
      if (ka) ka(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.wa = b.prototype;
    },
    la =
      "function" == typeof Object.defineProperties
        ? Object.defineProperty
        : function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
          },
    ma =
      "undefined" != typeof window && window === this
        ? this
        : "undefined" != typeof global && null != global
        ? global
        : this,
    na = function (a, b) {
      if (b) {
        var c = ma;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          e in c || (c[e] = {});
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          null != b &&
          la(c, a, { configurable: !0, writable: !0, value: b });
      }
    },
    oa = function (a, b, c) {
      if (null == a)
        throw new TypeError(
          "The 'this' value for String.prototype." +
            c +
            " must not be null or undefined"
        );
      if (b instanceof RegExp)
        throw new TypeError(
          "First argument to String.prototype." +
            c +
            " must not be a regular expression"
        );
      return a + "";
    };
  na("Array.prototype.find", function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
              var g = d[f];
              if (b.call(c, g, f, d)) {
                b = g;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  na("String.prototype.repeat", function (a) {
    return a
      ? a
      : function (b) {
          var c = oa(this, null, "repeat");
          if (0 > b || 1342177279 < b)
            throw new RangeError("Invalid count value");
          b |= 0;
          for (var d = ""; b; ) if ((b & 1 && (d += c), (b >>>= 1))) c += c;
          return d;
        };
  });
  var pa = function () {
      pa = function () {};
      ma.Symbol || (ma.Symbol = qa);
    },
    ra = function (a, b) {
      this.g = a;
      la(this, "description", { configurable: !0, writable: !0, value: b });
    };
  ra.prototype.toString = function () {
    return this.g;
  };
  var qa = (function () {
      function a(c) {
        if (this instanceof a)
          throw new TypeError("Symbol is not a constructor");
        return new ra("jscomp_symbol_" + (c || "") + "_" + b++, c);
      }
      var b = 0;
      return a;
    })(),
    ta = function () {
      pa();
      var a = ma.Symbol.iterator;
      a || (a = ma.Symbol.iterator = ma.Symbol("Symbol.iterator"));
      "function" != typeof Array.prototype[a] &&
        la(Array.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return sa(aa(this));
          },
        });
      ta = function () {};
    },
    sa = function (a) {
      ta();
      a = { next: a };
      a[ma.Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    ua = function (a, b) {
      ta();
      a instanceof String && (a += "");
      var c = 0,
        d = {
          next: function () {
            if (c < a.length) {
              var e = c++;
              return { value: b(e, a[e]), done: !1 };
            }
            d.next = function () {
              return { done: !0, value: void 0 };
            };
            return d.next();
          },
        };
      d[Symbol.iterator] = function () {
        return d;
      };
      return d;
    };
  na("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return ua(this, function (b) {
            return b;
          });
        };
  });
  na("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return ua(this, function (b, c) {
            return c;
          });
        };
  });
  var va = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    wa =
      "function" == typeof Object.assign
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) va(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  na("Object.assign", function (a) {
    return a || wa;
  });
  na("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  na("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0;
          }
          return !1;
        };
  });
  na("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          return -1 !== oa(this, b, "includes").indexOf(b, c || 0);
        };
  });
  na("WeakMap", function (a) {
    function b() {}
    function c(k) {
      var m = typeof k;
      return ("object" === m && null !== k) || "function" === m;
    }
    function d(k) {
      if (!va(k, f)) {
        var m = new b();
        la(k, f, { value: m });
      }
    }
    function e(k) {
      var m = Object[k];
      m &&
        (Object[k] = function (n) {
          if (n instanceof b) return n;
          d(n);
          return m(n);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            m = Object.seal({}),
            n = new a([
              [k, 2],
              [m, 3],
            ]);
          if (2 != n.get(k) || 3 != n.get(m)) return !1;
          n["delete"](k);
          n.set(m, 4);
          return !n.has(k) && 4 == n.get(m);
        } catch (w) {
          return !1;
        }
      })()
    )
      return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
      h = function (k) {
        this.g = (g += Math.random() + 1).toString();
        if (k) {
          k = ba(k);
          for (var m; !(m = k.next()).done; )
            (m = m.value), this.set(m[0], m[1]);
        }
      };
    h.prototype.set = function (k, m) {
      if (!c(k)) throw Error("Invalid WeakMap key");
      d(k);
      if (!va(k, f)) throw Error("WeakMap key fail: " + k);
      k[f][this.g] = m;
      return this;
    };
    h.prototype.get = function (k) {
      return c(k) && va(k, f) ? k[f][this.g] : void 0;
    };
    h.prototype.has = function (k) {
      return c(k) && va(k, f) && va(k[f], this.g);
    };
    h.prototype["delete"] = function (k) {
      return c(k) && va(k, f) && va(k[f], this.g) ? delete k[f][this.g] : !1;
    };
    return h;
  });
  na("Map", function (a) {
    if (
      (function () {
        if (
          !a ||
          "function" != typeof a ||
          !a.prototype.entries ||
          "function" != typeof Object.seal
        )
          return !1;
        try {
          var h = Object.seal({ x: 4 }),
            k = new a(ba([[h, "s"]]));
          if (
            "s" != k.get(h) ||
            1 != k.size ||
            k.get({ x: 4 }) ||
            k.set({ x: 4 }, "t") != k ||
            2 != k.size
          )
            return !1;
          var m = k.entries(),
            n = m.next();
          if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
          n = m.next();
          return n.done ||
            4 != n.value[0].x ||
            "t" != n.value[1] ||
            !m.next().done
            ? !1
            : !0;
        } catch (w) {
          return !1;
        }
      })()
    )
      return a;
    ta();
    var b = new WeakMap(),
      c = function (h) {
        this.h = {};
        this.g = f();
        this.size = 0;
        if (h) {
          h = ba(h);
          for (var k; !(k = h.next()).done; )
            (k = k.value), this.set(k[0], k[1]);
        }
      };
    c.prototype.set = function (h, k) {
      h = 0 === h ? 0 : h;
      var m = d(this, h);
      m.list || (m.list = this.h[m.id] = []);
      m.na
        ? (m.na.value = k)
        : ((m.na = {
            next: this.g,
            Ia: this.g.Ia,
            head: this.g,
            key: h,
            value: k,
          }),
          m.list.push(m.na),
          (this.g.Ia.next = m.na),
          (this.g.Ia = m.na),
          this.size++);
      return this;
    };
    c.prototype["delete"] = function (h) {
      h = d(this, h);
      return h.na && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this.h[h.id],
          (h.na.Ia.next = h.na.next),
          (h.na.next.Ia = h.na.Ia),
          (h.na.head = null),
          this.size--,
          !0)
        : !1;
    };
    c.prototype.clear = function () {
      this.h = {};
      this.g = this.g.Ia = f();
      this.size = 0;
    };
    c.prototype.has = function (h) {
      return !!d(this, h).na;
    };
    c.prototype.get = function (h) {
      return (h = d(this, h).na) && h.value;
    };
    c.prototype.entries = function () {
      return e(this, function (h) {
        return [h.key, h.value];
      });
    };
    c.prototype.keys = function () {
      return e(this, function (h) {
        return h.key;
      });
    };
    c.prototype.values = function () {
      return e(this, function (h) {
        return h.value;
      });
    };
    c.prototype.forEach = function (h, k) {
      for (var m = this.entries(), n; !(n = m.next()).done; )
        (n = n.value), h.call(k, n[1], n[0], this);
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function (h, k) {
        var m = k && typeof k;
        "object" == m || "function" == m
          ? b.has(k)
            ? (m = b.get(k))
            : ((m = "" + ++g), b.set(k, m))
          : (m = "p_" + k);
        var n = h.h[m];
        if (n && va(h.h, m))
          for (h = 0; h < n.length; h++) {
            var w = n[h];
            if ((k !== k && w.key !== w.key) || k === w.key)
              return { id: m, list: n, index: h, na: w };
          }
        return { id: m, list: n, index: -1, na: void 0 };
      },
      e = function (h, k) {
        var m = h.g;
        return sa(function () {
          if (m) {
            for (; m.head != h.g; ) m = m.Ia;
            for (; m.next != m.head; )
              return (m = m.next), { done: !1, value: k(m) };
            m = null;
          }
          return { done: !0, value: void 0 };
        });
      },
      f = function () {
        var h = {};
        return (h.Ia = h.next = h.head = h);
      },
      g = 0;
    return c;
  });
  na("Promise", function (a) {
    function b() {
      this.g = null;
    }
    function c(g) {
      return g instanceof e
        ? g
        : new e(function (h) {
            h(g);
          });
    }
    if (a) return a;
    b.prototype.h = function (g) {
      if (null == this.g) {
        this.g = [];
        var h = this;
        this.l(function () {
          h.w();
        });
      }
      this.g.push(g);
    };
    var d = ma.setTimeout;
    b.prototype.l = function (g) {
      d(g, 0);
    };
    b.prototype.w = function () {
      for (; this.g && this.g.length; ) {
        var g = this.g;
        this.g = [];
        for (var h = 0; h < g.length; ++h) {
          var k = g[h];
          g[h] = null;
          try {
            k();
          } catch (m) {
            this.o(m);
          }
        }
      }
      this.g = null;
    };
    b.prototype.o = function (g) {
      this.l(function () {
        throw g;
      });
    };
    var e = function (g) {
      this.h = 0;
      this.l = void 0;
      this.g = [];
      var h = this.o();
      try {
        g(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    };
    e.prototype.o = function () {
      function g(m) {
        return function (n) {
          k || ((k = !0), m.call(h, n));
        };
      }
      var h = this,
        k = !1;
      return { resolve: g(this.D), reject: g(this.w) };
    };
    e.prototype.D = function (g) {
      if (g === this)
        this.w(new TypeError("A Promise cannot resolve to itself"));
      else if (g instanceof e) this.F(g);
      else {
        a: switch (typeof g) {
          case "object":
            var h = null != g;
            break a;
          case "function":
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.I(g) : this.A(g);
      }
    };
    e.prototype.I = function (g) {
      var h = void 0;
      try {
        h = g.then;
      } catch (k) {
        this.w(k);
        return;
      }
      "function" == typeof h ? this.H(h, g) : this.A(g);
    };
    e.prototype.w = function (g) {
      this.C(2, g);
    };
    e.prototype.A = function (g) {
      this.C(1, g);
    };
    e.prototype.C = function (g, h) {
      if (0 != this.h)
        throw Error(
          "Cannot settle(" +
            g +
            ", " +
            h +
            "): Promise already settled in state" +
            this.h
        );
      this.h = g;
      this.l = h;
      this.G();
    };
    e.prototype.G = function () {
      if (null != this.g) {
        for (var g = 0; g < this.g.length; ++g) f.h(this.g[g]);
        this.g = null;
      }
    };
    var f = new b();
    e.prototype.F = function (g) {
      var h = this.o();
      g.Kb(h.resolve, h.reject);
    };
    e.prototype.H = function (g, h) {
      var k = this.o();
      try {
        g.call(h, k.resolve, k.reject);
      } catch (m) {
        k.reject(m);
      }
    };
    e.prototype.then = function (g, h) {
      function k(x, v) {
        return "function" == typeof x
          ? function (C) {
              try {
                m(x(C));
              } catch (H) {
                n(H);
              }
            }
          : v;
      }
      var m,
        n,
        w = new e(function (x, v) {
          m = x;
          n = v;
        });
      this.Kb(k(g, m), k(h, n));
      return w;
    };
    e.prototype["catch"] = function (g) {
      return this.then(void 0, g);
    };
    e.prototype.Kb = function (g, h) {
      function k() {
        switch (m.h) {
          case 1:
            g(m.l);
            break;
          case 2:
            h(m.l);
            break;
          default:
            throw Error("Unexpected state: " + m.h);
        }
      }
      var m = this;
      null == this.g ? f.h(k) : this.g.push(k);
    };
    e.resolve = c;
    e.reject = function (g) {
      return new e(function (h, k) {
        k(g);
      });
    };
    e.race = function (g) {
      return new e(function (h, k) {
        for (var m = ba(g), n = m.next(); !n.done; n = m.next())
          c(n.value).Kb(h, k);
      });
    };
    e.all = function (g) {
      var h = ba(g),
        k = h.next();
      return k.done
        ? c([])
        : new e(function (m, n) {
            function w(C) {
              return function (H) {
                x[C] = H;
                v--;
                0 == v && m(x);
              };
            }
            var x = [],
              v = 0;
            do
              x.push(void 0),
                v++,
                c(k.value).Kb(w(x.length - 1), n),
                (k = h.next());
            while (!k.done);
          });
    };
    return e;
  });
  na("Math.trunc", function (a) {
    return a
      ? a
      : function (b) {
          b = Number(b);
          if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b)
            return b;
          var c = Math.floor(Math.abs(b));
          return 0 > b ? -c : c;
        };
  });
  na("Array.prototype.fill", function (a) {
    return a
      ? a
      : function (b, c, d) {
          var e = this.length || 0;
          0 > c && (c = Math.max(0, e + c));
          if (null == d || d > e) d = e;
          d = Number(d);
          0 > d && (d = Math.max(0, e + d));
          for (c = Number(c || 0); c < d; c++) this[c] = b;
          return this;
        };
  });
  na("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f =
              "undefined" != typeof Symbol &&
              Symbol.iterator &&
              b[Symbol.iterator];
          if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; )
              e.push(c.call(d, f.value, g++));
          } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        };
  });
  na("Object.entries", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) va(b, d) && c.push([d, b[d]]);
          return c;
        };
  });
  var xa = xa || {},
    q = this || self,
    r = function (a, b, c) {
      a = a.split(".");
      c = c || q;
      a[0] in c ||
        "undefined" == typeof c.execScript ||
        c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? c[d] && c[d] !== Object.prototype[d]
            ? (c = c[d])
            : (c = c[d] = {})
          : (c[d] = b);
    },
    Aa = function () {
      if (null === ya)
        a: {
          var a = q.document;
          if (
            (a = a.querySelector && a.querySelector("script[nonce]")) &&
            (a = a.nonce || a.getAttribute("nonce")) &&
            za.test(a)
          ) {
            ya = a;
            break a;
          }
          ya = "";
        }
      return ya;
    },
    za = /^[\w+/_-]+[=]{0,2}$/,
    ya = null,
    Ba = function (a, b) {
      a = a.split(".");
      b = b || q;
      for (var c = 0; c < a.length; c++)
        if (((b = b[a[c]]), null == b)) return null;
      return b;
    },
    Ca = function () {},
    Da = function (a) {
      a.uc = void 0;
      a.B = function () {
        return a.uc ? a.uc : (a.uc = new a());
      };
    },
    Ea = function (a) {
      var b = typeof a;
      if ("object" == b)
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if (
            "[object Array]" == c ||
            ("number" == typeof a.length &&
              "undefined" != typeof a.splice &&
              "undefined" != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable("splice"))
          )
            return "array";
          if (
            "[object Function]" == c ||
            ("undefined" != typeof a.call &&
              "undefined" != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable("call"))
          )
            return "function";
        } else return "null";
      else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b;
    },
    Fa = function (a) {
      return "array" == Ea(a);
    },
    Ga = function (a) {
      var b = Ea(a);
      return "array" == b || ("object" == b && "number" == typeof a.length);
    },
    t = function (a) {
      return "function" == Ea(a);
    },
    Ha = function (a) {
      var b = typeof a;
      return ("object" == b && null != a) || "function" == b;
    },
    Ia = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    Ja = 0,
    Ka = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    La = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    Ma = function (a, b, c) {
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? (Ma = Ka)
        : (Ma = La);
      return Ma.apply(null, arguments);
    },
    Na = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    u =
      Date.now ||
      function () {
        return +new Date();
      },
    y = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.wa = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
    };
  var Oa = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Oa);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  };
  y(Oa, Error);
  Oa.prototype.name = "CustomError";
  var Pa;
  var Qa = function (a, b) {
      if ("string" === typeof a)
        return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
      return -1;
    },
    z = function (a, b, c) {
      for (
        var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0;
        f < d;
        f++
      )
        f in e && b.call(c, e[f], f, a);
    },
    Ra = function (a, b) {
      for (
        var c = "string" === typeof a ? a.split("") : a, d = a.length - 1;
        0 <= d;
        --d
      )
        d in c && b.call(void 0, c[d], d, a);
    },
    Sa = function (a, b) {
      for (
        var c = a.length,
          d = [],
          e = 0,
          f = "string" === typeof a ? a.split("") : a,
          g = 0;
        g < c;
        g++
      )
        if (g in f) {
          var h = f[g];
          b.call(void 0, h, g, a) && (d[e++] = h);
        }
      return d;
    },
    Ta = function (a, b) {
      for (
        var c = a.length,
          d = Array(c),
          e = "string" === typeof a ? a.split("") : a,
          f = 0;
        f < c;
        f++
      )
        f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d;
    },
    Ua = function (a, b, c) {
      var d = c;
      z(a, function (e, f) {
        d = b.call(void 0, d, e, f, a);
      });
      return d;
    },
    Va = function (a, b) {
      for (
        var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
        e < c;
        e++
      )
        if (e in d && b.call(void 0, d[e], e, a)) return !0;
      return !1;
    },
    Xa = function (a, b) {
      b = Wa(a, b, void 0);
      return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
    },
    Wa = function (a, b, c) {
      for (
        var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0;
        f < d;
        f++
      )
        if (f in e && b.call(c, e[f], f, a)) return f;
      return -1;
    },
    Ya = function (a, b) {
      for (
        var c = "string" === typeof a ? a.split("") : a, d = a.length - 1;
        0 <= d;
        d--
      )
        if (d in c && b.call(void 0, c[d], d, a)) return d;
      return -1;
    },
    Za = function (a, b) {
      return 0 <= Qa(a, b);
    },
    ab = function (a, b) {
      b = Qa(a, b);
      var c;
      (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
      return c;
    },
    bb = function (a, b) {
      var c = 0;
      Ra(a, function (d, e) {
        b.call(void 0, d, e, a) &&
          1 == Array.prototype.splice.call(a, e, 1).length &&
          c++;
      });
    },
    cb = function (a) {
      return Array.prototype.concat.apply([], arguments);
    },
    db = function (a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    },
    eb = function (a) {
      for (var b = {}, c = 0, d = 0; d < a.length; ) {
        var e = a[d++];
        var f = e;
        f = Ha(f) ? "o" + (f[Ia] || (f[Ia] = ++Ja)) : (typeof f).charAt(0) + f;
        Object.prototype.hasOwnProperty.call(b, f) ||
          ((b[f] = !0), (a[c++] = e));
      }
      a.length = c;
    },
    gb = function (a, b) {
      a.sort(b || fb);
    },
    fb = function (a, b) {
      return a > b ? 1 : a < b ? -1 : 0;
    },
    ib = function (a) {
      for (var b = [], c = 0; c < a; c++) b[c] = "";
      return b;
    };
  var jb = function (a) {
    return Ta(a, function (b) {
      b = b.toString(16);
      return 1 < b.length ? b : "0" + b;
    }).join("");
  };
  var kb = function (a) {
      return function () {
        return a;
      };
    },
    lb = function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    },
    nb = function (a) {
      var b = 0,
        c = !1,
        d = [],
        e = function () {
          b = 0;
          c && ((c = !1), f());
        },
        f = function () {
          b = q.setTimeout(e, 1e3);
          a.apply(void 0, d);
        };
      return function (g) {
        d = arguments;
        b ? (c = !0) : f();
      };
    };
  var ob = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    },
    pb = function (a, b) {
      var c = {},
        d;
      for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
      return c;
    },
    rb = function (a) {
      var b = qb,
        c;
      for (c in b) if (a.call(void 0, b[c], c, b)) return !0;
      return !1;
    },
    tb = function (a) {
      var b = sb,
        c;
      for (c in b) if (!a.call(void 0, b[c], c, b)) return !1;
      return !0;
    },
    vb = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = a[d];
      return b;
    },
    wb = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    },
    xb = function (a, b) {
      var c = Ga(b),
        d = c ? b : arguments;
      for (c = c ? 0 : 1; c < d.length; c++) {
        if (null == a) return;
        a = a[d[c]];
      }
      return a;
    },
    yb = function (a, b) {
      return null !== a && b in a;
    },
    zb = function (a, b) {
      for (var c in a) if (a[c] == b) return !0;
      return !1;
    },
    Bb = function (a) {
      var b = Ab,
        c;
      for (c in b) if (a.call(void 0, b[c], c, b)) return c;
    },
    Cb = function (a) {
      for (var b in a) return !1;
      return !0;
    },
    Db = function (a) {
      for (var b in a) delete a[b];
    },
    Eb = function (a, b, c) {
      return null !== a && b in a ? a[b] : c;
    },
    Fb =
      "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
        " "
      ),
    Gb = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < Fb.length; f++)
          (c = Fb[f]),
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    };
  var Jb = function (a, b) {
    this.g = (a === Hb && b) || "";
    this.h = Ib;
  };
  Jb.prototype.Ua = !0;
  Jb.prototype.Ma = function () {
    return this.g;
  };
  var Kb = function (a) {
      return a instanceof Jb && a.constructor === Jb && a.h === Ib
        ? a.g
        : "type_error:Const";
    },
    Lb = function (a) {
      return new Jb(Hb, a);
    },
    Ib = {},
    Hb = {},
    Mb = Lb("");
  var Pb = function (a, b) {
    this.g = (a === Nb && b) || "";
    this.h = Ob;
  };
  Pb.prototype.Ua = !0;
  Pb.prototype.Ma = function () {
    return this.g.toString();
  };
  Pb.prototype.sc = !0;
  Pb.prototype.lc = function () {
    return 1;
  };
  var Qb = function (a) {
      if (a instanceof Pb && a.constructor === Pb && a.h === Ob) return a.g;
      Ea(a);
      return "type_error:TrustedResourceUrl";
    },
    Ob = {},
    Rb = function (a) {
      return new Pb(Nb, a);
    },
    Nb = {};
  var Tb = function (a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    },
    Ub = function (a) {
      return /^[\s\xa0]*$/.test(a);
    },
    Vb = String.prototype.trim
      ? function (a) {
          return a.trim();
        }
      : function (a) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        },
    cc = function (a, b) {
      if (b)
        a = a
          .replace(Wb, "&amp;")
          .replace(Xb, "&lt;")
          .replace(Yb, "&gt;")
          .replace(Zb, "&quot;")
          .replace($b, "&#39;")
          .replace(ac, "&#0;");
      else {
        if (!bc.test(a)) return a;
        -1 != a.indexOf("&") && (a = a.replace(Wb, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(Xb, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Yb, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Zb, "&quot;"));
        -1 != a.indexOf("'") && (a = a.replace($b, "&#39;"));
        -1 != a.indexOf("\x00") && (a = a.replace(ac, "&#0;"));
      }
      return a;
    },
    Wb = /&/g,
    Xb = /</g,
    Yb = />/g,
    Zb = /"/g,
    $b = /'/g,
    ac = /\x00/g,
    bc = /[\x00&<>"']/,
    dc = function (a, b) {
      return -1 != a.toLowerCase().indexOf(b.toLowerCase());
    },
    fc = function (a, b) {
      var c = 0;
      a = Vb(String(a)).split(".");
      b = Vb(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if (0 == f[0].length && 0 == g[0].length) break;
          c =
            ec(
              0 == f[1].length ? 0 : parseInt(f[1], 10),
              0 == g[1].length ? 0 : parseInt(g[1], 10)
            ) ||
            ec(0 == f[2].length, 0 == g[2].length) ||
            ec(f[2], g[2]);
          f = f[3];
          g = g[3];
        } while (0 == c);
      }
      return c;
    },
    ec = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    };
  var ic = function (a, b) {
    this.g = (a === gc && b) || "";
    this.h = hc;
  };
  ic.prototype.Ua = !0;
  ic.prototype.Ma = function () {
    return this.g.toString();
  };
  ic.prototype.sc = !0;
  ic.prototype.lc = function () {
    return 1;
  };
  var jc = function (a) {
      if (a instanceof ic && a.constructor === ic && a.h === hc) return a.g;
      Ea(a);
      return "type_error:SafeUrl";
    },
    kc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    hc = {},
    gc = {};
  var lc;
  a: {
    var mc = q.navigator;
    if (mc) {
      var nc = mc.userAgent;
      if (nc) {
        lc = nc;
        break a;
      }
    }
    lc = "";
  }
  var A = function (a) {
    return -1 != lc.indexOf(a);
  };
  var oc = function () {
      return A("Trident") || A("MSIE");
    },
    pc = function () {
      return A("Firefox") || A("FxiOS");
    },
    rc = function () {
      return (
        A("Safari") &&
        !(
          qc() ||
          A("Coast") ||
          A("Opera") ||
          A("Edge") ||
          A("Edg/") ||
          A("OPR") ||
          pc() ||
          A("Silk") ||
          A("Android")
        )
      );
    },
    qc = function () {
      return (A("Chrome") || A("CriOS")) && !A("Edge");
    };
  var tc = function () {
    this.g = "";
    this.l = sc;
    this.h = null;
  };
  tc.prototype.sc = !0;
  tc.prototype.lc = function () {
    return this.h;
  };
  tc.prototype.Ua = !0;
  tc.prototype.Ma = function () {
    return this.g.toString();
  };
  var uc = function (a) {
      if (a instanceof tc && a.constructor === tc && a.l === sc) return a.g;
      Ea(a);
      return "type_error:SafeHtml";
    },
    sc = {},
    wc = function (a, b) {
      var c = new tc();
      c.g = a;
      c.h = b;
      return c;
    };
  wc("<!DOCTYPE html>", 0);
  var xc = wc("", 0);
  wc("<br>", 0);
  var yc = function (a) {
      var b = Rb(Kb(Mb));
      a.src = Qb(b).toString();
    },
    zc = function (a, b) {
      a.src = Qb(b);
      (b = Aa()) && a.setAttribute("nonce", b);
    };
  var Ac = function (a) {
      return decodeURIComponent(a.replace(/\+/g, " "));
    },
    Bc = function (a) {
      return (a = cc(a, void 0));
    },
    Cc = function (a, b) {
      a.length > b && (a = a.substring(0, b - 3) + "...");
      return a;
    },
    Dc = String.prototype.repeat
      ? function (a, b) {
          return a.repeat(b);
        }
      : function (a, b) {
          return Array(b + 1).join(a);
        },
    Ec = function (a) {
      return null == a ? "" : String(a);
    },
    Fc = (2147483648 * Math.random()) | 0,
    Gc = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    },
    Hc = function () {
      return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase();
    },
    Ic = function (a) {
      return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
        return c + d.toUpperCase();
      });
    };
  var Jc = function () {
      return A("iPhone") && !A("iPod") && !A("iPad");
    },
    Kc = function () {
      return Jc() || A("iPad") || A("iPod");
    };
  var Lc = function (a) {
    Lc[" "](a);
    return a;
  };
  Lc[" "] = Ca;
  var Mc = function (a, b) {
      try {
        return Lc(a[b]), !0;
      } catch (c) {}
      return !1;
    },
    Oc = function (a, b) {
      var c = Nc;
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
    };
  var Pc = A("Opera"),
    Qc = oc(),
    Rc = A("Edge"),
    Sc =
      A("Gecko") &&
      !(dc(lc, "WebKit") && !A("Edge")) &&
      !(A("Trident") || A("MSIE")) &&
      !A("Edge"),
    Tc = dc(lc, "WebKit") && !A("Edge"),
    Uc = A("Macintosh"),
    Vc = A("Android"),
    Wc = Jc(),
    Xc = A("iPad"),
    Yc = A("iPod"),
    Zc = Kc(),
    $c = function () {
      var a = q.document;
      return a ? a.documentMode : void 0;
    },
    ad;
  a: {
    var bd = "",
      cd = (function () {
        var a = lc;
        if (Sc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Rc) return /Edge\/([\d\.]+)/.exec(a);
        if (Qc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Tc) return /WebKit\/(\S+)/.exec(a);
        if (Pc) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    cd && (bd = cd ? cd[1] : "");
    if (Qc) {
      var dd = $c();
      if (null != dd && dd > parseFloat(bd)) {
        ad = String(dd);
        break a;
      }
    }
    ad = bd;
  }
  var ed = ad,
    Nc = {},
    fd = function (a) {
      return Oc(a, function () {
        return 0 <= fc(ed, a);
      });
    },
    gd;
  gd = q.document && Qc ? $c() : void 0;
  var hd = pc(),
    id = Jc() || A("iPod"),
    jd = A("iPad"),
    kd = A("Android") && !(qc() || pc() || A("Opera") || A("Silk")),
    ld = qc(),
    md = rc() && !Kc();
  var nd = {},
    od = null,
    pd = function (a, b) {
      void 0 === b && (b = 0);
      if (!od) {
        od = {};
        for (
          var c =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            d = ["+/=", "+/", "-_=", "-_.", "-_"],
            e = 0;
          5 > e;
          e++
        ) {
          var f = c.concat(d[e].split(""));
          nd[e] = f;
          for (var g = 0; g < f.length; g++) {
            var h = f[g];
            void 0 === od[h] && (od[h] = g);
          }
        }
      }
      b = nd[b];
      c = [];
      for (d = 0; d < a.length; d += 3) {
        var k = a[d],
          m = (e = d + 1 < a.length) ? a[d + 1] : 0;
        h = (f = d + 2 < a.length) ? a[d + 2] : 0;
        g = k >> 2;
        k = ((k & 3) << 4) | (m >> 4);
        m = ((m & 15) << 2) | (h >> 6);
        h &= 63;
        f || ((h = 64), e || (m = 64));
        c.push(b[g], b[k], b[m] || "", b[h] || "");
      }
      return c.join("");
    };
  var qd = 0,
    rd = 0;
  var sd = function () {
    this.g = [];
  };
  sd.prototype.length = function () {
    return this.g.length;
  };
  sd.prototype.end = function () {
    var a = this.g;
    this.g = [];
    return a;
  };
  var td = function (a, b) {
      for (; 127 < b; ) a.g.push((b & 127) | 128), (b >>>= 7);
      a.g.push(b);
    },
    ud = function (a, b) {
      a.g.push((b >>> 0) & 255);
      a.g.push((b >>> 8) & 255);
      a.g.push((b >>> 16) & 255);
      a.g.push((b >>> 24) & 255);
    };
  var vd = function () {
    this.h = [];
    this.l = 0;
    this.g = new sd();
  };
  vd.prototype.reset = function () {
    this.h = [];
    this.g.end();
    this.l = 0;
  };
  var wd = function (a, b, c) {
    if (null != c) {
      td(a.g, 8 * b);
      a = a.g;
      var d = c;
      c = 0 > d;
      d = Math.abs(d);
      b = d >>> 0;
      d = Math.floor((d - b) / 4294967296);
      d >>>= 0;
      c &&
        ((d = ~d >>> 0),
        (b = (~b >>> 0) + 1),
        4294967295 < b && ((b = 0), d++, 4294967295 < d && (d = 0)));
      qd = b;
      rd = d;
      c = qd;
      for (b = rd; 0 < b || 127 < c; )
        a.g.push((c & 127) | 128),
          (c = ((c >>> 7) | (b << 25)) >>> 0),
          (b >>>= 7);
      a.g.push(c);
    }
  };
  var xd = function () {},
    yd = "function" == typeof Uint8Array,
    Bd = function (a, b, c) {
      a.h = null;
      b || (b = []);
      a.C = void 0;
      a.o = -1;
      a.g = b;
      a: {
        if ((b = a.g.length)) {
          --b;
          var d = a.g[b];
          if (
            !(
              null === d ||
              "object" != typeof d ||
              Fa(d) ||
              (yd && d instanceof Uint8Array)
            )
          ) {
            a.w = b - a.o;
            a.l = d;
            break a;
          }
        }
        a.w = Number.MAX_VALUE;
      }
      a.A = {};
      if (c)
        for (b = 0; b < c.length; b++)
          (d = c[b]),
            d < a.w
              ? ((d += a.o), (a.g[d] = a.g[d] || zd))
              : (Ad(a), (a.l[d] = a.l[d] || zd));
    },
    zd = [],
    Ad = function (a) {
      var b = a.w + a.o;
      a.g[b] || (a.l = a.g[b] = {});
    },
    Cd = function (a, b) {
      if (b < a.w) {
        b += a.o;
        var c = a.g[b];
        return c === zd ? (a.g[b] = []) : c;
      }
      if (a.l) return (c = a.l[b]), c === zd ? (a.l[b] = []) : c;
    },
    Dd = function (a, b) {
      a = Cd(a, b);
      return null == a ? 0 : a;
    },
    Ed = function (a, b, c) {
      0 !== c
        ? b < a.w
          ? (a.g[b + a.o] = c)
          : (Ad(a), (a.l[b] = c))
        : (a.g[b + a.o] = null);
      return a;
    },
    Gd = function (a) {
      if (a.h)
        for (var b in a.h) {
          var c = a.h[b];
          if (Fa(c)) for (var d = 0; d < c.length; d++) c[d] && Fd(c[d]);
          else c && Fd(c);
        }
    },
    Fd = function (a) {
      Gd(a);
      return a.g;
    };
  xd.prototype.toString = function () {
    Gd(this);
    return this.g.toString();
  };
  xd.prototype.clone = function () {
    return new this.constructor(Hd(Fd(this)));
  };
  var Hd = function (a) {
    if (Fa(a)) {
      for (var b = Array(a.length), c = 0; c < a.length; c++) {
        var d = a[c];
        null != d && (b[c] = "object" == typeof d ? Hd(d) : d);
      }
      return b;
    }
    if (yd && a instanceof Uint8Array) return new Uint8Array(a);
    b = {};
    for (c in a)
      (d = a[c]), null != d && (b[c] = "object" == typeof d ? Hd(d) : d);
    return b;
  };
  var Id = document,
    B = window;
  var Jd = function (a) {
    Bd(this, a, null);
  };
  y(Jd, xd);
  var Ld = function (a) {
    Bd(this, a, null);
  };
  y(Ld, xd);
  var Md = function (a) {
    this.g = a || { cookie: "" };
  };
  l = Md.prototype;
  l.isEnabled = function () {
    return navigator.cookieEnabled;
  };
  l.set = function (a, b, c, d, e, f) {
    if ("object" === typeof c) {
      var g = c.o;
      f = c.w;
      e = c.g;
      d = c.h;
      c = c.l;
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === c && (c = -1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    f = f ? ";secure" : "";
    c =
      0 > c
        ? ""
        : 0 == c
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(u() + 1e3 * c).toUTCString();
    this.g.cookie =
      a + "=" + b + e + d + c + f + (null != g ? ";samesite=" + g : "");
  };
  l.get = function (a, b) {
    for (
      var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f;
      e < d.length;
      e++
    ) {
      f = Vb(d[e]);
      if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
      if (f == a) return "";
    }
    return b;
  };
  l.Aa = function () {
    return Nd(this).keys;
  };
  l.ka = function () {
    return Nd(this).values;
  };
  l.isEmpty = function () {
    return !this.g.cookie;
  };
  l.clear = function () {
    for (var a = Nd(this).keys, b = a.length - 1; 0 <= b; b--) {
      var c = a[b];
      this.get(c);
      this.set(c, "", 0, void 0, void 0);
    }
  };
  var Nd = function (a) {
      a = (a.g.cookie || "").split(";");
      for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
        (e = Vb(a[f])),
          (d = e.indexOf("=")),
          -1 == d
            ? (b.push(""), c.push(e))
            : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
      return { keys: b, values: c };
    },
    Od = new Md("undefined" == typeof document ? null : document);
  var Pd = function (a) {
      return (a = new Md(a).get("DATA_USE_CONSENT", "")) ? a : null;
    },
    Qd = function (a) {
      var b = (b = new Md(a).get("FCCDCF", "")) ? b : null;
      try {
        var c = b ? new Jd(b ? JSON.parse(b) : null) : null;
      } catch (d) {
        c = null;
      }
      if (!c) return Pd(a);
      c.h || (c.h = {});
      c.h[3] || ((b = Cd(c, 3)) && (c.h[3] = new Ld(b)));
      c = c.h[3];
      if (!c || null == Cd(c, 1)) return Pd(a);
      a = Cd(c, 2);
      b = Date.now();
      if (a) {
        if (b < a || b > a + 33696e6) return null;
      } else return null;
      return Cd(c, 1);
    };
  var Sd = function (a) {
    Bd(this, a, Rd);
  };
  y(Sd, xd);
  var Rd = [1, 2, 3, 4];
  try {
    new self.OffscreenCanvas(0, 0).getContext("2d");
  } catch (a) {}
  var Td = !Qc || 9 <= Number(gd),
    Ud = Qc || Pc || Tc;
  var Vd = function (a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
  };
  l = Vd.prototype;
  l.clone = function () {
    return new Vd(this.x, this.y);
  };
  l.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  l.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  l.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  l.scale = function (a, b) {
    this.x *= a;
    this.y *= "number" === typeof b ? b : a;
    return this;
  };
  var D = function (a, b) {
    this.width = a;
    this.height = b;
  };
  l = D.prototype;
  l.clone = function () {
    return new D(this.width, this.height);
  };
  l.aspectRatio = function () {
    return this.width / this.height;
  };
  l.isEmpty = function () {
    return !(this.width * this.height);
  };
  l.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  l.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  l.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  l.scale = function (a, b) {
    this.width *= a;
    this.height *= "number" === typeof b ? b : a;
    return this;
  };
  var Yd = function (a) {
      return a ? new Wd(Xd(a)) : Pa || (Pa = new Wd());
    },
    Zd = function () {
      var a = document;
      return a.querySelectorAll && a.querySelector
        ? a.querySelectorAll("SCRIPT")
        : a.getElementsByTagName("SCRIPT");
    },
    ae = function (a, b) {
      ob(b, function (c, d) {
        c && "object" == typeof c && c.Ua && (c = c.Ma());
        "style" == d
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : $d.hasOwnProperty(d)
          ? a.setAttribute($d[d], c)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    $d = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: "nonce",
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width",
    },
    be = function (a) {
      a = a.document;
      a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
      return new D(a.clientWidth, a.clientHeight);
    },
    ce = function (a) {
      var b = a.scrollingElement
        ? a.scrollingElement
        : Tc || "CSS1Compat" != a.compatMode
        ? a.body || a.documentElement
        : a.documentElement;
      a = a.parentWindow || a.defaultView;
      return Qc && fd("10") && a.pageYOffset != b.scrollTop
        ? new Vd(b.scrollLeft, b.scrollTop)
        : new Vd(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    },
    E = function (a) {
      return a ? a.parentWindow || a.defaultView : window;
    },
    fe = function (a, b, c) {
      var d = arguments,
        e = document,
        f = String(d[0]),
        g = d[1];
      if (!Td && g && (g.name || g.type)) {
        f = ["<", f];
        g.name && f.push(' name="', Bc(g.name), '"');
        if (g.type) {
          f.push(' type="', Bc(g.type), '"');
          var h = {};
          Gb(h, g);
          delete h.type;
          g = h;
        }
        f.push(">");
        f = f.join("");
      }
      f = de(e, f);
      g &&
        ("string" === typeof g
          ? (f.className = g)
          : Fa(g)
          ? (f.className = g.join(" "))
          : ae(f, g));
      2 < d.length && ee(e, f, d);
      return f;
    },
    ee = function (a, b, c) {
      function d(g) {
        g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g);
      }
      for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !Ga(f) || (Ha(f) && 0 < f.nodeType) ? d(f) : z(ge(f) ? db(f) : f, d);
      }
    },
    de = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    he = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    },
    ie = function (a) {
      var b;
      if (
        Ud &&
        !(
          Qc &&
          fd("9") &&
          !fd("10") &&
          q.SVGElement &&
          a instanceof q.SVGElement
        ) &&
        (b = a.parentElement)
      )
        return b;
      b = a.parentNode;
      return Ha(b) && 1 == b.nodeType ? b : null;
    },
    je = function (a, b) {
      if (!a || !b) return !1;
      if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b; ) b = b.parentNode;
      return b == a;
    },
    Xd = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    ke = function (a) {
      try {
        return (
          a.contentWindow || (a.contentDocument ? E(a.contentDocument) : null)
        );
      } catch (b) {}
      return null;
    },
    ge = function (a) {
      if (a && "number" == typeof a.length) {
        if (Ha(a))
          return "function" == typeof a.item || "string" == typeof a.item;
        if (t(a)) return "function" == typeof a.item;
      }
      return !1;
    },
    le = function (a, b) {
      a && (a = a.parentNode);
      for (var c = 0; a; ) {
        if (b(a)) return a;
        a = a.parentNode;
        c++;
      }
      return null;
    },
    Wd = function (a) {
      this.g = a || q.document || document;
    };
  Wd.prototype.createElement = function (a) {
    return de(this.g, a);
  };
  Wd.prototype.appendChild = function (a, b) {
    a.appendChild(b);
  };
  Wd.prototype.contains = je;
  var ne = function (a) {
      me();
      return Rb(a);
    },
    me = Ca;
  var pe = function () {
      return (
        !oe() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
      );
    },
    oe = function () {
      return A("iPad") || (A("Android") && !A("Mobile")) || A("Silk");
    };
  var qe =
      /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    re = function (a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? Ac(e) : "");
        }
      }
    },
    se = /#|$/,
    te = function (a, b) {
      var c = a.search(se);
      a: {
        var d = 0;
        for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
          var f = a.charCodeAt(d - 1);
          if (38 == f || 63 == f)
            if (
              ((f = a.charCodeAt(d + e)), !f || 61 == f || 38 == f || 35 == f)
            )
              break a;
          d += e + 1;
        }
        d = -1;
      }
      if (0 > d) return null;
      e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return Ac(a.substr(d, e - d));
    };
  var ue = function (a) {
      try {
        return !!a && null != a.location.href && Mc(a, "foo");
      } catch (b) {
        return !1;
      }
    },
    ve = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) &&
            b.call(void 0, a[c], c, a);
    },
    we = /https?:\/\/[^\/]+/,
    xe = function (a) {
      return ((a = we.exec(a)) && a[0]) || "";
    },
    ye = function () {
      var a = q;
      var b = void 0 === b ? !0 : b;
      try {
        for (var c = null; c != a; c = a, a = a.parent)
          switch (a.location.protocol) {
            case "https:":
              return !0;
            case "file:":
              return b;
            case "http:":
              return !1;
          }
      } catch (d) {}
      return !0;
    },
    Ae = function () {
      var a = ze;
      if (!a) return "";
      var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
      try {
        var c = b.exec(decodeURIComponent(a));
        if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true";
      } catch (d) {}
      return "";
    },
    Be = function (a, b) {
      try {
        return !(!a.frames || !a.frames[b]);
      } catch (c) {
        return !1;
      }
    };
  var Ce = lb(function () {
    var a = !1;
    try {
      var b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
      q.addEventListener("test", null, b);
    } catch (c) {}
    return a;
  });
  function De(a) {
    return a ? (a.passive && Ce() ? a : a.capture || !1) : !1;
  }
  var Ee = function (a, b, c, d) {
      return a.addEventListener ? (a.addEventListener(b, c, De(d)), !0) : !1;
    },
    Fe = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, De(void 0));
    },
    Ge = function (a) {
      var b = void 0 === b ? {} : b;
      if (t(window.CustomEvent)) var c = new CustomEvent("rum_blp", b);
      else
        (c = document.createEvent("CustomEvent")),
          c.initCustomEvent("rum_blp", !!b.bubbles, !!b.cancelable, b.detail);
      a.dispatchEvent(c);
    };
  var He = function (a, b) {
    a.google_image_requests || (a.google_image_requests = []);
    var c = a.document.createElement("img");
    c.src = b;
    a.google_image_requests.push(c);
  };
  var Ie = function (a) {
    var b = document;
    try {
      var c = Qd(b);
      var d = c ? new Sd(c ? JSON.parse(c) : null) : null;
    } catch (e) {
      d = null;
    }
    if (!d) return 0;
    b = Cd(d, 7);
    if (null == b ? b : b) return 4;
    if (6048e5 < u() - (Cd(d, 5) || 0)) return 0;
    if (a) {
      if (Za(Cd(d, 3), a)) return 2;
      if (Za(Cd(d, 4), a)) return 3;
    }
    return 1;
  };
  var Je = { nh: 1, Eh: 2, bh: 3 };
  var F = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  };
  F.prototype.h = function () {
    return this.right - this.left;
  };
  F.prototype.g = function () {
    return this.bottom - this.top;
  };
  F.prototype.clone = function () {
    return new F(this.top, this.right, this.bottom, this.left);
  };
  F.prototype.contains = function (a) {
    return this && a
      ? a instanceof F
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left &&
          a.x <= this.right &&
          a.y >= this.top &&
          a.y <= this.bottom
      : !1;
  };
  var Ke = function (a, b) {
    return a == b
      ? !0
      : a && b
      ? a.top == b.top &&
        a.right == b.right &&
        a.bottom == b.bottom &&
        a.left == b.left
      : !1;
  };
  F.prototype.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  F.prototype.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  F.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  var Le = function (a, b, c) {
    b instanceof Vd
      ? ((a.left += b.x), (a.right += b.x), (a.top += b.y), (a.bottom += b.y))
      : ((a.left += b),
        (a.right += b),
        "number" === typeof c && ((a.top += c), (a.bottom += c)));
    return a;
  };
  F.prototype.scale = function (a, b) {
    b = "number" === typeof b ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this;
  };
  var Me = function (a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d;
  };
  Me.prototype.clone = function () {
    return new Me(this.left, this.top, this.width, this.height);
  };
  var Ne = function (a) {
    return new F(a.top, a.left + a.width, a.top + a.height, a.left);
  };
  l = Me.prototype;
  l.contains = function (a) {
    return a instanceof Vd
      ? a.x >= this.left &&
          a.x <= this.left + this.width &&
          a.y >= this.top &&
          a.y <= this.top + this.height
      : this.left <= a.left &&
          this.left + this.width >= a.left + a.width &&
          this.top <= a.top &&
          this.top + this.height >= a.top + a.height;
  };
  l.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  l.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  l.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  l.scale = function (a, b) {
    b = "number" === typeof b ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= b;
    this.height *= b;
    return this;
  };
  var Pe = function (a, b) {
      if ("string" === typeof b) (b = Oe(a, b)) && (a.style[b] = void 0);
      else
        for (var c in b) {
          var d = a,
            e = b[c],
            f = Oe(d, c);
          f && (d.style[f] = e);
        }
    },
    Qe = {},
    Oe = function (a, b) {
      var c = Qe[b];
      if (!c) {
        var d = Gc(b);
        c = d;
        void 0 === a.style[d] &&
          ((d =
            (Tc ? "Webkit" : Sc ? "Moz" : Qc ? "ms" : Pc ? "O" : null) + Ic(d)),
          void 0 !== a.style[d] && (c = d));
        Qe[b] = c;
      }
      return c;
    },
    Re = function (a, b) {
      var c = a.style[Gc(b)];
      return "undefined" !== typeof c ? c : a.style[Oe(a, b)] || "";
    },
    Se = function (a) {
      try {
        var b = a.getBoundingClientRect();
      } catch (c) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
      Qc &&
        a.ownerDocument.body &&
        ((a = a.ownerDocument),
        (b.left -= a.documentElement.clientLeft + a.body.clientLeft),
        (b.top -= a.documentElement.clientTop + a.body.clientTop));
      return b;
    },
    Te = function (a) {
      var b = Xd(a),
        c = new Vd(0, 0);
      var d = b ? Xd(b) : document;
      d =
        !Qc || 9 <= Number(gd) || "CSS1Compat" == Yd(d).g.compatMode
          ? d.documentElement
          : d.body;
      if (a == d) return c;
      a = Se(a);
      b = ce(Yd(b).g);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    },
    Ue = function (a, b) {
      var c = new Vd(0, 0),
        d = E(Xd(a));
      if (!Mc(d, "parent")) return c;
      do {
        if (d == b) var e = Te(a);
        else (e = Se(a)), (e = new Vd(e.left, e.top));
        c.x += e.x;
        c.y += e.y;
      } while (
        d &&
        d != b &&
        d != d.parent &&
        (a = d.frameElement) &&
        (d = d.parent)
      );
      return c;
    },
    Ve = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = Tc && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect
        ? ((a = Se(a)), new D(a.right - a.left, a.bottom - a.top))
        : new D(b, c);
    };
  var We = function (a) {
    a = void 0 === a ? q : a;
    var b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch (c) {}
    try {
      if (b && b.pageViewId && b.canonicalUrl) return b;
    } catch (c) {}
    return null;
  };
  var Xe = !!window.google_async_iframe_id,
    Ye = (Xe && window.parent) || window,
    Ze = function () {
      if (Xe && !ue(Ye)) {
        var a = "." + Id.domain;
        try {
          for (; 2 < a.split(".").length && !ue(Ye); )
            (Id.domain = a = a.substr(a.indexOf(".") + 1)),
              (Ye = window.parent);
        } catch (b) {}
        ue(Ye) || (Ye = window);
      }
      return Ye;
    };
  Rb(Kb(Lb("//fonts.googleapis.com/css")));
  var $e = function (a, b, c) {
      c = void 0 === c ? {} : c;
      this.error = a;
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
      this.meta = c;
    },
    af = function (a) {
      return !!(a.error && a.meta && a.id);
    };
  var bf = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
    hf = function (a) {
      a = a || ef();
      for (
        var b = new ff(q.location.href, q, !1),
          c = null,
          d = a.length - 1,
          e = d;
        0 <= e;
        --e
      ) {
        var f = a[e];
        !c && bf.test(f.url) && (c = f);
        if (f.url && !f.wc) {
          b = f;
          break;
        }
      }
      e = null;
      f = a.length && a[d].url;
      0 != b.depth && f && (e = a[d]);
      return new gf(b, e, c);
    },
    ef = function () {
      var a = q,
        b = [],
        c = null;
      do {
        var d = a;
        if (ue(d)) {
          var e = d.location.href;
          c = (d.document && d.document.referrer) || null;
        } else (e = c), (c = null);
        b.push(new ff(e || "", d));
        try {
          a = d.parent;
        } catch (f) {
          a = null;
        }
      } while (a && d != a);
      d = 0;
      for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
      d = q;
      if (
        d.location &&
        d.location.ancestorOrigins &&
        d.location.ancestorOrigins.length == b.length - 1
      )
        for (a = 1; a < b.length; ++a)
          (e = b[a]),
            e.url ||
              ((e.url = d.location.ancestorOrigins[a - 1] || ""), (e.wc = !0));
      return b;
    },
    gf = function (a, b, c) {
      this.g = a;
      this.h = b;
      this.l = c;
    },
    ff = function (a, b, c) {
      this.url = a;
      this.la = b;
      this.wc = !!c;
      this.depth = null;
    };
  var jf = function () {
      this.h = "&";
      this.o = !1;
      this.l = {};
      this.w = 0;
      this.g = [];
    },
    kf = function (a, b) {
      var c = {};
      c[a] = b;
      return [c];
    },
    mf = function (a, b, c, d, e) {
      var f = [];
      ve(a, function (g, h) {
        (g = lf(g, b, c, d, e)) && f.push(h + "=" + g);
      });
      return f.join(b);
    },
    lf = function (a, b, c, d, e) {
      if (null == a) return "";
      b = b || "&";
      c = c || ",$";
      "string" == typeof c && (c = c.split(""));
      if (a instanceof Array) {
        if (((d = d || 0), d < c.length)) {
          for (var f = [], g = 0; g < a.length; g++)
            f.push(lf(a[g], b, c, d + 1, e));
          return f.join(c[d]);
        }
      } else if ("object" == typeof a)
        return (
          (e = e || 0),
          2 > e ? encodeURIComponent(mf(a, b, c, d, e + 1)) : "..."
        );
      return encodeURIComponent(String(a));
    },
    nf = function (a, b, c) {
      a.g.push(b);
      a.l[b] = c;
    },
    of = function (a, b, c, d) {
      a.g.push(b);
      a.l[b] = kf(c, d);
    },
    qf = function (a, b, c) {
      b = b + "//pagead2.googlesyndication.com/" + c;
      var d = pf(a) - c.length;
      if (0 > d) return "";
      a.g.sort(function (n, w) {
        return n - w;
      });
      c = null;
      for (var e = "", f = 0; f < a.g.length; f++)
        for (var g = a.g[f], h = a.l[g], k = 0; k < h.length; k++) {
          if (!d) {
            c = null == c ? g : c;
            break;
          }
          var m = mf(h[k], a.h, ",$");
          if (m) {
            m = e + m;
            if (d >= m.length) {
              d -= m.length;
              b += m;
              e = a.h;
              break;
            }
            a.o &&
              ((e = d),
              m[e - 1] == a.h && --e,
              (b += m.substr(0, e)),
              (e = a.h),
              (d = 0));
            c = null == c ? g : c;
          }
        }
      a = "";
      null != c && (a = e + "trn=" + c);
      return b + a + "";
    },
    pf = function (a) {
      var b = 1,
        c;
      for (c in a.l) b = c.length > b ? c.length : b;
      return 3997 - b - a.h.length - 1;
    };
  var rf = function () {
      var a = void 0 === a ? B : a;
      this.h = "http:" === a.location.protocol ? "http:" : "https:";
      this.g = Math.random();
    },
    uf = function () {
      var a = sf,
        b = tf.google_srt;
      0 <= b && 1 >= b && (a.g = b);
    },
    vf = function (a, b, c, d, e) {
      if ((d ? a.g : Math.random()) < (e || 0.01))
        try {
          if (c instanceof jf) var f = c;
          else
            (f = new jf()),
              ve(c, function (h, k) {
                var m = f,
                  n = m.w++;
                nf(m, n, kf(k, h));
              });
          var g = qf(f, a.h, "/pagead/gen_204?id=" + b + "&");
          g && He(q, g);
        } catch (h) {}
    };
  var wf = null;
  var xf = function () {
      var a = q.performance;
      return a && a.now && a.timing
        ? Math.floor(a.now() + a.timing.navigationStart)
        : u();
    },
    yf = function () {
      var a = void 0 === a ? q : a;
      return (a = a.performance) && a.now ? a.now() : null;
    },
    zf = function (a) {
      var b = q.performance;
      return (b && b.timing && b.timing[a]) || 0;
    },
    Af = function () {
      var a = Math.min(
        zf("domLoading") || Infinity,
        zf("domInteractive") || Infinity
      );
      return Infinity == a
        ? Math.max(zf("responseEnd"), zf("navigationStart"))
        : a;
    };
  var Bf = function (a, b, c, d, e) {
    this.label = a;
    this.type = b;
    this.value = c;
    this.duration = void 0 === d ? 0 : d;
    this.uniqueId = Math.random();
    this.slotId = e;
  };
  var Cf = q.performance,
    Df = !!(Cf && Cf.mark && Cf.measure && Cf.clearMarks),
    Ef = lb(function () {
      var a;
      if ((a = Df)) {
        var b;
        if (null === wf) {
          wf = "";
          try {
            a = "";
            try {
              a = q.top.location.hash;
            } catch (c) {
              a = q.location.hash;
            }
            a && (wf = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "");
          } catch (c) {}
        }
        b = wf;
        a = !!b.indexOf && 0 <= b.indexOf("1337");
      }
      return a;
    }),
    Ff = function (a, b) {
      this.events = [];
      this.g = b || q;
      var c = null;
      b &&
        ((b.google_js_reporting_queue = b.google_js_reporting_queue || []),
        (this.events = b.google_js_reporting_queue),
        (c = b.google_measure_js_timing));
      this.h = Ef() || (null != c ? c : Math.random() < a);
    };
  Ff.prototype.C = function () {
    this.h = !1;
    this.events != this.g.google_js_reporting_queue &&
      (Ef() && z(this.events, Gf), (this.events.length = 0));
  };
  Ff.prototype.G = function (a) {
    !this.h || 2048 < this.events.length || this.events.push(a);
  };
  var Gf = function (a) {
    a &&
      Cf &&
      Ef() &&
      (Cf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"),
      Cf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"));
  };
  Ff.prototype.start = function (a, b) {
    if (!this.h) return null;
    var c = yf() || xf();
    a = new Bf(a, b, c);
    b = "goog_" + a.label + "_" + a.uniqueId + "_start";
    Cf && Ef() && Cf.mark(b);
    return a;
  };
  Ff.prototype.end = function (a) {
    if (this.h && "number" === typeof a.value) {
      var b = yf() || xf();
      a.duration = b - a.value;
      b = "goog_" + a.label + "_" + a.uniqueId + "_end";
      Cf && Ef() && Cf.mark(b);
      this.G(a);
    }
  };
  var If = function () {
    var a = Hf;
    this.l = sf;
    this.A = "jserror";
    this.o = !0;
    this.h = null;
    this.C = this.Ha;
    this.g = void 0 === a ? null : a;
    this.w = !1;
  };
  l = If.prototype;
  l.pinger = function () {
    return this.l;
  };
  l.cc = function (a) {
    this.h = a;
  };
  l.Qc = function (a) {
    this.A = a;
  };
  l.Rc = function (a) {
    this.o = a;
  };
  l.Sc = function (a) {
    this.w = a;
  };
  l.Xa = function (a, b, c) {
    try {
      if (this.g && this.g.h) {
        var d = this.g.start(a.toString(), 3);
        var e = b();
        this.g.end(d);
      } else e = b();
    } catch (g) {
      b = this.o;
      try {
        Gf(d);
        var f = new $e(g, { message: Jf(g) });
        b = this.C(a, f, void 0, c);
      } catch (h) {
        this.Ha(217, h);
      }
      if (!b) throw g;
    }
    return e;
  };
  l.Mc = function (a, b, c, d) {
    var e = this;
    return function (f) {
      for (var g = [], h = 0; h < arguments.length; ++h)
        g[h - 0] = arguments[h];
      return e.Xa(
        a,
        function () {
          return b.apply(c, g);
        },
        d
      );
    };
  };
  l.Ha = function (a, b, c, d, e) {
    e = e || this.A;
    try {
      var f = new jf();
      f.o = !0;
      of(f, 1, "context", a);
      af(b) || (b = new $e(b, { message: Jf(b) }));
      b.msg && of(f, 2, "msg", b.msg.substring(0, 512));
      var g = b.meta || {};
      if (this.h)
        try {
          this.h(g);
        } catch (k) {}
      if (d)
        try {
          d(g);
        } catch (k) {}
      nf(f, 3, [g]);
      var h = hf();
      h.h && of(f, 4, "top", h.h.url || "");
      of(f, 5, "url", h.g.url || "");
      vf(this.l, e, f, this.w, c);
    } catch (k) {
      try {
        vf(
          this.l,
          e,
          { context: "ecmserr", rctx: a, msg: Jf(k), url: h && h.g.url },
          this.w,
          c
        );
      } catch (m) {}
    }
    return this.o;
  };
  var Jf = function (a) {
    var b = a.toString();
    a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
    a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
    if (a.stack) {
      a = a.stack;
      var c = b;
      try {
        -1 == a.indexOf(c) && (a = c + "\n" + a);
        for (var d; a != d; )
          (d = a),
            (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"));
        b = a.replace(/\n */g, "\n");
      } catch (e) {
        b = c;
      }
    }
    return b;
  };
  var Kf = function () {
    this.h = "jserror";
    this.l = !1;
    this.g = null;
    this.o = !1;
    this.A = Math.random();
    this.w = this.Ha;
  };
  l = Kf.prototype;
  l.Qc = function (a) {
    this.h = a;
  };
  l.cc = function (a) {
    this.g = a;
  };
  l.Rc = function (a) {
    this.l = a;
  };
  l.Sc = function (a) {
    this.o = a;
  };
  l.Ha = function (a, b, c, d, e) {
    e = void 0 === e ? this.h : e;
    if ((this.o ? this.A : Math.random()) > (void 0 === c ? 0.01 : c))
      return this.l;
    af(b) || (b = new $e(b, { context: a, id: e }));
    if (d || this.g) (b.meta = {}), this.g && this.g(b.meta), d && d(b.meta);
    q.google_js_errors = q.google_js_errors || [];
    q.google_js_errors.push(b);
    q.error_rep_loaded ||
      ((b = q.document),
      (a = b.createElement("script")),
      zc(
        a,
        ne(
          q.location.protocol +
            "//pagead2.googlesyndication.com/pagead/js/err_rep.js"
        )
      ),
      (b = b.getElementsByTagName("script")[0]) &&
        b.parentNode &&
        b.parentNode.insertBefore(a, b),
      (q.error_rep_loaded = !0));
    return this.l;
  };
  l.Xa = function (a, b, c) {
    try {
      var d = b();
    } catch (e) {
      if (!this.w(a, e, 0.01, c, this.h)) throw e;
    }
    return d;
  };
  l.Mc = function (a, b, c, d) {
    var e = this;
    return function (f) {
      for (var g = [], h = 0; h < arguments.length; ++h)
        g[h - 0] = arguments[h];
      return e.Xa(
        a,
        function () {
          return b.apply(c, g);
        },
        d
      );
    };
  };
  var sf,
    Lf,
    Mf,
    tf = Ze(),
    Hf = new Ff(1, tf);
  (function () {
    sf = new rf();
    "number" !== typeof tf.google_srt && (tf.google_srt = Math.random());
    uf();
    Lf = new If();
    Lf.cc(function (b) {
      var c = B.jerExpIds;
      if (Fa(c) && 0 !== c.length) {
        var d = b.eid;
        d
          ? ((c = [].concat(ca(d.split(",")), ca(c))),
            eb(c),
            (b.eid = c.join(",")))
          : (b.eid = c.join(","));
      }
      Mf && (b.jc = Mf);
      (c = B.jerUserAgent) && (b.useragent = c);
    });
    Lf.Sc(!0);
    "complete" == tf.document.readyState
      ? tf.google_measure_js_timing || Hf.C()
      : Hf.h &&
        Ee(tf, "load", function () {
          tf.google_measure_js_timing || Hf.C();
        });
    var a = Id.currentScript;
    Mf = a ? a.dataset.jc : "";
  })();
  var Nf = function (a) {
    for (var b = 0, c = a, d = 0; a && a != a.parent; )
      (a = a.parent), d++, ue(a) && ((c = a), (b = d));
    return { la: c, level: b };
  };
  var Of = function () {
      this.S = {};
    },
    Rf = function () {
      if (Pf) var a = Pf;
      else {
        a = ((a = We()) ? (ue(a.master) ? a.master : null) : null) || Ze();
        var b = a.google_persistent_state_async;
        a =
          null != b &&
          "object" == typeof b &&
          null != b.S &&
          "object" == typeof b.S
            ? (Pf = b)
            : (a.google_persistent_state_async = Pf = new Of());
      }
      b = Ze();
      var c = We(b);
      c
        ? ((c = c || We())
            ? ((b = c.pageViewId),
              (c = c.clientId),
              "string" === typeof c && (b += c.replace(/\D/g, "").substr(0, 6)))
            : (b = null),
          (b = +b))
        : ((b = Nf(b).la),
          (c = b.google_global_correlator) ||
            (b.google_global_correlator = c =
              1 + Math.floor(Math.random() * Math.pow(2, 43))),
          (b = c));
      c = Qf[7] || "google_ps_7";
      a = a.S;
      var d = a[c];
      a = void 0 === d ? (a[c] = b) : d;
      return a;
    },
    Pf = null,
    Sf = {},
    Qf =
      ((Sf[8] = "google_prev_ad_formats_by_region"),
      (Sf[9] = "google_prev_ad_slotnames_by_region"),
      Sf);
  var Vf = function (a) {
      var b = [];
      Tf(new Uf(), a, b);
      return b.join("");
    },
    Uf = function () {},
    Tf = function (a, b, c) {
      if (null == b) c.push("null");
      else {
        if ("object" == typeof b) {
          if (Fa(b)) {
            var d = b;
            b = d.length;
            c.push("[");
            for (var e = "", f = 0; f < b; f++)
              c.push(e), Tf(a, d[f], c), (e = ",");
            c.push("]");
            return;
          }
          if (
            b instanceof String ||
            b instanceof Number ||
            b instanceof Boolean
          )
            b = b.valueOf();
          else {
            c.push("{");
            e = "";
            for (d in b)
              Object.prototype.hasOwnProperty.call(b, d) &&
                ((f = b[d]),
                "function" != typeof f &&
                  (c.push(e), Wf(d, c), c.push(":"), Tf(a, f, c), (e = ",")));
            c.push("}");
            return;
          }
        }
        switch (typeof b) {
          case "string":
            Wf(b, c);
            break;
          case "number":
            c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
            break;
          case "boolean":
            c.push(String(b));
            break;
          case "function":
            c.push("null");
            break;
          default:
            throw Error("Unknown type: " + typeof b);
        }
      }
    },
    Xf = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b",
    },
    Yf = /\uffff/.test("\uffff")
      ? /[\\"\x00-\x1f\x7f-\uffff]/g
      : /[\\"\x00-\x1f\x7f-\xff]/g,
    Wf = function (a, b) {
      b.push(
        '"',
        a.replace(Yf, function (c) {
          var d = Xf[c];
          d ||
            ((d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1)),
            (Xf[c] = d));
          return d;
        }),
        '"'
      );
    };
  var Zf = function () {
      this.g = null;
      this.h = "missing-id";
    },
    ag = function (a) {
      var b = null;
      try {
        b = document.getElementsByClassName("lima-exp-data");
      } catch (c) {
        return $f("missing-element", a.h), (a.g = ""), null;
      }
      if (1 < b.length) return $f("multiple-elements", a.h), (a.g = ""), null;
      b = b[0];
      return b ? b.innerHTML : ($f("missing-element", a.h), (a.g = ""), null);
    },
    cg = function () {
      var a = bg,
        b = ag(a);
      if (null !== b)
        if (
          /^\s*$/.test(b)
            ? 0
            : /^[\],:{}\s\u2028\u2029]*$/.test(
                b
                  .replace(/\\["\\\/bfnrtu]/g, "@")
                  .replace(
                    /(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                    "]"
                  )
                  .replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")
              )
        ) {
          var c = JSON.parse(b);
          b = c.experimentFlags;
          c = c.binaryIdentifier;
          var d = "string" === typeof c;
          d && (a.h = c);
          "string" !== typeof b
            ? ($f("missing-flags", a.h), (a.g = ""))
            : (d || $f("missing-binary-id", a.h), (a.g = b));
        } else $f("invalid-json", a.h), (a.g = "");
    };
  Zf.prototype.reset = function () {
    this.g = null;
    this.h = "missing-id";
  };
  var dg = function (a, b, c) {
      this.id = a;
      this.M = b;
      this.g = c;
      this.bc = !1;
    },
    eg = function (a) {
      return a.bc || a.g;
    },
    fg = function () {
      this.g = [];
    },
    gg = function () {
      this.g = new Map();
      this.h = !1;
      this.o = new fg();
      this.w = new dg(0, 0, !1);
      this.l = [this.o];
    },
    G = function (a) {
      var b = hg;
      if (b.h || b.g.has(a.id) || (null == a.M && null == a.control))
        return b.w;
      var c = b.o;
      if (null != a.control)
        for (var d = ba(b.l), e = d.next(); !e.done; e = d.next()) {
          if (((e = e.value), e.g.includes(a.control))) {
            c = e;
            break;
          }
        }
      else null != a.xc && (c = a.xc);
      d = 0;
      null != a.control ? (d = a.control.M) : null != a.M && (d = a.M);
      a = new dg(a.id, d, !!a.Hh);
      c.g.push(a);
      b.l.includes(c) || b.l.push(c);
      b.g.set(a.id, a);
      return a;
    },
    ig = function () {
      var a = hg;
      return [].concat(ca(a.g.keys())).filter(function (b) {
        return eg(this.g.get(b));
      }, a);
    },
    jg = function (a) {
      var b = hg;
      b.h || (a.g(b.l, b.g), (b.h = !0));
    };
  gg.prototype.reset = function () {
    for (var a = ba(this.g), b = a.next(); !b.done; b = a.next())
      (b = ba(b.value)), b.next(), (b.next().value.bc = !1);
    this.h = !1;
  };
  var hg = new gg();
  var kg = function () {};
  kg.prototype.g = function (a) {
    a = ba(a);
    for (var b = a.next(); !b.done; b = a.next()) {
      var c = 0,
        d = Math.floor(1e3 * Math.random());
      b = ba(b.value.g);
      for (var e = b.next(); !e.done; e = b.next())
        if (((e = e.value), (c += e.M), d < c)) {
          e.bc = !0;
          break;
        }
    }
  };
  var lg = function (a) {
    this.h = a;
  };
  lg.prototype.g = function (a, b) {
    a = ba(this.h);
    for (var c = a.next(); !c.done; c = a.next())
      if ((c = b.get(c.value))) c.bc = !0;
  };
  var mg = function (a) {
      return (
        { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
          a.visibilityState ||
            a.webkitVisibilityState ||
            a.mozVisibilityState ||
            ""
        ] || 0
      );
    },
    ng = function (a) {
      var b;
      a.visibilityState
        ? (b = "visibilitychange")
        : a.mozVisibilityState
        ? (b = "mozvisibilitychange")
        : a.webkitVisibilityState && (b = "webkitvisibilitychange");
      return b;
    };
  var og = function (a) {
    a = a._google_rum_ns_ = a._google_rum_ns_ || {};
    return (a.pq = a.pq || []);
  };
  var pg = function (a, b, c) {
      ve(b, function (d, e) {
        var f = c && c[e];
        (!d && 0 !== d) ||
          f ||
          ((a +=
            "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d))),
          c && (c[e] = !0));
      });
      return a;
    },
    wg = function (a, b, c, d, e, f, g, h) {
      f = void 0 === f ? Infinity : f;
      g = void 0 === g ? !1 : g;
      Ff.call(this, a, h);
      var k = this;
      this.I = 0;
      this.L = f;
      this.ca = b;
      this.N = c;
      this.$ = d;
      this.ma = e;
      this.X = !(
        "csi.gstatic.com" !== this.N ||
        !this.g.navigator ||
        !this.g.navigator.sendBeacon
      );
      this.w = {};
      this.J = {};
      (this.g.performance && this.g.performance.now) || qg(this, "dat", 1);
      this.g.navigator &&
        this.g.navigator.deviceMemory &&
        qg(this, "dmc", this.g.navigator.deviceMemory);
      this.V = !g;
      this.O = function () {
        k.g.setTimeout(function () {
          return rg(k);
        }, 1100);
      };
      this.ra = [];
      this.Z = function () {
        sg(k, 1);
      };
      this.P = function () {
        sg(k, 2);
      };
      this.pa = nb(function () {
        rg(k);
      });
      this.Da = function () {
        var n = k.g.document;
        (null != n.hidden
          ? n.hidden
          : null != n.mozHidden
          ? n.mozHidden
          : null != n.webkitHidden && n.webkitHidden) && k.pa();
      };
      this.D = this.g.setTimeout(function () {
        return rg(k);
      }, 5e3);
      this.A = {};
      this.o = b.length + c.length + d.length + e.length + 3;
      this.l = 0;
      z(this.events, function (n) {
        return tg(k, n);
      });
      this.H = [];
      a = og(this.g);
      var m = function (n) {
        var w = n[0];
        n = n[1];
        var x = w.length + n.length + 2;
        8e3 < k.o + k.l + x && rg(k);
        k.H.push([w, n]);
        k.l += x;
        6e3 <= k.o + k.l && rg(k);
        return 0;
      };
      z(a, function (n) {
        return m(n);
      });
      a.length = 0;
      a.push = m;
      ug(this);
      vg(this);
    };
  p(wg, Ff);
  var vg = function (a) {
      "complete" === a.g.document.readyState
        ? a.g.setTimeout(function () {
            return rg(a);
          }, 0)
        : Ee(a.g, "load", a.O);
      var b = ng(a.g.document);
      "undefined" !== typeof b && Ee(a.g, b, a.Da);
      Ee(a.g, "unload", a.Z);
      Ee(a.g, "pagehide", a.P);
    },
    qg = function (a, b, c) {
      c = String(c);
      a.o =
        null != a.w[b]
          ? a.o + (c.length - a.w[b].length)
          : a.o + (b.length + c.length + 2);
      a.w[b] = c;
    },
    xg = function (a) {
      null != a.w.uet && ((a.o -= 3 + a.w.uet.length + 2), delete a.w.uet);
    },
    yg = function (a, b, c, d, e) {
      e = void 0 === e ? "" : e;
      var f =
        null == a.A[b]
          ? b.length + c.length + 2
          : d
          ? c.length + e.length
          : c.length - a.A[b].length;
      8e3 < a.o + a.l + f && (rg(a), (f = b.length + c.length + 2));
      a.A[b] = d && null != a.A[b] ? a.A[b] + ("" + e + c) : c;
      a.l += f;
      6e3 <= a.o + a.l && rg(a);
    },
    rg = function (a) {
      if (a.h && a.V) {
        try {
          if (a.l) {
            var b = a.A;
            a.I++;
            var c = zg(a, b);
            b = !1;
            try {
              b = a.X && a.g.navigator && a.g.navigator.sendBeacon(c, null);
            } catch (d) {
              a.X = !1;
            }
            b || He(a.g, c);
            ug(a);
            a.I === a.L && a.C();
          }
        } catch (d) {
          new Kf().Ha(358, d);
        }
        a.A = {};
        a.l = 0;
        a.events.length = 0;
        a.g.clearTimeout(a.D);
        a.D = 0;
      }
    },
    zg = function (a, b) {
      var c = a.ca + "//" + a.N + a.$ + a.ma,
        d = {};
      c = pg(c, a.w, d);
      c = pg(c, b, d);
      a.g.google_timing_params &&
        ((c = pg(c, a.g.google_timing_params, d)),
        (a.g.google_timing_params = void 0));
      z(a.H, function (e) {
        var f = ba(e);
        e = f.next().value;
        f = f.next().value;
        var g = {};
        c = pg(c, ((g[e] = f), g));
      });
      a.H.length = 0;
      return c;
    },
    ug = function (a) {
      qg(a, "puid", (a.I + 1).toString(36) + "~" + u().toString(36));
    },
    tg = function (a, b) {
      var c = "met." + b.type,
        d =
          "number" === typeof b.value
            ? Math.round(b.value).toString(36)
            : b.value,
        e = Math.round(b.duration);
      b =
        "" +
        b.label +
        (null != b.slotId ? "_" + b.slotId : "") +
        ("." + d) +
        (0 < e ? "_" + e.toString(36) : "");
      yg(a, c, b, !0, "~");
    };
  wg.prototype.G = function (a) {
    this.h && this.I < this.L && (Ff.prototype.G.call(this, a), tg(this, a));
  };
  wg.prototype.F = function () {
    this.V = !0;
    rg(this);
  };
  wg.prototype.C = function () {
    Ff.prototype.C.call(this);
    this.g.clearTimeout(this.D);
    this.l = this.D = 0;
    this.A = {};
    Db(this.J);
    Db(this.w);
    Fe(this.g, "load", this.O);
    Fe(this.g, "unload", this.Z);
    Fe(this.g, "pagehide", this.P);
  };
  var sg = function (a, b) {
    qg(a, "uet", b);
    z(a.ra, function (c) {
      try {
        c();
      } catch (d) {}
    });
    Ge(a.g);
    rg(a);
    xg(a);
  };
  var I = function () {
    this.g = new wg(
      1,
      "https:",
      "csi.gstatic.com",
      "/csi?v=2&s=",
      "ima",
      void 0,
      !0
    );
    var a = Rf();
    null != a && qg(this.g, "c", a);
  };
  I.prototype.F = function () {
    this.g.F();
  };
  var Ag = function (a, b, c) {
      if (null != c) {
        a = a.g;
        var d = b + "=" + c;
        a.J[d] || (yg(a, b, c, !1), 1e3 > d.length && (a.J[d] = !0));
      }
    },
    Bg = function (a, b) {
      a = a.g;
      var c = xf() - 0;
      a.h && a.G(new Bf(b, 4, c, 0, void 0));
    };
  Da(I);
  var Cg = function (a, b) {
    this.h = a;
    this.l = b;
  };
  p(Cg, lg);
  Cg.prototype.g = function (a, b) {
    lg.prototype.g.call(this, a, b);
    var c = [];
    a = [];
    for (var d = ba(this.h), e = d.next(); !e.done; e = d.next())
      (e = e.value), b.get(e) ? c.push(e) : a.push(e);
    b = c.map(String).join(",");
    a = a.map(String).join(",");
    Ag(I.B(), "sei", b);
    Ag(I.B(), "nsei", a);
    Ag(I.B(), "bi", this.l);
  };
  var Dg = function () {
    Zf.apply(this, arguments);
  };
  p(Dg, Zf);
  var $f = function (a, b) {
    var c = I.B();
    Ag(c, "eee", a);
    Ag(c, "bi", b);
  };
  Da(Dg);
  function Eg() {
    return Fg.split(",")
      .map(function (a) {
        return parseInt(a, 10);
      })
      .filter(function (a) {
        return !isNaN(a);
      });
  }
  var Gg = new fg();
  G({ id: 418572103, M: 0 });
  G({ id: 420706097, M: 10 });
  G({ id: 420706098, M: 10 });
  G({ id: 21061786, M: 10 });
  G({ id: 21061817, M: 10 });
  G({ id: 21061824, M: 50 });
  G({ id: 21061888, M: 10 });
  G({ id: 21061893, M: 10 });
  G({ id: 21062100, M: 0 });
  G({ id: 21063062, M: 0 });
  G({ id: 420706109, M: 10 });
  G({ id: 420706110, M: 10 });
  G({ id: 21062347, M: 0 });
  G({ id: 21063070, M: 0 });
  G({ id: 21063072, M: 0 });
  G({ id: 21063100, M: 0 });
  G({ id: 420706116, M: 0 });
  G({ id: 420706105, M: 10 });
  G({ id: 420706106, M: 10 });
  G({ id: 75259402, M: 10 });
  G({ id: 75259403, M: 10 });
  G({ id: 21064018, M: 0 });
  G({ id: 21064020, M: 0 });
  G({ id: 21064022, M: 0 });
  G({ id: 21064024, M: 0 });
  G({ id: 21064075, M: 0 });
  G({ id: 21064201, M: 50 });
  var Hg = G({ id: 210640812, M: 10 });
  G({ id: 420706142, M: 0 });
  G({ id: 21064347, M: 0 });
  G({ id: 21064362, M: 0 });
  G({ id: 324123050, M: 10 });
  G({ id: 370204079, M: 10, xc: Gg });
  G({ id: 72811302, M: 0 });
  G({ id: 72811303, M: 0 });
  G({ id: 72811304, M: 0 });
  G({ id: 72811305, M: 0 });
  G({ id: 72811306, M: 0 });
  G({ id: 72811307, M: 0 });
  G({ id: 21064565, M: 0 });
  G({ id: 668123728, M: 20, xc: Gg });
  G({ id: 21064567, M: 0 });
  G({ id: 21064572, M: 10 });
  G({ id: 21064573, M: 10 });
  G({ id: 418572001, M: 0 });
  G({ id: 40819804, M: 10 });
  var Ig = G({ id: 40819805, M: 10 });
  G({ id: 504733020, M: 10 });
  var Lg = G({ id: 50433021, M: 10 });
  G({ id: 418572006, M: 10 });
  if ("undefined" === typeof window.v8_flag_map) {
    var bg = Dg.B();
    null === bg.g && cg();
    var Fg = bg.g,
      Mg;
    null === bg.g && cg();
    Mg = bg.h;
    if (Fg) {
      var Ng = new Cg(Eg(), Mg);
      jg(Ng);
    }
  }
  hg.reset();
  jg(new kg());
  q.console &&
    "function" === typeof q.console.log &&
    Ma(q.console.log, q.console);
  var Og = function (a) {
    for (var b = [], c = (a = E(a.ownerDocument)); c != a.top; c = c.parent)
      if (c.frameElement) b.push(c.frameElement);
      else break;
    return b;
  };
  var Pg = !Qc || 9 <= Number(gd),
    Qg = Qc && !fd("9"),
    Rg = (function () {
      if (!q.addEventListener || !Object.defineProperty) return !1;
      var a = !1,
        b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
      try {
        q.addEventListener("test", Ca, b), q.removeEventListener("test", Ca, b);
      } catch (c) {}
      return a;
    })();
  var J = function () {
    this.I = this.I;
    this.G = this.G;
  };
  J.prototype.I = !1;
  J.prototype.fb = function () {
    return this.I;
  };
  J.prototype.Y = function () {
    this.I || ((this.I = !0), this.R());
  };
  var Ug = function (a, b) {
      Sg(a, Na(Tg, b));
    },
    Sg = function (a, b) {
      a.I ? b() : (a.G || (a.G = []), a.G.push(b));
    };
  J.prototype.R = function () {
    if (this.G) for (; this.G.length; ) this.G.shift()();
  };
  var Tg = function (a) {
    a && "function" == typeof a.Y && a.Y();
  };
  var Vg = function (a, b) {
    this.type = a;
    this.g = this.target = b;
    this.Id = !0;
  };
  Vg.prototype.l = function () {
    this.Id = !1;
  };
  var Xg = function (a, b) {
    Vg.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.h = null;
    if (a) {
      var c = (this.type = a.type),
        d =
          a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : null;
      this.target = a.target || a.srcElement;
      this.g = b;
      (b = a.relatedTarget)
        ? Sc && (Mc(b, "nodeName") || (b = null))
        : "mouseover" == c
        ? (b = a.fromElement)
        : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      d
        ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
          (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
          (this.screenX = d.screenX || 0),
          (this.screenY = d.screenY || 0))
        : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
          (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
          (this.screenX = a.screenX || 0),
          (this.screenY = a.screenY || 0));
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType =
        "string" === typeof a.pointerType
          ? a.pointerType
          : Wg[a.pointerType] || "";
      this.state = a.state;
      this.h = a;
      a.defaultPrevented && this.l();
    }
  };
  y(Xg, Vg);
  var Wg = { 2: "touch", 3: "pen", 4: "mouse" };
  Xg.prototype.l = function () {
    Xg.wa.l.call(this);
    var a = this.h;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), Qg))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  var Yg = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    Zg = function (a) {
      return !(!a || !a[Yg]);
    },
    $g = 0;
  var ah = function (a, b, c, d, e) {
      this.listener = a;
      this.g = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.Ob = e;
      this.key = ++$g;
      this.ib = this.Jb = !1;
    },
    bh = function (a) {
      a.ib = !0;
      a.listener = null;
      a.g = null;
      a.src = null;
      a.Ob = null;
    };
  var ch = function (a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  };
  ch.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.h++);
    var g = dh(a, b, d, e);
    -1 < g
      ? ((b = a[g]), c || (b.Jb = !1))
      : ((b = new ah(b, this.src, f, !!d, e)), (b.Jb = c), a.push(b));
    return b;
  };
  var eh = function (a, b) {
      var c = b.type;
      c in a.g &&
        ab(a.g[c], b) &&
        (bh(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
    },
    fh = function (a, b, c, d, e) {
      a = a.g[b.toString()];
      b = -1;
      a && (b = dh(a, c, d, e));
      return -1 < b ? a[b] : null;
    },
    dh = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.ib && f.listener == b && f.capture == !!c && f.Ob == d) return e;
      }
      return -1;
    };
  var gh = "closure_lm_" + ((1e6 * Math.random()) | 0),
    hh = {},
    ih = 0,
    kh = function (a, b, c, d, e) {
      if (d && d.once) return jh(a, b, c, d, e);
      if (Fa(b)) {
        for (var f = 0; f < b.length; f++) kh(a, b[f], c, d, e);
        return null;
      }
      c = lh(c);
      return Zg(a)
        ? a.T(b, c, Ha(d) ? !!d.capture : !!d, e)
        : mh(a, b, c, !1, d, e);
    },
    mh = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = Ha(e) ? !!e.capture : !!e,
        h = nh(a);
      h || (a[gh] = h = new ch(a));
      c = h.add(b, c, d, g, f);
      if (c.g) return c;
      d = oh();
      c.g = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener)
        Rg || (e = g),
          void 0 === e && (e = !1),
          a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(ph(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      ih++;
      return c;
    },
    oh = function () {
      var a = qh,
        b = Pg
          ? function (c) {
              return a.call(b.src, b.listener, c);
            }
          : function (c) {
              c = a.call(b.src, b.listener, c);
              if (!c) return c;
            };
      return b;
    },
    jh = function (a, b, c, d, e) {
      if (Fa(b)) {
        for (var f = 0; f < b.length; f++) jh(a, b[f], c, d, e);
        return null;
      }
      c = lh(c);
      return Zg(a)
        ? a.l.add(String(b), c, !0, Ha(d) ? !!d.capture : !!d, e)
        : mh(a, b, c, !0, d, e);
    },
    rh = function (a, b, c, d, e) {
      if (Fa(b)) for (var f = 0; f < b.length; f++) rh(a, b[f], c, d, e);
      else
        (d = Ha(d) ? !!d.capture : !!d),
          (c = lh(c)),
          Zg(a)
            ? a.Ca(b, c, d, e)
            : a && (a = nh(a)) && (b = fh(a, b, c, d, e)) && sh(b);
    },
    sh = function (a) {
      if ("number" !== typeof a && a && !a.ib) {
        var b = a.src;
        if (Zg(b)) eh(b.l, a);
        else {
          var c = a.type,
            d = a.g;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(ph(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          ih--;
          (c = nh(b))
            ? (eh(c, a), 0 == c.h && ((c.src = null), (b[gh] = null)))
            : bh(a);
        }
      }
    },
    ph = function (a) {
      return a in hh ? hh[a] : (hh[a] = "on" + a);
    },
    uh = function (a, b, c, d) {
      var e = !0;
      if ((a = nh(a)))
        if ((b = a.g[b.toString()]))
          for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f &&
              f.capture == c &&
              !f.ib &&
              ((f = th(f, d)), (e = e && !1 !== f));
          }
      return e;
    },
    th = function (a, b) {
      var c = a.listener,
        d = a.Ob || a.src;
      a.Jb && sh(a);
      return c.call(d, b);
    },
    qh = function (a, b) {
      if (a.ib) return !0;
      if (!Pg) {
        var c = b || Ba("window.event");
        b = new Xg(c, this);
        var d = !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
          a: {
            var e = !1;
            if (0 == c.keyCode)
              try {
                c.keyCode = -1;
                break a;
              } catch (g) {
                e = !0;
              }
            if (e || void 0 == c.returnValue) c.returnValue = !0;
          }
          c = [];
          for (e = b.g; e; e = e.parentNode) c.push(e);
          a = a.type;
          for (e = c.length - 1; 0 <= e; e--) {
            b.g = c[e];
            var f = uh(c[e], a, !0, b);
            d = d && f;
          }
          for (e = 0; e < c.length; e++)
            (b.g = c[e]), (f = uh(c[e], a, !1, b)), (d = d && f);
        }
        return d;
      }
      return th(a, new Xg(b, this));
    },
    nh = function (a) {
      a = a[gh];
      return a instanceof ch ? a : null;
    },
    vh = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    lh = function (a) {
      if (t(a)) return a;
      a[vh] ||
        (a[vh] = function (b) {
          return a.handleEvent(b);
        });
      return a[vh];
    };
  var K = function () {
    J.call(this);
    this.l = new ch(this);
    this.Da = this;
    this.ma = null;
  };
  y(K, J);
  K.prototype[Yg] = !0;
  l = K.prototype;
  l.addEventListener = function (a, b, c, d) {
    kh(this, a, b, c, d);
  };
  l.removeEventListener = function (a, b, c, d) {
    rh(this, a, b, c, d);
  };
  l.dispatchEvent = function (a) {
    var b,
      c = this.ma;
    if (c) for (b = []; c; c = c.ma) b.push(c);
    c = this.Da;
    var d = a.type || a;
    if ("string" === typeof a) a = new Vg(a, c);
    else if (a instanceof Vg) a.target = a.target || c;
    else {
      var e = a;
      a = new Vg(d, c);
      Gb(a, e);
    }
    e = !0;
    if (b)
      for (var f = b.length - 1; 0 <= f; f--) {
        var g = (a.g = b[f]);
        e = wh(g, d, !0, a) && e;
      }
    g = a.g = c;
    e = wh(g, d, !0, a) && e;
    e = wh(g, d, !1, a) && e;
    if (b)
      for (f = 0; f < b.length; f++)
        (g = a.g = b[f]), (e = wh(g, d, !1, a) && e);
    return e;
  };
  l.R = function () {
    K.wa.R.call(this);
    if (this.l) {
      var a = this.l,
        b = 0,
        c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++) ++b, bh(d[e]);
        delete a.g[c];
        a.h--;
      }
    }
    this.ma = null;
  };
  l.T = function (a, b, c, d) {
    return this.l.add(String(a), b, !1, c, d);
  };
  l.Ca = function (a, b, c, d) {
    var e = this.l;
    a = String(a).toString();
    if (a in e.g) {
      var f = e.g[a];
      b = dh(f, b, c, d);
      -1 < b &&
        (bh(f[b]),
        Array.prototype.splice.call(f, b, 1),
        0 == f.length && (delete e.g[a], e.h--));
    }
  };
  var wh = function (a, b, c, d) {
    b = a.l.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if (g && !g.ib && g.capture == c) {
        var h = g.listener,
          k = g.Ob || g.src;
        g.Jb && eh(a.l, g);
        e = !1 !== h.call(k, d) && e;
      }
    }
    return e && 0 != d.Id;
  };
  var xh = function (a, b) {
    this.l = a;
    this.o = b;
    this.h = 0;
    this.g = null;
  };
  xh.prototype.get = function () {
    if (0 < this.h) {
      this.h--;
      var a = this.g;
      this.g = a.next;
      a.next = null;
    } else a = this.l();
    return a;
  };
  var yh = function (a, b) {
    a.o(b);
    100 > a.h && (a.h++, (b.next = a.g), (a.g = b));
  };
  var zh = function (a) {
      q.setTimeout(function () {
        throw a;
      }, 0);
    },
    Ah,
    Bh = function () {
      var a = q.MessageChannel;
      "undefined" === typeof a &&
        "undefined" !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !A("Presto") &&
        (a = function () {
          var e = de(document, "IFRAME");
          e.style.display = "none";
          yc(e);
          document.documentElement.appendChild(e);
          var f = e.contentWindow;
          e = f.document;
          e.open();
          e.write(uc(xc));
          e.close();
          var g = "callImmediate" + Math.random(),
            h =
              "file:" == f.location.protocol
                ? "*"
                : f.location.protocol + "//" + f.location.host;
          e = Ma(function (k) {
            if (("*" == h || k.origin == h) && k.data == g)
              this.port1.onmessage();
          }, this);
          f.addEventListener("message", e, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              f.postMessage(g, h);
            },
          };
        });
      if ("undefined" !== typeof a && !oc()) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.ed;
            c.ed = null;
            e();
          }
        };
        return function (e) {
          d.next = { ed: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return "undefined" !== typeof document &&
        "onreadystatechange" in de(document, "SCRIPT")
        ? function (e) {
            var f = de(document, "SCRIPT");
            f.onreadystatechange = function () {
              f.onreadystatechange = null;
              f.parentNode.removeChild(f);
              f = null;
              e();
              e = null;
            };
            document.documentElement.appendChild(f);
          }
        : function (e) {
            q.setTimeout(e, 0);
          };
    };
  var Ch = function () {
      this.h = this.g = null;
    },
    Eh = new xh(
      function () {
        return new Dh();
      },
      function (a) {
        a.reset();
      }
    );
  Ch.prototype.add = function (a, b) {
    var c = Eh.get();
    c.set(a, b);
    this.h ? (this.h.next = c) : (this.g = c);
    this.h = c;
  };
  var Gh = function () {
      var a = Fh,
        b = null;
      a.g &&
        ((b = a.g), (a.g = a.g.next), a.g || (a.h = null), (b.next = null));
      return b;
    },
    Dh = function () {
      this.next = this.h = this.g = null;
    };
  Dh.prototype.set = function (a, b) {
    this.g = a;
    this.h = b;
    this.next = null;
  };
  Dh.prototype.reset = function () {
    this.next = this.h = this.g = null;
  };
  var Kh = function (a, b) {
      Hh || Ih();
      Jh || (Hh(), (Jh = !0));
      Fh.add(a, b);
    },
    Hh,
    Ih = function () {
      if (q.Promise && q.Promise.resolve) {
        var a = q.Promise.resolve(void 0);
        Hh = function () {
          a.then(Lh);
        };
      } else
        Hh = function () {
          var b = Lh;
          !t(q.setImmediate) ||
          (q.Window &&
            q.Window.prototype &&
            !A("Edge") &&
            q.Window.prototype.setImmediate == q.setImmediate)
            ? (Ah || (Ah = Bh()), Ah(b))
            : q.setImmediate(b);
        };
    },
    Jh = !1,
    Fh = new Ch(),
    Lh = function () {
      for (var a; (a = Gh()); ) {
        try {
          a.g.call(a.h);
        } catch (b) {
          zh(b);
        }
        yh(Eh, a);
      }
      Jh = !1;
    };
  var Nh = function (a, b) {
      this.g = 0;
      this.C = void 0;
      this.o = this.h = this.l = null;
      this.w = this.A = !1;
      if (a != Ca)
        try {
          var c = this;
          a.call(
            b,
            function (d) {
              Mh(c, 2, d);
            },
            function (d) {
              Mh(c, 3, d);
            }
          );
        } catch (d) {
          Mh(this, 3, d);
        }
    },
    Oh = function () {
      this.next = this.context = this.h = this.l = this.g = null;
      this.o = !1;
    };
  Oh.prototype.reset = function () {
    this.context = this.h = this.l = this.g = null;
    this.o = !1;
  };
  var Ph = new xh(
      function () {
        return new Oh();
      },
      function (a) {
        a.reset();
      }
    ),
    Qh = function (a, b, c) {
      var d = Ph.get();
      d.l = a;
      d.h = b;
      d.context = c;
      return d;
    },
    Rh = function (a) {
      return new Nh(function (b, c) {
        c(a);
      });
    };
  Nh.prototype.then = function (a, b, c) {
    return Sh(this, t(a) ? a : null, t(b) ? b : null, c);
  };
  Nh.prototype.$goog_Thenable = !0;
  Nh.prototype.cancel = function (a) {
    if (0 == this.g) {
      var b = new Th(a);
      Kh(function () {
        Uh(this, b);
      }, this);
    }
  };
  var Uh = function (a, b) {
      if (0 == a.g)
        if (a.l) {
          var c = a.l;
          if (c.h) {
            for (
              var d = 0, e = null, f = null, g = c.h;
              g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d)));
              g = g.next
            )
              e || (f = g);
            e &&
              (0 == c.g && 1 == d
                ? Uh(c, b)
                : (f
                    ? ((d = f),
                      d.next == c.o && (c.o = d),
                      (d.next = d.next.next))
                    : Vh(c),
                  Wh(c, e, 3, b)));
          }
          a.l = null;
        } else Mh(a, 3, b);
    },
    Yh = function (a, b) {
      a.h || (2 != a.g && 3 != a.g) || Xh(a);
      a.o ? (a.o.next = b) : (a.h = b);
      a.o = b;
    },
    Sh = function (a, b, c, d) {
      var e = Qh(null, null, null);
      e.g = new Nh(function (f, g) {
        e.l = b
          ? function (h) {
              try {
                var k = b.call(d, h);
                f(k);
              } catch (m) {
                g(m);
              }
            }
          : f;
        e.h = c
          ? function (h) {
              try {
                var k = c.call(d, h);
                void 0 === k && h instanceof Th ? g(h) : f(k);
              } catch (m) {
                g(m);
              }
            }
          : g;
      });
      e.g.l = a;
      Yh(a, e);
      return e.g;
    };
  Nh.prototype.I = function (a) {
    this.g = 0;
    Mh(this, 2, a);
  };
  Nh.prototype.D = function (a) {
    this.g = 0;
    Mh(this, 3, a);
  };
  var Mh = function (a, b, c) {
      if (0 == a.g) {
        a === c &&
          ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
        a.g = 1;
        a: {
          var d = c,
            e = a.I,
            f = a.D;
          if (d instanceof Nh) {
            Yh(d, Qh(e || Ca, f || null, a));
            var g = !0;
          } else {
            if (d)
              try {
                var h = !!d.$goog_Thenable;
              } catch (m) {
                h = !1;
              }
            else h = !1;
            if (h) d.then(e, f, a), (g = !0);
            else {
              if (Ha(d))
                try {
                  var k = d.then;
                  if (t(k)) {
                    Zh(d, k, e, f, a);
                    g = !0;
                    break a;
                  }
                } catch (m) {
                  f.call(a, m);
                  g = !0;
                  break a;
                }
              g = !1;
            }
          }
        }
        g ||
          ((a.C = c),
          (a.g = b),
          (a.l = null),
          Xh(a),
          3 != b || c instanceof Th || $h(a, c));
      }
    },
    Zh = function (a, b, c, d, e) {
      var f = !1,
        g = function (k) {
          f || ((f = !0), c.call(e, k));
        },
        h = function (k) {
          f || ((f = !0), d.call(e, k));
        };
      try {
        b.call(a, g, h);
      } catch (k) {
        h(k);
      }
    },
    Xh = function (a) {
      a.A || ((a.A = !0), Kh(a.G, a));
    },
    Vh = function (a) {
      var b = null;
      a.h && ((b = a.h), (a.h = b.next), (b.next = null));
      a.h || (a.o = null);
      return b;
    };
  Nh.prototype.G = function () {
    for (var a; (a = Vh(this)); ) Wh(this, a, this.g, this.C);
    this.A = !1;
  };
  var Wh = function (a, b, c, d) {
      if (3 == c && b.h && !b.o) for (; a && a.w; a = a.l) a.w = !1;
      if (b.g) (b.g.l = null), ai(b, c, d);
      else
        try {
          b.o ? b.l.call(b.context) : ai(b, c, d);
        } catch (e) {
          bi.call(null, e);
        }
      yh(Ph, b);
    },
    ai = function (a, b, c) {
      2 == b ? a.l.call(a.context, c) : a.h && a.h.call(a.context, c);
    },
    $h = function (a, b) {
      a.w = !0;
      Kh(function () {
        a.w && bi.call(null, b);
      });
    },
    bi = zh,
    Th = function (a) {
      Oa.call(this, a);
    };
  y(Th, Oa);
  Th.prototype.name = "cancel";
  var ci = function (a, b) {
    K.call(this);
    this.h = a || 1;
    this.g = b || q;
    this.o = Ma(this.kg, this);
    this.w = u();
  };
  y(ci, K);
  l = ci.prototype;
  l.wb = !1;
  l.xa = null;
  l.setInterval = function (a) {
    this.h = a;
    this.xa && this.wb ? (this.stop(), this.start()) : this.xa && this.stop();
  };
  l.kg = function () {
    if (this.wb) {
      var a = u() - this.w;
      0 < a && a < 0.8 * this.h
        ? (this.xa = this.g.setTimeout(this.o, this.h - a))
        : (this.xa && (this.g.clearTimeout(this.xa), (this.xa = null)),
          this.dispatchEvent("tick"),
          this.wb && (this.stop(), this.start()));
    }
  };
  l.start = function () {
    this.wb = !0;
    this.xa || ((this.xa = this.g.setTimeout(this.o, this.h)), (this.w = u()));
  };
  l.stop = function () {
    this.wb = !1;
    this.xa && (this.g.clearTimeout(this.xa), (this.xa = null));
  };
  l.R = function () {
    ci.wa.R.call(this);
    this.stop();
    delete this.g;
  };
  var di = function (a, b, c) {
    if (t(a)) c && (a = Ma(a, c));
    else if (a && "function" == typeof a.handleEvent) a = Ma(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : q.setTimeout(a, b || 0);
  };
  var ei = function () {
      return Math.round(u() / 1e3);
    },
    fi = function (a) {
      var b =
        window.performance &&
        window.performance.timing &&
        window.performance.timing.domLoading &&
        0 < window.performance.timing.domLoading
          ? Math.round(window.performance.timing.domLoading / 1e3)
          : null;
      return null != b ? b : null != a ? a : ei();
    };
  var gi = function () {
    this.h = -1;
  };
  var hi = function () {
    this.g = {};
    return this;
  };
  hi.prototype.set = function (a, b) {
    this.g[a] = b;
  };
  var ii = function (a, b) {
    a.g.eb = Eb(a.g, "eb", 0) | b;
  };
  hi.prototype.get = function (a) {
    return Eb(this.g, a, null);
  };
  var ji = null,
    ki = function () {
      this.g = {};
      this.h = 0;
    },
    li = function (a, b) {
      this.A = a;
      this.o = !0;
      this.h = b;
    };
  li.prototype.getName = function () {
    return this.A;
  };
  li.prototype.g = function () {
    return this.h;
  };
  li.prototype.l = function () {
    return String(this.h);
  };
  var mi = function (a, b) {
    li.call(this, String(a), b);
    this.w = a;
    this.h = !!b;
  };
  y(mi, li);
  mi.prototype.l = function () {
    return this.h ? "1" : "0";
  };
  var ni = function (a, b) {
    li.call(this, a, b);
  };
  y(ni, li);
  ni.prototype.l = function () {
    return this.h
      ? Math.round(this.h.top) +
          "." +
          Math.round(this.h.left) +
          "." +
          (Math.round(this.h.top) + Math.round(this.h.height)) +
          "." +
          (Math.round(this.h.left) + Math.round(this.h.width))
      : "";
  };
  var oi = function (a) {
      if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
        a = a.split(".");
        var b = Number(a[0]),
          c = Number(a[1]);
        return new ni("", new Me(c, b, Number(a[3]) - c, Number(a[2]) - b));
      }
      return new ni("", new Me(0, 0, 0, 0));
    },
    pi = function () {
      ji || (ji = new ki());
      return ji;
    },
    qi = function (a, b) {
      a.g[b.getName()] = b;
    };
  var ri = function (a) {
      var b = new Me(
          -Number.MAX_VALUE / 2,
          -Number.MAX_VALUE / 2,
          Number.MAX_VALUE,
          Number.MAX_VALUE
        ),
        c = new Me(0, 0, 0, 0);
      if (!a || 0 == a.length) return c;
      for (var d = 0; d < a.length; d++) {
        a: {
          var e = b;
          var f = a[d],
            g = Math.max(e.left, f.left),
            h = Math.min(e.left + e.width, f.left + f.width);
          if (g <= h) {
            var k = Math.max(e.top, f.top);
            f = Math.min(e.top + e.height, f.top + f.height);
            if (k <= f) {
              e.left = g;
              e.top = k;
              e.width = h - g;
              e.height = f - k;
              e = !0;
              break a;
            }
          }
          e = !1;
        }
        if (!e) return c;
      }
      return b;
    },
    si = function (a, b) {
      var c = a.getBoundingClientRect();
      a = Ue(a, b);
      return new Me(
        Math.round(a.x),
        Math.round(a.y),
        Math.round(c.right - c.left),
        Math.round(c.bottom - c.top)
      );
    },
    ti = function (a, b, c) {
      if (b && c) {
        a: {
          var d = Math.max(b.left, c.left);
          var e = Math.min(b.left + b.width, c.left + c.width);
          if (d <= e) {
            var f = Math.max(b.top, c.top),
              g = Math.min(b.top + b.height, c.top + c.height);
            if (f <= g) {
              d = new Me(d, f, e - d, g - f);
              break a;
            }
          }
          d = null;
        }
        e = d ? d.height * d.width : 0;
        f = d ? b.height * b.width : 0;
        d = d && f ? Math.round((e / f) * 100) : 0;
        qi(a, new li("vp", d));
        d && 0 < d
          ? ((e = Ne(b)), (f = Ne(c)), (e = e.top >= f.top && e.top < f.bottom))
          : (e = !1);
        qi(a, new mi(512, e));
        d && 0 < d
          ? ((e = Ne(b)),
            (f = Ne(c)),
            (e = e.bottom <= f.bottom && e.bottom > f.top))
          : (e = !1);
        qi(a, new mi(1024, e));
        d && 0 < d
          ? ((e = Ne(b)),
            (f = Ne(c)),
            (e = e.left >= f.left && e.left < f.right))
          : (e = !1);
        qi(a, new mi(2048, e));
        d && 0 < d
          ? ((b = Ne(b)),
            (c = Ne(c)),
            (c = b.right <= c.right && b.right > c.left))
          : (c = !1);
        qi(a, new mi(4096, c));
      }
    };
  var ui = function (a, b) {
    var c = 0;
    xb(E(), "ima", "video", "client", "tagged") && (c = 1);
    var d = null;
    a && (d = a());
    if (d) {
      a = pi();
      a.g = {};
      var e = new mi(32, !0);
      e.o = !1;
      qi(a, e);
      e = E().document;
      e =
        e.visibilityState ||
        e.webkitVisibilityState ||
        e.mozVisibilityState ||
        e.msVisibilityState ||
        "";
      qi(
        a,
        new mi(
          64,
          "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1
        )
      );
      try {
        var f = E().top;
        try {
          var g = !!f.location.href || "" === f.location.href;
        } catch (n) {
          g = !1;
        }
        if (g) {
          var h = Og(d);
          var k = h && 0 != h.length ? "1" : "0";
        } else k = "2";
      } catch (n) {
        k = "2";
      }
      qi(a, new mi(256, "2" == k));
      qi(a, new mi(128, "1" == k));
      h = g = E().top;
      "2" == k && (h = E());
      f = si(d, h);
      qi(a, new ni("er", f));
      try {
        var m = h.document && !h.document.body ? null : be(h || window);
      } catch (n) {
        m = null;
      }
      m
        ? ((h = ce(Yd(h.document).g)),
          qi(a, new mi(16384, !!h)),
          (m = h ? new Me(h.x, h.y, m.width, m.height) : null))
        : (m = null);
      qi(a, new ni("vi", m));
      if (m && "1" == k) {
        k = Og(d);
        d = [];
        for (h = 0; h < k.length; h++) (e = si(k[h], g)) && d.push(e);
        d.push(m);
        m = ri(d);
      }
      ti(a, f, m);
      a.h && ((k = ei() - a.h), qi(a, new li("ts", k)));
      a.h = ei();
    } else (a = pi()), (a.g = {}), (a.h = ei()), qi(a, new mi(32, !1));
    this.l = a;
    this.g = new hi();
    this.g.set("ve", 4);
    c && ii(this.g, 1);
    xb(E(), "ima", "video", "client", "crossdomainTag") && ii(this.g, 4);
    xb(E(), "ima", "video", "client", "sdkTag") && ii(this.g, 8);
    xb(E(), "ima", "video", "client", "jsTag") && ii(this.g, 2);
    b && Eb(b, "fullscreen", !1) && ii(this.g, 16);
    this.h = b = null;
    if (c && ((c = xb(E(), "ima", "video", "client")), c.getEData)) {
      this.h = c.getEData();
      if ((c = xb(E(), "ima", "video", "client", "getLastSnapshotFromTop")))
        if ((a = c()))
          this.h.extendWithDataFromTopIframe(
            a.tagstamp,
            a.playstamp,
            a.lactstamp
          ),
            (c = this.l),
            (b = a.er),
            (a = a.vi),
            b &&
              a &&
              ((b = oi(b).g()),
              (a = oi(a).g()),
              (k = null),
              Eb(c.g, "er", null) &&
                ((k = Eb(c.g, "er", null).g()),
                (k.top += b.top),
                (k.left += b.left),
                qi(c, new ni("er", k))),
              Eb(c.g, "vi", null) &&
                ((m = Eb(c.g, "vi", null).g()),
                (m.top += b.top),
                (m.left += b.left),
                (d = []),
                d.push(m),
                d.push(b),
                d.push(a),
                (b = ri(d)),
                ti(c, k, b),
                qi(c, new ni("vi", a))));
      a: {
        if (this.h) {
          if (this.h.getTagLoadTimestamp) {
            b = this.h.getTagLoadTimestamp();
            break a;
          }
          if (this.h.getTimeSinceTagLoadSeconds) {
            b = this.h.getTimeSinceTagLoadSeconds();
            break a;
          }
        }
        b = null;
      }
    }
    this.g.set("td", ei() - fi(b));
  };
  var vi = new ci(200),
    wi = function (a, b) {
      try {
        var c = new ui(a, b);
        a = [];
        var d = Number(c.g.get("eb")),
          e = c.g.g;
        "eb" in e && delete e.eb;
        var f,
          g = c.g;
        e = [];
        for (var h in g.g) e.push(h + g.g[h]);
        (f = e.join("_")) && a.push(f);
        if (c.h) {
          var k = c.h.serialize();
          k && a.push(k);
        }
        var m,
          n = c.l;
        f = d;
        g = [];
        f || (f = 0);
        for (var w in n.g) {
          var x = n.g[w];
          if (x instanceof mi) x.g() && (f |= x.w);
          else {
            var v,
              C = n.g[w];
            (v = C.o ? C.l() : "") && g.push(w + v);
          }
        }
        g.push("eb" + String(f));
        (m = g.join("_")) && a.push(m);
        c.g.set("eb", d);
        return a.join("_");
      } catch (H) {
        return "tle;" + Cc(H.name, 12) + ";" + Cc(H.message, 40);
      }
    },
    xi = function (a, b) {
      kh(vi, "tick", function () {
        var c = wi(b);
        a(c);
      });
      vi.start();
      vi.dispatchEvent("tick");
    };
  var yi;
  yi = ["av.key", "js", "unreleased"].slice(-1)[0];
  var zi = [0, 2, 1],
    Ai = null;
  document.addEventListener &&
    document.addEventListener(
      "mousedown",
      function (a) {
        Ai = a;
      },
      !0
    );
  window.mb = function (a) {
    if (a) {
      var b;
      if ((b = window.event || Ai)) {
        var c;
        (c = b.which ? 1 << zi[b.which - 1] : b.button) &&
          b.shiftKey &&
          (c |= 8);
        c && b.altKey && (c |= 16);
        c && b.ctrlKey && (c |= 32);
        b = c;
      } else b = null;
      if ((c = b))
        if (window.css) window.css(a.id, "mb", c, void 0, void 0);
        else if (a) {
          b = a.href;
          var d = b.indexOf("&mb=");
          if (0 > d) c = b + "&mb=" + c;
          else {
            d += 4;
            var e = b.indexOf("&", d);
            c =
              0 <= e
                ? b.substring(0, d) + c + b.substring(e)
                : b.substring(0, d) + c;
          }
          a.href = 2e3 < c.length ? b : c;
        }
    }
  };
  var Bi = function (a, b, c) {
    try {
      a && (b = b.top);
      var d = void 0;
      var e = b;
      c = void 0 === c ? !1 : c;
      a && null !== e && e != e.top && (e = e.top);
      try {
        d = (void 0 === c ? 0 : c)
          ? new D(e.innerWidth, e.innerHeight).round()
          : be(e || window).round();
      } catch (k) {
        d = new D(-12245933, -12245933);
      }
      a = d;
      var f = ce(Yd(b.document).g);
      if (-12245933 == a.width) {
        var g = a.width;
        var h = new F(g, g, g, g);
      } else h = new F(f.y, f.x + a.width, f.y + a.height, f.x);
      return h;
    } catch (k) {
      return new F(-12245933, -12245933, -12245933, -12245933);
    }
  };
  var Ci = function (a) {
    var b = {};
    z(a, function (c) {
      var d = c.event,
        e = b[d];
      b.hasOwnProperty(d)
        ? null !== e && (c.g(e) || (b[d] = null))
        : (b[d] = c);
    });
    bb(a, function (c) {
      return null === b[c.event];
    });
  };
  var Di = { NONE: 0, Ag: 1 };
  var Ei = function () {
    this.W = 0;
    this.g = !1;
    this.h = -1;
    this.Va = !1;
    this.ha = 0;
  };
  Ei.prototype.isVisible = function () {
    return this.Va ? 0.3 <= this.W : 0.5 <= this.W;
  };
  var L = { yg: 0, Eg: 1 },
    Fi = {
      370204018: 0,
      370204019: 1,
      370204052: 2,
      370204026: 0,
      370204027: 1,
      370204053: 2,
    },
    Gi = { 668123728: 0, 668123729: 1 },
    Hi = { 44710341: 0, 44710342: 1 },
    Ii = { NONE: 0, Vg: 1, Ig: 2 },
    Ji = { 480596784: 0, 480596785: 1, 21063355: 2 },
    Ki = { 42530094: 0, 42530095: 1 },
    Li = { 42530173: 0, 42530174: 1 },
    Mi = { 370204078: 0, 370204079: 1, 370204080: 0, 370204081: 1 },
    Ni = { 370204088: 0, 370204089: 1 };
  var Oi = function () {
      this.h = null;
      this.o = !1;
      this.w = null;
    },
    M = function (a) {
      a.o = !0;
      return a;
    },
    Pi = function (a, b) {
      a.w = void 0 === b ? null : b;
    },
    Qi = function (a, b) {
      a.w &&
        z(b, function (c) {
          c = a.w[c];
          void 0 !== c && a.l(c);
        });
    };
  Oi.prototype.g = function () {
    return this.h;
  };
  var Ri = function (a) {
    Oi.call(this);
    this.A = a;
  };
  p(Ri, Oi);
  Ri.prototype.l = function (a) {
    null === this.h && zb(this.A, a) && (this.h = a);
  };
  var Si = function () {
    Oi.call(this);
  };
  p(Si, Oi);
  Si.prototype.l = function (a) {
    null === this.h && "string" === typeof a && (this.h = a);
  };
  var Ti = function () {
    this.g = {};
    this.l = !0;
    this.h = {};
  };
  Ti.prototype.enable = function () {
    this.l = !0;
  };
  Ti.prototype.isEnabled = function () {
    return this.l;
  };
  Ti.prototype.reset = function () {
    this.g = {};
    this.l = !0;
    this.h = {};
  };
  var N = function (a, b, c) {
      a.g[b] || (a.g[b] = new Ri(c));
      return a.g[b];
    },
    Ui = function (a, b, c) {
      (a = a.g[b]) && a.l(c);
    },
    Vi = function (a, b) {
      if (yb(a.h, b)) return a.h[b];
      if ((a = a.g[b])) return a.g();
    },
    Wi = function (a) {
      var b = {},
        c = pb(a.g, function (d) {
          return d.o;
        });
      ob(
        c,
        function (d, e) {
          d =
            void 0 !== a.h[e]
              ? String(a.h[e])
              : d.o && null !== d.h
              ? String(d.h)
              : "";
          0 < d.length && (b[e] = d);
        },
        a
      );
      return b;
    },
    Xi = function (a) {
      a = Wi(a);
      var b = [];
      ob(a, function (c, d) {
        d in Object.prototype ||
          ("undefined" != typeof c && b.push([d, ":", c].join("")));
      });
      return b;
    },
    Yi = function (a) {
      var b = O.B().K;
      b.l &&
        z(vb(b.g), function (c) {
          return Qi(c, a);
        });
    };
  var Zi = !Qc && !rc();
  var $i = function () {
    this.g = this.Pa = null;
  };
  var aj = function () {};
  aj.prototype.now = function () {
    return 0;
  };
  aj.prototype.h = function () {
    return 0;
  };
  aj.prototype.l = function () {
    return 0;
  };
  aj.prototype.g = function () {
    return 0;
  };
  var cj = function () {
    if (!bj()) throw Error();
  };
  p(cj, aj);
  var bj = function () {
    return !(!B || !B.performance);
  };
  cj.prototype.now = function () {
    return bj() && B.performance.now
      ? B.performance.now()
      : aj.prototype.now.call(this);
  };
  cj.prototype.h = function () {
    return bj() && B.performance.memory
      ? B.performance.memory.totalJSHeapSize || 0
      : aj.prototype.h.call(this);
  };
  cj.prototype.l = function () {
    return bj() && B.performance.memory
      ? B.performance.memory.usedJSHeapSize || 0
      : aj.prototype.l.call(this);
  };
  cj.prototype.g = function () {
    return bj() && B.performance.memory
      ? B.performance.memory.jsHeapSizeLimit || 0
      : aj.prototype.g.call(this);
  };
  var dj = function () {};
  dj.prototype.isVisible = function () {
    return 1 === mg(Id);
  };
  var ej = function (a, b) {
      this.g = a;
      this.depth = b;
    },
    gj = function (a) {
      a = a || ef();
      var b = Math.max(a.length - 1, 0),
        c = hf(a);
      a = c.g;
      var d = c.h,
        e = c.l,
        f = [];
      c = function (h, k) {
        return null == h ? k : h;
      };
      e && f.push(new ej([e.url, e.wc ? 2 : 0], c(e.depth, 1)));
      d && d != e && f.push(new ej([d.url, 2], 0));
      a.url && a != e && f.push(new ej([a.url, 0], c(a.depth, b)));
      var g = Ta(f, function (h, k) {
        return f.slice(0, f.length - k);
      });
      !a.url ||
        ((e || d) && a != e) ||
        ((d = xe(a.url)) && g.push([new ej([d, 1], c(a.depth, b))]));
      g.push([]);
      return Ta(g, function (h) {
        return fj(b, h);
      });
    };
  function fj(a, b) {
    var c = Ua(
        b,
        function (e, f) {
          return Math.max(e, f.depth);
        },
        -1
      ),
      d = ib(c + 2);
    d[0] = a;
    z(b, function (e) {
      return (d[e.depth + 1] = e.g);
    });
    return d;
  }
  var hj = function () {
    var a = gj();
    return Ta(a, function (b) {
      return lf(b);
    });
  };
  var ij = function () {
      this.h = new dj();
      this.g = bj() ? new cj() : new aj();
    },
    kj = function () {
      jj();
      var a = B.document;
      return !!(
        a &&
        a.body &&
        a.body.getBoundingClientRect &&
        t(B.setInterval) &&
        t(B.clearInterval) &&
        t(B.setTimeout) &&
        t(B.clearTimeout)
      );
    };
  ij.prototype.setInterval = function (a, b) {
    return B.setInterval(a, b);
  };
  ij.prototype.clearInterval = function (a) {
    B.clearInterval(a);
  };
  ij.prototype.setTimeout = function (a, b) {
    return B.setTimeout(a, b);
  };
  ij.prototype.clearTimeout = function (a) {
    B.clearTimeout(a);
  };
  var lj = function (a) {
      jj();
      var b = Ze() || B;
      He(b, a);
    },
    mj = function () {
      jj();
      return hj();
    };
  Da(ij);
  var nj = function () {};
  nj.prototype.getContext = function () {
    if (!this.g) {
      if (!B) throw Error("Context has not been set and window is undefined.");
      this.g = ij.B();
    }
    return this.g;
  };
  Da(nj);
  var jj = function () {
    return nj.B().getContext();
  };
  var oj = function (a) {
    Bd(this, a, null);
  };
  y(oj, xd);
  var pj = function (a) {
      this.o = a;
      this.g = -1;
      this.h = this.l = 0;
    },
    qj = function (a, b) {
      return function (c) {
        for (var d = [], e = 0; e < arguments.length; ++e)
          d[e - 0] = arguments[e];
        if (-1 < a.g) return b.apply(null, ca(d));
        try {
          return (a.g = a.o.g.now()), b.apply(null, ca(d));
        } finally {
          (a.l += a.o.g.now() - a.g), (a.g = -1), (a.h += 1);
        }
      };
    };
  var rj = function (a, b) {
    this.h = a;
    this.l = b;
    this.g = new pj(a);
  };
  var O = function () {
    this.o = void 0;
    this.l = this.C = 0;
    this.U = "ns";
    this.A = -1;
    this.K = new Ti();
    Pi(M(N(this.K, "mv", Ii)), Ji);
    N(this.K, "omid", L);
    M(N(this.K, "epoh", L));
    M(N(this.K, "epph", L));
    Pi(M(N(this.K, "umt", L)), Gi);
    Pi(M(N(this.K, "gmpd", L)), Hi);
    Pi(M(N(this.K, "sel", L)), Fi);
    Pi(M(N(this.K, "imams", L)), Ki);
    this.K.h.imams = 1;
    Pi(N(this.K, "imar", L), Li);
    this.K.h.imar = 1;
    M(N(this.K, "phel", L));
    M(N(this.K, "phell", L));
    M(N(this.K, "oseid", Je));
    M(N(this.K, "xdi", L));
    M(N(this.K, "amp", L));
    M(N(this.K, "prf", L));
    M(N(this.K, "gtx", L));
    M(N(this.K, "mvp_lv", L));
    Pi(M(N(this.K, "lvio", L)), Mi);
    N(this.K, "xosd", L);
    this.K.h.xosd = 1;
    M(N(this.K, "mxd", L));
    Pi(M(N(this.K, "etl", L)), Ni);
    M(N(this.K, "msp", L));
    this.g = new rj(jj(), this.K);
    this.w = this.h = !1;
  };
  O.prototype.Lc = function (a) {
    if ("string" === typeof a && 0 != a.length) {
      var b = this.K;
      if (b.l) {
        a = a.split("&");
        for (var c = a.length - 1; 0 <= c; c--) {
          var d = a[c].split("="),
            e = d[0];
          d = 1 < d.length ? parseInt(d[1], 10) : 1;
          isNaN(d) || ((e = b.g[e]) && e.l(d));
        }
      }
    }
  };
  Da(O);
  var sj = function () {
      var a = "https:";
      B && B.location && "http:" === B.location.protocol && (a = "http:");
      this.h = a;
      this.g = 0.01;
      this.l = Math.random();
    },
    tj = function (a, b, c, d, e) {
      if ((d ? a.l : Math.random()) < (e || a.g))
        try {
          if (c instanceof jf) var f = c;
          else
            (f = new jf()),
              ve(c, function (h, k) {
                var m = f,
                  n = m.w++;
                nf(m, n, kf(k, h));
              });
          var g = qf(f, a.h, "/pagead/gen_204?id=" + b + "&");
          g && lj(g);
        } catch (h) {}
    };
  var wj = function () {
    var a = uj;
    this.l = vj;
    this.A = "jserror";
    this.o = !0;
    this.h = null;
    this.C = this.Ha;
    this.g = void 0 === a ? null : a;
    this.w = !1;
  };
  l = wj.prototype;
  l.pinger = function () {
    return this.l;
  };
  l.cc = function (a) {
    this.h = a;
  };
  l.Qc = function (a) {
    this.A = a;
  };
  l.Rc = function (a) {
    this.o = a;
  };
  l.Sc = function (a) {
    this.w = a;
  };
  l.Xa = function (a, b, c) {
    var d = this;
    return qj(O.B().g.g, function () {
      try {
        if (d.g && d.g.h) {
          var e = d.g.start(a.toString(), 3);
          var f = b();
          d.g.end(e);
        } else f = b();
      } catch (k) {
        var g = d.o;
        try {
          Gf(e);
          var h = new xj(yj(k));
          g = d.C(a, h, void 0, c);
        } catch (m) {
          d.Ha(217, m);
        }
        if (!g) throw k;
      }
      return f;
    })();
  };
  l.Mc = function (a, b, c, d) {
    var e = this;
    return qj(O.B().g.g, function (f) {
      for (var g = [], h = 0; h < arguments.length; ++h)
        g[h - 0] = arguments[h];
      return e.Xa(
        a,
        function () {
          return b.apply(c, g);
        },
        d
      );
    });
  };
  l.Ha = function (a, b, c, d, e) {
    e = e || this.A;
    try {
      var f = new jf();
      f.o = !0;
      of(f, 1, "context", a);
      af(b) || (b = new xj(yj(b)));
      b.msg && of(f, 2, "msg", b.msg.substring(0, 512));
      var g = b.meta || {};
      if (this.h)
        try {
          this.h(g);
        } catch (k) {}
      if (d)
        try {
          d(g);
        } catch (k) {}
      nf(f, 3, [g]);
      var h = hf();
      h.h && of(f, 4, "top", h.h.url || "");
      of(f, 5, "url", h.g.url || "");
      tj(this.l, e, f, this.w, c);
    } catch (k) {
      try {
        tj(
          this.l,
          e,
          { context: "ecmserr", rctx: a, msg: yj(k), url: h && h.g.url },
          this.w,
          c
        );
      } catch (m) {}
    }
    return this.o;
  };
  var yj = function (a) {
      var b = a.toString();
      a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
      a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
      if (a.stack) {
        a = a.stack;
        var c = b;
        try {
          -1 == a.indexOf(c) && (a = c + "\n" + a);
          for (var d; a != d; )
            (d = a),
              (a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1"));
          b = a.replace(/\n */g, "\n");
        } catch (e) {
          b = c;
        }
      }
      return b;
    },
    xj = function (a) {
      $e.call(this, Error(a), { message: a });
    };
  p(xj, $e);
  var vj,
    zj,
    uj = new Ff(1, Ze()),
    Aj = function () {
      var a = Ze();
      a &&
        "undefined" != typeof a.google_measure_js_timing &&
        (a.google_measure_js_timing || uj.C());
    };
  (function () {
    vj = new sj();
    zj = new wj();
    var a = Ze();
    a &&
      a.document &&
      ("complete" == a.document.readyState
        ? Aj()
        : uj.h &&
          Ee(a, "load", function () {
            Aj();
          }));
  })();
  var Bj = function (a) {
      zj.cc(function (b) {
        z(a, function (c) {
          c(b);
        });
      });
    },
    Cj = function (a, b) {
      return zj.Xa(a, b, void 0);
    },
    Dj = function (a, b, c, d) {
      return zj.Mc(a, b, c, d);
    },
    Ej = function (a, b, c, d) {
      zj.Ha(a, b, c, d);
    };
  var Fj = u(),
    Gj = -1,
    Hj = -1,
    Ij,
    Jj = -1,
    Kj = !1,
    Lj = function () {
      return u() - Fj;
    },
    Mj = function () {
      var a = O.B().o,
        b = 0 <= Hj ? Lj() - Hj : -1,
        c = Kj ? Lj() - Gj : -1,
        d = 0 <= Jj ? Lj() - Jj : -1;
      if (947190542 == a) return 100;
      if (79463069 == a) return 200;
      a = [2e3, 4e3];
      var e = [250, 500, 1e3];
      Ej(637, Error(), 0.001);
      var f = b;
      -1 != c && c < b && (f = c);
      for (b = 0; b < a.length; ++b)
        if (f < a[b]) {
          var g = e[b];
          break;
        }
      void 0 === g && (g = e[a.length]);
      return -1 != d && 1500 < d && 4e3 > d ? 500 : g;
    };
  var Nj = {
      currentTime: 1,
      duration: 2,
      isVpaid: 4,
      volume: 8,
      isYouTube: 16,
      isPlaying: 32,
    },
    Ab = {
      hc: "start",
      FIRST_QUARTILE: "firstquartile",
      MIDPOINT: "midpoint",
      THIRD_QUARTILE: "thirdquartile",
      COMPLETE: "complete",
      ae: "metric",
      gc: "pause",
      Wc: "resume",
      SKIPPED: "skip",
      VIEWABLE_IMPRESSION: "viewable_impression",
      be: "mute",
      ce: "unmute",
      FULLSCREEN: "fullscreen",
      Yd: "exitfullscreen",
      Vc: "bufferstart",
      Uc: "bufferfinish",
      Zd: "fully_viewable_audible_half_duration_impression",
      $d: "measurable_impression",
      Td: "abandon",
      Xd: "engagedview",
      IMPRESSION: "impression",
      Vd: "creativeview",
      LOADED: "loaded",
      oh: "progress",
      wg: "close",
      xg: "collapse",
      gh: "overlay_resize",
      hh: "overlay_unmeasurable_impression",
      ih: "overlay_unviewable_impression",
      kh: "overlay_viewable_immediate_impression",
      jh: "overlay_viewable_end_of_session_impression",
      Wd: "custom_metric_viewable",
    },
    Oj = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
    Pj = ["start", "firstquartile", "midpoint", "thirdquartile"],
    Qj = ["abandon"],
    Rj = {
      Dh: -1,
      hc: 0,
      FIRST_QUARTILE: 1,
      MIDPOINT: 2,
      THIRD_QUARTILE: 3,
      COMPLETE: 4,
      ae: 5,
      gc: 6,
      Wc: 7,
      SKIPPED: 8,
      VIEWABLE_IMPRESSION: 9,
      be: 10,
      ce: 11,
      FULLSCREEN: 12,
      Yd: 13,
      Zd: 14,
      $d: 15,
      Td: 16,
      Xd: 17,
      IMPRESSION: 18,
      Vd: 19,
      LOADED: 20,
      Wd: 21,
      Vc: 22,
      Uc: 23,
    };
  var sb = {
      pg: "addEventListener",
      Jg: "getMaxSize",
      Kg: "getScreenSize",
      Lg: "getState",
      Mg: "getVersion",
      ph: "removeEventListener",
      Wg: "isViewable",
    },
    Sj = function (a) {
      var b = a !== a.top,
        c = a.top === Nf(a).la,
        d = -1,
        e = 0;
      if (b && c && a.top.mraid) {
        d = 3;
        var f = a.top.mraid;
      } else d = (f = a.mraid) ? (b ? (c ? 2 : 1) : 0) : -1;
      f &&
        (f.IS_GMA_SDK || (e = 2),
        tb(function (g) {
          return t(f[g]);
        }) || (e = 1));
      return { ya: f, Lb: e, Kd: d };
    };
  var Tj = function (a) {
    return (a = a.document) && t(a.elementFromPoint);
  };
  if (Id && Id.URL) {
    var Uj,
      ze = Id.URL;
    Uj = !!ze && 0 < Ae().length;
    zj.Rc(!Uj);
  }
  var Vj = function (a, b, c, d) {
    var e = void 0 === e ? !1 : e;
    c = Dj(d, c);
    Ee(a, b, c, { capture: e });
    return c;
  };
  function Wj(a, b, c, d) {
    if (!a) return { value: d, done: !1 };
    d = b(d, a);
    var e = c(d, a);
    return !e && Mc(a, "parentElement")
      ? Wj(ie(a), b, c, d)
      : { done: e, value: d };
  }
  var Xj = function (a, b, c, d) {
    if (!a) return d;
    d = Wj(a, b, c, d);
    if (!d.done)
      try {
        var e = Xd(a),
          f = e && E(e);
        return Xj(f && f.frameElement, b, c, d.value);
      } catch (g) {}
    return d.value;
  };
  function Yj(a) {
    var b = !Qc || fd(8);
    return Xj(
      a,
      function (c, d) {
        c = Mc(d, "style") && d.style && Re(d, "visibility");
        return { hidden: "hidden" === c, visible: b && "visible" === c };
      },
      function (c) {
        return c.hidden || c.visible;
      },
      { hidden: !1, visible: !1 }
    ).hidden;
  }
  var Zj = function (a) {
      return Xj(
        a,
        function (b, c) {
          return !(!Mc(c, "style") || !c.style || "none" !== Re(c, "display"));
        },
        function (b) {
          return b;
        },
        !1
      )
        ? !0
        : Yj(a);
    },
    ak = function (a) {
      return new F(a.top, a.right, a.bottom, a.left);
    },
    bk = function (a) {
      var b = a.top || 0,
        c = a.left || 0;
      return new F(b, c + (a.width || 0), b + (a.height || 0), c);
    },
    ck = function (a) {
      return null != a && 0 <= a && 1 >= a;
    };
  function dk() {
    var a = lc;
    return a
      ? Va(
          "Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;OMI/".split(
            ";"
          ),
          function (b) {
            return dc(a, b);
          }
        )
        ? !0
        : dc(a, "Presto") &&
          dc(a, "Linux") &&
          !dc(a, "X11") &&
          !dc(a, "Android") &&
          !dc(a, "Mobi")
      : !1;
  }
  function ek() {
    var a = lc;
    return (
      dc(a, "AppleTV") ||
      dc(a, "Apple TV") ||
      dc(a, "CFNetwork") ||
      dc(a, "tvOS")
    );
  }
  function fk() {
    var a = lc;
    return dc(a, "sdk_google_atv_x86") || dc(a, "Android TV");
  }
  function gk() {
    return (
      dc(lc, "CrKey") ||
      dc(lc, "PlayStation") ||
      dc(lc, "Roku") ||
      dk() ||
      dc(lc, "Xbox") ||
      ek() ||
      fk()
    );
  }
  var Q = function () {
      this.I = !1;
      this.h = !ue(B.top);
      this.C = oe() || pe();
      var a = ef();
      a =
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url
          ? ((a = a[a.length - 1].url.match(qe)[3] || null)
              ? decodeURI(a)
              : a) || ""
          : "";
      this.F = a;
      this.g = new F(0, 0, 0, 0);
      this.w = new D(0, 0);
      this.o = new D(0, 0);
      this.G = new F(0, 0, 0, 0);
      this.H = null;
      this.A = 0;
      this.D = !1;
      this.l = !(!B || !Sj(B).ya);
      hk(this);
    },
    ik = function (a, b) {
      b && b.screen && (a.w = new D(b.screen.width, b.screen.height));
    },
    jk = function (a, b) {
      var c = a.g ? new D(a.g.h(), a.g.g()) : new D(0, 0);
      b = void 0 === b ? B : b;
      null !== b && b != b.top && (b = b.top);
      var d = 0,
        e = 0;
      try {
        var f = b.document,
          g = f.body,
          h = f.documentElement;
        if ("CSS1Compat" == f.compatMode && h.scrollHeight)
          (d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight),
            (e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth);
        else {
          var k = h.scrollHeight,
            m = h.scrollWidth,
            n = h.offsetHeight,
            w = h.offsetWidth;
          h.clientHeight != n &&
            ((k = g.scrollHeight),
            (m = g.scrollWidth),
            (n = g.offsetHeight),
            (w = g.offsetWidth));
          k > c.height
            ? k > n
              ? ((d = k), (e = m))
              : ((d = n), (e = w))
            : k < n
            ? ((d = k), (e = m))
            : ((d = n), (e = w));
        }
        var x = new D(e, d);
      } catch (v) {
        x = new D(-12245933, -12245933);
      }
      a.o = x;
    },
    hk = function (a) {
      B &&
        B.document &&
        ((a.G = Bi(!1, B, a.C)),
        (a.g = Bi(!0, B, a.C)),
        (a.H = a.g),
        jk(a, B),
        ik(a, B));
    },
    kk = function () {
      var a = Q.B();
      if (0 < a.A || a.D) return !0;
      a = jj().h.isVisible();
      var b = 0 === mg(Id);
      return a || b;
    };
  Da(Q);
  var lk = new F(0, 0, 0, 0);
  function mk(a, b) {
    try {
      try {
        var c = ak(a.getBoundingClientRect());
      } catch (k) {
        c = new F(0, 0, 0, 0);
      }
      var d = c.right - c.left,
        e = c.bottom - c.top,
        f = Ue(a, b),
        g = f.x,
        h = f.y;
      return new F(
        Math.round(h),
        Math.round(g + d),
        Math.round(h + e),
        Math.round(g)
      );
    } catch (k) {
      return lk.clone();
    }
  }
  function nk(a, b) {
    return a.left <= b.right &&
      b.left <= a.right &&
      a.top <= b.bottom &&
      b.top <= a.bottom
      ? new F(
          Math.max(a.top, b.top),
          Math.min(a.right, b.right),
          Math.min(a.bottom, b.bottom),
          Math.max(a.left, b.left)
        )
      : new F(0, 0, 0, 0);
  }
  function ok(a, b) {
    b = pk(b);
    return 0 === b ? 0 : pk(a) / b;
  }
  function pk(a) {
    return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0);
  }
  function qk(a, b) {
    if (!a || !b) return !1;
    for (var c = 0; null !== a && 100 > c++; ) {
      if (a === b) return !0;
      try {
        if ((a = ie(a) || a)) {
          var d = Xd(a),
            e = d && E(d),
            f = e && e.frameElement;
          f && (a = f);
        }
      } catch (g) {
        break;
      }
    }
    return !1;
  }
  function rk(a, b, c) {
    if (!a || !b) return !1;
    b = Le(a.clone(), -b.left, -b.top);
    a = (b.left + b.right) / 2;
    b = (b.top + b.bottom) / 2;
    var d = Ze();
    ue(d.top) && d.top && d.top.document && (d = d.top);
    if (!Tj(d)) return !1;
    a = d.document.elementFromPoint(a, b);
    if (!a) return !1;
    b =
      (b = (b = Xd(c)) && b.defaultView && b.defaultView.frameElement) &&
      qk(b, a);
    d = a === c;
    a =
      !d &&
      a &&
      le(a, function (e) {
        return e === c;
      });
    return !(b || d || a);
  }
  function sk(a, b, c, d) {
    return Q.B().h
      ? !1
      : 0 >= a.h() || 0 >= a.g()
      ? !0
      : c && d
      ? Cj(208, function () {
          return rk(a, b, c);
        })
      : !1;
  }
  var tk = function (a, b, c) {
    var d = new F(0, 0, 0, 0);
    this.time = a;
    this.volume = null;
    this.l = b;
    this.g = d;
    this.h = c;
  };
  var uk = function (a, b, c, d, e, f, g) {
    this.G = a;
    this.A = b;
    this.h = c;
    this.w = d;
    this.C = e;
    this.g = f;
    this.o = g;
  };
  uk.prototype.l = function () {
    return this.G;
  };
  var vk = function (a, b) {
    return b ? Math.max(a.w, a.C) : a.w;
  };
  var wk = function (a) {
    this.l = a;
    this.h = 0;
    this.g = null;
  };
  wk.prototype.cancel = function () {
    jj().clearTimeout(this.g);
    this.g = null;
  };
  var xk = function (a) {
    var b = jj();
    a.g = b.setTimeout(
      qj(
        O.B().g.g,
        Dj(143, function () {
          a.h++;
          a.l.ca();
        })
      ),
      Mj()
    );
  };
  var yk = function (a, b, c) {
    this.la = a;
    this.ra = void 0 === c ? "na" : c;
    this.A = [];
    this.F = !1;
    this.w = new tk(-1, !0, this);
    this.g = this;
    this.I = b;
    this.H = this.pa = this.D = !1;
    this.N = "uk";
    this.V = !1;
    this.o = !0;
  };
  l = yk.prototype;
  l.Bd = function () {
    return this.$b();
  };
  l.$b = function () {
    return !1;
  };
  l.Fc = function () {
    return (this.F = !0);
  };
  l.Za = function () {
    return this.g.N;
  };
  l.xb = function () {
    return this.g.H;
  };
  var Ak = function (a, b, c) {
    if (!a.H || (void 0 === c ? 0 : c))
      (a.H = !0), (a.N = b), (a.I = 0), a.g != a || zk(a);
  };
  yk.prototype.getName = function () {
    return this.g.ra;
  };
  yk.prototype.La = function () {
    return this.g.O();
  };
  yk.prototype.O = function () {
    return {};
  };
  yk.prototype.Fa = function () {
    return this.g.I;
  };
  var Bk = function (a, b) {
    Za(a.A, b) || (a.A.push(b), b.$a(a.g), b.Oa(a.w), b.Ba() && (a.D = !0));
  };
  yk.prototype.X = function () {
    var a = Q.B();
    a.g = Bi(!0, this.la, a.C);
  };
  yk.prototype.Z = function () {
    ik(Q.B(), this.la);
  };
  yk.prototype.Da = function () {
    jk(Q.B(), this.la);
  };
  yk.prototype.P = function () {
    return this.w.g;
  };
  var Ck = function (a) {
    a = a.g;
    a.Z();
    a.X();
    var b = Q.B();
    b.G = Bi(!1, a.la, b.C);
    a.Da();
    a.w.g = a.P();
  };
  yk.prototype.ca = function () {};
  var Dk = function (a, b) {
    a.g != a ? Dk(a.g, b) : a.o !== b && ((a.o = b), zk(a));
  };
  yk.prototype.vc = function () {
    return this.g.o;
  };
  var Ek = function (a) {
    a.D = a.A.length
      ? Va(a.A, function (b) {
          return b.Ba();
        })
      : !1;
  };
  yk.prototype.l = function () {
    return this.w;
  };
  var Fk = function (a) {
      var b = db(a.A);
      z(b, function (c) {
        c.Oa(a.w);
      });
    },
    zk = function (a) {
      var b = db(a.A);
      z(b, function (c) {
        c.$a(a.g);
      });
      a.g != a || Fk(a);
    };
  l = yk.prototype;
  l.$a = function (a) {
    var b = this.g,
      c = a.Fa();
    this.g = c >= this.I ? a : this;
    b !== this.g
      ? ((this.o = this.g.o), zk(this))
      : this.o !== this.g.o && ((this.o = this.g.o), zk(this));
  };
  l.Oa = function (a) {
    if (a.h === this.g) {
      var b;
      if (!(b = this.pa)) {
        b = this.w;
        var c = this.D;
        b = !(
          a &&
          (void 0 === c || !c || b.volume == a.volume) &&
          b.l == a.l &&
          Ke(b.g, a.g)
        );
      }
      this.w = a;
      b && Fk(this);
    }
  };
  l.Ba = function () {
    return this.D;
  };
  l.Y = function () {
    this.V = !0;
  };
  l.fb = function () {
    return this.V;
  };
  var Gk = function (a, b, c, d) {
    this.element = a;
    this.g = new F(0, 0, 0, 0);
    this.w = new F(0, 0, 0, 0);
    this.h = b;
    this.K = c;
    this.H = d;
    this.F = !1;
    this.timestamp = -1;
    this.o = new uk(b.l(), this.g, new F(0, 0, 0, 0), 0, 0, Lj(), 0);
  };
  l = Gk.prototype;
  l.Bc = function () {
    return !0;
  };
  l.Cc = function () {};
  l.Ib = function () {
    this.element && (this.g = mk(this.element, this.h.g.la));
  };
  l.bd = function () {
    this.w = this.h.l().g;
  };
  l.Ea = function () {
    this.Ib();
    this.o = new uk(
      this.h.l(),
      this.g,
      this.o.h,
      this.o.w,
      this.o.C,
      Lj(),
      this.o.o
    );
  };
  l.Y = function () {
    if (!this.fb()) {
      var a = this.h;
      ab(a.A, this);
      a.D && this.Ba() && Ek(a);
      this.F = !0;
    }
  };
  l.fb = function () {
    return this.F;
  };
  l.La = function () {
    return this.h.La();
  };
  l.Fa = function () {
    return this.h.Fa();
  };
  l.Za = function () {
    return this.h.Za();
  };
  l.xb = function () {
    return this.h.xb();
  };
  l.$a = function () {};
  l.Oa = function () {
    this.Ea();
  };
  l.Ba = function () {
    return this.H;
  };
  var Hk = function (a) {
    this.w = !1;
    this.g = a;
    this.o = Ca;
  };
  l = Hk.prototype;
  l.Fa = function () {
    return this.g.Fa();
  };
  l.Za = function () {
    return this.g.Za();
  };
  l.xb = function () {
    return this.g.xb();
  };
  l.create = function (a, b, c) {
    var d = null;
    this.g && ((d = this.Zb(a, b, c)), Bk(this.g, d));
    return d;
  };
  l.Ac = function () {
    return this.gb();
  };
  l.gb = function () {
    return !1;
  };
  l.yd = function (a) {
    return this.g.Fc() ? (Bk(this.g, this), (this.o = a), !0) : !1;
  };
  l.$a = function (a) {
    0 == a.Fa() && this.o(a.Za(), this);
  };
  l.Oa = function () {};
  l.Ba = function () {
    return !1;
  };
  l.Y = function () {
    this.w = !0;
  };
  l.fb = function () {
    return this.w;
  };
  l.La = function () {
    return {};
  };
  var Ik = function (a, b, c) {
      this.l = void 0 === c ? 0 : c;
      this.h = a;
      this.g = null == b ? "" : b;
    },
    Jk = function (a) {
      switch (Math.trunc(a.l)) {
        case -16:
          return -16;
        case -8:
          return -8;
        case 0:
          return 0;
        case 8:
          return 8;
        case 16:
          return 16;
        default:
          return 16;
      }
    },
    Kk = function (a, b) {
      return a.l < b.l
        ? !0
        : a.l > b.l
        ? !1
        : a.h < b.h
        ? !0
        : a.h > b.h
        ? !1
        : typeof a.g < typeof b.g
        ? !0
        : typeof a.g > typeof b.g
        ? !1
        : a.g < b.g;
    };
  var Lk = function () {
    this.l = 0;
    this.g = [];
    this.h = !1;
  };
  Lk.prototype.add = function (a, b, c) {
    ++this.l;
    a = new Ik(a, b, c);
    this.g.push(new Ik(a.h, a.g, a.l + this.l / 4096));
    this.h = !0;
    return this;
  };
  var Mk = function (a, b) {
      z(b.g, function (c) {
        a.add(c.h, c.g, Jk(c));
      });
    },
    Nk = function (a, b) {
      var c = void 0 === c ? 0 : c;
      var d = void 0 === d ? !0 : d;
      ve(b, function (e, f) {
        (d && void 0 === e) || a.add(f, e, c);
      });
      return a;
    },
    Pk = function (a) {
      var b = Ok;
      a.h &&
        (gb(a.g, function (c, d) {
          return Kk(d, c) ? 1 : Kk(c, d) ? -1 : 0;
        }),
        (a.h = !1));
      return Ua(
        a.g,
        function (c, d) {
          d = b(d);
          return "" + c + ("" != c && "" != d ? "&" : "") + d;
        },
        ""
      );
    };
  var Ok = function (a) {
    var b = a.h;
    a = a.g;
    return "" === a
      ? b
      : "boolean" === typeof a
      ? a
        ? b
        : ""
      : Fa(a)
      ? 0 === a.length
        ? b
        : b + "=" + a.join()
      : b + "=" + (Za(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a));
  };
  var Qk = function (a) {
    var b = void 0 === b ? !0 : b;
    this.g = new Lk();
    void 0 !== a && Mk(this.g, a);
    b && this.g.add("v", yi, -16);
  };
  Qk.prototype.toString = function () {
    var a = "//pagead2.googlesyndication.com//pagead/gen_204",
      b = Pk(this.g);
    0 < b.length && (a += "?" + b);
    return a;
  };
  var Rk = function (a) {
      var b = [],
        c = [];
      ob(a, function (d, e) {
        if (!(e in Object.prototype) && "undefined" != typeof d)
          switch ((Fa(d) && (d = d.join(",")), (d = [e, "=", d].join("")), e)) {
            case "adk":
            case "r":
            case "tt":
            case "error":
            case "mtos":
            case "tos":
            case "p":
            case "bs":
            case "aio":
            case "nio":
            case "iem":
              b.unshift(d);
              break;
            case "req":
            case "url":
            case "referrer":
            case "iframe_loc":
              c.push(d);
              break;
            default:
              b.push(d);
          }
      });
      return b.concat(c);
    },
    Sk = function () {
      if (yi && "unreleased" !== yi) return yi;
    },
    Tk = function (a) {
      var b = void 0 === b ? 4e3 : b;
      a = a.toString();
      if (!/&v=[^&]+/.test(a)) {
        var c = Sk();
        a = c ? a + "&v=" + encodeURIComponent(c) : a;
      }
      a = a.substring(0, b);
      lj(a);
    };
  var Uk = function () {
    this.g = 0;
  };
  Da(Uk);
  var Vk = function (a, b, c) {
    z(a.h, function (d) {
      var e = a.g;
      if (!d.g && (d.l(b, c), d.o())) {
        d.g = !0;
        var f = d.h(),
          g = new Lk();
        g.add("id", "av-js");
        g.add("type", "verif");
        g.add("vtype", d.w);
        d = Uk.B();
        g.add("i", d.g++);
        g.add("adk", e);
        Nk(g, f);
        e = new Qk(g);
        Tk(e);
      }
    });
  };
  var Wk = function () {
      this.h = this.l = this.o = this.g = 0;
    },
    Xk = function (a, b, c, d) {
      b && ((a.g += c), (a.h += c), (a.o += c), (a.l = Math.max(a.l, a.o)));
      if (void 0 === d ? !b : d) a.o = 0;
    };
  var Yk = [1, 0.75, 0.5, 0.3, 0],
    Zk = function (a) {
      this.h = a = void 0 === a ? Yk : a;
      this.g = Ta(this.h, function () {
        return new Wk();
      });
    },
    al = function (a, b) {
      return $k(
        a,
        function (c) {
          return c.g;
        },
        void 0 === b ? !0 : b
      );
    },
    cl = function (a, b) {
      return bl(a, b, function (c) {
        return c.g;
      });
    },
    dl = function (a, b) {
      return $k(
        a,
        function (c) {
          return c.l;
        },
        void 0 === b ? !0 : b
      );
    },
    el = function (a, b) {
      return bl(a, b, function (c) {
        return c.l;
      });
    },
    fl = function (a, b) {
      return bl(a, b, function (c) {
        return c.h;
      });
    },
    gl = function (a) {
      z(a.g, function (b) {
        b.h = 0;
      });
    },
    hl = function (a, b, c, d, e, f, g) {
      g = void 0 === g ? !0 : g;
      c = f ? Math.min(b, c) : c;
      for (f = 0; f < a.h.length; f++) {
        var h = a.h[f],
          k = 0 < c && c >= h;
        h = !(0 < b && b >= h) || d;
        Xk(a.g[f], g && k, e, !g || h);
      }
    },
    $k = function (a, b, c) {
      a = Ta(a.g, function (d) {
        return b(d);
      });
      return c ? a : il(a);
    },
    bl = function (a, b, c) {
      var d = Ya(a.h, function (e) {
        return b <= e;
      });
      return -1 == d ? 0 : c(a.g[d]);
    },
    il = function (a) {
      return Ta(a, function (b, c, d) {
        return 0 < c ? d[c] - d[c - 1] : d[c];
      });
    };
  var jl = function () {
      this.l = new Zk();
      this.V = new Wk();
      this.F = this.C = -1;
      this.$ = 1e3;
      this.ca = new Zk([1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0]);
      this.N = this.H = -1;
    },
    kl = function (a, b) {
      return dl(a.l, void 0 === b ? !0 : b);
    };
  jl.prototype.J = function (a, b, c, d) {
    this.C = -1 != this.C ? Math.min(this.C, b.W) : b.W;
    this.F = Math.max(this.F, b.W);
    this.H = -1 != this.H ? Math.min(this.H, b.ha) : b.ha;
    this.N = Math.max(this.N, b.ha);
    hl(this.ca, b.ha, c.ha, b.g, a, d);
    hl(this.l, b.W, c.W, b.g, a, d);
    c = d || c.Va != b.Va ? c.isVisible() && b.isVisible() : c.isVisible();
    b = !b.isVisible() || b.g;
    Xk(this.V, c, a, b);
  };
  jl.prototype.Wa = function () {
    return this.V.l >= this.$;
  };
  var ll = new F(0, 0, 0, 0),
    ml = function (a, b, c) {
      J.call(this);
      this.position = ll.clone();
      this.Ub = this.Nb();
      this.yc = -2;
      this.lg = u();
      this.Nd = -1;
      this.Bb = b;
      this.Ab = null;
      this.Mb = -1 != b;
      this.Cb = null;
      this.opacity = -1;
      this.ig = c;
      this.Pd = this.Vb = Ca;
      this.ia = new $i();
      this.ia.Pa = a;
      this.ia.g = a;
      this.Ga = !1;
      this.Sa = { Hc: null, Gc: null };
      this.Jd = !0;
      this.Gb = null;
      this.bb = !1;
      O.B().C++;
      this.td = 0;
      this.aa = this.qc();
      this.Ld = -1;
      this.U = null;
      this.fc = new F(0, 0, 0, 0);
      a = this.K = new Ti();
      N(a, "od", Di);
      M(N(a, "opac", L));
      N(a, "ue", L);
      M(N(a, "gcm", L));
      M(N(a, "cm", L));
      M(N(a, "xcm", L));
      M(N(a, "sela", L));
      M(N(a, "sbeos", L));
      M(N(a, "prf", L));
      M(N(a, "mwt", L));
      M(N(a, "lcs", L));
      N(a, "iogeo", L);
      M(N(a, "osddt", L));
      (a = this.ia.Pa) &&
        a.getAttribute &&
        !/-[a-z]/.test("googleAvInapp") &&
        (Zi && a.dataset
          ? "googleAvInapp" in a.dataset
          : a.hasAttribute
          ? a.hasAttribute("data-" + Hc())
          : a.getAttribute("data-" + Hc())) &&
        (Q.B().l = !0);
      1 == this.ig ? Ui(this.K, "od", 1) : Ui(this.K, "od", 0);
    };
  p(ml, J);
  l = ml.prototype;
  l.R = function () {
    this.ia.g &&
      (this.Sa.Hc &&
        (Fe(this.ia.g, "mouseover", this.Sa.Hc), (this.Sa.Hc = null)),
      this.Sa.Gc &&
        (Fe(this.ia.g, "mouseout", this.Sa.Gc), (this.Sa.Gc = null)));
    this.Gb && this.Gb.Y();
    this.U && this.U.Y();
    delete this.Ub;
    delete this.Vb;
    delete this.Pd;
    delete this.ia.Pa;
    delete this.ia.g;
    delete this.Sa;
    delete this.Gb;
    delete this.U;
    delete this.K;
    J.prototype.R.call(this);
  };
  l.sa = function () {
    return this.U ? this.U.g : this.position;
  };
  l.Lc = function (a) {
    O.B().Lc(a);
  };
  l.Ba = function () {
    return !1;
  };
  l.Nb = function () {
    return new jl();
  };
  l.oa = function () {
    return this.Ub;
  };
  var nl = function (a, b) {
    b != a.bb && ((a.bb = b), (a = Q.B()), b ? a.A++ : 0 < a.A && a.A--);
  };
  ml.prototype.zc = function () {};
  ml.prototype.Qd = function () {};
  var ol = function (a, b, c) {
      var d = a.aa.ha,
        e = c ? a.aa.W : a.td,
        f = a.sa();
      a.fc &&
        !Ke(a.fc, new F(0, 0, 0, 0)) &&
        (e = Le(a.fc.clone(), f.left, f.top));
      a.lb(f, e, b, c, !1, {}, a.vb(b), d);
    },
    pl = function (a, b) {
      b = b.create(a.ia.g, a.K, a.Ba());
      if ((b = null != b && b.Bc() ? b : null)) a.U = b;
    },
    ql = function (a, b, c) {
      if (!a.Ab || -1 === b.g || -1 === a.Ab.g) return 0;
      a = b.g - a.Ab.g;
      return a > c ? 0 : a;
    };
  ml.prototype.pd = function (a) {
    return ql(this, a, 1e4);
  };
  var rl = function (a, b, c) {
      if (a.U) {
        a.U.Ea();
        var d = a.U.o,
          e = d.l(),
          f = e.g;
        if (null != d.h) {
          var g = d.A;
          a.Cb = new Vd(g.left - f.left, g.top - f.top);
          a.fc = d.h;
        }
        f = vk(d, a.Fb());
        g = {};
        null !== e.volume && (g.volume = e.volume);
        var h = O.B().K;
        e =
          Va([], function (k) {
            return 1 === Vi(h, k);
          }) || 1 === Vi(a.K, "osddt");
        "nis" == a.U.getName() && (e = !0);
        "gsv" == a.U.getName() && (e = !0);
        e
          ? ((e = a.pd(d)), (a.Ab = d), a.lb(a.sa(), f, b, c, !1, g, e, d.o))
          : a.lb(a.sa(), f, b, c, !1, g, a.vb(b), d.o);
      }
    },
    sl = function (a) {
      if (a.Mb && a.Gb) {
        var b = 1 == Vi(a.K, "od"),
          c = Q.B().g,
          d = a.Gb,
          e = a.U ? a.U.getName() : O.B().U,
          f = new D(c.h(), c.g());
        c = a.Fb();
        a = { jg: e, Cb: a.Cb, og: f, Fb: c, W: a.aa.W, mg: b };
        if ((b = d.l)) {
          b.Ea();
          e = b.o;
          f = e.l().g;
          var g = null,
            h = null;
          null != e.h &&
            f &&
            ((g = e.A),
            (g = new Vd(g.left - f.left, g.top - f.top)),
            (h = new D(f.right - f.left, f.bottom - f.top)));
          e = vk(e, c);
          c = { jg: b.getName(), Cb: g, og: h, Fb: c, mg: !1, W: e };
        } else c = null;
        c && Vk(d, a, c);
      }
    };
  l = ml.prototype;
  l.lb = function (a, b, c, d, e, f, g, h) {
    if (!this.Ga) {
      "number" !== typeof b &&
        (this.Cb = new Vd(a.left - b.left, a.top - b.top));
      if (this.Mb) {
        f = this.kc(a, b, d, f, h);
        e = e && this.aa.W >= (this.Va() ? 0.3 : 0.5);
        this.Tc(g, f, e);
        this.Bb = c;
        0 < f.W && -1 === this.Ld && (this.Ld = c);
        -1 == this.Nd && this.Wa() && (this.Nd = c);
        if (-2 == this.yc)
          try {
            a: if (
              ((b = "number" === typeof b ? null : b),
              a && a != ll && 0 != pk(this.sa()))
            ) {
              var k = Q.B();
              if (!b) {
                if (!k.g) {
                  var m = -1;
                  break a;
                }
                b = new F(0, k.g.h(), k.g.g(), 0);
              }
              m = b.h && 0 < b.h() && b.g && 0 < b.g() ? this.ub(a, b) : -1;
            } else m = -1;
            this.yc = m;
          } catch (n) {
            Ej(207, n);
          }
        this.aa = f;
        d && (this.aa.W = 0);
      }
      this.Vb(this);
    }
  };
  l.Tc = function (a, b, c) {
    this.oa().J(a, b, this.aa, c);
  };
  l.qc = function () {
    return new Ei();
  };
  l.kc = function (a, b, c, d, e) {
    e = void 0 === e ? -1 : e;
    d = this.qc();
    d.g = c;
    c = jj().h;
    c = 0 === mg(Id) ? -1 : c.isVisible() ? 0 : 1;
    d.h = c;
    if ("number" === typeof b) (d.W = this.ub(b)), (d.ha = e);
    else {
      d.W = this.ub(a, b);
      var f;
      0 <= e
        ? (f = e)
        : (f = (d.W * pk(a)) / (B.screen.height * B.screen.width));
      d.ha = f;
    }
    d.Va = this.Va();
    return d;
  };
  l.qd = function (a, b) {
    if (-1 == this.Bb) return 0;
    a = a - this.Bb || 1;
    return a > b ? 1 : a;
  };
  l.vb = function (a) {
    return this.qd(a, 1e4);
  };
  l.ub = function (a, b) {
    if (0 === this.opacity && 1 === Vi(this.K, "opac")) return 0;
    if ("number" === typeof a) return a;
    a = nk(a, b);
    var c = 1 == Vi(this.K, "od");
    if (0 >= pk(this.sa()) || sk(a, b, this.ia.g, c)) return 0;
    c = pk(a) / pk(this.sa());
    b = ok(a, b);
    return this.Fb() ? Math.max(c, b) : c;
  };
  l.Va = function () {
    return !1;
  };
  l.Fb = function () {
    return !1;
  };
  var tl = function (a, b, c, d) {
    if (d) a.position = d;
    else {
      b = c ? b : b.top;
      a.position = ll.clone();
      try {
        a.ia.g && (a.position = mk(a.ia.g, b));
      } catch (e) {}
    }
  };
  ml.prototype.ua = function () {
    return 0;
  };
  ml.prototype.Wa = function () {
    return this.Ub.Wa();
  };
  var ul = function (a, b) {
      b = Math.pow(10, b);
      return Math.floor(a * b) / b;
    },
    vl = function (a) {
      a.Bb = -1;
      a.Ab = null;
      a.zc(Lj());
    },
    wl = function (a, b) {
      O.B();
      if ((b = void 0 === b ? Ca : b)) a.Pd = b;
    };
  var xl =
      "StopIteration" in q
        ? q.StopIteration
        : { message: "StopIteration", stack: "" },
    yl = function () {};
  yl.prototype.next = function () {
    throw xl;
  };
  yl.prototype.Hb = function () {
    return this;
  };
  var zl = function (a) {
      if (a instanceof yl) return a;
      if ("function" == typeof a.Hb) return a.Hb(!1);
      if (Ga(a)) {
        var b = 0,
          c = new yl();
        c.next = function () {
          for (;;) {
            if (b >= a.length) throw xl;
            if (b in a) return a[b++];
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    Al = function (a, b) {
      if (Ga(a))
        try {
          z(a, b, void 0);
        } catch (c) {
          if (c !== xl) throw c;
        }
      else {
        a = zl(a);
        try {
          for (;;) b.call(void 0, a.next(), void 0, a);
        } catch (c) {
          if (c !== xl) throw c;
        }
      }
    };
  var Bl = function () {
      this.o = this.g = this.l = this.h = this.w = 0;
    },
    Cl = function (a) {
      var b = {};
      var c = u() - a.w;
      b = ((b.ptlt = c), b);
      (c = a.h) && (b.pnk = c);
      (c = a.l) && (b.pnc = c);
      (c = a.o) && (b.pnmm = c);
      (a = a.g) && (b.pns = a);
      return b;
    };
  var Dl = function () {
    Ei.call(this);
    this.l = !1;
    this.volume = void 0;
    this.w = !1;
    this.o = -1;
  };
  p(Dl, Ei);
  var El = function (a) {
    return ck(a.volume) && 0.1 <= a.volume;
  };
  var Fl = function () {
      var a = {};
      this.h =
        ((a.vs = [1, 0]),
        (a.vw = [0, 1]),
        (a.am = [2, 2]),
        (a.a = [4, 4]),
        (a.f = [8, 8]),
        (a.bm = [16, 16]),
        (a.b = [32, 32]),
        (a.avw = [0, 64]),
        (a.avs = [64, 0]),
        (a.pv = [256, 256]),
        (a.gdr = [0, 512]),
        (a.p = [0, 1024]),
        (a.r = [0, 2048]),
        (a.m = [0, 4096]),
        (a.um = [0, 8192]),
        (a.ef = [0, 16384]),
        (a.s = [0, 32768]),
        (a.pmx = [0, 16777216]),
        a);
      this.g = {};
      for (var b in this.h) 0 < this.h[b][1] && (this.g[b] = 0);
      this.l = 0;
    },
    Gl = function (a, b) {
      var c = a.h[b],
        d = c[1];
      a.l += c[0];
      0 < d && 0 == a.g[b] && (a.g[b] = 1);
    },
    Il = function (a) {
      return Hl(a, wb(a.h));
    },
    Hl = function (a, b) {
      var c = 0,
        d;
      for (d in a.g)
        Za(b, d) && 1 == a.g[d] && ((c += a.h[d][1]), (a.g[d] = 2));
      return c;
    },
    Jl = function (a) {
      var b = 0,
        c;
      for (c in a.g) {
        var d = a.g[c];
        if (1 == d || 2 == d) b += a.h[c][1];
      }
      return b;
    };
  var Kl = function () {
    this.h = this.l = 0;
  };
  Kl.prototype.g = function () {
    return this.l;
  };
  var Ll = function (a, b, c) {
    32 <= b ||
      (a.h & (1 << b) && !c
        ? (a.l &= ~(1 << b))
        : a.h & (1 << b) || !c || (a.l |= 1 << b),
      (a.h |= 1 << b));
  };
  var Ml = function () {
    jl.call(this);
    this.g = new Wk();
    this.P = this.I = this.L = 0;
    this.G = -1;
    this.ma = new Wk();
    this.w = new Wk();
    this.h = new Zk();
    this.A = this.o = -1;
    this.D = new Wk();
    this.$ = 2e3;
    this.O = new Kl();
    this.Z = new Kl();
    this.X = new Kl();
  };
  p(Ml, jl);
  var Nl = function (a, b, c) {
    var d = a.P;
    Kj || c || -1 == a.G || (d += b - a.G);
    return d;
  };
  Ml.prototype.J = function (a, b, c, d) {
    if (!b.w) {
      jl.prototype.J.call(this, a, b, c, d);
      var e = El(b) && El(c),
        f = 0.5 <= (d ? Math.min(b.W, c.W) : c.W);
      ck(b.volume) &&
        ((this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume),
        (this.A = Math.max(this.A, b.volume)));
      f && ((this.L += a), (this.I += e ? a : 0));
      hl(this.h, b.W, c.W, b.g, a, d, e);
      Xk(this.g, !0, a);
      Xk(this.w, e, a);
      Xk(this.D, c.l, a);
      Xk(this.ma, e && !f, a);
      a = Math.floor(b.o / 1e3);
      Ll(this.O, a, b.isVisible());
      Ll(this.Z, a, 1 <= b.W);
      Ll(this.X, a, El(b));
    }
  };
  var Ol = function () {
    this.g = !1;
  };
  var Pl = function (a, b) {
    this.g = !1;
    this.o = a;
    this.G = b;
    this.h = 0;
  };
  p(Pl, Ol);
  var Ql = function (a, b) {
    return a.l(b) ? ((b = a.G.report(a.o, b)), (a.h |= b), 0 == b) : !1;
  };
  Pl.prototype.l = function () {
    return !0;
  };
  Pl.prototype.w = function () {
    return !1;
  };
  Pl.prototype.getId = function () {
    var a = this,
      b = Bb(function (c) {
        return c == a.o;
      });
    return Rj[b].toString();
  };
  Pl.prototype.toString = function () {
    var a = "";
    this.w() && (a += "c");
    this.g && (a += "s");
    0 < this.h && (a += ":" + this.h);
    return this.getId() + a;
  };
  var Rl = new F(0, 0, 0, 0),
    Sl = {},
    Tl =
      ((Sl.firstquartile = 0),
      (Sl.midpoint = 1),
      (Sl.thirdquartile = 2),
      (Sl.complete = 3),
      Sl),
    Ul = function (a, b, c, d, e, f) {
      e = void 0 === e ? null : e;
      f = void 0 === f ? [] : f;
      ml.call(this, b, c, d);
      this.$ = 0;
      this.o = {};
      this.ea = new Fl();
      this.wd = {};
      this.ga = "";
      this.Qa = null;
      this.nd = !1;
      this.g = [];
      this.C = e;
      this.D = f;
      this.w = null;
      this.A = -1;
      this.pa = this.J = void 0;
      this.L = this.O = 0;
      this.X = -1;
      this.ad = this.rb = !1;
      this.nb = this.ld = 0;
      this.ra = !1;
      this.hd = -1;
      this.V = this.F = this.h = 0;
      this.rd = this.ma = -1;
      this.kd = 0;
      this.$c = new Zk();
      this.Z = this.Da = this.ca = 0;
      this.qb = -1;
      this.pb = 0;
      this.H = !1;
      this.da = 0;
      this.ob = !1;
      this.N = Ca;
      this.P = [this.Nb()];
      this.we = 2;
      b = Q.B();
      tl(this, a, b.h);
      this.Ya = {};
      this.Ya.pause = "p";
      this.Ya.resume = "r";
      this.Ya.skip = "s";
      this.Ya.mute = "m";
      this.Ya.unmute = "um";
      this.Ya.exitfullscreen = "ef";
      this.l = null;
    };
  p(Ul, ml);
  Ul.prototype.Ba = function () {
    return !0;
  };
  var Vl = function (a, b, c) {
    a.da = 1;
    a.o = {};
    a.o.firstquartile = !1;
    a.o.midpoint = !1;
    a.o.thirdquartile = !1;
    a.o.complete = !1;
    a.o.pause = !1;
    a.o.skip = !1;
    a.o.viewable_impression = !1;
    a.$ = 0;
    c || (a.oa().G = b);
  };
  Ul.prototype.Od = function () {
    if (this.C) {
      var a = this.C;
      a.g || (a.g = Ql(a, this));
    }
  };
  Ul.prototype.zc = function (a) {
    var b = this,
      c = a - this.hd;
    (this.ra && 1e3 >= c) ||
      ((c = Ba("ima.bridge.getNativeViewability")),
      t(c) &&
        (c(this.ga, function (d) {
          b.ra = !1;
          b.H && (b.ob = !0);
          Cb(d) && b.pb++;
          b.Qd(d);
        }),
        (this.ra = !0),
        (this.hd = a)));
  };
  var Wl = function (a) {
    return void 0 !== a ? (Number(a) ? ul(a, 3) : 0) : a;
  };
  l = Ul.prototype;
  l.Qd = function (a) {
    var b = a.opt_nativeViewBounds || {},
      c = a.opt_nativeViewVisibleBounds || {},
      d = a.opt_nativeTime || -1,
      e = a.opt_nativeVolume;
    b = new F(
      b.top || 0,
      b.left + b.width || 0,
      b.top + b.height || 0,
      b.left || 0
    );
    a = a.opt_nativeViewHidden
      ? Rl.clone()
      : new F(
          c.top || 0,
          c.left + c.width || 0,
          c.top + c.height || 0,
          c.left || 0
        );
    c = {};
    if ("n" == this.w || "ml" == this.w) c.volume = e;
    this.position = b;
    this.lb(b, a, d, !1, !0, c, this.vb(d), -1);
  };
  l.pd = function (a) {
    return ql(this, a, Math.max(1e4, this.A / 3));
  };
  l.vb = function (a) {
    return 2 == this.da
      ? 0
      : ml.prototype.qd.call(this, a, Math.max(1e4, this.A / 3));
  };
  l.lb = function (a, b, c, d, e, f, g, h) {
    var k = this,
      m = this.N(this) || {};
    Gb(m, f);
    this.A = m.duration || this.A;
    this.J = m.isVpaid || this.J;
    this.pa = m.isYouTube || this.pa;
    f = Xl(this, c);
    1 === Yl(this) && (g = f);
    ml.prototype.lb.call(this, a, b, c, d, e, m, g, h);
    this.C &&
      this.C.g &&
      z(this.D, function (n) {
        n.g || (n.g = Ql(n, k));
      });
  };
  l.Tc = function (a, b, c) {
    ml.prototype.Tc.call(this, a, b, c);
    Zl(this).J(a, b, this.aa, c);
    this.ad = El(this.aa) && El(b);
    -1 == this.X && this.rb && (this.X = this.oa().g.g);
    this.ea.l = 0;
    a = this.Wa();
    b.isVisible() && Gl(this.ea, "vs");
    a && Gl(this.ea, "vw");
    ck(b.volume) && Gl(this.ea, "am");
    El(b) && Gl(this.ea, "a");
    this.bb && Gl(this.ea, "f");
    -1 != b.h && (Gl(this.ea, "bm"), 1 == b.h && Gl(this.ea, "b"));
    El(b) && b.isVisible() && Gl(this.ea, "avs");
    this.ad && a && Gl(this.ea, "avw");
    0 < b.W && Gl(this.ea, "pv");
    $l(this, this.oa().g.g, !0) && Gl(this.ea, "gdr");
    2e3 <= el(this.oa().l, 1) && Gl(this.ea, "pmx");
  };
  l.Nb = function () {
    return new Ml();
  };
  l.oa = function () {
    return this.Ub;
  };
  var Zl = function (a, b) {
    var c;
    null != b && b < a.P.length ? (c = b) : (c = a.P.length - 1);
    return a.P[c];
  };
  Ul.prototype.qc = function () {
    return new Dl();
  };
  Ul.prototype.kc = function (a, b, c, d, e) {
    a = ml.prototype.kc.call(this, a, b, c, d, void 0 === e ? -1 : e);
    a.l = this.bb;
    a.w = 2 == this.da;
    a.volume = d.volume;
    ck(a.volume) ||
      (this.ld++, (b = this.aa), ck(b.volume) && (a.volume = b.volume));
    d = d.currentTime;
    a.o = void 0 !== d && 0 <= d ? d : -1;
    return a;
  };
  var Yl = function (a) {
      var b = !!Vi(O.B().K, "umt");
      return a.J || (!b && !a.pa) ? 0 : 1;
    },
    Xl = function (a, b) {
      b = a.vb(b);
      var c = a.N(a) || {};
      c = void 0 !== c.currentTime ? c.currentTime : a.O;
      var d = c - a.O,
        e = 0;
      0 <= d
        ? ((a.L += b), (a.Z += Math.max(b - d, 0)), (e = Math.min(d, a.L)))
        : (a.Da += Math.abs(d));
      0 != d && (a.L = 0);
      -1 == a.qb && 0 < d && (a.qb = 0 <= Jj ? Lj() - Jj : -1);
      a.O = c;
      return e;
    };
  Ul.prototype.ub = function (a, b) {
    return this.H ? 0 : this.bb ? 1 : ml.prototype.ub.call(this, a, b);
  };
  Ul.prototype.ua = function () {
    return 1;
  };
  Ul.prototype.getDuration = function () {
    return this.A;
  };
  var am = function (a, b) {
      Va(a.D, function (c) {
        return c.o == b.o;
      }) || a.D.push(b);
    },
    $l = function (a, b, c) {
      return 15e3 <= b
        ? !0
        : a.rb
        ? (void 0 === c ? 0 : c)
          ? !0
          : bm(a.A)
          ? b >= a.A / 2
          : bm(a.X)
          ? b >= a.X
          : !1
        : !1;
    },
    bm = function (a) {
      return 1 == Vi(O.B().K, "gmpd") ? 0 < a : -1 != a;
    },
    cm = function (a) {
      var b = {},
        c = Q.B();
      b.insideIframe = c.h;
      b.unmeasurable = a.Ga;
      b.position = a.sa();
      b.exposure = a.aa.W;
      b.documentSize = c.o;
      b.viewportSize = new D(c.g.h(), c.g.g());
      null != a.l && (b.presenceData = a.l);
      b.screenShare = a.aa.ha;
      return b;
    },
    dm = function (a) {
      var b = ul(a.aa.W, 2),
        c = a.ea.l,
        d = a.aa,
        e = Zl(a),
        f = Wl(e.o),
        g = Wl(e.A),
        h = Wl(d.volume),
        k = ul(e.C, 2),
        m = ul(e.F, 2),
        n = ul(d.W, 2),
        w = ul(e.H, 2),
        x = ul(e.N, 2);
      d = ul(d.ha, 2);
      a = a.sa().clone();
      a.round();
      e = kl(e, !1);
      return {
        ng: b,
        yb: c,
        Wb: f,
        Rb: g,
        sb: h,
        Xb: k,
        Sb: m,
        W: n,
        Yb: w,
        Tb: x,
        ha: d,
        position: a,
        ac: e,
      };
    },
    fm = function (a, b) {
      em(a.g, b, function () {
        return {
          ng: 0,
          yb: void 0,
          Wb: -1,
          Rb: -1,
          sb: -1,
          Xb: -1,
          Sb: -1,
          W: -1,
          Yb: -1,
          Tb: -1,
          ha: -1,
          position: void 0,
          ac: [],
        };
      });
      a.g[b] = dm(a);
    },
    em = function (a, b, c) {
      for (var d = a.length; d < b + 1; ) a.push(c()), d++;
    },
    im = function (a, b, c) {
      var d = a.wd[b];
      if (null != d) return d;
      d = gm(a, b);
      var e = Bb(function (f) {
        return f == b;
      });
      c = hm(a, d, d, c, Tl[Ab[e]]);
      "fully_viewable_audible_half_duration_impression" == b &&
        ((c.std = "csm"), (c.ic = Hl(a.ea, ["gdr"])));
      return c;
    },
    jm = function (a, b, c) {
      var d = [b];
      if (a != b || c != b) d.unshift(a), d.push(c);
      return d;
    },
    hm = function (a, b, c, d, e) {
      if (a.Ga) return { if: 0 };
      var f = a.sa().clone();
      f.round();
      var g = Q.B(),
        h = O.B(),
        k = a.oa(),
        m = {};
      m["if"] = g.h ? 1 : void 0;
      m.sdk = a.w ? a.w : void 0;
      m.t = a.lg;
      m.p = [f.top, f.left, f.bottom, f.right];
      m.tos = al(k.l, !1);
      m.mtos = kl(k);
      m.mcvt = k.V.l;
      m.ps = void 0;
      f = Nl(k, Lj(), 2 == a.da);
      m.vht = f;
      m.mut = k.ma.l;
      m.a = Wl(a.aa.volume);
      m.mv = Wl(k.A);
      m.fs = a.bb ? 1 : 0;
      m.ft = k.D.g;
      m.at = k.w.g;
      m.as = 0.1 <= k.o ? 1 : 0;
      m.atos = al(k.h);
      m.ssb = al(k.ca, !1);
      m.amtos = dl(k.h);
      m.uac = a.ld;
      m.vpt = k.g.g;
      "nio" == h.U && ((m.nio = 1), (m.avms = "nio"));
      m.gmm = "4";
      m.gdr = $l(a, k.g.g, !0) ? 1 : 0;
      m.efpf = a.we;
      0 < a.pb && (m.nnut = a.pb);
      m.tcm = Yl(a);
      m.nmt = a.Da;
      m.bt = a.Z;
      m.pst = a.qb;
      m.vpaid = a.J;
      m.dur = a.A;
      m.vmtime = a.O;
      m.is = a.ea.l;
      1 <= a.g.length &&
        ((m.i0 = a.g[0].yb),
        (m.a0 = [a.g[0].sb]),
        (m.c0 = [a.g[0].W]),
        (m.ss0 = [a.g[0].ha]),
        (f = a.g[0].position),
        (m.p0 = f ? [f.top, f.left, f.bottom, f.right] : void 0));
      2 <= a.g.length &&
        ((m.i1 = a.g[1].yb),
        (m.a1 = jm(a.g[1].Wb, a.g[1].sb, a.g[1].Rb)),
        (m.c1 = jm(a.g[1].Xb, a.g[1].W, a.g[1].Sb)),
        (m.ss1 = jm(a.g[1].Yb, a.g[1].ha, a.g[1].Tb)),
        (f = a.g[1].position),
        (m.p1 = f ? [f.top, f.left, f.bottom, f.right] : void 0),
        (m.mtos1 = a.g[1].ac));
      3 <= a.g.length &&
        ((m.i2 = a.g[2].yb),
        (m.a2 = jm(a.g[2].Wb, a.g[2].sb, a.g[2].Rb)),
        (m.c2 = jm(a.g[2].Xb, a.g[2].W, a.g[2].Sb)),
        (m.ss2 = jm(a.g[2].Yb, a.g[2].ha, a.g[2].Tb)),
        (f = a.g[2].position),
        (m.p2 = f ? [f.top, f.left, f.bottom, f.right] : void 0),
        (m.mtos2 = a.g[2].ac));
      4 <= a.g.length &&
        ((m.i3 = a.g[3].yb),
        (m.a3 = jm(a.g[3].Wb, a.g[3].sb, a.g[3].Rb)),
        (m.c3 = jm(a.g[3].Xb, a.g[3].W, a.g[3].Sb)),
        (m.ss3 = jm(a.g[3].Yb, a.g[3].ha, a.g[3].Tb)),
        (f = a.g[3].position),
        (m.p3 = f ? [f.top, f.left, f.bottom, f.right] : void 0),
        (m.mtos3 = a.g[3].ac));
      m.cs = Jl(a.ea);
      b &&
        ((m.ic = Il(a.ea)),
        (m.dvpt = k.g.h),
        (m.dvs = fl(k.l, 0.5)),
        (m.dfvs = fl(k.l, 1)),
        (m.davs = fl(k.h, 0.5)),
        (m.dafvs = fl(k.h, 1)),
        c && ((k.g.h = 0), gl(k.l), gl(k.h)),
        a.Wa() &&
          ((m.dtos = k.L),
          (m.dav = k.I),
          (m.dtoss = a.$ + 1),
          c && ((k.L = 0), (k.I = 0), a.$++)),
        (m.dat = k.w.h),
        (m.dft = k.D.h),
        c && ((k.w.h = 0), (k.D.h = 0)));
      m.ps = [g.o.width, g.o.height];
      m.bs = [g.g.h(), g.g.g()];
      m.scs = [g.w.width, g.w.height];
      m.dom = g.F;
      a.nb && (m.vds = a.nb);
      if (0 < a.D.length || a.C)
        (b = db(a.D)),
          a.C && b.push(a.C),
          (m.pings = Ta(b, function (n) {
            return n.toString();
          }));
      b = Ta(
        Sa(a.D, function (n) {
          return n.w();
        }),
        function (n) {
          return n.getId();
        }
      );
      eb(b);
      m.ces = b;
      a.h && (m.vmer = a.h);
      a.F && (m.vmmk = a.F);
      a.V && (m.vmiec = a.V);
      m.avms = a.U ? a.U.getName() : O.B().U;
      a.U && Gb(m, a.U.La());
      "exc" == h.U &&
        ((m.femt = a.ma),
        (m.femvt = a.rd),
        (m.emc = a.kd),
        (m.emb = al(a.$c, !1)),
        (m.emuc = a.ca),
        (m.avms = "exc"));
      d
        ? ((m.c = ul(a.aa.W, 2)), (m.ss = ul(a.aa.ha, 2)))
        : (m.tth = Lj() - Ij);
      m.mc = ul(k.F, 2);
      m.nc = ul(k.C, 2);
      m.mv = Wl(k.A);
      m.nv = Wl(k.o);
      m.lte = ul(a.yc, 2);
      d = Zl(a, e);
      kl(k);
      m.qmtos = kl(d);
      m.qnc = ul(d.C, 2);
      m.qmv = Wl(d.A);
      m.qnv = Wl(d.o);
      m.qas = 0.1 <= d.o ? 1 : 0;
      m.qi = a.ga;
      m.avms || (m.avms = "geo");
      m.psm = k.O.h;
      m.psv = k.O.g();
      m.psfv = k.Z.g();
      m.psa = k.X.g();
      h = Xi(h.K);
      h.length && (m.veid = h);
      a.l && Gb(m, Cl(a.l));
      return m;
    },
    gm = function (a, b) {
      if (Za(Qj, b)) return !0;
      var c = a.o[b];
      return void 0 !== c ? ((a.o[b] = !0), !c) : !1;
    };
  var km = u(),
    nm = function () {
      this.g = {};
      var a = E();
      lm(this, a, document);
      var b = mm();
      try {
        if ("1" == b) {
          for (var c = a.parent; c != a.top; c = c.parent)
            lm(this, c, c.document);
          lm(this, a.top, a.top.document);
        }
      } catch (d) {}
    },
    mm = function () {
      var a = document.documentElement;
      try {
        if (!ue(E().top)) return "2";
        var b = [],
          c = E(a.ownerDocument);
        for (a = c; a != c.top; a = a.parent)
          if (a.frameElement) b.push(a.frameElement);
          else break;
        return b && 0 != b.length ? "1" : "0";
      } catch (d) {
        return "2";
      }
    },
    lm = function (a, b, c) {
      Vj(
        c,
        "mousedown",
        function () {
          return om(a);
        },
        301
      );
      Vj(
        b,
        "scroll",
        function () {
          return pm(a);
        },
        302
      );
      Vj(
        c,
        "touchmove",
        function () {
          return qm(a);
        },
        303
      );
      Vj(
        c,
        "mousemove",
        function () {
          return rm(a);
        },
        304
      );
      Vj(
        c,
        "keydown",
        function () {
          return sm(a);
        },
        305
      );
    },
    om = function (a) {
      ob(a.g, function (b) {
        1e5 < b.l || ++b.l;
      });
    },
    pm = function (a) {
      ob(a.g, function (b) {
        1e5 < b.g || ++b.g;
      });
    },
    qm = function (a) {
      ob(a.g, function (b) {
        1e5 < b.g || ++b.g;
      });
    },
    sm = function (a) {
      ob(a.g, function (b) {
        1e5 < b.h || ++b.h;
      });
    },
    rm = function (a) {
      ob(a.g, function (b) {
        1e5 < b.o || ++b.o;
      });
    };
  var tm = function () {
      this.g = [];
      this.h = [];
    },
    um = function (a, b) {
      return Xa(a.g, function (c) {
        return c.ga == b;
      });
    },
    vm = function (a, b) {
      return b
        ? Xa(a.g, function (c) {
            return c.ia.Pa == b;
          })
        : null;
    },
    wm = function (a, b) {
      return Xa(a.h, function (c) {
        return 2 == c.ua() && c.ga == b;
      });
    },
    ym = function () {
      var a = xm;
      return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : cb(a.h, a.g);
    };
  tm.prototype.reset = function () {
    this.g = [];
    this.h = [];
  };
  var zm = function (a, b) {
      a = 1 == b.ua() ? a.g : a.h;
      var c = Wa(a, function (d) {
        return d == b;
      });
      return -1 != c ? (a.splice(c, 1), b.U && b.U.Cc(), b.Y(), !0) : !1;
    },
    Am = function (a) {
      var b = xm;
      if (zm(b, a)) {
        switch (a.ua()) {
          case 0:
            var c = function () {
              return null;
            };
          case 2:
            c = function () {
              return wm(b, a.ga);
            };
            break;
          case 1:
            c = function () {
              return um(b, a.ga);
            };
        }
        for (var d = c(); d; d = c()) zm(b, d);
      }
    },
    Bm = function (a) {
      var b = xm;
      a = Sa(a, function (c) {
        return !vm(b, c.ia.Pa);
      });
      b.g.push.apply(b.g, ca(a));
    },
    Cm = function (a) {
      var b = xm,
        c = [];
      z(a, function (d) {
        Va(b.g, function (e) {
          return e.ia.Pa === d.ia.Pa && e.ga === d.ga;
        }) || (b.g.push(d), c.push(d));
      });
    };
  Da(tm);
  var xm = tm.B();
  var Dm = function () {
      this.g = this.h = null;
    },
    Em = function (a, b) {
      if (null == a.h) return !1;
      var c = function (d, e) {
        b(d, e);
      };
      a.g = Xa(a.h, function (d) {
        return null != d && d.Ac();
      });
      a.g && (a.g.yd(c) ? Ck(a.g.g) : b(a.g.g.Za(), a.g));
      return null != a.g;
    };
  Da(Dm);
  var Fm = function (a, b, c, d) {
    Gk.call(this, a, b, c, d);
  };
  p(Fm, Gk);
  Fm.prototype.D = function (a) {
    var b = 1 == Vi(this.K, "od");
    return sk(a, this.w, this.element, b);
  };
  Fm.prototype.cd = function () {
    var a = this.h.l();
    this.timestamp = -1 === a.time ? Lj() : a.time;
  };
  Fm.prototype.Ea = function () {
    this.cd();
    this.Ib();
    this.bd();
    var a = nk(this.g, this.w);
    var b = a.top >= a.bottom || a.left >= a.right ? new F(0, 0, 0, 0) : a;
    a = this.h.l();
    var c = 0,
      d = 0,
      e = 0;
    0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) &&
      (this.D(b)
        ? (b = new F(0, 0, 0, 0))
        : ((c = Q.B().w),
          (e = new F(0, c.height, c.width, 0)),
          (c = ok(b, this.g)),
          (d = ok(b, Q.B().g)),
          (e = ok(b, e))));
    b =
      b.top >= b.bottom || b.left >= b.right
        ? new F(0, 0, 0, 0)
        : Le(b, -this.g.left, -this.g.top);
    this.o = new uk(a, this.g, b, c, d, this.timestamp, e);
  };
  Fm.prototype.getName = function () {
    return this.h.getName();
  };
  var Hm = function (a) {
    a = Gm(a);
    Hk.call(this, a.length ? a[a.length - 1] : new yk(B, 0));
    this.l = a;
    this.h = null;
  };
  p(Hm, Hk);
  l = Hm.prototype;
  l.getName = function () {
    return (this.h ? this.h : this.g).getName();
  };
  l.La = function () {
    return (this.h ? this.h : this.g).La();
  };
  l.Fa = function () {
    return (this.h ? this.h : this.g).Fa();
  };
  l.yd = function (a) {
    var b = !1;
    z(this.l, function (c) {
      c.Fc() && (b = !0);
    });
    b && ((this.o = a), Bk(this.g, this));
    return b;
  };
  l.Y = function () {
    z(this.l, function (a) {
      a.Y();
    });
    Hk.prototype.Y.call(this);
  };
  l.Ac = function () {
    return Va(this.l, function (a) {
      return a.Bd();
    });
  };
  l.gb = function () {
    return Va(this.l, function (a) {
      return a.$b();
    });
  };
  l.Zb = function (a, b, c) {
    return new Fm(a, this.g, b, c);
  };
  l.Oa = function (a) {
    this.h = a.h;
  };
  var Gm = function (a) {
    if (!a.length) return [];
    a = Sa(a, function (c) {
      return null != c && c.Bd();
    });
    for (var b = 1; b < a.length; b++) Bk(a[b - 1], a[b]);
    return a;
  };
  var Im = function (a, b, c, d) {
    Gk.call(this, a, b, c, d);
    this.I = this.G = null;
  };
  p(Im, Fm);
  Im.prototype.Bc = function () {
    var a = this;
    this.I || (this.I = Lj());
    if (
      Cj(298, function () {
        return Jm(a);
      })
    )
      return !0;
    Ak(this.h, "msf");
    return !1;
  };
  var Lm = function (a, b) {
      try {
        if (b.length) {
          a.G || (a.G = Lj());
          var c = Km(b),
            d = Ue(a.element, a.h.g.la),
            e = d.x,
            f = d.y;
          a.g = new F(
            Math.round(f),
            Math.round(e) + c.boundingClientRect.width,
            Math.round(f) + c.boundingClientRect.height,
            Math.round(e)
          );
          var g = ak(c.intersectionRect);
          a.w = Le(g, a.g.left - g.left, a.g.top - g.top);
        }
      } catch (h) {
        a.Cc(), Ej(299, h);
      }
    },
    Km = function (a) {
      return Ua(
        a,
        function (b, c) {
          return b.time > c.time ? b : c;
        },
        a[0]
      );
    };
  Im.prototype.Ib = function () {};
  Im.prototype.D = function () {
    return !1;
  };
  Im.prototype.bd = function () {};
  Im.prototype.La = function () {
    var a = {};
    return Object.assign(
      this.h.La(),
      ((a.niot_obs = this.I), (a.niot_cbk = this.G), a)
    );
  };
  var Mm = { threshold: [0, 0.3, 0.5, 0.75, 1] },
    Nm = function (a, b, c, d) {
      Im.call(this, a, b, c, d);
      this.A = this.C = this.l = null;
    };
  p(Nm, Im);
  Nm.prototype.getName = function () {
    return "nio";
  };
  Nm.prototype.Cc = function () {
    if (this.l && this.element)
      try {
        this.l.unobserve(this.element),
          this.C
            ? (this.C.unobserve(this.element), (this.C = null))
            : this.A && (this.A.disconnect(), (this.A = null));
      } catch (a) {}
  };
  var Om = function (a) {
      return a.l && a.l.takeRecords ? a.l.takeRecords() : [];
    },
    Jm = function (a) {
      if (!a.element) return !1;
      var b = a.element,
        c = a.h.g.la,
        d = O.B().g.g;
      a.l = new c.IntersectionObserver(
        qj(d, function (e) {
          return Lm(a, e);
        }),
        Mm
      );
      d = qj(d, function () {
        a.l.unobserve(b);
        a.l.observe(b);
        Lm(a, Om(a));
      });
      c.ResizeObserver
        ? ((a.C = new c.ResizeObserver(d)), a.C.observe(b))
        : c.MutationObserver &&
          ((a.A = new q.MutationObserver(d)),
          a.A.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0,
          }));
      a.l.observe(b);
      Lm(a, Om(a));
      return !0;
    };
  Nm.prototype.Ea = function () {
    var a = Om(this);
    0 < a.length && Lm(this, a);
    Im.prototype.Ea.call(this);
  };
  var Pm = function (a) {
    a = void 0 === a ? B : a;
    Hk.call(this, new yk(a, 2));
  };
  p(Pm, Hk);
  Pm.prototype.getName = function () {
    return "nio";
  };
  Pm.prototype.gb = function () {
    return (
      "exc" !== O.B().U && !Q.B().l && null != this.g.g.la.IntersectionObserver
    );
  };
  Pm.prototype.Zb = function (a, b, c) {
    return new Nm(a, this.g, b, c);
  };
  var Rm = function () {
    var a = Qm();
    yk.call(this, B.top, a, "geo");
  };
  p(Rm, yk);
  Rm.prototype.P = function () {
    return Q.B().g;
  };
  Rm.prototype.$b = function () {
    var a = Qm();
    this.I !== a &&
      (this.g != this && a > this.g.I && ((this.g = this), zk(this)),
      (this.I = a));
    return 2 == a;
  };
  var Qm = function () {
    O.B();
    var a = Q.B();
    return a.h || a.l ? 0 : 2;
  };
  Da(Rm);
  var Sm = function () {};
  Da(Sm);
  var Tm = function (a, b, c) {
    J.call(this);
    this.o = null != c ? Ma(a, c) : a;
    this.l = b;
    this.h = Ma(this.ag, this);
    this.g = [];
  };
  y(Tm, J);
  l = Tm.prototype;
  l.jb = !1;
  l.Eb = 0;
  l.Ta = null;
  l.md = function (a) {
    this.g = arguments;
    this.Ta || this.Eb ? (this.jb = !0) : Um(this);
  };
  l.stop = function () {
    this.Ta &&
      (q.clearTimeout(this.Ta),
      (this.Ta = null),
      (this.jb = !1),
      (this.g = []));
  };
  l.pause = function () {
    this.Eb++;
  };
  l.resume = function () {
    this.Eb--;
    this.Eb || !this.jb || this.Ta || ((this.jb = !1), Um(this));
  };
  l.R = function () {
    Tm.wa.R.call(this);
    this.stop();
  };
  l.ag = function () {
    this.Ta = null;
    this.jb && !this.Eb && ((this.jb = !1), Um(this));
  };
  var Um = function (a) {
    a.Ta = di(a.h, a.l);
    a.o.apply(null, a.g);
  };
  var Vm = function () {
      this.done = !1;
      this.g = { fe: 0, Xc: 0, Oc: 0, jd: 0, tc: -1, he: 0, ge: 0, ie: 0 };
      this.D = this.o = this.C = this.w = this.G = null;
      this.F = !1;
      this.h = null;
      this.H = 0;
      this.l = new wk(this);
    },
    Wm = function () {
      var a = O.B().U;
      return "nio" === a || "aio" === a || "omid" === a;
    },
    Zm = function () {
      var a = Xm;
      if (!a.F) {
        a.F = !0;
        if (!a.G && !Wm()) {
          var b = Dj(137, function (c) {
            for (var d = [], e = 0; e < arguments.length; ++e)
              d[e - 0] = arguments[e];
            return a.A.apply(a, ca(d));
          });
          a.w = new Tm(b, 100);
          a.G = Vj(
            B,
            "scroll",
            function (c) {
              for (var d = [], e = 0; e < arguments.length; ++e)
                d[e - 0] = arguments[e];
              null !== a.w && a.w.md.apply(a.w, ca(d));
            },
            138
          );
        }
        a.C ||
          Wm() ||
          ((b = Dj(140, function (c) {
            for (var d = [], e = 0; e < arguments.length; ++e)
              d[e - 0] = arguments[e];
            return a.A.apply(a, ca(d));
          })),
          (a.o = new Tm(b, 100)),
          (a.C = Vj(
            B,
            "resize",
            function (c) {
              for (var d = [], e = 0; e < arguments.length; ++e)
                d[e - 0] = arguments[e];
              null !== a.o && a.o.md.apply(a.o, ca(d));
            },
            141
          )));
        Ym(a, function (c) {
          for (var d = [], e = 0; e < arguments.length; ++e)
            d[e - 0] = arguments[e];
          return a.I.apply(a, ca(d));
        });
        a.I();
      }
    };
  Vm.prototype.A = function () {
    $m(this, ym(), !1);
  };
  Vm.prototype.ca = function () {
    $m(this, ym(), !1);
  };
  var an = function () {
      Sm.B();
      var a = Dm.B();
      null != a.g && a.g.g ? Ck(a.g.g) : hk(Q.B());
    },
    $m = function (a, b, c) {
      if (!a.done && (a.l.cancel(), 0 != b.length)) {
        a.h = null;
        try {
          an();
          var d = Lj(),
            e = O.B();
          e.A = d;
          if (null != Dm.B().g) for (e = 0; e < b.length; e++) rl(b[e], d, c);
          else
            switch (e.U) {
              case "exc":
                for (e = 0; e < b.length; e++) ol(b[e], d, c);
                break;
              case "nis":
                for (e = 0; e < b.length; e++) b[e].zc(d);
            }
          for (e = 0; e < b.length; e++) sl(b[e]);
          a.g.Oc += Lj() - d;
          ++a.g.jd;
        } finally {
          c
            ? z(b, function (f) {
                f.aa.W = 0;
              })
            : xk(a.l);
        }
      }
    },
    Ym = function (a, b) {
      if (!a.D) {
        b = Dj(142, b);
        jj();
        var c = ng(Id);
        c && Ee(Id, c, b, { capture: !1 }) && (a.D = b);
      }
    };
  Vm.prototype.I = function () {
    var a = kk(),
      b = Lj();
    a
      ? (Kj ||
          ((Gj = b),
          z(xm.g, function (c) {
            var d = c.oa();
            d.P = Nl(d, b, 1 != c.da);
          })),
        (Kj = !0))
      : ((this.H = bn(this, b)),
        (Kj = !1),
        (Ij = b),
        z(xm.g, function (c) {
          c.Mb && (c.oa().G = b);
        }));
    $m(this, ym(), !a);
  };
  var cn = function () {
      var a = Dm.B();
      if (null != a.g) {
        var b = a.g;
        z(ym(), function (c) {
          return pl(c, b);
        });
      }
    },
    bn = function (a, b) {
      a = a.H;
      Kj && (a += b - Gj);
      return a;
    },
    dn = function (a) {
      var b = Xm;
      a =
        void 0 === a
          ? function () {
              return {};
            }
          : a;
      zj.Qc("av-js");
      vj.g = 0.01;
      Bj([
        function (c) {
          var d = O.B(),
            e = {};
          e = ((e.bin = d.l), (e.type = "error"), e);
          d = Wi(d.K);
          if (!b.h) {
            var f = B.document,
              g = 0 <= Hj ? Lj() - Hj : -1,
              h = Lj();
            -1 == b.g.tc && (g = h);
            var k = Q.B(),
              m = O.B(),
              n = Wi(m.K),
              w = ym();
            try {
              if (0 < w.length) {
                var x = k.g;
                x && (n.bs = [x.h(), x.g()]);
                var v = k.o;
                v && (n.ps = [v.width, v.height]);
                B.screen && (n.ss = [B.screen.width, B.screen.height]);
              } else
                (n.url = encodeURIComponent(B.location.href.substring(0, 512))),
                  f.referrer &&
                    (n.referrer = encodeURIComponent(
                      f.referrer.substring(0, 512)
                    ));
              n.tt = g;
              n.pt = Hj;
              n.bin = m.l;
              switch (O.B().U) {
                case "iem":
                  n.iem = 1;
                  break;
                case "aio":
                  n.aio = 1;
                  break;
                case "nio":
                  n.nio = 1;
              }
              void 0 !== B.google_osd_load_pub_page_exp &&
                (n.olpp = B.google_osd_load_pub_page_exp);
              n.deb = [
                1,
                b.g.fe,
                b.g.Xc,
                b.g.Oc,
                b.g.jd,
                b.g.tc,
                0,
                b.l.h,
                b.g.he,
                b.g.ge,
                b.g.ie,
              ].join("-");
              n.tvt = bn(b, h);
              k.l && (n.inapp = 1);
              if (null !== B && B != B.top) {
                0 < w.length &&
                  (n.iframe_loc = encodeURIComponent(
                    B.location.href.substring(0, 512)
                  ));
                var C = k.G;
                n.is = [C.h(), C.g()];
              }
            } catch (Sb) {
              n.error = 1;
            }
            b.h = n;
          }
          v = b.h;
          x = {};
          for (var H in v) x[H] = v[H];
          H = O.B().g;
          if (1 == Vi(H.l, "prf")) {
            v = new oj();
            C = H.g;
            f = 0;
            -1 < C.g && (f = C.o.g.now() - C.g);
            v = Ed(v, 1, C.l + f);
            C = H.g;
            v = Ed(v, 5, -1 < C.g ? C.h + 1 : C.h);
            v = Ed(v, 2, H.h.g.l());
            v = Ed(v, 3, H.h.g.h());
            C = Ed(v, 4, H.h.g.g());
            H = {};
            v = new vd();
            f = Cd(C, 1);
            f = null == f ? f : +f;
            f = null == f ? 0 : f;
            if (0 !== f && ((g = f), null != g)) {
              td(v.g, 9);
              f = v.g;
              k = g;
              k = (g = 0 > k ? 1 : 0) ? -k : k;
              if (0 === k) (rd = 0 < 1 / k ? 0 : 2147483648), (qd = 0);
              else if (isNaN(k)) (rd = 2147483647), (qd = 4294967295);
              else if (1.7976931348623157e308 < k)
                (rd = ((g << 31) | 2146435072) >>> 0), (qd = 0);
              else if (2.2250738585072014e-308 > k)
                (k /= Math.pow(2, -1074)),
                  (rd = ((g << 31) | (k / 4294967296)) >>> 0),
                  (qd = k >>> 0);
              else {
                m = k;
                h = 0;
                if (2 <= m) for (; 2 <= m && 1023 > h; ) h++, (m /= 2);
                else for (; 1 > m && -1022 < h; ) (m *= 2), h--;
                k *= Math.pow(2, -h);
                rd =
                  ((g << 31) |
                    ((h + 1023) << 20) |
                    ((1048576 * k) & 1048575)) >>>
                  0;
                qd = (4503599627370496 * k) >>> 0;
              }
              ud(f, qd);
              ud(f, rd);
            }
            f = Dd(C, 2);
            0 !== f && null != f && wd(v, 2, f);
            f = Dd(C, 3);
            0 !== f && null != f && wd(v, 3, f);
            f = Dd(C, 4);
            0 !== f && null != f && wd(v, 4, f);
            f = Dd(C, 5);
            if (0 !== f && null != f && null != f)
              if ((td(v.g, 40), (C = v.g), 0 <= f)) td(C, f);
              else {
                for (g = 0; 9 > g; g++) C.g.push((f & 127) | 128), (f >>= 7);
                C.g.push(1);
              }
            C = new Uint8Array(v.l + v.g.length());
            g = v.h;
            h = g.length;
            for (k = f = 0; k < h; k++)
              (m = g[k]), C.set(m, f), (f += m.length);
            g = v.g.end();
            C.set(g, f);
            v.h = [C];
            H = ((H.pf = pd(C)), H);
          } else H = {};
          Gb(x, H);
          Gb(c, e, d, x, a());
          if ((e = Sk())) (d = {}), Gb(c, ((d.v = encodeURIComponent(e)), d));
        },
      ]);
    };
  Da(Vm);
  var Xm = Vm.B();
  var en = null,
    fn = "",
    gn = !1,
    hn = function () {
      var a = en || B;
      if (!a) return "";
      var b = [];
      if (!a.location || !a.location.href) return "";
      b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
      a.document &&
        a.document.referrer &&
        b.push(
          "referrer=" +
            encodeURIComponent(a.document.referrer.substring(0, 512))
        );
      return b.join("&");
    };
  var jn = function (a) {
      return function (b) {
        return void 0 === b[a] ? 0 : b[a];
      };
    },
    ln = function () {
      var a = [0, 2, 4];
      return function (b) {
        b = b.tos;
        if (Fa(b)) {
          for (var c = Array(b.length), d = 0; d < b.length; d++)
            c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
          return void 0 !== a ? kn(c, a) : c;
        }
      };
    },
    mn = function (a, b, c, d) {
      c = void 0 === c ? !0 : c;
      d =
        void 0 === d
          ? function () {
              return !0;
            }
          : d;
      return function (e) {
        var f = e[a];
        if (Fa(f) && d(e)) return kn(f, b, c);
      };
    },
    nn = function (a, b) {
      return function (c) {
        return b(c) ? c[a] : void 0;
      };
    },
    on = function (a) {
      return function (b) {
        for (var c = 0; c < a.length; c++)
          if (a[c] === b.e || (void 0 === a[c] && !b.hasOwnProperty("e")))
            return !0;
        return !1;
      };
    },
    kn = function (a, b, c) {
      return void 0 === c || c
        ? Sa(a, function (d, e) {
            return Za(b, e);
          })
        : Ta(b, function (d, e, f) {
            return a
              .slice(0 < e ? f[e - 1] + 1 : 0, d + 1)
              .reduce(function (g, h) {
                return g + h;
              }, 0);
          });
    };
  var pn = on([void 0, 1, 2, 3, 4, 8, 16]),
    qn = on([void 0, 4, 8, 16]),
    rn = {
      sv: "sv",
      cb: "cb",
      e: "e",
      nas: "nas",
      msg: "msg",
      if: "if",
      sdk: "sdk",
      p: "p",
      p0: nn("p0", qn),
      p1: nn("p1", qn),
      p2: nn("p2", qn),
      p3: nn("p3", qn),
      tos: "tos",
      mtos: "mtos",
      mtos1: mn("mtos1", [0, 2, 4], !1, qn),
      mtos2: mn("mtos2", [0, 2, 4], !1, qn),
      mtos3: mn("mtos3", [0, 2, 4], !1, qn),
      mcvt: "mcvt",
      ps: "ps",
      scs: "scs",
      bs: "bs",
      vht: "vht",
      mut: "mut",
      a: "a",
      a0: nn("a0", qn),
      a1: nn("a1", qn),
      a2: nn("a2", qn),
      a3: nn("a3", qn),
      ft: "ft",
      dft: "dft",
      at: "at",
      dat: "dat",
      as: "as",
      vpt: "vpt",
      gmm: "gmm",
      std: "std",
      efpf: "efpf",
      swf: "swf",
      nio: "nio",
      px: "px",
      nnut: "nnut",
      vmer: "vmer",
      vmmk: "vmmk",
      vmiec: "vmiec",
      nmt: "nmt",
      tcm: "tcm",
      bt: "bt",
      pst: "pst",
      vpaid: "vpaid",
      dur: "dur",
      vmtime: "vmtime",
      dtos: "dtos",
      dtoss: "dtoss",
      dvs: "dvs",
      dfvs: "dfvs",
      dvpt: "dvpt",
      fmf: "fmf",
      vds: "vds",
      is: "is",
      i0: "i0",
      i1: "i1",
      i2: "i2",
      i3: "i3",
      ic: "ic",
      cs: "cs",
      c: "c",
      c0: nn("c0", qn),
      c1: nn("c1", qn),
      c2: nn("c2", qn),
      c3: nn("c3", qn),
      mc: "mc",
      nc: "nc",
      mv: "mv",
      nv: "nv",
      qmt: nn("qmtos", pn),
      qnc: nn("qnc", pn),
      qmv: nn("qmv", pn),
      qnv: nn("qnv", pn),
      raf: "raf",
      rafc: "rafc",
      lte: "lte",
      ces: "ces",
      tth: "tth",
      femt: "femt",
      femvt: "femvt",
      emc: "emc",
      emuc: "emuc",
      emb: "emb",
      avms: "avms",
      nvat: "nvat",
      qi: "qi",
      psm: "psm",
      psv: "psv",
      psfv: "psfv",
      psa: "psa",
      pnk: "pnk",
      pnc: "pnc",
      pnmm: "pnmm",
      pns: "pns",
      ptlt: "ptlt",
      pngs: "pings",
      veid: "veid",
      ssb: "ssb",
      ss0: nn("ss0", qn),
      ss1: nn("ss1", qn),
      ss2: nn("ss2", qn),
      ss3: nn("ss3", qn),
      dc_rfl: "urlsigs",
      obd: "obd",
      omidp: "omidp",
      omidr: "omidr",
      omidv: "omidv",
      omida: "omida",
      omids: "omids",
    },
    sn = {
      c: jn("c"),
      at: "at",
      atos: mn("atos", [0, 2, 4]),
      ta: (function (a, b) {
        return function (c) {
          if (void 0 === c[a]) return b;
        };
      })("tth", "1"),
      a: "a",
      dur: "dur",
      p: "p",
      tos: ln(),
      j: "dom",
      mtos: mn("mtos", [0, 2, 4]),
      gmm: "gmm",
      gdr: "gdr",
      ss: jn("ss"),
      vsv: kb("w2"),
      t: "t",
    },
    tn = {
      atos: "atos",
      amtos: "amtos",
      avt: mn("atos", [2]),
      davs: "davs",
      dafvs: "dafvs",
      dav: "dav",
      ss: jn("ss"),
      t: "t",
    },
    un = {
      a: "a",
      tos: ln(),
      at: "at",
      c: jn("c"),
      mtos: mn("mtos", [0, 2, 4]),
      dur: "dur",
      fs: "fs",
      p: "p",
      vpt: "vpt",
      vsv: kb("ias_w2"),
      dom: "dom",
      gmm: "gmm",
      gdr: "gdr",
      t: "t",
    },
    vn = {
      tos: ln(),
      at: "at",
      c: jn("c"),
      mtos: mn("mtos", [0, 2, 4]),
      p: "p",
      vpt: "vpt",
      vsv: kb("dv_w4"),
      gmm: "gmm",
      gdr: "gdr",
      dom: "dom",
      t: "t",
      mv: "mv",
      qmpt: mn("qmtos", [0, 2, 4]),
      qvs: (function (a, b) {
        return function (c) {
          var d = c[a];
          if ("number" === typeof d)
            return Ta(b, function (e) {
              return 0 < d && d >= e ? 1 : 0;
            });
        };
      })("qnc", [1, 0.5, 0]),
      qmv: "qmv",
      qa: "qas",
      a: "a",
    };
  var xn = function (a, b) {
      var c = { sv: "813", cb: "j" };
      c.nas = xm.g.length;
      c.msg = a;
      void 0 !== b && (a = wn(b)) && (c.e = Rj[a]);
      return c;
    },
    yn = function (a) {
      return 0 == a.lastIndexOf("custom_metric_viewable", 0);
    },
    wn = function (a) {
      var b = yn(a) ? "custom_metric_viewable" : a.toLowerCase();
      return Bb(function (c) {
        return c == b;
      });
    };
  var zn = function (a) {
    Pl.call(this, "fully_viewable_audible_half_duration_impression", a);
  };
  p(zn, Pl);
  zn.prototype.l = function (a) {
    var b = cl(a.oa().h, 1);
    return $l(a, b);
  };
  var An = function (a, b) {
    Pl.call(this, a, b);
  };
  p(An, Pl);
  An.prototype.l = function (a) {
    return a.oa().Wa();
  };
  var Bn = function () {
    this.h = this.o = this.A = this.w = this.l = this.g = "";
  };
  var Cn = function () {},
    Dn = function (a, b, c, d, e) {
      var f = {};
      if (void 0 !== a)
        if (null != b)
          for (var g in b) {
            var h = b[g];
            g in Object.prototype ||
              (null != h && (t(h) ? (f[g] = h(a)) : (f[g] = a[h])));
          }
        else Gb(f, a);
      void 0 !== c && Gb(f, c);
      a = Pk(Nk(new Lk(), f));
      0 < a.length &&
        void 0 !== d &&
        void 0 !== e &&
        ((e = e(a)), (a += "&" + d + "=" + e));
      return a;
    };
  var En = function () {};
  p(En, Cn);
  En.prototype.g = function (a) {
    var b = new Bn();
    b.g = Dn(a, rn);
    b.l = Dn(a, tn);
    return b;
  };
  var Fn = new F(0, 0, 0, 0),
    Gn = function (a, b, c) {
      Gk.call(this, null, a, b, c);
      this.A = a.vc();
    };
  p(Gn, Fm);
  l = Gn.prototype;
  l.Bc = function () {
    this.l();
    return !0;
  };
  l.Oa = function () {
    Fm.prototype.Ea.call(this);
  };
  l.cd = function () {};
  l.Ib = function () {};
  l.Ea = function () {
    this.l();
    Fm.prototype.Ea.call(this);
  };
  l.$a = function (a) {
    a = a.vc();
    a !== this.A &&
      (a
        ? this.l()
        : ((Q.B().g = new F(0, 0, 0, 0)),
          (this.g = new F(0, 0, 0, 0)),
          (this.w = new F(0, 0, 0, 0)),
          (this.timestamp = -1)));
    this.A = a;
  };
  var Hn = function (a, b, c) {
    Gn.call(this, a, b, c);
  };
  p(Hn, Gn);
  Hn.prototype.l = function () {
    var a = Ba("ima.admob.getViewability"),
      b = Vi(this.K, "queryid");
    t(a) && b && a(b);
  };
  Hn.prototype.getName = function () {
    return "gsv";
  };
  var In = function (a) {
    a = void 0 === a ? B : a;
    Hk.call(this, new yk(a, 2));
  };
  p(In, Hk);
  In.prototype.getName = function () {
    return "gsv";
  };
  In.prototype.gb = function () {
    var a = Q.B();
    O.B();
    return a.l && !1;
  };
  In.prototype.Zb = function (a, b, c) {
    return new Hn(this.g, b, c);
  };
  var Jn = function (a, b, c) {
    Gn.call(this, a, b, c);
  };
  p(Jn, Gn);
  Jn.prototype.l = function () {
    var a = this,
      b = Ba("ima.bridge.getNativeViewability"),
      c = Vi(this.K, "queryid");
    t(b) &&
      c &&
      b(c, function (d) {
        var e = d.opt_nativeViewVisibleBounds || {},
          f = d.opt_nativeViewHidden;
        a.g = bk(d.opt_nativeViewBounds || {});
        var g = a.h.l();
        g.g = f ? Fn.clone() : bk(e);
        a.timestamp = d.opt_nativeTime || -1;
        Q.B().g = g.g;
        d = d.opt_nativeVolume;
        void 0 !== d && (g.volume = d);
      });
  };
  Jn.prototype.getName = function () {
    return "nis";
  };
  var Kn = function (a) {
    a = void 0 === a ? B : a;
    Hk.call(this, new yk(a, 2));
  };
  p(Kn, Hk);
  Kn.prototype.Ac = function () {
    return 1 === Vi(O.B().K, "imams") && this.gb();
  };
  Kn.prototype.getName = function () {
    return "nis";
  };
  Kn.prototype.gb = function () {
    var a = Q.B();
    O.B();
    return a.l && !1;
  };
  Kn.prototype.Zb = function (a, b, c) {
    return new Jn(this.g, b, c);
  };
  var Ln = function () {
    yk.call(this, B, 2, "mraid");
    this.$ = 0;
    this.J = this.L = !1;
    this.C = null;
    this.h = Sj(this.la);
    this.w.g = new F(0, 0, 0, 0);
    this.ma = !1;
  };
  p(Ln, yk);
  Ln.prototype.$b = function () {
    return null != this.h.ya;
  };
  Ln.prototype.O = function () {
    var a = {};
    this.$ && (a.mraid = this.$);
    this.L && (a.mlc = 1);
    a.mtop = this.h.Kd;
    this.C && (a.mse = this.C);
    this.ma && (a.msc = 1);
    a.mcp = this.h.Lb;
    return a;
  };
  Ln.prototype.G = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    try {
      return this.h.ya[a].apply(this.h.ya, c);
    } catch (e) {
      Ej(538, e, 0.01, function (f) {
        f.method = a;
      });
    }
  };
  var Mn = function (a, b, c) {
    a.G("addEventListener", b, c);
  };
  Ln.prototype.Fc = function () {
    var a = this;
    if (this.F) return !this.xb();
    this.F = !0;
    if (2 === this.h.Lb) return (this.C = "ng"), Ak(this, "w"), !1;
    if (1 === this.h.Lb) return (this.C = "mm"), Ak(this, "w"), !1;
    var b;
    if ((b = 1 != Vi(O.B().K, "mxd"))) {
      a: switch (this.h.Kd) {
        case 0:
        case 3:
          b = !0;
          break a;
        default:
          b = !1;
      }
      b = !b;
    }
    if (b) return (this.C = "if"), Ak(this, "w"), !1;
    Q.B().D = !0;
    this.la.document.readyState && "complete" == this.la.document.readyState
      ? Nn(this)
      : Vj(
          this.la,
          "load",
          function () {
            jj().setTimeout(
              Dj(292, function () {
                return Nn(a);
              }),
              100
            );
          },
          292
        );
    return !0;
  };
  var Nn = function (a) {
      O.B().w = !!a.G("isViewable");
      Mn(a, "viewableChange", On);
      "loading" === a.G("getState") ? Mn(a, "ready", Pn) : Qn(a);
    },
    Qn = function (a) {
      "string" === typeof a.h.ya.AFMA_LIDAR
        ? ((a.L = !0), Rn(a))
        : ((a.h.Lb = 3), (a.C = "nc"), Ak(a, "w"));
    },
    Rn = function (a) {
      a.J = !1;
      jj().setTimeout(
        Dj(524, function () {
          a.J || (Sn(a), Ej(540, Error()), (a.C = "mt"), Ak(a, "w"));
        }),
        500
      );
      Tn(a);
      Mn(a, a.h.ya.AFMA_LIDAR, Un);
    },
    Tn = function (a) {
      var b = 1 == Vi(O.B().K, "sneio"),
        c = void 0 !== a.h.ya.AFMA_LIDAR_EXP_1,
        d = void 0 !== a.h.ya.AFMA_LIDAR_EXP_2;
      (b = b && d) && (a.h.ya.AFMA_LIDAR_EXP_2 = !0);
      c && (a.h.ya.AFMA_LIDAR_EXP_1 = !b);
    },
    Sn = function (a) {
      a.G("removeEventListener", a.h.ya.AFMA_LIDAR, Un);
      a.L = !1;
    };
  Ln.prototype.X = function () {
    var a = Q.B(),
      b = Vn(this, "getMaxSize");
    a.g = new F(0, b.width, b.height, 0);
  };
  Ln.prototype.Z = function () {
    Q.B().w = Vn(this, "getScreenSize");
  };
  var Vn = function (a, b) {
    if ("loading" === a.G("getState")) return new D(-1, -1);
    b = a.G(b);
    if (!b) return new D(-1, -1);
    a = parseInt(b.width, 10);
    b = parseInt(b.height, 10);
    return isNaN(a) || isNaN(b) ? new D(-1, -1) : new D(a, b);
  };
  Ln.prototype.Y = function () {
    Sn(this);
    yk.prototype.Y.call(this);
  };
  var Pn = function () {
      try {
        var a = Ln.B();
        a.G("removeEventListener", "ready", Pn);
        Qn(a);
      } catch (b) {
        Ej(541, b);
      }
    },
    Un = function (a, b) {
      try {
        var c = Ln.B();
        c.J = !0;
        var d = a
          ? new F(a.y, a.x + a.width, a.y + a.height, a.x)
          : new F(0, 0, 0, 0);
        var e = Lj(),
          f = kk();
        var g = new tk(e, f, c);
        g.g = d;
        g.volume = b;
        c.Oa(g);
      } catch (h) {
        Ej(542, h);
      }
    },
    On = function (a) {
      var b = O.B(),
        c = Ln.B();
      a &&
        !b.w &&
        ((b.w = !0),
        (c.ma = !0),
        1 == Vi(O.B().K, "msp") && c.C && Ak(c, "w", !0));
    };
  Da(Ln);
  var Xn = function () {
    this.l = this.N = !1;
    this.g = null;
    this.o = new En();
    this.h = null;
    var a = {};
    this.J =
      ((a.start = this.ue),
      (a.firstquartile = this.pe),
      (a.midpoint = this.re),
      (a.thirdquartile = this.ve),
      (a.complete = this.ne),
      (a.pause = this.Kc),
      (a.resume = this.Hd),
      (a.skip = this.te),
      (a.viewable_impression = this.Na),
      (a.mute = this.kb),
      (a.unmute = this.kb),
      (a.fullscreen = this.qe),
      (a.exitfullscreen = this.oe),
      (a.fully_viewable_audible_half_duration_impression = this.Na),
      (a.measurable_impression = this.Na),
      (a.abandon = this.Kc),
      (a.engagedview = this.Na),
      (a.impression = this.Na),
      (a.creativeview = this.Na),
      (a.progress = this.kb),
      (a.custom_metric_viewable = this.Na),
      (a.bufferstart = this.Kc),
      (a.bufferfinish = this.Hd),
      a);
    a = {};
    this.P =
      ((a.overlay_resize = this.se),
      (a.abandon = this.rc),
      (a.close = this.rc),
      (a.collapse = this.rc),
      (a.overlay_unmeasurable_impression = function (b) {
        return im(b, "overlay_unmeasurable_impression", kk());
      }),
      (a.overlay_viewable_immediate_impression = function (b) {
        return im(b, "overlay_viewable_immediate_impression", kk());
      }),
      (a.overlay_unviewable_impression = function (b) {
        return im(b, "overlay_unviewable_impression", kk());
      }),
      (a.overlay_viewable_end_of_session_impression = function (b) {
        return im(b, "overlay_viewable_end_of_session_impression", kk());
      }),
      a);
    O.B().l = 3;
    Wn(this);
  };
  Xn.prototype.A = function (a) {
    nl(a, !1);
    Am(a);
  };
  Xn.prototype.C = function () {};
  var Yn = function (a, b, c, d) {
    b = a.I(null, d, !0, b);
    b.w = c;
    b.Vb = function (e) {
      a.D(e);
    };
    Bm([b]);
    return b;
  };
  Xn.prototype.I = function (a, b, c, d) {
    this.h || (this.h = this.gd());
    b = c ? b : -1;
    null == this.h || this.l
      ? (a = new Ul(B, a, b, 7))
      : ((c = this.h),
        (a = new Ul(B, a, b, 7, new Pl("measurable_impression", this.h), [
          new An("viewable_impression", c),
          new zn(c),
        ])));
    a.ga = d;
    d = a.K;
    d.g.queryid || (d.g.queryid = new Si());
    Ui(a.K, "queryid", a.ga);
    a.Lc("");
    return a;
  };
  var Zn = function () {
      var a = [];
      Q.B();
      var b = O.B();
      "exc" != b.U && a.push(Rm.B());
      Vi(b.K, "mvp_lv") && a.push(Ln.B());
      var c = [new In(), new Kn()];
      if ("exc" != b.U) {
        var d = 1 == Vi(b.K, "lvio");
        b = 1 == Vi(b.K, "etl");
        (d || b) && c.push(new Pm(B));
      }
      c.push(new Hm(a));
      return c;
    },
    ao = function (a) {
      if (!a.N) {
        a.N = !0;
        try {
          var b = Lj(),
            c = O.B(),
            d = Q.B();
          Hj = b;
          c.o = 79463069;
          "o" !== a.g && (en = Nf(B).la);
          if (1 === Vi(c.K, "imams") || "nis" !== c.U)
            if (kj()) {
              Xm.g.Xc = 0;
              Xm.g.tc = Lj() - b;
              var e = Zn(),
                f = Dm.B();
              f.h = e;
              Em(f, function () {
                $n();
              })
                ? Xm.done || (cn(), Bk(f.g.g, a), Zm())
                : d.h && "exc" !== c.U
                ? $n()
                : Zm();
            } else gn = !0;
        } catch (g) {
          throw (xm.reset(), g);
        }
      }
    },
    bo = function (a) {
      Xm.l.cancel();
      fn = a;
      Xm.done = !0;
    },
    co = function (a) {
      var b = O.B();
      if (a.g) return a.g;
      var c = Dm.B().g;
      if (c)
        switch (c.getName()) {
          case "nis":
            a.g = "n";
            break;
          case "gsv":
            a.g = "m";
        }
      else
        switch (b.U) {
          case "nis":
            a.g = "n";
        }
      a.g || (a.g = "h");
      return a.g;
    },
    eo = function (a, b, c) {
      if (null == a.h) return (b.nb |= 4), !1;
      a = a.h.report(c, b);
      b.nb |= a;
      return 0 == a;
    };
  Xn.prototype.$a = function (a) {
    switch (a.Fa()) {
      case 0:
        if ((a = Dm.B().g)) (a = a.g), ab(a.A, this), a.D && this.Ba() && Ek(a);
        $n();
        break;
      case 2:
        Zm();
    }
  };
  Xn.prototype.Oa = function () {};
  Xn.prototype.Ba = function () {
    return !1;
  };
  var $n = function () {
    var a = [new Pm(B)],
      b = Dm.B();
    b.h = a;
    Em(b, function () {
      bo("i");
    })
      ? Xm.done || (cn(), Zm())
      : bo("i");
  };
  Xn.prototype.O = function (a, b) {
    a.Ga = !0;
    switch (a.ua()) {
      case 1:
        fo(this, a, b);
        break;
      case 2:
        this.Nc(a);
    }
    this.Pc(a);
  };
  var fo = function (a, b, c) {
    if (!b.nd) {
      var d = im(b, "start", kk());
      a = a.o.g(d).g;
      var e = {};
      e.r = c;
      e.v = "813v";
      re(a, function (f, g) {
        return (e[f] = "mtos" == f || "tos" == f ? g : encodeURIComponent(g));
      });
      c = hn();
      re(c, function (f, g) {
        return (e[f] = encodeURIComponent(g));
      });
      e.id = "lidarvf";
      c =
        "//pagead2.googlesyndication.com/pagead/gen_204?" + Pk(Nk(new Lk(), e));
      Tk(c);
      b.nd = !0;
    }
  };
  l = Xn.prototype;
  l.ue = function (a) {
    fm(a, 0);
    return im(a, "start", kk());
  };
  l.kb = function (a, b, c) {
    $m(Xm, [a], !kk());
    return this.Na(a, b, c);
  };
  l.Na = function (a, b, c) {
    return im(a, c, kk());
  };
  l.pe = function (a) {
    return go(a, "firstquartile", 1);
  };
  l.re = function (a) {
    a.rb = !0;
    return go(a, "midpoint", 2);
  };
  l.ve = function (a) {
    return go(a, "thirdquartile", 3);
  };
  l.ne = function (a) {
    var b = go(a, "complete", 4);
    0 != a.da && (a.da = 3);
    return b;
  };
  var go = function (a, b, c) {
    $m(Xm, [a], !kk());
    fm(a, c);
    4 != c && em(a.P, c, a.Nb);
    return im(a, b, kk());
  };
  l = Xn.prototype;
  l.Hd = function (a, b, c) {
    b = kk();
    if (2 == a.da && !b) {
      var d = Lj();
      a.oa().G = d;
    }
    $m(Xm, [a], !b);
    2 == a.da && (a.da = 1);
    return im(a, c, b);
  };
  l.te = function (a, b) {
    b = this.kb(a, b || {}, "skip");
    0 != a.da && (a.da = 3);
    return b;
  };
  l.qe = function (a, b) {
    nl(a, !0);
    return this.kb(a, b || {}, "fullscreen");
  };
  l.oe = function (a, b) {
    nl(a, !1);
    return this.kb(a, b || {}, "exitfullscreen");
  };
  l.Kc = function (a, b, c) {
    b = a.oa();
    var d = Lj();
    b.P = Nl(b, d, 1 != a.da);
    $m(Xm, [a], !kk());
    1 == a.da && (a.da = 2);
    return im(a, c, kk());
  };
  l.se = function (a) {
    $m(Xm, [a], !kk());
    return a.h();
  };
  l.rc = function (a) {
    $m(Xm, [a], !kk());
    this.Gd(a);
    0 != a.da && (a.da = 3);
    return a.h();
  };
  var ho = function (a, b, c) {
      if (0 == b.da) {
        "i" != fn && (Xm.done = !1);
        var d = Dm.B();
        null != d.g && pl(b, d.g);
        wl(b, function (e) {
          for (var f = [], g = 0; g < arguments.length; ++g)
            f[g - 0] = arguments[g];
          return a.O.apply(a, ca(f));
        });
        b.ia.Pa && Sm.B();
        c = void 0 !== c ? c.opt_nativeTime : void 0;
        Jj = c = "number" === typeof c ? c : Lj();
        b.Mb = !0;
        d = kk();
        Vl(b, c, d);
        $m(Xm, [b], !d);
      }
    },
    Wn = function (a) {
      dn(function () {
        var b = io();
        null != a.g && (b.sdk = a.g);
        b.avms = O.B().U;
        return b;
      });
    },
    jo = function (a, b, c, d) {
      var e = vm(xm, c);
      null !== e && e.ga !== b && (a.A(e), (e = null));
      e ||
        ((b = a.I(c, Lj(), !1, b)),
        (c = Dm.B().g) && pl(b, c),
        (b.Vb = Ma(a.D, a)),
        0 == xm.h.length && (O.B().o = 79463069),
        Cm([b]),
        Zm(),
        (e = b),
        (e.w = co(a)),
        d && (e.Qa = d));
      return e;
    };
  Xn.prototype.D = function () {};
  var lo = function (a, b) {
    b.F = 0;
    for (var c in Nj) null == a[c] && (b.F |= Nj[c]);
    ko(a, "currentTime");
    ko(a, "duration");
  };
  l = Xn.prototype;
  l.Nc = function () {};
  l.Gd = function () {};
  l.xd = function () {};
  l.Pc = function () {};
  l.gd = function () {};
  var ko = function (a, b) {
      var c = a[b];
      void 0 !== c && 0 < c && (a[b] = Math.floor(1e3 * c));
    },
    io = function () {
      var a = Q.B(),
        b = {};
      return (
        (b.sv = "813"),
        (b["if"] = a.h ? "1" : "0"),
        (b.nas = String(xm.g.length)),
        b
      );
    };
  var mo = { Fg: "visible", rg: "audible", zh: "time", Bh: "timetype" },
    no = {
      visible: function (a) {
        return /^(100|[0-9]{1,2})$/.test(a);
      },
      audible: function (a) {
        return "0" == a || "1" == a;
      },
      timetype: function (a) {
        return "mtos" == a || "tos" == a;
      },
      time: function (a) {
        return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a);
      },
    },
    oo = function () {
      this.g = void 0;
      this.h = !1;
      this.l = 0;
      this.o = -1;
      this.w = "tos";
    },
    po = function (a) {
      try {
        var b = a.split(",");
        return b.length > wb(mo).length
          ? null
          : Ua(
              b,
              function (c, d) {
                d = d.toLowerCase().split("=");
                if (2 != d.length || void 0 === no[d[0]] || !no[d[0]](d[1]))
                  throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                c[d[0]] = d[1];
                return c;
              },
              {}
            );
      } catch (c) {
        return null;
      }
    },
    qo = function (a, b) {
      if (void 0 == a.g) return 0;
      switch (a.w) {
        case "mtos":
          return a.h ? el(b.h, a.g) : el(b.l, a.g);
        case "tos":
          return a.h ? cl(b.h, a.g) : cl(b.l, a.g);
      }
      return 0;
    };
  var ro = function (a, b, c, d) {
    Pl.call(this, b, d);
    this.C = a;
    this.A = c;
  };
  p(ro, Pl);
  ro.prototype.getId = function () {
    return this.C;
  };
  ro.prototype.w = function () {
    return !0;
  };
  ro.prototype.l = function (a) {
    var b = a.oa(),
      c = a.getDuration();
    return Va(this.A, function (d) {
      if (void 0 != d.g) var e = qo(d, b);
      else
        b: {
          switch (d.w) {
            case "mtos":
              e = d.h ? b.w.l : b.g.g;
              break b;
            case "tos":
              e = d.h ? b.w.g : b.g.g;
              break b;
          }
          e = 0;
        }
      0 == e
        ? (d = !1)
        : ((d = -1 != d.l ? d.l : void 0 !== c && 0 < c ? d.o * c : -1),
          (d = -1 != d && e >= d));
      return d;
    });
  };
  var so = u(),
    to = !1,
    uo = !1,
    vo = !1,
    wo = function (a) {
      return !a ||
        "function" !== typeof a ||
        0 > String(Function.prototype.toString).indexOf("[native code]")
        ? !1
        : (0 <= String(a).indexOf("[native code]") && !0) || !1;
    },
    xo = function (a) {
      return !!((1 << a) & so);
    },
    yo = [
      function (a) {
        return !(!a.chrome || !a.chrome.webstore);
      },
      function (a) {
        return !!a.document.documentMode;
      },
      function (a) {
        return !!a.document.fonts.ready;
      },
      function () {
        return xo(0);
      },
      function (a) {
        return !!a.ActiveXObject;
      },
      function (a) {
        return !!a.chrome;
      },
      function (a) {
        return !!a.navigator.serviceWorker;
      },
      function (a) {
        return !!a.opera;
      },
      function (a) {
        return !!a.sidebar;
      },
      function () {
        return !+"\v1";
      },
      function () {
        return xo(1);
      },
      function (a) {
        return !a.ActiveXObject;
      },
      function (a) {
        return "-ms-ime-align" in a.document.documentElement.style;
      },
      function (a) {
        return "-ms-scroll-limit" in a.document.documentElement.style;
      },
      function (a) {
        return "-webkit-font-feature-settings" in a.document.body.style;
      },
      function () {
        return xo(2);
      },
      function (a) {
        return "ActiveXObject" in a;
      },
      function (a) {
        return "MozAppearance" in a.document.documentElement.style;
      },
      function (a) {
        return "_phantom" in a;
      },
      function (a) {
        return "callPhantom" in a;
      },
      function (a) {
        return "content" in a.document.createElement("template");
      },
      function (a) {
        return "getEntriesByType" in a.performance;
      },
      function () {
        return xo(3);
      },
      function (a) {
        return "image-rendering" in a.document.body.style;
      },
      function (a) {
        return "object-fit" in a.document.body.style;
      },
      function (a) {
        return "open" in a.document.createElement("details");
      },
      function (a) {
        return "orientation" in a.screen;
      },
      function (a) {
        return "performance" in a;
      },
      function (a) {
        return "shape-image-threshold" in a.document.body.style;
      },
      function () {
        return xo(4);
      },
      function (a) {
        return "srcset" in a.document.createElement("img");
      },
      function () {
        return uo;
      },
      function () {
        return vo;
      },
      function () {
        return xo(5);
      },
      function (a) {
        a = a.document.createElement("div");
        a.style.width = "1px";
        a.style.width = "-webkit-min-content";
        a.style.width = "min-content";
        return "1px" != a.style.width;
      },
      function (a) {
        a = a.document.createElement("div");
        a.style.width = "1px";
        a.style.width = "calc(1px - 1px)";
        a.style.width = "-webkit-calc(1px - 1px)";
        return "1px" != a.style.width;
      },
      function () {
        var a = !1;
        eval(
          'var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }'
        );
        try {
          DummyFunction1();
        } catch (b) {
          a = !0;
        }
        return a;
      },
      function () {
        var a = !1;
        try {
          DummyFunction2();
        } catch (b) {
          a = !0;
        }
        return a;
      },
      function () {
        return !1;
      },
      function () {
        return xo(6);
      },
      function (a) {
        var b = a.document.createElement("canvas");
        b.width = b.height = 1;
        b = b.getContext("2d");
        b.globalCompositeOperation = "multiply";
        b.fillStyle = "rgb(0,255,255)";
        b.fillRect(0, 0, 1, 1);
        b.fill();
        b.fillStyle = "rgb(255,255,0)";
        b.fillRect(0, 0, 1, 1);
        b.fill();
        b = b.getImageData(0, 0, 1, 1).data;
        return (b[0] == b[2] && b[1] == b[3]) || wo(a.navigator.vibrate);
      },
      function (a) {
        a = a.document.createElement("canvas");
        a.width = a.height = 1;
        a = a.getContext("2d");
        a.globalCompositeOperation = "multiply";
        a.fillStyle = "rgb(0,255,255)";
        a.fillRect(0, 0, 1, 1);
        a.fill();
        a.fillStyle = "rgb(255,255,0)";
        a.fillRect(0, 0, 1, 1);
        a.fill();
        a = a.getImageData(0, 0, 1, 1).data;
        return a[0] == a[2] && a[1] == a[3];
      },
      function (a) {
        return wo(a.document.createElement("div").matches);
      },
      function (a) {
        a = a.document.createElement("input");
        a.setAttribute("type", "range");
        return "text" !== a.type;
      },
      function (a) {
        return a.CSS.supports("image-rendering", "pixelated");
      },
      function (a) {
        return a.CSS.supports("object-fit", "contain");
      },
      function () {
        return xo(7);
      },
      function (a) {
        return a.CSS.supports("object-fit", "inherit");
      },
      function (a) {
        return a.CSS.supports("shape-image-threshold", "0.9");
      },
      function (a) {
        return a.CSS.supports("word-break", "keep-all");
      },
      function () {
        return eval("1 == [for (item of [1,2,3]) item][0]");
      },
      function (a) {
        return wo(a.CSS.supports);
      },
      function () {
        return wo(Intl.Collator);
      },
      function (a) {
        return wo(a.document.createElement("dialog").show);
      },
      function () {
        return xo(8);
      },
      function (a) {
        return wo(
          a.document.createElement("div").animate(
            [
              { transform: "scale(1)", easing: "ease-in" },
              { transform: "scale(1.3)", easing: "ease-in" },
            ],
            { duration: 1300, iterations: 1 }
          ).reverse
        );
      },
      function (a) {
        return wo(a.document.createElement("div").animate);
      },
      function (a) {
        return wo(a.document.documentElement.webkitRequestFullScreen);
      },
      function (a) {
        return wo(a.navigator.getBattery);
      },
      function (a) {
        return wo(a.navigator.permissions.query);
      },
      function () {
        return !1;
      },
      function () {
        return xo(9);
      },
      function () {
        return wo(webkitRequestAnimationFrame);
      },
      function (a) {
        return wo(a.BroadcastChannel.call);
      },
      function (a) {
        return wo(a.FontFace);
      },
      function (a) {
        return wo(a.Gamepad);
      },
      function () {
        return xo(10);
      },
      function (a) {
        return wo(a.MutationEvent);
      },
      function (a) {
        return wo(a.MutationObserver);
      },
      function (a) {
        return wo(a.crypto.getRandomValues);
      },
      function (a) {
        return wo(a.document.body.createShadowRoot);
      },
      function (a) {
        return wo(a.document.body.webkitCreateShadowRoot);
      },
      function (a) {
        return wo(a.fetch);
      },
      function () {
        return xo(11);
      },
      function (a) {
        return wo(a.navigator.serviceWorker.register);
      },
      function (a) {
        return wo(a.navigator.webkitGetGamepads);
      },
      function (a) {
        return wo(a.speechSynthesis.speak);
      },
      function (a) {
        return wo(a.webkitRTCPeerConnection);
      },
      function (a) {
        return a.CSS.supports("--fake-var", "0");
      },
      function () {
        return xo(12);
      },
      function (a) {
        return a.CSS.supports("cursor", "grab");
      },
      function (a) {
        return a.CSS.supports("cursor", "zoom-in");
      },
      function (a) {
        return a.CSS.supports("image-orientation", "270deg");
      },
      function () {
        return xo(13);
      },
      function (a) {
        return a.CSS.supports("position", "sticky");
      },
      function (a) {
        return void 0 === a.document.createElement("style").scoped;
      },
      function (a) {
        return a.performance.getEntriesByType("resource") instanceof Array;
      },
      function () {
        return "undefined" == typeof InstallTrigger;
      },
      function () {
        return "object" == typeof new Intl.Collator().resolvedOptions();
      },
      function (a) {
        return "boolean" == typeof a.navigator.onLine;
      },
      function () {
        return xo(14);
      },
      function (a) {
        return "undefined" == typeof a.navigator.Jh;
      },
      function (a) {
        return "number" == typeof a.performance.now();
      },
      function () {
        return 0 == new Uint16Array(1)[0];
      },
      function (a) {
        return -1 == a.ActiveXObject.toString().indexOf("native");
      },
      function (a) {
        return (
          -1 ==
          Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")
        );
      },
    ],
    zo = [
      function (a) {
        a = a.document.createElement("div");
        var b = null,
          c = [
            "{45EA75A0-A269-11D1-B5BF-0000F8051515}",
            "{3AF36230-A269-11D1-B5BF-0000F8051515}",
            "{89820200-ECBD-11CF-8B85-00AA005B4383}",
          ];
        try {
          a.style.behavior = "url(#default#clientcaps)";
        } catch (e) {}
        for (var d = 0; d < c.length; d++) {
          try {
            b = a.getComponentVersion(c[d], "componentid").replace(/,/g, ".");
          } catch (e) {}
          if (b) return b.split(".")[0];
        }
        return !1;
      },
      function () {
        return new Date().getTimezoneOffset();
      },
      function (a) {
        return (
          (a.innerWidth ||
            a.document.documentElement.clientWidth ||
            a.document.body.clientWidth) /
          (a.innerHeight ||
            a.document.documentElement.clientHeight ||
            a.document.body.clientHeight)
        );
      },
      function (a) {
        return (
          (a.outerWidth ||
            (a.document && a.document.body && a.document.body.offsetWidth)) /
          (a.outerHeight ||
            (a.document && a.document.body && a.document.body.offsetHeight))
        );
      },
      function (a) {
        return a.screen.availWidth / a.screen.availHeight;
      },
      function (a) {
        return a.screen.width / a.screen.height;
      },
    ],
    Ao = [
      function (a) {
        return a.navigator.userAgent;
      },
      function (a) {
        return a.navigator.platform;
      },
      function (a) {
        return a.navigator.vendor;
      },
    ],
    Co = function () {
      try {
        Bo();
      } catch (d) {}
      var a = "a=1&b=" + so + "&",
        b = [],
        c = 99;
      z(yo, function (d, e) {
        var f = !1;
        try {
          f = d(B);
        } catch (g) {}
        b[(e / 32) >>> 0] |= f << e % 32;
      });
      z(b, function (d, e) {
        a += String.fromCharCode(c + e) + "=" + (d >>> 0).toString(16) + "&";
      });
      c = 105;
      z(zo, function (d) {
        var e = "false";
        try {
          e = d(B);
        } catch (f) {}
        a += String.fromCharCode(c++) + "=" + e + "&";
      });
      z(Ao, function (d) {
        var e = "";
        try {
          var f = d(B);
          d = [];
          for (var g = 0, h = 0; h < f.length; h++) {
            var k = f.charCodeAt(h);
            255 < k && ((d[g++] = k & 255), (k >>= 8));
            d[g++] = k;
          }
          e = pd(d, 3);
        } catch (m) {}
        a += String.fromCharCode(c++) + "=" + e + "&";
      });
      return a.slice(0, -1);
    },
    Bo = function () {
      if (!to) {
        var a = function () {
          uo = !0;
          B.document.removeEventListener("webdriver-evaluate", a, !0);
        };
        B.document.addEventListener("webdriver-evaluate", a, !0);
        var b = function () {
          vo = !0;
          B.document.removeEventListener("webdriver-evaluate-response", b, !0);
        };
        B.document.addEventListener("webdriver-evaluate-response", b, !0);
        to = !0;
      }
    };
  var Do = function () {
    this.h = 64;
    this.g = Array(4);
    this.w = Array(this.h);
    this.o = this.l = 0;
    this.reset();
  };
  y(Do, gi);
  Do.prototype.reset = function () {
    this.g[0] = 1732584193;
    this.g[1] = 4023233417;
    this.g[2] = 2562383102;
    this.g[3] = 271733878;
    this.o = this.l = 0;
  };
  var Eo = function (a, b, c) {
      c || (c = 0);
      var d = Array(16);
      if ("string" === typeof b)
        for (var e = 0; 16 > e; ++e)
          d[e] =
            b.charCodeAt(c++) |
            (b.charCodeAt(c++) << 8) |
            (b.charCodeAt(c++) << 16) |
            (b.charCodeAt(c++) << 24);
      else
        for (e = 0; 16 > e; ++e)
          d[e] = b[c++] | (b[c++] << 8) | (b[c++] << 16) | (b[c++] << 24);
      b = a.g[0];
      c = a.g[1];
      e = a.g[2];
      var f = a.g[3];
      var g = (b + (f ^ (c & (e ^ f))) + d[0] + 3614090360) & 4294967295;
      b = c + (((g << 7) & 4294967295) | (g >>> 25));
      g = (f + (e ^ (b & (c ^ e))) + d[1] + 3905402710) & 4294967295;
      f = b + (((g << 12) & 4294967295) | (g >>> 20));
      g = (e + (c ^ (f & (b ^ c))) + d[2] + 606105819) & 4294967295;
      e = f + (((g << 17) & 4294967295) | (g >>> 15));
      g = (c + (b ^ (e & (f ^ b))) + d[3] + 3250441966) & 4294967295;
      c = e + (((g << 22) & 4294967295) | (g >>> 10));
      g = (b + (f ^ (c & (e ^ f))) + d[4] + 4118548399) & 4294967295;
      b = c + (((g << 7) & 4294967295) | (g >>> 25));
      g = (f + (e ^ (b & (c ^ e))) + d[5] + 1200080426) & 4294967295;
      f = b + (((g << 12) & 4294967295) | (g >>> 20));
      g = (e + (c ^ (f & (b ^ c))) + d[6] + 2821735955) & 4294967295;
      e = f + (((g << 17) & 4294967295) | (g >>> 15));
      g = (c + (b ^ (e & (f ^ b))) + d[7] + 4249261313) & 4294967295;
      c = e + (((g << 22) & 4294967295) | (g >>> 10));
      g = (b + (f ^ (c & (e ^ f))) + d[8] + 1770035416) & 4294967295;
      b = c + (((g << 7) & 4294967295) | (g >>> 25));
      g = (f + (e ^ (b & (c ^ e))) + d[9] + 2336552879) & 4294967295;
      f = b + (((g << 12) & 4294967295) | (g >>> 20));
      g = (e + (c ^ (f & (b ^ c))) + d[10] + 4294925233) & 4294967295;
      e = f + (((g << 17) & 4294967295) | (g >>> 15));
      g = (c + (b ^ (e & (f ^ b))) + d[11] + 2304563134) & 4294967295;
      c = e + (((g << 22) & 4294967295) | (g >>> 10));
      g = (b + (f ^ (c & (e ^ f))) + d[12] + 1804603682) & 4294967295;
      b = c + (((g << 7) & 4294967295) | (g >>> 25));
      g = (f + (e ^ (b & (c ^ e))) + d[13] + 4254626195) & 4294967295;
      f = b + (((g << 12) & 4294967295) | (g >>> 20));
      g = (e + (c ^ (f & (b ^ c))) + d[14] + 2792965006) & 4294967295;
      e = f + (((g << 17) & 4294967295) | (g >>> 15));
      g = (c + (b ^ (e & (f ^ b))) + d[15] + 1236535329) & 4294967295;
      c = e + (((g << 22) & 4294967295) | (g >>> 10));
      g = (b + (e ^ (f & (c ^ e))) + d[1] + 4129170786) & 4294967295;
      b = c + (((g << 5) & 4294967295) | (g >>> 27));
      g = (f + (c ^ (e & (b ^ c))) + d[6] + 3225465664) & 4294967295;
      f = b + (((g << 9) & 4294967295) | (g >>> 23));
      g = (e + (b ^ (c & (f ^ b))) + d[11] + 643717713) & 4294967295;
      e = f + (((g << 14) & 4294967295) | (g >>> 18));
      g = (c + (f ^ (b & (e ^ f))) + d[0] + 3921069994) & 4294967295;
      c = e + (((g << 20) & 4294967295) | (g >>> 12));
      g = (b + (e ^ (f & (c ^ e))) + d[5] + 3593408605) & 4294967295;
      b = c + (((g << 5) & 4294967295) | (g >>> 27));
      g = (f + (c ^ (e & (b ^ c))) + d[10] + 38016083) & 4294967295;
      f = b + (((g << 9) & 4294967295) | (g >>> 23));
      g = (e + (b ^ (c & (f ^ b))) + d[15] + 3634488961) & 4294967295;
      e = f + (((g << 14) & 4294967295) | (g >>> 18));
      g = (c + (f ^ (b & (e ^ f))) + d[4] + 3889429448) & 4294967295;
      c = e + (((g << 20) & 4294967295) | (g >>> 12));
      g = (b + (e ^ (f & (c ^ e))) + d[9] + 568446438) & 4294967295;
      b = c + (((g << 5) & 4294967295) | (g >>> 27));
      g = (f + (c ^ (e & (b ^ c))) + d[14] + 3275163606) & 4294967295;
      f = b + (((g << 9) & 4294967295) | (g >>> 23));
      g = (e + (b ^ (c & (f ^ b))) + d[3] + 4107603335) & 4294967295;
      e = f + (((g << 14) & 4294967295) | (g >>> 18));
      g = (c + (f ^ (b & (e ^ f))) + d[8] + 1163531501) & 4294967295;
      c = e + (((g << 20) & 4294967295) | (g >>> 12));
      g = (b + (e ^ (f & (c ^ e))) + d[13] + 2850285829) & 4294967295;
      b = c + (((g << 5) & 4294967295) | (g >>> 27));
      g = (f + (c ^ (e & (b ^ c))) + d[2] + 4243563512) & 4294967295;
      f = b + (((g << 9) & 4294967295) | (g >>> 23));
      g = (e + (b ^ (c & (f ^ b))) + d[7] + 1735328473) & 4294967295;
      e = f + (((g << 14) & 4294967295) | (g >>> 18));
      g = (c + (f ^ (b & (e ^ f))) + d[12] + 2368359562) & 4294967295;
      c = e + (((g << 20) & 4294967295) | (g >>> 12));
      g = (b + (c ^ e ^ f) + d[5] + 4294588738) & 4294967295;
      b = c + (((g << 4) & 4294967295) | (g >>> 28));
      g = (f + (b ^ c ^ e) + d[8] + 2272392833) & 4294967295;
      f = b + (((g << 11) & 4294967295) | (g >>> 21));
      g = (e + (f ^ b ^ c) + d[11] + 1839030562) & 4294967295;
      e = f + (((g << 16) & 4294967295) | (g >>> 16));
      g = (c + (e ^ f ^ b) + d[14] + 4259657740) & 4294967295;
      c = e + (((g << 23) & 4294967295) | (g >>> 9));
      g = (b + (c ^ e ^ f) + d[1] + 2763975236) & 4294967295;
      b = c + (((g << 4) & 4294967295) | (g >>> 28));
      g = (f + (b ^ c ^ e) + d[4] + 1272893353) & 4294967295;
      f = b + (((g << 11) & 4294967295) | (g >>> 21));
      g = (e + (f ^ b ^ c) + d[7] + 4139469664) & 4294967295;
      e = f + (((g << 16) & 4294967295) | (g >>> 16));
      g = (c + (e ^ f ^ b) + d[10] + 3200236656) & 4294967295;
      c = e + (((g << 23) & 4294967295) | (g >>> 9));
      g = (b + (c ^ e ^ f) + d[13] + 681279174) & 4294967295;
      b = c + (((g << 4) & 4294967295) | (g >>> 28));
      g = (f + (b ^ c ^ e) + d[0] + 3936430074) & 4294967295;
      f = b + (((g << 11) & 4294967295) | (g >>> 21));
      g = (e + (f ^ b ^ c) + d[3] + 3572445317) & 4294967295;
      e = f + (((g << 16) & 4294967295) | (g >>> 16));
      g = (c + (e ^ f ^ b) + d[6] + 76029189) & 4294967295;
      c = e + (((g << 23) & 4294967295) | (g >>> 9));
      g = (b + (c ^ e ^ f) + d[9] + 3654602809) & 4294967295;
      b = c + (((g << 4) & 4294967295) | (g >>> 28));
      g = (f + (b ^ c ^ e) + d[12] + 3873151461) & 4294967295;
      f = b + (((g << 11) & 4294967295) | (g >>> 21));
      g = (e + (f ^ b ^ c) + d[15] + 530742520) & 4294967295;
      e = f + (((g << 16) & 4294967295) | (g >>> 16));
      g = (c + (e ^ f ^ b) + d[2] + 3299628645) & 4294967295;
      c = e + (((g << 23) & 4294967295) | (g >>> 9));
      g = (b + (e ^ (c | ~f)) + d[0] + 4096336452) & 4294967295;
      b = c + (((g << 6) & 4294967295) | (g >>> 26));
      g = (f + (c ^ (b | ~e)) + d[7] + 1126891415) & 4294967295;
      f = b + (((g << 10) & 4294967295) | (g >>> 22));
      g = (e + (b ^ (f | ~c)) + d[14] + 2878612391) & 4294967295;
      e = f + (((g << 15) & 4294967295) | (g >>> 17));
      g = (c + (f ^ (e | ~b)) + d[5] + 4237533241) & 4294967295;
      c = e + (((g << 21) & 4294967295) | (g >>> 11));
      g = (b + (e ^ (c | ~f)) + d[12] + 1700485571) & 4294967295;
      b = c + (((g << 6) & 4294967295) | (g >>> 26));
      g = (f + (c ^ (b | ~e)) + d[3] + 2399980690) & 4294967295;
      f = b + (((g << 10) & 4294967295) | (g >>> 22));
      g = (e + (b ^ (f | ~c)) + d[10] + 4293915773) & 4294967295;
      e = f + (((g << 15) & 4294967295) | (g >>> 17));
      g = (c + (f ^ (e | ~b)) + d[1] + 2240044497) & 4294967295;
      c = e + (((g << 21) & 4294967295) | (g >>> 11));
      g = (b + (e ^ (c | ~f)) + d[8] + 1873313359) & 4294967295;
      b = c + (((g << 6) & 4294967295) | (g >>> 26));
      g = (f + (c ^ (b | ~e)) + d[15] + 4264355552) & 4294967295;
      f = b + (((g << 10) & 4294967295) | (g >>> 22));
      g = (e + (b ^ (f | ~c)) + d[6] + 2734768916) & 4294967295;
      e = f + (((g << 15) & 4294967295) | (g >>> 17));
      g = (c + (f ^ (e | ~b)) + d[13] + 1309151649) & 4294967295;
      c = e + (((g << 21) & 4294967295) | (g >>> 11));
      g = (b + (e ^ (c | ~f)) + d[4] + 4149444226) & 4294967295;
      b = c + (((g << 6) & 4294967295) | (g >>> 26));
      g = (f + (c ^ (b | ~e)) + d[11] + 3174756917) & 4294967295;
      f = b + (((g << 10) & 4294967295) | (g >>> 22));
      g = (e + (b ^ (f | ~c)) + d[2] + 718787259) & 4294967295;
      e = f + (((g << 15) & 4294967295) | (g >>> 17));
      g = (c + (f ^ (e | ~b)) + d[9] + 3951481745) & 4294967295;
      a.g[0] = (a.g[0] + b) & 4294967295;
      a.g[1] =
        (a.g[1] + (e + (((g << 21) & 4294967295) | (g >>> 11)))) & 4294967295;
      a.g[2] = (a.g[2] + e) & 4294967295;
      a.g[3] = (a.g[3] + f) & 4294967295;
    },
    Fo = function (a, b) {
      if (void 0 === c) var c = b.length;
      for (var d = c - a.h, e = a.w, f = a.l, g = 0; g < c; ) {
        if (0 == f) for (; g <= d; ) Eo(a, b, g), (g += a.h);
        if ("string" === typeof b)
          for (; g < c; ) {
            if (((e[f++] = b.charCodeAt(g++)), f == a.h)) {
              Eo(a, e);
              f = 0;
              break;
            }
          }
        else
          for (; g < c; )
            if (((e[f++] = b[g++]), f == a.h)) {
              Eo(a, e);
              f = 0;
              break;
            }
      }
      a.l = f;
      a.o += c;
    };
  var Go = function () {
    this.h = null;
  };
  p(Go, En);
  Go.prototype.g = function (a) {
    var b = En.prototype.g.call(this, a);
    var c = (so = u());
    var d = xo(5);
    c = (uo ? !d : d) ? c | 2 : c & -3;
    d = xo(2);
    c = (vo ? !d : d) ? c | 8 : c & -9;
    c = { s1: (c >>> 0).toString(16) };
    this.h || (this.h = Co());
    b.w = this.h;
    b.A = Dn(a, sn, c, "h", Ho("kArwaWEsTs"));
    b.o = Dn(a, un, {}, "h", Ho("b96YPMzfnx"));
    b.h = Dn(a, vn, {}, "h", Ho("yb8Wev6QDg"));
    return b;
  };
  var Ho = function (a) {
    return function (b) {
      var c = new Do();
      Fo(c, b + a);
      var d = Array((56 > c.l ? c.h : 2 * c.h) - c.l);
      d[0] = 128;
      for (b = 1; b < d.length - 8; ++b) d[b] = 0;
      var e = 8 * c.o;
      for (b = d.length - 8; b < d.length; ++b) (d[b] = e & 255), (e /= 256);
      Fo(c, d);
      d = Array(16);
      for (b = e = 0; 4 > b; ++b)
        for (var f = 0; 32 > f; f += 8) d[e++] = (c.g[b] >>> f) & 255;
      return jb(d).slice(-8);
    };
  };
  var Io = function (a, b) {
    this.h = a;
    this.l = b;
  };
  Io.prototype.report = function (a, b) {
    var c = this.g(b);
    if (t(c)) {
      var d = {};
      d = ((d.sv = "813"), (d.cb = "j"), (d.e = Jo(a)), d);
      var e = im(b, a, kk());
      Gb(d, e);
      b.wd[a] = e;
      d = 2 == b.ua() ? Rk(d).join("&") : this.l.g(d).g;
      try {
        return c(b.ga, d, a), 0;
      } catch (f) {
        return 2;
      }
    } else return 1;
  };
  var Jo = function (a) {
    var b = yn(a) ? "custom_metric_viewable" : a;
    a = Bb(function (c) {
      return c == b;
    });
    return Rj[a];
  };
  Io.prototype.g = function () {
    return Ba(this.h);
  };
  var Ko = function (a, b, c) {
    Io.call(this, a, b);
    this.o = c;
  };
  p(Ko, Io);
  Ko.prototype.g = function (a) {
    if (!a.Qa) return Io.prototype.g.call(this, a);
    if (this.o[a.Qa]) return function () {};
    Ej(393, Error());
    return null;
  };
  var Lo = function () {
    Xn.call(this);
    this.G = void 0;
    this.H = null;
    this.F = !1;
    this.w = {};
    this.L = 0;
    this.o = new Go();
  };
  p(Lo, Xn);
  Lo.prototype.C = function (a, b) {
    var c = this,
      d = O.B(),
      e = Dm.B();
    if (null != e.g)
      switch (e.g.getName()) {
        case "nis":
          var f = Mo(this, a, b);
          break;
        case "gsv":
          f = No(this, a, b);
      }
    else
      switch (d.U) {
        case "nis":
          f = Mo(this, a, b);
          break;
        case "exc":
          f = Oo(this, a);
      }
    f ||
      (b.opt_overlayAdElement
        ? (f = void 0)
        : b.opt_adElement
        ? (f = jo(this, a, b.opt_adElement, b.opt_osdId))
        : (f = um(xm, a) || void 0));
    f &&
      1 == f.ua() &&
      (f.N == Ca &&
        (f.N = function (g) {
          return c.xd(g);
        }),
      Po(this, f, b));
    return f;
  };
  var Po = function (a, b, c) {
    c = c.opt_configurable_tracking_events;
    if (null != a.h && Fa(c)) {
      var d = a.h;
      Ci(c);
      z(c, function (e) {
        var f = Ta(e.Gh, function (g) {
          var h = po(g);
          if (null == h) g = null;
          else if (
            ((g = new oo()),
            null != h.visible && (g.g = h.visible / 100),
            null != h.audible && (g.h = 1 == h.audible),
            null != h.time)
          ) {
            var k = "mtos" == h.timetype ? "mtos" : "tos",
              m = Tb(h.time, "%") ? "%" : "ms";
            h = parseInt(h.time, 10);
            "%" == m && (h /= 100);
            "ms" == m ? ((g.l = h), (g.o = -1)) : ((g.l = -1), (g.o = h));
            g.w = void 0 === k ? "tos" : k;
          }
          return g;
        });
        Va(f, function (g) {
          return null == g;
        }) || am(b, new ro(e.id, e.event, f, d));
      });
    }
  };
  Lo.prototype.xd = function (a) {
    a.h = 0;
    a.V = 0;
    if ("h" == a.w || "n" == a.w) {
      if (O.B().h) var b = Ba("ima.bridge.getVideoMetadata");
      else if (a.Qa && Qo(this)) {
        var c = this.w[a.Qa];
        c
          ? (b = function (e) {
              return Ro(c, e);
            })
          : null !== c && Ej(379, Error());
      } else b = Ba("ima.common.getVideoMetadata");
      if (t(b))
        try {
          var d = b(a.ga);
        } catch (e) {
          a.h |= 4;
        }
      else a.h |= 2;
    } else if ("b" == a.w)
      if (((b = Ba("ytads.bulleit.getVideoMetadata")), t(b)))
        try {
          d = b(a.ga);
        } catch (e) {
          a.h |= 4;
        }
      else a.h |= 2;
    else if ("ml" == a.w)
      if (((b = Ba("ima.common.getVideoMetadata")), t(b)))
        try {
          d = b(a.ga);
        } catch (e) {
          a.h |= 4;
        }
      else a.h |= 2;
    else a.h |= 1;
    a.h ||
      (void 0 === d
        ? (a.h |= 8)
        : null === d
        ? (a.h |= 16)
        : Cb(d)
        ? (a.h |= 32)
        : null != d.errorCode && ((a.V = d.errorCode), (a.h |= 64)));
    null == d && (d = {});
    lo(d, a);
    ck(d.volume) && ck(this.G) && (d.volume *= this.G);
    return d;
  };
  var No = function (a, b, c) {
      var d = um(xm, b);
      d ||
        ((d = c.opt_nativeTime || -1),
        (d = Yn(a, b, co(a), d)),
        c.opt_osdId && (d.Qa = c.opt_osdId));
      return d;
    },
    Mo = function (a, b, c) {
      var d = um(xm, b);
      d || ((d = Yn(a, b, "n", c.opt_nativeTime || -1)), (d.H = Q.B().I));
      return d;
    },
    Oo = function (a, b) {
      var c = um(xm, b);
      c || (c = Yn(a, b, "h", -1));
      return c;
    };
  Lo.prototype.gd = function () {
    if (Qo(this))
      return new Ko("ima.common.triggerExternalActivityEvent", this.o, this.w);
    var a = So(this);
    return null != a ? new Io(a, this.o) : null;
  };
  var So = function (a) {
    var b = O.B();
    switch (co(a)) {
      case "b":
        return "ytads.bulleit.triggerExternalActivityEvent";
      case "n":
        return "ima.bridge.triggerExternalActivityEvent";
      case "h":
        if (b.h) return "ima.bridge.triggerExternalActivityEvent";
      case "m":
      case "ml":
        return "ima.common.triggerExternalActivityEvent";
    }
    return null;
  };
  Lo.prototype.Nc = function (a) {
    !a.g &&
      a.Ga &&
      eo(this, a, "overlay_unmeasurable_impression") &&
      (a.g = !0);
  };
  Lo.prototype.Gd = function (a) {
    a.Jd &&
      (a.Wa()
        ? eo(this, a, "overlay_viewable_end_of_session_impression")
        : eo(this, a, "overlay_unviewable_impression"),
      (a.Jd = !1));
  };
  var To = function (a, b, c, d) {
      c = void 0 === c ? {} : c;
      var e = {};
      Gb(e, { opt_adElement: void 0, opt_fullscreen: void 0 }, c);
      if (e.opt_bounds) return a.o.g(xn("ol", d));
      if (void 0 !== d)
        if (void 0 !== wn(d))
          if (gn) b = xn("ue", d);
          else if ((ao(a), "i" == fn)) (b = xn("i", d)), (b["if"] = 0);
          else if ((b = a.C(b, e))) {
            b: {
              "i" == fn && ((b.Ga = !0), a.Pc(b));
              c = e.opt_fullscreen;
              void 0 !== c && nl(b, !!c);
              var f;
              if ((c = !Q.B().l && !gk())) jj(), (c = 0 === mg(Id));
              if ((f = c)) {
                switch (b.ua()) {
                  case 1:
                    fo(a, b, "pv");
                    break;
                  case 2:
                    a.Nc(b);
                }
                bo("pv");
              }
              c = d.toLowerCase();
              !f && Za(Oj, c) && ho(a, b, e);
              0 != b.da && Za(Pj, c) && (b.Ga || a.l || b.Od());
              (f = b.Ya[c]) && Gl(b.ea, f);
              switch (b.ua()) {
                case 1:
                  var g = yn(c) ? a.J.custom_metric_viewable : a.J[c];
                  break;
                case 2:
                  g = a.P[c];
              }
              if (g && ((d = g.call(a, b, e, d)), void 0 !== d)) {
                e = xn(void 0, c);
                Gb(e, d);
                d = e;
                break b;
              }
              d = void 0;
            }
            3 == b.da && a.A(b);
            b = d;
          } else b = xn("nf", d);
        else b = void 0;
      else
        gn
          ? (b = xn("ue"))
          : (b = a.C(b, e))
          ? ((d = xn()), Gb(d, hm(b, !0, !1, !1)), (b = d))
          : (b = xn("nf"));
      return "string" === typeof b ? a.o.g(void 0) : a.o.g(b);
    },
    Uo = function (a, b, c) {
      a = Q.B();
      if (a.I != b)
        if (((a.I = b), (a = Dm.B().g))) Dk(a.g, !b);
        else {
          var d = Va(xm.g, function (e) {
            return e.ob;
          });
          z(xm.g, function (e) {
            if (!b && !d) {
              var f = O.B().K,
                g = ["imar"].some(function (h) {
                  return 1 === Vi(f, h);
                });
              e.U && "nis" === e.U.getName() && (g = !0);
              e.U && "gsv" == e.U.getName() && (g = !0);
              g ? vl(e) : (e.Bb = c);
            }
            e.H = b;
            e.ob = !1;
          });
        }
    };
  Lo.prototype.D = function (a) {
    this.l && 1 == a.ua() && Vo(this, a);
  };
  Lo.prototype.Pc = function (a) {
    this.l && 1 == a.ua() && Vo(this, a);
  };
  var Vo = function (a, b) {
      var c;
      if (b.Qa && Qo(a)) {
        var d = a.w[b.Qa];
        d
          ? (c = function (f, g) {
              Wo(d, f, g);
            })
          : null !== d && Ej(379, Error());
      } else c = Ba("ima.common.triggerViewabilityMeasurementUpdate");
      if (t(c)) {
        var e = cm(b);
        e.nativeVolume = a.G;
        c(b.ga, e);
      }
    },
    Xo = function (a, b, c) {
      a.w[b] = c;
    },
    Qo = function (a) {
      return O.B().h || ("h" != co(a) && "m" != co(a)) ? !1 : 0 != a.L;
    };
  Lo.prototype.I = function (a, b, c, d) {
    a = Xn.prototype.I.call(this, a, b, c, d);
    this.F &&
      ((b = this.H),
      null == a.l && (a.l = new Bl()),
      (b.g[a.ga] = a.l),
      (a.l.w = km));
    return a;
  };
  Lo.prototype.A = function (a) {
    a && 1 == a.ua() && this.F && delete this.H.g[a.ga];
    return Xn.prototype.A.call(this, a);
  };
  var Yo = function (a) {
      var b = {};
      return (
        (b.viewability = a.g),
        (b.googleViewability = a.l),
        (b.moatInit = a.w),
        (b.moatViewability = a.A),
        (b.integralAdsViewability = a.o),
        (b.doubleVerifyViewability = a.h),
        b
      );
    },
    Zo = function (a, b, c) {
      c = void 0 === c ? {} : c;
      a = To(Lo.B(), b, c, a);
      return Yo(a);
    };
  Da(Lo);
  var $o = new Bn();
  $o.w = "stopped";
  $o.g = "stopped";
  $o.l = "stopped";
  $o.A = "stopped";
  $o.o = "stopped";
  $o.h = "stopped";
  Object.freeze($o);
  var ap = Dj(193, Zo, void 0, io);
  r("Goog_AdSense_Lidar_sendVastEvent", ap, void 0);
  var bp = Dj(194, function (a, b) {
    b = void 0 === b ? {} : b;
    a = To(Lo.B(), a, b);
    return Yo(a);
  });
  r("Goog_AdSense_Lidar_getViewability", bp, void 0);
  var cp = Dj(195, function () {
    return mj();
  });
  r("Goog_AdSense_Lidar_getUrlSignalsArray", cp, void 0);
  var dp = Dj(196, function () {
    return Vf(mj());
  });
  r("Goog_AdSense_Lidar_getUrlSignalsList", dp, void 0);
  var ep = function (a, b) {
    this.h = {};
    this.g = [];
    this.o = this.l = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof ep)
        for (c = a.Aa(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  };
  ep.prototype.ka = function () {
    fp(this);
    for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
    return a;
  };
  ep.prototype.Aa = function () {
    fp(this);
    return this.g.concat();
  };
  ep.prototype.isEmpty = function () {
    return 0 == this.l;
  };
  ep.prototype.clear = function () {
    this.h = {};
    this.o = this.l = this.g.length = 0;
  };
  var hp = function (a, b) {
      gp(a.h, b) &&
        (delete a.h[b], a.l--, a.o++, a.g.length > 2 * a.l && fp(a));
    },
    fp = function (a) {
      if (a.l != a.g.length) {
        for (var b = 0, c = 0; b < a.g.length; ) {
          var d = a.g[b];
          gp(a.h, d) && (a.g[c++] = d);
          b++;
        }
        a.g.length = c;
      }
      if (a.l != a.g.length) {
        var e = {};
        for (c = b = 0; b < a.g.length; )
          (d = a.g[b]), gp(e, d) || ((a.g[c++] = d), (e[d] = 1)), b++;
        a.g.length = c;
      }
    };
  l = ep.prototype;
  l.get = function (a, b) {
    return gp(this.h, a) ? this.h[a] : b;
  };
  l.set = function (a, b) {
    gp(this.h, a) || (this.l++, this.g.push(a), this.o++);
    this.h[a] = b;
  };
  l.forEach = function (a, b) {
    for (var c = this.Aa(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  l.clone = function () {
    return new ep(this);
  };
  l.Hb = function (a) {
    fp(this);
    var b = 0,
      c = this.o,
      d = this,
      e = new yl();
    e.next = function () {
      if (c != d.o)
        throw Error("The map has changed since the iterator was created");
      if (b >= d.g.length) throw xl;
      var f = d.g[b++];
      return a ? f : d.h[f];
    };
    return e;
  };
  var gp = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var ip = function (a) {
      if (a.ka && "function" == typeof a.ka) return a.ka();
      if ("string" === typeof a) return a.split("");
      if (Ga(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return vb(a);
    },
    jp = function (a, b) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
      else if (Ga(a) || "string" === typeof a) z(a, b, void 0);
      else {
        if (a.Aa && "function" == typeof a.Aa) var c = a.Aa();
        else if (a.ka && "function" == typeof a.ka) c = void 0;
        else if (Ga(a) || "string" === typeof a) {
          c = [];
          for (var d = a.length, e = 0; e < d; e++) c.push(e);
        } else c = wb(a);
        d = ip(a);
        e = d.length;
        for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
      }
    };
  var R = function (a, b) {
    this.h = this.A = this.o = "";
    this.G = null;
    this.I = this.l = "";
    this.w = !1;
    var c;
    a instanceof R
      ? ((this.w = void 0 !== b ? b : a.w),
        kp(this, a.o),
        (this.A = a.A),
        (this.h = a.h),
        lp(this, a.G),
        (this.l = a.l),
        mp(this, a.g.clone()),
        (this.I = a.D()))
      : a && (c = String(a).match(qe))
      ? ((this.w = !!b),
        kp(this, c[1] || "", !0),
        (this.A = np(c[2] || "")),
        (this.h = np(c[3] || "", !0)),
        lp(this, c[4]),
        (this.l = np(c[5] || "", !0)),
        mp(this, c[6] || "", !0),
        (this.I = np(c[7] || "")))
      : ((this.w = !!b), (this.g = new op(null, this.w)));
  };
  R.prototype.toString = function () {
    var a = [],
      b = this.o;
    b && a.push(pp(b, qp, !0), ":");
    var c = this.h;
    if (c || "file" == b)
      a.push("//"),
        (b = this.A) && a.push(pp(b, qp, !0), "@"),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (c = this.G),
        null != c && a.push(":", String(c));
    if ((c = this.l))
      this.h && "/" != c.charAt(0) && a.push("/"),
        a.push(pp(c, "/" == c.charAt(0) ? rp : sp, !0));
    (c = this.g.toString()) && a.push("?", c);
    (c = this.D()) && a.push("#", pp(c, tp));
    return a.join("");
  };
  R.prototype.resolve = function (a) {
    var b = this.clone(),
      c = !!a.o;
    c ? kp(b, a.o) : (c = !!a.A);
    c ? (b.A = a.A) : (c = !!a.h);
    c ? (b.h = a.h) : (c = null != a.G);
    var d = a.l;
    if (c) lp(b, a.G);
    else if ((c = !!a.l)) {
      if ("/" != d.charAt(0))
        if (this.h && !this.l) d = "/" + d;
        else {
          var e = b.l.lastIndexOf("/");
          -1 != e && (d = b.l.substr(0, e + 1) + d);
        }
      e = d;
      if (".." == e || "." == e) d = "";
      else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
        d = 0 == e.lastIndexOf("/", 0);
        e = e.split("/");
        for (var f = [], g = 0; g < e.length; ) {
          var h = e[g++];
          "." == h
            ? d && g == e.length && f.push("")
            : ".." == h
            ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(),
              d && g == e.length && f.push(""))
            : (f.push(h), (d = !0));
        }
        d = f.join("/");
      } else d = e;
    }
    c ? (b.l = d) : (c = "" !== a.g.toString());
    c ? mp(b, a.g.clone()) : (c = !!a.I);
    c && (b.I = a.D());
    return b;
  };
  R.prototype.clone = function () {
    return new R(this);
  };
  var kp = function (a, b, c) {
      a.o = c ? np(b, !0) : b;
      a.o && (a.o = a.o.replace(/:$/, ""));
    },
    lp = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.G = b;
      } else a.G = null;
    },
    mp = function (a, b, c) {
      b instanceof op
        ? ((a.g = b), up(a.g, a.w))
        : (c || (b = pp(b, vp)), (a.g = new op(b, a.w)));
    },
    wp = function (a, b, c) {
      a.g.set(b, c);
      return a;
    };
  R.prototype.D = function () {
    return this.I;
  };
  var np = function (a, b) {
      return a
        ? b
          ? decodeURI(a.replace(/%25/g, "%2525"))
          : decodeURIComponent(a)
        : "";
    },
    pp = function (a, b, c) {
      return "string" === typeof a
        ? ((a = encodeURI(a).replace(b, xp)),
          c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
          a)
        : null;
    },
    xp = function (a) {
      a = a.charCodeAt(0);
      return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
    },
    qp = /[#\/\?@]/g,
    sp = /[#\?:]/g,
    rp = /[#\?]/g,
    vp = /[#\?@]/g,
    tp = /#/g,
    op = function (a, b) {
      this.h = this.g = null;
      this.l = a || null;
      this.o = !!b;
    },
    yp = function (a) {
      a.g ||
        ((a.g = new ep()),
        (a.h = 0),
        a.l &&
          re(a.l, function (b, c) {
            a.add(Ac(b), c);
          }));
    };
  op.prototype.add = function (a, b) {
    yp(this);
    this.l = null;
    a = zp(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, (c = []));
    c.push(b);
    this.h += 1;
    return this;
  };
  var Ap = function (a, b) {
    yp(a);
    b = zp(a, b);
    gp(a.g.h, b) && ((a.l = null), (a.h -= a.g.get(b).length), hp(a.g, b));
  };
  op.prototype.clear = function () {
    this.g = this.l = null;
    this.h = 0;
  };
  op.prototype.isEmpty = function () {
    yp(this);
    return 0 == this.h;
  };
  var Bp = function (a, b) {
    yp(a);
    b = zp(a, b);
    return gp(a.g.h, b);
  };
  l = op.prototype;
  l.forEach = function (a, b) {
    yp(this);
    this.g.forEach(function (c, d) {
      z(
        c,
        function (e) {
          a.call(b, e, d, this);
        },
        this
      );
    }, this);
  };
  l.Aa = function () {
    yp(this);
    for (var a = this.g.ka(), b = this.g.Aa(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  l.ka = function (a) {
    yp(this);
    var b = [];
    if ("string" === typeof a)
      Bp(this, a) && (b = cb(b, this.g.get(zp(this, a))));
    else {
      a = this.g.ka();
      for (var c = 0; c < a.length; c++) b = cb(b, a[c]);
    }
    return b;
  };
  l.set = function (a, b) {
    yp(this);
    this.l = null;
    a = zp(this, a);
    Bp(this, a) && (this.h -= this.g.get(a).length);
    this.g.set(a, [b]);
    this.h += 1;
    return this;
  };
  l.get = function (a, b) {
    if (!a) return b;
    a = this.ka(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  l.toString = function () {
    if (this.l) return this.l;
    if (!this.g) return "";
    for (var a = [], b = this.g.Aa(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.ka(d);
      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }
    return (this.l = a.join("&"));
  };
  l.clone = function () {
    var a = new op();
    a.l = this.l;
    this.g && ((a.g = this.g.clone()), (a.h = this.h));
    return a;
  };
  var zp = function (a, b) {
      b = String(b);
      a.o && (b = b.toLowerCase());
      return b;
    },
    up = function (a, b) {
      b &&
        !a.o &&
        (yp(a),
        (a.l = null),
        a.g.forEach(function (c, d) {
          var e = d.toLowerCase();
          d != e &&
            (Ap(this, d),
            Ap(this, e),
            0 < c.length &&
              ((this.l = null),
              this.g.set(zp(this, e), db(c)),
              (this.h += c.length)));
        }, a));
      a.o = b;
    };
  var Cp =
      "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(
        " "
      ),
    Dp = /\bocr\b/,
    Ep = 0,
    Gp = {},
    Hp = function (a) {
      if (Ub(Ec(a))) return !1;
      if (
        0 <=
        a.indexOf(
          "://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&"
        )
      )
        return !0;
      try {
        var b = new R(a);
      } catch (c) {
        return (
          null !=
          Xa(Cp, function (d) {
            return 0 < a.search(d);
          })
        );
      }
      return b.D().match(Dp)
        ? !0
        : null !=
            Xa(Cp, function (c) {
              return null != a.match(c);
            });
    },
    Lp = function (a) {
      if (a && ((a = Ip(a)), !Ub(a))) {
        var b = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
        Jp(function (c) {
          Kp(
            c
              ? b
              : 'javascript:"<body><object data=\\""+' +
                  a +
                  '+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"'
          );
        });
      }
    },
    Kp = function (a) {
      var b = fe("IFRAME", { src: a, style: "display:none" });
      a = Xd(b).body;
      var c = di(function () {
        sh(d);
        he(b);
      }, 15e3);
      var d = jh(b, ["load", "error"], function () {
        di(function () {
          q.clearTimeout(c);
          he(b);
        }, 5e3);
      });
      a.appendChild(b);
    },
    Jp = function (a) {
      var b = Gp.imageLoadingEnabled;
      if (null != b) a(b);
      else {
        var c = !1;
        Mp(function (d, e) {
          delete Gp[e];
          c ||
            ((c = !0),
            null == Gp.imageLoadingEnabled && (Gp.imageLoadingEnabled = d),
            a(d));
        });
      }
    },
    Mp = function (a) {
      var b = new Image(),
        c = "" + Ep++;
      Gp[c] = b;
      b.onload = function () {
        clearTimeout(d);
        a(!0, c);
      };
      var d = setTimeout(function () {
        a(!1, c);
      }, 300);
      b.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    },
    Np = function (a) {
      if (a) {
        var b = de(document, "OBJECT");
        b.data = a;
        b.width = "1";
        b.height = "1";
        b.style.visibility = "hidden";
        var c = "" + Ep++;
        Gp[c] = b;
        b.onload = b.onerror = function () {
          delete Gp[c];
        };
        document.body.appendChild(b);
      }
    },
    Op = function (a) {
      if (a) {
        var b = new Image(),
          c = "" + Ep++;
        Gp[c] = b;
        b.onload = b.onerror = function () {
          delete Gp[c];
        };
        b.src = a;
      }
    },
    Pp = function (a) {
      a &&
        Jp(function (b) {
          b ? Op(a) : Np(a);
        });
    },
    Ip = function (a) {
      a instanceof ic ||
        ((a = "object" == typeof a && a.Ua ? a.Ma() : String(a)),
        kc.test(a) || (a = "about:invalid#zClosurez"),
        (a = new ic(gc, a)));
      var b = jc(a);
      if ("about:invalid#zClosurez" === b) return "";
      if (b instanceof tc) a = b;
      else {
        var c = "object" == typeof b;
        a = null;
        c && b.sc && (a = b.lc());
        b = cc(c && b.Ua ? b.Ma() : String(b));
        a = wc(b, a);
      }
      a = uc(a).toString();
      return encodeURIComponent(String(Vf(a)));
    };
  var Qp = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
  var Rp = function (a) {
    var b = a.Ka,
      c = void 0 === a.za ? !1 : a.za;
    this.A = a.Ra;
    this.g = b;
    this.w = c;
  };
  var Sp = ["*.youtu.be", "*.youtube.com"],
    Tp =
      "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(
        " "
      ),
    Up = ["c.googlesyndication.com"];
  function Vp(a, b) {
    b = void 0 === b ? window.location.protocol : b;
    var c = !1;
    if (Wp(a, Up)) c = !1;
    else {
      var d;
      if ((d = !Xp(a)))
        if (null == a) d = !1;
        else {
          d = a;
          if (Xp(a))
            b: {
              try {
                var e = new R(a);
                if ("gcache" == e.o) {
                  var f = e.g.get("url");
                  if (f && !Ub(Ec(f))) {
                    d = f;
                    break b;
                  }
                }
              } catch (g) {}
              d = a;
            }
          d = Yp(d);
        }
      d ? (c = !0) : "https:" == b && Wp(a, Tp) && (c = !0);
    }
    if (c) {
      b = new R(a);
      if ("https" == b.o) return a;
      Ag(I.B(), "htp", "1");
      kp(b, "https");
      return b.toString();
    }
    return a;
  }
  function Xp(a) {
    if (!a) return !1;
    try {
      var b = new R(a);
      return "gcache" == b.o && !!b.g.get("url");
    } catch (c) {
      return !1;
    }
  }
  function Wp(a, b) {
    return new RegExp(
      "^https?://([a-z0-9-]{1,63}\\.)*(" +
        b.join("|").replace(/\./g, "\\.") +
        ")(:[0-9]+)?([/?#]|$)",
      "i"
    ).test(a);
  }
  function Yp(a) {
    try {
      var b = new R(a).h;
      b = b.replace(/^www./i, "");
      return Sp.some(function (c) {
        return Zp(c, b);
      });
    } catch (c) {
      return !1;
    }
  }
  function Zp(a, b) {
    if (Ub(Ec(b))) return !1;
    a = a.toLowerCase();
    b = b.toLowerCase();
    return "*." == a.substr(0, 2)
      ? ((a = a.substr(2)),
        a.length > b.length
          ? !1
          : b.substr(-a.length) == a &&
            (b.length == a.length || "." == b.charAt(b.length - a.length - 1)))
      : a == b;
  }
  var $p = function (a) {
    var b = a.Sd,
      c = a.Zc,
      d = a.Rd,
      e = a.Yc;
    Rp.call(this, {
      Ra: a.Ra,
      Ka: a.Ka,
      height: a.height,
      width: a.width,
      za: void 0 === a.za ? !1 : a.za,
    });
    this.o = b;
    this.l = c;
    this.C = d;
    this.h = e;
  };
  p($p, Rp);
  $p.prototype.getVideoUrl = function () {
    return this.o;
  };
  var aq = function (a) {
    var b = a.ud;
    Rp.call(this, {
      Ra: a.Ra,
      Ka: a.Ka,
      height: a.height,
      width: a.width,
      za: void 0 === a.za ? !1 : a.za,
    });
    this.h = b;
  };
  p(aq, Rp);
  var bq = function () {
    this.g = u();
  };
  bq.prototype.reset = function () {
    this.g = u();
  };
  var cq = function (a) {
    var b = u();
    a = a.g + 5e3 - b;
    return 0 < a ? a : 0;
  };
  var dq = function (a) {
    return (a = a.exec(lc)) ? a[1] : "";
  };
  (function () {
    if (hd) return dq(/Firefox\/([0-9.]+)/);
    if (Qc || Rc || Pc) return ed;
    if (ld) return Kc() ? dq(/CriOS\/([0-9.]+)/) : dq(/Chrome\/([0-9.]+)/);
    if (md && !Kc()) return dq(/Version\/([0-9.]+)/);
    if (id || jd) {
      var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(lc);
      if (a) return a[1] + "." + a[2];
    } else if (kd)
      return (a = dq(/Android\s+([0-9.]+)/)) ? a : dq(/Version\/([0-9.]+)/);
    return "";
  })();
  var eq = /OS (\S+) like/,
    fq = /Android ([\d\.]+)/;
  function gq(a, b) {
    a = (a = a.exec(lc)) ? a[1] : "";
    a = a.replace(/_/g, ".");
    return 0 <= fc(a, b);
  }
  var hq = function () {
      return Uc && "ontouchstart" in document.documentElement;
    },
    iq = function (a) {
      return Zc && gq(eq, a);
    },
    jq = function (a) {
      return (a = void 0 === a ? null : a) && t(a.getAttribute)
        ? a.getAttribute("playsinline")
          ? !0
          : !1
        : !1;
    };
  var kq = function () {
      if (!Qc) return !1;
      try {
        return new ActiveXObject("MSXML2.DOMDocument"), !0;
      } catch (a) {
        return !1;
      }
    },
    lq = Qc && kq();
  var mq = function (a) {
    J.call(this);
    this.o = a;
    this.h = {};
  };
  y(mq, J);
  var nq = [];
  mq.prototype.T = function (a, b, c, d) {
    return oq(this, a, b, c, d);
  };
  var oq = function (a, b, c, d, e, f) {
      Fa(c) || (c && (nq[0] = c.toString()), (c = nq));
      for (var g = 0; g < c.length; g++) {
        var h = kh(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
        if (!h) break;
        a.h[h.key] = h;
      }
      return a;
    },
    qq = function (a, b, c, d) {
      pq(a, b, c, d, void 0);
    },
    pq = function (a, b, c, d, e, f) {
      if (Fa(c)) for (var g = 0; g < c.length; g++) pq(a, b, c[g], d, e, f);
      else
        (b = jh(b, c, d || a.handleEvent, e, f || a.o || a)) &&
          (a.h[b.key] = b);
    };
  mq.prototype.Ca = function (a, b, c, d, e) {
    if (Fa(b)) for (var f = 0; f < b.length; f++) this.Ca(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (d = Ha(d) ? !!d.capture : !!d),
        (e = e || this.o || this),
        (c = lh(c)),
        (d = !!d),
        (b = Zg(a)
          ? fh(a.l, String(b), c, d, e)
          : a
          ? (a = nh(a))
            ? fh(a, b, c, d, e)
            : null
          : null),
        b && (sh(b), delete this.h[b.key]);
  };
  var rq = function (a) {
    ob(
      a.h,
      function (b, c) {
        this.h.hasOwnProperty(c) && sh(b);
      },
      a
    );
    a.h = {};
  };
  mq.prototype.R = function () {
    mq.wa.R.call(this);
    rq(this);
  };
  mq.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var sq = function () {};
  sq.prototype.g = null;
  sq.prototype.getOptions = function () {
    var a;
    (a = this.g) ||
      ((a = {}), tq(this) && ((a[0] = !0), (a[1] = !0)), (a = this.g = a));
    return a;
  };
  var uq,
    vq = function () {};
  y(vq, sq);
  var wq = function (a) {
      return (a = tq(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    tq = function (a) {
      if (
        !a.h &&
        "undefined" == typeof XMLHttpRequest &&
        "undefined" != typeof ActiveXObject
      ) {
        for (
          var b = [
              "MSXML2.XMLHTTP.6.0",
              "MSXML2.XMLHTTP.3.0",
              "MSXML2.XMLHTTP",
              "Microsoft.XMLHTTP",
            ],
            c = 0;
          c < b.length;
          c++
        ) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.h = d);
          } catch (e) {}
        }
        throw Error(
          "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
        );
      }
      return a.h;
    };
  uq = new vq();
  var xq = function (a) {
    K.call(this);
    this.headers = new ep();
    this.H = a || null;
    this.h = !1;
    this.F = this.g = null;
    this.N = "";
    this.w = 0;
    this.o = this.L = this.A = this.J = !1;
    this.D = 0;
    this.C = null;
    this.Z = "";
    this.O = this.P = !1;
  };
  y(xq, K);
  var yq = /^https?$/i,
    zq = ["POST", "PUT"],
    Aq = function (a, b) {
      a.D = Math.max(0, b);
    };
  xq.prototype.send = function (a, b, c, d) {
    if (this.g)
      throw Error(
        "[goog.net.XhrIo] Object is active with another request=" +
          this.N +
          "; newUri=" +
          a
      );
    b = b ? b.toUpperCase() : "GET";
    this.N = a;
    this.w = 0;
    this.J = !1;
    this.h = !0;
    this.g = this.H ? wq(this.H) : wq(uq);
    this.F = this.H ? this.H.getOptions() : uq.getOptions();
    this.g.onreadystatechange = Ma(this.X, this);
    try {
      (this.L = !0), this.g.open(b, String(a), !0), (this.L = !1);
    } catch (f) {
      Bq(this);
      return;
    }
    a = c || "";
    var e = this.headers.clone();
    d &&
      jp(d, function (f, g) {
        e.set(g, f);
      });
    d = Xa(e.Aa(), Cq);
    c = q.FormData && a instanceof q.FormData;
    !Za(zq, b) ||
      d ||
      c ||
      e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, g) {
      this.g.setRequestHeader(g, f);
    }, this);
    this.Z && (this.g.responseType = this.Z);
    "withCredentials" in this.g &&
      this.g.withCredentials !== this.P &&
      (this.g.withCredentials = this.P);
    try {
      Dq(this),
        0 < this.D &&
          ((this.O = Eq(this.g))
            ? ((this.g.timeout = this.D), (this.g.ontimeout = Ma(this.V, this)))
            : (this.C = di(this.V, this.D, this))),
        (this.A = !0),
        this.g.send(a),
        (this.A = !1);
    } catch (f) {
      Bq(this);
    }
  };
  var Eq = function (a) {
      return (
        Qc && fd(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
      );
    },
    Cq = function (a) {
      return "content-type" == a.toLowerCase();
    };
  xq.prototype.V = function () {
    "undefined" != typeof xa &&
      this.g &&
      ((this.w = 8), this.dispatchEvent("timeout"), this.abort(8));
  };
  var Bq = function (a) {
      a.h = !1;
      a.g && ((a.o = !0), a.g.abort(), (a.o = !1));
      a.w = 5;
      Fq(a);
      Gq(a);
    },
    Fq = function (a) {
      a.J ||
        ((a.J = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
    };
  xq.prototype.abort = function (a) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.o = !0),
      this.g.abort(),
      (this.o = !1),
      (this.w = a || 7),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      Gq(this));
  };
  xq.prototype.R = function () {
    this.g &&
      (this.h && ((this.h = !1), (this.o = !0), this.g.abort(), (this.o = !1)),
      Gq(this, !0));
    xq.wa.R.call(this);
  };
  xq.prototype.X = function () {
    this.fb() || (this.L || this.A || this.o ? Hq(this) : this.$());
  };
  xq.prototype.$ = function () {
    Hq(this);
  };
  var Hq = function (a) {
      if (
        a.h &&
        "undefined" != typeof xa &&
        (!a.F[1] || 4 != Iq(a) || 2 != Jq(a))
      )
        if (a.A && 4 == Iq(a)) di(a.X, 0, a);
        else if ((a.dispatchEvent("readystatechange"), 4 == Iq(a))) {
          a.h = !1;
          try {
            var b = Jq(a);
            a: switch (b) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var c = !0;
                break a;
              default:
                c = !1;
            }
            var d;
            if (!(d = c)) {
              var e;
              if ((e = 0 === b)) {
                var f = String(a.N).match(qe)[1] || null;
                if (!f && q.self && q.self.location) {
                  var g = q.self.location.protocol;
                  f = g.substr(0, g.length - 1);
                }
                e = !yq.test(f ? f.toLowerCase() : "");
              }
              d = e;
            }
            d
              ? (a.dispatchEvent("complete"), a.dispatchEvent("success"))
              : ((a.w = 6), Fq(a));
          } finally {
            Gq(a);
          }
        }
    },
    Gq = function (a, b) {
      if (a.g) {
        Dq(a);
        var c = a.g,
          d = a.F[0] ? Ca : null;
        a.g = null;
        a.F = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    Dq = function (a) {
      a.g && a.O && (a.g.ontimeout = null);
      a.C && (q.clearTimeout(a.C), (a.C = null));
    };
  xq.prototype.vc = function () {
    return !!this.g;
  };
  var Iq = function (a) {
      return a.g ? a.g.readyState : 0;
    },
    Jq = function (a) {
      try {
        return 2 < Iq(a) ? a.g.status : -1;
      } catch (b) {
        return -1;
      }
    },
    Kq = function (a) {
      try {
        return a.g ? a.g.responseText : "";
      } catch (b) {
        return "";
      }
    },
    Lq = function (a, b) {
      if (a.g && 4 == Iq(a))
        return (a = a.g.getResponseHeader(b)), null === a ? void 0 : a;
    };
  var Mq = function () {};
  Mq.prototype.get = function (a, b) {
    return Nq(this, a, b);
  };
  var Nq = function (a, b, c) {
      return Oq(a, b, !0, c).then(
        function (d) {
          if (!(d instanceof Nh)) {
            var e = new Nh(Ca);
            Mh(e, 2, d);
            d = e;
          }
          return d;
        },
        function (d) {
          return d instanceof Error && 6 == d.message ? Oq(a, b, !1, c) : Rh(d);
        }
      );
    },
    Oq = function (a, b, c, d) {
      var e = new xq();
      e.P = c;
      Aq(e, cq(d));
      var f = new mq();
      return new Nh(function (g, h) {
        qq(f, e, "success", function () {
          try {
            var k = e.g ? e.g.responseXML : null;
          } catch (v) {
            k = null;
          }
          if (null == k)
            if (((k = Kq(e)), "undefined" != typeof DOMParser)) {
              var m = new DOMParser();
              me();
              k = wc(k, null);
              k = m.parseFromString(uc(k), "application/xml");
            } else if (lq) {
              m = new ActiveXObject("MSXML2.DOMDocument");
              m.resolveExternals = !1;
              m.validateOnParse = !1;
              try {
                m.setProperty("ProhibitDTD", !0),
                  m.setProperty("MaxXMLSize", 2048),
                  m.setProperty("MaxElementDepth", 256);
              } catch (v) {}
              m.loadXML(k);
              k = m;
            } else
              throw Error(
                "Your browser does not support loading xml documents"
              );
          m = eg(Hg);
          var n;
          if ((n = k && k.documentElement))
            (n = k.documentElement) && "VAST" != !n.nodeName
              ? (n = n.getAttribute("version"))
                ? ((n = parseInt(n, 10)),
                  (n = null == n || isNaN(n) ? null : n))
                : (n = null)
              : (n = null),
              (n = null == n || 2 > n || 4 < n ? !1 : !0);
          if (!n && m) {
            m = {
              vastUrl: b.substring(0, 200),
              responseText: Kq(e).substring(0, 200),
              status: Jq(e),
              contentType: Lq(e, "Content-Type"),
              acao: Lq(e, "Access-Control-Allow-Origin"),
              acac: Lq(e, "Access-Control-Allow-Credentials"),
              origin: window.location.origin,
            };
            n = I.B();
            for (
              var w = ba(Object.keys(m)), x = w.next();
              !x.done;
              x = w.next()
            )
              (x = x.value), Ag(n, x, m[x]);
          }
          g(k);
          f.Y();
          e.Y();
        });
        qq(f, e, ["error", "timeout"], function () {
          h(Error(e.w));
          f.Y();
          e.Y();
        });
        e.send(Vp(b), "GET", void 0);
      }, a);
    };
  var Pq = function (a, b) {
      return Ub(b) ? !1 : new RegExp(a).test(b);
    },
    Qq = function (a) {
      var b = {};
      a.split(",").forEach(function (c) {
        var d = c.split("=");
        2 == d.length &&
          ((c = Vb(d[0])), (d = Vb(d[1])), 0 < c.length && (b[c] = d));
      });
      return b;
    },
    Rq = function (a) {
      var b =
        "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(
          " "
        );
      if (!a) return null;
      a = a.toLowerCase().replace("-", "_");
      if (b.includes(a)) return a;
      a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
      return b.includes(a) ? a : null;
    };
  var Tq = function (a) {
    R.call(this, a);
    this.C = new Map();
    a = this.l;
    var b = a.indexOf(";"),
      c = null;
    0 <= b
      ? ((this.l = a.substring(0, b)), (c = a.substring(b + 1)))
      : (this.l = a);
    Sq(this, c);
  };
  p(Tq, R);
  Tq.prototype.toString = function () {
    return Uq(this, R.prototype.toString.call(this));
  };
  Tq.prototype.D = function () {
    return "";
  };
  var Sq = function (a, b) {
      Ub(Ec(b)) ||
        b.split(";").forEach(function (c) {
          var d = c.indexOf("=");
          if (!(0 >= d)) {
            var e = Ac(c.substring(0, d));
            c = Ac(c.substring(d + 1));
            d = a.C.get(e);
            null != d ? d.includes(c) || d.push(c) : (d = [Ec(c)]);
            a.C.set(e, d);
          }
        }, a);
    },
    Vq = function (a) {
      if (Ub(Ec("ord"))) return null;
      a = a.C.get("ord");
      return null != a ? a : null;
    },
    Wq = function (a, b) {
      Ub(Ec("ord")) || ((b = b.map(Ec)), a.C.set("ord", b));
    },
    Uq = function (a, b) {
      b = [Ec(b)];
      b.push.apply(b, ca(Xq(a)));
      return b.join(";");
    },
    Xq = function (a) {
      var b = Vq(a);
      null == b ? (b = [Ec(u())]) : Ub(Ec("ord")) || a.C["delete"]("ord");
      var c = [];
      a.C.forEach(function (d, e) {
        d.forEach(function (f) {
          c.push(e + "=" + f);
        });
      });
      c.push("ord=" + b[0]);
      Wq(a, b);
      return c;
    };
  Tq.prototype.clone = function () {
    return new Tq(this.toString());
  };
  function Yq(a) {
    a = new R(a);
    var b = a.l;
    return Tb(a.h, "doubleclick.net") && Pq("/gampad/(live/)?ads", b);
  }
  function Zq(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    return new (Function.prototype.bind.apply(a, [null].concat(ca(c))))();
  }
  function $q() {
    Od.set("GoogleAdServingTest", "Good");
    var a = "Good" == Od.get("GoogleAdServingTest");
    a &&
      (Od.get("GoogleAdServingTest"),
      Od.set("GoogleAdServingTest", "", 0, void 0, void 0));
    return a;
  }
  var ar = {
    sg: "autoplayDisallowed",
    tg: "beginFullscreen",
    ug: "canPlay",
    vg: "canPlayThrough",
    CLICK: "click",
    DURATION_CHANGE: "durationChange",
    Bg: "end",
    Cg: "endFullscreen",
    Dg: "error",
    Hg: "focusSkipButton",
    Zg: "loadStart",
    LOADED: "loaded",
    $g: "mediaLoadTimeout",
    ah: "mediaPlaybackTimeout",
    gc: "pause",
    lh: "play",
    rh: "seeked",
    sh: "seeking",
    vh: "skip",
    wh: "skipShown",
    hc: "start",
    Ch: "timeUpdate",
    Ah: "timedMetadata",
    de: "volumeChange",
    Fh: "waiting",
  };
  var br = function () {};
  function cr() {
    return !!window.MediaSource;
  }
  var dr = function (a, b, c) {
    var d = new br();
    this.url = a;
    this.mimeType = b;
    this.g = c;
    this.h = void 0 === d ? null : d;
  };
  var fr = function (a, b, c, d, e) {
    J.call(this);
    this.$ = a;
    this.F = new R(b.url);
    this.h = c;
    this.l = e;
    this.H = b.g;
    this.Z = d;
    (this.J = b.h) || Ap(this.F.g, "alr");
    Ag(I.B(), "sl_dv" + this.l, (null != this.J).toString());
    this.L = !this.J;
    this.V = 0;
    this.g = new XMLHttpRequest();
    this.C = this.X = this.A = this.o = 0;
    this.O = 0.1;
    this.w = [];
    this.D = !1;
    this.P = this.N = null;
    er(this);
  };
  p(fr, J);
  var er = function (a) {
      a.N = kh(a.g, "load", function () {
        gr(a);
        if (a.L) {
          var b = a.g.responseText;
          a.D = !b || b.length < a.H;
          a.C = 0;
          Bg(I.B(), "sl_cc" + a.l + "-" + a.A);
          a.A++;
          hr(a);
        }
      });
      a.P = kh(a.g, "progress", function () {
        gr(a);
      });
      a.g.addEventListener("error", function () {
        Bg(I.B(), "sl_ec" + a.l + "-" + a.o);
      });
      a.h.addEventListener("updateend", function () {
        a.h.buffered.length &&
          ((a.X = a.h.buffered.end(0)),
          a.D &&
            !a.h.updating &&
            a.o == a.A &&
            (Bg(I.B(), "sl_lc" + a.l), a.Z()));
      });
      a.h.addEventListener("update", function () {
        a.w.length && !a.h.updating && a.h.appendBuffer(a.w.shift());
      });
      a.h.addEventListener("error", function () {
        Bg(I.B(), "msb_err" + a.l);
      });
      ir(a);
    },
    ir = function (a) {
      Bg(I.B(), "sl_rc" + a.l + "-" + a.o);
      var b = a.o * a.H;
      b = wp(a.F, "range", b + "-" + (b + a.H - 1)).toString();
      a.g.open("get", b);
      a.g.overrideMimeType("text/plain; charset=x-user-defined");
      a.g.send(null);
      a.o++;
    },
    gr = function (a) {
      if (!a.L) {
        var b = a.g.getResponseHeader("content-type");
        if (b && 0 <= b.indexOf("text/plain")) {
          a.g.readyState == XMLHttpRequest.DONE &&
            ((a.F = new R(a.g.response)), (a.o = 0), (a.A = 0), a.V++, ir(a));
          return;
        }
        a.L = !0;
        Bg(I.B(), "sl_redc" + a.l);
        Ag(I.B(), "sl_tr" + a.l, a.V.toString());
      }
      Ap(a.F.g, "alr");
      if (
        a.g.readyState == XMLHttpRequest.LOADING ||
        a.g.readyState == XMLHttpRequest.DONE
      ) {
        b = a.g.response;
        for (var c = new Uint8Array(b.length - a.C), d = 0; d < c.length; d++)
          c[d] = b.charCodeAt(d + a.C) & 255;
        a.C = b.length;
        b = c.buffer;
        0 < b.byteLength &&
          (a.h.updating || a.w.length ? a.w.push(b) : a.h.appendBuffer(b));
      }
    },
    hr = function (a) {
      var b = a.A == a.o && !a.h.updating && !a.w.length;
      !a.D && b && a.$.currentTime >= a.O && ((a.O = a.X + 0.1), ir(a));
    };
  fr.prototype.R = function () {
    sh(this.N);
    sh(this.P);
    J.prototype.R.call(this);
  };
  var kr = function (a, b) {
    J.call(this);
    var c = this;
    this.A = a;
    this.D = b;
    this.h = new MediaSource();
    this.C = [];
    this.l = [];
    this.g = this.w = null;
    this.o = !1;
    this.h.addEventListener("sourceopen", function () {
      return jr(c);
    });
  };
  p(kr, J);
  var jr = function (a) {
    Bg(I.B(), "msmsw_oso");
    a.w = kh(a.A, "timeupdate", function () {
      if (!a.o)
        for (var e = ba(a.l), f = e.next(); !f.done; f = e.next()) hr(f.value);
    });
    for (var b = 0; b < a.D.length; b++) {
      var c = a.D[b];
      Ag(I.B(), "msmsw_mime" + b, c.mimeType);
      Ag(I.B(), "msmsw_cs" + b, c.mimeType);
      var d = a.h.addSourceBuffer(c.mimeType);
      d
        ? (a.C.push(d),
          (c = Zq(
            fr,
            a.A,
            c,
            d,
            function () {
              a: if (!a.o) {
                for (var e = ba(a.l), f = e.next(); !f.done; f = e.next())
                  if (((f = f.value), !f.D || f.h.updating || f.w.length))
                    break a;
                a.h.endOfStream();
                a.o = !0;
                sh(a.w);
              }
            },
            b
          )),
          a.l.push(c))
        : Bg(I.B(), "msmsw_sbf" + b);
    }
    Ag(I.B(), "msmsw_ns", a.C.length.toString());
  };
  kr.prototype.R = function () {
    this.g && window.URL.revokeObjectURL(this.g);
    for (var a = ba(this.l), b = a.next(); !b.done; b = a.next()) b.value.Y();
    sh(this.w);
    J.prototype.R.call(this);
  };
  var lr = function () {
    this.dc = "";
  };
  var mr = function (a) {
    J.call(this);
    var b = this;
    this.g = a;
    this.h = null;
    this.l = new Map();
    this.o = 0;
    var c = function (d) {
      try {
        var e;
        "string" === typeof d.data ? (e = JSON.parse(d.data)) : (e = d.data);
        var f = e.__tcfapiReturn;
        var g = f.returnValue;
        var h = f.success;
        var k = f.callId;
        b.l.has(k) && b.l.get(k)(g, h);
      } catch (m) {}
    };
    this.g.addEventListener("message", c, !1);
    Sg(this, function () {
      b.g.removeEventListener("message", c);
    });
  };
  p(mr, J);
  var or = function (a) {
      return t(a.g.__tcfapi) ? !0 : null != nr(a);
    },
    rr = function (a, b) {
      t(a.g.__tcfapi) ? pr(a, b) : null != nr(a) ? qr(a, b) : b(new lr());
    },
    nr = function (a) {
      if (null != a.h) return a.h;
      for (var b = a.g; b; ) {
        try {
          if (b.frames.__tcfapiLocator) return (a.h = b);
        } catch (c) {}
        if (b === window.top) break;
        b = b.parent;
      }
      return null;
    },
    pr = function (a, b) {
      (0, a.g.__tcfapi)(
        "getTCData",
        2,
        function (c, d) {
          c = sr(c, d);
          b(c);
        },
        void 0
      );
    },
    qr = function (a, b) {
      var c = a.o++;
      a.l.set(c, function (e, f) {
        e = sr(e, f);
        b(e);
      });
      var d = {};
      a.h.postMessage(
        ((d.__tcfapiCall = {
          command: "getTCData",
          parameter: void 0,
          version: 2,
          callId: c,
        }),
        d),
        "*"
      );
    },
    sr = function (a, b) {
      var c = new lr();
      b && ((c.gdprApplies = a.gdprApplies), (c.dc = a.dc), (c.fd = a.fd));
      ["stub", "loading", "error"].includes(a.fd) && (c.dc = "tcunavailable");
      return c;
    };
  var tr = function () {
    throw Error("Do not instantiate directly");
  };
  tr.prototype.g = null;
  tr.prototype.getContent = function () {
    return this.content;
  };
  tr.prototype.toString = function () {
    return this.content;
  };
  var ur = function () {
    tr.call(this);
  };
  y(ur, tr);
  var vr = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      void 0 !== d && (c.g = d);
      return c;
    };
  })(ur);
  var wr = function () {
    if (window.MutationObserver) {
      var a = [];
      new MutationObserver(function () {
        a.forEach(function (b) {
          return b();
        });
        a = [];
      }).observe(document.createTextNode(""), { characterData: !0 });
    }
  };
  ("function" === typeof Promise &&
    -1 < String(Promise).indexOf("[native code]")) ||
    wr();
  var xr = function (a) {
    K.call(this);
    this.g = a || "goog_" + Fc++;
    this.o = [];
  };
  y(xr, K);
  xr.prototype.h = !1;
  xr.prototype.connect = function () {
    for (this.h = !0; 0 != this.o.length; ) {
      var a = this.o.shift();
      this.sendMessage(a.name, a.type, a.data);
    }
  };
  xr.prototype.send = function (a, b, c) {
    this.h
      ? this.sendMessage(a, b, c)
      : this.o.push({ name: a, type: b, data: c });
  };
  var yr = function (a, b, c, d, e) {
    Vg.call(this, a);
    this.ba = b;
    this.fa = c;
    this.Pb = d;
    this.Ed = e;
  };
  y(yr, Vg);
  yr.prototype.toString = function () {
    return "";
  };
  var zr = function (a, b) {
    K.call(this);
    this.o = a;
    this.A = b;
    this.h = this.o.currentTime;
    this.g = new ci(250);
    Ug(this, this.g);
    this.w = new mq(this);
    Ug(this, this.w);
    oq(this.w, this.g, "tick", this.C, !1, this);
  };
  p(zr, K);
  zr.prototype.sa = function () {
    return this.h;
  };
  zr.prototype.start = function () {
    Ar(this);
    this.g.start();
  };
  zr.prototype.stop = function () {
    this.g.stop();
  };
  zr.prototype.C = function () {
    var a = this.o.currentTime;
    a != this.sa() && ((this.h = a), Ar(this));
  };
  var Ar = function (a) {
    a.A.send("contentTimeUpdate", "contentTimeUpdate", { currentTime: a.sa() });
  };
  var Br = function (a) {
    this.g = a;
  };
  Br.prototype.getContent = function () {
    return this.g.content;
  };
  Br.prototype.h = function () {
    return this.g.contentType;
  };
  Br.prototype.o = function () {
    return this.g.size.width;
  };
  Br.prototype.l = function () {
    return this.g.size.height;
  };
  var Cr = function (a) {
    return (a = a.g.backupCompanions)
      ? a.map(function (b) {
          return new Br(b);
        })
      : [];
  };
  var Dr = function (a, b) {
    this.h = a;
    this.g = b;
  };
  Dr.prototype.o = function () {
    return this.h;
  };
  Dr.prototype.l = function () {
    return this.g;
  };
  var Er = function () {},
    Fr = { Ug: "Image", Gg: "Flash", Ud: "All" },
    Gr = { Rg: "Html", Sg: "IFrame", xh: "Static", Ud: "All" },
    Hr = { Tg: "IgnoreSize", th: "SelectExactMatch", uh: "SelectNearMatch" },
    Ir = { zg: "DisallowResize", qh: "ResizeSmaller" };
  var Jr = !1,
    Kr = function (a) {
      if ((a = a.match(/[\d]+/g))) a.length = 3;
    };
  (function () {
    if (navigator.plugins && navigator.plugins.length) {
      var a = navigator.plugins["Shockwave Flash"];
      if (a && ((Jr = !0), a.description)) {
        Kr(a.description);
        return;
      }
      if (navigator.plugins["Shockwave Flash 2.0"]) {
        Jr = !0;
        return;
      }
    }
    if (
      navigator.mimeTypes &&
      navigator.mimeTypes.length &&
      ((a = navigator.mimeTypes["application/x-shockwave-flash"]),
      (Jr = !(!a || !a.enabledPlugin)))
    ) {
      Kr(a.enabledPlugin.description);
      return;
    }
    if ("undefined" != typeof ActiveXObject) {
      try {
        var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        Jr = !0;
        Kr(b.GetVariable("$version"));
        return;
      } catch (c) {}
      try {
        b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
        Jr = !0;
        return;
      } catch (c) {}
      try {
        (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")),
          (Jr = !0),
          Kr(b.GetVariable("$version"));
      } catch (c) {}
    }
  })();
  var Lr = Jr;
  var Nr = function (a, b) {
      b = void 0 === b ? null : b;
      this.h = a;
      this.g = null != b ? b : new Er();
      this.w = Mr(Gr, this.g.o) ? this.g.o : "All";
      this.o = Mr(Fr, this.g.l) ? this.g.l : "All";
      this.C = Mr(Hr, this.g.w) ? this.g.w : "SelectExactMatch";
      this.G = Mr(Ir, this.g.A) ? this.g.A : "DisallowResize";
      this.l = null != this.g.h ? this.g.h : [];
      this.A =
        "number" === typeof this.g.g && 0 < this.g.g && 100 >= this.g.g
          ? this.g.g
          : 90;
    },
    Qr = function (a, b) {
      var c = [];
      b.forEach(function (d) {
        !Ub(d.getContent()) &&
        (isNaN(d.g.sequenceNumber) ||
          isNaN(d.g.masterSequenceNumber) ||
          d.g.masterSequenceNumber == d.g.sequenceNumber) &&
        Or(a, d)
          ? c.push(d)
          : ((d = Pr(a, d)), null != d && !Ub(d.getContent()) && c.push(d));
      });
      return c;
    },
    Or = function (a, b) {
      var c;
      if ((c = "Flash" != b.h() || Lr)) {
        if ((c = "All" == a.w || a.w == b.g.resourceType))
          (c = b.h()), (c = null == c ? !0 : "All" == a.o || a.o == c);
        c &&
          ((c = b.g.adSlotId),
          (c = 0 == a.l.length ? !0 : null != c ? a.l.includes(c) : !1));
      }
      if (c)
        if (
          ((b = b.g.size),
          (c = "IgnoreSize" == a.C) ||
            ((c = a.h),
            (c =
              c == b
                ? !0
                : c && b
                ? c.width == b.width && c.height == b.height
                : !1)),
          c)
        )
          a = !0;
        else {
          if ((c = "SelectNearMatch" == a.C))
            "ResizeSmaller" == a.G
              ? ((b.width <= a.h.width && b.height <= a.h.height) ||
                  ((c = a.h),
                  (c = Math.min(c.width / b.width, c.height / b.height)),
                  (b = new D(c * b.width, c * b.height))),
                (c = b.width),
                (b = b.height))
              : ((c = b.width), (b = b.height)),
              (c =
                c > a.h.width ||
                b > a.h.height ||
                c < (a.A / 100) * a.h.width ||
                b < (a.A / 100) * a.h.height
                  ? !1
                  : !0);
          a = c;
        }
      else a = !1;
      return a;
    },
    Pr = function (a, b) {
      b = Cr(b);
      return null == b
        ? null
        : b.find(function (c) {
            return Or(a, c);
          }) || null;
    },
    Mr = function (a, b) {
      return null != b && zb(a, b);
    };
  var Rr = function () {
    this.A = 1;
    this.l = -1;
    this.g = 1;
    this.w = this.o = 0;
    this.h = !1;
  };
  l = Rr.prototype;
  l.Ge = function () {
    return this.A;
  };
  l.De = function () {
    return this.l;
  };
  l.Be = function () {
    return this.g;
  };
  l.Ee = function () {
    return this.o;
  };
  l.Fe = function () {
    return this.w;
  };
  l.Ce = function () {
    return this.h;
  };
  var S = function (a) {
    this.g = a;
  };
  S.prototype.h = function () {
    return this.g.adId;
  };
  S.prototype.l = function () {
    return this.g.creativeAdId;
  };
  S.prototype.o = function () {
    return this.g.creativeId;
  };
  var Sr = function (a) {
    return a.g.adQueryId;
  };
  l = S.prototype;
  l.ff = function () {
    return this.g.adSystem;
  };
  l.gf = function () {
    return this.g.advertiserName;
  };
  l.hf = function () {
    return this.g.apiFramework;
  };
  l.Ff = function () {
    return this.g.adWrapperIds;
  };
  l.Hf = function () {
    return this.g.adWrapperCreativeIds;
  };
  l.Gf = function () {
    return this.g.adWrapperSystems;
  };
  l.isLinear = function () {
    return this.g.linear;
  };
  l.If = function () {
    return this.g.skippable;
  };
  l.kf = function () {
    return this.g.contentType;
  };
  l.mf = function () {
    return this.g.description;
  };
  l.uf = function () {
    return this.g.title;
  };
  l.getDuration = function () {
    return this.g.duration;
  };
  l.Df = function () {
    return this.g.vastMediaWidth;
  };
  l.Cf = function () {
    return this.g.vastMediaHeight;
  };
  l.Ef = function () {
    return this.g.width;
  };
  l.nf = function () {
    return this.g.height;
  };
  l.xf = function () {
    return this.g.uiElements;
  };
  l.rf = function () {
    return this.g.minSuggestedDuration;
  };
  l.df = function () {
    var a = this.g.adPodInfo,
      b = new Rr();
    b.o = a.podIndex;
    b.w = a.timeOffset;
    b.A = a.totalAds;
    b.g = a.adPosition;
    b.h = a.isBumper;
    b.l = a.maxDuration;
    return b;
  };
  l.jf = function (a, b, c) {
    var d = this.g.companions.map(function (e) {
      return new Br(e);
    });
    return Qr(new Nr(new D(a, b), c), d);
  };
  l.vf = function () {
    return Qq(Ec(this.g.traffickingParameters));
  };
  l.wf = function () {
    return this.g.traffickingParameters;
  };
  l.Bf = function () {
    return this.g.vastMediaBitrate;
  };
  l.qf = function () {
    return this.g.mediaUrl;
  };
  l.tf = function () {
    return this.g.surveyUrl;
  };
  l.lf = function () {
    return this.g.dealId;
  };
  l.Af = function () {
    return (this.g.universalAdIds || []).map(function (a) {
      return new Dr(a.adIdValue, a.adIdRegistry);
    });
  };
  l.zf = function () {
    return this.g.universalAdIdValue;
  };
  l.yf = function () {
    return this.g.universalAdIdRegistry;
  };
  l.sf = function () {
    return this.g.skipTimeOffset;
  };
  l.Jf = function () {
    return this.g.disableUi;
  };
  var Tr = function (a, b, c) {
    this.l = b;
    this.h = c;
    this.o = a;
  };
  y(Tr, Error);
  l = Tr.prototype;
  l.ye = function () {
    return this.g;
  };
  l.ze = function () {
    return this.l;
  };
  l.xe = function () {
    return this.h;
  };
  l.le = function () {
    return 1e3 > this.h ? this.h : 900;
  };
  l.Ae = function () {
    return this.o;
  };
  l.toString = function () {
    return (
      "AdError " +
      this.h +
      ": " +
      this.l +
      (null != this.g ? " Caused by: " + this.g : "")
    );
  };
  var Ur = function (a) {
    if (null == a.errorCode || null == a.errorMessage || null == a.type)
      return null;
    for (
      var b = new Tr(a.type, a.errorMessage, a.errorCode),
        c = b,
        d = a.innerError,
        e = 0;
      3 > e;
      ++e
    )
      if (d instanceof Object) {
        var f = new Tr(d.type, d.errorMessage, d.errorCode);
        c = c.g = f;
        d = d.innerError;
      } else {
        null != d && (c.g = Error(a.innerError));
        break;
      }
    return b;
  };
  var Vr = function (a, b) {
    Vg.call(this, "adError");
    this.h = a;
    this.o = b ? b : null;
  };
  y(Vr, Vg);
  Vr.prototype.w = function () {
    return this.h;
  };
  Vr.prototype.A = function () {
    return this.o;
  };
  var T = {},
    Wr =
      ((T.creativeView = "creativeview"),
      (T.start = "start"),
      (T.midpoint = "midpoint"),
      (T.firstQuartile = "firstquartile"),
      (T.thirdQuartile = "thirdquartile"),
      (T.complete = "complete"),
      (T.mute = "mute"),
      (T.unmute = "unmute"),
      (T.pause = "pause"),
      (T.rewind = "rewind"),
      (T.resume = "resume"),
      (T.fullscreen = "fullscreen"),
      (T.exitFullscreen = "exitfullscreen"),
      (T.expand = "expand"),
      (T.collapse = "collapse"),
      (T.close = "close"),
      (T.acceptInvitation = "acceptinvitation"),
      (T.userInteraction = "userInteraction"),
      (T.adCanPlay = "adCanPlay"),
      (T.adStarted = "adStarted"),
      (T.abandon = "abandon"),
      (T.acceptInvitationLinear = "acceptinvitationlinear"),
      (T.engagedView = "engagedview"),
      (T.instreamAdComplete = "instreamAdComplete"),
      (T.skipShown = "skipshown"),
      (T.skippableStateChanged = "skippableStateChanged"),
      (T.skip = "skip"),
      (T.progress = "progress"),
      (T.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP"),
      (T.annotation_start = "annotation_start"),
      (T.annotation_click = "annotation_click"),
      (T.annotation_close = "annotation_close"),
      (T.cta_annotation_shown = "cta_annotation_shown"),
      (T.cta_annotation_clicked = "cta_annotation_clicked"),
      (T.cta_annotation_closed = "cta_annotation_closed"),
      (T.replay = "replay"),
      (T.stop = "stop"),
      (T.autoplayDisallowed = "autoplayDisallowed"),
      (T.error = "error"),
      (T.mediaLoadTimeout = "mediaLoadTimeout"),
      (T.linearChanged = "linearChanged"),
      (T.click = "click"),
      (T.contentPauseRequested = "contentPauseRequested"),
      (T.contentResumeRequested = "contentResumeRequested"),
      (T.discardAdBreak = "discardAdBreak"),
      (T.updateAdsRenderingSettings = "updateAdsRenderingSettings"),
      (T.durationChange = "durationChange"),
      (T.expandedChanged = "expandedChanged"),
      (T.autoClose = "autoClose"),
      (T.userClose = "userClose"),
      (T.userRecall = "userRecall"),
      (T.prefetched = "prefetched"),
      (T.loaded = "loaded"),
      (T.init = "init"),
      (T.allAdsCompleted = "allAdsCompleted"),
      (T.adMetadata = "adMetadata"),
      (T.adBreakReady = "adBreakReady"),
      (T.adBreakFetchError = "adBreakFetchError"),
      (T.log = "log"),
      (T.volumeChange = "volumeChange"),
      (T.companionBackfill = "companionBackfill"),
      (T.companionInitialized = "companionInitialized"),
      (T.companionImpression = "companionImpression"),
      (T.companionClick = "companionClick"),
      (T.impression = "impression"),
      (T.interaction = "interaction"),
      (T.adProgress = "adProgress"),
      (T.adBuffering = "adBuffering"),
      (T.trackingUrlPinged = "trackingUrlPinged"),
      (T.measurable_impression = "measurable_impression"),
      (T.custom_metric_viewable = "custom_metric_viewable"),
      (T.viewable_impression = "viewable_impression"),
      (T.fully_viewable_audible_half_duration_impression =
        "fully_viewable_audible_half_duration_impression"),
      (T.overlay_resize = "overlay_resize"),
      (T.overlay_unmeasurable_impression = "overlay_unmeasurable_impression"),
      (T.overlay_unviewable_impression = "overlay_unviewable_impression"),
      (T.overlay_viewable_immediate_impression =
        "overlay_viewable_immediate_impression"),
      (T.overlay_viewable_end_of_session_impression =
        "overlay_viewable_end_of_session_impression"),
      (T.externalActivityEvent = "externalActivityEvent"),
      (T.adEvent = "adEvent"),
      (T.configure = "configure"),
      (T.remainingTime = "remainingTime"),
      (T.destroy = "destroy"),
      (T.resize = "resize"),
      (T.volume = "volume"),
      (T.sendAbandonUrls = "sendAbandonUrls"),
      (T.authorIconClicked = "videoAuthorIconClicked"),
      (T.authorNameClicked = "videoAuthorClicked"),
      (T.videoClicked = "videoClicked"),
      (T.videoIconClicked = "videoIconClicked"),
      (T.learnMoreClicked = "videoLearnMoreClicked"),
      (T.muteClicked = "videoMuteClicked"),
      (T.titleClicked = "videoTitleClicked"),
      (T.skipShown = "SKIP_SHOWN"),
      (T.videoSkipClicked = "SKIPPED"),
      (T.unmuteClicked = "videoUnmuteClicked"),
      (T.vpaidEvent = "vpaidEvent"),
      (T.show_ad = "show_ad"),
      (T.video_card_endcap_collapse = "video_card_endcap_collapse"),
      (T.video_card_endcap_dismiss = "video_card_endcap_dismiss"),
      (T.video_card_endcap_impression = "video_card_endcap_impression"),
      (T.mediaUrlPinged = "mediaUrlPinged"),
      (T.breakStart = "breakstart"),
      (T.breakEnd = "breakend"),
      (T.omidReady = "omidReady"),
      (T.omidUnavailable = "omidUnavailable"),
      (T.omidAdSessionCompleted = "omidAdSessionCompleted"),
      (T.omidAdSessionAbandoned = "omidAdSessionAbandoned"),
      (T.verificationNotExecuted = "verificationNotExecuted"),
      (T.loadStart = "loadStart"),
      (T.seeked = "seeked"),
      (T.seeking = "seeking"),
      T);
  var U = function (a, b, c) {
    b = void 0 === b ? null : b;
    c = void 0 === c ? null : c;
    Vg.call(this, a);
    this.A = b;
    this.w = null != c ? c : null;
  };
  y(U, Vg);
  U.prototype.C = function () {
    return this.A;
  };
  U.prototype.G = function () {
    return this.w;
  };
  var Xr = function () {
    this.loadVideoTimeout = 8e3;
  };
  l = Xr.prototype;
  l.autoAlign = !0;
  l.bitrate = -1;
  l.uiElements = null;
  l.disableClickThrough = !1;
  l.enablePreloading = !1;
  l.mimeTypes = null;
  l.restoreCustomPlaybackStateOnAdBreakComplete = !1;
  l.useLearnMoreButton = !1;
  l.useStyledLinearAds = !1;
  l.useStyledNonLinearAds = !1;
  l.playAdsAfterTime = -1;
  l.useVideoAdUi = !0;
  l.loadVideoTimeout = 8e3;
  l.disableUi = !1;
  var Yr = function (a) {
      this.g = a;
    },
    as = function () {
      var a = Zr();
      return $r(a, "disableExperiments");
    },
    $r = function (a, b) {
      return yb(a.g, b) && ((a = a.g[b]), "boolean" === typeof a) ? a : !1;
    },
    bs = function (a) {
      if (yb(a.g, "forceExperimentIds")) {
        a = a.g.forceExperimentIds;
        var b = [],
          c = 0;
        Fa(a) &&
          a.forEach(function (d) {
            "number" === typeof d && (b[c++] = d);
          });
        return b;
      }
      return null;
    };
  var V = function () {
      this.w = "always";
      this.G = 4;
      this.H = 1;
      this.g = 0;
      this.l = !0;
      this.C = "en";
      this.N = !1;
      this.D = this.I = "";
      this.F = null;
      this.X = this.O = -1;
      this.V = this.L = this.J = "";
      this.h = !1;
      this.o = !0;
      try {
        this.ca = gj(void 0)[0];
      } catch (a) {}
    },
    cs = function (a) {
      a = Ec(a);
      Ub(a) || (a = a.substring(0, 20));
      return a;
    };
  l = V.prototype;
  l.Qe = function (a) {
    this.w = a;
  };
  l.He = function () {
    return this.w;
  };
  l.We = function (a) {
    this.G = a;
  };
  l.Ke = function () {
    return this.G;
  };
  l.Ze = function (a) {
    this.P = a;
  };
  l.Ne = function () {
    return this.P;
  };
  l.$e = function (a) {
    "boolean" === typeof a && (this.H = a ? 1 : 0);
  };
  l.af = function (a) {
    this.H = a;
  };
  l.Pe = function (a) {
    this.l = a;
  };
  l.Oe = function () {
    return this.l;
  };
  l.Ue = function (a) {
    this.N = a;
  };
  l.zb = function () {
    return this.N;
  };
  l.Ve = function (a) {
    if ((a = Rq(a))) this.C = a;
  };
  l.ke = function () {
    return this.C;
  };
  l.Xe = function (a) {
    this.I = cs(a);
  };
  l.Le = function () {
    return this.I;
  };
  l.Ye = function (a) {
    this.D = cs(a);
  };
  l.Me = function () {
    return this.D;
  };
  var Zr = function () {
    var a = W;
    if (null == a.F) {
      var b = {};
      var c = new R(E().location.href).g;
      if (Bp(c, "tcnfp"))
        try {
          b = JSON.parse(c.get("tcnfp"));
        } catch (d) {}
      a.F = new Yr(b);
    }
    return a.F;
  };
  V.prototype.Z = function (a) {
    this.O = a;
  };
  V.prototype.$ = function (a) {
    this.X = a;
  };
  var fs = function () {
      var a = W;
      ds();
      a.J = es[1] || "";
    },
    gs = function () {
      var a = W;
      ds();
      a.V = es[6] || "";
    },
    hs = function () {
      var a = W;
      ds();
      a.L = es[4] || "";
    };
  l = V.prototype;
  l.Se = function (a) {
    this.h = a;
  };
  l.Ie = function () {
    return this.h;
  };
  l.Re = function (a) {
    this.o = a;
  };
  l.Te = function () {};
  l.Je = function () {
    return !0;
  };
  var W = new V();
  var is = function (a) {
    this.g = a;
  };
  is.prototype.h = function () {
    return this.g;
  };
  var js =
    "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(
      " "
    );
  var ks = function (a) {
      var b = Zr();
      return (b && $r(b, "forceCustomPlayback")) ||
        W.zb() ||
        !(
          (!Zc && !Xc && !hq()) ||
          ((Xc || hq() || (iq(10) && (W.h || eg(Ig)))) && a)
        ) ||
        (Vc && (!Vc || !gq(fq, 4)))
        ? !0
        : gk()
        ? !eg(Lg)
        : !1;
    },
    ls = function (a) {
      return null == a
        ? !1
        : W.zb()
        ? !0
        : Zc || Xc || hq()
        ? jq(a)
          ? Xc || hq() || (iq(10) && W.h)
            ? !1
            : !0
          : !0
        : (Vc && (!Vc || !gq(fq, 4))) || gk()
        ? !0
        : !1;
    },
    ms = function () {
      var a = Zr();
      return a && $r(a, "disableOnScreenDetection") ? !1 : !ek();
    };
  function ns(a) {
    a = Vp(a, ek() ? "https" : window.location.protocol);
    if (ek()) os(a);
    else
      try {
        a && (Hp(a) ? Lp(a) : Pp(a));
      } catch (b) {}
  }
  function os(a) {
    new Mq().get(a, new bq()).then(
      function () {},
      function () {}
    );
  }
  var ps = function (a, b) {
      this.message = a;
      this.g = b;
    },
    qs = new ps(
      "Failed to initialize ad playback element before starting ad playback.",
      400
    ),
    rs = new ps("The provided {0} information: {1} is invalid.", 1101),
    ts = function (a, b, c) {
      var d = void 0 === b ? null : b;
      if (!(d instanceof Tr)) {
        var e = a.g,
          f = a.message,
          g = Array.prototype.slice.call(arguments, 2);
        if (0 < g.length)
          for (var h = 0; h < g.length; h++)
            f = f.replace(new RegExp("\\{" + h + "\\}", "ig"), g[h]);
        e = new Tr("adPlayError", f, e);
        e.g = d;
        d = e;
      }
      return d;
    };
  var us = function (a, b, c) {
    this.l = a;
    this.g = Math.min(Math.max(b || 0, 0), 1);
    this.h = null != c ? c : !0;
  };
  us.prototype.getId = function () {
    return this.l;
  };
  var vs = function (a) {
    this.l = a;
    this.h = new ep();
    this.g = null;
  };
  vs.prototype.getId = function () {
    return this.l;
  };
  var ws = function (a) {
    var b = Math.random(),
      c = 0,
      d = a.h.ka();
    d.forEach(function (h) {
      c += h.g;
    });
    var e = 1 < c ? c : 1;
    a.g = null;
    for (var f = 0, g = 0; g < d.length; ++g)
      if (((f += d[g].g), f / e >= b)) {
        a.g = d[g];
        break;
      }
  };
  var xs = function () {
    return null != q.G_testRunner;
  };
  var As = function () {
      this.h = !1;
      this.g = new ep();
      X(this, "GvnExternalLayer", 31061774, 0.01);
      X(this, "GvnExternalLayer", 31061775, 0.01);
      X(this, "GvnExternalLayer", 651800007, 0.01);
      X(this, "GvnExternalLayer", 651800008, 0.01);
      X(this, "GvnExternalLayer", 44710986, 0.01);
      X(this, "GvnExternalLayer", 44710987, 0.01);
      X(this, "ActiveViewExternalLayer", 42530094, 0.05);
      X(this, "ActiveViewExternalLayer", 42530095, 0.05);
      X(this, "ActiveViewExternalLayer", 42530173, 0.01);
      X(this, "ActiveViewExternalLayer", 42530174, 0.01);
      X(this, "GvnExternalLayer", 44710216, 0.01);
      X(this, "GvnExternalLayer", 44710217, 0.01);
      X(this, "ActiveViewExternalLayer", 668123728, 0.01);
      X(this, "ActiveViewExternalLayer", 668123729, 0.01);
      X(this, "ActiveViewExternalLayer", 44710341, 0.01);
      X(this, "ActiveViewExternalLayer", 44710342, 0.01);
      X(this, "ActiveViewExternalLayer", 370204080, 0.001);
      X(this, "ActiveViewExternalLayer", 370204081, 0.001);
      X(this, "GvnExternalLayer", 504733015, 0);
      X(this, "GvnExternalLayer", 504733016, 0);
      X(this, "GvnExternalLayer", 189176e3, 0.05);
      X(this, "GvnExternalLayer", 189176001, 0.05);
      X(this, "GvnExternalLayer", 605457003, 0.01);
      X(this, "GvnExternalLayer", 605457004, 0.01);
      X(this, "GvnExternalLayer", 40819802, 0.01);
      X(this, "GvnExternalLayer", 40819803, 0.01);
      X(this, "GvnExternalLayer", 420706136, 0.01);
      X(this, "GvnExternalLayer", 420706137, 0.01);
      X(this, "GvnExternalLayer", 420706138, 0.01);
      X(this, "GvnExternalLayer", 420706139, 0.01);
      X(this, "GvnExternalLayer", 420706140, 0.01);
      X(this, "GvnExternalLayer", 420706141, 0.01);
      ys(this);
      var a = Zr();
      a = bs(a);
      null != a && ((this.h = !0), zs(this, a.map(String)));
    },
    Bs = ["ActiveViewExternalLayer"],
    Cs = null,
    Ds = function () {
      Cs || (Cs = new As());
      return Cs;
    },
    X = function (a, b, c, d) {
      Ub(Ec(b)) ||
        isNaN(c) ||
        0 >= c ||
        ((c = new us(c, d)), Es(a, b).h.set(c.getId(), c));
    },
    ys = function (a) {
      as() ||
        a.g.ka().forEach(function (b) {
          ws(b);
        });
    },
    Fs = function (a, b, c, d) {
      isNaN(b) ||
        0 >= b ||
        Ub(Ec(c)) ||
        ((a.h = !0), (d = null != d ? d : !0), (Es(a, c).g = new us(b, 0, d)));
    },
    zs = function (a, b) {
      b.forEach(function (c) {
        Fs(a, Number(c), "FORCED_PUB_EXP_LAYER_" + c, void 0);
      });
    },
    Gs = function () {
      var a = {};
      Ds()
        .g.ka()
        .forEach(function (b) {
          var c = b.g;
          if (c) {
            var d = {};
            d.experimentId = c.getId();
            d.shouldReport = c.h;
            a[b.getId()] = d;
          } else a[b.getId()] = {};
        });
      return a;
    },
    Hs = function (a, b) {
      return a.h || (as() ? 0 : !xs())
        ? a.g.ka().some(function (c) {
            return !!c.g && c.g.getId() == b;
          })
        : !1;
    },
    Is = function () {
      var a = Ds();
      if (!a.h && (as() || xs())) return "";
      var b = [];
      a.g.ka().forEach(function (c) {
        (c = c.g) && c.h && b.push(c.getId());
      });
      a = ig();
      return b.concat(a).sort().join(",");
    },
    Es = function (a, b) {
      var c = a.g.get(b);
      null == c && ((c = new vs(b)), a.g.set(b, c));
      return c;
    },
    Js = function () {
      var a = [],
        b = Ds();
      Bs.forEach(function (c) {
        (c = (c = Es(b, c)) ? c.g : null) && a.push(c.getId());
      });
      return a;
    };
  var Ms = function () {
      var a = "h.3.353.0";
      null != Ks && ((a += "/n." + Ks), null != Ls && (a += "/" + Ls));
      return a;
    },
    Ls = null,
    Ns = null,
    Ks = null;
  Hs(Ds(), 504733016);
  var Os = null;
  new (function () {
    var a = new R("");
    var b = a.l;
    (a =
      Tb(a.h, "googleads.g.doubleclick.net") && Pq("/pagead/(live/)?ads", b)) ||
      ((b = new Tq("")),
      (a = b.h),
      (b = Uq(b, b.l)),
      (a =
        !Tb(a, ".g.doubleclick.net") &&
        Tb(a, "doubleclick.net") &&
        Pq("/(ad|pfad)[x|i|j]?/", b)));
    (a = a || Yq("")) || (a = "bid.g.doubleclick.net" == new R("").h);
    a ||
      ((a = new R("")),
      (b = a.l),
      "ad.doubleclick.net" === a.h && Pq("/dv3/adv", b));
    a = new R("");
    a.g.get("tfua");
    a.g.get("rdp");
    a.g.get("npa");
    a.g.get("gdpr");
    a.g.get("gdpr_consent");
  })();
  var Ps = function () {
    this.g = 0.01 > Math.random();
    this.h = Math.floor(4503599627370496 * Math.random());
  };
  Ps.prototype.report = function (a, b, c) {
    if (!xs() && (this.g || c)) {
      b = b || {};
      b.lid = a;
      b.sdkv = Ms();
      a = Is();
      Ub(Ec(a)) || (b.e = a);
      b = Qs(this, b);
      var d = new R("http://pagead2.googlesyndication.com/pagead/gen_204");
      ob(
        b,
        function (e, f) {
          wp(
            d,
            f,
            null == e ? "" : "boolean" == typeof e ? (e ? "t" : "f") : "" + e
          );
        },
        this
      );
      a = Rs();
      kp(d, a.o);
      a = d.toString();
      b = d.g.get("url");
      null != b && oc() && 2083 < a.length && (a = Ss(d, b));
      ns(a);
    }
  };
  var Ss = function (a, b) {
      wp(a, "url", "");
      try {
        var c = 2083 - a.toString().length - 1;
        if (0 >= c) return a.toString();
        for (
          var d = b.slice(0, c), e = encodeURIComponent(d), f = c;
          0 < f && e.length > c;

        )
          (d = b.slice(0, f--)), (e = encodeURIComponent(d));
        wp(a, "url", d);
      } catch (g) {}
      return a.toString();
    },
    Qs = function (a, b) {
      b.id = "ima_html5";
      var c = Rs();
      b.c = a.h;
      b.domain = c.h;
      return b;
    },
    Rs = function () {
      var a = E(),
        b = document;
      return new R(a.parent == a ? a.location.href : b.referrer);
    };
  Da(Ps);
  var Ts = function () {
    K.call(this);
    this.C = this.H = this.L = this.D = !1;
    this.h = 0;
    this.w = [];
    this.F = !1;
    this.O = this.N = Infinity;
    this.o = 0;
    this.A = new mq(this);
    this.J = {};
  };
  p(Ts, K);
  var Vs = function (a, b) {
      null == b || a.D || ((a.g = b), Us(a), (a.D = !0));
    },
    Xs = function (a) {
      null != a.g &&
        a.D &&
        (Ws(a),
        (a.D = !1),
        (a.H = !1),
        (a.C = !1),
        (a.h = 0),
        (a.w = []),
        (a.F = !1));
    },
    Us = function (a) {
      Ws(a);
      !(a.g instanceof K) && "ontouchstart" in document.documentElement && Zc
        ? ((a.J = {
            touchstart: Ma(a.$, a),
            touchmove: Ma(a.X, a),
            touchend: Ma(a.Z, a),
          }),
          ob(
            a.J,
            function (b, c) {
              this.g.addEventListener(c, b, !1);
            },
            a
          ))
        : a.A.T(a.g, "click", a.V);
    },
    Ws = function (a) {
      a.A.Ca(a.g, "click", a.V);
      ob(
        a.J,
        function (b, c) {
          this.g.removeEventListener(c, b, !1);
        },
        a
      );
      a.J = {};
    };
  Ts.prototype.$ = function (a) {
    this.H = !0;
    this.h = a.touches.length;
    this.o && (window.clearTimeout(this.o), (this.o = 0), (this.L = !0));
    (this.F = Ys(this, a.touches) || 1 != a.touches.length)
      ? (this.O = this.N = Infinity)
      : ((this.N = a.touches[0].clientX), (this.O = a.touches[0].clientY));
    a = a.touches;
    this.w = [];
    for (var b = 0; b < a.length; b++) this.w.push(a[b].identifier);
  };
  Ts.prototype.X = function (a) {
    this.h = a.touches.length;
    if (
      !iq(8) ||
      Math.pow(a.changedTouches[0].clientX - this.N, 2) +
        Math.pow(a.changedTouches[0].clientY - this.O, 2) >
        Math.pow(5, 2)
    )
      this.C = !0;
  };
  Ts.prototype.Z = function (a) {
    !this.H ||
      1 != this.h ||
      this.C ||
      this.L ||
      this.F ||
      !Ys(this, a.changedTouches) ||
      (this.o = window.setTimeout(Ma(this.P, this), 300));
    this.h = a.touches.length;
    0 == this.h && ((this.C = this.H = !1), (this.w = []));
    this.L = !1;
  };
  Ts.prototype.V = function () {
    this.P();
  };
  var Ys = function (a, b) {
    for (var c = 0; c < b.length; c++)
      if (a.w.includes(b[c].identifier)) return !0;
    return !1;
  };
  Ts.prototype.P = function () {
    this.o = 0;
    this.dispatchEvent(new Vg("click"));
  };
  Ts.prototype.R = function () {
    Xs(this);
    this.A.Y();
    this.A = null;
    K.prototype.R.call(this);
  };
  var Zs = function (a, b) {
    xr.call(this, b);
    this.w = a;
    this.va = null;
    this.A = new mq(this);
    this.A.T(E(), "message", this.C);
  };
  y(Zs, xr);
  var $s = function (a) {
    if (null == a || "string" !== typeof a || 0 != a.lastIndexOf("ima://", 0))
      return null;
    a = a.substr(6);
    try {
      return JSON.parse(a);
    } catch (b) {
      return null;
    }
  };
  Zs.prototype.sendMessage = function (a, b, c) {
    null != this.va &&
      null != this.va.postMessage &&
      this.va.postMessage(at(this, a, b, c), "*");
    null != this.va && null == this.va.postMessage && Ps.B().report(11);
  };
  Zs.prototype.R = function () {
    Tg(this.A);
    this.va = null;
    Zs.wa.R.call(this);
  };
  Zs.prototype.C = function (a) {
    a = a.h;
    var b = $s(a.data);
    if (bt(this, b)) {
      if (null == this.va) (this.va = a.source), this.h || this.connect();
      else if (this.va != a.source) return;
      bt(this, b) &&
        this.dispatchEvent(
          new yr(b.name, b.type, b.data || {}, b.sid, a.origin)
        );
    }
  };
  var at = function (a, b, c, d) {
      var e = {};
      e.name = b;
      e.type = c;
      null != d && (e.data = d);
      e.sid = a.g;
      e.channel = a.w;
      return "ima://" + Vf(e);
    },
    bt = function (a, b) {
      if (null == b) return !1;
      var c = b.channel;
      if (null == c || c != a.w) return !1;
      b = b.sid;
      return null == b || ("*" != a.g && b != a.g) ? !1 : !0;
    };
  var ct = function (a, b) {
    K.call(this);
    this.w = a;
    this.o = b;
    this.g = {};
    this.h = new mq(this);
    this.h.T(E(), "message", this.A);
  };
  y(ct, K);
  ct.prototype.send = function (a) {
    var b = a.h;
    this.g.hasOwnProperty(b) && this.g[b].send(a.type, a.ba, a.fa);
  };
  var et = function (a, b, c, d) {
    a.g.hasOwnProperty(b) ||
      ((c = new Zs(b, c)),
      a.h.T(c, a.w, function (e) {
        this.dispatchEvent(new dt(e.type, e.ba, e.fa, e.Pb, e.Ed, b));
      }),
      (c.va = d),
      c.connect(),
      (a.g[b] = c));
  };
  ct.prototype.R = function () {
    this.h.Y();
    for (var a in this.g) Tg(this.g[a]);
    ct.wa.R.call(this);
  };
  ct.prototype.A = function (a) {
    a = a.h;
    var b = $s(a.data);
    if (null != b) {
      var c = b.channel;
      if (this.o && !this.g.hasOwnProperty(c)) {
        var d = b.sid;
        et(this, c, d, a.source);
        this.dispatchEvent(
          new dt(b.name, b.type, b.data || {}, d, a.origin, c)
        );
      }
    }
  };
  var dt = function (a, b, c, d, e, f) {
    yr.call(this, a, b, c, d, e);
    this.h = f;
  };
  y(dt, yr);
  var gt = function () {
    var a = Ba("google.ima.gptProxyInstance", E());
    if (null != a) return a;
    mq.call(this);
    this.l = new ct("gpt", !0);
    Ug(this, this.l);
    this.T(this.l, "gpt", this.A);
    this.g = null;
    ft() ||
      E().top === E() ||
      ((this.g = new ct("gpt", !1)),
      Ug(this, this.g),
      this.T(this.g, "gpt", this.w));
  };
  y(gt, mq);
  var ft = function () {
      return !!Ba("googletag.cmd", E());
    },
    ht = function () {
      var a = Ba("googletag.console", E());
      return null != a ? a : null;
    };
  gt.prototype.A = function (a) {
    var b = a.Ed,
      c = "//imasdk.googleapis.com/".match(qe);
    b = b.match(qe);
    if (c[3] == b[3] && c[4] == b[4])
      if (null != this.g)
        et(this.g, a.h, a.Pb, E().parent), null != this.g && this.g.send(a);
      else if (((c = a.fa), null != c && void 0 !== c.scope)) {
        b = c.scope;
        c = c.args;
        var d;
        if ("proxy" == b)
          (c = a.ba),
            "isGptPresent" == c
              ? (d = ft())
              : "isConsolePresent" == c && (d = null != ht());
        else if (ft())
          if ("pubads" == b || "companionAds" == b) {
            d = a.ba;
            var e = E().googletag;
            if (
              null != e &&
              null != e[b] &&
              ((e = e[b]()), null != e && ((d = e[d]), null != d))
            )
              try {
                var f = d.apply(e, c);
              } catch (g) {}
            d = f;
          } else if ("console" == b) {
            if (((f = ht()), null != f && ((e = f[a.ba]), null != e)))
              try {
                e.apply(f, c);
              } catch (g) {}
          } else if (null === b) {
            d = a.ba;
            f = E();
            if (
              [
                "googleGetCompanionAdSlots",
                "googleSetCompanionAdContents",
              ].includes(d) &&
              ((d = f[d]), null != d)
            )
              try {
                e = d.apply(f, c);
              } catch (g) {}
            d = e;
          }
        void 0 !== d && ((a.fa.returnValue = d), this.l.send(a));
      }
  };
  gt.prototype.w = function (a) {
    this.l.send(a);
  };
  var it = function (a, b) {
    if (a.g) {
      var c = a.g;
      Tg(c.g[b]);
      delete c.g[b];
    }
    a.l && ((a = a.l), Tg(a.g[b]), delete a.g[b]);
  };
  var jt = Rb(
    Kb(
      Lb("http://pagead2.googlesyndication.com/omsdk/releases/live/omsdk-v1.js")
    )
  );
  function kt(a, b) {
    if (!b) throw Error("Value for " + a + " is undefined, null or blank.");
    if ("string" !== typeof b && !(b instanceof String))
      throw Error("Value for " + a + " is not a string.");
    if ("" === b.trim()) throw Error("Value for " + a + " is empty string.");
  }
  function lt(a, b) {
    if (null == b) throw Error("Value for " + a + " is undefined or null");
  }
  function mt(a, b) {
    if (null == b) throw Error(a + " must not be null or undefined.");
    if ("number" !== typeof b || isNaN(b))
      throw Error("Value for " + a + " is not a number");
  }
  function nt() {
    return /\d+\.\d+\.\d+(-.*)?/.test("1.2.21-google_20191111");
  }
  function ot() {
    for (var a = ["1", "2", "21"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
      var d = parseInt(a[c], 10),
        e = parseInt(b[c], 10);
      if (d > e) break;
      else if (d < e) return !1;
    }
    return !0;
  }
  var pt = {
    LOADED: "loaded",
    hc: "start",
    FIRST_QUARTILE: "firstQuartile",
    MIDPOINT: "midpoint",
    THIRD_QUARTILE: "thirdQuartile",
    COMPLETE: "complete",
    gc: "pause",
    Wc: "resume",
    Vc: "bufferStart",
    Uc: "bufferFinish",
    SKIPPED: "skipped",
    de: "volumeChange",
    mh: "playerStateChange",
    qg: "adUserInteraction",
  };
  var qt = function (a, b, c, d) {
      this.h = a;
      this.method = b;
      this.version = c;
      this.g = d;
    },
    rt = function (a) {
      return (
        !!a &&
        void 0 !== a.omid_message_guid &&
        void 0 !== a.omid_message_method &&
        void 0 !== a.omid_message_version &&
        "string" === typeof a.omid_message_guid &&
        "string" === typeof a.omid_message_method &&
        "string" === typeof a.omid_message_version &&
        (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
      );
    },
    tt = function (a) {
      return new qt(
        a.omid_message_guid,
        a.omid_message_method,
        a.omid_message_version,
        a.omid_message_args
      );
    },
    ut = function (a) {
      var b = {};
      b =
        ((b.omid_message_guid = a.h),
        (b.omid_message_method = a.method),
        (b.omid_message_version = a.version),
        b);
      void 0 !== a.g && (b.omid_message_args = a.g);
      return b;
    };
  var vt = function (a) {
    this.h = a;
  };
  function wt(a, b) {
    return a && (a[b] || (a[b] = {}));
  }
  function xt(a, b) {
    var c;
    if (
      (c =
        void 0 === c
          ? "undefined" === typeof omidExports
            ? null
            : omidExports
          : c)
    )
      (a = a.split(".")),
        (a.slice(0, a.length - 1).reduce(wt, c)[a[a.length - 1]] = b);
  }
  function yt() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (a) {
        var b = (16 * Math.random()) | 0;
        return "y" === a ? ((b & 3) | 8).toString(16) : b.toString(16);
      }
    );
  }
  function zt(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    At(
      function () {
        throw new (Function.prototype.bind.apply(
          Error,
          [null, "Could not complete the test successfully - "].concat(ca(b))
        ))();
      },
      function () {
        return console.error.apply(console, ca(b));
      }
    );
  }
  function At(a, b) {
    "undefined" !== typeof jasmine && jasmine
      ? a()
      : "undefined" !== typeof console && console && console.error && b();
  }
  var Bt = function (a) {
    try {
      return a.frames ? !!a.frames.omid_v1_present : !1;
    } catch (b) {
      return !1;
    }
  };
  var Ct = function (a) {
    this.h = a;
    this.handleExportedMessage = Ct.prototype.l.bind(this);
  };
  p(Ct, vt);
  Ct.prototype.sendMessage = function (a, b) {
    b = void 0 === b ? this.h : b;
    if (!b)
      throw Error(
        "Message destination must be defined at construction time or when sending the message."
      );
    b.handleExportedMessage(ut(a), this);
  };
  Ct.prototype.l = function (a, b) {
    rt(a) && this.g && this.g(tt(a), b);
  };
  var Dt = eval("this"),
    Et = (function () {
      if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
      if ("undefined" !== typeof global && global) return global;
      if ("undefined" !== typeof window && window) return window;
      if ("undefined" !== typeof Dt && Dt) return Dt;
      throw Error("Could not determine global object context.");
    })();
  function Ft(a) {
    return null != a && "undefined" !== typeof a.top && null != a.top;
  }
  function Gt(a) {
    if (a === Et) return !1;
    try {
      if ("undefined" === typeof a.location.hostname) return !0;
    } catch (b) {
      return !0;
    }
    return !1;
  }
  var Ht = function (a, b) {
    this.h = b = void 0 === b ? Et : b;
    var c = this;
    a.addEventListener("message", function (d) {
      if ("object" === typeof d.data) {
        var e = d.data;
        rt(e) && d.source && c.g && c.g(tt(e), d.source);
      }
    });
  };
  p(Ht, vt);
  Ht.prototype.sendMessage = function (a, b) {
    b = void 0 === b ? this.h : b;
    if (!b)
      throw Error(
        "Message destination must be defined at construction time or when sending the message."
      );
    b.postMessage(ut(a), "*");
  };
  var It = ["omid", "v1_SessionServiceCommunication"];
  function Jt(a) {
    return It.reduce(function (b, c) {
      return b && b[c];
    }, a);
  }
  xt("OmidSessionClient.Partner", function (a, b) {
    kt("Partner.name", a);
    kt("Partner.version", b);
    this.name = a;
    this.version = b;
  });
  xt("OmidSessionClient.VerificationScriptResource", function (a, b, c) {
    kt("VerificationScriptResource.resourceUrl", a);
    this.h = a;
    this.l = b;
    this.g = c;
  });
  xt("OmidSessionClient.Context", function (a, b) {
    lt("Context.partner", a);
    this.g = a;
    this.h = b;
  });
  var Kt = { sessionError: "reportError" },
    Lt = Object.keys(pt).map(function (a) {
      return pt[a];
    }),
    Mt = ["impressionOccurred"],
    Nt = function () {
      var a = void 0 === a ? Et : a;
      this.g = a.omidSessionInterface;
    };
  Nt.prototype.sendMessage = function (a, b, c) {
    "registerSessionObserver" == a && (c = [b]);
    Kt[a] && (a = Kt[a]);
    b = this.g;
    0 <= Mt.indexOf(a) && (b = b.adEvents);
    0 <= Lt.indexOf(a) && (b = b.videoEvents);
    b = b[a];
    if (!b) throw Error("Unrecognized method name: " + a + ".");
    b.apply(null, ca(c));
  };
  var Qt = function (a, b, c) {
      lt("AdSession.context", a);
      this.C = a;
      if (!b) {
        var d;
        "undefined" === typeof d &&
          "undefined" !== typeof window &&
          window &&
          (d = window);
        d = Ft(d) ? d : Et;
        var e = void 0 === e ? Bt : e;
        a: {
          b = ba([d, Ft(d) ? d.top : Et]);
          for (var f = b.next(); !f.done; f = b.next()) {
            b: {
              var g = d;
              f = f.value;
              var h = e;
              if (!Gt(f))
                try {
                  var k = Jt(f);
                  if (k) {
                    var m = new Ct(k);
                    break b;
                  }
                } catch (n) {}
              m = h(f) ? new Ht(g, f) : null;
            }
            if ((g = m)) {
              b = g;
              break a;
            }
          }
          b = null;
        }
      }
      this.h = b;
      this.G = c || new Nt();
      this.A = this.w = this.o = !1;
      this.l = {};
      this.h && (this.h.g = this.I.bind(this));
      this.g(
        "setClientInfo",
        "1.2.21-google_20191111",
        this.C.g.name,
        this.C.g.version
      );
      Ot(this, a.h);
      Pt(this);
    },
    Rt = function (a, b) {
      a.sendMessage("registerSessionObserver", b);
    };
  Qt.prototype.error = function (a, b) {
    this.g("sessionError", a, b);
  };
  Qt.prototype.g = function (a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.sendMessage.apply(this, [a, null].concat(ca(c)));
  };
  Qt.prototype.sendMessage = function (a, b, c) {
    for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
    if (this.h)
      (e = yt()),
        b && (this.l[e] = b),
        (d = new qt(
          e,
          "SessionService." + a,
          "1.2.21-google_20191111",
          nt() && ot() ? d : JSON.stringify(d)
        )),
        this.h.sendMessage(d);
    else if (null != this.G.g)
      try {
        this.G.sendMessage(a, b, d);
      } catch (f) {
        zt("Failed to communicate with SessionInterface with error:"), zt(f);
      }
  };
  Qt.prototype.I = function (a) {
    var b = a.method,
      c = a.h;
    a = a.g;
    if ("response" === b && this.l[c]) {
      var d =
        nt() && ot()
          ? a
            ? a
            : []
          : a && "string" === typeof a
          ? JSON.parse(a)
          : [];
      this.l[c].apply(this, d);
    }
    "error" === b && window.console && zt(a);
  };
  var Ot = function (a, b) {
      b &&
        ((b = b.map(function (c) {
          return {
            resourceUrl: c.h,
            vendorKey: c.l,
            verificationParameters: c.g,
          };
        })),
        a.g("injectVerificationScriptResources", b));
    },
    Pt = function (a) {
      Rt(a, function (b) {
        "sessionStart" === b.type && (a.A = !0);
        "sessionFinish" === b.type && (a.A = !1);
      });
    };
  xt("OmidSessionClient.AdSession", Qt);
  var St = function () {
    K.call(this);
    this.g = new ep();
    this.h = null;
    this.o = new Map();
    this.w = new mq(this);
    Ug(this, this.w);
    this.D = new Map();
    this.C = null;
    this.A = -1;
    O.B().h = !0;
    ms();
  };
  y(St, K);
  var Tt = null,
    Ut = function () {
      null == Tt && (Tt = new St());
      return Tt;
    },
    Vt = function (a, b) {
      var c = {};
      c.queryId = a;
      c.viewabilityString = b;
      Ut().dispatchEvent(new U("measurable_impression", null, c));
    },
    Wt = function (a, b) {
      var c = {};
      c.queryId = a;
      c.viewabilityString = b;
      Ut().dispatchEvent(new U("viewable_impression", null, c));
    },
    Xt = function (a, b, c) {
      var d = {};
      d.queryId = a;
      d.viewabilityString = b;
      d.eventName = c;
      Ut().dispatchEvent(new U("externalActivityEvent", null, d));
    };
  St.prototype.destroy = function () {
    this.w.Ca(this.h, "activityMonitor", this.F);
    this.h = null;
  };
  St.prototype.F = function (a) {
    var b = a.fa;
    switch (a.ba) {
      case "appStateChanged":
        Uo(Lo.B(), b.appState, b.nativeTime);
        break;
      case "externalActivityEvent":
        Xt(b.queryId, b.viewabilityString, b.eventName);
        break;
      case "measurableImpression":
        Vt(b.queryId, b.viewabilityString);
        break;
      case "viewableImpression":
        Wt(b.queryId, b.viewabilityString);
        break;
      case "engagementData":
        b = b.engagementString;
        Ut().C = b;
        Ut().A = u();
        break;
      case "viewability":
        a = b.queryId;
        var c = b.vastEvent;
        this.o.get(a) && "start" == c && this.o.get(a);
        a = b.eventId;
        window.clearTimeout(a);
        if ((c = this.g.get(a))) hp(this.g, a), c(b.viewabilityData);
        break;
      case "viewabilityMeasurement":
        var d = Lo.B(),
          e = b.queryId;
        b = b.viewabilityData;
        c = O.B();
        a = Q.B();
        if ("exc" == c.U) {
          d.G = b.nativeVolume;
          c = b.exposure || 0;
          var f = b.unmeasurable;
          d = d.C(e, {});
          null != b.presenceData &&
            (null === d.l && (d.l = new Bl()), Gb(d.l, b.presenceData));
          -1 == d.ma && ((d.ma = Lj()), (d.rd = d.oa().g.g));
          d.ca += f ? 1 : 0;
          d.kd++;
          hl(d.$c, c, c, !1, 1, !1);
          e = b.insideIframe;
          void 0 !== e && 0 == e && (a.h = !1);
          d.Ga = f || d.Ga;
          b.position &&
            tl(
              d,
              B,
              a.h,
              new F(
                b.position.top,
                b.position.right,
                b.position.bottom,
                b.position.left
              )
            );
          b.documentSize &&
            (a.o = new D(b.documentSize.width, b.documentSize.height));
          b.viewportSize &&
            (a.g = new F(0, b.viewportSize.width, b.viewportSize.height, 0));
          b = b.screenShare;
          d.aa.W = Math.min(Math.max(c, 0), 1);
          d.td = d.aa.W;
          d.aa.ha = Math.min(Math.max(b, 0), 1);
        }
        break;
      case "engagement":
        (a = b.eventId),
          window.clearTimeout(a),
          (c = this.g.get(a)),
          Ps.B().g &&
            ((d = -1),
            this.H && (d = u() - this.H),
            (e = !1),
            c || (e = !0),
            yb(b, "loggingId") &&
              Ps.B().report(43, {
                step: "receivedResponse",
                time: u(),
                timeout: e,
                logid: b.loggingId,
                timediff: d,
              })),
          c && (hp(this.g, a), c(b.engagementString));
    }
  };
  r(
    "ima.bridge.getNativeViewability",
    function (a, b) {
      Ut();
      b({});
    },
    void 0
  );
  r(
    "ima.bridge.getVideoMetadata",
    function (a) {
      return (a = Ut().D.get(a)) ? a() : {};
    },
    void 0
  );
  r("ima.bridge.triggerViewEvent", Wt, void 0);
  r("ima.bridge.triggerMeasurableEvent", Vt, void 0);
  r("ima.bridge.triggerExternalActivityEvent", Xt, void 0);
  var Yt = Qc ? Rb(Kb(Lb('javascript:""'))) : Rb(Kb(Lb("about:blank")));
  Qb(Yt);
  var Zt = Qc
    ? Rb(Kb(Lb('javascript:""')))
    : Rb(Kb(Lb("javascript:undefined")));
  Qb(Zt);
  var $t = function () {
      K.call(this);
      this.g = null;
      this.D = new mq(this);
      Ug(this, this.D);
      this.h = new Map();
      this.w = new Map();
      this.o = this.A = !1;
      this.C = null;
    },
    au;
  y($t, K);
  var bu = null,
    cu = function () {
      null == bu && (bu = new $t());
      return bu;
    };
  $t.prototype.Od = function () {};
  var Wo = function (a, b, c) {
    var d = {};
    d.queryId = b;
    d.viewabilityData = c;
    a.g && a.g.send("activityMonitor", "viewabilityMeasurement", d);
  };
  $t.prototype.destroy = function () {
    this.D.Ca(this.g, "activityMonitor", this.F);
    this.o = !1;
    this.h.clear();
    this === au && (au = null);
  };
  $t.prototype.R = function () {
    this.destroy();
    $t.wa.R.call(this);
  };
  var eu = function (a) {
      if (null == a) return !1;
      if ((Wc || Yc) && null != a.webkitDisplayingFullscreen)
        return a.webkitDisplayingFullscreen;
      var b = window.screen.availWidth || window.screen.width,
        c = window.screen.availHeight || window.screen.height;
      a = du(a);
      return 0 >= b - a.width && 42 >= c - a.height;
    },
    du = function (a) {
      var b = {
        left: a.offsetLeft,
        top: a.offsetTop,
        width: a.offsetWidth,
        height: a.offsetHeight,
      };
      try {
        t(a.getBoundingClientRect) &&
          je(Xd(a), a) &&
          (b = a.getBoundingClientRect());
      } catch (c) {}
      return b;
    },
    fu = function (a, b, c, d, e) {
      if (a.o) {
        e = e || {};
        d && null == e.opt_osdId && (e.opt_osdId = d);
        if (a.C) return a.C(b, c, e);
        if ((a = d ? a.w.get(d) : W.A))
          null == e.opt_fullscreen && (e.opt_fullscreen = eu(a)),
            null == e.opt_adElement && (e.opt_adElement = a);
        return Lf.Xa(469, Na(Zo, b, c, e), void 0) || {};
      }
      return {};
    },
    gu = function (a, b) {
      var c = Ds(),
        d = String(Math.floor(1e9 * Math.random()));
      a.w.set(d, b);
      if (Hs(c, 31061775))
        try {
          xi(
            function (e) {
              if (a.g) {
                var f = {};
                f.engagementString = e;
                a.g.send("activityMonitor", "engagementData", f);
              }
            },
            function () {
              return b;
            }
          );
        } catch (e) {}
      0 != W.g && Xo(Lo.B(), d, a);
      return d;
    },
    hu = function (a, b, c) {
      if (c) a.h.get(c) == b && a.h["delete"](c);
      else {
        var d = [];
        a.h.forEach(function (e, f) {
          e == b && d.push(f);
        });
        d.forEach(a.h["delete"], a.h);
      }
    },
    Ro = function (a, b) {
      a = a.h.get(b);
      return t(a) ? a() : {};
    },
    iu = function (a) {
      if (t(window.Goog_AdSense_Lidar_getUrlSignalsArray)) {
        var b = {};
        b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
        a.g.send("activityMonitor", "pageSignals", b);
      }
    };
  $t.prototype.F = function (a) {
    var b = a.fa,
      c = b.queryId,
      d = {},
      e = null;
    d.eventId = b.eventId;
    switch (a.ba) {
      case "getPageSignals":
        iu(this);
        break;
      case "reportVastEvent":
        e = b.vastEvent;
        a = b.osdId;
        var f = {};
        f.opt_fullscreen = b.isFullscreen;
        b.isOverlay && (f.opt_bounds = b.overlayBounds);
        d.viewabilityData = fu(this, e, c, a, f);
        this.g.send("activityMonitor", "viewability", d);
        break;
      case "fetchAdTagUrl":
        (c = {}),
          (c.eventId = b.eventId),
          (a = b.osdId),
          yb(b, "isFullscreen") && (e = b.isFullscreen),
          yb(b, "loggingId") &&
            ((b = b.loggingId),
            (c.loggingId = b),
            Ps.B().report(43, { step: "beforeLookup", logid: b, time: u() })),
          (c.engagementString = ju(this, a, e)),
          this.g && this.g.send("activityMonitor", "engagement", c);
    }
  };
  var ju = function (a, b, c) {
    var d = b ? a.w.get(b) : W.A;
    a = {};
    null != c && (a.fullscreen = c);
    c = "";
    try {
      c = wi(function () {
        return d;
      }, a);
    } catch (e) {
      c = "sdktle;" + Cc(e.name, 12) + ";" + Cc(e.message, 40);
    }
    return c;
  };
  r(
    "ima.common.getVideoMetadata",
    function (a) {
      return Ro(cu(), a);
    },
    void 0
  );
  r(
    "ima.common.triggerViewabilityMeasurementUpdate",
    function (a, b) {
      Wo(cu(), a, b);
    },
    void 0
  );
  cu();
  Object.entries({
    "application/dash+xml": 1,
    "application/x-javascript": 2,
    "application/x-mpegurl": 3,
    "application/javascript": 4,
    "audio/ogg": 5,
    "audio/mp4": 6,
    "audio/mpeg": 7,
    "audio/wav": 8,
    "text/javascript": 9,
    "video/m4v": 10,
    "video/ogg": 11,
    "video/x-flv": 12,
    "video/3gpp": 13,
    "video/mpt2": 14,
    "video/mp4": 15,
    "video/mpeg": 16,
    "video/quicktime": 17,
    "video/webm": 18,
  });
  xt("OmidSessionClient.AdEvents", function (a) {
    lt("AdEvents.adSession", a);
    try {
      if (a.o) throw Error("AdEvents already registered.");
      a.o = !0;
      a.g("registerAdEvents");
    } catch (b) {
      throw Error("AdSession already has an ad events instance registered");
    }
  });
  var ku = function (a) {
    lt("VideoEvents.adSession", a);
    try {
      if (a.w) throw Error("VideoEvents already registered.");
      a.w = !0;
      a.g("registerVideoEvents");
      this.g = a;
    } catch (b) {
      throw Error("AdSession already has a video events instance registered");
    }
  };
  ku.prototype.loaded = function (a) {
    lt("VideoEvents.loaded.vastProperties", a);
    this.g.g("loaded", a);
  };
  ku.prototype.start = function (a, b) {
    mt("VideoEvents.start.duration", a);
    mt("VideoEvents.start.videoPlayerVolume", b);
    if (0 > b || 1 < b)
      throw Error(
        "Value for VideoEvents.start.videoPlayerVolume is outside the range [0,1]"
      );
    this.g.g("start", a, b);
  };
  ku.prototype.pause = function () {
    this.g.g("pause");
  };
  ku.prototype.resume = function () {
    this.g.g("resume");
  };
  xt("OmidSessionClient.VideoEvents", ku);
  var nu = function (a, b) {
      lu ? (a.srcdoc = b) : (a = a.contentWindow) && mu(a.document, b);
    },
    lu = Tc && "srcdoc" in de(document, "IFRAME"),
    mu = function (a, b) {
      a.open("text/html", "replace");
      a.write(b);
      a.close();
    };
  function ou(a) {
    return (a = ke(a)) && a.omidSessionInterface
      ? a.omidSessionInterface
      : null;
  }
  function pu(a, b) {
    var c = fe("IFRAME", {
      name: b,
      sandbox: "allow-scripts allow-same-origin",
      style: "display: none",
    });
    a.appendChild(c);
    a = "<script src=" + jt.Ma() + ">\x3c/script>";
    b = new Promise(function (d, e) {
      c.addEventListener("load", function () {
        ou(c) ? d(c) : e();
      });
    });
    nu(c, a);
    return b;
  }
  var qu = function (a, b) {
    K.call(this);
    this.h = ou(a);
    this.g = b;
  };
  p(qu, K);
  var tu = function (a) {
      try {
        a.h.registerSessionObserver(function (b) {
          "sessionStart" == b.type
            ? ru(a, a.g)
            : "sessionFinish" == b.type && tu(a);
        });
      } catch (b) {
        a.dispatchEvent(new Event("error"));
      }
    },
    ru = function (a, b) {
      try {
        a.h.setVideoElement(b);
      } catch (c) {
        a.dispatchEvent(new Event("error"));
      }
    };
  var xu = function (a, b, c) {
    J.call(this);
    var d = this;
    this.l = b;
    this.o = c;
    b = new mq(this);
    Ug(this, b);
    this.w = "goog_" + Fc++;
    this.g = this.h = null;
    pu(a, this.w)
      .then(function (e) {
        return void uu(d, e);
      })
      ["catch"](function () {
        return void vu(d);
      });
    b.T(this.l, "adsManager", function (e) {
      "allAdsCompleted" == e.ba && wu(d);
    });
  };
  p(xu, J);
  var uu = function (a, b) {
      a.h = b;
      var c = {};
      c = ((c.frameName = a.w), c);
      a.l.send("omid", "iframeReady", c);
      a.g = new qu(b, a.o);
      a.g.T("error", function () {
        return void vu(a);
      });
      tu(a.g);
    },
    vu = function (a) {
      a.l.send("omid", "iframeFailed");
      a.Y();
    },
    wu = function (a) {
      setTimeout(function () {
        a.Y();
      }, 3e3);
    };
  xu.prototype.R = function () {
    this.h && (he(this.h), (this.h = null));
    J.prototype.R.call(this);
  };
  var yu = function (a) {
      this.g = a;
      this.l = "";
      this.h = -1;
      this.o = !1;
    },
    Au = function (a, b) {
      if (0 <= a.h) {
        var c = null == b ? function () {} : b,
          d = function () {
            zu(a, c);
            a.g.removeEventListener("loadedmetadata", d, !1);
          };
        a.g.addEventListener("loadedmetadata", d, !1);
        a.g.src = a.l;
        a.g.load();
      } else null != b && b();
    },
    zu = function (a, b) {
      var c = 0 < a.g.seekable.length;
      a.o
        ? c
          ? ((a.g.currentTime = a.h), Bu(a), b())
          : setTimeout(function () {
              return zu(a, b);
            }, 100)
        : (Bu(a), b());
    },
    Bu = function (a) {
      a.h = -1;
      a.l = "";
      a.o = !1;
    };
  var Cu = function (a) {
    K.call(this);
    this.g = a;
    this.X = null;
    this.w = new yu(a);
    this.A = 0;
    this.F = this.L = this.N = this.$ = this.D = !1;
    this.H = this.o = null;
    this.ca = new D(this.g.offsetWidth, this.g.offsetHeight);
    this.Z = eu(this.g);
    this.V = !1;
  };
  p(Cu, K);
  Cu.prototype.pa = function () {
    var a = this.w;
    a.l = a.g.currentSrc;
    a.o = 0 < a.g.seekable.length;
    a.h = a.g.ended ? -1 : a.g.currentTime;
  };
  Cu.prototype.P = function (a) {
    Au(this.w, a);
  };
  Cu.prototype.load = function (a, b) {
    var c = I.B(),
      d = parseInt(c.g.w.c, 10) / 2;
    null != d && qg(c.g, "slotId", d);
    I.B().F();
    Bg(I.B(), "hvd_lc");
    Du(this);
    this.N = !1;
    if (b)
      if ((Bg(I.B(), "hvd_ad"), b instanceof aq)) {
        if ((Bg(I.B(), "hvd_mad"), (b = b.h))) {
          Bg(I.B(), "hvd_admu");
          Eu(this, b);
          return;
        }
      } else if (b instanceof $p) {
        Bg(I.B(), "hvd_dad");
        c = b.getVideoUrl();
        d = b.l;
        var e = b.C,
          f = b.h,
          g = b.A,
          h = b.g;
        if (c && d && e && f && g && h && (Bg(I.B(), "hvd_addu"), b.w)) {
          Bg(I.B(), "hvd_admse");
          b = e + '; codecs="' + g + '"';
          f = f + '; codecs="' + h + '"';
          if (
            cr() &&
            cr() &&
            MediaSource.isTypeSupported(b) &&
            cr() &&
            MediaSource.isTypeSupported(f)
          ) {
            Bg(I.B(), "hvd_ymse");
            Bg(I.B(), "hvd_mse");
            this.X = new kr(this.g, [new dr(c, b, 35e4), new dr(d, f, 82e3)]);
            Ug(this, this.X);
            a = this.g;
            b = this.X;
            b.g || (b.g = window.URL.createObjectURL(b.h));
            b = b.g;
            a.src = b;
            this.g.load();
            return;
          }
          Bg(I.B(), "hvd_nmse");
        }
      } else Bg(I.B(), "hvd_uad");
    a ? Eu(this, a) : (Bg(I.B(), "hvd_vn"), this.g.load());
  };
  var Eu = function (a, b) {
      Bg(I.B(), "hvd_src");
      a.g.src = b;
      a.g.load();
    },
    Fu = function (a) {
      Du(a);
      a.N = !1;
      a.g.src = "";
      a.g.load();
    };
  l = Cu.prototype;
  l.getVideoUrl = function () {
    return this.g.src;
  };
  l.setVolume = function (a) {
    this.g.volume = a;
    this.g.muted = 0 == a ? !0 : !1;
  };
  l.getVolume = function () {
    return this.isMuted() ? 0 : this.g.volume;
  };
  l.play = function () {
    var a = this;
    this.V = !1;
    this.N || oc()
      ? ((this.F = !1),
        (this.o = this.g.play()),
        null != this.o &&
          ((this.H = null),
          this.o
            .then(function () {
              a.o = null;
              a.Dd(a.H);
              a.H = null;
            })
            ["catch"](function (b) {
              a.o = null;
              var c = "";
              null != b && null != b.name && (c = b.name);
              "AbortError" == c || "NotAllowedError" == c
                ? a.dispatchEvent("autoplayDisallowed")
                : a.Ec();
            })))
      : (this.F = !0);
  };
  l.pause = function () {
    null == this.o && ((this.V = !0), this.g.pause());
  };
  l.isMuted = function () {
    return this.g.muted;
  };
  var Gu = function (a) {
    (Wc || Yc) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
  };
  Cu.prototype.getCurrentTime = function () {
    return this.g.currentTime;
  };
  Cu.prototype.getDuration = function () {
    return isNaN(this.g.duration) ? -1 : this.g.duration;
  };
  Cu.prototype.R = function () {
    Hu(this);
    K.prototype.R.call(this);
  };
  var Iu = function (a) {
      Hu(a);
      a.h = new mq(a);
      a.h.T(a.g, js, a.ra);
      a.h.T(a.g, "ended", a.Wf);
      a.h.T(a.g, "webkitbeginfullscreen", a.Ic);
      a.h.T(a.g, "webkitendfullscreen", a.Cd);
      a.h.T(a.g, "loadedmetadata", a.Yf);
      a.h.T(a.g, "pause", a.$f);
      a.h.T(a.g, "playing", a.Dd);
      a.h.T(a.g, "timeupdate", a.Uf);
      a.h.T(a.g, "volumechange", a.dg);
      a.h.T(a.g, "error", a.Ec);
      a.h.T(a.g, kd || (Zc && !iq(8)) ? "loadeddata" : "canplay", a.Zf);
      a.J = new Ts();
      a.h.T(a.J, "click", a.Tf);
      Vs(a.J, a.g);
      a.O = new ci(1e3);
      a.h.T(a.O, "tick", a.Xf);
      a.O.start();
    },
    Hu = function (a) {
      null != a.J && (Xs(a.J), (a.J = null));
      null != a.O && a.O.Y();
      null != a.h && (a.h.Y(), (a.h = null));
      Du(a);
    },
    Du = function (a) {
      a.$ = !1;
      a.L = !1;
      a.D = !1;
      a.F = !1;
      a.A = 0;
      a.o = null;
      a.H = null;
      Tg(a.C);
    };
  Cu.prototype.ra = function (a) {
    this.dispatchEvent(a.type);
  };
  var Ju = function (a, b) {
    if (!a.L) {
      a.L = !0;
      a.dispatchEvent("start");
      var c = t(a.g.getAttribute) && null != a.g.getAttribute("playsinline");
      ((Xc || hq() || (iq(10) && (W.h || eg(Ig)))) && c) ||
        fk() ||
        dc(lc, "Xbox") ||
        (Wc || Yc ? 0 : (!Vc || (Vc && gq(fq, 4))) && !gk()) ||
        !Vc ||
        (Vc && gq(fq, 3)) ||
        ((Wc || Yc) && !iq(4)) ||
        a.Ic(b);
    }
  };
  l = Cu.prototype;
  l.Yf = function () {
    this.N = !0;
    this.F && this.play();
    this.F = !1;
  };
  l.Zf = function () {
    this.$ || ((this.$ = !0), this.dispatchEvent("loaded"));
  };
  l.Dd = function (a) {
    null != this.o
      ? (this.H = a)
      : (this.dispatchEvent("play"), Zc || Xc || hq() || kd || Ju(this, a));
  };
  l.Uf = function (a) {
    if (!this.L && (Zc || Xc || hq() || kd)) {
      if (0 >= this.getCurrentTime()) return;
      if (kd && this.g.ended && 1 == this.getDuration()) {
        this.Ec(a);
        return;
      }
      Ju(this, a);
    }
    if (Zc || dc(lc, "Nintendo WiiU")) {
      if (1.5 < this.getCurrentTime() - this.A) {
        this.D = !0;
        this.g.currentTime = this.A;
        return;
      }
      this.D = !1;
      this.getCurrentTime() > this.A && (this.A = this.getCurrentTime());
    }
    this.dispatchEvent("timeUpdate");
  };
  l.dg = function () {
    this.dispatchEvent("volumeChange");
  };
  l.$f = function () {
    if (this.L && Zc && !this.V && (2 > Ku(this) || this.D)) {
      this.C = new ci(250);
      this.h.T(this.C, "tick", this.Vf);
      this.C.start();
      var a = !0;
    } else a = !1;
    a || this.o || this.dispatchEvent("pause");
  };
  l.Wf = function () {
    var a = !0;
    if (Zc || dc(lc, "Nintendo WiiU")) a = this.A >= this.g.duration - 1.5;
    !this.D && a && this.dispatchEvent("end");
  };
  l.Ic = function () {
    this.dispatchEvent("beginFullscreen");
  };
  l.Cd = function () {
    this.dispatchEvent("endFullscreen");
  };
  l.Ec = function () {
    this.dispatchEvent("error");
  };
  l.Tf = function () {
    this.dispatchEvent("click");
  };
  l.Xf = function () {
    var a = new D(this.g.offsetWidth, this.g.offsetHeight),
      b = eu(this.g);
    if (a.width != this.ca.width || a.height != this.ca.height)
      !this.Z && b ? this.Ic() : this.Z && !b && this.Cd(),
        (this.ca = a),
        (this.Z = b);
  };
  l.Vf = function () {
    if (
      !this.g.ended &&
      this.g.paused &&
      (Zc || ld ? this.g.currentTime < this.g.duration : 1)
    ) {
      var a = this.g.duration - this.g.currentTime,
        b = Ku(this);
      0 < b && (2 <= b || 2 > a) && (Tg(this.C), this.play());
    } else Tg(this.C);
  };
  var Ku = function (a) {
    var b;
    a: {
      for (b = a.g.buffered.length - 1; 0 <= b; ) {
        if (a.g.buffered.start(b) <= a.g.currentTime) {
          b = a.g.buffered.end(b);
          break a;
        }
        b--;
      }
      b = 0;
    }
    return b - a.g.currentTime;
  };
  var Lu = function (a, b, c, d) {
    J.call(this);
    this.o = a;
    this.l = b;
    this.g = c;
    this.C = d;
    this.h = new mq(this);
    Ug(this, this.h);
    this.h.T(this.o, d, this.A);
  };
  p(Lu, J);
  var Ou = function (a, b) {
    var c = b.fa;
    switch (b.ba) {
      case "showVideo":
        Mu(a.l);
        break;
      case "hide":
        Nu(a.l);
        break;
      case "getPreloadDisplay":
      case "resizeAndPositionVideo":
        a = a.l.g;
        c = c.resizeAndPositionVideo;
        a.g.style.left = String(c.x);
        a.g.style.top = String(c.y);
        a.g.style.width = String(c.width);
        a.g.style.height = String(c.height);
        break;
      case "restoreSizeAndPositionVideo":
        (c = a.l.g),
          (c.g.style.width = "100%"),
          (c.g.style.height = "100%"),
          (c.g.style.left = "0"),
          (c.g.style.right = "0");
    }
  };
  Lu.prototype.A = function (a) {
    var b = a.fa;
    switch (a.ba) {
      case "activate":
        a = this.l;
        if (a.g != this.g && a.h && a.o && a.l) {
          var c = a.g;
          a.g = a.l;
          a.l = c;
          c = a.h;
          a.h = a.o;
          a.o = c;
        }
        break;
      case "startTracking":
        a = this.g;
        c = this.w;
        this.h.T(a, vb(ar), c);
        this.h.T(a, js, c);
        Iu(this.g);
        break;
      case "stopTracking":
        a = this.g;
        c = this.w;
        this.h.Ca(a, vb(ar), c);
        this.h.Ca(a, js, c);
        Hu(this.g);
        break;
      case "exitFullscreen":
        Gu(this.g);
        break;
      case "play":
        this.g.play();
        break;
      case "pause":
        this.g.pause();
        break;
      case "load":
        Iu(this.g);
        a = this.g;
        c = b.videoUrl;
        var d = b.muxedMediaUrl,
          e = b.muxedMimeType,
          f = b.muxedAudioCodec,
          g = b.muxedVideoCodec,
          h = b.demuxedAudioUrl,
          k = b.demuxedVideoUrl,
          m = b.demuxedAudioMimeType,
          n = b.demuxedVideoMimeType,
          w = b.demuxedAudioCodec,
          x = b.demuxedVideoCodec;
        b = b.mseCompatible;
        var v = null;
        k &&
          h &&
          b &&
          n &&
          m &&
          x &&
          w &&
          (v = new $p({
            Sd: k,
            Zc: h,
            Rd: n,
            Yc: m,
            Ra: x,
            Ka: w,
            height: null,
            width: null,
            za: b,
          }));
        h = null;
        d &&
          e &&
          g &&
          f &&
          (h = new aq({
            ud: d,
            mimeType: e,
            Ra: g,
            Ka: f,
            height: null,
            width: null,
            za: b,
          }));
        v ? a.load(c, v) : h ? a.load(c, h) : a.load(c, null);
        break;
      case "unload":
        Fu(this.g);
        break;
      case "setCurrentTime":
        this.g.g.currentTime = b.currentTime;
        break;
      case "setVolume":
        this.g.setVolume(b.volume);
    }
  };
  Lu.prototype.w = function (a) {
    var b = {};
    switch (a.type) {
      case "autoplayDisallowed":
        a = "autoplayDisallowed";
        break;
      case "beginFullscreen":
        a = "fullscreen";
        break;
      case "endFullscreen":
        a = "exitFullscreen";
        break;
      case "click":
        a = "click";
        break;
      case "end":
        a = "end";
        break;
      case "error":
        a = "error";
        break;
      case "loaded":
        a = "loaded";
        break;
      case "mediaLoadTimeout":
        a = "mediaLoadTimeout";
        break;
      case "pause":
        a = "pause";
        b.ended = this.g.g.ended;
        break;
      case "play":
        a = "play";
        break;
      case "skip":
        a = "skip";
        break;
      case "start":
        a = "start";
        b.volume = this.g.getVolume();
        break;
      case "timeUpdate":
        a = "timeupdate";
        b.currentTime = this.g.getCurrentTime();
        b.duration = this.g.getDuration();
        break;
      case "volumeChange":
        a = "volumeChange";
        b.volume = this.g.getVolume();
        break;
      case "loadedmetadata":
        a = a.type;
        b.duration = this.g.getDuration();
        break;
      case "abort":
      case "canplay":
      case "canplaythrough":
      case "durationchange":
      case "emptied":
      case "loadstart":
      case "loadeddata":
      case "progress":
      case "ratechange":
      case "seeked":
      case "seeking":
      case "stalled":
      case "suspend":
      case "waiting":
        a = a.type;
        break;
      default:
        return;
    }
    this.o.send(this.C, a, b);
  };
  var Pu = function (a, b) {
    J.call(this);
    this.h = b;
    this.l = new Lu(a, b, this.h.g, "videoDisplay1");
    Ug(this, this.l);
    this.g = null;
    var c = this.h.l;
    null != c &&
      ((this.g = new Lu(a, b, c, "videoDisplay2")), Ug(this, this.g));
  };
  p(Pu, J);
  Pu.prototype.Dc = function () {};
  Pu.prototype.A = function (a) {
    Ou(this.l, a);
    this.g && Ou(this.g, a);
  };
  var Ru = function (a, b) {
    J.call(this);
    this.w = a;
    this.l = b;
    this.o = new mq(this);
    Ug(this, this.o);
    this.g = this.l.g;
    null != this.g &&
      (this.o.T(this.w, "videoDisplay1", this.bg),
      this.o.T(this.w, "videoDisplay2", this.me),
      Qu(this, this.g, this.Db));
    this.h = null;
  };
  p(Ru, J);
  l = Ru.prototype;
  l.Dc = function (a) {
    this.g && Su(this, this.g, this.Db);
    this.g = a;
    Qu(this, this.g, this.Db);
  };
  l.bg = function (a) {
    if (null != this.g) {
      var b = a.fa;
      switch (a.ba) {
        case "startTracking":
          Iu(this.g);
          break;
        case "stopTracking":
          Hu(this.g);
          break;
        case "exitFullscreen":
          Gu(this.g);
          break;
        case "play":
          this.g.play();
          break;
        case "pause":
          this.g.pause();
          break;
        case "load":
          Tu(this.g, b);
          break;
        case "unload":
          Fu(this.g);
          break;
        case "setCurrentTime":
          this.g.g.currentTime = b.currentTime;
          break;
        case "setVolume":
          this.g.setVolume(b.volume);
      }
    }
  };
  l.me = function (a) {
    if (null != this.h) {
      var b = a.fa;
      switch (a.ba) {
        case "startTracking":
          Iu(this.h);
          break;
        case "stopTracking":
          Hu(this.h);
          break;
        case "load":
          Tu(this.h, b);
      }
    }
  };
  l.Jc = function (a) {
    switch (a.type) {
      case "error":
        a = "error";
        break;
      case "loaded":
        a = "loaded";
        break;
      default:
        return;
    }
    this.w.send("videoDisplay2", a, {});
  };
  l.Db = function (a) {
    var b = {};
    switch (a.type) {
      case "autoplayDisallowed":
        a = "autoplayDisallowed";
        break;
      case "beginFullscreen":
        a = "fullscreen";
        break;
      case "endFullscreen":
        a = "exitFullscreen";
        break;
      case "click":
        a = "click";
        break;
      case "end":
        a = "end";
        break;
      case "error":
        a = "error";
        break;
      case "loaded":
        a = "loaded";
        break;
      case "mediaLoadTimeout":
        a = "mediaLoadTimeout";
        break;
      case "pause":
        a = "pause";
        b.ended = this.g.g.ended;
        break;
      case "play":
        a = "play";
        break;
      case "skip":
        a = "skip";
        break;
      case "start":
        a = "start";
        b.volume = this.g.getVolume();
        break;
      case "timeUpdate":
        a = "timeupdate";
        b.currentTime = this.g.getCurrentTime();
        b.duration = this.g.getDuration();
        break;
      case "volumeChange":
        a = "volumeChange";
        b.volume = this.g.getVolume();
        break;
      case "loadedmetadata":
        a = a.type;
        b.duration = this.g.getDuration();
        break;
      case "abort":
      case "canplay":
      case "canplaythrough":
      case "durationchange":
      case "emptied":
      case "loadstart":
      case "loadeddata":
      case "progress":
      case "ratechange":
      case "seeked":
      case "seeking":
      case "stalled":
      case "suspend":
      case "waiting":
        a = a.type;
        break;
      default:
        return;
    }
    this.w.send("videoDisplay1", a, b);
  };
  var Qu = function (a, b, c) {
      a.o.T(b, vb(ar), c);
      a.o.T(b, js, c);
    },
    Su = function (a, b, c) {
      a.o.Ca(b, vb(ar), c);
      a.o.Ca(b, js, c);
    };
  Ru.prototype.A = function (a) {
    switch (a.ba) {
      case "showVideo":
        Mu(this.l);
        break;
      case "hide":
        Nu(this.l);
        break;
      case "getPreloadDisplay":
        null != this.g &&
          null == this.h &&
          ((this.h = this.l.l),
          Qu(this, this.h, this.Jc),
          null == this.h
            ? Ps.B().report(112, { outer: !0, null: !0 })
            : Ps.B().report(112, { outer: !0, null: !1 }));
        break;
      case "swapVideoDisplays":
        if (null != this.g && null != this.h) {
          Su(this, this.g, this.Db);
          Su(this, this.h, this.Jc);
          a = this.l;
          if (a.h && a.o && a.l) {
            var b = a.g;
            a.g = a.l;
            a.l = b;
            b = a.h;
            a.h = a.o;
            a.o = b;
            b = a.G;
            a = a.g;
            b.F.Dc(a);
            b.C &&
              ((b = b.C),
              (a = a.w.g),
              (b.o = a),
              b.g && ((b = b.g), (b.g = a), ru(b, a)));
          }
          this.g = this.l.g;
          this.h = this.l.l;
          Qu(this, this.g, this.Db);
          Qu(this, this.h, this.Jc);
        }
    }
  };
  var Tu = function (a, b) {
    var c = b.videoUrl,
      d = b.muxedMediaUrl,
      e = b.muxedMimeType,
      f = b.muxedAudioCodec,
      g = b.muxedVideoCodec,
      h = b.demuxedAudioUrl,
      k = b.demuxedVideoUrl,
      m = b.demuxedAudioMimeType,
      n = b.demuxedVideoMimeType,
      w = b.demuxedAudioCodec,
      x = b.demuxedVideoCodec;
    b = b.mseCompatible;
    var v = null;
    k &&
      h &&
      b &&
      n &&
      m &&
      x &&
      w &&
      (v = new $p({
        Sd: k,
        Zc: h,
        Rd: n,
        Yc: m,
        Ra: x,
        Ka: w,
        height: null,
        width: null,
        za: b,
      }));
    h = null;
    d &&
      e &&
      g &&
      f &&
      (h = new aq({
        ud: d,
        mimeType: e,
        Ra: g,
        Ka: f,
        height: null,
        width: null,
        za: b,
      }));
    v ? a.load(c, v) : h ? a.load(c, h) : a.load(c, null);
  };
  var Vu = function (a, b) {
      var c = Array.prototype.slice.call(arguments),
        d = c.shift();
      if ("undefined" == typeof d)
        throw Error("[goog.string.format] Template required");
      return d.replace(
        /%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,
        function (e, f, g, h, k, m, n, w) {
          if ("%" == m) return "%";
          var x = c.shift();
          if ("undefined" == typeof x)
            throw Error("[goog.string.format] Not enough arguments");
          arguments[0] = x;
          return Uu[m].apply(null, arguments);
        }
      );
    },
    Uu = {
      s: function (a, b, c) {
        return isNaN(c) || "" == c || a.length >= Number(c)
          ? a
          : (a =
              -1 < b.indexOf("-", 0)
                ? a + Dc(" ", Number(c) - a.length)
                : Dc(" ", Number(c) - a.length) + a);
      },
      f: function (a, b, c, d, e) {
        d = a.toString();
        isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
        var f =
          0 > Number(a)
            ? "-"
            : 0 <= b.indexOf("+")
            ? "+"
            : 0 <= b.indexOf(" ")
            ? " "
            : "";
        0 <= Number(a) && (d = f + d);
        if (isNaN(c) || d.length >= Number(c)) return d;
        d = isNaN(e)
          ? Math.abs(Number(a)).toString()
          : Math.abs(Number(a)).toFixed(e);
        a = Number(c) - d.length - f.length;
        return (d =
          0 <= b.indexOf("-", 0)
            ? f + d + Dc(" ", a)
            : f + Dc(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d);
      },
      d: function (a, b, c, d, e, f, g, h) {
        return Uu.f(parseInt(a, 10), b, c, d, 0, f, g, h);
      },
    };
  Uu.i = Uu.d;
  Uu.u = Uu.d;
  var Xu = function (a, b) {
    K.call(this);
    this.w = new mq(this);
    Ug(this, this.w);
    this.J = !1;
    this.H = "goog_" + Fc++;
    this.A = new ep();
    var c = this.H,
      d =
        (ye() ? "patch/html/null.html?https:" : "patch/html/null.html?http:") +
        Vu("//imasdk.googleapis.com/js/core/bridge3.353.0_%s.html", W.C);
    a: {
      var e = window;
      try {
        do {
          try {
            if (
              0 == e.location.href.indexOf(d) ||
              0 == e.document.referrer.indexOf(d)
            ) {
              var f = !0;
              break a;
            }
          } catch (g) {}
          e = e.parent;
        } while (e != e.top);
      } catch (g) {}
      f = !1;
    }
    f && (d += "?f=" + c);
    c = fe("IFRAME", {
      src: d + "#" + c,
      allowFullscreen: !0,
      allow: "autoplay",
      style: "border:0; opacity:0; margin:0; padding:0; position:relative;",
    });
    qq(this.w, c, "load", this.V);
    a.appendChild(c);
    this.g = c;
    this.o = Wu(this);
    this.D = b;
    this.h = null;
    if ((c = Hs(Ds(), 651800008)))
      try {
        console.log("IMA outer:newman");
      } catch (g) {}
    this.F = c ? new Pu(this.o, this.D) : new Ru(this.o, this.D);
    Ug(this, this.F);
    this.D.g && this.w.T(this.o, "displayContainer", this.N);
    this.w.T(this.o, "mouse", this.O);
    this.w.T(this.o, "touch", this.P);
    c = E();
    d = Ba("google.ima.gptProxyInstance", c);
    null != d
      ? (c = d)
      : ((d = new gt()), r("google.ima.gptProxyInstance", d, c), (c = d));
    this.L = c;
    Hs(Ds(), 504733016) &&
      ((this.C = new xu(a, this.o, b.g.w.g)), Ug(this, this.C));
  };
  y(Xu, K);
  var Wu = function (a, b) {
    b = b || "*";
    var c = a.A.get(b);
    null == c &&
      ((c = new Zs(a.H, b)),
      a.J && ((c.va = ke(a.g)), c.connect()),
      a.A.set(b, c));
    return c;
  };
  Xu.prototype.R = function () {
    null !== this.h && (this.h.Y(), (this.h = null));
    this.A.forEach(function (a) {
      Tg(a);
    });
    this.A.clear();
    it(this.L, this.H);
    he(this.g);
    Xu.wa.R.call(this);
  };
  Xu.prototype.O = function (a) {
    var b = a.fa,
      c = Te(this.g),
      d = document.createEvent("MouseEvent");
    d.initMouseEvent(
      a.ba,
      !0,
      !0,
      window,
      b.detail,
      b.screenX,
      b.screenY,
      b.clientX + c.x,
      b.clientY + c.y,
      b.ctrlKey,
      b.altKey,
      b.shiftKey,
      b.metaKey,
      b.button,
      null
    );
    this.g.dispatchEvent(d);
  };
  var Yu = function (a, b) {
    var c = Te(a.g),
      d = !!("TouchEvent" in window && 0 < TouchEvent.length);
    b = b.map(function (e) {
      return d
        ? new Touch({
            identifier: e.identifier,
            target: a.g,
            clientX: e.clientX,
            clientY: e.clientY,
            screenX: e.screenX,
            screenY: e.screenY,
            pageX: e.pageX + c.x,
            pageY: e.pageY + c.y,
          })
        : document.createTouch(
            window,
            a.g,
            e.identifier,
            e.pageX + c.x,
            e.pageY + c.y,
            e.screenX,
            e.screenY
          );
    });
    return d ? b : document.createTouchList.apply(document, b);
  };
  Xu.prototype.P = function (a) {
    var b = a.fa,
      c = Te(this.g);
    if ("TouchEvent" in window && 0 < TouchEvent.length)
      (b = {
        bubbles: !0,
        cancelable: !0,
        view: window,
        detail: b.detail,
        ctrlKey: b.ctrlKey,
        altKey: b.altKey,
        shiftKey: b.shiftKey,
        metaKey: b.metaKey,
        touches: Yu(this, b.touches),
        targetTouches: Yu(this, b.targetTouches),
        changedTouches: Yu(this, b.changedTouches),
      }),
        (a = new TouchEvent(a.ba, b)),
        this.g.dispatchEvent(a);
    else {
      var d = document.createEvent("TouchEvent");
      d.initTouchEvent(
        a.ba,
        !0,
        !0,
        window,
        b.detail,
        b.screenX,
        b.screenY,
        b.clientX + c.x,
        b.clientY + c.y,
        b.ctrlKey,
        b.altKey,
        b.shiftKey,
        b.metaKey,
        Yu(this, b.touches),
        Yu(this, b.targetTouches),
        Yu(this, b.changedTouches),
        b.scale,
        b.rotation
      );
      this.g.dispatchEvent(d);
    }
  };
  Xu.prototype.N = function (a) {
    switch (a.ba) {
      case "showVideo":
        null == this.h
          ? ((this.h = new Ts()), this.w.T(this.h, "click", this.X))
          : Xs(this.h);
        var b = this.D;
        Vs(this.h, b.P && b.C ? b.C : null != b.h ? b.h.l : null);
        break;
      case "hide":
        null !== this.h && (this.h.Y(), (this.h = null));
    }
    this.F.A(a);
  };
  Xu.prototype.X = function () {
    this.o.send("displayContainer", "videoClick");
  };
  Xu.prototype.V = function () {
    var a = this;
    Ns = Af();
    Os = xf();
    Al(this.A.Hb(!1), function (b) {
      b.va = ke(a.g);
      b.connect();
    });
    this.J = !0;
  };
  var $u = function () {
    K.call(this);
    this.buffered = new Zu();
    this.w = new Zu();
    this.h = new mq(this);
    this.src = this.o = "";
    this.A = !1;
    this.g = null;
    var a = Zr();
    if (a) {
      a: {
        if (
          yb(a.g, "videoElementMockDuration") &&
          ((a = a.g.videoElementMockDuration), "number" === typeof a)
        )
          break a;
        a = NaN;
      }
      this.duration = a;
    }
  };
  y($u, K);
  var av = new ep(),
    bv = function () {
      var a = ["video/mp4"],
        b = ["video/ogg"],
        c = new $u();
      c.canPlayType = function (d) {
        return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : "";
      };
      c.width = 0;
      c.height = 0;
      c.offsetWidth = 0;
      c.offsetHeight = 0;
      return c;
    },
    cv = function (a) {
      this.endTime = a;
    },
    Zu = function () {
      this.length = 0;
      this.g = [];
    };
  Zu.prototype.start = function () {
    return 0;
  };
  Zu.prototype.end = function (a) {
    return this.g[a].endTime;
  };
  l = $u.prototype;
  l.readyState = 0;
  l.currentTime = 0;
  l.duration = NaN;
  l.ab = !0;
  l.sd = !1;
  l.autoplay = !1;
  l.loop = !1;
  l.controls = !1;
  l.volume = 1;
  l.muted = !1;
  Object.defineProperty($u.prototype, "src", {
    get: function () {
      return $u.prototype.o;
    },
    set: function (a) {
      var b = $u.prototype;
      b.A && null != b.g ? (b.g.reject(), (b.g = null)) : (b.o = a);
    },
  });
  l = $u.prototype;
  l.Ja = null;
  l.Qb = 0;
  l.eg = 4;
  l.tb = null;
  l.ec = null;
  l.play = function () {
    this.sd && ((this.currentTime = 0), this.dispatchEvent("timeupdate"));
    this.ab &&
      ((this.ab = !1),
      this.dispatchEvent("play"),
      (this.readyState = this.eg),
      2 >= this.readyState
        ? this.dispatchEvent("waiting")
        : this.dispatchEvent("playing"));
    if (null === this.Ja || this.Ja.fb())
      (this.Ja = new ci(10)), this.Ja.T("tick", Ma(this.Md, this));
    this.Qb = u();
    this.Ja.start();
    this.autoplay = !1;
    return null;
  };
  l.pause = function () {
    this.autoplay = !1;
    this.ab ||
      (this.Ja.stop(),
      (this.ab = !0),
      this.dispatchEvent("timeupdate"),
      this.dispatchEvent("pause"));
  };
  l.load = function () {
    this.readyState = 0;
    this.ab = !0;
    this.dispatchEvent("loadstart");
    this.setProperty(
      "duration",
      isNaN(this.duration) ? 10 + 20 * Math.random() : this.duration
    );
    var a = this.w;
    a.g.push(new cv(this.duration));
    a.length = a.g.length;
    a = this.buffered;
    a.g.push(new cv(this.duration));
    a.length = a.g.length;
    this.dispatchEvent("loadedmetadata");
    0 < this.currentTime && this.dispatchEvent("timeupdate");
    this.dispatchEvent("loadeddata");
    this.dispatchEvent("canplay");
    this.dispatchEvent("canplaythrough");
    this.dispatchEvent("progress");
  };
  l.setProperty = function (a, b) {
    switch (a) {
      case "currentTime":
        a = Number(b);
        this.dispatchEvent("seeking");
        this.currentTime = a;
        this.dispatchEvent("seeked");
        this.Md();
        break;
      case "duration":
        this.duration = Number(b);
        this.dispatchEvent("durationchange");
        break;
      case "volume":
        (this.volume = Number(b)), this.dispatchEvent("volumechange");
    }
  };
  l.setAttribute = function (a, b) {
    null != a && av.set(a, b);
  };
  l.getAttribute = function (a) {
    return av.get(a);
  };
  l.Md = function () {
    var a = u() - this.Qb,
      b = this.currentTime + a / 1e3;
    this.Qb += a;
    2 < this.readyState && (this.currentTime = Math.min(b, this.duration));
    this.dispatchEvent("timeupdate");
    this.currentTime == this.duration &&
      ((this.sd = this.ab = !0), this.Ja.stop(), this.dispatchEvent("ended"));
  };
  l.R = function () {
    this.Ja && this.Ja.Y();
    this.h.Y();
  };
  l.cg = function (a) {
    var b = null,
      c = null;
    switch (a.type) {
      case "loadeddata":
        b = "Loaded";
        break;
      case "playing":
        b = "Playing";
        c = "#00f";
        break;
      case "pause":
        b = "Paused";
        break;
      case "ended":
        (b = "Ended"), (c = "#000");
    }
    b && this.ec && (this.ec.innerText = b);
    c && this.tb && (this.tb.style.backgroundColor = c);
  };
  var dv = function (a, b) {
    J.call(this);
    if (null == a || !je(Xd(a), a))
      throw ts(rs, null, "containerElement", "element");
    this.o = a;
    this.l = this.g = null;
    a = Zr();
    if ($r(a, "useVideoElementMock")) {
      a = bv();
      var c = fe("DIV", {
        style: "position:absolute;width:100%;height:100%;top:0px;left:0px;",
      });
      for (d in a) c[d] = a[d];
      a.tb = fe("DIV", {
        style:
          "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000",
      });
      a.ec = fe("P", {
        style:
          "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;",
      });
      a.tb.appendChild(a.ec);
      c.appendChild(a.tb);
      a.h.T(a, ["loadeddata", "playing", "pause", "ended"], a.cg);
      var d = c;
    } else
      d = fe("VIDEO", {
        style:
          "background-color:#000;position:absolute;width:100%;height:100%;left:0px;top:0px;",
        title: vr("Advertisement").toString(),
      });
    d.setAttribute("webkit-playsinline", !0);
    d.setAttribute("playsinline", !0);
    this.h = d;
    this.g = fe("DIV", { style: "display:none;" });
    this.o.appendChild(this.g);
    this.g.appendChild(this.h);
    b &&
      ((this.l = fe("DIV", {
        style: "position:absolute;width:100%;height:100%;left:0px;top:0px",
      })),
      this.g.appendChild(this.l));
  };
  p(dv, J);
  dv.prototype.R = function () {
    he(this.g);
    J.prototype.R.call(this);
  };
  dv.prototype.show = function () {
    var a = this.g;
    null != a && (a.style.display = "block");
  };
  var gv = function (a, b, c) {
    if (null == a || !je(Xd(a), a))
      throw ts(rs, null, "containerElement", "element");
    this.A = b;
    this.$ = ls(this.A || null);
    this.Z = jq(this.A || null);
    this.V = String(Math.floor(1e9 * Math.random()));
    this.J = !1;
    this.F = a;
    this.N = null != b;
    W.g = 2;
    this.I = ev(b ? b : null);
    var d = fe("DIV", { style: "position:absolute" });
    a.insertBefore(d, a.firstChild);
    this.w = d;
    this.h = null;
    fv(this) && b
      ? (a = new Cu(b))
      : ((this.h = new dv(this.w, !0)), (a = new Cu(this.h.h)));
    this.g = a;
    this.l = this.o = null;
    a = Vc && !(Vc && gq(fq, 4));
    d = Wc || Yc;
    !this.h ||
      fv(this) ||
      !W.l ||
      gk() ||
      a ||
      d ||
      ((this.o = new dv(this.w, !0)), (this.l = new Cu(this.o.h)));
    this.C = c || null;
    this.P = null != this.C;
    fv(this) && b
      ? t(b.getBoundingClientRect)
        ? (c = b)
        : ((c = this.w), (W.A = c))
      : (c = this.w);
    this.D = c;
    this.G = new Xu(this.w, this);
    this.O = new D(0, 0);
    this.H = "";
    b &&
      ((b = b.src || b.currentSrc),
      (b = b instanceof R ? b.clone() : new R(b, void 0)),
      200 > b.toString().length
        ? (this.H = b.toString())
        : 200 > b.h.length && (this.H = b.h));
    this.L = new Map();
    this.L.set("videoDisplay1", this.g);
    this.l && this.L.set("videoDisplay2", this.l);
  };
  gv.prototype.X = function () {
    this.J = !0;
    if (null != this.h) {
      var a = this.h;
      a.h && a.h.load();
    }
    null != this.o && ((a = this.o), a.h && a.h.load());
  };
  gv.prototype.destroy = function () {
    var a = this;
    this.A = null;
    Tg(this.h);
    Tg(this.o);
    Tg(this.G);
    this.g.P(function () {
      return Tg(a.g);
    });
    null != this.l &&
      this.l.P(function () {
        return Tg(a.l);
      });
    he(this.w);
  };
  var Mu = function (a) {
      null != a.h && a.h.show();
    },
    Nu = function (a) {
      null != a.h && ((a = a.h.g), null != a && (a.style.display = "none"));
    },
    fv = function (a) {
      return ks(a.I) && a.N;
    };
  gv.prototype.setSize = function (a, b) {
    var c = this.w;
    null != c &&
      (-1 == a
        ? ((c.style.right = "0"), (c.style.left = "0"))
        : (c.style.width = a + "px"),
      -1 == b
        ? ((c.style.bottom = "0"), (c.style.top = "0"))
        : (c.style.height = b + "px"));
    c = this.G;
    c.g.width = -1 == a ? "100%" : a;
    c.g.height = -1 == b ? "100%" : b;
    c.g.offsetTop = c.g.offsetTop;
    this.O = new D(a, b);
  };
  var ev = function (a) {
    return null != a &&
      t(a.getAttribute) &&
      null != a.getAttribute("playsinline")
      ? !0
      : !1;
  };
  var hv = function (a, b) {
    b = void 0 === b ? null : b;
    U.call(this, "adMetadata", a);
    this.h = b;
  };
  p(hv, U);
  hv.prototype.o = function () {
    return this.h;
  };
  var iv = function (a, b, c) {
    K.call(this);
    this.h = a;
    this.g = null;
    this.J = this.H = "";
    this.L = 0;
    this.C = this.o = null;
    this.w = b;
    this.A = null;
    this.D = "";
    this.F = c;
  };
  p(iv, K);
  iv.prototype.N = function (a) {
    try {
      var b = a.h.data;
      try {
        var c = JSON.parse(b);
      } catch (Jg) {
        return;
      }
      var d = c.session;
      if (null != d && this.D == d)
        switch (c.type) {
          case "friendlyReady":
            var e = jv(this);
            if (null != e)
              (this.g = e),
                (this.H = e.currentSrc),
                (this.J = e.style.cssText),
                (this.L = e.currentTime);
            else {
              var f = this.h.F,
                g = this.h.O;
              var h =
                "border: 0; margin: 0; padding: 0; position: absolute; width:" +
                (g.width + "px; ");
              h += "height:" + g.height + "px;";
              this.g = fe("VIDEO", { style: h, autoplay: !0 });
              f.appendChild(this.g);
            }
            try {
              var k = {};
              if (null != e) k.provided = "y";
              else {
                k.provided = "n";
                var m = this.h.g;
                if (m instanceof Cu) {
                  k.vidDisp = "y";
                  var n = m.w.g;
                  if (n instanceof HTMLVideoElement) var w = "y";
                  else {
                    if (n instanceof Object) {
                      a: {
                        try {
                          if (
                            "function" === typeof n.play &&
                            "function" === typeof n.load &&
                            "function" === typeof n.pause &&
                            "undefined" != typeof n.currentTime
                          ) {
                            var x = !0;
                            break a;
                          }
                        } catch (Jg) {}
                        x = !1;
                      }
                      var v = x ? "plr" : "obj";
                    } else v = "n";
                    w = v;
                  }
                  k.vidElem = w;
                } else k.vidDisp = null == m ? "0" : "n";
              }
              k.vdn = this.F;
              Ps.B().report(88, k);
            } catch (Jg) {}
            var C = this.h.F;
            e = "border: 0; margin: 0; padding: 0;position: absolute; ";
            var H = this.g;
            b: {
              var Sb = Xd(H);
              if (Sb.defaultView && Sb.defaultView.getComputedStyle) {
                var vc = Sb.defaultView.getComputedStyle(H, null);
                if (vc) {
                  var cf = vc.display || vc.getPropertyValue("display") || "";
                  break b;
                }
              }
              cf = "";
            }
            if (
              "none" !=
              (cf ||
                (H.currentStyle ? H.currentStyle.display : null) ||
                (H.style && H.style.display))
            )
              var Kd = Ve(H);
            else {
              var $a = H.style,
                df = $a.display,
                P = $a.visibility,
                ub = $a.position;
              $a.visibility = "hidden";
              $a.position = "absolute";
              $a.display = "inline";
              var Kg = Ve(H);
              $a.display = df;
              $a.position = ub;
              $a.visibility = P;
              Kd = Kg;
            }
            e += "width:" + Kd.width + "px; ";
            e += "height:" + Kd.height + "px;";
            this.C = fe("DIV", { style: e });
            C.appendChild(this.C);
            try {
              this.o.contentWindow.loader.initFriendly(this.g, this.C);
            } catch (Jg) {
              kv(this);
            }
            this.w.send("vpaid", "", b);
            break;
          case "becameLinear":
            this.g && !pe() && !oe() && Pe(this.g, { visibility: "visible" });
            this.w.send("vpaid", "", b);
            break;
          case "becameNonlinear":
            lv(this);
            this.w.send("vpaid", "", b);
            break;
          case "startAd":
            C = {};
            if (this.g) {
              k = this.g.paused;
              var Fp = 0 < this.g.currentTime;
              C.apl = Fp && !k ? "1" : "0";
              C.ip = k ? "1" : "0";
              C.iavp = Fp ? "1" : "0";
            } else C.apl = "n";
            Ps.B().report(99, C);
            this.w.send("vpaid", "", b);
            null != jv(this) && Mu(this.h);
            break;
          default:
            this.w.send("vpaid", "", b);
        }
    } catch (Jg) {
      kv(this);
    }
  };
  var kv = function (a) {
      var b = { type: "error" };
      b.session = a.D;
      a = Vf(b);
      window.postMessage(a, "*");
    },
    jv = function (a) {
      a = "videoDisplayUnknown" == a.F ? a.h.g : a.h.L.get(a.F);
      return a instanceof Cu && a.w.g instanceof HTMLVideoElement
        ? a.w.g
        : null;
    },
    lv = function (a) {
      a.g && !pe() && !oe() && Pe(a.g, { visibility: "hidden" });
    };
  iv.prototype.R = function () {
    K.wa.R.call(this);
    Tg(this.A);
    this.A = null;
    he(this.C);
    this.C = null;
    he(this.o);
    this.o = null;
    var a = jv(this);
    null != a
      ? ((a.style.cssText = this.J),
        pe() || oe()
          ? ((a.src = this.H), (a.currentTime = this.L))
          : ((a.src = ""), Nu(this.h)))
      : (he(this.g), (this.g = null));
  };
  var mv = function (a, b) {
    J.call(this);
    this.l = a;
    this.h = b;
    this.g = new Map();
  };
  p(mv, J);
  var nv = function (a, b) {
    try {
      var c = b.fa,
        d = c.session;
      switch (c.vpaidEventType) {
        case "createFriendlyIframe":
          b = "videoDisplayUnknown";
          c.videoDisplayName && (b = c.videoDisplayName);
          var e = c.session,
            f = new iv(a.l, a.h, b);
          a.g.set(e, f);
          f.D = e;
          a = "about:self";
          Qc && (a = "");
          f.o = fe("IFRAME", {
            src: a,
            allowtransparency: !0,
            background: "transparent",
          });
          Pe(f.o, { display: "none", width: "0", height: "0" });
          var g = f.h.F;
          g.appendChild(f.o);
          var h = g.ownerDocument,
            k = h.defaultView || h.parentWindow;
          null == f.A && (f.A = new mq(f));
          f.A.T(k, "message", f.N);
          var m =
            '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' +
            (f.D + '");\x3c/script></body>');
          if (ld || hd || Rc) {
            var n = f.o.contentWindow;
            n && mu(n.document, m);
          } else nu(f.o, m);
          break;
        case "vpaidNonLinear":
          var w = a.g.get(d);
          w && lv(w);
          break;
        case "destroyFriendlyIframe":
          var x = a.g.get(d);
          x && (x.Y(), a.g["delete"](d));
      }
    } catch (v) {
      Ps.B().report(125, { msg: v.message });
    }
  };
  mv.prototype.R = function () {
    this.g.forEach(function (a) {
      return a.Y();
    });
  };
  var ov = function () {
    this.g = [];
    this.h = [];
  };
  ov.prototype.isEmpty = function () {
    return 0 == this.g.length && 0 == this.h.length;
  };
  ov.prototype.clear = function () {
    this.g = [];
    this.h = [];
  };
  ov.prototype.contains = function (a) {
    return Za(this.g, a) || Za(this.h, a);
  };
  ov.prototype.ka = function () {
    for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
    var c = this.h.length;
    for (b = 0; b < c; ++b) a.push(this.h[b]);
    return a;
  };
  var Y = function (a, b, c, d, e, f, g) {
    K.call(this);
    var h = this;
    this.F = a;
    this.g = b;
    this.D = c;
    this.qb = e;
    this.h = new Xr();
    this.H = g;
    this.N = !1;
    this.J = 1;
    this.pb = d;
    this.Z = -1;
    this.o = null;
    this.C = new zr({ currentTime: 0 }, this.H);
    this.A = new ov();
    this.ra = this.V = !1;
    this.O = new Map();
    this.P = this.$ = !1;
    this.ca = new mv(b, g);
    Ug(this, this.ca);
    this.X = f && null != this.g.C;
    this.L = function () {
      var k = h.g.g,
        m = k.getCurrentTime();
      k = k.getDuration();
      return { currentTime: m, duration: k, isPlaying: !0, volume: h.J };
    };
    this.pa = new mq(this);
    this.pa.T(this.H, "adsManager", this.rb);
  };
  p(Y, K);
  Y.prototype.rb = function (a) {
    var b = this,
      c = a.ba,
      d = a.fa;
    switch (c) {
      case "error":
        pv(this);
        qv(this, d);
        break;
      case "contentPauseRequested":
        rv(this);
        tv(this, a.ba, a.fa);
        break;
      case "contentResumeRequested":
        uv(this, function () {
          return tv(b, c, d);
        });
        break;
      case "remainingTime":
        this.Z = d.remainingTime;
        break;
      case "skip":
        tv(this, c, d);
        break;
      case "log":
        tv(this, c, d, d.logData);
        break;
      case "companionBackfill":
        a = Ba("window.google_show_companion_ad");
        null != a && a();
        break;
      case "skipShown":
        this.N = !0;
        tv(this, c, d);
        break;
      case "interaction":
        tv(this, c, d, d.interactionData);
        break;
      case "vpaidEvent":
        nv(this.ca, a);
        break;
      case "skippableStateChanged":
        a = d.adData;
        null != a.skippable && (this.N = a.skippable);
        tv(this, c, d);
        break;
      case "volumeChange":
        a = d.adData;
        null != a && "number" === typeof a.volume && (this.J = a.volume);
        tv(this, c, d);
        break;
      case "firstQuartile":
        tv(this, Wr.firstQuartile, d);
        tv(this, c, d);
        break;
      case "thirdQuartile":
        tv(this, Wr.thirdQuartile, d);
        tv(this, c, d);
        break;
      default:
        tv(this, c, d);
    }
  };
  var tv = function (a, b, c, d) {
      if (null == c.companions) {
        var e = a.O.get(c.adId);
        c.companions = null != e ? e : [];
      }
      var f = c.adData;
      e = null == f ? null : new S(f);
      a.o = e;
      switch (b) {
        case "adBreakReady":
        case "mediaUrlPinged":
          b = new U(b, null, c);
          break;
        case "adMetadata":
          b = null;
          null != c.adCuePoints && (b = new is(c.adCuePoints));
          b = new hv(e, b);
          break;
        case "allAdsCompleted":
          a.o = null;
          a.$ = !0;
          b = new U(b, e);
          break;
        case "contentPauseRequested":
          a.P = !1;
          b = new U(b, e);
          break;
        case "contentResumeRequested":
          a.o = null;
          a.P = !0;
          b = new U(b, e);
          break;
        case "loaded":
          a.Z = e.getDuration();
          ms() &&
            ((d = a.F),
            (c = a.qb),
            d.h.set(Sr(e), a.L),
            (0 != W.g ? Lo.B().l : d.A) && fu(d, "loaded", Sr(e), c));
          null != f.gfpCookie &&
            W.o &&
            $q() &&
            ((d = f.gfpCookie),
            Od.set("__gads", d.value, d.expires, d.path, d.domain),
            delete f.gfpCookie);
          b = new U(b, e, f);
          break;
        case "start":
          a.O.set(c.adId, c.companions);
          b = new U(b, e);
          break;
        case "complete":
          ms() && hu(a.F, a.L, Sr(e));
          a.o = null;
          a.O["delete"](c.adId);
          b = new U(b, e);
          break;
        case "log":
          f = null;
          null != d && null != d.type
            ? ((c = d.type), (c = "adLoadError" == c || "adPlayError" == c))
            : (c = !1);
          c && (f = { adError: Ur(d) });
          b = new U(b, e, f);
          break;
        case "interaction":
          b = new U(b, e, d);
          break;
        case "adProgress":
          b = new U(b, e, c);
          break;
        default:
          b = new U(b, e);
      }
      a.dispatchEvent(b);
      a.$ && a.P && a.destroy();
    },
    qv = function (a, b) {
      var c = new Vr(Ur(b));
      a.V
        ? (a.dispatchEvent(c),
          ms() && a.o && hu(a.F, a.L, Sr(a.o)),
          (a.o = null))
        : a.A.h.push(c);
      a = { error: b.errorCode, vis: mg(document) };
      Ps.B().report(7, a);
    },
    vv = function (a, b, c) {
      a.H.send("adsManager", b, c);
    },
    uv = function (a, b) {
      pv(a, b);
    },
    rv = function (a) {
      var b = a.g.g;
      fv(a.g) &&
        null != a.h &&
        a.h.restoreCustomPlaybackStateOnAdBreakComplete &&
        null != b.pa &&
        b.pa();
    },
    pv = function (a, b) {
      var c = a.g.g;
      fv(a.g) &&
      null != a.h &&
      a.h.restoreCustomPlaybackStateOnAdBreakComplete &&
      null != c.P
        ? c.P(b)
        : b && b();
    };
  l = Y.prototype;
  l.Qf = function (a, b, c, d) {
    if (this.A.isEmpty()) {
      var e = this.g,
        f = null;
      e.A && null == d && (f = { vd: "setnull" });
      e.A && e.A === d && (f = { vd: "match" });
      if (e.A && e.A !== d) {
        f = ls(d || null);
        var g = jq(d || null);
        f = { vd: "diff", oc: e.$, nc: f, oi: e.Z, ni: g };
      }
      !e.A && d && (f = { vd: "new" });
      f && ((f.custVid = e.V), Ps.B().report(93, f));
      null != d &&
        ((e.I = ev(d)),
        ks(e.I) &&
          ((e.N = !0),
          Tg(e.h),
          Tg(e.o),
          Tg(e.l),
          (e.h = null),
          (e.o = null),
          (e.l = null),
          Tg(e.g),
          (e.g = new Cu(d)),
          t(d.getBoundingClientRect) ? (e.D = d) : ((e.D = e.w), (W.A = e.D)),
          (d = e.G),
          (e = e.g),
          d.F.Dc(e),
          d.C &&
            ((d = d.C),
            (e = e.w.g),
            (d.o = e),
            d.g && ((d = d.g), (d.g = e), ru(d, e)))));
      this.V = !0;
      this.zd(a, b, c);
      vv(this, "init", {
        adsRenderingSettings: wv(this),
        width: a,
        height: b,
        viewMode: c,
      });
    } else {
      for (; !this.A.isEmpty(); )
        (b = a = this.A),
          0 == b.g.length && ((b.g = b.h), b.g.reverse(), (b.h = [])),
          (a = a.g.pop()),
          this.dispatchEvent(a);
      this.Y();
    }
  };
  l.cf = function () {
    return fv(this.g);
  };
  l.bf = function () {
    return this.X;
  };
  l.Pf = function () {
    return this.Z;
  };
  l.Mf = function () {
    return this.N;
  };
  l.je = function () {
    vv(this, "discardAdBreak");
  };
  l.Sf = function (a) {
    if (null != a) {
      var b = this.h ? this.h.bitrate : -1,
        c = a.bitrate;
      Ps.B().report(96, {
        init: this.V ? "1" : "0",
        start: this.ra ? "1" : "0",
        old: b,
        new: c,
        changed: b != c ? "1" : "0",
      });
      this.h = a;
      vv(this, "updateAdsRenderingSettings", {
        adsRenderingSettings: wv(this),
      });
    }
  };
  l.Rf = function () {
    vv(this, "skip");
  };
  l.start = function () {
    if (this.D) {
      (Wc || Yc) && Ps.B().report(50, { customPlayback: fv(this.g) });
      this.g.J ||
        Ps.B().report(26, { adtagurl: this.D, customPlayback: fv(this.g) });
      Zj(this.g.w) &&
        Ps.B().report(30, { adtagurl: this.D, customPlayback: fv(this.g) });
      var a = this.g.C,
        b = this.g.w,
        c;
      if ((c = a && b && !Zj(a)))
        (a = du(a)),
          (b = du(b)),
          (c =
            0 < a.width &&
            0 < a.height &&
            0 < b.width &&
            0 < b.height &&
            a.left <= b.left + b.width &&
            b.left <= a.left + a.width &&
            a.top <= b.top + b.height &&
            b.top <= a.top + a.height);
      c && Ps.B().report(31, { adtagurl: this.D, customPlayback: fv(this.g) });
    }
    if (!this.g.J && !fv(this.g)) throw ts(qs);
    b = this.g;
    b.P = this.X && null != b.C;
    this.g.G.g.style.opacity = 1;
    null != this.w &&
      1 == this.getVolume() &&
      ("boolean" === typeof this.w.muted && this.w.muted
        ? this.setVolume(0)
        : "number" === typeof this.w.volume &&
          ((b = this.w.volume),
          0 <= b && 1 >= b && this.setVolume(this.w.volume)));
    this.ra = !0;
    vv(this, "start");
  };
  l.zd = function (a, b, c) {
    this.g.setSize(a, b);
    vv(this, "resize", { width: a, height: b, viewMode: c });
  };
  l.stop = function () {
    vv(this, "stop");
  };
  l.Lf = function () {
    vv(this, "expand");
  };
  l.Kf = function () {
    vv(this, "collapse");
  };
  l.getVolume = function () {
    return this.J;
  };
  l.setVolume = function (a) {
    this.J = a;
    this.g.g.setVolume(a);
    vv(this, "volume", { volume: a });
  };
  l.pause = function () {
    vv(this, "pause");
  };
  l.resume = function () {
    vv(this, "resume");
  };
  l.destroy = function () {
    this.Y();
  };
  l.Nf = function () {
    return this.pb;
  };
  l.Of = function () {
    Ps.B().report(124, { api: "getCurrentAd" });
    return this.o;
  };
  l.R = function () {
    vv(this, "destroy");
    this.pa.Y();
    this.A.clear();
    this.C && (this.C.stop(), this.C.Y());
    ms() && hu(this.F, this.L);
    K.prototype.R.call(this);
  };
  var wv = function (a) {
    var b = {};
    null != a.h && Gb(b, a.h);
    a.X && ((b.useClickElement = !1), (b.disableClickThrough = !0));
    return b;
  };
  Y.prototype.ob = function () {
    Ps.B().report(124, { api: "clicked" });
    vv(this, "click");
  };
  var xv = function (a, b) {
    Vg.call(this, "adsManagerLoaded");
    this.h = a;
    this.o = b;
  };
  y(xv, Vg);
  xv.prototype.w = function (a, b) {
    var c = this.h;
    c.w = a;
    null != a.currentTime && ((c.C = new zr(a, c.H)), c.C.start());
    null != b && (c.h = b);
    return this.h;
  };
  xv.prototype.A = function () {
    return this.o;
  };
  var Z = function () {
    this.videoPlayMuted = this.videoPlayActivation = "unknown";
    this.videoContinuousPlay = "0";
    this.nonLinearAdSlotHeight =
      this.nonLinearAdSlotWidth =
      this.linearAdSlotHeight =
      this.linearAdSlotWidth =
      this.liveStreamPrefetchSeconds =
        0;
    this.forceNonLinearFullSlot = !1;
    this.vastLoadTimeout = 5e3;
  };
  Z.prototype.setAdWillAutoPlay = function (a) {
    this.videoPlayActivation = a ? "auto" : "click";
  };
  Z.prototype.setAdWillPlayMuted = function (a) {
    this.videoPlayMuted = a ? "muted" : "unmuted";
  };
  Z.prototype.setContinuousPlayback = function (a) {
    this.videoContinuousPlay = a ? "2" : "1";
  };
  var yv = function (a, b, c) {
    this.h = c;
    0 == b.length && (b = [[]]);
    this.g = b.map(function (d) {
      d = a.concat(d);
      for (var e = [], f = 0, g = 0; f < d.length; ) {
        var h = d[f++];
        if (128 > h) e[g++] = String.fromCharCode(h);
        else if (191 < h && 224 > h) {
          var k = d[f++];
          e[g++] = String.fromCharCode(((h & 31) << 6) | (k & 63));
        } else if (239 < h && 365 > h) {
          k = d[f++];
          var m = d[f++],
            n = d[f++];
          h =
            (((h & 7) << 18) | ((k & 63) << 12) | ((m & 63) << 6) | (n & 63)) -
            65536;
          e[g++] = String.fromCharCode(55296 + (h >> 10));
          e[g++] = String.fromCharCode(56320 + (h & 1023));
        } else
          (k = d[f++]),
            (m = d[f++]),
            (e[g++] = String.fromCharCode(
              ((h & 15) << 12) | ((k & 63) << 6) | (m & 63)
            ));
      }
      return new RegExp(e.join(""));
    });
  };
  yv.prototype.match = function (a) {
    var b = this;
    return this.g.some(function (c) {
      c = a.match(c);
      return null == c
        ? !1
        : !b.h ||
          (1 <= c.length && "3.353.0" == c[1]) ||
          (2 <= c.length && "3.353.0" == c[2])
        ? !0
        : !1;
    });
  };
  var zv = [
      104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92,
      46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109,
      47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99,
      111, 114, 101, 41, 47,
    ],
    Av = [
      104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100,
      110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47,
      104, 116, 109, 108, 53, 47,
    ],
    Bv = [
      104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92,
      46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109,
      47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91,
      48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47,
    ],
    Cv = [
      [105, 109, 97, 51, 92, 46, 106, 115],
      [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115],
    ],
    Dv = [
      [
        98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48,
        45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93,
        41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116,
        109, 108,
      ],
      [
        98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48,
        45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91,
        97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44,
        50, 125, 92, 46, 104, 116, 109, 108,
      ],
      [
        98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57,
        93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104,
        116, 109, 108,
      ],
    ],
    Ev = [
      [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
      [
        111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103,
        92, 46, 106, 115,
      ],
    ],
    Fv = new yv(zv, Cv, !1),
    Gv = new yv(zv, Dv, !0),
    Hv = new yv(Av, Cv, !1),
    Iv = new yv(Av, Dv, !0),
    Jv = new yv(Bv, Cv, !1),
    Kv = new yv(
      [
        104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100,
        50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115,
        121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109,
        47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116,
        115, 124, 106, 115, 41, 47,
      ],
      [],
      !1
    ),
    Lv = new yv(
      zv,
      [
        [
          100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93,
          43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97,
          45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44,
          50, 125, 92, 46, 104, 116, 109, 108,
        ],
        [
          100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93,
          43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117,
          103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51,
          125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108,
        ],
        [
          100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45,
          122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50,
          125, 92, 46, 104, 116, 109, 108,
        ],
      ],
      !0
    ),
    Mv = new yv(zv, Ev, !1),
    Nv = new yv(Bv, Ev, !1),
    qb = {
      Pg: Fv,
      Ng: Gv,
      Yg: Hv,
      Xg: Iv,
      Qg: Jv,
      yh: Kv,
      Og: Lv,
      eh: Mv,
      fh: Nv,
    };
  var Pv = function () {
      if (ek()) return window.location.href;
      var a = hf(),
        b = a.h,
        c = a.g;
      a = a.l;
      var d = null;
      a && (d = Ov(a.url));
      return d ? d : b && b.url ? b.url : c && c.url ? c.url : "";
    },
    Ov = function (a) {
      try {
        var b = new R(a);
        if (!b.h.includes(".cdn.ampproject.org")) return null;
        var c = b.l.split("/").slice(1),
          d = "s" == c[1] && 3 > c.length;
        if (2 > c.length || d) return null;
        var e = "s" == c[1];
        c = e ? c.slice(2) : c.slice(1);
        var f = decodeURIComponent(c[0]) + "/";
        return e
          ? "https://" + f + c.slice(1).join("/")
          : "http://" + f + c.slice(1).join("/");
      } catch (g) {
        return null;
      }
    },
    Qv = function () {
      var a = E().location.ancestorOrigins;
      return a
        ? 0 < a.length && 200 > a[a.length - 1].length
          ? a[a.length - 1]
          : ""
        : null;
    };
  var Rv = function () {
    var a = this;
    this.g = new Promise(function (b, c) {
      a.resolve = b;
      a.reject = c;
    });
  };
  var Sv = function (a, b, c) {
    var d = "script";
    d = void 0 === d ? "" : d;
    var e = a.createElement("link");
    try {
      e.rel = "preload";
      if (dc("preload", "stylesheet")) var f = Qb(b).toString();
      else {
        if (b instanceof Pb) var g = Qb(b).toString();
        else {
          if (b instanceof ic) var h = jc(b);
          else {
            if (b instanceof ic) var k = b;
            else
              (b = "object" == typeof b && b.Ua ? b.Ma() : String(b)),
                kc.test(b) || (b = "about:invalid#zClosurez"),
                (k = new ic(gc, b));
            h = jc(k);
          }
          g = h;
        }
        f = g;
      }
      e.href = f;
    } catch (m) {
      return;
    }
    d && (e.as = d);
    c && e.setAttribute("nonce", c);
    if ((a = a.getElementsByTagName("head")[0]))
      try {
        a.appendChild(e);
      } catch (m) {}
  };
  var Tv = /^\.google\.(com?\.)?[a-z]{2,3}$/,
    Uv = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
    Vv = q,
    Wv = function (a) {
      a = "patch/js/null.js?https://adservice" + (a + "/adsid/integrator.js");
      var b = ["domain=" + encodeURIComponent(q.location.hostname)];
      es[3] >= u() && b.push("adsid=" + encodeURIComponent(es[1]));
      return a + "?" + b.join("&");
    },
    es,
    Xv,
    ds = function () {
      Vv = q;
      es = Vv.googleToken = Vv.googleToken || {};
      var a = u();
      (es[1] && es[3] > a && 0 < es[2]) ||
        ((es[1] = ""), (es[2] = -1), (es[3] = -1), (es[4] = ""), (es[6] = ""));
      Xv = Vv.googleIMState = Vv.googleIMState || {};
      a = Xv[1];
      (Tv.test(a) && !Uv.test(a)) || (Xv[1] = ".google.com");
      Fa(Xv[5]) || (Xv[5] = []);
      "boolean" !== typeof Xv[6] && (Xv[6] = !1);
      Fa(Xv[7]) || (Xv[7] = []);
      "number" !== typeof Xv[8] && (Xv[8] = 0);
    },
    Yv = {
      pc: function () {
        return 0 < Xv[8];
      },
      fg: function () {
        Xv[8]++;
      },
      gg: function () {
        0 < Xv[8] && Xv[8]--;
      },
      hg: function () {
        Xv[8] = 0;
      },
      Ih: function () {
        return !1;
      },
      od: function () {
        return Xv[5];
      },
      dd: function (a) {
        try {
          a();
        } catch (b) {
          q.setTimeout(function () {
            throw b;
          }, 0);
        }
      },
      Fd: function () {
        if (!Yv.pc()) {
          var a = q.document,
            b = function (e) {
              e = Wv(e);
              a: {
                try {
                  var f = Aa();
                  break a;
                } catch (g) {}
                f = void 0;
              }
              Sv(a, e, f);
              f = a.createElement("script");
              f.type = "text/javascript";
              f.onerror = function () {
                return q.processGoogleToken({}, 2);
              };
              e = ne(e);
              zc(f, e);
              try {
                (a.head || a.body || a.documentElement).appendChild(f), Yv.fg();
              } catch (g) {}
            },
            c = Xv[1];
          b(c);
          ".google.com" != c && b(".google.com");
          b = {};
          var d = ((b.newToken = "FBT"), b);
          q.setTimeout(function () {
            return q.processGoogleToken(d, 1);
          }, 1e3);
        }
      },
    },
    Zv = function (a) {
      ds();
      var b = Vv.googleToken[5] || 0;
      a && (0 != b || es[3] >= u() ? Yv.dd(a) : (Yv.od().push(a), Yv.Fd()));
      (es[3] >= u() && es[2] >= u()) || Yv.Fd();
    },
    $v = function (a) {
      q.processGoogleToken =
        q.processGoogleToken ||
        function (b, c) {
          var d = b;
          d = void 0 === d ? {} : d;
          c = void 0 === c ? 0 : c;
          b = d.newToken || "";
          var e = "NT" == b,
            f = parseInt(d.freshLifetimeSecs || "", 10),
            g = parseInt(d.validLifetimeSecs || "", 10),
            h = d["1p_jar"] || "";
          d = d.pucrd || "";
          ds();
          1 == c ? Yv.hg() : Yv.gg();
          var k = (Vv.googleToken = Vv.googleToken || {}),
            m =
              0 == c &&
              b &&
              "string" === typeof b &&
              !e &&
              "number" === typeof f &&
              0 < f &&
              "number" === typeof g &&
              0 < g &&
              "string" === typeof h;
          e = e && !Yv.pc() && (!(es[3] >= u()) || "NT" == es[1]);
          var n = !(es[3] >= u()) && 0 != c;
          if (m || e || n)
            (e = u()),
              (f = e + 1e3 * f),
              (g = e + 1e3 * g),
              1e-5 > Math.random() &&
                He(
                  q,
                  "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
                    c
                ),
              (k[5] = c),
              (k[1] = b),
              (k[2] = f),
              (k[3] = g),
              (k[4] = h),
              (k[6] = d),
              ds();
          if (m || !Yv.pc()) {
            c = Yv.od();
            for (b = 0; b < c.length; b++) Yv.dd(c[b]);
            c.length = 0;
          }
        };
      Zv(a);
    };
  (function () {
    if (
      !rb(function (e) {
        return e.match(E().location.href);
      })
    ) {
      for (var a = Zd(), b = null, c = null, d = 0; d < a.length; d++)
        if (
          ((c = a[d]),
          rb(function (e) {
            return e.match(c.src);
          }))
        ) {
          b = c;
          break;
        }
      if (false)
        throw Error(
          "IMA SDK is either not loaded from a google domain or is not a supported version."
        );
    }
  })();
  var cw = function (a) {
    K.call(this);
    this.g = a;
    this.A = new Map();
    this.o = this.g.G;
    this.C = new mq(this);
    this.D = new mr(window);
    0 != W.g ? ((this.h = new $t()), Ug(this, this.h)) : (this.h = cu());
    if (ms()) {
      a = this.h;
      var b = Wu(this.o);
      if (!a.o) {
        a.g = b || null;
        a.g && (a.D.T(a.g, "activityMonitor", a.F), iu(a));
        if (
          !(
            q.ima &&
            q.ima.video &&
            q.ima.video.client &&
            q.ima.video.client.tagged
          )
        ) {
          r("ima.video.client.sdkTag", !0, void 0);
          var c = q.document;
          b = de(document, "SCRIPT");
          var d = Rb(
            Kb(
              Lb(
                "patch/js/null.js?https://s0.2mdn.net/instream/video/client.js"
              )
            )
          );
          zc(b, d);
          b.async = !0;
          b.type = "text/javascript";
          c = c.getElementsByTagName("script")[0];
          c.parentNode.insertBefore(b, c);
        }
        b = Js();
        Yi(b);
        Lo.B().L = W.g;
        a.A = !0;
        Lo.B().l = !0;
        a.C = (t(null), null);
        b = Lo.B();
        c = "h" == co(b) || "b" == co(b);
        d = "exc" != O.B().U;
        c && d && ((b.F = !0), (b.H = new nm()));
        a.o = !0;
      }
      this.w = gu(this.h, this.g.D);
    }
    aw();
    bw();
  };
  p(cw, K);
  cw.prototype.R = function () {
    this.C.Y();
    var a = this.w;
    this.h.w["delete"](a);
    0 != W.g && (Lo.B().w[a] = null);
    K.prototype.R.call(this);
  };
  cw.prototype.destroy = function () {
    this.Y();
  };
  cw.prototype.L = function (a, b) {
    var c = this;
    Hs(Ds(), 44710217)
      ? dw(this, a, b)
      : gk()
      ? ew(this, a, b, null)
      : $v(function () {
          fs();
          gs();
          hs();
          ew(c, a, b, null);
        });
  };
  var dw = function (a, b, c) {
      var d = null,
        e = [];
      if (!gk()) {
        var f = new Rv();
        e.push(f.g);
        $v(function () {
          fs();
          gs();
          hs();
          f.resolve();
        });
      }
      if (or(a.D)) {
        var g = new Rv();
        e.push(g.g);
        rr(a.D, function (h) {
          d = h;
          g.resolve();
        });
      }
      Promise.all(e).then(function () {
        ew(a, b, c, d);
      });
    },
    ew = function (a, b, c, d) {
      var e = b.adTagUrl;
      e &&
        Ps.B().report(8, {
          adtagurl: e,
          customPlayback: fv(a.g),
          customClick: null != a.g.C,
        });
      var f = "goog_" + Fc++;
      a.A.set(f, c || null);
      e
        ? ((c = /iu=\/(\d+)\//.exec(Ac(e))),
          (c = c && 2 == c.length ? c[1] : null) ||
            ((c = Ec(new R(e).g.get("client"))), (c = Ub(c) ? null : c)))
        : (c = null);
      c = c || "";
      var g = Ie(c);
      0 != g
        ? (c = g)
        : ((g = q.top),
          (c = Be(g, "googlefcInactive")
            ? 4
            : c && Be(g, "googlefcPA-" + c)
            ? 2
            : Be(g, "googlefcNPA")
            ? 3
            : 0));
      g = {};
      d =
        ((g.gfcPresent =
          (!!q.googlefc || Be(q.top, "googlefcPresent")) && 4 != c),
        (g.gfcUserConsent = c),
        (g.isGdprLoader = !1),
        (g.gdprApplies = d ? d.gdprApplies : null),
        (g.tcString = d ? d.dc : null),
        g);
      c = {};
      W.o &&
        ((g = $q()),
        (c.isBrowserCookieEnabled = g) &&
          Yq(e) &&
          ((g = Od.get("__gads")), (c.gfpCookieValue = Ec(g))));
      try {
        -1 != window.location.search.indexOf("goognewman=651800008") &&
          (Fs(Ds(), 651800008, "GvnExternalLayer"),
          console && console.log && console.log("goognewman=651800008"));
      } catch (Kg) {}
      g = Gs();
      var h = {};
      h.limaExperimentIds = ig().sort().join(",");
      var k = 0 != W.g ? Lo.B().l : a.h.A;
      k = void 0 === k ? null : k;
      var m = {};
      null != k && (m.activeViewPushUpdates = k);
      m.activityMonitorMode = W.g;
      m.adsToken = W.J;
      m.autoPlayAdBreaks = W.l;
      m.companionBackfill = W.w;
      m.cookiesEnabled = W.o;
      m.disableCustomPlaybackForIOS10Plus = W.h;
      m.engagementDetection = !0;
      m.isFunctionalTest = !1;
      m.isVpaidAdapter = W.zb();
      m["1pJar"] = W.L;
      m.numRedirects = W.G;
      m.pageCorrelator = W.O;
      m.persistentStateCorrelator = Rf();
      m.playerType = W.I;
      m.playerVersion = W.D;
      m.ppid = W.P;
      m.privacyControls = W.V;
      m.reportMediaRequests = !1;
      m.streamCorrelator = W.X;
      m.testingConfig = Zr().g;
      m.unloadAbandonPingEnabled = !0;
      m.urlSignals = W.ca;
      m.vpaidMode = W.H;
      k = {};
      k.contentMediaUrl = a.g.H;
      k.customClickTrackingProvided = null != a.g.C;
      a: {
        var n = ef();
        n = ba(n);
        for (var w = n.next(); !w.done; w = n.next())
          if (((w = w.value), w.url && w.url.includes("amp=1"))) {
            n = !0;
            break a;
          }
        n =
          null != window.context
            ? 0 < parseInt(window.context.ampcontextVersion, 10)
            : null != hf().l;
      }
      k.isAmp = n;
      a: {
        try {
          var x = window.top.location.href;
        } catch (Kg) {
          x = 2;
          break a;
        }
        x = null == x ? 2 : x == window.document.location.href ? 0 : 1;
      }
      k.iframeState = x;
      k.imaHostingDomain = window.document.domain;
      k.location = Pv();
      k.referrer = window.document.referrer;
      k.domLoadTime = Ns;
      k.sdkImplLoadTime = Os;
      k.topOrigin = Qv();
      k.osdId = a.w;
      k.usesCustomVideoPlayback = fv(a.g);
      k.usesInlinePlayback = a.g.I;
      n = a.g.F;
      x = [];
      var v = (w = "");
      if (null != n) {
        w = n;
        v = !0;
        v = void 0 === v ? !1 : v;
        for (var C = [], H = 0; w && 25 > H; ++H) {
          var Sb = "";
          (void 0 !== v && v) ||
            (Sb = (Sb = 9 !== w.nodeType && w.id) ? "/" + Sb : "");
          a: {
            if (w && w.nodeName && w.parentElement) {
              var vc = w.nodeName.toString().toLowerCase();
              for (
                var cf = w.parentElement.childNodes, Kd = 0, $a = 0;
                $a < cf.length;
                ++$a
              ) {
                var df = cf[$a];
                if (
                  df.nodeName &&
                  df.nodeName.toString().toLowerCase() === vc
                ) {
                  if (w === df) {
                    vc = "." + Kd;
                    break a;
                  }
                  ++Kd;
                }
              }
            }
            vc = "";
          }
          C.push((w.nodeName && w.nodeName.toString().toLowerCase()) + Sb + vc);
          w = w.parentElement;
        }
        w = C.join();
        if (n) {
          n =
            ((n = n.ownerDocument) && (n.defaultView || n.parentWindow)) ||
            null;
          v = [];
          if (n)
            try {
              var P = n.parent;
              for (C = 0; P && P !== n && 25 > C; ++C) {
                var ub = P.frames;
                for (H = 0; H < ub.length; ++H)
                  if (n === ub[H]) {
                    v.push(H);
                    break;
                  }
                n = P;
                P = n.parent;
              }
            } catch (Kg) {}
          v = v.join();
        } else v = "";
      }
      x.push(w, v);
      if (null != e) {
        for (P = 0; P < Qp.length - 1; ++P) x.push(te(e, Qp[P]) || "");
        e = te(e, "videoad_start_delay");
        P = "";
        e &&
          ((e = parseInt(e, 10)),
          (P = 0 > e ? "postroll" : 0 == e ? "preroll" : "midroll"));
        x.push(P);
      } else for (e = 0; e < Qp.length; ++e) x.push("");
      e = x.join(":");
      P = e.length;
      if (0 == P) e = 0;
      else {
        ub = 305419896;
        for (x = 0; x < P; x++)
          ub ^= ((ub << 5) + (ub >> 2) + e.charCodeAt(x)) & 4294967295;
        e = 0 < ub ? ub : 4294967296 + ub;
      }
      k.videoAdKey = e.toString();
      e = {};
      P = {};
      P.adsResponse = b.adsResponse;
      P.videoPlayActivation = b.videoPlayActivation;
      P.videoPlayMuted = b.videoPlayMuted;
      P.videoContinuousPlay = b.videoContinuousPlay;
      P.adTagUrl = b.adTagUrl;
      P.contentDuration = b.contentDuration;
      P.contentKeywords = b.contentKeywords;
      P.contentTitle = b.contentTitle;
      P.linearAdSlotWidth = b.linearAdSlotWidth;
      P.linearAdSlotHeight = b.linearAdSlotHeight;
      P.nonLinearAdSlotWidth = b.nonLinearAdSlotWidth;
      P.nonLinearAdSlotHeight = b.nonLinearAdSlotHeight;
      P.forceNonLinearFullSlot = b.forceNonLinearFullSlot;
      P.liveStreamPrefetchSeconds = b.liveStreamPrefetchSeconds;
      P.vastLoadTimeout = b.vastLoadTimeout;
      Object.assign(e, P);
      e.consentSettings = d;
      e.cookieSettings = c;
      e.experimentState = g;
      e.imalibExperiments = h;
      e.settings = m;
      e.videoEnvironment = k;
      b = Wu(a.o, f);
      a.C.T(b, "adsLoader", a.F);
      b.send("adsLoader", "requestAds", e);
    };
  cw.prototype.J = function () {
    return W;
  };
  cw.prototype.H = function () {
    Wu(this.o).send("adsLoader", "contentComplete");
  };
  var aw = function () {
    !gk() &&
      $v(function () {
        fs();
        gs();
        hs();
      });
  };
  cw.prototype.F = function (a) {
    var b = a.ba;
    switch (b) {
      case "adsLoaded":
        b = a.fa;
        a = a.Pb;
        b = new Y(
          this.h,
          this.g,
          b.adTagUrl || "",
          b.adCuePoints,
          this.w,
          b.isCustomClickTrackingAllowed,
          Wu(this.o, a)
        );
        this.dispatchEvent(new xv(b, fw(this, a)));
        break;
      case "error":
        b = a.fa;
        a = a.Pb;
        var c = Ur(b);
        this.dispatchEvent(new Vr(c, fw(this, a)));
        a = { error: b.errorCode, vis: mg(document) };
        Ps.B().report(7, a);
        break;
      case "trackingUrlPinged":
        this.dispatchEvent(new U(b, null, a.fa));
    }
  };
  var fw = function (a, b) {
      var c = a.A.get(b);
      a.A["delete"](b);
      return c;
    },
    bw = function () {
      var a = (window.location.origin || "null").trim(),
        b = "null" === a,
        c = window == window.top,
        d = !1;
      try {
        d = null != window.top.location.hostname;
      } catch (f) {}
      var e =
        null !=
        Array.from(document.body.getElementsByTagName("script")).find(function (
          f
        ) {
          return f.src && f.src.includes("connatix");
        });
      Ps.B().report(121, {
        location: Pv(),
        top_origin: Qv(),
        origin: a,
        is_null: b,
        is_top: c,
        is_friendly_to_top: d,
        is_vpaid_adapter: W.zb(),
        is_connatix_player: e,
      });
    };
  S.prototype.getCompanionAds = S.prototype.jf;
  S.prototype.isLinear = S.prototype.isLinear;
  S.prototype.isSkippable = S.prototype.If;
  S.prototype.isUiDisabled = S.prototype.Jf;
  S.prototype.getAdId = S.prototype.h;
  S.prototype.getAdSystem = S.prototype.ff;
  S.prototype.getAdvertiserName = S.prototype.gf;
  S.prototype.getApiFramework = S.prototype.hf;
  S.prototype.getContentType = S.prototype.kf;
  S.prototype.getCreativeId = S.prototype.o;
  S.prototype.getCreativeAdId = S.prototype.l;
  S.prototype.getDescription = S.prototype.mf;
  S.prototype.getTitle = S.prototype.uf;
  S.prototype.getDuration = S.prototype.getDuration;
  S.prototype.getHeight = S.prototype.nf;
  S.prototype.getWidth = S.prototype.Ef;
  S.prototype.getVastMediaHeight = S.prototype.Cf;
  S.prototype.getVastMediaWidth = S.prototype.Df;
  S.prototype.getVastMediaBitrate = S.prototype.Bf;
  S.prototype.getWrapperCreativeIds = S.prototype.Hf;
  S.prototype.getWrapperAdIds = S.prototype.Ff;
  S.prototype.getWrapperAdSystems = S.prototype.Gf;
  S.prototype.getTraffickingParameters = S.prototype.vf;
  S.prototype.getTraffickingParametersString = S.prototype.wf;
  S.prototype.getAdPodInfo = S.prototype.df;
  S.prototype.getUiElements = S.prototype.xf;
  S.prototype.getMinSuggestedDuration = S.prototype.rf;
  S.prototype.getMediaUrl = S.prototype.qf;
  S.prototype.getSurveyUrl = S.prototype.tf;
  S.prototype.getSkipTimeOffset = S.prototype.sf;
  S.prototype.getDealId = S.prototype.lf;
  S.prototype.getUniversalAdIds = S.prototype.Af;
  S.prototype.getUniversalAdIdValue = S.prototype.zf;
  S.prototype.getUniversalAdIdRegistry = S.prototype.yf;
  is.prototype.getCuePoints = is.prototype.h;
  r("google.ima.AdCuePoints.PREROLL", 0, window);
  r("google.ima.AdCuePoints.POSTROLL", -1, window);
  r("google.ima.AdDisplayContainer", gv, window);
  gv.prototype.initialize = gv.prototype.X;
  gv.prototype.destroy = gv.prototype.destroy;
  Rr.prototype.getPodIndex = Rr.prototype.Ee;
  Rr.prototype.getTimeOffset = Rr.prototype.Fe;
  Rr.prototype.getTotalAds = Rr.prototype.Ge;
  Rr.prototype.getMaxDuration = Rr.prototype.De;
  Rr.prototype.getAdPosition = Rr.prototype.Be;
  Rr.prototype.getIsBumper = Rr.prototype.Ce;
  Dr.prototype.getAdIdValue = Dr.prototype.o;
  Dr.prototype.getAdIdRegistry = Dr.prototype.l;
  r("google.ima.AdError.ErrorCode.VIDEO_PLAY_ERROR", 400, window);
  r("google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS", 1005, window);
  r("google.ima.AdError.ErrorCode.REQUIRED_LISTENERS_NOT_ADDED", 900, window);
  r("google.ima.AdError.ErrorCode.VAST_LOAD_TIMEOUT", 301, window);
  r("google.ima.AdError.ErrorCode.VAST_NO_ADS_AFTER_WRAPPER", 303, window);
  r("google.ima.AdError.ErrorCode.VAST_MEDIA_LOAD_TIMEOUT", 402, window);
  r("google.ima.AdError.ErrorCode.VAST_TOO_MANY_REDIRECTS", 302, window);
  r("google.ima.AdError.ErrorCode.VAST_ASSET_MISMATCH", 403, window);
  r("google.ima.AdError.ErrorCode.VAST_LINEAR_ASSET_MISMATCH", 403, window);
  r("google.ima.AdError.ErrorCode.VAST_NONLINEAR_ASSET_MISMATCH", 503, window);
  r("google.ima.AdError.ErrorCode.VAST_ASSET_NOT_FOUND", 1007, window);
  r("google.ima.AdError.ErrorCode.VAST_UNSUPPORTED_VERSION", 102, window);
  r("google.ima.AdError.ErrorCode.VAST_SCHEMA_VALIDATION_ERROR", 101, window);
  r("google.ima.AdError.ErrorCode.VAST_TRAFFICKING_ERROR", 200, window);
  r("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_LINEARITY", 201, window);
  r("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_DURATION_ERROR", 202, window);
  r("google.ima.AdError.ErrorCode.VAST_WRAPPER_ERROR", 300, window);
  r("google.ima.AdError.ErrorCode.NONLINEAR_DIMENSIONS_ERROR", 501, window);
  r("google.ima.AdError.ErrorCode.COMPANION_REQUIRED_ERROR", 602, window);
  r("google.ima.AdError.ErrorCode.VAST_EMPTY_RESPONSE", 1009, window);
  r("google.ima.AdError.ErrorCode.UNSUPPORTED_LOCALE", 1011, window);
  r("google.ima.AdError.ErrorCode.INVALID_ARGUMENTS", 1101, window);
  r("google.ima.AdError.ErrorCode.UNKNOWN_AD_RESPONSE", 1010, window);
  r("google.ima.AdError.ErrorCode.UNKNOWN_ERROR", 900, window);
  r("google.ima.AdError.ErrorCode.OVERLAY_AD_PLAYING_FAILED", 500, window);
  r("google.ima.AdError.ErrorCode.AUTOPLAY_DISALLOWED", 1205, window);
  r("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
  r("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
  r("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
  r("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
  r("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
  r("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
  r("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
  r("google.ima.AdError.Type.AD_LOAD", "adLoadError", window);
  r("google.ima.AdError.Type.AD_PLAY", "adPlayError", window);
  Tr.prototype.getErrorCode = Tr.prototype.xe;
  Tr.prototype.getVastErrorCode = Tr.prototype.le;
  Tr.prototype.getInnerError = Tr.prototype.ye;
  Tr.prototype.getMessage = Tr.prototype.ze;
  Tr.prototype.getType = Tr.prototype.Ae;
  r("google.ima.AdErrorEvent.Type.AD_ERROR", "adError", window);
  Vr.prototype.getError = Vr.prototype.w;
  Vr.prototype.getUserRequestContext = Vr.prototype.A;
  r(
    "google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED",
    "contentResumeRequested",
    window
  );
  r(
    "google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED",
    "contentPauseRequested",
    window
  );
  r("google.ima.AdEvent.Type.CLICK", "click", window);
  r("google.ima.AdEvent.Type.DURATION_CHANGE", "durationChange", window);
  r("google.ima.AdEvent.Type.EXPANDED_CHANGED", "expandedChanged", window);
  r("google.ima.AdEvent.Type.STARTED", "start", window);
  r("google.ima.AdEvent.Type.IMPRESSION", "impression", window);
  r("google.ima.AdEvent.Type.PAUSED", "pause", window);
  r("google.ima.AdEvent.Type.RESUMED", "resume", window);
  r("google.ima.AdEvent.Type.AD_PROGRESS", "adProgress", window);
  r("google.ima.AdEvent.Type.AD_BUFFERING", "adBuffering", window);
  r("google.ima.AdEvent.Type.FIRST_QUARTILE", "firstQuartile", window);
  r("google.ima.AdEvent.Type.MIDPOINT", "midpoint", window);
  r("google.ima.AdEvent.Type.THIRD_QUARTILE", "thirdQuartile", window);
  r("google.ima.AdEvent.Type.COMPLETE", "complete", window);
  r("google.ima.AdEvent.Type.USER_CLOSE", "userClose", window);
  r("google.ima.AdEvent.Type.LINEAR_CHANGED", "linearChanged", window);
  r("google.ima.AdEvent.Type.LOADED", "loaded", window);
  r("google.ima.AdEvent.Type.AD_CAN_PLAY", "adCanPlay", window);
  r("google.ima.AdEvent.Type.AD_METADATA", "adMetadata", window);
  r("google.ima.AdEvent.Type.AD_BREAK_READY", "adBreakReady", window);
  r("google.ima.AdEvent.Type.INTERACTION", "interaction", window);
  r("google.ima.AdEvent.Type.ALL_ADS_COMPLETED", "allAdsCompleted", window);
  r("google.ima.AdEvent.Type.SKIPPED", "skip", window);
  r(
    "google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED",
    "skippableStateChanged",
    window
  );
  r("google.ima.AdEvent.Type.LOG", "log", window);
  r(
    "google.ima.AdEvent.Type.VIEWABLE_IMPRESSION",
    "viewable_impression",
    window
  );
  r("google.ima.AdEvent.Type.VOLUME_CHANGED", "volumeChange", window);
  r("google.ima.AdEvent.Type.VOLUME_MUTED", "mute", window);
  U.prototype.type = U.prototype.type;
  U.prototype.getAd = U.prototype.C;
  U.prototype.getAdData = U.prototype.G;
  hv.prototype.getAdCuePoints = hv.prototype.o;
  r("google.ima.AdsLoader", cw, window);
  cw.prototype.getSettings = cw.prototype.J;
  cw.prototype.requestAds = cw.prototype.L;
  cw.prototype.contentComplete = cw.prototype.H;
  cw.prototype.destroy = cw.prototype.destroy;
  r(
    "google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED",
    "adsManagerLoaded",
    window
  );
  xv.prototype.getAdsManager = xv.prototype.w;
  xv.prototype.getUserRequestContext = xv.prototype.A;
  r("google.ima.CompanionAdSelectionSettings", Er, window);
  r(
    "google.ima.CompanionAdSelectionSettings.CreativeType.IMAGE",
    "Image",
    void 0
  );
  r(
    "google.ima.CompanionAdSelectionSettings.CreativeType.FLASH",
    "Flash",
    void 0
  );
  r("google.ima.CompanionAdSelectionSettings.CreativeType.ALL", "All", void 0);
  r(
    "google.ima.CompanionAdSelectionSettings.ResourceType.HTML",
    "Html",
    void 0
  );
  r(
    "google.ima.CompanionAdSelectionSettings.ResourceType.IFRAME",
    "IFrame",
    void 0
  );
  r(
    "google.ima.CompanionAdSelectionSettings.ResourceType.STATIC",
    "Static",
    void 0
  );
  r("google.ima.CompanionAdSelectionSettings.ResourceType.ALL", "All", void 0);
  r(
    "google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE",
    "IgnoreSize",
    void 0
  );
  r(
    "google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_EXACT_MATCH",
    "SelectExactMatch",
    void 0
  );
  r(
    "google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_NEAR_MATCH",
    "SelectNearMatch",
    void 0
  );
  r(
    "google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED",
    "deprecated-event",
    window
  );
  r("ima.ImaSdkSettings", V, window);
  r("google.ima.settings", W, window);
  V.prototype.setCompanionBackfill = V.prototype.Qe;
  V.prototype.getCompanionBackfill = V.prototype.He;
  V.prototype.setAutoPlayAdBreaks = V.prototype.Pe;
  V.prototype.isAutoPlayAdBreak = V.prototype.Oe;
  V.prototype.setPpid = V.prototype.Ze;
  V.prototype.getPpid = V.prototype.Ne;
  V.prototype.setVpaidAllowed = V.prototype.$e;
  V.prototype.setVpaidMode = V.prototype.af;
  V.prototype.setIsVpaidAdapter = V.prototype.Ue;
  V.prototype.isVpaidAdapter = V.prototype.zb;
  V.prototype.setNumRedirects = V.prototype.We;
  V.prototype.getNumRedirects = V.prototype.Ke;
  V.prototype.getLocale = V.prototype.ke;
  V.prototype.setLocale = V.prototype.Ve;
  V.prototype.getPlayerType = V.prototype.Le;
  V.prototype.setPlayerType = V.prototype.Xe;
  V.prototype.getDisableFlashAds = V.prototype.Je;
  V.prototype.setDisableFlashAds = V.prototype.Te;
  V.prototype.getPlayerVersion = V.prototype.Me;
  V.prototype.setPlayerVersion = V.prototype.Ye;
  V.prototype.setPageCorrelator = V.prototype.Z;
  V.prototype.setStreamCorrelator = V.prototype.$;
  V.prototype.setDisableCustomPlaybackForIOS10Plus = V.prototype.Se;
  V.prototype.getDisableCustomPlaybackForIOS10Plus = V.prototype.Ie;
  V.prototype.setCookiesEnabled = V.prototype.Re;
  r("google.ima.ImaSdkSettings.CompanionBackfillMode.ALWAYS", "always", void 0);
  r(
    "google.ima.ImaSdkSettings.CompanionBackfillMode.ON_MASTER_AD",
    "on_master_ad",
    void 0
  );
  r("google.ima.ImaSdkSettings.VpaidMode.DISABLED", 0, void 0);
  r("google.ima.ImaSdkSettings.VpaidMode.ENABLED", 1, void 0);
  r("google.ima.ImaSdkSettings.VpaidMode.INSECURE", 2, void 0);
  r("google.ima.AdsRenderingSettings", Xr, window);
  r("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
  r("google.ima.AdsRequest", Z, window);
  Z.prototype.adTagUrl = Z.prototype.adTagUrl;
  Z.prototype.adsResponse = Z.prototype.adsResponse;
  Z.prototype.nonLinearAdSlotHeight = Z.prototype.nonLinearAdSlotHeight;
  Z.prototype.nonLinearAdSlotWidth = Z.prototype.nonLinearAdSlotWidth;
  Z.prototype.linearAdSlotHeight = Z.prototype.linearAdSlotHeight;
  Z.prototype.linearAdSlotWidth = Z.prototype.linearAdSlotWidth;
  Z.prototype.setAdWillAutoPlay = Z.prototype.setAdWillAutoPlay;
  Z.prototype.setAdWillPlayMuted = Z.prototype.setAdWillPlayMuted;
  Z.prototype.setContinuousPlayback = Z.prototype.setContinuousPlayback;
  Z.prototype.contentDuration = Z.prototype.contentDuration;
  Z.prototype.contentKeywords = Z.prototype.contentKeywords;
  Z.prototype.contentTitle = Z.prototype.contentTitle;
  Z.prototype.vastLoadTimeout = Z.prototype.vastLoadTimeout;
  r("google.ima.VERSION", "3.353.0", void 0);
  r("google.ima.UiElements.AD_ATTRIBUTION", "adAttribution", void 0);
  r("google.ima.UiElements.COUNTDOWN", "countdown", void 0);
  r("google.ima.ViewMode.NORMAL", "normal", void 0);
  r("google.ima.ViewMode.FULLSCREEN", "fullscreen", void 0);
  Y.prototype.isCustomPlaybackUsed = Y.prototype.cf;
  Y.prototype.isCustomClickTrackingUsed = Y.prototype.bf;
  Y.prototype.destroy = Y.prototype.destroy;
  Y.prototype.init = Y.prototype.Qf;
  Y.prototype.start = Y.prototype.start;
  Y.prototype.stop = Y.prototype.stop;
  Y.prototype.pause = Y.prototype.pause;
  Y.prototype.resume = Y.prototype.resume;
  Y.prototype.getCuePoints = Y.prototype.Nf;
  Y.prototype.getCurrentAd = Y.prototype.Of;
  Y.prototype.getRemainingTime = Y.prototype.Pf;
  Y.prototype.expand = Y.prototype.Lf;
  Y.prototype.collapse = Y.prototype.Kf;
  Y.prototype.getAdSkippableState = Y.prototype.Mf;
  Y.prototype.resize = Y.prototype.zd;
  Y.prototype.skip = Y.prototype.Rf;
  Y.prototype.getVolume = Y.prototype.getVolume;
  Y.prototype.setVolume = Y.prototype.setVolume;
  Y.prototype.discardAdBreak = Y.prototype.je;
  Y.prototype.updateAdsRenderingSettings = Y.prototype.Sf;
  Y.prototype.clicked = Y.prototype.ob;
  Br.prototype.getContent = Br.prototype.getContent;
  Br.prototype.getContentType = Br.prototype.h;
  Br.prototype.getHeight = Br.prototype.l;
  Br.prototype.getWidth = Br.prototype.o;
})();

function MobileInGame() {
  $(
    "<style type='text/css'>.promo-container-new{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;position:absolute;width:100%;height:100%;top:0;left:0}.promo-display-container-new{flex-grow:1;position:relative}.promo-controls-container-new{padding:4px 0;text-align:right;visibility:hidden}.promo-display-container-new>div{box-sizing:border-box;width:0;height:0;min-height:100%;min-width:100%;max-width:100%;max-height:100%;overflow:hidden;position:absolute}#promo-message-new{box-sizing:border-box;padding:4px 16px;margin:auto;color:#fff;color:rgba(255,255,255,.8);font-family:Helvetica,Arial,sans-serif;font-size:14px;cursor:pointer;min-width:150px;float:left;text-align:left;margin-bottom:8px;font-weight:400;display:none}#promo-button-new{box-sizing:border-box;padding:4px 16px;margin:auto;border:1px solid rgba(255,255,255,.5);color:#fff;color:rgba(255,255,255,.8);font-family:Helvetica,Arial,sans-serif;font-size:18px;cursor:pointer;min-width:150px;margin-bottom:8px;background:#000}#promo-button-new:hover{background:linear-gradient(#a711b0,#821088)}#promo-button-new:active{background:linear-gradient(#a711b0,#821088)}#promo-button-new:disabled,#promo-button-new[disabled]{background:#000}.banner-new{z-index:1020;height:100%;display:flex!important;align-items:center;justify-content:center} </style>"
  ).appendTo("head");
  var number = $.now();
  var apnd2 =
    '<div id="promo-new" style="display:none;z-index: 1030; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;"><div class="promo-container-new" style="background-color: black;"> <div class="promo-display-container-new"> <div id="preroll_banner_container_new"> <div id="preroll_banner_new" class="banner"> <script async src="patch/js/null.js?https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script><div id="preroll_banner_ad_' +
    number +
    '"> <script>window.googletag=window.googletag ||{cmd: []}; googletag.cmd.push(function(){googletag.defineSlot("/21739493398/AdExchange-300x250-GM", [[300, 600], [300, 250], [250, 250], [200, 200], [120, 600], [320, 480], [336, 280], [300, 75], [120, 240], [180, 150], [240, 133], [300, 100]], "preroll_banner_ad_' +
    number +
    '").addService(googletag.pubads()); googletag.enableServices(); googletag.display("preroll_banner_ad_' +
    number +
    '");}); </script> </div></div></div></div><div class="promo-controls-container-new" style="visibility: visible;"> <button id="promo-button-new" style="display:none;">You can skip this in <span id="preroll_time_5_new">0</span> secs</button> <span id="promo-message-new">Ad will be closed in <span id="preroll_full_time_new">0</span> secs</span> </div></div></div>';
  $("#imaContainer_new").append(apnd2);
  $("#imaContainer_new").css("visibility", "visible");
  $("#promo-new").show();

  var intervaltimer = setInterval(function () {
    if (parseInt($("#preroll_full_time_new").html()) < 1) {
      $("#imaContainer_new").css("visibility", "hidden");
      $("#promo-new").remove();
      clearInterval(intervaltimer);
    }

    $("#preroll_full_time_new").html(
      parseInt($("#preroll_full_time_new").html()) - 1
    );

    if (parseInt($("#preroll_time_5_new").html()) < 1) {
      $("#promo-message-new").show();
      $("#promo-button-new")
        .html("SKIP")
        .on("click", function () {
          clearInterval(intervaltimer);
          $("#imaContainer_new").css("visibility", "hidden");
          $("#promo-new").remove();
        });
    } else {
      $("#preroll_time_5_new").html(
        parseInt($("#preroll_time_5_new").html()) - 1
      );
    }
  }, 1000);
}

tContainer2 = document.body || document.getElementsByTagName("body")[0];
var imaContainer_new = document.createElement("div");
(imaContainer_new.id = "imaContainer_new"),
  (imaContainer_new.style.position = "absolute"),
  (imaContainer_new.style.zIndex = "10000"),
  (imaContainer_new.style.top = "0"),
  (imaContainer_new.style.left = "0"),
  (imaContainer_new.style.width = "100%"),
  (imaContainer_new.style.height = "100%"),
  (imaContainer_new.style.backgroundColor = "rgba(0, 0, 0, 1)"),
  (imaContainer_new.style.visibility = "hidden"),
  (imaContainer_new.style.overflow = "hidden");

var imaVideo2 = document.createElement("video2");
imaVideo2.id = "imaVideo2";
try {
  tContainer2.appendChild(this.imaContainer_new);
  this.imaContainer_new.appendChild(imaVideo2);
} catch (e) {}

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

// JavaScript Document
var PreRollAd = {
  adsManager: null,
  adsLoader: null,
  adDisplayContainer: null,
  videoContent: null,
  isAds: false,
  intervalTimer: null,
  adContainer: null,
  timeoutTimer: null,
  timeCounter: 15,
  adObject: null,
  startTime: new Date(),
  start: function () {
    // return true;
    PreRollAd.videoContent = $("#videoElementPreload").get(0);
    PreRollAd.adContainer = $("#adContainerPreload");
    PreRollAd.adContainer.width($("#adsContainerPreload").width());
    PreRollAd.adContainer.height($("#adsContainerPreload").height());
    PreRollAd.requestAds();
  },
  showGame: function () {
    $("#adsContainerPreload").hide();
  },
  requestAds: function () {
    console.log("--fx--requestAds--");
    $("#adsContainerPreload").hide();
    // return true;
    PreRollAd.adDisplayContainer = new google.ima.AdDisplayContainer(
      PreRollAd.adContainer.get(0)
    );
    PreRollAd.adDisplayContainer.initialize();
    PreRollAd.adsLoader = new google.ima.AdsLoader(
      PreRollAd.adDisplayContainer
    );
    PreRollAd.adsLoader.addEventListener(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      PreRollAd.onAdsManagerLoaded,
      !1
    );
    PreRollAd.adsLoader.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      PreRollAd.events.onAdError,
      !1
    );
    var e = new google.ima.AdsRequest();
    var descriptionURL = encodeURIComponent(window.location);
    e.adTagUrl =
      "https://pubads.g.doubleclick.net/gampad/ads?iu=/21739493398/MixFreeGames.com-ADX-AFG&description_url=" +
      descriptionURL +
      "&tfcd=0&npa=0&sz=640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=";
    e.setAdWillAutoPlay(false);
    e.setAdWillPlayMuted(false);
    e.forceNonLinearFullSlot = true;
    e.nonLinearAdSlotWidth = PreRollAd.adContainer.width();
    e.nonLinearAdSlotHeight = PreRollAd.adContainer.height();
    e.LinearAdSlotWidth = PreRollAd.adContainer.width();
    e.LinearAdSlotHeight = PreRollAd.adContainer.height();
    PreRollAd.adsLoader.requestAds(e);
  },
  onAdsManagerLoaded: function (e) {
    PreRollAd.adsManager = e.getAdsManager(PreRollAd.videoContent);
    PreRollAd.adsManager.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      PreRollAd.events.onAdError
    );
    PreRollAd.adsManager.addEventListener(
      google.ima.AdEvent.Type.USER_CLOSE,
      PreRollAd.events.onUserClose
    );
    PreRollAd.adsManager.addEventListener(
      google.ima.AdEvent.Type.LOADED,
      PreRollAd.events.onAdEvent
    );
    PreRollAd.adsManager.addEventListener(
      google.ima.AdEvent.Type.STARTED,
      PreRollAd.events.onAdEvent
    );
    PreRollAd.adsManager.addEventListener(
      google.ima.AdEvent.Type.COMPLETE,
      PreRollAd.events.onAdEvent
    );
    PreRollAd.adsManager.addEventListener(
      google.ima.AdEvent.Type.CLICK,
      PreRollAd.events.onAdEvent
    );
    PreRollAd.adsManager.addEventListener(
      google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
      PreRollAd.events.onUserClose
    );
    PreRollAd.adsManager.addEventListener(
      google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
      PreRollAd.events.onUserClose
    );
    try {
      PreRollAd.adsManager.init(
        PreRollAd.adContainer.width(),
        PreRollAd.adContainer.height(),
        google.ima.ViewMode.NORMAL
      );
      PreRollAd.adsManager.start();
    } catch (i) {
      PreRollAd.showGame();
    }
  },
  events: {
    onUserClose: function () {
      PreRollAd.showGame();
    },
    onAdEvent: function (e) {
      console.log(e);
      var i = e.getAd();
      switch (e.type) {
        case google.ima.AdEvent.Type.LOADED:
          (PreRollAd.adObject = i), i.isLinear() || PreRollAd.tickTimer();
          break;
        case google.ima.AdEvent.Type.STARTED:
          break;
        case google.ima.AdEvent.Type.COMPLETE:
          PreRollAd.showGame();
          break;
        case google.ima.AdEvent.Type.CLICK:
      }
    },
    onAdError: function (e) {
      if (PreRollAd.isAds == false) {
        PreRollAd.isAds = true;
        PreRollAd.start();
      } else {
      }
    },
  },
  tickTimer: function () {
    PreRollAd.timeoutTimer = setTimeout(function () {
      PreRollAd.timeCounter--;
      if (PreRollAd.timeCounter == 0) {
        PreRollAd.showGame();
        clearTimeout(PreRollAd.timeoutTimer);
      } else {
        PreRollAd.tickTimer();
      }
    }, 1e3);
  },
  logPageClosedWhileAd: function () {},
};

function StartToShowAd() {
  $("#adsContainerPreload").show();
  PreRollAd.start();
}

var urlsvk = "(vkplay.ru|vkplay.com|dzen.ru)";
var urlvk =
  window.location != window.parent.location
    ? document.referrer
    : document.location.href;
urlsvk = new RegExp(urlsvk);
if (urlvk.match(urlsvk)) {
} else {
  if (window.location.href.indexOf("gmadstester") == -1) {
    if (isMobile.any()) {
      setTimeout(function () {
        MobileInGame();
      }, 2000);
    } else {
      setTimeout(function () {
        var strVar =
          "" +
          '<div id="adsContainerPreload" style="position: absolute; z-index: 10000; top: 0px; left: 0px; width: 100%; height: 100%; background-color: rgb(0, 0, 0); display: none; overflow: hidden;">' +
          '<div id="adContainerPreload"></div>' +
          '<video id="videoElementPreload"></video>' +
          "</div> ";
        $(document.body).append(strVar);

        $("#adsContainerPreload").show();
        PreRollAd.start();
      }, 2000);
    }
  }
}
