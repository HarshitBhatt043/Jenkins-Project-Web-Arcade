!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
  }
})(self, function () {
  return (
    (e = {
      287: (e, t, n) => {
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        function i(e, t, n, r, i, o, a) {
          try {
            var s = e[o](a),
              u = s.value;
          } catch (e) {
            return void n(e);
          }
          s.done ? t(u) : Promise.resolve(u).then(r, i);
        }
        function o(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, o) {
              var a = e.apply(t, n);
              function s(e) {
                i(a, r, o, s, u, "next", e);
              }
              function u(e) {
                i(a, r, o, s, u, "throw", e);
              }
              s(void 0);
            });
          };
        }
        function a(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function s(e, t) {
          return (
            (s =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            s(e, t)
          );
        }
        function u(e, t) {
          if (t && ("object" === r(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return c(e);
        }
        function c(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function d(e) {
          return (
            (d = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            d(e)
          );
        }
        n(5666),
          n(9730),
          n(6253),
          n(851),
          n(4336),
          n(8838),
          n(1520),
          n(2139),
          n(8132),
          n(8388),
          n(5767),
          n(9115),
          n(6997),
          n(1181);
        var l = (function (e) {
          "use strict";
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && s(e, t);
          })(g, e);
          var t,
            n,
            r,
            i,
            l,
            f,
            v =
              ((l = g),
              (f = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = d(l);
                if (f) {
                  var n = d(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return u(this, e);
              });
          function g() {
            var e;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, g),
              ((e = v.call(this))._initialized = !1),
              (e._windowLoaded = !1),
              (e.init = e.init.bind(c(e))),
              (e.isInitialized = e.isInitialized.bind(c(e))),
              (e.notifyLoadingProgress = e.notifyLoadingProgress.bind(c(e))),
              (e.notifyLoadingComplete = e.notifyLoadingComplete.bind(c(e))),
              (e.notifyLevelEnd = e.notifyLevelEnd.bind(c(e))),
              (e.requestInterstitialAd = e.requestInterstitialAd.bind(c(e))),
              (e.requestBannerAd = e.requestBannerAd.bind(c(e))),
              (e.setConfig = e.setConfig.bind(c(e))),
              (e.getConfig = e.getConfig.bind(c(e))),
              (e.setBestScore = e.setBestScore.bind(c(e))),
              (e.resetBestScore = e.resetBestScore.bind(c(e))),
              (e.getBestScore = e.getBestScore.bind(c(e))),
              (e.requestRewardedAd = e.requestRewardedAd.bind(c(e))),
              (e.showPreloadedRewardedAd = e.showPreloadedRewardedAd.bind(
                c(e)
              )),
              (e.preloadRewardedAd = e.preloadRewardedAd.bind(c(e))),
              (e.createShortcutAsync = e.createShortcutAsync.bind(c(e))),
              (e.saveProgression = e.saveProgression.bind(c(e))),
              (e.getSavedProgression = e.getSavedProgression.bind(c(e))),
              (e._onWindowLoaded = e._onWindowLoaded.bind(c(e))),
              (e._onAdError = e._onAdError.bind(c(e))),
              (e.sdkInstance = null),
              (e._config = {}),
              window.addEventListener("load", e._onWindowLoaded),
              e
            );
          }
          return (
            (t = g),
            (n = [
              {
                key: "_onAdError",
                value: function (e) {
                  return console.log(e), !1;
                },
              },
              {
                key: "_onWindowLoaded",
                value: function () {
                  window.removeEventListener("load", this._onWindowLoaded),
                    (this._windowLoaded = !0);
                },
              },
              {
                key: "saveProgression",
                value: function (e, t) {
                  return (
                    localStorage.setItem(e, JSON.stringify(t)),
                    Promise.resolve(!0)
                  );
                },
              },
              {
                key: "getSavedProgression",
                value: function (e) {
                  var t = e;
                  "string" == typeof e && (t = [e]);
                  var n = {};
                  return (
                    t.forEach(function (e) {
                      n[e] = JSON.parse(localStorage.getItem(e));
                    }),
                    Promise.resolve(n)
                  );
                },
              },
              {
                key: "setConfig",
                value: function (e) {
                  this._config = e;
                },
              },
              {
                key: "setBestScore",
                value:
                  ((i = o(
                    regeneratorRuntime.mark(function e(t) {
                      var n;
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  this.getBestScore()
                                );
                              case 3:
                                if (((n = e.sent), !(t > n))) {
                                  e.next = 10;
                                  break;
                                }
                                return (
                                  (e.next = 7),
                                  this.saveProgression(
                                    "___internalBestScore___",
                                    t
                                  )
                                );
                              case 7:
                                return e.abrupt("return", !0);
                              case 10:
                                return e.abrupt("return", !1);
                              case 11:
                                e.next = 16;
                                break;
                              case 13:
                                (e.prev = 13),
                                  (e.t0 = e.catch(0)),
                                  console.log(e.t0);
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 13]]
                      );
                    })
                  )),
                  function (e) {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: "resetBestScore",
                value: function (e) {
                  return this.saveProgression("___internalBestScore___", e);
                },
              },
              {
                key: "getBestScore",
                value: function () {
                  return this.getSavedProgression([
                    "___internalBestScore___",
                  ]).then(function (e) {
                    return e.___internalBestScore___ || 0;
                  });
                },
              },
              {
                key: "getConfig",
                value: function () {
                  return this._config;
                },
              },
              {
                key: "getName",
                value: function () {
                  return "base";
                },
              },
              {
                key: "init",
                value: function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    e._windowLoaded
                      ? ((e._initialized = !0), t())
                      : window.addEventListener("load", function n() {
                          window.removeEventListener("load", n),
                            (e._initialized = !0),
                            t();
                        });
                  });
                },
              },
              {
                key: "isInitialized",
                value: function () {
                  return this._initialized;
                },
              },
              {
                key: "createShortcutAsync",
                value: function () {
                  return this.isInitialized()
                    ? Promise.resolve(!1)
                    : Promise.reject("not initialized");
                },
              },
              { key: "notifyLoadingProgress", value: function (e) {} },
              {
                key: "notifyLoadingComplete",
                value: function () {
                  return this.isInitialized()
                    ? Promise.resolve(!0)
                    : Promise.reject("not initialized");
                },
              },
              {
                key: "notifyLevelEnd",
                value: function (e, t, n) {
                  return this.setBestScore(t);
                },
              },
              {
                key: "requestInterstitialAd",
                value: function () {
                  return this.isInitialized()
                    ? Promise.resolve(!0)
                    : Promise.reject("not initialized");
                },
              },
              {
                key: "requestBannerAd",
                value: function () {
                  return this.isInitialized()
                    ? Promise.resolve(!0)
                    : Promise.reject("not initialized");
                },
              },
              {
                key: "preloadRewardedAd",
                value: function () {
                  return this.isInitialized()
                    ? Promise.resolve(!0)
                    : Promise.reject("not initialized");
                },
              },
              {
                key: "showPreloadedRewardedAd",
                value: function () {
                  return this.isInitialized()
                    ? Promise.resolve(!0)
                    : Promise.reject("not initialized");
                },
              },
              {
                key: "requestRewardedAd",
                value:
                  ((r = o(
                    regeneratorRuntime.mark(function e() {
                      return regeneratorRuntime.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.isInitialized()) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  Promise.reject("not initialized")
                                );
                              case 2:
                                return (
                                  (e.prev = 2),
                                  (e.next = 5),
                                  this.preloadRewardedAd()
                                );
                              case 5:
                                if (!e.sent) {
                                  e.next = 10;
                                  break;
                                }
                                return (
                                  (e.next = 9), this.showPreloadedRewardedAd()
                                );
                              case 9:
                                return e.abrupt("return", e.sent);
                              case 10:
                                return e.abrupt("return", !1);
                              case 13:
                                return (
                                  (e.prev = 13),
                                  (e.t0 = e.catch(2)),
                                  console.log(e.t0),
                                  e.abrupt("return", !1)
                                );
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 13]]
                      );
                    })
                  )),
                  function () {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: "isFacebook",
                value: function () {
                  return !1;
                },
              },
              {
                key: "isGameSnacks",
                value: function () {
                  return !1;
                },
              },
            ]),
            n && a(t.prototype, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            g
          );
        })(n(1978));
        e.exports = l;
      },
      4762: (e, t, n) => {
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        function i(e, t, n, r, i, o, a) {
          try {
            var s = e[o](a),
              u = s.value;
          } catch (e) {
            return void n(e);
          }
          s.done ? t(u) : Promise.resolve(u).then(r, i);
        }
        function o(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, o) {
              var a = e.apply(t, n);
              function s(e) {
                i(a, r, o, s, u, "next", e);
              }
              function u(e) {
                i(a, r, o, s, u, "throw", e);
              }
              s(void 0);
            });
          };
        }
        function a(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function s(e, t) {
          return (
            (s =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            s(e, t)
          );
        }
        function u(e, t) {
          if (t && ("object" === r(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return c(e);
        }
        function c(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function d() {
          return (
            (d =
              "undefined" != typeof Reflect && Reflect.get
                ? Reflect.get
                : function (e, t, n) {
                    var r = l(e, t);
                    if (r) {
                      var i = Object.getOwnPropertyDescriptor(r, t);
                      return i.get
                        ? i.get.call(arguments.length < 3 ? e : n)
                        : i.value;
                    }
                  }),
            d.apply(this, arguments)
          );
        }
        function l(e, t) {
          for (
            ;
            !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e));

          );
          return e;
        }
        function f(e) {
          return (
            (f = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            f(e)
          );
        }
        n(5666),
          n(9730),
          n(6253),
          n(851),
          n(8388),
          n(8838),
          n(1520),
          n(3049),
          n(4882),
          n(2139),
          n(8132),
          n(5767),
          n(9115),
          n(6997),
          n(1181);
        var v = n(8135),
          g =
            (v.reject,
            v.resolve,
            (function (e) {
              "use strict";
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  t && s(e, t);
              })(h, e);
              var t,
                n,
                r,
                i,
                l,
                v,
                g,
                p,
                m =
                  ((g = h),
                  (p = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                      return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
                  function () {
                    var e,
                      t = f(g);
                    if (p) {
                      var n = f(this).constructor;
                      e = Reflect.construct(t, arguments, n);
                    } else e = t.apply(this, arguments);
                    return u(this, e);
                  });
              function h() {
                var e, t, n, r, i;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, h),
                  (i = function (n, r, i) {
                    return (
                      i && GAMESNACKS.levelComplete(n),
                      GAMESNACKS.gameOver(),
                      d(((e = c(t)), f(h.prototype)), "notifyLevelEnd", e).call(
                        e,
                        n,
                        r,
                        i
                      )
                    );
                  }),
                  (r = "notifyLevelEnd") in (n = c((t = m.call(this))))
                    ? Object.defineProperty(n, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[r] = i),
                  (t._lastShowAdFn = null),
                  (t.requestInterstitialAd = t.requestInterstitialAd.bind(
                    c(t)
                  )),
                  (t.preloadRewardedAd = t.preloadRewardedAd.bind(c(t))),
                  (t.showPreloadedRewardedAd = t.showPreloadedRewardedAd.bind(
                    c(t)
                  )),
                  (t.adTimeout = 2e3),
                  t
                );
              }
              return (
                (t = h),
                (n = [
                  {
                    key: "setBestScore",
                    value:
                      ((v = o(
                        regeneratorRuntime.mark(function e(t) {
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return e.abrupt(
                                      "return",
                                      d(f(h.prototype), "setBestScore", this)
                                        .call(this, t)
                                        .then(function (e) {
                                          return (
                                            e && GAMESNACKS.sendScore(t), e
                                          );
                                        })
                                    );
                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      )),
                      function (e) {
                        return v.apply(this, arguments);
                      }),
                  },
                  {
                    key: "notifyLoadingComplete",
                    value: function () {
                      return this.isInitialized()
                        ? (GAMESNACKS.gameReady(), Promise.resolve(!0))
                        : Promise.reject("not initialized");
                    },
                  },
                  {
                    key: "getName",
                    value: function () {
                      return "gamesnacks";
                    },
                  },
                  {
                    key: "requestBannerAd",
                    value:
                      ((l = o(
                        regeneratorRuntime.mark(function e() {
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (this.isInitialized()) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt(
                                      "return",
                                      Promise.reject("not initialized")
                                    );
                                  case 2:
                                    return e.abrupt(
                                      "return",
                                      Promise.resolve(!0)
                                    );
                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      )),
                      function () {
                        return l.apply(this, arguments);
                      }),
                  },
                  {
                    key: "requestInterstitialAd",
                    value: function () {
                      return this.isInitialized()
                        ? Promise.resolve(!0)
                        : Promise.reject("not initialized");
                    },
                  },
                  {
                    key: "preloadRewardedAd",
                    value:
                      ((i = o(
                        regeneratorRuntime.mark(function e() {
                          var t,
                            n,
                            r,
                            i,
                            o = this;
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (this.isInitialized()) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt(
                                      "return",
                                      Promise.reject("not initialized")
                                    );
                                  case 2:
                                    return (
                                      (t = function () {
                                        null !== o.sdkInstance &&
                                          o.sdkInstance.pause();
                                      }),
                                      (n = function () {
                                        null !== o.sdkInstance &&
                                          o.sdkInstance.resume();
                                      }),
                                      (r = function () {
                                        o.dispatch("adComplete");
                                      }),
                                      (i = function () {
                                        o.dispatch("adDismissed");
                                      }),
                                      e.abrupt(
                                        "return",
                                        new Promise(function (e, a) {
                                          var s = setTimeout(function () {
                                            return e(!1);
                                          }, o.adTimeout);
                                          GAMESNACKS.rewardedAdOpportunity({
                                            beforeReward: function (t) {
                                              (o._lastShowAdFn = t),
                                                clearTimeout(s),
                                                e(!0);
                                            },
                                            beforeBreak: t,
                                            adComplete: r,
                                            adDismissed: i,
                                            afterBreak: n,
                                          });
                                        })
                                      )
                                    );
                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      )),
                      function () {
                        return i.apply(this, arguments);
                      }),
                  },
                  {
                    key: "showPreloadedRewardedAd",
                    value:
                      ((r = o(
                        regeneratorRuntime.mark(function e() {
                          var t = this;
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (this.isInitialized()) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt(
                                      "return",
                                      Promise.reject("not initialized")
                                    );
                                  case 2:
                                    return e.abrupt(
                                      "return",
                                      new Promise(function (e, n) {
                                        var r = function n() {
                                            t.removeEventListener(
                                              "adComplete",
                                              n
                                            ),
                                              t.removeEventListener(
                                                "adDismissed",
                                                i
                                              ),
                                              (t._lastShowAdFn = null),
                                              e(!0);
                                          },
                                          i = function n() {
                                            t.removeEventListener(
                                              "adComplete",
                                              r
                                            ),
                                              t.removeEventListener(
                                                "adDismissed",
                                                n
                                              ),
                                              (t._lastShowAdFn = null),
                                              e(!1);
                                          };
                                        t.addEventListener("adComplete", r),
                                          t.addEventListener("adDismissed", i),
                                          null === t._lastShowAdFn
                                            ? n("no preloaded ad")
                                            : t._lastShowAdFn();
                                      })
                                    );
                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      )),
                      function () {
                        return r.apply(this, arguments);
                      }),
                  },
                  {
                    key: "isGameSnacks",
                    value: function () {
                      return !0;
                    },
                  },
                ]),
                n && a(t.prototype, n),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                h
              );
            })(n(287)));
        e.exports = g;
      },
      2071: (e, t, n) => {
        function r(e) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            r(e)
          );
        }
        function i(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function o(e, t) {
          return (
            (o =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            o(e, t)
          );
        }
        function a(e, t) {
          if (t && ("object" === r(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return s(e);
        }
        function s(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function u(e) {
          return (
            (u = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            u(e)
          );
        }
        function c(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        n(6253),
          n(851),
          n(8388),
          n(8838),
          n(1520),
          n(2139),
          n(8132),
          n(5767),
          n(9115),
          n(6997),
          n(1181);
        var d = n(1978),
          l = n(4602),
          f = l.H5Analytics,
          v = l.ADTYPE,
          g = (function (e) {
            "use strict";
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, "prototype", { writable: !1 }),
                t && o(e, t);
            })(g, e);
            var t,
              n,
              r,
              d,
              l =
                ((r = g),
                (d = (function () {
                  if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                  if (Reflect.construct.sham) return !1;
                  if ("function" == typeof Proxy) return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                function () {
                  var e,
                    t = u(r);
                  if (d) {
                    var n = u(this).constructor;
                    e = Reflect.construct(t, arguments, n);
                  } else e = t.apply(this, arguments);
                  return a(this, e);
                });
            function g() {
              var e;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, g),
                c(s((e = l.call(this))), "enableAnalytics", function (t, n, r) {
                  return (
                    (e._tracking = new f(t, n, !0 === r)), e.getAnalytics()
                  );
                }),
                c(s(e), "setBuildVersion", function (t) {
                  e.isAnalyticsEnabled() &&
                    e._tracking.onGameSetBuildVersion(t);
                }),
                c(s(e), "getAnalytics", function () {
                  return e._tracking;
                }),
                c(s(e), "disableAnalytics", function () {
                  e._tracking = null;
                }),
                c(s(e), "isAnalyticsEnabled", function () {
                  return null !== e._tracking;
                }),
                c(s(e), "setPlatform", function (t) {
                  (e._platform = t), (e._platform.sdkInstance = s(e));
                }),
                c(s(e), "getPlatform", function () {
                  return e._platform;
                }),
                c(s(e), "init", function () {
                  null !== e._platform &&
                    e._platform.init().then(function () {
                      (e._state = "ready"),
                        e.dispatch("ready", {}),
                        (e._startLoadingTime = new Date().getTime()),
                        e.dispatch("startLoading", {});
                    });
                }),
                c(s(e), "saveProgression", function (t, n) {
                  null != e._platform && e._platform.saveProgression(t, n);
                }),
                c(s(e), "getSavedProgression", function (t) {
                  return null != e._platform
                    ? e._platform.getSavedProgression(t)
                    : null;
                }),
                c(s(e), "pause", function () {
                  e.dispatch("pause", {});
                }),
                c(s(e), "resume", function () {
                  e.dispatch("resume", {});
                }),
                c(s(e), "getState", function () {
                  return e._state;
                }),
                c(s(e), "notifyLoadingProgress", function (t) {
                  null !== e._platform && e._platform.notifyLoadingProgress(t);
                }),
                c(s(e), "notifyLoadingComplete", function () {
                  if (null !== e._platform)
                    return (
                      e.isAnalyticsEnabled() &&
                        e._tracking.onGamePreloadEnd(
                          new Date().getTime() - e._startLoadingTime
                        ),
                      e._platform.notifyLoadingComplete()
                    );
                  Promise.resolve(!1);
                }),
                c(s(e), "performHapticFeedBack", function (e) {}),
                c(s(e), "notifyLevelStart", function (t) {
                  e.isAnalyticsEnabled() && e._tracking.onLevelStarted(t);
                }),
                c(s(e), "notifyUpdateScore", function (t) {
                  null !== e._platform && e._platform.setBestScore(t);
                }),
                c(s(e), "notifyLevelEnd", function (t, n, r) {
                  if (
                    (e.isAnalyticsEnabled() &&
                      e._tracking.onLevelEnded(n, r, t),
                    null !== e._platform)
                  )
                    return e._platform.notifyLevelEnd(t, n, r);
                  Promise.resolve(!0);
                }),
                c(s(e), "requestInterstitialAd", function () {
                  if (null !== e._platform)
                    return e._platform
                      .requestInterstitialAd()
                      .then(function (t) {
                        return (
                          e.isAnalyticsEnabled() &&
                            e._tracking.onAdImpression(
                              v.INTERSTITIAL,
                              e.getPlatform().getName()
                            ),
                          t
                        );
                      })
                      .catch(function (t) {
                        e.isAnalyticsEnabled() &&
                          e._tracking.onAdFailedLoad(v.INTERSTITIAL);
                      });
                }),
                c(s(e), "requestBannerAd", function () {
                  if (null !== e._platform)
                    return e._platform
                      .requestBannerAd()
                      .then(function (t) {
                        return (
                          e.isAnalyticsEnabled() &&
                            e._tracking.onAdImpression(
                              v.BANNER,
                              e.getPlatform().getName()
                            ),
                          t
                        );
                      })
                      .catch(function (t) {
                        e.isAnalyticsEnabled() &&
                          e._tracking.onAdFailedLoad(v.BANNER);
                      });
                }),
                c(s(e), "requestRewardedAd", function () {
                  if (null !== e._platform)
                    return e._platform
                      .requestRewardedAd()
                      .then(function (t) {
                        return (
                          e.isAnalyticsEnabled() &&
                            e._tracking.onAdImpression(
                              v.REWARDED,
                              e.getPlatform().getName()
                            ),
                          t
                        );
                      })
                      .catch(function (t) {
                        e.isAnalyticsEnabled() &&
                          e._tracking.onAdFailedLoad(v.REWARDED);
                      });
                }),
                c(s(e), "createShortcutAsync", function () {
                  return null !== e._platform
                    ? e._platform.createShortcutAsync()
                    : Promise.resolve(!1);
                }),
                (e._state = "loading"),
                (e._platform = null),
                (e._tracking = null),
                (e._startLoadingTime = new Date().getTime()),
                (e._bestScore = 0),
                e
              );
            }
            return (
              (t = g),
              (n = [
                {
                  key: "preloadRewardedAd",
                  value: function () {
                    var e = this;
                    if (null !== this._platform)
                      return this._platform
                        .preloadRewardedAd()
                        .catch(function (t) {
                          e.isAnalyticsEnabled() &&
                            e._tracking.onAdFailedLoad(v.REWARDED);
                        });
                  },
                },
                {
                  key: "showPreloadedRewardedAd",
                  value: function () {
                    var e = this;
                    if (null !== this._platform)
                      return this._platform
                        .showPreloadedRewardedAd()
                        .catch(function (t) {
                          e.isAnalyticsEnabled() &&
                            e._tracking.onAdFailedLoad(v.REWARDED);
                        });
                  },
                },
              ]) && i(t.prototype, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              g
            );
          })(d);
        e.exports = g;
      },
      1978: (e, t, n) => {
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function i(e, t, n) {
          return (
            t && r(e.prototype, t),
            n && r(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        function o(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        n(4336), n(3369), n(8416), n(9115), n(6253), n(6997), n(1181), n(8388);
        var a = n(4559),
          s = i(function e() {
            "use strict";
            var t = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              o(this, "dispatch", function (e, n) {
                var r = t._observers.get(e) || [],
                  i = new a(e, t, n);
                r.forEach(function (e) {
                  e(i);
                });
              }),
              o(this, "hasEventListeners", function (e) {
                return void 0 !== t._observers.get(e);
              }),
              o(this, "removeEventListener", function (e, n) {
                if (t.isEventListener(e, n)) {
                  var r = t._observers.get(e);
                  r.splice(r.indexOf(n), 1);
                }
              }),
              o(this, "isEventListener", function (e, n) {
                return (t._observers.get(e) || []).indexOf(n) > -1;
              }),
              o(this, "addEventListener", function (e, n) {
                if (t.isEventListener(e, n)) return !1;
                var r = t._observers.get(e) || [];
                return r.push(n), t._observers.set(e, r), !0;
              }),
              o(this, "removeAllEventListeners", function () {
                t._observers = new Map();
              }),
              (this._observers = new Map());
          });
        e.exports = s;
      },
      4559: (e, t, n) => {
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function i(e, t, n) {
          return (
            t && r(e.prototype, t),
            n && r(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        function o(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        n(8388);
        var a = i(function e(t, n, r) {
          "use strict";
          var i = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            o(this, "getEventType", function () {
              return i._type;
            }),
            o(this, "getEmitter", function () {
              return i._emitter;
            }),
            o(this, "getPayload", function () {
              return i._payload;
            }),
            (this._type = t),
            (this._emitter = n),
            (this._payload = r);
        });
        e.exports = a;
      },
      7130: (e, t, n) => {
        var r = n(2071),
          i = new (n(4762))(),
          o = new r();
        o.setPlatform(i), (e.exports = { H5SDK: o });
      },
      8135: (e, t, n) => {
        n(6253),
          n(9115),
          n(1181),
          n(851),
          n(9865),
          n(1898),
          (e.exports = n(5645).Promise);
      },
      4963: (e) => {
        e.exports = function (e) {
          if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
          return e;
        };
      },
      7722: (e, t, n) => {
        var r = n(6314)("unscopables"),
          i = Array.prototype;
        null == i[r] && n(7728)(i, r, {}),
          (e.exports = function (e) {
            i[r][e] = !0;
          });
      },
      3328: (e) => {
        e.exports = function (e, t, n, r) {
          if (!(e instanceof t) || (void 0 !== r && r in e))
            throw TypeError(n + ": incorrect invocation!");
          return e;
        };
      },
      7007: (e, t, n) => {
        var r = n(5286);
        e.exports = function (e) {
          if (!r(e)) throw TypeError(e + " is not an object!");
          return e;
        };
      },
      9315: (e, t, n) => {
        var r = n(2110),
          i = n(875),
          o = n(2337);
        e.exports = function (e) {
          return function (t, n, a) {
            var s,
              u = r(t),
              c = i(u.length),
              d = o(a, c);
            if (e && n != n) {
              for (; c > d; ) if ((s = u[d++]) != s) return !0;
            } else
              for (; c > d; d++)
                if ((e || d in u) && u[d] === n) return e || d || 0;
            return !e && -1;
          };
        };
      },
      50: (e, t, n) => {
        var r = n(741),
          i = n(9797),
          o = n(508),
          a = n(875),
          s = n(6886);
        e.exports = function (e, t) {
          var n = 1 == e,
            u = 2 == e,
            c = 3 == e,
            d = 4 == e,
            l = 6 == e,
            f = 5 == e || l,
            v = t || s;
          return function (t, s, g) {
            for (
              var p,
                m,
                h = o(t),
                y = i(h),
                E = r(s, g, 3),
                S = a(y.length),
                A = 0,
                b = n ? v(t, S) : u ? v(t, 0) : void 0;
              S > A;
              A++
            )
              if ((f || A in y) && ((m = E((p = y[A]), A, h)), e))
                if (n) b[A] = m;
                else if (m)
                  switch (e) {
                    case 3:
                      return !0;
                    case 5:
                      return p;
                    case 6:
                      return A;
                    case 2:
                      b.push(p);
                  }
                else if (d) return !1;
            return l ? -1 : c || d ? d : b;
          };
        };
      },
      2736: (e, t, n) => {
        var r = n(5286),
          i = n(4302),
          o = n(6314)("species");
        e.exports = function (e) {
          var t;
          return (
            i(e) &&
              ("function" != typeof (t = e.constructor) ||
                (t !== Array && !i(t.prototype)) ||
                (t = void 0),
              r(t) && null === (t = t[o]) && (t = void 0)),
            void 0 === t ? Array : t
          );
        };
      },
      6886: (e, t, n) => {
        var r = n(2736);
        e.exports = function (e, t) {
          return new (r(e))(t);
        };
      },
      4398: (e, t, n) => {
        "use strict";
        var r = n(4963),
          i = n(5286),
          o = n(7242),
          a = [].slice,
          s = {},
          u = function (e, t, n) {
            if (!(t in s)) {
              for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
              s[t] = Function("F,a", "return new F(" + r.join(",") + ")");
            }
            return s[t](e, n);
          };
        e.exports =
          Function.bind ||
          function (e) {
            var t = r(this),
              n = a.call(arguments, 1),
              s = function () {
                var r = n.concat(a.call(arguments));
                return this instanceof s ? u(t, r.length, r) : o(t, r, e);
              };
            return i(t.prototype) && (s.prototype = t.prototype), s;
          };
      },
      1488: (e, t, n) => {
        var r = n(2032),
          i = n(6314)("toStringTag"),
          o =
            "Arguments" ==
            r(
              (function () {
                return arguments;
              })()
            );
        e.exports = function (e) {
          var t, n, a;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), i))
            ? n
            : o
            ? r(t)
            : "Object" == (a = r(t)) && "function" == typeof t.callee
            ? "Arguments"
            : a;
        };
      },
      2032: (e) => {
        var t = {}.toString;
        e.exports = function (e) {
          return t.call(e).slice(8, -1);
        };
      },
      9824: (e, t, n) => {
        "use strict";
        var r = n(9275).f,
          i = n(2503),
          o = n(4408),
          a = n(741),
          s = n(3328),
          u = n(3531),
          c = n(2923),
          d = n(5436),
          l = n(2974),
          f = n(7057),
          v = n(4728).fastKey,
          g = n(1616),
          p = f ? "_s" : "size",
          m = function (e, t) {
            var n,
              r = v(t);
            if ("F" !== r) return e._i[r];
            for (n = e._f; n; n = n.n) if (n.k == t) return n;
          };
        e.exports = {
          getConstructor: function (e, t, n, c) {
            var d = e(function (e, r) {
              s(e, d, t, "_i"),
                (e._t = t),
                (e._i = i(null)),
                (e._f = void 0),
                (e._l = void 0),
                (e[p] = 0),
                null != r && u(r, n, e[c], e);
            });
            return (
              o(d.prototype, {
                clear: function () {
                  for (var e = g(this, t), n = e._i, r = e._f; r; r = r.n)
                    (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
                  (e._f = e._l = void 0), (e[p] = 0);
                },
                delete: function (e) {
                  var n = g(this, t),
                    r = m(n, e);
                  if (r) {
                    var i = r.n,
                      o = r.p;
                    delete n._i[r.i],
                      (r.r = !0),
                      o && (o.n = i),
                      i && (i.p = o),
                      n._f == r && (n._f = i),
                      n._l == r && (n._l = o),
                      n[p]--;
                  }
                  return !!r;
                },
                forEach: function (e) {
                  g(this, t);
                  for (
                    var n,
                      r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                    (n = n ? n.n : this._f);

                  )
                    for (r(n.v, n.k, this); n && n.r; ) n = n.p;
                },
                has: function (e) {
                  return !!m(g(this, t), e);
                },
              }),
              f &&
                r(d.prototype, "size", {
                  get: function () {
                    return g(this, t)[p];
                  },
                }),
              d
            );
          },
          def: function (e, t, n) {
            var r,
              i,
              o = m(e, t);
            return (
              o
                ? (o.v = n)
                : ((e._l = o =
                    {
                      i: (i = v(t, !0)),
                      k: t,
                      v: n,
                      p: (r = e._l),
                      n: void 0,
                      r: !1,
                    }),
                  e._f || (e._f = o),
                  r && (r.n = o),
                  e[p]++,
                  "F" !== i && (e._i[i] = o)),
              e
            );
          },
          getEntry: m,
          setStrong: function (e, t, n) {
            c(
              e,
              t,
              function (e, n) {
                (this._t = g(e, t)), (this._k = n), (this._l = void 0);
              },
              function () {
                for (var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p;
                return e._t && (e._l = n = n ? n.n : e._t._f)
                  ? d(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v])
                  : ((e._t = void 0), d(1));
              },
              n ? "entries" : "values",
              !n,
              !0
            ),
              l(t);
          },
        };
      },
      5795: (e, t, n) => {
        "use strict";
        var r = n(3816),
          i = n(2985),
          o = n(7234),
          a = n(4408),
          s = n(4728),
          u = n(3531),
          c = n(3328),
          d = n(5286),
          l = n(4253),
          f = n(7462),
          v = n(2943),
          g = n(266);
        e.exports = function (e, t, n, p, m, h) {
          var y = r[e],
            E = y,
            S = m ? "set" : "add",
            A = E && E.prototype,
            b = {},
            _ = function (e) {
              var t = A[e];
              o(
                A,
                e,
                "delete" == e || "has" == e
                  ? function (e) {
                      return !(h && !d(e)) && t.call(this, 0 === e ? 0 : e);
                    }
                  : "get" == e
                  ? function (e) {
                      return h && !d(e)
                        ? void 0
                        : t.call(this, 0 === e ? 0 : e);
                    }
                  : "add" == e
                  ? function (e) {
                      return t.call(this, 0 === e ? 0 : e), this;
                    }
                  : function (e, n) {
                      return t.call(this, 0 === e ? 0 : e, n), this;
                    }
              );
            };
          if (
            "function" == typeof E &&
            (h ||
              (A.forEach &&
                !l(function () {
                  new E().entries().next();
                })))
          ) {
            var w = new E(),
              C = w[S](h ? {} : -0, 1) != w,
              T = l(function () {
                w.has(1);
              }),
              I = f(function (e) {
                new E(e);
              }),
              k =
                !h &&
                l(function () {
                  for (var e = new E(), t = 5; t--; ) e[S](t, t);
                  return !e.has(-0);
                });
            I ||
              (((E = t(function (t, n) {
                c(t, E, e);
                var r = g(new y(), t, E);
                return null != n && u(n, m, r[S], r), r;
              })).prototype = A),
              (A.constructor = E)),
              (T || k) && (_("delete"), _("has"), m && _("get")),
              (k || C) && _(S),
              h && A.clear && delete A.clear;
          } else
            (E = p.getConstructor(t, e, m, S)),
              a(E.prototype, n),
              (s.NEED = !0);
          return (
            v(E, e),
            (b[e] = E),
            i(i.G + i.W + i.F * (E != y), b),
            h || p.setStrong(E, e, m),
            E
          );
        };
      },
      5645: (e) => {
        var t = (e.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = t);
      },
      741: (e, t, n) => {
        var r = n(4963);
        e.exports = function (e, t, n) {
          if ((r(e), void 0 === t)) return e;
          switch (n) {
            case 1:
              return function (n) {
                return e.call(t, n);
              };
            case 2:
              return function (n, r) {
                return e.call(t, n, r);
              };
            case 3:
              return function (n, r, i) {
                return e.call(t, n, r, i);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      1355: (e) => {
        e.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      7057: (e, t, n) => {
        e.exports = !n(4253)(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
      },
      2457: (e, t, n) => {
        var r = n(5286),
          i = n(3816).document,
          o = r(i) && r(i.createElement);
        e.exports = function (e) {
          return o ? i.createElement(e) : {};
        };
      },
      4430: (e) => {
        e.exports =
          "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
            ","
          );
      },
      5541: (e, t, n) => {
        var r = n(7184),
          i = n(4548),
          o = n(4682);
        e.exports = function (e) {
          var t = r(e),
            n = i.f;
          if (n)
            for (var a, s = n(e), u = o.f, c = 0; s.length > c; )
              u.call(e, (a = s[c++])) && t.push(a);
          return t;
        };
      },
      2985: (e, t, n) => {
        var r = n(3816),
          i = n(5645),
          o = n(7728),
          a = n(7234),
          s = n(741),
          u = function (e, t, n) {
            var c,
              d,
              l,
              f,
              v = e & u.F,
              g = e & u.G,
              p = e & u.S,
              m = e & u.P,
              h = e & u.B,
              y = g ? r : p ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
              E = g ? i : i[t] || (i[t] = {}),
              S = E.prototype || (E.prototype = {});
            for (c in (g && (n = t), n))
              (l = ((d = !v && y && void 0 !== y[c]) ? y : n)[c]),
                (f =
                  h && d
                    ? s(l, r)
                    : m && "function" == typeof l
                    ? s(Function.call, l)
                    : l),
                y && a(y, c, l, e & u.U),
                E[c] != l && o(E, c, f),
                m && S[c] != l && (S[c] = l);
          };
        (r.core = i),
          (u.F = 1),
          (u.G = 2),
          (u.S = 4),
          (u.P = 8),
          (u.B = 16),
          (u.W = 32),
          (u.U = 64),
          (u.R = 128),
          (e.exports = u);
      },
      4253: (e) => {
        e.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      3531: (e, t, n) => {
        var r = n(741),
          i = n(8851),
          o = n(6555),
          a = n(7007),
          s = n(875),
          u = n(9002),
          c = {},
          d = {},
          l = (e.exports = function (e, t, n, l, f) {
            var v,
              g,
              p,
              m,
              h = f
                ? function () {
                    return e;
                  }
                : u(e),
              y = r(n, l, t ? 2 : 1),
              E = 0;
            if ("function" != typeof h)
              throw TypeError(e + " is not iterable!");
            if (o(h)) {
              for (v = s(e.length); v > E; E++)
                if (
                  (m = t ? y(a((g = e[E]))[0], g[1]) : y(e[E])) === c ||
                  m === d
                )
                  return m;
            } else
              for (p = h.call(e); !(g = p.next()).done; )
                if ((m = i(p, y, g.value, t)) === c || m === d) return m;
          });
        (l.BREAK = c), (l.RETURN = d);
      },
      18: (e, t, n) => {
        e.exports = n(3825)("native-function-to-string", Function.toString);
      },
      3816: (e) => {
        var t = (e.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = t);
      },
      9181: (e) => {
        var t = {}.hasOwnProperty;
        e.exports = function (e, n) {
          return t.call(e, n);
        };
      },
      7728: (e, t, n) => {
        var r = n(9275),
          i = n(681);
        e.exports = n(7057)
          ? function (e, t, n) {
              return r.f(e, t, i(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      639: (e, t, n) => {
        var r = n(3816).document;
        e.exports = r && r.documentElement;
      },
      1734: (e, t, n) => {
        e.exports =
          !n(7057) &&
          !n(4253)(function () {
            return (
              7 !=
              Object.defineProperty(n(2457)("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      266: (e, t, n) => {
        var r = n(5286),
          i = n(7375).set;
        e.exports = function (e, t, n) {
          var o,
            a = t.constructor;
          return (
            a !== n &&
              "function" == typeof a &&
              (o = a.prototype) !== n.prototype &&
              r(o) &&
              i &&
              i(e, o),
            e
          );
        };
      },
      7242: (e) => {
        e.exports = function (e, t, n) {
          var r = void 0 === n;
          switch (t.length) {
            case 0:
              return r ? e() : e.call(n);
            case 1:
              return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
              return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
              return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
              return r
                ? e(t[0], t[1], t[2], t[3])
                : e.call(n, t[0], t[1], t[2], t[3]);
          }
          return e.apply(n, t);
        };
      },
      9797: (e, t, n) => {
        var r = n(2032);
        e.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
              return "String" == r(e) ? e.split("") : Object(e);
            };
      },
      6555: (e, t, n) => {
        var r = n(2803),
          i = n(6314)("iterator"),
          o = Array.prototype;
        e.exports = function (e) {
          return void 0 !== e && (r.Array === e || o[i] === e);
        };
      },
      4302: (e, t, n) => {
        var r = n(2032);
        e.exports =
          Array.isArray ||
          function (e) {
            return "Array" == r(e);
          };
      },
      5286: (e) => {
        e.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      8851: (e, t, n) => {
        var r = n(7007);
        e.exports = function (e, t, n, i) {
          try {
            return i ? t(r(n)[0], n[1]) : t(n);
          } catch (t) {
            var o = e.return;
            throw (void 0 !== o && r(o.call(e)), t);
          }
        };
      },
      9988: (e, t, n) => {
        "use strict";
        var r = n(2503),
          i = n(681),
          o = n(2943),
          a = {};
        n(7728)(a, n(6314)("iterator"), function () {
          return this;
        }),
          (e.exports = function (e, t, n) {
            (e.prototype = r(a, { next: i(1, n) })), o(e, t + " Iterator");
          });
      },
      2923: (e, t, n) => {
        "use strict";
        var r = n(4461),
          i = n(2985),
          o = n(7234),
          a = n(7728),
          s = n(2803),
          u = n(9988),
          c = n(2943),
          d = n(468),
          l = n(6314)("iterator"),
          f = !([].keys && "next" in [].keys()),
          v = "keys",
          g = "values",
          p = function () {
            return this;
          };
        e.exports = function (e, t, n, m, h, y, E) {
          u(n, t, m);
          var S,
            A,
            b,
            _ = function (e) {
              if (!f && e in I) return I[e];
              switch (e) {
                case v:
                case g:
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this, e);
              };
            },
            w = t + " Iterator",
            C = h == g,
            T = !1,
            I = e.prototype,
            k = I[l] || I["@@iterator"] || (h && I[h]),
            G = k || _(h),
            P = h ? (C ? _("entries") : G) : void 0,
            R = ("Array" == t && I.entries) || k;
          if (
            (R &&
              (b = d(R.call(new e()))) !== Object.prototype &&
              b.next &&
              (c(b, w, !0), r || "function" == typeof b[l] || a(b, l, p)),
            C &&
              k &&
              k.name !== g &&
              ((T = !0),
              (G = function () {
                return k.call(this);
              })),
            (r && !E) || (!f && !T && I[l]) || a(I, l, G),
            (s[t] = G),
            (s[w] = p),
            h)
          )
            if (
              ((S = { values: C ? G : _(g), keys: y ? G : _(v), entries: P }),
              E)
            )
              for (A in S) A in I || o(I, A, S[A]);
            else i(i.P + i.F * (f || T), t, S);
          return S;
        };
      },
      7462: (e, t, n) => {
        var r = n(6314)("iterator"),
          i = !1;
        try {
          var o = [7][r]();
          (o.return = function () {
            i = !0;
          }),
            Array.from(o, function () {
              throw 2;
            });
        } catch (e) {}
        e.exports = function (e, t) {
          if (!t && !i) return !1;
          var n = !1;
          try {
            var o = [7],
              a = o[r]();
            (a.next = function () {
              return { done: (n = !0) };
            }),
              (o[r] = function () {
                return a;
              }),
              e(o);
          } catch (e) {}
          return n;
        };
      },
      5436: (e) => {
        e.exports = function (e, t) {
          return { value: t, done: !!e };
        };
      },
      2803: (e) => {
        e.exports = {};
      },
      4461: (e) => {
        e.exports = !1;
      },
      4728: (e, t, n) => {
        var r = n(3953)("meta"),
          i = n(5286),
          o = n(9181),
          a = n(9275).f,
          s = 0,
          u =
            Object.isExtensible ||
            function () {
              return !0;
            },
          c = !n(4253)(function () {
            return u(Object.preventExtensions({}));
          }),
          d = function (e) {
            a(e, r, { value: { i: "O" + ++s, w: {} } });
          },
          l = (e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function (e, t) {
              if (!i(e))
                return "symbol" == typeof e
                  ? e
                  : ("string" == typeof e ? "S" : "P") + e;
              if (!o(e, r)) {
                if (!u(e)) return "F";
                if (!t) return "E";
                d(e);
              }
              return e[r].i;
            },
            getWeak: function (e, t) {
              if (!o(e, r)) {
                if (!u(e)) return !0;
                if (!t) return !1;
                d(e);
              }
              return e[r].w;
            },
            onFreeze: function (e) {
              return c && l.NEED && u(e) && !o(e, r) && d(e), e;
            },
          });
      },
      4351: (e, t, n) => {
        var r = n(3816),
          i = n(4193).set,
          o = r.MutationObserver || r.WebKitMutationObserver,
          a = r.process,
          s = r.Promise,
          u = "process" == n(2032)(a);
        e.exports = function () {
          var e,
            t,
            n,
            c = function () {
              var r, i;
              for (u && (r = a.domain) && r.exit(); e; ) {
                (i = e.fn), (e = e.next);
                try {
                  i();
                } catch (r) {
                  throw (e ? n() : (t = void 0), r);
                }
              }
              (t = void 0), r && r.enter();
            };
          if (u)
            n = function () {
              a.nextTick(c);
            };
          else if (!o || (r.navigator && r.navigator.standalone))
            if (s && s.resolve) {
              var d = s.resolve(void 0);
              n = function () {
                d.then(c);
              };
            } else
              n = function () {
                i.call(r, c);
              };
          else {
            var l = !0,
              f = document.createTextNode("");
            new o(c).observe(f, { characterData: !0 }),
              (n = function () {
                f.data = l = !l;
              });
          }
          return function (r) {
            var i = { fn: r, next: void 0 };
            t && (t.next = i), e || ((e = i), n()), (t = i);
          };
        };
      },
      3499: (e, t, n) => {
        "use strict";
        var r = n(4963);
        function i(e) {
          var t, n;
          (this.promise = new e(function (e, r) {
            if (void 0 !== t || void 0 !== n)
              throw TypeError("Bad Promise constructor");
            (t = e), (n = r);
          })),
            (this.resolve = r(t)),
            (this.reject = r(n));
        }
        e.exports.f = function (e) {
          return new i(e);
        };
      },
      2503: (e, t, n) => {
        var r = n(7007),
          i = n(5588),
          o = n(4430),
          a = n(9335)("IE_PROTO"),
          s = function () {},
          u = function () {
            var e,
              t = n(2457)("iframe"),
              r = o.length;
            for (
              t.style.display = "none",
                n(639).appendChild(t),
                t.src = "javascript:",
                (e = t.contentWindow.document).open(),
                e.write("<script>document.F=Object</script>"),
                e.close(),
                u = e.F;
              r--;

            )
              delete u.prototype[o[r]];
            return u();
          };
        e.exports =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e
                ? ((s.prototype = r(e)),
                  (n = new s()),
                  (s.prototype = null),
                  (n[a] = e))
                : (n = u()),
              void 0 === t ? n : i(n, t)
            );
          };
      },
      9275: (e, t, n) => {
        var r = n(7007),
          i = n(1734),
          o = n(1689),
          a = Object.defineProperty;
        t.f = n(7057)
          ? Object.defineProperty
          : function (e, t, n) {
              if ((r(e), (t = o(t, !0)), r(n), i))
                try {
                  return a(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported!");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      5588: (e, t, n) => {
        var r = n(9275),
          i = n(7007),
          o = n(7184);
        e.exports = n(7057)
          ? Object.defineProperties
          : function (e, t) {
              i(e);
              for (var n, a = o(t), s = a.length, u = 0; s > u; )
                r.f(e, (n = a[u++]), t[n]);
              return e;
            };
      },
      8693: (e, t, n) => {
        var r = n(4682),
          i = n(681),
          o = n(2110),
          a = n(1689),
          s = n(9181),
          u = n(1734),
          c = Object.getOwnPropertyDescriptor;
        t.f = n(7057)
          ? c
          : function (e, t) {
              if (((e = o(e)), (t = a(t, !0)), u))
                try {
                  return c(e, t);
                } catch (e) {}
              if (s(e, t)) return i(!r.f.call(e, t), e[t]);
            };
      },
      9327: (e, t, n) => {
        var r = n(2110),
          i = n(616).f,
          o = {}.toString,
          a =
            "object" == typeof window && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];
        e.exports.f = function (e) {
          return a && "[object Window]" == o.call(e)
            ? (function (e) {
                try {
                  return i(e);
                } catch (e) {
                  return a.slice();
                }
              })(e)
            : i(r(e));
        };
      },
      616: (e, t, n) => {
        var r = n(189),
          i = n(4430).concat("length", "prototype");
        t.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return r(e, i);
          };
      },
      4548: (e, t) => {
        t.f = Object.getOwnPropertySymbols;
      },
      468: (e, t, n) => {
        var r = n(9181),
          i = n(508),
          o = n(9335)("IE_PROTO"),
          a = Object.prototype;
        e.exports =
          Object.getPrototypeOf ||
          function (e) {
            return (
              (e = i(e)),
              r(e, o)
                ? e[o]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? a
                : null
            );
          };
      },
      189: (e, t, n) => {
        var r = n(9181),
          i = n(2110),
          o = n(9315)(!1),
          a = n(9335)("IE_PROTO");
        e.exports = function (e, t) {
          var n,
            s = i(e),
            u = 0,
            c = [];
          for (n in s) n != a && r(s, n) && c.push(n);
          for (; t.length > u; ) r(s, (n = t[u++])) && (~o(c, n) || c.push(n));
          return c;
        };
      },
      7184: (e, t, n) => {
        var r = n(189),
          i = n(4430);
        e.exports =
          Object.keys ||
          function (e) {
            return r(e, i);
          };
      },
      4682: (e, t) => {
        t.f = {}.propertyIsEnumerable;
      },
      3160: (e, t, n) => {
        var r = n(2985),
          i = n(5645),
          o = n(4253);
        e.exports = function (e, t) {
          var n = (i.Object || {})[e] || Object[e],
            a = {};
          (a[e] = t(n)),
            r(
              r.S +
                r.F *
                  o(function () {
                    n(1);
                  }),
              "Object",
              a
            );
        };
      },
      188: (e) => {
        e.exports = function (e) {
          try {
            return { e: !1, v: e() };
          } catch (e) {
            return { e: !0, v: e };
          }
        };
      },
      94: (e, t, n) => {
        var r = n(7007),
          i = n(5286),
          o = n(3499);
        e.exports = function (e, t) {
          if ((r(e), i(t) && t.constructor === e)) return t;
          var n = o.f(e);
          return (0, n.resolve)(t), n.promise;
        };
      },
      681: (e) => {
        e.exports = function (e, t) {
          return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t,
          };
        };
      },
      4408: (e, t, n) => {
        var r = n(7234);
        e.exports = function (e, t, n) {
          for (var i in t) r(e, i, t[i], n);
          return e;
        };
      },
      7234: (e, t, n) => {
        var r = n(3816),
          i = n(7728),
          o = n(9181),
          a = n(3953)("src"),
          s = n(18),
          u = "toString",
          c = ("" + s).split(u);
        (n(5645).inspectSource = function (e) {
          return s.call(e);
        }),
          (e.exports = function (e, t, n, s) {
            var u = "function" == typeof n;
            u && (o(n, "name") || i(n, "name", t)),
              e[t] !== n &&
                (u &&
                  (o(n, a) || i(n, a, e[t] ? "" + e[t] : c.join(String(t)))),
                e === r
                  ? (e[t] = n)
                  : s
                  ? e[t]
                    ? (e[t] = n)
                    : i(e, t, n)
                  : (delete e[t], i(e, t, n)));
          })(Function.prototype, u, function () {
            return ("function" == typeof this && this[a]) || s.call(this);
          });
      },
      7375: (e, t, n) => {
        var r = n(5286),
          i = n(7007),
          o = function (e, t) {
            if ((i(e), !r(t) && null !== t))
              throw TypeError(t + ": can't set as prototype!");
          };
        e.exports = {
          set:
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function (e, t, r) {
                  try {
                    (r = n(741)(
                      Function.call,
                      n(8693).f(Object.prototype, "__proto__").set,
                      2
                    ))(e, []),
                      (t = !(e instanceof Array));
                  } catch (e) {
                    t = !0;
                  }
                  return function (e, n) {
                    return o(e, n), t ? (e.__proto__ = n) : r(e, n), e;
                  };
                })({}, !1)
              : void 0),
          check: o,
        };
      },
      2974: (e, t, n) => {
        "use strict";
        var r = n(3816),
          i = n(9275),
          o = n(7057),
          a = n(6314)("species");
        e.exports = function (e) {
          var t = r[e];
          o &&
            t &&
            !t[a] &&
            i.f(t, a, {
              configurable: !0,
              get: function () {
                return this;
              },
            });
        };
      },
      2943: (e, t, n) => {
        var r = n(9275).f,
          i = n(9181),
          o = n(6314)("toStringTag");
        e.exports = function (e, t, n) {
          e &&
            !i((e = n ? e : e.prototype), o) &&
            r(e, o, { configurable: !0, value: t });
        };
      },
      9335: (e, t, n) => {
        var r = n(3825)("keys"),
          i = n(3953);
        e.exports = function (e) {
          return r[e] || (r[e] = i(e));
        };
      },
      3825: (e, t, n) => {
        var r = n(5645),
          i = n(3816),
          o = "__core-js_shared__",
          a = i[o] || (i[o] = {});
        (e.exports = function (e, t) {
          return a[e] || (a[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: r.version,
          mode: n(4461) ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });
      },
      8364: (e, t, n) => {
        var r = n(7007),
          i = n(4963),
          o = n(6314)("species");
        e.exports = function (e, t) {
          var n,
            a = r(e).constructor;
          return void 0 === a || null == (n = r(a)[o]) ? t : i(n);
        };
      },
      7717: (e, t, n) => {
        "use strict";
        var r = n(4253);
        e.exports = function (e, t) {
          return (
            !!e &&
            r(function () {
              t ? e.call(null, function () {}, 1) : e.call(null);
            })
          );
        };
      },
      4496: (e, t, n) => {
        var r = n(1467),
          i = n(1355);
        e.exports = function (e) {
          return function (t, n) {
            var o,
              a,
              s = String(i(t)),
              u = r(n),
              c = s.length;
            return u < 0 || u >= c
              ? e
                ? ""
                : void 0
              : (o = s.charCodeAt(u)) < 55296 ||
                o > 56319 ||
                u + 1 === c ||
                (a = s.charCodeAt(u + 1)) < 56320 ||
                a > 57343
              ? e
                ? s.charAt(u)
                : o
              : e
              ? s.slice(u, u + 2)
              : a - 56320 + ((o - 55296) << 10) + 65536;
          };
        };
      },
      4193: (e, t, n) => {
        var r,
          i,
          o,
          a = n(741),
          s = n(7242),
          u = n(639),
          c = n(2457),
          d = n(3816),
          l = d.process,
          f = d.setImmediate,
          v = d.clearImmediate,
          g = d.MessageChannel,
          p = d.Dispatch,
          m = 0,
          h = {},
          y = function () {
            var e = +this;
            if (h.hasOwnProperty(e)) {
              var t = h[e];
              delete h[e], t();
            }
          },
          E = function (e) {
            y.call(e.data);
          };
        (f && v) ||
          ((f = function (e) {
            for (var t = [], n = 1; arguments.length > n; )
              t.push(arguments[n++]);
            return (
              (h[++m] = function () {
                s("function" == typeof e ? e : Function(e), t);
              }),
              r(m),
              m
            );
          }),
          (v = function (e) {
            delete h[e];
          }),
          "process" == n(2032)(l)
            ? (r = function (e) {
                l.nextTick(a(y, e, 1));
              })
            : p && p.now
            ? (r = function (e) {
                p.now(a(y, e, 1));
              })
            : g
            ? ((o = (i = new g()).port2),
              (i.port1.onmessage = E),
              (r = a(o.postMessage, o, 1)))
            : d.addEventListener &&
              "function" == typeof postMessage &&
              !d.importScripts
            ? ((r = function (e) {
                d.postMessage(e + "", "*");
              }),
              d.addEventListener("message", E, !1))
            : (r =
                "onreadystatechange" in c("script")
                  ? function (e) {
                      u.appendChild(c("script")).onreadystatechange =
                        function () {
                          u.removeChild(this), y.call(e);
                        };
                    }
                  : function (e) {
                      setTimeout(a(y, e, 1), 0);
                    })),
          (e.exports = { set: f, clear: v });
      },
      2337: (e, t, n) => {
        var r = n(1467),
          i = Math.max,
          o = Math.min;
        e.exports = function (e, t) {
          return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
        };
      },
      1467: (e) => {
        var t = Math.ceil,
          n = Math.floor;
        e.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? n : t)(e);
        };
      },
      2110: (e, t, n) => {
        var r = n(9797),
          i = n(1355);
        e.exports = function (e) {
          return r(i(e));
        };
      },
      875: (e, t, n) => {
        var r = n(1467),
          i = Math.min;
        e.exports = function (e) {
          return e > 0 ? i(r(e), 9007199254740991) : 0;
        };
      },
      508: (e, t, n) => {
        var r = n(1355);
        e.exports = function (e) {
          return Object(r(e));
        };
      },
      1689: (e, t, n) => {
        var r = n(5286);
        e.exports = function (e, t) {
          if (!r(e)) return e;
          var n, i;
          if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
            return i;
          if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e))))
            return i;
          if (
            !t &&
            "function" == typeof (n = e.toString) &&
            !r((i = n.call(e)))
          )
            return i;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      3953: (e) => {
        var t = 0,
          n = Math.random();
        e.exports = function (e) {
          return "Symbol(".concat(
            void 0 === e ? "" : e,
            ")_",
            (++t + n).toString(36)
          );
        };
      },
      575: (e, t, n) => {
        var r = n(3816).navigator;
        e.exports = (r && r.userAgent) || "";
      },
      1616: (e, t, n) => {
        var r = n(5286);
        e.exports = function (e, t) {
          if (!r(e) || e._t !== t)
            throw TypeError("Incompatible receiver, " + t + " required!");
          return e;
        };
      },
      6074: (e, t, n) => {
        var r = n(3816),
          i = n(5645),
          o = n(4461),
          a = n(8787),
          s = n(9275).f;
        e.exports = function (e) {
          var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
          "_" == e.charAt(0) || e in t || s(t, e, { value: a.f(e) });
        };
      },
      8787: (e, t, n) => {
        t.f = n(6314);
      },
      6314: (e, t, n) => {
        var r = n(3825)("wks"),
          i = n(3953),
          o = n(3816).Symbol,
          a = "function" == typeof o;
        (e.exports = function (e) {
          return r[e] || (r[e] = (a && o[e]) || (a ? o : i)("Symbol." + e));
        }).store = r;
      },
      9002: (e, t, n) => {
        var r = n(1488),
          i = n(6314)("iterator"),
          o = n(2803);
        e.exports = n(5645).getIteratorMethod = function (e) {
          if (null != e) return e[i] || e["@@iterator"] || o[r(e)];
        };
      },
      4336: (e, t, n) => {
        "use strict";
        var r = n(2985),
          i = n(50)(0),
          o = n(7717)([].forEach, !0);
        r(r.P + r.F * !o, "Array", {
          forEach: function (e) {
            return i(this, e, arguments[1]);
          },
        });
      },
      3369: (e, t, n) => {
        "use strict";
        var r = n(2985),
          i = n(9315)(!1),
          o = [].indexOf,
          a = !!o && 1 / [1].indexOf(1, -0) < 0;
        r(r.P + r.F * (a || !n(7717)(o)), "Array", {
          indexOf: function (e) {
            return a ? o.apply(this, arguments) || 0 : i(this, e, arguments[1]);
          },
        });
      },
      6997: (e, t, n) => {
        "use strict";
        var r = n(7722),
          i = n(5436),
          o = n(2803),
          a = n(2110);
        (e.exports = n(2923)(
          Array,
          "Array",
          function (e, t) {
            (this._t = a(e)), (this._i = 0), (this._k = t);
          },
          function () {
            var e = this._t,
              t = this._k,
              n = this._i++;
            return !e || n >= e.length
              ? ((this._t = void 0), i(1))
              : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
          },
          "values"
        )),
          (o.Arguments = o.Array),
          r("keys"),
          r("values"),
          r("entries");
      },
      9730: (e, t, n) => {
        var r = n(2985);
        r(r.P, "Function", { bind: n(4398) });
      },
      8416: (e, t, n) => {
        "use strict";
        var r = n(9824),
          i = n(1616),
          o = "Map";
        e.exports = n(5795)(
          o,
          function (e) {
            return function () {
              return e(this, arguments.length > 0 ? arguments[0] : void 0);
            };
          },
          {
            get: function (e) {
              var t = r.getEntry(i(this, o), e);
              return t && t.v;
            },
            set: function (e, t) {
              return r.def(i(this, o), 0 === e ? 0 : e, t);
            },
          },
          r,
          !0
        );
      },
      8132: (e, t, n) => {
        var r = n(2985);
        r(r.S, "Object", { create: n(2503) });
      },
      8388: (e, t, n) => {
        var r = n(2985);
        r(r.S + r.F * !n(7057), "Object", { defineProperty: n(9275).f });
      },
      4882: (e, t, n) => {
        var r = n(2110),
          i = n(8693).f;
        n(3160)("getOwnPropertyDescriptor", function () {
          return function (e, t) {
            return i(r(e), t);
          };
        });
      },
      1520: (e, t, n) => {
        var r = n(508),
          i = n(468);
        n(3160)("getPrototypeOf", function () {
          return function (e) {
            return i(r(e));
          };
        });
      },
      8838: (e, t, n) => {
        var r = n(2985);
        r(r.S, "Object", { setPrototypeOf: n(7375).set });
      },
      6253: (e, t, n) => {
        "use strict";
        var r = n(1488),
          i = {};
        (i[n(6314)("toStringTag")] = "z"),
          i + "" != "[object z]" &&
            n(7234)(
              Object.prototype,
              "toString",
              function () {
                return "[object " + r(this) + "]";
              },
              !0
            );
      },
      851: (e, t, n) => {
        "use strict";
        var r,
          i,
          o,
          a,
          s = n(4461),
          u = n(3816),
          c = n(741),
          d = n(1488),
          l = n(2985),
          f = n(5286),
          v = n(4963),
          g = n(3328),
          p = n(3531),
          m = n(8364),
          h = n(4193).set,
          y = n(4351)(),
          E = n(3499),
          S = n(188),
          A = n(575),
          b = n(94),
          _ = "Promise",
          w = u.TypeError,
          C = u.process,
          T = C && C.versions,
          I = (T && T.v8) || "",
          k = u.Promise,
          G = "process" == d(C),
          P = function () {},
          R = (i = E.f),
          O = !!(function () {
            try {
              var e = k.resolve(1),
                t = ((e.constructor = {})[n(6314)("species")] = function (e) {
                  e(P, P);
                });
              return (
                (G || "function" == typeof PromiseRejectionEvent) &&
                e.then(P) instanceof t &&
                0 !== I.indexOf("6.6") &&
                -1 === A.indexOf("Chrome/66")
              );
            } catch (e) {}
          })(),
          D = function (e) {
            var t;
            return !(!f(e) || "function" != typeof (t = e.then)) && t;
          },
          L = function (e, t) {
            if (!e._n) {
              e._n = !0;
              var n = e._c;
              y(function () {
                for (
                  var r = e._v,
                    i = 1 == e._s,
                    o = 0,
                    a = function (t) {
                      var n,
                        o,
                        a,
                        s = i ? t.ok : t.fail,
                        u = t.resolve,
                        c = t.reject,
                        d = t.domain;
                      try {
                        s
                          ? (i || (2 == e._h && N(e), (e._h = 1)),
                            !0 === s
                              ? (n = r)
                              : (d && d.enter(),
                                (n = s(r)),
                                d && (d.exit(), (a = !0))),
                            n === t.promise
                              ? c(w("Promise-chain cycle"))
                              : (o = D(n))
                              ? o.call(n, u, c)
                              : u(n))
                          : c(r);
                      } catch (e) {
                        d && !a && d.exit(), c(e);
                      }
                    };
                  n.length > o;

                )
                  a(n[o++]);
                (e._c = []), (e._n = !1), t && !e._h && x(e);
              });
            }
          },
          x = function (e) {
            h.call(u, function () {
              var t,
                n,
                r,
                i = e._v,
                o = F(e);
              if (
                (o &&
                  ((t = S(function () {
                    G
                      ? C.emit("unhandledRejection", i, e)
                      : (n = u.onunhandledrejection)
                      ? n({ promise: e, reason: i })
                      : (r = u.console) &&
                        r.error &&
                        r.error("Unhandled promise rejection", i);
                  })),
                  (e._h = G || F(e) ? 2 : 1)),
                (e._a = void 0),
                o && t.e)
              )
                throw t.v;
            });
          },
          F = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length;
          },
          N = function (e) {
            h.call(u, function () {
              var t;
              G
                ? C.emit("rejectionHandled", e)
                : (t = u.onrejectionhandled) && t({ promise: e, reason: e._v });
            });
          },
          V = function (e) {
            var t = this;
            t._d ||
              ((t._d = !0),
              ((t = t._w || t)._v = e),
              (t._s = 2),
              t._a || (t._a = t._c.slice()),
              L(t, !0));
          },
          M = function (e) {
            var t,
              n = this;
            if (!n._d) {
              (n._d = !0), (n = n._w || n);
              try {
                if (n === e) throw w("Promise can't be resolved itself");
                (t = D(e))
                  ? y(function () {
                      var r = { _w: n, _d: !1 };
                      try {
                        t.call(e, c(M, r, 1), c(V, r, 1));
                      } catch (e) {
                        V.call(r, e);
                      }
                    })
                  : ((n._v = e), (n._s = 1), L(n, !1));
              } catch (e) {
                V.call({ _w: n, _d: !1 }, e);
              }
            }
          };
        O ||
          ((k = function (e) {
            g(this, k, _, "_h"), v(e), r.call(this);
            try {
              e(c(M, this, 1), c(V, this, 1));
            } catch (e) {
              V.call(this, e);
            }
          }),
          ((r = function (e) {
            (this._c = []),
              (this._a = void 0),
              (this._s = 0),
              (this._d = !1),
              (this._v = void 0),
              (this._h = 0),
              (this._n = !1);
          }).prototype = n(4408)(k.prototype, {
            then: function (e, t) {
              var n = R(m(this, k));
              return (
                (n.ok = "function" != typeof e || e),
                (n.fail = "function" == typeof t && t),
                (n.domain = G ? C.domain : void 0),
                this._c.push(n),
                this._a && this._a.push(n),
                this._s && L(this, !1),
                n.promise
              );
            },
            catch: function (e) {
              return this.then(void 0, e);
            },
          })),
          (o = function () {
            var e = new r();
            (this.promise = e),
              (this.resolve = c(M, e, 1)),
              (this.reject = c(V, e, 1));
          }),
          (E.f = R =
            function (e) {
              return e === k || e === a ? new o(e) : i(e);
            })),
          l(l.G + l.W + l.F * !O, { Promise: k }),
          n(2943)(k, _),
          n(2974)(_),
          (a = n(5645).Promise),
          l(l.S + l.F * !O, _, {
            reject: function (e) {
              var t = R(this);
              return (0, t.reject)(e), t.promise;
            },
          }),
          l(l.S + l.F * (s || !O), _, {
            resolve: function (e) {
              return b(s && this === a ? k : this, e);
            },
          }),
          l(
            l.S +
              l.F *
                !(
                  O &&
                  n(7462)(function (e) {
                    k.all(e).catch(P);
                  })
                ),
            _,
            {
              all: function (e) {
                var t = this,
                  n = R(t),
                  r = n.resolve,
                  i = n.reject,
                  o = S(function () {
                    var n = [],
                      o = 0,
                      a = 1;
                    p(e, !1, function (e) {
                      var s = o++,
                        u = !1;
                      n.push(void 0),
                        a++,
                        t.resolve(e).then(function (e) {
                          u || ((u = !0), (n[s] = e), --a || r(n));
                        }, i);
                    }),
                      --a || r(n);
                  });
                return o.e && i(o.v), n.promise;
              },
              race: function (e) {
                var t = this,
                  n = R(t),
                  r = n.reject,
                  i = S(function () {
                    p(e, !1, function (e) {
                      t.resolve(e).then(n.resolve, r);
                    });
                  });
                return i.e && r(i.v), n.promise;
              },
            }
          );
      },
      2139: (e, t, n) => {
        var r = n(2985),
          i = n(2503),
          o = n(4963),
          a = n(7007),
          s = n(5286),
          u = n(4253),
          c = n(4398),
          d = (n(3816).Reflect || {}).construct,
          l = u(function () {
            function e() {}
            return !(d(function () {}, [], e) instanceof e);
          }),
          f = !u(function () {
            d(function () {});
          });
        r(r.S + r.F * (l || f), "Reflect", {
          construct: function (e, t) {
            o(e), a(t);
            var n = arguments.length < 3 ? e : o(arguments[2]);
            if (f && !l) return d(e, t, n);
            if (e == n) {
              switch (t.length) {
                case 0:
                  return new e();
                case 1:
                  return new e(t[0]);
                case 2:
                  return new e(t[0], t[1]);
                case 3:
                  return new e(t[0], t[1], t[2]);
                case 4:
                  return new e(t[0], t[1], t[2], t[3]);
              }
              var r = [null];
              return r.push.apply(r, t), new (c.apply(e, r))();
            }
            var u = n.prototype,
              v = i(s(u) ? u : Object.prototype),
              g = Function.apply.call(e, v, t);
            return s(g) ? g : v;
          },
        });
      },
      3049: (e, t, n) => {
        var r = n(8693),
          i = n(468),
          o = n(9181),
          a = n(2985),
          s = n(5286),
          u = n(7007);
        a(a.S, "Reflect", {
          get: function e(t, n) {
            var a,
              c,
              d = arguments.length < 3 ? t : arguments[2];
            return u(t) === d
              ? t[n]
              : (a = r.f(t, n))
              ? o(a, "value")
                ? a.value
                : void 0 !== a.get
                ? a.get.call(d)
                : void 0
              : s((c = i(t)))
              ? e(c, n, d)
              : void 0;
          },
        });
      },
      9115: (e, t, n) => {
        "use strict";
        var r = n(4496)(!0);
        n(2923)(
          String,
          "String",
          function (e) {
            (this._t = String(e)), (this._i = 0);
          },
          function () {
            var e,
              t = this._t,
              n = this._i;
            return n >= t.length
              ? { value: void 0, done: !0 }
              : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
          }
        );
      },
      5767: (e, t, n) => {
        "use strict";
        var r = n(3816),
          i = n(9181),
          o = n(7057),
          a = n(2985),
          s = n(7234),
          u = n(4728).KEY,
          c = n(4253),
          d = n(3825),
          l = n(2943),
          f = n(3953),
          v = n(6314),
          g = n(8787),
          p = n(6074),
          m = n(5541),
          h = n(4302),
          y = n(7007),
          E = n(5286),
          S = n(508),
          A = n(2110),
          b = n(1689),
          _ = n(681),
          w = n(2503),
          C = n(9327),
          T = n(8693),
          I = n(4548),
          k = n(9275),
          G = n(7184),
          P = T.f,
          R = k.f,
          O = C.f,
          D = r.Symbol,
          L = r.JSON,
          x = L && L.stringify,
          F = v("_hidden"),
          N = v("toPrimitive"),
          V = {}.propertyIsEnumerable,
          M = d("symbol-registry"),
          B = d("symbols"),
          U = d("op-symbols"),
          j = Object.prototype,
          K = "function" == typeof D && !!I.f,
          z = r.QObject,
          q = !z || !z.prototype || !z.prototype.findChild,
          H =
            o &&
            c(function () {
              return (
                7 !=
                w(
                  R({}, "a", {
                    get: function () {
                      return R(this, "a", { value: 7 }).a;
                    },
                  })
                ).a
              );
            })
              ? function (e, t, n) {
                  var r = P(j, t);
                  r && delete j[t], R(e, t, n), r && e !== j && R(j, t, r);
                }
              : R,
          W = function (e) {
            var t = (B[e] = w(D.prototype));
            return (t._k = e), t;
          },
          J =
            K && "symbol" == typeof D.iterator
              ? function (e) {
                  return "symbol" == typeof e;
                }
              : function (e) {
                  return e instanceof D;
                },
          Q = function (e, t, n) {
            return (
              e === j && Q(U, t, n),
              y(e),
              (t = b(t, !0)),
              y(n),
              i(B, t)
                ? (n.enumerable
                    ? (i(e, F) && e[F][t] && (e[F][t] = !1),
                      (n = w(n, { enumerable: _(0, !1) })))
                    : (i(e, F) || R(e, F, _(1, {})), (e[F][t] = !0)),
                  H(e, t, n))
                : R(e, t, n)
            );
          },
          X = function (e, t) {
            y(e);
            for (var n, r = m((t = A(t))), i = 0, o = r.length; o > i; )
              Q(e, (n = r[i++]), t[n]);
            return e;
          },
          Y = function (e) {
            var t = V.call(this, (e = b(e, !0)));
            return (
              !(this === j && i(B, e) && !i(U, e)) &&
              (!(t || !i(this, e) || !i(B, e) || (i(this, F) && this[F][e])) ||
                t)
            );
          },
          $ = function (e, t) {
            if (((e = A(e)), (t = b(t, !0)), e !== j || !i(B, t) || i(U, t))) {
              var n = P(e, t);
              return (
                !n || !i(B, t) || (i(e, F) && e[F][t]) || (n.enumerable = !0), n
              );
            }
          },
          Z = function (e) {
            for (var t, n = O(A(e)), r = [], o = 0; n.length > o; )
              i(B, (t = n[o++])) || t == F || t == u || r.push(t);
            return r;
          },
          ee = function (e) {
            for (
              var t, n = e === j, r = O(n ? U : A(e)), o = [], a = 0;
              r.length > a;

            )
              !i(B, (t = r[a++])) || (n && !i(j, t)) || o.push(B[t]);
            return o;
          };
        K ||
          ((D = function () {
            if (this instanceof D)
              throw TypeError("Symbol is not a constructor!");
            var e = f(arguments.length > 0 ? arguments[0] : void 0),
              t = function (n) {
                this === j && t.call(U, n),
                  i(this, F) && i(this[F], e) && (this[F][e] = !1),
                  H(this, e, _(1, n));
              };
            return o && q && H(j, e, { configurable: !0, set: t }), W(e);
          }),
          s(D.prototype, "toString", function () {
            return this._k;
          }),
          (T.f = $),
          (k.f = Q),
          (n(616).f = C.f = Z),
          (n(4682).f = Y),
          (I.f = ee),
          o && !n(4461) && s(j, "propertyIsEnumerable", Y, !0),
          (g.f = function (e) {
            return W(v(e));
          })),
          a(a.G + a.W + a.F * !K, { Symbol: D });
        for (
          var te =
              "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
                ","
              ),
            ne = 0;
          te.length > ne;

        )
          v(te[ne++]);
        for (var re = G(v.store), ie = 0; re.length > ie; ) p(re[ie++]);
        a(a.S + a.F * !K, "Symbol", {
          for: function (e) {
            return i(M, (e += "")) ? M[e] : (M[e] = D(e));
          },
          keyFor: function (e) {
            if (!J(e)) throw TypeError(e + " is not a symbol!");
            for (var t in M) if (M[t] === e) return t;
          },
          useSetter: function () {
            q = !0;
          },
          useSimple: function () {
            q = !1;
          },
        }),
          a(a.S + a.F * !K, "Object", {
            create: function (e, t) {
              return void 0 === t ? w(e) : X(w(e), t);
            },
            defineProperty: Q,
            defineProperties: X,
            getOwnPropertyDescriptor: $,
            getOwnPropertyNames: Z,
            getOwnPropertySymbols: ee,
          });
        var oe = c(function () {
          I.f(1);
        });
        a(a.S + a.F * oe, "Object", {
          getOwnPropertySymbols: function (e) {
            return I.f(S(e));
          },
        }),
          L &&
            a(
              a.S +
                a.F *
                  (!K ||
                    c(function () {
                      var e = D();
                      return (
                        "[null]" != x([e]) ||
                        "{}" != x({ a: e }) ||
                        "{}" != x(Object(e))
                      );
                    })),
              "JSON",
              {
                stringify: function (e) {
                  for (var t, n, r = [e], i = 1; arguments.length > i; )
                    r.push(arguments[i++]);
                  if (((n = t = r[1]), (E(t) || void 0 !== e) && !J(e)))
                    return (
                      h(t) ||
                        (t = function (e, t) {
                          if (
                            ("function" == typeof n && (t = n.call(this, e, t)),
                            !J(t))
                          )
                            return t;
                        }),
                      (r[1] = t),
                      x.apply(L, r)
                    );
                },
              }
            ),
          D.prototype[N] || n(7728)(D.prototype, N, D.prototype.valueOf),
          l(D, "Symbol"),
          l(Math, "Math", !0),
          l(r.JSON, "JSON", !0);
      },
      9865: (e, t, n) => {
        "use strict";
        var r = n(2985),
          i = n(5645),
          o = n(3816),
          a = n(8364),
          s = n(94);
        r(r.P + r.R, "Promise", {
          finally: function (e) {
            var t = a(this, i.Promise || o.Promise),
              n = "function" == typeof e;
            return this.then(
              n
                ? function (n) {
                    return s(t, e()).then(function () {
                      return n;
                    });
                  }
                : e,
              n
                ? function (n) {
                    return s(t, e()).then(function () {
                      throw n;
                    });
                  }
                : e
            );
          },
        });
      },
      1898: (e, t, n) => {
        "use strict";
        var r = n(2985),
          i = n(3499),
          o = n(188);
        r(r.S, "Promise", {
          try: function (e) {
            var t = i.f(this),
              n = o(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise;
          },
        });
      },
      1181: (e, t, n) => {
        for (
          var r = n(6997),
            i = n(7184),
            o = n(7234),
            a = n(3816),
            s = n(7728),
            u = n(2803),
            c = n(6314),
            d = c("iterator"),
            l = c("toStringTag"),
            f = u.Array,
            v = {
              CSSRuleList: !0,
              CSSStyleDeclaration: !1,
              CSSValueList: !1,
              ClientRectList: !1,
              DOMRectList: !1,
              DOMStringList: !1,
              DOMTokenList: !0,
              DataTransferItemList: !1,
              FileList: !1,
              HTMLAllCollection: !1,
              HTMLCollection: !1,
              HTMLFormElement: !1,
              HTMLSelectElement: !1,
              MediaList: !0,
              MimeTypeArray: !1,
              NamedNodeMap: !1,
              NodeList: !0,
              PaintRequestList: !1,
              Plugin: !1,
              PluginArray: !1,
              SVGLengthList: !1,
              SVGNumberList: !1,
              SVGPathSegList: !1,
              SVGPointList: !1,
              SVGStringList: !1,
              SVGTransformList: !1,
              SourceBufferList: !1,
              StyleSheetList: !0,
              TextTrackCueList: !1,
              TextTrackList: !1,
              TouchList: !1,
            },
            g = i(v),
            p = 0;
          p < g.length;
          p++
        ) {
          var m,
            h = g[p],
            y = v[h],
            E = a[h],
            S = E && E.prototype;
          if (S && (S[d] || s(S, d, f), S[l] || s(S, l, h), (u[h] = f), y))
            for (m in r) S[m] || o(S, m, r[m], !0);
        }
      },
      4602: (e, t) => {
        (() => {
          var e = {
              912: (e, t, n) => {
                function r(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                var i = n(806),
                  o = n(49),
                  a = n(461),
                  s = (function () {
                    function e(t, n) {
                      var o =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      r(this, e),
                        i.GameAnalytics.gaCommand("setEnabledInfoLog", o),
                        i.GameAnalytics.gaCommand("initialize", t, n);
                    }
                    var t, n;
                    return (
                      (t = e),
                      (n = [
                        {
                          key: "onCustomEvent",
                          value: function (e, t) {
                            i.GameAnalytics.gaCommand(o.DESIGNEVENT, e, t);
                          },
                        },
                        {
                          key: "onGameShopOpen",
                          value: function () {
                            i.GameAnalytics.gaCommand(
                              o.DESIGNEVENT,
                              "shopOpen",
                              1
                            );
                          },
                        },
                        {
                          key: "onGameShopPurchase",
                          value: function () {
                            i.GameAnalytics.gaCommand(
                              o.DESIGNEVENT,
                              "shopPurchase",
                              1
                            );
                          },
                        },
                        {
                          key: "onGamePreloadEnd",
                          value: function (e) {
                            i.GameAnalytics.gaCommand(
                              o.DESIGNEVENT,
                              "preloadingTime",
                              e
                            );
                          },
                        },
                        {
                          key: "onGameSetBuildVersion",
                          value: function (e) {
                            i.GameAnalytics.gaCommand("configureBuild", e);
                          },
                        },
                        {
                          key: "onGameSetUserId",
                          value: function (e) {
                            i.GameAnalytics.gaCommand("configureUserId", e);
                          },
                        },
                        {
                          key: "onGameError",
                          value: function (e) {
                            i.GameAnalytics.gaCommand(
                              o.ERROREVENT,
                              i.EGAErrorSeverity.Debug,
                              e
                            );
                          },
                        },
                        {
                          key: "onLevelStarted",
                          value: function (e) {
                            i.GameAnalytics.gaCommand(
                              o.PROGRESSIONEVENT,
                              "Start",
                              e || " ",
                              null,
                              null,
                              {}
                            );
                          },
                        },
                        {
                          key: "onLevelEnded",
                          value: function (e, t, n) {
                            i.GameAnalytics.gaCommand(
                              o.PROGRESSIONEVENT,
                              !0 === t ? "Complete" : "Fail",
                              n || " ",
                              null,
                              null,
                              { score: e }
                            );
                          },
                        },
                        {
                          key: "onAdFailedLoad",
                          value: function (e, t) {
                            var n = a.typeToAd(e);
                            i.GameAnalytics.gaCommand(
                              o.ADEVENT,
                              i.EGAAdAction.FailedShow,
                              n.id,
                              t,
                              n.name + "Impression"
                            );
                          },
                        },
                        {
                          key: "onAdImpression",
                          value: function (e, t) {
                            var n = a.typeToAd(e);
                            i.GameAnalytics.gaCommand(
                              o.ADEVENT,
                              i.EGAAdAction.Show,
                              n.id,
                              t,
                              n.name + "Impression"
                            );
                          },
                        },
                      ]) &&
                        (function (e, t) {
                          for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1),
                              (r.configurable = !0),
                              "value" in r && (r.writable = !0),
                              Object.defineProperty(e, r.key, r);
                          }
                        })(t.prototype, n),
                      Object.defineProperty(t, "prototype", { writable: !1 }),
                      e
                    );
                  })();
                e.exports = s;
              },
              461: (e) => {
                function t(e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e
                  );
                }
                var n = (function () {
                  function e() {
                    !(function (e, t) {
                      if (!(e instanceof t))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                  }
                  var t, n;
                  return (
                    (t = e),
                    (n = [
                      {
                        key: "typeToAd",
                        value: function (t) {
                          var n = [
                              e.VIDEO,
                              e.REWARDED,
                              e.PLAYABLE,
                              e.INTERSTITIAL,
                              e.OFFERWALL,
                              e.BANNER,
                            ],
                            r = n.indexOf(t);
                          return -1 === r ? e.BANNER : n[r];
                        },
                      },
                    ]),
                    n &&
                      (function (e, t) {
                        for (var n = 0; n < t.length; n++) {
                          var r = t[n];
                          (r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r);
                        }
                      })(t, n),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    e
                  );
                })();
                t(n, "VIDEO", { name: "Video", id: 1 }),
                  t(n, "REWARDED", { name: "RewardedVideo", id: 2 }),
                  t(n, "PLAYABLE", { name: "Playable", id: 3 }),
                  t(n, "INTERSTITIAL", { name: "Interstitial", id: 4 }),
                  t(n, "OFFERWALL", { name: "OfferWall", id: 5 }),
                  t(n, "BANNER", { name: "Banner", id: 6 }),
                  (e.exports = n);
              },
              49: (e) => {
                function t(e, t, n) {
                  return (
                    t in e
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e
                  );
                }
                var n = (function (e, t, n) {
                  return (
                    Object.defineProperty(e, "prototype", { writable: !1 }), e
                  );
                })(function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e);
                });
                t(n, "PROGRESSIONEVENT", "addProgressionEvent"),
                  t(n, "DESIGNEVENT", "addDesignEvent"),
                  t(n, "ERROREVENT", "addErrorEvent"),
                  t(n, "ADEVENT", "addAdEvent"),
                  (e.exports = n);
              },
              579: (e, t, n) => {
                var r = n(912),
                  i = n(461);
                e.exports = {
                  H5Analytics: r,
                  ADTYPE: i,
                  REWARDED: i.REWARDED,
                  VIDEO: i.VIDEO,
                  PLAYABLE: i.PLAYABLE,
                  INTERSTITIAL: i.INTERSTITIAL,
                  OFFERWALL: i.OFFERWALL,
                  BANNER: i.BANNER,
                };
              },
              806: (e, t, n) => {
                "use strict";
                var r,
                  i,
                  o,
                  a,
                  s =
                    s ||
                    (function (e, t) {
                      var n = {},
                        r = (n.lib = {}),
                        i = function () {},
                        o = (r.Base = {
                          extend: function (e) {
                            i.prototype = this;
                            var t = new i();
                            return (
                              e && t.mixIn(e),
                              t.hasOwnProperty("init") ||
                                (t.init = function () {
                                  t.$super.init.apply(this, arguments);
                                }),
                              (t.init.prototype = t),
                              (t.$super = this),
                              t
                            );
                          },
                          create: function () {
                            var e = this.extend();
                            return e.init.apply(e, arguments), e;
                          },
                          init: function () {},
                          mixIn: function (e) {
                            for (var t in e)
                              e.hasOwnProperty(t) && (this[t] = e[t]);
                            e.hasOwnProperty("toString") &&
                              (this.toString = e.toString);
                          },
                          clone: function () {
                            return this.init.prototype.extend(this);
                          },
                        }),
                        a = (r.WordArray = o.extend({
                          init: function (e, t) {
                            (e = this.words = e || []),
                              (this.sigBytes = null != t ? t : 4 * e.length);
                          },
                          toString: function (e) {
                            return (e || u).stringify(this);
                          },
                          concat: function (e) {
                            var t = this.words,
                              n = e.words,
                              r = this.sigBytes;
                            if (((e = e.sigBytes), this.clamp(), r % 4))
                              for (var i = 0; i < e; i++)
                                t[(r + i) >>> 2] |=
                                  ((n[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) <<
                                  (24 - ((r + i) % 4) * 8);
                            else if (65535 < n.length)
                              for (i = 0; i < e; i += 4)
                                t[(r + i) >>> 2] = n[i >>> 2];
                            else t.push.apply(t, n);
                            return (this.sigBytes += e), this;
                          },
                          clamp: function () {
                            var t = this.words,
                              n = this.sigBytes;
                            (t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)),
                              (t.length = e.ceil(n / 4));
                          },
                          clone: function () {
                            var e = o.clone.call(this);
                            return (e.words = this.words.slice(0)), e;
                          },
                          random: function (t) {
                            for (var n = [], r = 0; r < t; r += 4)
                              n.push((4294967296 * e.random()) | 0);
                            return new a.init(n, t);
                          },
                        })),
                        s = (n.enc = {}),
                        u = (s.Hex = {
                          stringify: function (e) {
                            var t = e.words;
                            e = e.sigBytes;
                            for (var n = [], r = 0; r < e; r++) {
                              var i = (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255;
                              n.push((i >>> 4).toString(16)),
                                n.push((15 & i).toString(16));
                            }
                            return n.join("");
                          },
                          parse: function (e) {
                            for (var t = e.length, n = [], r = 0; r < t; r += 2)
                              n[r >>> 3] |=
                                parseInt(e.substr(r, 2), 16) <<
                                (24 - (r % 8) * 4);
                            return new a.init(n, t / 2);
                          },
                        }),
                        c = (s.Latin1 = {
                          stringify: function (e) {
                            var t = e.words;
                            e = e.sigBytes;
                            for (var n = [], r = 0; r < e; r++)
                              n.push(
                                String.fromCharCode(
                                  (t[r >>> 2] >>> (24 - (r % 4) * 8)) & 255
                                )
                              );
                            return n.join("");
                          },
                          parse: function (e) {
                            for (var t = e.length, n = [], r = 0; r < t; r++)
                              n[r >>> 2] |=
                                (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
                            return new a.init(n, t);
                          },
                        }),
                        d = (s.Utf8 = {
                          stringify: function (e) {
                            try {
                              return decodeURIComponent(escape(c.stringify(e)));
                            } catch (e) {
                              throw Error("Malformed UTF-8 data");
                            }
                          },
                          parse: function (e) {
                            return c.parse(unescape(encodeURIComponent(e)));
                          },
                        }),
                        l = (r.BufferedBlockAlgorithm = o.extend({
                          reset: function () {
                            (this._data = new a.init()), (this._nDataBytes = 0);
                          },
                          _append: function (e) {
                            "string" == typeof e && (e = d.parse(e)),
                              this._data.concat(e),
                              (this._nDataBytes += e.sigBytes);
                          },
                          _process: function (t) {
                            var n = this._data,
                              r = n.words,
                              i = n.sigBytes,
                              o = this.blockSize,
                              s = i / (4 * o);
                            if (
                              ((t =
                                (s = t
                                  ? e.ceil(s)
                                  : e.max((0 | s) - this._minBufferSize, 0)) *
                                o),
                              (i = e.min(4 * t, i)),
                              t)
                            ) {
                              for (var u = 0; u < t; u += o)
                                this._doProcessBlock(r, u);
                              (u = r.splice(0, t)), (n.sigBytes -= i);
                            }
                            return new a.init(u, i);
                          },
                          clone: function () {
                            var e = o.clone.call(this);
                            return (e._data = this._data.clone()), e;
                          },
                          _minBufferSize: 0,
                        }));
                      r.Hasher = l.extend({
                        cfg: o.extend(),
                        init: function (e) {
                          (this.cfg = this.cfg.extend(e)), this.reset();
                        },
                        reset: function () {
                          l.reset.call(this), this._doReset();
                        },
                        update: function (e) {
                          return this._append(e), this._process(), this;
                        },
                        finalize: function (e) {
                          return e && this._append(e), this._doFinalize();
                        },
                        blockSize: 16,
                        _createHelper: function (e) {
                          return function (t, n) {
                            return new e.init(n).finalize(t);
                          };
                        },
                        _createHmacHelper: function (e) {
                          return function (t, n) {
                            return new f.HMAC.init(e, n).finalize(t);
                          };
                        },
                      });
                      var f = (n.algo = {});
                      return n;
                    })(Math);
                !(function (e) {
                  for (
                    var t = s,
                      n = (i = t.lib).WordArray,
                      r = i.Hasher,
                      i = t.algo,
                      o = [],
                      a = [],
                      u = function (e) {
                        return (4294967296 * (e - (0 | e))) | 0;
                      },
                      c = 2,
                      d = 0;
                    64 > d;

                  ) {
                    var l;
                    e: {
                      l = c;
                      for (var f = e.sqrt(l), v = 2; v <= f; v++)
                        if (!(l % v)) {
                          l = !1;
                          break e;
                        }
                      l = !0;
                    }
                    l &&
                      (8 > d && (o[d] = u(e.pow(c, 0.5))),
                      (a[d] = u(e.pow(c, 1 / 3))),
                      d++),
                      c++;
                  }
                  var g = [];
                  (i = i.SHA256 =
                    r.extend({
                      _doReset: function () {
                        this._hash = new n.init(o.slice(0));
                      },
                      _doProcessBlock: function (e, t) {
                        for (
                          var n = this._hash.words,
                            r = n[0],
                            i = n[1],
                            o = n[2],
                            s = n[3],
                            u = n[4],
                            c = n[5],
                            d = n[6],
                            l = n[7],
                            f = 0;
                          64 > f;
                          f++
                        ) {
                          if (16 > f) g[f] = 0 | e[t + f];
                          else {
                            var v = g[f - 15],
                              p = g[f - 2];
                            g[f] =
                              (((v << 25) | (v >>> 7)) ^
                                ((v << 14) | (v >>> 18)) ^
                                (v >>> 3)) +
                              g[f - 7] +
                              (((p << 15) | (p >>> 17)) ^
                                ((p << 13) | (p >>> 19)) ^
                                (p >>> 10)) +
                              g[f - 16];
                          }
                          (v =
                            l +
                            (((u << 26) | (u >>> 6)) ^
                              ((u << 21) | (u >>> 11)) ^
                              ((u << 7) | (u >>> 25))) +
                            ((u & c) ^ (~u & d)) +
                            a[f] +
                            g[f]),
                            (p =
                              (((r << 30) | (r >>> 2)) ^
                                ((r << 19) | (r >>> 13)) ^
                                ((r << 10) | (r >>> 22))) +
                              ((r & i) ^ (r & o) ^ (i & o))),
                            (l = d),
                            (d = c),
                            (c = u),
                            (u = (s + v) | 0),
                            (s = o),
                            (o = i),
                            (i = r),
                            (r = (v + p) | 0);
                        }
                        (n[0] = (n[0] + r) | 0),
                          (n[1] = (n[1] + i) | 0),
                          (n[2] = (n[2] + o) | 0),
                          (n[3] = (n[3] + s) | 0),
                          (n[4] = (n[4] + u) | 0),
                          (n[5] = (n[5] + c) | 0),
                          (n[6] = (n[6] + d) | 0),
                          (n[7] = (n[7] + l) | 0);
                      },
                      _doFinalize: function () {
                        var t = this._data,
                          n = t.words,
                          r = 8 * this._nDataBytes,
                          i = 8 * t.sigBytes;
                        return (
                          (n[i >>> 5] |= 128 << (24 - (i % 32))),
                          (n[14 + (((i + 64) >>> 9) << 4)] = e.floor(
                            r / 4294967296
                          )),
                          (n[15 + (((i + 64) >>> 9) << 4)] = r),
                          (t.sigBytes = 4 * n.length),
                          this._process(),
                          this._hash
                        );
                      },
                      clone: function () {
                        var e = r.clone.call(this);
                        return (e._hash = this._hash.clone()), e;
                      },
                    })),
                    (t.SHA256 = r._createHelper(i)),
                    (t.HmacSHA256 = r._createHmacHelper(i));
                })(Math),
                  (i = (r = s).enc.Utf8),
                  (r.algo.HMAC = r.lib.Base.extend({
                    init: function (e, t) {
                      (e = this._hasher = new e.init()),
                        "string" == typeof t && (t = i.parse(t));
                      var n = e.blockSize,
                        r = 4 * n;
                      t.sigBytes > r && (t = e.finalize(t)), t.clamp();
                      for (
                        var o = (this._oKey = t.clone()),
                          a = (this._iKey = t.clone()),
                          s = o.words,
                          u = a.words,
                          c = 0;
                        c < n;
                        c++
                      )
                        (s[c] ^= 1549556828), (u[c] ^= 909522486);
                      (o.sigBytes = a.sigBytes = r), this.reset();
                    },
                    reset: function () {
                      var e = this._hasher;
                      e.reset(), e.update(this._iKey);
                    },
                    update: function (e) {
                      return this._hasher.update(e), this;
                    },
                    finalize: function (e) {
                      var t = this._hasher;
                      return (
                        (e = t.finalize(e)),
                        t.reset(),
                        t.finalize(this._oKey.clone().concat(e))
                      );
                    },
                  })),
                  (function () {
                    var e = s,
                      t = e.lib.WordArray;
                    e.enc.Base64 = {
                      stringify: function (e) {
                        var t = e.words,
                          n = e.sigBytes,
                          r = this._map;
                        e.clamp(), (e = []);
                        for (var i = 0; i < n; i += 3)
                          for (
                            var o =
                                (((t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) <<
                                  16) |
                                (((t[(i + 1) >>> 2] >>>
                                  (24 - ((i + 1) % 4) * 8)) &
                                  255) <<
                                  8) |
                                ((t[(i + 2) >>> 2] >>>
                                  (24 - ((i + 2) % 4) * 8)) &
                                  255),
                              a = 0;
                            4 > a && i + 0.75 * a < n;
                            a++
                          )
                            e.push(r.charAt((o >>> (6 * (3 - a))) & 63));
                        if ((t = r.charAt(64)))
                          for (; e.length % 4; ) e.push(t);
                        return e.join("");
                      },
                      parse: function (e) {
                        var n = e.length,
                          r = this._map;
                        (i = r.charAt(64)) &&
                          -1 != (i = e.indexOf(i)) &&
                          (n = i);
                        for (var i = [], o = 0, a = 0; a < n; a++)
                          if (a % 4) {
                            var s = r.indexOf(e.charAt(a - 1)) << ((a % 4) * 2),
                              u = r.indexOf(e.charAt(a)) >>> (6 - (a % 4) * 2);
                            (i[o >>> 2] |= (s | u) << (24 - (o % 4) * 8)), o++;
                          }
                        return t.create(i, o);
                      },
                      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    };
                  })(),
                  (function (e) {
                    var t, n, r, i, o, a, s, u, c, d, l, f, v;
                    ((v = e.EGAErrorSeverity || (e.EGAErrorSeverity = {}))[
                      (v.Undefined = 0)
                    ] = "Undefined"),
                      (v[(v.Debug = 1)] = "Debug"),
                      (v[(v.Info = 2)] = "Info"),
                      (v[(v.Warning = 3)] = "Warning"),
                      (v[(v.Error = 4)] = "Error"),
                      (v[(v.Critical = 5)] = "Critical"),
                      ((f =
                        e.EGAProgressionStatus ||
                        (e.EGAProgressionStatus = {}))[(f.Undefined = 0)] =
                        "Undefined"),
                      (f[(f.Start = 1)] = "Start"),
                      (f[(f.Complete = 2)] = "Complete"),
                      (f[(f.Fail = 3)] = "Fail"),
                      ((l =
                        e.EGAResourceFlowType || (e.EGAResourceFlowType = {}))[
                        (l.Undefined = 0)
                      ] = "Undefined"),
                      (l[(l.Source = 1)] = "Source"),
                      (l[(l.Sink = 2)] = "Sink"),
                      ((d = e.EGAAdAction || (e.EGAAdAction = {}))[
                        (d.Undefined = 0)
                      ] = "Undefined"),
                      (d[(d.Clicked = 1)] = "Clicked"),
                      (d[(d.Show = 2)] = "Show"),
                      (d[(d.FailedShow = 3)] = "FailedShow"),
                      (d[(d.RewardReceived = 4)] = "RewardReceived"),
                      ((c = e.EGAAdError || (e.EGAAdError = {}))[
                        (c.Undefined = 0)
                      ] = "Undefined"),
                      (c[(c.Unknown = 1)] = "Unknown"),
                      (c[(c.Offline = 2)] = "Offline"),
                      (c[(c.NoFill = 3)] = "NoFill"),
                      (c[(c.InternalError = 4)] = "InternalError"),
                      (c[(c.InvalidRequest = 5)] = "InvalidRequest"),
                      (c[(c.UnableToPrecache = 6)] = "UnableToPrecache"),
                      ((u = e.EGAAdType || (e.EGAAdType = {}))[
                        (u.Undefined = 0)
                      ] = "Undefined"),
                      (u[(u.Video = 1)] = "Video"),
                      (u[(u.RewardedVideo = 2)] = "RewardedVideo"),
                      (u[(u.Playable = 3)] = "Playable"),
                      (u[(u.Interstitial = 4)] = "Interstitial"),
                      (u[(u.OfferWall = 5)] = "OfferWall"),
                      (u[(u.Banner = 6)] = "Banner"),
                      ((s =
                        (a = e.http || (e.http = {})).EGAHTTPApiResponse ||
                        (a.EGAHTTPApiResponse = {}))[(s.NoResponse = 0)] =
                        "NoResponse"),
                      (s[(s.BadResponse = 1)] = "BadResponse"),
                      (s[(s.RequestTimeout = 2)] = "RequestTimeout"),
                      (s[(s.JsonEncodeFailed = 3)] = "JsonEncodeFailed"),
                      (s[(s.JsonDecodeFailed = 4)] = "JsonDecodeFailed"),
                      (s[(s.InternalServerError = 5)] = "InternalServerError"),
                      (s[(s.BadRequest = 6)] = "BadRequest"),
                      (s[(s.Unauthorized = 7)] = "Unauthorized"),
                      (s[(s.UnknownResponseCode = 8)] = "UnknownResponseCode"),
                      (s[(s.Ok = 9)] = "Ok"),
                      (s[(s.Created = 10)] = "Created"),
                      ((o =
                        (t = e.events || (e.events = {})).EGASdkErrorCategory ||
                        (t.EGASdkErrorCategory = {}))[(o.Undefined = 0)] =
                        "Undefined"),
                      (o[(o.EventValidation = 1)] = "EventValidation"),
                      (o[(o.Database = 2)] = "Database"),
                      (o[(o.Init = 3)] = "Init"),
                      (o[(o.Http = 4)] = "Http"),
                      (o[(o.Json = 5)] = "Json"),
                      ((i = t.EGASdkErrorArea || (t.EGASdkErrorArea = {}))[
                        (i.Undefined = 0)
                      ] = "Undefined"),
                      (i[(i.BusinessEvent = 1)] = "BusinessEvent"),
                      (i[(i.ResourceEvent = 2)] = "ResourceEvent"),
                      (i[(i.ProgressionEvent = 3)] = "ProgressionEvent"),
                      (i[(i.DesignEvent = 4)] = "DesignEvent"),
                      (i[(i.ErrorEvent = 5)] = "ErrorEvent"),
                      (i[(i.InitHttp = 9)] = "InitHttp"),
                      (i[(i.EventsHttp = 10)] = "EventsHttp"),
                      (i[(i.ProcessEvents = 11)] = "ProcessEvents"),
                      (i[(i.AddEventsToStore = 12)] = "AddEventsToStore"),
                      (i[(i.AdEvent = 20)] = "AdEvent"),
                      ((r = t.EGASdkErrorAction || (t.EGASdkErrorAction = {}))[
                        (r.Undefined = 0)
                      ] = "Undefined"),
                      (r[(r.InvalidCurrency = 1)] = "InvalidCurrency"),
                      (r[(r.InvalidShortString = 2)] = "InvalidShortString"),
                      (r[(r.InvalidEventPartLength = 3)] =
                        "InvalidEventPartLength"),
                      (r[(r.InvalidEventPartCharacters = 4)] =
                        "InvalidEventPartCharacters"),
                      (r[(r.InvalidStore = 5)] = "InvalidStore"),
                      (r[(r.InvalidFlowType = 6)] = "InvalidFlowType"),
                      (r[(r.StringEmptyOrNull = 7)] = "StringEmptyOrNull"),
                      (r[(r.NotFoundInAvailableCurrencies = 8)] =
                        "NotFoundInAvailableCurrencies"),
                      (r[(r.InvalidAmount = 9)] = "InvalidAmount"),
                      (r[(r.NotFoundInAvailableItemTypes = 10)] =
                        "NotFoundInAvailableItemTypes"),
                      (r[(r.WrongProgressionOrder = 11)] =
                        "WrongProgressionOrder"),
                      (r[(r.InvalidEventIdLength = 12)] =
                        "InvalidEventIdLength"),
                      (r[(r.InvalidEventIdCharacters = 13)] =
                        "InvalidEventIdCharacters"),
                      (r[(r.InvalidProgressionStatus = 15)] =
                        "InvalidProgressionStatus"),
                      (r[(r.InvalidSeverity = 16)] = "InvalidSeverity"),
                      (r[(r.InvalidLongString = 17)] = "InvalidLongString"),
                      (r[(r.DatabaseTooLarge = 18)] = "DatabaseTooLarge"),
                      (r[(r.DatabaseOpenOrCreate = 19)] =
                        "DatabaseOpenOrCreate"),
                      (r[(r.JsonError = 25)] = "JsonError"),
                      (r[(r.FailHttpJsonDecode = 29)] = "FailHttpJsonDecode"),
                      (r[(r.FailHttpJsonEncode = 30)] = "FailHttpJsonEncode"),
                      (r[(r.InvalidAdAction = 31)] = "InvalidAdAction"),
                      (r[(r.InvalidAdType = 32)] = "InvalidAdType"),
                      (r[(r.InvalidString = 33)] = "InvalidString"),
                      ((n =
                        t.EGASdkErrorParameter ||
                        (t.EGASdkErrorParameter = {}))[(n.Undefined = 0)] =
                        "Undefined"),
                      (n[(n.Currency = 1)] = "Currency"),
                      (n[(n.CartType = 2)] = "CartType"),
                      (n[(n.ItemType = 3)] = "ItemType"),
                      (n[(n.ItemId = 4)] = "ItemId"),
                      (n[(n.Store = 5)] = "Store"),
                      (n[(n.FlowType = 6)] = "FlowType"),
                      (n[(n.Amount = 7)] = "Amount"),
                      (n[(n.Progression01 = 8)] = "Progression01"),
                      (n[(n.Progression02 = 9)] = "Progression02"),
                      (n[(n.Progression03 = 10)] = "Progression03"),
                      (n[(n.EventId = 11)] = "EventId"),
                      (n[(n.ProgressionStatus = 12)] = "ProgressionStatus"),
                      (n[(n.Severity = 13)] = "Severity"),
                      (n[(n.Message = 14)] = "Message"),
                      (n[(n.AdAction = 15)] = "AdAction"),
                      (n[(n.AdType = 16)] = "AdType"),
                      (n[(n.AdSdkName = 17)] = "AdSdkName"),
                      (n[(n.AdPlacement = 18)] = "AdPlacement");
                  })(a || (a = {})),
                  (function (e) {
                    var t, n, r, i, o, a;
                    ((a = e.EGAErrorSeverity || (e.EGAErrorSeverity = {}))[
                      (a.Undefined = 0)
                    ] = "Undefined"),
                      (a[(a.Debug = 1)] = "Debug"),
                      (a[(a.Info = 2)] = "Info"),
                      (a[(a.Warning = 3)] = "Warning"),
                      (a[(a.Error = 4)] = "Error"),
                      (a[(a.Critical = 5)] = "Critical"),
                      ((o =
                        e.EGAProgressionStatus ||
                        (e.EGAProgressionStatus = {}))[(o.Undefined = 0)] =
                        "Undefined"),
                      (o[(o.Start = 1)] = "Start"),
                      (o[(o.Complete = 2)] = "Complete"),
                      (o[(o.Fail = 3)] = "Fail"),
                      ((i =
                        e.EGAResourceFlowType || (e.EGAResourceFlowType = {}))[
                        (i.Undefined = 0)
                      ] = "Undefined"),
                      (i[(i.Source = 1)] = "Source"),
                      (i[(i.Sink = 2)] = "Sink"),
                      ((r = e.EGAAdAction || (e.EGAAdAction = {}))[
                        (r.Undefined = 0)
                      ] = "Undefined"),
                      (r[(r.Clicked = 1)] = "Clicked"),
                      (r[(r.Show = 2)] = "Show"),
                      (r[(r.FailedShow = 3)] = "FailedShow"),
                      (r[(r.RewardReceived = 4)] = "RewardReceived"),
                      ((n = e.EGAAdError || (e.EGAAdError = {}))[
                        (n.Undefined = 0)
                      ] = "Undefined"),
                      (n[(n.Unknown = 1)] = "Unknown"),
                      (n[(n.Offline = 2)] = "Offline"),
                      (n[(n.NoFill = 3)] = "NoFill"),
                      (n[(n.InternalError = 4)] = "InternalError"),
                      (n[(n.InvalidRequest = 5)] = "InvalidRequest"),
                      (n[(n.UnableToPrecache = 6)] = "UnableToPrecache"),
                      ((t = e.EGAAdType || (e.EGAAdType = {}))[
                        (t.Undefined = 0)
                      ] = "Undefined"),
                      (t[(t.Video = 1)] = "Video"),
                      (t[(t.RewardedVideo = 2)] = "RewardedVideo"),
                      (t[(t.Playable = 3)] = "Playable"),
                      (t[(t.Interstitial = 4)] = "Interstitial"),
                      (t[(t.OfferWall = 5)] = "OfferWall"),
                      (t[(t.Banner = 6)] = "Banner");
                  })(o || (o = {})),
                  (function (e) {
                    !(function (e) {
                      var t;
                      !(function (e) {
                        (e[(e.Error = 0)] = "Error"),
                          (e[(e.Warning = 1)] = "Warning"),
                          (e[(e.Info = 2)] = "Info"),
                          (e[(e.Debug = 3)] = "Debug");
                      })(t || (t = {}));
                      var n = (function () {
                        function e() {
                          e.debugEnabled = !1;
                        }
                        return (
                          (e.setInfoLog = function (t) {
                            e.instance.infoLogEnabled = t;
                          }),
                          (e.setVerboseLog = function (t) {
                            e.instance.infoLogVerboseEnabled = t;
                          }),
                          (e.i = function (n) {
                            if (e.instance.infoLogEnabled) {
                              var r = "Info/" + e.Tag + ": " + n;
                              e.instance.sendNotificationMessage(r, t.Info);
                            }
                          }),
                          (e.w = function (n) {
                            var r = "Warning/" + e.Tag + ": " + n;
                            e.instance.sendNotificationMessage(r, t.Warning);
                          }),
                          (e.e = function (n) {
                            var r = "Error/" + e.Tag + ": " + n;
                            e.instance.sendNotificationMessage(r, t.Error);
                          }),
                          (e.ii = function (n) {
                            if (e.instance.infoLogVerboseEnabled) {
                              var r = "Verbose/" + e.Tag + ": " + n;
                              e.instance.sendNotificationMessage(r, t.Info);
                            }
                          }),
                          (e.d = function (n) {
                            if (e.debugEnabled) {
                              var r = "Debug/" + e.Tag + ": " + n;
                              e.instance.sendNotificationMessage(r, t.Debug);
                            }
                          }),
                          (e.prototype.sendNotificationMessage = function (
                            e,
                            n
                          ) {
                            switch (n) {
                              case t.Error:
                                console.error(e);
                                break;
                              case t.Warning:
                                console.warn(e);
                                break;
                              case t.Debug:
                                "function" == typeof console.debug
                                  ? console.debug(e)
                                  : console.log(e);
                                break;
                              case t.Info:
                                console.log(e);
                            }
                          }),
                          (e.instance = new e()),
                          (e.Tag = "GameAnalytics"),
                          e
                        );
                      })();
                      e.GALogger = n;
                    })(e.logging || (e.logging = {}));
                  })(a || (a = {})),
                  (function (e) {
                    var t, n, r;
                    (t = e.utilities || (e.utilities = {})),
                      (n = e.logging.GALogger),
                      (r = (function () {
                        function e() {}
                        return (
                          (e.getHmac = function (e, t) {
                            var n = s.HmacSHA256(t, e);
                            return s.enc.Base64.stringify(n);
                          }),
                          (e.stringMatch = function (e, t) {
                            return !(!e || !t) && t.test(e);
                          }),
                          (e.joinStringArray = function (e, t) {
                            for (var n = "", r = 0, i = e.length; r < i; r++)
                              r > 0 && (n += t), (n += e[r]);
                            return n;
                          }),
                          (e.stringArrayContainsString = function (e, t) {
                            if (0 === e.length) return !1;
                            for (var n in e) if (e[n] === t) return !0;
                            return !1;
                          }),
                          (e.encode64 = function (t) {
                            t = encodeURI(t);
                            var n,
                              r,
                              i,
                              o,
                              a,
                              s = "",
                              u = 0,
                              c = 0,
                              d = 0;
                            do {
                              (i = (n = t.charCodeAt(d++)) >> 2),
                                (o =
                                  ((3 & n) << 4) |
                                  ((r = t.charCodeAt(d++)) >> 4)),
                                (a =
                                  ((15 & r) << 2) |
                                  ((u = t.charCodeAt(d++)) >> 6)),
                                (c = 63 & u),
                                isNaN(r) ? (a = c = 64) : isNaN(u) && (c = 64),
                                (s =
                                  s +
                                  e.keyStr.charAt(i) +
                                  e.keyStr.charAt(o) +
                                  e.keyStr.charAt(a) +
                                  e.keyStr.charAt(c)),
                                (n = r = u = 0),
                                (i = o = a = c = 0);
                            } while (d < t.length);
                            return s;
                          }),
                          (e.decode64 = function (t) {
                            var r,
                              i,
                              o,
                              a,
                              s = "",
                              u = 0,
                              c = 0,
                              d = 0;
                            /[^A-Za-z0-9\+\/\=]/g.exec(t) &&
                              n.w(
                                "There were invalid base64 characters in the input text. Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='. Expect errors in decoding."
                              ),
                              (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""));
                            do {
                              (r =
                                (e.keyStr.indexOf(t.charAt(d++)) << 2) |
                                ((o = e.keyStr.indexOf(t.charAt(d++))) >> 4)),
                                (i =
                                  ((15 & o) << 4) |
                                  ((a = e.keyStr.indexOf(t.charAt(d++))) >> 2)),
                                (u =
                                  ((3 & a) << 6) |
                                  (c = e.keyStr.indexOf(t.charAt(d++)))),
                                (s += String.fromCharCode(r)),
                                64 != a && (s += String.fromCharCode(i)),
                                64 != c && (s += String.fromCharCode(u)),
                                (r = i = u = 0),
                                (o = a = c = 0);
                            } while (d < t.length);
                            return decodeURI(s);
                          }),
                          (e.timeIntervalSince1970 = function () {
                            var e = new Date();
                            return Math.round(e.getTime() / 1e3);
                          }),
                          (e.createGuid = function () {
                            return "10000000-1000-4000-8000-100000000000".replace(
                              /[018]/g,
                              function (e) {
                                return (
                                  +e ^
                                  (crypto.getRandomValues(
                                    new Uint8Array(1)
                                  )[0] &
                                    (15 >> (+e / 4)))
                                ).toString(16);
                              }
                            );
                          }),
                          (e.keyStr =
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
                          e
                        );
                      })()),
                      (t.GAUtilities = r);
                  })(a || (a = {})),
                  (function (e) {
                    !(function (t) {
                      var n = e.logging.GALogger,
                        r = e.utilities.GAUtilities,
                        i = e.events.EGASdkErrorCategory,
                        o = e.events.EGASdkErrorArea,
                        a = e.events.EGASdkErrorAction,
                        s = e.events.EGASdkErrorParameter,
                        u = function (e, t, n, r, i) {
                          (this.category = e),
                            (this.area = t),
                            (this.action = n),
                            (this.parameter = r),
                            (this.reason = i);
                        };
                      t.ValidationResult = u;
                      var c = (function () {
                        function t() {}
                        return (
                          (t.validateBusinessEvent = function (e, r, c, d, l) {
                            return t.validateCurrency(e)
                              ? r < 0
                                ? (n.w(
                                    "Validation fail - business event - amount. Cannot be less than 0. Failed amount: " +
                                      r
                                  ),
                                  new u(
                                    i.EventValidation,
                                    o.BusinessEvent,
                                    a.InvalidAmount,
                                    s.Amount,
                                    r + ""
                                  ))
                                : t.validateShortString(c, !0)
                                ? t.validateEventPartLength(d, !1)
                                  ? t.validateEventPartCharacters(d)
                                    ? t.validateEventPartLength(l, !1)
                                      ? t.validateEventPartCharacters(l)
                                        ? null
                                        : (n.w(
                                            "Validation fail - business event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " +
                                              l
                                          ),
                                          new u(
                                            i.EventValidation,
                                            o.BusinessEvent,
                                            a.InvalidEventPartCharacters,
                                            s.ItemId,
                                            l
                                          ))
                                      : (n.w(
                                          "Validation fail - business event - itemId. Cannot be (null), empty or above 64 characters. String: " +
                                            l
                                        ),
                                        new u(
                                          i.EventValidation,
                                          o.BusinessEvent,
                                          a.InvalidEventPartLength,
                                          s.ItemId,
                                          l
                                        ))
                                    : (n.w(
                                        "Validation fail - business event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " +
                                          d
                                      ),
                                      new u(
                                        i.EventValidation,
                                        o.BusinessEvent,
                                        a.InvalidEventPartCharacters,
                                        s.ItemType,
                                        d
                                      ))
                                  : (n.w(
                                      "Validation fail - business event - itemType: Cannot be (null), empty or above 64 characters. String: " +
                                        d
                                    ),
                                    new u(
                                      i.EventValidation,
                                      o.BusinessEvent,
                                      a.InvalidEventPartLength,
                                      s.ItemType,
                                      d
                                    ))
                                : (n.w(
                                    "Validation fail - business event - cartType. Cannot be above 32 length. String: " +
                                      c
                                  ),
                                  new u(
                                    i.EventValidation,
                                    o.BusinessEvent,
                                    a.InvalidShortString,
                                    s.CartType,
                                    c
                                  ))
                              : (n.w(
                                  "Validation fail - business event - currency: Cannot be (null) and need to be A-Z, 3 characters and in the standard at openexchangerates.org. Failed currency: " +
                                    e
                                ),
                                new u(
                                  i.EventValidation,
                                  o.BusinessEvent,
                                  a.InvalidCurrency,
                                  s.Currency,
                                  e
                                ));
                          }),
                          (t.validateResourceEvent = function (
                            c,
                            d,
                            l,
                            f,
                            v,
                            g,
                            p
                          ) {
                            return c == e.EGAResourceFlowType.Undefined
                              ? (n.w(
                                  "Validation fail - resource event - flowType: Invalid flow type."
                                ),
                                new u(
                                  i.EventValidation,
                                  o.ResourceEvent,
                                  a.InvalidFlowType,
                                  s.FlowType,
                                  ""
                                ))
                              : d
                              ? r.stringArrayContainsString(g, d)
                                ? l > 0
                                  ? f
                                    ? t.validateEventPartLength(f, !1)
                                      ? t.validateEventPartCharacters(f)
                                        ? r.stringArrayContainsString(p, f)
                                          ? t.validateEventPartLength(v, !1)
                                            ? t.validateEventPartCharacters(v)
                                              ? null
                                              : (n.w(
                                                  "Validation fail - resource event - itemId: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " +
                                                    v
                                                ),
                                                new u(
                                                  i.EventValidation,
                                                  o.ResourceEvent,
                                                  a.InvalidEventPartCharacters,
                                                  s.ItemId,
                                                  v
                                                ))
                                            : (n.w(
                                                "Validation fail - resource event - itemId: Cannot be (null), empty or above 64 characters. String: " +
                                                  v
                                              ),
                                              new u(
                                                i.EventValidation,
                                                o.ResourceEvent,
                                                a.InvalidEventPartLength,
                                                s.ItemId,
                                                v
                                              ))
                                          : (n.w(
                                              "Validation fail - resource event - itemType: Not found in list of pre-defined available resource itemTypes. String: " +
                                                f
                                            ),
                                            new u(
                                              i.EventValidation,
                                              o.ResourceEvent,
                                              a.NotFoundInAvailableItemTypes,
                                              s.ItemType,
                                              f
                                            ))
                                        : (n.w(
                                            "Validation fail - resource event - itemType: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " +
                                              f
                                          ),
                                          new u(
                                            i.EventValidation,
                                            o.ResourceEvent,
                                            a.InvalidEventPartCharacters,
                                            s.ItemType,
                                            f
                                          ))
                                      : (n.w(
                                          "Validation fail - resource event - itemType: Cannot be (null), empty or above 64 characters. String: " +
                                            f
                                        ),
                                        new u(
                                          i.EventValidation,
                                          o.ResourceEvent,
                                          a.InvalidEventPartLength,
                                          s.ItemType,
                                          f
                                        ))
                                    : (n.w(
                                        "Validation fail - resource event - itemType: Cannot be (null)"
                                      ),
                                      new u(
                                        i.EventValidation,
                                        o.ResourceEvent,
                                        a.StringEmptyOrNull,
                                        s.ItemType,
                                        ""
                                      ))
                                  : (n.w(
                                      "Validation fail - resource event - amount: Float amount cannot be 0 or negative. Value: " +
                                        l
                                    ),
                                    new u(
                                      i.EventValidation,
                                      o.ResourceEvent,
                                      a.InvalidAmount,
                                      s.Amount,
                                      l + ""
                                    ))
                                : (n.w(
                                    "Validation fail - resource event - currency: Not found in list of pre-defined available resource currencies. String: " +
                                      d
                                  ),
                                  new u(
                                    i.EventValidation,
                                    o.ResourceEvent,
                                    a.NotFoundInAvailableCurrencies,
                                    s.Currency,
                                    d
                                  ))
                              : (n.w(
                                  "Validation fail - resource event - currency: Cannot be (null)"
                                ),
                                new u(
                                  i.EventValidation,
                                  o.ResourceEvent,
                                  a.StringEmptyOrNull,
                                  s.Currency,
                                  ""
                                ));
                          }),
                          (t.validateProgressionEvent = function (r, c, d, l) {
                            if (r == e.EGAProgressionStatus.Undefined)
                              return (
                                n.w(
                                  "Validation fail - progression event: Invalid progression status."
                                ),
                                new u(
                                  i.EventValidation,
                                  o.ProgressionEvent,
                                  a.InvalidProgressionStatus,
                                  s.ProgressionStatus,
                                  ""
                                )
                              );
                            if (l && !d && c)
                              return (
                                n.w(
                                  "Validation fail - progression event: 03 found but 01+02 are invalid. Progression must be set as either 01, 01+02 or 01+02+03."
                                ),
                                new u(
                                  i.EventValidation,
                                  o.ProgressionEvent,
                                  a.WrongProgressionOrder,
                                  s.Undefined,
                                  c + ":" + d + ":" + l
                                )
                              );
                            if (d && !c)
                              return (
                                n.w(
                                  "Validation fail - progression event: 02 found but not 01. Progression must be set as either 01, 01+02 or 01+02+03"
                                ),
                                new u(
                                  i.EventValidation,
                                  o.ProgressionEvent,
                                  a.WrongProgressionOrder,
                                  s.Undefined,
                                  c + ":" + d + ":" + l
                                )
                              );
                            if (!c)
                              return (
                                n.w(
                                  "Validation fail - progression event: progression01 not valid. Progressions must be set as either 01, 01+02 or 01+02+03"
                                ),
                                new u(
                                  i.EventValidation,
                                  o.ProgressionEvent,
                                  a.WrongProgressionOrder,
                                  s.Undefined,
                                  (c || "") + ":" + (d || "") + ":" + (l || "")
                                )
                              );
                            if (!t.validateEventPartLength(c, !1))
                              return (
                                n.w(
                                  "Validation fail - progression event - progression01: Cannot be (null), empty or above 64 characters. String: " +
                                    c
                                ),
                                new u(
                                  i.EventValidation,
                                  o.ProgressionEvent,
                                  a.InvalidEventPartLength,
                                  s.Progression01,
                                  c
                                )
                              );
                            if (!t.validateEventPartCharacters(c))
                              return (
                                n.w(
                                  "Validation fail - progression event - progression01: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " +
                                    c
                                ),
                                new u(
                                  i.EventValidation,
                                  o.ProgressionEvent,
                                  a.InvalidEventPartCharacters,
                                  s.Progression01,
                                  c
                                )
                              );
                            if (d) {
                              if (!t.validateEventPartLength(d, !0))
                                return (
                                  n.w(
                                    "Validation fail - progression event - progression02: Cannot be empty or above 64 characters. String: " +
                                      d
                                  ),
                                  new u(
                                    i.EventValidation,
                                    o.ProgressionEvent,
                                    a.InvalidEventPartLength,
                                    s.Progression02,
                                    d
                                  )
                                );
                              if (!t.validateEventPartCharacters(d))
                                return (
                                  n.w(
                                    "Validation fail - progression event - progression02: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " +
                                      d
                                  ),
                                  new u(
                                    i.EventValidation,
                                    o.ProgressionEvent,
                                    a.InvalidEventPartCharacters,
                                    s.Progression02,
                                    d
                                  )
                                );
                            }
                            if (l) {
                              if (!t.validateEventPartLength(l, !0))
                                return (
                                  n.w(
                                    "Validation fail - progression event - progression03: Cannot be empty or above 64 characters. String: " +
                                      l
                                  ),
                                  new u(
                                    i.EventValidation,
                                    o.ProgressionEvent,
                                    a.InvalidEventPartLength,
                                    s.Progression03,
                                    l
                                  )
                                );
                              if (!t.validateEventPartCharacters(l))
                                return (
                                  n.w(
                                    "Validation fail - progression event - progression03: Cannot contain other characters than A-z, 0-9, -_., ()!?. String: " +
                                      l
                                  ),
                                  new u(
                                    i.EventValidation,
                                    o.ProgressionEvent,
                                    a.InvalidEventPartCharacters,
                                    s.Progression03,
                                    l
                                  )
                                );
                            }
                            return null;
                          }),
                          (t.validateDesignEvent = function (e) {
                            return t.validateEventIdLength(e)
                              ? t.validateEventIdCharacters(e)
                                ? null
                                : (n.w(
                                    "Validation fail - design event - eventId: Non valid characters. Only allowed A-z, 0-9, -_., ()!?. String: " +
                                      e
                                  ),
                                  new u(
                                    i.EventValidation,
                                    o.DesignEvent,
                                    a.InvalidEventIdCharacters,
                                    s.EventId,
                                    e
                                  ))
                              : (n.w(
                                  "Validation fail - design event - eventId: Cannot be (null) or empty. Only 5 event parts allowed seperated by :. Each part need to be 64 characters or less. String: " +
                                    e
                                ),
                                new u(
                                  i.EventValidation,
                                  o.DesignEvent,
                                  a.InvalidEventIdLength,
                                  s.EventId,
                                  e
                                ));
                          }),
                          (t.validateErrorEvent = function (r, c) {
                            return r == e.EGAErrorSeverity.Undefined
                              ? (n.w(
                                  "Validation fail - error event - severity: Severity was unsupported value."
                                ),
                                new u(
                                  i.EventValidation,
                                  o.ErrorEvent,
                                  a.InvalidSeverity,
                                  s.Severity,
                                  ""
                                ))
                              : t.validateLongString(c, !0)
                              ? null
                              : (n.w(
                                  "Validation fail - error event - message: Message cannot be above 8192 characters."
                                ),
                                new u(
                                  i.EventValidation,
                                  o.ErrorEvent,
                                  a.InvalidLongString,
                                  s.Message,
                                  c
                                ));
                          }),
                          (t.validateAdEvent = function (r, c, d, l) {
                            return r == e.EGAAdAction.Undefined
                              ? (n.w(
                                  "Validation fail - error event - severity: Severity was unsupported value."
                                ),
                                new u(
                                  i.EventValidation,
                                  o.AdEvent,
                                  a.InvalidAdAction,
                                  s.AdAction,
                                  ""
                                ))
                              : c == e.EGAAdType.Undefined
                              ? (n.w(
                                  "Validation fail - ad event - adType: Ad type was unsupported value."
                                ),
                                new u(
                                  i.EventValidation,
                                  o.AdEvent,
                                  a.InvalidAdType,
                                  s.AdType,
                                  ""
                                ))
                              : t.validateShortString(d, !1)
                              ? t.validateString(l, !1)
                                ? null
                                : (n.w(
                                    "Validation fail - ad event - message: Ad placement cannot be above 64 characters."
                                  ),
                                  new u(
                                    i.EventValidation,
                                    o.AdEvent,
                                    a.InvalidString,
                                    s.AdPlacement,
                                    l
                                  ))
                              : (n.w(
                                  "Validation fail - ad event - message: Ad SDK name cannot be above 32 characters."
                                ),
                                new u(
                                  i.EventValidation,
                                  o.AdEvent,
                                  a.InvalidShortString,
                                  s.AdSdkName,
                                  d
                                ));
                          }),
                          (t.validateSdkErrorEvent = function (e, r, s, u, c) {
                            return !(
                              !t.validateKeys(e, r) ||
                              (s === i.Undefined
                                ? (n.w(
                                    "Validation fail - sdk error event - type: Category was unsupported value."
                                  ),
                                  1)
                                : u === o.Undefined
                                ? (n.w(
                                    "Validation fail - sdk error event - type: Area was unsupported value."
                                  ),
                                  1)
                                : c === a.Undefined &&
                                  (n.w(
                                    "Validation fail - sdk error event - type: Action was unsupported value."
                                  ),
                                  1))
                            );
                          }),
                          (t.validateKeys = function (e, t) {
                            return !(
                              !r.stringMatch(e, /^[A-z0-9]{32}$/) ||
                              !r.stringMatch(t, /^[A-z0-9]{40}$/)
                            );
                          }),
                          (t.validateCurrency = function (e) {
                            return !!e && !!r.stringMatch(e, /^[A-Z]{3}$/);
                          }),
                          (t.validateEventPartLength = function (e, t) {
                            return !(!t || e) || (!!e && !(e.length > 64));
                          }),
                          (t.validateEventPartCharacters = function (e) {
                            return !!r.stringMatch(
                              e,
                              /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}$/
                            );
                          }),
                          (t.validateEventIdLength = function (e) {
                            return (
                              !!e &&
                              !!r.stringMatch(
                                e,
                                /^[^:]{1,64}(?::[^:]{1,64}){0,4}$/
                              )
                            );
                          }),
                          (t.validateEventIdCharacters = function (e) {
                            return (
                              !!e &&
                              !!r.stringMatch(
                                e,
                                /^[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}(:[A-Za-z0-9\s\-_\.\(\)\!\?]{1,64}){0,4}$/
                              )
                            );
                          }),
                          (t.validateAndCleanInitRequestResponse = function (
                            e,
                            t
                          ) {
                            if (null == e)
                              return (
                                n.w(
                                  "validateInitRequestResponse failed - no response dictionary."
                                ),
                                null
                              );
                            var r = {};
                            try {
                              var i = e.server_ts;
                              if (!(i > 0))
                                return (
                                  n.w(
                                    "validateInitRequestResponse failed - invalid value in 'server_ts' field."
                                  ),
                                  null
                                );
                              r.server_ts = i;
                            } catch (t) {
                              return (
                                n.w(
                                  "validateInitRequestResponse failed - invalid type in 'server_ts' field. type=" +
                                    typeof e.server_ts +
                                    ", value=" +
                                    e.server_ts +
                                    ", " +
                                    t
                                ),
                                null
                              );
                            }
                            if (t) {
                              try {
                                var o = e.configs;
                                r.configs = o;
                              } catch (t) {
                                return (
                                  n.w(
                                    "validateInitRequestResponse failed - invalid type in 'configs' field. type=" +
                                      typeof e.configs +
                                      ", value=" +
                                      e.configs +
                                      ", " +
                                      t
                                  ),
                                  null
                                );
                              }
                              try {
                                var a = e.configs_hash;
                                r.configs_hash = a;
                              } catch (t) {
                                return (
                                  n.w(
                                    "validateInitRequestResponse failed - invalid type in 'configs_hash' field. type=" +
                                      typeof e.configs_hash +
                                      ", value=" +
                                      e.configs_hash +
                                      ", " +
                                      t
                                  ),
                                  null
                                );
                              }
                              try {
                                var s = e.ab_id;
                                r.ab_id = s;
                              } catch (t) {
                                return (
                                  n.w(
                                    "validateInitRequestResponse failed - invalid type in 'ab_id' field. type=" +
                                      typeof e.ab_id +
                                      ", value=" +
                                      e.ab_id +
                                      ", " +
                                      t
                                  ),
                                  null
                                );
                              }
                              try {
                                var u = e.ab_variant_id;
                                r.ab_variant_id = u;
                              } catch (t) {
                                return (
                                  n.w(
                                    "validateInitRequestResponse failed - invalid type in 'ab_variant_id' field. type=" +
                                      typeof e.ab_variant_id +
                                      ", value=" +
                                      e.ab_variant_id +
                                      ", " +
                                      t
                                  ),
                                  null
                                );
                              }
                            }
                            return r;
                          }),
                          (t.validateBuild = function (e) {
                            return !!t.validateShortString(e, !1);
                          }),
                          (t.validateSdkWrapperVersion = function (e) {
                            return !!r.stringMatch(
                              e,
                              /^(unity|unreal|gamemaker|cocos2d|construct|defold|godot|flutter) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/
                            );
                          }),
                          (t.validateEngineVersion = function (e) {
                            return !(
                              !e ||
                              !r.stringMatch(
                                e,
                                /^(unity|unreal|gamemaker|cocos2d|construct|defold|godot) [0-9]{0,5}(\.[0-9]{0,5}){0,2}$/
                              )
                            );
                          }),
                          (t.validateUserId = function (e) {
                            return (
                              !!t.validateString(e, !1) ||
                              (n.w(
                                "Validation fail - user id: id cannot be (null), empty or above 64 characters."
                              ),
                              !1)
                            );
                          }),
                          (t.validateShortString = function (e, t) {
                            return !(!t || e) || !(!e || e.length > 32);
                          }),
                          (t.validateString = function (e, t) {
                            return !(!t || e) || !(!e || e.length > 64);
                          }),
                          (t.validateLongString = function (e, t) {
                            return !(!t || e) || !(!e || e.length > 8192);
                          }),
                          (t.validateConnectionType = function (e) {
                            return r.stringMatch(
                              e,
                              /^(wwan|wifi|lan|offline)$/
                            );
                          }),
                          (t.validateCustomDimensions = function (e) {
                            return t.validateArrayOfStrings(
                              20,
                              32,
                              !1,
                              "custom dimensions",
                              e
                            );
                          }),
                          (t.validateResourceCurrencies = function (e) {
                            if (
                              !t.validateArrayOfStrings(
                                20,
                                64,
                                !1,
                                "resource currencies",
                                e
                              )
                            )
                              return !1;
                            for (var i = 0; i < e.length; ++i)
                              if (!r.stringMatch(e[i], /^[A-Za-z]+$/))
                                return (
                                  n.w(
                                    "resource currencies validation failed: a resource currency can only be A-Z, a-z. String was: " +
                                      e[i]
                                  ),
                                  !1
                                );
                            return !0;
                          }),
                          (t.validateResourceItemTypes = function (e) {
                            if (
                              !t.validateArrayOfStrings(
                                20,
                                32,
                                !1,
                                "resource item types",
                                e
                              )
                            )
                              return !1;
                            for (var r = 0; r < e.length; ++r)
                              if (!t.validateEventPartCharacters(e[r]))
                                return (
                                  n.w(
                                    "resource item types validation failed: a resource item type cannot contain other characters than A-z, 0-9, -_., ()!?. String was: " +
                                      e[r]
                                  ),
                                  !1
                                );
                            return !0;
                          }),
                          (t.validateDimension01 = function (e, t) {
                            return !e || !!r.stringArrayContainsString(t, e);
                          }),
                          (t.validateDimension02 = function (e, t) {
                            return !e || !!r.stringArrayContainsString(t, e);
                          }),
                          (t.validateDimension03 = function (e, t) {
                            return !e || !!r.stringArrayContainsString(t, e);
                          }),
                          (t.validateArrayOfStrings = function (e, t, r, i, o) {
                            var a = i;
                            if ((a || (a = "Array"), !o))
                              return (
                                n.w(
                                  a +
                                    " validation failed: array cannot be null. "
                                ),
                                !1
                              );
                            if (0 == r && 0 == o.length)
                              return (
                                n.w(
                                  a +
                                    " validation failed: array cannot be empty. "
                                ),
                                !1
                              );
                            if (e > 0 && o.length > e)
                              return (
                                n.w(
                                  a +
                                    " validation failed: array cannot exceed " +
                                    e +
                                    " values. It has " +
                                    o.length +
                                    " values."
                                ),
                                !1
                              );
                            for (var s = 0; s < o.length; ++s) {
                              var u = o[s] ? o[s].length : 0;
                              if (0 === u)
                                return (
                                  n.w(
                                    a +
                                      " validation failed: contained an empty string. Array=" +
                                      JSON.stringify(o)
                                  ),
                                  !1
                                );
                              if (t > 0 && u > t)
                                return (
                                  n.w(
                                    a +
                                      " validation failed: a string exceeded max allowed length (which is: " +
                                      t +
                                      "). String was: " +
                                      o[s]
                                  ),
                                  !1
                                );
                            }
                            return !0;
                          }),
                          (t.validateClientTs = function (e) {
                            return !(e < 0 || e > 99999999999);
                          }),
                          t
                        );
                      })();
                      t.GAValidator = c;
                    })(e.validators || (e.validators = {}));
                  })(a || (a = {})),
                  (function (e) {
                    !(function (e) {
                      var t = function (e, t, n) {
                        (this.name = e), (this.value = t), (this.version = n);
                      };
                      e.NameValueVersion = t;
                      var n = function (e, t) {
                        (this.name = e), (this.version = t);
                      };
                      e.NameVersion = n;
                      var r = (function () {
                        function e() {}
                        return (
                          (e.touch = function () {}),
                          (e.getRelevantSdkVersion = function () {
                            return e.sdkGameEngineVersion
                              ? e.sdkGameEngineVersion
                              : e.sdkWrapperVersion;
                          }),
                          (e.getConnectionType = function () {
                            return e.connectionType;
                          }),
                          (e.updateConnectionType = function () {
                            navigator.onLine
                              ? "ios" === e.buildPlatform ||
                                "android" === e.buildPlatform
                                ? (e.connectionType = "wwan")
                                : (e.connectionType = "lan")
                              : (e.connectionType = "offline");
                          }),
                          (e.getOSVersionString = function () {
                            return (
                              e.buildPlatform + " " + e.osVersionPair.version
                            );
                          }),
                          (e.runtimePlatformToString = function () {
                            return e.osVersionPair.name;
                          }),
                          (e.getBrowserVersionString = function () {
                            var t,
                              n = navigator.userAgent,
                              r =
                                n.match(
                                  /(opera|chrome|safari|firefox|ubrowser|msie|trident|fbav(?=\/))\/?\s*(\d+)/i
                                ) || [];
                            if (0 == r.length && "ios" === e.buildPlatform)
                              return "webkit_" + e.osVersion;
                            if (/trident/i.test(r[1]))
                              return (
                                "IE " +
                                ((t = /\brv[ :]+(\d+)/g.exec(n) || [])[1] || "")
                              );
                            if (
                              "Chrome" === r[1] &&
                              null !=
                                (t = n.match(/\b(OPR|Edge|UBrowser)\/(\d+)/))
                            )
                              return t
                                .slice(1)
                                .join(" ")
                                .replace("OPR", "Opera")
                                .replace("UBrowser", "UC")
                                .toLowerCase();
                            if (
                              r[1] &&
                              "fbav" === r[1].toLowerCase() &&
                              ((r[1] = "facebook"), r[2])
                            )
                              return "facebook " + r[2];
                            var i = r[2]
                              ? [r[1], r[2]]
                              : [navigator.appName, navigator.appVersion, "-?"];
                            return (
                              null != (t = n.match(/version\/(\d+)/i)) &&
                                i.splice(1, 1, t[1]),
                              i.join(" ").toLowerCase()
                            );
                          }),
                          (e.getDeviceModel = function () {
                            return "unknown";
                          }),
                          (e.getDeviceManufacturer = function () {
                            return "unknown";
                          }),
                          (e.matchItem = function (e, t) {
                            var r,
                              i,
                              o,
                              a,
                              s = new n("unknown", "0.0.0"),
                              u = 0,
                              c = 0;
                            for (u = 0; u < t.length; u += 1)
                              if (new RegExp(t[u].value, "i").test(e)) {
                                if (
                                  ((r = new RegExp(
                                    t[u].version + "[- /:;]([\\d._]+)",
                                    "i"
                                  )),
                                  (a = ""),
                                  (i = e.match(r)) && i[1] && (o = i[1]),
                                  o)
                                ) {
                                  var d = o.split(/[._]+/);
                                  for (c = 0; c < Math.min(d.length, 3); c += 1)
                                    a +=
                                      d[c] +
                                      (c < Math.min(d.length, 3) - 1
                                        ? "."
                                        : "");
                                } else a = "0.0.0";
                                return (s.name = t[u].name), (s.version = a), s;
                              }
                            return s;
                          }),
                          (e.sdkWrapperVersion = "javascript 4.4.5"),
                          (e.osVersionPair = e.matchItem(
                            [
                              navigator.platform,
                              navigator.userAgent,
                              navigator.appVersion,
                              navigator.vendor,
                            ].join(" "),
                            [
                              new t("windows_phone", "Windows Phone", "OS"),
                              new t("windows", "Win", "NT"),
                              new t("ios", "iPhone", "OS"),
                              new t("ios", "iPad", "OS"),
                              new t("ios", "iPod", "OS"),
                              new t("android", "Android", "Android"),
                              new t("blackBerry", "BlackBerry", "/"),
                              new t("mac_osx", "Mac", "OS X"),
                              new t("tizen", "Tizen", "Tizen"),
                              new t("linux", "Linux", "rv"),
                              new t("kai_os", "KAIOS", "KAIOS"),
                            ]
                          )),
                          (e.buildPlatform = e.runtimePlatformToString()),
                          (e.deviceModel = e.getDeviceModel()),
                          (e.deviceManufacturer = e.getDeviceManufacturer()),
                          (e.osVersion = e.getOSVersionString()),
                          (e.browserVersion = e.getBrowserVersionString()),
                          e
                        );
                      })();
                      e.GADevice = r;
                    })(e.device || (e.device = {}));
                  })(a || (a = {})),
                  (function (e) {
                    var t, n;
                    (t = e.threading || (e.threading = {})),
                      (n = (function () {
                        function e(t) {
                          (this.deadline = t),
                            (this.ignore = !1),
                            (this.async = !1),
                            (this.running = !1),
                            (this.id = ++e.idCounter);
                        }
                        return (e.idCounter = 0), e;
                      })()),
                      (t.TimedBlock = n);
                  })(a || (a = {})),
                  (function (e) {
                    var t, n;
                    (t = e.threading || (e.threading = {})),
                      (n = (function () {
                        function e(e) {
                          (this.comparer = e),
                            (this._subQueues = {}),
                            (this._sortedKeys = []);
                        }
                        return (
                          (e.prototype.enqueue = function (e, t) {
                            -1 === this._sortedKeys.indexOf(e) &&
                              this.addQueueOfPriority(e),
                              this._subQueues[e].push(t);
                          }),
                          (e.prototype.addQueueOfPriority = function (e) {
                            var t = this;
                            this._sortedKeys.push(e),
                              this._sortedKeys.sort(function (e, n) {
                                return t.comparer.compare(e, n);
                              }),
                              (this._subQueues[e] = []);
                          }),
                          (e.prototype.peek = function () {
                            if (this.hasItems())
                              return this._subQueues[this._sortedKeys[0]][0];
                            throw new Error("The queue is empty");
                          }),
                          (e.prototype.hasItems = function () {
                            return this._sortedKeys.length > 0;
                          }),
                          (e.prototype.dequeue = function () {
                            if (this.hasItems())
                              return this.dequeueFromHighPriorityQueue();
                            throw new Error("The queue is empty");
                          }),
                          (e.prototype.dequeueFromHighPriorityQueue =
                            function () {
                              var e = this._sortedKeys[0],
                                t = this._subQueues[e].shift();
                              return (
                                0 === this._subQueues[e].length &&
                                  (this._sortedKeys.shift(),
                                  delete this._subQueues[e]),
                                t
                              );
                            }),
                          e
                        );
                      })()),
                      (t.PriorityQueue = n);
                  })(a || (a = {})),
                  (function (e) {
                    !(function (t) {
                      var n,
                        r,
                        i = e.logging.GALogger;
                      !(function (e) {
                        (e[(e.Equal = 0)] = "Equal"),
                          (e[(e.LessOrEqual = 1)] = "LessOrEqual"),
                          (e[(e.NotEqual = 2)] = "NotEqual");
                      })(
                        (n =
                          t.EGAStoreArgsOperator ||
                          (t.EGAStoreArgsOperator = {}))
                      ),
                        (function (e) {
                          (e[(e.Events = 0)] = "Events"),
                            (e[(e.Sessions = 1)] = "Sessions"),
                            (e[(e.Progression = 2)] = "Progression");
                        })((r = t.EGAStore || (t.EGAStore = {})));
                      var o = (function () {
                        function e() {
                          (this.eventsStore = []),
                            (this.sessionsStore = []),
                            (this.progressionStore = []),
                            (this.storeItems = {});
                          try {
                            "object" == typeof localStorage
                              ? (localStorage.setItem(
                                  "testingLocalStorage",
                                  "yes"
                                ),
                                localStorage.removeItem("testingLocalStorage"),
                                (e.storageAvailable = !0))
                              : (e.storageAvailable = !1);
                          } catch (e) {}
                        }
                        return (
                          (e.isStorageAvailable = function () {
                            return e.storageAvailable;
                          }),
                          (e.isStoreTooLargeForEvents = function () {
                            return (
                              e.instance.eventsStore.length +
                                e.instance.sessionsStore.length >
                              e.MaxNumberOfEntries
                            );
                          }),
                          (e.select = function (t, r, i, o) {
                            void 0 === r && (r = []),
                              void 0 === i && (i = !1),
                              void 0 === o && (o = 0);
                            var a = e.getStore(t);
                            if (!a) return null;
                            for (var s = [], u = 0; u < a.length; ++u) {
                              for (
                                var c = a[u], d = !0, l = 0;
                                l < r.length;
                                ++l
                              ) {
                                var f = r[l];
                                if (c[f[0]])
                                  switch (f[1]) {
                                    case n.Equal:
                                      d = c[f[0]] == f[2];
                                      break;
                                    case n.LessOrEqual:
                                      d = c[f[0]] <= f[2];
                                      break;
                                    case n.NotEqual:
                                      d = c[f[0]] != f[2];
                                      break;
                                    default:
                                      d = !1;
                                  }
                                else d = !1;
                                if (!d) break;
                              }
                              d && s.push(c);
                            }
                            return (
                              i &&
                                s.sort(function (e, t) {
                                  return e.client_ts - t.client_ts;
                                }),
                              o > 0 && s.length > o && (s = s.slice(0, o + 1)),
                              s
                            );
                          }),
                          (e.update = function (t, r, i) {
                            void 0 === i && (i = []);
                            var o = e.getStore(t);
                            if (!o) return !1;
                            for (var a = 0; a < o.length; ++a) {
                              for (
                                var s = o[a], u = !0, c = 0;
                                c < i.length;
                                ++c
                              ) {
                                var d = i[c];
                                if (s[d[0]])
                                  switch (d[1]) {
                                    case n.Equal:
                                      u = s[d[0]] == d[2];
                                      break;
                                    case n.LessOrEqual:
                                      u = s[d[0]] <= d[2];
                                      break;
                                    case n.NotEqual:
                                      u = s[d[0]] != d[2];
                                      break;
                                    default:
                                      u = !1;
                                  }
                                else u = !1;
                                if (!u) break;
                              }
                              if (u)
                                for (c = 0; c < r.length; ++c) {
                                  var l = r[c];
                                  s[l[0]] = l[1];
                                }
                            }
                            return !0;
                          }),
                          (e.delete = function (t, r) {
                            var i = e.getStore(t);
                            if (i)
                              for (var o = 0; o < i.length; ++o) {
                                for (
                                  var a = i[o], s = !0, u = 0;
                                  u < r.length;
                                  ++u
                                ) {
                                  var c = r[u];
                                  if (a[c[0]])
                                    switch (c[1]) {
                                      case n.Equal:
                                        s = a[c[0]] == c[2];
                                        break;
                                      case n.LessOrEqual:
                                        s = a[c[0]] <= c[2];
                                        break;
                                      case n.NotEqual:
                                        s = a[c[0]] != c[2];
                                        break;
                                      default:
                                        s = !1;
                                    }
                                  else s = !1;
                                  if (!s) break;
                                }
                                s && (i.splice(o, 1), --o);
                              }
                          }),
                          (e.insert = function (t, n, r, i) {
                            void 0 === r && (r = !1),
                              void 0 === i && (i = null);
                            var o = e.getStore(t);
                            if (o)
                              if (r) {
                                if (!i) return;
                                for (var a = !1, s = 0; s < o.length; ++s) {
                                  var u = o[s];
                                  if (u[i] == n[i]) {
                                    for (var c in n) u[c] = n[c];
                                    a = !0;
                                    break;
                                  }
                                }
                                a || o.push(n);
                              } else o.push(n);
                          }),
                          (e.save = function (t) {
                            e.isStorageAvailable()
                              ? (localStorage.setItem(
                                  e.StringFormat(
                                    e.KeyFormat,
                                    t,
                                    e.EventsStoreKey
                                  ),
                                  JSON.stringify(e.instance.eventsStore)
                                ),
                                localStorage.setItem(
                                  e.StringFormat(
                                    e.KeyFormat,
                                    t,
                                    e.SessionsStoreKey
                                  ),
                                  JSON.stringify(e.instance.sessionsStore)
                                ),
                                localStorage.setItem(
                                  e.StringFormat(
                                    e.KeyFormat,
                                    t,
                                    e.ProgressionStoreKey
                                  ),
                                  JSON.stringify(e.instance.progressionStore)
                                ),
                                localStorage.setItem(
                                  e.StringFormat(
                                    e.KeyFormat,
                                    t,
                                    e.ItemsStoreKey
                                  ),
                                  JSON.stringify(e.instance.storeItems)
                                ))
                              : i.w("Storage is not available, cannot save.");
                          }),
                          (e.load = function (t) {
                            if (e.isStorageAvailable()) {
                              try {
                                (e.instance.eventsStore = JSON.parse(
                                  localStorage.getItem(
                                    e.StringFormat(
                                      e.KeyFormat,
                                      t,
                                      e.EventsStoreKey
                                    )
                                  )
                                )),
                                  e.instance.eventsStore ||
                                    (e.instance.eventsStore = []);
                              } catch (t) {
                                i.w(
                                  "Load failed for 'events' store. Using empty store."
                                ),
                                  (e.instance.eventsStore = []);
                              }
                              try {
                                (e.instance.sessionsStore = JSON.parse(
                                  localStorage.getItem(
                                    e.StringFormat(
                                      e.KeyFormat,
                                      t,
                                      e.SessionsStoreKey
                                    )
                                  )
                                )),
                                  e.instance.sessionsStore ||
                                    (e.instance.sessionsStore = []);
                              } catch (t) {
                                i.w(
                                  "Load failed for 'sessions' store. Using empty store."
                                ),
                                  (e.instance.sessionsStore = []);
                              }
                              try {
                                (e.instance.progressionStore = JSON.parse(
                                  localStorage.getItem(
                                    e.StringFormat(
                                      e.KeyFormat,
                                      t,
                                      e.ProgressionStoreKey
                                    )
                                  )
                                )),
                                  e.instance.progressionStore ||
                                    (e.instance.progressionStore = []);
                              } catch (t) {
                                i.w(
                                  "Load failed for 'progression' store. Using empty store."
                                ),
                                  (e.instance.progressionStore = []);
                              }
                              try {
                                (e.instance.storeItems = JSON.parse(
                                  localStorage.getItem(
                                    e.StringFormat(
                                      e.KeyFormat,
                                      t,
                                      e.ItemsStoreKey
                                    )
                                  )
                                )),
                                  e.instance.storeItems ||
                                    (e.instance.storeItems = {});
                              } catch (t) {
                                i.w(
                                  "Load failed for 'items' store. Using empty store."
                                ),
                                  (e.instance.progressionStore = []);
                              }
                            } else
                              i.w("Storage is not available, cannot load.");
                          }),
                          (e.setItem = function (t, n, r) {
                            var i = e.StringFormat(e.KeyFormat, t, n);
                            r
                              ? (e.instance.storeItems[i] = r)
                              : i in e.instance.storeItems &&
                                delete e.instance.storeItems[i];
                          }),
                          (e.getItem = function (t, n) {
                            var r = e.StringFormat(e.KeyFormat, t, n);
                            return r in e.instance.storeItems
                              ? e.instance.storeItems[r]
                              : null;
                          }),
                          (e.getStore = function (t) {
                            switch (t) {
                              case r.Events:
                                return e.instance.eventsStore;
                              case r.Sessions:
                                return e.instance.sessionsStore;
                              case r.Progression:
                                return e.instance.progressionStore;
                              default:
                                return (
                                  i.w(
                                    "GAStore.getStore(): Cannot find store: " +
                                      t
                                  ),
                                  null
                                );
                            }
                          }),
                          (e.instance = new e()),
                          (e.MaxNumberOfEntries = 2e3),
                          (e.StringFormat = function (e) {
                            for (var t = [], n = 1; n < arguments.length; n++)
                              t[n - 1] = arguments[n];
                            return e.replace(/{(\d+)}/g, function (e, n) {
                              return t[n] || "";
                            });
                          }),
                          (e.KeyFormat = "GA::{0}::{1}"),
                          (e.EventsStoreKey = "ga_event"),
                          (e.SessionsStoreKey = "ga_session"),
                          (e.ProgressionStoreKey = "ga_progression"),
                          (e.ItemsStoreKey = "ga_items"),
                          e
                        );
                      })();
                      t.GAStore = o;
                    })(e.store || (e.store = {}));
                  })(a || (a = {})),
                  (function (e) {
                    var t, n, r, i, o, a, s, u, c;
                    (t = e.state || (e.state = {})),
                      (n = e.validators.GAValidator),
                      (r = e.utilities.GAUtilities),
                      (i = e.logging.GALogger),
                      (o = e.store.GAStore),
                      (a = e.device.GADevice),
                      (s = e.store.EGAStore),
                      (u = e.store.EGAStoreArgsOperator),
                      (c = (function () {
                        function e() {
                          (this.availableCustomDimensions01 = []),
                            (this.availableCustomDimensions02 = []),
                            (this.availableCustomDimensions03 = []),
                            (this.currentGlobalCustomEventFields = {}),
                            (this.availableResourceCurrencies = []),
                            (this.availableResourceItemTypes = []),
                            (this.configurations = {}),
                            (this.remoteConfigsListeners = []),
                            (this.beforeUnloadListeners = []),
                            (this.sdkConfigDefault = {}),
                            (this.sdkConfig = {}),
                            (this.progressionTries = {}),
                            (this._isEventSubmissionEnabled = !0),
                            (this.isUnloading = !1);
                        }
                        return (
                          (e.setUserId = function (t) {
                            (e.instance.userId = t), e.cacheIdentifier();
                          }),
                          (e.getIdentifier = function () {
                            return e.instance.identifier;
                          }),
                          (e.isInitialized = function () {
                            return e.instance.initialized;
                          }),
                          (e.setInitialized = function (t) {
                            e.instance.initialized = t;
                          }),
                          (e.getSessionStart = function () {
                            return e.instance.sessionStart;
                          }),
                          (e.getSessionNum = function () {
                            return e.instance.sessionNum;
                          }),
                          (e.getTransactionNum = function () {
                            return e.instance.transactionNum;
                          }),
                          (e.getSessionId = function () {
                            return e.instance.sessionId;
                          }),
                          (e.getCurrentCustomDimension01 = function () {
                            return e.instance.currentCustomDimension01;
                          }),
                          (e.getCurrentCustomDimension02 = function () {
                            return e.instance.currentCustomDimension02;
                          }),
                          (e.getCurrentCustomDimension03 = function () {
                            return e.instance.currentCustomDimension03;
                          }),
                          (e.getGameKey = function () {
                            return e.instance.gameKey;
                          }),
                          (e.getGameSecret = function () {
                            return e.instance.gameSecret;
                          }),
                          (e.getAvailableCustomDimensions01 = function () {
                            return e.instance.availableCustomDimensions01;
                          }),
                          (e.setAvailableCustomDimensions01 = function (t) {
                            n.validateCustomDimensions(t) &&
                              ((e.instance.availableCustomDimensions01 = t),
                              e.validateAndFixCurrentDimensions(),
                              i.i(
                                "Set available custom01 dimension values: (" +
                                  r.joinStringArray(t, ", ") +
                                  ")"
                              ));
                          }),
                          (e.getAvailableCustomDimensions02 = function () {
                            return e.instance.availableCustomDimensions02;
                          }),
                          (e.setAvailableCustomDimensions02 = function (t) {
                            n.validateCustomDimensions(t) &&
                              ((e.instance.availableCustomDimensions02 = t),
                              e.validateAndFixCurrentDimensions(),
                              i.i(
                                "Set available custom02 dimension values: (" +
                                  r.joinStringArray(t, ", ") +
                                  ")"
                              ));
                          }),
                          (e.getAvailableCustomDimensions03 = function () {
                            return e.instance.availableCustomDimensions03;
                          }),
                          (e.setAvailableCustomDimensions03 = function (t) {
                            n.validateCustomDimensions(t) &&
                              ((e.instance.availableCustomDimensions03 = t),
                              e.validateAndFixCurrentDimensions(),
                              i.i(
                                "Set available custom03 dimension values: (" +
                                  r.joinStringArray(t, ", ") +
                                  ")"
                              ));
                          }),
                          (e.getAvailableResourceCurrencies = function () {
                            return e.instance.availableResourceCurrencies;
                          }),
                          (e.setAvailableResourceCurrencies = function (t) {
                            n.validateResourceCurrencies(t) &&
                              ((e.instance.availableResourceCurrencies = t),
                              i.i(
                                "Set available resource currencies: (" +
                                  r.joinStringArray(t, ", ") +
                                  ")"
                              ));
                          }),
                          (e.getAvailableResourceItemTypes = function () {
                            return e.instance.availableResourceItemTypes;
                          }),
                          (e.setAvailableResourceItemTypes = function (t) {
                            n.validateResourceItemTypes(t) &&
                              ((e.instance.availableResourceItemTypes = t),
                              i.i(
                                "Set available resource item types: (" +
                                  r.joinStringArray(t, ", ") +
                                  ")"
                              ));
                          }),
                          (e.getBuild = function () {
                            return e.instance.build;
                          }),
                          (e.setBuild = function (t) {
                            (e.instance.build = t),
                              i.i("Set build version: " + t);
                          }),
                          (e.getUseManualSessionHandling = function () {
                            return e.instance.useManualSessionHandling;
                          }),
                          (e.isEventSubmissionEnabled = function () {
                            return e.instance._isEventSubmissionEnabled;
                          }),
                          (e.getABTestingId = function () {
                            return e.instance.abId;
                          }),
                          (e.getABTestingVariantId = function () {
                            return e.instance.abVariantId;
                          }),
                          (e.prototype.setDefaultId = function (t) {
                            (this.defaultUserId = t || ""), e.cacheIdentifier();
                          }),
                          (e.getDefaultId = function () {
                            return e.instance.defaultUserId;
                          }),
                          (e.getSdkConfig = function () {
                            var t,
                              n = 0;
                            for (var r in e.instance.sdkConfig)
                              0 === n && (t = r), ++n;
                            if (t && n > 0) return e.instance.sdkConfig;
                            for (var r in ((n = 0), e.instance.sdkConfigCached))
                              0 === n && (t = r), ++n;
                            return t && n > 0
                              ? e.instance.sdkConfigCached
                              : e.instance.sdkConfigDefault;
                          }),
                          (e.isEnabled = function () {
                            return !!e.instance.initAuthorized;
                          }),
                          (e.setCustomDimension01 = function (t) {
                            (e.instance.currentCustomDimension01 = t),
                              o.setItem(e.getGameKey(), e.Dimension01Key, t),
                              i.i("Set custom01 dimension value: " + t);
                          }),
                          (e.setCustomDimension02 = function (t) {
                            (e.instance.currentCustomDimension02 = t),
                              o.setItem(e.getGameKey(), e.Dimension02Key, t),
                              i.i("Set custom02 dimension value: " + t);
                          }),
                          (e.setCustomDimension03 = function (t) {
                            (e.instance.currentCustomDimension03 = t),
                              o.setItem(e.getGameKey(), e.Dimension03Key, t),
                              i.i("Set custom03 dimension value: " + t);
                          }),
                          (e.incrementSessionNum = function () {
                            var t = e.getSessionNum() + 1;
                            e.instance.sessionNum = t;
                          }),
                          (e.incrementTransactionNum = function () {
                            var t = e.getTransactionNum() + 1;
                            e.instance.transactionNum = t;
                          }),
                          (e.incrementProgressionTries = function (t) {
                            var n = e.getProgressionTries(t) + 1;
                            e.instance.progressionTries[t] = n;
                            var r = {};
                            (r.progression = t),
                              (r.tries = n),
                              o.insert(s.Progression, r, !0, "progression");
                          }),
                          (e.getProgressionTries = function (t) {
                            return t in e.instance.progressionTries
                              ? e.instance.progressionTries[t]
                              : 0;
                          }),
                          (e.clearProgressionTries = function (t) {
                            t in e.instance.progressionTries &&
                              delete e.instance.progressionTries[t];
                            var n = [];
                            n.push(["progression", u.Equal, t]),
                              o.delete(s.Progression, n);
                          }),
                          (e.setKeys = function (t, n) {
                            (e.instance.gameKey = t),
                              (e.instance.gameSecret = n);
                          }),
                          (e.setManualSessionHandling = function (t) {
                            (e.instance.useManualSessionHandling = t),
                              i.i("Use manual session handling: " + t);
                          }),
                          (e.setEnabledEventSubmission = function (t) {
                            e.instance._isEventSubmissionEnabled = t;
                          }),
                          (e.getEventAnnotations = function () {
                            var t = { v: 2 };
                            (t.event_uuid = r.createGuid()),
                              (t.user_id = e.instance.identifier),
                              (t.client_ts = e.getClientTsAdjusted()),
                              (t.sdk_version = a.getRelevantSdkVersion()),
                              (t.os_version = a.osVersion),
                              (t.manufacturer = a.deviceManufacturer),
                              (t.device = a.deviceModel),
                              (t.browser_version = a.browserVersion),
                              (t.platform = a.buildPlatform),
                              (t.session_id = e.instance.sessionId),
                              (t[e.SessionNumKey] = e.instance.sessionNum);
                            var i = a.getConnectionType();
                            if (
                              (n.validateConnectionType(i) &&
                                (t.connection_type = i),
                              a.gameEngineVersion &&
                                (t.engine_version = a.gameEngineVersion),
                              e.instance.configurations)
                            ) {
                              var o = 0;
                              for (var s in e.instance.configurations) {
                                o++;
                                break;
                              }
                              o > 0 &&
                                (t.configurations = e.instance.configurations);
                            }
                            return (
                              e.instance.abId && (t.ab_id = e.instance.abId),
                              e.instance.abVariantId &&
                                (t.ab_variant_id = e.instance.abVariantId),
                              e.instance.build && (t.build = e.instance.build),
                              t
                            );
                          }),
                          (e.getSdkErrorEventAnnotations = function () {
                            var t = { v: 2 };
                            (t.event_uuid = r.createGuid()),
                              (t.category = e.CategorySdkError),
                              (t.sdk_version = a.getRelevantSdkVersion()),
                              (t.os_version = a.osVersion),
                              (t.manufacturer = a.deviceManufacturer),
                              (t.device = a.deviceModel),
                              (t.platform = a.buildPlatform);
                            var i = a.getConnectionType();
                            return (
                              n.validateConnectionType(i) &&
                                (t.connection_type = i),
                              a.gameEngineVersion &&
                                (t.engine_version = a.gameEngineVersion),
                              t
                            );
                          }),
                          (e.getInitAnnotations = function () {
                            var t = {};
                            return (
                              e.getIdentifier() || e.cacheIdentifier(),
                              o.setItem(
                                e.getGameKey(),
                                e.LastUsedIdentifierKey,
                                e.getIdentifier()
                              ),
                              (t.user_id = e.getIdentifier()),
                              (t.sdk_version = a.getRelevantSdkVersion()),
                              (t.os_version = a.osVersion),
                              (t.platform = a.buildPlatform),
                              e.getBuild()
                                ? (t.build = e.getBuild())
                                : (t.build = null),
                              (t.session_num = e.getSessionNum()),
                              (t.random_salt = e.getSessionNum()),
                              t
                            );
                          }),
                          (e.getClientTsAdjusted = function () {
                            var t = r.timeIntervalSince1970(),
                              i = t + e.instance.clientServerTimeOffset;
                            return n.validateClientTs(i) ? i : t;
                          }),
                          (e.sessionIsStarted = function () {
                            return 0 != e.instance.sessionStart;
                          }),
                          (e.cacheIdentifier = function () {
                            e.instance.userId
                              ? (e.instance.identifier = e.instance.userId)
                              : e.instance.defaultUserId &&
                                (e.instance.identifier =
                                  e.instance.defaultUserId);
                          }),
                          (e.ensurePersistedStates = function () {
                            o.isStorageAvailable() && o.load(e.getGameKey());
                            var t = e.instance;
                            t.setDefaultId(
                              null !=
                                o.getItem(e.getGameKey(), e.DefaultUserIdKey)
                                ? o.getItem(e.getGameKey(), e.DefaultUserIdKey)
                                : r.createGuid()
                            ),
                              (t.sessionNum =
                                null !=
                                o.getItem(e.getGameKey(), e.SessionNumKey)
                                  ? Number(
                                      o.getItem(e.getGameKey(), e.SessionNumKey)
                                    )
                                  : 0),
                              (t.transactionNum =
                                null !=
                                o.getItem(e.getGameKey(), e.TransactionNumKey)
                                  ? Number(
                                      o.getItem(
                                        e.getGameKey(),
                                        e.TransactionNumKey
                                      )
                                    )
                                  : 0),
                              t.currentCustomDimension01
                                ? o.setItem(
                                    e.getGameKey(),
                                    e.Dimension01Key,
                                    t.currentCustomDimension01
                                  )
                                : ((t.currentCustomDimension01 =
                                    null !=
                                    o.getItem(e.getGameKey(), e.Dimension01Key)
                                      ? o.getItem(
                                          e.getGameKey(),
                                          e.Dimension01Key
                                        )
                                      : ""),
                                  t.currentCustomDimension01),
                              t.currentCustomDimension02
                                ? o.setItem(
                                    e.getGameKey(),
                                    e.Dimension02Key,
                                    t.currentCustomDimension02
                                  )
                                : ((t.currentCustomDimension02 =
                                    null !=
                                    o.getItem(e.getGameKey(), e.Dimension02Key)
                                      ? o.getItem(
                                          e.getGameKey(),
                                          e.Dimension02Key
                                        )
                                      : ""),
                                  t.currentCustomDimension02),
                              t.currentCustomDimension03
                                ? o.setItem(
                                    e.getGameKey(),
                                    e.Dimension03Key,
                                    t.currentCustomDimension03
                                  )
                                : ((t.currentCustomDimension03 =
                                    null !=
                                    o.getItem(e.getGameKey(), e.Dimension03Key)
                                      ? o.getItem(
                                          e.getGameKey(),
                                          e.Dimension03Key
                                        )
                                      : ""),
                                  t.currentCustomDimension03);
                            var n =
                              null !=
                              o.getItem(e.getGameKey(), e.SdkConfigCachedKey)
                                ? o.getItem(
                                    e.getGameKey(),
                                    e.SdkConfigCachedKey
                                  )
                                : "";
                            if (n) {
                              var a = JSON.parse(r.decode64(n));
                              if (a) {
                                var u = o.getItem(
                                  e.getGameKey(),
                                  e.LastUsedIdentifierKey
                                );
                                null != u &&
                                  u != e.getIdentifier() &&
                                  (i.w(
                                    "New identifier spotted compared to last one used, clearing cached configs hash!!"
                                  ),
                                  a.configs_hash && delete a.configs_hash),
                                  (t.sdkConfigCached = a);
                              }
                            }
                            var c = e.getSdkConfig();
                            (t.configsHash = c.configs_hash
                              ? c.configs_hash
                              : ""),
                              (t.abId = c.ab_id ? c.ab_id : ""),
                              (t.abVariantId = c.ab_variant_id
                                ? c.ab_variant_id
                                : "");
                            var d = o.select(s.Progression);
                            if (d)
                              for (var l = 0; l < d.length; ++l) {
                                var f = d[l];
                                f &&
                                  (t.progressionTries[f.progression] = f.tries);
                              }
                          }),
                          (e.calculateServerTimeOffset = function (e) {
                            return e - r.timeIntervalSince1970();
                          }),
                          (e.formatString = function (e, t) {
                            for (var n = e, r = 0; r < t.length; r++) {
                              var i = new RegExp("\\{" + r + "\\}", "gi");
                              n = n.replace(i, arguments[r]);
                            }
                            return n;
                          }),
                          (e.validateAndCleanCustomFields = function (t, n) {
                            void 0 === n && (n = null);
                            var o = {};
                            if (t) {
                              var a = 0;
                              for (var s in t) {
                                var u = t[s];
                                if (s && u)
                                  if (a < e.MAX_CUSTOM_FIELDS_COUNT) {
                                    var c = new RegExp(
                                      "^[a-zA-Z0-9_]{1," +
                                        e.MAX_CUSTOM_FIELDS_KEY_LENGTH +
                                        "}$"
                                    );
                                    if (r.stringMatch(s, c)) {
                                      var d = typeof u;
                                      if (
                                        "string" === d ||
                                        u instanceof String
                                      ) {
                                        var l = u;
                                        l.length <=
                                          e.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH &&
                                        l.length > 0
                                          ? ((o[s] = l), ++a)
                                          : ((v =
                                              "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because its value is an empty string or exceeds the max number of characters (" +
                                              e.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH +
                                              ")"),
                                            (g = e.formatString(v, [s, u])),
                                            i.w(g),
                                            n && n(v, g));
                                      } else if (
                                        "number" === d ||
                                        u instanceof Number
                                      ) {
                                        var f = u;
                                        (o[s] = f), ++a;
                                      } else
                                        (v =
                                          "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because its value is not a string or number"),
                                          (g = e.formatString(v, [s, u])),
                                          i.w(g),
                                          n && n(v, g);
                                    } else
                                      (v =
                                        "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because its key contains illegal character, is empty or exceeds the max number of characters (" +
                                        e.MAX_CUSTOM_FIELDS_KEY_LENGTH +
                                        ")"),
                                        (g = e.formatString(v, [s, u])),
                                        i.w(g),
                                        n && n(v, g);
                                  } else
                                    (v =
                                      "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because it exceeds the max number of custom fields (" +
                                      e.MAX_CUSTOM_FIELDS_COUNT +
                                      ")"),
                                      (g = e.formatString(v, [s, u])),
                                      i.w(g),
                                      n && n(v, g);
                                else {
                                  var v =
                                      "validateAndCleanCustomFields: entry with key={0}, value={1} has been omitted because its key or value is null",
                                    g = e.formatString(v, [s, u]);
                                  i.w(g), n && n(v, g);
                                }
                              }
                            }
                            return o;
                          }),
                          (e.validateAndFixCurrentDimensions = function () {
                            n.validateDimension01(
                              e.getCurrentCustomDimension01(),
                              e.getAvailableCustomDimensions01()
                            ) || e.setCustomDimension01(""),
                              n.validateDimension02(
                                e.getCurrentCustomDimension02(),
                                e.getAvailableCustomDimensions02()
                              ) || e.setCustomDimension02(""),
                              n.validateDimension03(
                                e.getCurrentCustomDimension03(),
                                e.getAvailableCustomDimensions03()
                              ) || e.setCustomDimension03("");
                          }),
                          (e.getConfigurationStringValue = function (t, n) {
                            return e.instance.configurations[t]
                              ? e.instance.configurations[t].toString()
                              : n;
                          }),
                          (e.isRemoteConfigsReady = function () {
                            return e.instance.remoteConfigsIsReady;
                          }),
                          (e.addRemoteConfigsListener = function (t) {
                            e.instance.remoteConfigsListeners.indexOf(t) < 0 &&
                              e.instance.remoteConfigsListeners.push(t);
                          }),
                          (e.removeRemoteConfigsListener = function (t) {
                            var n =
                              e.instance.remoteConfigsListeners.indexOf(t);
                            n > -1 &&
                              e.instance.remoteConfigsListeners.splice(n, 1);
                          }),
                          (e.getRemoteConfigsContentAsString = function () {
                            return JSON.stringify(e.instance.configurations);
                          }),
                          (e.populateConfigurations = function (t) {
                            var n = t.configs;
                            if (n) {
                              e.instance.configurations = {};
                              for (var r = 0; r < n.length; ++r) {
                                var i = n[r];
                                if (i) {
                                  var o = i.key,
                                    a = i.value,
                                    s = i.start_ts
                                      ? i.start_ts
                                      : Number.MIN_VALUE,
                                    u = i.end_ts ? i.end_ts : Number.MAX_VALUE,
                                    c = e.getClientTsAdjusted();
                                  o &&
                                    a &&
                                    c > s &&
                                    c < u &&
                                    (e.instance.configurations[o] = a);
                                }
                              }
                            }
                            e.instance.remoteConfigsIsReady = !0;
                            var d = e.instance.remoteConfigsListeners;
                            for (r = 0; r < d.length; ++r)
                              d[r] && d[r].onRemoteConfigsUpdated();
                          }),
                          (e.addOnBeforeUnloadListener = function (t) {
                            e.instance.beforeUnloadListeners.indexOf(t) < 0 &&
                              e.instance.beforeUnloadListeners.push(t);
                          }),
                          (e.removeOnBeforeUnloadListener = function (t) {
                            var n = e.instance.beforeUnloadListeners.indexOf(t);
                            n > -1 &&
                              e.instance.beforeUnloadListeners.splice(n, 1);
                          }),
                          (e.notifyBeforeUnloadListeners = function () {
                            for (
                              var t = e.instance.beforeUnloadListeners, n = 0;
                              n < t.length;
                              ++n
                            )
                              t[n] && t[n].onBeforeUnload();
                          }),
                          (e.CategorySdkError = "sdk_error"),
                          (e.MAX_CUSTOM_FIELDS_COUNT = 50),
                          (e.MAX_CUSTOM_FIELDS_KEY_LENGTH = 64),
                          (e.MAX_CUSTOM_FIELDS_VALUE_STRING_LENGTH = 256),
                          (e.instance = new e()),
                          (e.DefaultUserIdKey = "default_user_id"),
                          (e.SessionNumKey = "session_num"),
                          (e.TransactionNumKey = "transaction_num"),
                          (e.Dimension01Key = "dimension01"),
                          (e.Dimension02Key = "dimension02"),
                          (e.Dimension03Key = "dimension03"),
                          (e.SdkConfigCachedKey = "sdk_config_cached"),
                          (e.LastUsedIdentifierKey = "last_used_identifier"),
                          e
                        );
                      })()),
                      (t.GAState = c);
                  })(a || (a = {})),
                  (function (e) {
                    var t, n, r, i;
                    (t = e.tasks || (e.tasks = {})),
                      (n = e.utilities.GAUtilities),
                      (r = e.logging.GALogger),
                      (i = (function () {
                        function e() {}
                        return (
                          (e.execute = function (t, i, o, a) {
                            var s = new Date();
                            if (
                              (e.timestampMap[i] || (e.timestampMap[i] = s),
                              e.countMap[i] || (e.countMap[i] = 0),
                              (s.getTime() - e.timestampMap[i].getTime()) /
                                1e3 >=
                                3600 &&
                                ((e.timestampMap[i] = s), (e.countMap[i] = 0)),
                              !(e.countMap[i] >= e.MaxCount))
                            ) {
                              var u = n.getHmac(a, o),
                                c = new XMLHttpRequest();
                              (c.onreadystatechange = function () {
                                if (4 === c.readyState) {
                                  if (!c.responseText) return;
                                  if (200 != c.status)
                                    return void r.w(
                                      "sdk error failed. response code not 200. status code: " +
                                        c.status +
                                        ", description: " +
                                        c.statusText +
                                        ", body: " +
                                        c.responseText
                                    );
                                  e.countMap[i] = e.countMap[i] + 1;
                                }
                              }),
                                c.open("POST", t, !0),
                                c.setRequestHeader(
                                  "Content-Type",
                                  "application/json"
                                ),
                                c.setRequestHeader("Authorization", u);
                              try {
                                c.send(o);
                              } catch (e) {
                                console.error(e);
                              }
                            }
                          }),
                          (e.MaxCount = 10),
                          (e.countMap = {}),
                          (e.timestampMap = {}),
                          e
                        );
                      })()),
                      (t.SdkErrorTask = i);
                  })(a || (a = {})),
                  (function (e) {
                    var t, n, r, i, o, a, s, u, c, d, l;
                    (t = e.http || (e.http = {})),
                      (n = e.state.GAState),
                      (r = e.logging.GALogger),
                      (i = e.utilities.GAUtilities),
                      (o = e.validators.GAValidator),
                      (a = e.tasks.SdkErrorTask),
                      (s = e.events.EGASdkErrorCategory),
                      (u = e.events.EGASdkErrorArea),
                      (c = e.events.EGASdkErrorAction),
                      (d = e.events.EGASdkErrorParameter),
                      (l = (function () {
                        function e() {
                          (this.protocol = "https"),
                            (this.hostName = "api.gameanalytics.com"),
                            (this.version = "v2"),
                            (this.remoteConfigsVersion = "v1"),
                            (this.baseUrl =
                              this.protocol +
                              "://" +
                              this.hostName +
                              "/" +
                              this.version),
                            (this.remoteConfigsBaseUrl =
                              this.protocol +
                              "://" +
                              this.hostName +
                              "/remote_configs/" +
                              this.remoteConfigsVersion),
                            (this.initializeUrlPath = "init"),
                            (this.eventsUrlPath = "events"),
                            (this.useGzip = !1);
                        }
                        return (
                          (e.prototype.requestInit = function (r, i) {
                            var o = n.getGameKey(),
                              a =
                                this.remoteConfigsBaseUrl +
                                "/" +
                                this.initializeUrlPath +
                                "?game_key=" +
                                o +
                                "&interval_seconds=0&configs_hash=" +
                                r,
                              s = n.getInitAnnotations(),
                              u = JSON.stringify(s);
                            if (u) {
                              var c = this.createPayloadData(u, this.useGzip),
                                d = [];
                              d.push(u),
                                e.sendRequest(
                                  a,
                                  c,
                                  d,
                                  this.useGzip,
                                  e.initRequestCallback,
                                  i
                                );
                            } else
                              i(t.EGAHTTPApiResponse.JsonEncodeFailed, null);
                          }),
                          (e.prototype.sendEventsInArray = function (r, i, o) {
                            if (0 != r.length) {
                              var a = n.getGameKey(),
                                s =
                                  this.baseUrl +
                                  "/" +
                                  a +
                                  "/" +
                                  this.eventsUrlPath,
                                u = JSON.stringify(r);
                              if (u) {
                                var c = this.createPayloadData(u, this.useGzip),
                                  d = [];
                                d.push(u),
                                  d.push(i),
                                  d.push(r.length.toString()),
                                  e.sendRequest(
                                    s,
                                    c,
                                    d,
                                    this.useGzip,
                                    e.sendEventInArrayRequestCallback,
                                    o
                                  );
                              } else
                                o(
                                  t.EGAHTTPApiResponse.JsonEncodeFailed,
                                  null,
                                  i,
                                  r.length
                                );
                            }
                          }),
                          (e.prototype.sendSdkErrorEvent = function (
                            t,
                            i,
                            s,
                            u,
                            c,
                            d,
                            l
                          ) {
                            if (
                              n.isEventSubmissionEnabled() &&
                              o.validateSdkErrorEvent(d, l, t, i, s)
                            ) {
                              var f,
                                v =
                                  this.baseUrl +
                                  "/" +
                                  d +
                                  "/" +
                                  this.eventsUrlPath,
                                g = "",
                                p = n.getSdkErrorEventAnnotations(),
                                m = e.sdkErrorCategoryString(t);
                              (p.error_category = m), (g += m);
                              var h = e.sdkErrorAreaString(i);
                              (p.error_area = h), (g += ":" + h);
                              var y = e.sdkErrorActionString(s);
                              p.error_action = y;
                              var E = e.sdkErrorParameterString(u);
                              if (
                                (E.length > 0 && (p.error_parameter = E),
                                c.length > 0)
                              ) {
                                var S = c;
                                c.length > e.MAX_ERROR_MESSAGE_LENGTH &&
                                  (S = c.substring(
                                    0,
                                    e.MAX_ERROR_MESSAGE_LENGTH
                                  )),
                                  (p.reason = S);
                              }
                              var A = [];
                              A.push(p),
                                (f = JSON.stringify(A))
                                  ? a.execute(v, g, f, l)
                                  : r.w(
                                      "sendSdkErrorEvent: JSON encoding failed."
                                    );
                            }
                          }),
                          (e.sendEventInArrayRequestCallback = function (
                            r,
                            i,
                            o,
                            a
                          ) {
                            void 0 === a && (a = null), a[0], a[1];
                            var l,
                              f,
                              v = a[2],
                              g = parseInt(a[3]);
                            (l = r.responseText), (f = r.status);
                            var p = e.instance.processRequestResponse(
                              f,
                              r.statusText,
                              l,
                              "Events"
                            );
                            if (
                              p == t.EGAHTTPApiResponse.Ok ||
                              p == t.EGAHTTPApiResponse.Created ||
                              p == t.EGAHTTPApiResponse.BadRequest
                            ) {
                              var m = l ? JSON.parse(l) : {};
                              if (null == m)
                                return (
                                  o(
                                    t.EGAHTTPApiResponse.JsonDecodeFailed,
                                    null,
                                    v,
                                    g
                                  ),
                                  void e.instance.sendSdkErrorEvent(
                                    s.Http,
                                    u.EventsHttp,
                                    c.FailHttpJsonDecode,
                                    d.Undefined,
                                    l,
                                    n.getGameKey(),
                                    n.getGameSecret()
                                  )
                                );
                              t.EGAHTTPApiResponse.BadRequest, o(p, m, v, g);
                            } else o(p, null, v, g);
                          }),
                          (e.sendRequest = function (e, t, r, o, a, s) {
                            var u = new XMLHttpRequest(),
                              c = n.getGameSecret(),
                              d = i.getHmac(c, t),
                              l = [];
                            for (var f in (l.push(d), r)) l.push(r[f]);
                            if (
                              ((u.onreadystatechange = function () {
                                4 === u.readyState && a(u, e, s, l);
                              }),
                              u.open("POST", e, !0),
                              u.setRequestHeader(
                                "Content-Type",
                                "application/json"
                              ),
                              u.setRequestHeader("Authorization", d),
                              o)
                            )
                              throw new Error("gzip not supported");
                            try {
                              u.send(t);
                            } catch (e) {
                              console.error(e.stack);
                            }
                          }),
                          (e.initRequestCallback = function (r, i, a, l) {
                            var f, v;
                            void 0 === l && (l = null),
                              l[0],
                              l[1],
                              (f = r.responseText),
                              (v = r.status);
                            var g = f ? JSON.parse(f) : {},
                              p = e.instance.processRequestResponse(
                                v,
                                r.statusText,
                                f,
                                "Init"
                              );
                            if (
                              p == t.EGAHTTPApiResponse.Ok ||
                              p == t.EGAHTTPApiResponse.Created ||
                              p == t.EGAHTTPApiResponse.BadRequest
                            ) {
                              if (null == g)
                                return (
                                  a(
                                    t.EGAHTTPApiResponse.JsonDecodeFailed,
                                    null,
                                    "",
                                    0
                                  ),
                                  void e.instance.sendSdkErrorEvent(
                                    s.Http,
                                    u.InitHttp,
                                    c.FailHttpJsonDecode,
                                    d.Undefined,
                                    f,
                                    n.getGameKey(),
                                    n.getGameSecret()
                                  )
                                );
                              if (p !== t.EGAHTTPApiResponse.BadRequest) {
                                var m = o.validateAndCleanInitRequestResponse(
                                  g,
                                  p === t.EGAHTTPApiResponse.Created
                                );
                                m
                                  ? a(p, m, "", 0)
                                  : a(
                                      t.EGAHTTPApiResponse.BadResponse,
                                      null,
                                      "",
                                      0
                                    );
                              } else a(p, null, "", 0);
                            } else a(p, null, "", 0);
                          }),
                          (e.prototype.createPayloadData = function (e, t) {
                            if (t) throw new Error("gzip not supported");
                            return e;
                          }),
                          (e.prototype.processRequestResponse = function (
                            e,
                            n,
                            r,
                            i
                          ) {
                            return r
                              ? 200 === e
                                ? t.EGAHTTPApiResponse.Ok
                                : 201 === e
                                ? t.EGAHTTPApiResponse.Created
                                : 0 === e || 401 === e
                                ? t.EGAHTTPApiResponse.Unauthorized
                                : 400 === e
                                ? t.EGAHTTPApiResponse.BadRequest
                                : 500 === e
                                ? t.EGAHTTPApiResponse.InternalServerError
                                : t.EGAHTTPApiResponse.UnknownResponseCode
                              : t.EGAHTTPApiResponse.NoResponse;
                          }),
                          (e.sdkErrorCategoryString = function (e) {
                            switch (e) {
                              case s.EventValidation:
                                return "event_validation";
                              case s.Database:
                                return "db";
                              case s.Init:
                                return "init";
                              case s.Http:
                                return "http";
                              case s.Json:
                                return "json";
                            }
                            return "";
                          }),
                          (e.sdkErrorAreaString = function (e) {
                            switch (e) {
                              case u.BusinessEvent:
                                return "business";
                              case u.ResourceEvent:
                                return "resource";
                              case u.ProgressionEvent:
                                return "progression";
                              case u.DesignEvent:
                                return "design";
                              case u.ErrorEvent:
                                return "error";
                              case u.InitHttp:
                                return "init_http";
                              case u.EventsHttp:
                                return "events_http";
                              case u.ProcessEvents:
                                return "process_events";
                              case u.AddEventsToStore:
                                return "add_events_to_store";
                            }
                            return "";
                          }),
                          (e.sdkErrorActionString = function (e) {
                            switch (e) {
                              case c.InvalidCurrency:
                                return "invalid_currency";
                              case c.InvalidShortString:
                                return "invalid_short_string";
                              case c.InvalidEventPartLength:
                                return "invalid_event_part_length";
                              case c.InvalidEventPartCharacters:
                                return "invalid_event_part_characters";
                              case c.InvalidStore:
                                return "invalid_store";
                              case c.InvalidFlowType:
                                return "invalid_flow_type";
                              case c.StringEmptyOrNull:
                                return "string_empty_or_null";
                              case c.NotFoundInAvailableCurrencies:
                                return "not_found_in_available_currencies";
                              case c.InvalidAmount:
                                return "invalid_amount";
                              case c.NotFoundInAvailableItemTypes:
                                return "not_found_in_available_item_types";
                              case c.WrongProgressionOrder:
                                return "wrong_progression_order";
                              case c.InvalidEventIdLength:
                                return "invalid_event_id_length";
                              case c.InvalidEventIdCharacters:
                                return "invalid_event_id_characters";
                              case c.InvalidProgressionStatus:
                                return "invalid_progression_status";
                              case c.InvalidSeverity:
                                return "invalid_severity";
                              case c.InvalidLongString:
                                return "invalid_long_string";
                              case c.DatabaseTooLarge:
                                return "db_too_large";
                              case c.DatabaseOpenOrCreate:
                                return "db_open_or_create";
                              case c.JsonError:
                                return "json_error";
                              case c.FailHttpJsonDecode:
                                return "fail_http_json_decode";
                              case c.FailHttpJsonEncode:
                                return "fail_http_json_encode";
                            }
                            return "";
                          }),
                          (e.sdkErrorParameterString = function (e) {
                            switch (e) {
                              case d.Currency:
                                return "currency";
                              case d.CartType:
                                return "cart_type";
                              case d.ItemType:
                                return "item_type";
                              case d.ItemId:
                                return "item_id";
                              case d.Store:
                                return "store";
                              case d.FlowType:
                                return "flow_type";
                              case d.Amount:
                                return "amount";
                              case d.Progression01:
                                return "progression01";
                              case d.Progression02:
                                return "progression02";
                              case d.Progression03:
                                return "progression03";
                              case d.EventId:
                                return "event_id";
                              case d.ProgressionStatus:
                                return "progression_status";
                              case d.Severity:
                                return "severity";
                              case d.Message:
                                return "message";
                            }
                            return "";
                          }),
                          (e.instance = new e()),
                          (e.MAX_ERROR_MESSAGE_LENGTH = 256),
                          e
                        );
                      })()),
                      (t.GAHTTPApi = l);
                  })(a || (a = {})),
                  (function (e) {
                    var t, n, r, i, o, a, s, u, c, d, l;
                    (t = e.events || (e.events = {})),
                      (n = e.store.GAStore),
                      (r = e.store.EGAStore),
                      (i = e.store.EGAStoreArgsOperator),
                      (o = e.state.GAState),
                      (a = e.logging.GALogger),
                      (s = e.utilities.GAUtilities),
                      (u = e.http.EGAHTTPApiResponse),
                      (c = e.http.GAHTTPApi),
                      (d = e.validators.GAValidator),
                      (l = (function () {
                        function l() {}
                        return (
                          (l.customEventFieldsErrorCallback = function (t, n) {
                            if (o.isEventSubmissionEnabled()) {
                              var r = new Date();
                              l.timestampMap[t] || (l.timestampMap[t] = r),
                                l.countMap[t] || (l.countMap[t] = 0),
                                (r.getTime() - l.timestampMap[t].getTime()) /
                                  1e3 >=
                                  3600 &&
                                  ((l.timestampMap[t] = r),
                                  (l.countMap[t] = 0)),
                                l.countMap[t] >= l.MAX_ERROR_COUNT ||
                                  e.threading.GAThreading.performTaskOnGAThread(
                                    function () {
                                      l.addErrorEvent(
                                        e.EGAErrorSeverity.Warning,
                                        n,
                                        null,
                                        !0
                                      ),
                                        (l.countMap[t] = l.countMap[t] + 1);
                                    }
                                  );
                            }
                          }),
                          (l.addSessionStartEvent = function () {
                            if (o.isEventSubmissionEnabled()) {
                              var e = {};
                              (e.category = l.CategorySessionStart),
                                o.incrementSessionNum(),
                                n.setItem(
                                  o.getGameKey(),
                                  o.SessionNumKey,
                                  o.getSessionNum().toString()
                                ),
                                l.addDimensionsToEvent(e);
                              var t = o.instance.currentGlobalCustomEventFields;
                              l.addCustomFieldsToEvent(
                                e,
                                o.validateAndCleanCustomFields(
                                  t,
                                  l.customEventFieldsErrorCallback
                                )
                              ),
                                l.addEventToStore(e),
                                a.i("Add SESSION START event"),
                                l.processEvents(l.CategorySessionStart, !1);
                            }
                          }),
                          (l.addSessionEndEvent = function () {
                            if (o.isEventSubmissionEnabled()) {
                              var e = o.getSessionStart(),
                                t = o.getClientTsAdjusted() - e;
                              t < 0 &&
                                (a.w(
                                  "Session length was calculated to be less then 0. Should not be possible. Resetting to 0."
                                ),
                                (t = 0));
                              var n = {};
                              (n.category = l.CategorySessionEnd),
                                (n.length = t),
                                l.addDimensionsToEvent(n);
                              var r = o.instance.currentGlobalCustomEventFields;
                              l.addCustomFieldsToEvent(
                                n,
                                o.validateAndCleanCustomFields(
                                  r,
                                  l.customEventFieldsErrorCallback
                                )
                              ),
                                l.addEventToStore(n),
                                a.i("Add SESSION END event."),
                                l.processEvents("", !1);
                            }
                          }),
                          (l.addBusinessEvent = function (e, t, r, i, s, u, f) {
                            if (
                              (void 0 === s && (s = null),
                              o.isEventSubmissionEnabled())
                            ) {
                              var v = d.validateBusinessEvent(e, t, s, r, i);
                              if (null == v) {
                                var g = {};
                                o.incrementTransactionNum(),
                                  n.setItem(
                                    o.getGameKey(),
                                    o.TransactionNumKey,
                                    o.getTransactionNum().toString()
                                  ),
                                  (g.event_id = r + ":" + i),
                                  (g.category = l.CategoryBusiness),
                                  (g.currency = e),
                                  (g.amount = t),
                                  (g[o.TransactionNumKey] =
                                    o.getTransactionNum()),
                                  s && (g.cart_type = s),
                                  l.addDimensionsToEvent(g);
                                var p = {};
                                if (u && Object.keys(u).length > 0)
                                  for (var m in u) p[m] = u[m];
                                else
                                  for (var m in o.instance
                                    .currentGlobalCustomEventFields)
                                    p[m] =
                                      o.instance.currentGlobalCustomEventFields[
                                        m
                                      ];
                                if (f && u && Object.keys(u).length > 0)
                                  for (var m in o.instance
                                    .currentGlobalCustomEventFields)
                                    p[m] ||
                                      (p[m] =
                                        o.instance.currentGlobalCustomEventFields[
                                          m
                                        ]);
                                l.addCustomFieldsToEvent(
                                  g,
                                  o.validateAndCleanCustomFields(
                                    p,
                                    l.customEventFieldsErrorCallback
                                  )
                                ),
                                  a.i(
                                    "Add BUSINESS event: {currency:" +
                                      e +
                                      ", amount:" +
                                      t +
                                      ", itemType:" +
                                      r +
                                      ", itemId:" +
                                      i +
                                      ", cartType:" +
                                      s +
                                      "}"
                                  ),
                                  l.addEventToStore(g);
                              } else
                                c.instance.sendSdkErrorEvent(
                                  v.category,
                                  v.area,
                                  v.action,
                                  v.parameter,
                                  v.reason,
                                  o.getGameKey(),
                                  o.getGameSecret()
                                );
                            }
                          }),
                          (l.addResourceEvent = function (t, n, r, i, s, u, f) {
                            if (o.isEventSubmissionEnabled()) {
                              var v = d.validateResourceEvent(
                                t,
                                n,
                                r,
                                i,
                                s,
                                o.getAvailableResourceCurrencies(),
                                o.getAvailableResourceItemTypes()
                              );
                              if (null == v) {
                                t === e.EGAResourceFlowType.Sink && (r *= -1);
                                var g = {},
                                  p = l.resourceFlowTypeToString(t);
                                (g.event_id = p + ":" + n + ":" + i + ":" + s),
                                  (g.category = l.CategoryResource),
                                  (g.amount = r),
                                  l.addDimensionsToEvent(g);
                                var m = {};
                                if (u && Object.keys(u).length > 0)
                                  for (var h in u) m[h] = u[h];
                                else
                                  for (var h in o.instance
                                    .currentGlobalCustomEventFields)
                                    m[h] =
                                      o.instance.currentGlobalCustomEventFields[
                                        h
                                      ];
                                if (f && u && Object.keys(u).length > 0)
                                  for (var h in o.instance
                                    .currentGlobalCustomEventFields)
                                    m[h] ||
                                      (m[h] =
                                        o.instance.currentGlobalCustomEventFields[
                                          h
                                        ]);
                                l.addCustomFieldsToEvent(
                                  g,
                                  o.validateAndCleanCustomFields(
                                    m,
                                    l.customEventFieldsErrorCallback
                                  )
                                ),
                                  a.i(
                                    "Add RESOURCE event: {currency:" +
                                      n +
                                      ", amount:" +
                                      r +
                                      ", itemType:" +
                                      i +
                                      ", itemId:" +
                                      s +
                                      "}"
                                  ),
                                  l.addEventToStore(g);
                              } else
                                c.instance.sendSdkErrorEvent(
                                  v.category,
                                  v.area,
                                  v.action,
                                  v.parameter,
                                  v.reason,
                                  o.getGameKey(),
                                  o.getGameSecret()
                                );
                            }
                          }),
                          (l.addProgressionEvent = function (
                            t,
                            n,
                            r,
                            i,
                            s,
                            u,
                            f,
                            v
                          ) {
                            if (o.isEventSubmissionEnabled()) {
                              var g = l.progressionStatusToString(t),
                                p = d.validateProgressionEvent(t, n, r, i);
                              if (null == p) {
                                var m,
                                  h = {};
                                (m = r
                                  ? i
                                    ? n + ":" + r + ":" + i
                                    : n + ":" + r
                                  : n),
                                  (h.category = l.CategoryProgression),
                                  (h.event_id = g + ":" + m);
                                var y = 0;
                                u &&
                                  t != e.EGAProgressionStatus.Start &&
                                  (h.score = Math.round(s)),
                                  t === e.EGAProgressionStatus.Fail &&
                                    o.incrementProgressionTries(m),
                                  t === e.EGAProgressionStatus.Complete &&
                                    (o.incrementProgressionTries(m),
                                    (y = o.getProgressionTries(m)),
                                    (h.attempt_num = y),
                                    o.clearProgressionTries(m)),
                                  l.addDimensionsToEvent(h);
                                var E = {};
                                if (f && Object.keys(f).length > 0)
                                  for (var S in f) E[S] = f[S];
                                else
                                  for (var S in o.instance
                                    .currentGlobalCustomEventFields)
                                    E[S] =
                                      o.instance.currentGlobalCustomEventFields[
                                        S
                                      ];
                                if (v && f && Object.keys(f).length > 0)
                                  for (var S in o.instance
                                    .currentGlobalCustomEventFields)
                                    E[S] ||
                                      (E[S] =
                                        o.instance.currentGlobalCustomEventFields[
                                          S
                                        ]);
                                l.addCustomFieldsToEvent(
                                  h,
                                  o.validateAndCleanCustomFields(
                                    E,
                                    l.customEventFieldsErrorCallback
                                  )
                                ),
                                  a.i(
                                    "Add PROGRESSION event: {status:" +
                                      g +
                                      ", progression01:" +
                                      n +
                                      ", progression02:" +
                                      r +
                                      ", progression03:" +
                                      i +
                                      ", score:" +
                                      s +
                                      ", attempt:" +
                                      y +
                                      "}"
                                  ),
                                  l.addEventToStore(h);
                              } else
                                c.instance.sendSdkErrorEvent(
                                  p.category,
                                  p.area,
                                  p.action,
                                  p.parameter,
                                  p.reason,
                                  o.getGameKey(),
                                  o.getGameSecret()
                                );
                            }
                          }),
                          (l.addDesignEvent = function (e, t, n, r, i) {
                            if (o.isEventSubmissionEnabled()) {
                              var s = d.validateDesignEvent(e);
                              if (null == s) {
                                var u = {};
                                (u.category = l.CategoryDesign),
                                  (u.event_id = e),
                                  n && (u.value = t),
                                  l.addDimensionsToEvent(u);
                                var f = {};
                                if (r && Object.keys(r).length > 0)
                                  for (var v in r) f[v] = r[v];
                                else
                                  for (var v in o.instance
                                    .currentGlobalCustomEventFields)
                                    f[v] =
                                      o.instance.currentGlobalCustomEventFields[
                                        v
                                      ];
                                if (i && r && Object.keys(r).length > 0)
                                  for (var v in o.instance
                                    .currentGlobalCustomEventFields)
                                    f[v] ||
                                      (f[v] =
                                        o.instance.currentGlobalCustomEventFields[
                                          v
                                        ]);
                                l.addCustomFieldsToEvent(
                                  u,
                                  o.validateAndCleanCustomFields(
                                    f,
                                    l.customEventFieldsErrorCallback
                                  )
                                ),
                                  a.i(
                                    "Add DESIGN event: {eventId:" +
                                      e +
                                      ", value:" +
                                      t +
                                      "}"
                                  ),
                                  l.addEventToStore(u);
                              } else
                                c.instance.sendSdkErrorEvent(
                                  s.category,
                                  s.area,
                                  s.action,
                                  s.parameter,
                                  s.reason,
                                  o.getGameKey(),
                                  o.getGameSecret()
                                );
                            }
                          }),
                          (l.addErrorEvent = function (e, t, n, r, i) {
                            if (
                              (void 0 === i && (i = !1),
                              o.isEventSubmissionEnabled())
                            ) {
                              var s = l.errorSeverityToString(e),
                                u = d.validateErrorEvent(e, t);
                              if (null == u) {
                                var f = {};
                                if (
                                  ((f.category = l.CategoryError),
                                  (f.severity = s),
                                  (f.message = t),
                                  l.addDimensionsToEvent(f),
                                  !i)
                                ) {
                                  var v = {};
                                  if (n && Object.keys(n).length > 0)
                                    for (var g in n) v[g] = n[g];
                                  else
                                    for (var g in o.instance
                                      .currentGlobalCustomEventFields)
                                      v[g] =
                                        o.instance.currentGlobalCustomEventFields[
                                          g
                                        ];
                                  if (r && n && Object.keys(n).length > 0)
                                    for (var g in o.instance
                                      .currentGlobalCustomEventFields)
                                      v[g] ||
                                        (v[g] =
                                          o.instance.currentGlobalCustomEventFields[
                                            g
                                          ]);
                                  l.addCustomFieldsToEvent(
                                    f,
                                    o.validateAndCleanCustomFields(
                                      v,
                                      l.customEventFieldsErrorCallback
                                    )
                                  );
                                }
                                a.i(
                                  "Add ERROR event: {severity:" +
                                    s +
                                    ", message:" +
                                    t +
                                    "}"
                                ),
                                  l.addEventToStore(f);
                              } else
                                c.instance.sendSdkErrorEvent(
                                  u.category,
                                  u.area,
                                  u.action,
                                  u.parameter,
                                  u.reason,
                                  o.getGameKey(),
                                  o.getGameSecret()
                                );
                            }
                          }),
                          (l.addAdEvent = function (t, n, r, i, s, u, f, v, g) {
                            if (o.isEventSubmissionEnabled()) {
                              var p = l.adActionToString(t),
                                m = l.adTypeToString(n),
                                h = l.adErrorToString(s),
                                y = d.validateAdEvent(t, n, r, i);
                              if (null == y) {
                                var E = {};
                                (E.category = l.CategoryAds),
                                  (E.ad_sdk_name = r),
                                  (E.ad_placement = i),
                                  (E.ad_type = m),
                                  (E.ad_action = p),
                                  t == e.EGAAdAction.FailedShow &&
                                    h.length > 0 &&
                                    (E.ad_fail_show_reason = h),
                                  !f ||
                                    (n != e.EGAAdType.RewardedVideo &&
                                      n != e.EGAAdType.Video) ||
                                    (E.ad_duration = u),
                                  l.addDimensionsToEvent(E);
                                var S = {};
                                if (v && Object.keys(v).length > 0)
                                  for (var A in v) S[A] = v[A];
                                else
                                  for (var A in o.instance
                                    .currentGlobalCustomEventFields)
                                    S[A] =
                                      o.instance.currentGlobalCustomEventFields[
                                        A
                                      ];
                                if (g && v && Object.keys(v).length > 0)
                                  for (var A in o.instance
                                    .currentGlobalCustomEventFields)
                                    S[A] ||
                                      (S[A] =
                                        o.instance.currentGlobalCustomEventFields[
                                          A
                                        ]);
                                l.addCustomFieldsToEvent(
                                  E,
                                  o.validateAndCleanCustomFields(
                                    S,
                                    l.customEventFieldsErrorCallback
                                  )
                                ),
                                  a.i(
                                    "Add AD event: {ad_sdk_name:" +
                                      r +
                                      ", ad_placement:" +
                                      i +
                                      ", ad_type:" +
                                      m +
                                      ", ad_action:" +
                                      p +
                                      (t == e.EGAAdAction.FailedShow &&
                                      h.length > 0
                                        ? ", ad_fail_show_reason:" + h
                                        : "") +
                                      (!f ||
                                      (n != e.EGAAdType.RewardedVideo &&
                                        n != e.EGAAdType.Video)
                                        ? ""
                                        : ", ad_duration:" + u) +
                                      "}"
                                  ),
                                  l.addEventToStore(E);
                              } else
                                c.instance.sendSdkErrorEvent(
                                  y.category,
                                  y.area,
                                  y.action,
                                  y.parameter,
                                  y.reason,
                                  o.getGameKey(),
                                  o.getGameSecret()
                                );
                            }
                          }),
                          (l.processEvents = function (e, u) {
                            if (o.isEventSubmissionEnabled())
                              try {
                                var f = s.createGuid();
                                u &&
                                  (l.cleanupEvents(),
                                  l.fixMissingSessionEndEvents());
                                var v = [];
                                v.push(["status", i.Equal, "new"]);
                                var g = [];
                                g.push(["status", i.Equal, "new"]),
                                  e &&
                                    (v.push(["category", i.Equal, e]),
                                    g.push(["category", i.Equal, e]));
                                var p = [];
                                p.push(["status", f]);
                                var m = n.select(r.Events, v);
                                if (!m || 0 == m.length)
                                  return (
                                    a.i("Event queue: No events to send"),
                                    void l.updateSessionStore()
                                  );
                                if (m.length > l.MaxEventCount) {
                                  if (
                                    !(m = n.select(
                                      r.Events,
                                      v,
                                      !0,
                                      l.MaxEventCount
                                    ))
                                  )
                                    return;
                                  var h = m[m.length - 1].client_ts;
                                  if (
                                    (v.push(["client_ts", i.LessOrEqual, h]),
                                    !(m = n.select(r.Events, v)))
                                  )
                                    return;
                                  g.push(["client_ts", i.LessOrEqual, h]);
                                }
                                if (
                                  (a.i(
                                    "Event queue: Sending " +
                                      m.length +
                                      " events."
                                  ),
                                  !n.update(r.Events, p, g))
                                )
                                  return;
                                for (var y = [], E = 0; E < m.length; ++E) {
                                  var S = m[E],
                                    A = JSON.parse(s.decode64(S.event));
                                  if (0 != A.length) {
                                    var b = A.client_ts;
                                    b &&
                                      !d.validateClientTs(b) &&
                                      delete A.client_ts,
                                      y.push(A);
                                  }
                                }
                                c.instance.sendEventsInArray(
                                  y,
                                  f,
                                  l.processEventsCallback
                                );
                              } catch (e) {
                                a.e("Error during ProcessEvents(): " + e.stack),
                                  c.instance.sendSdkErrorEvent(
                                    t.EGASdkErrorCategory.Json,
                                    t.EGASdkErrorArea.ProcessEvents,
                                    t.EGASdkErrorAction.JsonError,
                                    t.EGASdkErrorParameter.Undefined,
                                    e.stack,
                                    o.getGameKey(),
                                    o.getGameSecret()
                                  );
                              }
                          }),
                          (l.processEventsCallback = function (e, t, o, s) {
                            var c = [];
                            if ((c.push(["status", i.Equal, o]), e === u.Ok))
                              n.delete(r.Events, c),
                                a.i("Event queue: " + s + " events sent.");
                            else if (e === u.NoResponse) {
                              var d = [];
                              d.push(["status", "new"]),
                                a.w(
                                  "Event queue: Failed to send events to collector - Retrying next time"
                                ),
                                n.update(r.Events, d, c);
                            } else {
                              if (t) {
                                var l,
                                  f = 0;
                                for (var v in t) 0 == f && (l = t[v]), ++f;
                                e === u.BadRequest && l.constructor === Array
                                  ? a.w(
                                      "Event queue: " +
                                        s +
                                        " events sent. " +
                                        f +
                                        " events failed GA server validation."
                                    )
                                  : a.w("Event queue: Failed to send events.");
                              } else a.w("Event queue: Failed to send events.");
                              n.delete(r.Events, c);
                            }
                          }),
                          (l.cleanupEvents = function () {
                            n.update(r.Events, [["status", "new"]]);
                          }),
                          (l.fixMissingSessionEndEvents = function () {
                            if (o.isEventSubmissionEnabled()) {
                              var e = [];
                              e.push([
                                "session_id",
                                i.NotEqual,
                                o.getSessionId(),
                              ]);
                              var t = n.select(r.Sessions, e);
                              if (t && 0 != t.length) {
                                a.i(
                                  t.length +
                                    " session(s) located with missing session_end event."
                                );
                                for (var u = 0; u < t.length; ++u) {
                                  var c = JSON.parse(s.decode64(t[u].event)),
                                    d = c.client_ts - t[u].timestamp;
                                  (d = Math.max(0, d)),
                                    (c.category = l.CategorySessionEnd),
                                    (c.length = d),
                                    l.addEventToStore(c);
                                }
                              }
                            }
                          }),
                          (l.addEventToStore = function (e) {
                            if (o.isEventSubmissionEnabled())
                              if (o.isInitialized())
                                try {
                                  if (
                                    n.isStoreTooLargeForEvents() &&
                                    !s.stringMatch(
                                      e.category,
                                      /^(user|session_end|business)$/
                                    )
                                  )
                                    return (
                                      a.w(
                                        "Database too large. Event has been blocked."
                                      ),
                                      void c.instance.sendSdkErrorEvent(
                                        t.EGASdkErrorCategory.Database,
                                        t.EGASdkErrorArea.AddEventsToStore,
                                        t.EGASdkErrorAction.DatabaseTooLarge,
                                        t.EGASdkErrorParameter.Undefined,
                                        "",
                                        o.getGameKey(),
                                        o.getGameSecret()
                                      )
                                    );
                                  var u = o.getEventAnnotations();
                                  for (var d in e) u[d] = e[d];
                                  var f = JSON.stringify(u);
                                  a.ii("Event added to queue: " + f);
                                  var v = { status: "new" };
                                  (v.category = u.category),
                                    (v.session_id = u.session_id),
                                    (v.client_ts = u.client_ts),
                                    (v.event = s.encode64(JSON.stringify(u))),
                                    n.insert(r.Events, v),
                                    e.category == l.CategorySessionEnd
                                      ? n.delete(r.Sessions, [
                                          ["session_id", i.Equal, u.session_id],
                                        ])
                                      : l.updateSessionStore(),
                                    n.isStorageAvailable() &&
                                      n.save(o.getGameKey());
                                } catch (d) {
                                  a.e("addEventToStore: error"),
                                    a.e(d.stack),
                                    c.instance.sendSdkErrorEvent(
                                      t.EGASdkErrorCategory.Database,
                                      t.EGASdkErrorArea.AddEventsToStore,
                                      t.EGASdkErrorAction.DatabaseTooLarge,
                                      t.EGASdkErrorParameter.Undefined,
                                      d.stack,
                                      o.getGameKey(),
                                      o.getGameSecret()
                                    );
                                }
                              else
                                a.w(
                                  "Could not add event: SDK is not initialized"
                                );
                          }),
                          (l.updateSessionStore = function () {
                            if (o.sessionIsStarted()) {
                              var e = {};
                              (e.session_id = o.instance.sessionId),
                                (e.timestamp = o.getSessionStart());
                              var t = o.getEventAnnotations();
                              l.addDimensionsToEvent(t);
                              var i = o.instance.currentGlobalCustomEventFields;
                              l.addCustomFieldsToEvent(
                                t,
                                o.validateAndCleanCustomFields(
                                  i,
                                  l.customEventFieldsErrorCallback
                                )
                              ),
                                (e.event = s.encode64(JSON.stringify(t))),
                                n.insert(r.Sessions, e, !0, "session_id"),
                                n.isStorageAvailable() &&
                                  n.save(o.getGameKey());
                            }
                          }),
                          (l.addDimensionsToEvent = function (e) {
                            e &&
                              (o.getCurrentCustomDimension01() &&
                                (e.custom_01 = o.getCurrentCustomDimension01()),
                              o.getCurrentCustomDimension02() &&
                                (e.custom_02 = o.getCurrentCustomDimension02()),
                              o.getCurrentCustomDimension03() &&
                                (e.custom_03 =
                                  o.getCurrentCustomDimension03()));
                          }),
                          (l.addCustomFieldsToEvent = function (e, t) {
                            e &&
                              t &&
                              Object.keys(t).length > 0 &&
                              (e.custom_fields = t);
                          }),
                          (l.resourceFlowTypeToString = function (t) {
                            return t == e.EGAResourceFlowType.Source ||
                              t ==
                                e.EGAResourceFlowType[
                                  e.EGAResourceFlowType.Source
                                ]
                              ? "Source"
                              : t == e.EGAResourceFlowType.Sink ||
                                t ==
                                  e.EGAResourceFlowType[
                                    e.EGAResourceFlowType.Sink
                                  ]
                              ? "Sink"
                              : "";
                          }),
                          (l.progressionStatusToString = function (t) {
                            return t == e.EGAProgressionStatus.Start ||
                              t ==
                                e.EGAProgressionStatus[
                                  e.EGAProgressionStatus.Start
                                ]
                              ? "Start"
                              : t == e.EGAProgressionStatus.Complete ||
                                t ==
                                  e.EGAProgressionStatus[
                                    e.EGAProgressionStatus.Complete
                                  ]
                              ? "Complete"
                              : t == e.EGAProgressionStatus.Fail ||
                                t ==
                                  e.EGAProgressionStatus[
                                    e.EGAProgressionStatus.Fail
                                  ]
                              ? "Fail"
                              : "";
                          }),
                          (l.errorSeverityToString = function (t) {
                            return t == e.EGAErrorSeverity.Debug ||
                              t == e.EGAErrorSeverity[e.EGAErrorSeverity.Debug]
                              ? "debug"
                              : t == e.EGAErrorSeverity.Info ||
                                t == e.EGAErrorSeverity[e.EGAErrorSeverity.Info]
                              ? "info"
                              : t == e.EGAErrorSeverity.Warning ||
                                t ==
                                  e.EGAErrorSeverity[e.EGAErrorSeverity.Warning]
                              ? "warning"
                              : t == e.EGAErrorSeverity.Error ||
                                t ==
                                  e.EGAErrorSeverity[e.EGAErrorSeverity.Error]
                              ? "error"
                              : t == e.EGAErrorSeverity.Critical ||
                                t ==
                                  e.EGAErrorSeverity[
                                    e.EGAErrorSeverity.Critical
                                  ]
                              ? "critical"
                              : "";
                          }),
                          (l.adActionToString = function (t) {
                            return t == e.EGAAdAction.Clicked ||
                              t == e.EGAAdAction[e.EGAAdAction.Clicked]
                              ? "clicked"
                              : t == e.EGAAdAction.Show ||
                                t == e.EGAAdAction[e.EGAAdAction.Show]
                              ? "show"
                              : t == e.EGAAdAction.FailedShow ||
                                t == e.EGAAdAction[e.EGAAdAction.FailedShow]
                              ? "failed_show"
                              : t == e.EGAAdAction.RewardReceived ||
                                t == e.EGAAdAction[e.EGAAdAction.RewardReceived]
                              ? "reward_received"
                              : "";
                          }),
                          (l.adErrorToString = function (t) {
                            return t == e.EGAAdError.Unknown ||
                              t == e.EGAAdError[e.EGAAdError.Unknown]
                              ? "unknown"
                              : t == e.EGAAdError.Offline ||
                                t == e.EGAAdError[e.EGAAdError.Offline]
                              ? "offline"
                              : t == e.EGAAdError.NoFill ||
                                t == e.EGAAdError[e.EGAAdError.NoFill]
                              ? "no_fill"
                              : t == e.EGAAdError.InternalError ||
                                t == e.EGAAdError[e.EGAAdError.InternalError]
                              ? "internal_error"
                              : t == e.EGAAdError.InvalidRequest ||
                                t == e.EGAAdError[e.EGAAdError.InvalidRequest]
                              ? "invalid_request"
                              : t == e.EGAAdError.UnableToPrecache ||
                                t == e.EGAAdError[e.EGAAdError.UnableToPrecache]
                              ? "unable_to_precache"
                              : "";
                          }),
                          (l.adTypeToString = function (t) {
                            return t == e.EGAAdType.Video ||
                              t == e.EGAAdType[e.EGAAdType.Video]
                              ? "video"
                              : t == e.EGAAdType.RewardedVideo ||
                                t == e.EGAAdError[e.EGAAdType.RewardedVideo]
                              ? "rewarded_video"
                              : t == e.EGAAdType.Playable ||
                                t == e.EGAAdError[e.EGAAdType.Playable]
                              ? "playable"
                              : t == e.EGAAdType.Interstitial ||
                                t == e.EGAAdError[e.EGAAdType.Interstitial]
                              ? "interstitial"
                              : t == e.EGAAdType.OfferWall ||
                                t == e.EGAAdError[e.EGAAdType.OfferWall]
                              ? "offer_wall"
                              : t == e.EGAAdType.Banner ||
                                t == e.EGAAdError[e.EGAAdType.Banner]
                              ? "banner"
                              : "";
                          }),
                          (l.CategorySessionStart = "user"),
                          (l.CategorySessionEnd = "session_end"),
                          (l.CategoryDesign = "design"),
                          (l.CategoryBusiness = "business"),
                          (l.CategoryProgression = "progression"),
                          (l.CategoryResource = "resource"),
                          (l.CategoryError = "error"),
                          (l.CategoryAds = "ads"),
                          (l.MaxEventCount = 500),
                          (l.MAX_ERROR_COUNT = 10),
                          (l.countMap = {}),
                          (l.timestampMap = {}),
                          l
                        );
                      })()),
                      (t.GAEvents = l);
                  })(a || (a = {})),
                  (function (e) {
                    var t, n, r, i, o;
                    (t = e.threading || (e.threading = {})),
                      (n = e.logging.GALogger),
                      (r = e.state.GAState),
                      (i = e.events.GAEvents),
                      (o = (function () {
                        function e() {
                          (this.blocks = new t.PriorityQueue({
                            compare: function (e, t) {
                              return e - t;
                            },
                          })),
                            (this.id2TimedBlockMap = {}),
                            e.startThread();
                        }
                        return (
                          (e.createTimedBlock = function (e) {
                            void 0 === e && (e = 0);
                            var n = new Date();
                            return (
                              n.setSeconds(n.getSeconds() + e),
                              new t.TimedBlock(n)
                            );
                          }),
                          (e.performTaskOnGAThread = function (n, r) {
                            void 0 === r && (r = 0);
                            var i = new Date();
                            i.setSeconds(i.getSeconds() + r);
                            var o = new t.TimedBlock(i);
                            (o.block = n),
                              (e.instance.id2TimedBlockMap[o.id] = o),
                              e.instance.addTimedBlock(o);
                          }),
                          (e.performTimedBlockOnGAThread = function (t) {
                            (e.instance.id2TimedBlockMap[t.id] = t),
                              e.instance.addTimedBlock(t);
                          }),
                          (e.scheduleTimer = function (n, r) {
                            var i = new Date();
                            i.setSeconds(i.getSeconds() + n);
                            var o = new t.TimedBlock(i);
                            return (
                              (o.block = r),
                              (e.instance.id2TimedBlockMap[o.id] = o),
                              e.instance.addTimedBlock(o),
                              o.id
                            );
                          }),
                          (e.getTimedBlockById = function (t) {
                            return t in e.instance.id2TimedBlockMap
                              ? e.instance.id2TimedBlockMap[t]
                              : null;
                          }),
                          (e.ensureEventQueueIsRunning = function () {
                            (e.instance.keepRunning = !0),
                              e.instance.isRunning ||
                                ((e.instance.isRunning = !0),
                                e.scheduleTimer(
                                  e.ProcessEventsIntervalInSeconds,
                                  e.processEventQueue
                                ));
                          }),
                          (e.endSessionAndStopQueue = function () {
                            r.isInitialized() &&
                              (n.i("Ending session."),
                              e.stopEventQueue(),
                              r.isEnabled() &&
                                r.sessionIsStarted() &&
                                (i.addSessionEndEvent(),
                                (r.instance.sessionStart = 0)));
                          }),
                          (e.stopEventQueue = function () {
                            e.instance.keepRunning = !1;
                          }),
                          (e.ignoreTimer = function (t) {
                            t in e.instance.id2TimedBlockMap &&
                              (e.instance.id2TimedBlockMap[t].ignore = !0);
                          }),
                          (e.setEventProcessInterval = function (t) {
                            t > 0 && (e.ProcessEventsIntervalInSeconds = t);
                          }),
                          (e.prototype.addTimedBlock = function (e) {
                            this.blocks.enqueue(e.deadline.getTime(), e);
                          }),
                          (e.run = function () {
                            clearTimeout(e.runTimeoutId);
                            try {
                              for (var t; (t = e.getNextBlock()); )
                                if (!t.ignore)
                                  if (t.async) {
                                    if (!t.running) {
                                      (t.running = !0), t.block();
                                      break;
                                    }
                                  } else t.block();
                              return void (e.runTimeoutId = setTimeout(
                                e.run,
                                e.ThreadWaitTimeInMs
                              ));
                            } catch (e) {
                              n.e("Error on GA thread"), n.e(e.stack);
                            }
                          }),
                          (e.startThread = function () {
                            e.runTimeoutId = setTimeout(e.run, 0);
                          }),
                          (e.getNextBlock = function () {
                            var t = new Date();
                            return e.instance.blocks.hasItems() &&
                              e.instance.blocks.peek().deadline.getTime() <=
                                t.getTime()
                              ? e.instance.blocks.peek().async &&
                                e.instance.blocks.peek().running
                                ? e.instance.blocks.peek()
                                : e.instance.blocks.dequeue()
                              : null;
                          }),
                          (e.processEventQueue = function () {
                            i.processEvents("", !0),
                              e.instance.keepRunning
                                ? e.scheduleTimer(
                                    e.ProcessEventsIntervalInSeconds,
                                    e.processEventQueue
                                  )
                                : (e.instance.isRunning = !1);
                          }),
                          (e.instance = new e()),
                          (e.ThreadWaitTimeInMs = 1e3),
                          (e.ProcessEventsIntervalInSeconds = 8),
                          e
                        );
                      })()),
                      (t.GAThreading = o);
                  })(a || (a = {})),
                  (function (e) {
                    var t = e.threading.GAThreading,
                      r = e.logging.GALogger,
                      i = e.store.GAStore,
                      o = e.state.GAState,
                      a = e.http.GAHTTPApi,
                      s = e.device.GADevice,
                      u = e.validators.GAValidator,
                      c = e.http.EGAHTTPApiResponse,
                      d = e.utilities.GAUtilities,
                      l = e.events.GAEvents,
                      f = (function () {
                        function f() {}
                        return (
                          (f.getGlobalObject = function () {
                            return "undefined" != typeof globalThis
                              ? globalThis
                              : "undefined" != typeof self
                              ? self
                              : "undefined" != typeof window
                              ? window
                              : void 0 !== n.g
                              ? n.g
                              : void 0;
                          }),
                          (f.init = function () {
                            if (
                              (s.touch(),
                              (f.methodMap.configureAvailableCustomDimensions01 =
                                f.configureAvailableCustomDimensions01),
                              (f.methodMap.configureAvailableCustomDimensions02 =
                                f.configureAvailableCustomDimensions02),
                              (f.methodMap.configureAvailableCustomDimensions03 =
                                f.configureAvailableCustomDimensions03),
                              (f.methodMap.configureAvailableResourceCurrencies =
                                f.configureAvailableResourceCurrencies),
                              (f.methodMap.configureAvailableResourceItemTypes =
                                f.configureAvailableResourceItemTypes),
                              (f.methodMap.configureBuild = f.configureBuild),
                              (f.methodMap.configureSdkGameEngineVersion =
                                f.configureSdkGameEngineVersion),
                              (f.methodMap.configureGameEngineVersion =
                                f.configureGameEngineVersion),
                              (f.methodMap.configureUserId = f.configureUserId),
                              (f.methodMap.initialize = f.initialize),
                              (f.methodMap.addBusinessEvent =
                                f.addBusinessEvent),
                              (f.methodMap.addResourceEvent =
                                f.addResourceEvent),
                              (f.methodMap.addProgressionEvent =
                                f.addProgressionEvent),
                              (f.methodMap.addDesignEvent = f.addDesignEvent),
                              (f.methodMap.addErrorEvent = f.addErrorEvent),
                              (f.methodMap.addAdEvent = f.addAdEvent),
                              (f.methodMap.setEnabledInfoLog =
                                f.setEnabledInfoLog),
                              (f.methodMap.setEnabledVerboseLog =
                                f.setEnabledVerboseLog),
                              (f.methodMap.setEnabledManualSessionHandling =
                                f.setEnabledManualSessionHandling),
                              (f.methodMap.setEnabledEventSubmission =
                                f.setEnabledEventSubmission),
                              (f.methodMap.setCustomDimension01 =
                                f.setCustomDimension01),
                              (f.methodMap.setCustomDimension02 =
                                f.setCustomDimension02),
                              (f.methodMap.setCustomDimension03 =
                                f.setCustomDimension03),
                              (f.methodMap.setGlobalCustomEventFields =
                                f.setGlobalCustomEventFields),
                              (f.methodMap.setEventProcessInterval =
                                f.setEventProcessInterval),
                              (f.methodMap.startSession = f.startSession),
                              (f.methodMap.endSession = f.endSession),
                              (f.methodMap.onStop = f.onStop),
                              (f.methodMap.onResume = f.onResume),
                              (f.methodMap.addRemoteConfigsListener =
                                f.addRemoteConfigsListener),
                              (f.methodMap.removeRemoteConfigsListener =
                                f.removeRemoteConfigsListener),
                              (f.methodMap.getRemoteConfigsValueAsString =
                                f.getRemoteConfigsValueAsString),
                              (f.methodMap.isRemoteConfigsReady =
                                f.isRemoteConfigsReady),
                              (f.methodMap.getRemoteConfigsContentAsString =
                                f.getRemoteConfigsContentAsString),
                              (f.methodMap.addOnBeforeUnloadListener =
                                f.addOnBeforeUnloadListener),
                              (f.methodMap.removeOnBeforeUnloadListener =
                                f.removeOnBeforeUnloadListener),
                              void 0 !== f.getGlobalObject() &&
                                void 0 !== f.getGlobalObject().GameAnalytics &&
                                void 0 !== f.getGlobalObject().GameAnalytics.q)
                            ) {
                              var e = f.getGlobalObject().GameAnalytics.q;
                              for (var n in e) f.gaCommand.apply(null, e[n]);
                            }
                            window.addEventListener(
                              "beforeunload",
                              function (e) {
                                console.log("addEventListener unload"),
                                  (o.instance.isUnloading = !0),
                                  o.notifyBeforeUnloadListeners(),
                                  t.endSessionAndStopQueue(),
                                  (o.instance.isUnloading = !1);
                              }
                            );
                          }),
                          (f.gaCommand = function () {
                            for (var t = [], n = 0; n < arguments.length; n++)
                              t[n] = arguments[n];
                            t.length > 0 &&
                              t[0] in e.GameAnalytics.methodMap &&
                              (t.length > 1
                                ? e.GameAnalytics.methodMap[t[0]].apply(
                                    null,
                                    Array.prototype.slice.call(t, 1)
                                  )
                                : e.GameAnalytics.methodMap[t[0]]());
                          }),
                          (f.configureAvailableCustomDimensions01 = function (
                            e
                          ) {
                            void 0 === e && (e = []),
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(!0, !1)
                                  ? r.w(
                                      "Available custom dimensions must be set before SDK is initialized"
                                    )
                                  : o.setAvailableCustomDimensions01(e);
                              });
                          }),
                          (f.configureAvailableCustomDimensions02 = function (
                            e
                          ) {
                            void 0 === e && (e = []),
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(!0, !1)
                                  ? r.w(
                                      "Available custom dimensions must be set before SDK is initialized"
                                    )
                                  : o.setAvailableCustomDimensions02(e);
                              });
                          }),
                          (f.configureAvailableCustomDimensions03 = function (
                            e
                          ) {
                            void 0 === e && (e = []),
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(!0, !1)
                                  ? r.w(
                                      "Available custom dimensions must be set before SDK is initialized"
                                    )
                                  : o.setAvailableCustomDimensions03(e);
                              });
                          }),
                          (f.configureAvailableResourceCurrencies = function (
                            e
                          ) {
                            void 0 === e && (e = []),
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(!0, !1)
                                  ? r.w(
                                      "Available resource currencies must be set before SDK is initialized"
                                    )
                                  : o.setAvailableResourceCurrencies(e);
                              });
                          }),
                          (f.configureAvailableResourceItemTypes = function (
                            e
                          ) {
                            void 0 === e && (e = []),
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(!0, !1)
                                  ? r.w(
                                      "Available resource item types must be set before SDK is initialized"
                                    )
                                  : o.setAvailableResourceItemTypes(e);
                              });
                          }),
                          (f.configureBuild = function (e) {
                            void 0 === e && (e = ""),
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(!0, !1)
                                  ? r.w(
                                      "Build version must be set before SDK is initialized."
                                    )
                                  : u.validateBuild(e)
                                  ? o.setBuild(e)
                                  : r.i(
                                      "Validation fail - configure build: Cannot be null, empty or above 32 length. String: " +
                                        e
                                    );
                              });
                          }),
                          (f.configureSdkGameEngineVersion = function (e) {
                            void 0 === e && (e = ""),
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(!0, !1) ||
                                  (u.validateSdkWrapperVersion(e)
                                    ? (s.sdkGameEngineVersion = e)
                                    : r.i(
                                        "Validation fail - configure sdk version: Sdk version not supported. String: " +
                                          e
                                      ));
                              });
                          }),
                          (f.configureGameEngineVersion = function (e) {
                            void 0 === e && (e = ""),
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(!0, !1) ||
                                  (u.validateEngineVersion(e)
                                    ? (s.gameEngineVersion = e)
                                    : r.i(
                                        "Validation fail - configure game engine version: Game engine version not supported. String: " +
                                          e
                                      ));
                              });
                          }),
                          (f.configureUserId = function (e) {
                            void 0 === e && (e = ""),
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(!0, !1)
                                  ? r.w(
                                      "A custom user id must be set before SDK is initialized."
                                    )
                                  : u.validateUserId(e)
                                  ? o.setUserId(e)
                                  : r.i(
                                      "Validation fail - configure user_id: Cannot be null, empty or above 64 length. Will use default user_id method. Used string: " +
                                        e
                                    );
                              });
                          }),
                          (f.initialize = function (e, n) {
                            void 0 === e && (e = ""),
                              void 0 === n && (n = ""),
                              s.updateConnectionType();
                            var i = t.createTimedBlock();
                            (i.async = !0),
                              (f.initTimedBlockId = i.id),
                              (i.block = function () {
                                f.isSdkReady(!0, !1)
                                  ? r.w(
                                      "SDK already initialized. Can only be called once."
                                    )
                                  : u.validateKeys(e, n)
                                  ? (o.setKeys(e, n), f.internalInitialize())
                                  : r.w(
                                      "SDK failed initialize. Game key or secret key is invalid. Can only contain characters A-z 0-9, gameKey is 32 length, gameSecret is 40 length. Failed keys - gameKey: " +
                                        e +
                                        ", secretKey: " +
                                        n
                                    );
                              }),
                              t.performTimedBlockOnGAThread(i);
                          }),
                          (f.addBusinessEvent = function (e, n, r, i, a, u, c) {
                            if (
                              (void 0 === e && (e = ""),
                              void 0 === n && (n = 0),
                              void 0 === r && (r = ""),
                              void 0 === i && (i = ""),
                              void 0 === a && (a = ""),
                              void 0 === u && (u = {}),
                              void 0 === c && (c = !1),
                              s.updateConnectionType(),
                              o.instance.isUnloading)
                            ) {
                              if (
                                !f.isSdkReady(
                                  !0,
                                  !0,
                                  "Could not add business event"
                                )
                              )
                                return;
                              l.addBusinessEvent(e, n, r, i, a, u, c);
                            } else
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(
                                  !0,
                                  !0,
                                  "Could not add business event"
                                ) && l.addBusinessEvent(e, n, r, i, a, u, c);
                              });
                          }),
                          (f.addResourceEvent = function (n, r, i, a, u, c, d) {
                            if (
                              (void 0 === n &&
                                (n = e.EGAResourceFlowType.Undefined),
                              void 0 === r && (r = ""),
                              void 0 === i && (i = 0),
                              void 0 === a && (a = ""),
                              void 0 === u && (u = ""),
                              void 0 === c && (c = {}),
                              void 0 === d && (d = !1),
                              s.updateConnectionType(),
                              o.instance.isUnloading)
                            ) {
                              if (
                                !f.isSdkReady(
                                  !0,
                                  !0,
                                  "Could not add resource event"
                                )
                              )
                                return;
                              l.addResourceEvent(n, r, i, a, u, c, d);
                            } else
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(
                                  !0,
                                  !0,
                                  "Could not add resource event"
                                ) && l.addResourceEvent(n, r, i, a, u, c, d);
                              });
                          }),
                          (f.addProgressionEvent = function (
                            n,
                            r,
                            i,
                            a,
                            u,
                            c,
                            d
                          ) {
                            if (
                              (void 0 === n &&
                                (n = e.EGAProgressionStatus.Undefined),
                              void 0 === r && (r = ""),
                              void 0 === i && (i = ""),
                              void 0 === a && (a = ""),
                              void 0 === c && (c = {}),
                              void 0 === d && (d = !1),
                              s.updateConnectionType(),
                              o.instance.isUnloading)
                            ) {
                              if (
                                !f.isSdkReady(
                                  !0,
                                  !0,
                                  "Could not add progression event"
                                )
                              )
                                return;
                              var v = "number" == typeof u;
                              l.addProgressionEvent(
                                n,
                                r,
                                i,
                                a,
                                v ? u : 0,
                                v,
                                c,
                                d
                              );
                            } else
                              t.performTaskOnGAThread(function () {
                                if (
                                  f.isSdkReady(
                                    !0,
                                    !0,
                                    "Could not add progression event"
                                  )
                                ) {
                                  var e = "number" == typeof u;
                                  l.addProgressionEvent(
                                    n,
                                    r,
                                    i,
                                    a,
                                    e ? u : 0,
                                    e,
                                    c,
                                    d
                                  );
                                }
                              });
                          }),
                          (f.addDesignEvent = function (e, n, r, i) {
                            if (
                              (void 0 === r && (r = {}),
                              void 0 === i && (i = !1),
                              s.updateConnectionType(),
                              o.instance.isUnloading)
                            ) {
                              if (
                                !f.isSdkReady(
                                  !0,
                                  !0,
                                  "Could not add design event"
                                )
                              )
                                return;
                              var a = "number" == typeof n;
                              l.addDesignEvent(e, a ? n : 0, a, r, i);
                            } else
                              t.performTaskOnGAThread(function () {
                                if (
                                  f.isSdkReady(
                                    !0,
                                    !0,
                                    "Could not add design event"
                                  )
                                ) {
                                  var t = "number" == typeof n;
                                  l.addDesignEvent(e, t ? n : 0, t, r, i);
                                }
                              });
                          }),
                          (f.addErrorEvent = function (n, r, i, a) {
                            if (
                              (void 0 === n &&
                                (n = e.EGAErrorSeverity.Undefined),
                              void 0 === r && (r = ""),
                              void 0 === i && (i = {}),
                              void 0 === a && (a = !1),
                              s.updateConnectionType(),
                              o.instance.isUnloading)
                            ) {
                              if (
                                !f.isSdkReady(
                                  !0,
                                  !0,
                                  "Could not add error event"
                                )
                              )
                                return;
                              l.addErrorEvent(n, r, i, a);
                            } else
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(
                                  !0,
                                  !0,
                                  "Could not add error event"
                                ) && l.addErrorEvent(n, r, i, a);
                              });
                          }),
                          (f.addAdEventWithNoAdReason = function (
                            n,
                            r,
                            i,
                            a,
                            u,
                            c,
                            d
                          ) {
                            if (
                              (void 0 === n && (n = e.EGAAdAction.Undefined),
                              void 0 === r && (r = e.EGAAdType.Undefined),
                              void 0 === i && (i = ""),
                              void 0 === a && (a = ""),
                              void 0 === u && (u = e.EGAAdError.Undefined),
                              void 0 === c && (c = {}),
                              void 0 === d && (d = !1),
                              s.updateConnectionType(),
                              o.instance.isUnloading)
                            ) {
                              if (
                                !f.isSdkReady(!0, !0, "Could not add ad event")
                              )
                                return;
                              l.addAdEvent(n, r, i, a, u, 0, !1, c, d);
                            } else
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(
                                  !0,
                                  !0,
                                  "Could not add ad event"
                                ) && l.addAdEvent(n, r, i, a, u, 0, !1, c, d);
                              });
                          }),
                          (f.addAdEventWithDuration = function (
                            n,
                            r,
                            i,
                            a,
                            u,
                            c,
                            d
                          ) {
                            if (
                              (void 0 === n && (n = e.EGAAdAction.Undefined),
                              void 0 === r && (r = e.EGAAdType.Undefined),
                              void 0 === i && (i = ""),
                              void 0 === a && (a = ""),
                              void 0 === u && (u = 0),
                              void 0 === c && (c = {}),
                              void 0 === d && (d = !1),
                              s.updateConnectionType(),
                              o.instance.isUnloading)
                            ) {
                              if (
                                !f.isSdkReady(!0, !0, "Could not add ad event")
                              )
                                return;
                              l.addAdEvent(
                                n,
                                r,
                                i,
                                a,
                                e.EGAAdError.Undefined,
                                u,
                                !0,
                                c,
                                d
                              );
                            } else
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(
                                  !0,
                                  !0,
                                  "Could not add ad event"
                                ) &&
                                  l.addAdEvent(
                                    n,
                                    r,
                                    i,
                                    a,
                                    e.EGAAdError.Undefined,
                                    u,
                                    !0,
                                    c,
                                    d
                                  );
                              });
                          }),
                          (f.addAdEvent = function (n, r, i, a, u, c) {
                            if (
                              (void 0 === n && (n = e.EGAAdAction.Undefined),
                              void 0 === r && (r = e.EGAAdType.Undefined),
                              void 0 === i && (i = ""),
                              void 0 === a && (a = ""),
                              void 0 === u && (u = {}),
                              void 0 === c && (c = !1),
                              s.updateConnectionType(),
                              o.instance.isUnloading)
                            ) {
                              if (
                                !f.isSdkReady(!0, !0, "Could not add ad event")
                              )
                                return;
                              l.addAdEvent(
                                n,
                                r,
                                i,
                                a,
                                e.EGAAdError.Undefined,
                                0,
                                !1,
                                u,
                                c
                              );
                            } else
                              t.performTaskOnGAThread(function () {
                                f.isSdkReady(
                                  !0,
                                  !0,
                                  "Could not add ad event"
                                ) &&
                                  l.addAdEvent(
                                    n,
                                    r,
                                    i,
                                    a,
                                    e.EGAAdError.Undefined,
                                    0,
                                    !1,
                                    u,
                                    c
                                  );
                              });
                          }),
                          (f.setEnabledInfoLog = function (e) {
                            void 0 === e && (e = !1),
                              t.performTaskOnGAThread(function () {
                                e
                                  ? (r.setInfoLog(e),
                                    r.i("Info logging enabled"))
                                  : (r.i("Info logging disabled"),
                                    r.setInfoLog(e));
                              });
                          }),
                          (f.setEnabledVerboseLog = function (e) {
                            void 0 === e && (e = !1),
                              t.performTaskOnGAThread(function () {
                                e
                                  ? (r.setVerboseLog(e),
                                    r.i("Verbose logging enabled"))
                                  : (r.i("Verbose logging disabled"),
                                    r.setVerboseLog(e));
                              });
                          }),
                          (f.setEnabledManualSessionHandling = function (e) {
                            void 0 === e && (e = !1),
                              t.performTaskOnGAThread(function () {
                                o.setManualSessionHandling(e);
                              });
                          }),
                          (f.setEnabledEventSubmission = function (e) {
                            void 0 === e && (e = !1),
                              t.performTaskOnGAThread(function () {
                                e
                                  ? (o.setEnabledEventSubmission(e),
                                    r.i("Event submission enabled"))
                                  : (r.i("Event submission disabled"),
                                    o.setEnabledEventSubmission(e));
                              });
                          }),
                          (f.setCustomDimension01 = function (e) {
                            void 0 === e && (e = ""),
                              t.performTaskOnGAThread(function () {
                                u.validateDimension01(
                                  e,
                                  o.getAvailableCustomDimensions01()
                                )
                                  ? o.setCustomDimension01(e)
                                  : r.w(
                                      "Could not set custom01 dimension value to '" +
                                        e +
                                        "'. Value not found in available custom01 dimension values"
                                    );
                              });
                          }),
                          (f.setCustomDimension02 = function (e) {
                            void 0 === e && (e = ""),
                              t.performTaskOnGAThread(function () {
                                u.validateDimension02(
                                  e,
                                  o.getAvailableCustomDimensions02()
                                )
                                  ? o.setCustomDimension02(e)
                                  : r.w(
                                      "Could not set custom02 dimension value to '" +
                                        e +
                                        "'. Value not found in available custom02 dimension values"
                                    );
                              });
                          }),
                          (f.setCustomDimension03 = function (e) {
                            void 0 === e && (e = ""),
                              t.performTaskOnGAThread(function () {
                                u.validateDimension03(
                                  e,
                                  o.getAvailableCustomDimensions03()
                                )
                                  ? o.setCustomDimension03(e)
                                  : r.w(
                                      "Could not set custom03 dimension value to '" +
                                        e +
                                        "'. Value not found in available custom03 dimension values"
                                    );
                              });
                          }),
                          (f.setGlobalCustomEventFields = function (e) {
                            void 0 === e && (e = {}),
                              t.performTaskOnGAThread(function () {
                                r.i(
                                  "Set global custom event fields: " +
                                    JSON.stringify(e)
                                ),
                                  (o.instance.currentGlobalCustomEventFields =
                                    e);
                              });
                          }),
                          (f.setEventProcessInterval = function (e) {
                            t.performTaskOnGAThread(function () {
                              t.setEventProcessInterval(e);
                            });
                          }),
                          (f.startSession = function () {
                            if (o.isInitialized()) {
                              var e = t.createTimedBlock();
                              (e.async = !0),
                                (f.initTimedBlockId = e.id),
                                (e.block = function () {
                                  o.isEnabled() &&
                                    o.sessionIsStarted() &&
                                    t.endSessionAndStopQueue(),
                                    f.resumeSessionAndStartQueue();
                                }),
                                t.performTimedBlockOnGAThread(e);
                            }
                          }),
                          (f.endSession = function () {
                            f.onStop();
                          }),
                          (f.onStop = function () {
                            t.performTaskOnGAThread(function () {
                              try {
                                t.endSessionAndStopQueue();
                              } catch (e) {}
                            });
                          }),
                          (f.onResume = function () {
                            var e = t.createTimedBlock();
                            (e.async = !0),
                              (f.initTimedBlockId = e.id),
                              (e.block = function () {
                                f.resumeSessionAndStartQueue();
                              }),
                              t.performTimedBlockOnGAThread(e);
                          }),
                          (f.getRemoteConfigsValueAsString = function (e, t) {
                            return (
                              void 0 === t && (t = null),
                              o.getConfigurationStringValue(e, t)
                            );
                          }),
                          (f.isRemoteConfigsReady = function () {
                            return o.isRemoteConfigsReady();
                          }),
                          (f.addRemoteConfigsListener = function (e) {
                            o.addRemoteConfigsListener(e);
                          }),
                          (f.removeRemoteConfigsListener = function (e) {
                            o.removeRemoteConfigsListener(e);
                          }),
                          (f.getRemoteConfigsContentAsString = function () {
                            return o.getRemoteConfigsContentAsString();
                          }),
                          (f.getABTestingId = function () {
                            return o.getABTestingId();
                          }),
                          (f.getABTestingVariantId = function () {
                            return o.getABTestingVariantId();
                          }),
                          (f.addOnBeforeUnloadListener = function (e) {
                            o.addOnBeforeUnloadListener(e);
                          }),
                          (f.removeOnBeforeUnloadListener = function (e) {
                            o.removeOnBeforeUnloadListener(e);
                          }),
                          (f.internalInitialize = function () {
                            o.ensurePersistedStates(),
                              i.setItem(
                                o.getGameKey(),
                                o.DefaultUserIdKey,
                                o.getDefaultId()
                              ),
                              o.setInitialized(!0),
                              f.newSession(),
                              o.isEnabled() && t.ensureEventQueueIsRunning();
                          }),
                          (f.newSession = function () {
                            r.i("Starting a new session."),
                              o.validateAndFixCurrentDimensions(),
                              a.instance.requestInit(
                                o.instance.configsHash,
                                f.startNewSessionCallback
                              );
                          }),
                          (f.startNewSessionCallback = function (e, n) {
                            if ((e !== c.Ok && e !== c.Created) || !n)
                              e == c.Unauthorized
                                ? (r.w("Initialize SDK failed - Unauthorized"),
                                  (o.instance.initAuthorized = !1))
                                : (e === c.NoResponse || e === c.RequestTimeout
                                    ? r.i(
                                        "Init call (session start) failed - no response. Could be offline or timeout."
                                      )
                                    : e === c.BadResponse ||
                                      e === c.JsonEncodeFailed ||
                                      e === c.JsonDecodeFailed
                                    ? r.i(
                                        "Init call (session start) failed - bad response. Could be bad response from proxy or GA servers."
                                      )
                                    : (e !== c.BadRequest &&
                                        e !== c.UnknownResponseCode) ||
                                      r.i(
                                        "Init call (session start) failed - bad request or unknown response."
                                      ),
                                  null == o.instance.sdkConfig
                                    ? null != o.instance.sdkConfigCached
                                      ? (r.i(
                                          "Init call (session start) failed - using cached init values."
                                        ),
                                        (o.instance.sdkConfig =
                                          o.instance.sdkConfigCached))
                                      : (r.i(
                                          "Init call (session start) failed - using default init values."
                                        ),
                                        (o.instance.sdkConfig =
                                          o.instance.sdkConfigDefault))
                                    : r.i(
                                        "Init call (session start) failed - using cached init values."
                                      ),
                                  (o.instance.initAuthorized = !0));
                            else {
                              var a = 0;
                              if (n.server_ts) {
                                var s = n.server_ts;
                                a = o.calculateServerTimeOffset(s);
                              }
                              if (((n.time_offset = a), e != c.Created)) {
                                var u = o.getSdkConfig();
                                u.configs && (n.configs = u.configs),
                                  u.configs_hash &&
                                    (n.configs_hash = u.configs_hash),
                                  u.ab_id && (n.ab_id = u.ab_id),
                                  u.ab_variant_id &&
                                    (n.ab_variant_id = u.ab_variant_id);
                              }
                              (o.instance.configsHash = n.configs_hash
                                ? n.configs_hash
                                : ""),
                                (o.instance.abId = n.ab_id ? n.ab_id : ""),
                                (o.instance.abVariantId = n.ab_variant_id
                                  ? n.ab_variant_id
                                  : ""),
                                i.setItem(
                                  o.getGameKey(),
                                  o.SdkConfigCachedKey,
                                  d.encode64(JSON.stringify(n))
                                ),
                                (o.instance.sdkConfigCached = n),
                                (o.instance.sdkConfig = n),
                                (o.instance.initAuthorized = !0);
                            }
                            if (
                              ((o.instance.clientServerTimeOffset =
                                o.getSdkConfig().time_offset
                                  ? o.getSdkConfig().time_offset
                                  : 0),
                              o.populateConfigurations(o.getSdkConfig()),
                              !o.isEnabled())
                            )
                              return (
                                r.w(
                                  "Could not start session: SDK is disabled."
                                ),
                                void t.stopEventQueue()
                              );
                            t.ensureEventQueueIsRunning();
                            var v = d.createGuid();
                            (o.instance.sessionId = v),
                              (o.instance.sessionStart =
                                o.getClientTsAdjusted()),
                              l.addSessionStartEvent();
                            var g = t.getTimedBlockById(f.initTimedBlockId);
                            null != g && (g.running = !1),
                              (f.initTimedBlockId = -1);
                          }),
                          (f.resumeSessionAndStartQueue = function () {
                            o.isInitialized() &&
                              (r.i("Resuming session."),
                              o.sessionIsStarted() || f.newSession());
                          }),
                          (f.isSdkReady = function (e, t, n) {
                            return (
                              void 0 === t && (t = !0),
                              void 0 === n && (n = ""),
                              n && (n += ": "),
                              e && !o.isInitialized()
                                ? (t && r.w(n + "SDK is not initialized"), !1)
                                : e && !o.isEnabled()
                                ? (t && r.w(n + "SDK is disabled"), !1)
                                : !(
                                    e &&
                                    !o.sessionIsStarted() &&
                                    (t &&
                                      r.w(n + "Session has not started yet"),
                                    1)
                                  )
                            );
                          }),
                          (f.initTimedBlockId = -1),
                          (f.methodMap = {}),
                          f
                        );
                      })();
                    e.GameAnalytics = f;
                  })(a || (a = {})),
                  a.GameAnalytics.init(),
                  a.GameAnalytics.gaCommand,
                  (e.exports = a);
              },
            },
            n = {};
          function r(t) {
            var i = n[t];
            if (void 0 !== i) return i.exports;
            var o = (n[t] = { exports: {} });
            return e[t](o, o.exports, r), o.exports;
          }
          r.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
              return this || new Function("return this")();
            } catch (e) {
              if ("object" == typeof window) return window;
            }
          })();
          var i = r(579),
            o = t;
          for (var a in i) o[a] = i[a];
          i.__esModule && Object.defineProperty(o, "__esModule", { value: !0 });
        })();
      },
      5666: (e) => {
        var t = (function (e) {
          "use strict";
          var t,
            n = Object.prototype,
            r = n.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            o = i.iterator || "@@iterator",
            a = i.asyncIterator || "@@asyncIterator",
            s = i.toStringTag || "@@toStringTag";
          function u(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            u({}, "");
          } catch (e) {
            u = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function c(e, t, n, r) {
            var i = t && t.prototype instanceof m ? t : m,
              o = Object.create(i.prototype),
              a = new k(r || []);
            return (
              (o._invoke = (function (e, t, n) {
                var r = l;
                return function (i, o) {
                  if (r === v) throw new Error("Generator is already running");
                  if (r === g) {
                    if ("throw" === i) throw o;
                    return P();
                  }
                  for (n.method = i, n.arg = o; ; ) {
                    var a = n.delegate;
                    if (a) {
                      var s = C(a, n);
                      if (s) {
                        if (s === p) continue;
                        return s;
                      }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg;
                    else if ("throw" === n.method) {
                      if (r === l) throw ((r = g), n.arg);
                      n.dispatchException(n.arg);
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = v;
                    var u = d(e, t, n);
                    if ("normal" === u.type) {
                      if (((r = n.done ? g : f), u.arg === p)) continue;
                      return { value: u.arg, done: n.done };
                    }
                    "throw" === u.type &&
                      ((r = g), (n.method = "throw"), (n.arg = u.arg));
                  }
                };
              })(e, n, a)),
              o
            );
          }
          function d(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          e.wrap = c;
          var l = "suspendedStart",
            f = "suspendedYield",
            v = "executing",
            g = "completed",
            p = {};
          function m() {}
          function h() {}
          function y() {}
          var E = {};
          u(E, o, function () {
            return this;
          });
          var S = Object.getPrototypeOf,
            A = S && S(S(G([])));
          A && A !== n && r.call(A, o) && (E = A);
          var b = (y.prototype = m.prototype = Object.create(E));
          function _(e) {
            ["next", "throw", "return"].forEach(function (t) {
              u(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function w(e, t) {
            function n(i, o, a, s) {
              var u = d(e[i], e, o);
              if ("throw" !== u.type) {
                var c = u.arg,
                  l = c.value;
                return l && "object" == typeof l && r.call(l, "__await")
                  ? t.resolve(l.__await).then(
                      function (e) {
                        n("next", e, a, s);
                      },
                      function (e) {
                        n("throw", e, a, s);
                      }
                    )
                  : t.resolve(l).then(
                      function (e) {
                        (c.value = e), a(c);
                      },
                      function (e) {
                        return n("throw", e, a, s);
                      }
                    );
              }
              s(u.arg);
            }
            var i;
            this._invoke = function (e, r) {
              function o() {
                return new t(function (t, i) {
                  n(e, r, t, i);
                });
              }
              return (i = i ? i.then(o, o) : o());
            };
          }
          function C(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
              if (((n.delegate = null), "throw" === n.method)) {
                if (
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  C(e, n),
                  "throw" === n.method)
                )
                  return p;
                (n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return p;
            }
            var i = d(r, e.iterator, n.arg);
            if ("throw" === i.type)
              return (
                (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), p
              );
            var o = i.arg;
            return o
              ? o.done
                ? ((n[e.resultName] = o.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  p)
                : o
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                p);
          }
          function T(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function I(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function k(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(T, this),
              this.reset(!0);
          }
          function G(e) {
            if (e) {
              var n = e[o];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var i = -1,
                  a = function n() {
                    for (; ++i < e.length; )
                      if (r.call(e, i))
                        return (n.value = e[i]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (a.next = a);
              }
            }
            return { next: P };
          }
          function P() {
            return { value: t, done: !0 };
          }
          return (
            (h.prototype = y),
            u(b, "constructor", y),
            u(y, "constructor", h),
            (h.displayName = u(y, s, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === h || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, y)
                  : ((e.__proto__ = y), u(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(b)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            _(w.prototype),
            u(w.prototype, a, function () {
              return this;
            }),
            (e.AsyncIterator = w),
            (e.async = function (t, n, r, i, o) {
              void 0 === o && (o = Promise);
              var a = new w(c(t, n, r, i), o);
              return e.isGeneratorFunction(n)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next();
                  });
            }),
            _(b),
            u(b, s, "Generator"),
            u(b, o, function () {
              return this;
            }),
            u(b, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in e) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (e.values = G),
            (k.prototype = {
              constructor: k,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(I),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function i(r, i) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (n.next = r),
                    i && ((n.method = "next"), (n.arg = t)),
                    !!i
                  );
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                  var a = this.tryEntries[o],
                    s = a.completion;
                  if ("root" === a.tryLoc) return i("end");
                  if (a.tryLoc <= this.prev) {
                    var u = r.call(a, "catchLoc"),
                      c = r.call(a, "finallyLoc");
                    if (u && c) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n];
                  if (
                    i.tryLoc <= this.prev &&
                    r.call(i, "finallyLoc") &&
                    this.prev < i.finallyLoc
                  ) {
                    var o = i;
                    break;
                  }
                }
                o &&
                  ("break" === e || "continue" === e) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  o
                    ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                    : this.complete(a)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  p
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), I(n), p;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var i = r.arg;
                      I(n);
                    }
                    return i;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, r) {
                return (
                  (this.delegate = {
                    iterator: G(e),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  p
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (e) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function("r", "regeneratorRuntime = r")(t);
        }
      },
    }),
    (t = {}),
    (function n(r) {
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var o = (t[r] = { exports: {} });
      return e[r](o, o.exports, n), o.exports;
    })(7130)
  );
  var e, t;
});
