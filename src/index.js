// =========== class difinetion ===========

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Image = require("canvas");
class LocalStorage {
    constructor(storageKey = "localStorage") {
        this._storage = {};
        this._length = 0;
    }

    get length() {
        if (this._useRealStorage) {
            return window.localStorage.length;
        }
        return this._length;
    }

    key(index) {
        if (index < 0 || index >= this._length) {
            return null;
        }

        return Object.keys(this._storage)[index];
    }

    getItem(key) {
        return this._storage.hasOwnProperty(key) ? this._storage[key] : null;
    }

    setItem(key, value) {
        if (key === undefined || value === undefined) {
            throw new TypeError("Failed to execute 'setItem' on 'Storage': 2 arguments required");
        }

        const stringKey = String(key);
        const stringValue = String(value);

        const isNewKey = !this._storage.hasOwnProperty(stringKey);
        this._storage[stringKey] = stringValue;

        if (isNewKey) {
            this._length++;
        }
    }

    removeItem(key) {
        if (this._storage.hasOwnProperty(key)) {
            delete this._storage[key];
            this._length--;
        }
    }

    clear() {
        this._storage = {};
        this._length = 0;
    }

    // 额外方法：获取所有键值对（非标准）
    getAll() {
        return { ...this._storage };
    }

    // 额外方法：检查是否支持（非标准）
    isSupported() {
        try {
            const testKey = '__storage_test__';
            this.setItem(testKey, 'test');
            this.removeItem(testKey);
            return true;
        } catch (e) {
            return false;
        }
    }
}

class Document {
    cookie() { }
}

class HTMLImageElement {
    src() { }
}

// =========== create instance ===========

const window = global;
const xhr = new XMLHttpRequest();
const localStorage = new LocalStorage();
const document = new Document();
const location = {};
const navigator = {};
const fonts = {
    add() { },
    load() { },
    check() { },
    delete() { },
    clear() { },
    get size() {
        return 0;
    }
};

// =========== safe protection ===========

(function () {
    "use strict";
    const $toString = Function.prototype.toString;
    const myFunctionToStringSymbol = Symbol('toString');
    const myToString = function () {
        return typeof this === 'function' && this[myFunctionToStringSymbol] || $toString.call(this);
    };
    function setNative(func, key, value) {
        Object.defineProperty(func, key, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
        });
    }
    // 删除原型链上的 toString 并重新定义
    delete Function.prototype.toString;
    setNative(Function.prototype, 'toString', myToString);
    setNative(Function.prototype.toString, myFunctionToStringSymbol, 'function toString() { [native code] }');
    // 为特定函数设置自定义的 toString 返回值
    this.funcSetNative = (func) => {
        setNative(func, myFunctionToStringSymbol, `function ${func.name || ''}() { [native code] }`);
    };
}).call(global);

// =========== assignment ===========

window.addEventListener = function () { };
window._sdkGlueVersionMap = {
    "bdmsVersion": "1.0.0.44",
    "sdkGlueVersion": "1.0.0.39",
}
window.location = location;
window.Slardar = function () { };
window.innerWidth = 1920;
window.innerHeight = 1080;
window.outerHeight = 1914;
window.outerWidth = 1026;
window.screenX = 2563;
window.screenY = 412;
window.pageXOffset = 0;
window.pageYOffset = 0;
window.screen = {
    availWidth: 1920,
    availHeight: 1032,
    width: 1920,
    height: 1080,
    colorDepth: 24,
    pixelDepth: 24,
    orientation: {
        type: "landscape-primary",
        angle: 0,
    }
}

location.host = "cn";
// location.href = "https://jimeng.jianying.com/mweb/v1/get_explore?aid=513695&web_version=7.5.0&da_version=3.3.2&aigc_features=app_lip_sync";
location.ref = undefined;

document.cookie = [
    ["x-web-secsdk-uid", ""],
];
document.querySelector = function () { };
document.fonts = fonts;

navigator.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";
navigator.sendBeacon = function () { };
navigator.platform = "Win32";

xhr.bdmsInvokeList = [
    {
        "args": [
            "POST",
            "https://jimeng.jianying.com/mweb/v1/get_explore?aid=513695&web_version=7.5.0&da_version=3.3.2&aigc_features=app_lip_sync",
            true
        ]
    },
    {
        "args": [
            "Accept",
            "application/json, text/plain, */*"
        ]
    },
    {
        "args": [
            "Content-Type",
            "application/json"
        ]
    },
    {
        "args": [
            "sign",
            "6f21cdc71e03223c9becc03163b99827"
        ]
    },
    {
        "args": [
            "device-time",
            "1758887493"
        ]
    },
    {
        "args": [
            "sign-ver",
            "1"
        ]
    },
    {
        "args": [
            "pf",
            "7"
        ]
    },
    {
        "args": [
            "appvr",
            "5.8.0"
        ]
    },
    {
        "args": [
            "loc",
            "cn"
        ]
    },
    {
        "args": [
            "lan",
            "zh-Hans"
        ]
    },
    {
        "args": [
            "app-sdk-version",
            "48.0.0"
        ]
    },
    {
        "args": [
            "appid",
            "513695"
        ]
    }
];
xhr.blockType = 0;
xhr.__secReqHeaders = {
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "sign": "4e5ed5706280b5eba283be5f2a587a90",
    "device-time": "1758904207",
    "sign-ver": "1",
    "pf": "7",
    "appvr": "5.8.0",
    "loc": "cn",
    "lan": "zh-Hans",
    "app-sdk-version": "48.0.0",
    "appid": "513695"
};
xhr._xhr_headers = {
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "sign": "4e5ed5706280b5eba283be5f2a587a90",
    "device-time": "1758904207",
    "sign-ver": "1",
    "pf": "7",
    "appvr": "5.8.0",
    "loc": "cn",
    "lan": "zh-Hans",
    "app-sdk-version": "48.0.0",
    "appid": "513695"
};
xhr._xhr_open_args = {
    "method": "POST",
    "url": "https://jimeng.jianying.com/mweb/v1/get_explore?aid=513695&web_version=7.5.0&da_version=3.3.2&aigc_features=app_lip_sync",
    "isAsync": true
};

