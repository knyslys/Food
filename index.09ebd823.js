// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"e5K8J":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9240e6c509ebd823";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"amwXi":[function(require,module,exports) {
var _countdownJs = require("./countdown.js");
var _sliderJs = require("./slider.js");
var _productsJs = require("./products.js");
var _cartJs = require("./cart.js");
const countdownContainer = document.querySelector(".offers__countdown");
const futureDate = new Date("Jan 15, 2024 15:37:25").getTime();
let countdownInterval = setInterval(()=>{
    //gaunam array datu. Dienos / valandos/ minutes / sekundes
    let countdownDate = (0, _countdownJs.setDate)(futureDate);
    //kiekviena sekunde resetinam containerio boxus datu.
    countdownContainer.innerHTML = "";
    //sukam datu array ir displayinam datas
    countdownDate.forEach((d, i)=>{
        countdownContainer.insertAdjacentHTML("afterbegin", ` <div class="offers__countdown__box">${d}</div>`);
        //addinam : simboly
        if (i < countdownDate.length - 1) countdownContainer.insertAdjacentHTML("afterbegin", "<span>:</span>");
    });
}, 1000);
//nuotrauku slideris
(0, _sliderJs.sliderItemContainer).forEach((item, i)=>item.addEventListener("click", ()=>{
        (0, _sliderJs.slideTo)(i);
    }));
//setinam top menu, jei  nuscrolinam tam tikra atstuma
window.addEventListener("scroll", ()=>{
    if (document.documentElement.scrollTop > 0) document.querySelector(".navigation").classList.add("navigation--fixed");
    else document.querySelector(".navigation").classList.remove("navigation--fixed");
});
//--------------------------testimonials slider
const testimonialWrapper = document.querySelectorAll(".wrapper");
const testimonialBox = document.querySelectorAll(".testimonials__box");
const TESTIMONIAL_SIZE_UNTIL_WRAP = 900;
let currentSlide;
let activeSlide;
let slideClass = Math.round(testimonialWrapper.length / 2);
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const settingDefaultTestimonial = (screenWidth)=>{
    if (screenWidth > TESTIMONIAL_SIZE_UNTIL_WRAP) {
        activeSlide = 1;
        currentSlide = 0;
    } else {
        activeSlide = 0;
        currentSlide = 0;
    }
    setActiveSlide(activeSlide);
    slideTestimonial(currentSlide);
};
const slideTestimonial = (curr)=>{
    console.log(curr);
    testimonialWrapper.forEach((wrapper)=>{
        wrapper.style.transform = "translateX(" + curr * 100 + "%)";
    });
};
const setActiveSlide = (curr)=>{
    testimonialBox.forEach((w)=>w.classList.remove("selected"));
    testimonialBox[curr].classList.add("selected");
};
rightArrow.addEventListener("click", ()=>{
    currentSlide--;
    activeSlide++;
    if (screen.width > TESTIMONIAL_SIZE_UNTIL_WRAP) //logika, jeigu testimonialsus rodom po 3.
    {
        if (activeSlide >= testimonialWrapper.length - 1) {
            currentSlide = 0;
            activeSlide = 1;
        }
    }
    if (screen.width <= TESTIMONIAL_SIZE_UNTIL_WRAP) //logika, jeigu testimonialsuss rodom po 1
    {
        if (activeSlide >= testimonialWrapper.length) {
            currentSlide = 0;
            activeSlide = 0;
        }
    }
    slideTestimonial(currentSlide);
    setActiveSlide(activeSlide);
});
leftArrow.addEventListener("click", ()=>{
    currentSlide++;
    activeSlide--;
    if (screen.width > TESTIMONIAL_SIZE_UNTIL_WRAP) {
        if (activeSlide <= 0) {
            currentSlide = (testimonialWrapper.length - 3) * -1;
            activeSlide = testimonialWrapper.length - 2;
        }
    }
    if (screen.width <= TESTIMONIAL_SIZE_UNTIL_WRAP) {
        if (activeSlide < 0) {
            currentSlide = (testimonialWrapper.length - 1) * -1;
            activeSlide = testimonialWrapper.length - 1;
            console.log(currentSlide);
            console.log(activeSlide);
        }
    }
    slideTestimonial(currentSlide);
    setActiveSlide(activeSlide);
});
//----------------------end of testimonial
//showing cart
//hiding cart
document.querySelector(".close-icon").addEventListener("click", ()=>{
    document.querySelector(".cart-page").classList.add("cart-page--off");
});
settingDefaultTestimonial(screen.width);
window.addEventListener("resize", ()=>{
    settingDefaultTestimonial(screen.width);
    console.log("hi");
});
//mobile navigation
const mobileNavigationIcon = document.querySelector(".mobilenavigation");
const mobileNavigationList = document.querySelector(".mob-navigation");
const hideMobileNavigation = document.querySelector(".hide-mobile");
mobileNavigationIcon.addEventListener("click", ()=>{
    mobileNavigationIcon.classList.toggle("mobilenavigation--off");
    if (!mobileNavigationIcon.classList.contains("mobilenavigation--off")) mobileNavigationList.classList.remove("mob-navigation--hidden");
    else mobileNavigationList.classList.add("mob-navigation--hidden");
});
hideMobileNavigation.addEventListener("click", ()=>{
    mobileNavigationList.classList.add("mob-navigation--hidden");
    mobileNavigationIcon.classList.add("mobilenavigation--off");
});

},{"./countdown.js":"47Lg7","./slider.js":"bM7ge","./products.js":"kwj5V","./cart.js":"lXW1K"}],"47Lg7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setDate", ()=>setDate);
function setDate(futureDate) {
    let now = new Date().getTime();
    let distance = futureDate - now;
    //returninam nieko, jei dabartine data > future data
    if (distance < 0) return;
    //formules datu vienetam *__*
    let days = Math.floor(distance / 86400000);
    let hours = Math.floor(distance % 86400000 / 3600000);
    let minutes = Math.floor(distance % 3600000 / 60000);
    let seconds = Math.floor(distance % 60000 / 1000);
    let fullDate = [
        days,
        hours,
        minutes,
        seconds
    ];
    return fullDate;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bM7ge":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slider", ()=>slider);
