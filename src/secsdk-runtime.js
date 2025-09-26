/*!
* web-secsdk-demo1 v1.0.0
* (c) 2024
*/

!function (t) {
    "function" == typeof define && define.amd ? define(t) : t()
}((function () {
    "use strict";
    var t, e, n;
    !function (t) {
        t.API_LOCALSTORAGE_SET = "API_LOCALSTORAGE_SET",
            t.API_LOCALSTORAGE_GET = "API_LOCALSTORAGE_GET",
            t.API_SESSIONSTORAGE_SET = "API_SESSIONSTORAGE_SET",
            t.API_SESSIONSTORAGE_GET = "API_SESSIONSTORAGE_GET",
            t.GEOLOCATION_CURRENT_POSITION = "GEOLOCATION_CURRENT_POSITION",
            t.GEOLOCATION_WATCH_POSITION = "GEOLOCATION_WATCH_POSITION",
            t.CLIPBOARD_WRITE_TEXT = "CLIPBOARD_WRITE_TEXT",
            t.MEDIADEVICES_GETUSERMEDIA = "MEDIADEVICES_GETUSERMEDIA",
            t.INDEXDB_ADD = "INDEXDB_ADD",
            t.INDEXDB_PUT = "INDEXDB_PUT",
            t.INDEXDB_UPDATE = "INDEXDB_UPDATE",
            t.COOKIE_GET = "COOKIE_GET",
            t.COOKIE_SET = "COOKIE_SET",
            t.CLICK = "CLICK",
            t.COPY = "COPY",
            t.IMG_SRC_SET = "IMG_SRC_SET",
            t.IMG_SRC_GET = "IMG_SRC_GET",
            t.NAVIGATOR_SEND_BEACON = "NAVIGATOR_SEND_BEACON",
            t.REQUEST_FILE_STSTEM = "REQUEST_FILE_STSTEM",
            t.CLIPBOARD_READ_TEXT = "CLIPBOARD_READ_TEXT",
            t.EXCU_COMMAND = "EXCUTE_COMMAND",
            t.XHR_REQUEST_OPEN = "XHR_REQUEST_OPEN",
            t.XHR_REQUEST_SEND = "XHR_REQUEST_SEND",
            t.XHR_REQUEST_SETQEQUESTHEADER = "XHR_REQUEST_SETQEQUESTHEADER",
            t.XHR_RESPONSE_LOADEND = "XHR_RESPONSE_LOADEND",
            t.XHR_RESPONSE_READYSTATECHANGE = "XHR_RESPONSE_READYSTATECHANGE",
            t.FETCH_REQUEST = "FETCH_REQUEST",
            t.FETCH_RESPONSE = "FETCH_RESPONSE",
            t.FETCH_ADDHEADER = "FETCH_ADDHEADER",
            t.DOM_CONTENT_LOADED = "DOM_CONTENT_LOADED",
            t.MUTATION_OBSERVER = "MUTATION_OBSERVER",
            t.PERFORMANCE_OBSERVER = "PERFORMANCE_OBSERVER"
    }(t || (t = {})),
        function (t) {
            t.LOCALSTORAGE_SET = "localstorage.setItem"
        }(e || (e = {})),
        function (t) {
            t.PASS = "PASS",
                t.REPORT_ONLY = "REPORT_ONLY",
                t.REWRITE = "REWRITE",
                t.BLOCK = "BLOCK",
                t.ERROR = "ERROR"
        }(n || (n = {}));
    var o = function () {
        function t() {
            this.secEventMap = {},
                this.secEventMap = {}
        }
        return t.prototype.addToEventMap = function (t, e, n) {
            void 0 === n && (n = !1);
            var o = this.secEventMap[t] || [];
            o.push({
                fn: e,
                once: n
            }),
                this.secEventMap[t] = o
        }
            ,
            t.prototype.on = function (t, e, n) {
                var o = this;
                return void 0 === n && (n = !1),
                    this.addToEventMap(t, e, n),
                    function () {
                        o.secEventMap[t] = o.secEventMap[t].filter((function (t) {
                            return e !== t.fn
                        }
                        ))
                    }
            }
            ,
            t.prototype.emit = function (t, e) {
                var n = t.name
                    , o = this.secEventMap[n] || [];
                if (o.length) {
                    var r = this
                        , a = [];
                    o.forEach((function (n) {
                        !n.once && a.push(n),
                            n.fn.call(r, {
                                event: t,
                                action: e
                            })
                    }
                    )),
                        this.secEventMap[n] = a
                }
            }
            ,
            t.prototype.off = function (t, e) {
                if (e) {
                    var n = this.secEventMap[t] || [];
                    this.secEventMap[t] = n.filter((function (t) {
                        return t.fn !== e
                    }
                    ))
                } else
                    this.secEventMap[t] = []
            }
            ,
            t.prototype.once = function (t, e) {
                this.addToEventMap(t, e, !0)
            }
            ,
            t
    }()
        , r = new o
        , a = ["module", "global", "require"]
        , i = Object.keys(window).filter((function (t) {
            return !a.includes(t)
        }
        ))
        , c = {
            module: {},
            global: {
                ActionType: n,
                EventEmitter: r
            },
            require: function (t) {
                return c.module[t] || c.global[t]
            }
        };
    i.forEach((function (t) {
        Object.defineProperty(c, t, {
            get: function () {
                console.warn("禁止直接访问宿主环境")
            }
        })
    }
    )),
        window.SDKRuntime = c;
    window.registToGlobal = function (t, e) {
        c.global[t] = e
    }
        ;
    window.registToModule = function (t, e) {
        c.module[t] = e
    }
        ;
    var u = function (t) {
        return c.require(t)
    };
    window.use = u,
        window.useWebSecsdkApi = u;
    var s = function (t, e, n) {
        var o;
        window.SDKNativeWebApi ? window.SDKNativeWebApi[t] = {
            context: e,
            fn: n
        } : window.SDKNativeWebApi = ((o = {})[t] = {
            context: e,
            fn: n
        },
            o)
    }
        , E = function (t) {
            var e;
            if (t)
                return null === (e = window.SDKNativeWebApi) || void 0 === e ? void 0 : e[t]
        };
    var p = localStorage.getItem.bind(localStorage)
        , l = "web_runtime_security_uid"
        , f = E(t.API_LOCALSTORAGE_GET);
    f && (p = f.fn.bind(localStorage));
    var d, S = p(l);
    if (!S || "undefined" === S) {
        (d = function () {
            for (var t = new Array(16), e = 0, n = 0; n < 16; n++)
                0 == (3 & n) && (e = 4294967296 * Math.random()),
                    t[n] = e >>> ((3 & n) << 3) & 255;
            return t
        }())[6] = 15 & d[6] | 64,
            d[8] = 63 & d[8] | 128,
            S = function (t) {
                for (var e = [], n = 0; n < 256; ++n)
                    e[n] = (n + 256).toString(16).substr(1);
                var o = 0
                    , r = e;
                return [r[t[o++]], r[t[o++]], r[t[o++]], r[t[o++]], "-", r[t[o++]], r[t[o++]], "-", r[t[o++]], r[t[o++]], "-", r[t[o++]], r[t[o++]], "-", r[t[o++]], r[t[o++]], r[t[o++]], r[t[o++]], r[t[o++]], r[t[o++]]].join("")
            }(d),
            document.cookie.includes("x-web-secsdk-uid") || (document.cookie = "x-web-secsdk-uid=".concat(S, "; path=/;"));
        var _ = localStorage.setItem.bind(localStorage)
            , R = E(t.API_LOCALSTORAGE_SET);
        R && (_ = R.fn.bind(localStorage)),
            _(l, S)
    }
    var O, T, h = new (function () {
        function t() { }
        return t.prototype.loadUid = function () {
            this.uid = S
        }
            ,
            t.prototype.setUid = function (t) {
                localStorage.removeItem(l),
                    this.uid = t
            }
            ,
            t.prototype.getUid = function () {
                return this.uid
            }
            ,
            t
    }());
    ({})[t.API_LOCALSTORAGE_SET] = ["text"];
    var y = ((O = {})[t.API_LOCALSTORAGE_SET] = "localStorage.setItem",
        O[t.API_LOCALSTORAGE_GET] = "localStorage.getItem",
        O[t.API_SESSIONSTORAGE_SET] = "sessionStorage.setItem",
        O[t.API_SESSIONSTORAGE_GET] = "sessionStorage.getItem",
        O[t.GEOLOCATION_CURRENT_POSITION] = "Geolocation.prototype.getCurrentPosition",
        O[t.GEOLOCATION_WATCH_POSITION] = "Geolocation.prototype.watchPosition",
        O[t.CLIPBOARD_WRITE_TEXT] = "Clipboard.prototype.writeText",
        O[t.MEDIADEVICES_GETUSERMEDIA] = "MediaDevices.prototype.getUserMedia",
        O[t.INDEXDB_ADD] = "IDBObjectStore.prototype.add",
        O[t.INDEXDB_PUT] = "IDBObjectStore.prototype.put",
        O[t.INDEXDB_UPDATE] = "IDBCursor.prototype.update",
        O[t.NAVIGATOR_SEND_BEACON] = "Navigator.prototype.sendBeacon",
        O[t.REQUEST_FILE_STSTEM] = "requestFileSystem",
        O[t.CLIPBOARD_READ_TEXT] = "navigator.clipboard.readText",
        O[t.XHR_REQUEST_OPEN] = "XMLHttpRequest.prototype.open",
        O[t.XHR_REQUEST_SEND] = "XMLHttpRequest.prototype.send",
        O[t.XHR_RESPONSE_LOADEND] = "xhr.onloadend",
        O[t.XHR_RESPONSE_READYSTATECHANGE] = "xhr.onreadystatechange",
        O[t.FETCH_REQUEST] = "window.Request",
        O[t.FETCH_RESPONSE] = "window.Response",
        O[t.COOKIE_GET] = "document.cookie",
        O[t.COOKIE_SET] = "document.cookie",
        O[t.CLICK] = "click event",
        O[t.COPY] = "copy event",
        O[t.IMG_SRC_SET] = "HTMLImageElement.prototype.src",
        O[t.IMG_SRC_GET] = "HTMLImageElement.prototype.src",
        O[t.EXCU_COMMAND] = "document.execCommand",
        O[t.DOM_CONTENT_LOADED] = "DOMContentLoaded",
        O[t.MUTATION_OBSERVER] = "MutationObserver",
        O[t.PERFORMANCE_OBSERVER] = "PerformanceObserver",
        O[t.XHR_REQUEST_SETQEQUESTHEADER] = "XMLHttpRequest.prototype.setRequestHeader",
        O[t.FETCH_ADDHEADER] = "addHeader",
        O);
    (T = {})[t.API_LOCALSTORAGE_SET] = "ApiStorageSet",
        T[t.API_LOCALSTORAGE_GET] = "ApiStorageGet",
        T[t.API_SESSIONSTORAGE_SET] = "ApiStorageSet",
        T[t.API_SESSIONSTORAGE_GET] = "ApiStorageGet",
        T[t.COPY] = "Copy",
        T[t.XHR_REQUEST_OPEN] = "XHRRequestOpen",
        T[t.XHR_REQUEST_SEND] = "XHRRequestSend",
        T[t.FETCH_REQUEST] = "FetchRquest",
        T[t.FETCH_RESPONSE] = "FetchResponse";
    var v = new (function () {
        function t(t, e) {
            this.pid = t,
                this.uid = e,
                this.strategy = {}
        }
        return t.prototype.loadStrategyProps = function (t) {
            var e = window.use("strategy");
            return Object.keys((null == e ? void 0 : e.strategy) || {}).reduce((function (n, o) {
                return n[o] = e.strategy[o][t],
                    n
            }
            ), {})
        }
            ,
            t.prototype.loadStrategyExtensionTools = function () {
                return this.loadStrategyProps("extensionTools")
            }
            ,
            t.prototype.loadStrategyConfig = function (t) {
                return this.loadStrategyProps("config")[t]
            }
            ,
            t.prototype.loadStrategyMap = function () {
                return this.loadStrategyProps("body")
            }
            ,
            t.prototype.loadStrategyGroup = function () {
                var t = window.use("strategy");
                return (null == t ? void 0 : t.event) || {}
            }
            ,
            t
    }())("64", "1111")
        , g = function () {
            return g = Object.assign || function (t) {
                for (var e, n = 1, o = arguments.length; n < o; n++)
                    for (var r in e = arguments[n])
                        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }
                ,
                g.apply(this, arguments)
        };
    function A(t, e) {
        var n = {};
        for (var o in t)
            Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(t); r < o.length; r++)
                e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]])
        }
        return n
    }
    function m(t, e, n, o) {
        return new (n || (n = Promise))((function (r, a) {
            function i(t) {
                try {
                    u(o.next(t))
                } catch (t) {
                    a(t)
                }
            }
            function c(t) {
                try {
                    u(o.throw(t))
                } catch (t) {
                    a(t)
                }
            }
            function u(t) {
                var e;
                t.done ? r(t.value) : (e = t.value,
                    e instanceof n ? e : new n((function (t) {
                        t(e)
                    }
                    ))).then(i, c)
            }
            u((o = o.apply(t, e || [])).next())
        }
        ))
    }
    function I(t, e) {
        var n, o, r, a, i = {
            label: 0,
            sent: function () {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: c(0),
            throw: c(1),
            return: c(2)
        },
            "function" == typeof Symbol && (a[Symbol.iterator] = function () {
                return this
            }
            ),
            a;
        function c(c) {
            return function (u) {
                return function (c) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; a && (a = 0,
                        c[0] && (i = 0)),
                        i;)
                        try {
                            if (n = 1,
                                o && (r = 2 & c[0] ? o.return : c[0] ? o.throw || ((r = o.return) && r.call(o),
                                    0) : o.next) && !(r = r.call(o, c[1])).done)
                                return r;
                            switch (o = 0,
                            r && (c = [2 & c[0], r.value]),
                            c[0]) {
                                case 0:
                                case 1:
                                    r = c;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                        o = c[1],
                                        c = [0];
                                    continue;
                                case 7:
                                    c = i.ops.pop(),
                                        i.trys.pop();
                                    continue;
                                default:
                                    if (!(r = i.trys,
                                        (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                        i.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && i.label < r[1]) {
                                        i.label = r[1],
                                            r = c;
                                        break
                                    }
                                    if (r && i.label < r[2]) {
                                        i.label = r[2],
                                            i.ops.push(c);
                                        break
                                    }
                                    r[2] && i.ops.pop(),
                                        i.trys.pop();
                                    continue
                            }
                            c = e.call(t, i)
                        } catch (t) {
                            c = [6, t],
                                o = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & c[0])
                        throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }([c, u])
            }
        }
    }
    "function" == typeof SuppressedError && SuppressedError;
    var N = window.fetch
        , C = window.navigator
        , D = C.sendBeacon
        , b = D && "function" == typeof D
        , L = 1e4
        , w = {
            bid: "argus3",
            region: "cn",
            timeInterval: 2,
            maxSize: 100,
            sampleRatio: {
                ratio: 100
            }
        };
    function P(t) {
        return "function" == typeof atob ? atob(t) : function (t) {
            for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = "", o = 0; o < t.length;) {
                var r = e.indexOf(t.charAt(o++))
                    , a = e.indexOf(t.charAt(o++))
                    , i = e.indexOf(t.charAt(o++))
                    , c = e.indexOf(t.charAt(o++))
                    , u = r << 2 | a >> 4
                    , s = (15 & a) << 4 | i >> 2
                    , E = (3 & i) << 6 | c;
                n += String.fromCharCode(u),
                    64 !== i && (n += String.fromCharCode(s)),
                    64 !== c && (n += String.fromCharCode(E))
            }
            return n
        }(t)
    }
    var H = function () {
        function t(t) {
            var e = this;
            this.sampleDataQueue = [],
                this.config = w,
                this.isReporting = !1,
                this.configInited = !1,
                this.getSlardarBid = function () {
                    return e.config.bid || "argus3"
                }
                ,
                this.getConfigRegion = function () {
                    return (e.config.region || "cn").toLowerCase()
                }
                ,
                this.gerReportUrl = function () {
                    var t = {
                        cn: P("aHR0cHM6Ly9tb24uemlqaWVhcGkuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),
                        boe: P("aHR0cHM6Ly9tb24uemlqaWVhcGkuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),
                        ttp: P("aHR0cHM6Ly9tb24udXMudGlrdG9rdi5jb20vbW9uaXRvcl9icm93c2VyL2NvbGxlY3QvYmF0Y2gvc2VjdXJpdHkvP2JpZD0="),
                        va: P("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),
                        maliva: P("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),
                        sg: P("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9"),
                        boei18n: P("aHR0cHM6Ly9tb24tdmEuYnl0ZW92ZXJzZWEuY29tL21vbml0b3JfYnJvd3Nlci9jb2xsZWN0L2JhdGNoL3NlY3VyaXR5Lz9iaWQ9")
                    }[e.getConfigRegion()];
                    if (t)
                        return t + e.getSlardarBid()
                }
                ,
                this.setConfig(t)
        }
        return t.prototype.report = function (t, e) {
            void 0 === e && (e = "SEC_RUNTIME_STRATEGY"),
                h.loadUid();
            var n = window.use("reportOptions");
            this.configInited || (this.setConfig(n),
                this.configInited = !0);
            var o = t.event
                , r = t.action
                , a = t.fromStage
                , i = this.shouleAddToSampleQueue(t)
                , c = o.pageUrl || window.location.href
                , u = A(o, [])
                , s = u.payload;
            s.context,
                s.__secReqHeaders;
            var E = A(s, ["context", "__secReqHeaders"]);
            u.payload = E;
            var p = Object.assign(this.constructNewDataWithPrifix(u, "event"), this.constructNewDataWithPrifix(r, "action"), {
                fromStage: a,
                documentURL: window.location.href,
                uId: h.getUid(),
                sdkVersion: "1.0.0"
            })
                , l = {
                    age: Math.floor(Date.now()),
                    type: e,
                    url: c,
                    body: p,
                    "user-agent": ""
                };
            i && this.pushDataToQueue(l)
        }
            ,
            t.prototype.constructNewDataWithPrifix = function (t, e) {
                return Object.entries(t).reduce((function (t, n) {
                    var o = n[0]
                        , r = n[1]
                        , a = Object.prototype.toString.call(r).slice(8, -1);
                    if ("Array" === a || "Object" === a || "Arguments" === a)
                        try {
                            r = JSON.stringify(r)
                        } catch (e) {
                            return t
                        }
                    else
                        "Function" !== a && "Symbol" !== a || (r = String(r));
                    return t["".concat(e, "_").concat(o)] = r,
                        t
                }
                ), {})
            }
            ,
            t.prototype.pushDataToQueue = function (t) {
                this.sampleDataQueue.push(t),
                    this.upload()
            }
            ,
            t.prototype.upload = function () {
                return m(this, void 0, void 0, (function () {
                    var t, e = this;
                    return I(this, (function (n) {
                        return t = this.gerReportUrl(),
                            this.isReporting || !t || 0 === this.sampleDataQueue.length || (this.isReporting = !0,
                                setTimeout((function () {
                                    return m(e, void 0, void 0, (function () {
                                        var e, n;
                                        return I(this, (function (o) {
                                            switch (o.label) {
                                                case 0:
                                                    return e = this.config.maxSize,
                                                        n = this.sampleDataQueue.slice(0, e),
                                                        this.sampleDataQueue = this.sampleDataQueue.slice(e),
                                                        b ? D.call(C, t, JSON.stringify(n)) ? [3, 2] : (console.log("「sendBecon」send send log report error"),
                                                            [4, this.logReportByFetch(t, n)]) : [3, 3];
                                                case 1:
                                                    o.sent(),
                                                        o.label = 2;
                                                case 2:
                                                    return [3, 5];
                                                case 3:
                                                    return [4, this.logReportByFetch(t, n)];
                                                case 4:
                                                    o.sent(),
                                                        o.label = 5;
                                                case 5:
                                                    return this.isReporting = !1,
                                                        this.upload(),
                                                        [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), 1e3 * this.config.timeInterval)),
                            [2]
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.logReportByFetch = function (t, e) {
                return m(this, void 0, void 0, (function () {
                    var n;
                    return I(this, (function (o) {
                        switch (o.label) {
                            case 0:
                                return o.trys.push([0, 2, , 3]),
                                    [4, N(t, {
                                        method: "post",
                                        body: JSON.stringify(e),
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    })];
                            case 1:
                                return o.sent(),
                                    [3, 3];
                            case 2:
                                return n = o.sent(),
                                    console.log("「fetch」send log report error", n),
                                    this.sampleDataQueue = e.concat(this.sampleDataQueue),
                                    [3, 3];
                            case 3:
                                return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.shouleAddToSampleQueue = function (t) {
                var e = t.event
                    , n = t.action
                    , o = this.getMatchedRatio(e, n);
                return o === L || Math.floor(Math.random() * L) <= o
            }
            ,
            t.prototype.setConfig = function (t) {
                t && ("Array" === Object.prototype.toString.call(t.sampleRatio).slice(8, -1) && (t.sampleRatio = this.sortSampleRatio(t.sampleRatio)),
                    this.config = g(g({}, this.config), t))
            }
            ,
            t.prototype.sortSampleRatio = function (t) {
                var e = function (t) {
                    var e = 0;
                    return t.actionType && t.eventType ? e = 2 : (t.actionType || t.eventType) && (e = 1),
                        e
                };
                return t.sort((function (t, n) {
                    var o = e(t)
                        , r = e(n);
                    return o > r ? -1 : o < r ? 1 : 0
                }
                ))
            }
            ,
            t.prototype.getMatchedRatio = function (t, e) {
                var n = L
                    , o = this.config.sampleRatio;
                if (!o)
                    return n;
                var r = t.name
                    , a = e.type
                    , i = Object.prototype.toString.call(o).slice(8, -1);
                if ("Object" === i)
                    n = l = this.matchRatioRule(r, a, o).ratio;
                else if ("Array" === i)
                    for (var c = o, u = 0, s = c.length; u < s; u++) {
                        var E = this.matchRatioRule(r, a, c[u])
                            , p = E.matched
                            , l = E.ratio;
                        if (p) {
                            n = l;
                            break
                        }
                    }
                return n
            }
            ,
            t.prototype.matchRatioRule = function (t, e, n) {
                var o = {
                    ratio: L,
                    matched: !1
                }
                    , r = n.ratio
                    , a = n.eventType
                    , i = n.actionType;
                return (a && i && t === a && e === i || a && t === a || i && e === i || !a && !i) && (o = {
                    ratio: r,
                    matched: !0
                }),
                    o
            }
            ,
            t
    }()
        , G = new H
        , M = function (t) {
            var e = t.eventName
                , o = t.payload
                , r = t.reason
                , a = t.strategyKey
                , i = t.errorStack
                , c = t.fromStage
                , u = {
                    name: e,
                    source: y[e],
                    timestamp: Date.now(),
                    pageUrl: location.href,
                    payload: o
                }
                , s = {
                    type: n.ERROR,
                    strategyKey: a,
                    reason: r,
                    payload: i
                };
            U({
                event: u,
                action: s,
                fromStage: c
            })
        }
        , U = function (t, e) {
            void 0 === e && (e = !0);
            var n = t.action
                , o = t.event;
            G.report(t),
                e && r.emit(o, n)
        }
        , X = function () {
            function t(t, e) {
                this.eventName = t,
                    this.payload = e
            }
            return t.prototype.registEvent = function () {
                return {
                    name: this.eventName,
                    source: y[this.eventName],
                    timestamp: Date.now(),
                    pageUrl: location.href,
                    payload: this.payload
                }
            }
                ,
                t.prototype.selection = function () {
                    var t = v.loadStrategyMap()
                        , e = v.loadStrategyGroup() || {};
                    return ((null == e ? void 0 : e[this.eventName]) || []).map((function (e) {
                        return null == t ? void 0 : t[e]
                    }
                    )).filter((function (t) {
                        return Boolean(t)
                    }
                    ))
                }
                ,
                t.prototype.compute = function (t, e) {
                    var o = t.key
                        , r = t.condition
                        , a = t.expression;
                    if (!r || "function" != typeof r || r(e)) {
                        var i = v.loadStrategyConfig(o);
                        if (a && "function" == typeof a)
                            try {
                                var c = a(e);
                                return c.strategyKey = o,
                                    U({
                                        event: e,
                                        action: c,
                                        fromStage: "compute"
                                    }, !1),
                                    c
                            } catch (t) {
                                return console.log(t),
                                    M({
                                        eventName: this.eventName,
                                        strategyKey: o,
                                        reason: "策略计算异常",
                                        payload: e.payload,
                                        errorStack: {
                                            config: i,
                                            name: t.name,
                                            message: t.message,
                                            detail: t.detail
                                        },
                                        fromStage: "compute"
                                    }),
                                {
                                    type: n.PASS,
                                    reason: "".concat(o, "策略执行异常")
                                }
                            }
                    }
                }
                ,
                t.prototype.execute = function (t, e) {
                    var o, r = [], a = t.filter((function (t) {
                        return t.type === n.BLOCK
                    }
                    )), i = t.filter((function (t) {
                        return t.type === n.REWRITE
                    }
                    )), c = t.filter((function (t) {
                        return t.type === n.REPORT_ONLY
                    }
                    )), s = t.filter((function (t) {
                        return t.type === n.PASS
                    }
                    ));
                    r = (r = a.length > 0 ? [a[0]] : i.length > 0 ? i : c.length > 0 ? [c[0]] : [s[0]]).filter((function (t) {
                        return t
                    }
                    ));
                    for (var E = !1, p = 0; p < r.length; p++) {
                        var l = u("strategy").execution
                            , f = r[p]
                            , d = v.loadStrategyConfig(f.strategyKey);
                        try {
                            o = u(l[this.eventName])(e, f, p === r.length - 1),
                                U({
                                    event: e,
                                    action: f,
                                    fromStage: "execute"
                                }, !1)
                        } catch (t) {
                            E = p === r.length - 1,
                                M({
                                    eventName: this.eventName,
                                    strategyKey: f.strategyKey,
                                    reason: "策略执行异常",
                                    payload: e.payload,
                                    errorStack: {
                                        config: d,
                                        name: t.name,
                                        message: t.message,
                                        detail: t.detail
                                    },
                                    fromStage: "execute"
                                })
                        }
                    }
                    var S = e.payload
                        , _ = S.originFn
                        , R = S.args
                        , O = S.context;
                    return (0 === r.length || E) && _ ? _.apply(O, R) : o
                }
                ,
                t.prototype.run = function () {
                    var t = this.registEvent();
                    U({
                        event: t,
                        action: {},
                        fromStage: "init"
                    }, !1);
                    for (var e = [], n = 0, o = this.selection(); n < o.length; n++) {
                        var r = o[n]
                            , a = this.compute(r, t);
                        a && e.push(a)
                    }
                    return this.execute(e, t)
                }
                ,
                t
        }()
        , j = function (e, n, o) {
            if (!n || n.fn) {
                if (!n) {
                    var r = {
                        handle: function () { }
                    };
                    n = {
                        object: r,
                        fn: r.handle,
                        fnName: "handle"
                    }
                }
                var a = n.object
                    , i = n.fn
                    , c = n.fnName;
                return s(e, a, i),
                    c && (a[c] = u),
                    u
            }
            function u() {
                var n = this
                    , r = [];
                for (var a in arguments)
                    r.push(arguments[a]);
                if ((this === sessionStorage && c && (e = "getItem" === c ? t.API_SESSIONSTORAGE_GET : t.API_SESSIONSTORAGE_SET),
                    this === localStorage && c && (e = "getItem" === c ? t.API_LOCALSTORAGE_GET : t.API_LOCALSTORAGE_SET),
                    e === t.PERFORMANCE_OBSERVER && r[0]) && !r[0].getEntries().filter((function (t) {
                        if (t instanceof PerformanceResourceTiming) {
                            var e = t.name;
                            if (!e)
                                return !0;
                            var n = G.gerReportUrl()
                                , o = new URL(e);
                            return !n.startsWith("".concat(o.protocol, "//").concat(o.host).concat(o.pathname))
                        }
                        return !0
                    }
                    )).length)
                    return;
                var u = o && o.apply(n, r) || {}
                    , s = Object.assign({
                        context: n,
                        args: r,
                        originFn: i
                    }, u);
                try {
                    return new X(e, s).run()
                } catch (t) {
                    return M({
                        eventName: e,
                        payload: s,
                        reason: "策略引擎执行异常",
                        errorStack: t,
                        fromStage: "select"
                    }),
                        i.apply(n, r)
                }
            }
        }
        , x = function (t, e, n) {
            for (var o = e.split("."), r = 0, a = [window]; r < a.length; r++) {
                for (var i = a[r], c = o[o.length - 1], u = i, s = 0, E = o; s < E.length; s++) {
                    if (u = i,
                        !(i = i[E[s]]))
                        return
                }
                j(t, {
                    object: u,
                    fn: i,
                    fnName: c
                }, n)
            }
        };
    x(t.API_LOCALSTORAGE_SET, "Storage.prototype.setItem", (function (t, e) {
        return {
            key: t,
            value: e
        }
    }
    )),
        x(t.API_LOCALSTORAGE_GET, "Storage.prototype.getItem", (function (t) {
            return {
                key: t
            }
        }
        ));
    var B = function (t) {
        var e = t.split(".")
            , n = window;
        return e.every((function (t) {
            return n = n[t],
                Boolean(n)
        }
        ))
    };
    B("Clipboard") && (x(t.CLIPBOARD_WRITE_TEXT, "Clipboard.prototype.write", (function () {
        return {}
    }
    )),
        x(t.CLIPBOARD_READ_TEXT, "Clipboard.prototype.read", (function () {
            return {}
        }
        )),
        x(t.CLIPBOARD_WRITE_TEXT, "Clipboard.prototype.writeText", (function () {
            return {}
        }
        )),
        x(t.CLIPBOARD_READ_TEXT, "Clipboard.prototype.readText", (function () {
            return {}
        }
        ))),
        B("document.execCommand") && x(t.EXCU_COMMAND, "document.execCommand", (function () {
            return {}
        }
        )),
        x(t.REQUEST_FILE_STSTEM, "requestFileSystem", (function () {
            return {}
        }
        )),
        x(t.GEOLOCATION_CURRENT_POSITION, "Geolocation.prototype.getCurrentPosition", (function () {
            return {}
        }
        )),
        x(t.GEOLOCATION_WATCH_POSITION, "Geolocation.prototype.watchPosition", (function () {
            return {}
        }
        )),
        x(t.INDEXDB_ADD, "IDBObjectStore.prototype.add", (function () {
            return {}
        }
        )),
        x(t.INDEXDB_PUT, "IDBObjectStore.prototype.put", (function () {
            return {}
        }
        )),
        x(t.INDEXDB_UPDATE, "IDBCursor.prototype.update", (function () {
            return {}
        }
        )),
        x(t.MEDIADEVICES_GETUSERMEDIA, "MediaDevices.prototype.getUserMedia", (function () {
            return {}
        }
        )),
        x(t.NAVIGATOR_SEND_BEACON, "Navigator.prototype.sendBeacon", (function () {
            return {}
        }
        )),
        s(t.FETCH_REQUEST, window, N);
    var Q = "Request" in window
        , W = "Headers" in window;
    window.fetch = function (e, n) {
        var o = {
            onRequest: function (e, n) {
                return N.apply(window, [e, n]).then((function (e) {
                    return 200 === e.status && j(t.FETCH_RESPONSE, {
                        object: o,
                        fn: o.onResponse,
                        fnName: "onResponse"
                    }, (function (t) {
                        return {
                            _headers: function (t) {
                                for (var e, n = t.headers.entries(), o = {}; (e = n.next()) && (e.value && (o[e.value[0]] = e.value[1]),
                                    !e.done);)
                                    ;
                                return o
                            }(t),
                            response: t
                        }
                    }
                    )),
                        o.onResponse.apply(window, [e])
                }
                ))
            },
            onResponse: function (t) {
                return t
            }
        };
        return j(t.FETCH_REQUEST, {
            object: o,
            fn: o.onRequest,
            fnName: "onRequest"
        }, (function (e, n) {
            var o, r = "", a = "", i = n && n.body;
            Q && e instanceof Request ? (r = e.url,
                a = e.method,
                o = e.headers.set.bind(e.headers)) : (r = e,
                    a = n && n.method ? n.method : "GET",
                    (n = n || {}).headers = n.headers || {},
                    o = W && n.headers instanceof Headers ? n.headers.set.bind(n.headers) : Array.isArray(n.headers) ? function (t, e) {
                        var o = !1;
                        (null == n ? void 0 : n.headers).forEach((function (n) {
                            n[0] === t && (n[1] = e,
                                o = !0)
                        }
                        )),
                            o || (null == n ? void 0 : n.headers).push([t, e])
                    }
                        : function (t, e) {
                            var o = (null == n ? void 0 : n.headers)[t];
                            (null == n ? void 0 : n.headers)[t] = o ? "".concat(o, ", ").concat(e) : e
                        }
            );
            var c = {
                url: r,
                method: a,
                body: i,
                init: n,
                input: e,
                __secReqHeaders: {},
                addHeader: o
            };
            return c.addHeader = j(t.FETCH_ADDHEADER, {
                object: {},
                fn: o,
                fnName: "addHeader"
            }, (function (t, e) {
                return e && t ? (void 0 === c.__secReqHeaders[t] ? c.__secReqHeaders[t] = e : c.__secReqHeaders[t] = "".concat(c.__secReqHeaders[t], ", ").concat(e),
                    {}) : {}
            }
            )),
                c
        }
        )),
            o.onRequest(e, n)
    }
        ,
        x(t.XHR_REQUEST_OPEN, "XMLHttpRequest.prototype.open", (function (t, e, n) {
            var o = this;
            o._xhr_open_args || (o._xhr_open_args = {}),
                Object.assign(o._xhr_open_args, {
                    method: t,
                    url: e,
                    isAsync: n
                })
        }
        )),
        x(t.XHR_REQUEST_SETQEQUESTHEADER, "XMLHttpRequest.prototype.setRequestHeader", (function (t, e) {
            if (!e || !t)
                return {};
            var n = this;
            return n._xhr_headers = n.__secReqHeaders = n.__secReqHeaders || {},
                void 0 === n.__secReqHeaders[t] ? n.__secReqHeaders[t] = e : n.__secReqHeaders[t] = "".concat(n.__secReqHeaders[t], ", ").concat(e),
                {}
        }
        )),
        x(t.XHR_REQUEST_SEND, "XMLHttpRequest.prototype.send", (function () {
            var e = this
                , n = function (n) {
                    var o = n.toUpperCase()
                        , r = "on".concat(n)
                        , a = e[r];
                    a && (e[r] = function () {
                        if (e.readyState === XMLHttpRequest.DONE && 200 === e.status) {
                            var n = j(t["XHR_RESPONSE_".concat(o)], {
                                object: e,
                                fn: a,
                                fnName: null
                            }, (function () { }
                            ));
                            return null == n ? void 0 : n.apply(e, arguments)
                        }
                        a && a.apply(e, arguments)
                    }
                    )
                };
            n("readystatechange"),
                n("loadend")
        }
        ));
    var q = j(t.COPY, null, (function () {
        return {
            text: window.getSelection().toString()
        }
    }
    ));
    window.addEventListener("copy", q);
    var F = j(t.CLICK, null, (function () { }
    ));
    window.addEventListener("click", F);
    var Y = j(t.DOM_CONTENT_LOADED, null, (function () { }
    ));
    if (window.addEventListener("DOMContentLoaded", Y),
        B("Object.getOwnPropertyDescriptor") && B("Object.defineProperty")) {
        var k = Object.getOwnPropertyDescriptor(Document.prototype, "cookie") || Object.getOwnPropertyDescriptor(HTMLDocument.prototype, "cookie");
        if (k && k.configurable) {
            j(t.COOKIE_GET, {
                object: k,
                fnName: "get",
                fn: k.get
            }, (function () { }
            )),
                j(t.COOKIE_SET, {
                    object: k,
                    fnName: "set",
                    fn: k.set
                }, (function () { }
                ));
            try {
                Object.defineProperty(document, "cookie", {
                    get: function () {
                        return k.get.call(document)
                    },
                    set: function (t) {
                        return k.set.call(document, t),
                            !0
                    }
                })
            } catch (t) { }
        }
    }
    if (B("Object.getOwnPropertyDescriptor") && B("Object.defineProperty")) {
        var V = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src");
        j(t.IMG_SRC_SET, {
            object: V,
            fnName: "set",
            fn: V.set
        }, (function () { }
        )),
            j(t.IMG_SRC_GET, {
                object: V,
                fnName: "get",
                fn: V.get
            }, (function () { }
            ));
        try {
            Object.defineProperty(HTMLImageElement.prototype, "src", {
                set: function (t) {
                    var e;
                    return null === (e = null == V ? void 0 : V.set) || void 0 === e ? void 0 : e.call(this, t)
                },
                get: function () {
                    return V.get.call(this)
                }
            })
        } catch (t) { }
    }
    var J = {
        attributes: !1,
        childList: !0,
        subtree: !0
    }
        , K = j(t.MUTATION_OBSERVER, null, (function () {
            return {}
        }
        ));
    window.addEventListener("DOMContentLoaded", (function () {
        var t = document.body;
        B("MutationObserver") && new MutationObserver(K).observe(t, J)
    }
    ));
    var Z = j(t.PERFORMANCE_OBSERVER, null, (function () {
        return {}
    }
    ));
    B("PerformanceObserver") && new PerformanceObserver(Z).observe({
        entryTypes: ["element", "event", "navigation", "resource"]
    });
    var z = "//lf-security.bytegoofy.com/obj/security-secsdk"
        , $ = function (e, n) {
            var o = E(t.FETCH_REQUEST)
                , r = window.fetch;
            o && (r = o.fn.bind(o.context));
            var a = localStorage.getItem.bind(localStorage)
                , i = E(t.API_LOCALSTORAGE_GET);
            i && (a = i.fn.bind(localStorage));
            var c = a("web_security_runtime_cache_".concat(e));
            c ? function (t) {
                try {
                    new Function("".concat(t, ";"))()
                } catch (t) { }
            }(c) : n ? document.writeln('<script nonce="'.concat(n, '" src="').concat(e, '"><\/script>')) : document.writeln('<script src="'.concat(e, '"><\/script>')),
                r(e).then((function (t) {
                    return t.text()
                }
                )).then((function (n) {
                    var o = localStorage.setItem.bind(localStorage)
                        , r = E(t.API_LOCALSTORAGE_SET);
                    r && (o = r.fn.bind(localStorage)),
                        o("web_security_runtime_cache_".concat(e), n)
                }
                ))
        };
    new (function () {
        function t() {
            var t = ["", "https:"].map((function (t) {
                return document.querySelector('script[src="'.concat(t + z, '/runtime.js"]'))
            }
            )).find((function (t) {
                return t
            }
            ));
            if (t) {
                var e = t.getAttribute("project-id");
                this.nonce = document.currentScript.nonce || this.nonce,
                    this.projectId = e,
                    this.init()
            }
        }
        return t.prototype.init = function () {
            this.loadCommonModule(),
                this.loadStrategyModule()
        }
            ,
            t.prototype.loadCommonModule = function () {
                $("https:".concat(z, "/project_").concat(this.projectId, ".js"), this.nonce)
            }
            ,
            t.prototype.loadStrategyModule = function () {
                $("https:".concat(z, "/strategy_").concat(this.projectId, ".js"), this.nonce)
            }
            ,
            t
    }())
}
));
//--// # sourceMappingURL=index.umd.js.map