bdms_init_params = {
    aid: 513695,
    pageId: 28324,
    paths: [
        "/mweb/v1/generate",
        "/mweb/v1/super_resolution",
        "/mweb/v1/painting",
        "/mweb/v1/aigc_draft/generate",
        "/mweb/v1/normal_hd",
        "/mweb/v1/doodle",
        "/mweb/v1/batch_generate_video",
        "/mweb/v1/mixblend",
        "/mweb/v1/fusion",
        "/mweb/v1/creation_agent/v2/conversation",
        "/commerce/v1/subscription/make_unauto_order",
        "/commerce/v1/benefits/credit_receive",
        "/commerce/v1/purchase/make_order",
        "/commerce/v3/trade/init_trade",
        "/commerce/v2/subscription/sign_and_pay",
        "/mweb/v1/get_explore",
        "/mweb/v1/feed_short_video",
        "/mweb/v1/feed",
        "/mweb/v1/get_homepage",
        "/mweb/v1/get_weekly_challenge_work_list",
        "/mweb/v1/mget_item_info",
        "/mweb/v1/get_item_info",
        "/mweb/v1/get_history_by_ids",
        "/mweb/v1/get_history",
        "/mweb/search/v1/search",
        "/lv/v1/user/update",
        "/mweb/v1/publish",
        "competition/v1/submit_artwork",
        "/mweb/v1/mark_favorite",
        "/mweb/v1/follow"
    ],
    track: {
        "mode": 2
    }
}

// =========== globalize ===========

global.window = window;
global.XMLHttpRequest = XMLHttpRequest;
global.Image = Image;
global.xhr = xhr;
global.localStorage = localStorage;
global.document = document;
global.location = location;
global.navigator = navigator;
global.Document = Document;
global.HTMLImageElement = HTMLImageElement;

// =========== env proxy ===========

function get_environment(proxy_array) {
    proxy_array.forEach(function (variableName) {
        try {
            var globalObj = typeof window !== 'undefined' ? window : global;
            var targetObj = globalObj[variableName] || {};

            // 使用闭包保存variableName
            var handler = createHandler(variableName);

            globalObj[variableName] = new Proxy(targetObj, handler);

        } catch (e) {
            console.error('处理对象 ' + variableName + ' 时出错:', e);
        }
    });

    function createHandler(name) {
        return {
            get: function (target, property, receiver) {
                console.log("方法:", "get  ", "对象:", name,
                    "  属性:", property,
                    "  属性类型:", typeof property,
                    "  属性值类型:", typeof target[property]);
                return Reflect.get(target, property, receiver);
            },
            set: function (target, property, value, receiver) {
                console.log("方法:", "set  ", "对象:", name,
                    "  属性:", property,
                    "  属性类型:", typeof property,
                    "  属性值类型:", typeof target[property],
                    "  新值:", value);
                return Reflect.set(target, property, value, receiver);
            }
        };
    }
};
proxy_array = ['window', 'document', 'location', 'navigator', 'history', 'localStorage', 'sessionStorage']
// get_environment(proxy_array);  // 调试时运行代理

window.requestAnimationFrame = function requestAnimationFrame() { };

// =========== execution ===========

// require("./home");
require("./bdms");
require("./sdk-glue");
require("./secsdk-runtime");

window.bdms.init(bdms_init_params);

params = '{"count":40,"filter":{"work_type_list":["video","image","canvas"]},"offset":0,"image_info":{"width":2048,"height":2048,"format":"webp","image_scene_list":[{"scene":"smart_crop","width":240,"height":240,"format":"webp","uniq_key":"smart_crop-w:240-h:240"},{"scene":"smart_crop","width":320,"height":320,"format":"webp","uniq_key":"smart_crop-w:320-h:320"},{"scene":"smart_crop","width":480,"height":480,"format":"webp","uniq_key":"smart_crop-w:480-h:480"},{"scene":"smart_crop","width":480,"height":320,"format":"webp","uniq_key":"smart_crop-w:480-h:320"},{"scene":"smart_crop","width":240,"height":160,"format":"webp","uniq_key":"smart_crop-w:240-h:160"},{"scene":"smart_crop","width":160,"height":213,"format":"webp","uniq_key":"smart_crop-w:160-h:213"},{"scene":"smart_crop","width":320,"height":427,"format":"webp","uniq_key":"smart_crop-w:320-h:427"},{"scene":"loss","width":1080,"height":1080,"format":"webp","uniq_key":"1080"},{"scene":"loss","width":900,"height":900,"format":"webp","uniq_key":"900"},{"scene":"loss","width":720,"height":720,"format":"webp","uniq_key":"720"},{"scene":"loss","width":480,"height":480,"format":"webp","uniq_key":"480"},{"scene":"loss","width":360,"height":360,"format":"webp","uniq_key":"360"},{"scene":"normal","width":2048,"height":2048,"format":"webp","uniq_key":"2048"}]},"category_id":11222,"feed_refer":"feed_loadmore"}';
params_arr = [params];

xhr.open("POST", "https://jimeng.jianying.com/mweb/v1/get_explore?aid=513695&web_version=7.5.0&da_version=3.3.2&aigc_features=app_lip_sync");
xhr.send(params);