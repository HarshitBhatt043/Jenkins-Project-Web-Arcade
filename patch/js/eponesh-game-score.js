/*! For license information please see game-score.js.LICENSE.txt */
(() => {
  var e,
    t,
    n,
    i,
    r = {
      2616: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (t.i = function (e, n, i) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var r = {};
              if (i)
                for (var s = 0; s < this.length; s++) {
                  var a = this[s][0];
                  null != a && (r[a] = !0);
                }
              for (var o = 0; o < e.length; o++) {
                var c = [].concat(e[o]);
                (i && r[c[0]]) ||
                  (n &&
                    (c[2]
                      ? (c[2] = "".concat(n, " and ").concat(c[2]))
                      : (c[2] = n)),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      5585: (e) => {
        !(function (t) {
          e.exports = t;
          var n = {
            on: function (e, t) {
              return s(this, e).push(t), this;
            },
            once: function (e, t) {
              var n = this;
              return (i.originalListener = t), s(n, e).push(i), n;
              function i() {
                r.call(n, e, i), t.apply(this, arguments);
              }
            },
            off: r,
            emit: function (e, t) {
              var n = this,
                i = s(n, e, !0);
              if (!i) return !1;
              var r = arguments.length;
              if (1 === r) i.forEach(o);
              else if (2 === r) i.forEach(c);
              else {
                var a = Array.prototype.slice.call(arguments, 1);
                i.forEach(h);
              }
              return !!i.length;
              function o(e) {
                e.call(n);
              }
              function c(e) {
                e.call(n, t);
              }
              function h(e) {
                e.apply(n, a);
              }
            },
          };
          function i(e) {
            for (var t in n) e[t] = n[t];
            return e;
          }
          function r(e, t) {
            var n,
              i = this;
            if (arguments.length) {
              if (t) {
                if ((n = s(i, e, !0))) {
                  if (!(n = n.filter(a)).length) return r.call(i, e);
                  i.listeners[e] = n;
                }
              } else if (
                (n = i.listeners) &&
                (delete n[e], !Object.keys(n).length)
              )
                return r.call(i);
            } else delete i.listeners;
            return i;
            function a(e) {
              return e !== t && e.originalListener !== t;
            }
          }
          function s(e, t, n) {
            if (!n || e.listeners) {
              var i = e.listeners || (e.listeners = {});
              return i[t] || (i[t] = []);
            }
          }
          i(t.prototype), (t.mixin = i);
        })(function e() {
          if (!(this instanceof e)) return new e();
        });
      },
      4943: (e) => {
        "use strict";
        (e.exports = i), (e.exports.isMobile = i), (e.exports.default = i);
        var t =
            /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
          n = /android|ipad|playbook|silk/i;
        function i(e) {
          e || (e = {});
          var i = e.ua;
          if (
            (i || "undefined" == typeof navigator || (i = navigator.userAgent),
            i &&
              i.headers &&
              "string" == typeof i.headers["user-agent"] &&
              (i = i.headers["user-agent"]),
            "string" != typeof i)
          )
            return !1;
          var r = t.test(i) || (!!e.tablet && n.test(i));
          return (
            !r &&
              e.tablet &&
              e.featureDetect &&
              navigator &&
              navigator.maxTouchPoints > 1 &&
              -1 !== i.indexOf("Macintosh") &&
              -1 !== i.indexOf("Safari") &&
              (r = !0),
            r
          );
        }
      },
      2096: () => {
        "function" != typeof Promise.prototype.finally &&
          (Promise.prototype.finally = function (e) {
            var t = this;
            return this.then(function (n) {
              return t.constructor.resolve(e()).then(function () {
                return n;
              });
            }).catch(function (n) {
              return t.constructor.resolve(e()).then(function () {
                throw n;
              });
            });
          });
      },
      8205: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => s });
        var i = n(2616),
          r = n.n(i)()(function (e) {
            return e[1];
          });
        r.push([
          e.id,
          ".gs-global-loader{position:fixed;z-index:99999;top:8px;right:8px;width:48px;height:48px}@media only screen and (min-width: 1024px){.gs-global-loader{top:inherit;right:16px;bottom:16px}}.gs-loader{position:relative;width:40px;height:40px;border-radius:50%;display:flex}.gs-loader__outter{box-sizing:border-box;position:absolute;border:4px solid #f50057;border-left-color:transparent;width:100%;height:100%;border-radius:50%;-webkit-animation:loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;animation:loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite}.gs-loader__inner{box-sizing:border-box;position:absolute;border:4px solid #f50057;border-radius:50%;width:20px;height:20px;left:calc(50% - 10px);top:calc(50% - 10px);border-top-color:transparent;-webkit-animation:loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;animation:loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite}@keyframes loader-outter{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader-inner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}.gs-loader-hidden{display:none}",
          "",
        ]);
        const s = r;
      },
      3379: (e, t, n) => {
        "use strict";
        var i,
          r = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            };
          })(),
          s = [];
        function a(e) {
          for (var t = -1, n = 0; n < s.length; n++)
            if (s[n].identifier === e) {
              t = n;
              break;
            }
          return t;
        }
        function o(e, t) {
          for (var n = {}, i = [], r = 0; r < e.length; r++) {
            var o = e[r],
              c = t.base ? o[0] + t.base : o[0],
              h = n[c] || 0,
              l = "".concat(c, " ").concat(h);
            n[c] = h + 1;
            var u = a(l),
              d = { css: o[1], media: o[2], sourceMap: o[3] };
            -1 !== u
              ? (s[u].references++, s[u].updater(d))
              : s.push({ identifier: l, updater: g(d, t), references: 1 }),
              i.push(l);
          }
          return i;
        }
        function c(e) {
          var t = document.createElement("style"),
            i = e.attributes || {};
          if (void 0 === i.nonce) {
            var s = n.nc;
            s && (i.nonce = s);
          }
          if (
            (Object.keys(i).forEach(function (e) {
              t.setAttribute(e, i[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(t);
          else {
            var a = r(e.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(t);
          }
          return t;
        }
        var h,
          l =
            ((h = []),
            function (e, t) {
              return (h[e] = t), h.filter(Boolean).join("\n");
            });
        function u(e, t, n, i) {
          var r = n
            ? ""
            : i.media
            ? "@media ".concat(i.media, " {").concat(i.css, "}")
            : i.css;
          if (e.styleSheet) e.styleSheet.cssText = l(t, r);
          else {
            var s = document.createTextNode(r),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]),
              a.length ? e.insertBefore(s, a[t]) : e.appendChild(s);
          }
        }
        function d(e, t, n) {
          var i = n.css,
            r = n.media,
            s = n.sourceMap;
          if (
            (r ? e.setAttribute("media", r) : e.removeAttribute("media"),
            s &&
              "undefined" != typeof btoa &&
              (i +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                  " */"
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = i;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(i));
          }
        }
        var p = null,
          f = 0;
        function g(e, t) {
          var n, i, r;
          if (t.singleton) {
            var s = f++;
            (n = p || (p = c(t))),
              (i = u.bind(null, n, s, !1)),
              (r = u.bind(null, n, s, !0));
          } else
            (n = c(t)),
              (i = d.bind(null, n, t)),
              (r = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              });
          return (
            i(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                i((e = t));
              } else r();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            "boolean" == typeof t.singleton ||
            (t.singleton =
              (void 0 === i &&
                (i = Boolean(
                  window && document && document.all && !window.atob
                )),
              i));
          var n = o((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var i = 0; i < n.length; i++) {
                var r = a(n[i]);
                s[r].references--;
              }
              for (var c = o(e, t), h = 0; h < n.length; h++) {
                var l = a(n[h]);
                0 === s[l].references && (s[l].updater(), s.splice(l, 1));
              }
              n = c;
            }
          };
        };
      },
      3080: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => _, z: () => I });
        var i,
          r,
          s,
          a,
          o,
          c,
          h,
          l,
          u = n(6558),
          d = n(1437),
          p = n(4835),
          f = n(8293),
          g = n(6388),
          v = function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, s) {
              function a(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((i = i.apply(e, t || [])).next());
            });
          },
          m = function (e, t, n, i, r) {
            if ("m" === i)
              throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
              throw new TypeError(
                "Private accessor was defined without a setter"
              );
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw new TypeError(
                "Cannot write private member to an object whose class did not declare it"
              );
            return (
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n), n
            );
          },
          y = function (e, t, n, i) {
            if ("a" === n && !i)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? i
              : "a" === n
              ? i.call(e)
              : i
              ? i.value
              : t.get(e);
          },
          w = function (e, t) {
            var n = {};
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) &&
                t.indexOf(i) < 0 &&
                (n[i] = e[i]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var r = 0;
              for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                t.indexOf(i[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                  (n[i[r]] = e[i[r]]);
            }
            return n;
          };
        const b = "already_unlocked",
          P = "achievement_not_found";
        class _ extends g.Z {
          constructor(e, t) {
            super(),
              (this.gp = e),
              i.add(this),
              r.set(this, void 0),
              s.set(this, []),
              a.set(this, []),
              o.set(this, {}),
              c.set(this, {}),
              h.set(this, {}),
              m(this, r, t, "f");
          }
          get unlockedList() {
            return [...y(this, a, "f")];
          }
          open({ scrollTo: e } = {}) {
            return v(this, void 0, void 0, function* () {
              this.gp.loader.inc();
              try {
                const [t] = yield Promise.all([
                  this.fetch(),
                  this.gp.loadOverlay(),
                  (0, d.p)(p.Z.app.trophy).catch(u.kg.error),
                ]);
                this.gp.loader.dec(),
                  t.achievements.length > 0
                    ? (this._events.emit("open"),
                      yield this.gp.overlay
                        .openAchievements(t, { scrollTo: e })
                        .catch(u.kg.error),
                      this._events.emit("close"))
                    : u.kg.error(new Error("Empty achievements list"));
              } catch (e) {
                this.gp.loader.dec(), u.kg.error(e);
              }
            });
          }
          fetch() {
            return v(this, void 0, void 0, function* () {
              const e = (0, f._)();
              this.gp.loader.inc();
              try {
                const t = yield this.gp._achievementsService.fetch();
                if (!t) throw new Error("can't fetch achievements list");
                e.done(t), this._events.emit("fetch", t);
              } catch (t) {
                e.abort(t), this._events.emit("error:fetch");
              } finally {
                this.gp.loader.dec();
              }
              return e.ready;
            });
          }
          unlock({ id: e, tag: t }) {
            return v(this, void 0, void 0, function* () {
              const n = e || t,
                a = (0, f._)(),
                c = (e) => {
                  a.done({ success: !1, achievement: null, error: e }),
                    this._events.emit("error:unlock", e);
                };
              if (this.has(t || e)) return c(b), a.ready;
              if (y(this, s, "f").includes(n)) return c(P), a.ready;
              let h;
              (y(this, o, "f")[n] = a),
                this.gp.loader.inc(),
                y(this, r, "f").enableUnlockToast &&
                  (h = this.gp.loadOverlay());
              try {
                const n = yield this.gp._achievementsService.unlock({
                    id: e,
                    tag: t,
                  }),
                  { achievement: s } = n,
                  o = w(n, ["achievement"]),
                  c = Object.assign(Object.assign({}, s), o);
                y(this, i, "m", l).call(this, c),
                  this._events.emit("unlock", c),
                  y(this, r, "f").enableUnlockToast &&
                    Promise.all([h, (0, d.p)(I(c)).catch(u.kg.error)]).then(
                      () => {
                        this.gp.overlay.unlockAchievement(c);
                      }
                    ),
                  a.done({ achievement: c, success: !0, error: "" });
              } catch (e) {
                "achievement_not_found" === e && y(this, s, "f").push(n),
                  "string" == typeof e
                    ? (u.kg.error(e), c(e))
                    : (a.abort(e), this._events.emit("error:unlock", e));
              } finally {
                this.gp.loader.dec();
              }
              return (
                a.ready.finally(() => {
                  delete y(this, o, "f")[n];
                }),
                a.ready
              );
            });
          }
          has(e) {
            return y(this, a, "f").some(
              (t) => (t.tag === e || t.id === e) && t.unlocked
            );
          }
          setProgress(e) {
            var t;
            return v(this, void 0, void 0, function* () {
              const n = e.id || e.tag;
              if (n in y(this, c, "f"))
                return (
                  (y(this, c, "f")[n] = e.progress),
                  null === (t = y(this, h, "f")[n]) || void 0 === t
                    ? void 0
                    : t.ready
                );
              const o = (0, f._)(),
                p = (e) => {
                  o.done({ success: !1, achievement: null, error: e }),
                    this._events.emit("error:progress", e);
                };
              return (
                (y(this, c, "f")[n] = e.progress),
                (y(this, h, "f")[n] = o),
                setTimeout(
                  () =>
                    v(this, void 0, void 0, function* () {
                      const t = y(this, c, "f")[n];
                      if (this.has(n)) return void p(b);
                      if (y(this, s, "f").includes(n)) return void p(P);
                      const h = y(this, a, "f").find(
                          (t) => t.tag === e.tag || t.id === e.id
                        ),
                        f = (null == h ? void 0 : h.progress) || 0;
                      if (f === t) return void p("progress_the_same");
                      let g;
                      this.gp.loader.inc(),
                        y(this, r, "f").enableUnlockToast &&
                          (g = this.gp.loadOverlay()),
                        yield this.gp._achievementsService
                          .setProgress(
                            Object.assign(Object.assign({}, e), { progress: t })
                          )
                          .then((e) => {
                            var { achievement: t } = e,
                              n = w(e, ["achievement"]);
                            const s = Object.assign(Object.assign({}, t), n),
                              a = Math.floor(f / s.progressStep),
                              c = Math.floor(s.progress / s.progressStep);
                            y(this, i, "m", l).call(this, s),
                              y(this, r, "f").enableUnlockToast &&
                                (s.unlocked || a < c) &&
                                Promise.all([
                                  g,
                                  (0, d.p)(I(s)).catch(u.kg.error),
                                ]).then(() => {
                                  this.gp.overlay.unlockAchievement(s);
                                }),
                              s.unlocked && this._events.emit("unlock", s),
                              this._events.emit("progress", s),
                              o.done({
                                achievement: s,
                                success: !0,
                                error: "",
                              });
                          })
                          .catch((e) => {
                            this._events.emit("error:progress", e),
                              "achievement_not_found" === e &&
                                y(this, s, "f").push(n),
                              "string" == typeof e
                                ? (u.kg.error(e), p(e))
                                : (o.abort(e),
                                  this._events.emit("error:progress", e));
                          }),
                        this.gp.loader.dec();
                    }),
                  1e3
                ),
                o.ready.finally(() => {
                  delete y(this, h, "f")[n], delete y(this, c, "f")[n];
                }),
                o.ready
              );
            });
          }
          getProgress(e) {
            const t = y(this, a, "f").find((t) => t.tag === e || t.id === e);
            return t ? t.progress : 0;
          }
          _setAchievementsList(e) {
            m(this, a, [...e], "f");
          }
        }
        function I(e) {
          let t = "";
          return (
            (t =
              window.devicePixelRatio > 1
                ? e.unlocked
                  ? e.icon || e.lockedIcon
                  : e.lockedIcon || e.icon
                : e.unlocked
                ? e.iconSmall || e.lockedIconSmall
                : e.lockedIconSmall || e.iconSmall),
            t || p.Z.cdn.trophy
          );
        }
        (r = new WeakMap()),
          (s = new WeakMap()),
          (a = new WeakMap()),
          (o = new WeakMap()),
          (c = new WeakMap()),
          (h = new WeakMap()),
          (i = new WeakSet()),
          (l = function (e) {
            y(this, a, "f").some((t) => t.id === e.id)
              ? m(
                  this,
                  a,
                  y(this, a, "f").map((t) => (t.id === e.id ? e : t)),
                  "f"
                )
              : y(this, a, "f").push(e);
          });
      },
      4687: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => d });
        var i,
          r,
          s,
          a = n(6558),
          o = n(8293),
          c = n(6388),
          h = function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, s) {
              function a(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((i = i.apply(e, t || [])).next());
            });
          },
          l = function (e, t, n, i) {
            if ("a" === n && !i)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? i
              : "a" === n
              ? i.call(e)
              : i
              ? i.value
              : t.get(e);
          },
          u = function (e, t, n, i, r) {
            if ("m" === i)
              throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
              throw new TypeError(
                "Private accessor was defined without a setter"
              );
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw new TypeError(
                "Cannot write private member to an object whose class did not declare it"
              );
            return (
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n), n
            );
          };
        class d extends c.Z {
          constructor(e, t) {
            super(),
              (this.gp = e),
              (this.adapter = t),
              i.set(this, []),
              r.set(this, {}),
              s.set(this, {});
          }
          get isAvailable() {
            return this.adapter.isSupportsPayments;
          }
          get isSubscriptionsAvailable() {
            return this.adapter.isSupportsSubscriptions;
          }
          get purchases() {
            return [...l(this, i, "f")];
          }
          _sync() {
            return h(this, void 0, void 0, function* () {
              const { purchases: e, payload: t } =
                yield this.adapter.fetchPurchases();
              if (0 === e.length) return;
              const { purchases: n } = yield this.gp._paymentsService.sync({
                purchases: e,
                payload: t,
              });
              this._setPurchasedList(n), this.adapter.consumeAllExpired(e, n);
            });
          }
          fetchProducts() {
            return h(this, void 0, void 0, function* () {
              const e = (0, o._)();
              this.gp.loader.inc();
              try {
                const t = yield this.gp._paymentsService.fetch();
                if (!t) throw new Error("can't fetch products list");
                const { products: n, playerPurchases: i } = t,
                  r = yield this.adapter.mapProducts(this.gp, {
                    products: n,
                    playerPurchases: i,
                  });
                e.done(r), this._events.emit("fetchProducts", r);
              } catch (t) {
                e.abort(t), this._events.emit("error:fetchProducts", t);
              } finally {
                this.gp.loader.dec();
              }
              return e.ready;
            });
          }
          purchase({ id: e, tag: t }) {
            return h(this, void 0, void 0, function* () {
              const n = e || t;
              if (l(this, r, "f")[n]) return l(this, r, "f")[n];
              const s = (0, o._)();
              (l(this, r, "f")[n] = s), this.gp.loader.inc();
              try {
                const { product: n } =
                  yield this.gp._paymentsService.findProduct({ id: e, tag: t });
                if (!n)
                  throw new Error(
                    `Not found product with ID or TAG "${e || t}"`
                  );
                let r,
                  o,
                  c = !0,
                  h = "";
                this.gp.player.isLoggedInByPlatform ||
                  (yield this.gp.player.sync({ silent: !1 }));
                try {
                  o = yield this.adapter.purchase(n);
                } catch (e) {
                  throw e;
                }
                if (this.adapter.isServerValidation)
                  r = {
                    productId: n.id,
                    tag: n.tag,
                    payload: o,
                    createdAt: this.gp.serverTime,
                    expiredAt: "",
                    gift: !1,
                    subscribed: !1,
                  };
                else
                  try {
                    r = (yield this.gp._paymentsService.purchase({
                      id: e,
                      tag: t,
                      payload: o,
                    })).purchase;
                  } catch (e) {
                    (c = !1), (h = e.message);
                  }
                c
                  ? (l(this, i, "f").push({
                      id: n.id,
                      productId: n.id,
                      tag: n.tag,
                      createdAt: r.createdAt,
                      expiredAt: r.expiredAt,
                      payload: r.payload,
                      gift: r.gift,
                      subscribed: r.subscribed,
                    }),
                    this._events.emit("purchase", { product: n, purchase: r }))
                  : a.kg.error(h),
                  s.done({ success: c, product: n, purchase: r, error: h });
              } catch (e) {
                s.abort(e), this._events.emit("error:purchase", e);
              } finally {
                this.gp.loader.dec();
              }
              return (
                s.ready.finally(() => {
                  delete l(this, r, "f")[n];
                }),
                s.ready
              );
            });
          }
          consume({ id: e, tag: t }) {
            return h(this, void 0, void 0, function* () {
              const n = e || t;
              if (l(this, s, "f")[n]) return l(this, s, "f")[n];
              const r = (0, o._)();
              (l(this, s, "f")[n] = r), this.gp.loader.inc();
              try {
                const { product: n, purchase: s } =
                  yield this.gp._paymentsService.consume({ id: e, tag: t });
                s.gift || (yield this.adapter.consume(s));
                const a = l(this, i, "f").findIndex(
                  (e) => e.productId === n.id
                );
                -1 !== a && l(this, i, "f").splice(a, 1),
                  this._events.emit("consume", { product: n, purchase: s }),
                  r.done({ product: n, purchase: s, success: !0, error: "" });
              } catch (e) {
                r.abort(e), this._events.emit("error:consume", e);
              } finally {
                this.gp.loader.dec();
              }
              return (
                r.ready.finally(() => {
                  delete l(this, s, "f")[n];
                }),
                r.ready
              );
            });
          }
          subscribe({ id: e, tag: t }) {
            return h(this, void 0, void 0, function* () {
              const n = e || t;
              if (l(this, r, "f")[n]) return l(this, r, "f")[n];
              const s = (0, o._)();
              (l(this, r, "f")[n] = s), this.gp.loader.inc();
              try {
                const { product: r } =
                  yield this.gp._paymentsService.findProduct({ id: e, tag: t });
                if (!r)
                  throw new Error(
                    `Not found product with ID or TAG "${e || t}"`
                  );
                if (!r.isSubscription)
                  throw new Error(
                    `Not subscription "${
                      e || t
                    }", please enable subscription on the product`
                  );
                const o = this.getPurchase(n);
                let c,
                  h,
                  d = !0,
                  f = "";
                this.gp.player.isLoggedInByPlatform ||
                  (yield this.gp.player.sync({ silent: !1 }));
                try {
                  h = yield this.adapter.subscribe(r, o);
                } catch (e) {
                  throw e;
                }
                if (this.adapter.isServerValidation)
                  c = {
                    payload: h,
                    tag: r.tag,
                    productId: r.id,
                    createdAt: this.gp.serverTime,
                    expiredAt:
                      (null == o ? void 0 : o.expiredAt) ||
                      p(new Date(this.gp.serverTime), r.period).toISOString(),
                    gift: !1,
                    subscribed: !0,
                  };
                else
                  try {
                    c = (yield this.gp._paymentsService.purchase({
                      id: e,
                      tag: t,
                      payload: h,
                    })).purchase;
                  } catch (e) {
                    (d = !1), (f = e.message);
                  }
                d
                  ? (o &&
                      u(
                        this,
                        i,
                        l(this, i, "f").filter(
                          (e) => e.productId !== o.productId
                        ),
                        "f"
                      ),
                    l(this, i, "f").push({
                      id: r.id,
                      tag: r.tag,
                      productId: r.id,
                      createdAt: c.createdAt,
                      expiredAt: c.expiredAt,
                      payload: c.payload,
                      gift: c.gift,
                      subscribed: !0,
                    }),
                    this._events.emit("subscribe", { product: r, purchase: c }))
                  : a.kg.error(f),
                  s.done({ success: d, product: r, purchase: c, error: f });
              } catch (e) {
                s.abort(e), this._events.emit("error:subscribe", e);
              } finally {
                this.gp.loader.dec();
              }
              return (
                s.ready.finally(() => {
                  delete l(this, r, "f")[n];
                }),
                s.ready
              );
            });
          }
          unsubscribe({ id: e, tag: t }) {
            return h(this, void 0, void 0, function* () {
              const n = e || t;
              if (l(this, r, "f")[n]) return l(this, r, "f")[n];
              const s = (0, o._)();
              (l(this, r, "f")[n] = s), this.gp.loader.inc();
              try {
                const { product: r } =
                  yield this.gp._paymentsService.findProduct({ id: e, tag: t });
                if (!r)
                  throw new Error(
                    `Not found product with ID or TAG "${e || t}"`
                  );
                if (!r.isSubscription)
                  throw new Error(
                    `Not subscription "${
                      e || t
                    }", please enable subscription on the product`
                  );
                const o = this.getPurchase(n);
                if (!o || !o.subscribed)
                  throw new Error("already_unsubscribed");
                let c = !0,
                  h = Object.assign({}, o),
                  d = "";
                try {
                  yield this.adapter.unsubscribe(r, o);
                } catch (e) {
                  throw (a.kg.error(d), e);
                }
                (h.subscribed = !1),
                  u(
                    this,
                    i,
                    l(this, i, "f").map((e) =>
                      e.productId !== o.productId
                        ? e
                        : Object.assign(Object.assign({}, e), {
                            subscribed: !1,
                          })
                    ),
                    "f"
                  ),
                  this._events.emit("unsubscribe", { product: r, purchase: h }),
                  s.done({ success: c, product: r, purchase: h, error: d });
              } catch (e) {
                s.abort(e), this._events.emit("error:unsubscribe", e);
              } finally {
                this.gp.loader.dec();
              }
              return (
                s.ready.finally(() => {
                  delete l(this, r, "f")[n];
                }),
                s.ready
              );
            });
          }
          has(e) {
            return l(this, i, "f").some((t) => t.tag === e || t.id === e);
          }
          getPurchase(e) {
            return (
              l(this, i, "f").find((t) => t.tag === e || t.id === e) || null
            );
          }
          _setPurchasedList(e) {
            u(
              this,
              i,
              e.map((e) =>
                Object.assign(Object.assign({}, e), { id: e.productId })
              ),
              "f"
            );
          }
        }
        function p(e, t) {
          const n = new Date(e);
          return n.setDate(n.getDate() + t), n;
        }
        (i = new WeakMap()), (r = new WeakMap()), (s = new WeakMap());
      },
      4293: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => h });
        var i = n(8293);
        const r = [
          "adsbox",
          "advertisement",
          "pub_300x250",
          "pub_300x250m",
          "pub_728x90",
          "text-ad",
          "textAd",
          "text_ad",
          "text_ads",
          "text-ads",
          "text-ad-links",
        ];
        var s = n(9233),
          a = n(6388),
          o = n(6558),
          c = function (e, t, n, i) {
            return new (n || (n = Promise))(function (r, s) {
              function a(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((i = i.apply(e, t || [])).next());
            });
          };
        class h extends a.Z {
          constructor(e, t, n) {
            super(),
              (this.gp = e),
              (this.adapter = t),
              (this.config = n),
              (this.isAdblockEnabled = !1),
              (this.fullscreenDisplayIntervalId = 0),
              (this.stickyRefreshIntervalId = 0),
              (this.isStickyPlaying = !1),
              (this.isRewardedPlaying = !1),
              (this.isFullscreenPlaying = !1),
              (this.isPreloaderPlaying = !1),
              (this.adsInfo = e._storage.temp.adsInfo);
            const i = this.config.platformConfig.banners;
            (this.stickyBanner = i.find((e) => e.type === s.$.STICKY)),
              (this.fullscreenBanner = i.find(
                (e) => e.type === s.$.FULLSCREEN
              )),
              (this.rewardedVideo = i.find((e) => e.type === s.$.REWARDED)),
              (this.preloaderBanner = i.find((e) => e.type === s.$.PRELOADER)),
              (this.banners = i.reduce((e, t) => ((e[t.type] = t), e), {})),
              this._checkLimitsExpired(!0),
              setInterval(() => this._checkLimitsExpired(!1), 1e3);
          }
          get isStickyAvailable() {
            var e;
            return (
              this.adapter.isStickyAvailable &&
              (null === (e = this.stickyBanner) || void 0 === e
                ? void 0
                : e.enabled) &&
              !this.isBannerLimitReached(s.$.STICKY)
            );
          }
          get isFullscreenAvailable() {
            var e;
            return (
              this.adapter.isFullscreenAvailable &&
              (null === (e = this.fullscreenBanner) || void 0 === e
                ? void 0
                : e.enabled) &&
              !this.fullscreenDisplayIntervalId &&
              !this.isBannerLimitReached(s.$.FULLSCREEN)
            );
          }
          get isRewardedAvailable() {
            var e;
            return (
              this.adapter.isRewardedAvailable &&
              (null === (e = this.rewardedVideo) || void 0 === e
                ? void 0
                : e.enabled) &&
              !this.isBannerLimitReached(s.$.REWARDED)
            );
          }
          get isPreloaderAvailable() {
            var e;
            return (
              this.adapter.isPreloaderAvailable &&
              (null === (e = this.preloaderBanner) || void 0 === e
                ? void 0
                : e.enabled) &&
              !this.isBannerLimitReached(s.$.PRELOADER)
            );
          }
          checkAdblock() {
            return c(this, void 0, void 0, function* () {
              return (
                (this.isAdblockEnabled = yield (function () {
                  const e = (0, i._)(),
                    t = document.createElement("div");
                  return (
                    (t.innerHTML = "&nbsp;"),
                    (t.className = r.join(" ")),
                    (t.id = "text_ad"),
                    (t.style.padding = "1px 0 0 0"),
                    document.body.appendChild(t),
                    setTimeout(() => {
                      e.done(0 === t.offsetHeight),
                        document.body.removeChild(t);
                    }, 10),
                    e.ready
                  );
                })()),
                this.isAdblockEnabled
              );
            });
          }
          sendShowAdsInfo(e) {
            this.config.acl.canCollectStats &&
              fetch(
                `https://api.eponesh.com/gs/api/t/b/?q=${btoa(
                  JSON.stringify(
                    Object.assign(Object.assign({}, e), {
                      platformType: this.gp.platform.type,
                      projectId: this.gp.projectId,
                    })
                  )
                )}`
              );
          }
          showFullscreen() {
            return c(this, void 0, void 0, function* () {
              if (!this.isFullscreenAvailable)
                return (
                  this._events.emit("close", !1),
                  this._events.emit("fullscreen:close", !1),
                  !1
                );
              this.fullscreenBanner.frequency,
                this._events.emit("start"),
                this._events.emit("fullscreen:start"),
                this.sendShowAdsInfo({ type: "FULLSCREEN", action: "REQUEST" }),
                (this.fullscreenDisplayIntervalId = window.setTimeout(() => {
                  this.fullscreenDisplayIntervalId = 0;
                }, 1e3 * this.fullscreenBanner.frequency)),
                (this.isFullscreenPlaying = !0);
              let e = !1;
              try {
                e = yield this.adapter.showFullscreen(this.fullscreenBanner);
              } catch (e) {
                o.kg.error(e);
              }
              return (
                this.sendShowAdsInfo({
                  type: "FULLSCREEN",
                  action: e ? "DISPLAY" : "ERROR",
                }),
                (this.isFullscreenPlaying = !1),
                this._events.emit("close", e),
                this._events.emit("fullscreen:close", e),
                e && this._trackBannerDisplay(s.$.FULLSCREEN),
                e
              );
            });
          }
          showRewardedVideo() {
            return c(this, void 0, void 0, function* () {
              if (!this.isRewardedAvailable)
                return (
                  this._events.emit("close", !1),
                  this._events.emit("rewarded:close", !1),
                  !1
                );
              this._events.emit("start"),
                this._events.emit("rewarded:start"),
                this.sendShowAdsInfo({ type: "REWARDED", action: "REQUEST" }),
                (this.isRewardedPlaying = !0);
              const e = yield this.adapter
                .showRewardedVideo(this.rewardedVideo)
                .catch(() => !1);
              return (
                this.sendShowAdsInfo({
                  type: "REWARDED",
                  action: e ? "DISPLAY" : "ERROR",
                }),
                (this.isRewardedPlaying = !1),
                this._events.emit("close", e),
                this._events.emit("rewarded:close", e),
                this._trackBannerDisplay(s.$.REWARDED),
                e && this._events.emit("rewarded:reward"),
                e
              );
            });
          }
          showPreloader() {
            return c(this, void 0, void 0, function* () {
              if (!this.isPreloaderAvailable)
                return (
                  this._events.emit("close", !1),
                  this._events.emit("preloader:close", !1),
                  !1
                );
              this.sendShowAdsInfo({ type: "PRELOADER", action: "REQUEST" }),
                this._events.emit("start"),
                this._events.emit("preloader:start"),
                (this.isPreloaderPlaying = !0);
              const e = yield this.adapter
                .showPreloader(this.preloaderBanner)
                .catch(() => !1);
              return (
                this.sendShowAdsInfo({
                  type: "PRELOADER",
                  action: e ? "DISPLAY" : "ERROR",
                }),
                (this.isPreloaderPlaying = !1),
                this._events.emit("close", e),
                this._events.emit("preloader:close", e),
                e && this._trackBannerDisplay(s.$.PRELOADER),
                e
              );
            });
          }
          showSticky() {
            return c(this, void 0, void 0, function* () {
              if (!this.isStickyAvailable)
                return (
                  this._events.emit("close", !1),
                  this._events.emit("sticky:close", !1),
                  !1
                );
              !this.stickyRefreshIntervalId &&
                this.stickyBanner.refreshInterval &&
                (this.stickyRefreshIntervalId = window.setInterval(
                  () => this.refreshSticky(),
                  1e3 * this.stickyBanner.refreshInterval
                )),
                this._events.emit("start"),
                this._events.emit("sticky:start"),
                this.sendShowAdsInfo({ type: "STICKY", action: "REQUEST" });
              const e = yield this.adapter
                .showSticky(this.stickyBanner)
                .catch(() => !1);
              return (
                this.sendShowAdsInfo({
                  type: "STICKY",
                  action: e ? "DISPLAY" : "ERROR",
                }),
                (this.isStickyPlaying = e),
                this._events.emit("sticky:render", e),
                e && this._trackBannerDisplay(s.$.STICKY),
                e
              );
            });
          }
          refreshSticky() {
            return c(this, void 0, void 0, function* () {
              if (!this.isStickyAvailable)
                return (
                  this._events.emit("close", !1),
                  this._events.emit("sticky:close", !1),
                  !1
                );
              clearInterval(this.stickyRefreshIntervalId),
                this.stickyBanner.refreshInterval &&
                  (this.stickyRefreshIntervalId = window.setInterval(
                    () => this.refreshSticky(),
                    1e3 * this.stickyBanner.refreshInterval
                  )),
                this._events.emit("sticky:refresh"),
                this.sendShowAdsInfo({ type: "STICKY", action: "REQUEST" });
              const e = yield this.adapter
                .refreshSticky(this.stickyBanner)
                .catch(() => !1);
              return (
                this.sendShowAdsInfo({
                  type: "STICKY",
                  action: e ? "DISPLAY" : "ERROR",
                }),
                (this.isStickyPlaying = e),
                this._events.emit("sticky:render", e),
                e && this._trackBannerDisplay(s.$.STICKY),
                e
              );
            });
          }
          closeSticky() {
            return c(this, void 0, void 0, function* () {
              const e = yield this.adapter.closeSticky();
              return (
                (this.isStickyPlaying = !1),
                this._events.emit("close", !0),
                this._events.emit("sticky:close", !0),
                clearInterval(this.stickyRefreshIntervalId),
                e
              );
            });
          }
          _trackBannerDisplay(e) {
            const t = this.adsInfo.limits[e];
            (t.hour.count += 1),
              (t.day.count += 1),
              (t.session.count += 1),
              t.day.timestamp || (t.day.timestamp = Date.now()),
              t.hour.timestamp || (t.hour.timestamp = Date.now()),
              this._saveAdsInfo();
          }
          _checkLimitsExpired(e) {
            let t = !1;
            Object.values(this.adsInfo.limits).forEach((n) => {
              e && (n.session.count = 0),
                l(n.hour.timestamp, 36e5) &&
                  ((n.hour.timestamp = 0), (n.hour.count = 0), (t = !0)),
                l(n.day.timestamp, 864e5) &&
                  ((n.day.timestamp = 0), (n.hour.count = 0), (t = !0));
            }),
              t && this._saveAdsInfo();
          }
          _saveAdsInfo() {
            this.gp._storage.saveAdsInfo(this.adsInfo);
          }
          isBannerLimitReached(e) {
            return (
              this.isBannerLimitTypeReached(e, "hour") ||
              this.isBannerLimitTypeReached(e, "day") ||
              this.isBannerLimitTypeReached(e, "session")
            );
          }
          isBannerLimitTypeReached(e, t) {
            const n = this.banners[e].limits[t];
            return !!n && this.adsInfo.limits[e][t].count >= n;
          }
        }
        function l(e, t) {
          return new Date().getTime() - new Date(e).getTime() > t;
        }
      },
      6388: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => s });
        var i = n(5585),
          r = n.n(i);
        class s {
          constructor() {
            this._events = new (r())();
          }
          on(e, t) {
            this._events.on(e, t);
          }
          off(e, t) {
            this._events.off(e, t);
          }
          once(e, t) {
            this._events.once(e, t);
          }
        }
      },
      1049: (e, t, n) => {
        "use strict";
        function i(e, t, n) {
          return e.replace(/{{hash}}/gi, t).replace(/{{size}}/gi, n);
        }
        n.d(t, { Z: () => i });
      },
      4917: (e, t, n) => {
        "use strict";
        function i({ src: e, check: t }) {
          return new Promise((n, i) => {
            let r = 0;
            if (null == t ? void 0 : t(window)) return void n();
            function s() {
              t ? t(window) && (clearInterval(r), n()) : n();
            }
            if (document.querySelector(`script[src="${e}"]`) && t)
              return void (r = setInterval(s, 100));
            var a = document.getElementsByTagName("script")[0];
            const o = document.createElement("script");
            (o.src = e),
              (o.onload = s),
              (o.onerror = i),
              a.parentNode.insertBefore(o, a),
              t && (r = setInterval(s, 100));
          });
        }
        n.d(t, { Z: () => i });
      },
      6558: (e, t, n) => {
        "use strict";
        n.d(t, { Yd: () => s, kg: () => a, EK: () => o });
        var i,
          r = function (e, t, n, i) {
            if ("a" === n && !i)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? i
              : "a" === n
              ? i.call(e)
              : i
              ? i.value
              : t.get(e);
          };
        class s {
          constructor() {
            i.set(this, "[GamePush]: "),
              (this.isCollectingLogs = !0),
              (this.logs = []),
              (this.log = (...e) => {
                this.collectLogs("log", e), console.log(r(this, i, "f"), ...e);
              }),
              (this.info = (...e) => {
                this.collectLogs("info", e),
                  console.info(r(this, i, "f"), ...e);
              }),
              (this.warn = (...e) => {
                this.collectLogs("warn", e),
                  console.warn(r(this, i, "f"), ...e);
              }),
              (this.error = (...e) => {
                this.collectLogs("error", e),
                  console.error(r(this, i, "f"), ...e);
              });
          }
          stopCollect() {
            (this.isCollectingLogs = !1), (this.logs = []);
          }
          collectLogs(e, t) {
            this.isCollectingLogs && this.logs.push({ type: e, args: t });
          }
        }
        i = new WeakMap();
        let a = new s();
        const o = (e) => (a = e);
      },
      1437: (e, t, n) => {
        "use strict";
        n.d(t, { p: () => r });
        var i = n(8293);
        function r(e) {
          const t = (0, i._)(i.s),
            n = new Image();
          return (
            (n.onload = () => t.done(n)),
            (n.onerror = () => t.abort()),
            (n.onabort = () => t.abort()),
            (n.src = e),
            t.ready
          );
        }
      },
      4835: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        const i = {
          app: { trophy: "https://gs.eponesh.com/sdk/static/icons/trophy.svg" },
          cdn: {
            trophy:
              "https://cdn.eponesh.com/static/64x64/images/achievements/reward.png",
          },
        };
      },
      8293: (e, t, n) => {
        "use strict";
        n.d(t, { s: () => r, _: () => s });
        var i = n(6558);
        const r = { timeout: 5e3 };
        function s({ timeout: e = 0 } = {}) {
          let t = !1;
          const n = {},
            r = new Promise((e, r) => {
              (n.done = (n) => {
                t || ((t = !0), e(n));
              }),
                (n.abort = (e) => {
                  t || ((t = !0), i.kg.error(e), r(e));
                });
            });
          return (
            e &&
              setTimeout(() => {
                t || n.abort(`Timeout ${e}ms exceeded`);
              }, e),
            (n.ready = r),
            n
          );
        }
      },
      5942: (e, t, n) => {
        "use strict";
        var i;
        n.d(t, { z: () => i }),
          (function (e) {
            (e.YANDEX = "YANDEX"),
              (e.VK = "VK"),
              (e.OK = "OK"),
              (e.GAME_MONETIZE = "GAME_MONETIZE"),
              (e.GAME_DISTRIBUTION = "GAME_DISTRIBUTION"),
              (e.CRAZY_GAMES = "CRAZY_GAMES"),
              (e.SMARTMARKET = "SMARTMARKET"),
              (e.GAMEPIX = "GAMEPIX"),
              (e.POKI = "POKI"),
              (e.VK_PLAY = "VK_PLAY"),
              (e.NONE = "NONE");
          })(i || (i = {}));
      },
      584: (e, t, n) => {
        "use strict";
        n.d(t, { P8: () => l, ZP: () => u });
        var i,
          r = function (e, t, n, i) {
            if ("a" === n && !i)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? i
              : "a" === n
              ? i.call(e)
              : i
              ? i.value
              : t.get(e);
          };
        const s =
            "{\n    id\n    iconSmall: icon(w: 48, h: 48, crop: false)\n    icon(w: 256, h: 256, crop: false)\n    tag\n    rare\n    name(lang: $lang)\n    description(lang: $lang)\n    progress\n    maxProgress\n    unlocked\n    lockedIcon(w: 256, h: 256, crop: false)\n    lockedIconSmall: lockedIcon(w: 48, h: 48, crop: false)\n    progressStep\n    isPublished\n    isLockedVisible\n    isLockedDescriptionVisible\n}",
          a =
            "\n    achievementId\n    createdAt\n    progress\n    unlocked\n",
          o = `mutation ($input: UnlockPlayerAchievementInput!, $lang: Lang) {\n    result: UnlockPlayerAchievement(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerAchievement {\n            ${a}\n            achievement ${s}\n        }\n    }\n}`,
          c = `mutation ($input: PlayerSetAchievementProgressInput!, $lang: Lang){\n    result: PlayerSetAchievementProgress(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerAchievement {\n            ${a}\n            achievement ${s}\n        }\n    }\n}`,
          h = `query($lang: Lang) {\n    result: FetchPlayerAchievements {\n        __typename\n        ... on Problem { message }\n        ... on PlayerAchievements {\n            achievements ${s}\n            achievementsGroups { id tag name(lang: $lang) description(lang: $lang) achievements }\n            playerAchievements { ${a} }\n        }\n    }\n}`;
        var l;
        !(function (e) {
          (e.COMMON = "COMMON"),
            (e.UNCOMMON = "UNCOMMON"),
            (e.RARE = "RARE"),
            (e.EPIC = "EPIC"),
            (e.LEGENDARY = "LEGENDARY"),
            (e.MYTHIC = "MYTHIC");
        })(l || (l = {}));
        class u {
          constructor(e) {
            i.set(this, void 0),
              (function (e, t, n, i, r) {
                if ("m" === i)
                  throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                  throw new TypeError(
                    "Private accessor was defined without a setter"
                  );
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                  throw new TypeError(
                    "Cannot write private member to an object whose class did not declare it"
                  );
                "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
              })(this, i, e, "f");
          }
          fetch() {
            return r(this, i, "f").fetch(h);
          }
          setProgress({ id: e, tag: t, progress: n }) {
            return r(this, i, "f").fetch(c, { id: e, tag: t, progress: n });
          }
          unlock({ id: e, tag: t }) {
            return r(this, i, "f").fetch(o, { id: e, tag: t, v: 2 });
          }
        }
        i = new WeakMap();
      },
      9631: (e, t, n) => {
        "use strict";
        n.d(t, { Lb: () => a, ZP: () => g });
        var i,
          r = function (e, t, n, i) {
            if ("a" === n && !i)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? i
              : "a" === n
              ? i.call(e)
              : i
              ? i.value
              : t.get(e);
          };
        const s =
            "{\n    id\n    icon(w: 256, h: 256, crop: false)\n    iconSmall: icon(w: 48, h: 48, crop: false)\n    tag\n    price\n    isSubscription\n    period\n    trialPeriod\n    name(lang: $lang)\n    description(lang: $lang)\n    yandexId\n}",
          a = "productId, tag, payload, gift, subscribed, createdAt, expiredAt",
          o = `{\n    __typename\n    ... on Problem { message }\n    ... on PlayerPurchaseOutput {\n        product ${s}\n        purchase { ${a} }\n    }\n}`,
          c = `query ($input: FindPlayerPurchaseInput!, $lang: Lang) {\n    result: FindPlayerPurchase(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerPurchaseOutput {\n            product ${s}\n        }\n    }\n}`,
          h = `mutation ($input: SyncPlayerPurchasesInput!) {\n    result: SyncPlayerPurchases(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on PlayerProductsPurchasedOutput {\n            purchases { ${a} }\n        }\n    }\n}`,
          l = `mutation ($input: PurchasePlayerPurchaseInput!, $lang: Lang) {\n    result: PurchasePlayerPurchase(input: $input) ${o}\n}`,
          u = `mutation ($input: ConsumePlayerPurchaseInput!, $lang: Lang) {\n    result: ConsumePlayerPurchase(input: $input) ${o}\n}`,
          d = `mutation ($input: CancelPlayerSubscriptionInput!, $lang: Lang) {\n    result: CancelPlayerSubscription(input: $input) ${o}\n}`,
          p = `mutation ($input: ResumePlayerSubscriptionInput!, $lang: Lang) {\n    result: ResumePlayerSubscription(input: $input) ${o}\n}`,
          f = `query ($lang: Lang) {\n    result: FetchPlayerPurchases {\n        __typename\n        ... on Problem { message }\n        ... on PlayerPurchasesOutput {\n            products ${s}\n            playerPurchases { ${a} }\n        }\n    }\n}`;
        class g {
          constructor(e) {
            i.set(this, void 0),
              (function (e, t, n, i, r) {
                if ("m" === i)
                  throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                  throw new TypeError(
                    "Private accessor was defined without a setter"
                  );
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                  throw new TypeError(
                    "Cannot write private member to an object whose class did not declare it"
                  );
                "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
              })(this, i, e, "f");
          }
          sync({ purchases: e, payload: t }) {
            return r(this, i, "f").fetch(h, { purchases: e, payload: t });
          }
          fetch() {
            return r(this, i, "f").fetch(f);
          }
          getPaymentLink(e) {
            return r(this, i, "f").fetch(
              "query ($input: PlayerGetPaymentLinkInput!) {\n    result: PlayerGetPaymentLink(input: $input) {\n        __typename\n        ... on PlayerPaymentLink { link }\n        ... on Problem { message }\n    }\n}",
              e
            );
          }
          purchase({ payload: e, id: t, tag: n }) {
            return r(this, i, "f").fetch(l, { payload: e, id: t, tag: n });
          }
          findProduct({ id: e, tag: t }) {
            return r(this, i, "f").fetch(c, { id: e, tag: t });
          }
          consume({ id: e, tag: t }) {
            return r(this, i, "f").fetch(u, { id: e, tag: t });
          }
          cancelSubscription({ payload: e, id: t, tag: n }) {
            return r(this, i, "f").fetch(d, { payload: e, id: t, tag: n });
          }
          resumeSubscription({ payload: e, id: t, tag: n }) {
            return r(this, i, "f").fetch(p, { payload: e, id: t, tag: n });
          }
        }
        i = new WeakMap();
      },
      9233: (e, t, n) => {
        "use strict";
        var i;
        n.d(t, { $: () => i, iA: () => r }),
          (function (e) {
            (e.PRELOADER = "PRELOADER"),
              (e.FULLSCREEN = "FULLSCREEN"),
              (e.REWARDED = "REWARDED"),
              (e.STICKY = "STICKY");
          })(i || (i = {}));
        const r = {
          appId: "",
          community: "",
          communityLink: "",
          gameLink: "",
          banners: [],
        };
        new WeakMap();
      },
      7802: (e, t, n) => {
        "use strict";
        n.d(t, { S: () => o, Z: () => v });
        var i,
          r = n(4692),
          s = n(9631),
          a = function (e, t, n, i) {
            if ("a" === n && !i)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? i
              : "a" === n
              ? i.call(e)
              : i
              ? i.value
              : t.get(e);
          };
        const o =
            "\n    name(lang: $lang)\n    key\n    type\n    default\n    important\n    variants {\n        value\n        name(lang: $lang)\n    }\n",
          c = `\n    state\n    achievements { id tag progress unlocked createdAt }\n    purchasesList { ${s.Lb} }\n`,
          h = `\n... on Player {\n    ${c}\n    token @include(if: $withToken)\n}\n... on Problem { message }\n`,
          l = `mutation ($input: SyncPlayerInput!, $lang: Lang, $withToken: Boolean!) {\n    result: SyncPlayer(input: $input) {\n        __typename\n        ${h}\n        ... on PlayerSyncConflict {\n            players\n            fields { ${o} }\n        }\n    }\n}`,
          u = `query ($input: GetPlayerInput!, $withToken: Boolean!) {\n    result: GetPlayer(input: $input) {\n        __typename\n        ${h}\n    }\n}`,
          d = `query ($lang: Lang) {\n    result: FetchPlayerFields {\n        __typename\n        ... on Problem { message }\n        ... on ModelFieldsList {\n            items { ${o} }\n        }\n    }\n}`,
          p = `\n    ... on FullPlayersList {\n        players {\n            ${c}\n            isOnline\n        }\n    }\n`,
          f = `query($input: PlayerFetchPlayersInput!) {\n    result: PlayerFetchPlayers(input: $input) { ${(0,
          r.Mn)(p)} }\n}`;
        let g = !0;
        class v {
          constructor(e) {
            i.set(this, void 0),
              (function (e, t, n, i, r) {
                if ("m" === i)
                  throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                  throw new TypeError(
                    "Private accessor was defined without a setter"
                  );
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                  throw new TypeError(
                    "Cannot write private member to an object whose class did not declare it"
                  );
                "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
              })(this, i, e, "f");
          }
          sync({ playerState: e, override: t }, { withToken: n }) {
            (0, r.dX)(e, 1 * r.aI.MB, 2 * r.aI.MB);
            const s = a(this, i, "f").fetch(
              l,
              { playerState: e, override: t, isFirstRequest: g },
              { withToken: n }
            );
            return (g = !1), s;
          }
          getPlayer({ withToken: e }) {
            const t = a(this, i, "f").fetch(
              u,
              { isFirstRequest: g },
              { withToken: e }
            );
            return (g = !1), t;
          }
          fetchFields() {
            return (
              (e = this),
              (t = void 0),
              (r = function* () {
                return a(this, i, "f").fetch(d);
              }),
              new ((n = void 0) || (n = Promise))(function (i, s) {
                function a(e) {
                  try {
                    c(r.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function o(e) {
                  try {
                    c(r.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function c(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value),
                      t instanceof n
                        ? t
                        : new n(function (e) {
                            e(t);
                          })).then(a, o);
                }
                c((r = r.apply(e, t || [])).next());
              })
            );
            var e, t, n, r;
          }
          checkCode({ secretCode: e }) {
            return a(this, i, "f").fetch(
              "query ($input: CheckPlayerCodeInput!) {\n    result: CheckPlayerCode(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on Success { success }\n    }\n}",
              { secretCode: e }
            );
          }
          fetchPlayers({ ids: e }) {
            return a(this, i, "f").fetch(f, { ids: e });
          }
        }
        i = new WeakMap();
      },
      3204: (e, t, n) => {
        "use strict";
        n.d(t, {
          Uo: () => l,
          h$: () => u,
          lR: () => d,
          GH: () => p,
          ZP: () => f,
        });
        var i,
          r = n(9233),
          s = n(7802),
          a = function (e, t, n, i) {
            if ("a" === n && !i)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? i
              : "a" === n
              ? i.call(e)
              : i
              ? i.value
              : t.get(e);
          };
        const o = "\n    key\n    value(lang: $lang)\n    type\n",
          c = `query ($lang: Lang) {\n    result: FetchPlayerProjectConfig {\n        __typename\n        ... on Problem { message }\n        ... on PlayerProjectConfig {\n            isDev\n            isAllowedOrigin\n            config {\n                lang\n                avatarGenerator\n                avatarGeneratorTemplate\n                ymCounterId\n                gtagCounterId\n                showLoader\n                showReqCounter\n            }\n            project {\n                name(lang: $lang)\n                description(lang: $lang)\n                icon(w: 256, h: 256, crop: false)\n                mainChatId\n                enableMainChat\n                achievements {\n                    isLockedVisible\n                    isLockedDescriptionVisible\n                    enableUnlockToast\n                }\n            }\n            platformConfig {\n                appId\n                gameLink\n                community\n                communityLink\n                banners {\n                    type\n                    enabled\n                    bannerId\n                    desktopBannerId\n                    frequency\n                    refreshInterval\n                    maxWidth\n                    maxHeight\n                    maxWidthDimension\n                    maxHeightDimension\n                    desktopMaxWidth\n                    desktopMaxHeight\n                    desktopMaxWidthDimension\n                    desktopMaxHeightDimension\n                    fitCanvas\n                    position\n                    limits { hour day session }\n                    useNative\n                }\n            }\n            playerFields { ${s.S} }\n            serverTime\n            gameVariables { ${o} }\n            acl {\n                canUploadImages\n                canUploadFiles\n                canConnectOnline\n                canCollectStats\n            }\n        }\n    }\n}`,
          h = `query ($lang: Lang) {\n    result: FetchPlayerProjectVariables {\n        __typename\n        ... on Problem { message }\n        ... on ProjectVariablesList {\n            items { ${o} }\n        }\n    }\n}`;
        var l;
        !(function (e) {
          (e.EN = "en"),
            (e.FR = "fr"),
            (e.IT = "it"),
            (e.DE = "de"),
            (e.ES = "es"),
            (e.ZH = "zh"),
            (e.PT = "pt"),
            (e.KO = "ko"),
            (e.JA = "ja"),
            (e.RU = "ru"),
            (e.TR = "tr"),
            (e.AR = "ar"),
            (e.HI = "hi"),
            (e.ID = "id");
        })(l || (l = {}));
        const u = {
            [l.EN]: "en-US",
            [l.FR]: "fr-FR",
            [l.IT]: "it-IT",
            [l.DE]: "de-DE",
            [l.ES]: "es-ES",
            [l.ZH]: "zh-CN",
            [l.PT]: "pt-BR",
            [l.KO]: "ko-KR",
            [l.JA]: "ja-JP",
            [l.RU]: "ru-RU",
            [l.TR]: "tr-TR",
            [l.AR]: "ar-SA",
            [l.HI]: "hi-IN",
            [l.ID]: "id-ID",
          },
          d = {
            isDev: !1,
            isAllowedOrigin: !0,
            config: {
              lang: l.EN,
              avatarGenerator: "dicebear_retro",
              avatarGeneratorTemplate: "",
            },
            platformConfig: r.iA,
            playerFields: [],
            serverTime: new Date().toISOString(),
            gameVariables: [],
            acl: {
              canUploadFiles: !1,
              canUploadImages: !1,
              canConnectOnline: !1,
              canCollectStats: !1,
            },
            project: {
              icon: "",
              description: "",
              name: "",
              enableMainChat: !1,
              mainChatId: 0,
              achievements: {
                isLockedVisible: !1,
                isLockedDescriptionVisible: !1,
                enableUnlockToast: !1,
              },
            },
          },
          p = {
            limits: {
              [r.$.PRELOADER]: {
                hour: { timestamp: 0, count: 0 },
                day: { timestamp: 0, count: 0 },
                session: { count: 0 },
              },
              [r.$.FULLSCREEN]: {
                hour: { timestamp: 0, count: 0 },
                day: { timestamp: 0, count: 0 },
                session: { count: 0 },
              },
              [r.$.REWARDED]: {
                hour: { timestamp: 0, count: 0 },
                day: { timestamp: 0, count: 0 },
                session: { count: 0 },
              },
              [r.$.STICKY]: {
                hour: { timestamp: 0, count: 0 },
                day: { timestamp: 0, count: 0 },
                session: { count: 0 },
              },
            },
          };
        class f {
          constructor(e) {
            i.set(this, void 0),
              (function (e, t, n, i, r) {
                if ("m" === i)
                  throw new TypeError("Private method is not writable");
                if ("a" === i && !r)
                  throw new TypeError(
                    "Private accessor was defined without a setter"
                  );
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                  throw new TypeError(
                    "Cannot write private member to an object whose class did not declare it"
                  );
                "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
              })(this, i, e, "f");
          }
          fetchConfig() {
            return a(this, i, "f").fetch(c);
          }
          fetchVariables() {
            return a(this, i, "f").fetch(h);
          }
        }
        i = new WeakMap();
      },
      4692: (e, t, n) => {
        "use strict";
        n.d(t, { Mn: () => r, tv: () => s, aI: () => a, dX: () => c });
        var i = n(6558);
        const r = (e) =>
            `\n    __typename\n    ... on Problem { message }\n    ${e}\n`,
          s = (e) => {
            if ("Problem" === (null == e ? void 0 : e.__typename))
              throw e.message;
          },
          a = { MB: 1048576 },
          o = new TextEncoder(),
          c = (e, t, n) => {
            const r = o.encode(JSON.stringify(e)).length;
            if (
              (r > t &&
                i.kg.warn(
                  `Maximum size exceeded: sending data must be maximum 1MB, your size is: ${
                    Math.round((r / 1024 / 1024) * 100) / 100
                  } MB`
                ),
              r > n)
            )
              throw new Error("max_data_limit_exceeded");
          };
      },
    },
    s = {};
  function a(e) {
    var t = s[e];
    if (void 0 !== t) return t.exports;
    var n = (s[e] = { id: e, exports: {} });
    return r[e].call(n.exports, n, n.exports, a), n.exports;
  }
  (a.m = r),
    (a.amdO = {}),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (a.t = function (n, i) {
      if ((1 & i && (n = this(n)), 8 & i)) return n;
      if ("object" == typeof n && n) {
        if (4 & i && n.__esModule) return n;
        if (16 & i && "function" == typeof n.then) return n;
      }
      var r = Object.create(null);
      a.r(r);
      var s = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var o = 2 & i && n; "object" == typeof o && !~e.indexOf(o); o = t(o))
        Object.getOwnPropertyNames(o).forEach((e) => (s[e] = () => n[e]));
      return (s.default = () => n), a.d(r, s), r;
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.f = {}),
    (a.e = (e) =>
      Promise.all(Object.keys(a.f).reduce((t, n) => (a.f[n](e, t), t), []))),
    (a.u = (e) =>
      (({
        47: "i18n/pt-json",
        66: "i18n/tr-json",
        70: "platforms/platform.vkplay",
        72: "utils/centrifuge.protobuf",
        159: "i18n/it-json",
        369: "platforms/platform.gm",
        433: "platforms/platform.cg",
        459: "i18n/de-json",
        460: "gamepush.overlay",
        477: "eponesh-platform.gp",
        513: "i18n/id-json",
        552: "platforms/platform.smartmarket",
        606: "i18n/devtools-ru-json",
        614: "platforms/platform.ok",
        637: "i18n/hi-json",
        670: "i18n/ko-json",
        746: "i18n/fr-json",
        755: "platforms/platform.yandex",
        808: "i18n/ar-json",
        848: "i18n/ja-json",
        851: "platforms/platform.vk.app",
        860: "platforms/platform.gd",
        863: "gamepush.devtools",
        897: "i18n/devtools-en-json",
        911: "platforms/platform.vk",
        929: "i18n/zh-json",
        932: "i18n/en-json",
        964: "i18n/ru-json",
        968: "i18n/es-json",
      }[e] || e) +
      "." +
      a.h() +
      ".js")),
    (a.h = () => "v1"),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n = {}),
    (i = "game-score-sdk:"),
    (a.l = (e, t, r, s) => {
      if (n[e]) n[e].push(t);
      else {
        var o, c;
        if (void 0 !== r)
          for (
            var h = document.getElementsByTagName("script"), l = 0;
            l < h.length;
            l++
          ) {
            var u = h[l];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == i + r
            ) {
              o = u;
              break;
            }
          }
        o ||
          ((c = !0),
          ((o = document.createElement("script")).charset = "utf-8"),
          (o.timeout = 120),
          a.nc && o.setAttribute("nonce", a.nc),
          o.setAttribute("data-webpack", i + r),
          (o.src = e),
          0 !== o.src.indexOf(window.location.origin + "/") &&
            (o.crossOrigin = "anonymous")),
          (n[e] = [t]);
        var d = (t, i) => {
            (o.onerror = o.onload = null), clearTimeout(p);
            var r = n[e];
            if (
              (delete n[e],
              o.parentNode && o.parentNode.removeChild(o),
              r && r.forEach((e) => e(i)),
              t)
            )
              return t(i);
          },
          p = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: o }),
            12e4
          );
        (o.onerror = d.bind(null, o.onerror)),
          (o.onload = d.bind(null, o.onload)),
          c && document.head.appendChild(o);
      }
    }),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (a.p = e);
    })(),
    (() => {
      var e = { 742: 0, 821: 0 };
      a.f.j = (t, n) => {
        var i = a.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) n.push(i[2]);
          else {
            var r = new Promise((n, r) => (i = e[t] = [n, r]));
            n.push((i[2] = r));
            var s = a.p + a.u(t),
              o = new Error();
            a.l(
              s,
              (n) => {
                if (a.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var r = n && ("load" === n.type ? "missing" : n.type),
                    s = n && n.target && n.target.src;
                  (o.message =
                    "Loading chunk " + t + " failed.\n(" + r + ": " + s + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = r),
                    (o.request = s),
                    i[1](o);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, n) => {
          var i,
            r,
            [s, o, c] = n,
            h = 0;
          for (i in o) a.o(o, i) && (a.m[i] = o[i]);
          for (c && c(a), t && t(n); h < s.length; h++)
            (r = s[h]), a.o(e, r) && e[r] && e[r][0](), (e[s[h]] = 0);
        },
        n = (self.webpackChunkgame_score_sdk =
          self.webpackChunkgame_score_sdk || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (() => {
      "use strict";
      a(2096);
      var e = a(4943),
        t = a.n(e),
        n = a(4293),
        i = a(5942);
      var r,
        s,
        o,
        c = a(8293),
        h = a(7802),
        l = a(4692),
        u = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        },
        d = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        },
        p = function (e, t, n, i, r) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n), n;
        };
      const f = "... on Success { success }";
      class g {
        constructor(e, t, n, i, a) {
          (this.apiUrl = e),
            (this.projectId = t),
            (this.publicToken = n),
            (this.lang = i),
            (this.platformType = a),
            r.set(this, ""),
            s.set(this, 0),
            o.set(this, () => {});
        }
        get reqCounter() {
          return d(this, s, "f");
        }
        set reqCounter(e) {
          p(this, s, e, "f"), d(this, o, "f").call(this, e);
        }
        addCounterListener(e) {
          p(this, o, e, "f");
        }
        setLang(e) {
          this.lang = e;
        }
        setPlayerData(e) {
          p(this, r, btoa(JSON.stringify(e)), "f");
        }
        ping(e) {
          fetch(`${this.apiUrl}/api/ping?t=${e}`);
        }
        signQuery(e = null) {
          return u(this, void 0, void 0, function* () {
            const t = {
                projectId: this.projectId,
                query: v(e),
                token: this.publicToken,
              },
              n = yield (function (e) {
                return (
                  (t = this),
                  (n = void 0),
                  (r = function* () {
                    const t = new TextEncoder().encode(e),
                      n = yield crypto.subtle.digest("SHA-256", t);
                    return Array.from(new Uint8Array(n))
                      .map((e) => e.toString(16).padStart(2, "0"))
                      .join("");
                  }),
                  new ((i = void 0) || (i = Promise))(function (e, s) {
                    function a(e) {
                      try {
                        c(r.next(e));
                      } catch (e) {
                        s(e);
                      }
                    }
                    function o(e) {
                      try {
                        c(r.throw(e));
                      } catch (e) {
                        s(e);
                      }
                    }
                    function c(t) {
                      var n;
                      t.done
                        ? e(t.value)
                        : ((n = t.value),
                          n instanceof i
                            ? n
                            : new i(function (e) {
                                e(n);
                              })).then(a, o);
                    }
                    c((r = r.apply(t, n || [])).next());
                  })
                );
                var t, n, i, r;
              })(JSON.stringify(t));
            return { input: e, hash: n };
          });
        }
        fetch(e, t, n) {
          return u(this, void 0, void 0, function* () {
            return this.fetchMany(e, t, n).then(
              ({ result: e }) => ((0, l.tv)(e), e)
            );
          });
        }
        fetchMany(e, t, n = {}) {
          return u(this, void 0, void 0, function* () {
            const { input: i, hash: s } = yield this.signQuery(t);
            let a,
              o = {};
            const c = JSON.stringify({
                query: e,
                variables: Object.assign(
                  { input: i, lang: this.lang.toUpperCase() },
                  n
                ),
              }),
              h = (function (e = {}) {
                return Object.keys(e).filter((t) => e[t] instanceof File);
              })(t);
            if (h.length > 0) {
              (a = new FormData()), a.append("operations", c);
              const e = {};
              h.forEach((t, n) => {
                e[n] = [`variables.input.${t}`];
              }),
                a.append("map", JSON.stringify(e)),
                h.forEach((e, n) => {
                  a.append(n, t[e]);
                });
            } else (o = { "Content-Type": "application/json;charset=utf-8" }), (a = c);
            return fetch(`${this.apiUrl}/graphql`, {
              body: a,
              method: "GET",
              headers: Object.assign(Object.assign({}, o), {
                "X-Transaction-Token": s,
                "X-Platform": this.platformType,
                "X-Project-ID": String(this.projectId),
                "X-Project-Token": this.publicToken,
                "X-Language": this.lang,
                "X-Player-Data": d(this, r, "f"),
              }),
            })
              .catch((e) => {
                if (
                  String(null == e ? void 0 : e.message).includes(
                    "Failed to fetch"
                  )
                )
                  throw "connection_error";
                throw e;
              })
              .then((e) =>
                u(this, void 0, void 0, function* () {
                  if (!e.ok) {
                    const t = yield e.text();
                    throw new Error(`${e.status}. ${t}`);
                  }
                  const t = yield e.json();
                  return (
                    Object.values(t.data).forEach((e) => {
                      "Problem" != e.__typename && this.reqCounter++;
                    }),
                    t
                  );
                })
              )
              .then((e) => e.data);
          });
        }
      }
      function v(e) {
        var t;
        return Array.isArray(e)
          ? e.map(v)
          : null !== e && "object" == typeof e
          ? (Object.getOwnPropertySymbols(e).length > 0 &&
              (e = JSON.parse(JSON.stringify(e))),
            (t = {}),
            Object.keys(e)
              .sort()
              .forEach((n) => (t[n] = v(e[n]))),
            t)
          : e;
      }
      (r = new WeakMap()), (s = new WeakMap()), (o = new WeakMap());
      var m,
        y = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      const w =
          "\n    id\n    tags\n    projectId\n    capacity\n    ownerId\n    name(lang: $lang)\n    description(lang: $lang)\n    private\n    visible\n    hasPassword\n    membersCount\n",
        b = `... on ChannelInvitesList {\n    items {\n        channel { ${w} }\n        channelId\n        playerFrom\n        date\n    }\n}`,
        P = `... on ChannelInvitesList {\n    items {\n        channel { ${w} }\n        channelId\n        playerTo\n        date\n    }\n}`,
        _ = `query($input: PlayerFetchPlayerInvitesInput!, $lang: Lang) {\n    result: PlayerFetchInvites(input: $input) { ${(0,
        l.Mn)(b)} }\n}`,
        I = `query($input: PlayerFetchPlayerSentInvitesInput!, $lang: Lang) {\n    result: PlayerFetchSentInvites(input: $input) { ${(0,
        l.Mn)(P)} }\n}`,
        S = `query($input: PlayerFetchChannelInvitesInput!) {\n    result: PlayerFetchChannelInvites(input: $input) { ${(0,
        l.Mn)(
          "... on ChannelInvitesList {\n    items {\n        channelId\n        playerTo\n        playerFrom\n        date\n    }\n}"
        )} }\n}`,
        k = `mutation($input: PlayerSendInviteToChannelInput!) {\n    result: PlayerSendInviteToChannel(input: $input) { ${(0,
        l.Mn)(
          "... on ChannelInvite {\n    channelId\n    playerToId\n    playerFromId\n    date\n }"
        )} }\n}`,
        E = `mutation($input: PlayerCancelInviteToChannelInput!) {\n    result: PlayerCancelInviteToChannel(input: $input) { ${(0,
        l.Mn)(f)} }\n}`,
        C = `mutation($input: PlayerAcceptInviteToChannelInput!) {\n    result: PlayerAcceptInviteToChannel(input: $input) { ${(0,
        l.Mn)(f)} }\n}`,
        $ = `mutation($input: PlayerRejectInviteToChannelInput!) {\n    result: PlayerRejectInviteToChannel(input: $input) { ${(0,
        l.Mn)(f)} }\n}`;
      class M {
        constructor(e) {
          m.set(this, void 0),
            (function (e, t, n, i, r) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
            })(this, m, e, "f");
        }
        fetchInvites({ limit: e, offset: t }) {
          return y(this, m, "f").fetch(_, { limit: e, offset: t });
        }
        fetchChannelInvites({ channelId: e, limit: t, offset: n }) {
          return y(this, m, "f").fetch(S, {
            channelId: e,
            limit: t,
            offset: n,
          });
        }
        fetchSentInvites({ limit: e, offset: t }) {
          return y(this, m, "f").fetch(I, { limit: e, offset: t });
        }
        sendInvite({ channelId: e, playerId: t }) {
          return y(this, m, "f").fetch(k, { channelId: e, playerId: t });
        }
        cancelInvite({ channelId: e, playerId: t }) {
          return y(this, m, "f").fetch(E, { channelId: e, playerId: t });
        }
        acceptInvite({ channelId: e }) {
          return y(this, m, "f").fetch(C, { channelId: e });
        }
        rejectInvite({ channelId: e }) {
          return y(this, m, "f").fetch($, { channelId: e });
        }
      }
      m = new WeakMap();
      var T,
        R = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      const j =
          "\n    canViewMessages\n    canAddMessage\n    canEditMessage\n    canDeleteMessage\n    canViewMembers\n    canInvitePlayer\n    canKickPlayer\n    canAcceptJoinRequest\n    canMutePlayer\n",
        x = `\n    id\n    tags\n    messageTags\n    projectId\n    capacity\n    ownerId\n    name(lang: $lang)\n    description(lang: $lang)\n    private\n    visible\n    permanent\n    hasPassword\n    password\n    templateId\n    membersCount\n    membersOnlineCount\n    isJoined\n    isRequestSent\n    isInvited\n    mute { isMuted, unmuteAt }\n    ownerAcl { ${j} }\n    memberAcl { ${j} }\n    guestAcl { ${j} }\n`,
        O = `... on Channel { ${x} }`,
        A = `... on ChannelsList {\n    items { ${x} }\n}`,
        L = `query($input: PlayerFetchChannelInput!, $lang: Lang) {\n    result: PlayerFetchChannel(input: $input) { ${(0,
        l.Mn)(O)} }\n}`,
        F = `query($input: PlayerFetchChannelsInput!, $lang: Lang) {\n    result: PlayerFetchChannels(input: $input) { ${(0,
        l.Mn)(A)} }\n}`,
        D = `mutation($input: PlayerCreateChannelInput!, $lang: Lang) {\n    result: PlayerCreateChannel(input: $input) { ${(0,
        l.Mn)(O)} }\n}`,
        N = `mutation($input: PlayerUpdateChannelInput!, $lang: Lang) {\n    result: PlayerUpdateChannel(input: $input) { ${(0,
        l.Mn)(O)} }\n}`,
        q = `mutation($input: PlayerDeleteChannelInput!) {\n    result: PlayerDeleteChannel(input: $input) { ${(0,
        l.Mn)(f)} }\n}`;
      class B {
        constructor(e) {
          T.set(this, void 0),
            (function (e, t, n, i, r) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
            })(this, T, e, "f");
        }
        fetchChannel({ channelId: e }) {
          return R(this, T, "f").fetch(L, { channelId: e }).then(J);
        }
        fetchChannels({
          ids: e,
          onlyJoined: t,
          onlyOwned: n,
          tags: i,
          search: r,
          limit: s,
          offset: a,
        }) {
          return R(this, T, "f")
            .fetch(F, {
              ids: e,
              onlyJoined: t,
              onlyOwned: n,
              tags: i,
              search: r,
              limit: s,
              offset: a,
            })
            .then(U);
        }
        createChannel({
          template: e,
          tags: t,
          capacity: n,
          name: i,
          description: r,
          password: s,
          ownerAcl: a,
          memberAcl: o,
          guestAcl: c,
          visible: h,
          private: l,
        }) {
          return R(this, T, "f")
            .fetch(D, {
              template: e,
              tags: t,
              capacity: n,
              name: i,
              description: r,
              password: s,
              ownerAcl: a,
              memberAcl: o,
              guestAcl: c,
              visible: h,
              private: l,
            })
            .then(J);
        }
        updateChannel({
          channelId: e,
          tags: t,
          capacity: n,
          name: i,
          description: r,
          password: s,
          ownerAcl: a,
          memberAcl: o,
          guestAcl: c,
          ownerId: h,
          visible: l,
          private: u,
        }) {
          return R(this, T, "f")
            .fetch(N, {
              channelId: e,
              tags: t,
              capacity: n,
              name: i,
              description: r,
              password: s,
              ownerAcl: a,
              memberAcl: o,
              guestAcl: c,
              ownerId: h,
              visible: l,
              private: u,
            })
            .then(J);
        }
        deleteChannel({ channelId: e }) {
          return R(this, T, "f").fetch(q, { channelId: e });
        }
      }
      function J(e) {
        return (e.isMuted = e.mute.isMuted), e;
      }
      function U(e) {
        return (e.items = e.items.map(J)), e;
      }
      T = new WeakMap();
      var W,
        z = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      const G = `... on ChannelJoinRequestsList {\n    items {\n        date\n        channelId\n        channel { ${x} }\n    }\n}`,
        K = `query($input: PlayerFetchChannelJoinRequestsInput!) {\n    result: PlayerFetchChannelJoinRequests(input: $input) { ${(0,
        l.Mn)(
          "... on ChannelJoinRequestsList {\n    items {\n        channelId\n        player\n        date\n    }\n}"
        )} }\n}`,
        Z = `query($input: PlayerFetchPlayerSentJoinRequestsInput!, $lang: Lang) {\n    result: PlayerFetchSentJoinRequests(input: $input) { ${(0,
        l.Mn)(G)} }\n}`,
        V = `mutation($input: PlayerAcceptJoinRequestToChannelInput!) {\n    result: PlayerAcceptJoinRequestToChannel(input: $input) { ${(0,
        l.Mn)(
          "... on ChannelMember {\n    id\n    state\n    channelId\n    isOnline\n    mute {\n        isMuted\n        unmuteAt\n    }\n}"
        )} }\n}`,
        Y = `mutation($input: PlayerRejectJoinRequestToChannelInput!) {\n    result: PlayerRejectJoinRequestToChannel(input: $input) { ${(0,
        l.Mn)(f)} }\n}`;
      class H {
        constructor(e) {
          W.set(this, void 0),
            (function (e, t, n, i, r) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
            })(this, W, e, "f");
        }
        fetchJoinRequests({ channelId: e, search: t, limit: n, offset: i }) {
          return z(this, W, "f").fetch(K, {
            channelId: e,
            search: t,
            limit: n,
            offset: i,
          });
        }
        fetchSentJoinRequests({ limit: e, offset: t }) {
          return z(this, W, "f").fetch(Z, { limit: e, offset: t });
        }
        acceptJoinRequest({ channelId: e, playerId: t }) {
          return z(this, W, "f").fetch(V, { channelId: e, playerId: t });
        }
        rejectJoinRequest({ channelId: e, playerId: t }) {
          return z(this, W, "f").fetch(Y, { channelId: e, playerId: t });
        }
      }
      W = new WeakMap();
      var X,
        Q = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      const ee = `mutation($input: PlayerMutePlayerInChannelInput!) {\n    result: PlayerMutePlayerInChannel(input: $input) { ${(0,
        l.Mn)(f)} }\n}`,
        te = `mutation($input: PlayerUnmutePlayerInChannelInput!) {\n    result: PlayerUnmutePlayerInChannel(input: $input) { ${(0,
        l.Mn)(f)} }\n}`,
        ne = `query($input: PlayerFetchChannelMembersInput!) {\n    result: PlayerFetchChannelMembers(input: $input) { ${(0,
        l.Mn)(
          "... on ChannelMembersList {\n    players {\n        id\n        state\n        isOnline\n        mute {\n            isMuted\n            unmuteAt\n        }\n    }\n}"
        )} }\n}`,
        ie = `mutation($input: PlayerKickFromChannelInput!) {\n    result: PlayerKickFromChannel(input: $input) { ${(0,
        l.Mn)(f)} }\n}`,
        re = `mutation($input: PlayerJoinChannelInput!) {\n    result: PlayerJoinChannel(input: $input) { ${(0,
        l.Mn)(f)} }\n}`,
        se = `mutation($input: PlayerLeaveChannelInput!) {\n    result: PlayerLeaveChannel(input: $input) { ${(0,
        l.Mn)(f)} }\n}`,
        ae = `mutation($input: PlayerCancelJoinChannelInput!) {\n    result: PlayerCancelJoinChannel(input: $input) { ${(0,
        l.Mn)(f)} }\n}`;
      class oe {
        constructor(e) {
          X.set(this, void 0),
            (function (e, t, n, i, r) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
            })(this, X, e, "f");
        }
        mute({ channelId: e, playerId: t, unmuteAt: n }) {
          return Q(this, X, "f").fetch(ee, {
            channelId: e,
            playerId: t,
            unmuteAt: n,
          });
        }
        unmute({ channelId: e, playerId: t }) {
          return Q(this, X, "f").fetch(te, { channelId: e, playerId: t });
        }
        fetchMembers({
          channelId: e,
          onlyOnline: t,
          search: n,
          limit: i,
          offset: r,
        }) {
          return Q(this, X, "f").fetch(ne, {
            channelId: e,
            onlyOnline: t,
            search: n,
            limit: i,
            offset: r,
          });
        }
        join({ channelId: e, password: t }) {
          return Q(this, X, "f").fetch(re, { channelId: e, password: t });
        }
        cancelJoin({ channelId: e }) {
          return Q(this, X, "f").fetch(ae, { channelId: e });
        }
        leave({ channelId: e }) {
          return Q(this, X, "f").fetch(se, { channelId: e });
        }
        kick({ channelId: e, playerId: t }) {
          return Q(this, X, "f").fetch(ie, { channelId: e, playerId: t });
        }
      }
      X = new WeakMap();
      var ce,
        he = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      const le =
          "\n    id\n    channelId\n    authorId\n    text\n    tags\n    player\n    createdAt\n",
        ue = `... on ChannelMessage { ${le} }`,
        de = `... on ChannelMessagesList {\n    items { ${le} }\n}`,
        pe = `query($input: PlayerFetchChannelMessagesInput!) {\n    result: PlayerFetchChannelMessages(input: $input) { ${(0,
        l.Mn)(de)} }\n}`,
        fe = `query($input: PlayerFetchPersonalMessagesInput!) {\n    result: PlayerFetchPersonalMessages(input: $input) { ${(0,
        l.Mn)(de)} }\n}`,
        ge = `query($input: PlayerFetchFeedMessagesInput!) {\n    result: PlayerFetchFeedMessages(input: $input) { ${(0,
        l.Mn)(de)} }\n}`,
        ve = `mutation($input: PlayerSendMessageInput!) {\n    result: PlayerSendMessage(input: $input) { ${(0,
        l.Mn)(ue)} }\n}`,
        me = `mutation($input: PlayerSendFeedMessageInput!) {\n    result: PlayerSendFeedMessage(input: $input) { ${(0,
        l.Mn)(ue)} }\n}`,
        ye = `mutation($input: PlayerSendPersonalMessageInput!) {\n    result: PlayerSendPersonalMessage(input: $input) { ${(0,
        l.Mn)(ue)} }\n}`,
        we = `mutation($input: PlayerEditMessageInput!) {\n    result: PlayerEditMessage(input: $input) { ${(0,
        l.Mn)(ue)} }\n}`,
        be = `mutation($input: PlayerDeleteMessageInput!) {\n    result: PlayerDeleteMessage(input: $input) { ${(0,
        l.Mn)(f)} }\n}`;
      class Pe {
        constructor(e) {
          ce.set(this, void 0),
            (function (e, t, n, i, r) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
            })(this, ce, e, "f");
        }
        fetchMessages({ channelId: e, tags: t, limit: n, offset: i }) {
          return he(this, ce, "f").fetch(pe, {
            channelId: e,
            tags: t,
            limit: n,
            offset: i,
          });
        }
        fetchPersonalMessages({ playerId: e, tags: t, limit: n, offset: i }) {
          return he(this, ce, "f").fetch(fe, {
            playerId: e,
            tags: t,
            limit: n,
            offset: i,
          });
        }
        fetchFeedMessages({
          playerId: e,
          authorId: t,
          tags: n,
          limit: i,
          offset: r,
        }) {
          return he(this, ce, "f").fetch(ge, {
            playerId: e,
            authorId: t,
            tags: n,
            limit: i,
            offset: r,
          });
        }
        sendMessage({ channelId: e, tags: t, text: n }) {
          return he(this, ce, "f").fetch(ve, {
            channelId: e,
            tags: t,
            text: n,
          });
        }
        sendFeedMessage({ playerId: e, text: t, tags: n }) {
          return he(this, ce, "f").fetch(me, { playerId: e, text: t, tags: n });
        }
        sendPersonalMessage({ playerId: e, text: t, tags: n }) {
          return he(this, ce, "f").fetch(ye, { playerId: e, text: t, tags: n });
        }
        editMessage({ messageId: e, text: t }) {
          return he(this, ce, "f").fetch(we, { messageId: e, text: t });
        }
        deleteMessage({ messageId: e }) {
          return he(this, ce, "f").fetch(be, { messageId: e });
        }
      }
      ce = new WeakMap();
      var _e,
        Ie = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      class Se {
        constructor(e) {
          _e.set(this, void 0),
            (function (e, t, n, i, r) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
            })(this, _e, e, "f"),
            (this.channels = new B(Ie(this, _e, "f"))),
            (this.messages = new Pe(Ie(this, _e, "f"))),
            (this.members = new oe(Ie(this, _e, "f"))),
            (this.invites = new M(Ie(this, _e, "f"))),
            (this.joinRequests = new H(Ie(this, _e, "f")));
        }
        ping(e) {
          Ie(this, _e, "f").ping(e);
        }
      }
      _e = new WeakMap();
      class ke {
        constructor(e, t) {
          (this.config = e), (this.adapter = t);
        }
        get hasIntegratedAuth() {
          return this.adapter.hasIntegratedAuth;
        }
        get isSecretCodeAuthAvailable() {
          return this.adapter.isSecretCodeAuthAvailable;
        }
        get _hasAuthModal() {
          return this.adapter._hasAuthModal;
        }
        get isExternalLinksAllowed() {
          return this.adapter.isExternalLinksAllowed;
        }
        get type() {
          return this.adapter.type;
        }
        get availableSocialNetworks() {
          return this.adapter.socialNetworks;
        }
        getSDK() {
          return this.adapter.getSDK();
        }
        getNativeSDK() {
          return this.adapter.getNativeSDK();
        }
        requestPermissions(e) {
          return (
            (t = this),
            (n = void 0),
            (r = function* () {
              return this.adapter.requestPermissions(e);
            }),
            new ((i = void 0) || (i = Promise))(function (e, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(t) {
                var n;
                t.done
                  ? e(t.value)
                  : ((n = t.value),
                    n instanceof i
                      ? n
                      : new i(function (e) {
                          e(n);
                        })).then(a, o);
              }
              c((r = r.apply(t, n || [])).next());
            })
          );
          var t, n, i, r;
        }
      }
      var Ee = a(3379),
        Ce = a.n(Ee),
        $e = a(8205);
      Ce()($e.Z, { insert: "head", singleton: !1 }), $e.Z.locals;
      var Me,
        Te = a(6558),
        Re = a(3204),
        je = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        },
        xe = function (e, t, n, i, r) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n), n;
        },
        Oe = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      class Ae {
        constructor(e = []) {
          (this.storages = e),
            Me.set(this, ""),
            (this.isEmptyOnBoot = !0),
            (this.temp = {});
          const t = (0, c._)();
          (this.ready = t.ready),
            Promise.all([this._get(e, "context"), this._get(e, "config")]).then(
              ([e, n]) => {
                xe(this, Me, e || "", "f"), (this.isEmptyOnBoot = !n), t.done();
              }
            );
        }
        get localStorages() {
          return this.storages.filter((e) => !0 === e.isLocal);
        }
        _get(e, t) {
          const n = (0, c._)();
          return (
            Promise.all(
              this.storages.map((e) => {
                const n = (0, c._)(c.s);
                return (
                  e.get(t).then(n.done).catch(n.abort),
                  n.ready.catch((e) => (Te.kg.warn(e), null))
                );
              })
            ).then((e) => n.done(e.find(Boolean))),
            n.ready
          );
        }
        _set(e, t, n) {
          return Promise.all(e.map((e) => e.set(t, n)));
        }
        set(e, t, n) {
          return this._set(e, `${t}${Oe(this, Me, "f")}`, n);
        }
        get(e, t) {
          return this._get(e, `${t}${Oe(this, Me, "f")}`);
        }
        isEmptyContext() {
          return !Oe(this, Me, "f");
        }
        setContext(e) {
          xe(this, Me, e, "f"),
            this._set(this.localStorages, "context", Oe(this, Me, "f"));
        }
        migrateToContext(e) {
          return je(this, void 0, void 0, function* () {
            xe(this, Me, "", "f");
            const [t, n, i] = yield Promise.all([
                this.loadPlayer(),
                this.loadSecretCode(),
                this.loadLanguage(),
              ]),
              r = n || (null == t ? void 0 : t.secretCode);
            return (
              xe(this, Me, e, "f"),
              yield Promise.all([
                this.savePlayer(t),
                this.saveSecretCode(r),
                this.saveLanguage(i),
              ]),
              xe(this, Me, "", "f"),
              yield Promise.all([
                this.savePlayer(null),
                this.saveSecretCode(null),
                this.saveLanguage(null),
              ]),
              [t, r]
            );
          });
        }
        clearContext(e) {
          return je(this, void 0, void 0, function* () {
            const t = Oe(this, Me, "f");
            xe(this, Me, e, "f"),
              yield Promise.all([
                this.savePlayer(null),
                this.saveSecretCode(null),
                this.saveLanguage(null),
              ]),
              xe(this, Me, t, "f");
          });
        }
        extractFromContext(e) {
          return je(this, void 0, void 0, function* () {
            const t = Oe(this, Me, "f");
            xe(this, Me, e, "f");
            const [n, i, r] = yield Promise.all([
                this.loadPlayer(),
                this.loadSecretCode(),
                this.loadLanguage(),
              ]),
              s = i || (null == n ? void 0 : n.secretCode);
            return xe(this, Me, t, "f"), [n, s, r];
          });
        }
        copyFromContext(e, t) {
          return je(this, void 0, void 0, function* () {
            const n = Oe(this, Me, "f"),
              [i, r, s] = yield this.extractFromContext(e);
            xe(this, Me, t, "f"),
              yield Promise.all([
                this.savePlayer(i),
                this.saveSecretCode(r),
                this.saveLanguage(s),
              ]),
              xe(this, Me, n, "f");
          });
        }
        loadPlayer() {
          return this.get(this.storages, "players").then(([e] = [null]) => e);
        }
        savePlayer(e) {
          return this.set(this.storages, "players", [e]).catch(Te.kg.warn);
        }
        loadSecretCode() {
          return this.get(this.localStorages, "sk").catch(Te.kg.warn);
        }
        saveSecretCode(e) {
          return this.set(this.localStorages, "sk", e).catch(Te.kg.warn);
        }
        loadLanguage() {
          return this.get(this.localStorages, "lang").catch(
            (e) => (Te.kg.warn(e), null)
          );
        }
        saveLanguage(e) {
          return this.set(this.localStorages, "lang", e).catch(Te.kg.warn);
        }
        loadConfig() {
          return this._get(this.localStorages, "config")
            .then((e) => Object.assign(Object.assign({}, Re.lR), e))
            .catch((e) => (Te.kg.warn(e), Re.lR));
        }
        saveConfig(e) {
          return this._set(this.localStorages, "config", e).catch(Te.kg.warn);
        }
        loadAdsInfo() {
          const e = this._get(this.localStorages, "adsInfo")
            .then((e) => Object.assign(Object.assign({}, Re.GH), e))
            .catch((e) => (Te.kg.warn(e), Re.GH));
          return e.then((e) => (this.temp.adsInfo = e)), e;
        }
        saveAdsInfo(e) {
          return this._set(this.localStorages, "adsInfo", e).catch(Te.kg.warn);
        }
        saveIsExistsShortcut(e) {
          this.set(this.localStorages, "isExistsShortcut", e);
        }
        loadIsExistsShortcut() {
          return this.get(this.localStorages, "isExistsShortcut");
        }
      }
      Me = new WeakMap();
      var Le = a(6388),
        Fe = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        };
      class De extends Error {
        constructor() {
          super("throttled invocation was canceled"),
            (this.name = "CanceledError");
        }
      }
      class Ne {
        constructor(e, t) {
          this.canceled = !1;
          const n = new Promise((e) => {
            (this.timeout = setTimeout(e, t)), (this.resolve = e);
          });
          this.ready = e.then(
            () => n,
            () => n
          );
        }
        flush() {
          clearTimeout(this.timeout), this.resolve();
        }
        cancel() {
          (this.canceled = !0), clearTimeout(this.timeout), this.resolve();
        }
        then(e) {
          return this.ready.then(() => {
            if (this.canceled) throw new De();
            return e();
          });
        }
      }
      function qe(e, t, n = {}) {
        const i = null != t && Number.isFinite(t) ? Math.max(t, 0) : 0,
          r = n.getNextArgs || ((e, t) => t);
        let s,
          a = Promise.resolve(),
          o = new Ne(a, 0),
          c = null;
        function h() {
          const t = s;
          (c = null), (s = null);
          const n = (() =>
            Fe(this, void 0, void 0, function* () {
              return yield e.apply(this, t);
            }))();
          return (o = new Ne(n, i)), n;
        }
        function l(...e) {
          return (s = s ? r(s, e) : e), c || (c = o.then(h.bind(this))), c;
        }
        return (
          (l.cancel = () =>
            Fe(this, void 0, void 0, function* () {
              const e = a;
              o.cancel(),
                (c = null),
                (s = null),
                (a = Promise.resolve()),
                (o = new Ne(a, 0)),
                yield e;
            })),
          (l.flush = () =>
            Fe(this, void 0, void 0, function* () {
              o.flush(), yield a;
            })),
          l
        );
      }
      function Be(e) {
        return function (t, n, i) {
          const r = i.value;
          return (i.value = qe(r, e)), i;
        };
      }
      qe.CanceledError = De;
      var Je = function (e, t, n, i) {
          var r,
            s = arguments.length,
            a =
              s < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, i);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (r = e[o]) &&
                (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
          return s > 3 && a && Object.defineProperty(t, n, a), a;
        },
        Ue = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        };
      class We extends Le.Z {
        constructor(e) {
          super(), (this.gp = e);
        }
        open(e = {}) {
          return Ue(this, void 0, void 0, function* () {
            const [t] = yield Promise.all([
              this.fetch(e),
              this.gp.loadOverlay(),
            ]);
            this._events.emit("open"),
              yield this.gp.overlay.openLeaderboard(e, t),
              this._events.emit("close");
          });
        }
        openScoped(e) {
          return Ue(this, void 0, void 0, function* () {
            const [t] = yield Promise.all([
                this.fetchScoped(e),
                this.gp.loadOverlay(),
              ]),
              n = Object.assign({}, e),
              i = t.fields.map((e) => e.key);
            (n.orderBy = e.includeFields
              ? i.filter((t) => !e.includeFields.includes(t))
              : i),
              this._events.emit("open"),
              yield this.gp.overlay.openLeaderboard(n, t),
              this._events.emit("close");
          });
        }
        fetch(e = {}) {
          return Ue(this, void 0, void 0, function* () {
            const t = (0, c._)();
            this.gp.loader.inc();
            try {
              const { result: n, playerResult: i } =
                yield this.gp._leaderboardsService.getRating(e);
              (n.players = ze(
                n.players,
                e.withMe,
                null == i ? void 0 : i.player
              )),
                t.done(n),
                this._events.emit("fetch", n);
            } catch (e) {
              t.abort(e), this._events.emit("error:fetch");
            } finally {
              this.gp.loader.dec();
            }
            return t.ready;
          });
        }
        fetchScoped(e) {
          return Ue(this, void 0, void 0, function* () {
            const t = (0, c._)();
            this.gp.loader.inc();
            try {
              const n = yield this.gp._leaderboardsService.getRatingVariant(e),
                { result: i, playerResult: r } = n;
              (0, l.tv)(i),
                (0, l.tv)(r),
                (i.players = ze(
                  i.players,
                  e.withMe,
                  null == r ? void 0 : r.player
                )),
                t.done(i),
                this._events.emit("fetch", i);
            } catch (e) {
              t.abort(e), this._events.emit("error:fetch");
            } finally {
              this.gp.loader.dec();
            }
            return t.ready;
          });
        }
        fetchPlayerRating(e = {}) {
          return Ue(this, void 0, void 0, function* () {
            const t = (0, c._)();
            this.gp.loader.inc();
            try {
              const n = yield this.gp._leaderboardsService.getPlayerRating(e);
              t.done(n), this._events.emit("fetchPlayer", n);
            } catch (e) {
              t.abort(e), this._events.emit("error:fetchPlayer", e);
            } finally {
              this.gp.loader.dec();
            }
            return t.ready;
          });
        }
        fetchPlayerRatingScoped(e) {
          return Ue(this, void 0, void 0, function* () {
            const t = (0, c._)();
            this.gp.loader.inc();
            try {
              const n =
                yield this.gp._leaderboardsService.getPlayerRatingVariant(e);
              t.done(n), this._events.emit("fetchPlayerScoped", n);
            } catch (e) {
              t.abort(e), this._events.emit("error:fetchPlayerScoped", e);
            } finally {
              this.gp.loader.dec();
            }
            return t.ready;
          });
        }
        publishRecord(e) {
          return Ue(this, void 0, void 0, function* () {
            const t = (0, c._)();
            this.gp.loader.inc();
            try {
              const n = yield this.gp._leaderboardsService.publishRecord(e);
              t.done(n), this._events.emit("publishRecord", n);
            } catch (e) {
              t.abort(e), this._events.emit("error:publishRecord", e);
            } finally {
              this.gp.loader.dec();
            }
            return t.ready;
          });
        }
      }
      function ze(e, t, n) {
        if (!n || !t || "none" === t) return e;
        if (e.some((e) => e.id === n.id && e.position === n.position)) return e;
        const i = e.length,
          r = n.position - 1;
        if (((e = e.filter((e) => e.id !== n.id)), r < i))
          e.splice(r, 0, n),
            e.forEach((e, t) => {
              t <= r || e.position++;
            }),
            e.length > i && e.pop();
        else
          switch (t) {
            case "first":
              e.unshift(n);
              break;
            case "last":
              e.push(n);
          }
        return e;
      }
      Je([Be(500)], We.prototype, "open", null),
        Je([Be(500)], We.prototype, "openScoped", null),
        Je([Be(500)], We.prototype, "fetch", null),
        Je([Be(500)], We.prototype, "fetchScoped", null),
        Je([Be(500)], We.prototype, "fetchPlayerRating", null),
        Je([Be(500)], We.prototype, "fetchPlayerRatingScoped", null),
        Je([Be(500)], We.prototype, "publishRecord", null);
      const Ge = {
          data: (e) => String(e || ""),
          stats: (e) => Number(e) || 0,
          flag: (e) => Boolean(e) || !1,
          service: null,
          accounts: null,
        },
        Ke = ["name", "avatar"];
      class Ze extends Le.Z {
        constructor(e = {}, t) {
          super(), (this.credentials = ""), (this.fields = t), this.fromJSON(e);
        }
        get id() {
          return this.state.id;
        }
        get score() {
          return this.get("score");
        }
        set score(e) {
          this.set("score", e);
        }
        get name() {
          return this.get("name");
        }
        set name(e) {
          this.set("name", e);
        }
        get avatar() {
          return this.get("avatar");
        }
        set avatar(e) {
          this.set("avatar", e);
        }
        get isStub() {
          return !this.fields
            .filter((e) => !Ke.includes(e.key))
            .some((e) => this.get(e.key) !== e.default);
        }
        fromJSON(e) {
          var t, n, i, r;
          (this.state = {
            id: e.id || 0,
            active: null === (t = e.active) || void 0 === t || t,
            removed: null !== (n = e.removed) && void 0 !== n && n,
            banned: null !== (i = e.banned) && void 0 !== i && i,
            test: null !== (r = e.test) && void 0 !== r && r,
            name: e.name || "",
            avatar: e.avatar || "",
            score: e.score || 0,
          }),
            e.credentials && (this.credentials = String(e.credentials)),
            this.fields.forEach((t) => {
              if (!(t.key in e)) return void (this.state[t.key] = t.default);
              const n = Ge[t.type];
              if (!n) return void (this.state[t.key] = e[t.key] || t.default);
              const i = n(e[t.key]);
              this.state[t.key] =
                t.variants.length && !t.variants.some((e) => e.value === i)
                  ? t.default
                  : i;
            }),
            this._events.emit("change");
        }
        toJSON() {
          return Object.assign({}, this.state);
        }
        getField(e) {
          const t = this.fields.find((t) => t.key === e);
          if (!t) {
            const t = `Field "${e}" not exists on player model`;
            throw (Te.kg.error(t), new Error(t));
          }
          return t;
        }
        getFieldName(e) {
          return this.getField(e).name || "";
        }
        getFieldVariantName(e, t) {
          var n;
          return (
            (null ===
              (n = this.getField(e).variants.find((e) => e.value === t)) ||
            void 0 === n
              ? void 0
              : n.name) || ""
          );
        }
        get(e) {
          return this.state[e];
        }
        set(e, t) {
          const n = this.getField(e),
            i = Ge[n.type];
          if (!i) {
            const t = `Cannot mutate "${e}", it's readonly`;
            throw (Te.kg.error(t), new Error(t));
          }
          const r = i(t);
          if (n.variants.length && !n.variants.some((e) => e.value === r)) {
            const t = `Invalid variant ${r} of "${e}"`;
            throw (Te.kg.error(t), new Error(t));
          }
          (this.state[e] = r), this._events.emit("change");
        }
        add(e, t) {
          return this.set(e, this.get(e) + t);
        }
        toggle(e) {
          return this.set(e, !this.get(e));
        }
        has(e) {
          return Boolean(this.get(e));
        }
        reset() {
          this.fields.forEach((e) => this.set(e.key, e.default));
        }
        remove() {
          (this.state.id = 0), this.reset();
        }
      }
      var Ve,
        Ye,
        He,
        Xe,
        Qe,
        et = function (e, t, n, i) {
          var r,
            s = arguments.length,
            a =
              s < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, i);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (r = e[o]) &&
                (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
          return s > 3 && a && Object.defineProperty(t, n, a), a;
        },
        tt = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        },
        nt = function (e, t, n, i, r) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n), n;
        },
        it = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      class rt extends Ze {
        constructor(e = {}, t, n, i, r) {
          super(e, t),
            (this.playerAdapter = n),
            (this.gp = i),
            (this.isLoggedIn = !1),
            (this.isLoggedInByPlatform = !1),
            (this.hasAnyCredentials = !1),
            (this.secretCode = ""),
            (this.tempSecredCode = ""),
            (this._hasFirstSync = !1),
            (this.isFirstRequest = !1),
            (this.credentials = ""),
            Ve.set(this, {}),
            Ye.set(this, ""),
            He.set(this, void 0),
            Xe.set(this, function ({ silent: e = !0, override: t = !1 } = {}) {
              return tt(this, void 0, void 0, function* () {
                this.gp.loader.inc();
                const n = (0, c._)();
                this.gp._storage.savePlayer(this.toJSON()).catch(Te.kg.warn);
                try {
                  let i;
                  if (
                    (e
                      ? this._isRequredDataUpdate &&
                        (i = this.playerAdapter.getPlayer())
                      : (i = this.playerAdapter.loginPlayer(this)),
                    i)
                  ) {
                    const t = yield i.catch((e) => {
                      if ("cancelled" === (null == e ? void 0 : e.message))
                        throw e;
                      return { name: "", photoLarge: "" };
                    });
                    t.name && !this.get("name") && (this.name = t.name),
                      t.photoLarge &&
                        this._isRequredAvatarUpdate &&
                        (this.avatar = t.photoLarge),
                      e || (yield this._initContext());
                  }
                  const r = yield this.gp._playerService.sync(
                    { override: t, playerState: this.toJSON() },
                    { withToken: this.isFirstRequest }
                  );
                  switch (r.__typename) {
                    case "PlayerSyncConflict": {
                      this.gp.loader.dec();
                      const t = r;
                      yield this.gp.loadOverlay();
                      const i = yield this.gp.overlay.pickPlayerOnConflict(t);
                      this.gp.loader.inc(),
                        this.has("name") &&
                          !i.name &&
                          (i.name = this.get("name")),
                        this.has("avatar") &&
                          !i.avatar &&
                          (i.avatar = this.get("avatar"));
                      const s = yield this.gp._playerService.sync(
                        { playerState: i, override: !0 },
                        { withToken: this.isFirstRequest }
                      );
                      if ("Player" !== s.__typename) return void n.abort();
                      e || this.setSecretCode(""),
                        this.gp.overlay.close(),
                        this.gp.achievements._setAchievementsList(
                          s.achievements
                        ),
                        this.gp.payments._setPurchasedList(s.purchasesList),
                        this.setToken(s.token),
                        this.fromJSON(s.state),
                        nt(this, Ye, s.state.secretCode, "f"),
                        it(this, He, "f").call(this, this._authInfo),
                        this.gp._storage.savePlayer(s.state),
                        n.done(),
                        yield this.checkLoggedIn(s.state);
                      break;
                    }
                    case "Player": {
                      const {
                        state: t,
                        achievements: i,
                        purchasesList: s,
                        token: a,
                      } = r;
                      e || this.setSecretCode(""),
                        this.gp.achievements._setAchievementsList(i),
                        this.gp.payments._setPurchasedList(s),
                        this.setToken(a),
                        this.fromJSON(t),
                        nt(this, Ye, t.secretCode, "f"),
                        it(this, He, "f").call(this, this._authInfo),
                        this.gp._storage.savePlayer(t),
                        n.done(),
                        yield this.checkLoggedIn(t),
                        this.playerAdapter.publishRecord(t);
                      break;
                    }
                  }
                } catch (e) {
                  n.abort(e);
                } finally {
                  (this._hasFirstSync = !0), this.gp.loader.dec();
                }
                return (
                  n.ready
                    .then(() => this._events.emit("sync", !0))
                    .catch(() => this._events.emit("sync", !1)),
                  n.ready
                );
              });
            }),
            Qe.set(this, function () {
              return tt(this, void 0, void 0, function* () {
                this.gp.loader.inc();
                try {
                  const e = yield this.gp._playerService.getPlayer({
                    withToken: !0,
                  });
                  this.gp.achievements._setAchievementsList(e.achievements),
                    this.gp.payments._setPurchasedList(e.purchasesList),
                    this.setToken(e.token),
                    this.fromJSON(e.state),
                    nt(this, Ye, e.state.secretCode, "f"),
                    it(this, He, "f").call(this, this._authInfo),
                    this.gp._storage.savePlayer(e.state),
                    yield this.checkLoggedIn(e.state),
                    this._events.emit("load", !0);
                } catch (e) {
                  Te.kg.error(e), this._events.emit("load", !1);
                } finally {
                  this.gp.loader.dec();
                }
              });
            });
          const s = (0, c._)();
          (this.ready = s.ready),
            nt(this, He, r, "f"),
            this._initContext().finally(() => this._init(s));
        }
        get avatar() {
          return this.get("avatar") || this.gp.generateAvatar(this.id, 64);
        }
        set avatar(e) {
          this.set("avatar", e);
        }
        get _isRequredDataUpdate() {
          return !this.get("name") || this._isRequredAvatarUpdate;
        }
        get _isRequredAvatarUpdate() {
          const e = this.get("avatar");
          return (
            !e ||
            (!this._hasFirstSync && this.playerAdapter.isPlatformAvatar(e))
          );
        }
        get _authInfo() {
          return Object.assign(Object.assign({}, it(this, Ve, "f")), {
            secretCode: this.secretCode || it(this, Ye, "f"),
          });
        }
        get(e) {
          return "secretCode" === e
            ? this.secretCode || it(this, Ye, "f")
            : "credentials" === e
            ? this.credentials || this.playerAdapter.userId
            : super.get(e);
        }
        _initContext() {
          return tt(this, void 0, void 0, function* () {
            const { platformData: e, key: t } = yield this.playerAdapter
              .getPlayerContext()
              .catch((e) => (Te.kg.error(e), { platformData: null, key: "" }));
            nt(this, Ve, e || {}, "f"),
              it(this, He, "f").call(this, this._authInfo);
            const n = `,${this.gp.platform.type},${
              this.gp.isDev ? "d" : "p"
            },${t}`;
            if (null == e ? void 0 : e.savedState) {
              Te.kg.info("found saved state...");
              const e = `,${this.gp.platform.type},${
                  this.gp.isDev ? "d" : "p"
                },null`,
                [t] = yield this.gp._storage.extractFromContext(e);
              t &&
                (this.fromJSON(t),
                yield it(this, Xe, "f").call(this),
                yield this.gp._storage.copyFromContext(n, e));
            }
            if (this.gp.platform.type === i.z.SMARTMARKET) {
              const e = `,SBER_MARKET,${this.gp.isDev ? "d" : "p"},`,
                [t] = yield this.gp._storage.extractFromContext(e);
              t &&
                (delete t.platformType,
                this.fromJSON(t),
                yield it(this, Xe, "f").call(this),
                yield this.gp._storage.clearContext(e));
            }
            if (this.gp.platform.type === i.z.POKI) {
              const e = `,NONE,${this.gp.isDev ? "d" : "p"},`,
                [t] = yield this.gp._storage.extractFromContext(n);
              if (t && (this.fromJSON(t), this.isStub)) {
                const [t] = yield this.gp._storage.extractFromContext(e);
                t &&
                  (delete t.platformType,
                  (t.id = this.id),
                  this.fromJSON(t),
                  yield it(this, Xe, "f").call(this));
              }
            }
            if (this.gp.platform.type === i.z.VK_PLAY) {
              const e = `,NONE,${this.gp.isDev ? "d" : "p"},`,
                [t] = yield this.gp._storage.extractFromContext(n);
              if (t && (this.fromJSON(t), this.isStub)) {
                const [t] = yield this.gp._storage.extractFromContext(e);
                t &&
                  (delete t.platformType,
                  (t.id = this.id),
                  this.fromJSON(t),
                  yield it(this, Xe, "f").call(this));
              }
            }
            if (
              !this.gp._storage.isEmptyOnBoot &&
              this.gp._storage.isEmptyContext()
            ) {
              Te.kg.info("Applying migration...");
              const [e, t] = yield this.gp._storage.migrateToContext(n);
              (this.secretCode = t),
                this.fromJSON(e),
                nt(this, Ye, e.secretCode, "f"),
                it(this, He, "f").call(this, this._authInfo),
                yield it(this, Xe, "f").call(this);
            }
            this.gp._storage.setContext(n);
          });
        }
        _init(e) {
          return tt(this, void 0, void 0, function* () {
            Promise.all([
              this.gp._storage.loadPlayer(),
              this.gp._storage.loadSecretCode(),
              this.gp.ready,
            ]).then(([t, n]) => {
              this.fromJSON(t || {}),
                nt(this, Ye, (null == t ? void 0 : t.secretCode) || "", "f"),
                (this.secretCode = n),
                it(this, He, "f").call(this, this._authInfo),
                (this.isFirstRequest = !0),
                (this.id
                  ? it(this, Qe, "f").call(this)
                  : it(this, Xe, "f").call(this)
                ).finally(() => {
                  (this.isFirstRequest = !1),
                    e.done(),
                    this._events.emit("ready"),
                    this.isLoggedInByPlatform && this.gp.payments._sync();
                });
            });
          });
        }
        fetchFields() {
          return tt(this, void 0, void 0, function* () {
            try {
              (this.fields =
                (yield this.gp._playerService.fetchFields()).items),
                this._events.emit("fetchFields", !0);
            } catch (e) {
              this._events.emit("fetchFields", !1);
            }
          });
        }
        sync(e = {}) {
          return tt(this, void 0, void 0, function* () {
            return it(this, Xe, "f").call(this, e);
          });
        }
        load() {
          return tt(this, void 0, void 0, function* () {
            return it(this, Qe, "f").call(this);
          });
        }
        login() {
          return tt(this, void 0, void 0, function* () {
            if (this.gp.platform._hasAuthModal)
              return void this.playerAdapter.loginPlayer(this);
            yield this.gp.loadOverlay();
            const { type: e, secretCode: t } = yield this.gp.overlay.login();
            switch (e) {
              case "PLATFORM_AUTH":
                yield it(this, Xe, "f")
                  .call(this, { silent: !1 })
                  .then(() => this._events.emit("login", !0))
                  .catch((e) => {
                    Te.kg.error(e), this._events.emit("login", !1);
                  });
                break;
              case "SECRET_KEY_AUTH_LOGIN":
                this.setSecretCode(t),
                  yield it(this, Qe, "f")
                    .call(this)
                    .then(() => this._events.emit("login", !0))
                    .catch((e) => {
                      Te.kg.error(e), this._events.emit("login", !1);
                    });
            }
            this.gp.overlay.close();
          });
        }
        checkLoggedIn(e) {
          return tt(this, void 0, void 0, function* () {
            this.isStub
              ? ((this.tempSecredCode = e.secretCode),
                this.setSecretCode(e.secretCode))
              : this.tempSecredCode &&
                this.tempSecredCode === e.secretCode &&
                (this.setSecretCode(""), (this.tempSecredCode = "")),
              (this.isLoggedInByPlatform = this.playerAdapter.hasCredetials),
              (this.isLoggedIn = this.isLoggedInByPlatform),
              (this.hasAnyCredentials = this.isLoggedIn || !!this.secretCode),
              this.secretCode &&
                this.secretCode != e.secretCode &&
                this.setSecretCode(e.secretCode),
              this.hasAnyCredentials ||
                (this.setSecretCode(e.secretCode),
                (this.hasAnyCredentials = !0));
          });
        }
        setSecretCode(e) {
          (this.secretCode = e),
            this.gp._storage.saveSecretCode(this.secretCode),
            it(this, He, "f").call(this, this._authInfo);
        }
        setToken(e) {
          e && this.gp.channels._connect(e);
        }
      }
      (Ve = new WeakMap()),
        (Ye = new WeakMap()),
        (He = new WeakMap()),
        (Xe = new WeakMap()),
        (Qe = new WeakMap()),
        et([Be(300)], rt.prototype, "fetchFields", null),
        et([Be(300)], rt.prototype, "sync", null),
        et([Be(300)], rt.prototype, "load", null);
      class st extends Le.Z {
        constructor() {
          super(),
            document.documentElement.addEventListener(
              "fullscreenchange",
              () => {
                let e = this.isEnabled;
                this._events.emit("change", e),
                  this._events.emit(e ? "open" : "close");
              }
            );
        }
        get isEnabled() {
          return Boolean(
            document.fullscreenElement || document.webkitFullscreenElement
          );
        }
        open() {
          this.isEnabled ||
            (document.documentElement.requestFullscreen
              ? document.documentElement.requestFullscreen()
              : document.documentElement.webkitRequestFullscreen &&
                document.documentElement.webkitRequestFullscreen());
        }
        close() {
          this.isEnabled &&
            (document.exitFullscreen
              ? document.exitFullscreen()
              : document.webkitExitFullscreen &&
                document.webkitExitFullscreen());
        }
        toggle() {
          this.isEnabled ? this.close() : this.open();
        }
      }
      class at {
        constructor() {
          this.counters = [];
        }
        addCounter(e) {
          return (
            (t = this),
            (n = void 0),
            (r = function* () {
              this.counters.push(e);
            }),
            new ((i = void 0) || (i = Promise))(function (e, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(t) {
                var n;
                t.done
                  ? e(t.value)
                  : ((n = t.value),
                    n instanceof i
                      ? n
                      : new i(function (e) {
                          e(n);
                        })).then(a, o);
              }
              c((r = r.apply(t, n || [])).next());
            })
          );
          var t, n, i, r;
        }
        hit(e) {
          this.counters.forEach((t) => t.hit(e));
        }
        goal(e, t) {
          this.counters.forEach((n) => n.goal(e, t));
        }
      }
      var ot = a(4917),
        ct = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        };
      class ht {
        constructor({ counterId: e }) {
          this.counterId = e;
          const t = window;
          (t.ym =
            t.ym ||
            function () {
              (t.ym.a = t.ym.a || []).push(arguments), (t.ym.l = Date.now());
            }),
            t.ym(e, "init", { accurateTrackBounce: !0 }),
            (this.ym = window.ym),
            (0, ot.Z)({ src: "https://mc.yandex.ru/metrika/tag.js" });
        }
        hit(e) {
          return ct(this, void 0, void 0, function* () {
            this.ym(this.counterId, "hit", e);
          });
        }
        goal(e, t) {
          return ct(this, void 0, void 0, function* () {
            this.ym(this.counterId, "reachGoal", t ? `${e}_${t}` : e);
          });
        }
      }
      var lt = function (e, t, n, i) {
        return new (n || (n = Promise))(function (r, s) {
          function a(e) {
            try {
              c(i.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, o);
          }
          c((i = i.apply(e, t || [])).next());
        });
      };
      class ut {
        constructor({ counterId: e }) {
          this.counterId = e;
          const t = window;
          (t.dataLayer = t.dataLayer || []),
            (t.gtag = function () {
              t.dataLayer.push(arguments);
            }),
            this.gtag("js", new Date()),
            this.gtag("config", e, { send_page_view: !1 }),
            (0, ot.Z)({ src: `//www.googletagmanager.com/gtag/js?id=${e}` });
        }
        get gtag() {
          return window.gtag;
        }
        hit(e) {
          return lt(this, void 0, void 0, function* () {
            this.gtag("event", "page_view", {
              page_location: e,
              send_to: this.counterId,
            });
          });
        }
        goal(e, t) {
          return lt(this, void 0, void 0, function* () {
            this.gtag("event", e, t ? { value: t } : void 0);
          });
        }
      }
      var dt = function (e, t, n, i) {
        return new (n || (n = Promise))(function (r, s) {
          function a(e) {
            try {
              c(i.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, o);
          }
          c((i = i.apply(e, t || [])).next());
        });
      };
      class pt extends Le.Z {
        constructor(e, t) {
          super(), (this.adapter = e), (this.gp = t);
        }
        get isSupportsShare() {
          return this.adapter.isSupportsShare;
        }
        get isSupportsNativeShare() {
          return this.adapter.isSupportsNativeShare;
        }
        get isSupportsNativePosts() {
          return this.adapter.isSupportsNativePosts;
        }
        get isSupportsNativeInvite() {
          return this.adapter.isSupportsNativeInvite;
        }
        get isSupportShareParams() {
          return this.adapter.isSupportShareParams;
        }
        get isSupportsNativeCommunityJoin() {
          return this.adapter.isSupportsNativeCommunityJoin;
        }
        get canJoinCommunity() {
          return this.adapter.canJoinCommunity && !!this.communityLink;
        }
        get communityLink() {
          return this.gp.platform.config.communityLink;
        }
        get shareParams() {
          return this.adapter.shareParams || {};
        }
        _getShareOptions(e) {
          return {
            text: e.text || this.gp.app.title,
            image: e.image || "",
            url: e.url || this.gp.app.url,
          };
        }
        _shareByOverlay(e, t) {
          var n;
          return dt(this, void 0, void 0, function* () {
            if (this.gp.isMobile)
              try {
                const e = this._getShareOptions(t),
                  i = Object.assign({}, e);
                if (e.image) {
                  const t = yield fetch(e.image).then((e) => e.blob());
                  i.files = [
                    new File([t], "image.png", {
                      type: t.type,
                      lastModified: new Date().getTime(),
                    }),
                  ];
                }
                const r = window.navigator;
                if (
                  null === (n = r.canShare) || void 0 === n
                    ? void 0
                    : n.call(r, i)
                )
                  return r.share(i);
              } catch (e) {
                Te.kg.warn(e);
              }
            return (
              yield this.gp.loadOverlay(),
              this.gp.overlay.share(e, this._getShareOptions(t))
            );
          });
        }
        share(e = {}) {
          return dt(this, void 0, void 0, function* () {
            if (!this.isSupportsShare)
              return this._events.emit("share", !1), !1;
            const t = this.isSupportsNativeShare
                ? this.adapter.share(this._getShareOptions(e))
                : this._shareByOverlay("share", e),
              n = yield t.catch(() => !1);
            return this._events.emit("share", n), n;
          });
        }
        post(e = {}) {
          return dt(this, void 0, void 0, function* () {
            if (!this.isSupportsShare) return this._events.emit("post", !1), !1;
            const t = this.isSupportsNativePosts
                ? this.adapter.post(this._getShareOptions(e))
                : this._shareByOverlay("post", e),
              n = yield t.catch(() => !1);
            return this._events.emit("post", n), n;
          });
        }
        invite(e = {}) {
          return dt(this, void 0, void 0, function* () {
            if (!this.isSupportsShare)
              return this._events.emit("invite", !1), !1;
            const t = this.isSupportsNativeInvite
                ? this.adapter.invite(this._getShareOptions(e))
                : this._shareByOverlay("invite", e),
              n = yield t.catch(() => !1);
            return this._events.emit("invite", n), n;
          });
        }
        joinCommunity() {
          return dt(this, void 0, void 0, function* () {
            if (!this.canJoinCommunity)
              return this._events.emit("joinCommunity", !1), !1;
            let e = !0;
            return (
              this.isSupportsNativeCommunityJoin &&
                (e = yield this.adapter.joinCommunity(
                  this.gp.platform.config.community
                )),
              window.open(this.communityLink, "_blank"),
              this._events.emit("joinCommunity", e),
              e
            );
          });
        }
        makeShareUrl(e = {}) {
          return (
            !!this.isSupportShareParams &&
            (0 === Object.keys(e).length
              ? this.gp.app.url
              : this.adapter.makeShareUrl(e))
          );
        }
        getShareParam(e) {
          var t;
          return (
            !!this.isSupportShareParams &&
            (null !== (t = this.adapter.getShareParam(e)) && void 0 !== t
              ? t
              : "")
          );
        }
      }
      class ft extends Le.Z {
        constructor(e, t, n) {
          super(),
            (this.gp = e),
            (this.adapter = t),
            (this.config = n),
            (this.title = this.config.project.name),
            (this.description = this.config.project.description),
            (this.image = this.config.project.icon);
        }
        get url() {
          return (
            this.config.platformConfig.gameLink ||
            this.gp.platform.getSDK().appUrl
          );
        }
        get canAddShortcut() {
          return this.adapter.canAddShortcut;
        }
        addShortcut() {
          return (
            (e = this),
            (t = void 0),
            (i = function* () {
              const e = yield this.adapter.addShortcut();
              return this._events.emit("addShortcut", e), e;
            }),
            new ((n = void 0) || (n = Promise))(function (r, s) {
              function a(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((i = i.apply(e, t || [])).next());
            })
          );
          var e, t, n, i;
        }
      }
      var gt,
        vt = a(584),
        mt = a(3080);
      function yt(e) {
        return new Promise(function (t, n) {
          (e.oncomplete = e.onsuccess =
            function () {
              return t(e.result);
            }),
            (e.onabort = e.onerror =
              function () {
                return n(e.error);
              });
        });
      }
      function wt(e, t) {
        var n = indexedDB.open(e);
        n.onupgradeneeded = function () {
          return n.result.createObjectStore(t);
        };
        var i = yt(n);
        return function (e, n) {
          return i.then(function (i) {
            return n(i.transaction(t, e).objectStore(t));
          });
        };
      }
      function bt() {
        return gt || (gt = wt("keyval-store", "keyval")), gt;
      }
      class Pt {
        constructor(e) {
          (this.projectId = e), (this.isLocal = !0);
          try {
            this.store = wt(`gs-db-project-${this.projectId}`, "storage");
          } catch (e) {
            Te.kg.error(e);
          }
        }
        set(e, t) {
          return this.store
            ? (function (e, t) {
                return (
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : bt()
                )("readwrite", function (n) {
                  return n.put(t, e), yt(n.transaction);
                });
              })(e, t, this.store).catch(() => null)
            : Promise.resolve();
        }
        get(e) {
          if (!this.store) return Promise.resolve(null);
          const t = (0, c._)({ timeout: 2e3 });
          return (
            (function (e) {
              return (
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : bt()
              )("readonly", function (t) {
                return yt(t.get(e));
              });
            })(e, this.store)
              .then(t.done)
              .catch(() => t.done(null)),
            t.ready
          );
        }
      }
      var _t,
        It = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        },
        St = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      class kt {
        constructor(e) {
          (this.projectId = e), _t.set(this, void 0), (this.isLocal = !0);
          try {
            !(function (e, t, n, i, r) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
            })(this, _t, window.localStorage, "f");
          } catch (e) {}
        }
        getKey(e) {
          return `gs-db-project-${this.projectId}-${e}`;
        }
        set(e, t) {
          return It(this, void 0, void 0, function* () {
            St(this, _t, "f").setItem(this.getKey(e), JSON.stringify(t));
          });
        }
        get(e) {
          return It(this, void 0, void 0, function* () {
            try {
              return JSON.parse(
                St(this, _t, "f").getItem(this.getKey(e)) || "null"
              );
            } catch (e) {}
          });
        }
      }
      _t = new WeakMap();
      var Et,
        Ct = a(9631),
        $t = a(4687);
      class Mt {
        constructor(e) {
          Et.set(this, void 0),
            (function (e, t, n, i, r) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
            })(this, Et, e, "f");
        }
        fetch({ id: e, tag: t, urlFrom: n }) {
          return (function (e, t, n, i) {
            if ("a" === n && !i)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? i
              : "a" === n
              ? i.call(e)
              : i
              ? i.value
              : t.get(e);
          })(this, Et, "f").fetch(
            "\nfragment project on Project {\n    id\n    url(from: $url)\n    name(lang: $lang)\n    description(lang: $lang)\n    assets {\n        icon {\n            resources { src(w: 256, h: 256, crop: true) }\n        }\n    }\n}\nquery ($input: FetchPlayerGamesCollectionInput!, $lang: Lang, $url: String) {\n    result: FetchPlayerGamesCollection(input: $input) {\n        __typename\n        ... on GamesCollection {\n            id\n            tag\n            name(lang: $lang)\n            description(lang: $lang)\n            games { ...project }\n        }\n        ... on Problem { message }\n    }\n}",
            { id: e, tag: t },
            { url: n }
          );
        }
      }
      Et = new WeakMap();
      var Tt = a(1437),
        Rt = a(4835),
        jt = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        };
      const xt = (e) => {
          var t;
          return (
            (null === (t = null == e ? void 0 : e.resources[0]) || void 0 === t
              ? void 0
              : t.src) || ""
          );
        },
        Ot = (e) => {
          var { assets: t } = e,
            n = (function (e, t) {
              var n = {};
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) &&
                  t.indexOf(i) < 0 &&
                  (n[i] = e[i]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                  t.indexOf(i[r]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                    (n[i[r]] = e[i[r]]);
              }
              return n;
            })(e, ["assets"]);
          return Object.assign(Object.assign({}, n), { icon: xt(t.icon) });
        },
        At = [i.z.YANDEX, i.z.VK, i.z.OK, i.z.GAMEPIX];
      class Lt extends Le.Z {
        constructor(e) {
          super(), (this.gp = e);
        }
        get isAvailable() {
          return (
            this.gp.platform.isExternalLinksAllowed ||
            At.includes(this.gp.platform.type)
          );
        }
        open({ id: e, tag: t } = { tag: "ALL" }) {
          return jt(this, void 0, void 0, function* () {
            if (this.isAvailable) {
              this.gp.loader.inc();
              try {
                const [n] = yield Promise.all([
                  this.fetch({ id: e, tag: t }),
                  this.gp.loadOverlay(),
                  (0, Tt.p)(Rt.Z.app.trophy).catch(Te.kg.error),
                ]);
                this.gp.loader.dec(),
                  n.games.length > 0 &&
                    (this._events.emit("open"),
                    yield this.gp.overlay
                      .openGamesCollections(n)
                      .catch(Te.kg.error),
                    this._events.emit("close"));
              } catch (e) {
                this.gp.loader.dec(), Te.kg.error(e);
              }
            } else Te.kg.warn(`Not available on ${this.gp.platform.type}`);
          });
        }
        fetch({ id: e, tag: t } = { tag: "ALL" }) {
          return jt(this, void 0, void 0, function* () {
            if (!this.isAvailable)
              return void Te.kg.warn(
                `Not available on ${this.gp.platform.type}`
              );
            const n = (0, c._)();
            this.gp.loader.inc();
            try {
              const i = yield this.gp._gamesCollectionsService.fetch({
                id: e,
                tag: t,
                urlFrom: this.gp.app.url,
              });
              if (!i) throw new Error("can't fetch GamesCollections list");
              const r = Object.assign(Object.assign({}, i), {
                games: i.games.filter((e) => e.url).map(Ot),
              });
              r.games || Te.kg.warn("empty games collection"),
                n.done(r),
                this._events.emit("fetch", r);
            } catch (e) {
              n.abort(e), this._events.emit("error:fetch");
            } finally {
              this.gp.loader.dec();
            }
            return n.ready;
          });
        }
      }
      var Ft,
        Dt,
        Nt,
        qt = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        },
        Bt = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      class Jt {
        constructor(e) {
          (this.queryBuilder = e),
            Ft.set(this, {}),
            Dt.set(this, function (e = {}, t) {
              return qt(this, void 0, void 0, function* () {
                const n = (0, c._)();
                e.limit = e.limit || 10;
                try {
                  const i = yield t(e),
                    r = i.length === e.limit;
                  (Bt(this, Ft, "f")[this.queryBuilder(e)] = Object.assign(
                    Object.assign({}, e),
                    { canLoadMore: r }
                  )),
                    n.done({ items: i, canLoadMore: r });
                } catch (e) {
                  n.abort(e);
                }
                return n.ready;
              });
            }),
            Nt.set(this, function (e = {}, t) {
              return qt(this, void 0, void 0, function* () {
                const n = this.queryBuilder(e),
                  i = Bt(this, Ft, "f")[n];
                if (!i) return yield this.fetch(e, t);
                if (!i.canLoadMore) return { items: [], canLoadMore: !1 };
                const r = (0, c._)(),
                  s = (i.offset || 0) + (i.limit || 0);
                i.limit = e.limit || i.limit;
                const a = Object.assign({}, Bt(this, Ft, "f")[n]),
                  o = Object.assign(Object.assign({}, i), { offset: s });
                Bt(this, Ft, "f")[n] = o;
                try {
                  const e = yield t(o),
                    i = e.length === o.limit;
                  (Bt(this, Ft, "f")[n].canLoadMore = i),
                    r.done({ items: e, canLoadMore: i });
                } catch (e) {
                  (Bt(this, Ft, "f")[n] = a), r.abort(e);
                }
                return r.ready;
              });
            });
        }
        fetch(e = {}, t) {
          return Bt(this, Dt, "f").call(this, e, t);
        }
        fetchMore(e = {}, t) {
          return qt(this, void 0, void 0, function* () {
            return Bt(this, Nt, "f").call(this, e, t);
          });
        }
      }
      (Ft = new WeakMap()), (Dt = new WeakMap()), (Nt = new WeakMap());
      var Ut,
        Wt,
        zt,
        Gt,
        Kt,
        Zt,
        Vt,
        Yt,
        Ht,
        Xt,
        Qt = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        },
        en = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        },
        tn = function (e, t) {
          var n = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              t.indexOf(i) < 0 &&
              (n[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
              t.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                (n[i[r]] = e[i[r]]);
          }
          return n;
        };
      class nn extends Le.Z {
        constructor(e, t) {
          super(),
            (this.gp = e),
            (this._config = t),
            Ut.set(
              this,
              new Jt((e) =>
                [
                  "channels",
                  (e.tags || []).join(","),
                  e.search || "",
                  (e.ids || []).join(","),
                  e.onlyJoined || !1,
                  e.onlyOwned || !1,
                ].join(":")
              )
            ),
            Wt.set(this, new Jt((e) => `channelsMembers:${e.channelId}`)),
            zt.set(this, new Jt((e) => `invites:${e.channelId}`)),
            Gt.set(this, new Jt((e) => `channelsInvites:${e.channelId}`)),
            Kt.set(this, new Jt((e) => "sentInvites")),
            Zt.set(this, new Jt((e) => `channelsJoinRequests:${e.channelId}`)),
            Vt.set(this, new Jt((e) => "sentJoinRequests")),
            Yt.set(
              this,
              new Jt(
                (e) =>
                  `channelsJoinRequests:${e.channelId}:${(e.tags || []).join(
                    ","
                  )}`
              )
            ),
            Ht.set(
              this,
              new Jt(
                (e) =>
                  `channelsJoinRequests:${e.playerId}:${(e.tags || []).join(
                    ","
                  )}`
              )
            ),
            Xt.set(
              this,
              new Jt(
                (e) =>
                  `channelsJoinRequests:${e.playerId}:${(e.tags || []).join(
                    ","
                  )}`
              )
            );
        }
        get canBeOnline() {
          return this._config.acl.canConnectOnline;
        }
        get isMainChatEnabled() {
          return this._config.project.enableMainChat && this.mainChatId > 0;
        }
        get mainChatId() {
          return this._config.project.mainChatId;
        }
        _handleResponse(e, t) {
          e.then((e) => this._events.emit(t, e)),
            e.catch((e) => {
              Te.kg.error(e), this._events.emit(`error:${t}`, e);
            });
        }
        sendInvite(e) {
          const t = this.gp._channelsService.invites.sendInvite(e);
          return this._handleResponse(t, "sendInvite"), t;
        }
        cancelInvite(e) {
          const t = this.gp._channelsService.invites.cancelInvite(e);
          return this._handleResponse(t, "cancelInvite"), t;
        }
        acceptInvite(e) {
          const t = this.gp._channelsService.invites.acceptInvite(e);
          return this._handleResponse(t, "acceptInvite"), t;
        }
        rejectInvite(e) {
          const t = this.gp._channelsService.invites.rejectInvite(e);
          return this._handleResponse(t, "rejectInvite"), t;
        }
        join(e) {
          const t = this.gp._channelsService.members.join(e);
          return this._handleResponse(t, "join"), t;
        }
        leave(e) {
          const t = this.gp._channelsService.members.leave(e);
          return this._handleResponse(t, "leave"), t;
        }
        cancelJoin(e) {
          const t = this.gp._channelsService.members.cancelJoin(e);
          return this._handleResponse(t, "cancelJoin"), t;
        }
        acceptJoinRequest(e) {
          const t = this.gp._channelsService.joinRequests.acceptJoinRequest(e);
          return this._handleResponse(t, "acceptJoinRequest"), t;
        }
        rejectJoinRequest(e) {
          const t = this.gp._channelsService.joinRequests.rejectJoinRequest(e);
          return this._handleResponse(t, "rejectJoinRequest"), t;
        }
        fetchMessages(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Yt, "f").fetch(e, (e) =>
              this.gp._channelsService.messages
                .fetchMessages(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchMessages"), t;
          });
        }
        fetchMoreMessages(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Yt, "f").fetchMore(e, (e) =>
              this.gp._channelsService.messages
                .fetchMessages(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchMoreMessages"), t;
          });
        }
        fetchPersonalMessages(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Ht, "f").fetch(e, (e) =>
              this.gp._channelsService.messages
                .fetchPersonalMessages(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchPersonalMessages"), t;
          });
        }
        fetchMorePersonalMessages(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Ht, "f").fetchMore(e, (e) =>
              this.gp._channelsService.messages
                .fetchPersonalMessages(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchMorePersonalMessages"), t;
          });
        }
        fetchFeedMessages(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Xt, "f").fetch(e, (e) =>
              this.gp._channelsService.messages
                .fetchFeedMessages(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchFeedMessages"), t;
          });
        }
        fetchMoreFeedMessages(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Xt, "f").fetchMore(e, (e) =>
              this.gp._channelsService.messages
                .fetchFeedMessages(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchMoreFeedMessages"), t;
          });
        }
        sendMessage(e) {
          const t = this.gp._channelsService.messages.sendMessage(e);
          return this._handleResponse(t, "sendMessage"), t;
        }
        sendFeedMessage(e) {
          const t = this.gp._channelsService.messages.sendFeedMessage(e);
          return this._handleResponse(t, "sendMessage"), t;
        }
        sendPersonalMessage(e) {
          const t = this.gp._channelsService.messages.sendPersonalMessage(e);
          return this._handleResponse(t, "sendMessage"), t;
        }
        editMessage(e) {
          const t = this.gp._channelsService.messages.editMessage(e);
          return this._handleResponse(t, "editMessage"), t;
        }
        deleteMessage(e) {
          const t = this.gp._channelsService.messages.deleteMessage(e);
          return this._handleResponse(t, "deleteMessage"), t;
        }
        mute(e) {
          var { seconds: t = 0 } = e;
          const n = tn(e, ["seconds"]);
          if (t > 0) {
            const e = new Date();
            e.setSeconds(e.getSeconds() + t), (n.unmuteAt = e.toISOString());
          }
          const i = this.gp._channelsService.members.mute(n);
          return this._handleResponse(i, "mute"), i;
        }
        unmute(e) {
          const t = this.gp._channelsService.members.unmute(e);
          return this._handleResponse(t, "unmute"), t;
        }
        fetchMembers(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Wt, "f").fetch(e, (e) =>
              this.gp._channelsService.members
                .fetchMembers(e)
                .then((e) => e.players)
            );
            return this._handleResponse(t, "fetchMembers"), t;
          });
        }
        fetchMoreMembers(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Wt, "f").fetchMore(e, (e) =>
              this.gp._channelsService.members
                .fetchMembers(e)
                .then((e) => e.players)
            );
            return this._handleResponse(t, "fetchMoreMembers"), t;
          });
        }
        fetchInvites(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, zt, "f").fetch(e, (e) =>
              this.gp._channelsService.invites
                .fetchInvites(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchInvites"), t;
          });
        }
        fetchMoreInvites(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, zt, "f").fetchMore(e, (e) =>
              this.gp._channelsService.invites
                .fetchInvites(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchMoreInvites"), t;
          });
        }
        fetchChannelInvites(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Gt, "f").fetch(e, (e) =>
              this.gp._channelsService.invites
                .fetchChannelInvites(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchChannelInvites"), t;
          });
        }
        fetchMoreChannelInvites(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Gt, "f").fetchMore(e, (e) =>
              this.gp._channelsService.invites
                .fetchChannelInvites(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchMoreChannelInvites"), t;
          });
        }
        fetchSentInvites(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Kt, "f").fetch(e, (e) =>
              this.gp._channelsService.invites
                .fetchSentInvites(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchSentInvites"), t;
          });
        }
        fetchMoreSentInvites(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Kt, "f").fetchMore(e, (e) =>
              this.gp._channelsService.invites
                .fetchSentInvites(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchMoreSentInvites"), t;
          });
        }
        fetchJoinRequests(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Zt, "f").fetch(e, (e) =>
              this.gp._channelsService.joinRequests
                .fetchJoinRequests(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchJoinRequests"), t;
          });
        }
        fetchMoreJoinRequests(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Zt, "f").fetchMore(e, (e) =>
              this.gp._channelsService.joinRequests
                .fetchJoinRequests(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchMoreJoinRequests"), t;
          });
        }
        fetchSentJoinRequests(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Vt, "f").fetch(e, (e) =>
              this.gp._channelsService.joinRequests
                .fetchSentJoinRequests(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchSentJoinRequests"), t;
          });
        }
        fetchMoreSentJoinRequests(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = en(this, Vt, "f").fetchMore(e, (e) =>
              this.gp._channelsService.joinRequests
                .fetchSentJoinRequests(e)
                .then((e) => e.items)
            );
            return this._handleResponse(t, "fetchMoreSentJoinRequests"), t;
          });
        }
        kick(e) {
          const t = this.gp._channelsService.members.kick(e);
          return this._handleResponse(t, "kick"), t;
        }
        openChat({ id: e } = { id: 0 }) {
          return Qt(this, void 0, void 0, function* () {
            let t = e;
            if (
              (!e &&
                this._config.project.enableMainChat &&
                (t = this._config.project.mainChatId),
              t)
            ) {
              this.gp.loader.inc();
              try {
                const e = this.gp.loadOverlay(),
                  n = yield this.fetchChannel({ channelId: t });
                if (
                  !(n.ownerId === this.gp.player.id ? n.ownerAcl : n.memberAcl)
                    .canViewMessages
                )
                  return void Te.kg.error("access_denied");
                n.isJoined ||
                  (yield this.join({ channelId: t }),
                  (n.membersCount += 1),
                  (n.membersOnlineCount += 1),
                  (n.isJoined = !0));
                const [i] = yield Promise.all([
                  this.fetchMessages({ channelId: t, limit: 100 }),
                  e,
                ]);
                this.gp.loader.dec(),
                  this._events.emit("openChat"),
                  yield this.gp.overlay.openChat(n, i).catch(Te.kg.error),
                  this._events.emit("closeChat");
              } catch (e) {
                this._events.emit("error:openChat", e),
                  this.gp.loader.dec(),
                  Te.kg.error(e);
              }
            } else Te.kg.error("empty_channel_id");
          });
        }
        fetchChannel(e) {
          return Qt(this, void 0, void 0, function* () {
            const t = this.gp._channelsService.channels.fetchChannel(e);
            return this._handleResponse(t, "fetchChannel"), t;
          });
        }
        fetchChannels(e) {
          var { ids: t = [] } = e,
            n = tn(e, ["ids"]);
          return Qt(this, void 0, void 0, function* () {
            const e = n;
            (t = t.map((e) => Number(String(e).trim())).filter(Boolean))
              .length > 0 && (e.ids = t);
            const i = en(this, Ut, "f").fetch(n, (e) =>
              this.gp._channelsService.channels
                .fetchChannels(e)
                .then((e) => e.items)
            );
            return this._handleResponse(i, "fetchChannels"), i;
          });
        }
        fetchMoreChannels(e) {
          var { ids: t = [] } = e,
            n = tn(e, ["ids"]);
          return Qt(this, void 0, void 0, function* () {
            const e = n;
            (t =
              null == t
                ? void 0
                : t.map((e) => Number(String(e).trim())).filter(Boolean))
              .length > 0 && (e.ids = t);
            const i = en(this, Ut, "f").fetchMore(n, (e) =>
              this.gp._channelsService.channels
                .fetchChannels(e)
                .then((e) => e.items)
            );
            return this._handleResponse(i, "fetchMoreChannels"), i;
          });
        }
        createChannel(e) {
          const t = this.gp._channelsService.channels.createChannel(e);
          return this._handleResponse(t, "createChannel"), t;
        }
        updateChannel(e) {
          const t = this.gp._channelsService.channels.updateChannel(e);
          return this._handleResponse(t, "updateChannel"), t;
        }
        deleteChannel(e) {
          const t = this.gp._channelsService.channels.deleteChannel(e);
          return this._handleResponse(t, "deleteChannel"), t;
        }
        _connect(e) {
          return Qt(this, void 0, void 0, function* () {
            if (this._config.acl.canCollectStats || this.canBeOnline) {
              const t = () => this.gp._channelsService.ping(e);
              window.setInterval(t, 3e4), t();
            }
            if (!this.canBeOnline) return;
            const t = new TextDecoder();
            (yield (function (e, t, n, i) {
              return (
                (r = this),
                (s = void 0),
                (c = function* () {
                  const t = [
                      {
                        transport: "websocket",
                        endpoint:
                          "wss://ws.eponesh.com/connection/websocket?format=protobuf",
                      },
                      {
                        transport: "http_stream",
                        endpoint:
                          "https://ws.eponesh.com/connection/http_stream?format=protobuf",
                      },
                      {
                        transport: "sse",
                        endpoint:
                          "https://ws.eponesh.com/connection/sse?format=protobuf",
                      },
                    ],
                    { default: n } = yield a.e(72).then(a.bind(a, 9965));
                  return new n(t, {
                    token: e,
                    protocol: "protobuf",
                    debug: !0,
                  });
                }),
                new ((o = void 0) || (o = Promise))(function (e, t) {
                  function n(e) {
                    try {
                      a(c.next(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function i(e) {
                    try {
                      a(c.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function a(t) {
                    var r;
                    t.done
                      ? e(t.value)
                      : ((r = t.value),
                        r instanceof o
                          ? r
                          : new o(function (e) {
                              e(r);
                            })).then(n, i);
                  }
                  a((c = c.apply(r, s || [])).next());
                })
              );
              var r, s, o, c;
            })(e))
              .on("connected", (e) => {
                console.info(`connected over ${e.transport}`);
              })
              .on("connecting", function (e) {
                console.info(`connecting: ${e.code}, ${e.reason}`);
              })
              .on("disconnected", function (e) {
                console.info(`disconnected: ${e.code}, ${e.reason}`);
              })
              .on("publication", (e) => {
                const n = JSON.parse(t.decode(e.data));
                (null == n ? void 0 : n.type) &&
                  (this._events.emit("event", n),
                  this._events.emit(n.type, n.data));
              })
              .connect();
          });
        }
      }
      (Ut = new WeakMap()),
        (Wt = new WeakMap()),
        (zt = new WeakMap()),
        (Gt = new WeakMap()),
        (Kt = new WeakMap()),
        (Zt = new WeakMap()),
        (Vt = new WeakMap()),
        (Yt = new WeakMap()),
        (Ht = new WeakMap()),
        (Xt = new WeakMap());
      var rn,
        sn = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        },
        an = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      const on = `\n    ... on PlayersTop {\n        leaderboard {\n            id\n            tag\n            name(lang: $lang),\n            description(lang: $lang),\n            shareText(lang: $lang),\n            isAuthorizedOnly\n        }\n        players\n        fields { ${h.S} }\n    }\n`,
        cn = `\n    ... on PlayerTop {\n        player\n        fields { ${h.S} }\n    }\n`,
        hn = `\n    ... on PlayerRecord {\n        record\n        fields { ${h.S} }\n    }\n`,
        ln = `query ($input: FetchTopInput!, $lang: Lang, $withMe: Boolean!) {\n    result: FetchTop(input: $input) {${(0,
        l.Mn)(
          on
        )}}\n    playerResult: FetchPlayerRating(input: $input) @include(if: $withMe) {${(0,
        l.Mn)(cn)}}\n}`,
        un = `query ($input: FetchTopInput!, $lang: Lang) {\n    result: FetchPlayerRating(input: $input) {${(0,
        l.Mn)(cn)}}\n}`,
        dn = `query ($input: FetchPlayerTopScopedInput!, $lang: Lang, $withMe: Boolean!) {\n    result: FetchPlayerTopScoped(input: $input) {${(0,
        l.Mn)(
          on
        )}}\n    playerResult: FetchPlayerRatingScoped(input: $input) @include(if: $withMe) {${(0,
        l.Mn)(cn)}}\n}`,
        pn = `query ($input: FetchPlayerTopScopedInput!, $lang: Lang) {\n    result: FetchPlayerRatingScoped(input: $input) {${(0,
        l.Mn)(cn)}}\n}`,
        fn = `mutation ($input: PlayerPublishRecordInput!, $lang: Lang) {\n    result: PlayerPublishRecord(input: $input) {${(0,
        l.Mn)(hn)}}\n}`;
      class gn {
        constructor(e) {
          rn.set(this, void 0),
            (function (e, t, n, i, r) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
            })(this, rn, e, "f");
        }
        getRating({
          orderBy: e = ["score"],
          includeFields: t = [],
          order: n = "DESC",
          limit: i = 10,
          withMe: r = "none",
        }) {
          return sn(this, void 0, void 0, function* () {
            return an(this, rn, "f").fetchMany(
              ln,
              { orderBy: e, order: n, limit: i, includeFields: t },
              { withMe: "none" !== r }
            );
          });
        }
        getPlayerRating({
          orderBy: e = ["score"],
          includeFields: t = [],
          order: n = "DESC",
          limit: i = 10,
        }) {
          return sn(this, void 0, void 0, function* () {
            return an(this, rn, "f").fetch(un, {
              orderBy: e,
              order: n,
              limit: i,
              includeFields: t,
            });
          });
        }
        getRatingVariant({
          id: e,
          tag: t,
          variant: n,
          includeFields: i = [],
          limit: r = 10,
          withMe: s = "none",
          order: a,
        }) {
          return sn(this, void 0, void 0, function* () {
            return an(this, rn, "f").fetchMany(
              dn,
              {
                id: e,
                tag: t,
                variant: n,
                limit: r,
                includeFields: i,
                order: a,
              },
              { withMe: "none" !== s }
            );
          });
        }
        getPlayerRatingVariant({
          id: e,
          tag: t,
          variant: n,
          includeFields: i = [],
          limit: r = 10,
          order: s,
        }) {
          return sn(this, void 0, void 0, function* () {
            return an(this, rn, "f").fetch(pn, {
              id: e,
              tag: t,
              variant: n,
              limit: r,
              includeFields: i,
              order: s,
            });
          });
        }
        publishRecord({ id: e, tag: t, variant: n, record: i, override: r }) {
          return sn(this, void 0, void 0, function* () {
            return an(this, rn, "f").fetch(fn, {
              id: e,
              tag: t,
              variant: n,
              record: i,
              override: r,
            });
          });
        }
      }
      rn = new WeakMap();
      var vn;
      class mn {
        constructor(e) {
          vn.set(this, void 0),
            (function (e, t, n, i, r) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
            })(this, vn, e, "f");
        }
        fetch({ type: e, format: t }) {
          return (function (e, t, n, i) {
            if ("a" === n && !i)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof t ? e !== t || !i : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === n
              ? i
              : "a" === n
              ? i.call(e)
              : i
              ? i.value
              : t.get(e);
          })(this, vn, "f").fetch(
            "query($input: FetchPlayerDocumentInput!, $lang: Lang, $format: DocumentFormat) {\n    result: FetchPlayerDocument(input: $input) {\n        __typename\n        ... on Problem { message }\n        ... on Document {\n            type\n            content(lang: $lang, format: $format)\n        }\n    }\n}",
            { type: e },
            { format: t }
          );
        }
      }
      vn = new WeakMap();
      var yn = function (e, t, n, i) {
        return new (n || (n = Promise))(function (r, s) {
          function a(e) {
            try {
              c(i.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, o);
          }
          c((i = i.apply(e, t || [])).next());
        });
      };
      class wn extends Le.Z {
        constructor(e) {
          super(), (this.gp = e);
        }
        open({ type: e }) {
          return yn(this, void 0, void 0, function* () {
            this.gp.loader.inc();
            try {
              const [t] = yield Promise.all([
                this.fetch({ type: e }),
                this.gp.loadOverlay(),
                (0, Tt.p)(Rt.Z.app.trophy).catch(Te.kg.error),
              ]);
              this.gp.loader.dec(),
                t
                  ? ((t.format = "HTML"),
                    this._events.emit("open"),
                    yield this.gp.overlay.openDocument(t).catch(Te.kg.error),
                    this._events.emit("close"))
                  : Te.kg.error(new Error("document not found"));
            } catch (e) {
              this.gp.loader.dec(), Te.kg.error(e);
            }
          });
        }
        fetch({ type: e, format: t = "HTML" }) {
          return yn(this, void 0, void 0, function* () {
            const n = (0, c._)();
            this.gp.loader.inc();
            try {
              const i = yield this.gp._documentsService.fetch({
                type: e,
                format: t,
              });
              if (!i) throw new Error("can't fetch privacy policy");
              (i.format = t), n.done(i), this._events.emit("fetch", i);
            } catch (e) {
              n.abort(e), this._events.emit("error:fetch", e);
            } finally {
              this.gp.loader.dec();
            }
            return n.ready;
          });
        }
      }
      var bn,
        Pn = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      const _n = {
        data: (e) => String(e || ""),
        stats: (e) => Number(e) || 0,
        flag: (e) => Boolean(e) || !1,
        image: (e) => String(e || ""),
        doc_html: (e) => String(e || ""),
        file: (e) => String(e || ""),
      };
      class In extends Le.Z {
        constructor(e, t) {
          super(),
            (this.gp = e),
            (this.state = {}),
            (this.list = []),
            bn.set(this, function (e) {
              (this.state = {}),
                (this.list = e),
                e.forEach((e) => {
                  var t;
                  const n =
                    (null === (t = _n[e.type]) || void 0 === t
                      ? void 0
                      : t.call(_n, e.value)) || e.value;
                  this.state[e.key] = n;
                }),
                this._events.emit("change");
            }),
            Pn(this, bn, "f").call(this, t);
        }
        get(e) {
          return this.state[e];
        }
        has(e) {
          return Boolean(this.get(e));
        }
        type(e) {
          var t;
          return (
            (null === (t = this.list.find((t) => t.key === e)) || void 0 === t
              ? void 0
              : t.type) || "data"
          );
        }
        fetch() {
          return (
            (e = this),
            (t = void 0),
            (i = function* () {
              try {
                const e = (yield this.gp._projectService.fetchVariables())
                  .items;
                return (
                  Pn(this, bn, "f").call(this, e),
                  this._events.emit("fetch", e),
                  e
                );
              } catch (e) {
                Te.kg.error(e), this._events.emit("error:fetch", e);
              }
            }),
            new ((n = void 0) || (n = Promise))(function (r, s) {
              function a(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? r(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((i = i.apply(e, t || [])).next());
            })
          );
          var e, t, n, i;
        }
      }
      (bn = new WeakMap()),
        (function (e, t, n, i) {
          var r,
            s = arguments.length,
            a =
              s < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, i);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (r = e[o]) &&
                (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
          s > 3 && a && Object.defineProperty(t, n, a);
        })([Be(300)], In.prototype, "fetch", null);
      var Sn,
        kn = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      const En =
          "\n    id: _id\n    playerId\n    src\n    tags\n    width\n    height\n",
        Cn = `\n    ... on ImagesList {\n        items { ${En} }\n    }\n`,
        $n = `\n    ... on Image { ${En} }\n`,
        Mn = `query($input: FetchPlayerImagesInput!) {\n    result: FetchPlayerImages(input: $input) { ${(0,
        l.Mn)(Cn)} }\n}`,
        Tn = `mutation($input: UploadPlayerImageInput!) {\n    result: UploadPlayerImage(input: $input) { ${(0,
        l.Mn)($n)} }\n}`;
      class Rn {
        constructor(e) {
          Sn.set(this, void 0),
            (function (e, t, n, i, r) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
            })(this, Sn, e, "f");
        }
        fetch({ playerId: e, limit: t, offset: n, tags: i }) {
          return kn(this, Sn, "f").fetch(Mn, {
            playerId: e,
            limit: t,
            offset: n,
            tags: i,
          });
        }
        upload({ file: e, tags: t, accessPayload: n }) {
          return kn(this, Sn, "f").fetch(Tn, {
            file: e,
            tags: t,
            accessPayload: n,
          });
        }
      }
      Sn = new WeakMap();
      const jn = 2048,
        xn =
          /cdn.(eponesh|gamepush).com\/static(\/([\d\-]+.)([\d\-]+.)|)\/(.*)/,
        On = /-(\d+)x(\d+)\.\w+$/;
      var An,
        Ln,
        Fn,
        Dn,
        Nn = function (e, t, n, i) {
          var r,
            s = arguments.length,
            a =
              s < 3
                ? t
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(t, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, i);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (r = e[o]) &&
                (a = (s < 3 ? r(a) : s > 3 ? r(t, n, a) : r(t, n)) || a);
          return s > 3 && a && Object.defineProperty(t, n, a), a;
        },
        qn = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        },
        Bn = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        },
        Jn = function (e, t) {
          var n = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              t.indexOf(i) < 0 &&
              (n[i] = e[i]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
              t.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                (n[i[r]] = e[i[r]]);
          }
          return n;
        };
      const Un = "empty_url",
        Wn = "empty_content",
        zn = "empty_filename";
      class Gn extends Jt {
        constructor() {
          super(Kn),
            An.set(this, void 0),
            Ln.set(this, {}),
            Fn.set(this, function (e, t) {
              var { url: n, filename: i } = e,
                r = Jn(e, ["url", "filename"]);
              return qn(this, void 0, void 0, function* () {
                if (!n) throw (Te.kg.error(Un), new Error(Un));
                if (!i) throw (Te.kg.error(zn), new Error(zn));
                if (Bn(this, Ln, "f")[n]) {
                  const e = new File(
                    [Bn(this, Ln, "f")[n]],
                    i,
                    Bn(this, Ln, "f")[n]
                  );
                  return t(Object.assign(Object.assign({}, r), { file: e }));
                }
                try {
                  const e = yield fetch(n).then((e) => e.blob());
                  return t(
                    Object.assign(Object.assign({}, r), {
                      file: new File([e], i, { type: e.type }),
                    })
                  );
                } catch (e) {
                  throw (Te.kg.error(e), e);
                }
              });
            }),
            Dn.set(this, function (e, t) {
              return qn(this, void 0, void 0, function* () {
                const { content: n, filename: i } = e,
                  r = Jn(e, ["content", "filename"]);
                if (!n.trim()) throw (Te.kg.error(Wn), new Error(Wn));
                if (!i) throw (Te.kg.error(zn), new Error(zn));
                return t(
                  Object.assign(Object.assign({}, r), {
                    file: new File([n], i),
                  })
                );
              });
            });
          const { openFile: e } = (function () {
            let e = null;
            const t = document.createElement("input");
            (t.type = "file"),
              (t.id = "gp-file-input"),
              (t.style.cssText =
                "position: fixed; top: -999px; left: -999px; z-index: 0;"),
              (t.onchange = (e) => i(e.target)),
              (t.tabIndex = -1),
              document.body.appendChild(t);
            const n = () => {
                setTimeout(() => e.done(null), 1e3),
                  document.body.removeEventListener("focus", n, !0);
              },
              i = (t) => {
                const [i] = t.files ? Array.from(t.files) : [];
                document.body.removeEventListener("focus", n, !0), e.done(i);
              };
            return {
              input: t,
              openFile: (i = "*") => {
                return (
                  (r = this),
                  (s = void 0),
                  (o = function* () {
                    null == e || e.abort(),
                      (e = (0, c._)()),
                      (t.accept = i),
                      t.click(),
                      document.body.addEventListener("focus", n, !0);
                    const r = yield e.ready;
                    if (r) return r;
                    throw new Error("cancelled");
                  }),
                  new ((a = void 0) || (a = Promise))(function (e, t) {
                    function n(e) {
                      try {
                        c(o.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function i(e) {
                      try {
                        c(o.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function c(t) {
                      var r;
                      t.done
                        ? e(t.value)
                        : ((r = t.value),
                          r instanceof a
                            ? r
                            : new a(function (e) {
                                e(r);
                              })).then(n, i);
                    }
                    c((o = o.apply(r, s || [])).next());
                  })
                );
                var r, s, a, o;
              },
            };
          })();
          !(function (e, t, n, i, r) {
            if ("m" === i)
              throw new TypeError("Private method is not writable");
            if ("a" === i && !r)
              throw new TypeError(
                "Private accessor was defined without a setter"
              );
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw new TypeError(
                "Cannot write private member to an object whose class did not declare it"
              );
            "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
          })(this, An, e, "f");
        }
        chooseFile(e) {
          return qn(this, void 0, void 0, function* () {
            const t = (0, c._)();
            try {
              const n = yield Bn(this, An, "f").call(this, e),
                i = URL.createObjectURL(n);
              (Bn(this, Ln, "f")[i] = n), t.done({ file: n, tempUrl: i });
            } catch (e) {
              t.abort(e);
            }
            return t.ready;
          });
        }
        upload(e, t) {
          return qn(this, void 0, void 0, function* () {
            const n = (0, c._)();
            try {
              e.file || (e.file = yield Bn(this, An, "f").call(this, e.accept));
              const i = yield t(e);
              n.done(i);
            } catch (e) {
              n.abort(e);
            }
            return n.ready;
          });
        }
        uploadUrl(e, t) {
          return qn(this, void 0, void 0, function* () {
            return Bn(this, Fn, "f").call(this, e, t);
          });
        }
        uploadContent(e, t) {
          return qn(this, void 0, void 0, function* () {
            return Bn(this, Dn, "f").call(this, e, t);
          });
        }
      }
      function Kn(e) {
        return `p${e.playerId || 0}:${(e.tags || []).join(",")}`;
      }
      (An = new WeakMap()),
        (Ln = new WeakMap()),
        (Fn = new WeakMap()),
        (Dn = new WeakMap()),
        Nn([Be(300)], Gn.prototype, "uploadUrl", null),
        Nn([Be(300)], Gn.prototype, "uploadContent", null);
      var Zn,
        Vn = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        },
        Yn = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      const Hn = "image/png,.jpeg,.jpg";
      class Xn extends Le.Z {
        constructor(e, t) {
          super(), (this.gp = e), (this.acl = t), Zn.set(this, new Gn());
        }
        get canUpload() {
          return this.acl.canUploadImages;
        }
        resize(e, t, n, i) {
          return (function (e, t, n, i) {
            const r = xn.exec(e);
            if (!r) return e;
            const [s, a] = (function (e) {
              const t = On.exec(e);
              return t ? [Number(t[1]) || 0, Number(t[2]) || 0] : [0, 0];
            })(e);
            s && t > s && (t = s),
              a && n > a && (n = a),
              t > jn && (t = jn),
              n > jn && (n = jn);
            const [, o, , , , c] = r;
            return `https://cdn.${o}.com/static/${t || "-"}x${n || "-"}${
              i ? "crop" : ""
            }/${c}`;
          })(e, t, n, i);
        }
        chooseFile() {
          return Vn(this, void 0, void 0, function* () {
            const e = Yn(this, Zn, "f").chooseFile(Hn);
            return (
              e.then((e) => this._events.emit("choose", e)),
              e.catch((e) => this._events.emit("error:choose", e)),
              e
            );
          });
        }
        upload(e = {}) {
          const t = Yn(this, Zn, "f").upload(
            Object.assign(Object.assign({}, e), { accept: Hn }),
            (e) =>
              Vn(this, void 0, void 0, function* () {
                const t = yield this.gp.platform.requestPermissions({
                  allowUploadImages: !0,
                });
                if (!t.success)
                  throw new Error("permission_not_allowed_by_user");
                return this.gp._imagesService.upload(
                  Object.assign(Object.assign({}, e), {
                    accessPayload: t.payload,
                  })
                );
              })
          );
          return (
            this.gp.loader.inc(),
            t.then((e) => this._events.emit("upload", e)),
            t.catch((e) => this._events.emit("error:upload", e)),
            t.finally(() => this.gp.loader.dec()),
            t
          );
        }
        uploadUrl(e = { url: "" }) {
          return Vn(this, void 0, void 0, function* () {
            return Yn(this, Zn, "f").uploadUrl(
              Object.assign(Object.assign({}, e), { filename: "image" }),
              (e) => this.upload(e)
            );
          });
        }
        fetch(e = {}) {
          return Vn(this, void 0, void 0, function* () {
            const t = Yn(this, Zn, "f").fetch(e, (e) =>
              this.gp._imagesService.fetch(e).then((e) => e.items)
            );
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("fetch", e)),
              t.catch((e) => this._events.emit("error:fetch", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
        fetchMore(e = {}) {
          return Vn(this, void 0, void 0, function* () {
            const t = Yn(this, Zn, "f").fetchMore(e, (e) =>
              this.gp._imagesService.fetch(e).then((e) => e.items)
            );
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("fetchMore", e)),
              t.catch((e) => this._events.emit("error:fetchMore", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
      }
      Zn = new WeakMap();
      var Qn,
        ei = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      const ti =
          "\n    id: _id\n    playerId\n    src\n    size\n    name\n    tags\n",
        ni = `\n    ... on FilesList {\n        items { ${ti} }\n    }\n`,
        ii = `\n    ... on File { ${ti} }\n`,
        ri = `query($input: FetchPlayerFilesInput!) {\n    result: FetchPlayerFiles(input: $input) { ${(0,
        l.Mn)(ni)} }\n}`,
        si = `mutation($input: UploadPlayerFileInput!) {\n    result: UploadPlayerFile(input: $input) { ${(0,
        l.Mn)(ii)} }\n}`;
      class ai {
        constructor(e) {
          Qn.set(this, void 0),
            (function (e, t, n, i, r) {
              if ("m" === i)
                throw new TypeError("Private method is not writable");
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a setter"
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it"
                );
              "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n);
            })(this, Qn, e, "f");
        }
        fetch({ playerId: e, limit: t, offset: n, tags: i }) {
          return ei(this, Qn, "f").fetch(ri, {
            playerId: e,
            limit: t,
            offset: n,
            tags: i,
          });
        }
        upload({ file: e, tags: t }) {
          return ei(this, Qn, "f").fetch(si, { file: e, tags: t });
        }
      }
      Qn = new WeakMap();
      var oi,
        ci = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        },
        hi = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      class li extends Le.Z {
        constructor(e, t) {
          super(), (this.gp = e), (this.acl = t), oi.set(this, new Gn());
        }
        get canUpload() {
          return this.acl.canUploadFiles;
        }
        chooseFile(e) {
          return ci(this, void 0, void 0, function* () {
            const t = hi(this, oi, "f").chooseFile(e);
            return (
              t.then((e) => this._events.emit("choose", e)),
              t.catch((e) => this._events.emit("error:choose", e)),
              t
            );
          });
        }
        upload(e) {
          return ci(this, void 0, void 0, function* () {
            const t = hi(this, oi, "f").upload(e, (e) =>
              this.gp._filesService.upload(e)
            );
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("upload", e)),
              t.catch((e) => this._events.emit("error:upload", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
        uploadContent(e) {
          return ci(this, void 0, void 0, function* () {
            return hi(this, oi, "f").uploadContent(e, (e) => this.upload(e));
          });
        }
        uploadUrl(e) {
          return ci(this, void 0, void 0, function* () {
            return hi(this, oi, "f").uploadUrl(e, (e) => this.upload(e));
          });
        }
        loadContent(e) {
          return ci(this, void 0, void 0, function* () {
            const t = fetch(new URL(e).toString()).then((t) => {
              if (t.ok) return t.text();
              throw new Error(`Failed to load ${e}, errorCode: ${t.status}`);
            });
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("loadContent", e)),
              t.catch((e) => this._events.emit("error:loadContent", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
        fetch(e = {}) {
          return ci(this, void 0, void 0, function* () {
            const t = hi(this, oi, "f").fetch(e, (e) =>
              this.gp._filesService.fetch(e).then((e) => e.items)
            );
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("fetch", e)),
              t.catch((e) => this._events.emit("error:fetch", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
        fetchMore(e = {}) {
          return ci(this, void 0, void 0, function* () {
            const t = hi(this, oi, "f").fetchMore(e, (e) =>
              this.gp._filesService.fetch(e).then((e) => e.items)
            );
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("fetchMore", e)),
              t.catch((e) => this._events.emit("error:fetchMore", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
      }
      oi = new WeakMap();
      var ui = a(1049);
      class di extends Le.Z {
        constructor(e) {
          super(), (this.gp = e);
        }
        fetch({ ids: e }) {
          return (
            (t = this),
            (n = void 0),
            (r = function* () {
              if (0 === e.map(Number).filter(Boolean).length)
                throw (Te.kg.error("empty_ids"), new Error("empty_ids"));
              const t = (0, c._)();
              return (
                this.gp.loader.inc(),
                t.ready
                  .then((e) => this._events.emit("fetch", e))
                  .catch((e) => this._events.emit("fetch:error", e)),
                this.gp._playerService
                  .fetchPlayers({ ids: e })
                  .then(t.done)
                  .catch(t.abort)
                  .finally(() => this.gp.loader.dec()),
                t.ready
              );
            }),
            new ((i = void 0) || (i = Promise))(function (e, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(t) {
                var n;
                t.done
                  ? e(t.value)
                  : ((n = t.value),
                    n instanceof i
                      ? n
                      : new i(function (e) {
                          e(n);
                        })).then(a, o);
              }
              c((r = r.apply(t, n || [])).next());
            })
          );
          var t, n, i, r;
        }
      }
      let pi;
      try {
        new EventTarget(), (pi = !0);
      } catch (e) {
        pi = !1;
      }
      var fi = pi
          ? EventTarget
          : class {
              constructor() {
                this.e = {};
              }
              addEventListener(e, t, n = !1) {
                this.t(e).push(t);
              }
              removeEventListener(e, t, n = !1) {
                const i = this.t(e),
                  r = i.indexOf(t);
                r > -1 && i.splice(r, 1);
              }
              dispatchEvent(e) {
                return (
                  (e.target = this),
                  Object.freeze(e),
                  this.t(e.type).forEach((t) => t(e)),
                  !0
                );
              }
              t(e) {
                return (this.e[e] = this.e[e] || []);
              }
            },
        gi = pi
          ? Event
          : class {
              constructor(e) {
                this.type = e;
              }
            };
      class vi extends gi {
        constructor(e, t) {
          super(e),
            (this.newState = t.newState),
            (this.oldState = t.oldState),
            (this.originalEvent = t.originalEvent);
        }
      }
      const mi = "active",
        yi = "passive",
        wi = "hidden",
        bi = "frozen",
        Pi = "terminated",
        _i = "object" == typeof safari && safari.pushNotification,
        Ii = [
          "focus",
          "blur",
          "visibilitychange",
          "freeze",
          "resume",
          "pageshow",
          "onpageshow" in self ? "pagehide" : "unload",
        ],
        Si = (e) => (e.preventDefault(), (e.returnValue = "Are you sure?")),
        ki = [
          [mi, yi, wi, Pi],
          [mi, yi, wi, bi],
          [wi, yi, mi],
          [bi, wi],
          [bi, mi],
          [bi, yi],
        ].map((e) => e.reduce((e, t, n) => ((e[t] = n), e), {})),
        Ei = () =>
          document.visibilityState === wi ? wi : document.hasFocus() ? mi : yi,
        Ci = new (class extends fi {
          constructor() {
            super();
            const e = Ei();
            (this.s = e),
              (this.i = []),
              (this.a = this.a.bind(this)),
              Ii.forEach((e) => addEventListener(e, this.a, !0)),
              _i &&
                addEventListener("beforeunload", (e) => {
                  this.n = setTimeout(() => {
                    e.defaultPrevented ||
                      e.returnValue.length > 0 ||
                      this.r(e, wi);
                  }, 0);
                });
          }
          get state() {
            return this.s;
          }
          get pageWasDiscarded() {
            return document.wasDiscarded || !1;
          }
          addUnsavedChanges(e) {
            !this.i.indexOf(e) > -1 &&
              (0 === this.i.length && addEventListener("beforeunload", Si),
              this.i.push(e));
          }
          removeUnsavedChanges(e) {
            const t = this.i.indexOf(e);
            t > -1 &&
              (this.i.splice(t, 1),
              0 === this.i.length && removeEventListener("beforeunload", Si));
          }
          r(e, t) {
            if (t !== this.s) {
              const n = ((e, t) => {
                for (let n, i = 0; (n = ki[i]); ++i) {
                  const i = n[e],
                    r = n[t];
                  if (i >= 0 && r >= 0 && r > i)
                    return Object.keys(n).slice(i, r + 1);
                }
                return [];
              })(this.s, t);
              for (let t = 0; t < n.length - 1; ++t) {
                const i = n[t],
                  r = n[t + 1];
                (this.s = r),
                  this.dispatchEvent(
                    new vi("statechange", {
                      oldState: i,
                      newState: r,
                      originalEvent: e,
                    })
                  );
              }
            }
          }
          a(e) {
            switch ((_i && clearTimeout(this.n), e.type)) {
              case "pageshow":
              case "resume":
                this.r(e, Ei());
                break;
              case "focus":
                this.r(e, mi);
                break;
              case "blur":
                this.s === mi && this.r(e, Ei());
                break;
              case "pagehide":
              case "unload":
                this.r(e, e.persisted ? bi : Pi);
                break;
              case "visibilitychange":
                this.s !== bi && this.s !== Pi && this.r(e, Ei());
                break;
              case "freeze":
                this.r(e, bi);
            }
          }
        })(),
        $i = ["hidden", "frozen", "terminated"];
      function Mi({ url: e, blur: t = 0, fade: n = 0 }) {
        e
          ? ((function (e) {
              document
                .querySelectorAll(".gp-custom-background")
                .forEach((t) => {
                  t.childNodes.forEach((e) => {
                    e.style.opacity = "0";
                  }),
                    setTimeout(() => {
                      t.remove();
                    }, 1e3 * e);
                });
            })(n),
            (function (e) {
              const t = document.createElement("div");
              document.body.style.setProperty(
                "background",
                "transparent",
                "important"
              ),
                t.classList.add("gp-custom-background"),
                (function (e, t) {
                  const n = document.createElement("div");
                  (n.style.cssText = `\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n        background: transparent;\n        backdrop-filter: blur(${e.blur}px);\n        \n        transition: ${e.fade}s;\n    `),
                    n.classList.add("gp-custom-background-blur"),
                    t.append(n);
                })(e, t),
                (function (e, t) {
                  const n = document.createElement("div");
                  (n.style.cssText = `\n        background-image: url(${e.url});\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        z-index: -2;\n        opacity: 0;\n        transition: ${e.fade}s;\n    `),
                    n.classList.add("gp-custom-background-img"),
                    t.append(n),
                    setTimeout(() => {
                      n.style.opacity = "1";
                    }, 100);
                })(e, t),
                document.body.append(t);
            })({ url: e, blur: t, fade: n }))
          : Te.kg.warn("Empty background url");
      }
      var Ti,
        Ri,
        ji,
        xi = function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, s) {
            function a(e) {
              try {
                c(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? r(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((i = i.apply(e, t || [])).next());
          });
        },
        Oi = function (e, t, n, i, r) {
          if ("m" === i) throw new TypeError("Private method is not writable");
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a setter"
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n), n;
        },
        Ai = function (e, t, n, i) {
          if ("a" === n && !i)
            throw new TypeError(
              "Private accessor was defined without a getter"
            );
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        };
      class Li extends Le.Z {
        constructor() {
          super(),
            (this.setBackground = Mi),
            (this.isPaused = !1),
            (this.isGameplay = !1),
            (this.logger = Te.kg),
            Ti.set(this, void 0),
            Ri.set(this, void 0),
            ji.set(this, void 0);
          const e = (0, c._)();
          this.ready = e.ready;
          const r = new URL(document.currentScript.src).searchParams;
          this.projectId = Number(r.get("projectId"));
          const s = r.get("publicToken"),
            o = r.get("callback") || "onGPInit";
          this.ready.then((e) => {
            var t, n, i, r;
            null === (n = (t = window)[o]) || void 0 === n || n.call(t, e),
              "onGSInit" !== o &&
                (null === (r = (i = window).onGSInit) ||
                  void 0 === r ||
                  r.call(i, e));
          }),
            (this.fullscreen = new st()),
            (this.analytics = new at()),
            (this.leaderboard = new We(this)),
            (this.gamesCollections = new Lt(this)),
            (this.documents = new wn(this)),
            (this.players = new di(this)),
            (this.isMobile = t()({ tablet: !0, featureDetect: !0 }));
          const l = navigator.language.slice(0, 2).toLowerCase(),
            u = Object.values(Re.Uo).includes(l) ? l : null,
            d = (function () {
              const e = new URL(window.location.href),
                { searchParams: t, hostname: n } = e;
              return t.has("_platform")
                ? t.get("_platform")
                : (function (e) {
                    return (
                      !!e.hostname.includes(
                        ["games", "s3", "yandex", "net"].join(".")
                      ) ||
                      (!!e.hash.includes("origin=https") &&
                        (e.hash.includes("app-id=") ||
                          e.searchParams.has("app-id")))
                    );
                  })(e)
                ? i.z.YANDEX
                : n.includes("gamemonetize.co")
                ? i.z.GAME_MONETIZE
                : n.includes("gamedistribution.co")
                ? i.z.GAME_DISTRIBUTION
                : n.includes("crazygames.com")
                ? i.z.CRAZY_GAMES
                : n.includes(".gamepix.com")
                ? i.z.GAMEPIX
                : n.includes("poki.com") ||
                  t.has("pokiDebug") ||
                  n.includes("poki-gdn.com")
                ? i.z.POKI
                : (t.has("api_id") &&
                    t.has("viewer_id") &&
                    t.has("auth_key")) ||
                  (t.get("vk_user_id") && t.get("sign") && t.get("vk_app_id"))
                ? i.z.VK
                : t.has("auth_sig") && t.has("session_key")
                ? i.z.OK
                : n.includes("static.developer.sberdevices.ru") ||
                  (Array.isArray(window.appInitialData) &&
                    window.appInitialData.some(
                      (e) => "app_context" === (null == e ? void 0 : e.type)
                    ))
                ? i.z.SMARTMARKET
                : (function (e) {
                    const { searchParams: t } = e;
                    if (!(t.get("lang") || "").includes("_")) return !1;
                    if (!t.has("currency")) return !1;
                    if (t.has("uid") && t.has("sign") && t.has("appid"))
                      return !0;
                    const n = t.get("status");
                    return (
                      Number(t.get("appid")) > 0 ||
                      (n.length > 0 && !Number.isNaN(t.get("status")))
                    );
                  })(e)
                ? i.z.VK_PLAY
                : i.z.NONE;
            })();
          Oi(
            this,
            Ri,
            new g(
              "patch/json/eponesh.json?https://api.eponesh.com/gs/api",
              this.projectId,
              s,
              u || Re.Uo.EN,
              d
            ),
            "f"
          );
          const p = (e) => {
            Ai(this, Ri, "f").setPlayerData(e);
          };
          var f, v;
          (this._playerService = new h.Z(Ai(this, Ri, "f"))),
            (this._channelsService = new Se(Ai(this, Ri, "f"))),
            (this._leaderboardsService = new gn(Ai(this, Ri, "f"))),
            (this._projectService = new Re.ZP(Ai(this, Ri, "f"))),
            (this._achievementsService = new vt.ZP(Ai(this, Ri, "f"))),
            (this._paymentsService = new Ct.ZP(Ai(this, Ri, "f"))),
            (this._gamesCollectionsService = new Mt(Ai(this, Ri, "f"))),
            (this._documentsService = new mn(Ai(this, Ri, "f"))),
            (this._imagesService = new Rn(Ai(this, Ri, "f"))),
            (this._filesService = new ai(Ai(this, Ri, "f"))),
            (function ({ platformType: e, tools: t }) {
              return (function (e, t) {
                switch (e) {
                  case i.z.YANDEX:
                    return a
                      .e(755)
                      .then(a.bind(a, 2855))
                      .then((e) => e.default(t));
                  case i.z.VK:
                    return a
                      .e(911)
                      .then(a.bind(a, 1440))
                      .then((e) => e.default(t));
                  case i.z.OK:
                    return a
                      .e(614)
                      .then(a.bind(a, 1069))
                      .then((e) => e.default(t));
                  case i.z.GAME_MONETIZE:
                    return a
                      .e(369)
                      .then(a.bind(a, 3978))
                      .then((e) => e.default(t));
                  case i.z.GAMEPIX:
                    return a
                      .e(477)
                      .then(a.bind(a, 5940))
                      .then((e) => e.default(t));
                  case i.z.POKI:
                    return a
                      .e(477)
                      .then(a.bind(a, 449))
                      .then((e) => e.default(t));
                  case i.z.GAME_DISTRIBUTION:
                    return a
                      .e(860)
                      .then(a.bind(a, 3102))
                      .then((e) => e.default(t));
                  case i.z.CRAZY_GAMES:
                    return a
                      .e(433)
                      .then(a.bind(a, 1229))
                      .then((e) => e.default(t));
                  case i.z.SMARTMARKET:
                    return a
                      .e(552)
                      .then(a.bind(a, 5122))
                      .then((e) => e.default(t));
                  case i.z.VK_PLAY:
                    return a
                      .e(70)
                      .then(a.bind(a, 558))
                      .then((e) => e.default(t));
                  case i.z.NONE:
                  default:
                    return a
                      .e(477)
                      .then(a.bind(a, 254))
                      .then((e) => e.default(t));
                }
              })(e, t);
            })({
              platformType: d,
              tools: {
                gp: this,
                setupStorage: (e) => {
                  const t = [new Pt(this.projectId), ...e];
                  try {
                    null !== window.localStorage &&
                      t.push(new kt(this.projectId));
                  } catch (e) {}
                  return (this._storage = new Ae(t)), this._storage.ready;
                },
                fetchConfig: (e) =>
                  xi(this, void 0, void 0, function* () {
                    yield this._storage.ready;
                    const [t, n] = yield Promise.all([
                      this._storage.loadLanguage(),
                      this._storage.loadConfig(),
                      this._storage.loadAdsInfo(),
                    ]);
                    return (
                      t || this._storage.saveLanguage(null),
                      (this.language = t || e || u || Re.Uo.EN),
                      Ai(this, Ri, "f").setLang(this.language),
                      this._projectService
                        .fetchConfig()
                        .then((e) => e || n)
                        .catch((e) => (console.error(e), n))
                    );
                  }),
              },
            })
              .then((t) =>
                xi(this, void 0, void 0, function* () {
                  const {
                    adsAdapter: r,
                    playerAdapter: s,
                    platformAdapter: o,
                    socialsAdapter: c,
                    paymentsAdapter: h,
                    projectConfig: l,
                    appAdapter: u,
                  } = t;
                  Oi(this, Ti, l, "f"),
                    d !== i.z.GAMEPIX &&
                      (l.config.ymCounterId &&
                        this.analytics.addCounter(
                          new ht({ counterId: l.config.ymCounterId })
                        ),
                      l.config.gtagCounterId &&
                        this.analytics.addCounter(
                          new ut({ counterId: l.config.gtagCounterId })
                        )),
                    (this.avatarGenerator = l.config.avatarGenerator),
                    (this.avatarGeneratorTemplate =
                      l.config.avatarGeneratorTemplate),
                    (this.loader = (function (e) {
                      let t = 0;
                      const n = document.createElement("div");
                      function i() {
                        n.style.display = t > 0 ? "flex" : "none";
                      }
                      return (
                        n.classList.add("gs-global-loader"),
                        (n.innerHTML = `<div class="gs-loader ${
                          !e && "gs-loader-hidden"
                        }">\n        <div class="gs-loader__outter"></div>\n        <div class="gs-loader__inner"></div>\n    </div>`),
                        document.body.appendChild(n),
                        {
                          inc() {
                            (t += 1), i();
                          },
                          dec() {
                            (t = t <= 0 ? 0 : t - 1), i();
                          },
                        }
                      );
                    })(l.config.showLoader)),
                    this._storage.saveConfig(l),
                    (this.platform = new ke(l.platformConfig, o)),
                    (this.ads = new n.Z(this, r, l)),
                    (this.app = new ft(this, u, l)),
                    (this.socials = new pt(c, this)),
                    (this.channels = new nn(this, l)),
                    (this.player = new rt({}, l.playerFields, s, this, p)),
                    (this.payments = new $t.Z(this, h)),
                    (this.variables = new In(this, l.gameVariables || [])),
                    (this.images = new Xn(this, l.acl)),
                    (this.files = new li(this, l.acl)),
                    (this.achievements = new mt.Z(
                      this,
                      l.project.achievements
                    )),
                    Oi(this, ji, Date.parse(l.serverTime), "f"),
                    setInterval(
                      () => Oi(this, ji, Ai(this, ji, "f") + 1e3, "f"),
                      1e3
                    ),
                    this.isDev
                      ? ((this.devtools = yield Promise.all([
                          a.e(690),
                          a.e(9),
                          a.e(863),
                        ])
                          .then(a.bind(a, 5169))
                          .then((e) => e.default(this, l))),
                        l.config.showReqCounter &&
                          Ai(this, Ri, "f").addCounterListener((e) => {
                            this.devtools.showCounter(e);
                          }))
                      : Te.kg.stopCollect(),
                    this.init(e);
                })
              )
              .catch(Te.kg.error),
            (f = () => this.pause()),
            (v = () => {
              this.ads &&
                (this.ads.isFullscreenPlaying ||
                  this.ads.isPreloaderPlaying ||
                  this.ads.isRewardedPlaying ||
                  this.resume());
            }),
            Ci.addEventListener("statechange", (e) => {
              $i.includes(e.newState) ? f() : v();
            });
        }
        get nativeSDK() {
          return this.platform.getNativeSDK();
        }
        get serverTime() {
          return new Date(Ai(this, ji, "f")).toISOString();
        }
        get isDev() {
          var e;
          return (
            (null === (e = Ai(this, Ti, "f")) || void 0 === e
              ? void 0
              : e.isDev) || !1
          );
        }
        get isAllowedOrigin() {
          var e;
          return (
            (null === (e = Ai(this, Ti, "f")) || void 0 === e
              ? void 0
              : e.isAllowedOrigin) || !1
          );
        }
        get locale() {
          return Re.h$[this.language] || "en-US";
        }
        init(e) {
          return xi(this, void 0, void 0, function* () {
            this.ads.on("fullscreen:start", () => this.pause()),
              this.ads.on("fullscreen:close", () => this.resume()),
              this.ads.on("preloader:start", () => this.pause()),
              this.ads.on("preloader:close", () => this.resume()),
              this.ads.on("rewarded:start", () => this.pause()),
              this.ads.on("rewarded:close", () => this.resume()),
              yield Promise.all([this.ads.checkAdblock()]).catch(Te.kg.warn),
              e.done(this);
          });
        }
        loadOverlay() {
          return xi(this, void 0, void 0, function* () {
            this.overlay ||
              ((this.overlay = yield Promise.all([
                a.e(690),
                a.e(9),
                a.e(573),
                a.e(460),
              ])
                .then(a.bind(a, 5494))
                .then((e) => e.default(this))),
              this._events.emit("overlay:ready"));
          });
        }
        changeLanguage(e) {
          return xi(this, void 0, void 0, function* () {
            if (this.language !== e)
              try {
                if (!Object.values(Re.Uo).includes(e))
                  throw new Error(`Language ${e} not supported`);
                (this.language = e),
                  this._storage.saveLanguage(e),
                  this.overlay && (yield this.overlay.changeLanguage(e)),
                  Ai(this, Ri, "f").setLang(this.language),
                  this._events.emit("change:language", this.language);
              } catch (e) {
                Te.kg.error(e);
              }
          });
        }
        changeAvatarGenerator() {
          return xi(this, void 0, void 0, function* () {
            Te.kg.warn("[DEPRECATED]: changeAvatarGenerator");
          });
        }
        generateAvatar(e, t) {
          return (0, ui.Z)(this.avatarGeneratorTemplate, e, t);
        }
        pause() {
          this.isPaused || ((this.isPaused = !0), this._events.emit("pause"));
        }
        resume() {
          this.isPaused && ((this.isPaused = !1), this._events.emit("resume"));
        }
        gameStart() {
          return xi(this, void 0, void 0, function* () {
            yield this.ready, this._events.emit("gameStart");
          });
        }
        gameplayStart() {
          return xi(this, void 0, void 0, function* () {
            yield this.ready,
              this.isGameplay ||
                ((this.isGameplay = !0), this._events.emit("gameplayStart"));
          });
        }
        gameplayStop() {
          return xi(this, void 0, void 0, function* () {
            yield this.ready,
              this.isGameplay &&
                ((this.isGameplay = !1), this._events.emit("gameplayStop"));
          });
        }
      }
      (Ti = new WeakMap()),
        (Ri = new WeakMap()),
        (ji = new WeakMap()),
        new Li();
    })();
})();
