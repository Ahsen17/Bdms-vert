!function () {
    "use strict";
    var t = {};
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var e = function () {
        return e = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
            ,
            e.apply(this, arguments)
    };
    function n(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n)
            return t;
        var r, o, i = n.call(t), a = [];
        try {
            for (; (void 0 === e || e-- > 0) && !(r = i.next()).done;)
                a.push(r.value)
        } catch (u) {
            o = {
                error: u
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    var r = function () {
        return {}
    };
    function o(t) {
        return "object" == typeof t && null !== t
    }
    function i(t) {
        return "function" == typeof t
    }
    function a(t, e) {
        return t.initSubject(e)
    }
    var u = function () {
        return Date.now()
    };
    function c() {
        if ("object" == typeof window && o(window))
            return window
    }
    function s() {
        if ("object" == typeof document && o(document))
            return document
    }
    function l() {
        if (c() && i(window.PerformanceObserver))
            return window.PerformanceObserver
    }
    var f = function (t, e, n, r) {
        return void 0 === r && (r = !1),
            t.addEventListener(e, n, r),
            function () {
                t.removeEventListener(e, n, r)
            }
    }
        , d = function (t, n) {
            return o(t) ? e(e({}, n), t) : !!t && n
        }
        , v = ["resource"]
        , p = ["longtask"]
        , h = function (t, e, r) {
            var o, i, a, u, c = n((i = e,
                u = (o = t) && new o((function (t, e) {
                    t.getEntries && t.getEntries().forEach((function (t, n, r) {
                        return i(t, n, r, e)
                    }
                    ))
                }
                )),
                [function (t) {
                    if (!o || !u)
                        return a;
                    try {
                        u.observe({
                            entryTypes: t
                        })
                    } catch (c) {
                        return a
                    }
                }
                    , function (t, e) {
                        if (!o || !u)
                            return a;
                        try {
                            var n = {
                                type: t,
                                buffered: !0
                            };
                            void 0 !== e && (n.durationThreshold = e),
                                u.observe(n)
                        } catch (c) {
                            return a
                        }
                        u.observe({
                            type: t,
                            buffered: !1
                        })
                    }
                    , function () {
                        return u && u.disconnect()
                    }
                ]), 3), s = c[0], l = c[2];
            return s(r),
                l
        }
        , m = ["longtask_0", function (t, e) {
            var n = l();
            n && e(h(n, t, p))
        }
        ]
        , g = ["resource_0", function (t, e) {
            var n = l();
            if (n) {
                var r, o = (r = new RegExp("\\/monitor_web\\/collect|\\/monitor_browser\\/collect\\/batch", "i"),
                    function (t) {
                        return r.test(t)
                    }
                );
                e(h(n, (function (e) {
                    !o(e.name) && t(e)
                }
                ), v))
            }
        }
        ]
        , y = "js_error"
        , w = "http"
        , b = "resource_error"
        , _ = "blank_screen"
        , S = ["unload_0", function (t, e) {
            var r = c();
            if (r) {
                var o, i, a = n((o = t,
                    i = !1,
                    [function (t) {
                        i || (i = !0,
                            o && o(t))
                    }
                    ]), 1)[0], u = function () {
                        a()
                    }, s = [];
                ["unload", "beforeunload", "pagehide"].forEach((function (t) {
                    var e, n, o, i;
                    s.push((n = t,
                        o = u,
                        i = !1,
                        (e = r).addEventListener(n, o, i),
                        function () {
                            e.removeEventListener(n, o, i)
                        }
                    ))
                }
                )),
                    e((function () {
                        s.forEach((function (t) {
                            return t()
                        }
                        ))
                    }
                    ))
            }
        }
        ]
        , E = ["domLoad_1", function (t, e) {
            var n = c()
                , o = s();
            if (n && o) {
                var i = !1
                    , a = r
                    , u = function () {
                        setTimeout((function () {
                            t(),
                                i = !0
                        }
                        ), 0)
                    };
                "loading" !== o.readyState ? u() : a = f(o, "DOMContentLoaded", u, !1),
                    e((function () {
                        a()
                    }
                    ), (function (t) {
                        i && t()
                    }
                    ))
            }
        }
        ]
        , T = ["activated_0", function (t, e) {
            var n = s();
            if (n) {
                var o = !1
                    , i = r
                    , a = function () {
                        t(),
                            o = !0
                    };
                n && n.prerendering ? i = f(n, "prerenderingchange", a, !0) : a(),
                    e((function () {
                        i()
                    }
                    ), (function (t) {
                        o && t()
                    }
                    ))
            }
        }
        ]
        , x = ["SCRIPT", "STYLE", "META", "HEAD"]
        , O = [y, w, b]
        , L = ["performance", "performance_longtask", "performance_timing", "custom"]
        , k = function (t, e) {
            return ~x.indexOf(t.tagName) || e > 4
        }
        , j = function (t) {
            var e = t.getBoundingClientRect();
            return {
                width: e.width,
                height: e.height,
                top: e.top
            }
        }
        , N = function (t) {
            return t ? document.querySelector(t) : document.body
        }
        , A = function (t, e, n, r) {
            if (void 0 === e && (e = 0),
                void 0 === n && (n = 0),
                void 0 === r && (r = 1.5),
                !t || k(t, e) || n >= r)
                return n;
            var o = function () {
                if (!e)
                    return 0;
                var n = j(t)
                    , r = n.top
                    , o = n.height;
                return r > innerHeight || o <= 0 ? 0 : 1 / (1 << e - 1)
            }();
            return [].reduceRight.call(t.children, (function (t, n) {
                return A(n, e + 1, t, r)
            }
            ), n + o)
        };
    function R(t, n, r) {
        if (void 0 === n && (n = 0),
            void 0 === r && (r = !0),
            !t || k(t, n))
            return "";
        var o = e(e({}, j(t)), {
            id: t.getAttribute("id"),
            class: t.getAttribute("class")
        })
            , i = Object.keys(o).reduce((function (t, e) {
                return t + ("number" == typeof o[e] || o[e] ? " " + e + '="' + o[e] + '"' : "")
            }
            ), "")
            , a = t.tagName.toLowerCase()
            , u = [].reduce.call(t.children, (function (t, e) {
                return t + R(e, n + 1, !1)
            }
            ), "");
        return "<" + a + i + (r ? ' innerHeight="' + innerHeight + '"' : "") + ">" + u + "</" + a + ">"
    }
    var M = function (t) {
        var e, n = t.cb, r = t.screenshotUrl, o = t.window, i = t.document, a = t.mask, u = t.partialShot, s = t.quality, l = t.rootSelector;
        if (function () {
            if (c() && "Promise" in window)
                return Promise
        }() && o && i) {
            if (o.html2canvas)
                return d();
            var f = i.createElement("script");
            f.src = r,
                f.crossOrigin = "anonymous",
                f.onload = d,
                f.onerror = function () {
                    n()
                }
                ,
                null === (e = i.head) || void 0 === e || e.appendChild(f)
        }
        function d() {
            var t;
            ((t = o).requestIdleCallback || function (e) {
                return t.setTimeout(e, 1)
            }
            )((function () {
                o.html2canvas && o.html2canvas(u && l && i.querySelector(l) || i.body, {
                    scale: 360 / o.innerWidth,
                    mask: a
                }).then((function (t) {
                    var e;
                    n("data:image" === (e = t.toDataURL("image/jpeg", s)).slice(0, 10) ? e : C())
                }
                )).catch((function () {
                    n(C())
                }
                ))
            }
            ))
        }
    };
    function C(t, e) {
        void 0 === t && (t = 192),
            void 0 === e && (e = 108);
        var n = document.createElement("canvas");
        n.width = t,
            n.height = e;
        var r = n.getContext("2d");
        return r && (r.fillStyle = "#ffffff",
            r.fillRect(0, 0, t, e)),
            n.toDataURL("image/jpeg")
    }
    var P = function (t, e, o, a) {
        var l, f, d, v, p, h, m, g, S, E = n(o, 5), T = E[0], x = E[1], k = E[2], j = E[3], C = E[4], P = a.threshold, D = a.screenshot, z = a.rootSelector, $ = a.autoDetect, q = a.ssUrl, B = a.quality, H = a.mask, I = a.partialShot, U = a.initDetTime, F = a.runDetTime, W = c(), G = s(), X = W.requestAnimationFrame || r, Y = W.cancelAnimationFrame || r, V = n((l = performance,
            [f = l && l.timing || void 0, function () {
                return l && l.now ? l.now() : (Date.now ? Date.now() : +new Date) - (f && f.navigationStart || 0)
            }
                , function (t) {
                    var e = (l || {}).getEntriesByType;
                    return i(e) && e.call(l, t) || []
                }
                , function () {
                    var t = (l || {}).clearResourceTimings;
                    i(t) && t.call(l)
                }
                , function (t) {
                    var e = (l || {}).getEntriesByName;
                    return i(e) && e.call(l, t) || []
                }
            ]), 2)[1], J = 0, K = !1, Q = !D, Z = function () {
                var t = N(z);
                if (t) {
                    var e = A(t, 0, 0, P);
                    return e < P ? [u(), e] : void 0
                }
            }, tt = function (n, r) {
                K || (d = Z()) && (K = !0,
                    e.forEach((function (t) {
                        return t()
                    }
                    )),
                    e.length = 0,
                    t({
                        ev_type: _,
                        payload: {
                            timestamp: d[0],
                            score: d[1],
                            screenshot: r,
                            error: v,
                            serialized_dom: R(N(z))
                        },
                        overrides: {
                            timestamp: n || d[0]
                        }
                    }))
            }, et = function () {
                m && clearTimeout(m),
                    p && clearTimeout(p),
                    p = W.setTimeout((function () {
                        h = X((function () {
                            (d = Z()) && nt()
                        }
                        ))
                    }
                    ), 1e3)
            }, nt = (g = function () {
                d && !K && (Q ? tt() : (Q = !0,
                    M({
                        cb: tt.bind(null, u()),
                        screenshotUrl: q,
                        window: W,
                        document: G,
                        mask: H,
                        partialShot: I,
                        quality: B,
                        rootSelector: z
                    })))
            }
                ,
                function () {
                    m && clearTimeout(m),
                        S = u(),
                        m = W.setTimeout((function () {
                            J > S ? et() : g()
                        }
                        ), V() > 1e4 ? F : U)
                }
            );
        return e.push(C[0]((function () {
            v && tt()
        }
        ))),
            $ && e.push(T[0]((function () {
                var t = x();
                e.push(t[0]((function () {
                    var t, r, o, a = n((r = function () {
                        if (c() && i(window.MutationObserver))
                            return window.MutationObserver
                    }(),
                        o = r && new r(et),
                        [function (t, e) {
                            o && t && o.observe(t, e)
                        }
                            , function () {
                                return o && o.disconnect()
                            }
                        ]), 2), u = a[0], l = a[1];
                    e.push((function () {
                        clearTimeout(p),
                            clearTimeout(m),
                            Y(h),
                            l && l()
                    }
                    )),
                        u(null === (t = s()) || void 0 === t ? void 0 : t.body, {
                            subtree: !0,
                            childList: !0
                        }),
                        e.push(k()[0]((function () {
                            p && et()
                        }
                        ))),
                        e.push(j()[0]((function () {
                            p && et()
                        }
                        ))),
                        et()
                }
                )))
            }
            ))),
            [function (t) {
                K || function (t) {
                    return ~L.indexOf(t.ev_type)
                }(t) || (J = u(),
                    v && J - v.timestamp > 1e4 && (v = void 0),
                    v = function (t, e) {
                        if (-1 === O.indexOf(e.ev_type))
                            return t;
                        if (e.ev_type === w && e.payload.response.status < 400)
                            return t;
                        if (t && O.indexOf(t.type) < O.indexOf(e.ev_type))
                            return t;
                        var n = "";
                        switch (e.ev_type) {
                            case y:
                                n = e.payload.error.message;
                                break;
                            case w:
                                n = e.payload.request.url;
                                break;
                            case b:
                                n = e.payload.url
                        }
                        return {
                            type: e.ev_type,
                            message: n,
                            timestamp: u()
                        }
                    }(v, t))
            }
                , et]
    }
        , D = "blankScreen";
    var z = D;
    t.BLANK_SCREEN_INTEGRATION_NAME = z;
    var $ = t.blankScreenPlugin = function (t) {
        return void 0 === t && (t = {}),
        {
            name: z,
            setup: function (e) {
                !function (t, e) {
                    t.on("init", (function () {
                        var r = {
                            autoDetect: !0,
                            threshold: 1.5,
                            screenshot: !0,
                            mask: !1,
                            ssUrl: t.config().pluginPathPrefix + "/screenshot.min.js",
                            partialShot: !0,
                            quality: .1,
                            initDetTime: 8e3,
                            runDetTime: 4e3
                        }
                            , o = e ? d(e, r) : function (t, e, n) {
                                var r, o = null === (r = t.config()) || void 0 === r ? void 0 : r.plugins[e];
                                return d(o, n)
                            }(t, D, r);
                        o && function (t, e) {
                            var r = s()
                                , o = c();
                            if (r && o) {
                                var i = []
                                    , u = n(P(t.report.bind(t), i, [a(t, T), function () {
                                        return a(t, E)
                                    }
                                        , function () {
                                            return a(t, m)
                                        }
                                        , function () {
                                            return a(t, g)
                                        }
                                        , a(t, S)], e), 2)
                                    , l = u[0]
                                    , f = u[1]
                                    , d = function (t) {
                                        return l(t),
                                            t
                                    };
                                t.on("report", d),
                                    i.push((function () {
                                        t.off("report", d)
                                    }
                                    )),
                                    function (t, e, n, r) {
                                        t.destroyAgent.set(e, n, r)
                                    }(t, D, _, i),
                                    t.provide("detectBlankScreen", f)
                            }
                        }(t, o)
                    }
                    ))
                }(e, t)
            }
        }
    }
        , q = {};
    Object.defineProperty(q, "__esModule", {
        value: !0
    });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var B = function () {
        return B = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
            ,
            B.apply(this, arguments)
    };
    function H(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n)
            return t;
        var r, o, i = n.call(t), a = [];
        try {
            for (; (void 0 === e || e-- > 0) && !(r = i.next()).done;)
                a.push(r.value)
        } catch (u) {
            o = {
                error: u
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    function I(t, e, n) {
        if (2 === arguments.length)
            for (var r, o = 0, i = e.length; o < i; o++)
                !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)),
                    r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e))
    }
    var U = function () {
        return {}
    };
    function F(t) {
        return "object" == typeof t && null !== t
    }
    var W = Object.prototype;
    function G(t) {
        return "[object Array]" === W.toString.call(t)
    }
    function X(t) {
        return "function" == typeof t
    }
    function Y(t) {
        return "string" == typeof t
    }
    var V = function (t, e, n) {
        return function () {
            for (var r = [], o = 0; o < arguments.length; o++)
                r[o] = arguments[o];
            if (!t)
                return U;
            var i = t[e]
                , a = n.apply(void 0, I([i], H(r), !1))
                , u = a;
            return X(u) && (u = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return a.apply(this, t)
            }
            ),
                t[e] = u,
                function () {
                    u === t[e] ? t[e] = i : a = i
                }
        }
    };
    function J(t, e) {
        return t.initSubject(e)
    }
    var K = function () {
        return Date.now()
    };
    function Q() {
        if ("object" == typeof window && F(window))
            return window
    }
    function Z() {
        if ("object" == typeof document && F(document))
            return document
    }
    function tt() {
        if (Q() && X(window.PerformanceObserver))
            return window.PerformanceObserver
    }
    function et() {
        var t = Q() && Q() && window.location;
        return t ? t.href : ""
    }
    var nt = function (t) {
        var e = t && t.timing || void 0;
        return [e, function () {
            return t && t.now ? t.now() : (Date.now ? Date.now() : +new Date) - (e && e.navigationStart || 0)
        }
            , function (e) {
                var n = (t || {}).getEntriesByType;
                return X(n) && n.call(t, e) || []
            }
            , function () {
                var e = (t || {}).clearResourceTimings;
                X(e) && e.call(t)
            }
            , function (e) {
                var n = (t || {}).getEntriesByName;
                return X(n) && n.call(t, e) || []
            }
        ]
    };
    function rt(t) {
        try {
            for (var e = t, n = [], r = 0, o = 0, i = void 0; e && r++ < 5 && !("html" === (i = ot(e)) || r > 1 && o + 3 * n.length + i.length >= 256);)
                n.push(i),
                    o += i.length,
                    e = e.parentNode;
            return n.reverse().join(" > ")
        } catch (a) {
            return "<unknown>"
        }
    }
    function ot(t) {
        var e, n, r, o, i, a, u = t, c = [];
        if (!u || !u.tagName)
            return "";
        if (c.push(u.tagName.toLowerCase()),
            u.id)
            return "#" + u.id;
        var s = u.className;
        if (s && Y(s))
            for (r = s.split(/\s+/),
                a = 0; a < r.length; a++)
                c.push("." + r[a]);
        var l = ["type", "name", "title", "alt"];
        for (a = 0; a < l.length; a++)
            o = l[a],
                (i = u.getAttribute(o)) && c.push("[" + o + '="' + i + '"]');
        for (var f = u, d = 1, v = !0; f = f.previousElementSibling;)
            (null === (e = f.tagName) || void 0 === e ? void 0 : e.toLowerCase()) === (null === (n = u.tagName) || void 0 === n ? void 0 : n.toLowerCase()) && (f.className === u.className && l.every((function (t) {
                return u.getAttribute(t) === (null == f ? void 0 : f.getAttribute(t))
            }
            )) && (v = !1),
                d++);
        return d > 1 && !v && c.push(":nth-of-type(" + d + ")"),
            c.join("")
    }
    var it, at = function () {
        var t = new RegExp("\\/monitor_web\\/collect|\\/monitor_browser\\/collect\\/batch", "i");
        return function (e) {
            return t.test(e)
        }
    }, ut = function (t) {
        return function () {
            for (var e, n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return e = H(n, 2),
                this._method = e[0],
                this._url = e[1],
                t.apply(this, n)
        }
    }, ct = function (t) {
        return function () {
            for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
            this._reqHeaders = this._reqHeaders || {};
            var r = H(e, 2)
                , o = r[0]
                , i = r[1];
            return this._reqHeaders[o] = i,
                t && t.apply(this, e)
        }
    }, st = function (t, e) {
        var n = at();
        return function () {
            for (var r = [], o = 0; o < arguments.length; o++)
                r[o] = arguments[o];
            return this._start = K(),
                this._data = null == r ? void 0 : r[0],
                n(this._url) || function (t, e) {
                    return V(t, "onreadystatechange", (function (n) {
                        return function () {
                            for (var r = [], o = 0; o < arguments.length; o++)
                                r[o] = arguments[o];
                            return 4 === this.readyState && e(t),
                                n && n.apply(this, r)
                        }
                    }
                    ))
                }(this, e([this._method, this._url, this._start, this]))(),
                t.apply(this, r)
        }
    }, lt = function (t, e) {
        return function (n, r) {
            void 0 === r && (r = {});
            var o = e([n, r])
                , i = t(n, r);
            return i.then((function (t) {
                o(t)
            }
            ), (function () {
                o(void 0)
            }
            )),
                i
        }
    }, ft = ["fetch_0", function (t, e) {
        var n = Q();
        if (n && fetch) {
            var r = [];
            r.push(V(n, "fetch", lt)(t)),
                e((function () {
                    r.forEach((function (t) {
                        return t()
                    }
                    ))
                }
                ))
        }
    }
    ], dt = ["resource"], vt = ["longtask"], pt = function (t, e, n) {
        var r, o, i, a, u = H((o = e,
            a = (r = t) && new r((function (t, e) {
                t.getEntries && t.getEntries().forEach((function (t, n, r) {
                    return o(t, n, r, e)
                }
                ))
            }
            )),
            [function (t) {
                if (!r || !a)
                    return i;
                try {
                    a.observe({
                        entryTypes: t
                    })
                } catch (u) {
                    return i
                }
            }
                , function (t, e) {
                    if (!r || !a)
                        return i;
                    try {
                        var n = {
                            type: t,
                            buffered: !0
                        };
                        void 0 !== e && (n.durationThreshold = e),
                            a.observe(n)
                    } catch (u) {
                        return i
                    }
                    a.observe({
                        type: t,
                        buffered: !1
                    })
                }
                , function () {
                    return a && a.disconnect()
                }
            ]), 3), c = u[0], s = u[2];
        return c(n),
            s
    }, ht = ["longtask_0", function (t, e) {
        var n = tt();
        n && e(pt(n, t, vt))
    }
    ], mt = ["resource_0", function (t, e) {
        var n = tt();
        if (n) {
            var r = at();
            e(pt(n, (function (e) {
                !r(e.name) && t(e)
            }
            ), dt))
        }
    }
    ], gt = "http", yt = "resource_error", wt = "resource", bt = "performance_longtask", _t = "action", St = ["BODY", "HTML", "HEAD"], Et = "SVG", Tt = "data-apm-action", xt = function () {
        return void 0 === it ? it = "closest" in HTMLElement.prototype : it
    }, Ot = function (t, e) {
        var n;
        if (n = xt() ? t.closest("[" + e + "]") : function (t, e, n) {
            void 0 === n && (n = 10);
            for (var r = t, o = 0; o < n && r; o++) {
                if (~St.indexOf(r.nodeName))
                    return;
                if (r.hasAttribute(e))
                    return r;
                r = r.parentElement
            }
        }(t, e),
            n)
            return n.getAttribute(e).trim()
    };
    function Lt(t, e) {
        var n;
        if (n = xt() ? t.closest("[" + e + "]") : function (t, e, n) {
            void 0 === n && (n = 10);
            for (var r = t, o = 0; o < n && r; o++) {
                if (~St.indexOf(r.nodeName))
                    return;
                if (r.hasAttribute(e))
                    return r;
                r = r.parentElement
            }
        }(t, e),
            n)
            return n.getAttribute(e).trim()
    }
    var kt = function (t, e) {
        return !!(t && t.length && e && function (t, e) {
            var n = function (t) {
                return G(t) && t.length ? function (t) {
                    for (var e = [], n = t.length, r = 0; r < n; r++) {
                        var o = t[r];
                        Y(o) ? e.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")) : o && o.source && e.push(o.source)
                    }
                    return new RegExp(e.join("|"), "i")
                }(t) : null
            }(t || []);
            return !!n && n.test(e)
        }(t, function (t) {
            var e = Z();
            if (!e || !t)
                return "";
            var n = e.createElement("a");
            return n.href = t,
                n.href
        }(e)))
    }
        , jt = ["click"]
        , Nt = {
            capture: !0
        }
        , At = function (t, e, n, r) {
            var o, i, a = H(n, 4), u = a[0], c = a[1], s = a[2], l = a[3], f = r.types, d = r.pure, v = r.ignoreUrls, p = null, h = null, m = void 0, g = [], y = 0, w = H(nt(performance), 2)[1], b = function (t) {
                if (p && (d || Object.keys(p.metrics).length) && (!Object.keys(L).length || t)) {
                    p.metrics[bt] && (p.metrics[bt].duration = y);
                    var e = g.length > 0 ? Math.max.apply(Math, I([], H(g), !1)) - Math.min.apply(Math, I([], H(g), !1)) : 0;
                    p.metrics[gt] && (p.metrics[gt].duration = e);
                    var n = w() - p.start_time;
                    m && m({
                        ev_type: _t,
                        payload: B(B({}, p), {
                            duration: n,
                            frontend_time: n - e
                        })
                    }),
                        _()
                }
            }, _ = function () {
                O(),
                    p && (h = {
                        start_time: p.start_time,
                        id: p.id
                    }),
                    p = null,
                    g = [],
                    y = 0
            }, S = function (t) {
                var e, n;
                p && (p.metrics[t] = {
                    count: (null !== (n = null === (e = p.metrics[t]) || void 0 === e ? void 0 : e.count) && void 0 !== n ? n : 0) + 1
                })
            }, E = H(function (t, e, n) {
                var r, o, i = !1, a = function () {
                    t.clearTimeout(r),
                        i && (r = t.setTimeout((function () {
                            e()
                        }
                        ), 100))
                };
                return [function () {
                    i = !0,
                        t.clearTimeout(o),
                        o = t.setTimeout((function () {
                            e(!0),
                                n()
                        }
                        ), 1e4),
                        a()
                }
                    , a, function () {
                        i = !1,
                            t.clearTimeout(r),
                            t.clearTimeout(o)
                    }
                ]
            }(window, b, _), 3), T = E[0], x = E[1], O = E[2], L = function (t, e, n, r) {
                var o, i = H(e, 2), a = i[0], u = i[1], c = H([o = {}, function (t, e) {
                    return o[t] = e
                }
                    , function (t) {
                        return delete o[t]
                    }
                ], 3), s = c[0], l = c[1], f = c[2], d = 0;
                return t.push(a[0]((function (t) {
                    var e = H(t, 2);
                    e[0];
                    var o = e[1];
                    if (kt(r, o))
                        return U;
                    var i = d += 1;
                    return l(i, K()),
                        n(),
                        function () {
                            f(i),
                                n()
                        }
                }
                ))),
                    t.push(u[0]((function (t) {
                        var e = H(t, 1)[0]
                            , o = "string" == typeof e ? e : e.url;
                        if (kt(r, o))
                            return U;
                        var i = d += 1;
                        return l(i, K()),
                            n(),
                            function () {
                                f(i),
                                    n()
                            }
                    }
                    ))),
                    s
            }(e, [u, c], x, v), k = H((o = MutationObserver,
                i = o && new o(x),
                [function (t, e) {
                    i && t && i.observe(t, e)
                }
                    , function () {
                        return i && i.disconnect()
                    }
                ]), 2), j = k[0], N = k[1];
            j(),
                e.push(N),
                e.push(O),
                e.push(s[0]((function (t) {
                    var e = t.startTime
                        , n = t.duration;
                    x(),
                        p && p.start_time <= e + 50 && (y += n,
                            S(bt))
                }
                ))),
                e.push(l[0]((function (t) {
                    var e = t.name
                        , n = t.startTime
                        , r = t.duration
                        , o = t.initiatorType;
                    kt(v, e) || (x(),
                        p && p.start_time < n && (["xmlhttprequest", "fetch"].includes(o) && (g.push(n, n + r),
                            S(gt)),
                            ["xmlhttprequest", "fetch", "beacon"].includes(o) || S(wt)))
                }
                )));
            var A = function (e, n) {
                var r = function () {
                    var t = function () {
                        for (var t = new Array(16), e = 0, n = 0; n < 16; n++)
                            3 & n || (e = 4294967296 * Math.random()),
                                t[n] = e >>> ((3 & n) << 3) & 255;
                        return t
                    }();
                    return t[6] = 15 & t[6] | 64,
                        t[8] = 63 & t[8] | 128,
                        function (t) {
                            for (var e = [], n = 0; n < 256; ++n)
                                e[n] = (n + 256).toString(16).substr(1);
                            var r = 0
                                , o = e;
                            return [o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]]].join("")
                        }(t)
                }()
                    , o = H(nt(performance), 2)[1];
                p = {
                    start_time: o(),
                    id: r,
                    type: n,
                    target: e,
                    metrics: {}
                },
                    m = t(),
                    T()
            }
                , R = function (t) {
                    var e, n, r, o;
                    if (b(!0),
                        _(),
                        t.target instanceof HTMLElement && function (t) {
                            var e = t.tagName.toUpperCase();
                            return !(1 !== t.nodeType || St.includes(e) || function (t) {
                                for (var e = t, n = !1; e;)
                                    e.tagName.toUpperCase() === Et ? (e = null,
                                        n = !0) : e = e.parentElement;
                                return n
                            }(t) || t.style && "none" === t.style.display || !["A", "BUTTON", "INPUT", "TEXTAREA"].includes(e) && !Ot(t, Tt) && !function (t) {
                                var e = t.children;
                                return !e.length || ![].slice.call(e).some((function (t) {
                                    return t.children.length > 0
                                }
                                ))
                            }(t))
                        }(t.target))
                        o = t.target,
                            e = Ot(o, Tt) || o.innerText;
                    else {
                        if (!(t.target instanceof SVGElement) || (r = (n = t.target).tagName.toUpperCase(),
                            1 !== n.nodeType || n.style && "none" === n.style.display || ([Et].includes(r) || Lt(n, Tt),
                                0)))
                            return;
                        e = function (t, e) {
                            return Lt(t, e) || "ANONYMOUS_SVG"
                        }(t.target, Tt)
                    }
                    e && A({
                        name: e,
                        path: rt(t.target)
                    }, t.type)
                };
            return f && f.forEach((function (t) {
                var n, r, o, i;
                (function (t, e) {
                    if (!G(t))
                        return !1;
                    if (0 === t.length)
                        return !1;
                    for (var n = 0; n < t.length;) {
                        if (t[n] === e)
                            return !0;
                        n++
                    }
                    return !1
                }
                )(jt, t) && e.push((n = document,
                    r = t,
                    o = R,
                    void 0 === (i = Nt) && (i = !1),
                    n.addEventListener(r, o, i),
                    function () {
                        n.removeEventListener(r, o, i)
                    }
                ))
            }
            )),
                [function (t) {
                    if (!function (t, e) {
                        var n;
                        return e.ev_type === gt ? n = e.payload.request.url : e.ev_type === wt && "name" in e.payload ? n = e.payload.name : e.ev_type === yt && (n = e.payload.url),
                            kt(t, n)
                    }(v, t)) {
                        if ("pageview" === t.ev_type)
                            return b(!0),
                                void _();
                        if (t.ev_type === gt) {
                            if (!(e = t.payload.response.timing && t.payload.response.timing.startTime))
                                return;
                            return p && e > p.start_time ? p.id : h && e > h.start_time ? h.id : void 0
                        }
                        if (t.ev_type === bt) {
                            var e = t.payload.longtasks.length && t.payload.longtasks[0].startTime + 50;
                            return p && e && e > p.start_time ? p.id : void 0
                        }
                        if (p)
                            return "js_error" !== t.ev_type && t.ev_type !== yt || S(t.ev_type),
                                p.id
                    }
                }
                    , function (t, e) {
                        b(!0),
                            _(),
                            A({
                                name: t
                            }, e)
                    }
                ]
        }
        , Rt = "action"
        , Mt = {
            types: ["click"],
            pure: !0
        };
    function Ct(t, e) {
        void 0 === e && (e = Mt);
        var n = []
            , r = Z()
            , o = Q();
        if (r && o) {
            var i, a = H(At((function () {
                return function (t) {
                    var e = function (t) {
                        var e, n = {
                            pid: (e = t.config()).pid,
                            view_id: e.viewId,
                            url: et()
                        };
                        return n.context = t.context ? t.context.toString() : {},
                            n
                    }(t);
                    return e.timestamp = K(),
                        function (n) {
                            t.report(B(B({}, n), {
                                overrides: e
                            }))
                        }
                }(t)
            }
            ), n, [J(t, ["xhr_0", (i = XMLHttpRequest && XMLHttpRequest.prototype,
                function (t, e) {
                    if (i) {
                        var n = [];
                        n.push(V(i, "open", ut)()),
                            n.push(V(i, "setRequestHeader", ct)()),
                            n.push(V(i, "send", st)(t)),
                            e((function () {
                                n.forEach((function (t) {
                                    return t()
                                }
                                ))
                            }
                            ))
                    }
                }
            )]), J(t, ft), J(t, ht), J(t, mt)], e), 2), u = a[0], c = a[1], s = function (t) {
                var e = u(t);
                return e && t.extra && (t.extra.action_id = e),
                    t
            };
            t.on("report", s),
                n.push((function () {
                    t.off("report", s)
                }
                )),
                t.provide("startAction", c),
                function (t, e, n, r) {
                    t.destroyAgent.set(e, n, r)
                }(t, Rt, _t, n)
        }
    }
    var Pt = Rt;
    q.ACTION_INTEGRATION_NAME = Pt;
    var Dt = q.actionPlugin = function (t) {
        return {
            name: Pt,
            setup: function (e) {
                Ct(e, t)
            }
        }
    }
        ;
    const zt = "0.2.6";
    var $t = function () {
        return $t = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n])
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
            ,
            $t.apply(this, arguments)
    };
    function qt(t, e, n, r) {
        return new (n || (n = Promise))((function (o, i) {
            function a(t) {
                try {
                    c(r.next(t))
                } catch (e) {
                    i(e)
                }
            }
            function u(t) {
                try {
                    c(r.throw(t))
                } catch (e) {
                    i(e)
                }
            }
            function c(t) {
                var e;
                t.done ? o(t.value) : (e = t.value,
                    e instanceof n ? e : new n((function (t) {
                        t(e)
                    }
                    ))).then(a, u)
            }
            c((r = r.apply(t, e || [])).next())
        }
        ))
    }
    function Bt(t, e) {
        var n, r, o, i, a = {
            label: 0,
            sent: function () {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        },
            "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                return this
            }
            ),
            i;
        function u(u) {
            return function (c) {
                return function (u) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0,
                        u[0] && (a = 0)),
                        a;)
                        try {
                            if (n = 1,
                                r && (o = 2 & u[0] ? r.return : u[0] ? r.throw || ((o = r.return) && o.call(r),
                                    0) : r.next) && !(o = o.call(r, u[1])).done)
                                return o;
                            switch (r = 0,
                            o && (u = [2 & u[0], o.value]),
                            u[0]) {
                                case 0:
                                case 1:
                                    o = u;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: u[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                        r = u[1],
                                        u = [0];
                                    continue;
                                case 7:
                                    u = a.ops.pop(),
                                        a.trys.pop();
                                    continue;
                                default:
                                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                        a.label = u[1];
                                        break
                                    }
                                    if (6 === u[0] && a.label < o[1]) {
                                        a.label = o[1],
                                            o = u;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                            a.ops.push(u);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                        a.trys.pop();
                                    continue
                            }
                            u = e.call(t, a)
                        } catch (c) {
                            u = [6, c],
                                r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & u[0])
                        throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, c])
            }
        }
    }
    function Ht(t) {
        var e = "function" == typeof Symbol && Symbol.iterator
            , n = e && t[e]
            , r = 0;
        if (n)
            return n.call(t);
        if (t && "number" == typeof t.length)
            return {
                next: function () {
                    return t && r >= t.length && (t = void 0),
                    {
                        value: t && t[r++],
                        done: !t
                    }
                }
            };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function It(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n)
            return t;
        var r, o, i = n.call(t), a = [];
        try {
            for (; (void 0 === e || e-- > 0) && !(r = i.next()).done;)
                a.push(r.value)
        } catch (u) {
            o = {
                error: u
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o)
                    throw o.error
            }
        }
        return a
    }
    function Ut(t, e, n) {
        if (n || 2 === arguments.length)
            for (var r, o = 0, i = e.length; o < i; o++)
                !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)),
                    r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e))
    }
    "function" == typeof SuppressedError && SuppressedError;
    var Ft = function () {
        return {}
    };
    function Wt(t) {
        return "object" == typeof t && null !== t
    }
    var Gt = Object.prototype;
    function Xt(t) {
        return "function" == typeof t
    }
    function Yt(t) {
        return "string" == typeof t
    }
    var Vt = function (t, e, n) {
        return function () {
            for (var r = [], o = 0; o < arguments.length; o++)
                r[o] = arguments[o];
            if (!t)
                return Ft;
            var i = t[e]
                , a = n.apply(void 0, Ut([i], It(r), !1))
                , u = a;
            return Xt(u) && (u = function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                return a.apply(this, t)
            }
            ),
                t[e] = u,
                function () {
                    u === t[e] ? t[e] = i : a = i
                }
        }
    }
        , Jt = "".padStart ? function (t, e) {
            return void 0 === e && (e = 8),
                t.padStart(e, " ")
        }
            : function (t) {
                return t
            }
        , Kt = 0;
    function Qt() {
        if ("object" == typeof window && Wt(window))
            return window
    }
    function Zt() {
        if ("object" == typeof document && Wt(document))
            return document
    }
    var te = function () {
        function t() {
            this.observers = []
        }
        return t.prototype.subscribe = function (t) {
            this.observers.push(t)
        }
            ,
            t.prototype.unsubscribe = function (t) {
                this.observers.filter((function (e) {
                    return e !== t
                }
                ))
            }
            ,
            t.prototype.notify = function (t) {
                this.observers.forEach((function (e) {
                    e(t)
                }
                ))
            }
            ,
            t
    }()
        , ee = function () {
            function t(t) {
                this.cache = new Map,
                    this.capacity = 10,
                    this.capacity = t
            }
            return t.prototype.get = function (t) {
                if (this.cache.has(t)) {
                    var e = this.cache.get(t);
                    return this.cache.delete(t),
                        this.cache.set(t, e),
                        e
                }
                return null
            }
                ,
                t.prototype.put = function (t, e) {
                    this.cache.has(t) ? this.cache.delete(t) : this.cache.size >= this.capacity && this.cache.delete(this.cache.keys().next().value),
                        this.cache.set(t, e)
                }
                ,
                t
        }()
        , ne = function (t) {
            var e = [];
            return Array.from(t).forEach((function (t) {
                if (t instanceof Element)
                    if ("img" === t.nodeName.toLocaleLowerCase())
                        e.push(t);
                    else if (null == t ? void 0 : t.querySelectorAll) {
                        var n = t.querySelectorAll("img");
                        e = e.concat(Array.from(n))
                    }
            }
            )),
                e
        }
        , re = "undefined" != typeof IntersectionObserver
        , oe = function () {
            function t() {
                var t = this;
                this.record = new Map,
                    this.intersectionObserver = null,
                    re && (this.intersectionObserver = new IntersectionObserver((function (e) {
                        e.forEach((function (e) {
                            var n;
                            if (e.isIntersecting || e.intersectionRatio > 0) {
                                var r = t.record.get(e.target);
                                r && t.record.set(e.target, $t($t({}, r), {
                                    visible: !0
                                })),
                                    null === (n = t.intersectionObserver) || void 0 === n || n.unobserve(e.target)
                            }
                        }
                        ))
                    }
                    ), {
                        rootMargin: "200px"
                    }))
            }
            return t.prototype.set = function (t) {
                var e;
                re && (null === (e = this.intersectionObserver) || void 0 === e || e.observe(t)),
                    this.record.set(t, {
                        visible: !1,
                        observer: this.intersectionObserver
                    })
            }
                ,
                t.prototype.del = function (t) {
                    var e, n;
                    !(null === (e = this.record.get(t)) || void 0 === e ? void 0 : e.visible) && re && (null === (n = this.intersectionObserver) || void 0 === n || n.unobserve(t)),
                        this.record.delete(t)
                }
                ,
                t.prototype.find = function (t) {
                    var e, n, r = null;
                    try {
                        for (var o = Ht(this.record), i = o.next(); !i.done; i = o.next()) {
                            var a = It(i.value, 2)
                                , u = a[0]
                                , c = a[1];
                            if (u.currentSrc === t) {
                                r = $t({
                                    target: u
                                }, c);
                                break
                            }
                        }
                    } catch (s) {
                        e = {
                            error: s
                        }
                    } finally {
                        try {
                            i && !i.done && (n = o.return) && n.call(o)
                        } finally {
                            if (e)
                                throw e.error
                        }
                    }
                    return r
                }
                ,
                t
        }()
        , ie = function () {
            var t = new Map;
            return [t, function (e, n) {
                return t.set(e, n)
            }
                , function (e) {
                    return t.delete(e)
                }
            ]
        }
        , ae = function (t, e, n) {
            var r = 1;
            return function () {
                for (var o = [], i = 0; i < arguments.length; i++)
                    o[i] = arguments[i];
                var a = t.apply(void 0, Ut([], It(o), !1))
                    , u = r += 2
                    , c = "string" == typeof o[0] ? o[0] : o[0].url;
                return e(u, c),
                    a.then((function () {
                        n(u)
                    }
                    ), (function () {
                        n(u)
                    }
                    )),
                    a
            }
        }
        , ue = function (t, e, n) {
            var r = 0;
            return function () {
                for (var o = [], i = 0; i < arguments.length; i++)
                    o[i] = arguments[i];
                var a = r += 2;
                return e(a, this._url),
                    Vt(this, "onreadystatechange", (function (t) {
                        return function () {
                            for (var e = [], r = 0; r < arguments.length; r++)
                                e[r] = arguments[r];
                            return 4 === this.readyState && n(a),
                                t && t.apply(this, e)
                        }
                    }
                    ))(),
                    t.apply(this, o)
            }
        }
        , ce = function (t) {
            return qt(void 0, void 0, void 0, (function () {
                var e, n;
                return Bt(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            return r.trys.push([0, 2, , 3]),
                                [4, fetch(t, {
                                    cache: "force-cache"
                                })];
                        case 1:
                            return e = r.sent(),
                                n = e.headers,
                                [2, {
                                    status: e.status,
                                    format: n.get("content-type") || "",
                                    contentLength: Number(n.get("content-length")) || 0
                                }];
                        case 2:
                            return function () {
                                for (var t = [], e = 0; e < arguments.length; e++)
                                    t[e] = arguments[e];
                                console.log.apply(console, Ut(["[SDK]", Date.now(), Jt("" + Kt++)], It(t), !1))
                            }("\u83b7\u53d6header\u5931\u8d25", r.sent()),
                                [2, null];
                        case 3:
                            return [2]
                    }
                }
                ))
            }
            ))
        }
        , se = function (t) {
            var e = {
                needCompress: !1,
                needSizeOptim: !1,
                needFormatOptim: !1
            };
            if (!t.size)
                return e;
            var n = function (t) {
                var e = t.width
                    , n = t.height
                    , r = t.format
                    , o = void 0 === r ? "" : r
                    , i = t.size
                    , a = navigator && navigator.userAgent.toLocaleLowerCase().includes("chrome")
                    , u = {};
                if (/(jpeg|png|bmp)/.test(o))
                    if (e && n) {
                        var c = Math.round(Math.max(i - e * n * .2, 0));
                        if (a) {
                            var s = Math.round(Math.max(i - e * n / 6, 0));
                            u.needFormatOptim = s > 0,
                                u.needFormatOptim && (u.webpSavings = c,
                                    u.avifSavings = s)
                        } else
                            u.needFormatOptim = c > 0,
                                u.needFormatOptim && (u.webpSavings = c)
                    } else
                        u.needFormatOptim = !0,
                            u.webpSavings = Math.round(/png/.test(o) ? .26 * i : .3 * i),
                            a && (u.avifSavings = Math.round(/png/.test(o) ? .408 * i : .44 * i));
                return /gif/.test(o) && (u.needFormatOptim = !0,
                    u.webpSavings = .65 * i,
                    a && (u.avifSavings = .65 * i)),
                    u
            }(t)
                , r = function (t) {
                    var e = t.width
                        , n = t.height
                        , r = t.format
                        , o = void 0 === r ? "" : r
                        , i = t.size
                        , a = {};
                    if (e && n) {
                        if (/(jpeg|bmp)/.test(o)) {
                            var u = i - e * n * .25;
                            a.needCompress = u > 0,
                                a.needCompress && (a.compressSavings = Math.round(u))
                        }
                        /png/.test(o) && (u = i - e * n * 4 * .2 * .3,
                            a.needCompress = u > 0,
                            a.needCompress && (a.compressSavings = Math.round(u)))
                    }
                    return a
                }(t)
                , o = function (t) {
                    var e = t.width
                        , n = t.height
                        , r = t.viewerWidth
                        , o = t.viewerHeight
                        , i = t.dpr
                        , a = t.size
                        , u = {};
                    if (e && n && r && o) {
                        var c = 1 - r * o * i * i / (e * n);
                        u.needSizeOptim = c > 0,
                            u.needSizeOptim && (u.resizeSavings = Math.round((1 - c) * a))
                    }
                    return u
                }(t);
            return $t($t($t($t({}, e), n), r), o)
        }
        , le = "image_resource"
        , fe = "http_custom"
        , de = "pageload"
        , ve = new te
        , pe = !1
        , he = function (t, e, n, r, o, i, a) {
            if (void 0 === t && (t = Qt()),
                void 0 === e && (e = Zt()),
                void 0 === n && (n = Qt() && window.location),
                void 0 === r && (r = function () {
                    if ("function" == typeof XMLHttpRequest && Xt(XMLHttpRequest))
                        return XMLHttpRequest
                }()),
                void 0 === o && (o = function () {
                    if (Qt() && Wt(window.performance))
                        return window.performance
                }()),
                void 0 === i && (i = function () {
                    if (Qt() && Xt(window.MutationObserver))
                        return window.MutationObserver
                }()),
                void 0 === a && (a = function () {
                    if (Qt() && Xt(window.PerformanceObserver))
                        return window.PerformanceObserver
                }()),
                e && t && n)
                return function (n, u) {
                    var c = n.debug
                        , s = n.sampleRate
                        , l = n.sample_rate
                        , f = void 0 === l ? .1 : l
                        , d = n.ignoreUrls
                        , v = void 0 === d ? [] : d
                        , p = function (t, e) {
                            return void 0 === e && (e = !1),
                                e ? function () {
                                    for (var t = [], e = 0; e < arguments.length; e++)
                                        t[e] = arguments[e];
                                    return console.log.apply(console, Ut(["[".concat("imageReport", "] ")], It(t), !1))
                                }
                                    : function () { }
                        }(0, c)
                        , h = s || f;
                    p("\u56fe\u7247\u63d2\u4ef6\u5df2\u6ce8\u518c\uff0cversion:", zt);
                    var m = It(function (t) {
                        var e = t && t.timing || void 0;
                        return [e, function () {
                            return t && t.now ? t.now() : (Date.now ? Date.now() : +new Date) - (e && e.navigationStart || 0)
                        }
                            , function (e) {
                                var n = (t || {}).getEntriesByType;
                                return Xt(n) && n.call(t, e) || []
                            }
                            , function () {
                                var e = (t || {}).clearResourceTimings;
                                Xt(e) && e.call(t)
                            }
                            , function (e) {
                                var n = (t || {}).getEntriesByName;
                                return Xt(n) && n.call(t, e) || []
                            }
                        ]
                    }(o), 2)
                        , g = m[1]
                        , y = new oe
                        , w = new ee(10)
                        , b = It(ie(), 3)
                        , _ = b[0]
                        , S = b[1]
                        , E = b[2]
                        , T = It(function (t, e, n, r) {
                            var o = It(ie(), 3)
                                , i = o[0]
                                , a = o[1]
                                , u = o[2]
                                , c = function (t, e) {
                                    n && n(e) && a(t, e)
                                }
                                , s = function (t) {
                                    r && r(t),
                                        u(t)
                                };
                            return e && Vt(e.prototype, "send", ue)(c, s),
                                t && Vt(t, "fetch", ae)(c, s),
                                [i]
                        }(t, r, (function (t) {
                            return p("before http \u8bf7\u6c42, url:", t),
                                !0
                        }
                        ), (function (t) {
                            var e = x.get(t);
                            p("after http \u8bf7\u6c42, url:", e),
                                e && x.size - 1 < 8 && ve.notify({
                                    ev_type: fe,
                                    payload: {
                                        url: e,
                                        remainConnections: 8 - (x.size - 1)
                                    }
                                })
                        }
                        )), 1)
                        , x = T[0]
                        , O = function (t) {
                            p("\u56fe\u7247\u8d44\u6e90\u4e0a\u62a5", t),
                                u && u({
                                    ev_type: "image",
                                    payload: t
                                })
                        }
                        , L = It(function (t) {
                            var e = t && new t((function (t) {
                                var e = It(function (t) {
                                    void 0 === t && (t = []);
                                    var e = []
                                        , n = [];
                                    return t.forEach((function (t) {
                                        e.push.apply(e, Ut([], It(ne(t.addedNodes)), !1)),
                                            n.push.apply(n, Ut([], It(ne(t.removedNodes)), !1))
                                    }
                                    )),
                                        [e, n]
                                }(t), 2)
                                    , n = e[0]
                                    , r = e[1];
                                (n.length || r.length) && p("\u76d1\u542c\u5230DOM\u53d8\u66f4", n, r),
                                    n.forEach((function (t) {
                                        return y.set(t)
                                    }
                                    )),
                                    r.forEach((function (t) {
                                        return y.del(t)
                                    }
                                    ))
                            }
                            ));
                            return [function (t, n) {
                                e && t && e.observe(t, n)
                            }
                                , function () {
                                    return e && e.disconnect()
                                }
                            ]
                        }(i), 2)
                        , k = L[0]
                        , j = L[1];
                    k(e, {
                        childList: !0,
                        subtree: !0,
                        characterData: !1,
                        attributes: !1
                    });
                    var N = It(function (t, e, r, o) {
                        var i = t && new t((function (t, e) {
                            t.getEntries && t.getEntries().forEach((function (t, e, n) {
                                return function (t) {
                                    var e, n, r, o, i, a, u;
                                    if ("img" === t.initiatorType || "css" === t.initiatorType) {
                                        var c = function (t) {
                                            return e = t,
                                                "[object Array]" !== Gt.toString.call(e) ? null : t.length ? function (t) {
                                                    for (var e = [], n = t.length, r = 0; r < n; r++) {
                                                        var o = t[r];
                                                        Yt(o) ? e.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")) : o && o.source && e.push(o.source)
                                                    }
                                                    return new RegExp(e.join("|"), "i")
                                                }(t) : null;
                                            var e
                                        }(v);
                                        if (null == c ? void 0 : c.test(t.name))
                                            return;
                                        p("\u76d1\u542c\u5230resource", t);
                                        var s = t.toJSON()
                                            , l = s.name
                                            , f = s.initiatorType
                                            , d = s.transferSize
                                            , m = s.duration
                                            , g = s.encodedBodySize
                                            , w = s.decodedBodySize
                                            , b = s.redirectStart
                                            , _ = s.redirectEnd
                                            , S = s.serverTiming
                                            , E = s.domainLookupStart
                                            , T = s.domainLookupEnd
                                            , x = s.connectStart
                                            , O = s.connectEnd
                                            , L = s.secureConnectionStart
                                            , k = s.requestStart
                                            , j = s.responseStart
                                            , N = s.responseEnd
                                            , A = {
                                                monitorVersion: zt,
                                                imageSampleRate: h
                                            }
                                            , R = $t({
                                                name: l,
                                                source: f,
                                                dpr: Math.round(null !== (e = null === window || void 0 === window ? void 0 : window.devicePixelRatio) && void 0 !== e ? e : 1),
                                                needCompress: !1,
                                                needSizeOptim: !1,
                                                needFormatOptim: !1,
                                                hitLocalCache: 0 === d || void 0 === d && 0 === m,
                                                hitCdnCache: (S || []).findIndex((function (t) {
                                                    return "cdn-cache" === t.name && t.description.toLocaleLowerCase().indexOf("hit") >= 0
                                                }
                                                )) >= 0,
                                                size: 0 !== w ? g : 0,
                                                duration: m,
                                                redirect: _ - b,
                                                dns: T - E,
                                                tcp: O - x,
                                                ssl: void 0 === L || L <= 0 ? 0 : O - L,
                                                request: void 0 === k || k <= 0 ? 0 : j - k,
                                                download: void 0 === j || j <= 0 ? 0 : N - j,
                                                timingDetail: t.toJSON()
                                            }, A);
                                        if ("img" === R.source) {
                                            var M = y.find(t.name);
                                            if (p("\u5339\u914d\u5230img", M, y.record),
                                                M) {
                                                var C = {
                                                    imagexType: null === (n = M.target) || void 0 === n ? void 0 : n.getAttribute("imagex-type"),
                                                    imagexVersion: null === (r = M.target) || void 0 === r ? void 0 : r.getAttribute("imagex-version")
                                                };
                                                R = $t($t($t({}, R), C), {
                                                    isLazyLoad: Boolean(M.visible),
                                                    width: (null === (o = M.target) || void 0 === o ? void 0 : o.naturalWidth) || 0,
                                                    height: (null === (i = M.target) || void 0 === i ? void 0 : i.naturalHeight) || 0,
                                                    viewerWidth: null === (a = M.target) || void 0 === a ? void 0 : a.width,
                                                    viewerHeight: null === (u = M.target) || void 0 === u ? void 0 : u.height
                                                })
                                            }
                                        }
                                        ve.notify({
                                            ev_type: le,
                                            payload: R
                                        })
                                    }
                                }(t)
                            }
                            ))
                        }
                        ));
                        return [function () {
                            for (var e = [], r = 0; r < arguments.length; r++)
                                e[r] = arguments[r];
                            if (!t || !i)
                                return o;
                            try {
                                e.forEach((function (e) {
                                    t.supportedEntryTypes.indexOf(e) > -1 && i.observe({
                                        type: e,
                                        buffered: !1
                                    })
                                }
                                ))
                            } catch (n) {
                                try {
                                    i.observe({
                                        entryTypes: e
                                    })
                                } catch (l) {
                                    return o
                                }
                            }
                        }
                            , function () {
                                return i && i.disconnect()
                            }
                        ]
                    }(a), 2)
                        , A = N[0]
                        , R = N[1]
                        , M = function (t, e) {
                            return qt(void 0, void 0, void 0, (function () {
                                var n, r, o, i, a, u, c, s;
                                return Bt(this, (function (l) {
                                    switch (l.label) {
                                        case 0:
                                            return (n = w.get(t)) ? (p("\u547d\u4e2d\u7f13\u5b58header", t, n),
                                                [3, 3]) : [3, 1];
                                        case 1:
                                            return [4, ce(t)];
                                        case 2:
                                            n = l.sent(),
                                                w.put(t, n),
                                                l.label = 3;
                                        case 3:
                                            if (o = (r = n || {}).format,
                                                i = r.status,
                                                a = r.contentLength,
                                                p("response header\uff1a", o, i),
                                                "css" === e.source) {
                                                if (!(null == o ? void 0 : o.startsWith("image/")))
                                                    return E(t),
                                                        [2]
                                            } else if (!(null == o ? void 0 : o.startsWith("image/")) && Number(i) < 400)
                                                return E(t),
                                                    [2];
                                            return u = $t($t({}, e || {}), {
                                                format: o && String(o).startsWith("image/") ? null === (s = o.split(/[,;]/)[0]) || void 0 === s ? void 0 : s.slice(6) : void 0,
                                                status: i
                                            }),
                                                !Number(u.size) && Number(i) < 400 && Number(a) > 0 && (u.size = Number(a)),
                                                c = se(u),
                                                O($t($t({}, u), c)),
                                                E(t),
                                                [2]
                                    }
                                }
                                ))
                            }
                            ))
                        };
                    return ve.subscribe((function (t) {
                        var e, n, r, o, i, a, u, c, s, l;
                        if (t.ev_type === le) {
                            var f = g() - (null === (a = null === (i = t.payload) || void 0 === i ? void 0 : i.timingDetail) || void 0 === a ? void 0 : a.responseEnd);
                            p("\u8d44\u6e90\u52a0\u8f7d\u4e8b\u4ef6: ", t.payload.name),
                                p("\u8d44\u6e90\u5b8c\u6210\u52a0\u8f7d\u65f6\u95f4: ", null === (c = null === (u = t.payload) || void 0 === u ? void 0 : u.timingDetail) || void 0 === c ? void 0 : c.responseEnd),
                                p("\u65f6\u95f4\u95f4\u9694: ", f),
                                p("\u662f\u5426\u547d\u4e2d\u672c\u5730\u7f13\u5b58: ", null === (s = t.payload) || void 0 === s ? void 0 : s.hitLocalCache);
                            var d = function (t) {
                                return Math.random() < Number(t)
                            }(h);
                            if (!d)
                                return;
                            if (!pe)
                                return void S(t.payload.name, $t({}, t.payload));
                            l = t.payload,
                                qt(void 0, void 0, void 0, (function () {
                                    var t, e, n, r, o, i, a, u;
                                    return Bt(this, (function (c) {
                                        switch (c.label) {
                                            case 0:
                                                return p("\u8fdb\u884c\u4e2d\u7684\u8bf7\u6c42\u6570\uff1a".concat(x.size)),
                                                    8 - x.size > 0 ? (t = w.get(l.name)) ? (p("\u547d\u4e2d\u7f13\u5b58header", l.name, t),
                                                        [3, 3]) : [3, 1] : [3, 4];
                                            case 1:
                                                return [4, ce(l.name)];
                                            case 2:
                                                t = c.sent(),
                                                    w.put(l.name, t),
                                                    c.label = 3;
                                            case 3:
                                                if (n = (e = t || {}).format,
                                                    r = e.status,
                                                    o = e.contentLength,
                                                    p("response header\uff1a", n, r),
                                                    "css" === l.source) {
                                                    if (!(null == n ? void 0 : n.startsWith("image/")))
                                                        return [2]
                                                } else if (!(null == n ? void 0 : n.startsWith("image/")) && Number(r) < 400)
                                                    return [2];
                                                return i = $t($t({}, l), {
                                                    format: n && String(n).startsWith("image/") ? null === (u = n.split(/[,;]/)[0]) || void 0 === u ? void 0 : u.slice(6) : void 0,
                                                    status: r
                                                }),
                                                    !Number(i.size) && Number(r) < 400 && Number(o) > 0 && (i.size = Number(o)),
                                                    a = se(i),
                                                    O($t($t({}, i), a)),
                                                    [3, 5];
                                            case 4:
                                                S(l.name, $t({}, l)),
                                                    c.label = 5;
                                            case 5:
                                                return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                        }
                        if (t.ev_type === fe && pe) {
                            if (p("http\u8bf7\u6c42\u5b8c\u6210\u4e8b\u4ef6"),
                                t.payload.remainConnections <= 0)
                                return;
                            try {
                                for (var v = Ht(_), m = v.next(); !m.done; m = v.next()) {
                                    var y = It(m.value, 2)
                                        , b = y[0];
                                    if (!(null == (j = y[1]) ? void 0 : j.__lock)) {
                                        S(b, $t($t({}, j), {
                                            __lock: !0
                                        })),
                                            M(b, j);
                                        break
                                    }
                                }
                            } catch (N) {
                                e = {
                                    error: N
                                }
                            } finally {
                                try {
                                    m && !m.done && (n = v.return) && n.call(v)
                                } finally {
                                    if (e)
                                        throw e.error
                                }
                            }
                        }
                        if (t.ev_type === de && t.payload.pageLoad) {
                            p("pageload \u4e8b\u4ef6");
                            try {
                                for (var E = Ht(_), T = E.next(); !T.done; T = E.next()) {
                                    var L = It(T.value, 2)
                                        , k = L[0]
                                        , j = L[1];
                                    if (!(8 - x.size > 0))
                                        break;
                                    (null == j ? void 0 : j.__lock) || (S(k, $t($t({}, j), {
                                        __lock: !0
                                    })),
                                        M(k, j))
                                }
                            } catch (A) {
                                r = {
                                    error: A
                                }
                            } finally {
                                try {
                                    T && !T.done && (o = E.return) && o.call(E)
                                } finally {
                                    if (r)
                                        throw r.error
                                }
                            }
                            pe = !0
                        }
                    }
                    )),
                        A("resource"),
                        function (t) {
                            var e, n = Qt(), r = Zt();
                            n && r && ("complete" !== r.readyState ? (e = function () {
                                setTimeout((function () {
                                    t()
                                }
                                ), 0)
                            }
                                ,
                                n.addEventListener("load", e, false)) : t())
                        }((function () {
                            ve.notify({
                                ev_type: de,
                                payload: {
                                    pageLoad: !0
                                }
                            })
                        }
                        )),
                        [function () {
                            p("\u63d2\u4ef6\u9500\u6bc1"),
                                j(),
                                R()
                        }
                        ]
                }
        }
        , me = {
            sample_rate: .1
        };
    const ge = Object.freeze(Object.defineProperty({
        __proto__: null,
        DOMAIN_WHITELIST: ["wj.toutiao.com"],
        abChannelDomain: "https://abtestvm.bytedance.com",
        argusSDK: "https://lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/common/scripts/security-secsdk-runtime-v1.0.0.js",
        sladarInitDomain: "https://mon-sg.capcutapi.com",
        sladarPluginPathPrefix: "https://lf3-short.ibytedapm.com/slardar/fe/sdk-web/plugins",
        slardarBid: "cn_mweb",
        slardarURL: "https://lf3-short.ibytedapm.com/slardar/fe/sdk-web/browser.cn.js",
        teaChannel: "cn",
        teaChannelDomain: "https://mcs-normal-sg.capcutapi.com",
        ttWidUnionHost: "https://ttwid.bytedance.com",
        webmssdkURL: "https://sf16-web-tos-buz.capcutstatic.com/obj/rc-web-sdk-sg/webmssdk/1.0.0.770/webmssdk.js"
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    let ye, we, be = "production";
    try {
        (/^\w+\.web\.bytedance\.net$/.test(window.location.host) || /^\S+?boe\.bytedance\.net$/.test(window.location.host) || window.location.host.endsWith(".boe.goofy.app") || window.location.host.includes("localhost") || "127.0.0.1" === window.location.hostname || /^[\d.]+$/.test(window.location.hostname) || /^\S+?\.bytedance\.net$/.test(window.location.host)) && (be = "test")
    } catch (Ce) { }
    window.location.host.includes("jianying") || window.location.host.includes("cn") ? (ye = "cn_mweb",
        we = void 0) : (ye = "mweb",
            we = "https://mon-sg.capcutapi.com");
    const _e = window.__agw_log_id || void 0
        , Se = [/^(\/ai-tool\/work-detail)(?:\/(.*))?$/, /^(\/ai-tool\/personal)(?:\/(.*))?$/];
    function Ee(t) {
        try {
            const e = new URL(t).pathname.replace(/\/+$/, "");
            for (const t of Se) {
                const n = e.match(t);
                if (n)
                    return n[2] ? `${n[1]}/:id` : n[1]
            }
            return e
        } catch (Ce) {
            return console.warn("parse pid failed:", Ce),
                t
        }
    }
    const Te = [{
        regexp: /^(\/ai-tool\/home)(?:\/)?$/,
        rootSelector: "#csr-root .scroll-content",
        threshold: 5,
        partialShot: !1
    }, {
        regexp: /^(\/ai-tool\/asset)(?:\/)?$/,
        rootSelector: "#csr-root",
        threshold: 4,
        partialShot: !1
    }, {
        regexp: /^(\/ai-tool\/generate)(?:\/)?$/,
        rootSelector: "#csr-root .record-virtual-list",
        threshold: 2,
        partialShot: !1
    }, {
        regexp: /^(\/ai-tool\/login)(?:\/)?$/,
        rootSelector: "#csr-root .login-main",
        threshold: 4,
        partialShot: !1
    }, {
        regexp: /^(\/ai-tool\/work-detail)(?:\/(.*))?$/,
        rootSelector: "#csr-root .detail-main",
        threshold: 5,
        partialShot: !1
    }, {
        regexp: /^(\/ai-tool\/personal)(?:\/(.*))?$/,
        rootSelector: "#csr-root .masonry-layout",
        threshold: 4,
        partialShot: !1
    }];
    function xe(t) {
        var e;
        if (!t)
            return "";
        const n = t.id ? `#${t.id}` : ""
            , r = (null == (e = t.className) ? void 0 : e.trim) ? `.${t.className.trim().replace(/\s+/g, ".")}` : "";
        return (t.tagName || "unknown").toLowerCase() + n + r
    }
    let Oe = null;
    function Le(t, e) {
        var n;
        try {
            const e = JSON.parse(t ?? "{}");
            if ("0" !== e.ret && 0 !== e.status_code && 0 !== e.code && 0 !== e.e && (!e.BaseResp || 0 !== e.BaseResp.StatusCode) && "success" !== e.message) {
                const t = e.log_id || ""
                    , r = (e.message || e.errmsg || "").slice(0, 50);
                return {
                    ret: e.ret || (null == (n = e.BaseResp) ? void 0 : n.StatusCode) || e.status_code || e.code || e.e || "",
                    msg: r,
                    logId: t
                }
            }
        } catch { }
        return !1
    }
    function ke(t) {
        const e = t.replace(/-[\w+=_/]{5,7}$/, "");
        return e.length < 3 ? t : e
    }
    var je;
    const Ne = {
        bid: ye,
        release: (window.gfdatav1 || {}).ver,
        env: be,
        pluginPathPrefix: ge.sladarPluginPathPrefix,
        ...we ? {
            domain: we
        } : {},
        ..._e ? {
            sessionId: _e
        } : {},
        plugins: {
            pageview: {
                extractPid: t => Ee(t),
                fetch: {
                    extraExtractor: (t, e) => Le(t)
                },
                ajax: {
                    extraExtractor: (t, e) => Le(t)
                }
            },
            jsError: {
                ignoreErrors: ["/ChunkLoadError/i", "/Loading chunk/i", "/Illegal invocation/i", "/Failed to fetch/i"],
                onunhandledrejection: !1
            }
        },
        integrations: [Dt({
            pure: !0,
            types: ["click"],
            ignoreUrls: []
        }), $(function () {
            const t = Ee(window.location.href);
            for (const { regexp: e, ...n } of Te)
                if (e.test(t))
                    return n;
            return {
                rootSelector: "#csr-root",
                threshold: 4,
                partialShot: !1
            }
        }()), {
            name: "refreshPreStartContext",
            setup(t) {
                t.on("start", (() => {
                    const e = t.getPreStartQueue()
                        , n = t.context && t.context.toString() || {};
                    for (let t = 0; t < e.length; ++t)
                        e[t].overrides = e[t].overrides || {},
                            e[t].overrides.context = n
                }
                ))
            }
        }, function (t) {
            return void 0 === t && (t = me),
            {
                name: "imageReport",
                setup: function (e) {
                    e.on("init", (function () {
                        var n = It(function (t, e, n, r) {
                            void 0 === e && (e = {}),
                                void 0 === r && (r = []);
                            try {
                                var o = t.apply(void 0, Ut([], It(r), !1));
                                return o && o(e, n) || []
                            } catch (i) {
                                return function () {
                                    for (var t = [], e = 0; e < arguments.length; e++)
                                        t[e] = arguments[e];
                                    var n = function (t) {
                                        if (t)
                                            return t.__SLARDAR_REGISTRY__ || (t.__SLARDAR_REGISTRY__ = {
                                                Slardar: {
                                                    plugins: [],
                                                    errors: [],
                                                    subject: {}
                                                }
                                            }),
                                                t.__SLARDAR_REGISTRY__.Slardar
                                    }(Qt());
                                    n && (n.errors || (n.errors = []),
                                        n.errors.push(t))
                                }(i),
                                    []
                            }
                        }(he, t, e.report.bind(e)), 1)[0];
                        e.on("beforeDestroy", (function () {
                            n()
                        }
                        ))
                    }
                    ))
                }
            }
        }({
            debug: !1,
            sampleRate: .1,
            ignoreUrls: []
        })]
    };
    let Ae = !1;
    window.Slardar("on", "report", (function (t) {
        return Ae || "js_error" !== t.ev_type && "blank_screen" !== t.ev_type && "resource_error" !== t.ev_type || (Ae = !0,
            window.Slardar("start")),
            t
    }
    )),
        window.Slardar("setFilter", "resource", (t => !(t.name.includes("get_unread_count") || t.name.includes("user_credit_history") || t.name.includes("monitor_browser/collect/batch") || t.name.includes("mcs.zijieapi.com/list")))),
        window.Slardar("on", "beforeSend", (t => {
            try {
                "blank_screen" === t.ev_type && function () {
                    const t = window.Slardar;
                    let e = null;
                    const n = () => {
                        var n, r;
                        e && clearTimeout(e);
                        const o = function () {
                            const { innerHeight: t, innerWidth: e } = window
                                , n = [200, .33 * t]
                                , r = [.67 * e, .33 * t]
                                , o = [200, .67 * t]
                                , i = [.67 * e, .67 * t]
                                , a = document.elementsFromPoint(n[0], n[1])
                                , u = document.elementsFromPoint(r[0], r[1])
                                , c = document.elementsFromPoint(o[0], o[1])
                                , s = document.elementsFromPoint(i[0], i[1]);
                            return [a.map(xe), u.map(xe), s.map(xe), c.map(xe)]
                        }()
                            , i = JSON.stringify(o);
                        t("sendEvent", {
                            type: "event",
                            name: "blank_screen_query_path",
                            metrics: {},
                            categories: {
                                dom_show: i
                            }
                        }),
                            null == (r = null == (n = t.getSender) ? void 0 : n.call(t)) || r.flush()
                    }
                        ;
                    e = setTimeout((() => {
                        window.removeEventListener("beforeunload", n),
                            n()
                    }
                    ), 8e3),
                        window.addEventListener("beforeunload", n)
                }()
            } catch (Ce) { }
            return t
        }
        )),
        window.Slardar("on", "init", (() => {
            var t, e;
            null == (t = window.Slardar.getSender()) || t.setWait(5e3),
                null == (e = window.Slardar.getSender()) || e.setSize(50)
        }
        )),
        window.gfdatav1 && window.Slardar("context.set", "idc", window.gfdatav1.idc),
        window._currentBranch && window.Slardar("context.set", "branch", window._currentBranch),
        window._currentBranch && window.Slardar("context.set", "ssrRenderLevel", `${(null == (je = window._SSR_DATA) ? void 0 : je.renderLevel) ?? 0}`),
        window.Slardar("context.set", "hasHidden", `${Boolean("hidden" === document.visibilityState && !document.prerendering)}`),
        function () {
            function t() {
                "hidden" === document.visibilityState && window.Slardar("context.set", "hasHidden", "true"),
                    null == Oe || Oe()
            }
            const e = ["visibilitychange", "prerenderingchange"];
            for (const n of e)
                window.addEventListener(n, t);
            Oe = () => {
                for (const n of e)
                    window.removeEventListener(n, t)
            }
        }(),
        window.Slardar("on", "beforeBuild", (function (t) {
            var e, n;
            return "action" === (null == t ? void 0 : t.ev_type) && (null == (n = null == (e = t.payload) ? void 0 : e.target) ? void 0 : n.path) && (t.payload.target.path = function (t, e = ">") {
                if (!t)
                    return t;
                const n = new RegExp(`s*${e}s*`, "g")
                    , r = t.split(n)
                    , o = [];
                for (const i of r) {
                    const t = i.trim().match(/\.[\w_-]+/g);
                    if (null == t ? void 0 : t.length) {
                        const e = {};
                        for (const r of t) {
                            const t = ke(r);
                            t !== r && (e[r] = t)
                        }
                        let n = i;
                        for (const [t, r] of Object.entries(e))
                            n = n.replace(t, r);
                        o.push(n.trim())
                    } else
                        o.push(i.trim())
                }
                return o.join(` ${e} `)
            }(t.payload.target.path)),
                t
        }
        )),
        window.Slardar("on", "provide", (function (t) {
            var e, n;
            if ("performanceSend" === t && (null == (n = null == (e = window.Slardar.pp) ? void 0 : e.entries) ? void 0 : n.length)) {
                const t = window.Slardar.pp.entries.filter((t => "longtask" === (null == t ? void 0 : t.entryType)));
                for (const e of t)
                    window.Slardar.report({
                        ev_type: "performance_longtask",
                        payload: {
                            type: "perf",
                            longtasks: [e]
                        }
                    })
            }
        }
        )),
        window.Slardar("init", Ne);
    const { customServerMetrics: Re, serverTimingParams: Me } = function () {
        const t = {
            timing: {},
            description: {}
        }
            , e = [];
        try {
            const n = "navigation"
                , r = performance.getEntriesByType(n).reduce(((t, e) => (e && e.serverTiming && t.push(...e.serverTiming),
                    t)), []);
            for (const i of r) {
                const { name: n, description: r, duration: o } = i;
                i.name && (t.timing[`${n}_duration`] = o,
                    r && (t.description[`${n}_description`] = r),
                    n.startsWith("bd-") && e.push({
                        name: n,
                        value: o,
                        type: "perf",
                        extra: r ? {
                            description: r
                        } : void 0
                    }))
            }
            window._serverTimingParams = t;
            const o = "cc-ssr-render_cache_status_description";
            t.description = {
                ...t.description,
                log_id: `${window.__agw_log_id ?? "N/A"}`,
                ...Boolean(window.__ssr_render) ? {
                    ssr_render: window.__ssr_render,
                    [o]: window.__ssr_cache
                } : {}
            },
                window.Slardar("context.set", "renderCacheStatus", t.description[o] ?? "N/A")
        } catch (Ce) {
            console.error("[Slardar] failed to handle server timings", Ce)
        }
        return {
            serverTimingParams: t,
            customServerMetrics: e
        }
    }();
    for (const Pe of Re)
        window.Slardar("sendCustomPerfMetric", Pe);
    window.Slardar("sendEvent", {
        name: "navigation_server_timing",
        metrics: Me.timing,
        categories: Me.description
    })
}()