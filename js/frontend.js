function r(n, t) {
    for (var i = 0; i < t.length; i++) {
        var r = t[i];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
    }
}

function Jt(n, t, i) {
    t && r(n.prototype, t), i && r(n, i), Object.defineProperty(n, "prototype", {
        writable: !1
    })
}
/*!
 * Splide.js
 * Version  : 4.1.2
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var n, t;
n = this, t = function() {
    "use strict";
    var v = "(prefers-reduced-motion: reduce)",
        G = 4,
        rn = 5,
        r = {
            CREATED: 1,
            MOUNTED: 2,
            IDLE: 3,
            MOVING: G,
            SCROLLING: rn,
            DRAGGING: 6,
            DESTROYED: 7
        };

    function D(n) {
        n.length = 0
    }

    function o(n, t, i) {
        return Array.prototype.slice.call(n, t, i)
    }

    function R(n) {
        return n.bind.apply(n, [null].concat(o(arguments, 1)))
    }

    function on() {}
    var p = setTimeout;

    function h(n) {
        return requestAnimationFrame(n)
    }

    function u(n, t) {
        return typeof t === n
    }

    function un(n) {
        return !c(n) && u("object", n)
    }
    var e = Array.isArray,
        x = R(u, "function"),
        C = R(u, "string"),
        en = R(u, "undefined");

    function c(n) {
        return null === n
    }

    function m(n) {
        try {
            return n instanceof(n.ownerDocument.defaultView || window).HTMLElement
        } catch (n) {
            return !1
        }
    }

    function y(n) {
        return e(n) ? n : [n]
    }

    function g(n, t) {
        y(n).forEach(t)
    }

    function b(n, t) {
        return -1 < n.indexOf(t)
    }

    function k(n, t) {
        return n.push.apply(n, y(t)), n
    }

    function A(t, n, i) {
        t && g(n, function(n) {
            n && t.classList[i ? "add" : "remove"](n)
        })
    }

    function M(n, t) {
        A(n, C(t) ? t.split(" ") : t, !0)
    }

    function L(n, t) {
        g(t, n.appendChild.bind(n))
    }

    function O(n, i) {
        g(n, function(n) {
            var t = (i || n).parentNode;
            t && t.insertBefore(n, i)
        })
    }

    function cn(n, t) {
        return m(n) && (n.msMatchesSelector || n.matches).call(n, t)
    }

    function S(n, t) {
        n = n ? o(n.children) : [];
        return t ? n.filter(function(n) {
            return cn(n, t)
        }) : n
    }

    function fn(n, t) {
        return t ? S(n, t)[0] : n.firstElementChild
    }
    var E = Object.keys;

    function w(t, i, n) {
        t && (n ? E(t).reverse() : E(t)).forEach(function(n) {
            "__proto__" !== n && i(t[n], n)
        })
    }

    function an(r) {
        return o(arguments, 1).forEach(function(i) {
            w(i, function(n, t) {
                r[t] = i[t]
            })
        }), r
    }

    function d(i) {
        return o(arguments, 1).forEach(function(n) {
            w(n, function(n, t) {
                e(n) ? i[t] = n.slice() : un(n) ? i[t] = d({}, un(i[t]) ? i[t] : {}, n) : i[t] = n
            })
        }), i
    }

    function sn(t, n) {
        g(n || E(t), function(n) {
            delete t[n]
        })
    }

    function P(n, i) {
        g(n, function(t) {
            g(i, function(n) {
                t && t.removeAttribute(n)
            })
        })
    }

    function I(i, t, r) {
        un(t) ? w(t, function(n, t) {
            I(i, t, n)
        }) : g(i, function(n) {
            c(r) || "" === r ? P(n, t) : n.setAttribute(t, String(r))
        })
    }

    function j(n, t, i) {
        n = document.createElement(n);
        return t && (C(t) ? M : I)(n, t), i && L(i, n), n
    }

    function _(n, t, i) {
        if (en(i)) return getComputedStyle(n)[t];
        c(i) || (n.style[t] = "" + i)
    }

    function ln(n, t) {
        _(n, "display", t)
    }

    function dn(n) {
        n.setActive && n.setActive() || n.focus({
            preventScroll: !0
        })
    }

    function z(n, t) {
        return n.getAttribute(t)
    }

    function vn(n, t) {
        return n && n.classList.contains(t)
    }

    function N(n) {
        return n.getBoundingClientRect()
    }

    function T(n) {
        g(n, function(n) {
            n && n.parentNode && n.parentNode.removeChild(n)
        })
    }

    function hn(n) {
        return fn((new DOMParser).parseFromString(n, "text/html").body)
    }

    function F(n, t) {
        n.preventDefault(), t && (n.stopPropagation(), n.stopImmediatePropagation())
    }

    function pn(n, t) {
        return n && n.querySelector(t)
    }

    function gn(n, t) {
        return t ? o(n.querySelectorAll(t)) : []
    }

    function X(n, t) {
        A(n, t, !1)
    }

    function mn(n) {
        return n.timeStamp
    }

    function W(n) {
        return C(n) ? n : n ? n + "px" : ""
    }
    var yn = "splide",
        f = "data-" + yn;

    function bn(n, t) {
        if (!n) throw new Error("[" + yn + "] " + (t || ""))
    }
    var Y = Math.min,
        wn = Math.max,
        xn = Math.floor,
        kn = Math.ceil,
        U = Math.abs;

    function Sn(n, t, i) {
        return U(n - t) < i
    }

    function En(n, t, i, r) {
        var o = Y(t, i),
            t = wn(t, i);
        return r ? o < n && n < t : o <= n && n <= t
    }

    function q(n, t, i) {
        var r = Y(t, i),
            t = wn(t, i);
        return Y(wn(r, n), t)
    }

    function Ln(n) {
        return (0 < n) - (n < 0)
    }

    function On(t, n) {
        return g(n, function(n) {
            t = t.replace("%s", "" + n)
        }), t
    }

    function An(n) {
        return n < 10 ? "0" + n : "" + n
    }
    var _n = {};

    function zn() {
        var c = [];

        function i(n, i, r) {
            g(n, function(t) {
                t && g(i, function(n) {
                    n.split(" ").forEach(function(n) {
                        n = n.split(".");
                        r(t, n[0], n[1])
                    })
                })
            })
        }
        return {
            bind: function(n, t, u, e) {
                i(n, t, function(n, t, i) {
                    var r = "addEventListener" in n,
                        o = r ? n.removeEventListener.bind(n, t, u, e) : n.removeListener.bind(n, u);
                    r ? n.addEventListener(t, u, e) : n.addListener(u), c.push([n, t, i, u, o])
                })
            },
            unbind: function(n, t, o) {
                i(n, t, function(t, i, r) {
                    c = c.filter(function(n) {
                        return !!(n[0] !== t || n[1] !== i || n[2] !== r || o && n[3] !== o) || (n[4](), !1)
                    })
                })
            },
            dispatch: function(n, t, i) {
                var r;
                return "function" == typeof CustomEvent ? r = new CustomEvent(t, {
                    bubbles: !0,
                    detail: i
                }) : (r = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !1, i), n.dispatchEvent(r), r
            },
            destroy: function() {
                c.forEach(function(n) {
                    n[4]()
                }), D(c)
            }
        }
    }
    var B = "mounted",
        H = "move",
        Dn = "moved",
        Mn = "click",
        Pn = "active",
        In = "inactive",
        Rn = "visible",
        Cn = "hidden",
        J = "refresh",
        K = "updated",
        jn = "resize",
        Nn = "resized",
        Tn = "scroll",
        V = "scrolled",
        a = "destroy",
        Gn = "navigation:mounted",
        Fn = "autoplay:play",
        Xn = "autoplay:pause",
        Wn = "lazyload:loaded",
        Yn = "sk",
        Un = "sh";

    function Q(n) {
        var i = n ? n.event.bus : document.createDocumentFragment(),
            r = zn();
        return n && n.event.on(a, r.destroy), an(r, {
            bus: i,
            on: function(n, t) {
                r.bind(i, y(n).join(" "), function(n) {
                    t.apply(t, e(n.detail) ? n.detail : [])
                })
            },
            off: R(r.unbind, i),
            emit: function(n) {
                r.dispatch(i, n, o(arguments, 1))
            }
        })
    }

    function qn(t, n, i, r) {
        var o, u, e = Date.now,
            c = 0,
            f = !0,
            a = 0;

        function s() {
            if (!f) {
                if (c = t ? Y((e() - o) / t, 1) : 1, i && i(c), 1 <= c && (n(), o = e(), r && ++a >= r)) return l();
                u = h(s)
            }
        }

        function l() {
            f = !0
        }

        function d() {
            u && cancelAnimationFrame(u), f = !(u = c = 0)
        }
        return {
            start: function(n) {
                n || d(), o = e() - (n ? c * t : 0), f = !1, u = h(s)
            },
            rewind: function() {
                o = e(), c = 0, i && i(c)
            },
            pause: l,
            cancel: d,
            set: function(n) {
                t = n
            },
            isPaused: function() {
                return f
            }
        }
    }

    function s(n) {
        var t = n;
        return {
            set: function(n) {
                t = n
            },
            is: function(n) {
                return b(y(n), t)
            }
        }
    }
    var n = "Arrow",
        Bn = n + "Left",
        Hn = n + "Right",
        t = n + "Up",
        n = n + "Down",
        Jn = "ttb",
        l = {
            width: ["height"],
            left: ["top", "right"],
            right: ["bottom", "left"],
            x: ["y"],
            X: ["Y"],
            Y: ["X"],
            ArrowLeft: [t, Hn],
            ArrowRight: [n, Bn]
        };
    var Z = "role",
        $ = "tabindex",
        i = "aria-",
        Kn = i + "controls",
        Vn = i + "current",
        Qn = i + "selected",
        nn = i + "label",
        Zn = i + "labelledby",
        $n = i + "hidden",
        nt = i + "orientation",
        tt = i + "roledescription",
        it = i + "live",
        rt = i + "busy",
        ot = i + "atomic",
        ut = [Z, $, "disabled", Kn, Vn, nn, Zn, $n, nt, tt],
        i = yn + "__",
        et = yn,
        ct = i + "track",
        ft = i + "list",
        at = i + "slide",
        st = at + "--clone",
        lt = at + "__container",
        dt = i + "arrows",
        vt = i + "arrow",
        ht = vt + "--prev",
        pt = vt + "--next",
        gt = i + "pagination",
        mt = gt + "__page",
        yt = i + "progress" + "__bar",
        bt = i + "toggle",
        wt = i + "sr",
        tn = "is-active",
        xt = "is-prev",
        kt = "is-next",
        St = "is-visible",
        Et = "is-loading",
        Lt = "is-focus-in",
        Ot = "is-overflow",
        At = [tn, St, xt, kt, Et, Lt, Ot];
    var _t = "touchstart mousedown",
        zt = "touchmove mousemove",
        Dt = "touchend touchcancel mouseup click";
    var Mt = "slide",
        Pt = "loop",
        It = "fade";

    function Rt(o, r, t, u) {
        var e, n = Q(o),
            i = n.on,
            c = n.emit,
            f = n.bind,
            a = o.Components,
            s = o.root,
            l = o.options,
            d = l.isNavigation,
            v = l.updateOnMove,
            h = l.i18n,
            p = l.pagination,
            g = l.slideFocus,
            m = a.Direction.resolve,
            y = z(u, "style"),
            b = z(u, nn),
            w = -1 < t,
            x = fn(u, "." + lt);

        function k() {
            var n = o.splides.map(function(n) {
                n = n.splide.Components.Slides.getAt(r);
                return n ? n.slide.id : ""
            }).join(" ");
            I(u, nn, On(h.slideX, (w ? t : r) + 1)), I(u, Kn, n), I(u, Z, g ? "button" : ""), g && P(u, tt)
        }

        function S() {
            e || E()
        }

        function E() {
            var n, t, i;
            e || (n = o.index, (i = L()) !== vn(u, tn) && (A(u, tn, i), I(u, Vn, d && i || ""), c(i ? Pn : In, O)), i = function() {
                if (o.is(It)) return L();
                var n = N(a.Elements.track),
                    t = N(u),
                    i = m("left", !0),
                    r = m("right", !0);
                return xn(n[i]) <= kn(t[i]) && xn(t[r]) <= kn(n[r])
            }(), t = !i && (!L() || w), o.state.is([G, rn]) || I(u, $n, t || ""), I(gn(u, l.focusableNodes || ""), $, t ? -1 : ""), g && I(u, $, t ? -1 : 0), i !== vn(u, St) && (A(u, St, i), c(i ? Rn : Cn, O)), i || document.activeElement !== u || (t = a.Slides.getAt(o.index)) && dn(t.slide), A(u, xt, r === n - 1), A(u, kt, r === n + 1))
        }

        function L() {
            var n = o.index;
            return n === r || l.cloneStatus && n === t
        }
        var O = {
            index: r,
            slideIndex: t,
            slide: u,
            container: x,
            isClone: w,
            mount: function() {
                w || (u.id = s.id + "-slide" + An(r + 1), I(u, Z, p ? "tabpanel" : "group"), I(u, tt, h.slide), I(u, nn, b || On(h.slideLabel, [r + 1, o.length]))), f(u, "click", R(c, Mn, O)), f(u, "keydown", R(c, Yn, O)), i([Dn, Un, V], E), i(Gn, k), v && i(H, S)
            },
            destroy: function() {
                e = !0, n.destroy(), X(u, At), P(u, ut), I(u, "style", y), I(u, nn, b || "")
            },
            update: E,
            style: function(n, t, i) {
                _(i && x || u, n, t)
            },
            isWithin: function(n, t) {
                return n = U(n - r), (n = w || !l.rewind && !o.is(Pt) ? n : Y(n, o.length - n)) <= t
            }
        };
        return O
    }
    var Ct = f + "-interval";
    var jt = {
        passive: !1,
        capture: !0
    };
    var Nt = {
        Spacebar: " ",
        Right: Hn,
        Left: Bn,
        Up: t,
        Down: n
    };

    function Tt(n) {
        return n = C(n) ? n : n.key, Nt[n] || n
    }
    var Gt = "keydown";
    var Ft = f + "-lazy",
        Xt = Ft + "-srcset",
        Wt = "[" + Ft + "], [" + Xt + "]";
    var Yt = [" ", "Enter"];
    var Ut = Object.freeze({
            __proto__: null,
            Media: function(r, n, o) {
                var u = r.state,
                    t = o.breakpoints || {},
                    e = o.reducedMotion || {},
                    i = zn(),
                    c = [];

                function f(n) {
                    n && i.destroy()
                }

                function a(n, t) {
                    t = matchMedia(t);
                    i.bind(t, "change", s), c.push([n, t])
                }

                function s() {
                    var n = u.is(7),
                        t = o.direction,
                        i = c.reduce(function(n, t) {
                            return d(n, t[1].matches ? t[0] : {})
                        }, {});
                    sn(o), l(i), o.destroy ? r.destroy("completely" === o.destroy) : n ? (f(!0), r.mount()) : t !== o.direction && r.refresh()
                }

                function l(n, t, i) {
                    d(o, n), t && d(Object.getPrototypeOf(o), n), !i && u.is(1) || r.emit(K, o)
                }
                return {
                    setup: function() {
                        var i = "min" === o.mediaQuery;
                        E(t).sort(function(n, t) {
                            return i ? +n - +t : +t - +n
                        }).forEach(function(n) {
                            a(t[n], "(" + (i ? "min" : "max") + "-width:" + n + "px)")
                        }), a(e, v), s()
                    },
                    destroy: f,
                    reduce: function(n) {
                        matchMedia(v).matches && (n ? d(o, e) : sn(o, E(e)))
                    },
                    set: l
                }
            },
            Direction: function(n, t, o) {
                return {
                    resolve: function(n, t, i) {
                        var r = "rtl" !== (i = i || o.direction) || t ? i === Jn ? 0 : -1 : 1;
                        return l[n] && l[n][r] || n.replace(/width|left|right/i, function(n, t) {
                            n = l[n.toLowerCase()][r] || n;
                            return 0 < t ? n.charAt(0).toUpperCase() + n.slice(1) : n
                        })
                    },
                    orient: function(n) {
                        return n * ("rtl" === o.direction ? 1 : -1)
                    }
                }
            },
            Elements: function(n, t, i) {
                var r, o, u, e = Q(n),
                    c = e.on,
                    f = e.bind,
                    a = n.root,
                    s = i.i18n,
                    l = {},
                    d = [],
                    v = [],
                    h = [];

                function p() {
                    r = y("." + ct), o = fn(r, "." + ft), bn(r && o, "A track/list element is missing."), k(d, S(o, "." + at + ":not(." + st + ")")), w({
                        arrows: dt,
                        pagination: gt,
                        prev: ht,
                        next: pt,
                        bar: yt,
                        toggle: bt
                    }, function(n, t) {
                        l[t] = y("." + n)
                    }), an(l, {
                        root: a,
                        track: r,
                        list: o,
                        slides: d
                    });
                    var n = a.id || function(n) {
                            return "" + n + An(_n[n] = (_n[n] || 0) + 1)
                        }(yn),
                        t = i.role;
                    a.id = n, r.id = r.id || n + "-track", o.id = o.id || n + "-list", !z(a, Z) && "SECTION" !== a.tagName && t && I(a, Z, t), I(a, tt, s.carousel), I(o, Z, "presentation"), m()
                }

                function g(n) {
                    var t = ut.concat("style");
                    D(d), X(a, v), X(r, h), P([r, o], t), P(a, n ? t : ["style", tt])
                }

                function m() {
                    X(a, v), X(r, h), v = b(et), h = b(ct), M(a, v), M(r, h), I(a, nn, i.label), I(a, Zn, i.labelledby)
                }

                function y(n) {
                    n = pn(a, n);
                    return n && function(n, t) {
                        if (x(n.closest)) return n.closest(t);
                        for (var i = n; i && 1 === i.nodeType && !cn(i, t);) i = i.parentElement;
                        return i
                    }(n, "." + et) === a ? n : void 0
                }

                function b(n) {
                    return [n + "--" + i.type, n + "--" + i.direction, i.drag && n + "--draggable", i.isNavigation && n + "--nav", n === et && tn]
                }
                return an(l, {
                    setup: p,
                    mount: function() {
                        c(J, g), c(J, p), c(K, m), f(document, _t + " keydown", function(n) {
                            u = "keydown" === n.type
                        }, {
                            capture: !0
                        }), f(a, "focusin", function() {
                            A(a, Lt, !!u)
                        })
                    },
                    destroy: g
                })
            },
            Slides: function(r, o, u) {
                var n = Q(r),
                    t = n.on,
                    e = n.emit,
                    c = n.bind,
                    f = (n = o.Elements).slides,
                    a = n.list,
                    s = [];

                function i() {
                    f.forEach(function(n, t) {
                        d(n, t, -1)
                    })
                }

                function l() {
                    h(function(n) {
                        n.destroy()
                    }), D(s)
                }

                function d(n, t, i) {
                    t = Rt(r, t, i, n);
                    t.mount(), s.push(t), s.sort(function(n, t) {
                        return n.index - t.index
                    })
                }

                function v(n) {
                    return n ? p(function(n) {
                        return !n.isClone
                    }) : s
                }

                function h(n, t) {
                    v(t).forEach(n)
                }

                function p(t) {
                    return s.filter(x(t) ? t : function(n) {
                        return C(t) ? cn(n.slide, t) : b(y(t), n.index)
                    })
                }
                return {
                    mount: function() {
                        i(), t(J, l), t(J, i)
                    },
                    destroy: l,
                    update: function() {
                        h(function(n) {
                            n.update()
                        })
                    },
                    register: d,
                    get: v,
                    getIn: function(n) {
                        var t = o.Controller,
                            i = t.toIndex(n),
                            r = t.hasFocus() ? 1 : u.perPage;
                        return p(function(n) {
                            return En(n.index, i, i + r - 1)
                        })
                    },
                    getAt: function(n) {
                        return p(n)[0]
                    },
                    add: function(n, o) {
                        g(n, function(n) {
                            var t, i, r;
                            m(n = C(n) ? hn(n) : n) && ((t = f[o]) ? O(n, t) : L(a, n), M(n, u.classes.slide), t = n, i = R(e, jn), t = gn(t, "img"), (r = t.length) ? t.forEach(function(n) {
                                c(n, "load error", function() {
                                    --r || i()
                                })
                            }) : i())
                        }), e(J)
                    },
                    remove: function(n) {
                        T(p(n).map(function(n) {
                            return n.slide
                        })), e(J)
                    },
                    forEach: h,
                    filter: p,
                    style: function(t, i, r) {
                        h(function(n) {
                            n.style(t, i, r)
                        })
                    },
                    getLength: function(n) {
                        return (n ? f : s).length
                    },
                    isEnough: function() {
                        return s.length > u.perPage
                    }
                }
            },
            Layout: function(t, n, i) {
                var r, o, u, e = (a = Q(t)).on,
                    c = a.bind,
                    f = a.emit,
                    a = n.Slides,
                    s = n.Direction.resolve,
                    l = (n = n.Elements).root,
                    d = n.track,
                    v = n.list,
                    h = a.getAt,
                    p = a.style;

                function g() {
                    r = i.direction === Jn, _(l, "maxWidth", W(i.width)), _(d, s("paddingLeft"), y(!1)), _(d, s("paddingRight"), y(!0)), m(!0)
                }

                function m(n) {
                    var t = N(l);
                    !n && o.width === t.width && o.height === t.height || (_(d, "height", function() {
                        var n = "";
                        r && (bn(n = b(), "height or heightRatio is missing."), n = "calc(" + n + " - " + y(!1) + " - " + y(!0) + ")");
                        return n
                    }()), p(s("marginRight"), W(i.gap)), p("width", i.autoWidth ? null : W(i.fixedWidth) || (r ? "" : w())), p("height", W(i.fixedHeight) || (r ? i.autoHeight ? null : w() : b()), !0), o = t, f(Nn), u !== (u = O()) && (A(l, Ot, u), f("overflow", u)))
                }

                function y(n) {
                    var t = i.padding,
                        n = s(n ? "right" : "left");
                    return t && W(t[n] || (un(t) ? 0 : t)) || "0px"
                }

                function b() {
                    return W(i.height || N(v).width * i.heightRatio)
                }

                function w() {
                    var n = W(i.gap);
                    return "calc((100%" + (n && " + " + n) + ")/" + (i.perPage || 1) + (n && " - " + n) + ")"
                }

                function x() {
                    return N(v)[s("width")]
                }

                function k(n, t) {
                    n = h(n || 0);
                    return n ? N(n.slide)[s("width")] + (t ? 0 : L()) : 0
                }

                function S(n, t) {
                    var i, n = h(n);
                    return n ? (n = N(n.slide)[s("right")], i = N(v)[s("left")], U(n - i) + (t ? 0 : L())) : 0
                }

                function E(n) {
                    return S(t.length - 1) - S(0) + k(0, n)
                }

                function L() {
                    var n = h(0);
                    return n && parseFloat(_(n.slide, s("marginRight"))) || 0
                }

                function O() {
                    return t.is(It) || E(!0) > x()
                }
                return {
                    mount: function() {
                        var n, t, i;
                        g(), c(window, "resize load", (n = R(f, jn), i = qn(t || 0, n, null, 1), function() {
                            i.isPaused() && i.start()
                        })), e([K, J], g), e(jn, m)
                    },
                    resize: m,
                    listSize: x,
                    slideSize: k,
                    sliderSize: E,
                    totalSize: S,
                    getPadding: function(n) {
                        return parseFloat(_(d, s("padding" + (n ? "Right" : "Left")))) || 0
                    },
                    isOverflow: O
                }
            },
            Clones: function(c, i, f) {
                var t, r = Q(c),
                    n = r.on,
                    a = i.Elements,
                    s = i.Slides,
                    o = i.Direction.resolve,
                    l = [];

                function u() {
                    if (n(J, d), n([K, jn], v), t = h()) {
                        var o = t,
                            u = s.get().slice(),
                            e = u.length;
                        if (e) {
                            for (; u.length < o;) k(u, u);
                            k(u.slice(-o), u.slice(0, o)).forEach(function(n, t) {
                                var i = t < o,
                                    r = function(n, t) {
                                        n = n.cloneNode(!0);
                                        return M(n, f.classes.clone), n.id = c.root.id + "-clone" + An(t + 1), n
                                    }(n.slide, t);
                                i ? O(r, u[0].slide) : L(a.list, r), k(l, r), s.register(r, t - o + (i ? 0 : e), n.index)
                            })
                        }
                        i.Layout.resize(!0)
                    }
                }

                function d() {
                    e(), u()
                }

                function e() {
                    T(l), D(l), r.destroy()
                }

                function v() {
                    var n = h();
                    t !== n && (t < n || !n) && r.emit(J)
                }

                function h() {
                    var n, t = f.clones;
                    return c.is(Pt) ? en(t) && (t = (n = f[o("fixedWidth")] && i.Layout.slideSize(0)) && kn(N(a.track)[o("width")] / n) || f[o("autoWidth")] && c.length || 2 * f.perPage) : t = 0, t
                }
                return {
                    mount: u,
                    destroy: e
                }
            },
            Move: function(r, c, o) {
                var e, n = Q(r),
                    t = n.on,
                    f = n.emit,
                    a = r.state.set,
                    u = (n = c.Layout).slideSize,
                    i = n.getPadding,
                    s = n.totalSize,
                    l = n.listSize,
                    d = n.sliderSize,
                    v = (n = c.Direction).resolve,
                    h = n.orient,
                    p = (n = c.Elements).list,
                    g = n.track;

                function m() {
                    c.Controller.isBusy() || (c.Scroll.cancel(), y(r.index), c.Slides.update())
                }

                function y(n) {
                    b(S(n, !0))
                }

                function b(n, t) {
                    r.is(It) || (t = t ? n : function(n) {
                        {
                            var t, i;
                            r.is(Pt) && (t = k(n), i = t > c.Controller.getEnd(), (t < 0 || i) && (n = w(n, i)))
                        }
                        return n
                    }(n), _(p, "transform", "translate" + v("X") + "(" + t + "px)"), n !== t && f(Un))
                }

                function w(n, t) {
                    var i = n - L(t),
                        r = d();
                    return n -= h(r * (kn(U(i) / r) || 1)) * (t ? 1 : -1)
                }

                function x() {
                    b(E(), !0), e.cancel()
                }

                function k(n) {
                    for (var t = c.Slides.get(), i = 0, r = 1 / 0, o = 0; o < t.length; o++) {
                        var u = t[o].index,
                            e = U(S(u, !0) - n);
                        if (!(e <= r)) break;
                        r = e, i = u
                    }
                    return i
                }

                function S(n, t) {
                    var i = h(s(n - 1) - (n = n, "center" === (i = o.focus) ? (l() - u(n, !0)) / 2 : +i * u(n) || 0));
                    return t ? (n = i, n = o.trimSpace && r.is(Mt) ? q(n, 0, h(d(!0) - l())) : n) : i
                }

                function E() {
                    var n = v("left");
                    return N(p)[n] - N(g)[n] + h(i(!1))
                }

                function L(n) {
                    return S(n ? c.Controller.getEnd() : 0, !!o.trimSpace)
                }
                return {
                    mount: function() {
                        e = c.Transition, t([B, Nn, K, J], m)
                    },
                    move: function(n, t, i, r) {
                        var o, u;
                        n !== t && (o = i < n, u = h(w(E(), o)), o ? 0 <= u : u <= p[v("scrollWidth")] - N(g)[v("width")]) && (x(), b(w(E(), i < n), !0)), a(G), f(H, t, i, n), e.start(t, function() {
                            a(3), f(Dn, t, i, n), r && r()
                        })
                    },
                    jump: y,
                    translate: b,
                    shift: w,
                    cancel: x,
                    toIndex: k,
                    toPosition: S,
                    getPosition: E,
                    getLimit: L,
                    exceededLimit: function(n, t) {
                        t = en(t) ? E() : t;
                        var i = !0 !== n && h(t) < h(L(!1)),
                            n = !1 !== n && h(t) > h(L(!0));
                        return i || n
                    },
                    reposition: m
                }
            },
            Controller: function(o, u, e) {
                var c, f, a, s, n = Q(o),
                    t = n.on,
                    i = n.emit,
                    l = u.Move,
                    d = l.getPosition,
                    r = l.getLimit,
                    v = l.toPosition,
                    h = (n = u.Slides).isEnough,
                    p = n.getLength,
                    g = e.omitEnd,
                    m = o.is(Pt),
                    y = o.is(Mt),
                    b = R(L, !1),
                    w = R(L, !0),
                    x = e.start || 0,
                    k = x;

                function S() {
                    f = p(!0), a = e.perMove, s = e.perPage, c = _();
                    var n = q(x, 0, g ? c : f - 1);
                    n !== x && (x = n, l.reposition())
                }

                function E() {
                    c !== _() && i("ei")
                }

                function L(n, t) {
                    var i = a || (P() ? 1 : s),
                        i = O(x + i * (n ? -1 : 1), x, !(a || P()));
                    return -1 === i && y && !Sn(d(), r(!n), 1) ? n ? 0 : c : t ? i : A(i)
                }

                function O(n, t, i) {
                    var r;
                    return h() || P() ? ((r = function(n) {
                        if (y && "move" === e.trimSpace && n !== x)
                            for (var t = d(); t === v(n, !0) && En(n, 0, o.length - 1, !e.rewind);) n < x ? --n : ++n;
                        return n
                    }(n)) !== n && (t = n, n = r, i = !1), n < 0 || c < n ? n = a || !En(0, n, t, !0) && !En(c, t, n, !0) ? m ? i ? n < 0 ? -(f % s || s) : f : n : e.rewind ? n < 0 ? c : 0 : -1 : z(D(n)) : i && n !== t && (n = z(D(t) + (n < t ? -1 : 1)))) : n = -1, n
                }

                function A(n) {
                    return m ? (n + f) % f || 0 : n
                }

                function _() {
                    for (var n = f - (P() || m && a ? 1 : s); g && 0 < n--;)
                        if (v(f - 1, !0) !== v(n, !0)) {
                            n++;
                            break
                        }
                    return q(n, 0, f - 1)
                }

                function z(n) {
                    return q(P() ? n : s * n, 0, c)
                }

                function D(n) {
                    return P() ? Y(n, c) : xn((c <= n ? f - 1 : n) / s)
                }

                function M(n) {
                    n !== x && (k = x, x = n)
                }

                function P() {
                    return !en(e.focus) || e.isNavigation
                }

                function I() {
                    return o.state.is([G, rn]) && !!e.waitForTransition
                }
                return {
                    mount: function() {
                        S(), t([K, J, "ei"], S), t(Nn, E)
                    },
                    go: function(n, t, i) {
                        var r;
                        I() || -1 < (r = A(n = function(n) {
                            var t = x; {
                                var i, r;
                                C(n) ? (r = n.match(/([+\-<>])(\d+)?/) || [], i = r[1], r = r[2], "+" === i || "-" === i ? t = O(x + +("" + i + (+r || 1)), x) : ">" === i ? t = r ? z(+r) : b(!0) : "<" === i && (t = w(!0))) : t = m ? n : q(n, 0, c)
                            }
                            return t
                        }(n))) && (t || r !== x) && (M(r), l.move(n, r, k, i))
                    },
                    scroll: function(n, t, i, r) {
                        u.Scroll.scroll(n, t, i, function() {
                            var n = A(l.toIndex(d()));
                            M(g ? Y(n, c) : n), r && r()
                        })
                    },
                    getNext: b,
                    getPrev: w,
                    getAdjacent: L,
                    getEnd: _,
                    setIndex: M,
                    getIndex: function(n) {
                        return n ? k : x
                    },
                    toIndex: z,
                    toPage: D,
                    toDest: function(n) {
                        return n = l.toIndex(n), y ? q(n, 0, c) : n
                    },
                    hasFocus: P,
                    isBusy: I
                }
            },
            Arrows: function(o, n, t) {
                var i, r, u = Q(o),
                    e = u.on,
                    c = u.bind,
                    f = u.emit,
                    a = t.classes,
                    s = t.i18n,
                    l = n.Elements,
                    d = n.Controller,
                    v = l.arrows,
                    h = l.track,
                    p = v,
                    g = l.prev,
                    m = l.next,
                    y = {};

                function b() {
                    var n = t.arrows;
                    !n || g && m || (p = v || j("div", a.arrows), g = S(!0), m = S(!1), i = !0, L(p, [g, m]), v || O(p, h)), g && m && (an(y, {
                        prev: g,
                        next: m
                    }), ln(p, n ? "" : "none"), M(p, r = dt + "--" + t.direction), n && (e([B, Dn, J, V, "ei"], E), c(m, "click", R(k, ">")), c(g, "click", R(k, "<")), E(), I([g, m], Kn, h.id), f("arrows:mounted", g, m))), e(K, w)
                }

                function w() {
                    x(), b()
                }

                function x() {
                    u.destroy(), X(p, r), i ? (T(v ? [g, m] : p), g = m = null) : P([g, m], ut)
                }

                function k(n) {
                    d.go(n, !0)
                }

                function S(n) {
                    return hn('<button class="' + a.arrow + " " + (n ? a.prev : a.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' + (t.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />')
                }

                function E() {
                    var n, t, i, r;
                    g && m && (r = o.index, n = d.getPrev(), t = d.getNext(), i = -1 < n && r < n ? s.last : s.prev, r = -1 < t && t < r ? s.first : s.next, g.disabled = n < 0, m.disabled = t < 0, I(g, nn, i), I(m, nn, r), f("arrows:updated", g, m, n, t))
                }
                return {
                    arrows: y,
                    mount: b,
                    destroy: x,
                    update: E
                }
            },
            Autoplay: function(n, t, i) {
                var r, o, u = Q(n),
                    e = u.on,
                    c = u.bind,
                    f = u.emit,
                    a = qn(i.interval, n.go.bind(n, ">"), function(n) {
                        var t = l.bar;
                        t && _(t, "width", 100 * n + "%"), f("autoplay:playing", n)
                    }),
                    s = a.isPaused,
                    l = t.Elements,
                    d = (u = t.Elements).root,
                    v = u.toggle,
                    h = i.autoplay,
                    p = "pause" === h;

                function g() {
                    s() && t.Slides.isEnough() && (a.start(!i.resetProgress), o = r = p = !1, b(), f(Fn))
                }

                function m(n) {
                    p = !!(n = void 0 === n ? !0 : n), b(), s() || (a.pause(), f(Xn))
                }

                function y() {
                    p || (r || o ? m(!1) : g())
                }

                function b() {
                    v && (A(v, tn, !p), I(v, nn, i.i18n[p ? "play" : "pause"]))
                }

                function w(n) {
                    n = t.Slides.getAt(n);
                    a.set(n && +z(n.slide, Ct) || i.interval)
                }
                return {
                    mount: function() {
                        h && (i.pauseOnHover && c(d, "mouseenter mouseleave", function(n) {
                            r = "mouseenter" === n.type, y()
                        }), i.pauseOnFocus && c(d, "focusin focusout", function(n) {
                            o = "focusin" === n.type, y()
                        }), v && c(v, "click", function() {
                            p ? g() : m(!0)
                        }), e([H, Tn, J], a.rewind), e(H, w), v && I(v, Kn, l.track.id), p || g(), b())
                    },
                    destroy: a.cancel,
                    play: g,
                    pause: m,
                    isPaused: s
                }
            },
            Cover: function(n, t, i) {
                var r = Q(n).on;

                function o(i) {
                    t.Slides.forEach(function(n) {
                        var t = fn(n.container || n.slide, "img");
                        t && t.src && u(i, t, n)
                    })
                }

                function u(n, t, i) {
                    i.style("background", n ? 'center/cover no-repeat url("' + t.src + '")' : "", !0), ln(t, n ? "none" : "")
                }
                return {
                    mount: function() {
                        i.cover && (r(Wn, R(u, !0)), r([B, K, J], R(o, !0)))
                    },
                    destroy: R(o, !1)
                }
            },
            Scroll: function(n, c, u) {
                var f, a, t = Q(n),
                    i = t.on,
                    s = t.emit,
                    l = n.state.set,
                    d = c.Move,
                    v = d.getPosition,
                    e = d.getLimit,
                    h = d.exceededLimit,
                    p = d.translate,
                    g = n.is(Mt),
                    m = 1;

                function y(n, t, i, r, o) {
                    var u, e = v(),
                        i = (x(), !i || g && h() || (i = c.Layout.sliderSize(), u = Ln(n) * i * xn(U(n) / i) || 0, n = d.toPosition(c.Controller.toDest(n % i)) + u), Sn(e, n, 1));
                    m = 1, t = i ? 0 : t || wn(U(n - e) / 1.5, 800), a = r, f = qn(t, b, R(w, e, n, o), 1), l(rn), s(Tn), f.start()
                }

                function b() {
                    l(3), a && a(), s(V)
                }

                function w(n, t, i, r) {
                    var o = v(),
                        r = (n + (t - n) * (t = r, (n = u.easingFunc) ? n(t) : 1 - Math.pow(1 - t, 4)) - o) * m;
                    p(o + r), g && !i && h() && (m *= .6, U(r) < 10 && y(e(h(!0)), 600, !1, a, !0))
                }

                function x() {
                    f && f.cancel()
                }

                function r() {
                    f && !f.isPaused() && (x(), b())
                }
                return {
                    mount: function() {
                        i(H, x), i([K, J], r)
                    },
                    destroy: x,
                    scroll: y,
                    cancel: r
                }
            },
            Drag: function(e, o, c) {
                var f, t, u, a, s, l, d, v, n = Q(e),
                    i = n.on,
                    h = n.emit,
                    p = n.bind,
                    g = n.unbind,
                    m = e.state,
                    y = o.Move,
                    b = o.Scroll,
                    w = o.Controller,
                    x = o.Elements.track,
                    k = o.Media.reduce,
                    r = (n = o.Direction).resolve,
                    S = n.orient,
                    E = y.getPosition,
                    L = y.exceededLimit,
                    O = !1;

                function j() {
                    var n = c.drag;
                    C(!n), a = "free" === n
                }

                function N(n) {
                    var t, i, r;
                    l = !1, d || (t = R(n), i = n.target, r = c.noDrag, cn(i, "." + mt + ", ." + vt) || r && cn(i, r) || !t && n.button || (w.isBusy() ? F(n, !0) : (v = t ? x : window, s = m.is([G, rn]), u = null, p(v, zt, A, jt), p(v, Dt, _, jt), y.cancel(), b.cancel(), z(n))))
                }

                function A(n) {
                    var t, i, r, o, u;
                    m.is(6) || (m.set(6), h("drag")), n.cancelable && (s ? (y.translate(f + D(n) / (O && e.is(Mt) ? 5 : 1)), u = 200 < M(n), t = O !== (O = L()), (u || t) && z(n), l = !0, h("dragging"), F(n)) : U(D(u = n)) > U(D(u, !0)) && (t = n, i = c.dragMinThreshold, r = un(i), o = r && i.mouse || 0, r = (r ? i.touch : +i) || 10, s = U(D(t)) > (R(t) ? r : o), F(n)))
                }

                function _(n) {
                    var t, i, r;
                    m.is(6) && (m.set(3), h("dragged")), s && (i = function(n) {
                        return E() + Ln(n) * Y(U(n) * (c.flickPower || 600), a ? 1 / 0 : o.Layout.listSize() * (c.flickMaxPages || 1))
                    }(t = function(n) {
                        if (e.is(Pt) || !O) {
                            var t = M(n);
                            if (t && t < 200) return D(n) / t
                        }
                        return 0
                    }(t = n)), r = c.rewind && c.rewindByDrag, k(!1), a ? w.scroll(i, 0, c.snap) : e.is(It) ? w.go(S(Ln(t)) < 0 ? r ? "<" : "-" : r ? ">" : "+") : e.is(Mt) && O && r ? w.go(L(!0) ? ">" : "<") : w.go(w.toDest(i), !0), k(!0), F(n)), g(v, zt, A), g(v, Dt, _), s = !1
                }

                function T(n) {
                    !d && l && F(n, !0)
                }

                function z(n) {
                    u = t, t = n, f = E()
                }

                function D(n, t) {
                    return I(n, t) - I(P(n), t)
                }

                function M(n) {
                    return mn(n) - mn(P(n))
                }

                function P(n) {
                    return t === n && u || t
                }

                function I(n, t) {
                    return (R(n) ? n.changedTouches[0] : n)["page" + r(t ? "Y" : "X")]
                }

                function R(n) {
                    return "undefined" != typeof TouchEvent && n instanceof TouchEvent
                }

                function C(n) {
                    d = n
                }
                return {
                    mount: function() {
                        p(x, zt, on, jt), p(x, Dt, on, jt), p(x, _t, N, jt), p(x, "click", T, {
                            capture: !0
                        }), p(x, "dragstart", F), i([B, K], j)
                    },
                    disable: C,
                    isDragging: function() {
                        return s
                    }
                }
            },
            Keyboard: function(t, n, i) {
                var r, o, u = Q(t),
                    e = u.on,
                    c = u.bind,
                    f = u.unbind,
                    a = t.root,
                    s = n.Direction.resolve;

                function l() {
                    var n = i.keyboard;
                    n && (r = "global" === n ? window : a, c(r, Gt, h))
                }

                function d() {
                    f(r, Gt)
                }

                function v() {
                    var n = o;
                    o = !0, p(function() {
                        o = n
                    })
                }

                function h(n) {
                    o || ((n = Tt(n)) === s(Bn) ? t.go("<") : n === s(Hn) && t.go(">"))
                }
                return {
                    mount: function() {
                        l(), e(K, d), e(K, l), e(H, v)
                    },
                    destroy: d,
                    disable: function(n) {
                        o = n
                    }
                }
            },
            LazyLoad: function(i, n, o) {
                var t = Q(i),
                    r = t.on,
                    u = t.off,
                    e = t.bind,
                    c = t.emit,
                    f = "sequential" === o.lazyLoad,
                    a = [Dn, V],
                    s = [];

                function l() {
                    D(s), n.Slides.forEach(function(r) {
                        gn(r.slide, Wt).forEach(function(n) {
                            var t = z(n, Ft),
                                i = z(n, Xt);
                            t === n.src && i === n.srcset || (t = o.classes.spinner, t = fn(i = n.parentElement, "." + t) || j("span", t, i), s.push([n, r, t]), n.src || ln(n, "none"))
                        })
                    }), (f ? p : (u(a), r(a, d), d))()
                }

                function d() {
                    (s = s.filter(function(n) {
                        var t = o.perPage * ((o.preloadPages || 1) + 1) - 1;
                        return !n[1].isWithin(i.index, t) || v(n)
                    })).length || u(a)
                }

                function v(n) {
                    var t = n[0];
                    M(n[1].slide, Et), e(t, "load error", R(h, n)), I(t, "src", z(t, Ft)), I(t, "srcset", z(t, Xt)), P(t, Ft), P(t, Xt)
                }

                function h(n, t) {
                    var i = n[0],
                        r = n[1];
                    X(r.slide, Et), "error" !== t.type && (T(n[2]), ln(i, ""), c(Wn, i, r), c(jn)), f && p()
                }

                function p() {
                    s.length && v(s.shift())
                }
                return {
                    mount: function() {
                        o.lazyLoad && (l(), r(J, l))
                    },
                    destroy: R(D, s),
                    check: d
                }
            },
            Pagination: function(l, n, d) {
                var v, h, t = Q(l),
                    p = t.on,
                    g = t.emit,
                    m = t.bind,
                    y = n.Slides,
                    b = n.Elements,
                    w = n.Controller,
                    x = w.hasFocus,
                    r = w.getIndex,
                    e = w.go,
                    c = n.Direction.resolve,
                    k = b.pagination,
                    S = [];

                function E() {
                    v && (T(k ? o(v.children) : v), X(v, h), D(S), v = null), t.destroy()
                }

                function L(n) {
                    e(">" + n, !0)
                }

                function O(n, t) {
                    var i = S.length,
                        r = Tt(t),
                        o = A(),
                        u = -1,
                        o = (r === c(Hn, !1, o) ? u = ++n % i : r === c(Bn, !1, o) ? u = (--n + i) % i : "Home" === r ? u = 0 : "End" === r && (u = i - 1), S[u]);
                    o && (dn(o.button), e(">" + u), F(t, !0))
                }

                function A() {
                    return d.paginationDirection || d.direction
                }

                function _(n) {
                    return S[w.toPage(n)]
                }

                function z() {
                    var n, t = _(r(!0)),
                        i = _(r());
                    t && (X(n = t.button, tn), P(n, Qn), I(n, $, -1)), i && (M(n = i.button, tn), I(n, Qn, !0), I(n, $, "")), g("pagination:updated", {
                        list: v,
                        items: S
                    }, t, i)
                }
                return {
                    items: S,
                    mount: function n() {
                        E(), p([K, J, "ei"], n);
                        var t = d.pagination;
                        if (k && ln(k, t ? "" : "none"), t) {
                            p([H, Tn, V], z);
                            var t = l.length,
                                i = d.classes,
                                r = d.i18n,
                                o = d.perPage,
                                u = x() ? w.getEnd() + 1 : kn(t / o);
                            M(v = k || j("ul", i.pagination, b.track.parentElement), h = gt + "--" + A()), I(v, Z, "tablist"), I(v, nn, r.select), I(v, nt, A() === Jn ? "vertical" : "");
                            for (var e = 0; e < u; e++) {
                                var c = j("li", null, v),
                                    f = j("button", {
                                        class: i.page,
                                        type: "button"
                                    }, c),
                                    a = y.getIn(e).map(function(n) {
                                        return n.slide.id
                                    }),
                                    s = !x() && 1 < o ? r.pageX : r.slideX;
                                m(f, "click", R(L, e)), d.paginationKeyboard && m(f, "keydown", R(O, e)), I(c, Z, "presentation"), I(f, Z, "tab"), I(f, Kn, a.join(" ")), I(f, nn, On(s, e + 1)), I(f, $, -1), S.push({
                                    li: c,
                                    button: f,
                                    page: e
                                })
                            }
                            z(), g("pagination:mounted", {
                                list: v,
                                items: S
                            }, _(l.index))
                        }
                    },
                    destroy: E,
                    getAt: _,
                    update: z
                }
            },
            Sync: function(i, n, t) {
                var r = t.isNavigation,
                    o = t.slideFocus,
                    u = [];

                function e() {
                    var n, t;
                    i.splides.forEach(function(n) {
                        n.isParent || (f(i, n.splide), f(n.splide, i))
                    }), r && (n = Q(i), (t = n.on)(Mn, s), t(Yn, l), t([B, K], a), u.push(n), n.emit(Gn, i.splides))
                }

                function c() {
                    u.forEach(function(n) {
                        n.destroy()
                    }), D(u)
                }

                function f(n, r) {
                    n = Q(n);
                    n.on(H, function(n, t, i) {
                        r.go(r.is(Pt) ? i : n)
                    }), u.push(n)
                }

                function a() {
                    I(n.Elements.list, nt, t.direction === Jn ? "vertical" : "")
                }

                function s(n) {
                    i.go(n.index)
                }

                function l(n, t) {
                    b(Yt, Tt(t)) && (s(n), F(t))
                }
                return {
                    setup: R(n.Media.set, {
                        slideFocus: en(o) ? r : o
                    }, !0),
                    mount: e,
                    destroy: c,
                    remount: function() {
                        c(), e()
                    }
                }
            },
            Wheel: function(e, c, f) {
                var n = Q(e).bind,
                    a = 0;

                function t(n) {
                    var t, i, r, o, u;
                    n.cancelable && (t = (u = n.deltaY) < 0, i = mn(n), r = f.wheelMinThreshold || 0, o = f.wheelSleep || 0, U(u) > r && o < i - a && (e.go(t ? "<" : ">"), a = i), u = t, f.releaseWheel && !e.state.is(G) && -1 === c.Controller.getAdjacent(u) || F(n))
                }
                return {
                    mount: function() {
                        f.wheel && n(c.Elements.track, "wheel", t, jt)
                    }
                }
            },
            Live: function(n, t, i) {
                var r = Q(n).on,
                    o = t.Elements.track,
                    u = i.live && !i.isNavigation,
                    e = j("span", wt),
                    c = qn(90, R(f, !1));

                function f(n) {
                    I(o, rt, n), n ? (L(o, e), c.start()) : (T(e), c.cancel())
                }

                function a(n) {
                    u && I(o, it, n ? "off" : "polite")
                }
                return {
                    mount: function() {
                        u && (a(!t.Autoplay.isPaused()), I(o, ot, !0), e.textContent = "…", r(Fn, R(a, !0)), r(Xn, R(a, !1)), r([Dn, V], R(f, !0)))
                    },
                    disable: a,
                    destroy: function() {
                        P(o, [it, ot, rt]), T(e)
                    }
                }
            }
        }),
        qt = {
            type: "slide",
            role: "region",
            speed: 400,
            perPage: 1,
            cloneStatus: !0,
            arrows: !0,
            pagination: !0,
            paginationKeyboard: !0,
            interval: 5e3,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            resetProgress: !0,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            drag: !0,
            direction: "ltr",
            trimSpace: !0,
            focusableNodes: "a, button, textarea, input, select, iframe",
            live: !0,
            classes: {
                slide: at,
                clone: st,
                arrows: dt,
                arrow: vt,
                prev: ht,
                next: pt,
                pagination: gt,
                page: mt,
                spinner: i + "spinner"
            },
            i18n: {
                prev: "Previous slide",
                next: "Next slide",
                first: "Go to first slide",
                last: "Go to last slide",
                slideX: "Go to slide %s",
                pageX: "Go to page %s",
                play: "Start autoplay",
                pause: "Pause autoplay",
                carousel: "carousel",
                slide: "slide",
                select: "Select a slide to show",
                slideLabel: "%s of %s"
            },
            reducedMotion: {
                speed: 0,
                rewindSpeed: 0,
                autoplay: "pause"
            }
        };

    function Bt(n, t, i) {
        var r = t.Slides;

        function o() {
            r.forEach(function(n) {
                n.style("transform", "translateX(-" + 100 * n.index + "%)")
            })
        }
        return {
            mount: function() {
                Q(n).on([B, J], o)
            },
            start: function(n, t) {
                r.style("transition", "opacity " + i.speed + "ms " + i.easing), p(t)
            },
            cancel: on
        }
    }

    function Ht(u, n, e) {
        var c, f = n.Move,
            a = n.Controller,
            s = n.Scroll,
            t = n.Elements.list,
            l = R(_, t, "transition");

        function i() {
            l(""), s.cancel()
        }
        return {
            mount: function() {
                Q(u).bind(t, "transitionend", function(n) {
                    n.target === t && c && (i(), c())
                })
            },
            start: function(n, t) {
                var i = f.toPosition(n, !0),
                    r = f.getPosition(),
                    o = function(n) {
                        var t = e.rewindSpeed;
                        if (u.is(Mt) && t) {
                            var i = a.getIndex(!0),
                                r = a.getEnd();
                            if (0 === i && r <= n || r <= i && 0 === n) return t
                        }
                        return e.speed
                    }(n);
                1 <= U(i - r) && 1 <= o ? e.useScroll ? s.scroll(i, o, !1, t) : (l("transform " + o + "ms " + e.easing), f.translate(i, !0), c = t) : (f.jump(n), t())
            },
            cancel: i
        }
    }
    t = function() {
        function i(n, t) {
            this.event = Q(), this.Components = {}, this.state = s(1), this.splides = [], this.n = {}, this.t = {};
            n = C(n) ? pn(document, n) : n;
            bn(n, n + " is invalid."), t = d({
                label: z(this.root = n, nn) || "",
                labelledby: z(n, Zn) || ""
            }, qt, i.defaults, t || {});
            try {
                d(t, JSON.parse(z(n, f)))
            } catch (n) {
                bn(!1, "Invalid JSON")
            }
            this.n = Object.create(d({}, t))
        }
        var n = i.prototype;
        return n.mount = function(n, t) {
            var i = this,
                r = this.state,
                o = this.Components;
            return bn(r.is([1, 7]), "Already mounted!"), r.set(1), this.i = o, this.r = t || this.r || (this.is(It) ? Bt : Ht), this.t = n || this.t, w(an({}, Ut, this.t, {
                Transition: this.r
            }), function(n, t) {
                n = n(i, o, i.n);
                (o[t] = n).setup && n.setup()
            }), w(o, function(n) {
                n.mount && n.mount()
            }), this.emit(B), M(this.root, "is-initialized"), r.set(3), this.emit("ready"), this
        }, n.sync = function(n) {
            return this.splides.push({
                splide: n
            }), n.splides.push({
                splide: this,
                isParent: !0
            }), this.state.is(3) && (this.i.Sync.remount(), n.Components.Sync.remount()), this
        }, n.go = function(n) {
            return this.i.Controller.go(n), this
        }, n.on = function(n, t) {
            return this.event.on(n, t), this
        }, n.off = function(n) {
            return this.event.off(n), this
        }, n.emit = function(n) {
            var t;
            return (t = this.event).emit.apply(t, [n].concat(o(arguments, 1))), this
        }, n.add = function(n, t) {
            return this.i.Slides.add(n, t), this
        }, n.remove = function(n) {
            return this.i.Slides.remove(n), this
        }, n.is = function(n) {
            return this.n.type === n
        }, n.refresh = function() {
            return this.emit(J), this
        }, n.destroy = function(t) {
            void 0 === t && (t = !0);
            var n = this.event,
                i = this.state;
            return i.is(1) ? Q(this).on("ready", this.destroy.bind(this, t)) : (w(this.i, function(n) {
                n.destroy && n.destroy(t)
            }, !0), n.emit(a), n.destroy(), t && D(this.splides), i.set(7)), this
        }, Jt(i, [{
            key: "options",
            get: function() {
                return this.n
            },
            set: function(n) {
                this.i.Media.set(n, !0, !0)
            }
        }, {
            key: "length",
            get: function() {
                return this.i.Slides.getLength(!0)
            }
        }, {
            key: "index",
            get: function() {
                return this.i.Controller.getIndex()
            }
        }]), i
    }();
    return t.defaults = {}, t.STATES = r, t
}, "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).Splide = t();
//# sourceMappingURL=splide.min.js.map

/* flatpickr v4.6.13,, @license MIT */
! function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).flatpickr = n()
}(this, (function() {
    "use strict";
    var e = function() {
        return (e = Object.assign || function(e) {
            for (var n, t = 1, a = arguments.length; t < a; t++)
                for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            return e
        }).apply(this, arguments)
    };

    function n() {
        for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
        var a = Array(e),
            i = 0;
        for (n = 0; n < t; n++)
            for (var o = arguments[n], r = 0, l = o.length; r < l; r++, i++) a[i] = o[r];
        return a
    }
    var t = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
        a = {
            _disable: [],
            allowInput: !1,
            allowInvalidPreload: !1,
            altFormat: "F j, Y",
            altInput: !1,
            altInputClass: "form-control input",
            animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
            ariaDateFormat: "F j, Y",
            autoFillDefaultTime: !0,
            clickOpens: !0,
            closeOnSelect: !0,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: !1,
            enableSeconds: !1,
            enableTime: !1,
            errorHandler: function(e) {
                return "undefined" != typeof console && console.warn(e)
            },
            getWeek: function(e) {
                var n = new Date(e.getTime());
                n.setHours(0, 0, 0, 0), n.setDate(n.getDate() + 3 - (n.getDay() + 6) % 7);
                var t = new Date(n.getFullYear(), 0, 4);
                return 1 + Math.round(((n.getTime() - t.getTime()) / 864e5 - 3 + (t.getDay() + 6) % 7) / 7)
            },
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: !1,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            monthSelectorType: "dropdown",
            nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: !1,
            now: new Date,
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            onPreCalendarPosition: [],
            plugins: [],
            position: "auto",
            positionElement: void 0,
            prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: !1,
            showMonths: 1,
            static: !1,
            time_24hr: !1,
            weekNumbers: !1,
            wrap: !1
        },
        i = {
            weekdays: {
                shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            months: {
                shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            firstDayOfWeek: 0,
            ordinal: function(e) {
                var n = e % 100;
                if (n > 3 && n < 21) return "th";
                switch (n % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th"
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: ["AM", "PM"],
            yearAriaLabel: "Year",
            monthAriaLabel: "Month",
            hourAriaLabel: "Hour",
            minuteAriaLabel: "Minute",
            time_24hr: !1
        },
        o = function(e, n) {
            return void 0 === n && (n = 2), ("000" + e).slice(-1 * n)
        },
        r = function(e) {
            return !0 === e ? 1 : 0
        };

    function l(e, n) {
        var t;
        return function() {
            var a = this,
                i = arguments;
            clearTimeout(t), t = setTimeout((function() {
                return e.apply(a, i)
            }), n)
        }
    }
    var c = function(e) {
        return e instanceof Array ? e : [e]
    };

    function s(e, n, t) {
        if (!0 === t) return e.classList.add(n);
        e.classList.remove(n)
    }

    function d(e, n, t) {
        var a = window.document.createElement(e);
        return n = n || "", t = t || "", a.className = n, void 0 !== t && (a.textContent = t), a
    }

    function u(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function f(e, n) {
        return n(e) ? e : e.parentNode ? f(e.parentNode, n) : void 0
    }

    function m(e, n) {
        var t = d("div", "numInputWrapper"),
            a = d("input", "numInput " + e),
            i = d("span", "arrowUp"),
            o = d("span", "arrowDown");
        if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? a.type = "number" : (a.type = "text", a.pattern = "\\d*"), void 0 !== n)
            for (var r in n) a.setAttribute(r, n[r]);
        return t.appendChild(a), t.appendChild(i), t.appendChild(o), t
    }

    function g(e) {
        try {
            return "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
        } catch (n) {
            return e.target
        }
    }
    var p = function() {},
        h = function(e, n, t) {
            return t.months[n ? "shorthand" : "longhand"][e]
        },
        v = {
            D: p,
            F: function(e, n, t) {
                e.setMonth(t.months.longhand.indexOf(n))
            },
            G: function(e, n) {
                e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n))
            },
            H: function(e, n) {
                e.setHours(parseFloat(n))
            },
            J: function(e, n) {
                e.setDate(parseFloat(n))
            },
            K: function(e, n, t) {
                e.setHours(e.getHours() % 12 + 12 * r(new RegExp(t.amPM[1], "i").test(n)))
            },
            M: function(e, n, t) {
                e.setMonth(t.months.shorthand.indexOf(n))
            },
            S: function(e, n) {
                e.setSeconds(parseFloat(n))
            },
            U: function(e, n) {
                return new Date(1e3 * parseFloat(n))
            },
            W: function(e, n, t) {
                var a = parseInt(n),
                    i = new Date(e.getFullYear(), 0, 2 + 7 * (a - 1), 0, 0, 0, 0);
                return i.setDate(i.getDate() - i.getDay() + t.firstDayOfWeek), i
            },
            Y: function(e, n) {
                e.setFullYear(parseFloat(n))
            },
            Z: function(e, n) {
                return new Date(n)
            },
            d: function(e, n) {
                e.setDate(parseFloat(n))
            },
            h: function(e, n) {
                e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(n))
            },
            i: function(e, n) {
                e.setMinutes(parseFloat(n))
            },
            j: function(e, n) {
                e.setDate(parseFloat(n))
            },
            l: p,
            m: function(e, n) {
                e.setMonth(parseFloat(n) - 1)
            },
            n: function(e, n) {
                e.setMonth(parseFloat(n) - 1)
            },
            s: function(e, n) {
                e.setSeconds(parseFloat(n))
            },
            u: function(e, n) {
                return new Date(parseFloat(n))
            },
            w: p,
            y: function(e, n) {
                e.setFullYear(2e3 + parseFloat(n))
            }
        },
        D = {
            D: "",
            F: "",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "",
            M: "",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            u: "(.+)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})"
        },
        w = {
            Z: function(e) {
                return e.toISOString()
            },
            D: function(e, n, t) {
                return n.weekdays.shorthand[w.w(e, n, t)]
            },
            F: function(e, n, t) {
                return h(w.n(e, n, t) - 1, !1, n)
            },
            G: function(e, n, t) {
                return o(w.h(e, n, t))
            },
            H: function(e) {
                return o(e.getHours())
            },
            J: function(e, n) {
                return void 0 !== n.ordinal ? e.getDate() + n.ordinal(e.getDate()) : e.getDate()
            },
            K: function(e, n) {
                return n.amPM[r(e.getHours() > 11)]
            },
            M: function(e, n) {
                return h(e.getMonth(), !0, n)
            },
            S: function(e) {
                return o(e.getSeconds())
            },
            U: function(e) {
                return e.getTime() / 1e3
            },
            W: function(e, n, t) {
                return t.getWeek(e)
            },
            Y: function(e) {
                return o(e.getFullYear(), 4)
            },
            d: function(e) {
                return o(e.getDate())
            },
            h: function(e) {
                return e.getHours() % 12 ? e.getHours() % 12 : 12
            },
            i: function(e) {
                return o(e.getMinutes())
            },
            j: function(e) {
                return e.getDate()
            },
            l: function(e, n) {
                return n.weekdays.longhand[e.getDay()]
            },
            m: function(e) {
                return o(e.getMonth() + 1)
            },
            n: function(e) {
                return e.getMonth() + 1
            },
            s: function(e) {
                return e.getSeconds()
            },
            u: function(e) {
                return e.getTime()
            },
            w: function(e) {
                return e.getDay()
            },
            y: function(e) {
                return String(e.getFullYear()).substring(2)
            }
        },
        b = function(e) {
            var n = e.config,
                t = void 0 === n ? a : n,
                o = e.l10n,
                r = void 0 === o ? i : o,
                l = e.isMobile,
                c = void 0 !== l && l;
            return function(e, n, a) {
                var i = a || r;
                return void 0 === t.formatDate || c ? n.split("").map((function(n, a, o) {
                    return w[n] && "\\" !== o[a - 1] ? w[n](e, i, t) : "\\" !== n ? n : ""
                })).join("") : t.formatDate(e, n, i)
            }
        },
        C = function(e) {
            var n = e.config,
                t = void 0 === n ? a : n,
                o = e.l10n,
                r = void 0 === o ? i : o;
            return function(e, n, i, o) {
                if (0 === e || e) {
                    var l, c = o || r,
                        s = e;
                    if (e instanceof Date) l = new Date(e.getTime());
                    else if ("string" != typeof e && void 0 !== e.toFixed) l = new Date(e);
                    else if ("string" == typeof e) {
                        var d = n || (t || a).dateFormat,
                            u = String(e).trim();
                        if ("today" === u) l = new Date, i = !0;
                        else if (t && t.parseDate) l = t.parseDate(e, d);
                        else if (/Z$/.test(u) || /GMT$/.test(u)) l = new Date(e);
                        else {
                            for (var f = void 0, m = [], g = 0, p = 0, h = ""; g < d.length; g++) {
                                var w = d[g],
                                    b = "\\" === w,
                                    C = "\\" === d[g - 1] || b;
                                if (D[w] && !C) {
                                    h += D[w];
                                    var M = new RegExp(h).exec(e);
                                    M && (f = !0) && m["Y" !== w ? "push" : "unshift"]({
                                        fn: v[w],
                                        val: M[++p]
                                    })
                                } else b || (h += ".")
                            }
                            l = t && t.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0), m.forEach((function(e) {
                                var n = e.fn,
                                    t = e.val;
                                return l = n(l, t, c) || l
                            })), l = f ? l : void 0
                        }
                    }
                    if (l instanceof Date && !isNaN(l.getTime())) return !0 === i && l.setHours(0, 0, 0, 0), l;
                    t.errorHandler(new Error("Invalid date provided: " + s))
                }
            }
        };

    function M(e, n, t) {
        return void 0 === t && (t = !0), !1 !== t ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(n.getTime()).setHours(0, 0, 0, 0) : e.getTime() - n.getTime()
    }
    var y = function(e, n, t) {
            return 3600 * e + 60 * n + t
        },
        x = 864e5;

    function E(e) {
        var n = e.defaultHour,
            t = e.defaultMinute,
            a = e.defaultSeconds;
        if (void 0 !== e.minDate) {
            var i = e.minDate.getHours(),
                o = e.minDate.getMinutes(),
                r = e.minDate.getSeconds();
            n < i && (n = i), n === i && t < o && (t = o), n === i && t === o && a < r && (a = e.minDate.getSeconds())
        }
        if (void 0 !== e.maxDate) {
            var l = e.maxDate.getHours(),
                c = e.maxDate.getMinutes();
            (n = Math.min(n, l)) === l && (t = Math.min(c, t)), n === l && t === c && (a = e.maxDate.getSeconds())
        }
        return {
            hours: n,
            minutes: t,
            seconds: a
        }
    }
    "function" != typeof Object.assign && (Object.assign = function(e) {
        for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        if (!e) throw TypeError("Cannot convert undefined or null to object");
        for (var a = function(n) {
                n && Object.keys(n).forEach((function(t) {
                    return e[t] = n[t]
                }))
            }, i = 0, o = n; i < o.length; i++) {
            var r = o[i];
            a(r)
        }
        return e
    });

    function k(p, v) {
        var w = {
            config: e(e({}, a), I.defaultConfig),
            l10n: i
        };

        function k() {
            var e;
            return (null === (e = w.calendarContainer) || void 0 === e ? void 0 : e.getRootNode()).activeElement || document.activeElement
        }

        function T(e) {
            return e.bind(w)
        }

        function S() {
            var e = w.config;
            !1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame((function() {
                if (void 0 !== w.calendarContainer && (w.calendarContainer.style.visibility = "hidden", w.calendarContainer.style.display = "block"), void 0 !== w.daysContainer) {
                    var n = (w.days.offsetWidth + 1) * e.showMonths;
                    w.daysContainer.style.width = n + "px", w.calendarContainer.style.width = n + (void 0 !== w.weekWrapper ? w.weekWrapper.offsetWidth : 0) + "px", w.calendarContainer.style.removeProperty("visibility"), w.calendarContainer.style.removeProperty("display")
                }
            }))
        }

        function _(e) {
            if (0 === w.selectedDates.length) {
                var n = void 0 === w.config.minDate || M(new Date, w.config.minDate) >= 0 ? new Date : new Date(w.config.minDate.getTime()),
                    t = E(w.config);
                n.setHours(t.hours, t.minutes, t.seconds, n.getMilliseconds()), w.selectedDates = [n], w.latestSelectedDateObj = n
            }
            void 0 !== e && "blur" !== e.type && function(e) {
                e.preventDefault();
                var n = "keydown" === e.type,
                    t = g(e),
                    a = t;
                void 0 !== w.amPM && t === w.amPM && (w.amPM.textContent = w.l10n.amPM[r(w.amPM.textContent === w.l10n.amPM[0])]);
                var i = parseFloat(a.getAttribute("min")),
                    l = parseFloat(a.getAttribute("max")),
                    c = parseFloat(a.getAttribute("step")),
                    s = parseInt(a.value, 10),
                    d = e.delta || (n ? 38 === e.which ? 1 : -1 : 0),
                    u = s + c * d;
                if (void 0 !== a.value && 2 === a.value.length) {
                    var f = a === w.hourElement,
                        m = a === w.minuteElement;
                    u < i ? (u = l + u + r(!f) + (r(f) && r(!w.amPM)), m && L(void 0, -1, w.hourElement)) : u > l && (u = a === w.hourElement ? u - l - r(!w.amPM) : i, m && L(void 0, 1, w.hourElement)), w.amPM && f && (1 === c ? u + s === 23 : Math.abs(u - s) > c) && (w.amPM.textContent = w.l10n.amPM[r(w.amPM.textContent === w.l10n.amPM[0])]), a.value = o(u)
                }
            }(e);
            var a = w._input.value;
            O(), ye(), w._input.value !== a && w._debouncedChange()
        }

        function O() {
            if (void 0 !== w.hourElement && void 0 !== w.minuteElement) {
                var e, n, t = (parseInt(w.hourElement.value.slice(-2), 10) || 0) % 24,
                    a = (parseInt(w.minuteElement.value, 10) || 0) % 60,
                    i = void 0 !== w.secondElement ? (parseInt(w.secondElement.value, 10) || 0) % 60 : 0;
                void 0 !== w.amPM && (e = t, n = w.amPM.textContent, t = e % 12 + 12 * r(n === w.l10n.amPM[1]));
                var o = void 0 !== w.config.minTime || w.config.minDate && w.minDateHasTime && w.latestSelectedDateObj && 0 === M(w.latestSelectedDateObj, w.config.minDate, !0),
                    l = void 0 !== w.config.maxTime || w.config.maxDate && w.maxDateHasTime && w.latestSelectedDateObj && 0 === M(w.latestSelectedDateObj, w.config.maxDate, !0);
                if (void 0 !== w.config.maxTime && void 0 !== w.config.minTime && w.config.minTime > w.config.maxTime) {
                    var c = y(w.config.minTime.getHours(), w.config.minTime.getMinutes(), w.config.minTime.getSeconds()),
                        s = y(w.config.maxTime.getHours(), w.config.maxTime.getMinutes(), w.config.maxTime.getSeconds()),
                        d = y(t, a, i);
                    if (d > s && d < c) {
                        var u = function(e) {
                            var n = Math.floor(e / 3600),
                                t = (e - 3600 * n) / 60;
                            return [n, t, e - 3600 * n - 60 * t]
                        }(c);
                        t = u[0], a = u[1], i = u[2]
                    }
                } else {
                    if (l) {
                        var f = void 0 !== w.config.maxTime ? w.config.maxTime : w.config.maxDate;
                        (t = Math.min(t, f.getHours())) === f.getHours() && (a = Math.min(a, f.getMinutes())), a === f.getMinutes() && (i = Math.min(i, f.getSeconds()))
                    }
                    if (o) {
                        var m = void 0 !== w.config.minTime ? w.config.minTime : w.config.minDate;
                        (t = Math.max(t, m.getHours())) === m.getHours() && a < m.getMinutes() && (a = m.getMinutes()), a === m.getMinutes() && (i = Math.max(i, m.getSeconds()))
                    }
                }
                A(t, a, i)
            }
        }

        function F(e) {
            var n = e || w.latestSelectedDateObj;
            n && n instanceof Date && A(n.getHours(), n.getMinutes(), n.getSeconds())
        }

        function A(e, n, t) {
            void 0 !== w.latestSelectedDateObj && w.latestSelectedDateObj.setHours(e % 24, n, t || 0, 0), w.hourElement && w.minuteElement && !w.isMobile && (w.hourElement.value = o(w.config.time_24hr ? e : (12 + e) % 12 + 12 * r(e % 12 == 0)), w.minuteElement.value = o(n), void 0 !== w.amPM && (w.amPM.textContent = w.l10n.amPM[r(e >= 12)]), void 0 !== w.secondElement && (w.secondElement.value = o(t)))
        }

        function N(e) {
            var n = g(e),
                t = parseInt(n.value) + (e.delta || 0);
            (t / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(t.toString())) && ee(t)
        }

        function P(e, n, t, a) {
            return n instanceof Array ? n.forEach((function(n) {
                return P(e, n, t, a)
            })) : e instanceof Array ? e.forEach((function(e) {
                return P(e, n, t, a)
            })) : (e.addEventListener(n, t, a), void w._handlers.push({
                remove: function() {
                    return e.removeEventListener(n, t, a)
                }
            }))
        }

        function Y() {
            De("onChange")
        }

        function j(e, n) {
            var t = void 0 !== e ? w.parseDate(e) : w.latestSelectedDateObj || (w.config.minDate && w.config.minDate > w.now ? w.config.minDate : w.config.maxDate && w.config.maxDate < w.now ? w.config.maxDate : w.now),
                a = w.currentYear,
                i = w.currentMonth;
            try {
                void 0 !== t && (w.currentYear = t.getFullYear(), w.currentMonth = t.getMonth())
            } catch (e) {
                e.message = "Invalid date supplied: " + t, w.config.errorHandler(e)
            }
            n && w.currentYear !== a && (De("onYearChange"), q()), !n || w.currentYear === a && w.currentMonth === i || De("onMonthChange"), w.redraw()
        }

        function H(e) {
            var n = g(e);
            ~n.className.indexOf("arrow") && L(e, n.classList.contains("arrowUp") ? 1 : -1)
        }

        function L(e, n, t) {
            var a = e && g(e),
                i = t || a && a.parentNode && a.parentNode.firstChild,
                o = we("increment");
            o.delta = n, i && i.dispatchEvent(o)
        }

        function R(e, n, t, a) {
            var i = ne(n, !0),
                o = d("span", e, n.getDate().toString());
            return o.dateObj = n, o.$i = a, o.setAttribute("aria-label", w.formatDate(n, w.config.ariaDateFormat)), -1 === e.indexOf("hidden") && 0 === M(n, w.now) && (w.todayDateElem = o, o.classList.add("today"), o.setAttribute("aria-current", "date")), i ? (o.tabIndex = -1, be(n) && (o.classList.add("selected"), w.selectedDateElem = o, "range" === w.config.mode && (s(o, "startRange", w.selectedDates[0] && 0 === M(n, w.selectedDates[0], !0)), s(o, "endRange", w.selectedDates[1] && 0 === M(n, w.selectedDates[1], !0)), "nextMonthDay" === e && o.classList.add("inRange")))) : o.classList.add("flatpickr-disabled"), "range" === w.config.mode && function(e) {
                return !("range" !== w.config.mode || w.selectedDates.length < 2) && (M(e, w.selectedDates[0]) >= 0 && M(e, w.selectedDates[1]) <= 0)
            }(n) && !be(n) && o.classList.add("inRange"), w.weekNumbers && 1 === w.config.showMonths && "prevMonthDay" !== e && a % 7 == 6 && w.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + w.config.getWeek(n) + "</span>"), De("onDayCreate", o), o
        }

        function W(e) {
            e.focus(), "range" === w.config.mode && oe(e)
        }

        function B(e) {
            for (var n = e > 0 ? 0 : w.config.showMonths - 1, t = e > 0 ? w.config.showMonths : -1, a = n; a != t; a += e)
                for (var i = w.daysContainer.children[a], o = e > 0 ? 0 : i.children.length - 1, r = e > 0 ? i.children.length : -1, l = o; l != r; l += e) {
                    var c = i.children[l];
                    if (-1 === c.className.indexOf("hidden") && ne(c.dateObj)) return c
                }
        }

        function J(e, n) {
            var t = k(),
                a = te(t || document.body),
                i = void 0 !== e ? e : a ? t : void 0 !== w.selectedDateElem && te(w.selectedDateElem) ? w.selectedDateElem : void 0 !== w.todayDateElem && te(w.todayDateElem) ? w.todayDateElem : B(n > 0 ? 1 : -1);
            void 0 === i ? w._input.focus() : a ? function(e, n) {
                for (var t = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : w.currentMonth, a = n > 0 ? w.config.showMonths : -1, i = n > 0 ? 1 : -1, o = t - w.currentMonth; o != a; o += i)
                    for (var r = w.daysContainer.children[o], l = t - w.currentMonth === o ? e.$i + n : n < 0 ? r.children.length - 1 : 0, c = r.children.length, s = l; s >= 0 && s < c && s != (n > 0 ? c : -1); s += i) {
                        var d = r.children[s];
                        if (-1 === d.className.indexOf("hidden") && ne(d.dateObj) && Math.abs(e.$i - s) >= Math.abs(n)) return W(d)
                    }
                w.changeMonth(i), J(B(i), 0)
            }(i, n) : W(i)
        }

        function K(e, n) {
            for (var t = (new Date(e, n, 1).getDay() - w.l10n.firstDayOfWeek + 7) % 7, a = w.utils.getDaysInMonth((n - 1 + 12) % 12, e), i = w.utils.getDaysInMonth(n, e), o = window.document.createDocumentFragment(), r = w.config.showMonths > 1, l = r ? "prevMonthDay hidden" : "prevMonthDay", c = r ? "nextMonthDay hidden" : "nextMonthDay", s = a + 1 - t, u = 0; s <= a; s++, u++) o.appendChild(R("flatpickr-day " + l, new Date(e, n - 1, s), 0, u));
            for (s = 1; s <= i; s++, u++) o.appendChild(R("flatpickr-day", new Date(e, n, s), 0, u));
            for (var f = i + 1; f <= 42 - t && (1 === w.config.showMonths || u % 7 != 0); f++, u++) o.appendChild(R("flatpickr-day " + c, new Date(e, n + 1, f % i), 0, u));
            var m = d("div", "dayContainer");
            return m.appendChild(o), m
        }

        function U() {
            if (void 0 !== w.daysContainer) {
                u(w.daysContainer), w.weekNumbers && u(w.weekNumbers);
                for (var e = document.createDocumentFragment(), n = 0; n < w.config.showMonths; n++) {
                    var t = new Date(w.currentYear, w.currentMonth, 1);
                    t.setMonth(w.currentMonth + n), e.appendChild(K(t.getFullYear(), t.getMonth()))
                }
                w.daysContainer.appendChild(e), w.days = w.daysContainer.firstChild, "range" === w.config.mode && 1 === w.selectedDates.length && oe()
            }
        }

        function q() {
            if (!(w.config.showMonths > 1 || "dropdown" !== w.config.monthSelectorType)) {
                var e = function(e) {
                    return !(void 0 !== w.config.minDate && w.currentYear === w.config.minDate.getFullYear() && e < w.config.minDate.getMonth()) && !(void 0 !== w.config.maxDate && w.currentYear === w.config.maxDate.getFullYear() && e > w.config.maxDate.getMonth())
                };
                w.monthsDropdownContainer.tabIndex = -1, w.monthsDropdownContainer.innerHTML = "";
                for (var n = 0; n < 12; n++)
                    if (e(n)) {
                        var t = d("option", "flatpickr-monthDropdown-month");
                        t.value = new Date(w.currentYear, n).getMonth().toString(), t.textContent = h(n, w.config.shorthandCurrentMonth, w.l10n), t.tabIndex = -1, w.currentMonth === n && (t.selected = !0), w.monthsDropdownContainer.appendChild(t)
                    }
            }
        }

        function $() {
            var e, n = d("div", "flatpickr-month"),
                t = window.document.createDocumentFragment();
            w.config.showMonths > 1 || "static" === w.config.monthSelectorType ? e = d("span", "cur-month") : (w.monthsDropdownContainer = d("select", "flatpickr-monthDropdown-months"), w.monthsDropdownContainer.setAttribute("aria-label", w.l10n.monthAriaLabel), P(w.monthsDropdownContainer, "change", (function(e) {
                var n = g(e),
                    t = parseInt(n.value, 10);
                w.changeMonth(t - w.currentMonth), De("onMonthChange")
            })), q(), e = w.monthsDropdownContainer);
            var a = m("cur-year", {
                    tabindex: "-1"
                }),
                i = a.getElementsByTagName("input")[0];
            i.setAttribute("aria-label", w.l10n.yearAriaLabel), w.config.minDate && i.setAttribute("min", w.config.minDate.getFullYear().toString()), w.config.maxDate && (i.setAttribute("max", w.config.maxDate.getFullYear().toString()), i.disabled = !!w.config.minDate && w.config.minDate.getFullYear() === w.config.maxDate.getFullYear());
            var o = d("div", "flatpickr-current-month");
            return o.appendChild(e), o.appendChild(a), t.appendChild(o), n.appendChild(t), {
                container: n,
                yearElement: i,
                monthElement: e
            }
        }

        function V() {
            u(w.monthNav), w.monthNav.appendChild(w.prevMonthNav), w.config.showMonths && (w.yearElements = [], w.monthElements = []);
            for (var e = w.config.showMonths; e--;) {
                var n = $();
                w.yearElements.push(n.yearElement), w.monthElements.push(n.monthElement), w.monthNav.appendChild(n.container)
            }
            w.monthNav.appendChild(w.nextMonthNav)
        }

        function z() {
            w.weekdayContainer ? u(w.weekdayContainer) : w.weekdayContainer = d("div", "flatpickr-weekdays");
            for (var e = w.config.showMonths; e--;) {
                var n = d("div", "flatpickr-weekdaycontainer");
                w.weekdayContainer.appendChild(n)
            }
            return G(), w.weekdayContainer
        }

        function G() {
            if (w.weekdayContainer) {
                var e = w.l10n.firstDayOfWeek,
                    t = n(w.l10n.weekdays.shorthand);
                e > 0 && e < t.length && (t = n(t.splice(e, t.length), t.splice(0, e)));
                for (var a = w.config.showMonths; a--;) w.weekdayContainer.children[a].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + t.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      "
            }
        }

        function Z(e, n) {
            void 0 === n && (n = !0);
            var t = n ? e : e - w.currentMonth;
            t < 0 && !0 === w._hidePrevMonthArrow || t > 0 && !0 === w._hideNextMonthArrow || (w.currentMonth += t, (w.currentMonth < 0 || w.currentMonth > 11) && (w.currentYear += w.currentMonth > 11 ? 1 : -1, w.currentMonth = (w.currentMonth + 12) % 12, De("onYearChange"), q()), U(), De("onMonthChange"), Ce())
        }

        function Q(e) {
            return w.calendarContainer.contains(e)
        }

        function X(e) {
            if (w.isOpen && !w.config.inline) {
                var n = g(e),
                    t = Q(n),
                    a = !(n === w.input || n === w.altInput || w.element.contains(n) || e.path && e.path.indexOf && (~e.path.indexOf(w.input) || ~e.path.indexOf(w.altInput))) && !t && !Q(e.relatedTarget),
                    i = !w.config.ignoredFocusElements.some((function(e) {
                        return e.contains(n)
                    }));
                a && i && (w.config.allowInput && w.setDate(w._input.value, !1, w.config.altInput ? w.config.altFormat : w.config.dateFormat), void 0 !== w.timeContainer && void 0 !== w.minuteElement && void 0 !== w.hourElement && "" !== w.input.value && void 0 !== w.input.value && _(), w.close(), w.config && "range" === w.config.mode && 1 === w.selectedDates.length && w.clear(!1))
            }
        }

        function ee(e) {
            if (!(!e || w.config.minDate && e < w.config.minDate.getFullYear() || w.config.maxDate && e > w.config.maxDate.getFullYear())) {
                var n = e,
                    t = w.currentYear !== n;
                w.currentYear = n || w.currentYear, w.config.maxDate && w.currentYear === w.config.maxDate.getFullYear() ? w.currentMonth = Math.min(w.config.maxDate.getMonth(), w.currentMonth) : w.config.minDate && w.currentYear === w.config.minDate.getFullYear() && (w.currentMonth = Math.max(w.config.minDate.getMonth(), w.currentMonth)), t && (w.redraw(), De("onYearChange"), q())
            }
        }

        function ne(e, n) {
            var t;
            void 0 === n && (n = !0);
            var a = w.parseDate(e, void 0, n);
            if (w.config.minDate && a && M(a, w.config.minDate, void 0 !== n ? n : !w.minDateHasTime) < 0 || w.config.maxDate && a && M(a, w.config.maxDate, void 0 !== n ? n : !w.maxDateHasTime) > 0) return !1;
            if (!w.config.enable && 0 === w.config.disable.length) return !0;
            if (void 0 === a) return !1;
            for (var i = !!w.config.enable, o = null !== (t = w.config.enable) && void 0 !== t ? t : w.config.disable, r = 0, l = void 0; r < o.length; r++) {
                if ("function" == typeof(l = o[r]) && l(a)) return i;
                if (l instanceof Date && void 0 !== a && l.getTime() === a.getTime()) return i;
                if ("string" == typeof l) {
                    var c = w.parseDate(l, void 0, !0);
                    return c && c.getTime() === a.getTime() ? i : !i
                }
                if ("object" == typeof l && void 0 !== a && l.from && l.to && a.getTime() >= l.from.getTime() && a.getTime() <= l.to.getTime()) return i
            }
            return !i
        }

        function te(e) {
            return void 0 !== w.daysContainer && (-1 === e.className.indexOf("hidden") && -1 === e.className.indexOf("flatpickr-disabled") && w.daysContainer.contains(e))
        }

        function ae(e) {
            var n = e.target === w._input,
                t = w._input.value.trimEnd() !== Me();
            !n || !t || e.relatedTarget && Q(e.relatedTarget) || w.setDate(w._input.value, !0, e.target === w.altInput ? w.config.altFormat : w.config.dateFormat)
        }

        function ie(e) {
            var n = g(e),
                t = w.config.wrap ? p.contains(n) : n === w._input,
                a = w.config.allowInput,
                i = w.isOpen && (!a || !t),
                o = w.config.inline && t && !a;
            if (13 === e.keyCode && t) {
                if (a) return w.setDate(w._input.value, !0, n === w.altInput ? w.config.altFormat : w.config.dateFormat), w.close(), n.blur();
                w.open()
            } else if (Q(n) || i || o) {
                var r = !!w.timeContainer && w.timeContainer.contains(n);
                switch (e.keyCode) {
                    case 13:
                        r ? (e.preventDefault(), _(), fe()) : me(e);
                        break;
                    case 27:
                        e.preventDefault(), fe();
                        break;
                    case 8:
                    case 46:
                        t && !w.config.allowInput && (e.preventDefault(), w.clear());
                        break;
                    case 37:
                    case 39:
                        if (r || t) w.hourElement && w.hourElement.focus();
                        else {
                            e.preventDefault();
                            var l = k();
                            if (void 0 !== w.daysContainer && (!1 === a || l && te(l))) {
                                var c = 39 === e.keyCode ? 1 : -1;
                                e.ctrlKey ? (e.stopPropagation(), Z(c), J(B(1), 0)) : J(void 0, c)
                            }
                        }
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var s = 40 === e.keyCode ? 1 : -1;
                        w.daysContainer && void 0 !== n.$i || n === w.input || n === w.altInput ? e.ctrlKey ? (e.stopPropagation(), ee(w.currentYear - s), J(B(1), 0)) : r || J(void 0, 7 * s) : n === w.currentYearElement ? ee(w.currentYear - s) : w.config.enableTime && (!r && w.hourElement && w.hourElement.focus(), _(e), w._debouncedChange());
                        break;
                    case 9:
                        if (r) {
                            var d = [w.hourElement, w.minuteElement, w.secondElement, w.amPM].concat(w.pluginElements).filter((function(e) {
                                    return e
                                })),
                                u = d.indexOf(n);
                            if (-1 !== u) {
                                var f = d[u + (e.shiftKey ? -1 : 1)];
                                e.preventDefault(), (f || w._input).focus()
                            }
                        } else !w.config.noCalendar && w.daysContainer && w.daysContainer.contains(n) && e.shiftKey && (e.preventDefault(), w._input.focus())
                }
            }
            if (void 0 !== w.amPM && n === w.amPM) switch (e.key) {
                case w.l10n.amPM[0].charAt(0):
                case w.l10n.amPM[0].charAt(0).toLowerCase():
                    w.amPM.textContent = w.l10n.amPM[0], O(), ye();
                    break;
                case w.l10n.amPM[1].charAt(0):
                case w.l10n.amPM[1].charAt(0).toLowerCase():
                    w.amPM.textContent = w.l10n.amPM[1], O(), ye()
            }(t || Q(n)) && De("onKeyDown", e)
        }

        function oe(e, n) {
            if (void 0 === n && (n = "flatpickr-day"), 1 === w.selectedDates.length && (!e || e.classList.contains(n) && !e.classList.contains("flatpickr-disabled"))) {
                for (var t = e ? e.dateObj.getTime() : w.days.firstElementChild.dateObj.getTime(), a = w.parseDate(w.selectedDates[0], void 0, !0).getTime(), i = Math.min(t, w.selectedDates[0].getTime()), o = Math.max(t, w.selectedDates[0].getTime()), r = !1, l = 0, c = 0, s = i; s < o; s += x) ne(new Date(s), !0) || (r = r || s > i && s < o, s < a && (!l || s > l) ? l = s : s > a && (!c || s < c) && (c = s));
                Array.from(w.rContainer.querySelectorAll("*:nth-child(-n+" + w.config.showMonths + ") > ." + n)).forEach((function(n) {
                    var i, o, s, d = n.dateObj.getTime(),
                        u = l > 0 && d < l || c > 0 && d > c;
                    if (u) return n.classList.add("notAllowed"), void["inRange", "startRange", "endRange"].forEach((function(e) {
                        n.classList.remove(e)
                    }));
                    r && !u || (["startRange", "inRange", "endRange", "notAllowed"].forEach((function(e) {
                        n.classList.remove(e)
                    })), void 0 !== e && (e.classList.add(t <= w.selectedDates[0].getTime() ? "startRange" : "endRange"), a < t && d === a ? n.classList.add("startRange") : a > t && d === a && n.classList.add("endRange"), d >= l && (0 === c || d <= c) && (o = a, s = t, (i = d) > Math.min(o, s) && i < Math.max(o, s)) && n.classList.add("inRange")))
                }))
            }
        }

        function re() {
            !w.isOpen || w.config.static || w.config.inline || de()
        }

        function le(e) {
            return function(n) {
                var t = w.config["_" + e + "Date"] = w.parseDate(n, w.config.dateFormat),
                    a = w.config["_" + ("min" === e ? "max" : "min") + "Date"];
                void 0 !== t && (w["min" === e ? "minDateHasTime" : "maxDateHasTime"] = t.getHours() > 0 || t.getMinutes() > 0 || t.getSeconds() > 0), w.selectedDates && (w.selectedDates = w.selectedDates.filter((function(e) {
                    return ne(e)
                })), w.selectedDates.length || "min" !== e || F(t), ye()), w.daysContainer && (ue(), void 0 !== t ? w.currentYearElement[e] = t.getFullYear().toString() : w.currentYearElement.removeAttribute(e), w.currentYearElement.disabled = !!a && void 0 !== t && a.getFullYear() === t.getFullYear())
            }
        }

        function ce() {
            return w.config.wrap ? p.querySelector("[data-input]") : p
        }

        function se() {
            "object" != typeof w.config.locale && void 0 === I.l10ns[w.config.locale] && w.config.errorHandler(new Error("flatpickr: invalid locale " + w.config.locale)), w.l10n = e(e({}, I.l10ns.default), "object" == typeof w.config.locale ? w.config.locale : "default" !== w.config.locale ? I.l10ns[w.config.locale] : void 0), D.D = "(" + w.l10n.weekdays.shorthand.join("|") + ")", D.l = "(" + w.l10n.weekdays.longhand.join("|") + ")", D.M = "(" + w.l10n.months.shorthand.join("|") + ")", D.F = "(" + w.l10n.months.longhand.join("|") + ")", D.K = "(" + w.l10n.amPM[0] + "|" + w.l10n.amPM[1] + "|" + w.l10n.amPM[0].toLowerCase() + "|" + w.l10n.amPM[1].toLowerCase() + ")", void 0 === e(e({}, v), JSON.parse(JSON.stringify(p.dataset || {}))).time_24hr && void 0 === I.defaultConfig.time_24hr && (w.config.time_24hr = w.l10n.time_24hr), w.formatDate = b(w), w.parseDate = C({
                config: w.config,
                l10n: w.l10n
            })
        }

        function de(e) {
            if ("function" != typeof w.config.position) {
                if (void 0 !== w.calendarContainer) {
                    De("onPreCalendarPosition");
                    var n = e || w._positionElement,
                        t = Array.prototype.reduce.call(w.calendarContainer.children, (function(e, n) {
                            return e + n.offsetHeight
                        }), 0),
                        a = w.calendarContainer.offsetWidth,
                        i = w.config.position.split(" "),
                        o = i[0],
                        r = i.length > 1 ? i[1] : null,
                        l = n.getBoundingClientRect(),
                        c = window.innerHeight - l.bottom,
                        d = "above" === o || "below" !== o && c < t && l.top > t,
                        u = window.pageYOffset + l.top + (d ? -t - 2 : n.offsetHeight + 2);
                    if (s(w.calendarContainer, "arrowTop", !d), s(w.calendarContainer, "arrowBottom", d), !w.config.inline) {
                        var f = window.pageXOffset + l.left,
                            m = !1,
                            g = !1;
                        "center" === r ? (f -= (a - l.width) / 2, m = !0) : "right" === r && (f -= a - l.width, g = !0), s(w.calendarContainer, "arrowLeft", !m && !g), s(w.calendarContainer, "arrowCenter", m), s(w.calendarContainer, "arrowRight", g);
                        var p = window.document.body.offsetWidth - (window.pageXOffset + l.right),
                            h = f + a > window.document.body.offsetWidth,
                            v = p + a > window.document.body.offsetWidth;
                        if (s(w.calendarContainer, "rightMost", h), !w.config.static)
                            if (w.calendarContainer.style.top = u + "px", h)
                                if (v) {
                                    var D = function() {
                                        for (var e = null, n = 0; n < document.styleSheets.length; n++) {
                                            var t = document.styleSheets[n];
                                            if (t.cssRules) {
                                                try {
                                                    t.cssRules
                                                } catch (e) {
                                                    continue
                                                }
                                                e = t;
                                                break
                                            }
                                        }
                                        return null != e ? e : (a = document.createElement("style"), document.head.appendChild(a), a.sheet);
                                        var a
                                    }();
                                    if (void 0 === D) return;
                                    var b = window.document.body.offsetWidth,
                                        C = Math.max(0, b / 2 - a / 2),
                                        M = D.cssRules.length,
                                        y = "{left:" + l.left + "px;right:auto;}";
                                    s(w.calendarContainer, "rightMost", !1), s(w.calendarContainer, "centerMost", !0), D.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" + y, M), w.calendarContainer.style.left = C + "px", w.calendarContainer.style.right = "auto"
                                } else w.calendarContainer.style.left = "auto", w.calendarContainer.style.right = p + "px";
                        else w.calendarContainer.style.left = f + "px", w.calendarContainer.style.right = "auto"
                    }
                }
            } else w.config.position(w, e)
        }

        function ue() {
            w.config.noCalendar || w.isMobile || (q(), Ce(), U())
        }

        function fe() {
            w._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(w.close, 0) : w.close()
        }

        function me(e) {
            e.preventDefault(), e.stopPropagation();
            var n = f(g(e), (function(e) {
                return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled") && !e.classList.contains("notAllowed")
            }));
            if (void 0 !== n) {
                var t = n,
                    a = w.latestSelectedDateObj = new Date(t.dateObj.getTime()),
                    i = (a.getMonth() < w.currentMonth || a.getMonth() > w.currentMonth + w.config.showMonths - 1) && "range" !== w.config.mode;
                if (w.selectedDateElem = t, "single" === w.config.mode) w.selectedDates = [a];
                else if ("multiple" === w.config.mode) {
                    var o = be(a);
                    o ? w.selectedDates.splice(parseInt(o), 1) : w.selectedDates.push(a)
                } else "range" === w.config.mode && (2 === w.selectedDates.length && w.clear(!1, !1), w.latestSelectedDateObj = a, w.selectedDates.push(a), 0 !== M(a, w.selectedDates[0], !0) && w.selectedDates.sort((function(e, n) {
                    return e.getTime() - n.getTime()
                })));
                if (O(), i) {
                    var r = w.currentYear !== a.getFullYear();
                    w.currentYear = a.getFullYear(), w.currentMonth = a.getMonth(), r && (De("onYearChange"), q()), De("onMonthChange")
                }
                if (Ce(), U(), ye(), i || "range" === w.config.mode || 1 !== w.config.showMonths ? void 0 !== w.selectedDateElem && void 0 === w.hourElement && w.selectedDateElem && w.selectedDateElem.focus() : W(t), void 0 !== w.hourElement && void 0 !== w.hourElement && w.hourElement.focus(), w.config.closeOnSelect) {
                    var l = "single" === w.config.mode && !w.config.enableTime,
                        c = "range" === w.config.mode && 2 === w.selectedDates.length && !w.config.enableTime;
                    (l || c) && fe()
                }
                Y()
            }
        }
        w.parseDate = C({
            config: w.config,
            l10n: w.l10n
        }), w._handlers = [], w.pluginElements = [], w.loadedPlugins = [], w._bind = P, w._setHoursFromDate = F, w._positionCalendar = de, w.changeMonth = Z, w.changeYear = ee, w.clear = function(e, n) {
            void 0 === e && (e = !0);
            void 0 === n && (n = !0);
            w.input.value = "", void 0 !== w.altInput && (w.altInput.value = "");
            void 0 !== w.mobileInput && (w.mobileInput.value = "");
            w.selectedDates = [], w.latestSelectedDateObj = void 0, !0 === n && (w.currentYear = w._initialDate.getFullYear(), w.currentMonth = w._initialDate.getMonth());
            if (!0 === w.config.enableTime) {
                var t = E(w.config),
                    a = t.hours,
                    i = t.minutes,
                    o = t.seconds;
                A(a, i, o)
            }
            w.redraw(), e && De("onChange")
        }, w.close = function() {
            w.isOpen = !1, w.isMobile || (void 0 !== w.calendarContainer && w.calendarContainer.classList.remove("open"), void 0 !== w._input && w._input.classList.remove("active"));
            De("onClose")
        }, w.onMouseOver = oe, w._createElement = d, w.createDay = R, w.destroy = function() {
            void 0 !== w.config && De("onDestroy");
            for (var e = w._handlers.length; e--;) w._handlers[e].remove();
            if (w._handlers = [], w.mobileInput) w.mobileInput.parentNode && w.mobileInput.parentNode.removeChild(w.mobileInput), w.mobileInput = void 0;
            else if (w.calendarContainer && w.calendarContainer.parentNode)
                if (w.config.static && w.calendarContainer.parentNode) {
                    var n = w.calendarContainer.parentNode;
                    if (n.lastChild && n.removeChild(n.lastChild), n.parentNode) {
                        for (; n.firstChild;) n.parentNode.insertBefore(n.firstChild, n);
                        n.parentNode.removeChild(n)
                    }
                } else w.calendarContainer.parentNode.removeChild(w.calendarContainer);
            w.altInput && (w.input.type = "text", w.altInput.parentNode && w.altInput.parentNode.removeChild(w.altInput), delete w.altInput);
            w.input && (w.input.type = w.input._type, w.input.classList.remove("flatpickr-input"), w.input.removeAttribute("readonly"));
            ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach((function(e) {
                try {
                    delete w[e]
                } catch (e) {}
            }))
        }, w.isEnabled = ne, w.jumpToDate = j, w.updateValue = ye, w.open = function(e, n) {
            void 0 === n && (n = w._positionElement);
            if (!0 === w.isMobile) {
                if (e) {
                    e.preventDefault();
                    var t = g(e);
                    t && t.blur()
                }
                return void 0 !== w.mobileInput && (w.mobileInput.focus(), w.mobileInput.click()), void De("onOpen")
            }
            if (w._input.disabled || w.config.inline) return;
            var a = w.isOpen;
            w.isOpen = !0, a || (w.calendarContainer.classList.add("open"), w._input.classList.add("active"), De("onOpen"), de(n));
            !0 === w.config.enableTime && !0 === w.config.noCalendar && (!1 !== w.config.allowInput || void 0 !== e && w.timeContainer.contains(e.relatedTarget) || setTimeout((function() {
                return w.hourElement.select()
            }), 50))
        }, w.redraw = ue, w.set = function(e, n) {
            if (null !== e && "object" == typeof e)
                for (var a in Object.assign(w.config, e), e) void 0 !== ge[a] && ge[a].forEach((function(e) {
                    return e()
                }));
            else w.config[e] = n, void 0 !== ge[e] ? ge[e].forEach((function(e) {
                return e()
            })) : t.indexOf(e) > -1 && (w.config[e] = c(n));
            w.redraw(), ye(!0)
        }, w.setDate = function(e, n, t) {
            void 0 === n && (n = !1);
            void 0 === t && (t = w.config.dateFormat);
            if (0 !== e && !e || e instanceof Array && 0 === e.length) return w.clear(n);
            pe(e, t), w.latestSelectedDateObj = w.selectedDates[w.selectedDates.length - 1], w.redraw(), j(void 0, n), F(), 0 === w.selectedDates.length && w.clear(!1);
            ye(n), n && De("onChange")
        }, w.toggle = function(e) {
            if (!0 === w.isOpen) return w.close();
            w.open(e)
        };
        var ge = {
            locale: [se, G],
            showMonths: [V, S, z],
            minDate: [j],
            maxDate: [j],
            positionElement: [ve],
            clickOpens: [function() {
                !0 === w.config.clickOpens ? (P(w._input, "focus", w.open), P(w._input, "click", w.open)) : (w._input.removeEventListener("focus", w.open), w._input.removeEventListener("click", w.open))
            }]
        };

        function pe(e, n) {
            var t = [];
            if (e instanceof Array) t = e.map((function(e) {
                return w.parseDate(e, n)
            }));
            else if (e instanceof Date || "number" == typeof e) t = [w.parseDate(e, n)];
            else if ("string" == typeof e) switch (w.config.mode) {
                case "single":
                case "time":
                    t = [w.parseDate(e, n)];
                    break;
                case "multiple":
                    t = e.split(w.config.conjunction).map((function(e) {
                        return w.parseDate(e, n)
                    }));
                    break;
                case "range":
                    t = e.split(w.l10n.rangeSeparator).map((function(e) {
                        return w.parseDate(e, n)
                    }))
            } else w.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
            w.selectedDates = w.config.allowInvalidPreload ? t : t.filter((function(e) {
                return e instanceof Date && ne(e, !1)
            })), "range" === w.config.mode && w.selectedDates.sort((function(e, n) {
                return e.getTime() - n.getTime()
            }))
        }

        function he(e) {
            return e.slice().map((function(e) {
                return "string" == typeof e || "number" == typeof e || e instanceof Date ? w.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
                    from: w.parseDate(e.from, void 0),
                    to: w.parseDate(e.to, void 0)
                } : e
            })).filter((function(e) {
                return e
            }))
        }

        function ve() {
            w._positionElement = w.config.positionElement || w._input
        }

        function De(e, n) {
            if (void 0 !== w.config) {
                var t = w.config[e];
                if (void 0 !== t && t.length > 0)
                    for (var a = 0; t[a] && a < t.length; a++) t[a](w.selectedDates, w.input.value, w, n);
                "onChange" === e && (w.input.dispatchEvent(we("change")), w.input.dispatchEvent(we("input")))
            }
        }

        function we(e) {
            var n = document.createEvent("Event");
            return n.initEvent(e, !0, !0), n
        }

        function be(e) {
            for (var n = 0; n < w.selectedDates.length; n++) {
                var t = w.selectedDates[n];
                if (t instanceof Date && 0 === M(t, e)) return "" + n
            }
            return !1
        }

        function Ce() {
            w.config.noCalendar || w.isMobile || !w.monthNav || (w.yearElements.forEach((function(e, n) {
                var t = new Date(w.currentYear, w.currentMonth, 1);
                t.setMonth(w.currentMonth + n), w.config.showMonths > 1 || "static" === w.config.monthSelectorType ? w.monthElements[n].textContent = h(t.getMonth(), w.config.shorthandCurrentMonth, w.l10n) + " " : w.monthsDropdownContainer.value = t.getMonth().toString(), e.value = t.getFullYear().toString()
            })), w._hidePrevMonthArrow = void 0 !== w.config.minDate && (w.currentYear === w.config.minDate.getFullYear() ? w.currentMonth <= w.config.minDate.getMonth() : w.currentYear < w.config.minDate.getFullYear()), w._hideNextMonthArrow = void 0 !== w.config.maxDate && (w.currentYear === w.config.maxDate.getFullYear() ? w.currentMonth + 1 > w.config.maxDate.getMonth() : w.currentYear > w.config.maxDate.getFullYear()))
        }

        function Me(e) {
            var n = e || (w.config.altInput ? w.config.altFormat : w.config.dateFormat);
            return w.selectedDates.map((function(e) {
                return w.formatDate(e, n)
            })).filter((function(e, n, t) {
                return "range" !== w.config.mode || w.config.enableTime || t.indexOf(e) === n
            })).join("range" !== w.config.mode ? w.config.conjunction : w.l10n.rangeSeparator)
        }

        function ye(e) {
            void 0 === e && (e = !0), void 0 !== w.mobileInput && w.mobileFormatStr && (w.mobileInput.value = void 0 !== w.latestSelectedDateObj ? w.formatDate(w.latestSelectedDateObj, w.mobileFormatStr) : ""), w.input.value = Me(w.config.dateFormat), void 0 !== w.altInput && (w.altInput.value = Me(w.config.altFormat)), !1 !== e && De("onValueUpdate")
        }

        function xe(e) {
            var n = g(e),
                t = w.prevMonthNav.contains(n),
                a = w.nextMonthNav.contains(n);
            t || a ? Z(t ? -1 : 1) : w.yearElements.indexOf(n) >= 0 ? n.select() : n.classList.contains("arrowUp") ? w.changeYear(w.currentYear + 1) : n.classList.contains("arrowDown") && w.changeYear(w.currentYear - 1)
        }
        return function() {
            w.element = w.input = p, w.isOpen = !1,
                function() {
                    var n = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                        i = e(e({}, JSON.parse(JSON.stringify(p.dataset || {}))), v),
                        o = {};
                    w.config.parseDate = i.parseDate, w.config.formatDate = i.formatDate, Object.defineProperty(w.config, "enable", {
                        get: function() {
                            return w.config._enable
                        },
                        set: function(e) {
                            w.config._enable = he(e)
                        }
                    }), Object.defineProperty(w.config, "disable", {
                        get: function() {
                            return w.config._disable
                        },
                        set: function(e) {
                            w.config._disable = he(e)
                        }
                    });
                    var r = "time" === i.mode;
                    if (!i.dateFormat && (i.enableTime || r)) {
                        var l = I.defaultConfig.dateFormat || a.dateFormat;
                        o.dateFormat = i.noCalendar || r ? "H:i" + (i.enableSeconds ? ":S" : "") : l + " H:i" + (i.enableSeconds ? ":S" : "")
                    }
                    if (i.altInput && (i.enableTime || r) && !i.altFormat) {
                        var s = I.defaultConfig.altFormat || a.altFormat;
                        o.altFormat = i.noCalendar || r ? "h:i" + (i.enableSeconds ? ":S K" : " K") : s + " h:i" + (i.enableSeconds ? ":S" : "") + " K"
                    }
                    Object.defineProperty(w.config, "minDate", {
                        get: function() {
                            return w.config._minDate
                        },
                        set: le("min")
                    }), Object.defineProperty(w.config, "maxDate", {
                        get: function() {
                            return w.config._maxDate
                        },
                        set: le("max")
                    });
                    var d = function(e) {
                        return function(n) {
                            w.config["min" === e ? "_minTime" : "_maxTime"] = w.parseDate(n, "H:i:S")
                        }
                    };
                    Object.defineProperty(w.config, "minTime", {
                        get: function() {
                            return w.config._minTime
                        },
                        set: d("min")
                    }), Object.defineProperty(w.config, "maxTime", {
                        get: function() {
                            return w.config._maxTime
                        },
                        set: d("max")
                    }), "time" === i.mode && (w.config.noCalendar = !0, w.config.enableTime = !0);
                    Object.assign(w.config, o, i);
                    for (var u = 0; u < n.length; u++) w.config[n[u]] = !0 === w.config[n[u]] || "true" === w.config[n[u]];
                    t.filter((function(e) {
                        return void 0 !== w.config[e]
                    })).forEach((function(e) {
                        w.config[e] = c(w.config[e] || []).map(T)
                    })), w.isMobile = !w.config.disableMobile && !w.config.inline && "single" === w.config.mode && !w.config.disable.length && !w.config.enable && !w.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    for (u = 0; u < w.config.plugins.length; u++) {
                        var f = w.config.plugins[u](w) || {};
                        for (var m in f) t.indexOf(m) > -1 ? w.config[m] = c(f[m]).map(T).concat(w.config[m]) : void 0 === i[m] && (w.config[m] = f[m])
                    }
                    i.altInputClass || (w.config.altInputClass = ce().className + " " + w.config.altInputClass);
                    De("onParseConfig")
                }(), se(),
                function() {
                    if (w.input = ce(), !w.input) return void w.config.errorHandler(new Error("Invalid input element specified"));
                    w.input._type = w.input.type, w.input.type = "text", w.input.classList.add("flatpickr-input"), w._input = w.input, w.config.altInput && (w.altInput = d(w.input.nodeName, w.config.altInputClass), w._input = w.altInput, w.altInput.placeholder = w.input.placeholder, w.altInput.disabled = w.input.disabled, w.altInput.required = w.input.required, w.altInput.tabIndex = w.input.tabIndex, w.altInput.type = "text", w.input.setAttribute("type", "hidden"), !w.config.static && w.input.parentNode && w.input.parentNode.insertBefore(w.altInput, w.input.nextSibling));
                    w.config.allowInput || w._input.setAttribute("readonly", "readonly");
                    ve()
                }(),
                function() {
                    w.selectedDates = [], w.now = w.parseDate(w.config.now) || new Date;
                    var e = w.config.defaultDate || ("INPUT" !== w.input.nodeName && "TEXTAREA" !== w.input.nodeName || !w.input.placeholder || w.input.value !== w.input.placeholder ? w.input.value : null);
                    e && pe(e, w.config.dateFormat);
                    w._initialDate = w.selectedDates.length > 0 ? w.selectedDates[0] : w.config.minDate && w.config.minDate.getTime() > w.now.getTime() ? w.config.minDate : w.config.maxDate && w.config.maxDate.getTime() < w.now.getTime() ? w.config.maxDate : w.now, w.currentYear = w._initialDate.getFullYear(), w.currentMonth = w._initialDate.getMonth(), w.selectedDates.length > 0 && (w.latestSelectedDateObj = w.selectedDates[0]);
                    void 0 !== w.config.minTime && (w.config.minTime = w.parseDate(w.config.minTime, "H:i"));
                    void 0 !== w.config.maxTime && (w.config.maxTime = w.parseDate(w.config.maxTime, "H:i"));
                    w.minDateHasTime = !!w.config.minDate && (w.config.minDate.getHours() > 0 || w.config.minDate.getMinutes() > 0 || w.config.minDate.getSeconds() > 0), w.maxDateHasTime = !!w.config.maxDate && (w.config.maxDate.getHours() > 0 || w.config.maxDate.getMinutes() > 0 || w.config.maxDate.getSeconds() > 0)
                }(), w.utils = {
                    getDaysInMonth: function(e, n) {
                        return void 0 === e && (e = w.currentMonth), void 0 === n && (n = w.currentYear), 1 === e && (n % 4 == 0 && n % 100 != 0 || n % 400 == 0) ? 29 : w.l10n.daysInMonth[e]
                    }
                }, w.isMobile || function() {
                    var e = window.document.createDocumentFragment();
                    if (w.calendarContainer = d("div", "flatpickr-calendar"), w.calendarContainer.tabIndex = -1, !w.config.noCalendar) {
                        if (e.appendChild((w.monthNav = d("div", "flatpickr-months"), w.yearElements = [], w.monthElements = [], w.prevMonthNav = d("span", "flatpickr-prev-month"), w.prevMonthNav.innerHTML = w.config.prevArrow, w.nextMonthNav = d("span", "flatpickr-next-month"), w.nextMonthNav.innerHTML = w.config.nextArrow, V(), Object.defineProperty(w, "_hidePrevMonthArrow", {
                                get: function() {
                                    return w.__hidePrevMonthArrow
                                },
                                set: function(e) {
                                    w.__hidePrevMonthArrow !== e && (s(w.prevMonthNav, "flatpickr-disabled", e), w.__hidePrevMonthArrow = e)
                                }
                            }), Object.defineProperty(w, "_hideNextMonthArrow", {
                                get: function() {
                                    return w.__hideNextMonthArrow
                                },
                                set: function(e) {
                                    w.__hideNextMonthArrow !== e && (s(w.nextMonthNav, "flatpickr-disabled", e), w.__hideNextMonthArrow = e)
                                }
                            }), w.currentYearElement = w.yearElements[0], Ce(), w.monthNav)), w.innerContainer = d("div", "flatpickr-innerContainer"), w.config.weekNumbers) {
                            var n = function() {
                                    w.calendarContainer.classList.add("hasWeeks");
                                    var e = d("div", "flatpickr-weekwrapper");
                                    e.appendChild(d("span", "flatpickr-weekday", w.l10n.weekAbbreviation));
                                    var n = d("div", "flatpickr-weeks");
                                    return e.appendChild(n), {
                                        weekWrapper: e,
                                        weekNumbers: n
                                    }
                                }(),
                                t = n.weekWrapper,
                                a = n.weekNumbers;
                            w.innerContainer.appendChild(t), w.weekNumbers = a, w.weekWrapper = t
                        }
                        w.rContainer = d("div", "flatpickr-rContainer"), w.rContainer.appendChild(z()), w.daysContainer || (w.daysContainer = d("div", "flatpickr-days"), w.daysContainer.tabIndex = -1), U(), w.rContainer.appendChild(w.daysContainer), w.innerContainer.appendChild(w.rContainer), e.appendChild(w.innerContainer)
                    }
                    w.config.enableTime && e.appendChild(function() {
                        w.calendarContainer.classList.add("hasTime"), w.config.noCalendar && w.calendarContainer.classList.add("noCalendar");
                        var e = E(w.config);
                        w.timeContainer = d("div", "flatpickr-time"), w.timeContainer.tabIndex = -1;
                        var n = d("span", "flatpickr-time-separator", ":"),
                            t = m("flatpickr-hour", {
                                "aria-label": w.l10n.hourAriaLabel
                            });
                        w.hourElement = t.getElementsByTagName("input")[0];
                        var a = m("flatpickr-minute", {
                            "aria-label": w.l10n.minuteAriaLabel
                        });
                        w.minuteElement = a.getElementsByTagName("input")[0], w.hourElement.tabIndex = w.minuteElement.tabIndex = -1, w.hourElement.value = o(w.latestSelectedDateObj ? w.latestSelectedDateObj.getHours() : w.config.time_24hr ? e.hours : function(e) {
                            switch (e % 24) {
                                case 0:
                                case 12:
                                    return 12;
                                default:
                                    return e % 12
                            }
                        }(e.hours)), w.minuteElement.value = o(w.latestSelectedDateObj ? w.latestSelectedDateObj.getMinutes() : e.minutes), w.hourElement.setAttribute("step", w.config.hourIncrement.toString()), w.minuteElement.setAttribute("step", w.config.minuteIncrement.toString()), w.hourElement.setAttribute("min", w.config.time_24hr ? "0" : "1"), w.hourElement.setAttribute("max", w.config.time_24hr ? "23" : "12"), w.hourElement.setAttribute("maxlength", "2"), w.minuteElement.setAttribute("min", "0"), w.minuteElement.setAttribute("max", "59"), w.minuteElement.setAttribute("maxlength", "2"), w.timeContainer.appendChild(t), w.timeContainer.appendChild(n), w.timeContainer.appendChild(a), w.config.time_24hr && w.timeContainer.classList.add("time24hr");
                        if (w.config.enableSeconds) {
                            w.timeContainer.classList.add("hasSeconds");
                            var i = m("flatpickr-second");
                            w.secondElement = i.getElementsByTagName("input")[0], w.secondElement.value = o(w.latestSelectedDateObj ? w.latestSelectedDateObj.getSeconds() : e.seconds), w.secondElement.setAttribute("step", w.minuteElement.getAttribute("step")), w.secondElement.setAttribute("min", "0"), w.secondElement.setAttribute("max", "59"), w.secondElement.setAttribute("maxlength", "2"), w.timeContainer.appendChild(d("span", "flatpickr-time-separator", ":")), w.timeContainer.appendChild(i)
                        }
                        w.config.time_24hr || (w.amPM = d("span", "flatpickr-am-pm", w.l10n.amPM[r((w.latestSelectedDateObj ? w.hourElement.value : w.config.defaultHour) > 11)]), w.amPM.title = w.l10n.toggleTitle, w.amPM.tabIndex = -1, w.timeContainer.appendChild(w.amPM));
                        return w.timeContainer
                    }());
                    s(w.calendarContainer, "rangeMode", "range" === w.config.mode), s(w.calendarContainer, "animate", !0 === w.config.animate), s(w.calendarContainer, "multiMonth", w.config.showMonths > 1), w.calendarContainer.appendChild(e);
                    var i = void 0 !== w.config.appendTo && void 0 !== w.config.appendTo.nodeType;
                    if ((w.config.inline || w.config.static) && (w.calendarContainer.classList.add(w.config.inline ? "inline" : "static"), w.config.inline && (!i && w.element.parentNode ? w.element.parentNode.insertBefore(w.calendarContainer, w._input.nextSibling) : void 0 !== w.config.appendTo && w.config.appendTo.appendChild(w.calendarContainer)), w.config.static)) {
                        var l = d("div", "flatpickr-wrapper");
                        w.element.parentNode && w.element.parentNode.insertBefore(l, w.element), l.appendChild(w.element), w.altInput && l.appendChild(w.altInput), l.appendChild(w.calendarContainer)
                    }
                    w.config.static || w.config.inline || (void 0 !== w.config.appendTo ? w.config.appendTo : window.document.body).appendChild(w.calendarContainer)
                }(),
                function() {
                    w.config.wrap && ["open", "close", "toggle", "clear"].forEach((function(e) {
                        Array.prototype.forEach.call(w.element.querySelectorAll("[data-" + e + "]"), (function(n) {
                            return P(n, "click", w[e])
                        }))
                    }));
                    if (w.isMobile) return void
                    function() {
                        var e = w.config.enableTime ? w.config.noCalendar ? "time" : "datetime-local" : "date";
                        w.mobileInput = d("input", w.input.className + " flatpickr-mobile"), w.mobileInput.tabIndex = 1, w.mobileInput.type = e, w.mobileInput.disabled = w.input.disabled, w.mobileInput.required = w.input.required, w.mobileInput.placeholder = w.input.placeholder, w.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", w.selectedDates.length > 0 && (w.mobileInput.defaultValue = w.mobileInput.value = w.formatDate(w.selectedDates[0], w.mobileFormatStr));
                        w.config.minDate && (w.mobileInput.min = w.formatDate(w.config.minDate, "Y-m-d"));
                        w.config.maxDate && (w.mobileInput.max = w.formatDate(w.config.maxDate, "Y-m-d"));
                        w.input.getAttribute("step") && (w.mobileInput.step = String(w.input.getAttribute("step")));
                        w.input.type = "hidden", void 0 !== w.altInput && (w.altInput.type = "hidden");
                        try {
                            w.input.parentNode && w.input.parentNode.insertBefore(w.mobileInput, w.input.nextSibling)
                        } catch (e) {}
                        P(w.mobileInput, "change", (function(e) {
                            w.setDate(g(e).value, !1, w.mobileFormatStr), De("onChange"), De("onClose")
                        }))
                    }();
                    var e = l(re, 50);
                    w._debouncedChange = l(Y, 300), w.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && P(w.daysContainer, "mouseover", (function(e) {
                        "range" === w.config.mode && oe(g(e))
                    }));
                    P(w._input, "keydown", ie), void 0 !== w.calendarContainer && P(w.calendarContainer, "keydown", ie);
                    w.config.inline || w.config.static || P(window, "resize", e);
                    void 0 !== window.ontouchstart ? P(window.document, "touchstart", X) : P(window.document, "mousedown", X);
                    P(window.document, "focus", X, {
                        capture: !0
                    }), !0 === w.config.clickOpens && (P(w._input, "focus", w.open), P(w._input, "click", w.open));
                    void 0 !== w.daysContainer && (P(w.monthNav, "click", xe), P(w.monthNav, ["keyup", "increment"], N), P(w.daysContainer, "click", me));
                    if (void 0 !== w.timeContainer && void 0 !== w.minuteElement && void 0 !== w.hourElement) {
                        var n = function(e) {
                            return g(e).select()
                        };
                        P(w.timeContainer, ["increment"], _), P(w.timeContainer, "blur", _, {
                            capture: !0
                        }), P(w.timeContainer, "click", H), P([w.hourElement, w.minuteElement], ["focus", "click"], n), void 0 !== w.secondElement && P(w.secondElement, "focus", (function() {
                            return w.secondElement && w.secondElement.select()
                        })), void 0 !== w.amPM && P(w.amPM, "click", (function(e) {
                            _(e)
                        }))
                    }
                    w.config.allowInput && P(w._input, "blur", ae)
                }(), (w.selectedDates.length || w.config.noCalendar) && (w.config.enableTime && F(w.config.noCalendar ? w.latestSelectedDateObj : void 0), ye(!1)), S();
            var n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            !w.isMobile && n && de(), De("onReady")
        }(), w
    }

    function T(e, n) {
        for (var t = Array.prototype.slice.call(e).filter((function(e) {
                return e instanceof HTMLElement
            })), a = [], i = 0; i < t.length; i++) {
            var o = t[i];
            try {
                if (null !== o.getAttribute("data-fp-omit")) continue;
                void 0 !== o._flatpickr && (o._flatpickr.destroy(), o._flatpickr = void 0), o._flatpickr = k(o, n || {}), a.push(o._flatpickr)
            } catch (e) {
                console.error(e)
            }
        }
        return 1 === a.length ? a[0] : a
    }
    "undefined" != typeof HTMLElement && "undefined" != typeof HTMLCollection && "undefined" != typeof NodeList && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
        return T(this, e)
    }, HTMLElement.prototype.flatpickr = function(e) {
        return T([this], e)
    });
    var I = function(e, n) {
        return "string" == typeof e ? T(window.document.querySelectorAll(e), n) : e instanceof Node ? T([e], n) : T(e, n)
    };
    return I.defaultConfig = {}, I.l10ns = {
        en: e({}, i),
        default: e({}, i)
    }, I.localize = function(n) {
        I.l10ns.default = e(e({}, I.l10ns.default), n)
    }, I.setDefaults = function(n) {
        I.defaultConfig = e(e({}, I.defaultConfig), n)
    }, I.parseDate = C({}), I.formatDate = b({}), I.compareDates = M, "undefined" != typeof jQuery && void 0 !== jQuery.fn && (jQuery.fn.flatpickr = function(e) {
        return T(this, e)
    }), Date.prototype.fp_incr = function(e) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
    }, "undefined" != typeof window && (window.flatpickr = I), I
}));
! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var r in n)("object" == typeof exports ? exports : e)[r] = n[r]
    }
}(self, (function() {
    return function() {
        var e = {
                3099: function(e) {
                    e.exports = function(e) {
                        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                        return e
                    }
                },
                6077: function(e, t, n) {
                    var r = n(111);
                    e.exports = function(e) {
                        if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
                        return e
                    }
                },
                1223: function(e, t, n) {
                    var r = n(5112),
                        i = n(30),
                        o = n(3070),
                        a = r("unscopables"),
                        u = Array.prototype;
                    null == u[a] && o.f(u, a, {
                        configurable: !0,
                        value: i(null)
                    }), e.exports = function(e) {
                        u[a][e] = !0
                    }
                },
                1530: function(e, t, n) {
                    "use strict";
                    var r = n(8710).charAt;
                    e.exports = function(e, t, n) {
                        return t + (n ? r(e, t).length : 1)
                    }
                },
                5787: function(e) {
                    e.exports = function(e, t, n) {
                        if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
                        return e
                    }
                },
                9670: function(e, t, n) {
                    var r = n(111);
                    e.exports = function(e) {
                        if (!r(e)) throw TypeError(String(e) + " is not an object");
                        return e
                    }
                },
                4019: function(e) {
                    e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
                },
                260: function(e, t, n) {
                    "use strict";
                    var r, i = n(4019),
                        o = n(9781),
                        a = n(7854),
                        u = n(111),
                        s = n(6656),
                        l = n(648),
                        c = n(8880),
                        f = n(1320),
                        p = n(3070).f,
                        h = n(9518),
                        d = n(7674),
                        v = n(5112),
                        y = n(9711),
                        g = a.Int8Array,
                        m = g && g.prototype,
                        b = a.Uint8ClampedArray,
                        x = b && b.prototype,
                        w = g && h(g),
                        E = m && h(m),
                        k = Object.prototype,
                        A = k.isPrototypeOf,
                        S = v("toStringTag"),
                        F = y("TYPED_ARRAY_TAG"),
                        T = i && !!d && "Opera" !== l(a.opera),
                        C = !1,
                        L = {
                            Int8Array: 1,
                            Uint8Array: 1,
                            Uint8ClampedArray: 1,
                            Int16Array: 2,
                            Uint16Array: 2,
                            Int32Array: 4,
                            Uint32Array: 4,
                            Float32Array: 4,
                            Float64Array: 8
                        },
                        R = {
                            BigInt64Array: 8,
                            BigUint64Array: 8
                        },
                        I = function(e) {
                            if (!u(e)) return !1;
                            var t = l(e);
                            return s(L, t) || s(R, t)
                        };
                    for (r in L) a[r] || (T = !1);
                    if ((!T || "function" != typeof w || w === Function.prototype) && (w = function() {
                            throw TypeError("Incorrect invocation")
                        }, T))
                        for (r in L) a[r] && d(a[r], w);
                    if ((!T || !E || E === k) && (E = w.prototype, T))
                        for (r in L) a[r] && d(a[r].prototype, E);
                    if (T && h(x) !== E && d(x, E), o && !s(E, S))
                        for (r in C = !0, p(E, S, {
                                get: function() {
                                    return u(this) ? this[F] : void 0
                                }
                            }), L) a[r] && c(a[r], F, r);
                    e.exports = {
                        NATIVE_ARRAY_BUFFER_VIEWS: T,
                        TYPED_ARRAY_TAG: C && F,
                        aTypedArray: function(e) {
                            if (I(e)) return e;
                            throw TypeError("Target is not a typed array")
                        },
                        aTypedArrayConstructor: function(e) {
                            if (d) {
                                if (A.call(w, e)) return e
                            } else
                                for (var t in L)
                                    if (s(L, r)) {
                                        var n = a[t];
                                        if (n && (e === n || A.call(n, e))) return e
                                    } throw TypeError("Target is not a typed array constructor")
                        },
                        exportTypedArrayMethod: function(e, t, n) {
                            if (o) {
                                if (n)
                                    for (var r in L) {
                                        var i = a[r];
                                        i && s(i.prototype, e) && delete i.prototype[e]
                                    }
                                E[e] && !n || f(E, e, n ? t : T && m[e] || t)
                            }
                        },
                        exportTypedArrayStaticMethod: function(e, t, n) {
                            var r, i;
                            if (o) {
                                if (d) {
                                    if (n)
                                        for (r in L)(i = a[r]) && s(i, e) && delete i[e];
                                    if (w[e] && !n) return;
                                    try {
                                        return f(w, e, n ? t : T && g[e] || t)
                                    } catch (e) {}
                                }
                                for (r in L) !(i = a[r]) || i[e] && !n || f(i, e, t)
                            }
                        },
                        isView: function(e) {
                            if (!u(e)) return !1;
                            var t = l(e);
                            return "DataView" === t || s(L, t) || s(R, t)
                        },
                        isTypedArray: I,
                        TypedArray: w,
                        TypedArrayPrototype: E
                    }
                },
                3331: function(e, t, n) {
                    "use strict";
                    var r = n(7854),
                        i = n(9781),
                        o = n(4019),
                        a = n(8880),
                        u = n(2248),
                        s = n(7293),
                        l = n(5787),
                        c = n(9958),
                        f = n(7466),
                        p = n(7067),
                        h = n(1179),
                        d = n(9518),
                        v = n(7674),
                        y = n(8006).f,
                        g = n(3070).f,
                        m = n(1285),
                        b = n(8003),
                        x = n(9909),
                        w = x.get,
                        E = x.set,
                        k = "ArrayBuffer",
                        A = "DataView",
                        S = "Wrong index",
                        F = r.ArrayBuffer,
                        T = F,
                        C = r.DataView,
                        L = C && C.prototype,
                        R = Object.prototype,
                        I = r.RangeError,
                        U = h.pack,
                        O = h.unpack,
                        _ = function(e) {
                            return [255 & e]
                        },
                        M = function(e) {
                            return [255 & e, e >> 8 & 255]
                        },
                        z = function(e) {
                            return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
                        },
                        P = function(e) {
                            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
                        },
                        j = function(e) {
                            return U(e, 23, 4)
                        },
                        D = function(e) {
                            return U(e, 52, 8)
                        },
                        N = function(e, t) {
                            g(e.prototype, t, {
                                get: function() {
                                    return w(this)[t]
                                }
                            })
                        },
                        B = function(e, t, n, r) {
                            var i = p(n),
                                o = w(e);
                            if (i + t > o.byteLength) throw I(S);
                            var a = w(o.buffer).bytes,
                                u = i + o.byteOffset,
                                s = a.slice(u, u + t);
                            return r ? s : s.reverse()
                        },
                        q = function(e, t, n, r, i, o) {
                            var a = p(n),
                                u = w(e);
                            if (a + t > u.byteLength) throw I(S);
                            for (var s = w(u.buffer).bytes, l = a + u.byteOffset, c = r(+i), f = 0; f < t; f++) s[l + f] = c[o ? f : t - f - 1]
                        };
                    if (o) {
                        if (!s((function() {
                                F(1)
                            })) || !s((function() {
                                new F(-1)
                            })) || s((function() {
                                return new F, new F(1.5), new F(NaN), F.name != k
                            }))) {
                            for (var W, H = (T = function(e) {
                                    return l(this, T), new F(p(e))
                                }).prototype = F.prototype, Y = y(F), G = 0; Y.length > G;)(W = Y[G++]) in T || a(T, W, F[W]);
                            H.constructor = T
                        }
                        v && d(L) !== R && v(L, R);
                        var Q = new C(new T(2)),
                            $ = L.setInt8;
                        Q.setInt8(0, 2147483648), Q.setInt8(1, 2147483649), !Q.getInt8(0) && Q.getInt8(1) || u(L, {
                            setInt8: function(e, t) {
                                $.call(this, e, t << 24 >> 24)
                            },
                            setUint8: function(e, t) {
                                $.call(this, e, t << 24 >> 24)
                            }
                        }, {
                            unsafe: !0
                        })
                    } else T = function(e) {
                        l(this, T, k);
                        var t = p(e);
                        E(this, {
                            bytes: m.call(new Array(t), 0),
                            byteLength: t
                        }), i || (this.byteLength = t)
                    }, C = function(e, t, n) {
                        l(this, C, A), l(e, T, A);
                        var r = w(e).byteLength,
                            o = c(t);
                        if (o < 0 || o > r) throw I("Wrong offset");
                        if (o + (n = void 0 === n ? r - o : f(n)) > r) throw I("Wrong length");
                        E(this, {
                            buffer: e,
                            byteLength: n,
                            byteOffset: o
                        }), i || (this.buffer = e, this.byteLength = n, this.byteOffset = o)
                    }, i && (N(T, "byteLength"), N(C, "buffer"), N(C, "byteLength"), N(C, "byteOffset")), u(C.prototype, {
                        getInt8: function(e) {
                            return B(this, 1, e)[0] << 24 >> 24
                        },
                        getUint8: function(e) {
                            return B(this, 1, e)[0]
                        },
                        getInt16: function(e) {
                            var t = B(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                            return (t[1] << 8 | t[0]) << 16 >> 16
                        },
                        getUint16: function(e) {
                            var t = B(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
                            return t[1] << 8 | t[0]
                        },
                        getInt32: function(e) {
                            return P(B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0))
                        },
                        getUint32: function(e) {
                            return P(B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
                        },
                        getFloat32: function(e) {
                            return O(B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23)
                        },
                        getFloat64: function(e) {
                            return O(B(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52)
                        },
                        setInt8: function(e, t) {
                            q(this, 1, e, _, t)
                        },
                        setUint8: function(e, t) {
                            q(this, 1, e, _, t)
                        },
                        setInt16: function(e, t) {
                            q(this, 2, e, M, t, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        setUint16: function(e, t) {
                            q(this, 2, e, M, t, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        setInt32: function(e, t) {
                            q(this, 4, e, z, t, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        setUint32: function(e, t) {
                            q(this, 4, e, z, t, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        setFloat32: function(e, t) {
                            q(this, 4, e, j, t, arguments.length > 2 ? arguments[2] : void 0)
                        },
                        setFloat64: function(e, t) {
                            q(this, 8, e, D, t, arguments.length > 2 ? arguments[2] : void 0)
                        }
                    });
                    b(T, k), b(C, A), e.exports = {
                        ArrayBuffer: T,
                        DataView: C
                    }
                },
                1048: function(e, t, n) {
                    "use strict";
                    var r = n(7908),
                        i = n(1400),
                        o = n(7466),
                        a = Math.min;
                    e.exports = [].copyWithin || function(e, t) {
                        var n = r(this),
                            u = o(n.length),
                            s = i(e, u),
                            l = i(t, u),
                            c = arguments.length > 2 ? arguments[2] : void 0,
                            f = a((void 0 === c ? u : i(c, u)) - l, u - s),
                            p = 1;
                        for (l < s && s < l + f && (p = -1, l += f - 1, s += f - 1); f-- > 0;) l in n ? n[s] = n[l] : delete n[s], s += p, l += p;
                        return n
                    }
                },
                1285: function(e, t, n) {
                    "use strict";
                    var r = n(7908),
                        i = n(1400),
                        o = n(7466);
                    e.exports = function(e) {
                        for (var t = r(this), n = o(t.length), a = arguments.length, u = i(a > 1 ? arguments[1] : void 0, n), s = a > 2 ? arguments[2] : void 0, l = void 0 === s ? n : i(s, n); l > u;) t[u++] = e;
                        return t
                    }
                },
                8533: function(e, t, n) {
                    "use strict";
                    var r = n(2092).forEach,
                        i = n(9341)("forEach");
                    e.exports = i ? [].forEach : function(e) {
                        return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                },
                8457: function(e, t, n) {
                    "use strict";
                    var r = n(9974),
                        i = n(7908),
                        o = n(3411),
                        a = n(7659),
                        u = n(7466),
                        s = n(6135),
                        l = n(1246);
                    e.exports = function(e) {
                        var t, n, c, f, p, h, d = i(e),
                            v = "function" == typeof this ? this : Array,
                            y = arguments.length,
                            g = y > 1 ? arguments[1] : void 0,
                            m = void 0 !== g,
                            b = l(d),
                            x = 0;
                        if (m && (g = r(g, y > 2 ? arguments[2] : void 0, 2)), null == b || v == Array && a(b))
                            for (n = new v(t = u(d.length)); t > x; x++) h = m ? g(d[x], x) : d[x], s(n, x, h);
                        else
                            for (p = (f = b.call(d)).next, n = new v; !(c = p.call(f)).done; x++) h = m ? o(f, g, [c.value, x], !0) : c.value, s(n, x, h);
                        return n.length = x, n
                    }
                },
                1318: function(e, t, n) {
                    var r = n(5656),
                        i = n(7466),
                        o = n(1400),
                        a = function(e) {
                            return function(t, n, a) {
                                var u, s = r(t),
                                    l = i(s.length),
                                    c = o(a, l);
                                if (e && n != n) {
                                    for (; l > c;)
                                        if ((u = s[c++]) != u) return !0
                                } else
                                    for (; l > c; c++)
                                        if ((e || c in s) && s[c] === n) return e || c || 0;
                                return !e && -1
                            }
                        };
                    e.exports = {
                        includes: a(!0),
                        indexOf: a(!1)
                    }
                },
                2092: function(e, t, n) {
                    var r = n(9974),
                        i = n(8361),
                        o = n(7908),
                        a = n(7466),
                        u = n(5417),
                        s = [].push,
                        l = function(e) {
                            var t = 1 == e,
                                n = 2 == e,
                                l = 3 == e,
                                c = 4 == e,
                                f = 6 == e,
                                p = 7 == e,
                                h = 5 == e || f;
                            return function(d, v, y, g) {
                                for (var m, b, x = o(d), w = i(x), E = r(v, y, 3), k = a(w.length), A = 0, S = g || u, F = t ? S(d, k) : n || p ? S(d, 0) : void 0; k > A; A++)
                                    if ((h || A in w) && (b = E(m = w[A], A, x), e))
                                        if (t) F[A] = b;
                                        else if (b) switch (e) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return m;
                                    case 6:
                                        return A;
                                    case 2:
                                        s.call(F, m)
                                } else switch (e) {
                                    case 4:
                                        return !1;
                                    case 7:
                                        s.call(F, m)
                                }
                                return f ? -1 : l || c ? c : F
                            }
                        };
                    e.exports = {
                        forEach: l(0),
                        map: l(1),
                        filter: l(2),
                        some: l(3),
                        every: l(4),
                        find: l(5),
                        findIndex: l(6),
                        filterOut: l(7)
                    }
                },
                6583: function(e, t, n) {
                    "use strict";
                    var r = n(5656),
                        i = n(9958),
                        o = n(7466),
                        a = n(9341),
                        u = Math.min,
                        s = [].lastIndexOf,
                        l = !!s && 1 / [1].lastIndexOf(1, -0) < 0,
                        c = a("lastIndexOf"),
                        f = l || !c;
                    e.exports = f ? function(e) {
                        if (l) return s.apply(this, arguments) || 0;
                        var t = r(this),
                            n = o(t.length),
                            a = n - 1;
                        for (arguments.length > 1 && (a = u(a, i(arguments[1]))), a < 0 && (a = n + a); a >= 0; a--)
                            if (a in t && t[a] === e) return a || 0;
                        return -1
                    } : s
                },
                1194: function(e, t, n) {
                    var r = n(7293),
                        i = n(5112),
                        o = n(7392),
                        a = i("species");
                    e.exports = function(e) {
                        return o >= 51 || !r((function() {
                            var t = [];
                            return (t.constructor = {})[a] = function() {
                                return {
                                    foo: 1
                                }
                            }, 1 !== t[e](Boolean).foo
                        }))
                    }
                },
                9341: function(e, t, n) {
                    "use strict";
                    var r = n(7293);
                    e.exports = function(e, t) {
                        var n = [][e];
                        return !!n && r((function() {
                            n.call(null, t || function() {
                                throw 1
                            }, 1)
                        }))
                    }
                },
                3671: function(e, t, n) {
                    var r = n(3099),
                        i = n(7908),
                        o = n(8361),
                        a = n(7466),
                        u = function(e) {
                            return function(t, n, u, s) {
                                r(n);
                                var l = i(t),
                                    c = o(l),
                                    f = a(l.length),
                                    p = e ? f - 1 : 0,
                                    h = e ? -1 : 1;
                                if (u < 2)
                                    for (;;) {
                                        if (p in c) {
                                            s = c[p], p += h;
                                            break
                                        }
                                        if (p += h, e ? p < 0 : f <= p) throw TypeError("Reduce of empty array with no initial value")
                                    }
                                for (; e ? p >= 0 : f > p; p += h) p in c && (s = n(s, c[p], p, l));
                                return s
                            }
                        };
                    e.exports = {
                        left: u(!1),
                        right: u(!0)
                    }
                },
                5417: function(e, t, n) {
                    var r = n(111),
                        i = n(3157),
                        o = n(5112)("species");
                    e.exports = function(e, t) {
                        var n;
                        return i(e) && ("function" != typeof(n = e.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[o]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
                    }
                },
                3411: function(e, t, n) {
                    var r = n(9670),
                        i = n(9212);
                    e.exports = function(e, t, n, o) {
                        try {
                            return o ? t(r(n)[0], n[1]) : t(n)
                        } catch (t) {
                            throw i(e), t
                        }
                    }
                },
                7072: function(e, t, n) {
                    var r = n(5112)("iterator"),
                        i = !1;
                    try {
                        var o = 0,
                            a = {
                                next: function() {
                                    return {
                                        done: !!o++
                                    }
                                },
                                return: function() {
                                    i = !0
                                }
                            };
                        a[r] = function() {
                            return this
                        }, Array.from(a, (function() {
                            throw 2
                        }))
                    } catch (e) {}
                    e.exports = function(e, t) {
                        if (!t && !i) return !1;
                        var n = !1;
                        try {
                            var o = {};
                            o[r] = function() {
                                return {
                                    next: function() {
                                        return {
                                            done: n = !0
                                        }
                                    }
                                }
                            }, e(o)
                        } catch (e) {}
                        return n
                    }
                },
                4326: function(e) {
                    var t = {}.toString;
                    e.exports = function(e) {
                        return t.call(e).slice(8, -1)
                    }
                },
                648: function(e, t, n) {
                    var r = n(1694),
                        i = n(4326),
                        o = n(5112)("toStringTag"),
                        a = "Arguments" == i(function() {
                            return arguments
                        }());
                    e.exports = r ? i : function(e) {
                        var t, n, r;
                        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                            try {
                                return e[t]
                            } catch (e) {}
                        }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
                    }
                },
                9920: function(e, t, n) {
                    var r = n(6656),
                        i = n(3887),
                        o = n(1236),
                        a = n(3070);
                    e.exports = function(e, t) {
                        for (var n = i(t), u = a.f, s = o.f, l = 0; l < n.length; l++) {
                            var c = n[l];
                            r(e, c) || u(e, c, s(t, c))
                        }
                    }
                },
                8544: function(e, t, n) {
                    var r = n(7293);
                    e.exports = !r((function() {
                        function e() {}
                        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
                    }))
                },
                4994: function(e, t, n) {
                    "use strict";
                    var r = n(3383).IteratorPrototype,
                        i = n(30),
                        o = n(9114),
                        a = n(8003),
                        u = n(7497),
                        s = function() {
                            return this
                        };
                    e.exports = function(e, t, n) {
                        var l = t + " Iterator";
                        return e.prototype = i(r, {
                            next: o(1, n)
                        }), a(e, l, !1, !0), u[l] = s, e
                    }
                },
                8880: function(e, t, n) {
                    var r = n(9781),
                        i = n(3070),
                        o = n(9114);
                    e.exports = r ? function(e, t, n) {
                        return i.f(e, t, o(1, n))
                    } : function(e, t, n) {
                        return e[t] = n, e
                    }
                },
                9114: function(e) {
                    e.exports = function(e, t) {
                        return {
                            enumerable: !(1 & e),
                            configurable: !(2 & e),
                            writable: !(4 & e),
                            value: t
                        }
                    }
                },
                6135: function(e, t, n) {
                    "use strict";
                    var r = n(7593),
                        i = n(3070),
                        o = n(9114);
                    e.exports = function(e, t, n) {
                        var a = r(t);
                        a in e ? i.f(e, a, o(0, n)) : e[a] = n
                    }
                },
                654: function(e, t, n) {
                    "use strict";
                    var r = n(2109),
                        i = n(4994),
                        o = n(9518),
                        a = n(7674),
                        u = n(8003),
                        s = n(8880),
                        l = n(1320),
                        c = n(5112),
                        f = n(1913),
                        p = n(7497),
                        h = n(3383),
                        d = h.IteratorPrototype,
                        v = h.BUGGY_SAFARI_ITERATORS,
                        y = c("iterator"),
                        g = "keys",
                        m = "values",
                        b = "entries",
                        x = function() {
                            return this
                        };
                    e.exports = function(e, t, n, c, h, w, E) {
                        i(n, t, c);
                        var k, A, S, F = function(e) {
                                if (e === h && I) return I;
                                if (!v && e in L) return L[e];
                                switch (e) {
                                    case g:
                                    case m:
                                    case b:
                                        return function() {
                                            return new n(this, e)
                                        }
                                }
                                return function() {
                                    return new n(this)
                                }
                            },
                            T = t + " Iterator",
                            C = !1,
                            L = e.prototype,
                            R = L[y] || L["@@iterator"] || h && L[h],
                            I = !v && R || F(h),
                            U = "Array" == t && L.entries || R;
                        if (U && (k = o(U.call(new e)), d !== Object.prototype && k.next && (f || o(k) === d || (a ? a(k, d) : "function" != typeof k[y] && s(k, y, x)), u(k, T, !0, !0), f && (p[T] = x))), h == m && R && R.name !== m && (C = !0, I = function() {
                                return R.call(this)
                            }), f && !E || L[y] === I || s(L, y, I), p[t] = I, h)
                            if (A = {
                                    values: F(m),
                                    keys: w ? I : F(g),
                                    entries: F(b)
                                }, E)
                                for (S in A)(v || C || !(S in L)) && l(L, S, A[S]);
                            else r({
                                target: t,
                                proto: !0,
                                forced: v || C
                            }, A);
                        return A
                    }
                },
                9781: function(e, t, n) {
                    var r = n(7293);
                    e.exports = !r((function() {
                        return 7 != Object.defineProperty({}, 1, {
                            get: function() {
                                return 7
                            }
                        })[1]
                    }))
                },
                317: function(e, t, n) {
                    var r = n(7854),
                        i = n(111),
                        o = r.document,
                        a = i(o) && i(o.createElement);
                    e.exports = function(e) {
                        return a ? o.createElement(e) : {}
                    }
                },
                8324: function(e) {
                    e.exports = {
                        CSSRuleList: 0,
                        CSSStyleDeclaration: 0,
                        CSSValueList: 0,
                        ClientRectList: 0,
                        DOMRectList: 0,
                        DOMStringList: 0,
                        DOMTokenList: 1,
                        DataTransferItemList: 0,
                        FileList: 0,
                        HTMLAllCollection: 0,
                        HTMLCollection: 0,
                        HTMLFormElement: 0,
                        HTMLSelectElement: 0,
                        MediaList: 0,
                        MimeTypeArray: 0,
                        NamedNodeMap: 0,
                        NodeList: 1,
                        PaintRequestList: 0,
                        Plugin: 0,
                        PluginArray: 0,
                        SVGLengthList: 0,
                        SVGNumberList: 0,
                        SVGPathSegList: 0,
                        SVGPointList: 0,
                        SVGStringList: 0,
                        SVGTransformList: 0,
                        SourceBufferList: 0,
                        StyleSheetList: 0,
                        TextTrackCueList: 0,
                        TextTrackList: 0,
                        TouchList: 0
                    }
                },
                8113: function(e, t, n) {
                    var r = n(5005);
                    e.exports = r("navigator", "userAgent") || ""
                },
                7392: function(e, t, n) {
                    var r, i, o = n(7854),
                        a = n(8113),
                        u = o.process,
                        s = u && u.versions,
                        l = s && s.v8;
                    l ? i = (r = l.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = r[1]), e.exports = i && +i
                },
                748: function(e) {
                    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
                },
                2109: function(e, t, n) {
                    var r = n(7854),
                        i = n(1236).f,
                        o = n(8880),
                        a = n(1320),
                        u = n(3505),
                        s = n(9920),
                        l = n(4705);
                    e.exports = function(e, t) {
                        var n, c, f, p, h, d = e.target,
                            v = e.global,
                            y = e.stat;
                        if (n = v ? r : y ? r[d] || u(d, {}) : (r[d] || {}).prototype)
                            for (c in t) {
                                if (p = t[c], f = e.noTargetGet ? (h = i(n, c)) && h.value : n[c], !l(v ? c : d + (y ? "." : "#") + c, e.forced) && void 0 !== f) {
                                    if (typeof p == typeof f) continue;
                                    s(p, f)
                                }(e.sham || f && f.sham) && o(p, "sham", !0), a(n, c, p, e)
                            }
                    }
                },
                7293: function(e) {
                    e.exports = function(e) {
                        try {
                            return !!e()
                        } catch (e) {
                            return !0
                        }
                    }
                },
                7007: function(e, t, n) {
                    "use strict";
                    n(4916);
                    var r = n(1320),
                        i = n(7293),
                        o = n(5112),
                        a = n(2261),
                        u = n(8880),
                        s = o("species"),
                        l = !i((function() {
                            var e = /./;
                            return e.exec = function() {
                                var e = [];
                                return e.groups = {
                                    a: "7"
                                }, e
                            }, "7" !== "".replace(e, "$<a>")
                        })),
                        c = "$0" === "a".replace(/./, "$0"),
                        f = o("replace"),
                        p = !!/./ [f] && "" === /./ [f]("a", "$0"),
                        h = !i((function() {
                            var e = /(?:)/,
                                t = e.exec;
                            e.exec = function() {
                                return t.apply(this, arguments)
                            };
                            var n = "ab".split(e);
                            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
                        }));
                    e.exports = function(e, t, n, f) {
                        var d = o(e),
                            v = !i((function() {
                                var t = {};
                                return t[d] = function() {
                                    return 7
                                }, 7 != "" [e](t)
                            })),
                            y = v && !i((function() {
                                var t = !1,
                                    n = /a/;
                                return "split" === e && ((n = {}).constructor = {}, n.constructor[s] = function() {
                                    return n
                                }, n.flags = "", n[d] = /./ [d]), n.exec = function() {
                                    return t = !0, null
                                }, n[d](""), !t
                            }));
                        if (!v || !y || "replace" === e && (!l || !c || p) || "split" === e && !h) {
                            var g = /./ [d],
                                m = n(d, "" [e], (function(e, t, n, r, i) {
                                    return t.exec === a ? v && !i ? {
                                        done: !0,
                                        value: g.call(t, n, r)
                                    } : {
                                        done: !0,
                                        value: e.call(n, t, r)
                                    } : {
                                        done: !1
                                    }
                                }), {
                                    REPLACE_KEEPS_$0: c,
                                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p
                                }),
                                b = m[0],
                                x = m[1];
                            r(String.prototype, e, b), r(RegExp.prototype, d, 2 == t ? function(e, t) {
                                return x.call(e, this, t)
                            } : function(e) {
                                return x.call(e, this)
                            })
                        }
                        f && u(RegExp.prototype[d], "sham", !0)
                    }
                },
                9974: function(e, t, n) {
                    var r = n(3099);
                    e.exports = function(e, t, n) {
                        if (r(e), void 0 === t) return e;
                        switch (n) {
                            case 0:
                                return function() {
                                    return e.call(t)
                                };
                            case 1:
                                return function(n) {
                                    return e.call(t, n)
                                };
                            case 2:
                                return function(n, r) {
                                    return e.call(t, n, r)
                                };
                            case 3:
                                return function(n, r, i) {
                                    return e.call(t, n, r, i)
                                }
                        }
                        return function() {
                            return e.apply(t, arguments)
                        }
                    }
                },
                5005: function(e, t, n) {
                    var r = n(857),
                        i = n(7854),
                        o = function(e) {
                            return "function" == typeof e ? e : void 0
                        };
                    e.exports = function(e, t) {
                        return arguments.length < 2 ? o(r[e]) || o(i[e]) : r[e] && r[e][t] || i[e] && i[e][t]
                    }
                },
                1246: function(e, t, n) {
                    var r = n(648),
                        i = n(7497),
                        o = n(5112)("iterator");
                    e.exports = function(e) {
                        if (null != e) return e[o] || e["@@iterator"] || i[r(e)]
                    }
                },
                8554: function(e, t, n) {
                    var r = n(9670),
                        i = n(1246);
                    e.exports = function(e) {
                        var t = i(e);
                        if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
                        return r(t.call(e))
                    }
                },
                647: function(e, t, n) {
                    var r = n(7908),
                        i = Math.floor,
                        o = "".replace,
                        a = /\$([$&'`]|\d\d?|<[^>]*>)/g,
                        u = /\$([$&'`]|\d\d?)/g;
                    e.exports = function(e, t, n, s, l, c) {
                        var f = n + e.length,
                            p = s.length,
                            h = u;
                        return void 0 !== l && (l = r(l), h = a), o.call(c, h, (function(r, o) {
                            var a;
                            switch (o.charAt(0)) {
                                case "$":
                                    return "$";
                                case "&":
                                    return e;
                                case "`":
                                    return t.slice(0, n);
                                case "'":
                                    return t.slice(f);
                                case "<":
                                    a = l[o.slice(1, -1)];
                                    break;
                                default:
                                    var u = +o;
                                    if (0 === u) return r;
                                    if (u > p) {
                                        var c = i(u / 10);
                                        return 0 === c ? r : c <= p ? void 0 === s[c - 1] ? o.charAt(1) : s[c - 1] + o.charAt(1) : r
                                    }
                                    a = s[u - 1]
                            }
                            return void 0 === a ? "" : a
                        }))
                    }
                },
                7854: function(e, t, n) {
                    var r = function(e) {
                        return e && e.Math == Math && e
                    };
                    e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function() {
                        return this
                    }() || Function("return this")()
                },
                6656: function(e) {
                    var t = {}.hasOwnProperty;
                    e.exports = function(e, n) {
                        return t.call(e, n)
                    }
                },
                3501: function(e) {
                    e.exports = {}
                },
                490: function(e, t, n) {
                    var r = n(5005);
                    e.exports = r("document", "documentElement")
                },
                4664: function(e, t, n) {
                    var r = n(9781),
                        i = n(7293),
                        o = n(317);
                    e.exports = !r && !i((function() {
                        return 7 != Object.defineProperty(o("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    }))
                },
                1179: function(e) {
                    var t = Math.abs,
                        n = Math.pow,
                        r = Math.floor,
                        i = Math.log,
                        o = Math.LN2;
                    e.exports = {
                        pack: function(e, a, u) {
                            var s, l, c, f = new Array(u),
                                p = 8 * u - a - 1,
                                h = (1 << p) - 1,
                                d = h >> 1,
                                v = 23 === a ? n(2, -24) - n(2, -77) : 0,
                                y = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0,
                                g = 0;
                            for ((e = t(e)) != e || e === 1 / 0 ? (l = e != e ? 1 : 0, s = h) : (s = r(i(e) / o), e * (c = n(2, -s)) < 1 && (s--, c *= 2), (e += s + d >= 1 ? v / c : v * n(2, 1 - d)) * c >= 2 && (s++, c /= 2), s + d >= h ? (l = 0, s = h) : s + d >= 1 ? (l = (e * c - 1) * n(2, a), s += d) : (l = e * n(2, d - 1) * n(2, a), s = 0)); a >= 8; f[g++] = 255 & l, l /= 256, a -= 8);
                            for (s = s << a | l, p += a; p > 0; f[g++] = 255 & s, s /= 256, p -= 8);
                            return f[--g] |= 128 * y, f
                        },
                        unpack: function(e, t) {
                            var r, i = e.length,
                                o = 8 * i - t - 1,
                                a = (1 << o) - 1,
                                u = a >> 1,
                                s = o - 7,
                                l = i - 1,
                                c = e[l--],
                                f = 127 & c;
                            for (c >>= 7; s > 0; f = 256 * f + e[l], l--, s -= 8);
                            for (r = f & (1 << -s) - 1, f >>= -s, s += t; s > 0; r = 256 * r + e[l], l--, s -= 8);
                            if (0 === f) f = 1 - u;
                            else {
                                if (f === a) return r ? NaN : c ? -1 / 0 : 1 / 0;
                                r += n(2, t), f -= u
                            }
                            return (c ? -1 : 1) * r * n(2, f - t)
                        }
                    }
                },
                8361: function(e, t, n) {
                    var r = n(7293),
                        i = n(4326),
                        o = "".split;
                    e.exports = r((function() {
                        return !Object("z").propertyIsEnumerable(0)
                    })) ? function(e) {
                        return "String" == i(e) ? o.call(e, "") : Object(e)
                    } : Object
                },
                9587: function(e, t, n) {
                    var r = n(111),
                        i = n(7674);
                    e.exports = function(e, t, n) {
                        var o, a;
                        return i && "function" == typeof(o = t.constructor) && o !== n && r(a = o.prototype) && a !== n.prototype && i(e, a), e
                    }
                },
                2788: function(e, t, n) {
                    var r = n(5465),
                        i = Function.toString;
                    "function" != typeof r.inspectSource && (r.inspectSource = function(e) {
                        return i.call(e)
                    }), e.exports = r.inspectSource
                },
                9909: function(e, t, n) {
                    var r, i, o, a = n(8536),
                        u = n(7854),
                        s = n(111),
                        l = n(8880),
                        c = n(6656),
                        f = n(5465),
                        p = n(6200),
                        h = n(3501),
                        d = u.WeakMap;
                    if (a) {
                        var v = f.state || (f.state = new d),
                            y = v.get,
                            g = v.has,
                            m = v.set;
                        r = function(e, t) {
                            return t.facade = e, m.call(v, e, t), t
                        }, i = function(e) {
                            return y.call(v, e) || {}
                        }, o = function(e) {
                            return g.call(v, e)
                        }
                    } else {
                        var b = p("state");
                        h[b] = !0, r = function(e, t) {
                            return t.facade = e, l(e, b, t), t
                        }, i = function(e) {
                            return c(e, b) ? e[b] : {}
                        }, o = function(e) {
                            return c(e, b)
                        }
                    }
                    e.exports = {
                        set: r,
                        get: i,
                        has: o,
                        enforce: function(e) {
                            return o(e) ? i(e) : r(e, {})
                        },
                        getterFor: function(e) {
                            return function(t) {
                                var n;
                                if (!s(t) || (n = i(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                                return n
                            }
                        }
                    }
                },
                7659: function(e, t, n) {
                    var r = n(5112),
                        i = n(7497),
                        o = r("iterator"),
                        a = Array.prototype;
                    e.exports = function(e) {
                        return void 0 !== e && (i.Array === e || a[o] === e)
                    }
                },
                3157: function(e, t, n) {
                    var r = n(4326);
                    e.exports = Array.isArray || function(e) {
                        return "Array" == r(e)
                    }
                },
                4705: function(e, t, n) {
                    var r = n(7293),
                        i = /#|\.prototype\./,
                        o = function(e, t) {
                            var n = u[a(e)];
                            return n == l || n != s && ("function" == typeof t ? r(t) : !!t)
                        },
                        a = o.normalize = function(e) {
                            return String(e).replace(i, ".").toLowerCase()
                        },
                        u = o.data = {},
                        s = o.NATIVE = "N",
                        l = o.POLYFILL = "P";
                    e.exports = o
                },
                111: function(e) {
                    e.exports = function(e) {
                        return "object" == typeof e ? null !== e : "function" == typeof e
                    }
                },
                1913: function(e) {
                    e.exports = !1
                },
                7850: function(e, t, n) {
                    var r = n(111),
                        i = n(4326),
                        o = n(5112)("match");
                    e.exports = function(e) {
                        var t;
                        return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
                    }
                },
                9212: function(e, t, n) {
                    var r = n(9670);
                    e.exports = function(e) {
                        var t = e.return;
                        if (void 0 !== t) return r(t.call(e)).value
                    }
                },
                3383: function(e, t, n) {
                    "use strict";
                    var r, i, o, a = n(7293),
                        u = n(9518),
                        s = n(8880),
                        l = n(6656),
                        c = n(5112),
                        f = n(1913),
                        p = c("iterator"),
                        h = !1;
                    [].keys && ("next" in (o = [].keys()) ? (i = u(u(o))) !== Object.prototype && (r = i) : h = !0);
                    var d = null == r || a((function() {
                        var e = {};
                        return r[p].call(e) !== e
                    }));
                    d && (r = {}), f && !d || l(r, p) || s(r, p, (function() {
                        return this
                    })), e.exports = {
                        IteratorPrototype: r,
                        BUGGY_SAFARI_ITERATORS: h
                    }
                },
                7497: function(e) {
                    e.exports = {}
                },
                133: function(e, t, n) {
                    var r = n(7293);
                    e.exports = !!Object.getOwnPropertySymbols && !r((function() {
                        return !String(Symbol())
                    }))
                },
                590: function(e, t, n) {
                    var r = n(7293),
                        i = n(5112),
                        o = n(1913),
                        a = i("iterator");
                    e.exports = !r((function() {
                        var e = new URL("b?a=1&b=2&c=3", "http://a"),
                            t = e.searchParams,
                            n = "";
                        return e.pathname = "c%20d", t.forEach((function(e, r) {
                            t.delete("b"), n += r + e
                        })), o && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
                    }))
                },
                8536: function(e, t, n) {
                    var r = n(7854),
                        i = n(2788),
                        o = r.WeakMap;
                    e.exports = "function" == typeof o && /native code/.test(i(o))
                },
                1574: function(e, t, n) {
                    "use strict";
                    var r = n(9781),
                        i = n(7293),
                        o = n(1956),
                        a = n(5181),
                        u = n(5296),
                        s = n(7908),
                        l = n(8361),
                        c = Object.assign,
                        f = Object.defineProperty;
                    e.exports = !c || i((function() {
                        if (r && 1 !== c({
                                b: 1
                            }, c(f({}, "a", {
                                enumerable: !0,
                                get: function() {
                                    f(this, "b", {
                                        value: 3,
                                        enumerable: !1
                                    })
                                }
                            }), {
                                b: 2
                            })).b) return !0;
                        var e = {},
                            t = {},
                            n = Symbol(),
                            i = "abcdefghijklmnopqrst";
                        return e[n] = 7, i.split("").forEach((function(e) {
                            t[e] = e
                        })), 7 != c({}, e)[n] || o(c({}, t)).join("") != i
                    })) ? function(e, t) {
                        for (var n = s(e), i = arguments.length, c = 1, f = a.f, p = u.f; i > c;)
                            for (var h, d = l(arguments[c++]), v = f ? o(d).concat(f(d)) : o(d), y = v.length, g = 0; y > g;) h = v[g++], r && !p.call(d, h) || (n[h] = d[h]);
                        return n
                    } : c
                },
                30: function(e, t, n) {
                    var r, i = n(9670),
                        o = n(6048),
                        a = n(748),
                        u = n(3501),
                        s = n(490),
                        l = n(317),
                        c = n(6200)("IE_PROTO"),
                        f = function() {},
                        p = function(e) {
                            return "<script>" + e + "<\/script>"
                        },
                        h = function() {
                            try {
                                r = document.domain && new ActiveXObject("htmlfile")
                            } catch (e) {}
                            var e, t;
                            h = r ? function(e) {
                                e.write(p("")), e.close();
                                var t = e.parentWindow.Object;
                                return e = null, t
                            }(r) : ((t = l("iframe")).style.display = "none", s.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(p("document.F=Object")), e.close(), e.F);
                            for (var n = a.length; n--;) delete h.prototype[a[n]];
                            return h()
                        };
                    u[c] = !0, e.exports = Object.create || function(e, t) {
                        var n;
                        return null !== e ? (f.prototype = i(e), n = new f, f.prototype = null, n[c] = e) : n = h(), void 0 === t ? n : o(n, t)
                    }
                },
                6048: function(e, t, n) {
                    var r = n(9781),
                        i = n(3070),
                        o = n(9670),
                        a = n(1956);
                    e.exports = r ? Object.defineProperties : function(e, t) {
                        o(e);
                        for (var n, r = a(t), u = r.length, s = 0; u > s;) i.f(e, n = r[s++], t[n]);
                        return e
                    }
                },
                3070: function(e, t, n) {
                    var r = n(9781),
                        i = n(4664),
                        o = n(9670),
                        a = n(7593),
                        u = Object.defineProperty;
                    t.f = r ? u : function(e, t, n) {
                        if (o(e), t = a(t, !0), o(n), i) try {
                            return u(e, t, n)
                        } catch (e) {}
                        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                        return "value" in n && (e[t] = n.value), e
                    }
                },
                1236: function(e, t, n) {
                    var r = n(9781),
                        i = n(5296),
                        o = n(9114),
                        a = n(5656),
                        u = n(7593),
                        s = n(6656),
                        l = n(4664),
                        c = Object.getOwnPropertyDescriptor;
                    t.f = r ? c : function(e, t) {
                        if (e = a(e), t = u(t, !0), l) try {
                            return c(e, t)
                        } catch (e) {}
                        if (s(e, t)) return o(!i.f.call(e, t), e[t])
                    }
                },
                8006: function(e, t, n) {
                    var r = n(6324),
                        i = n(748).concat("length", "prototype");
                    t.f = Object.getOwnPropertyNames || function(e) {
                        return r(e, i)
                    }
                },
                5181: function(e, t) {
                    t.f = Object.getOwnPropertySymbols
                },
                9518: function(e, t, n) {
                    var r = n(6656),
                        i = n(7908),
                        o = n(6200),
                        a = n(8544),
                        u = o("IE_PROTO"),
                        s = Object.prototype;
                    e.exports = a ? Object.getPrototypeOf : function(e) {
                        return e = i(e), r(e, u) ? e[u] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
                    }
                },
                6324: function(e, t, n) {
                    var r = n(6656),
                        i = n(5656),
                        o = n(1318).indexOf,
                        a = n(3501);
                    e.exports = function(e, t) {
                        var n, u = i(e),
                            s = 0,
                            l = [];
                        for (n in u) !r(a, n) && r(u, n) && l.push(n);
                        for (; t.length > s;) r(u, n = t[s++]) && (~o(l, n) || l.push(n));
                        return l
                    }
                },
                1956: function(e, t, n) {
                    var r = n(6324),
                        i = n(748);
                    e.exports = Object.keys || function(e) {
                        return r(e, i)
                    }
                },
                5296: function(e, t) {
                    "use strict";
                    var n = {}.propertyIsEnumerable,
                        r = Object.getOwnPropertyDescriptor,
                        i = r && !n.call({
                            1: 2
                        }, 1);
                    t.f = i ? function(e) {
                        var t = r(this, e);
                        return !!t && t.enumerable
                    } : n
                },
                7674: function(e, t, n) {
                    var r = n(9670),
                        i = n(6077);
                    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                        var e, t = !1,
                            n = {};
                        try {
                            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
                        } catch (e) {}
                        return function(n, o) {
                            return r(n), i(o), t ? e.call(n, o) : n.__proto__ = o, n
                        }
                    }() : void 0)
                },
                288: function(e, t, n) {
                    "use strict";
                    var r = n(1694),
                        i = n(648);
                    e.exports = r ? {}.toString : function() {
                        return "[object " + i(this) + "]"
                    }
                },
                3887: function(e, t, n) {
                    var r = n(5005),
                        i = n(8006),
                        o = n(5181),
                        a = n(9670);
                    e.exports = r("Reflect", "ownKeys") || function(e) {
                        var t = i.f(a(e)),
                            n = o.f;
                        return n ? t.concat(n(e)) : t
                    }
                },
                857: function(e, t, n) {
                    var r = n(7854);
                    e.exports = r
                },
                2248: function(e, t, n) {
                    var r = n(1320);
                    e.exports = function(e, t, n) {
                        for (var i in t) r(e, i, t[i], n);
                        return e
                    }
                },
                1320: function(e, t, n) {
                    var r = n(7854),
                        i = n(8880),
                        o = n(6656),
                        a = n(3505),
                        u = n(2788),
                        s = n(9909),
                        l = s.get,
                        c = s.enforce,
                        f = String(String).split("String");
                    (e.exports = function(e, t, n, u) {
                        var s, l = !!u && !!u.unsafe,
                            p = !!u && !!u.enumerable,
                            h = !!u && !!u.noTargetGet;
                        "function" == typeof n && ("string" != typeof t || o(n, "name") || i(n, "name", t), (s = c(n)).source || (s.source = f.join("string" == typeof t ? t : ""))), e !== r ? (l ? !h && e[t] && (p = !0) : delete e[t], p ? e[t] = n : i(e, t, n)) : p ? e[t] = n : a(t, n)
                    })(Function.prototype, "toString", (function() {
                        return "function" == typeof this && l(this).source || u(this)
                    }))
                },
                7651: function(e, t, n) {
                    var r = n(4326),
                        i = n(2261);
                    e.exports = function(e, t) {
                        var n = e.exec;
                        if ("function" == typeof n) {
                            var o = n.call(e, t);
                            if ("object" != typeof o) throw TypeError("RegExp exec method returned something other than an Object or null");
                            return o
                        }
                        if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
                        return i.call(e, t)
                    }
                },
                2261: function(e, t, n) {
                    "use strict";
                    var r, i, o = n(7066),
                        a = n(2999),
                        u = RegExp.prototype.exec,
                        s = String.prototype.replace,
                        l = u,
                        c = (r = /a/, i = /b*/g, u.call(r, "a"), u.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
                        f = a.UNSUPPORTED_Y || a.BROKEN_CARET,
                        p = void 0 !== /()??/.exec("")[1];
                    (c || p || f) && (l = function(e) {
                        var t, n, r, i, a = this,
                            l = f && a.sticky,
                            h = o.call(a),
                            d = a.source,
                            v = 0,
                            y = e;
                        return l && (-1 === (h = h.replace("y", "")).indexOf("g") && (h += "g"), y = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (d = "(?: " + d + ")", y = " " + y, v++), n = new RegExp("^(?:" + d + ")", h)), p && (n = new RegExp("^" + d + "$(?!\\s)", h)), c && (t = a.lastIndex), r = u.call(l ? n : a, y), l ? r ? (r.input = r.input.slice(v), r[0] = r[0].slice(v), r.index = a.lastIndex, a.lastIndex += r[0].length) : a.lastIndex = 0 : c && r && (a.lastIndex = a.global ? r.index + r[0].length : t), p && r && r.length > 1 && s.call(r[0], n, (function() {
                            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
                        })), r
                    }), e.exports = l
                },
                7066: function(e, t, n) {
                    "use strict";
                    var r = n(9670);
                    e.exports = function() {
                        var e = r(this),
                            t = "";
                        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
                    }
                },
                2999: function(e, t, n) {
                    "use strict";
                    var r = n(7293);

                    function i(e, t) {
                        return RegExp(e, t)
                    }
                    t.UNSUPPORTED_Y = r((function() {
                        var e = i("a", "y");
                        return e.lastIndex = 2, null != e.exec("abcd")
                    })), t.BROKEN_CARET = r((function() {
                        var e = i("^r", "gy");
                        return e.lastIndex = 2, null != e.exec("str")
                    }))
                },
                4488: function(e) {
                    e.exports = function(e) {
                        if (null == e) throw TypeError("Can't call method on " + e);
                        return e
                    }
                },
                3505: function(e, t, n) {
                    var r = n(7854),
                        i = n(8880);
                    e.exports = function(e, t) {
                        try {
                            i(r, e, t)
                        } catch (n) {
                            r[e] = t
                        }
                        return t
                    }
                },
                6340: function(e, t, n) {
                    "use strict";
                    var r = n(5005),
                        i = n(3070),
                        o = n(5112),
                        a = n(9781),
                        u = o("species");
                    e.exports = function(e) {
                        var t = r(e),
                            n = i.f;
                        a && t && !t[u] && n(t, u, {
                            configurable: !0,
                            get: function() {
                                return this
                            }
                        })
                    }
                },
                8003: function(e, t, n) {
                    var r = n(3070).f,
                        i = n(6656),
                        o = n(5112)("toStringTag");
                    e.exports = function(e, t, n) {
                        e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                            configurable: !0,
                            value: t
                        })
                    }
                },
                6200: function(e, t, n) {
                    var r = n(2309),
                        i = n(9711),
                        o = r("keys");
                    e.exports = function(e) {
                        return o[e] || (o[e] = i(e))
                    }
                },
                5465: function(e, t, n) {
                    var r = n(7854),
                        i = n(3505),
                        o = "__core-js_shared__",
                        a = r[o] || i(o, {});
                    e.exports = a
                },
                2309: function(e, t, n) {
                    var r = n(1913),
                        i = n(5465);
                    (e.exports = function(e, t) {
                        return i[e] || (i[e] = void 0 !== t ? t : {})
                    })("versions", []).push({
                        version: "3.9.0",
                        mode: r ? "pure" : "global",
                        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
                    })
                },
                6707: function(e, t, n) {
                    var r = n(9670),
                        i = n(3099),
                        o = n(5112)("species");
                    e.exports = function(e, t) {
                        var n, a = r(e).constructor;
                        return void 0 === a || null == (n = r(a)[o]) ? t : i(n)
                    }
                },
                8710: function(e, t, n) {
                    var r = n(9958),
                        i = n(4488),
                        o = function(e) {
                            return function(t, n) {
                                var o, a, u = String(i(t)),
                                    s = r(n),
                                    l = u.length;
                                return s < 0 || s >= l ? e ? "" : void 0 : (o = u.charCodeAt(s)) < 55296 || o > 56319 || s + 1 === l || (a = u.charCodeAt(s + 1)) < 56320 || a > 57343 ? e ? u.charAt(s) : o : e ? u.slice(s, s + 2) : a - 56320 + (o - 55296 << 10) + 65536
                            }
                        };
                    e.exports = {
                        codeAt: o(!1),
                        charAt: o(!0)
                    }
                },
                3197: function(e) {
                    "use strict";
                    var t = 2147483647,
                        n = /[^\0-\u007E]/,
                        r = /[.\u3002\uFF0E\uFF61]/g,
                        i = "Overflow: input needs wider integers to process",
                        o = Math.floor,
                        a = String.fromCharCode,
                        u = function(e) {
                            return e + 22 + 75 * (e < 26)
                        },
                        s = function(e, t, n) {
                            var r = 0;
                            for (e = n ? o(e / 700) : e >> 1, e += o(e / t); e > 455; r += 36) e = o(e / 35);
                            return o(r + 36 * e / (e + 38))
                        },
                        l = function(e) {
                            var n, r, l = [],
                                c = (e = function(e) {
                                    for (var t = [], n = 0, r = e.length; n < r;) {
                                        var i = e.charCodeAt(n++);
                                        if (i >= 55296 && i <= 56319 && n < r) {
                                            var o = e.charCodeAt(n++);
                                            56320 == (64512 & o) ? t.push(((1023 & i) << 10) + (1023 & o) + 65536) : (t.push(i), n--)
                                        } else t.push(i)
                                    }
                                    return t
                                }(e)).length,
                                f = 128,
                                p = 0,
                                h = 72;
                            for (n = 0; n < e.length; n++)(r = e[n]) < 128 && l.push(a(r));
                            var d = l.length,
                                v = d;
                            for (d && l.push("-"); v < c;) {
                                var y = t;
                                for (n = 0; n < e.length; n++)(r = e[n]) >= f && r < y && (y = r);
                                var g = v + 1;
                                if (y - f > o((t - p) / g)) throw RangeError(i);
                                for (p += (y - f) * g, f = y, n = 0; n < e.length; n++) {
                                    if ((r = e[n]) < f && ++p > t) throw RangeError(i);
                                    if (r == f) {
                                        for (var m = p, b = 36;; b += 36) {
                                            var x = b <= h ? 1 : b >= h + 26 ? 26 : b - h;
                                            if (m < x) break;
                                            var w = m - x,
                                                E = 36 - x;
                                            l.push(a(u(x + w % E))), m = o(w / E)
                                        }
                                        l.push(a(u(m))), h = s(p, g, v == d), p = 0, ++v
                                    }
                                }++p, ++f
                            }
                            return l.join("")
                        };
                    e.exports = function(e) {
                        var t, i, o = [],
                            a = e.toLowerCase().replace(r, ".").split(".");
                        for (t = 0; t < a.length; t++) i = a[t], o.push(n.test(i) ? "xn--" + l(i) : i);
                        return o.join(".")
                    }
                },
                6091: function(e, t, n) {
                    var r = n(7293),
                        i = n(1361);
                    e.exports = function(e) {
                        return r((function() {
                            return !!i[e]() || "​᠎" != "​᠎" [e]() || i[e].name !== e
                        }))
                    }
                },
                3111: function(e, t, n) {
                    var r = n(4488),
                        i = "[" + n(1361) + "]",
                        o = RegExp("^" + i + i + "*"),
                        a = RegExp(i + i + "*$"),
                        u = function(e) {
                            return function(t) {
                                var n = String(r(t));
                                return 1 & e && (n = n.replace(o, "")), 2 & e && (n = n.replace(a, "")), n
                            }
                        };
                    e.exports = {
                        start: u(1),
                        end: u(2),
                        trim: u(3)
                    }
                },
                1400: function(e, t, n) {
                    var r = n(9958),
                        i = Math.max,
                        o = Math.min;
                    e.exports = function(e, t) {
                        var n = r(e);
                        return n < 0 ? i(n + t, 0) : o(n, t)
                    }
                },
                7067: function(e, t, n) {
                    var r = n(9958),
                        i = n(7466);
                    e.exports = function(e) {
                        if (void 0 === e) return 0;
                        var t = r(e),
                            n = i(t);
                        if (t !== n) throw RangeError("Wrong length or index");
                        return n
                    }
                },
                5656: function(e, t, n) {
                    var r = n(8361),
                        i = n(4488);
                    e.exports = function(e) {
                        return r(i(e))
                    }
                },
                9958: function(e) {
                    var t = Math.ceil,
                        n = Math.floor;
                    e.exports = function(e) {
                        return isNaN(e = +e) ? 0 : (e > 0 ? n : t)(e)
                    }
                },
                7466: function(e, t, n) {
                    var r = n(9958),
                        i = Math.min;
                    e.exports = function(e) {
                        return e > 0 ? i(r(e), 9007199254740991) : 0
                    }
                },
                7908: function(e, t, n) {
                    var r = n(4488);
                    e.exports = function(e) {
                        return Object(r(e))
                    }
                },
                4590: function(e, t, n) {
                    var r = n(3002);
                    e.exports = function(e, t) {
                        var n = r(e);
                        if (n % t) throw RangeError("Wrong offset");
                        return n
                    }
                },
                3002: function(e, t, n) {
                    var r = n(9958);
                    e.exports = function(e) {
                        var t = r(e);
                        if (t < 0) throw RangeError("The argument can't be less than 0");
                        return t
                    }
                },
                7593: function(e, t, n) {
                    var r = n(111);
                    e.exports = function(e, t) {
                        if (!r(e)) return e;
                        var n, i;
                        if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
                        if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
                        if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
                        throw TypeError("Can't convert object to primitive value")
                    }
                },
                1694: function(e, t, n) {
                    var r = {};
                    r[n(5112)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
                },
                9843: function(e, t, n) {
                    "use strict";
                    var r = n(2109),
                        i = n(7854),
                        o = n(9781),
                        a = n(3832),
                        u = n(260),
                        s = n(3331),
                        l = n(5787),
                        c = n(9114),
                        f = n(8880),
                        p = n(7466),
                        h = n(7067),
                        d = n(4590),
                        v = n(7593),
                        y = n(6656),
                        g = n(648),
                        m = n(111),
                        b = n(30),
                        x = n(7674),
                        w = n(8006).f,
                        E = n(7321),
                        k = n(2092).forEach,
                        A = n(6340),
                        S = n(3070),
                        F = n(1236),
                        T = n(9909),
                        C = n(9587),
                        L = T.get,
                        R = T.set,
                        I = S.f,
                        U = F.f,
                        O = Math.round,
                        _ = i.RangeError,
                        M = s.ArrayBuffer,
                        z = s.DataView,
                        P = u.NATIVE_ARRAY_BUFFER_VIEWS,
                        j = u.TYPED_ARRAY_TAG,
                        D = u.TypedArray,
                        N = u.TypedArrayPrototype,
                        B = u.aTypedArrayConstructor,
                        q = u.isTypedArray,
                        W = "BYTES_PER_ELEMENT",
                        H = "Wrong length",
                        Y = function(e, t) {
                            for (var n = 0, r = t.length, i = new(B(e))(r); r > n;) i[n] = t[n++];
                            return i
                        },
                        G = function(e, t) {
                            I(e, t, {
                                get: function() {
                                    return L(this)[t]
                                }
                            })
                        },
                        Q = function(e) {
                            var t;
                            return e instanceof M || "ArrayBuffer" == (t = g(e)) || "SharedArrayBuffer" == t
                        },
                        $ = function(e, t) {
                            return q(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
                        },
                        V = function(e, t) {
                            return $(e, t = v(t, !0)) ? c(2, e[t]) : U(e, t)
                        },
                        X = function(e, t, n) {
                            return !($(e, t = v(t, !0)) && m(n) && y(n, "value")) || y(n, "get") || y(n, "set") || n.configurable || y(n, "writable") && !n.writable || y(n, "enumerable") && !n.enumerable ? I(e, t, n) : (e[t] = n.value, e)
                        };
                    o ? (P || (F.f = V, S.f = X, G(N, "buffer"), G(N, "byteOffset"), G(N, "byteLength"), G(N, "length")), r({
                        target: "Object",
                        stat: !0,
                        forced: !P
                    }, {
                        getOwnPropertyDescriptor: V,
                        defineProperty: X
                    }), e.exports = function(e, t, n) {
                        var o = e.match(/\d+$/)[0] / 8,
                            u = e + (n ? "Clamped" : "") + "Array",
                            s = "get" + e,
                            c = "set" + e,
                            v = i[u],
                            y = v,
                            g = y && y.prototype,
                            S = {},
                            F = function(e, t) {
                                I(e, t, {
                                    get: function() {
                                        return function(e, t) {
                                            var n = L(e);
                                            return n.view[s](t * o + n.byteOffset, !0)
                                        }(this, t)
                                    },
                                    set: function(e) {
                                        return function(e, t, r) {
                                            var i = L(e);
                                            n && (r = (r = O(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.view[c](t * o + i.byteOffset, r, !0)
                                        }(this, t, e)
                                    },
                                    enumerable: !0
                                })
                            };
                        P ? a && (y = t((function(e, t, n, r) {
                            return l(e, y, u), C(m(t) ? Q(t) ? void 0 !== r ? new v(t, d(n, o), r) : void 0 !== n ? new v(t, d(n, o)) : new v(t) : q(t) ? Y(y, t) : E.call(y, t) : new v(h(t)), e, y)
                        })), x && x(y, D), k(w(v), (function(e) {
                            e in y || f(y, e, v[e])
                        })), y.prototype = g) : (y = t((function(e, t, n, r) {
                            l(e, y, u);
                            var i, a, s, c = 0,
                                f = 0;
                            if (m(t)) {
                                if (!Q(t)) return q(t) ? Y(y, t) : E.call(y, t);
                                i = t, f = d(n, o);
                                var v = t.byteLength;
                                if (void 0 === r) {
                                    if (v % o) throw _(H);
                                    if ((a = v - f) < 0) throw _(H)
                                } else if ((a = p(r) * o) + f > v) throw _(H);
                                s = a / o
                            } else s = h(t), i = new M(a = s * o);
                            for (R(e, {
                                    buffer: i,
                                    byteOffset: f,
                                    byteLength: a,
                                    length: s,
                                    view: new z(i)
                                }); c < s;) F(e, c++)
                        })), x && x(y, D), g = y.prototype = b(N)), g.constructor !== y && f(g, "constructor", y), j && f(g, j, u), S[u] = y, r({
                            global: !0,
                            forced: y != v,
                            sham: !P
                        }, S), W in y || f(y, W, o), W in g || f(g, W, o), A(u)
                    }) : e.exports = function() {}
                },
                3832: function(e, t, n) {
                    var r = n(7854),
                        i = n(7293),
                        o = n(7072),
                        a = n(260).NATIVE_ARRAY_BUFFER_VIEWS,
                        u = r.ArrayBuffer,
                        s = r.Int8Array;
                    e.exports = !a || !i((function() {
                        s(1)
                    })) || !i((function() {
                        new s(-1)
                    })) || !o((function(e) {
                        new s, new s(null), new s(1.5), new s(e)
                    }), !0) || i((function() {
                        return 1 !== new s(new u(2), 1, void 0).length
                    }))
                },
                3074: function(e, t, n) {
                    var r = n(260).aTypedArrayConstructor,
                        i = n(6707);
                    e.exports = function(e, t) {
                        for (var n = i(e, e.constructor), o = 0, a = t.length, u = new(r(n))(a); a > o;) u[o] = t[o++];
                        return u
                    }
                },
                7321: function(e, t, n) {
                    var r = n(7908),
                        i = n(7466),
                        o = n(1246),
                        a = n(7659),
                        u = n(9974),
                        s = n(260).aTypedArrayConstructor;
                    e.exports = function(e) {
                        var t, n, l, c, f, p, h = r(e),
                            d = arguments.length,
                            v = d > 1 ? arguments[1] : void 0,
                            y = void 0 !== v,
                            g = o(h);
                        if (null != g && !a(g))
                            for (p = (f = g.call(h)).next, h = []; !(c = p.call(f)).done;) h.push(c.value);
                        for (y && d > 2 && (v = u(v, arguments[2], 2)), n = i(h.length), l = new(s(this))(n), t = 0; n > t; t++) l[t] = y ? v(h[t], t) : h[t];
                        return l
                    }
                },
                9711: function(e) {
                    var t = 0,
                        n = Math.random();
                    e.exports = function(e) {
                        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++t + n).toString(36)
                    }
                },
                3307: function(e, t, n) {
                    var r = n(133);
                    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
                },
                5112: function(e, t, n) {
                    var r = n(7854),
                        i = n(2309),
                        o = n(6656),
                        a = n(9711),
                        u = n(133),
                        s = n(3307),
                        l = i("wks"),
                        c = r.Symbol,
                        f = s ? c : c && c.withoutSetter || a;
                    e.exports = function(e) {
                        return o(l, e) || (u && o(c, e) ? l[e] = c[e] : l[e] = f("Symbol." + e)), l[e]
                    }
                },
                1361: function(e) {
                    e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
                },
                8264: function(e, t, n) {
                    "use strict";
                    var r = n(2109),
                        i = n(7854),
                        o = n(3331),
                        a = n(6340),
                        u = o.ArrayBuffer;
                    r({
                        global: !0,
                        forced: i.ArrayBuffer !== u
                    }, {
                        ArrayBuffer: u
                    }), a("ArrayBuffer")
                },
                2222: function(e, t, n) {
                    "use strict";
                    var r = n(2109),
                        i = n(7293),
                        o = n(3157),
                        a = n(111),
                        u = n(7908),
                        s = n(7466),
                        l = n(6135),
                        c = n(5417),
                        f = n(1194),
                        p = n(5112),
                        h = n(7392),
                        d = p("isConcatSpreadable"),
                        v = 9007199254740991,
                        y = "Maximum allowed index exceeded",
                        g = h >= 51 || !i((function() {
                            var e = [];
                            return e[d] = !1, e.concat()[0] !== e
                        })),
                        m = f("concat"),
                        b = function(e) {
                            if (!a(e)) return !1;
                            var t = e[d];
                            return void 0 !== t ? !!t : o(e)
                        };
                    r({
                        target: "Array",
                        proto: !0,
                        forced: !g || !m
                    }, {
                        concat: function(e) {
                            var t, n, r, i, o, a = u(this),
                                f = c(a, 0),
                                p = 0;
                            for (t = -1, r = arguments.length; t < r; t++)
                                if (b(o = -1 === t ? a : arguments[t])) {
                                    if (p + (i = s(o.length)) > v) throw TypeError(y);
                                    for (n = 0; n < i; n++, p++) n in o && l(f, p, o[n])
                                } else {
                                    if (p >= v) throw TypeError(y);
                                    l(f, p++, o)
                                }
                            return f.length = p, f
                        }
                    })
                },
                7327: function(e, t, n) {
                    "use strict";
                    var r = n(2109),
                        i = n(2092).filter;
                    r({
                        target: "Array",
                        proto: !0,
                        forced: !n(1194)("filter")
                    }, {
                        filter: function(e) {
                            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    })
                },
                2772: function(e, t, n) {
                    "use strict";
                    var r = n(2109),
                        i = n(1318).indexOf,
                        o = n(9341),
                        a = [].indexOf,
                        u = !!a && 1 / [1].indexOf(1, -0) < 0,
                        s = o("indexOf");
                    r({
                        target: "Array",
                        proto: !0,
                        forced: u || !s
                    }, {
                        indexOf: function(e) {
                            return u ? a.apply(this, arguments) || 0 : i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    })
                },
                6992: function(e, t, n) {
                    "use strict";
                    var r = n(5656),
                        i = n(1223),
                        o = n(7497),
                        a = n(9909),
                        u = n(654),
                        s = "Array Iterator",
                        l = a.set,
                        c = a.getterFor(s);
                    e.exports = u(Array, "Array", (function(e, t) {
                        l(this, {
                            type: s,
                            target: r(e),
                            index: 0,
                            kind: t
                        })
                    }), (function() {
                        var e = c(this),
                            t = e.target,
                            n = e.kind,
                            r = e.index++;
                        return !t || r >= t.length ? (e.target = void 0, {
                            value: void 0,
                            done: !0
                        }) : "keys" == n ? {
                            value: r,
                            done: !1
                        } : "values" == n ? {
                            value: t[r],
                            done: !1
                        } : {
                            value: [r, t[r]],
                            done: !1
                        }
                    }), "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
                },
                1249: function(e, t, n) {
                    "use strict";
                    var r = n(2109),
                        i = n(2092).map;
                    r({
                        target: "Array",
                        proto: !0,
                        forced: !n(1194)("map")
                    }, {
                        map: function(e) {
                            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    })
                },
                7042: function(e, t, n) {
                    "use strict";
                    var r = n(2109),
                        i = n(111),
                        o = n(3157),
                        a = n(1400),
                        u = n(7466),
                        s = n(5656),
                        l = n(6135),
                        c = n(5112),
                        f = n(1194)("slice"),
                        p = c("species"),
                        h = [].slice,
                        d = Math.max;
                    r({
                        target: "Array",
                        proto: !0,
                        forced: !f
                    }, {
                        slice: function(e, t) {
                            var n, r, c, f = s(this),
                                v = u(f.length),
                                y = a(e, v),
                                g = a(void 0 === t ? v : t, v);
                            if (o(f) && ("function" != typeof(n = f.constructor) || n !== Array && !o(n.prototype) ? i(n) && null === (n = n[p]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return h.call(f, y, g);
                            for (r = new(void 0 === n ? Array : n)(d(g - y, 0)), c = 0; y < g; y++, c++) y in f && l(r, c, f[y]);
                            return r.length = c, r
                        }
                    })
                },
                561: function(e, t, n) {
                    "use strict";
                    var r = n(2109),
                        i = n(1400),
                        o = n(9958),
                        a = n(7466),
                        u = n(7908),
                        s = n(5417),
                        l = n(6135),
                        c = n(1194)("splice"),
                        f = Math.max,
                        p = Math.min,
                        h = 9007199254740991,
                        d = "Maximum allowed length exceeded";
                    r({
                        target: "Array",
                        proto: !0,
                        forced: !c
                    }, {
                        splice: function(e, t) {
                            var n, r, c, v, y, g, m = u(this),
                                b = a(m.length),
                                x = i(e, b),
                                w = arguments.length;
                            if (0 === w ? n = r = 0 : 1 === w ? (n = 0, r = b - x) : (n = w - 2, r = p(f(o(t), 0), b - x)), b + n - r > h) throw TypeError(d);
                            for (c = s(m, r), v = 0; v < r; v++)(y = x + v) in m && l(c, v, m[y]);
                            if (c.length = r, n < r) {
                                for (v = x; v < b - r; v++) g = v + n, (y = v + r) in m ? m[g] = m[y] : delete m[g];
                                for (v = b; v > b - r + n; v--) delete m[v - 1]
                            } else if (n > r)
                                for (v = b - r; v > x; v--) g = v + n - 1, (y = v + r - 1) in m ? m[g] = m[y] : delete m[g];
                            for (v = 0; v < n; v++) m[v + x] = arguments[v + 2];
                            return m.length = b - r + n, c
                        }
                    })
                },
                8309: function(e, t, n) {
                    var r = n(9781),
                        i = n(3070).f,
                        o = Function.prototype,
                        a = o.toString,
                        u = /^\s*function ([^ (]*)/,
                        s = "name";
                    r && !(s in o) && i(o, s, {
                        configurable: !0,
                        get: function() {
                            try {
                                return a.call(this).match(u)[1]
                            } catch (e) {
                                return ""
                            }
                        }
                    })
                },
                489: function(e, t, n) {
                    var r = n(2109),
                        i = n(7293),
                        o = n(7908),
                        a = n(9518),
                        u = n(8544);
                    r({
                        target: "Object",
                        stat: !0,
                        forced: i((function() {
                            a(1)
                        })),
                        sham: !u
                    }, {
                        getPrototypeOf: function(e) {
                            return a(o(e))
                        }
                    })
                },
                1539: function(e, t, n) {
                    var r = n(1694),
                        i = n(1320),
                        o = n(288);
                    r || i(Object.prototype, "toString", o, {
                        unsafe: !0
                    })
                },
                4916: function(e, t, n) {
                    "use strict";
                    var r = n(2109),
                        i = n(2261);
                    r({
                        target: "RegExp",
                        proto: !0,
                        forced: /./.exec !== i
                    }, {
                        exec: i
                    })
                },
                9714: function(e, t, n) {
                    "use strict";
                    var r = n(1320),
                        i = n(9670),
                        o = n(7293),
                        a = n(7066),
                        u = "toString",
                        s = RegExp.prototype,
                        l = s.toString,
                        c = o((function() {
                            return "/a/b" != l.call({
                                source: "a",
                                flags: "b"
                            })
                        })),
                        f = l.name != u;
                    (c || f) && r(RegExp.prototype, u, (function() {
                        var e = i(this),
                            t = String(e.source),
                            n = e.flags;
                        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in s) ? a.call(e) : n)
                    }), {
                        unsafe: !0
                    })
                },
                8783: function(e, t, n) {
                    "use strict";
                    var r = n(8710).charAt,
                        i = n(9909),
                        o = n(654),
                        a = "String Iterator",
                        u = i.set,
                        s = i.getterFor(a);
                    o(String, "String", (function(e) {
                        u(this, {
                            type: a,
                            string: String(e),
                            index: 0
                        })
                    }), (function() {
                        var e, t = s(this),
                            n = t.string,
                            i = t.index;
                        return i >= n.length ? {
                            value: void 0,
                            done: !0
                        } : (e = r(n, i), t.index += e.length, {
                            value: e,
                            done: !1
                        })
                    }))
                },
                4723: function(e, t, n) {
                    "use strict";
                    var r = n(7007),
                        i = n(9670),
                        o = n(7466),
                        a = n(4488),
                        u = n(1530),
                        s = n(7651);
                    r("match", 1, (function(e, t, n) {
                        return [function(t) {
                            var n = a(this),
                                r = null == t ? void 0 : t[e];
                            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
                        }, function(e) {
                            var r = n(t, e, this);
                            if (r.done) return r.value;
                            var a = i(e),
                                l = String(this);
                            if (!a.global) return s(a, l);
                            var c = a.unicode;
                            a.lastIndex = 0;
                            for (var f, p = [], h = 0; null !== (f = s(a, l));) {
                                var d = String(f[0]);
                                p[h] = d, "" === d && (a.lastIndex = u(l, o(a.lastIndex), c)), h++
                            }
                            return 0 === h ? null : p
                        }]
                    }))
                },
                5306: function(e, t, n) {
                    "use strict";
                    var r = n(7007),
                        i = n(9670),
                        o = n(7466),
                        a = n(9958),
                        u = n(4488),
                        s = n(1530),
                        l = n(647),
                        c = n(7651),
                        f = Math.max,
                        p = Math.min;
                    r("replace", 2, (function(e, t, n, r) {
                        var h = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                            d = r.REPLACE_KEEPS_$0,
                            v = h ? "$" : "$0";
                        return [function(n, r) {
                            var i = u(this),
                                o = null == n ? void 0 : n[e];
                            return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
                        }, function(e, r) {
                            if (!h && d || "string" == typeof r && -1 === r.indexOf(v)) {
                                var u = n(t, e, this, r);
                                if (u.done) return u.value
                            }
                            var y = i(e),
                                g = String(this),
                                m = "function" == typeof r;
                            m || (r = String(r));
                            var b = y.global;
                            if (b) {
                                var x = y.unicode;
                                y.lastIndex = 0
                            }
                            for (var w = [];;) {
                                var E = c(y, g);
                                if (null === E) break;
                                if (w.push(E), !b) break;
                                "" === String(E[0]) && (y.lastIndex = s(g, o(y.lastIndex), x))
                            }
                            for (var k, A = "", S = 0, F = 0; F < w.length; F++) {
                                E = w[F];
                                for (var T = String(E[0]), C = f(p(a(E.index), g.length), 0), L = [], R = 1; R < E.length; R++) L.push(void 0 === (k = E[R]) ? k : String(k));
                                var I = E.groups;
                                if (m) {
                                    var U = [T].concat(L, C, g);
                                    void 0 !== I && U.push(I);
                                    var O = String(r.apply(void 0, U))
                                } else O = l(T, g, C, L, I, r);
                                C >= S && (A += g.slice(S, C) + O, S = C + T.length)
                            }
                            return A + g.slice(S)
                        }]
                    }))
                },
                3123: function(e, t, n) {
                    "use strict";
                    var r = n(7007),
                        i = n(7850),
                        o = n(9670),
                        a = n(4488),
                        u = n(6707),
                        s = n(1530),
                        l = n(7466),
                        c = n(7651),
                        f = n(2261),
                        p = n(7293),
                        h = [].push,
                        d = Math.min,
                        v = 4294967295,
                        y = !p((function() {
                            return !RegExp(v, "y")
                        }));
                    r("split", 2, (function(e, t, n) {
                        var r;
                        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
                            var r = String(a(this)),
                                o = void 0 === n ? v : n >>> 0;
                            if (0 === o) return [];
                            if (void 0 === e) return [r];
                            if (!i(e)) return t.call(r, e, o);
                            for (var u, s, l, c = [], p = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), d = 0, y = new RegExp(e.source, p + "g");
                                (u = f.call(y, r)) && !((s = y.lastIndex) > d && (c.push(r.slice(d, u.index)), u.length > 1 && u.index < r.length && h.apply(c, u.slice(1)), l = u[0].length, d = s, c.length >= o));) y.lastIndex === u.index && y.lastIndex++;
                            return d === r.length ? !l && y.test("") || c.push("") : c.push(r.slice(d)), c.length > o ? c.slice(0, o) : c
                        } : "0".split(void 0, 0).length ? function(e, n) {
                            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
                        } : t, [function(t, n) {
                            var i = a(this),
                                o = null == t ? void 0 : t[e];
                            return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
                        }, function(e, i) {
                            var a = n(r, e, this, i, r !== t);
                            if (a.done) return a.value;
                            var f = o(e),
                                p = String(this),
                                h = u(f, RegExp),
                                g = f.unicode,
                                m = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (y ? "y" : "g"),
                                b = new h(y ? f : "^(?:" + f.source + ")", m),
                                x = void 0 === i ? v : i >>> 0;
                            if (0 === x) return [];
                            if (0 === p.length) return null === c(b, p) ? [p] : [];
                            for (var w = 0, E = 0, k = []; E < p.length;) {
                                b.lastIndex = y ? E : 0;
                                var A, S = c(b, y ? p : p.slice(E));
                                if (null === S || (A = d(l(b.lastIndex + (y ? 0 : E)), p.length)) === w) E = s(p, E, g);
                                else {
                                    if (k.push(p.slice(w, E)), k.length === x) return k;
                                    for (var F = 1; F <= S.length - 1; F++)
                                        if (k.push(S[F]), k.length === x) return k;
                                    E = w = A
                                }
                            }
                            return k.push(p.slice(w)), k
                        }]
                    }), !y)
                },
                3210: function(e, t, n) {
                    "use strict";
                    var r = n(2109),
                        i = n(3111).trim;
                    r({
                        target: "String",
                        proto: !0,
                        forced: n(6091)("trim")
                    }, {
                        trim: function() {
                            return i(this)
                        }
                    })
                },
                2990: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(1048),
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("copyWithin", (function(e, t) {
                        return i.call(o(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
                    }))
                },
                8927: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(2092).every,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("every", (function(e) {
                        return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    }))
                },
                3105: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(1285),
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("fill", (function(e) {
                        return i.apply(o(this), arguments)
                    }))
                },
                5035: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(2092).filter,
                        o = n(3074),
                        a = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("filter", (function(e) {
                        var t = i(a(this), e, arguments.length > 1 ? arguments[1] : void 0);
                        return o(this, t)
                    }))
                },
                7174: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(2092).findIndex,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("findIndex", (function(e) {
                        return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    }))
                },
                4345: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(2092).find,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("find", (function(e) {
                        return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    }))
                },
                2846: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(2092).forEach,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("forEach", (function(e) {
                        i(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    }))
                },
                4731: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(1318).includes,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("includes", (function(e) {
                        return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    }))
                },
                7209: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(1318).indexOf,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("indexOf", (function(e) {
                        return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    }))
                },
                6319: function(e, t, n) {
                    "use strict";
                    var r = n(7854),
                        i = n(260),
                        o = n(6992),
                        a = n(5112)("iterator"),
                        u = r.Uint8Array,
                        s = o.values,
                        l = o.keys,
                        c = o.entries,
                        f = i.aTypedArray,
                        p = i.exportTypedArrayMethod,
                        h = u && u.prototype[a],
                        d = !!h && ("values" == h.name || null == h.name),
                        v = function() {
                            return s.call(f(this))
                        };
                    p("entries", (function() {
                        return c.call(f(this))
                    })), p("keys", (function() {
                        return l.call(f(this))
                    })), p("values", v, !d), p(a, v, !d)
                },
                8867: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = r.aTypedArray,
                        o = r.exportTypedArrayMethod,
                        a = [].join;
                    o("join", (function(e) {
                        return a.apply(i(this), arguments)
                    }))
                },
                7789: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(6583),
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("lastIndexOf", (function(e) {
                        return i.apply(o(this), arguments)
                    }))
                },
                3739: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(2092).map,
                        o = n(6707),
                        a = r.aTypedArray,
                        u = r.aTypedArrayConstructor;
                    (0, r.exportTypedArrayMethod)("map", (function(e) {
                        return i(a(this), e, arguments.length > 1 ? arguments[1] : void 0, (function(e, t) {
                            return new(u(o(e, e.constructor)))(t)
                        }))
                    }))
                },
                4483: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(3671).right,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("reduceRight", (function(e) {
                        return i(o(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
                    }))
                },
                9368: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(3671).left,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("reduce", (function(e) {
                        return i(o(this), e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
                    }))
                },
                2056: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = r.aTypedArray,
                        o = r.exportTypedArrayMethod,
                        a = Math.floor;
                    o("reverse", (function() {
                        for (var e, t = this, n = i(t).length, r = a(n / 2), o = 0; o < r;) e = t[o], t[o++] = t[--n], t[n] = e;
                        return t
                    }))
                },
                3462: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(7466),
                        o = n(4590),
                        a = n(7908),
                        u = n(7293),
                        s = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("set", (function(e) {
                        s(this);
                        var t = o(arguments.length > 1 ? arguments[1] : void 0, 1),
                            n = this.length,
                            r = a(e),
                            u = i(r.length),
                            l = 0;
                        if (u + t > n) throw RangeError("Wrong length");
                        for (; l < u;) this[t + l] = r[l++]
                    }), u((function() {
                        new Int8Array(1).set({})
                    })))
                },
                678: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(6707),
                        o = n(7293),
                        a = r.aTypedArray,
                        u = r.aTypedArrayConstructor,
                        s = r.exportTypedArrayMethod,
                        l = [].slice;
                    s("slice", (function(e, t) {
                        for (var n = l.call(a(this), e, t), r = i(this, this.constructor), o = 0, s = n.length, c = new(u(r))(s); s > o;) c[o] = n[o++];
                        return c
                    }), o((function() {
                        new Int8Array(1).slice()
                    })))
                },
                7462: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(2092).some,
                        o = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("some", (function(e) {
                        return i(o(this), e, arguments.length > 1 ? arguments[1] : void 0)
                    }))
                },
                3824: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = r.aTypedArray,
                        o = r.exportTypedArrayMethod,
                        a = [].sort;
                    o("sort", (function(e) {
                        return a.call(i(this), e)
                    }))
                },
                5021: function(e, t, n) {
                    "use strict";
                    var r = n(260),
                        i = n(7466),
                        o = n(1400),
                        a = n(6707),
                        u = r.aTypedArray;
                    (0, r.exportTypedArrayMethod)("subarray", (function(e, t) {
                        var n = u(this),
                            r = n.length,
                            s = o(e, r);
                        return new(a(n, n.constructor))(n.buffer, n.byteOffset + s * n.BYTES_PER_ELEMENT, i((void 0 === t ? r : o(t, r)) - s))
                    }))
                },
                2974: function(e, t, n) {
                    "use strict";
                    var r = n(7854),
                        i = n(260),
                        o = n(7293),
                        a = r.Int8Array,
                        u = i.aTypedArray,
                        s = i.exportTypedArrayMethod,
                        l = [].toLocaleString,
                        c = [].slice,
                        f = !!a && o((function() {
                            l.call(new a(1))
                        }));
                    s("toLocaleString", (function() {
                        return l.apply(f ? c.call(u(this)) : u(this), arguments)
                    }), o((function() {
                        return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString()
                    })) || !o((function() {
                        a.prototype.toLocaleString.call([1, 2])
                    })))
                },
                5016: function(e, t, n) {
                    "use strict";
                    var r = n(260).exportTypedArrayMethod,
                        i = n(7293),
                        o = n(7854).Uint8Array,
                        a = o && o.prototype || {},
                        u = [].toString,
                        s = [].join;
                    i((function() {
                        u.call({})
                    })) && (u = function() {
                        return s.call(this)
                    });
                    var l = a.toString != u;
                    r("toString", u, l)
                },
                2472: function(e, t, n) {
                    n(9843)("Uint8", (function(e) {
                        return function(t, n, r) {
                            return e(this, t, n, r)
                        }
                    }))
                },
                4747: function(e, t, n) {
                    var r = n(7854),
                        i = n(8324),
                        o = n(8533),
                        a = n(8880);
                    for (var u in i) {
                        var s = r[u],
                            l = s && s.prototype;
                        if (l && l.forEach !== o) try {
                            a(l, "forEach", o)
                        } catch (e) {
                            l.forEach = o
                        }
                    }
                },
                3948: function(e, t, n) {
                    var r = n(7854),
                        i = n(8324),
                        o = n(6992),
                        a = n(8880),
                        u = n(5112),
                        s = u("iterator"),
                        l = u("toStringTag"),
                        c = o.values;
                    for (var f in i) {
                        var p = r[f],
                            h = p && p.prototype;
                        if (h) {
                            if (h[s] !== c) try {
                                a(h, s, c)
                            } catch (e) {
                                h[s] = c
                            }
                            if (h[l] || a(h, l, f), i[f])
                                for (var d in o)
                                    if (h[d] !== o[d]) try {
                                        a(h, d, o[d])
                                    } catch (e) {
                                        h[d] = o[d]
                                    }
                        }
                    }
                },
                1637: function(e, t, n) {
                    "use strict";
                    n(6992);
                    var r = n(2109),
                        i = n(5005),
                        o = n(590),
                        a = n(1320),
                        u = n(2248),
                        s = n(8003),
                        l = n(4994),
                        c = n(9909),
                        f = n(5787),
                        p = n(6656),
                        h = n(9974),
                        d = n(648),
                        v = n(9670),
                        y = n(111),
                        g = n(30),
                        m = n(9114),
                        b = n(8554),
                        x = n(1246),
                        w = n(5112),
                        E = i("fetch"),
                        k = i("Headers"),
                        A = w("iterator"),
                        S = "URLSearchParams",
                        F = "URLSearchParamsIterator",
                        T = c.set,
                        C = c.getterFor(S),
                        L = c.getterFor(F),
                        R = /\+/g,
                        I = Array(4),
                        U = function(e) {
                            return I[e - 1] || (I[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
                        },
                        O = function(e) {
                            try {
                                return decodeURIComponent(e)
                            } catch (t) {
                                return e
                            }
                        },
                        _ = function(e) {
                            var t = e.replace(R, " "),
                                n = 4;
                            try {
                                return decodeURIComponent(t)
                            } catch (e) {
                                for (; n;) t = t.replace(U(n--), O);
                                return t
                            }
                        },
                        M = /[!'()~]|%20/g,
                        z = {
                            "!": "%21",
                            "'": "%27",
                            "(": "%28",
                            ")": "%29",
                            "~": "%7E",
                            "%20": "+"
                        },
                        P = function(e) {
                            return z[e]
                        },
                        j = function(e) {
                            return encodeURIComponent(e).replace(M, P)
                        },
                        D = function(e, t) {
                            if (t)
                                for (var n, r, i = t.split("&"), o = 0; o < i.length;)(n = i[o++]).length && (r = n.split("="), e.push({
                                    key: _(r.shift()),
                                    value: _(r.join("="))
                                }))
                        },
                        N = function(e) {
                            this.entries.length = 0, D(this.entries, e)
                        },
                        B = function(e, t) {
                            if (e < t) throw TypeError("Not enough arguments")
                        },
                        q = l((function(e, t) {
                            T(this, {
                                type: F,
                                iterator: b(C(e).entries),
                                kind: t
                            })
                        }), "Iterator", (function() {
                            var e = L(this),
                                t = e.kind,
                                n = e.iterator.next(),
                                r = n.value;
                            return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
                        })),
                        W = function() {
                            f(this, W, S);
                            var e, t, n, r, i, o, a, u, s, l = arguments.length > 0 ? arguments[0] : void 0,
                                c = this,
                                h = [];
                            if (T(c, {
                                    type: S,
                                    entries: h,
                                    updateURL: function() {},
                                    updateSearchParams: N
                                }), void 0 !== l)
                                if (y(l))
                                    if ("function" == typeof(e = x(l)))
                                        for (n = (t = e.call(l)).next; !(r = n.call(t)).done;) {
                                            if ((a = (o = (i = b(v(r.value))).next).call(i)).done || (u = o.call(i)).done || !o.call(i).done) throw TypeError("Expected sequence with length 2");
                                            h.push({
                                                key: a.value + "",
                                                value: u.value + ""
                                            })
                                        } else
                                            for (s in l) p(l, s) && h.push({
                                                key: s,
                                                value: l[s] + ""
                                            });
                                    else D(h, "string" == typeof l ? "?" === l.charAt(0) ? l.slice(1) : l : l + "")
                        },
                        H = W.prototype;
                    u(H, {
                        append: function(e, t) {
                            B(arguments.length, 2);
                            var n = C(this);
                            n.entries.push({
                                key: e + "",
                                value: t + ""
                            }), n.updateURL()
                        },
                        delete: function(e) {
                            B(arguments.length, 1);
                            for (var t = C(this), n = t.entries, r = e + "", i = 0; i < n.length;) n[i].key === r ? n.splice(i, 1) : i++;
                            t.updateURL()
                        },
                        get: function(e) {
                            B(arguments.length, 1);
                            for (var t = C(this).entries, n = e + "", r = 0; r < t.length; r++)
                                if (t[r].key === n) return t[r].value;
                            return null
                        },
                        getAll: function(e) {
                            B(arguments.length, 1);
                            for (var t = C(this).entries, n = e + "", r = [], i = 0; i < t.length; i++) t[i].key === n && r.push(t[i].value);
                            return r
                        },
                        has: function(e) {
                            B(arguments.length, 1);
                            for (var t = C(this).entries, n = e + "", r = 0; r < t.length;)
                                if (t[r++].key === n) return !0;
                            return !1
                        },
                        set: function(e, t) {
                            B(arguments.length, 1);
                            for (var n, r = C(this), i = r.entries, o = !1, a = e + "", u = t + "", s = 0; s < i.length; s++)(n = i[s]).key === a && (o ? i.splice(s--, 1) : (o = !0, n.value = u));
                            o || i.push({
                                key: a,
                                value: u
                            }), r.updateURL()
                        },
                        sort: function() {
                            var e, t, n, r = C(this),
                                i = r.entries,
                                o = i.slice();
                            for (i.length = 0, n = 0; n < o.length; n++) {
                                for (e = o[n], t = 0; t < n; t++)
                                    if (i[t].key > e.key) {
                                        i.splice(t, 0, e);
                                        break
                                    }
                                t === n && i.push(e)
                            }
                            r.updateURL()
                        },
                        forEach: function(e) {
                            for (var t, n = C(this).entries, r = h(e, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length;) r((t = n[i++]).value, t.key, this)
                        },
                        keys: function() {
                            return new q(this, "keys")
                        },
                        values: function() {
                            return new q(this, "values")
                        },
                        entries: function() {
                            return new q(this, "entries")
                        }
                    }, {
                        enumerable: !0
                    }), a(H, A, H.entries), a(H, "toString", (function() {
                        for (var e, t = C(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push(j(e.key) + "=" + j(e.value));
                        return n.join("&")
                    }), {
                        enumerable: !0
                    }), s(W, S), r({
                        global: !0,
                        forced: !o
                    }, {
                        URLSearchParams: W
                    }), o || "function" != typeof E || "function" != typeof k || r({
                        global: !0,
                        enumerable: !0,
                        forced: !0
                    }, {
                        fetch: function(e) {
                            var t, n, r, i = [e];
                            return arguments.length > 1 && (y(t = arguments[1]) && (n = t.body, d(n) === S && ((r = t.headers ? new k(t.headers) : new k).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = g(t, {
                                body: m(0, String(n)),
                                headers: m(0, r)
                            }))), i.push(t)), E.apply(this, i)
                        }
                    }), e.exports = {
                        URLSearchParams: W,
                        getState: C
                    }
                },
                285: function(e, t, n) {
                    "use strict";
                    n(8783);
                    var r, i = n(2109),
                        o = n(9781),
                        a = n(590),
                        u = n(7854),
                        s = n(6048),
                        l = n(1320),
                        c = n(5787),
                        f = n(6656),
                        p = n(1574),
                        h = n(8457),
                        d = n(8710).codeAt,
                        v = n(3197),
                        y = n(8003),
                        g = n(1637),
                        m = n(9909),
                        b = u.URL,
                        x = g.URLSearchParams,
                        w = g.getState,
                        E = m.set,
                        k = m.getterFor("URL"),
                        A = Math.floor,
                        S = Math.pow,
                        F = "Invalid scheme",
                        T = "Invalid host",
                        C = "Invalid port",
                        L = /[A-Za-z]/,
                        R = /[\d+-.A-Za-z]/,
                        I = /\d/,
                        U = /^(0x|0X)/,
                        O = /^[0-7]+$/,
                        _ = /^\d+$/,
                        M = /^[\dA-Fa-f]+$/,
                        z = /[\u0000\t\u000A\u000D #%/:?@[\\]]/,
                        P = /[\u0000\t\u000A\u000D #/:?@[\\]]/,
                        j = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
                        D = /[\t\u000A\u000D]/g,
                        N = function(e, t) {
                            var n, r, i;
                            if ("[" == t.charAt(0)) {
                                if ("]" != t.charAt(t.length - 1)) return T;
                                if (!(n = q(t.slice(1, -1)))) return T;
                                e.host = n
                            } else if (X(e)) {
                                if (t = v(t), z.test(t)) return T;
                                if (null === (n = B(t))) return T;
                                e.host = n
                            } else {
                                if (P.test(t)) return T;
                                for (n = "", r = h(t), i = 0; i < r.length; i++) n += $(r[i], H);
                                e.host = n
                            }
                        },
                        B = function(e) {
                            var t, n, r, i, o, a, u, s = e.split(".");
                            if (s.length && "" == s[s.length - 1] && s.pop(), (t = s.length) > 4) return e;
                            for (n = [], r = 0; r < t; r++) {
                                if ("" == (i = s[r])) return e;
                                if (o = 10, i.length > 1 && "0" == i.charAt(0) && (o = U.test(i) ? 16 : 8, i = i.slice(8 == o ? 1 : 2)), "" === i) a = 0;
                                else {
                                    if (!(10 == o ? _ : 8 == o ? O : M).test(i)) return e;
                                    a = parseInt(i, o)
                                }
                                n.push(a)
                            }
                            for (r = 0; r < t; r++)
                                if (a = n[r], r == t - 1) {
                                    if (a >= S(256, 5 - t)) return null
                                } else if (a > 255) return null;
                            for (u = n.pop(), r = 0; r < n.length; r++) u += n[r] * S(256, 3 - r);
                            return u
                        },
                        q = function(e) {
                            var t, n, r, i, o, a, u, s = [0, 0, 0, 0, 0, 0, 0, 0],
                                l = 0,
                                c = null,
                                f = 0,
                                p = function() {
                                    return e.charAt(f)
                                };
                            if (":" == p()) {
                                if (":" != e.charAt(1)) return;
                                f += 2, c = ++l
                            }
                            for (; p();) {
                                if (8 == l) return;
                                if (":" != p()) {
                                    for (t = n = 0; n < 4 && M.test(p());) t = 16 * t + parseInt(p(), 16), f++, n++;
                                    if ("." == p()) {
                                        if (0 == n) return;
                                        if (f -= n, l > 6) return;
                                        for (r = 0; p();) {
                                            if (i = null, r > 0) {
                                                if (!("." == p() && r < 4)) return;
                                                f++
                                            }
                                            if (!I.test(p())) return;
                                            for (; I.test(p());) {
                                                if (o = parseInt(p(), 10), null === i) i = o;
                                                else {
                                                    if (0 == i) return;
                                                    i = 10 * i + o
                                                }
                                                if (i > 255) return;
                                                f++
                                            }
                                            s[l] = 256 * s[l] + i, 2 != ++r && 4 != r || l++
                                        }
                                        if (4 != r) return;
                                        break
                                    }
                                    if (":" == p()) {
                                        if (f++, !p()) return
                                    } else if (p()) return;
                                    s[l++] = t
                                } else {
                                    if (null !== c) return;
                                    f++, c = ++l
                                }
                            }
                            if (null !== c)
                                for (a = l - c, l = 7; 0 != l && a > 0;) u = s[l], s[l--] = s[c + a - 1], s[c + --a] = u;
                            else if (8 != l) return;
                            return s
                        },
                        W = function(e) {
                            var t, n, r, i;
                            if ("number" == typeof e) {
                                for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = A(e / 256);
                                return t.join(".")
                            }
                            if ("object" == typeof e) {
                                for (t = "", r = function(e) {
                                        for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++) 0 !== e[o] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = o), ++i);
                                        return i > n && (t = r, n = i), t
                                    }(e), n = 0; n < 8; n++) i && 0 === e[n] || (i && (i = !1), r === n ? (t += n ? ":" : "::", i = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
                                return "[" + t + "]"
                            }
                            return e
                        },
                        H = {},
                        Y = p({}, H, {
                            " ": 1,
                            '"': 1,
                            "<": 1,
                            ">": 1,
                            "`": 1
                        }),
                        G = p({}, Y, {
                            "#": 1,
                            "?": 1,
                            "{": 1,
                            "}": 1
                        }),
                        Q = p({}, G, {
                            "/": 1,
                            ":": 1,
                            ";": 1,
                            "=": 1,
                            "@": 1,
                            "[": 1,
                            "\\": 1,
                            "]": 1,
                            "^": 1,
                            "|": 1
                        }),
                        $ = function(e, t) {
                            var n = d(e, 0);
                            return n > 32 && n < 127 && !f(t, e) ? e : encodeURIComponent(e)
                        },
                        V = {
                            ftp: 21,
                            file: null,
                            http: 80,
                            https: 443,
                            ws: 80,
                            wss: 443
                        },
                        X = function(e) {
                            return f(V, e.scheme)
                        },
                        K = function(e) {
                            return "" != e.username || "" != e.password
                        },
                        Z = function(e) {
                            return !e.host || e.cannotBeABaseURL || "file" == e.scheme
                        },
                        J = function(e, t) {
                            var n;
                            return 2 == e.length && L.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
                        },
                        ee = function(e) {
                            var t;
                            return e.length > 1 && J(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
                        },
                        te = function(e) {
                            var t = e.path,
                                n = t.length;
                            !n || "file" == e.scheme && 1 == n && J(t[0], !0) || t.pop()
                        },
                        ne = function(e) {
                            return "." === e || "%2e" === e.toLowerCase()
                        },
                        re = {},
                        ie = {},
                        oe = {},
                        ae = {},
                        ue = {},
                        se = {},
                        le = {},
                        ce = {},
                        fe = {},
                        pe = {},
                        he = {},
                        de = {},
                        ve = {},
                        ye = {},
                        ge = {},
                        me = {},
                        be = {},
                        xe = {},
                        we = {},
                        Ee = {},
                        ke = {},
                        Ae = function(e, t, n, i) {
                            var o, a, u, s, l, c = n || re,
                                p = 0,
                                d = "",
                                v = !1,
                                y = !1,
                                g = !1;
                            for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(j, "")), t = t.replace(D, ""), o = h(t); p <= o.length;) {
                                switch (a = o[p], c) {
                                    case re:
                                        if (!a || !L.test(a)) {
                                            if (n) return F;
                                            c = oe;
                                            continue
                                        }
                                        d += a.toLowerCase(), c = ie;
                                        break;
                                    case ie:
                                        if (a && (R.test(a) || "+" == a || "-" == a || "." == a)) d += a.toLowerCase();
                                        else {
                                            if (":" != a) {
                                                if (n) return F;
                                                d = "", c = oe, p = 0;
                                                continue
                                            }
                                            if (n && (X(e) != f(V, d) || "file" == d && (K(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                                            if (e.scheme = d, n) return void(X(e) && V[e.scheme] == e.port && (e.port = null));
                                            d = "", "file" == e.scheme ? c = ye : X(e) && i && i.scheme == e.scheme ? c = ae : X(e) ? c = ce : "/" == o[p + 1] ? (c = ue, p++) : (e.cannotBeABaseURL = !0, e.path.push(""), c = we)
                                        }
                                        break;
                                    case oe:
                                        if (!i || i.cannotBeABaseURL && "#" != a) return F;
                                        if (i.cannotBeABaseURL && "#" == a) {
                                            e.scheme = i.scheme, e.path = i.path.slice(), e.query = i.query, e.fragment = "", e.cannotBeABaseURL = !0, c = ke;
                                            break
                                        }
                                        c = "file" == i.scheme ? ye : se;
                                        continue;
                                    case ae:
                                        if ("/" != a || "/" != o[p + 1]) {
                                            c = se;
                                            continue
                                        }
                                        c = fe, p++;
                                        break;
                                    case ue:
                                        if ("/" == a) {
                                            c = pe;
                                            break
                                        }
                                        c = xe;
                                        continue;
                                    case se:
                                        if (e.scheme = i.scheme, a == r) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query;
                                        else if ("/" == a || "\\" == a && X(e)) c = le;
                                        else if ("?" == a) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = "", c = Ee;
                                        else {
                                            if ("#" != a) {
                                                e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.path.pop(), c = xe;
                                                continue
                                            }
                                            e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query, e.fragment = "", c = ke
                                        }
                                        break;
                                    case le:
                                        if (!X(e) || "/" != a && "\\" != a) {
                                            if ("/" != a) {
                                                e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, c = xe;
                                                continue
                                            }
                                            c = pe
                                        } else c = fe;
                                        break;
                                    case ce:
                                        if (c = fe, "/" != a || "/" != d.charAt(p + 1)) continue;
                                        p++;
                                        break;
                                    case fe:
                                        if ("/" != a && "\\" != a) {
                                            c = pe;
                                            continue
                                        }
                                        break;
                                    case pe:
                                        if ("@" == a) {
                                            v && (d = "%40" + d), v = !0, u = h(d);
                                            for (var m = 0; m < u.length; m++) {
                                                var b = u[m];
                                                if (":" != b || g) {
                                                    var x = $(b, Q);
                                                    g ? e.password += x : e.username += x
                                                } else g = !0
                                            }
                                            d = ""
                                        } else if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && X(e)) {
                                            if (v && "" == d) return "Invalid authority";
                                            p -= h(d).length + 1, d = "", c = he
                                        } else d += a;
                                        break;
                                    case he:
                                    case de:
                                        if (n && "file" == e.scheme) {
                                            c = me;
                                            continue
                                        }
                                        if (":" != a || y) {
                                            if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && X(e)) {
                                                if (X(e) && "" == d) return T;
                                                if (n && "" == d && (K(e) || null !== e.port)) return;
                                                if (s = N(e, d)) return s;
                                                if (d = "", c = be, n) return;
                                                continue
                                            }
                                            "[" == a ? y = !0 : "]" == a && (y = !1), d += a
                                        } else {
                                            if ("" == d) return T;
                                            if (s = N(e, d)) return s;
                                            if (d = "", c = ve, n == de) return
                                        }
                                        break;
                                    case ve:
                                        if (!I.test(a)) {
                                            if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && X(e) || n) {
                                                if ("" != d) {
                                                    var w = parseInt(d, 10);
                                                    if (w > 65535) return C;
                                                    e.port = X(e) && w === V[e.scheme] ? null : w, d = ""
                                                }
                                                if (n) return;
                                                c = be;
                                                continue
                                            }
                                            return C
                                        }
                                        d += a;
                                        break;
                                    case ye:
                                        if (e.scheme = "file", "/" == a || "\\" == a) c = ge;
                                        else {
                                            if (!i || "file" != i.scheme) {
                                                c = xe;
                                                continue
                                            }
                                            if (a == r) e.host = i.host, e.path = i.path.slice(), e.query = i.query;
                                            else if ("?" == a) e.host = i.host, e.path = i.path.slice(), e.query = "", c = Ee;
                                            else {
                                                if ("#" != a) {
                                                    ee(o.slice(p).join("")) || (e.host = i.host, e.path = i.path.slice(), te(e)), c = xe;
                                                    continue
                                                }
                                                e.host = i.host, e.path = i.path.slice(), e.query = i.query, e.fragment = "", c = ke
                                            }
                                        }
                                        break;
                                    case ge:
                                        if ("/" == a || "\\" == a) {
                                            c = me;
                                            break
                                        }
                                        i && "file" == i.scheme && !ee(o.slice(p).join("")) && (J(i.path[0], !0) ? e.path.push(i.path[0]) : e.host = i.host), c = xe;
                                        continue;
                                    case me:
                                        if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
                                            if (!n && J(d)) c = xe;
                                            else if ("" == d) {
                                                if (e.host = "", n) return;
                                                c = be
                                            } else {
                                                if (s = N(e, d)) return s;
                                                if ("localhost" == e.host && (e.host = ""), n) return;
                                                d = "", c = be
                                            }
                                            continue
                                        }
                                        d += a;
                                        break;
                                    case be:
                                        if (X(e)) {
                                            if (c = xe, "/" != a && "\\" != a) continue
                                        } else if (n || "?" != a)
                                            if (n || "#" != a) {
                                                if (a != r && (c = xe, "/" != a)) continue
                                            } else e.fragment = "", c = ke;
                                        else e.query = "", c = Ee;
                                        break;
                                    case xe:
                                        if (a == r || "/" == a || "\\" == a && X(e) || !n && ("?" == a || "#" == a)) {
                                            if (".." === (l = (l = d).toLowerCase()) || "%2e." === l || ".%2e" === l || "%2e%2e" === l ? (te(e), "/" == a || "\\" == a && X(e) || e.path.push("")) : ne(d) ? "/" == a || "\\" == a && X(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && J(d) && (e.host && (e.host = ""), d = d.charAt(0) + ":"), e.path.push(d)), d = "", "file" == e.scheme && (a == r || "?" == a || "#" == a))
                                                for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                                            "?" == a ? (e.query = "", c = Ee) : "#" == a && (e.fragment = "", c = ke)
                                        } else d += $(a, G);
                                        break;
                                    case we:
                                        "?" == a ? (e.query = "", c = Ee) : "#" == a ? (e.fragment = "", c = ke) : a != r && (e.path[0] += $(a, H));
                                        break;
                                    case Ee:
                                        n || "#" != a ? a != r && ("'" == a && X(e) ? e.query += "%27" : e.query += "#" == a ? "%23" : $(a, H)) : (e.fragment = "", c = ke);
                                        break;
                                    case ke:
                                        a != r && (e.fragment += $(a, Y))
                                }
                                p++
                            }
                        },
                        Se = function(e) {
                            var t, n, r = c(this, Se, "URL"),
                                i = arguments.length > 1 ? arguments[1] : void 0,
                                a = String(e),
                                u = E(r, {
                                    type: "URL"
                                });
                            if (void 0 !== i)
                                if (i instanceof Se) t = k(i);
                                else if (n = Ae(t = {}, String(i))) throw TypeError(n);
                            if (n = Ae(u, a, null, t)) throw TypeError(n);
                            var s = u.searchParams = new x,
                                l = w(s);
                            l.updateSearchParams(u.query), l.updateURL = function() {
                                u.query = String(s) || null
                            }, o || (r.href = Te.call(r), r.origin = Ce.call(r), r.protocol = Le.call(r), r.username = Re.call(r), r.password = Ie.call(r), r.host = Ue.call(r), r.hostname = Oe.call(r), r.port = _e.call(r), r.pathname = Me.call(r), r.search = ze.call(r), r.searchParams = Pe.call(r), r.hash = je.call(r))
                        },
                        Fe = Se.prototype,
                        Te = function() {
                            var e = k(this),
                                t = e.scheme,
                                n = e.username,
                                r = e.password,
                                i = e.host,
                                o = e.port,
                                a = e.path,
                                u = e.query,
                                s = e.fragment,
                                l = t + ":";
                            return null !== i ? (l += "//", K(e) && (l += n + (r ? ":" + r : "") + "@"), l += W(i), null !== o && (l += ":" + o)) : "file" == t && (l += "//"), l += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== u && (l += "?" + u), null !== s && (l += "#" + s), l
                        },
                        Ce = function() {
                            var e = k(this),
                                t = e.scheme,
                                n = e.port;
                            if ("blob" == t) try {
                                return new URL(t.path[0]).origin
                            } catch (e) {
                                return "null"
                            }
                            return "file" != t && X(e) ? t + "://" + W(e.host) + (null !== n ? ":" + n : "") : "null"
                        },
                        Le = function() {
                            return k(this).scheme + ":"
                        },
                        Re = function() {
                            return k(this).username
                        },
                        Ie = function() {
                            return k(this).password
                        },
                        Ue = function() {
                            var e = k(this),
                                t = e.host,
                                n = e.port;
                            return null === t ? "" : null === n ? W(t) : W(t) + ":" + n
                        },
                        Oe = function() {
                            var e = k(this).host;
                            return null === e ? "" : W(e)
                        },
                        _e = function() {
                            var e = k(this).port;
                            return null === e ? "" : String(e)
                        },
                        Me = function() {
                            var e = k(this),
                                t = e.path;
                            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
                        },
                        ze = function() {
                            var e = k(this).query;
                            return e ? "?" + e : ""
                        },
                        Pe = function() {
                            return k(this).searchParams
                        },
                        je = function() {
                            var e = k(this).fragment;
                            return e ? "#" + e : ""
                        },
                        De = function(e, t) {
                            return {
                                get: e,
                                set: t,
                                configurable: !0,
                                enumerable: !0
                            }
                        };
                    if (o && s(Fe, {
                            href: De(Te, (function(e) {
                                var t = k(this),
                                    n = String(e),
                                    r = Ae(t, n);
                                if (r) throw TypeError(r);
                                w(t.searchParams).updateSearchParams(t.query)
                            })),
                            origin: De(Ce),
                            protocol: De(Le, (function(e) {
                                var t = k(this);
                                Ae(t, String(e) + ":", re)
                            })),
                            username: De(Re, (function(e) {
                                var t = k(this),
                                    n = h(String(e));
                                if (!Z(t)) {
                                    t.username = "";
                                    for (var r = 0; r < n.length; r++) t.username += $(n[r], Q)
                                }
                            })),
                            password: De(Ie, (function(e) {
                                var t = k(this),
                                    n = h(String(e));
                                if (!Z(t)) {
                                    t.password = "";
                                    for (var r = 0; r < n.length; r++) t.password += $(n[r], Q)
                                }
                            })),
                            host: De(Ue, (function(e) {
                                var t = k(this);
                                t.cannotBeABaseURL || Ae(t, String(e), he)
                            })),
                            hostname: De(Oe, (function(e) {
                                var t = k(this);
                                t.cannotBeABaseURL || Ae(t, String(e), de)
                            })),
                            port: De(_e, (function(e) {
                                var t = k(this);
                                Z(t) || ("" == (e = String(e)) ? t.port = null : Ae(t, e, ve))
                            })),
                            pathname: De(Me, (function(e) {
                                var t = k(this);
                                t.cannotBeABaseURL || (t.path = [], Ae(t, e + "", be))
                            })),
                            search: De(ze, (function(e) {
                                var t = k(this);
                                "" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", Ae(t, e, Ee)), w(t.searchParams).updateSearchParams(t.query)
                            })),
                            searchParams: De(Pe),
                            hash: De(je, (function(e) {
                                var t = k(this);
                                "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", Ae(t, e, ke)) : t.fragment = null
                            }))
                        }), l(Fe, "toJSON", (function() {
                            return Te.call(this)
                        }), {
                            enumerable: !0
                        }), l(Fe, "toString", (function() {
                            return Te.call(this)
                        }), {
                            enumerable: !0
                        }), b) {
                        var Ne = b.createObjectURL,
                            Be = b.revokeObjectURL;
                        Ne && l(Se, "createObjectURL", (function(e) {
                            return Ne.apply(b, arguments)
                        })), Be && l(Se, "revokeObjectURL", (function(e) {
                            return Be.apply(b, arguments)
                        }))
                    }
                    y(Se, "URL"), i({
                        global: !0,
                        forced: !a,
                        sham: !o
                    }, {
                        URL: Se
                    })
                }
            },
            t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {
                exports: {}
            };
            return e[r](i, i.exports, n), i.exports
        }
        n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        };
        var r = {};
        return function() {
            "use strict";

            function e(e, n) {
                var r;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = function(e, n) {
                            if (e) {
                                if ("string" == typeof e) return t(e, n);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0
                            }
                        }(e)) || n && e && "number" == typeof e.length) {
                        r && (e = r);
                        var i = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, u = !0,
                    s = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return u = e.done, e
                    },
                    e: function(e) {
                        s = !0, a = e
                    },
                    f: function() {
                        try {
                            u || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function t(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            n.r(r), n.d(r, {
                Dropzone: function() {
                    return b
                },
                default: function() {
                    return A
                }
            }), n(2222), n(7327), n(2772), n(6992), n(1249), n(7042), n(561), n(8264), n(8309), n(489), n(1539), n(4916), n(9714), n(8783), n(4723), n(5306), n(3123), n(3210), n(2472), n(2990), n(8927), n(3105), n(5035), n(4345), n(7174), n(2846), n(4731), n(7209), n(6319), n(8867), n(7789), n(3739), n(9368), n(4483), n(2056), n(3462), n(678), n(7462), n(3824), n(5021), n(2974), n(5016), n(4747), n(3948), n(285);
            var o = function() {
                function t() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var n, r;
                return n = t, (r = [{
                    key: "on",
                    value: function(e, t) {
                        return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this
                    }
                }, {
                    key: "emit",
                    value: function(t) {
                        this._callbacks = this._callbacks || {};
                        for (var n = this._callbacks[t], r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                        if (n) {
                            var a, u = e(n, !0);
                            try {
                                for (u.s(); !(a = u.n()).done;) {
                                    var s = a.value;
                                    s.apply(this, i)
                                }
                            } catch (e) {
                                u.e(e)
                            } finally {
                                u.f()
                            }
                        }
                        return this.element && this.element.dispatchEvent(this.makeEvent("dropzone:" + t, {
                            args: i
                        })), this
                    }
                }, {
                    key: "makeEvent",
                    value: function(e, t) {
                        var n = {
                            bubbles: !0,
                            cancelable: !0,
                            detail: t
                        };
                        if ("function" == typeof window.CustomEvent) return new CustomEvent(e, n);
                        var r = document.createEvent("CustomEvent");
                        return r.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), r
                    }
                }, {
                    key: "off",
                    value: function(e, t) {
                        if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
                        var n = this._callbacks[e];
                        if (!n) return this;
                        if (1 === arguments.length) return delete this._callbacks[e], this;
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r];
                            if (i === t) {
                                n.splice(r, 1);
                                break
                            }
                        }
                        return this
                    }
                }]) && i(n.prototype, r), t
            }();

            function a(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return u(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    s = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        s = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                }
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var s = {
                url: null,
                method: "post",
                withCredentials: !1,
                timeout: null,
                parallelUploads: 2,
                uploadMultiple: !1,
                chunking: !1,
                forceChunking: !1,
                chunkSize: 2e6,
                parallelChunkUploads: !1,
                retryChunks: !1,
                retryChunksLimit: 3,
                maxFilesize: 256,
                paramName: "file",
                createImageThumbnails: !0,
                maxThumbnailFilesize: 10,
                thumbnailWidth: 120,
                thumbnailHeight: 120,
                thumbnailMethod: "crop",
                resizeWidth: null,
                resizeHeight: null,
                resizeMimeType: null,
                resizeQuality: .8,
                resizeMethod: "contain",
                filesizeBase: 1e3,
                maxFiles: null,
                headers: null,
                clickable: !0,
                ignoreHiddenFiles: !0,
                acceptedFiles: null,
                acceptedMimeTypes: null,
                autoProcessQueue: !0,
                autoQueue: !0,
                addRemoveLinks: !1,
                previewsContainer: null,
                disablePreviews: !1,
                hiddenInputContainer: "body",
                capture: null,
                renameFilename: null,
                renameFile: null,
                forceFallback: !1,
                dictDefaultMessage: "Drop files here to upload",
                dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                dictInvalidFileType: "You can't upload files of this type.",
                dictResponseError: "Server responded with {{statusCode}} code.",
                dictCancelUpload: "Cancel upload",
                dictUploadCanceled: "Upload canceled.",
                dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                dictRemoveFile: "Remove file",
                dictRemoveFileConfirmation: null,
                dictMaxFilesExceeded: "You can not upload any more files.",
                dictFileSizeUnits: {
                    tb: "TB",
                    gb: "GB",
                    mb: "MB",
                    kb: "KB",
                    b: "b"
                },
                init: function() {},
                params: function(e, t, n) {
                    if (n) return {
                        dzuuid: n.file.upload.uuid,
                        dzchunkindex: n.index,
                        dztotalfilesize: n.file.size,
                        dzchunksize: this.options.chunkSize,
                        dztotalchunkcount: n.file.upload.totalChunkCount,
                        dzchunkbyteoffset: n.index * this.options.chunkSize
                    }
                },
                accept: function(e, t) {
                    return t()
                },
                chunksUploaded: function(e, t) {
                    t()
                },
                fallback: function() {
                    var e;
                    this.element.className = "".concat(this.element.className, " dz-browser-not-supported");
                    var t, n = a(this.element.getElementsByTagName("div"), !0);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var r = t.value;
                            if (/(^| )dz-message($| )/.test(r.className)) {
                                e = r, r.className = "dz-message";
                                break
                            }
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    e || (e = b.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e));
                    var i = e.getElementsByTagName("span")[0];
                    return i && (null != i.textContent ? i.textContent = this.options.dictFallbackMessage : null != i.innerText && (i.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
                },
                resize: function(e, t, n, r) {
                    var i = {
                            srcX: 0,
                            srcY: 0,
                            srcWidth: e.width,
                            srcHeight: e.height
                        },
                        o = e.width / e.height;
                    null == t && null == n ? (t = i.srcWidth, n = i.srcHeight) : null == t ? t = n * o : null == n && (n = t / o);
                    var a = (t = Math.min(t, i.srcWidth)) / (n = Math.min(n, i.srcHeight));
                    if (i.srcWidth > t || i.srcHeight > n)
                        if ("crop" === r) o > a ? (i.srcHeight = e.height, i.srcWidth = i.srcHeight * a) : (i.srcWidth = e.width, i.srcHeight = i.srcWidth / a);
                        else {
                            if ("contain" !== r) throw new Error("Unknown resizeMethod '".concat(r, "'"));
                            o > a ? n = t / o : t = n * o
                        }
                    return i.srcX = (e.width - i.srcWidth) / 2, i.srcY = (e.height - i.srcHeight) / 2, i.trgWidth = t, i.trgHeight = n, i
                },
                transformFile: function(e, t) {
                    return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e)
                },
                previewTemplate: '<div class="dz-preview dz-file-preview"> <div class="dz-image"><img data-dz-thumbnail/></div> <div class="dz-details"> <div class="dz-size"><span data-dz-size></span></div> <div class="dz-filename"><span data-dz-name></span></div> </div> <div class="dz-progress"> <span class="dz-upload" data-dz-uploadprogress></span> </div> <div class="dz-error-message"><span data-dz-errormessage></span></div> <div class="dz-success-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Check</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path> </g> </svg> </div> <div class="dz-error-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Error</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475"> <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path> </g> </g> </svg> </div> </div> ',
                drop: function(e) {
                    return this.element.classList.remove("dz-drag-hover")
                },
                dragstart: function(e) {},
                dragend: function(e) {
                    return this.element.classList.remove("dz-drag-hover")
                },
                dragenter: function(e) {
                    return this.element.classList.add("dz-drag-hover")
                },
                dragover: function(e) {
                    return this.element.classList.add("dz-drag-hover")
                },
                dragleave: function(e) {
                    return this.element.classList.remove("dz-drag-hover")
                },
                paste: function(e) {},
                reset: function() {
                    return this.element.classList.remove("dz-started")
                },
                addedfile: function(e) {
                    var t = this;
                    if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer && !this.options.disablePreviews) {
                        e.previewElement = b.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement);
                        var n, r = a(e.previewElement.querySelectorAll("[data-dz-name]"), !0);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value;
                                i.textContent = e.name
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        var o, u = a(e.previewElement.querySelectorAll("[data-dz-size]"), !0);
                        try {
                            for (u.s(); !(o = u.n()).done;)(i = o.value).innerHTML = this.filesize(e.size)
                        } catch (e) {
                            u.e(e)
                        } finally {
                            u.f()
                        }
                        this.options.addRemoveLinks && (e._removeLink = b.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(this.options.dictRemoveFile, "</a>")), e.previewElement.appendChild(e._removeLink));
                        var s, l = function(n) {
                                return n.preventDefault(), n.stopPropagation(), e.status === b.UPLOADING ? b.confirm(t.options.dictCancelUploadConfirmation, (function() {
                                    return t.removeFile(e)
                                })) : t.options.dictRemoveFileConfirmation ? b.confirm(t.options.dictRemoveFileConfirmation, (function() {
                                    return t.removeFile(e)
                                })) : t.removeFile(e)
                            },
                            c = a(e.previewElement.querySelectorAll("[data-dz-remove]"), !0);
                        try {
                            for (c.s(); !(s = c.n()).done;) s.value.addEventListener("click", l)
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                    }
                },
                removedfile: function(e) {
                    return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass()
                },
                thumbnail: function(e, t) {
                    if (e.previewElement) {
                        e.previewElement.classList.remove("dz-file-preview");
                        var n, r = a(e.previewElement.querySelectorAll("[data-dz-thumbnail]"), !0);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value;
                                i.alt = e.name, i.src = t
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        return setTimeout((function() {
                            return e.previewElement.classList.add("dz-image-preview")
                        }), 1)
                    }
                },
                error: function(e, t) {
                    if (e.previewElement) {
                        e.previewElement.classList.add("dz-error"), "string" != typeof t && t.error && (t = t.error);
                        var n, r = a(e.previewElement.querySelectorAll("[data-dz-errormessage]"), !0);
                        try {
                            for (r.s(); !(n = r.n()).done;) n.value.textContent = t
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }
                },
                errormultiple: function() {},
                processing: function(e) {
                    if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.innerHTML = this.options.dictCancelUpload
                },
                processingmultiple: function() {},
                uploadprogress: function(e, t, n) {
                    if (e.previewElement) {
                        var r, i = a(e.previewElement.querySelectorAll("[data-dz-uploadprogress]"), !0);
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                var o = r.value;
                                "PROGRESS" === o.nodeName ? o.value = t : o.style.width = "".concat(t, "%")
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    }
                },
                totaluploadprogress: function() {},
                sending: function() {},
                sendingmultiple: function() {},
                success: function(e) {
                    if (e.previewElement) return e.previewElement.classList.add("dz-success")
                },
                successmultiple: function() {},
                canceled: function(e) {
                    return this.emit("error", e, this.options.dictUploadCanceled)
                },
                canceledmultiple: function() {},
                complete: function(e) {
                    if (e._removeLink && (e._removeLink.innerHTML = this.options.dictRemoveFile), e.previewElement) return e.previewElement.classList.add("dz-complete")
                },
                completemultiple: function() {},
                maxfilesexceeded: function() {},
                maxfilesreached: function() {},
                queuecomplete: function() {},
                addedfiles: function() {}
            };

            function l(e) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c(e, t) {
                var n;
                if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return f(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
                            }
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    u = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        u = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                }
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t, n) {
                return t && h(e.prototype, t), n && h(e, n), e
            }

            function v(e, t) {
                return (v = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function y(e, t) {
                return !t || "object" !== l(t) && "function" != typeof t ? g(e) : t
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function m(e) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && v(e, t)
                }(i, e);
                var t, n, r = (t = i, n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, r = m(t);
                    if (n) {
                        var i = m(this).constructor;
                        e = Reflect.construct(r, arguments, i)
                    } else e = r.apply(this, arguments);
                    return y(this, e)
                });

                function i(e, t) {
                    var n, o, a;
                    if (p(this, i), (n = r.call(this)).element = e, n.version = i.version, n.clickableElements = [], n.listeners = [], n.files = [], "string" == typeof n.element && (n.element = document.querySelector(n.element)), !n.element || null == n.element.nodeType) throw new Error("Invalid dropzone element.");
                    if (n.element.dropzone) throw new Error("Dropzone already attached.");
                    i.instances.push(g(n)), n.element.dropzone = g(n);
                    var u = null != (a = i.optionsForElement(n.element)) ? a : {};
                    if (n.options = i.extend({}, s, u, null != t ? t : {}), n.options.previewTemplate = n.options.previewTemplate.replace(/\n*/g, ""), n.options.forceFallback || !i.isBrowserSupported()) return y(n, n.options.fallback.call(g(n)));
                    if (null == n.options.url && (n.options.url = n.element.getAttribute("action")), !n.options.url) throw new Error("No URL provided.");
                    if (n.options.acceptedFiles && n.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                    if (n.options.uploadMultiple && n.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
                    return n.options.acceptedMimeTypes && (n.options.acceptedFiles = n.options.acceptedMimeTypes, delete n.options.acceptedMimeTypes), null != n.options.renameFilename && (n.options.renameFile = function(e) {
                        return n.options.renameFilename.call(g(n), e.name, e)
                    }), "string" == typeof n.options.method && (n.options.method = n.options.method.toUpperCase()), (o = n.getExistingFallback()) && o.parentNode && o.parentNode.removeChild(o), !1 !== n.options.previewsContainer && (n.options.previewsContainer ? n.previewsContainer = i.getElement(n.options.previewsContainer, "previewsContainer") : n.previewsContainer = n.element), n.options.clickable && (!0 === n.options.clickable ? n.clickableElements = [n.element] : n.clickableElements = i.getElements(n.options.clickable, "clickable")), n.init(), n
                }
                return d(i, [{
                    key: "getAcceptedFiles",
                    value: function() {
                        return this.files.filter((function(e) {
                            return e.accepted
                        })).map((function(e) {
                            return e
                        }))
                    }
                }, {
                    key: "getRejectedFiles",
                    value: function() {
                        return this.files.filter((function(e) {
                            return !e.accepted
                        })).map((function(e) {
                            return e
                        }))
                    }
                }, {
                    key: "getFilesWithStatus",
                    value: function(e) {
                        return this.files.filter((function(t) {
                            return t.status === e
                        })).map((function(e) {
                            return e
                        }))
                    }
                }, {
                    key: "getQueuedFiles",
                    value: function() {
                        return this.getFilesWithStatus(i.QUEUED)
                    }
                }, {
                    key: "getUploadingFiles",
                    value: function() {
                        return this.getFilesWithStatus(i.UPLOADING)
                    }
                }, {
                    key: "getAddedFiles",
                    value: function() {
                        return this.getFilesWithStatus(i.ADDED)
                    }
                }, {
                    key: "getActiveFiles",
                    value: function() {
                        return this.files.filter((function(e) {
                            return e.status === i.UPLOADING || e.status === i.QUEUED
                        })).map((function(e) {
                            return e
                        }))
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = this;
                        "form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(i.createElement('<div class="dz-default dz-message"><button class="dz-button" type="button">'.concat(this.options.dictDefaultMessage, "</button></div>"))), this.clickableElements.length && function t() {
                            e.hiddenFileInput && e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput), e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), (null === e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), e.hiddenFileInput.className = "dz-hidden-input", null !== e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), null !== e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), e.hiddenFileInput.setAttribute("tabindex", "-1"), e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", e.hiddenFileInput.style.width = "0", i.getElement(e.options.hiddenInputContainer, "hiddenInputContainer").appendChild(e.hiddenFileInput), e.hiddenFileInput.addEventListener("change", (function() {
                                var n = e.hiddenFileInput.files;
                                if (n.length) {
                                    var r, i = c(n, !0);
                                    try {
                                        for (i.s(); !(r = i.n()).done;) {
                                            var o = r.value;
                                            e.addFile(o)
                                        }
                                    } catch (e) {
                                        i.e(e)
                                    } finally {
                                        i.f()
                                    }
                                }
                                e.emit("addedfiles", n), t()
                            }))
                        }(), this.URL = null !== window.URL ? window.URL : window.webkitURL;
                        var t, n = c(this.events, !0);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                this.on(r, this.options[r])
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        this.on("uploadprogress", (function() {
                            return e.updateTotalUploadProgress()
                        })), this.on("removedfile", (function() {
                            return e.updateTotalUploadProgress()
                        })), this.on("canceled", (function(t) {
                            return e.emit("complete", t)
                        })), this.on("complete", (function(t) {
                            if (0 === e.getAddedFiles().length && 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length) return setTimeout((function() {
                                return e.emit("queuecomplete")
                            }), 0)
                        }));
                        var o = function(e) {
                            if (function(e) {
                                    if (e.dataTransfer.types)
                                        for (var t = 0; t < e.dataTransfer.types.length; t++)
                                            if ("Files" === e.dataTransfer.types[t]) return !0;
                                    return !1
                                }(e)) return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1
                        };
                        return this.listeners = [{
                            element: this.element,
                            events: {
                                dragstart: function(t) {
                                    return e.emit("dragstart", t)
                                },
                                dragenter: function(t) {
                                    return o(t), e.emit("dragenter", t)
                                },
                                dragover: function(t) {
                                    var n;
                                    try {
                                        n = t.dataTransfer.effectAllowed
                                    } catch (e) {}
                                    return t.dataTransfer.dropEffect = "move" === n || "linkMove" === n ? "move" : "copy", o(t), e.emit("dragover", t)
                                },
                                dragleave: function(t) {
                                    return e.emit("dragleave", t)
                                },
                                drop: function(t) {
                                    return o(t), e.drop(t)
                                },
                                dragend: function(t) {
                                    return e.emit("dragend", t)
                                }
                            }
                        }], this.clickableElements.forEach((function(t) {
                            return e.listeners.push({
                                element: t,
                                events: {
                                    click: function(n) {
                                        return (t !== e.element || n.target === e.element || i.elementInside(n.target, e.element.querySelector(".dz-message"))) && e.hiddenFileInput.click(), !0
                                    }
                                }
                            })
                        })), this.enable(), this.options.init.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        return this.disable(), this.removeAllFiles(!0), (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, i.instances.splice(i.instances.indexOf(this), 1)
                    }
                }, {
                    key: "updateTotalUploadProgress",
                    value: function() {
                        var e, t = 0,
                            n = 0;
                        if (this.getActiveFiles().length) {
                            var r, i = c(this.getActiveFiles(), !0);
                            try {
                                for (i.s(); !(r = i.n()).done;) {
                                    var o = r.value;
                                    t += o.upload.bytesSent, n += o.upload.total
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                            e = 100 * t / n
                        } else e = 100;
                        return this.emit("totaluploadprogress", e, n, t)
                    }
                }, {
                    key: "_getParamName",
                    value: function(e) {
                        return "function" == typeof this.options.paramName ? this.options.paramName(e) : "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(e, "]") : "")
                    }
                }, {
                    key: "_renameFile",
                    value: function(e) {
                        return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e)
                    }
                }, {
                    key: "getFallbackForm",
                    value: function() {
                        var e, t;
                        if (e = this.getExistingFallback()) return e;
                        var n = '<div class="dz-fallback">';
                        this.options.dictFallbackText && (n += "<p>".concat(this.options.dictFallbackText, "</p>")), n += '<input type="file" name="'.concat(this._getParamName(0), '" ').concat(this.options.uploadMultiple ? 'multiple="multiple"' : void 0, ' /><input type="submit" value="Upload!"></div>');
                        var r = i.createElement(n);
                        return "FORM" !== this.element.tagName ? (t = i.createElement('<form action="'.concat(this.options.url, '" enctype="multipart/form-data" method="').concat(this.options.method, '"></form>'))).appendChild(r) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != t ? t : r
                    }
                }, {
                    key: "getExistingFallback",
                    value: function() {
                        for (var e = function(e) {
                                var t, n = c(e, !0);
                                try {
                                    for (n.s(); !(t = n.n()).done;) {
                                        var r = t.value;
                                        if (/(^| )fallback($| )/.test(r.className)) return r
                                    }
                                } catch (e) {
                                    n.e(e)
                                } finally {
                                    n.f()
                                }
                            }, t = 0, n = ["div", "form"]; t < n.length; t++) {
                            var r, i = n[t];
                            if (r = e(this.element.getElementsByTagName(i))) return r
                        }
                    }
                }, {
                    key: "setupEventListeners",
                    value: function() {
                        return this.listeners.map((function(e) {
                            return function() {
                                var t = [];
                                for (var n in e.events) {
                                    var r = e.events[n];
                                    t.push(e.element.addEventListener(n, r, !1))
                                }
                                return t
                            }()
                        }))
                    }
                }, {
                    key: "removeEventListeners",
                    value: function() {
                        return this.listeners.map((function(e) {
                            return function() {
                                var t = [];
                                for (var n in e.events) {
                                    var r = e.events[n];
                                    t.push(e.element.removeEventListener(n, r, !1))
                                }
                                return t
                            }()
                        }))
                    }
                }, {
                    key: "disable",
                    value: function() {
                        var e = this;
                        return this.clickableElements.forEach((function(e) {
                            return e.classList.remove("dz-clickable")
                        })), this.removeEventListeners(), this.disabled = !0, this.files.map((function(t) {
                            return e.cancelUpload(t)
                        }))
                    }
                }, {
                    key: "enable",
                    value: function() {
                        return delete this.disabled, this.clickableElements.forEach((function(e) {
                            return e.classList.add("dz-clickable")
                        })), this.setupEventListeners()
                    }
                }, {
                    key: "filesize",
                    value: function(e) {
                        var t = 0,
                            n = "b";
                        if (e > 0) {
                            for (var r = ["tb", "gb", "mb", "kb", "b"], i = 0; i < r.length; i++) {
                                var o = r[i];
                                if (e >= Math.pow(this.options.filesizeBase, 4 - i) / 10) {
                                    t = e / Math.pow(this.options.filesizeBase, 4 - i), n = o;
                                    break
                                }
                            }
                            t = Math.round(10 * t) / 10
                        }
                        return "<strong>".concat(t, "</strong> ").concat(this.options.dictFileSizeUnits[n])
                    }
                }, {
                    key: "_updateMaxFilesReachedClass",
                    value: function() {
                        return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
                    }
                }, {
                    key: "drop",
                    value: function(e) {
                        if (e.dataTransfer) {
                            this.emit("drop", e);
                            for (var t = [], n = 0; n < e.dataTransfer.files.length; n++) t[n] = e.dataTransfer.files[n];
                            if (t.length) {
                                var r = e.dataTransfer.items;
                                r && r.length && null != r[0].webkitGetAsEntry ? this._addFilesFromItems(r) : this.handleFiles(t)
                            }
                            this.emit("addedfiles", t)
                        }
                    }
                }, {
                    key: "paste",
                    value: function(e) {
                        if (null != (null != (t = null != e ? e.clipboardData : void 0) ? function(e) {
                                return e.items
                            }(t) : void 0)) {
                            var t;
                            this.emit("paste", e);
                            var n = e.clipboardData.items;
                            return n.length ? this._addFilesFromItems(n) : void 0
                        }
                    }
                }, {
                    key: "handleFiles",
                    value: function(e) {
                        var t, n = c(e, !0);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                this.addFile(r)
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }
                }, {
                    key: "_addFilesFromItems",
                    value: function(e) {
                        var t = this;
                        return function() {
                            var n, r = [],
                                i = c(e, !0);
                            try {
                                for (i.s(); !(n = i.n()).done;) {
                                    var o, a = n.value;
                                    null != a.webkitGetAsEntry && (o = a.webkitGetAsEntry()) ? o.isFile ? r.push(t.addFile(a.getAsFile())) : o.isDirectory ? r.push(t._addFilesFromDirectory(o, o.name)) : r.push(void 0) : null == a.getAsFile || null != a.kind && "file" !== a.kind ? r.push(void 0) : r.push(t.addFile(a.getAsFile()))
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                            return r
                        }()
                    }
                }, {
                    key: "_addFilesFromDirectory",
                    value: function(e, t) {
                        var n = this,
                            r = e.createReader(),
                            i = function(e) {
                                return "log", n = function(t) {
                                    return t.log(e)
                                }, null != (t = console) && "function" == typeof t.log ? n(t) : void 0;
                                var t, n
                            };
                        return function e() {
                            return r.readEntries((function(r) {
                                if (r.length > 0) {
                                    var i, o = c(r, !0);
                                    try {
                                        for (o.s(); !(i = o.n()).done;) {
                                            var a = i.value;
                                            a.isFile ? a.file((function(e) {
                                                if (!n.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1)) return e.fullPath = "".concat(t, "/").concat(e.name), n.addFile(e)
                                            })) : a.isDirectory && n._addFilesFromDirectory(a, "".concat(t, "/").concat(a.name))
                                        }
                                    } catch (e) {
                                        o.e(e)
                                    } finally {
                                        o.f()
                                    }
                                    e()
                                }
                                return null
                            }), i)
                        }()
                    }
                }, {
                    key: "accept",
                    value: function(e, t) {
                        this.options.maxFilesize && e.size > 1024 * this.options.maxFilesize * 1024 ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : i.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType)
                    }
                }, {
                    key: "addFile",
                    value: function(e) {
                        var t = this;
                        e.upload = {
                            uuid: i.uuidv4(),
                            progress: 0,
                            total: e.size,
                            bytesSent: 0,
                            filename: this._renameFile(e)
                        }, this.files.push(e), e.status = i.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, (function(n) {
                            n ? (e.accepted = !1, t._errorProcessing([e], n)) : (e.accepted = !0, t.options.autoQueue && t.enqueueFile(e)), t._updateMaxFilesReachedClass()
                        }))
                    }
                }, {
                    key: "enqueueFiles",
                    value: function(e) {
                        var t, n = c(e, !0);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                this.enqueueFile(r)
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        return null
                    }
                }, {
                    key: "enqueueFile",
                    value: function(e) {
                        var t = this;
                        if (e.status !== i.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                        if (e.status = i.QUEUED, this.options.autoProcessQueue) return setTimeout((function() {
                            return t.processQueue()
                        }), 0)
                    }
                }, {
                    key: "_enqueueThumbnail",
                    value: function(e) {
                        var t = this;
                        if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), setTimeout((function() {
                            return t._processThumbnailQueue()
                        }), 0)
                    }
                }, {
                    key: "_processThumbnailQueue",
                    value: function() {
                        var e = this;
                        if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) {
                            this._processingThumbnail = !0;
                            var t = this._thumbnailQueue.shift();
                            return this.createThumbnail(t, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, (function(n) {
                                return e.emit("thumbnail", t, n), e._processingThumbnail = !1, e._processThumbnailQueue()
                            }))
                        }
                    }
                }, {
                    key: "removeFile",
                    value: function(e) {
                        if (e.status === i.UPLOADING && this.cancelUpload(e), this.files = x(this.files, e), this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset")
                    }
                }, {
                    key: "removeAllFiles",
                    value: function(e) {
                        null == e && (e = !1);
                        var t, n = c(this.files.slice(), !0);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                (r.status !== i.UPLOADING || e) && this.removeFile(r)
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        return null
                    }
                }, {
                    key: "resizeImage",
                    value: function(e, t, n, r, o) {
                        var a = this;
                        return this.createThumbnail(e, t, n, r, !0, (function(t, n) {
                            if (null == n) return o(e);
                            var r = a.options.resizeMimeType;
                            null == r && (r = e.type);
                            var u = n.toDataURL(r, a.options.resizeQuality);
                            return "image/jpeg" !== r && "image/jpg" !== r || (u = k.restore(e.dataURL, u)), o(i.dataURItoBlob(u))
                        }))
                    }
                }, {
                    key: "createThumbnail",
                    value: function(e, t, n, r, i, o) {
                        var a = this,
                            u = new FileReader;
                        u.onload = function() {
                            e.dataURL = u.result, "image/svg+xml" !== e.type ? a.createThumbnailFromUrl(e, t, n, r, i, o) : null != o && o(u.result)
                        }, u.readAsDataURL(e)
                    }
                }, {
                    key: "displayExistingFile",
                    value: function(e, t, n, r) {
                        var i = this,
                            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                        if (this.emit("addedfile", e), this.emit("complete", e), o) {
                            var a = function(t) {
                                i.emit("thumbnail", e, t), n && n()
                            };
                            e.dataURL = t, this.createThumbnailFromUrl(e, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, a, r)
                        } else this.emit("thumbnail", e, t), n && n()
                    }
                }, {
                    key: "createThumbnailFromUrl",
                    value: function(e, t, n, r, i, o, a) {
                        var u = this,
                            s = document.createElement("img");
                        return a && (s.crossOrigin = a), i = "from-image" != getComputedStyle(document.body).imageOrientation && i, s.onload = function() {
                            var a = function(e) {
                                return e(1)
                            };
                            return "undefined" != typeof EXIF && null !== EXIF && i && (a = function(e) {
                                return EXIF.getData(s, (function() {
                                    return e(EXIF.getTag(this, "Orientation"))
                                }))
                            }), a((function(i) {
                                e.width = s.width, e.height = s.height;
                                var a = u.options.resize.call(u, e, t, n, r),
                                    l = document.createElement("canvas"),
                                    c = l.getContext("2d");
                                switch (l.width = a.trgWidth, l.height = a.trgHeight, i > 4 && (l.width = a.trgHeight, l.height = a.trgWidth), i) {
                                    case 2:
                                        c.translate(l.width, 0), c.scale(-1, 1);
                                        break;
                                    case 3:
                                        c.translate(l.width, l.height), c.rotate(Math.PI);
                                        break;
                                    case 4:
                                        c.translate(0, l.height), c.scale(1, -1);
                                        break;
                                    case 5:
                                        c.rotate(.5 * Math.PI), c.scale(1, -1);
                                        break;
                                    case 6:
                                        c.rotate(.5 * Math.PI), c.translate(0, -l.width);
                                        break;
                                    case 7:
                                        c.rotate(.5 * Math.PI), c.translate(l.height, -l.width), c.scale(-1, 1);
                                        break;
                                    case 8:
                                        c.rotate(-.5 * Math.PI), c.translate(-l.height, 0)
                                }
                                E(c, s, null != a.srcX ? a.srcX : 0, null != a.srcY ? a.srcY : 0, a.srcWidth, a.srcHeight, null != a.trgX ? a.trgX : 0, null != a.trgY ? a.trgY : 0, a.trgWidth, a.trgHeight);
                                var f = l.toDataURL("image/png");
                                if (null != o) return o(f, l)
                            }))
                        }, null != o && (s.onerror = o), s.src = e.dataURL
                    }
                }, {
                    key: "processQueue",
                    value: function() {
                        var e = this.options.parallelUploads,
                            t = this.getUploadingFiles().length,
                            n = t;
                        if (!(t >= e)) {
                            var r = this.getQueuedFiles();
                            if (r.length > 0) {
                                if (this.options.uploadMultiple) return this.processFiles(r.slice(0, e - t));
                                for (; n < e;) {
                                    if (!r.length) return;
                                    this.processFile(r.shift()), n++
                                }
                            }
                        }
                    }
                }, {
                    key: "processFile",
                    value: function(e) {
                        return this.processFiles([e])
                    }
                }, {
                    key: "processFiles",
                    value: function(e) {
                        var t, n = c(e, !0);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                r.processing = !0, r.status = i.UPLOADING, this.emit("processing", r)
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e)
                    }
                }, {
                    key: "_getFilesWithXhr",
                    value: function(e) {
                        return this.files.filter((function(t) {
                            return t.xhr === e
                        })).map((function(e) {
                            return e
                        }))
                    }
                }, {
                    key: "cancelUpload",
                    value: function(e) {
                        if (e.status === i.UPLOADING) {
                            var t, n = this._getFilesWithXhr(e.xhr),
                                r = c(n, !0);
                            try {
                                for (r.s(); !(t = r.n()).done;) t.value.status = i.CANCELED
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            void 0 !== e.xhr && e.xhr.abort();
                            var o, a = c(n, !0);
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var u = o.value;
                                    this.emit("canceled", u)
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            this.options.uploadMultiple && this.emit("canceledmultiple", n)
                        } else e.status !== i.ADDED && e.status !== i.QUEUED || (e.status = i.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
                        if (this.options.autoProcessQueue) return this.processQueue()
                    }
                }, {
                    key: "resolveOption",
                    value: function(e) {
                        if ("function" == typeof e) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            return e.apply(this, n)
                        }
                        return e
                    }
                }, {
                    key: "uploadFile",
                    value: function(e) {
                        return this.uploadFiles([e])
                    }
                }, {
                    key: "uploadFiles",
                    value: function(e) {
                        var t = this;
                        this._transformFiles(e, (function(n) {
                            if (t.options.chunking) {
                                var r = n[0];
                                e[0].upload.chunked = t.options.chunking && (t.options.forceChunking || r.size > t.options.chunkSize), e[0].upload.totalChunkCount = Math.ceil(r.size / t.options.chunkSize)
                            }
                            if (e[0].upload.chunked) {
                                var o = e[0],
                                    a = n[0];
                                o.upload.chunks = [];
                                var u = function() {
                                    for (var n = 0; void 0 !== o.upload.chunks[n];) n++;
                                    if (!(n >= o.upload.totalChunkCount)) {
                                        var r = n * t.options.chunkSize,
                                            u = Math.min(r + t.options.chunkSize, a.size),
                                            s = {
                                                name: t._getParamName(0),
                                                data: a.webkitSlice ? a.webkitSlice(r, u) : a.slice(r, u),
                                                filename: o.upload.filename,
                                                chunkIndex: n
                                            };
                                        o.upload.chunks[n] = {
                                            file: o,
                                            index: n,
                                            dataBlock: s,
                                            status: i.UPLOADING,
                                            progress: 0,
                                            retries: 0
                                        }, t._uploadData(e, [s])
                                    }
                                };
                                if (o.upload.finishedChunkUpload = function(n, r) {
                                        var a = !0;
                                        n.status = i.SUCCESS, n.dataBlock = null, n.xhr = null;
                                        for (var s = 0; s < o.upload.totalChunkCount; s++) {
                                            if (void 0 === o.upload.chunks[s]) return u();
                                            o.upload.chunks[s].status !== i.SUCCESS && (a = !1)
                                        }
                                        a && t.options.chunksUploaded(o, (function() {
                                            t._finished(e, r, null)
                                        }))
                                    }, t.options.parallelChunkUploads)
                                    for (var s = 0; s < o.upload.totalChunkCount; s++) u();
                                else u()
                            } else {
                                for (var l = [], c = 0; c < e.length; c++) l[c] = {
                                    name: t._getParamName(c),
                                    data: n[c],
                                    filename: e[c].upload.filename
                                };
                                t._uploadData(e, l)
                            }
                        }))
                    }
                }, {
                    key: "_getChunk",
                    value: function(e, t) {
                        for (var n = 0; n < e.upload.totalChunkCount; n++)
                            if (void 0 !== e.upload.chunks[n] && e.upload.chunks[n].xhr === t) return e.upload.chunks[n]
                    }
                }, {
                    key: "_uploadData",
                    value: function(e, t) {
                        var n, r = this,
                            o = new XMLHttpRequest,
                            a = c(e, !0);
                        try {
                            for (a.s(); !(n = a.n()).done;) n.value.xhr = o
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        e[0].upload.chunked && (e[0].upload.chunks[t[0].chunkIndex].xhr = o);
                        var u = this.resolveOption(this.options.method, e),
                            s = this.resolveOption(this.options.url, e);
                        o.open(u, s, !0), this.resolveOption(this.options.timeout, e) && (o.timeout = this.resolveOption(this.options.timeout, e)), o.withCredentials = !!this.options.withCredentials, o.onload = function(t) {
                            r._finishedUploading(e, o, t)
                        }, o.ontimeout = function() {
                            r._handleUploadError(e, o, "Request timedout after ".concat(r.options.timeout / 1e3, " seconds"))
                        }, o.onerror = function() {
                            r._handleUploadError(e, o)
                        }, (null != o.upload ? o.upload : o).onprogress = function(t) {
                            return r._updateFilesUploadProgress(e, o, t)
                        };
                        var l = {
                            Accept: "application/json",
                            "Cache-Control": "no-cache",
                            "X-Requested-With": "XMLHttpRequest"
                        };
                        for (var f in this.options.headers && i.extend(l, this.options.headers), l) {
                            var p = l[f];
                            p && o.setRequestHeader(f, p)
                        }
                        var h = new FormData;
                        if (this.options.params) {
                            var d = this.options.params;
                            for (var v in "function" == typeof d && (d = d.call(this, e, o, e[0].upload.chunked ? this._getChunk(e[0], o) : null)), d) {
                                var y = d[v];
                                if (Array.isArray(y))
                                    for (var g = 0; g < y.length; g++) h.append(v, y[g]);
                                else h.append(v, y)
                            }
                        }
                        var m, b = c(e, !0);
                        try {
                            for (b.s(); !(m = b.n()).done;) {
                                var x = m.value;
                                this.emit("sending", x, o, h)
                            }
                        } catch (e) {
                            b.e(e)
                        } finally {
                            b.f()
                        }
                        this.options.uploadMultiple && this.emit("sendingmultiple", e, o, h), this._addFormElementData(h);
                        for (var w = 0; w < t.length; w++) {
                            var E = t[w];
                            h.append(E.name, E.data, E.filename)
                        }
                        this.submitRequest(o, h, e)
                    }
                }, {
                    key: "_transformFiles",
                    value: function(e, t) {
                        for (var n = this, r = [], i = 0, o = function(o) {
                                n.options.transformFile.call(n, e[o], (function(n) {
                                    r[o] = n, ++i === e.length && t(r)
                                }))
                            }, a = 0; a < e.length; a++) o(a)
                    }
                }, {
                    key: "_addFormElementData",
                    value: function(e) {
                        if ("FORM" === this.element.tagName) {
                            var t, n = c(this.element.querySelectorAll("input, textarea, select, button"), !0);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value,
                                        i = r.getAttribute("name"),
                                        o = r.getAttribute("type");
                                    if (o && (o = o.toLowerCase()), null != i)
                                        if ("SELECT" === r.tagName && r.hasAttribute("multiple")) {
                                            var a, u = c(r.options, !0);
                                            try {
                                                for (u.s(); !(a = u.n()).done;) {
                                                    var s = a.value;
                                                    s.selected && e.append(i, s.value)
                                                }
                                            } catch (e) {
                                                u.e(e)
                                            } finally {
                                                u.f()
                                            }
                                        } else(!o || "checkbox" !== o && "radio" !== o || r.checked) && e.append(i, r.value)
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                        }
                    }
                }, {
                    key: "_updateFilesUploadProgress",
                    value: function(e, t, n) {
                        if (e[0].upload.chunked) {
                            var r = e[0],
                                i = this._getChunk(r, t);
                            n ? (i.progress = 100 * n.loaded / n.total, i.total = n.total, i.bytesSent = n.loaded) : (i.progress = 100, i.bytesSent = i.total), r.upload.progress = 0, r.upload.total = 0, r.upload.bytesSent = 0;
                            for (var o = 0; o < r.upload.totalChunkCount; o++) r.upload.chunks[o] && void 0 !== r.upload.chunks[o].progress && (r.upload.progress += r.upload.chunks[o].progress, r.upload.total += r.upload.chunks[o].total, r.upload.bytesSent += r.upload.chunks[o].bytesSent);
                            r.upload.progress = r.upload.progress / r.upload.totalChunkCount, this.emit("uploadprogress", r, r.upload.progress, r.upload.bytesSent)
                        } else {
                            var a, u = c(e, !0);
                            try {
                                for (u.s(); !(a = u.n()).done;) {
                                    var s = a.value;
                                    s.upload.total && s.upload.bytesSent && s.upload.bytesSent == s.upload.total || (n ? (s.upload.progress = 100 * n.loaded / n.total, s.upload.total = n.total, s.upload.bytesSent = n.loaded) : (s.upload.progress = 100, s.upload.bytesSent = s.upload.total), this.emit("uploadprogress", s, s.upload.progress, s.upload.bytesSent))
                                }
                            } catch (e) {
                                u.e(e)
                            } finally {
                                u.f()
                            }
                        }
                    }
                }, {
                    key: "_finishedUploading",
                    value: function(e, t, n) {
                        var r;
                        if (e[0].status !== i.CANCELED && 4 === t.readyState) {
                            if ("arraybuffer" !== t.responseType && "blob" !== t.responseType && (r = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json"))) try {
                                r = JSON.parse(r)
                            } catch (e) {
                                n = e, r = "Invalid JSON response from server."
                            }
                            this._updateFilesUploadProgress(e, t), 200 <= t.status && t.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t), r) : this._finished(e, r, n) : this._handleUploadError(e, t, r)
                        }
                    }
                }, {
                    key: "_handleUploadError",
                    value: function(e, t, n) {
                        if (e[0].status !== i.CANCELED) {
                            if (e[0].upload.chunked && this.options.retryChunks) {
                                var r = this._getChunk(e[0], t);
                                if (r.retries++ < this.options.retryChunksLimit) return void this._uploadData(e, [r.dataBlock]);
                                console.warn("Retried this chunk too often. Giving up.")
                            }
                            this._errorProcessing(e, n || this.options.dictResponseError.replace("{{statusCode}}", t.status), t)
                        }
                    }
                }, {
                    key: "submitRequest",
                    value: function(e, t, n) {
                        1 == e.readyState ? e.send(t) : console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.")
                    }
                }, {
                    key: "_finished",
                    value: function(e, t, n) {
                        var r, o = c(e, !0);
                        try {
                            for (o.s(); !(r = o.n()).done;) {
                                var a = r.value;
                                a.status = i.SUCCESS, this.emit("success", a, t, n), this.emit("complete", a)
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        if (this.options.uploadMultiple && (this.emit("successmultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
                    }
                }, {
                    key: "_errorProcessing",
                    value: function(e, t, n) {
                        var r, o = c(e, !0);
                        try {
                            for (o.s(); !(r = o.n()).done;) {
                                var a = r.value;
                                a.status = i.ERROR, this.emit("error", a, t, n), this.emit("complete", a)
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        if (this.options.uploadMultiple && (this.emit("errormultiple", e, t, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
                    }
                }], [{
                    key: "initClass",
                    value: function() {
                        this.prototype.Emitter = o, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1
                    }
                }, {
                    key: "extend",
                    value: function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        for (var i = 0, o = n; i < o.length; i++) {
                            var a = o[i];
                            for (var u in a) {
                                var s = a[u];
                                e[u] = s
                            }
                        }
                        return e
                    }
                }, {
                    key: "uuidv4",
                    value: function() {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                            var t = 16 * Math.random() | 0;
                            return ("x" === e ? t : 3 & t | 8).toString(16)
                        }))
                    }
                }]), i
            }(o);
            b.initClass(), b.version = "5.9.3", b.options = {}, b.optionsForElement = function(e) {
                return e.getAttribute("id") ? b.options[w(e.getAttribute("id"))] : void 0
            }, b.instances = [], b.forElement = function(e) {
                if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
                return e.dropzone
            }, b.autoDiscover = !0, b.discover = function() {
                var e;
                if (document.querySelectorAll) e = document.querySelectorAll(".dropzone");
                else {
                    e = [];
                    var t = function(t) {
                        return function() {
                            var n, r = [],
                                i = c(t, !0);
                            try {
                                for (i.s(); !(n = i.n()).done;) {
                                    var o = n.value;
                                    /(^| )dropzone($| )/.test(o.className) ? r.push(e.push(o)) : r.push(void 0)
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                            return r
                        }()
                    };
                    t(document.getElementsByTagName("div")), t(document.getElementsByTagName("form"))
                }
                return function() {
                    var t, n = [],
                        r = c(e, !0);
                    try {
                        for (r.s(); !(t = r.n()).done;) {
                            var i = t.value;
                            !1 !== b.optionsForElement(i) ? n.push(new b(i)) : n.push(void 0)
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    return n
                }()
            }, b.blockedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i], b.isBrowserSupported = function() {
                var e = !0;
                if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                    if ("classList" in document.createElement("a")) {
                        void 0 !== b.blacklistedBrowsers && (b.blockedBrowsers = b.blacklistedBrowsers);
                        var t, n = c(b.blockedBrowsers, !0);
                        try {
                            for (n.s(); !(t = n.n()).done;) t.value.test(navigator.userAgent) && (e = !1)
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    } else e = !1;
                else e = !1;
                return e
            }, b.dataURItoBlob = function(e) {
                for (var t = atob(e.split(",")[1]), n = e.split(",")[0].split(":")[1].split(";")[0], r = new ArrayBuffer(t.length), i = new Uint8Array(r), o = 0, a = t.length, u = 0 <= a; u ? o <= a : o >= a; u ? o++ : o--) i[o] = t.charCodeAt(o);
                return new Blob([r], {
                    type: n
                })
            };
            var x = function(e, t) {
                    return e.filter((function(e) {
                        return e !== t
                    })).map((function(e) {
                        return e
                    }))
                },
                w = function(e) {
                    return e.replace(/[\-_](\w)/g, (function(e) {
                        return e.charAt(1).toUpperCase()
                    }))
                };
            b.createElement = function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.childNodes[0]
            }, b.elementInside = function(e, t) {
                if (e === t) return !0;
                for (; e = e.parentNode;)
                    if (e === t) return !0;
                return !1
            }, b.getElement = function(e, t) {
                var n;
                if ("string" == typeof e ? n = document.querySelector(e) : null != e.nodeType && (n = e), null == n) throw new Error("Invalid `".concat(t, "` option provided. Please provide a CSS selector or a plain HTML element."));
                return n
            }, b.getElements = function(e, t) {
                var n, r;
                if (e instanceof Array) {
                    r = [];
                    try {
                        var i, o = c(e, !0);
                        try {
                            for (o.s(); !(i = o.n()).done;) n = i.value, r.push(this.getElement(n, t))
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                    } catch (e) {
                        r = null
                    }
                } else if ("string" == typeof e) {
                    r = [];
                    var a, u = c(document.querySelectorAll(e), !0);
                    try {
                        for (u.s(); !(a = u.n()).done;) n = a.value, r.push(n)
                    } catch (e) {
                        u.e(e)
                    } finally {
                        u.f()
                    }
                } else null != e.nodeType && (r = [e]);
                if (null == r || !r.length) throw new Error("Invalid `".concat(t, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
                return r
            }, b.confirm = function(e, t, n) {
                return window.confirm(e) ? t() : null != n ? n() : void 0
            }, b.isValidFile = function(e, t) {
                if (!t) return !0;
                t = t.split(",");
                var n, r = e.type,
                    i = r.replace(/\/.*$/, ""),
                    o = c(t, !0);
                try {
                    for (o.s(); !(n = o.n()).done;) {
                        var a = n.value;
                        if ("." === (a = a.trim()).charAt(0)) {
                            if (-1 !== e.name.toLowerCase().indexOf(a.toLowerCase(), e.name.length - a.length)) return !0
                        } else if (/\/\*$/.test(a)) {
                            if (i === a.replace(/\/.*$/, "")) return !0
                        } else if (r === a) return !0
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return !1
            }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(e) {
                return this.each((function() {
                    return new b(this, e)
                }))
            }), b.ADDED = "added", b.QUEUED = "queued", b.ACCEPTED = b.QUEUED, b.UPLOADING = "uploading", b.PROCESSING = b.UPLOADING, b.CANCELED = "canceled", b.ERROR = "error", b.SUCCESS = "success";
            var E = function(e, t, n, r, i, o, a, u, s, l) {
                    var c = function(e) {
                        e.naturalWidth;
                        var t = e.naturalHeight,
                            n = document.createElement("canvas");
                        n.width = 1, n.height = t;
                        var r = n.getContext("2d");
                        r.drawImage(e, 0, 0);
                        for (var i = r.getImageData(1, 0, 1, t).data, o = 0, a = t, u = t; u > o;) 0 === i[4 * (u - 1) + 3] ? a = u : o = u, u = a + o >> 1;
                        var s = u / t;
                        return 0 === s ? 1 : s
                    }(t);
                    return e.drawImage(t, n, r, i, o, a, u, s, l / c)
                },
                k = function() {
                    function e() {
                        p(this, e)
                    }
                    return d(e, null, [{
                        key: "initClass",
                        value: function() {
                            this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                        }
                    }, {
                        key: "encode64",
                        value: function(e) {
                            for (var t = "", n = void 0, r = void 0, i = "", o = void 0, a = void 0, u = void 0, s = "", l = 0; o = (n = e[l++]) >> 2, a = (3 & n) << 4 | (r = e[l++]) >> 4, u = (15 & r) << 2 | (i = e[l++]) >> 6, s = 63 & i, isNaN(r) ? u = s = 64 : isNaN(i) && (s = 64), t = t + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(u) + this.KEY_STR.charAt(s), n = r = i = "", o = a = u = s = "", l < e.length;);
                            return t
                        }
                    }, {
                        key: "restore",
                        value: function(e, t) {
                            if (!e.match("data:image/jpeg;base64,")) return t;
                            var n = this.decode64(e.replace("data:image/jpeg;base64,", "")),
                                r = this.slice2Segments(n),
                                i = this.exifManipulation(t, r);
                            return "data:image/jpeg;base64,".concat(this.encode64(i))
                        }
                    }, {
                        key: "exifManipulation",
                        value: function(e, t) {
                            var n = this.getExifArray(t),
                                r = this.insertExif(e, n);
                            return new Uint8Array(r)
                        }
                    }, {
                        key: "getExifArray",
                        value: function(e) {
                            for (var t = void 0, n = 0; n < e.length;) {
                                if (255 === (t = e[n])[0] & 225 === t[1]) return t;
                                n++
                            }
                            return []
                        }
                    }, {
                        key: "insertExif",
                        value: function(e, t) {
                            var n = e.replace("data:image/jpeg;base64,", ""),
                                r = this.decode64(n),
                                i = r.indexOf(255, 3),
                                o = r.slice(0, i),
                                a = r.slice(i),
                                u = o;
                            return (u = u.concat(t)).concat(a)
                        }
                    }, {
                        key: "slice2Segments",
                        value: function(e) {
                            for (var t = 0, n = []; !(255 === e[t] & 218 === e[t + 1]);) {
                                if (255 === e[t] & 216 === e[t + 1]) t += 2;
                                else {
                                    var r = t + (256 * e[t + 2] + e[t + 3]) + 2,
                                        i = e.slice(t, r);
                                    n.push(i), t = r
                                }
                                if (t > e.length) break
                            }
                            return n
                        }
                    }, {
                        key: "decode64",
                        value: function(e) {
                            var t = void 0,
                                n = void 0,
                                r = "",
                                i = void 0,
                                o = void 0,
                                a = "",
                                u = 0,
                                s = [];
                            for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = this.KEY_STR.indexOf(e.charAt(u++)) << 2 | (i = this.KEY_STR.indexOf(e.charAt(u++))) >> 4, n = (15 & i) << 4 | (o = this.KEY_STR.indexOf(e.charAt(u++))) >> 2, r = (3 & o) << 6 | (a = this.KEY_STR.indexOf(e.charAt(u++))), s.push(t), 64 !== o && s.push(n), 64 !== a && s.push(r), t = n = r = "", i = o = a = "", u < e.length;);
                            return s
                        }
                    }]), e
                }();
            k.initClass(), b._autoDiscoverFunction = function() {
                    if (b.autoDiscover) return b.discover()
                },
                function(e, t) {
                    var n = !1,
                        r = !0,
                        i = e.document,
                        o = i.documentElement,
                        a = i.addEventListener ? "addEventListener" : "attachEvent",
                        u = i.addEventListener ? "removeEventListener" : "detachEvent",
                        s = i.addEventListener ? "" : "on",
                        l = function r(o) {
                            if ("readystatechange" !== o.type || "complete" === i.readyState) return ("load" === o.type ? e : i)[u](s + o.type, r, !1), !n && (n = !0) ? t.call(e, o.type || o) : void 0
                        };
                    if ("complete" !== i.readyState) {
                        if (i.createEventObject && o.doScroll) {
                            try {
                                r = !e.frameElement
                            } catch (e) {}
                            r && function e() {
                                try {
                                    o.doScroll("left")
                                } catch (t) {
                                    return void setTimeout(e, 50)
                                }
                                return l("poll")
                            }()
                        }
                        i[a](s + "DOMContentLoaded", l, !1), i[a](s + "readystatechange", l, !1), e[a](s + "load", l, !1)
                    }
                }(window, b._autoDiscoverFunction), window.Dropzone = b;
            var A = b
        }(), r
    }()
}));
/*! Sortable 1.15.3 - MIT | git://github.com/SortableJS/Sortable.git */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).Sortable = e()
}(this, function() {
    "use strict";

    function e(e, t) {
        var n, o = Object.keys(e);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), o.push.apply(o, n)), o
    }

    function I(o) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? e(Object(i), !0).forEach(function(t) {
                var e, n;
                e = o, t = i[n = t], n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach(function(t) {
                Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(i, t))
            })
        }
        return o
    }

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a() {
        return (a = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n, o = arguments[e];
                for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
            }
            return t
        }).apply(this, arguments)
    }

    function i(t, e) {
        if (null == t) return {};
        var n, o = function(t, e) {
            if (null == t) return {};
            for (var n, o = {}, i = Object.keys(t), r = 0; r < i.length; r++) n = i[r], 0 <= e.indexOf(n) || (o[n] = t[n]);
            return o
        }(t, e);
        if (Object.getOwnPropertySymbols)
            for (var i = Object.getOwnPropertySymbols(t), r = 0; r < i.length; r++) n = i[r], 0 <= e.indexOf(n) || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
        return o
    }

    function r(t) {
        return function(t) {
            if (Array.isArray(t)) return l(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function(t, e) {
            if (t) {
                if ("string" == typeof t) return l(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
            }
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o
    }

    function t(t) {
        if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(t)
    }
    var y = t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
        w = t(/Edge/i),
        s = t(/firefox/i),
        u = t(/safari/i) && !t(/chrome/i) && !t(/android/i),
        n = t(/iP(ad|od|hone)/i),
        c = t(/chrome/i) && t(/android/i),
        d = {
            capture: !1,
            passive: !1
        };

    function h(t, e, n) {
        t.addEventListener(e, n, !y && d)
    }

    function f(t, e, n) {
        t.removeEventListener(e, n, !y && d)
    }

    function p(t, e) {
        if (e && (">" === e[0] && (e = e.substring(1)), t)) try {
            if (t.matches) return t.matches(e);
            if (t.msMatchesSelector) return t.msMatchesSelector(e);
            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e)
        } catch (t) {
            return
        }
    }

    function g(t) {
        return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
    }

    function P(t, e, n, o) {
        if (t) {
            n = n || document;
            do {
                if (null != e && (">" !== e[0] || t.parentNode === n) && p(t, e) || o && t === n) return t
            } while (t !== n && (t = g(t)))
        }
        return null
    }
    var m, v = /\s+/g;

    function k(t, e, n) {
        var o;
        t && e && (t.classList ? t.classList[n ? "add" : "remove"](e) : (o = (" " + t.className + " ").replace(v, " ").replace(" " + e + " ", " "), t.className = (o + (n ? " " + e : "")).replace(v, " ")))
    }

    function R(t, e, n) {
        var o = t && t.style;
        if (o) {
            if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
            o[e = !(e in o || -1 !== e.indexOf("webkit")) ? "-webkit-" + e : e] = n + ("string" == typeof n ? "" : "px")
        }
    }

    function b(t, e) {
        var n = "";
        if ("string" == typeof t) n = t;
        else
            do {
                var o = R(t, "transform")
            } while (o && "none" !== o && (n = o + " " + n), !e && (t = t.parentNode));
        var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
        return i && new i(n)
    }

    function E(t, e, n) {
        if (t) {
            var o = t.getElementsByTagName(e),
                i = 0,
                r = o.length;
            if (n)
                for (; i < r; i++) n(o[i], i);
            return o
        }
        return []
    }

    function O() {
        var t = document.scrollingElement;
        return t || document.documentElement
    }

    function X(t, e, n, o, i) {
        if (t.getBoundingClientRect || t === window) {
            var r, a, l, s, c, u, d = t !== window && t.parentNode && t !== O() ? (a = (r = t.getBoundingClientRect()).top, l = r.left, s = r.bottom, c = r.right, u = r.height, r.width) : (l = a = 0, s = window.innerHeight, c = window.innerWidth, u = window.innerHeight, window.innerWidth);
            if ((e || n) && t !== window && (i = i || t.parentNode, !y))
                do {
                    if (i && i.getBoundingClientRect && ("none" !== R(i, "transform") || n && "static" !== R(i, "position"))) {
                        var h = i.getBoundingClientRect();
                        a -= h.top + parseInt(R(i, "border-top-width")), l -= h.left + parseInt(R(i, "border-left-width")), s = a + r.height, c = l + r.width;
                        break
                    }
                } while (i = i.parentNode);
            return o && t !== window && (o = (e = b(i || t)) && e.a, t = e && e.d, e && (s = (a /= t) + (u /= t), c = (l /= o) + (d /= o))), {
                top: a,
                left: l,
                bottom: s,
                right: c,
                width: d,
                height: u
            }
        }
    }

    function Y(t, e, n) {
        for (var o = M(t, !0), i = X(t)[e]; o;) {
            var r = X(o)[n];
            if (!("top" === n || "left" === n ? r <= i : i <= r)) return o;
            if (o === O()) break;
            o = M(o, !1)
        }
        return !1
    }

    function B(t, e, n, o) {
        for (var i = 0, r = 0, a = t.children; r < a.length;) {
            if ("none" !== a[r].style.display && a[r] !== jt.ghost && (o || a[r] !== jt.dragged) && P(a[r], n.draggable, t, !1)) {
                if (i === e) return a[r];
                i++
            }
            r++
        }
        return null
    }

    function F(t, e) {
        for (var n = t.lastElementChild; n && (n === jt.ghost || "none" === R(n, "display") || e && !p(n, e));) n = n.previousElementSibling;
        return n || null
    }

    function j(t, e) {
        var n = 0;
        if (!t || !t.parentNode) return -1;
        for (; t = t.previousElementSibling;) "TEMPLATE" === t.nodeName.toUpperCase() || t === jt.clone || e && !p(t, e) || n++;
        return n
    }

    function D(t) {
        var e = 0,
            n = 0,
            o = O();
        if (t)
            do {
                var i = b(t),
                    r = i.a,
                    i = i.d
            } while (e += t.scrollLeft * r, n += t.scrollTop * i, t !== o && (t = t.parentNode));
        return [e, n]
    }

    function M(t, e) {
        if (!t || !t.getBoundingClientRect) return O();
        var n = t,
            o = !1;
        do {
            if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                var i = R(n);
                if (n.clientWidth < n.scrollWidth && ("auto" == i.overflowX || "scroll" == i.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == i.overflowY || "scroll" == i.overflowY)) {
                    if (!n.getBoundingClientRect || n === document.body) return O();
                    if (o || e) return n;
                    o = !0
                }
            }
        } while (n = n.parentNode);
        return O()
    }

    function S(t, e) {
        return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
    }

    function _(e, n) {
        return function() {
            var t;
            m || (1 === (t = arguments).length ? e.call(this, t[0]) : e.apply(this, t), m = setTimeout(function() {
                m = void 0
            }, n))
        }
    }

    function H(t, e, n) {
        t.scrollLeft += e, t.scrollTop += n
    }

    function C(t) {
        var e = window.Polymer,
            n = window.jQuery || window.Zepto;
        return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
    }

    function T(t, e) {
        R(t, "position", "absolute"), R(t, "top", e.top), R(t, "left", e.left), R(t, "width", e.width), R(t, "height", e.height)
    }

    function x(t) {
        R(t, "position", ""), R(t, "top", ""), R(t, "left", ""), R(t, "width", ""), R(t, "height", "")
    }

    function L(n, o, i) {
        var r = {};
        return Array.from(n.children).forEach(function(t) {
            var e;
            P(t, o.draggable, n, !1) && !t.animated && t !== i && (e = X(t), r.left = Math.min(null !== (t = r.left) && void 0 !== t ? t : 1 / 0, e.left), r.top = Math.min(null !== (t = r.top) && void 0 !== t ? t : 1 / 0, e.top), r.right = Math.max(null !== (t = r.right) && void 0 !== t ? t : -1 / 0, e.right), r.bottom = Math.max(null !== (t = r.bottom) && void 0 !== t ? t : -1 / 0, e.bottom))
        }), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
    }
    var K = "Sortable" + (new Date).getTime();

    function A() {
        var e, o = [];
        return {
            captureAnimationState: function() {
                o = [], this.options.animation && [].slice.call(this.el.children).forEach(function(t) {
                    var e, n;
                    "none" !== R(t, "display") && t !== jt.ghost && (o.push({
                        target: t,
                        rect: X(t)
                    }), e = I({}, o[o.length - 1].rect), !t.thisAnimationDuration || (n = b(t, !0)) && (e.top -= n.f, e.left -= n.e), t.fromRect = e)
                })
            },
            addAnimationState: function(t) {
                o.push(t)
            },
            removeAnimationState: function(t) {
                o.splice(function(t, e) {
                    for (var n in t)
                        if (t.hasOwnProperty(n))
                            for (var o in e)
                                if (e.hasOwnProperty(o) && e[o] === t[n][o]) return Number(n);
                    return -1
                }(o, {
                    target: t
                }), 1)
            },
            animateAll: function(t) {
                var c = this;
                if (!this.options.animation) return clearTimeout(e), void("function" == typeof t && t());
                var u = !1,
                    d = 0;
                o.forEach(function(t) {
                    var e = 0,
                        n = t.target,
                        o = n.fromRect,
                        i = X(n),
                        r = n.prevFromRect,
                        a = n.prevToRect,
                        l = t.rect,
                        s = b(n, !0);
                    s && (i.top -= s.f, i.left -= s.e), n.toRect = i, n.thisAnimationDuration && S(r, i) && !S(o, i) && (l.top - i.top) / (l.left - i.left) == (o.top - i.top) / (o.left - i.left) && (t = l, s = r, r = a, a = c.options, e = Math.sqrt(Math.pow(s.top - t.top, 2) + Math.pow(s.left - t.left, 2)) / Math.sqrt(Math.pow(s.top - r.top, 2) + Math.pow(s.left - r.left, 2)) * a.animation), S(i, o) || (n.prevFromRect = o, n.prevToRect = i, e = e || c.options.animation, c.animate(n, l, i, e)), e && (u = !0, d = Math.max(d, e), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout(function() {
                        n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null
                    }, e), n.thisAnimationDuration = e)
                }), clearTimeout(e), u ? e = setTimeout(function() {
                    "function" == typeof t && t()
                }, d) : "function" == typeof t && t(), o = []
            },
            animate: function(t, e, n, o) {
                var i, r;
                o && (R(t, "transition", ""), R(t, "transform", ""), i = (r = b(this.el)) && r.a, r = r && r.d, i = (e.left - n.left) / (i || 1), r = (e.top - n.top) / (r || 1), t.animatingX = !!i, t.animatingY = !!r, R(t, "transform", "translate3d(" + i + "px," + r + "px,0)"), this.forRepaintDummy = t.offsetWidth, R(t, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), R(t, "transform", "translate3d(0,0,0)"), "number" == typeof t.animated && clearTimeout(t.animated), t.animated = setTimeout(function() {
                    R(t, "transition", ""), R(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1
                }, o))
            }
        }
    }
    var N = [],
        W = {
            initializeByDefault: !0
        },
        z = {
            mount: function(e) {
                for (var t in W) !W.hasOwnProperty(t) || t in e || (e[t] = W[t]);
                N.forEach(function(t) {
                    if (t.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
                }), N.push(e)
            },
            pluginEvent: function(e, n, o) {
                var t = this;
                this.eventCanceled = !1, o.cancel = function() {
                    t.eventCanceled = !0
                };
                var i = e + "Global";
                N.forEach(function(t) {
                    n[t.pluginName] && (n[t.pluginName][i] && n[t.pluginName][i](I({
                        sortable: n
                    }, o)), n.options[t.pluginName] && n[t.pluginName][e] && n[t.pluginName][e](I({
                        sortable: n
                    }, o)))
                })
            },
            initializePlugins: function(n, o, i, t) {
                for (var e in N.forEach(function(t) {
                        var e = t.pluginName;
                        (n.options[e] || t.initializeByDefault) && ((t = new t(n, o, n.options)).sortable = n, t.options = n.options, n[e] = t, a(i, t.defaults))
                    }), n.options) {
                    var r;
                    n.options.hasOwnProperty(e) && (void 0 !== (r = this.modifyOption(n, e, n.options[e])) && (n.options[e] = r))
                }
            },
            getEventProperties: function(e, n) {
                var o = {};
                return N.forEach(function(t) {
                    "function" == typeof t.eventProperties && a(o, t.eventProperties.call(n[t.pluginName], e))
                }), o
            },
            modifyOption: function(e, n, o) {
                var i;
                return N.forEach(function(t) {
                    e[t.pluginName] && t.optionListeners && "function" == typeof t.optionListeners[n] && (i = t.optionListeners[n].call(e[t.pluginName], o))
                }), i
            }
        };

    function G(t) {
        var e = t.sortable,
            n = t.rootEl,
            o = t.name,
            i = t.targetEl,
            r = t.cloneEl,
            a = t.toEl,
            l = t.fromEl,
            s = t.oldIndex,
            c = t.newIndex,
            u = t.oldDraggableIndex,
            d = t.newDraggableIndex,
            h = t.originalEvent,
            f = t.putSortable,
            p = t.extraEventProperties;
        if (e = e || n && n[K]) {
            var g, m = e.options,
                t = "on" + o.charAt(0).toUpperCase() + o.substr(1);
            !window.CustomEvent || y || w ? (g = document.createEvent("Event")).initEvent(o, !0, !0) : g = new CustomEvent(o, {
                bubbles: !0,
                cancelable: !0
            }), g.to = a || n, g.from = l || n, g.item = i || n, g.clone = r, g.oldIndex = s, g.newIndex = c, g.oldDraggableIndex = u, g.newDraggableIndex = d, g.originalEvent = h, g.pullMode = f ? f.lastPutMode : void 0;
            var v, b = I(I({}, p), z.getEventProperties(o, e));
            for (v in b) g[v] = b[v];
            n && n.dispatchEvent(g), m[t] && m[t].call(e, g)
        }
    }

    function U(t, e) {
        var n = (o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).evt,
            o = i(o, q);
        z.pluginEvent.bind(jt)(t, e, I({
            dragEl: Z,
            parentEl: $,
            ghostEl: Q,
            rootEl: J,
            nextEl: tt,
            lastDownEl: et,
            cloneEl: nt,
            cloneHidden: ot,
            dragStarted: mt,
            putSortable: ct,
            activeSortable: jt.active,
            originalEvent: n,
            oldIndex: it,
            oldDraggableIndex: at,
            newIndex: rt,
            newDraggableIndex: lt,
            hideGhostForTarget: Xt,
            unhideGhostForTarget: Yt,
            cloneNowHidden: function() {
                ot = !0
            },
            cloneNowShown: function() {
                ot = !1
            },
            dispatchSortableEvent: function(t) {
                V({
                    sortable: e,
                    name: t,
                    originalEvent: n
                })
            }
        }, o))
    }
    var q = ["evt"];

    function V(t) {
        G(I({
            putSortable: ct,
            cloneEl: nt,
            targetEl: Z,
            rootEl: J,
            oldIndex: it,
            oldDraggableIndex: at,
            newIndex: rt,
            newDraggableIndex: lt
        }, t))
    }
    var Z, $, Q, J, tt, et, nt, ot, it, rt, at, lt, st, ct, ut, dt, ht, ft, pt, gt, mt, vt, bt, yt, wt, Et = !1,
        Dt = !1,
        St = [],
        _t = !1,
        Ct = !1,
        Tt = [],
        xt = !1,
        Ot = [],
        Mt = "undefined" != typeof document,
        At = n,
        Nt = w || y ? "cssFloat" : "float",
        It = Mt && !c && !n && "draggable" in document.createElement("div"),
        Pt = function() {
            if (Mt) {
                if (y) return !1;
                var t = document.createElement("x");
                return t.style.cssText = "pointer-events:auto", "auto" === t.style.pointerEvents
            }
        }(),
        kt = function(t, e) {
            var n = R(t),
                o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
                i = B(t, 0, e),
                r = B(t, 1, e),
                a = i && R(i),
                l = r && R(r),
                s = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + X(i).width,
                t = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + X(r).width;
            if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
            if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
            if (i && a.float && "none" !== a.float) {
                e = "left" === a.float ? "left" : "right";
                return !r || "both" !== l.clear && l.clear !== e ? "horizontal" : "vertical"
            }
            return i && ("block" === a.display || "flex" === a.display || "table" === a.display || "grid" === a.display || o <= s && "none" === n[Nt] || r && "none" === n[Nt] && o < s + t) ? "vertical" : "horizontal"
        },
        Rt = function(t) {
            function l(r, a) {
                return function(t, e, n, o) {
                    var i = t.options.group.name && e.options.group.name && t.options.group.name === e.options.group.name;
                    if (null == r && (a || i)) return !0;
                    if (null == r || !1 === r) return !1;
                    if (a && "clone" === r) return r;
                    if ("function" == typeof r) return l(r(t, e, n, o), a)(t, e, n, o);
                    e = (a ? t : e).options.group.name;
                    return !0 === r || "string" == typeof r && r === e || r.join && -1 < r.indexOf(e)
                }
            }
            var e = {},
                n = t.group;
            n && "object" == o(n) || (n = {
                name: n
            }), e.name = n.name, e.checkPull = l(n.pull, !0), e.checkPut = l(n.put), e.revertClone = n.revertClone, t.group = e
        },
        Xt = function() {
            !Pt && Q && R(Q, "display", "none")
        },
        Yt = function() {
            !Pt && Q && R(Q, "display", "")
        };
    Mt && !c && document.addEventListener("click", function(t) {
        if (Dt) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Dt = !1
    }, !0);

    function Bt(t) {
        if (Z) {
            t = t.touches ? t.touches[0] : t;
            var e = (i = t.clientX, r = t.clientY, St.some(function(t) {
                var e = t[K].options.emptyInsertThreshold;
                if (e && !F(t)) {
                    var n = X(t),
                        o = i >= n.left - e && i <= n.right + e,
                        e = r >= n.top - e && r <= n.bottom + e;
                    return o && e ? a = t : void 0
                }
            }), a);
            if (e) {
                var n, o = {};
                for (n in t) t.hasOwnProperty(n) && (o[n] = t[n]);
                o.target = o.rootEl = e, o.preventDefault = void 0, o.stopPropagation = void 0, e[K]._onDragOver(o)
            }
        }
        var i, r, a
    }

    function Ft(t) {
        Z && Z.parentNode[K]._isOutsideThisEl(t.target)
    }

    function jt(t, e) {
        if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
        this.el = t, this.options = e = a({}, e), t[K] = this;
        var n, o, i = {
            group: null,
            sort: !0,
            disabled: !1,
            store: null,
            handle: null,
            draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
            swapThreshold: 1,
            invertSwap: !1,
            invertedSwapThreshold: null,
            removeCloneOnHide: !0,
            direction: function() {
                return kt(t, this.options)
            },
            ghostClass: "sortable-ghost",
            chosenClass: "sortable-chosen",
            dragClass: "sortable-drag",
            ignore: "a, img",
            filter: null,
            preventOnFilter: !0,
            animation: 0,
            easing: null,
            setData: function(t, e) {
                t.setData("Text", e.textContent)
            },
            dropBubble: !1,
            dragoverBubble: !1,
            dataIdAttr: "data-id",
            delay: 0,
            delayOnTouchOnly: !1,
            touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
            forceFallback: !1,
            fallbackClass: "sortable-fallback",
            fallbackOnBody: !1,
            fallbackTolerance: 0,
            fallbackOffset: {
                x: 0,
                y: 0
            },
            supportPointer: !1 !== jt.supportPointer && "PointerEvent" in window && !u,
            emptyInsertThreshold: 5
        };
        for (n in z.initializePlugins(this, t, i), i) n in e || (e[n] = i[n]);
        for (o in Rt(e), this) "_" === o.charAt(0) && "function" == typeof this[o] && (this[o] = this[o].bind(this));
        this.nativeDraggable = !e.forceFallback && It, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? h(t, "pointerdown", this._onTapStart) : (h(t, "mousedown", this._onTapStart), h(t, "touchstart", this._onTapStart)), this.nativeDraggable && (h(t, "dragover", this), h(t, "dragenter", this)), St.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), a(this, A())
    }

    function Ht(t, e, n, o, i, r, a, l) {
        var s, c, u = t[K],
            d = u.options.onMove;
        return !window.CustomEvent || y || w ? (s = document.createEvent("Event")).initEvent("move", !0, !0) : s = new CustomEvent("move", {
            bubbles: !0,
            cancelable: !0
        }), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = i || e, s.relatedRect = r || X(e), s.willInsertAfter = l, s.originalEvent = a, t.dispatchEvent(s), c = d ? d.call(u, s, a) : c
    }

    function Lt(t) {
        t.draggable = !1
    }

    function Kt() {
        xt = !1
    }

    function Wt(t) {
        return setTimeout(t, 0)
    }

    function zt(t) {
        return clearTimeout(t)
    }
    jt.prototype = {
        constructor: jt,
        _isOutsideThisEl: function(t) {
            this.el.contains(t) || t === this.el || (vt = null)
        },
        _getDirection: function(t, e) {
            return "function" == typeof this.options.direction ? this.options.direction.call(this, t, e, Z) : this.options.direction
        },
        _onTapStart: function(e) {
            if (e.cancelable) {
                var n = this,
                    o = this.el,
                    t = this.options,
                    i = t.preventOnFilter,
                    r = e.type,
                    a = e.touches && e.touches[0] || e.pointerType && "touch" === e.pointerType && e,
                    l = (a || e).target,
                    s = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l,
                    c = t.filter;
                if (! function(t) {
                        Ot.length = 0;
                        var e = t.getElementsByTagName("input"),
                            n = e.length;
                        for (; n--;) {
                            var o = e[n];
                            o.checked && Ot.push(o)
                        }
                    }(o), !Z && !(/mousedown|pointerdown/.test(r) && 0 !== e.button || t.disabled) && !s.isContentEditable && (this.nativeDraggable || !u || !l || "SELECT" !== l.tagName.toUpperCase()) && !((l = P(l, t.draggable, o, !1)) && l.animated || et === l)) {
                    if (it = j(l), at = j(l, t.draggable), "function" == typeof c) {
                        if (c.call(this, e, l, this)) return V({
                            sortable: n,
                            rootEl: s,
                            name: "filter",
                            targetEl: l,
                            toEl: o,
                            fromEl: o
                        }), U("filter", n, {
                            evt: e
                        }), void(i && e.cancelable && e.preventDefault())
                    } else if (c = c && c.split(",").some(function(t) {
                            if (t = P(s, t.trim(), o, !1)) return V({
                                sortable: n,
                                rootEl: t,
                                name: "filter",
                                targetEl: l,
                                fromEl: o,
                                toEl: o
                            }), U("filter", n, {
                                evt: e
                            }), !0
                        })) return void(i && e.cancelable && e.preventDefault());
                    t.handle && !P(s, t.handle, o, !1) || this._prepareDragStart(e, a, l)
                }
            }
        },
        _prepareDragStart: function(t, e, n) {
            var o, i = this,
                r = i.el,
                a = i.options,
                l = r.ownerDocument;
            n && !Z && n.parentNode === r && (o = X(n), J = r, $ = (Z = n).parentNode, tt = Z.nextSibling, et = n, st = a.group, ut = {
                target: jt.dragged = Z,
                clientX: (e || t).clientX,
                clientY: (e || t).clientY
            }, pt = ut.clientX - o.left, gt = ut.clientY - o.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, Z.style["will-change"] = "all", o = function() {
                U("delayEnded", i, {
                    evt: t
                }), jt.eventCanceled ? i._onDrop() : (i._disableDelayedDragEvents(), !s && i.nativeDraggable && (Z.draggable = !0), i._triggerDragStart(t, e), V({
                    sortable: i,
                    name: "choose",
                    originalEvent: t
                }), k(Z, a.chosenClass, !0))
            }, a.ignore.split(",").forEach(function(t) {
                E(Z, t.trim(), Lt)
            }), h(l, "dragover", Bt), h(l, "mousemove", Bt), h(l, "touchmove", Bt), h(l, "mouseup", i._onDrop), h(l, "touchend", i._onDrop), h(l, "touchcancel", i._onDrop), s && this.nativeDraggable && (this.options.touchStartThreshold = 4, Z.draggable = !0), U("delayStart", this, {
                evt: t
            }), !a.delay || a.delayOnTouchOnly && !e || this.nativeDraggable && (w || y) ? o() : jt.eventCanceled ? this._onDrop() : (h(l, "mouseup", i._disableDelayedDrag), h(l, "touchend", i._disableDelayedDrag), h(l, "touchcancel", i._disableDelayedDrag), h(l, "mousemove", i._delayedDragTouchMoveHandler), h(l, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && h(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(o, a.delay)))
        },
        _delayedDragTouchMoveHandler: function(t) {
            t = t.touches ? t.touches[0] : t;
            Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
        },
        _disableDelayedDrag: function() {
            Z && Lt(Z), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
        },
        _disableDelayedDragEvents: function() {
            var t = this.el.ownerDocument;
            f(t, "mouseup", this._disableDelayedDrag), f(t, "touchend", this._disableDelayedDrag), f(t, "touchcancel", this._disableDelayedDrag), f(t, "mousemove", this._delayedDragTouchMoveHandler), f(t, "touchmove", this._delayedDragTouchMoveHandler), f(t, "pointermove", this._delayedDragTouchMoveHandler)
        },
        _triggerDragStart: function(t, e) {
            e = e || "touch" == t.pointerType && t, !this.nativeDraggable || e ? this.options.supportPointer ? h(document, "pointermove", this._onTouchMove) : h(document, e ? "touchmove" : "mousemove", this._onTouchMove) : (h(Z, "dragend", this), h(J, "dragstart", this._onDragStart));
            try {
                document.selection ? Wt(function() {
                    document.selection.empty()
                }) : window.getSelection().removeAllRanges()
            } catch (t) {}
        },
        _dragStarted: function(t, e) {
            var n;
            Et = !1, J && Z ? (U("dragStarted", this, {
                evt: e
            }), this.nativeDraggable && h(document, "dragover", Ft), n = this.options, t || k(Z, n.dragClass, !1), k(Z, n.ghostClass, !0), jt.active = this, t && this._appendGhost(), V({
                sortable: this,
                name: "start",
                originalEvent: e
            })) : this._nulling()
        },
        _emulateDragOver: function() {
            if (dt) {
                this._lastX = dt.clientX, this._lastY = dt.clientY, Xt();
                for (var t = document.elementFromPoint(dt.clientX, dt.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(dt.clientX, dt.clientY)) !== e;) e = t;
                if (Z.parentNode[K]._isOutsideThisEl(t), e)
                    do {
                        if (e[K])
                            if (e[K]._onDragOver({
                                    clientX: dt.clientX,
                                    clientY: dt.clientY,
                                    target: t,
                                    rootEl: e
                                }) && !this.options.dragoverBubble) break
                    } while (e = g(t = e));
                Yt()
            }
        },
        _onTouchMove: function(t) {
            if (ut) {
                var e = this.options,
                    n = e.fallbackTolerance,
                    o = e.fallbackOffset,
                    i = t.touches ? t.touches[0] : t,
                    r = Q && b(Q, !0),
                    a = Q && r && r.a,
                    l = Q && r && r.d,
                    e = At && wt && D(wt),
                    a = (i.clientX - ut.clientX + o.x) / (a || 1) + (e ? e[0] - Tt[0] : 0) / (a || 1),
                    l = (i.clientY - ut.clientY + o.y) / (l || 1) + (e ? e[1] - Tt[1] : 0) / (l || 1);
                if (!jt.active && !Et) {
                    if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n) return;
                    this._onDragStart(t, !0)
                }
                Q && (r ? (r.e += a - (ht || 0), r.f += l - (ft || 0)) : r = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: a,
                    f: l
                }, r = "matrix(".concat(r.a, ",").concat(r.b, ",").concat(r.c, ",").concat(r.d, ",").concat(r.e, ",").concat(r.f, ")"), R(Q, "webkitTransform", r), R(Q, "mozTransform", r), R(Q, "msTransform", r), R(Q, "transform", r), ht = a, ft = l, dt = i), t.cancelable && t.preventDefault()
            }
        },
        _appendGhost: function() {
            if (!Q) {
                var t = this.options.fallbackOnBody ? document.body : J,
                    e = X(Z, !0, At, !0, t),
                    n = this.options;
                if (At) {
                    for (wt = t;
                        "static" === R(wt, "position") && "none" === R(wt, "transform") && wt !== document;) wt = wt.parentNode;
                    wt !== document.body && wt !== document.documentElement ? (wt === document && (wt = O()), e.top += wt.scrollTop, e.left += wt.scrollLeft) : wt = O(), Tt = D(wt)
                }
                k(Q = Z.cloneNode(!0), n.ghostClass, !1), k(Q, n.fallbackClass, !0), k(Q, n.dragClass, !0), R(Q, "transition", ""), R(Q, "transform", ""), R(Q, "box-sizing", "border-box"), R(Q, "margin", 0), R(Q, "top", e.top), R(Q, "left", e.left), R(Q, "width", e.width), R(Q, "height", e.height), R(Q, "opacity", "0.8"), R(Q, "position", At ? "absolute" : "fixed"), R(Q, "zIndex", "100000"), R(Q, "pointerEvents", "none"), jt.ghost = Q, t.appendChild(Q), R(Q, "transform-origin", pt / parseInt(Q.style.width) * 100 + "% " + gt / parseInt(Q.style.height) * 100 + "%")
            }
        },
        _onDragStart: function(t, e) {
            var n = this,
                o = t.dataTransfer,
                i = n.options;
            U("dragStart", this, {
                evt: t
            }), jt.eventCanceled ? this._onDrop() : (U("setupClone", this), jt.eventCanceled || ((nt = C(Z)).removeAttribute("id"), nt.draggable = !1, nt.style["will-change"] = "", this._hideClone(), k(nt, this.options.chosenClass, !1), jt.clone = nt), n.cloneId = Wt(function() {
                U("clone", n), jt.eventCanceled || (n.options.removeCloneOnHide || J.insertBefore(nt, Z), n._hideClone(), V({
                    sortable: n,
                    name: "clone"
                }))
            }), e || k(Z, i.dragClass, !0), e ? (Dt = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (f(document, "mouseup", n._onDrop), f(document, "touchend", n._onDrop), f(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", i.setData && i.setData.call(n, o, Z)), h(document, "drop", n), R(Z, "transform", "translateZ(0)")), Et = !0, n._dragStartId = Wt(n._dragStarted.bind(n, e, t)), h(document, "selectstart", n), mt = !0, u && R(document.body, "user-select", "none"))
        },
        _onDragOver: function(n) {
            var o, i, r, t, e, a = this.el,
                l = n.target,
                s = this.options,
                c = s.group,
                u = jt.active,
                d = st === c,
                h = s.sort,
                f = ct || u,
                p = this,
                g = !1;
            if (!xt) {
                if (void 0 !== n.preventDefault && n.cancelable && n.preventDefault(), l = P(l, s.draggable, a, !0), O("dragOver"), jt.eventCanceled) return g;
                if (Z.contains(n.target) || l.animated && l.animatingX && l.animatingY || p._ignoreWhileAnimating === l) return A(!1);
                if (Dt = !1, u && !s.disabled && (d ? h || (i = $ !== J) : ct === this || (this.lastPutMode = st.checkPull(this, u, Z, n)) && c.checkPut(this, u, Z, n))) {
                    if (r = "vertical" === this._getDirection(n, l), o = X(Z), O("dragOverValid"), jt.eventCanceled) return g;
                    if (i) return $ = J, M(), this._hideClone(), O("revert"), jt.eventCanceled || (tt ? J.insertBefore(Z, tt) : J.appendChild(Z)), A(!0);
                    var m = F(a, s.draggable);
                    if (m && (S = n, c = r, x = X(F((D = this).el, D.options.draggable)), D = L(D.el, D.options, Q), !(c ? S.clientX > D.right + 10 || S.clientY > x.bottom && S.clientX > x.left : S.clientY > D.bottom + 10 || S.clientX > x.right && S.clientY > x.top) || m.animated)) {
                        if (m && (t = n, e = r, C = X(B((_ = this).el, 0, _.options, !0)), _ = L(_.el, _.options, Q), e ? t.clientX < _.left - 10 || t.clientY < C.top && t.clientX < C.right : t.clientY < _.top - 10 || t.clientY < C.bottom && t.clientX < C.left)) {
                            var v = B(a, 0, s, !0);
                            if (v === Z) return A(!1);
                            if (E = X(l = v), !1 !== Ht(J, a, Z, o, l, E, n, !1)) return M(), a.insertBefore(Z, v), $ = a, N(), A(!0)
                        } else if (l.parentNode === a) {
                            var b, y, w, E = X(l),
                                D = Z.parentNode !== a,
                                S = (S = Z.animated && Z.toRect || o, x = l.animated && l.toRect || E, _ = (e = r) ? S.left : S.top, t = e ? S.right : S.bottom, C = e ? S.width : S.height, v = e ? x.left : x.top, S = e ? x.right : x.bottom, x = e ? x.width : x.height, !(_ === v || t === S || _ + C / 2 === v + x / 2)),
                                _ = r ? "top" : "left",
                                C = Y(l, "top", "top") || Y(Z, "top", "top"),
                                v = C ? C.scrollTop : void 0;
                            if (vt !== l && (y = E[_], _t = !1, Ct = !S && s.invertSwap || D), 0 !== (b = function(t, e, n, o, i, r, a, l) {
                                    var s = o ? t.clientY : t.clientX,
                                        c = o ? n.height : n.width,
                                        t = o ? n.top : n.left,
                                        o = o ? n.bottom : n.right,
                                        n = !1;
                                    if (!a)
                                        if (l && yt < c * i) {
                                            if (_t = !_t && (1 === bt ? t + c * r / 2 < s : s < o - c * r / 2) ? !0 : _t) n = !0;
                                            else if (1 === bt ? s < t + yt : o - yt < s) return -bt
                                        } else if (t + c * (1 - i) / 2 < s && s < o - c * (1 - i) / 2) return function(t) {
                                        return j(Z) < j(t) ? 1 : -1
                                    }(e);
                                    if ((n = n || a) && (s < t + c * r / 2 || o - c * r / 2 < s)) return t + c / 2 < s ? 1 : -1;
                                    return 0
                                }(n, l, E, r, S ? 1 : s.swapThreshold, null == s.invertedSwapThreshold ? s.swapThreshold : s.invertedSwapThreshold, Ct, vt === l)))
                                for (var T = j(Z);
                                    (w = $.children[T -= b]) && ("none" === R(w, "display") || w === Q););
                            if (0 === b || w === l) return A(!1);
                            bt = b;
                            var x = (vt = l).nextElementSibling,
                                D = !1,
                                S = Ht(J, a, Z, o, l, E, n, D = 1 === b);
                            if (!1 !== S) return 1 !== S && -1 !== S || (D = 1 === S), xt = !0, setTimeout(Kt, 30), M(), D && !x ? a.appendChild(Z) : l.parentNode.insertBefore(Z, D ? x : l), C && H(C, 0, v - C.scrollTop), $ = Z.parentNode, void 0 === y || Ct || (yt = Math.abs(y - X(l)[_])), N(), A(!0)
                        }
                    } else {
                        if (m === Z) return A(!1);
                        if ((l = m && a === n.target ? m : l) && (E = X(l)), !1 !== Ht(J, a, Z, o, l, E, n, !!l)) return M(), m && m.nextSibling ? a.insertBefore(Z, m.nextSibling) : a.appendChild(Z), $ = a, N(), A(!0)
                    }
                    if (a.contains(Z)) return A(!1)
                }
                return !1
            }

            function O(t, e) {
                U(t, p, I({
                    evt: n,
                    isOwner: d,
                    axis: r ? "vertical" : "horizontal",
                    revert: i,
                    dragRect: o,
                    targetRect: E,
                    canSort: h,
                    fromSortable: f,
                    target: l,
                    completed: A,
                    onMove: function(t, e) {
                        return Ht(J, a, Z, o, t, X(t), n, e)
                    },
                    changed: N
                }, e))
            }

            function M() {
                O("dragOverAnimationCapture"), p.captureAnimationState(), p !== f && f.captureAnimationState()
            }

            function A(t) {
                return O("dragOverCompleted", {
                    insertion: t
                }), t && (d ? u._hideClone() : u._showClone(p), p !== f && (k(Z, (ct || u).options.ghostClass, !1), k(Z, s.ghostClass, !0)), ct !== p && p !== jt.active ? ct = p : p === jt.active && ct && (ct = null), f === p && (p._ignoreWhileAnimating = l), p.animateAll(function() {
                    O("dragOverAnimationComplete"), p._ignoreWhileAnimating = null
                }), p !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (l === Z && !Z.animated || l === a && !l.animated) && (vt = null), s.dragoverBubble || n.rootEl || l === document || (Z.parentNode[K]._isOutsideThisEl(n.target), t || Bt(n)), !s.dragoverBubble && n.stopPropagation && n.stopPropagation(), g = !0
            }

            function N() {
                rt = j(Z), lt = j(Z, s.draggable), V({
                    sortable: p,
                    name: "change",
                    toEl: a,
                    newIndex: rt,
                    newDraggableIndex: lt,
                    originalEvent: n
                })
            }
        },
        _ignoreWhileAnimating: null,
        _offMoveEvents: function() {
            f(document, "mousemove", this._onTouchMove), f(document, "touchmove", this._onTouchMove), f(document, "pointermove", this._onTouchMove), f(document, "dragover", Bt), f(document, "mousemove", Bt), f(document, "touchmove", Bt)
        },
        _offUpEvents: function() {
            var t = this.el.ownerDocument;
            f(t, "mouseup", this._onDrop), f(t, "touchend", this._onDrop), f(t, "pointerup", this._onDrop), f(t, "touchcancel", this._onDrop), f(document, "selectstart", this)
        },
        _onDrop: function(t) {
            var e = this.el,
                n = this.options;
            rt = j(Z), lt = j(Z, n.draggable), U("drop", this, {
                evt: t
            }), $ = Z && Z.parentNode, rt = j(Z), lt = j(Z, n.draggable), jt.eventCanceled || (_t = Ct = Et = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), zt(this.cloneId), zt(this._dragStartId), this.nativeDraggable && (f(document, "drop", this), f(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), u && R(document.body, "user-select", ""), R(Z, "transform", ""), t && (mt && (t.cancelable && t.preventDefault(), n.dropBubble || t.stopPropagation()), Q && Q.parentNode && Q.parentNode.removeChild(Q), (J === $ || ct && "clone" !== ct.lastPutMode) && nt && nt.parentNode && nt.parentNode.removeChild(nt), Z && (this.nativeDraggable && f(Z, "dragend", this), Lt(Z), Z.style["will-change"] = "", mt && !Et && k(Z, (ct || this).options.ghostClass, !1), k(Z, this.options.chosenClass, !1), V({
                sortable: this,
                name: "unchoose",
                toEl: $,
                newIndex: null,
                newDraggableIndex: null,
                originalEvent: t
            }), J !== $ ? (0 <= rt && (V({
                rootEl: $,
                name: "add",
                toEl: $,
                fromEl: J,
                originalEvent: t
            }), V({
                sortable: this,
                name: "remove",
                toEl: $,
                originalEvent: t
            }), V({
                rootEl: $,
                name: "sort",
                toEl: $,
                fromEl: J,
                originalEvent: t
            }), V({
                sortable: this,
                name: "sort",
                toEl: $,
                originalEvent: t
            })), ct && ct.save()) : rt !== it && 0 <= rt && (V({
                sortable: this,
                name: "update",
                toEl: $,
                originalEvent: t
            }), V({
                sortable: this,
                name: "sort",
                toEl: $,
                originalEvent: t
            })), jt.active && (null != rt && -1 !== rt || (rt = it, lt = at), V({
                sortable: this,
                name: "end",
                toEl: $,
                originalEvent: t
            }), this.save())))), this._nulling()
        },
        _nulling: function() {
            U("nulling", this), J = Z = $ = Q = tt = nt = et = ot = ut = dt = mt = rt = lt = it = at = vt = bt = ct = st = jt.dragged = jt.ghost = jt.clone = jt.active = null, Ot.forEach(function(t) {
                t.checked = !0
            }), Ot.length = ht = ft = 0
        },
        handleEvent: function(t) {
            switch (t.type) {
                case "drop":
                case "dragend":
                    this._onDrop(t);
                    break;
                case "dragenter":
                case "dragover":
                    Z && (this._onDragOver(t), function(t) {
                        t.dataTransfer && (t.dataTransfer.dropEffect = "move");
                        t.cancelable && t.preventDefault()
                    }(t));
                    break;
                case "selectstart":
                    t.preventDefault()
            }
        },
        toArray: function() {
            for (var t, e = [], n = this.el.children, o = 0, i = n.length, r = this.options; o < i; o++) P(t = n[o], r.draggable, this.el, !1) && e.push(t.getAttribute(r.dataIdAttr) || function(t) {
                var e = t.tagName + t.className + t.src + t.href + t.textContent,
                    n = e.length,
                    o = 0;
                for (; n--;) o += e.charCodeAt(n);
                return o.toString(36)
            }(t));
            return e
        },
        sort: function(t, e) {
            var n = {},
                o = this.el;
            this.toArray().forEach(function(t, e) {
                e = o.children[e];
                P(e, this.options.draggable, o, !1) && (n[t] = e)
            }, this), e && this.captureAnimationState(), t.forEach(function(t) {
                n[t] && (o.removeChild(n[t]), o.appendChild(n[t]))
            }), e && this.animateAll()
        },
        save: function() {
            var t = this.options.store;
            t && t.set && t.set(this)
        },
        closest: function(t, e) {
            return P(t, e || this.options.draggable, this.el, !1)
        },
        option: function(t, e) {
            var n = this.options;
            if (void 0 === e) return n[t];
            var o = z.modifyOption(this, t, e);
            n[t] = void 0 !== o ? o : e, "group" === t && Rt(n)
        },
        destroy: function() {
            U("destroy", this);
            var t = this.el;
            t[K] = null, f(t, "mousedown", this._onTapStart), f(t, "touchstart", this._onTapStart), f(t, "pointerdown", this._onTapStart), this.nativeDraggable && (f(t, "dragover", this), f(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(t) {
                t.removeAttribute("draggable")
            }), this._onDrop(), this._disableDelayedDragEvents(), St.splice(St.indexOf(this.el), 1), this.el = t = null
        },
        _hideClone: function() {
            ot || (U("hideClone", this), jt.eventCanceled || (R(nt, "display", "none"), this.options.removeCloneOnHide && nt.parentNode && nt.parentNode.removeChild(nt), ot = !0))
        },
        _showClone: function(t) {
            "clone" === t.lastPutMode ? ot && (U("showClone", this), jt.eventCanceled || (Z.parentNode != J || this.options.group.revertClone ? tt ? J.insertBefore(nt, tt) : J.appendChild(nt) : J.insertBefore(nt, Z), this.options.group.revertClone && this.animate(Z, nt), R(nt, "display", ""), ot = !1)) : this._hideClone()
        }
    }, Mt && h(document, "touchmove", function(t) {
        (jt.active || Et) && t.cancelable && t.preventDefault()
    }), jt.utils = {
        on: h,
        off: f,
        css: R,
        find: E,
        is: function(t, e) {
            return !!P(t, e, t, !1)
        },
        extend: function(t, e) {
            if (t && e)
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        },
        throttle: _,
        closest: P,
        toggleClass: k,
        clone: C,
        index: j,
        nextTick: Wt,
        cancelNextTick: zt,
        detectDirection: kt,
        getChild: B,
        expando: K
    }, jt.get = function(t) {
        return t[K]
    }, jt.mount = function() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        (e = e[0].constructor === Array ? e[0] : e).forEach(function(t) {
            if (!t.prototype || !t.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));
            t.utils && (jt.utils = I(I({}, jt.utils), t.utils)), z.mount(t)
        })
    }, jt.create = function(t, e) {
        return new jt(t, e)
    };
    var Gt, Ut, qt, Vt, Zt, $t, Qt = [],
        Jt = !(jt.version = "1.15.3");

    function te() {
        Qt.forEach(function(t) {
            clearInterval(t.pid)
        }), Qt = []
    }

    function ee() {
        clearInterval($t)
    }
    var ne, oe = _(function(n, t, e, o) {
            if (t.scroll) {
                var i, r = (n.touches ? n.touches[0] : n).clientX,
                    a = (n.touches ? n.touches[0] : n).clientY,
                    l = t.scrollSensitivity,
                    s = t.scrollSpeed,
                    c = O(),
                    u = !1;
                Ut !== e && (Ut = e, te(), Gt = t.scroll, i = t.scrollFn, !0 === Gt && (Gt = M(e, !0)));
                var d = 0,
                    h = Gt;
                do {
                    var f = h,
                        p = X(f),
                        g = p.top,
                        m = p.bottom,
                        v = p.left,
                        b = p.right,
                        y = p.width,
                        w = p.height,
                        E = void 0,
                        D = void 0,
                        S = f.scrollWidth,
                        _ = f.scrollHeight,
                        C = R(f),
                        T = f.scrollLeft,
                        p = f.scrollTop,
                        D = f === c ? (E = y < S && ("auto" === C.overflowX || "scroll" === C.overflowX || "visible" === C.overflowX), w < _ && ("auto" === C.overflowY || "scroll" === C.overflowY || "visible" === C.overflowY)) : (E = y < S && ("auto" === C.overflowX || "scroll" === C.overflowX), w < _ && ("auto" === C.overflowY || "scroll" === C.overflowY)),
                        T = E && (Math.abs(b - r) <= l && T + y < S) - (Math.abs(v - r) <= l && !!T),
                        p = D && (Math.abs(m - a) <= l && p + w < _) - (Math.abs(g - a) <= l && !!p);
                    if (!Qt[d])
                        for (var x = 0; x <= d; x++) Qt[x] || (Qt[x] = {});
                    Qt[d].vx == T && Qt[d].vy == p && Qt[d].el === f || (Qt[d].el = f, Qt[d].vx = T, Qt[d].vy = p, clearInterval(Qt[d].pid), 0 == T && 0 == p || (u = !0, Qt[d].pid = setInterval(function() {
                        o && 0 === this.layer && jt.active._onTouchMove(Zt);
                        var t = Qt[this.layer].vy ? Qt[this.layer].vy * s : 0,
                            e = Qt[this.layer].vx ? Qt[this.layer].vx * s : 0;
                        "function" == typeof i && "continue" !== i.call(jt.dragged.parentNode[K], e, t, n, Zt, Qt[this.layer].el) || H(Qt[this.layer].el, e, t)
                    }.bind({
                        layer: d
                    }), 24))), d++
                } while (t.bubbleScroll && h !== c && (h = M(h, !1)));
                Jt = u
            }
        }, 30),
        c = function(t) {
            var e = t.originalEvent,
                n = t.putSortable,
                o = t.dragEl,
                i = t.activeSortable,
                r = t.dispatchSortableEvent,
                a = t.hideGhostForTarget,
                t = t.unhideGhostForTarget;
            e && (i = n || i, a(), e = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, e = document.elementFromPoint(e.clientX, e.clientY), t(), i && !i.el.contains(e) && (r("spill"), this.onSpill({
                dragEl: o,
                putSortable: n
            })))
        };

    function ie() {}

    function re() {}
    ie.prototype = {
        startIndex: null,
        dragStart: function(t) {
            t = t.oldDraggableIndex;
            this.startIndex = t
        },
        onSpill: function(t) {
            var e = t.dragEl,
                n = t.putSortable;
            this.sortable.captureAnimationState(), n && n.captureAnimationState();
            t = B(this.sortable.el, this.startIndex, this.options);
            t ? this.sortable.el.insertBefore(e, t) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll()
        },
        drop: c
    }, a(ie, {
        pluginName: "revertOnSpill"
    }), re.prototype = {
        onSpill: function(t) {
            var e = t.dragEl,
                t = t.putSortable || this.sortable;
            t.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), t.animateAll()
        },
        drop: c
    }, a(re, {
        pluginName: "removeOnSpill"
    });
    var ae, le, se, ce, ue, de = [],
        he = [],
        fe = !1,
        pe = !1,
        ge = !1;

    function me(n, o) {
        he.forEach(function(t, e) {
            e = o.children[t.sortableIndex + (n ? Number(e) : 0)];
            e ? o.insertBefore(t, e) : o.appendChild(t)
        })
    }

    function ve() {
        de.forEach(function(t) {
            t !== se && t.parentNode && t.parentNode.removeChild(t)
        })
    }
    return jt.mount(new function() {
        function t() {
            for (var t in this.defaults = {
                    scroll: !0,
                    forceAutoScrollFallback: !1,
                    scrollSensitivity: 30,
                    scrollSpeed: 10,
                    bubbleScroll: !0
                }, this) "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this))
        }
        return t.prototype = {
            dragStarted: function(t) {
                t = t.originalEvent;
                this.sortable.nativeDraggable ? h(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? h(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? h(document, "touchmove", this._handleFallbackAutoScroll) : h(document, "mousemove", this._handleFallbackAutoScroll)
            },
            dragOverCompleted: function(t) {
                t = t.originalEvent;
                this.options.dragOverBubble || t.rootEl || this._handleAutoScroll(t)
            },
            drop: function() {
                this.sortable.nativeDraggable ? f(document, "dragover", this._handleAutoScroll) : (f(document, "pointermove", this._handleFallbackAutoScroll), f(document, "touchmove", this._handleFallbackAutoScroll), f(document, "mousemove", this._handleFallbackAutoScroll)), ee(), te(), clearTimeout(m), m = void 0
            },
            nulling: function() {
                Zt = Ut = Gt = Jt = $t = qt = Vt = null, Qt.length = 0
            },
            _handleFallbackAutoScroll: function(t) {
                this._handleAutoScroll(t, !0)
            },
            _handleAutoScroll: function(e, n) {
                var o, i = this,
                    r = (e.touches ? e.touches[0] : e).clientX,
                    a = (e.touches ? e.touches[0] : e).clientY,
                    t = document.elementFromPoint(r, a);
                Zt = e, n || this.options.forceAutoScrollFallback || w || y || u ? (oe(e, this.options, t, n), o = M(t, !0), !Jt || $t && r === qt && a === Vt || ($t && ee(), $t = setInterval(function() {
                    var t = M(document.elementFromPoint(r, a), !0);
                    t !== o && (o = t, te()), oe(e, i.options, t, n)
                }, 10), qt = r, Vt = a)) : this.options.bubbleScroll && M(t, !0) !== O() ? oe(e, this.options, M(t, !1), !1) : te()
            }
        }, a(t, {
            pluginName: "scroll",
            initializeByDefault: !0
        })
    }), jt.mount(re, ie), jt.mount(new function() {
        function t() {
            this.defaults = {
                swapClass: "sortable-swap-highlight"
            }
        }
        return t.prototype = {
            dragStart: function(t) {
                t = t.dragEl;
                ne = t
            },
            dragOverValid: function(t) {
                var e = t.completed,
                    n = t.target,
                    o = t.onMove,
                    i = t.activeSortable,
                    r = t.changed,
                    a = t.cancel;
                i.options.swap && (t = this.sortable.el, i = this.options, n && n !== t && (t = ne, ne = !1 !== o(n) ? (k(n, i.swapClass, !0), n) : null, t && t !== ne && k(t, i.swapClass, !1)), r(), e(!0), a())
            },
            drop: function(t) {
                var e, n, o = t.activeSortable,
                    i = t.putSortable,
                    r = t.dragEl,
                    a = i || this.sortable,
                    l = this.options;
                ne && k(ne, l.swapClass, !1), ne && (l.swap || i && i.options.swap) && r !== ne && (a.captureAnimationState(), a !== o && o.captureAnimationState(), n = ne, t = (e = r).parentNode, l = n.parentNode, t && l && !t.isEqualNode(n) && !l.isEqualNode(e) && (i = j(e), r = j(n), t.isEqualNode(l) && i < r && r++, t.insertBefore(n, t.children[i]), l.insertBefore(e, l.children[r])), a.animateAll(), a !== o && o.animateAll())
            },
            nulling: function() {
                ne = null
            }
        }, a(t, {
            pluginName: "swap",
            eventProperties: function() {
                return {
                    swapItem: ne
                }
            }
        })
    }), jt.mount(new function() {
        function t(o) {
            for (var t in this) "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this));
            o.options.avoidImplicitDeselect || (o.options.supportPointer ? h(document, "pointerup", this._deselectMultiDrag) : (h(document, "mouseup", this._deselectMultiDrag), h(document, "touchend", this._deselectMultiDrag))), h(document, "keydown", this._checkKeyDown), h(document, "keyup", this._checkKeyUp), this.defaults = {
                selectedClass: "sortable-selected",
                multiDragKey: null,
                avoidImplicitDeselect: !1,
                setData: function(t, e) {
                    var n = "";
                    de.length && le === o ? de.forEach(function(t, e) {
                        n += (e ? ", " : "") + t.textContent
                    }) : n = e.textContent, t.setData("Text", n)
                }
            }
        }
        return t.prototype = {
            multiDragKeyDown: !1,
            isMultiDrag: !1,
            delayStartGlobal: function(t) {
                t = t.dragEl;
                se = t
            },
            delayEnded: function() {
                this.isMultiDrag = ~de.indexOf(se)
            },
            setupClone: function(t) {
                var e = t.sortable,
                    t = t.cancel;
                if (this.isMultiDrag) {
                    for (var n = 0; n < de.length; n++) he.push(C(de[n])), he[n].sortableIndex = de[n].sortableIndex, he[n].draggable = !1, he[n].style["will-change"] = "", k(he[n], this.options.selectedClass, !1), de[n] === se && k(he[n], this.options.chosenClass, !1);
                    e._hideClone(), t()
                }
            },
            clone: function(t) {
                var e = t.sortable,
                    n = t.rootEl,
                    o = t.dispatchSortableEvent,
                    t = t.cancel;
                this.isMultiDrag && (this.options.removeCloneOnHide || de.length && le === e && (me(!0, n), o("clone"), t()))
            },
            showClone: function(t) {
                var e = t.cloneNowShown,
                    n = t.rootEl,
                    t = t.cancel;
                this.isMultiDrag && (me(!1, n), he.forEach(function(t) {
                    R(t, "display", "")
                }), e(), ue = !1, t())
            },
            hideClone: function(t) {
                var e = this,
                    n = (t.sortable, t.cloneNowHidden),
                    t = t.cancel;
                this.isMultiDrag && (he.forEach(function(t) {
                    R(t, "display", "none"), e.options.removeCloneOnHide && t.parentNode && t.parentNode.removeChild(t)
                }), n(), ue = !0, t())
            },
            dragStartGlobal: function(t) {
                t.sortable;
                !this.isMultiDrag && le && le.multiDrag._deselectMultiDrag(), de.forEach(function(t) {
                    t.sortableIndex = j(t)
                }), de = de.sort(function(t, e) {
                    return t.sortableIndex - e.sortableIndex
                }), ge = !0
            },
            dragStarted: function(t) {
                var e, n = this,
                    t = t.sortable;
                this.isMultiDrag && (this.options.sort && (t.captureAnimationState(), this.options.animation && (de.forEach(function(t) {
                    t !== se && R(t, "position", "absolute")
                }), e = X(se, !1, !0, !0), de.forEach(function(t) {
                    t !== se && T(t, e)
                }), fe = pe = !0)), t.animateAll(function() {
                    fe = pe = !1, n.options.animation && de.forEach(function(t) {
                        x(t)
                    }), n.options.sort && ve()
                }))
            },
            dragOver: function(t) {
                var e = t.target,
                    n = t.completed,
                    t = t.cancel;
                pe && ~de.indexOf(e) && (n(!1), t())
            },
            revert: function(t) {
                var n, o, e = t.fromSortable,
                    i = t.rootEl,
                    r = t.sortable,
                    a = t.dragRect;
                1 < de.length && (de.forEach(function(t) {
                    r.addAnimationState({
                        target: t,
                        rect: pe ? X(t) : a
                    }), x(t), t.fromRect = a, e.removeAnimationState(t)
                }), pe = !1, n = !this.options.removeCloneOnHide, o = i, de.forEach(function(t, e) {
                    e = o.children[t.sortableIndex + (n ? Number(e) : 0)];
                    e ? o.insertBefore(t, e) : o.appendChild(t)
                }))
            },
            dragOverCompleted: function(t) {
                var e, n = t.sortable,
                    o = t.isOwner,
                    i = t.insertion,
                    r = t.activeSortable,
                    a = t.parentEl,
                    l = t.putSortable,
                    t = this.options;
                i && (o && r._hideClone(), fe = !1, t.animation && 1 < de.length && (pe || !o && !r.options.sort && !l) && (e = X(se, !1, !0, !0), de.forEach(function(t) {
                    t !== se && (T(t, e), a.appendChild(t))
                }), pe = !0), o || (pe || ve(), 1 < de.length ? (o = ue, r._showClone(n), r.options.animation && !ue && o && he.forEach(function(t) {
                    r.addAnimationState({
                        target: t,
                        rect: ce
                    }), t.fromRect = ce, t.thisAnimationDuration = null
                })) : r._showClone(n)))
            },
            dragOverAnimationCapture: function(t) {
                var e = t.dragRect,
                    n = t.isOwner,
                    t = t.activeSortable;
                de.forEach(function(t) {
                    t.thisAnimationDuration = null
                }), t.options.animation && !n && t.multiDrag.isMultiDrag && (ce = a({}, e), e = b(se, !0), ce.top -= e.f, ce.left -= e.e)
            },
            dragOverAnimationComplete: function() {
                pe && (pe = !1, ve())
            },
            drop: function(t) {
                var e = t.originalEvent,
                    n = t.rootEl,
                    o = t.parentEl,
                    i = t.sortable,
                    r = t.dispatchSortableEvent,
                    a = t.oldIndex,
                    l = t.putSortable,
                    s = l || this.sortable;
                if (e) {
                    var c, u, d, h = this.options,
                        f = o.children;
                    if (!ge)
                        if (h.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), k(se, h.selectedClass, !~de.indexOf(se)), ~de.indexOf(se)) de.splice(de.indexOf(se), 1), ae = null, G({
                            sortable: i,
                            rootEl: n,
                            name: "deselect",
                            targetEl: se,
                            originalEvent: e
                        });
                        else {
                            if (de.push(se), G({
                                    sortable: i,
                                    rootEl: n,
                                    name: "select",
                                    targetEl: se,
                                    originalEvent: e
                                }), e.shiftKey && ae && i.el.contains(ae)) {
                                var p = j(ae),
                                    t = j(se);
                                if (~p && ~t && p !== t)
                                    for (var g, m = p < t ? (g = p, t) : (g = t, p + 1); g < m; g++) ~de.indexOf(f[g]) || (k(f[g], h.selectedClass, !0), de.push(f[g]), G({
                                        sortable: i,
                                        rootEl: n,
                                        name: "select",
                                        targetEl: f[g],
                                        originalEvent: e
                                    }))
                            } else ae = se;
                            le = s
                        }
                    ge && this.isMultiDrag && (pe = !1, (o[K].options.sort || o !== n) && 1 < de.length && (c = X(se), u = j(se, ":not(." + this.options.selectedClass + ")"), !fe && h.animation && (se.thisAnimationDuration = null), s.captureAnimationState(), fe || (h.animation && (se.fromRect = c, de.forEach(function(t) {
                        var e;
                        t.thisAnimationDuration = null, t !== se && (e = pe ? X(t) : c, t.fromRect = e, s.addAnimationState({
                            target: t,
                            rect: e
                        }))
                    })), ve(), de.forEach(function(t) {
                        f[u] ? o.insertBefore(t, f[u]) : o.appendChild(t), u++
                    }), a === j(se) && (d = !1, de.forEach(function(t) {
                        t.sortableIndex !== j(t) && (d = !0)
                    }), d && (r("update"), r("sort")))), de.forEach(function(t) {
                        x(t)
                    }), s.animateAll()), le = s), (n === o || l && "clone" !== l.lastPutMode) && he.forEach(function(t) {
                        t.parentNode && t.parentNode.removeChild(t)
                    })
                }
            },
            nullingGlobal: function() {
                this.isMultiDrag = ge = !1, he.length = 0
            },
            destroyGlobal: function() {
                this._deselectMultiDrag(), f(document, "pointerup", this._deselectMultiDrag), f(document, "mouseup", this._deselectMultiDrag), f(document, "touchend", this._deselectMultiDrag), f(document, "keydown", this._checkKeyDown), f(document, "keyup", this._checkKeyUp)
            },
            _deselectMultiDrag: function(t) {
                if (!(void 0 !== ge && ge || le !== this.sortable || t && P(t.target, this.options.draggable, this.sortable.el, !1) || t && 0 !== t.button))
                    for (; de.length;) {
                        var e = de[0];
                        k(e, this.options.selectedClass, !1), de.shift(), G({
                            sortable: this.sortable,
                            rootEl: this.sortable.el,
                            name: "deselect",
                            targetEl: e,
                            originalEvent: t
                        })
                    }
            },
            _checkKeyDown: function(t) {
                t.key === this.options.multiDragKey && (this.multiDragKeyDown = !0)
            },
            _checkKeyUp: function(t) {
                t.key === this.options.multiDragKey && (this.multiDragKeyDown = !1)
            }
        }, a(t, {
            pluginName: "multiDrag",
            utils: {
                select: function(t) {
                    var e = t.parentNode[K];
                    e && e.options.multiDrag && !~de.indexOf(t) && (le && le !== e && (le.multiDrag._deselectMultiDrag(), le = e), k(t, e.options.selectedClass, !0), de.push(t))
                },
                deselect: function(t) {
                    var e = t.parentNode[K],
                        n = de.indexOf(t);
                    e && e.options.multiDrag && ~n && (k(t, e.options.selectedClass, !1), de.splice(n, 1))
                }
            },
            eventProperties: function() {
                var n = this,
                    o = [],
                    i = [];
                return de.forEach(function(t) {
                    var e;
                    o.push({
                        multiDragElement: t,
                        index: t.sortableIndex
                    }), e = pe && t !== se ? -1 : pe ? j(t, ":not(." + n.options.selectedClass + ")") : j(t), i.push({
                        multiDragElement: t,
                        index: e
                    })
                }), {
                    items: r(de),
                    clones: [].concat(he),
                    oldIndicies: o,
                    newIndicies: i
                }
            },
            optionListeners: {
                multiDragKey: function(t) {
                    return "ctrl" === (t = t.toLowerCase()) ? t = "Control" : 1 < t.length && (t = t.charAt(0).toUpperCase() + t.substr(1)), t
                }
            }
        })
    }), jt
});
(function() {

    var debug = false;

    var root = this;

    var EXIF = function(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {
        root.EXIF = EXIF;
    }

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000: "ExifVersion", // EXIF version
        0xA000: "FlashpixVersion", // Flashpix format version

        // colorspace tags
        0xA001: "ColorSpace", // Color space information tag

        // image configuration
        0xA002: "PixelXDimension", // Valid width of meaningful image
        0xA003: "PixelYDimension", // Valid height of meaningful image
        0x9101: "ComponentsConfiguration", // Information about channels
        0x9102: "CompressedBitsPerPixel", // Compressed bits per pixel

        // user information
        0x927C: "MakerNote", // Any desired information written by the manufacturer
        0x9286: "UserComment", // Comments by user

        // related file
        0xA004: "RelatedSoundFile", // Name of related sound file

        // date and time
        0x9003: "DateTimeOriginal", // Date and time when the original image was generated
        0x9004: "DateTimeDigitized", // Date and time when the image was stored digitally
        0x9290: "SubsecTime", // Fractions of seconds for DateTime
        0x9291: "SubsecTimeOriginal", // Fractions of seconds for DateTimeOriginal
        0x9292: "SubsecTimeDigitized", // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A: "ExposureTime", // Exposure time (in seconds)
        0x829D: "FNumber", // F number
        0x8822: "ExposureProgram", // Exposure program
        0x8824: "SpectralSensitivity", // Spectral sensitivity
        0x8827: "ISOSpeedRatings", // ISO speed rating
        0x8828: "OECF", // Optoelectric conversion factor
        0x9201: "ShutterSpeedValue", // Shutter speed
        0x9202: "ApertureValue", // Lens aperture
        0x9203: "BrightnessValue", // Value of brightness
        0x9204: "ExposureBias", // Exposure bias
        0x9205: "MaxApertureValue", // Smallest F number of lens
        0x9206: "SubjectDistance", // Distance to subject in meters
        0x9207: "MeteringMode", // Metering mode
        0x9208: "LightSource", // Kind of light source
        0x9209: "Flash", // Flash status
        0x9214: "SubjectArea", // Location and area of main subject
        0x920A: "FocalLength", // Focal length of the lens in mm
        0xA20B: "FlashEnergy", // Strobe energy in BCPS
        0xA20C: "SpatialFrequencyResponse", //
        0xA20E: "FocalPlaneXResolution", // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F: "FocalPlaneYResolution", // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210: "FocalPlaneResolutionUnit", // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214: "SubjectLocation", // Location of subject in image
        0xA215: "ExposureIndex", // Exposure index selected on camera
        0xA217: "SensingMethod", // Image sensor type
        0xA300: "FileSource", // Image source (3 == DSC)
        0xA301: "SceneType", // Scene type (1 == directly photographed)
        0xA302: "CFAPattern", // Color filter array geometric pattern
        0xA401: "CustomRendered", // Special processing
        0xA402: "ExposureMode", // Exposure mode
        0xA403: "WhiteBalance", // 1 = auto white balance, 2 = manual
        0xA404: "DigitalZoomRation", // Digital zoom ratio
        0xA405: "FocalLengthIn35mmFilm", // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406: "SceneCaptureType", // Type of scene
        0xA407: "GainControl", // Degree of overall image gain adjustment
        0xA408: "Contrast", // Direction of contrast processing applied by camera
        0xA409: "Saturation", // Direction of saturation processing applied by camera
        0xA40A: "Sharpness", // Direction of sharpness processing applied by camera
        0xA40B: "DeviceSettingDescription", //
        0xA40C: "SubjectDistanceRange", // Distance to subject

        // other tags
        0xA005: "InteroperabilityIFDPointer",
        0xA420: "ImageUniqueID" // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x8769: "ExifIFDPointer",
        0x8825: "GPSInfoIFDPointer",
        0xA005: "InteroperabilityIFDPointer",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x011C: "PlanarConfiguration",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x0128: "ResolutionUnit",
        0x0111: "StripOffsets",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x0201: "JPEGInterchangeFormat",
        0x0202: "JPEGInterchangeFormatLength",
        0x012D: "TransferFunction",
        0x013E: "WhitePoint",
        0x013F: "PrimaryChromaticities",
        0x0211: "YCbCrCoefficients",
        0x0214: "ReferenceBlackWhite",
        0x0132: "DateTime",
        0x010E: "ImageDescription",
        0x010F: "Make",
        0x0110: "Model",
        0x0131: "Software",
        0x013B: "Artist",
        0x8298: "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000: "GPSVersionID",
        0x0001: "GPSLatitudeRef",
        0x0002: "GPSLatitude",
        0x0003: "GPSLongitudeRef",
        0x0004: "GPSLongitude",
        0x0005: "GPSAltitudeRef",
        0x0006: "GPSAltitude",
        0x0007: "GPSTimeStamp",
        0x0008: "GPSSatellites",
        0x0009: "GPSStatus",
        0x000A: "GPSMeasureMode",
        0x000B: "GPSDOP",
        0x000C: "GPSSpeedRef",
        0x000D: "GPSSpeed",
        0x000E: "GPSTrackRef",
        0x000F: "GPSTrack",
        0x0010: "GPSImgDirectionRef",
        0x0011: "GPSImgDirection",
        0x0012: "GPSMapDatum",
        0x0013: "GPSDestLatitudeRef",
        0x0014: "GPSDestLatitude",
        0x0015: "GPSDestLongitudeRef",
        0x0016: "GPSDestLongitude",
        0x0017: "GPSDestBearingRef",
        0x0018: "GPSDestBearing",
        0x0019: "GPSDestDistanceRef",
        0x001A: "GPSDestDistance",
        0x001B: "GPSProcessingMethod",
        0x001C: "GPSAreaInformation",
        0x001D: "GPSDateStamp",
        0x001E: "GPSDifferential"
    };

    // EXIF 2.3 Spec
    var IFD1Tags = EXIF.IFD1Tags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0111: "StripOffsets",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x011C: "PlanarConfiguration",
        0x0128: "ResolutionUnit",
        0x0201: "JpegIFOffset", // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
        0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
        0x0211: "YCbCrCoefficients",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x0214: "ReferenceBlackWhite"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram: {
            0: "Not defined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        },
        MeteringMode: {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        },
        LightSource: {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        },
        Flash: {
            0x0000: "Flash did not fire",
            0x0001: "Flash fired",
            0x0005: "Strobe return light not detected",
            0x0007: "Strobe return light detected",
            0x0009: "Flash fired, compulsory flash mode",
            0x000D: "Flash fired, compulsory flash mode, return light not detected",
            0x000F: "Flash fired, compulsory flash mode, return light detected",
            0x0010: "Flash did not fire, compulsory flash mode",
            0x0018: "Flash did not fire, auto mode",
            0x0019: "Flash fired, auto mode",
            0x001D: "Flash fired, auto mode, return light not detected",
            0x001F: "Flash fired, auto mode, return light detected",
            0x0020: "No flash function",
            0x0041: "Flash fired, red-eye reduction mode",
            0x0045: "Flash fired, red-eye reduction mode, return light not detected",
            0x0047: "Flash fired, red-eye reduction mode, return light detected",
            0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059: "Flash fired, auto mode, red-eye reduction mode",
            0x005D: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod: {
            1: "Not defined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        },
        SceneCaptureType: {
            0: "Standard",
            1: "Landscape",
            2: "Portrait",
            3: "Night scene"
        },
        SceneType: {
            1: "Directly photographed"
        },
        CustomRendered: {
            0: "Normal process",
            1: "Custom process"
        },
        WhiteBalance: {
            0: "Auto white balance",
            1: "Manual white balance"
        },
        GainControl: {
            0: "None",
            1: "Low gain up",
            2: "High gain up",
            3: "Low gain down",
            4: "High gain down"
        },
        Contrast: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        Saturation: {
            0: "Normal",
            1: "Low saturation",
            2: "High saturation"
        },
        Sharpness: {
            0: "Normal",
            1: "Soft",
            2: "Hard"
        },
        SubjectDistanceRange: {
            0: "Unknown",
            1: "Macro",
            2: "Close view",
            3: "Distant view"
        },
        FileSource: {
            3: "DSC"
        },

        Components: {
            0: "",
            1: "Y",
            2: "Cb",
            3: "Cr",
            4: "R",
            5: "G",
            6: "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }


    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function(e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            img.exifdata = data || {};
            var iptcdata = findIPTCinJPEG(binFile);
            img.iptcdata = iptcdata || {};
            if (EXIF.isXmpEnabled) {
                var xmpdata = findXMPinJPEG(binFile);
                img.xmpdata = xmpdata || {};
            }
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) { // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);

            } else if (/^blob\:/i.test(img.src)) { // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function(e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function(blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function() {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else {
                offset += 2 + dataView.getUint16(offset + 2);
            }

        }

    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;


        var isFieldSegmentStart = function(dataView, offset) {
            return (
                dataView.getUint8(offset) === 0x38 &&
                dataView.getUint8(offset + 1) === 0x42 &&
                dataView.getUint8(offset + 2) === 0x49 &&
                dataView.getUint8(offset + 3) === 0x4D &&
                dataView.getUint8(offset + 4) === 0x04 &&
                dataView.getUint8(offset + 5) === 0x04
            );
        };

        while (offset < length) {

            if (isFieldSegmentStart(dataView, offset)) {

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset + 7);
                if (nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if (nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;

            }


            // Not the marker, continue searching
            offset++;

        }

    }
    var IptcFieldMap = {
        0x78: 'caption',
        0x6E: 'credit',
        0x19: 'keywords',
        0x37: 'dateCreated',
        0x50: 'byline',
        0x55: 'bylineTitle',
        0x7A: 'captionWriter',
        0x69: 'headline',
        0x74: 'copyright',
        0x0F: 'category'
    };

    function readIPTCData(file, startOffset, sectionLength) {
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while (segmentStartPos < startOffset + sectionLength) {
            if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
                segmentType = dataView.getUint8(segmentStartPos + 2);
                if (segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos + 3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos + 5, dataSize);
                    // Check if we already stored a value with this name
                    if (data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if (data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        } else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    } else {
                        data[fieldName] = fieldValue;
                    }
                }

            }
            segmentStartPos++;
        }
        return data;
    }



    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset, tag,
            i;

        for (i = 0; i < entries; i++) {
            entryOffset = dirStart + i * 12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset + 2, !bigEnd),
            numValues = file.getUint32(entryOffset + 4, !bigEnd),
            valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return getStringFromDB(file, offset, numValues - 1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }

            case 5: // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset + 4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
                        denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
                } else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    /**
     * Given an IFD (Image File Directory) start offset
     * returns an offset to next IFD or 0 if it's the last IFD.
     */
    function getNextIFDOffset(dataView, dirStart, bigEnd) {
        //the first 2bytes means the number of directory entries contains in this IFD
        var entries = dataView.getUint16(dirStart, !bigEnd);

        // After last directory entry, there is a 4bytes of data,
        // it means an offset to next IFD.
        // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

        return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
    }

    function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd) {
        // get the IFD1 offset
        var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart + firstIFDOffset, bigEnd);

        if (!IFD1OffsetPointer) {
            // console.log('******** IFD1Offset is empty, image thumb not found ********');
            return {};
        } else if (IFD1OffsetPointer > dataView.byteLength) { // this should not happen
            // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
            return {};
        }
        // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

        var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd)

        // EXIF 2.3 specification for JPEG format thumbnail

        // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
        // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
        // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
        // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
        // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

        if (thumbTags['Compression']) {
            // console.log('Thumbnail image found!');

            switch (thumbTags['Compression']) {
                case 6:
                    // console.log('Thumbnail image format is JPEG');
                    if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                        // extract the thumbnail
                        var tOffset = tiffStart + thumbTags.JpegIFOffset;
                        var tLength = thumbTags.JpegIFByteCount;
                        thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                            type: 'image/jpeg'
                        });
                    }
                    break;

                case 1:
                    console.log("Thumbnail image format is TIFF, which is not implemented.");
                    break;
                default:
                    console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
            }
        } else if (thumbTags['PhotometricInterpretation'] == 2) {
            console.log("Thumbnail image format is RGB, which is not implemented.");
        }
        return thumbTags;
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (var n = start; n < start + length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset + 2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset + 4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource":
                    case "Flash":
                    case "MeteringMode":
                    case "ExposureProgram":
                    case "SensingMethod":
                    case "SceneCaptureType":
                    case "SceneType":
                    case "CustomRendered":
                    case "WhiteBalance":
                    case "GainControl":
                    case "Contrast":
                    case "Saturation":
                    case "Sharpness":
                    case "SubjectDistanceRange":
                    case "FileSource":
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion":
                    case "FlashpixVersion":
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration":
                        exifData[tag] =
                            StringValues.Components[exifData[tag][0]] +
                            StringValues.Components[exifData[tag][1]] +
                            StringValues.Components[exifData[tag][2]] +
                            StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID":
                        gpsData[tag] = gpsData[tag][0] +
                            "." + gpsData[tag][1] +
                            "." + gpsData[tag][2] +
                            "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        // extract thumbnail
        tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

        return tags;
    }

    function findXMPinJPEG(file) {

        if (!('DOMParser' in self)) {
            // console.warn('XML parsing not supported without DOMParser');
            return;
        }
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            dom = new DOMParser();

        while (offset < (length - 4)) {
            if (getStringFromDB(dataView, offset, 4) == "http") {
                var startOffset = offset - 1;
                var sectionLength = dataView.getUint16(offset - 2) - 1;
                var xmpString = getStringFromDB(dataView, startOffset, sectionLength)
                var xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
                xmpString = xmpString.substring(xmpString.indexOf('<x:xmpmeta'), xmpEndIndex);

                var indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10
                //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
                //Without these namespaces, XML is thought to be invalid by parsers
                xmpString = xmpString.slice(0, indexOfXmp) +
                    'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" ' +
                    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
                    'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" ' +
                    'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" ' +
                    'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" ' +
                    'xmlns:exif="http://ns.adobe.com/exif/1.0/" ' +
                    'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" ' +
                    'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" ' +
                    'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" ' +
                    'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" ' +
                    'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" ' +
                    xmpString.slice(indexOfXmp)

                var domDocument = dom.parseFromString(xmpString, 'text/xml');
                return xml2Object(domDocument);
            } else {
                offset++;
            }
        }
    }

    function xml2json(xml) {
        var json = {};

        if (xml.nodeType == 1) { // element node
            if (xml.attributes.length > 0) {
                json['@attributes'] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    json['@attributes'][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType == 3) { // text node
            return xml.nodeValue;
        }

        // deal with children
        if (xml.hasChildNodes()) {
            for (var i = 0; i < xml.childNodes.length; i++) {
                var child = xml.childNodes.item(i);
                var nodeName = child.nodeName;
                if (json[nodeName] == null) {
                    json[nodeName] = xml2json(child);
                } else {
                    if (json[nodeName].push == null) {
                        var old = json[nodeName];
                        json[nodeName] = [];
                        json[nodeName].push(old);
                    }
                    json[nodeName].push(xml2json(child));
                }
            }
        }

        return json;
    }

    function xml2Object(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
                for (var i = 0; i < xml.children.length; i++) {
                    var item = xml.children.item(i);
                    var attributes = item.attributes;
                    for (var idx in attributes) {
                        var itemAtt = attributes[idx];
                        var dataKey = itemAtt.nodeName;
                        var dataValue = itemAtt.nodeValue;

                        if (dataKey !== undefined) {
                            obj[dataKey] = dataValue;
                        }
                    }
                    var nodeName = item.nodeName;

                    if (typeof(obj[nodeName]) == "undefined") {
                        obj[nodeName] = xml2json(item);
                    } else {
                        if (typeof(obj[nodeName].push) == "undefined") {
                            var old = obj[nodeName];

                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(xml2json(item));
                    }
                }
            } else {
                obj = xml.textContent;
            }
            return obj;
        } catch (e) {
            console.log(e.message);
        }
    }

    EXIF.enableXmp = function() {
        EXIF.isXmpEnabled = true;
    }

    EXIF.disableXmp = function() {
        EXIF.isXmpEnabled = false;
    }

    EXIF.getData = function(img, callback) {
        if (((self.Image && img instanceof self.Image) ||
                (self.HTMLImageElement && img instanceof self.HTMLImageElement)) &&
            !img.complete)
            return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    EXIF.getTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }

    EXIF.getIptcTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.iptcdata[tag];
    }

    EXIF.getAllTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    EXIF.getAllIptcTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.iptcdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    EXIF.pretty = function(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    EXIF.readFromBinaryFile = function(file) {
        return findEXIFinJPEG(file);
    }

    if (typeof define === 'function' && define.amd) {
        define('exif-js', [], function() {
            return EXIF;
        });
    }
}.call(this));


/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function(e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.0",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function(e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }

    function Se(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Se(this, e, Ce), !1
            },
            trigger: function() {
                return Se(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Me = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
        $e = E.createElement("div").style,
        _e = {};

    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
            while (n--)
                if ((e = Be[n] + t) in $e) return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = Re(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() {
                    return Je(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Re(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Ke.prototype.init, S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
    }

    function at() {
        return C.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function st(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function lt(o, e, t) {
        var n, a, r = 0,
            i = lt.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || at(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], rt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = lt(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), Ze = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        et || (et = !0, ot())
    }, S.fx.stop = function() {
        et = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ct = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(P) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, gt(this)))
            });
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = vt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var bt = C.location,
        wt = {
            guid: Date.now()
        },
        Tt = /\?/;
    S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Ct = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) At(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g,
        jt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Ot = {},
        Pt = {},
        Rt = "*/".concat("*"),
        Mt = E.createElement("a");

    function It(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Wt(t, i, o, a) {
        var s = {},
            u = t === Pt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Mt.href = bt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var _t, zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) {
            if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Vt = C.jQuery,
        Gt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});