(() => {
  var t = {
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (t[o] = n[o]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            n =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            o = e && "IntersectionObserver" in window,
            r = e && "classList" in document.createElement("p"),
            a = e && window.devicePixelRatio > 1,
            i = {
              elements_selector: ".lazy",
              container: n || e ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
            },
            s = function (e) {
              return t({}, i, e);
            },
            l = function (t, e) {
              var n,
                o = "LazyLoad::Initialized",
                r = new t(e);
              try {
                n = new CustomEvent(o, { detail: { instance: r } });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !1,
                  !1,
                  { instance: r }
                );
              }
              window.dispatchEvent(n);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            f = "poster",
            h = "llOriginalAttrs",
            m = "loading",
            p = "loaded",
            g = "applied",
            v = "error",
            y = "native",
            _ = "data-",
            w = "ll-status",
            b = function (t, e) {
              return t.getAttribute(_ + e);
            },
            E = function (t) {
              return b(t, w);
            },
            L = function (t, e) {
              return (function (t, e, n) {
                var o = "data-ll-status";
                null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
              })(t, 0, e);
            },
            A = function (t) {
              return L(t, null);
            },
            x = function (t) {
              return null === E(t);
            },
            S = function (t) {
              return E(t) === y;
            },
            k = [m, p, g, v],
            I = function (t, e, n, o) {
              t &&
                (void 0 === o ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, o));
            },
            C = function (t, e) {
              r
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            T = function (t, e) {
              r
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            q = function (t) {
              return t.llTempImage;
            },
            P = function (t, e) {
              if (e) {
                var n = e._observer;
                n && n.unobserve(t);
              }
            },
            W = function (t, e) {
              t && (t.loadingCount += e);
            },
            O = function (t, e) {
              t && (t.toLoadCount = e);
            },
            M = function (t) {
              for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            R = function (t, e) {
              var n = t.parentNode;
              n && "PICTURE" === n.tagName && M(n).forEach(e);
            },
            $ = function (t, e) {
              M(t).forEach(e);
            },
            N = [c],
            j = [c, f],
            z = [c, d, u],
            D = function (t) {
              return !!t[h];
            },
            H = function (t) {
              return t[h];
            },
            B = function (t) {
              return delete t[h];
            },
            Y = function (t, e) {
              if (!D(t)) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.getAttribute(e);
                }),
                  (t[h] = n);
              }
            },
            G = function (t, e) {
              if (D(t)) {
                var n = H(t);
                e.forEach(function (e) {
                  !(function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(t, e, n[e]);
                });
              }
            },
            U = function (t, e, n) {
              C(t, e.class_loading),
                L(t, m),
                n && (W(n, 1), I(e.callback_loading, t, n));
            },
            Z = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            F = function (t, e) {
              Z(t, u, b(t, e.data_sizes)),
                Z(t, d, b(t, e.data_srcset)),
                Z(t, c, b(t, e.data_src));
            },
            Q = {
              IMG: function (t, e) {
                R(t, function (t) {
                  Y(t, z), F(t, e);
                }),
                  Y(t, z),
                  F(t, e);
              },
              IFRAME: function (t, e) {
                Y(t, N), Z(t, c, b(t, e.data_src));
              },
              VIDEO: function (t, e) {
                $(t, function (t) {
                  Y(t, N), Z(t, c, b(t, e.data_src));
                }),
                  Y(t, j),
                  Z(t, f, b(t, e.data_poster)),
                  Z(t, c, b(t, e.data_src)),
                  t.load();
              },
            },
            X = ["IMG", "IFRAME", "VIDEO"],
            V = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                I(t.callback_finish, e);
            },
            J = function (t, e, n) {
              t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
            },
            K = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            tt = function (t) {
              return !!t.llEvLisnrs;
            },
            et = function (t) {
              if (tt(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                  var o = e[n];
                  K(t, n, o);
                }
                delete t.llEvLisnrs;
              }
            },
            nt = function (t, e, n) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                W(n, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(n),
                T(t, e.class_loading),
                e.unobserve_completed && P(t, n);
            },
            ot = function (t, e, n) {
              var o = q(t) || t;
              tt(o) ||
                (function (t, e, n) {
                  tt(t) || (t.llEvLisnrs = {});
                  var o = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  J(t, o, e), J(t, "error", n);
                })(
                  o,
                  function (r) {
                    !(function (t, e, n, o) {
                      var r = S(e);
                      nt(e, n, o),
                        C(e, n.class_loaded),
                        L(e, p),
                        I(n.callback_loaded, e, o),
                        r || V(n, o);
                    })(0, t, e, n),
                      et(o);
                  },
                  function (r) {
                    !(function (t, e, n, o) {
                      var r = S(e);
                      nt(e, n, o),
                        C(e, n.class_error),
                        L(e, v),
                        I(n.callback_error, e, o),
                        r || V(n, o);
                    })(0, t, e, n),
                      et(o);
                  }
                );
            },
            rt = function (t, e, n) {
              !(function (t) {
                t.llTempImage = document.createElement("IMG");
              })(t),
                ot(t, e, n),
                (function (t) {
                  D(t) || (t[h] = { backgroundImage: t.style.backgroundImage });
                })(t),
                (function (t, e, n) {
                  var o = b(t, e.data_bg),
                    r = b(t, e.data_bg_hidpi),
                    i = a && r ? r : o;
                  i &&
                    ((t.style.backgroundImage = 'url("'.concat(i, '")')),
                    q(t).setAttribute(c, i),
                    U(t, e, n));
                })(t, e, n),
                (function (t, e, n) {
                  var o = b(t, e.data_bg_multi),
                    r = b(t, e.data_bg_multi_hidpi),
                    i = a && r ? r : o;
                  i &&
                    ((t.style.backgroundImage = i),
                    (function (t, e, n) {
                      C(t, e.class_applied),
                        L(t, g),
                        n &&
                          (e.unobserve_completed && P(t, e),
                          I(e.callback_applied, t, n));
                    })(t, e, n));
                })(t, e, n);
            },
            at = function (t, e, n) {
              !(function (t) {
                return X.indexOf(t.tagName) > -1;
              })(t)
                ? rt(t, e, n)
                : (function (t, e, n) {
                    ot(t, e, n),
                      (function (t, e, n) {
                        var o = Q[t.tagName];
                        o && (o(t, e), U(t, e, n));
                      })(t, e, n);
                  })(t, e, n);
            },
            it = function (t) {
              t.removeAttribute(c), t.removeAttribute(d), t.removeAttribute(u);
            },
            st = function (t) {
              R(t, function (t) {
                G(t, z);
              }),
                G(t, z);
            },
            lt = {
              IMG: st,
              IFRAME: function (t) {
                G(t, N);
              },
              VIDEO: function (t) {
                $(t, function (t) {
                  G(t, N);
                }),
                  G(t, j),
                  t.load();
              },
            },
            ct = function (t, e) {
              (function (t) {
                var e = lt[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (D(t)) {
                        var e = H(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  x(t) ||
                    S(t) ||
                    (T(t, e.class_entered),
                    T(t, e.class_exited),
                    T(t, e.class_applied),
                    T(t, e.class_loading),
                    T(t, e.class_loaded),
                    T(t, e.class_error));
                })(t, e),
                A(t),
                B(t);
            },
            dt = ["IMG", "IFRAME", "VIDEO"],
            ut = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            ft = function (t, e, n) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, n, o) {
                      var r = (function (t) {
                        return k.indexOf(E(t)) >= 0;
                      })(t);
                      L(t, "entered"),
                        C(t, n.class_entered),
                        T(t, n.class_exited),
                        (function (t, e, n) {
                          e.unobserve_entered && P(t, n);
                        })(t, n, o),
                        I(n.callback_enter, t, e, o),
                        r || at(t, n, o);
                    })(t.target, t, e, n)
                  : (function (t, e, n, o) {
                      x(t) ||
                        (C(t, n.class_exited),
                        (function (t, e, n, o) {
                          n.cancel_on_exit &&
                            (function (t) {
                              return E(t) === m;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (et(t),
                            (function (t) {
                              R(t, function (t) {
                                it(t);
                              }),
                                it(t);
                            })(t),
                            st(t),
                            T(t, n.class_loading),
                            W(o, -1),
                            A(t),
                            I(n.callback_cancel, t, e, o));
                        })(t, e, n, o),
                        I(n.callback_exit, t, e, o));
                    })(t.target, t, e, n);
              });
            },
            ht = function (t) {
              return Array.prototype.slice.call(t);
            },
            mt = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            pt = function (t) {
              return (function (t) {
                return E(t) === v;
              })(t);
            },
            gt = function (t, e) {
              return (function (t) {
                return ht(t).filter(x);
              })(t || mt(e));
            },
            vt = function (t, n) {
              var r = s(t);
              (this._settings = r),
                (this.loadingCount = 0),
                (function (t, e) {
                  o &&
                    !ut(t) &&
                    (e._observer = new IntersectionObserver(
                      function (n) {
                        ft(n, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t)
                    ));
                })(r, this),
                (function (t, n) {
                  e &&
                    window.addEventListener("online", function () {
                      !(function (t, e) {
                        var n;
                        ((n = mt(t)), ht(n).filter(pt)).forEach(function (e) {
                          T(e, t.class_error), A(e);
                        }),
                          e.update();
                      })(t, n);
                    });
                })(r, this),
                this.update(n);
            };
          return (
            (vt.prototype = {
              update: function (t) {
                var e,
                  r,
                  a = this._settings,
                  i = gt(t, a);
                O(this, i.length),
                  !n && o
                    ? ut(a)
                      ? (function (t, e, n) {
                          t.forEach(function (t) {
                            -1 !== dt.indexOf(t.tagName) &&
                              (function (t, e, n) {
                                t.setAttribute("loading", "lazy"),
                                  ot(t, e, n),
                                  (function (t, e) {
                                    var n = Q[t.tagName];
                                    n && n(t, e);
                                  })(t, e),
                                  L(t, y);
                              })(t, e, n);
                          }),
                            O(n, 0);
                        })(i, a, this)
                      : ((r = i),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, r))
                    : this.loadAll(i);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  mt(this._settings).forEach(function (t) {
                    B(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  n = this._settings;
                gt(t, n).forEach(function (t) {
                  P(t, e), at(t, n, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                mt(t).forEach(function (e) {
                  ct(e, t);
                });
              },
            }),
            (vt.load = function (t, e) {
              var n = s(e);
              at(t, n);
            }),
            (vt.resetStatus = function (t) {
              A(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, o = 0; (n = e[o]); o += 1) l(t, n);
                  else l(t, e);
              })(vt, window.lazyLoadOptions),
            vt
          );
        })();
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var a = (e[o] = { exports: {} });
    return t[o].call(a.exports, a, a.exports, n), a.exports;
  }
  (() => {
    "use strict";
    const t = {};
    let e = (t, e = 500, n = 0) => {
        t.classList.contains("_slide") ||
          (t.classList.add("_slide"),
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = `${t.offsetHeight}px`),
          t.offsetHeight,
          (t.style.overflow = "hidden"),
          (t.style.height = n ? `${n}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          window.setTimeout(() => {
            (t.hidden = !n),
              !n && t.style.removeProperty("height"),
              t.style.removeProperty("padding-top"),
              t.style.removeProperty("padding-bottom"),
              t.style.removeProperty("margin-top"),
              t.style.removeProperty("margin-bottom"),
              !n && t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: t } })
              );
          }, e));
      },
      o = (t, e = 500, n = 0) => {
        if (!t.classList.contains("_slide")) {
          t.classList.add("_slide"),
            (t.hidden = !t.hidden && null),
            n && t.style.removeProperty("height");
          let o = t.offsetHeight;
          (t.style.overflow = "hidden"),
            (t.style.height = n ? `${n}px` : "0px"),
            (t.style.paddingTop = 0),
            (t.style.paddingBottom = 0),
            (t.style.marginTop = 0),
            (t.style.marginBottom = 0),
            t.offsetHeight,
            (t.style.transitionProperty = "height, margin, padding"),
            (t.style.transitionDuration = e + "ms"),
            (t.style.height = o + "px"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              t.style.removeProperty("height"),
                t.style.removeProperty("overflow"),
                t.style.removeProperty("transition-duration"),
                t.style.removeProperty("transition-property"),
                t.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: t } })
                );
            }, e);
        }
      },
      r = !0,
      a = (t = 500) => {
        let e = document.querySelector("body");
        if (r) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < n.length; t++) {
              n[t].style.paddingRight = "0px";
            }
            (e.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, t);
        }
      },
      i = (t = 500) => {
        let e = document.querySelector("body");
        if (r) {
          let n = document.querySelectorAll("[data-lp]");
          for (let t = 0; t < n.length; t++) {
            n[t].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (e.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (r = !1),
            setTimeout(function () {
              r = !0;
            }, t);
        }
      };
    function s(t) {
      setTimeout(() => {
        window.FLS && console.log(t);
      }, 0);
    }
    function l(t) {
      return t.filter(function (t, e, n) {
        return n.indexOf(t) === e;
      });
    }
    function c(t, e) {
      const n = Array.from(t).filter(function (t, n, o) {
        if (t.dataset[e]) return t.dataset[e].split(",")[0];
      });
      if (n.length) {
        const t = [];
        n.forEach((n) => {
          const o = {},
            r = n.dataset[e].split(",");
          (o.value = r[0]),
            (o.type = r[1] ? r[1].trim() : "max"),
            (o.item = n),
            t.push(o);
        });
        let o = t.map(function (t) {
          return (
            "(" +
            t.type +
            "-width: " +
            t.value +
            "px)," +
            t.value +
            "," +
            t.type
          );
        });
        o = l(o);
        const r = [];
        if (o.length)
          return (
            o.forEach((e) => {
              const n = e.split(","),
                o = n[1],
                a = n[2],
                i = window.matchMedia(n[0]),
                s = t.filter(function (t) {
                  if (t.value === o && t.type === a) return !0;
                });
              r.push({ itemsArray: s, matchMedia: i });
            }),
            r
          );
      }
    }
    t.mousePrlx = new (class {
      constructor(t, e = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, t)),
          this.config.init)
        ) {
          const t = document.querySelectorAll("[data-prlx-mouse]");
          t.length
            ? (this.paralaxMouseInit(t),
              this.setLogging(`??????????????????, ?????????? ???? ??????????????????: (${t.length})`))
            : this.setLogging("?????? ???? ???????????? ??????????????. ????????...zzZZZzZZz...");
        }
      }
      paralaxMouseInit(t) {
        t.forEach((t) => {
          const e = t.closest("[data-prlx-mouse-wrapper]"),
            n = t.dataset.prlxCx ? +t.dataset.prlxCx : 100,
            o = t.dataset.prlxCy ? +t.dataset.prlxCy : 100,
            r = t.hasAttribute("data-prlx-dxr") ? -1 : 1,
            a = t.hasAttribute("data-prlx-dyr") ? -1 : 1,
            i = t.dataset.prlxA ? +t.dataset.prlxA : 50;
          let s = 0,
            l = 0,
            c = 0,
            d = 0;
          function u(e = window) {
            e.addEventListener("mousemove", function (e) {
              const n = t.getBoundingClientRect().top + window.scrollY;
              if (n >= window.scrollY || n + t.offsetHeight >= window.scrollY) {
                const t = window.innerWidth,
                  n = window.innerHeight,
                  o = e.clientX - t / 2,
                  r = e.clientY - n / 2;
                (c = (o / t) * 100), (d = (r / n) * 100);
              }
            });
          }
          !(function e() {
            (s += ((c - s) * i) / 1e3),
              (l += ((d - l) * i) / 1e3),
              (t.style.cssText = `transform: translate3D(${
                (r * s) / (n / 10)
              }%,${(a * l) / (o / 10)}%,0);`),
              requestAnimationFrame(e);
          })(),
            e ? u(e) : u();
        });
      }
      setLogging(t) {
        this.config.logging && s(`[PRLX Mouse]: ${t}`);
      }
    })({});
    let d = (t, e = !1, n = 500, o = 0) => {
      const r = "string" == typeof t ? document.querySelector(t) : t;
      if (r) {
        let i = "",
          l = 0;
        e &&
          ((i = "header.header"), (l = document.querySelector(i).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: n,
          header: i,
          offset: o,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (a(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(r, "", c);
        else {
          let t = r.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? t - l : t, behavior: "smooth" });
        }
        s(`[gotoBlock]: ????????...???????? ?? ${t}`);
      } else s(`[gotoBlock]: ???? ????..???????????? ?????????? ?????? ???? ????????????????: ${t}`);
    };
    let u = {
      getErrors(t) {
        let e = 0,
          n = t.querySelectorAll("*[data-required]");
        return (
          n.length &&
            n.forEach((t) => {
              (null === t.offsetParent && "SELECT" !== t.tagName) ||
                t.disabled ||
                (e += this.validateInput(t));
            }),
          e
        );
      },
      validateInput(t) {
        let e = 0;
        return (
          "email" === t.dataset.required
            ? ((t.value = t.value.replace(" ", "")),
              this.emailTest(t) ? (this.addError(t), e++) : this.removeError(t))
            : ("checkbox" !== t.type || t.checked) && t.value
            ? this.removeError(t)
            : (this.addError(t), e++),
          e
        );
      },
      addError(t) {
        t.classList.add("_form-error"),
          t.parentElement.classList.add("_form-error");
        let e = t.parentElement.querySelector(".form__error");
        e && t.parentElement.removeChild(e),
          t.dataset.error &&
            t.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${t.dataset.error}</div>`
            );
      },
      removeError(t) {
        t.classList.remove("_form-error"),
          t.parentElement.classList.remove("_form-error"),
          t.parentElement.querySelector(".form__error") &&
            t.parentElement.removeChild(
              t.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let n = e.querySelectorAll("input,textarea");
            for (let t = 0; t < n.length; t++) {
              const e = n[t];
              e.parentElement.classList.remove("_form-focus"),
                e.classList.remove("_form-focus"),
                u.removeError(e);
            }
            let o = e.querySelectorAll(".checkbox__input");
            if (o.length > 0)
              for (let t = 0; t < o.length; t++) {
                o[t].checked = !1;
              }
            if (t.select) {
              let n = e.querySelectorAll(".select");
              if (n.length)
                for (let e = 0; e < n.length; e++) {
                  const o = n[e].querySelector("select");
                  t.select.selectBuild(o);
                }
            }
          }, 0);
      },
      emailTest: (t) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.value),
    };
    new (n(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    t.watcher = new (class {
      constructor(t) {
        (this.config = Object.assign({ logging: !0 }, t)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(t) {
        if (t.length) {
          this.scrollWatcherLogging(
            `??????????????????, ?????????? ???? ?????????????????? (${t.length})...`
          ),
            l(
              Array.from(t).map(function (t) {
                return `${
                  t.dataset.watchRoot ? t.dataset.watchRoot : null
                }|${t.dataset.watchMargin ? t.dataset.watchMargin : "0px"}|${t.dataset.watchThreshold ? t.dataset.watchThreshold : 0}`;
              })
            ).forEach((e) => {
              let n = e.split("|"),
                o = { root: n[0], margin: n[1], threshold: n[2] },
                r = Array.from(t).filter(function (t) {
                  let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                    n = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                    r = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                  if (
                    String(e) === o.root &&
                    String(n) === o.margin &&
                    String(r) === o.threshold
                  )
                    return t;
                }),
                a = this.getScrollWatcherConfig(o);
              this.scrollWatcherInit(r, a);
            });
        } else
          this.scrollWatcherLogging("????????, ?????? ???????????????? ?????? ????????????????. ZzzZZzz");
      }
      getScrollWatcherConfig(t) {
        let e = {};
        if (
          (document.querySelector(t.root)
            ? (e.root = document.querySelector(t.root))
            : "null" !== t.root &&
              this.scrollWatcherLogging(
                `??????... ?????????????????????????? ?????????????? ${t.root} ?????? ???? ????????????????`
              ),
          (e.rootMargin = t.margin),
          !(t.margin.indexOf("px") < 0 && t.margin.indexOf("%") < 0))
        ) {
          if ("prx" === t.threshold) {
            t.threshold = [];
            for (let e = 0; e <= 1; e += 0.005) t.threshold.push(e);
          } else t.threshold = t.threshold.split(",");
          return (e.threshold = t.threshold), e;
        }
        this.scrollWatcherLogging(
          "???? ????, ?????????????????? data-watch-margin ?????????? ???????????????? ?? PX ?????? %"
        );
      }
      scrollWatcherCreate(t) {
        this.observer = new IntersectionObserver((t, e) => {
          t.forEach((t) => {
            this.scrollWatcherCallback(t, e);
          });
        }, t);
      }
      scrollWatcherInit(t, e) {
        this.scrollWatcherCreate(e), t.forEach((t) => this.observer.observe(t));
      }
      scrollWatcherIntersecting(t, e) {
        t.isIntersecting
          ? (!e.classList.contains("_watcher-view") &&
              e.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???????? ${e.classList}, ?????????????? ?????????? _watcher-view`
            ))
          : (e.classList.contains("_watcher-view") &&
              e.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `?? ???? ???????? ${e.classList}, ?????????? ?????????? _watcher-view`
            ));
      }
      scrollWatcherOff(t, e) {
        e.unobserve(t),
          this.scrollWatcherLogging(`?? ???????????????? ?????????????? ???? ${t.classList}`);
      }
      scrollWatcherLogging(t) {
        this.config.logging && s(`[??????????????????????]: ${t}`);
      }
      scrollWatcherCallback(t, e) {
        const n = t.target;
        this.scrollWatcherIntersecting(t, n),
          n.hasAttribute("data-watch-once") &&
            t.isIntersecting &&
            this.scrollWatcherOff(n, e),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: t } })
          );
      }
    })({});
    let f = !1;
    function h(t) {
      this.type = t;
    }
    setTimeout(() => {
      if (f) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0),
      (h.prototype.init = function () {
        const t = this;
        (this.??bjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let t = 0; t < this.nodes.length; t++) {
          const e = this.nodes[t],
            n = e.dataset.da.trim().split(","),
            o = {};
          (o.element = e),
            (o.parent = e.parentNode),
            (o.destination = document.querySelector(n[0].trim())),
            (o.breakpoint = n[1] ? n[1].trim() : "767"),
            (o.place = n[2] ? n[2].trim() : "last"),
            (o.index = this.indexInParent(o.parent, o.element)),
            this.??bjects.push(o);
        }
        this.arraySort(this.??bjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.??bjects,
            function (t) {
              return (
                "(" +
                this.type +
                "-width: " +
                t.breakpoint +
                "px)," +
                t.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (t, e, n) {
              return Array.prototype.indexOf.call(n, t) === e;
            }
          ));
        for (let e = 0; e < this.mediaQueries.length; e++) {
          const n = this.mediaQueries[e],
            o = String.prototype.split.call(n, ","),
            r = window.matchMedia(o[0]),
            a = o[1],
            i = Array.prototype.filter.call(this.??bjects, function (t) {
              return t.breakpoint === a;
            });
          r.addListener(function () {
            t.mediaHandler(r, i);
          }),
            this.mediaHandler(r, i);
        }
      }),
      (h.prototype.mediaHandler = function (t, e) {
        if (t.matches)
          for (let t = 0; t < e.length; t++) {
            const n = e[t];
            (n.index = this.indexInParent(n.parent, n.element)),
              this.moveTo(n.place, n.element, n.destination);
          }
        else
          for (let t = e.length - 1; t >= 0; t--) {
            const n = e[t];
            n.element.classList.contains(this.daClassname) &&
              this.moveBack(n.parent, n.element, n.index);
          }
      }),
      (h.prototype.moveTo = function (t, e, n) {
        e.classList.add(this.daClassname),
          "last" === t || t >= n.children.length
            ? n.insertAdjacentElement("beforeend", e)
            : "first" !== t
            ? n.children[t].insertAdjacentElement("beforebegin", e)
            : n.insertAdjacentElement("afterbegin", e);
      }),
      (h.prototype.moveBack = function (t, e, n) {
        e.classList.remove(this.daClassname),
          void 0 !== t.children[n]
            ? t.children[n].insertAdjacentElement("beforebegin", e)
            : t.insertAdjacentElement("beforeend", e);
      }),
      (h.prototype.indexInParent = function (t, e) {
        const n = Array.prototype.slice.call(t.children);
        return Array.prototype.indexOf.call(n, e);
      }),
      (h.prototype.arraySort = function (t) {
        "min" === this.type
          ? Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                  ? -1
                  : "last" === t.place || "first" === e.place
                  ? 1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            })
          : Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                  ? 1
                  : "last" === t.place || "first" === e.place
                  ? -1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            });
      });
    new h("max").init();
    let m = document.querySelectorAll("[data-anim-items]");
    if (m.length > 0) {
      function t() {
        for (let t = 0; t < m.length; t++) {
          const n = m[t],
            o = n.offsetHeight,
            r = e(n).top,
            a = 4;
          let i = window.innerHeight - o / a;
          o > window.innerHeight &&
            (i = window.innerHeight - window.innerHeight / a),
            pageYOffset > r - i && pageYOffset < r + o
              ? n.classList.add("_active")
              : n.hasAttribute("data-anim-items-hide") ||
                n.classList.remove("_active");
        }
      }
      function e(t) {
        const e = t.getBoundingClientRect(),
          n = window.pageXOffset || document.documentElement.scrollLeft,
          o = window.pageYOffset || document.documentElement.scrollTop;
        return { top: e.top + o, left: e.left + n };
      }
      window.addEventListener("scroll", t),
        setTimeout(() => {
          t();
        }, 300);
    }
    !(function (t) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          t(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (t) {
      let e = !0 === t ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    }),
      (function () {
        let t = document.querySelector(".icon-menu");
        t &&
          t.addEventListener("click", function (t) {
            r &&
              (((t = 500) => {
                document.documentElement.classList.contains("lock")
                  ? a(t)
                  : i(t);
              })(),
              document.documentElement.classList.toggle("menu-open"),
              document.documentElement.classList.contains("catalog-open") &&
                document.documentElement.classList.remove("catalog-open"),
              document.documentElement.classList.contains("sub-menu-open") &&
                document.documentElement.classList.remove("sub-menu-open"));
          });
      })(),
      (function () {
        const t = document.querySelectorAll("[data-spollers]");
        if (t.length > 0) {
          const n = Array.from(t).filter(function (t, e, n) {
            return !t.dataset.spollers.split(",")[0];
          });
          n.length && a(n);
          let r = c(t, "spollers");
          function a(t, e = !1) {
            t.forEach((t) => {
              (t = e ? t.item : t),
                e.matches || !e
                  ? (t.classList.add("_spoller-init"),
                    i(t),
                    t.addEventListener("click", s))
                  : (t.classList.remove("_spoller-init"),
                    i(t, !1),
                    t.removeEventListener("click", s));
            });
          }
          function i(t, e = !0) {
            let n = t.querySelectorAll("[data-spoller]");
            n.length &&
              ((n = Array.from(n).filter(
                (e) => e.closest("[data-spollers]") === t
              )),
              n.forEach((t) => {
                e
                  ? (t.removeAttribute("tabindex"),
                    t.classList.contains("_spoller-active") ||
                      (t.nextElementSibling.hidden = !0))
                  : (t.setAttribute("tabindex", "-1"),
                    (t.nextElementSibling.hidden = !1));
              }));
          }
          function s(t) {
            const n = t.target;
            if (n.closest("[data-spoller]")) {
              const r = n.closest("[data-spoller]"),
                a = r.closest("[data-spollers]"),
                i = !!a.hasAttribute("data-one-spoller");
              a.querySelectorAll("._slide").length ||
                (i && !r.classList.contains("_spoller-active") && l(a),
                r.classList.toggle("_spoller-active"),
                ((t, n = 500) => {
                  t.hidden ? o(t, n) : e(t, n);
                })(r.nextElementSibling, 500)),
                t.preventDefault();
            }
          }
          function l(t) {
            const n = t.querySelector("[data-spoller]._spoller-active");
            n &&
              (n.classList.remove("_spoller-active"),
              e(n.nextElementSibling, 500));
          }
          r &&
            r.length &&
            r.forEach((t) => {
              t.matchMedia.addEventListener("change", function () {
                a(t.itemsArray, t.matchMedia);
              }),
                a(t.itemsArray, t.matchMedia);
            });
        }
      })(),
      (function () {
        const t = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        t.length &&
          t.forEach((t) => {
            t.dataset.placeholder = t.placeholder;
          }),
          document.body.addEventListener("focusin", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = ""),
              e.classList.add("_form-focus"),
              e.parentElement.classList.add("_form-focus"),
              u.removeError(e));
          }),
          document.body.addEventListener("focusout", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = e.dataset.placeholder),
              e.classList.remove("_form-focus"),
              e.parentElement.classList.remove("_form-focus"),
              e.hasAttribute("data-validate") && u.validateInput(e));
          });
      })(),
      (function (e) {
        t.popup && t.popup.open("some");
        const n = document.forms;
        if (n.length)
          for (const t of n)
            t.addEventListener("submit", function (t) {
              o(t.target, t);
            }),
              t.addEventListener("reset", function (t) {
                const e = t.target;
                u.formClean(e);
              });
        async function o(t, n) {
          if (0 === (e ? u.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              n.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                o = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                a = new FormData(t);
              t.classList.add("_sending");
              const i = await fetch(e, { method: o, body: a });
              if (i.ok) {
                await i.json();
                t.classList.remove("_sending"), r(t);
              } else alert("????????????"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (n.preventDefault(), r(t));
          } else {
            n.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && d(e, !0, 1e3);
          }
        }
        function r(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } })
          ),
            setTimeout(() => {
              if (t.popup) {
                const n = e.dataset.popupMessage;
                n && t.popup.open(n);
              }
            }, 0),
            u.formClean(e),
            s(`[??????????]: ${"?????????? ????????????????????!"}`);
        }
      })(!0),
      (function () {
        function t(t) {
          if ("click" === t.type) {
            const e = t.target;
            if (e.closest("[data-goto]")) {
              const n = e.closest("[data-goto]"),
                o = n.dataset.goto ? n.dataset.goto : "",
                r = !!n.hasAttribute("data-goto-header"),
                a = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
              d(o, r, a), t.preventDefault();
            }
          } else if ("watcherCallback" === t.type && t.detail) {
            const e = t.detail.entry,
              n = e.target;
            if ("navigator" === n.dataset.watch) {
              const t = n.id,
                o =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${t}"]`));
              e.isIntersecting
                ? o && o.classList.add("_navigator-active")
                : o && o.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", t),
          document.addEventListener("watcherCallback", t);
      })(),
      (function () {
        f = !0;
        const t = document.querySelector("header.header"),
          e = t.hasAttribute("data-scroll-show"),
          n = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
          o = t.dataset.scroll ? t.dataset.scroll : 1;
        let r,
          a = 0;
        document.addEventListener("windowScroll", function (i) {
          const s = window.scrollY;
          clearTimeout(r),
            s >= o
              ? (!t.classList.contains("_header-scroll") &&
                  t.classList.add("_header-scroll"),
                e &&
                  (s > a
                    ? t.classList.contains("_header-show") &&
                      t.classList.remove("_header-show")
                    : !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show"),
                  (r = setTimeout(() => {
                    !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show");
                  }, n))))
              : (t.classList.contains("_header-scroll") &&
                  t.classList.remove("_header-scroll"),
                e &&
                  t.classList.contains("_header-show") &&
                  t.classList.remove("_header-show")),
            (a = s <= 0 ? 0 : s);
        });
      })();
  })();
})();