parcelHelpers.export(exports, "sliderItemContainer", ()=>sliderItemContainer);
parcelHelpers.export(exports, "slideTo", ()=>slideTo);
const slider = document.querySelector(".offers__slider");
const sliderItemContainer = document.querySelectorAll(".offers__slider__container");
function slideTo(id) {
    sliderItemContainer.forEach((item)=>{
        item.classList.remove("offers__slider__container--active");
    });
    slider.scrollLeft = sliderItemContainer[id].clientWidth * id;
    sliderItemContainer[id].classList.add("offers__slider__container--active");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwj5V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "products", ()=>products);
const products = [
    {
        id: 1543,
        name: "Apples",
        price: 75.0,
        img: require("e24ef8e0c57adc32")
    },
    {
        id: 1432,
        name: "Bannanas",
        price: 62.0,
        img: require("14fd9f14fca7f723")
    },
    {
        id: 1768,
        name: "Cabbages",
        price: 80.0,
        img: require("b4519261bc594ee9")
    },
    {
        id: 1111,
        name: "Pineapples",
        price: 75.0,
        img: require("b370179770b28e29")
    },
    {
        id: 1685,
        name: "Strawberries",
        price: 75.0,
        img: require("61c7c1686927e012")
    },
    {
        id: 1064,
        name: "Oranges",
        price: 75.0,
        img: require("ab5209f30d9cf969")
    },
    {
        id: 1182,
        name: "Cherries",
        price: 75.0,
        img: require("26abb1046d026ab7")
    },
    {
        id: 1152,
        name: "Kiwi",
        price: 25.0,
        img: require("c6637507e2f7517a")
    },
    {
        id: 1181,
        name: "Dragonfruit",
        price: 50.0,
        img: require("692176db1680a268")
    }
];
const productContainer = document.querySelector(".popular");
const loadProducts = ()=>{
    products.forEach((item)=>{
        let html = `<div class="popular__item">
    <div class="popular__item__imgbox">
      <img
        src="${item.img}"
        alt="${item.name}"
        class="product-img"
      />
    </div>
    <div class="popular__item__textbox">
      <span class="smaller-text">UP TO 60% OFF</span>
      <span class="important-text">${item.name}</span>
      <div class="product-rating">
        <div class="product-rating__stars">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
        <span>(104)</span>
      </div>
      <span class="important-text">$ ${item.price}</span>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 icon add-to-cart ${item.id}"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
    </div>
  </div>`;
        productContainer.insertAdjacentHTML("afterbegin", html);
    });
};
loadProducts();

},{"e24ef8e0c57adc32":"i4p8G","14fd9f14fca7f723":"g3iFy","b4519261bc594ee9":"2IFlA","b370179770b28e29":"jahgo","61c7c1686927e012":"toHOz","ab5209f30d9cf969":"i84hL","26abb1046d026ab7":"ecImU","c6637507e2f7517a":"cP9pa","692176db1680a268":"80SLh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i4p8G":[function(require,module,exports) {
module.exports = require("f1483c1a1d093f61").getBundleURL("cyvfC") + "apples.5160f3fc.jpg" + "?" + Date.now();

},{"f1483c1a1d093f61":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"g3iFy":[function(require,module,exports) {
module.exports = require("fc2938b71a6a939a").getBundleURL("cyvfC") + "banana.86430115.jpg" + "?" + Date.now();

},{"fc2938b71a6a939a":"lgJ39"}],"2IFlA":[function(require,module,exports) {
module.exports = require("b3bfb1619be8a5ec").getBundleURL("cyvfC") + "cabbage.7d30efaf.jpg" + "?" + Date.now();

},{"b3bfb1619be8a5ec":"lgJ39"}],"jahgo":[function(require,module,exports) {
module.exports = require("1947da28f0e557b7").getBundleURL("cyvfC") + "pineapple.2cc944ee.jpg" + "?" + Date.now();

},{"1947da28f0e557b7":"lgJ39"}],"toHOz":[function(require,module,exports) {
module.exports = require("236a2faf9728d9e2").getBundleURL("cyvfC") + "strawberries.26612a27.jpg" + "?" + Date.now();

},{"236a2faf9728d9e2":"lgJ39"}],"i84hL":[function(require,module,exports) {
module.exports = require("cc39ccbc8309ad92").getBundleURL("cyvfC") + "oranges.7e9b9936.jpg" + "?" + Date.now();

},{"cc39ccbc8309ad92":"lgJ39"}],"ecImU":[function(require,module,exports) {
module.exports = require("fad8758fbbb664fb").getBundleURL("cyvfC") + "cherries.15e50207.jpg" + "?" + Date.now();

},{"fad8758fbbb664fb":"lgJ39"}],"cP9pa":[function(require,module,exports) {
module.exports = require("26345c067a99e39a").getBundleURL("cyvfC") + "kiwi.3426a2a7.jpg" + "?" + Date.now();

},{"26345c067a99e39a":"lgJ39"}],"80SLh":[function(require,module,exports) {
module.exports = require("1142cd744dda3d00").getBundleURL("cyvfC") + "dragonfruit.20d8d98b.jpg" + "?" + Date.now();

},{"1142cd744dda3d00":"lgJ39"}],"lXW1K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "itemsInCart", ()=>itemsInCart);
var _productsJs = require("./products.js");
const cartContainer = document.querySelector(".nav__cart__itemsincart");
const addToCartItem = document.querySelectorAll(".add-to-cart");
let itemsInCart = [];
function updateCart() {
    if (itemsInCart.length > 0) {
        if (!document.querySelector(".nav__cart__itemsincart--count")) cartContainer.insertAdjacentHTML("afterbegin", `<div class="nav__cart__itemsincart--count"><span class='quantity'>${itemsInCart.length}</span></div>`);
        else {
            let howManyItems = 0;
            itemsInCart.forEach(function(item) {
                howManyItems += item.quantity;
            });
            document.querySelector(".quantity").textContent = howManyItems;
        }
    }
}
const getItem = (item)=>{
    return new Promise((resolve, reject)=>{
        let target;
        (0, _productsJs.products).forEach((product, i)=>{
            //scrolinam per visus galimus productus
            if (item.target.classList.contains(product.id)) {
                //settinam pasirinkta producta
                target = product;
                resolve(target);
            }
        });
    });
};
const addItem = async (item)=>{
    let target = await getItem(item); // nevygdom kodo toliau, kol negaunam producto id
    console.log(itemsInCart);
    if (itemsInCart.length > 0) {
        // jei krepselis nera tuscias
        for (let i of itemsInCart)if (target?.id === i?.id) {
            // ir jeigu preke jau yra krepselyje
            i.quantity += 1; // addinam prie prekes kiekio
            updateCart(); // updatinam carta
            return 0; // breakinam funkcija
        }
    }
    // jei virsuj kodas nebuvo breakintas, vadinasi prekes nebuvo carte, todel galim addinti
    // await writeToCart(target);
    itemsInCart.push({
        id: target?.id,
        quantity: 1,
        name: target?.name,
        img: target?.img,
        price: target?.price
    });
    //updatinam vel carta
    updateCart();
};
addToCartItem.forEach((item)=>{
    item.addEventListener("click", addItem);
});
//funkcija gauti bendro carto kaina
const getAllPrice = (cart)=>{
    let Allprice = 0;
    cart.forEach((item)=>{
        let productPrice = item.quantity * item.price;
        Allprice += productPrice;
    });
    return Allprice;
};
//loadinam carto itemus
const loadCartItems = (cartItems)=>{
    return new Promise((resolve, reject)=>{
        let cartHTML = "";
        cartItems.forEach((item)=>{
            cartHTML += `<div class="cart-page__container__items__item"> <img
    src="${item?.img}"
    class="cart-img"
    alt="Products"
  />
  <span class="product-name">${item?.name}(${item?.quantity})</span>
  <span class="product-price">${item?.quantity * item?.price}$</span>
  
  
  </div>`;
        });
        let allProductPrice = getAllPrice(cartItems);
        console.log(allProductPrice);
        cartHTML += `<div class="cart-page__container__items__item">
    <span class="product-name">Price: </span>
    <span class="product-price product-price--all">${allProductPrice}$</span>

    </div>`;
        resolve(cartHTML);
    });
};
//rodom carto itemus
const showItemsInCart = async (cartItems)=>{
    const cartContainer = document.querySelector(".cart-page__container__items");
    cartContainer.innerHTML = "";
    console.log(cartItems);
    if (cartItems.length > 0) {
        let cartHTML = await loadCartItems(cartItems);
        cartContainer.insertAdjacentHTML("afterbegin", cartHTML);
    } else cartContainer.insertAdjacentHTML("afterbegin", "<span class='text-align-center'>Your cart is empty.</span>");
};
document.querySelector(".nav__icon--cart").addEventListener("click", ()=>{
    document.querySelector(".cart-page").classList.toggle("cart-page--off");
    showItemsInCart(itemsInCart);
});

},{"./products.js":"kwj5V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["e5K8J","amwXi"], "amwXi", "parcelRequirec9a9")

//# sourceMappingURL=index.09ebd823.js.map
