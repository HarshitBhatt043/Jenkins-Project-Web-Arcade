!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("SWAGAPI", [], t)
    : "object" == typeof exports
    ? (exports.SWAGAPI = t())
    : (e.SWAGAPI = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function n(a) {
      if (t[a]) return t[a].exports;
      var r = (t[a] = { i: a, l: !1, exports: {} });
      return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (
          (n.r(a),
          Object.defineProperty(a, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            n.d(
              a,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return a;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 11))
    );
  })([
    /*!********************************************!*\
!*** ./node_modules/handlebars/runtime.js ***!
\********************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      e.exports = n(/*!./dist/cjs/handlebars.runtime*/ 17).default;
    },
    /*!**************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/utils.js ***!
\**************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      function a(e) {
        return (a =
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
              })(e);
      }
      (t.__esModule = !0),
        (t.extend = l),
        (t.indexOf = function (e, t) {
          for (var n = 0, a = e.length; n < a; n++) if (e[n] === t) return n;
          return -1;
        }),
        (t.escapeExpression = function (e) {
          if ("string" != typeof e) {
            if (e && e.toHTML) return e.toHTML();
            if (null == e) return "";
            if (!e) return e + "";
            e = "" + e;
          }
          return i.test(e) ? e.replace(o, s) : e;
        }),
        (t.isEmpty = function (e) {
          return (!e && 0 !== e) || !(!d(e) || 0 !== e.length);
        }),
        (t.createFrame = function (e) {
          var t = l({}, e);
          return (t._parent = e), t;
        }),
        (t.blockParams = function (e, t) {
          return (e.path = t), e;
        }),
        (t.appendContextPath = function (e, t) {
          return (e ? e + "." : "") + t;
        });
      var r = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;",
          "=": "&#x3D;",
        },
        o = /[&<>"'`=]/g,
        i = /[&<>"'`=]/;
      function s(e) {
        return r[e];
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++)
          for (var n in arguments[t])
            Object.prototype.hasOwnProperty.call(arguments[t], n) &&
              (e[n] = arguments[t][n]);
        return e;
      }
      var u = Object.prototype.toString;
      t.toString = u;
      var c = function (e) {
        return "function" == typeof e;
      };
      c(/x/) &&
        (t.isFunction = c =
          function (e) {
            return "function" == typeof e && "[object Function]" === u.call(e);
          }),
        (t.isFunction = c);
      var d =
        Array.isArray ||
        function (e) {
          return !(!e || "object" !== a(e)) && "[object Array]" === u.call(e);
        };
      t.isArray = d;
    },
    /*!***********************!*\
!*** ./src/config.js ***!
\***********************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t
    ) {
      e.exports = {
        version: "2.0.7",
        themes: {
          shockwave: { apiRoot: "https://swag-services.shockwave.com" },
          addictinggames: {
            apiRoot: "https://swag-services.addictinggames.com",
          },
        },
        providers: {
          default: {
            root: "https://www.addictinggames.com",
            current: "/ag-auth/current",
            login: "/ag-auth/login",
            logout: "/ag-auth/logout",
            create: "/ag-auth/create",
          },
          shockwave: {
            root: "https://www.shockwave.com",
            current: "/shockwave-auth/current",
            login: "/shockwave-auth/login",
            logout: "/shockwave-auth/logout",
            create: "/shockwave-auth/create",
          },
        },
        resourceRoot: "https://swagapi.shockwave.com/dist/",
        events: {
          API_COMMUNICATION_ERROR: "API_COMMUNICATION_ERROR",
          SESSION_READY: "SESSION_READY",
          DIALOG_CLOSED: "DIALOG_CLOSED",
          INVALID_DIALOG_TYPE: "INVALID_DIALOG_TYPE",
          ERROR: "ERROR",
          INVALID_MESSAGE: "INVALID MESSAGE",
        },
      };
    },
    /*!************************!*\
!*** ./src/session.js ***!
\************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t
    ) {
      e.exports = {
        api_key: null,
        uid: null,
        entity: null,
        wrapper: null,
        theme: null,
        debug: !1,
        provider: null,
      };
    },
    /*!**********************!*\
!*** ./src/utils.js ***!
\**********************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!session*/ 3),
        r = [
          { name: "phone", value: 400, class: "media-phone" },
          { name: "phablet", value: 800, class: "media-phablet" },
          { name: "tablet", value: 1200, class: "media-tablet" },
          { name: "desktop", value: 1400, class: "media-desktop", default: !0 },
        ],
        o = {
          getBreakpoint: function () {
            var e = r.find(function (e) {
              return e.default;
            });
            return (
              r.find(function (e) {
                return a.wrapper.clientWidth <= e.value;
              }) || e
            );
          },
          applyBreakpointClass: function () {
            var e = o.getBreakpoint();
            e && e.class
              ? (a.wrapper.dataset.breakpoint = e.class)
              : (a.wrapper.dataset.breakpoint = "");
          },
          checkBreakpoint: function (e) {
            var t = o.getBreakpoint();
            return t && t.name === e;
          },
          formatParam: function (e) {
            return Array.isArray(e)
              ? "[" +
                  _.map(e, function (e) {
                    return '"' + e + '"';
                  }).join("") +
                  "]"
              : e;
          },
          toParam: function (e) {
            return e
              ? e
                  .toLowerCase()
                  .replace(/[^a-z0-9-\s]/g, "")
                  .replace(/[\s-]+/g, "-")
              : "";
          },
          parseUrlParams: function () {
            var e = {};
            return (
              window.location.href.replace(
                /[?&]+([^=&]+)=([^&]*)/gi,
                function (t, n, a) {
                  e[n] = a;
                }
              ),
              e
            );
          },
          debug: function (e, t) {
            a.debug && (console.log("SWAG API :::: " + e), t && console.log(t));
          },
        };
      e.exports = o;
    },
    /*!******************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/exception.js ***!
\******************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      t.__esModule = !0;
      var a = [
        "description",
        "fileName",
        "lineNumber",
        "message",
        "name",
        "number",
        "stack",
      ];
      function r(e, t) {
        var n = t && t.loc,
          o = void 0,
          i = void 0;
        n && (e += " - " + (o = n.start.line) + ":" + (i = n.start.column));
        for (
          var s = Error.prototype.constructor.call(this, e), l = 0;
          l < a.length;
          l++
        )
          this[a[l]] = s[a[l]];
        Error.captureStackTrace && Error.captureStackTrace(this, r);
        try {
          n &&
            ((this.lineNumber = o),
            Object.defineProperty
              ? Object.defineProperty(this, "column", {
                  value: i,
                  enumerable: !0,
                })
              : (this.column = i));
        } catch (e) {}
      }
      (r.prototype = new Error()), (t.default = r), (e.exports = t.default);
    },
    /*!*************************************************!*\
!*** ./node_modules/component-emitter/index.js ***!
\*************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      function a(e) {
        if (e)
          return (function (e) {
            for (var t in a.prototype) e[t] = a.prototype[t];
            return e;
          })(e);
      }
      (e.exports = a),
        (a.prototype.on = a.prototype.addEventListener =
          function (e, t) {
            return (
              (this._callbacks = this._callbacks || {}),
              (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(
                t
              ),
              this
            );
          }),
        (a.prototype.once = function (e, t) {
          function n() {
            this.off(e, n), t.apply(this, arguments);
          }
          return (n.fn = t), this.on(e, n), this;
        }),
        (a.prototype.off =
          a.prototype.removeListener =
          a.prototype.removeAllListeners =
          a.prototype.removeEventListener =
            function (e, t) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var n,
                a = this._callbacks["$" + e];
              if (!a) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + e], this;
              for (var r = 0; r < a.length; r++)
                if ((n = a[r]) === t || n.fn === t) {
                  a.splice(r, 1);
                  break;
                }
              return this;
            }),
        (a.prototype.emit = function (e) {
          this._callbacks = this._callbacks || {};
          var t = [].slice.call(arguments, 1),
            n = this._callbacks["$" + e];
          if (n)
            for (var a = 0, r = (n = n.slice(0)).length; a < r; ++a)
              n[a].apply(this, t);
          return this;
        }),
        (a.prototype.listeners = function (e) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + e] || []
          );
        }),
        (a.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length;
        });
    },
    /*!****************************************************!*\
!*** ./node_modules/element-resize-event/index.js ***!
\****************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t
    ) {
      ((t = function (e, t) {
        var n,
          a,
          r,
          o = this,
          i = o.document,
          s = i.attachEvent;
        "undefined" != typeof navigator &&
          (n =
            navigator.userAgent.match(/Trident/) ||
            navigator.userAgent.match(/Edge/)),
          (r =
            o.requestAnimationFrame ||
            o.mozRequestAnimationFrame ||
            o.webkitRequestAnimationFrame ||
            function (e) {
              return o.setTimeout(e, 20);
            }),
          (a = function (e) {
            return r(e);
          });
        var l,
          u =
            ((l =
              o.cancelAnimationFrame ||
              o.mozCancelAnimationFrame ||
              o.webkitCancelAnimationFrame ||
              o.clearTimeout),
            function (e) {
              return l(e);
            });
        function c(e) {
          var t = e.target || e.srcElement;
          t.__resizeRAF__ && u(t.__resizeRAF__),
            (t.__resizeRAF__ = a(function () {
              var n = t.__resizeTrigger__;
              void 0 !== n &&
                n.__resizeListeners__.forEach(function (t) {
                  t.call(n, e);
                });
            }));
        }
        if (!e.__resizeListeners__)
          if (((e.__resizeListeners__ = []), s))
            (e.__resizeTrigger__ = e), e.attachEvent("onresize", c);
          else {
            "static" === getComputedStyle(e).position &&
              (e.style.position = "relative");
            var d = (e.__resizeTrigger__ = i.createElement("object"));
            d.setAttribute(
              "style",
              "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;"
            ),
              d.setAttribute("class", "resize-sensor"),
              (d.__resizeElement__ = e),
              (d.onload = function () {
                (this.contentDocument.defaultView.__resizeTrigger__ =
                  this.__resizeElement__),
                  this.contentDocument.defaultView.addEventListener(
                    "resize",
                    c
                  );
              }),
              (d.type = "text/html"),
              n && e.appendChild(d),
              (d.data = "about:blank"),
              n || e.appendChild(d);
          }
        e.__resizeListeners__.push(t);
      }).unbind = function (e, t) {
        var n = document.attachEvent;
        e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1),
          e.__resizeListeners__.length ||
            (n
              ? e.detachEvent("onresize", resizeListener)
              : (e.__resizeTrigger__.contentDocument.defaultView.removeEventListener(
                  "resize",
                  resizeListener
                ),
                (e.__resizeTrigger__ = !e.removeChild(e.__resizeTrigger__))));
      }),
        (e.exports =
          "undefined" == typeof window
            ? t
            : t.bind(window)); /*!*********************!*\
!*** ./src/data.js ***!
\*********************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/
    },
    function (e, t, n) {
      "use strict";
      var a = n(/*!component-emitter*/ 6),
        r = n(/*!config*/ 2),
        o = (o = n(/*!utils*/ 4)),
        i = n(/*!session*/ 3),
        s = {
          events: {
            DATA_EVENT: "DATA_EVENT",
            DATA_ERROR: "DATA_ERROR",
            USER_LOGIN: "USER_LOGIN",
            USER_LOGOUT: "USER_LOGOUT",
          },
          apiMethods: {
            getEntity: "/v1/user",
            getSubscriber: "/v1/subscriber",
            getScoreCategories: "/v1/score/categories",
            getDays: "/v1/days",
            getScores: "/v1/scores",
            getScoresContext: "/v1/scores/context",
            hasDailyScore: "/v1/scores/hasDailyScore",
            getAchievementCategories: "/v1/achievement/categories",
            getUserAchievements: "/v1/achievement/user",
            getUserDatastore: "/v1/datastore/user",
            getCurrentDay: "/v1/currentday",
            getTokenBalance: "/v1/tokenbalance",
          },
          buildUrlParamString: function (e) {
            return e && e instanceof Object
              ? "?" +
                  Object.keys(e)
                    .map(function (t) {
                      return t + "=" + o.formatParam(e[t]);
                    })
                    .join("&")
              : "";
          },
          getAPIData: function (e) {
            var t = this;
            return new Promise(function (n, a) {
              var o = new XMLHttpRequest(),
                l = e.apiRoot || i.apiRoot,
                u = s.buildUrlParamString(e.params);
              o.open("GET", encodeURI(l + e.method + u)),
                (o.withCredentials = !0),
                (o.onload = function () {
                  var e = 200 === o.status ? JSON.parse(o.response) : null;
                  e && !e.error
                    ? n(e)
                    : (t.emit(
                        t.events.DATA_ERROR,
                        r.events.API_COMMUNICATION_ERROR
                      ),
                      a(e));
                }),
                (o.onreadystatechange = function () {
                  4 == o.readyState &&
                    0 == o.status &&
                    (t.emit(
                      t.events.DATA_ERROR,
                      r.events.API_COMMUNICATION_ERROR
                    ),
                    a());
                }),
                (o.onError = function () {
                  t.emit(t.events.DATA_ERROR, r.events.API_COMMUNICATION_ERROR),
                    a();
                }),
                o.send();
            });
          },
          postAPIData: function (e) {
            var t = this;
            return new Promise(function (n, a) {
              var o = new XMLHttpRequest(),
                s = e.apiRoot || i.apiRoot,
                l = e.contentType || "application/json;charset=UTF-8";
              o.open("POST", encodeURI(s + e.method), !0),
                o.setRequestHeader("Content-Type", l),
                (o.withCredentials = !0),
                (o.onload = function () {
                  var e = 200 === o.status ? JSON.parse(o.response) : null;
                  e && !e.error
                    ? n(e)
                    : (t.emit(
                        t.events.DATA_ERROR,
                        r.events.API_COMMUNICATION_ERROR
                      ),
                      a(e));
                }),
                (o.onreadystatechange = function () {
                  4 == o.readyState &&
                    0 == o.status &&
                    (t.emit(
                      t.events.DATA_ERROR,
                      r.events.API_COMMUNICATION_ERROR
                    ),
                    a());
                }),
                (o.onError = function () {
                  t.emit(t.events.DATA_ERROR, r.events.API_COMMUNICATION_ERROR),
                    a();
                }),
                o.send(JSON.stringify(e.body));
            });
          },
          getEntity: function () {
            var e = this;
            return new Promise(function (t, n) {
              i.uid
                ? ((i.entity = i.uid), t(i.uid))
                : e
                    .getAPIData({ method: e.apiMethods.getEntity })
                    .then(function (e) {
                      (i.entity = e), t(e);
                    });
            });
          },
          isSubscriber: function () {
            var e = this;
            return new Promise(function (t, n) {
              i.uid
                ? ((i.entity = i.uid), t(i.uid))
                : e
                    .getAPIData({ method: e.apiMethods.getSubscriber })
                    .then(function (e) {
                      t(!!e.subscriber);
                    });
            });
          },
          hasDailyScore: function (e) {
            var t = this;
            return new Promise(function (n, a) {
              i.uid
                ? ((i.entity = i.uid), n(i.uid))
                : t
                    .getAPIData({
                      method: t.apiMethods.hasDailyScore,
                      params: { game: i.api_key, level_key: e },
                    })
                    .then(function (e) {
                      n(!!e.daily_score);
                    });
            });
          },
          getScoreCategories: function () {
            var e = this;
            return new Promise(function (t, n) {
              e.getAPIData({
                method: e.apiMethods.getScoreCategories,
                params: { game: i.api_key },
              }).then(function (e) {
                t(e);
              });
            });
          },
          getDays: function (e) {
            var t = this,
              n = e || 30;
            return new Promise(function (e, a) {
              t.getAPIData({
                method: t.apiMethods.getDays,
                params: { game: i.api_key, limit: n },
              }).then(function (t) {
                e(t);
              });
            });
          },
          getScores: function (e) {
            var t = this,
              n = {
                day: e.day,
                type: e.type,
                level_key: e.level_key,
                period: e.period,
                current_user: e.current_user,
                target_date: e.target_date,
                value_formatter: e.value_formatter,
                use_daily: e.use_daily,
              },
              a = Object.assign({ game: i.api_key }, n);
            return new Promise(function (e, n) {
              t.getAPIData({ method: t.apiMethods.getScores, params: a }).then(
                function (t) {
                  e(t);
                }
              );
            });
          },
          getScoresContext: function (e) {
            var t = this,
              n = {
                day: e.day,
                type: e.type,
                level_key: e.level_key,
                period: e.period,
                target_date: e.target_date,
                value_formatter: e.value_formatter,
              },
              a = Object.assign({ game: i.api_key }, n);
            return new Promise(function (e, n) {
              t.getAPIData({
                method: t.apiMethods.getScoresContext,
                params: a,
              }).then(function (t) {
                e(t);
              });
            });
          },
          getAchievementCategories: function () {
            var e = this;
            return new Promise(function (t, n) {
              e.getAPIData({
                method: e.apiMethods.getAchievementCategories,
                params: { game: i.api_key },
              }).then(function (e) {
                t(e);
              });
            });
          },
          getUserAchievements: function () {
            var e = this;
            return new Promise(function (t, n) {
              e.getAPIData({
                method: e.apiMethods.getUserAchievements,
                params: { game: i.api_key },
              }).then(function (e) {
                t(e);
              });
            });
          },
          getUserDatastore: function () {
            var e = this;
            return new Promise(function (t, n) {
              e.getAPIData({
                method: e.apiMethods.getUserDatastore,
                params: { game: i.api_key },
              }).then(function (e) {
                t(e);
              });
            });
          },
          getCurrentDay: function () {
            var e = this,
              t = function (e) {
                return e <= 99 && (e = ("000" + e).slice(-2)), e;
              };
            return new Promise(function (n, a) {
              var r = o.parseUrlParams();
              if (r.day && r.month && r.year) {
                var i = [
                  2e3 + parseInt(r.year, 10),
                  t(parseInt(r.month, 10)),
                  t(parseInt(r.day, 10)),
                ];
                n({ day: i.join("-") });
              } else
                e.getAPIData({
                  method: e.apiMethods.getCurrentDay,
                  params: {},
                }).then(function (e) {
                  n(e);
                });
            });
          },
          getTokenBalance: function () {
            var e = this;
            return new Promise(function (t, n) {
              i.uid
                ? ((i.entity = i.uid), t(i.uid))
                : e
                    .getAPIData({ method: e.apiMethods.getTokenBalance })
                    .then(function (e) {
                      t(e);
                    });
            });
          },
          getCurrentUser: function () {
            var e = this,
              t = e.getProvider();
            return new Promise(function (n, a) {
              e.getAPIData({ apiRoot: t.root, method: t.current }).then(
                function (e) {
                  e && !e.error ? n(e) : a();
                }
              );
            });
          },
          userLogin: function (e) {
            var t = this,
              n = { username: e.username, password: e.password },
              a = t.getProvider();
            return t
              .postAPIData({ apiRoot: a.root, method: a.login, body: n })
              .then(function (e) {
                if (e && !e.error)
                  return t.emit(t.events.DATA_EVENT, t.events.USER_LOGIN), e;
                t.emit(t.events.DATA_ERROR, r.events.API_COMMUNICATION_ERROR);
              })
              .catch(function (e) {
                return e;
              });
          },
          userCreate: function (e) {
            var t = this,
              n = { username: e.username, mail: e.mail, password: e.password },
              a = t.getProvider();
            return t
              .postAPIData({ apiRoot: a.root, method: a.create, body: n })
              .then(function (e) {
                if (e && !e.error)
                  return t.emit(t.events.DATA_EVENT, t.events.USER_LOGIN), e;
                t.emit(t.events.DATA_ERROR, r.events.API_COMMUNICATION_ERROR);
              })
              .catch(function (e) {
                return e;
              });
          },
          userLogout: function () {
            var e = this,
              t = e.getProvider();
            return e
              .getAPIData({ apiRoot: t.root, method: t.logout })
              .then(function (t) {
                t && !t.error
                  ? e.emit(e.events.DATA_EVENT, e.events.USER_LOGOUT)
                  : e.emit(
                      e.events.DATA_ERROR,
                      r.events.API_COMMUNICATION_ERROR
                    );
              })
              .catch(function (t) {
                e.emit(e.events.DATA_ERROR, r.events.API_COMMUNICATION_ERROR);
              });
          },
          getProvider: function () {
            return r.providers[i.provider] || r.providers.default;
          },
        };
      e.exports = a(s);
    },
    /*!***********************!*\
!*** ./src/api/ui.js ***!
\***********************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      n(/*!component-emitter*/ 6);
      var a = n(/*!../config*/ 2),
        r = (n(/*!element-resize-event*/ 7), n(/*!body-scroll-lock*/ 14)),
        o = (o = n(/*!../utils*/ 4)),
        i = n(/*!../ui.js*/ 15),
        s = n(/*!../data.js*/ 8),
        l = n(/*!../session.js*/ 3),
        u = {
          events: { UI_EVENT: "UI_EVENT", UI_ERROR: "UI_ERROR" },
          templates: {
            dialog: n(/*!../templates/api/dialog.handlebars*/ 16),
            dialogScore: n(/*!../templates/api/dialog-scores.handlebars*/ 34),
            dialogDailyScore: n(
              /*!../templates/api/dialog-daily-scores.handlebars*/ 35
            ),
            dialogScoreConfirmation: n(
              /*!../templates/api/dialog-score-confirmation.handlebars*/ 36
            ),
            dataScore: n(/*!../templates/api/data-scores.handlebars*/ 37),
            dataScoreContext: n(
              /*!../templates/api/data-score-context.handlebars*/ 38
            ),
            dataDailyScoreContext: n(
              /*!../templates/api/data-daily-scores-context.handlebars*/ 39
            ),
            dialogAchievements: n(
              /*!../templates/api/dialog-achievements.handlebars*/ 40
            ),
            dataAchievements: n(
              /*!../templates/api/data-achievements.handlebars*/ 41
            ),
            dialogWeeklyScores: n(
              /*!../templates/api/dialog-weeklyscores.handlebars*/ 42
            ),
            dataWeeklyScores: n(
              /*!../templates/api/data-weeklyscores.handlebars*/ 43
            ),
            brandingAnimation: n(
              /*!../templates/api/branding-animation.handlebars*/ 44
            ),
            dialogUserLogin: n(
              /*!../templates/api/dialog-user-login.handlebars*/ 45
            ),
            dialogUserCreate: n(
              /*!../templates/api/dialog-user-create.handlebars*/ 46
            ),
          },
          dialogMethods: {
            scores: "renderScoresDialog",
            dailyscores: "renderDailyScoresDialog",
            scoreconfirmation: "renderScoreConfirmationDialog",
            achievements: "renderAchievementsDialog",
            weeklyscores: "renderWeeklyScoresDialog",
            userlogin: "renderUserLoginDialog",
            usercreate: "renderUserCreateDialog",
          },
          defaultDialogTitles: {
            scores: "Best Scores",
            dailyscores: "Best Daily Scores",
            scoreconfirmation: "Score Submitted",
            weeklyscores: "Your Best Scores This Week",
            achievements: "Your Achievements",
            userlogin: "Sign In",
          },
          renderDialog: function (e, t) {
            var n = this,
              i = Object.assign(
                { theme: l.theme, header: { backButton: !0 } },
                t
              ),
              s = (t && t.title) || n.defaultDialogTitles[e];
            s && (i.title = s);
            var u = n.templates.dialog(i);
            if (
              (this.cleanStage(),
              l.wrapper.insertAdjacentHTML("afterbegin", u),
              (document.getElementById("swag-dialog").dataset.dialog = e),
              o.applyBreakpointClass(),
              r.disableBodyScroll(l.wrapper),
              document.body.classList.add("swag-dialog-open"),
              n.dialogMethods[e])
            )
              return n[n.dialogMethods[e]](i).then(function () {
                l.wrapper
                  .querySelectorAll('div[data-action="back"]')
                  .forEach(function (e) {
                    e.addEventListener(
                      "click",
                      function (e) {
                        n.onCloseDialog(e);
                      },
                      !0
                    );
                  });
              });
            this.emit(n.events.UI_ERROR, a.events.INVALID_DIALOG_TYPE);
          },
          renderScoresDialog: function (e) {
            var t = this,
              n =
                (document.getElementById("swag-dialog"),
                document.getElementById("swag-dialog-content"));
            return (
              (e = e || {}),
              s.getScoreCategories().then(function (a) {
                var r = t.templates.dialogScore({ levels: a });
                n.innerHTML = r;
                var o = document.getElementById("swag-data-view-level"),
                  i = document.getElementById("swag-data-view-period"),
                  l = document.getElementById("swag-data-table"),
                  u = document.getElementById("swag-score-context");
                e.period && i && (i.value = e.period),
                  a.length <= 1 && (o.style.display = "none"),
                  e.level_key && o && (o.value = e.level_key);
                var c = function (r, o) {
                  (l.innerHTML = ""), n.classList.add("loading");
                  var i = { level_key: r, period: "daily" },
                    c = { type: "standard", level_key: r, period: o };
                  e.value_formatter &&
                    ((i.value_formatter = e.value_formatter),
                    (c.value_formatter = e.value_formatter)),
                    s.getScoresContext(i).then(function (e) {
                      var n = t.templates.dataScoreContext({ context: e });
                      u.innerHTML = n;
                    }),
                    s
                      .getScores(c)
                      .then(function (e) {
                        var n = a.find(function (e) {
                            return r === e.level_key;
                          }),
                          o = t.templates.dataScore({ category: n, scores: e });
                        l.innerHTML = o;
                      })
                      .finally(function () {
                        n.classList.remove("loading");
                      });
                };
                return (
                  o.addEventListener(
                    "change",
                    function () {
                      return c(
                        o.options[o.selectedIndex].value,
                        i.options[i.selectedIndex].value
                      );
                    },
                    !0
                  ),
                  i.addEventListener(
                    "change",
                    function () {
                      return c(
                        o.options[o.selectedIndex].value,
                        i.options[i.selectedIndex].value
                      );
                    },
                    !0
                  ),
                  c(
                    o.options[o.selectedIndex].value,
                    i.options[i.selectedIndex].value
                  )
                );
              })
            );
          },
          renderDailyScoresDialog: function (e) {
            var t = this,
              n =
                (document.getElementById("swag-dialog"),
                document.getElementById("swag-dialog-content"));
            return Promise.all([s.getDays(), s.getScoreCategories()]).then(
              function (a) {
                var r = a[0],
                  o = a[1],
                  i = t.templates.dialogDailyScore({ days: r, levels: o });
                n.innerHTML = i;
                var l = document.getElementById("swag-data-view-level"),
                  u = document.getElementById("swag-data-view-day"),
                  c = document.getElementById("swag-data-table"),
                  d = document.getElementById("swag-score-context");
                e.day && (u.value = e.day),
                  o.length <= 1 && (l.style.display = "none"),
                  e.level_key && (l.value = e.level_key);
                var p = function (a, r) {
                  (c.innerHTML = ""), n.classList.add("loading");
                  var i = { level_key: r, period: "alltime", day: a },
                    l = {
                      type: "daily",
                      level_key: r,
                      period: "alltime",
                      day: a,
                    };
                  return (
                    e.value_formatter &&
                      ((i.value_formatter = e.value_formatter),
                      (l.value_formatter = e.value_formatter)),
                    Promise.all([s.getScoresContext(i), s.getScores(l)])
                      .then(function (e) {
                        var n = e[0],
                          a = e[1],
                          i = o.find(function (e) {
                            return r === e.level_key;
                          }),
                          s = t.templates.dataScore({ category: i, scores: a });
                        c.innerHTML = s;
                        var l = t.templates.dataDailyScoreContext({
                          context: n,
                        });
                        d.innerHTML = l;
                      })
                      .finally(function () {
                        n.classList.remove("loading");
                      })
                  );
                };
                return (
                  u.addEventListener(
                    "change",
                    function () {
                      return p(
                        u.options[u.selectedIndex].value,
                        l.options[l.selectedIndex].value
                      );
                    },
                    !0
                  ),
                  l.addEventListener(
                    "change",
                    function () {
                      return p(
                        u.options[u.selectedIndex].value,
                        l.options[l.selectedIndex].value
                      );
                    },
                    !0
                  ),
                  p(
                    u.options[u.selectedIndex].value,
                    l.options[l.selectedIndex].value
                  )
                );
              }
            );
          },
          renderScoreConfirmationDialog: function (e) {
            document.getElementById("swag-dialog");
            var t = document.getElementById("swag-dialog-content"),
              n = this.templates.dialogScoreConfirmation(e);
            return (
              t.classList.remove("loading"),
              (t.innerHTML = n),
              new Promise(function (e, t) {
                e({});
              })
            );
          },
          renderAchievementsDialog: function (e) {
            var t = this,
              n =
                (document.getElementById("swag-dialog"),
                document.getElementById("swag-dialog-content")),
              a = t.templates.dialogAchievements();
            n.innerHTML = a;
            var r = document.getElementById("swag-data");
            return (
              (r.innerHTML = ""),
              n.classList.add("loading"),
              s
                .getUserAchievements()
                .then(function (e) {
                  var n = t.templates.dataAchievements({ achievements: e });
                  r.innerHTML = n;
                })
                .finally(function () {
                  n.classList.remove("loading");
                })
            );
          },
          renderWeeklyScoresDialog: function (e) {
            var t = this,
              n =
                (document.getElementById("swag-dialog"),
                document.getElementById("swag-dialog-content"));
            return s.getScoreCategories().then(function (a) {
              var r = t.templates.dialogWeeklyScores({
                levels: a,
                title: e.title,
              });
              n.innerHTML = r;
              var o = document.getElementById("swag-data-view-level"),
                i = document.getElementById("swag-data"),
                l = function (a) {
                  (i.innerHTML = ""), n.classList.add("loading");
                  var r = { type: "weekly", level_key: a };
                  return (
                    e.value_formatter &&
                      (r.value_formatter = e.value_formatter),
                    s
                      .getScores(r)
                      .then(function (e) {
                        var n = t.templates.dataWeeklyScores({
                          weeklyscores: e,
                        });
                        i.innerHTML = n;
                      })
                      .finally(function () {
                        n.classList.remove("loading");
                      })
                  );
                };
              if (
                (o.addEventListener(
                  "change",
                  function () {
                    return l(o.options[o.selectedIndex].value);
                  },
                  !0
                ),
                a[0])
              )
                return l(o.options[0].value);
            });
          },
          renderUserLoginDialog: function (e) {
            var t = this,
              n =
                (document.getElementById("swag-dialog"),
                document.getElementById("swag-dialog-content")),
              a = t.templates.dialogUserLogin(e);
            n.classList.remove("loading"), (n.innerHTML = a);
            var r = document.getElementById("swag-login-username"),
              o = document.getElementById("swag-login-password"),
              i = document.getElementById("swag-login-submit"),
              u = document.getElementById("swag-login-create"),
              c = document.getElementById("swag-login-message");
            r.focus();
            var d = function (e) {
              13 === e.keyCode && p();
            };
            l.wrapper
              .querySelectorAll('div[data-action="back"]')
              .forEach(function (e) {
                e.addEventListener(
                  "click",
                  function (e) {
                    window.removeEventListener("keypress", d, !0);
                  },
                  !0
                );
              });
            var p = function (e) {
              window.removeEventListener("keypress", d, !0),
                i.classList.add("loading"),
                (i.disabled = !0),
                (c.innerHTML = ""),
                s
                  .userLogin({ username: r.value, password: o.value })
                  .then(function (e) {
                    i.classList.remove("loading"),
                      (i.disabled = !1),
                      e && !e.error
                        ? (t.cleanStage(),
                          window.removeEventListener("keypress", d, !0),
                          t.emit(t.events.USER_LOGIN, { auth: !0 }))
                        : e &&
                          e.error &&
                          ((c.innerHTML =
                            '<p class="animated fadeIn">' + e.error + "</p>"),
                          window.addEventListener("keypress", d, !0));
                  });
            };
            return (
              i.addEventListener(
                "click",
                function (e) {
                  e.preventDefault(), p(e);
                },
                !0
              ),
              u.addEventListener(
                "click",
                function (e) {
                  e.preventDefault(),
                    t.cleanStage(),
                    t.renderDialog("usercreate", {});
                },
                !0
              ),
              window.addEventListener("keypress", d, !0),
              new Promise(function (e, t) {
                e({});
              })
            );
          },
          renderUserCreateDialog: function (e) {
            var t = this,
              n =
                (document.getElementById("swag-dialog"),
                document.getElementById("swag-dialog-content")),
              a = t.templates.dialogUserCreate(e);
            n.classList.remove("loading"), (n.innerHTML = a);
            var r = document.getElementById("swag-logincreate-username"),
              o = document.getElementById("swag-logincreate-mail"),
              i = document.getElementById("swag-logincreate-password"),
              u = document.getElementById("swag-logincreate-submit"),
              c = document.getElementById("swag-logincreate-message");
            r.focus();
            var d = function (e) {
              13 === e.keyCode && p();
            };
            l.wrapper
              .querySelectorAll('div[data-action="back"]')
              .forEach(function (e) {
                e.addEventListener(
                  "click",
                  function (e) {
                    window.removeEventListener("keypress", d, !0);
                  },
                  !0
                );
              });
            var p = function (e) {
              window.removeEventListener("keypress", d, !0),
                u.classList.add("loading"),
                (u.disabled = !0),
                (c.innerHTML = ""),
                s
                  .userCreate({
                    username: r.value,
                    mail: o.value,
                    password: i.value,
                  })
                  .then(function (e) {
                    u.classList.remove("loading"),
                      (u.disabled = !1),
                      e && !e.error
                        ? (t.cleanStage(),
                          window.removeEventListener("keypress", d, !0))
                        : e &&
                          e.error &&
                          ((c.innerHTML =
                            '<p class="animated fadeIn">' + e.error + "</p>"),
                          window.addEventListener("keypress", d, !0));
                  });
            };
            return (
              u.addEventListener(
                "click",
                function (e) {
                  e.preventDefault(), p(e);
                },
                !0
              ),
              window.addEventListener("keypress", d, !0),
              new Promise(function (e, t) {
                e({});
              })
            );
          },
          cleanStage: function () {
            r.clearAllBodyScrollLocks(),
              document.body.classList.remove("swag-dialog-open");
            var e = l.wrapper.getElementsByClassName("swag-dialog-wrapper");
            Array.prototype.forEach.call(e, function (e) {
              e.parentNode.removeChild(e);
            });
          },
          populateLevelSelect: function (e) {
            return s.getScoreCategories().then(function (t) {
              var n = document.getElementById(e);
              n &&
                t.map(function (e) {
                  var t = document.createElement("option");
                  (t.value = e.level_key),
                    (t.innerHTML = e.name),
                    n.appendChild(t);
                });
            });
          },
          populateDaySelect: function (e, t) {
            return s.getDays(t).then(function (t) {
              var n = document.getElementById(e);
              n &&
                t.map(function (e) {
                  var t = document.createElement("option");
                  (t.value = e), (t.innerHTML = e), n.appendChild(t);
                });
            });
          },
          resize: function () {
            o.debug("resize"), o.applyBreakpointClass();
          },
          populateAchievementSelect: function (e) {
            return s.getAchievementCategories().then(function (t) {
              var n = document.getElementById(e);
              t.map(function (e) {
                var t = document.createElement("option");
                (t.value = e.achievement_key),
                  (t.innerHTML = e.name),
                  n.appendChild(t);
              });
            });
          },
          startGame: function () {
            return new Promise(function (e, t) {
              console.log("::: start game method invoked :::"), e({});
            });
          },
          endGame: function () {
            return new Promise(function (e, t) {
              console.log("::: end game method invoked :::"), e({});
            });
          },
          showAd: function () {
            return new Promise(function (e, t) {
              e({});
            });
          },
          getBrandingLogo: function () {
            return new Promise(function (e, t) {
              var n = new Image();
              (n.onload = function () {
                e(n);
              }),
                (n.src = a.resourceRoot + "shockwave-logo.svg");
            });
          },
          getBrandingLogoUrl: function () {
            return new Promise(function (e, t) {
              e(a.resourceRoot + "shockwave-logo.svg");
            });
          },
          showBrandingAnimation: function (e, t) {
            var n = this,
              a = document.getElementById(e);
            return new Promise(function (e, r) {
              var o = n.templates.brandingAnimation();
              a.insertAdjacentHTML("afterbegin", o),
                a.classList.add("swag-branding-active");
              var i = document.getElementById(
                "swag-branding-animation-wrapper"
              );
              document.getElementById("swag-branding-animation").onload =
                function () {
                  window.setTimeout(function () {
                    i.parentNode.removeChild(i),
                      a.classList.remove("swag-branding-active"),
                      t && t(),
                      e();
                  }, 4500);
                };
            });
          },
          leaderboardComponent: function (e, t, n) {
            return new Promise(function (e, t) {
              e();
            });
          },
          onCloseDialog: function (e) {
            e.preventDefault(),
              this.cleanStage(),
              this.emit(this.events.UI_EVENT, a.events.DIALOG_CLOSED);
          },
        };
      e.exports = Object.assign(i, u);
    },
    /*!*************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/base.js ***!
\*************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.__esModule = !0), (t.HandlebarsEnvironment = u);
      var r = n(/*!./utils*/ 1),
        o = a(n(/*!./exception*/ 5)),
        i = n(/*!./helpers*/ 18),
        s = n(/*!./decorators*/ 26),
        l = a(n(/*!./logger*/ 28));
      function u(e, t, n) {
        (this.helpers = e || {}),
          (this.partials = t || {}),
          (this.decorators = n || {}),
          i.registerDefaultHelpers(this),
          s.registerDefaultDecorators(this);
      }
      (t.VERSION = "4.1.0"),
        (t.COMPILER_REVISION = 7),
        (t.REVISION_CHANGES = {
          1: "<= 1.0.rc.2",
          2: "== 1.0.0-rc.3",
          3: "== 1.0.0-rc.4",
          4: "== 1.x.x",
          5: "== 2.0.0-alpha.x",
          6: ">= 2.0.0-beta.1",
          7: ">= 4.0.0",
        }),
        (u.prototype = {
          constructor: u,
          logger: l.default,
          log: l.default.log,
          registerHelper: function (e, t) {
            if ("[object Object]" === r.toString.call(e)) {
              if (t)
                throw new o.default("Arg not supported with multiple helpers");
              r.extend(this.helpers, e);
            } else this.helpers[e] = t;
          },
          unregisterHelper: function (e) {
            delete this.helpers[e];
          },
          registerPartial: function (e, t) {
            if ("[object Object]" === r.toString.call(e))
              r.extend(this.partials, e);
            else {
              if (void 0 === t)
                throw new o.default(
                  'Attempting to register a partial called "' +
                    e +
                    '" as undefined'
                );
              this.partials[e] = t;
            }
          },
          unregisterPartial: function (e) {
            delete this.partials[e];
          },
          registerDecorator: function (e, t) {
            if ("[object Object]" === r.toString.call(e)) {
              if (t)
                throw new o.default(
                  "Arg not supported with multiple decorators"
                );
              r.extend(this.decorators, e);
            } else this.decorators[e] = t;
          },
          unregisterDecorator: function (e) {
            delete this.decorators[e];
          },
        });
      var c = l.default.log;
      (t.log = c), (t.createFrame = r.createFrame), (t.logger = l.default);
    },
    /*!***************************************************!*\
!*** multi ./styles/main.scss ./src/api/index.js ***!
\***************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      n(/*!./styles/main.scss*/ 12),
        (e.exports = n(
          /*!./src/api/index.js*/ 13
        )); /*!**************************!*\
!*** ./styles/main.scss ***!
\**************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/
    },
    function (e, t, n) {},
    /*!**************************!*\
!*** ./src/api/index.js ***!
\**************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      var a = n(/*!../config.js*/ 2),
        r = n(/*!./ui*/ 9),
        o = n(/*!./api*/ 47);
      console.log("SWAG API " + a.version),
        (e.exports = {
          getInstance: function (e) {
            return console.log(e), new o(e);
          },
          showBrandingAnimation: function (e, t) {
            return r.showBrandingAnimation(e, t);
          },
          showLeaderboard: function (e, t, n) {
            return r.leaderboardComponent(e, t, n);
          },
        });
    },
    /*!*****************************************************************!*\
!*** ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js ***!
\*****************************************************************/ /*!exports provided: disableBodyScroll, clearAllBodyScrollLocks, enableBodyScroll*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/api/ui.js (referenced with cjs require)*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      n.r(t),
        n.d(t, "disableBodyScroll", function () {
          return v;
        }),
        n.d(t, "clearAllBodyScrollLocks", function () {
          return m;
        }),
        n.d(t, "enableBodyScroll", function () {
          return g;
        });
      var a = !1;
      if ("undefined" != typeof window) {
        var r = {
          get passive() {
            a = !0;
          },
        };
        window.addEventListener("testPassive", null, r),
          window.removeEventListener("testPassive", null, r);
      }
      var o =
          "undefined" != typeof window &&
          window.navigator &&
          window.navigator.platform &&
          (/iP(ad|hone|od)/.test(window.navigator.platform) ||
            ("MacIntel" === window.navigator.platform &&
              window.navigator.maxTouchPoints > 1)),
        i = [],
        s = !1,
        l = -1,
        u = void 0,
        c = void 0,
        d = function (e) {
          return i.some(function (t) {
            return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e));
          });
        },
        p = function (e) {
          var t = e || window.event;
          return (
            !!d(t.target) ||
            t.touches.length > 1 ||
            (t.preventDefault && t.preventDefault(), !1)
          );
        },
        f = function () {
          void 0 !== c &&
            ((document.body.style.paddingRight = c), (c = void 0)),
            void 0 !== u && ((document.body.style.overflow = u), (u = void 0));
        },
        v = function (e, t) {
          if (e) {
            if (
              !i.some(function (t) {
                return t.targetElement === e;
              })
            ) {
              var n = { targetElement: e, options: t || {} };
              (i = [].concat(
                (function (e) {
                  if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                      n[t] = e[t];
                    return n;
                  }
                  return Array.from(e);
                })(i),
                [n]
              )),
                o
                  ? ((e.ontouchstart = function (e) {
                      1 === e.targetTouches.length &&
                        (l = e.targetTouches[0].clientY);
                    }),
                    (e.ontouchmove = function (t) {
                      1 === t.targetTouches.length &&
                        (function (e, t) {
                          var n = e.targetTouches[0].clientY - l;
                          !d(e.target) &&
                            ((t && 0 === t.scrollTop && n > 0) ||
                            ((function (e) {
                              return (
                                !!e &&
                                e.scrollHeight - e.scrollTop <= e.clientHeight
                              );
                            })(t) &&
                              n < 0)
                              ? p(e)
                              : e.stopPropagation());
                        })(t, e);
                    }),
                    s ||
                      (document.addEventListener(
                        "touchmove",
                        p,
                        a ? { passive: !1 } : void 0
                      ),
                      (s = !0)))
                  : (function (e) {
                      if (void 0 === c) {
                        var t = !!e && !0 === e.reserveScrollBarGap,
                          n =
                            window.innerWidth -
                            document.documentElement.clientWidth;
                        t &&
                          n > 0 &&
                          ((c = document.body.style.paddingRight),
                          (document.body.style.paddingRight = n + "px"));
                      }
                      void 0 === u &&
                        ((u = document.body.style.overflow),
                        (document.body.style.overflow = "hidden"));
                    })(t);
            }
          } else
            console.error(
              "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
            );
        },
        m = function () {
          o
            ? (i.forEach(function (e) {
                (e.targetElement.ontouchstart = null),
                  (e.targetElement.ontouchmove = null);
              }),
              s &&
                (document.removeEventListener(
                  "touchmove",
                  p,
                  a ? { passive: !1 } : void 0
                ),
                (s = !1)),
              (l = -1))
            : f(),
            (i = []);
        },
        g = function (e) {
          e
            ? ((i = i.filter(function (t) {
                return t.targetElement !== e;
              })),
              o
                ? ((e.ontouchstart = null),
                  (e.ontouchmove = null),
                  s &&
                    0 === i.length &&
                    (document.removeEventListener(
                      "touchmove",
                      p,
                      a ? { passive: !1 } : void 0
                    ),
                    (s = !1)))
                : i.length || f())
            : console.error(
                "enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices."
              );
        };
    },
    /*!*******************!*\
!*** ./src/ui.js ***!
\*******************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      var a = n(/*!component-emitter*/ 6);
      n(/*!config*/ 2),
        n(/*!element-resize-event*/ 7),
        n(/*!utils*/ 4),
        n(/*!data*/ 8),
        n(/*!session*/ 3),
        (e.exports = a({}));
    },
    /*!*********************************************!*\
!*** ./src/templates/api/dialog.handlebars ***!
\*********************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, a, r, o) {
          var i;
          return (
            '<div id="swag-dialog-wrapper" class="swag-dialog-wrapper">\n    <div id="swag-dialog" class="swag-dialog animated bounceInDown ' +
            e.escapeExpression(e.lambda(null != t ? t.theme : t, t)) +
            '">\n' +
            (null !=
            (i = e.invokePartial(n(/*!./dialog-header.handlebars*/ 33), t, {
              name: "dialog-header",
              data: o,
              indent: "        ",
              helpers: a,
              partials: r,
              decorators: e.decorators,
            }))
              ? i
              : "") +
            '        <div id="swag-dialog-content" class="swag-dialog-content loading"></div>\n    </div>\n</div>\n'
          );
        },
        usePartial: !0,
        useData: !0,
      });
    },
    /*!****************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars.runtime.js ***!
\****************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      t.__esModule = !0;
      var o = r(n(/*!./handlebars/base*/ 10)),
        i = a(n(/*!./handlebars/safe-string*/ 29)),
        s = a(n(/*!./handlebars/exception*/ 5)),
        l = r(n(/*!./handlebars/utils*/ 1)),
        u = r(n(/*!./handlebars/runtime*/ 30)),
        c = a(n(/*!./handlebars/no-conflict*/ 31));
      function d() {
        var e = new o.HandlebarsEnvironment();
        return (
          l.extend(e, o),
          (e.SafeString = i.default),
          (e.Exception = s.default),
          (e.Utils = l),
          (e.escapeExpression = l.escapeExpression),
          (e.VM = u),
          (e.template = function (t) {
            return u.template(t, e);
          }),
          e
        );
      }
      var p = d();
      (p.create = d),
        c.default(p),
        (p.default = p),
        (t.default = p),
        (e.exports = t.default);
    },
    /*!****************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/helpers.js ***!
\****************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.__esModule = !0),
        (t.registerDefaultHelpers = function (e) {
          r.default(e),
            o.default(e),
            i.default(e),
            s.default(e),
            l.default(e),
            u.default(e),
            c.default(e);
        });
      var r = a(n(/*!./helpers/block-helper-missing*/ 19)),
        o = a(n(/*!./helpers/each*/ 20)),
        i = a(n(/*!./helpers/helper-missing*/ 21)),
        s = a(n(/*!./helpers/if*/ 22)),
        l = a(n(/*!./helpers/log*/ 23)),
        u = a(n(/*!./helpers/lookup*/ 24)),
        c = a(n(/*!./helpers/with*/ 25));
    },
    /*!*************************************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/block-helper-missing.js ***!
\*************************************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      t.__esModule = !0;
      var a = n(/*!../utils*/ 1);
      (t.default = function (e) {
        e.registerHelper("blockHelperMissing", function (t, n) {
          var r = n.inverse,
            o = n.fn;
          if (!0 === t) return o(this);
          if (!1 === t || null == t) return r(this);
          if (a.isArray(t))
            return t.length > 0
              ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n))
              : r(this);
          if (n.data && n.ids) {
            var i = a.createFrame(n.data);
            (i.contextPath = a.appendContextPath(n.data.contextPath, n.name)),
              (n = { data: i });
          }
          return o(t, n);
        });
      }),
        (e.exports = t.default);
    },
    /*!*********************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/each.js ***!
\*********************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      function a(e) {
        return (a =
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
              })(e);
      }
      t.__esModule = !0;
      var r,
        o = n(/*!../utils*/ 1),
        i = (r = n(/*!../exception*/ 5)) && r.__esModule ? r : { default: r };
      (t.default = function (e) {
        e.registerHelper("each", function (e, t) {
          if (!t) throw new i.default("Must pass iterator to #each");
          var n = t.fn,
            r = t.inverse,
            s = 0,
            l = "",
            u = void 0,
            c = void 0;
          function d(t, a, r) {
            u &&
              ((u.key = t),
              (u.index = a),
              (u.first = 0 === a),
              (u.last = !!r),
              c && (u.contextPath = c + t)),
              (l += n(e[t], {
                data: u,
                blockParams: o.blockParams([e[t], t], [c + t, null]),
              }));
          }
          if (
            (t.data &&
              t.ids &&
              (c = o.appendContextPath(t.data.contextPath, t.ids[0]) + "."),
            o.isFunction(e) && (e = e.call(this)),
            t.data && (u = o.createFrame(t.data)),
            e && "object" === a(e))
          )
            if (o.isArray(e))
              for (var p = e.length; s < p; s++)
                s in e && d(s, s, s === e.length - 1);
            else {
              var f = void 0;
              for (var v in e)
                e.hasOwnProperty(v) &&
                  (void 0 !== f && d(f, s - 1), (f = v), s++);
              void 0 !== f && d(f, s - 1, !0);
            }
          return 0 === s && (l = r(this)), l;
        });
      }),
        (e.exports = t.default);
    },
    /*!*******************************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/helper-missing.js ***!
\*******************************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      t.__esModule = !0;
      var a,
        r = (a = n(/*!../exception*/ 5)) && a.__esModule ? a : { default: a };
      (t.default = function (e) {
        e.registerHelper("helperMissing", function () {
          if (1 !== arguments.length)
            throw new r.default(
              'Missing helper: "' + arguments[arguments.length - 1].name + '"'
            );
        });
      }),
        (e.exports = t.default);
    },
    /*!*******************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/if.js ***!
\*******************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      t.__esModule = !0;
      var a = n(/*!../utils*/ 1);
      (t.default = function (e) {
        e.registerHelper("if", function (e, t) {
          return (
            a.isFunction(e) && (e = e.call(this)),
            (!t.hash.includeZero && !e) || a.isEmpty(e)
              ? t.inverse(this)
              : t.fn(this)
          );
        }),
          e.registerHelper("unless", function (t, n) {
            return e.helpers.if.call(this, t, {
              fn: n.inverse,
              inverse: n.fn,
              hash: n.hash,
            });
          });
      }),
        (e.exports = t.default);
    },
    /*!********************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/log.js ***!
\********************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      (t.__esModule = !0),
        (t.default = function (e) {
          e.registerHelper("log", function () {
            for (
              var t = [void 0], n = arguments[arguments.length - 1], a = 0;
              a < arguments.length - 1;
              a++
            )
              t.push(arguments[a]);
            var r = 1;
            null != n.hash.level
              ? (r = n.hash.level)
              : n.data && null != n.data.level && (r = n.data.level),
              (t[0] = r),
              e.log.apply(e, t);
          });
        }),
        (e.exports = t.default);
    },
    /*!***********************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/lookup.js ***!
\***********************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      (t.__esModule = !0),
        (t.default = function (e) {
          e.registerHelper("lookup", function (e, t) {
            return e && e[t];
          });
        }),
        (e.exports = t.default);
    },
    /*!*********************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/helpers/with.js ***!
\*********************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      t.__esModule = !0;
      var a = n(/*!../utils*/ 1);
      (t.default = function (e) {
        e.registerHelper("with", function (e, t) {
          a.isFunction(e) && (e = e.call(this));
          var n = t.fn;
          if (a.isEmpty(e)) return t.inverse(this);
          var r = t.data;
          return (
            t.data &&
              t.ids &&
              ((r = a.createFrame(t.data)).contextPath = a.appendContextPath(
                t.data.contextPath,
                t.ids[0]
              )),
            n(e, {
              data: r,
              blockParams: a.blockParams([e], [r && r.contextPath]),
            })
          );
        });
      }),
        (e.exports = t.default);
    },
    /*!*******************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/decorators.js ***!
\*******************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      (t.__esModule = !0),
        (t.registerDefaultDecorators = function (e) {
          r.default(e);
        });
      var a,
        r =
          (a = n(/*!./decorators/inline*/ 27)) && a.__esModule
            ? a
            : { default: a };
    },
    /*!**************************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/decorators/inline.js ***!
\**************************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      t.__esModule = !0;
      var a = n(/*!../utils*/ 1);
      (t.default = function (e) {
        e.registerDecorator("inline", function (e, t, n, r) {
          var o = e;
          return (
            t.partials ||
              ((t.partials = {}),
              (o = function (r, o) {
                var i = n.partials;
                n.partials = a.extend({}, i, t.partials);
                var s = e(r, o);
                return (n.partials = i), s;
              })),
            (t.partials[r.args[0]] = r.fn),
            o
          );
        });
      }),
        (e.exports = t.default);
    },
    /*!***************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/logger.js ***!
\***************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      t.__esModule = !0;
      var a = n(/*!./utils*/ 1),
        r = {
          methodMap: ["debug", "info", "warn", "error"],
          level: "info",
          lookupLevel: function (e) {
            if ("string" == typeof e) {
              var t = a.indexOf(r.methodMap, e.toLowerCase());
              e = t >= 0 ? t : parseInt(e, 10);
            }
            return e;
          },
          log: function (e) {
            if (
              ((e = r.lookupLevel(e)),
              "undefined" != typeof console && r.lookupLevel(r.level) <= e)
            ) {
              var t = r.methodMap[e];
              console[t] || (t = "log");
              for (
                var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1;
                o < n;
                o++
              )
                a[o - 1] = arguments[o];
              console[t].apply(console, a);
            }
          },
        };
      (t.default = r), (e.exports = t.default);
    },
    /*!********************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/safe-string.js ***!
\********************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      function a(e) {
        this.string = e;
      }
      (t.__esModule = !0),
        (a.prototype.toString = a.prototype.toHTML =
          function () {
            return "" + this.string;
          }),
        (t.default = a),
        (e.exports = t.default);
    },
    /*!****************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/runtime.js ***!
\****************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      function a(e) {
        return (a =
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
              })(e);
      }
      (t.__esModule = !0),
        (t.checkRevision = function (e) {
          var t = (e && e[0]) || 1,
            n = s.COMPILER_REVISION;
          if (t !== n) {
            if (t < n) {
              var a = s.REVISION_CHANGES[n],
                r = s.REVISION_CHANGES[t];
              throw new i.default(
                "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                  a +
                  ") or downgrade your runtime to an older version (" +
                  r +
                  ")."
              );
            }
            throw new i.default(
              "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
                e[1] +
                ")."
            );
          }
        }),
        (t.template = function (e, t) {
          if (!t) throw new i.default("No environment passed to template");
          if (!e || !e.main)
            throw new i.default("Unknown template object: " + a(e));
          (e.main.decorator = e.main_d), t.VM.checkRevision(e.compiler);
          var n = {
            strict: function (e, t) {
              if (!(t in e))
                throw new i.default('"' + t + '" not defined in ' + e);
              return e[t];
            },
            lookup: function (e, t) {
              for (var n = e.length, a = 0; a < n; a++)
                if (e[a] && null != e[a][t]) return e[a][t];
            },
            lambda: function (e, t) {
              return "function" == typeof e ? e.call(t) : e;
            },
            escapeExpression: o.escapeExpression,
            invokePartial: function (n, a, r) {
              r.hash &&
                ((a = o.extend({}, a, r.hash)), r.ids && (r.ids[0] = !0)),
                (n = t.VM.resolvePartial.call(this, n, a, r));
              var s = t.VM.invokePartial.call(this, n, a, r);
              if (
                (null == s &&
                  t.compile &&
                  ((r.partials[r.name] = t.compile(n, e.compilerOptions, t)),
                  (s = r.partials[r.name](a, r))),
                null != s)
              ) {
                if (r.indent) {
                  for (
                    var l = s.split("\n"), u = 0, c = l.length;
                    u < c && (l[u] || u + 1 !== c);
                    u++
                  )
                    l[u] = r.indent + l[u];
                  s = l.join("\n");
                }
                return s;
              }
              throw new i.default(
                "The partial " +
                  r.name +
                  " could not be compiled when running in runtime-only mode"
              );
            },
            fn: function (t) {
              var n = e[t];
              return (n.decorator = e[t + "_d"]), n;
            },
            programs: [],
            program: function (e, t, n, a, r) {
              var o = this.programs[e],
                i = this.fn(e);
              return (
                t || r || a || n
                  ? (o = l(this, e, i, t, n, a, r))
                  : o || (o = this.programs[e] = l(this, e, i)),
                o
              );
            },
            data: function (e, t) {
              for (; e && t--; ) e = e._parent;
              return e;
            },
            merge: function (e, t) {
              var n = e || t;
              return e && t && e !== t && (n = o.extend({}, t, e)), n;
            },
            nullContext: Object.seal({}),
            noop: t.VM.noop,
            compilerInfo: e.compiler,
          };
          function r(t) {
            var a =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1],
              o = a.data;
            r._setup(a),
              !a.partial &&
                e.useData &&
                (o = (function (e, t) {
                  return (
                    (t && "root" in t) ||
                      ((t = t ? s.createFrame(t) : {}).root = e),
                    t
                  );
                })(t, o));
            var i = void 0,
              l = e.useBlockParams ? [] : void 0;
            function u(t) {
              return "" + e.main(n, t, n.helpers, n.partials, o, l, i);
            }
            return (
              e.useDepths &&
                (i = a.depths
                  ? t != a.depths[0]
                    ? [t].concat(a.depths)
                    : a.depths
                  : [t]),
              (u = c(e.main, u, n, a.depths || [], o, l))(t, a)
            );
          }
          return (
            (r.isTop = !0),
            (r._setup = function (a) {
              a.partial
                ? ((n.helpers = a.helpers),
                  (n.partials = a.partials),
                  (n.decorators = a.decorators))
                : ((n.helpers = n.merge(a.helpers, t.helpers)),
                  e.usePartial &&
                    (n.partials = n.merge(a.partials, t.partials)),
                  (e.usePartial || e.useDecorators) &&
                    (n.decorators = n.merge(a.decorators, t.decorators)));
            }),
            (r._child = function (t, a, r, o) {
              if (e.useBlockParams && !r)
                throw new i.default("must pass block params");
              if (e.useDepths && !o)
                throw new i.default("must pass parent depths");
              return l(n, t, e[t], a, 0, r, o);
            }),
            r
          );
        }),
        (t.wrapProgram = l),
        (t.resolvePartial = function (e, t, n) {
          return (
            e
              ? e.call || n.name || ((n.name = e), (e = n.partials[e]))
              : (e =
                  "@partial-block" === n.name
                    ? n.data["partial-block"]
                    : n.partials[n.name]),
            e
          );
        }),
        (t.invokePartial = function (e, t, n) {
          var a = n.data && n.data["partial-block"];
          (n.partial = !0),
            n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
          var r = void 0;
          if (
            (n.fn &&
              n.fn !== u &&
              (function () {
                n.data = s.createFrame(n.data);
                var e = n.fn;
                (r = n.data["partial-block"] =
                  function (t) {
                    var n =
                      arguments.length <= 1 || void 0 === arguments[1]
                        ? {}
                        : arguments[1];
                    return (
                      (n.data = s.createFrame(n.data)),
                      (n.data["partial-block"] = a),
                      e(t, n)
                    );
                  }),
                  e.partials &&
                    (n.partials = o.extend({}, n.partials, e.partials));
              })(),
            void 0 === e && r && (e = r),
            void 0 === e)
          )
            throw new i.default(
              "The partial " + n.name + " could not be found"
            );
          if (e instanceof Function) return e(t, n);
        }),
        (t.noop = u);
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        })(n(/*!./utils*/ 1)),
        i = (r = n(/*!./exception*/ 5)) && r.__esModule ? r : { default: r },
        s = n(/*!./base*/ 10);
      function l(e, t, n, a, r, o, i) {
        function s(t) {
          var r =
              arguments.length <= 1 || void 0 === arguments[1]
                ? {}
                : arguments[1],
            s = i;
          return (
            !i ||
              t == i[0] ||
              (t === e.nullContext && null === i[0]) ||
              (s = [t].concat(i)),
            n(
              e,
              t,
              e.helpers,
              e.partials,
              r.data || a,
              o && [r.blockParams].concat(o),
              s
            )
          );
        }
        return (
          ((s = c(n, s, e, i, a, o)).program = t),
          (s.depth = i ? i.length : 0),
          (s.blockParams = r || 0),
          s
        );
      }
      function u() {
        return "";
      }
      function c(e, t, n, a, r, i) {
        if (e.decorator) {
          var s = {};
          (t = e.decorator(t, s, n, a && a[0], r, i, a)), o.extend(t, s);
        }
        return t;
      }
    },
    /*!********************************************************************!*\
!*** ./node_modules/handlebars/dist/cjs/handlebars/no-conflict.js ***!
\********************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      (function (n) {
        (t.__esModule = !0),
          (t.default = function (e) {
            var t = void 0 !== n ? n : window,
              a = t.Handlebars;
            e.noConflict = function () {
              return t.Handlebars === e && (t.Handlebars = a), e;
            };
          }),
          (e.exports = t.default);
      }).call(this, n(/*!./../../../../webpack/buildin/global.js*/ 32));
    },
    /*!***********************************!*\
!*** (webpack)/buildin/global.js ***!
\***********************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t
    ) {
      function n(e) {
        return (n =
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
              })(e);
      }
      var a;
      a = (function () {
        return this;
      })();
      try {
        a = a || new Function("return this")();
      } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) &&
          (a = window);
      }
      e.exports = a;
    },
    /*!****************************************************!*\
!*** ./src/templates/api/dialog-header.handlebars ***!
\****************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        1: function (e, t, n, a, r) {
          var o;
          return (
            '<div class="swag-dialog-title">' +
            e.escapeExpression(e.lambda((o = r && r.root) && o.title, t)) +
            "</div>"
          );
        },
        3: function (e, t, n, a, r) {
          return '<div class="swag-header-link"data-action="back"></div>';
        },
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          var o,
            i = null != t ? t : e.nullContext || {};
          return (
            '<div class="swag-dialog-header">\n  <div class="swag-logo"></div>\n  ' +
            (null !=
            (o = n.if.call(i, (o = r && r.root) && o.title, {
              name: "if",
              hash: {},
              fn: e.program(1, r, 0),
              inverse: e.noop,
              data: r,
            }))
              ? o
              : "") +
            "\n  " +
            (null !=
            (o = n.if.call(
              i,
              (o = (o = r && r.root) && o.header) && o.backButton,
              {
                name: "if",
                hash: {},
                fn: e.program(3, r, 0),
                inverse: e.noop,
                data: r,
              }
            ))
              ? o
              : "") +
            "\n</div>\n"
          );
        },
        useData: !0,
      });
    },
    /*!****************************************************!*\
!*** ./src/templates/api/dialog-scores.handlebars ***!
\****************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        1: function (e, t, n, a, r) {
          var o,
            i = null != t ? t : e.nullContext || {},
            s = n.helperMissing,
            l = e.escapeExpression;
          return (
            '        <option value="' +
            l(
              "function" ==
                typeof (o =
                  null != (o = n.level_key || (null != t ? t.level_key : t))
                    ? o
                    : s)
                ? o.call(i, { name: "level_key", hash: {}, data: r })
                : o
            ) +
            '">' +
            l(
              "function" ==
                typeof (o =
                  null != (o = n.name || (null != t ? t.name : t)) ? o : s)
                ? o.call(i, { name: "name", hash: {}, data: r })
                : o
            ) +
            "</option>\n"
          );
        },
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          var o;
          return (
            '<div class="swag-data-selector">\n  <div id="swag-score-context" class="swag-score-context">\n  </div>\n  <div class="swag-select-container">\n    <select id="swag-data-view-level" class="swag-select">\n' +
            (null !=
            (o = n.each.call(
              null != t ? t : e.nullContext || {},
              null != t ? t.levels : t,
              {
                name: "each",
                hash: {},
                fn: e.program(1, r, 0),
                inverse: e.noop,
                data: r,
              }
            ))
              ? o
              : "") +
            '    </select>\n    <select id="swag-data-view-period" class="swag-select">\n      <option value="daily">Daily</option>\n      <option value="weekly">Weekly</option>\n      <option value="monthly">Monthly</option>\n      <option value="alltime">All Time</option>\n    </select>\n  </div>\n</div>\n<div id="swag-data-table" class="swag-data-table"></div>\n'
          );
        },
        useData: !0,
      });
    },
    /*!**********************************************************!*\
!*** ./src/templates/api/dialog-daily-scores.handlebars ***!
\**********************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        1: function (e, t, n, a, r) {
          var o = e.lambda,
            i = e.escapeExpression;
          return (
            '        <option value="' +
            i(o(t, t)) +
            '">' +
            i(o(t, t)) +
            "</option>\n"
          );
        },
        3: function (e, t, n, a, r) {
          var o,
            i = null != t ? t : e.nullContext || {},
            s = n.helperMissing,
            l = e.escapeExpression;
          return (
            '        <option value="' +
            l(
              "function" ==
                typeof (o =
                  null != (o = n.level_key || (null != t ? t.level_key : t))
                    ? o
                    : s)
                ? o.call(i, { name: "level_key", hash: {}, data: r })
                : o
            ) +
            '">' +
            l(
              "function" ==
                typeof (o =
                  null != (o = n.name || (null != t ? t.name : t)) ? o : s)
                ? o.call(i, { name: "name", hash: {}, data: r })
                : o
            ) +
            "</option>\n"
          );
        },
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          var o,
            i = null != t ? t : e.nullContext || {};
          return (
            '<div class="swag-data-selector">\n  <div id="swag-score-context" class="swag-score-context">\n  </div>\n  <div class="swag-select-container">\n    <select id="swag-data-view-day" class="swag-select">\n' +
            (null !=
            (o = n.each.call(i, null != t ? t.days : t, {
              name: "each",
              hash: {},
              fn: e.program(1, r, 0),
              inverse: e.noop,
              data: r,
            }))
              ? o
              : "") +
            '    </select>\n    <select id="swag-data-view-level" class="swag-select">\n' +
            (null !=
            (o = n.each.call(i, null != t ? t.levels : t, {
              name: "each",
              hash: {},
              fn: e.program(3, r, 0),
              inverse: e.noop,
              data: r,
            }))
              ? o
              : "") +
            '    </select>\n  </div>\n</div>\n<div id="swag-data-table" class="swag-data-table"></div>\n'
          );
        },
        useData: !0,
      });
    },
    /*!****************************************************************!*\
!*** ./src/templates/api/dialog-score-confirmation.handlebars ***!
\****************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          var o;
          return (
            '<div class="score-confirmation-message">Your score of ' +
            e.escapeExpression(
              "function" ==
                typeof (o =
                  null != (o = n.value || (null != t ? t.value : t))
                    ? o
                    : n.helperMissing)
                ? o.call(null != t ? t : e.nullContext || {}, {
                    name: "value",
                    hash: {},
                    data: r,
                  })
                : o
            ) +
            ' has been submitted!</div>\n<div class="swag-button-confirmation" data-action="back">Ok</div>\n'
          );
        },
        useData: !0,
      });
    },
    /*!**************************************************!*\
!*** ./src/templates/api/data-scores.handlebars ***!
\**************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        1: function (e, t, n, a, r) {
          return "col5";
        },
        3: function (e, t, n, a, r) {
          var o;
          return (
            '    <div class="data-meta">' +
            e.escapeExpression(
              e.lambda(
                null != (o = null != t ? t.category : t) ? o.metaName : o,
                t
              )
            ) +
            "</div>\n"
          );
        },
        5: function (e, t, n, a, r) {
          return 'class="col5"';
        },
        7: function (e, t, n, a, r, o, i) {
          var s;
          return null !=
            (s = n.each.call(
              null != t ? t : e.nullContext || {},
              null != t ? t.scores : t,
              {
                name: "each",
                hash: {},
                fn: e.program(8, r, 0, o, i),
                inverse: e.noop,
                data: r,
              }
            ))
            ? s
            : "";
        },
        8: function (e, t, n, a, r, o, i) {
          var s,
            l,
            u = null != t ? t : e.nullContext || {},
            c = n.helperMissing,
            d = e.escapeExpression;
          return (
            '      <div>\n        <div class="data-position">' +
            d(
              "function" ==
                typeof (l =
                  null != (l = n.position || (null != t ? t.position : t))
                    ? l
                    : c)
                ? l.call(u, { name: "position", hash: {}, data: r })
                : l
            ) +
            '</div>\n        <div class="data-screen-name">' +
            d(
              "function" ==
                typeof (l =
                  null != (l = n.screen_name || (null != t ? t.screen_name : t))
                    ? l
                    : c)
                ? l.call(u, { name: "screen_name", hash: {}, data: r })
                : l
            ) +
            "</div>\n" +
            (null !=
            (s = n.if.call(
              u,
              null != (s = null != i[1] ? i[1].category : i[1])
                ? s.metaValue
                : s,
              {
                name: "if",
                hash: {},
                fn: e.program(9, r, 0, o, i),
                inverse: e.noop,
                data: r,
              }
            ))
              ? s
              : "") +
            '        <div class="data-score">' +
            d(
              "function" ==
                typeof (l =
                  null != (l = n.value || (null != t ? t.value : t)) ? l : c)
                ? l.call(u, { name: "value", hash: {}, data: r })
                : l
            ) +
            '</div>\n        <div class="data-date">' +
            d(
              "function" ==
                typeof (l =
                  null !=
                  (l = n.date_created || (null != t ? t.date_created : t))
                    ? l
                    : c)
                ? l.call(u, { name: "date_created", hash: {}, data: r })
                : l
            ) +
            "</div>\n      </div>\n"
          );
        },
        9: function (e, t, n, a, r) {
          var o;
          return (
            '          <div class="data-meta">' +
            e.escapeExpression(
              "function" ==
                typeof (o =
                  null != (o = n.meta || (null != t ? t.meta : t))
                    ? o
                    : n.helperMissing)
                ? o.call(null != t ? t : e.nullContext || {}, {
                    name: "meta",
                    hash: {},
                    data: r,
                  })
                : o
            ) +
            "</div>\n"
          );
        },
        11: function (e, t, n, a, r) {
          return '    <div class="data-empty">No scores for found for this period</data>\n';
        },
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r, o, i) {
          var s,
            l = null != t ? t : e.nullContext || {};
          return (
            '<div class="swag-data-header ' +
            (null !=
            (s = n.if.call(
              l,
              null != (s = null != t ? t.category : t) ? s.metaValue : s,
              {
                name: "if",
                hash: {},
                fn: e.program(1, r, 0, o, i),
                inverse: e.noop,
                data: r,
              }
            ))
              ? s
              : "") +
            '">\n  <div class="data-position">#</div>\n  <div class="data-screen-name">Name</div>\n' +
            (null !=
            (s = n.if.call(
              l,
              null != (s = null != t ? t.category : t) ? s.metaValue : s,
              {
                name: "if",
                hash: {},
                fn: e.program(3, r, 0, o, i),
                inverse: e.noop,
                data: r,
              }
            ))
              ? s
              : "") +
            '  <div class="data-score">' +
            e.escapeExpression(
              e.lambda(
                null != (s = null != t ? t.category : t) ? s.value_name : s,
                t
              )
            ) +
            '</div>\n  <div class="data-date">Date</div>\n</div>\n<div id="swag-data" ' +
            (null !=
            (s = n.if.call(
              l,
              null != (s = null != t ? t.category : t) ? s.metaValue : s,
              {
                name: "if",
                hash: {},
                fn: e.program(5, r, 0, o, i),
                inverse: e.noop,
                data: r,
              }
            ))
              ? s
              : "") +
            ">\n" +
            (null !=
            (s = n.if.call(
              l,
              null != (s = null != t ? t.scores : t) ? s.length : s,
              {
                name: "if",
                hash: {},
                fn: e.program(7, r, 0, o, i),
                inverse: e.program(11, r, 0, o, i),
                data: r,
              }
            ))
              ? s
              : "") +
            "</div>\n"
          );
        },
        useData: !0,
        useDepths: !0,
      });
    },
    /*!*********************************************************!*\
!*** ./src/templates/api/data-score-context.handlebars ***!
\*********************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        1: function (e, t, n, a, r) {
          var o;
          return (
            "  <div><b>Today's best score:</b> " +
            e.escapeExpression(
              e.lambda(
                null !=
                  (o =
                    null != (o = null != t ? t.context : t) ? o.dailyBest : o)
                  ? o.value
                  : o,
                t
              )
            ) +
            "</div>\n" +
            (null !=
            (o = n.if.call(
              null != t ? t : e.nullContext || {},
              null !=
                (o =
                  null != (o = null != t ? t.context : t) ? o.scorePosition : o)
                ? o.value
                : o,
              {
                name: "if",
                hash: {},
                fn: e.program(2, r, 0),
                inverse: e.program(4, r, 0),
                data: r,
              }
            ))
              ? o
              : "")
          );
        },
        2: function (e, t, n, a, r) {
          var o,
            i = e.lambda,
            s = e.escapeExpression;
          return (
            "    <div>You placed #" +
            s(
              i(
                null !=
                  (o =
                    null != (o = null != t ? t.context : t)
                      ? o.scorePosition
                      : o)
                  ? o.value
                  : o,
                t
              )
            ) +
            " out of " +
            s(
              i(
                null !=
                  (o =
                    null != (o = null != t ? t.context : t) ? o.totalScores : o)
                  ? o.value
                  : o,
                t
              )
            ) +
            " scores today</div>\n"
          );
        },
        4: function (e, t, n, a, r) {
          return "    <div>Not yet placed</div>\n";
        },
        6: function (e, t, n, a, r) {
          return "<div>No scores yet today</div>\n";
        },
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          var o;
          return null !=
            (o = n.if.call(
              null != t ? t : e.nullContext || {},
              null !=
                (o =
                  null != (o = null != t ? t.context : t) ? o.totalScores : o)
                ? o.value
                : o,
              {
                name: "if",
                hash: {},
                fn: e.program(1, r, 0),
                inverse: e.program(6, r, 0),
                data: r,
              }
            ))
            ? o
            : "";
        },
        useData: !0,
      });
    },
    /*!****************************************************************!*\
!*** ./src/templates/api/data-daily-scores-context.handlebars ***!
\****************************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        1: function (e, t, n, a, r) {
          var o;
          return (
            "  <div><b>Your best best score for this day:</b> " +
            e.escapeExpression(
              e.lambda(
                null !=
                  (o =
                    null != (o = null != t ? t.context : t) ? o.dailyBest : o)
                  ? o.value
                  : o,
                t
              )
            ) +
            "</div>\n" +
            (null !=
            (o = n.if.call(
              null != t ? t : e.nullContext || {},
              null !=
                (o =
                  null != (o = null != t ? t.context : t) ? o.scorePosition : o)
                ? o.value
                : o,
              {
                name: "if",
                hash: {},
                fn: e.program(2, r, 0),
                inverse: e.program(4, r, 0),
                data: r,
              }
            ))
              ? o
              : "")
          );
        },
        2: function (e, t, n, a, r) {
          var o,
            i = e.lambda,
            s = e.escapeExpression;
          return (
            "    <div>You placed #" +
            s(
              i(
                null !=
                  (o =
                    null != (o = null != t ? t.context : t)
                      ? o.scorePosition
                      : o)
                  ? o.value
                  : o,
                t
              )
            ) +
            " out of " +
            s(
              i(
                null !=
                  (o =
                    null != (o = null != t ? t.context : t) ? o.totalScores : o)
                  ? o.value
                  : o,
                t
              )
            ) +
            " scores for this day</div>\n"
          );
        },
        4: function (e, t, n, a, r) {
          return "    <div>Not yet placed</div>\n";
        },
        6: function (e, t, n, a, r) {
          return "<div>No scores yet for this day</div>\n";
        },
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          var o;
          return null !=
            (o = n.if.call(
              null != t ? t : e.nullContext || {},
              null !=
                (o =
                  null != (o = null != t ? t.context : t) ? o.totalScores : o)
                ? o.value
                : o,
              {
                name: "if",
                hash: {},
                fn: e.program(1, r, 0),
                inverse: e.program(6, r, 0),
                data: r,
              }
            ))
            ? o
            : "";
        },
        useData: !0,
      });
    },
    /*!**********************************************************!*\
!*** ./src/templates/api/dialog-achievements.handlebars ***!
\**********************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          var o;
          return (
            '<div class="swag-data-selector">\n  <div class="selector-title">' +
            e.escapeExpression(e.lambda((o = r && r.root) && o.title, t)) +
            '</div>\n</div>\n<div class="swag-data-table">\n  <div id="swag-data"></div>\n</div>\n'
          );
        },
        useData: !0,
      });
    },
    /*!********************************************************!*\
!*** ./src/templates/api/data-achievements.handlebars ***!
\********************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        1: function (e, t, n, a, r) {
          var o,
            i,
            s = null != t ? t : e.nullContext || {},
            l = n.helperMissing,
            u = e.escapeExpression;
          return (
            '  <div class="data-achievement-row ' +
            (null !=
            (o = n.if.call(s, null != t ? t.user_achieved : t, {
              name: "if",
              hash: {},
              fn: e.program(2, r, 0),
              inverse: e.noop,
              data: r,
            }))
              ? o
              : "") +
            '">\n    <div>\n      <div class="data-achievement-name">' +
            u(
              "function" ==
                typeof (i =
                  null != (i = n.name || (null != t ? t.name : t)) ? i : l)
                ? i.call(s, { name: "name", hash: {}, data: r })
                : i
            ) +
            '</div>\n      <div class="data-description">' +
            u(
              "function" ==
                typeof (i =
                  null != (i = n.description || (null != t ? t.description : t))
                    ? i
                    : l)
                ? i.call(s, { name: "description", hash: {}, data: r })
                : i
            ) +
            "</div>\n    </div>\n  </div>\n"
          );
        },
        2: function (e, t, n, a, r) {
          return "achieved";
        },
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          var o;
          return null !=
            (o = n.each.call(
              null != t ? t : e.nullContext || {},
              null != t ? t.achievements : t,
              {
                name: "each",
                hash: {},
                fn: e.program(1, r, 0),
                inverse: e.noop,
                data: r,
              }
            ))
            ? o
            : "";
        },
        useData: !0,
      });
    },
    /*!**********************************************************!*\
!*** ./src/templates/api/dialog-weeklyscores.handlebars ***!
\**********************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        1: function (e, t, n, a, r) {
          var o,
            i = null != t ? t : e.nullContext || {},
            s = n.helperMissing,
            l = e.escapeExpression;
          return (
            '      <option value="' +
            l(
              "function" ==
                typeof (o =
                  null != (o = n.level_key || (null != t ? t.level_key : t))
                    ? o
                    : s)
                ? o.call(i, { name: "level_key", hash: {}, data: r })
                : o
            ) +
            '">' +
            l(
              "function" ==
                typeof (o =
                  null != (o = n.name || (null != t ? t.name : t)) ? o : s)
                ? o.call(i, { name: "name", hash: {}, data: r })
                : o
            ) +
            "</option>\n"
          );
        },
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          var o;
          return (
            '<div class="swag-data-selector">\n  <select id="swag-data-view-level" class="swag-select">\n' +
            (null !=
            (o = n.each.call(
              null != t ? t : e.nullContext || {},
              null != t ? t.levels : t,
              {
                name: "each",
                hash: {},
                fn: e.program(1, r, 0),
                inverse: e.noop,
                data: r,
              }
            ))
              ? o
              : "") +
            '  </select>\n</div>\n<div class="swag-data-table">\n  <div class="swag-data-header">\n    <div class="data-day">Day</div>\n    <div class="data-score">Score</div>\n  </div>\n  <div id="swag-data"></div>\n</div>\n'
          );
        },
        useData: !0,
      });
    },
    /*!********************************************************!*\
!*** ./src/templates/api/data-weeklyscores.handlebars ***!
\********************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        1: function (e, t, n, a, r) {
          var o,
            i,
            s = null != t ? t : e.nullContext || {};
          return (
            '  <div>\n    <div class="data-day">' +
            e.escapeExpression(
              "function" ==
                typeof (i =
                  null != (i = n.day_name || (null != t ? t.day_name : t))
                    ? i
                    : n.helperMissing)
                ? i.call(s, { name: "day_name", hash: {}, data: r })
                : i
            ) +
            '</div>\n    <div class="data-score">' +
            (null !=
            (o = n.if.call(s, null != t ? t.value : t, {
              name: "if",
              hash: {},
              fn: e.program(2, r, 0),
              inverse: e.program(4, r, 0),
              data: r,
            }))
              ? o
              : "") +
            "</div>\n  </div>\n"
          );
        },
        2: function (e, t, n, a, r) {
          var o;
          return e.escapeExpression(
            "function" ==
              typeof (o =
                null != (o = n.value || (null != t ? t.value : t))
                  ? o
                  : n.helperMissing)
              ? o.call(null != t ? t : e.nullContext || {}, {
                  name: "value",
                  hash: {},
                  data: r,
                })
              : o
          );
        },
        4: function (e, t, n, a, r) {
          return "-";
        },
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          var o;
          return null !=
            (o = n.each.call(
              null != t ? t : e.nullContext || {},
              null != t ? t.weeklyscores : t,
              {
                name: "each",
                hash: {},
                fn: e.program(1, r, 0),
                inverse: e.noop,
                data: r,
              }
            ))
            ? o
            : "";
        },
        useData: !0,
      });
    },
    /*!*********************************************************!*\
!*** ./src/templates/api/branding-animation.handlebars ***!
\*********************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          return '<div id="swag-branding-animation-wrapper" class="swag-branding-animation-wrapper"s>\n  <img id="swag-branding-animation" src="https://cdn2.addictinggames.com/addictinggames-content/ag-assets/preloaders/ag-branding-animation.gif" width="100%" height="auto"/>\n</div>\n';
        },
        useData: !0,
      });
    },
    /*!********************************************************!*\
!*** ./src/templates/api/dialog-user-login.handlebars ***!
\********************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          return '<div class="swag-form">\n  <div class="swag-form-container">\n    <input type="text" id="swag-login-username" placeholder="username"/>\n    <input type="password" id="swag-login-password" placeholder="password"//>\n    <input type="button" id="swag-login-submit" value="Login"/>\n    <div id="swag-login-message" class="swag-form-message"></div>\n  </div>\n  <div class="swag-form-container">\n      <p>Not a member yet?</p>\n      <input type="button" id="swag-login-create" class="swag-create-account" value="Create your account"/>\n  </div>\n</div>\n';
        },
        useData: !0,
      });
    },
    /*!*********************************************************!*\
!*** ./src/templates/api/dialog-user-create.handlebars ***!
\*********************************************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      var a = n(/*!../../../node_modules/handlebars/runtime.js*/ 0);
      e.exports = (a.default || a).template({
        compiler: [7, ">= 4.0.0"],
        main: function (e, t, n, a, r) {
          return '<div class="swag-form">\n  <div class="swag-form-container">\n    <input type="text" id="swag-logincreate-username" placeholder="username"/>\n    <input type="text" id="swag-logincreate-mail" placeholder="email"//>\n    <input type="password" id="swag-logincreate-password" placeholder="password"//>\n    <input type="button" id="swag-logincreate-submit" value="Create"/>\n    <div id="swag-logincreate-message" class="swag-form-message"></div>\n  </div>\n</div>\n';
        },
        useData: !0,
      });
    },
    /*!************************!*\
!*** ./src/api/api.js ***!
\************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      var a = n(/*!component-emitter*/ 6),
        r = n(/*!../config*/ 2),
        o = n(/*!element-resize-event*/ 7),
        i = n(/*!../session*/ 3),
        s = n(/*!./data*/ 48),
        l = n(/*!./ui*/ 9),
        u = n(/*!../utils*/ 4);
      function c(e) {
        var t = this,
          n = e.wrapper,
          r = e.api_key;
        (this._options = { wrapper: n, api_key: r }),
          this._init(),
          a(this),
          l.on("UI_EVENT", function (e) {
            t.emit(e, { type: e });
          }),
          l.on("UI_ERROR", function (e) {
            t._emitError(e);
          }),
          l.on("DATA_ERROR", function (e) {
            t._emitError(e);
          }),
          s.on("DATA_EVENT", function (e) {
            t.emit("DATA_EVENT", { type: e });
          }),
          s.on("DATA_ERROR", function (e) {
            t._emitError(e);
          });
      }
      var d = {
        startSession: function () {
          var e = this;
          return (
            u.debug("start session"),
            s.getEntity().then(function () {
              u.debug("session ready"),
                e.emit(r.events.SESSION_READY, { session_ready: !0 });
            })
          );
        },
        getScoreCategories: function () {
          return s.getScoreCategories();
        },
        getDays: function (e) {
          return s.getDays(e);
        },
        getScores: function (e) {
          return s.getScores(e);
        },
        postScore: function (e, t, n) {
          return s.postScore(e, t, n).then(function () {
            n &&
              !0 === n.confirmation &&
              l.renderDialog("scoreconfirmation", { value: t });
          });
        },
        postDailyScore: function (e, t, n) {
          return s.postDailyScore(e, t, n);
        },
        getAchievementCategories: function () {
          return s.getAchievementCategories();
        },
        postAchievement: function (e) {
          return s.postAchievement(e);
        },
        getUserAchievements: function () {
          return s.getUserAchievements();
        },
        postDatastore: function (e, t) {
          return s.postDatastore(e, t);
        },
        getUserDatastore: function () {
          return s.getUserDatastore();
        },
        populateLevelSelect: function (e) {
          return l.populateLevelSelect(e);
        },
        populateDaySelect: function (e, t) {
          return l.populateDaySelect(e, t);
        },
        populateAchievementSelect: function (e) {
          return l.populateAchievementSelect(e);
        },
        getCurrentEntity: function () {
          return i.entity;
        },
        showDialog: function (e, t) {
          return l.renderDialog(e, t);
        },
        isSubscriber: function () {
          return s.isSubscriber();
        },
        hasDailyScore: function (e) {
          return s.hasDailyScore(e);
        },
        getCurrentDay: function () {
          return s.getCurrentDay();
        },
        getBrandingLogo: function () {
          return l.getBrandingLogo();
        },
        getBrandingLogoUrl: function () {
          return l.getBrandingLogoUrl();
        },
        startGame: function () {
          return l.startGame();
        },
        endGame: function () {
          return l.endGame();
        },
        showAd: function () {
          return l.showAd();
        },
        postExternalMessage: function (e) {
          return s.postExternalMessage(e);
        },
        getCurrentUser: function () {
          return s.getCurrentUser();
        },
        userLogout: function () {
          return s.userLogout();
        },
        _init: function () {
          var e = this._getSiteMode();
          (i.api_key = this._options.api_key),
            (i.wrapper = this._options.wrapper),
            i.wrapper.classList.add("swag-wrapper"),
            (i.theme = e),
            (i.provider = e),
            (i.apiRoot = r.themes[e].apiRoot),
            o(i.wrapper, function () {
              setTimeout(function () {
                l.resize();
              }, 400);
            });
        },
        _getSiteMode: function () {
          var e = window.SWAGTHEME;
          return r.themes[e] ? e : "shockwave";
        },
        _emitError: function (e) {
          this.emit(this.ERROR, { type: e });
        },
        _parseUrlOptions: function (e) {
          var t = {};
          return -1 === window.location.href.indexOf("?")
            ? t
            : (decodeURIComponent(
                window.location.href.slice(
                  window.location.href.indexOf("?") + 1
                )
              )
                .split("&")
                .forEach(function (e, n) {
                  var a = e.split("=", 2);
                  t[a[0]] = a[1];
                }),
              e && e in t ? t[e] : t);
        },
      };
      Object.assign(c.prototype, d), (e.exports = c);
    },
    /*!*************************!*\
!*** ./src/api/data.js ***!
\*************************/ /*!no static exports found*/ /*!all exports used*/ /*!ModuleConcatenation bailout: Module is not an ECMAScript module*/ function (
      e,
      t,
      n
    ) {
      "use strict";
      var a = n(/*!../config*/ 2),
        r = (n(/*!../utils*/ 4), n(/*!../session*/ 3)),
        o = n(/*!../data*/ 8),
        i = {
          apiMethods: Object.assign(o.apiMethods, {
            postScore: "/v1/score",
            postDailyScore: "/v1/dailyscore",
            postAchievement: "/v1/achievement",
            postDatastore: "/v1/datastore",
          }),
          postScore: function (e, t, n) {
            var a = { game: r.api_key, level_key: e, value: t };
            n && n.meta && (a.meta = n.meta);
            var o = this.buildUrlParamString(a);
            return this.postAPIData({
              method: this.apiMethods.postScore,
              body: a,
              params: o,
            });
          },
          postDailyScore: function (e, t, n, a) {
            var o = { game: r.api_key, day: e, level_key: t, value: n },
              i = this.buildUrlParamString(o);
            return this.postAPIData({
              method: this.apiMethods.postDailyScore,
              body: o,
              params: i,
            });
          },
          postAchievement: function (e) {
            var t = { game: r.api_key, achievement_key: e },
              n = this.buildUrlParamString(t);
            return this.postAPIData({
              method: this.apiMethods.postAchievement,
              body: t,
              params: n,
            });
          },
          postDatastore: function (e, t) {
            var n = { game: r.api_key, key: e, value: t },
              a = this.buildUrlParamString(n);
            return this.postAPIData({
              method: this.apiMethods.postDatastore,
              body: n,
              params: a,
            });
          },
          postExternalMessage: function (e) {
            if (e && e.type) {
              if (window && window.top) {
                var t,
                  n = ((t = e), (type = t.type), (o = t.data), t);
                window.top.postMessage(n, "*");
              }
            } else self.emit(events.DATA_ERROR, a.events.INVALID_MESSAGE);
          },
        };
      e.exports = Object.assign(o, i);
    },
  ]);
});