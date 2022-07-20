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
})({"aiMfF":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d00c71a58b3c27a1";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
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
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
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
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
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
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
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
        console.log("[parcel] \u2728 Error resolved");
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
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
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
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
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

},{}],"dPB9w":[function(require,module,exports) {
var _gameController = require("./game-controller");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const againBtn = document.getElementById("again");
const closeModalBtn = document.getElementById("close");
if (playBtn && pauseBtn && againBtn && closeModalBtn) {
    const game = new (0, _gameController.GameController)(playBtn, pauseBtn, againBtn);
    playBtn.addEventListener("click", game.play.bind(game));
    pauseBtn.addEventListener("click", game.pause.bind(game));
    againBtn.addEventListener("click", game.again.bind(game));
    closeModalBtn.addEventListener("click", game.closeModal.bind(game));
}

},{"./game-controller":"djexz"}],"djexz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameController", ()=>GameController);
var _config = require("./config");
var _index = require("./view/index");
var _modal = require("./view/modal");
class GameController {
    view = new (0, _index.GameView)();
    states = {
        isStarted: false,
        isPlayed: false,
        isModalOpen: false,
        timeLimit: (0, _config.Config).timeLimit,
        timer: undefined
    };
    constructor(playBtn, pauseBtn, againBtn){
        this.playBtn = playBtn;
        this.pauseBtn = pauseBtn;
        this.againBtn = againBtn;
    }
    init() {
        this.states = {
            isStarted: false,
            isPlayed: false,
            isModalOpen: false,
            timeLimit: (0, _config.Config).timeLimit,
            timer: undefined
        };
        this.view.clear();
        (0, _config.Config).sounds.initBgm();
    }
    play() {
        if (!this.states.isStarted) {
            this.view.render(this.states.timeLimit);
            this.states.isStarted = true;
        }
        this.states.isPlayed = true;
        (0, _config.Config).sounds.playBgm();
        this.playBtn.classList.remove("on");
        this.pauseBtn.classList.add("on");
        this.startTimer();
    }
    startTimer() {
        const countDown = ()=>{
            if (this.view.mission.htmlList.length === (0, _config.Config).mission) {
                this.stopTimer();
                this.finish("win");
                return;
            }
            if (this.states.timeLimit === 0) {
                this.stopTimer();
                this.finish("lose");
                return;
            }
            this.states.timeLimit--;
            this.view.timeLimit.update(this.states.timeLimit);
        };
        this.states.timer = setInterval(countDown, 1000);
    }
    stopTimer() {
        clearInterval(this.states.timer);
    }
    pause(result) {
        this.states.isPlayed = false;
        (0, _config.Config).sounds.pauseBgm();
        this.stopTimer();
        this.playBtn.classList.add("on");
        this.pauseBtn.classList.remove("on");
        this.states.isModalOpen = true;
        (0, _modal.handleModal)(this.states.isModalOpen, result);
    }
    finish(result) {
        this.pause(result);
        switch(result){
            case "win":
                (0, _config.Config).sounds.playWin();
                break;
            case "lose":
                (0, _config.Config).sounds.playLose();
                break;
        }
        this.init();
    }
    again() {
        this.init();
        (0, _modal.handleModal)(this.states.isModalOpen);
        this.play();
    }
    closeModal() {
        this.states.isModalOpen = false;
        (0, _modal.handleModal)(this.states.isModalOpen);
    }
}

},{"./config":"2S9PZ","./view/index":"a7pWh","./view/modal":"lt8wF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2S9PZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Config", ()=>Config);
const ASSETS_BASE_URL = "./assets/";
const Config = {
    timeLimit: 8,
    mission: 10,
    items: {
        carrot: {
            imgPath: `${ASSETS_BASE_URL}img/carrot.png`
        },
        bug: {
            imgPath: `${ASSETS_BASE_URL}img/bug.png`
        }
    },
    sounds: {
        bgm: new Audio(`${ASSETS_BASE_URL}sound/bgm.mp3`),
        playBgm () {
            this.bgm.play();
        },
        pauseBgm () {
            this.bgm.pause();
        },
        initBgm () {
            this.bgm.currentTime = 0;
            this.bgm.pause();
        },
        playCarrot () {
            new Audio(`${ASSETS_BASE_URL}sound/carrot_pull.mp3`).play();
        },
        playBug () {
            new Audio(`${ASSETS_BASE_URL}sound/bug_pull.mp3`).play();
        },
        playWin () {
            new Audio(`${ASSETS_BASE_URL}sound/game_win.mp3`).play();
        },
        playLose () {
            new Audio(`${ASSETS_BASE_URL}sound/game_lose.mp3`).play();
        }
    }
};

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

},{}],"a7pWh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameView", ()=>GameView);
var _timeLimit = require("./timeLimit");
var _mission = require("./mission");
var _gameArea = require("./gameArea");
class GameView {
    timeLimit = new (0, _timeLimit.TimeLimit)();
    mission = new (0, _mission.Mission)();
    gameArea = new (0, _gameArea.GameArea)();
    clear() {
        this.timeLimit.clear();
        this.mission.clear();
        this.gameArea.clear();
    }
    render(time) {
        this.timeLimit.render(time);
        this.mission.render();
        this.gameArea.render(this.mission);
    }
}

},{"./timeLimit":"1v1np","./mission":"5LSNk","./gameArea":"ba5j5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1v1np":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimeLimit", ()=>TimeLimit);
var _utils = require("../utils");
class TimeLimit {
    constructor(){
        const timeLimitEl = document.getElementById("time-limit");
        if (!timeLimitEl) throw "\uCD5C\uC0C1\uC704 \uC694\uC18C\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
        this.timeLimitContainer = timeLimitEl;
    }
    update(time) {
        this.timeLimitContainer.innerHTML = `00:${(0, _utils.convertToTwoDigitNumberFormat)(String(time))}`;
    }
    render(time) {
        this.timeLimitContainer.innerHTML = `00:${(0, _utils.convertToTwoDigitNumberFormat)(String(time))}`;
    }
    clear() {
        this.timeLimitContainer.innerHTML = "00:00";
    }
}

},{"../utils":"gmdam","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gmdam":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "randomPosition", ()=>randomPosition);
parcelHelpers.export(exports, "convertToTwoDigitNumberFormat", ()=>convertToTwoDigitNumberFormat);
function randomPosition(maxWidth, maxHeight) {
    const CARROT_SIZE = 80;
    const randomWidth = Math.random() * (maxWidth - CARROT_SIZE);
    const randomHeight = Math.random() * (maxHeight - CARROT_SIZE);
    return {
        left: randomWidth,
        top: randomHeight
    };
}
function convertToTwoDigitNumberFormat(num) {
    return num.padStart(2, "0");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5LSNk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Mission", ()=>Mission);
class Mission {
    static update() {
        throw new Error("Method not implemented.");
    }
    htmlList = [];
    constructor(){
        const missionEl = document.getElementById("mission");
        if (!missionEl) throw "\uCD5C\uC0C1\uC704 \uC694\uC18C\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
        this.missionContainer = missionEl;
    }
    update() {
        this.htmlList.push(`🥕`);
        this.render();
    }
    render() {
        this.missionContainer.innerHTML = this.htmlList.join("");
    }
    clear() {
        this.htmlList = [];
        this.render();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ba5j5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameArea", ()=>GameArea);
var _config = require("../config");
var _utils = require("../utils");
class GameArea {
    htmlList = [];
    constructor(){
        const gameAreaEl = document.getElementById("game-area");
        if (!gameAreaEl) throw "\uCD5C\uC0C1\uC704 \uC694\uC18C\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.";
        this.gameAreaContainer = gameAreaEl;
    }
    update(target) {
        const targetId = target.getAttribute("id");
        this.htmlList = this.htmlList.filter((htmlEl)=>{
            htmlEl.includes(`id='${targetId}'`);
        });
        target.remove();
    }
    preRender() {
        const addHtml = ()=>{
            for(let i = 1; i <= (0, _config.Config).mission * 2; i++)if (i <= (0, _config.Config).mission) this.htmlList.push(`<img src=${(0, _config.Config).items.carrot.imgPath} id='${i}' alt='carrot'>`);
            else this.htmlList.push(`<img src=${(0, _config.Config).items.bug.imgPath} id='${i}' alt='bug'>`);
        };
        addHtml();
        this.gameAreaContainer.innerHTML = this.htmlList.join("");
    }
    render(_mission) {
        this.preRender();
        const setPosition = (element)=>{
            const randomPos = (0, _utils.randomPosition)(this.gameAreaContainer.clientWidth, this.gameAreaContainer.clientHeight);
            element.setAttribute("style", `transform: translate(${Math.floor(randomPos.left)}px, ${Math.floor(randomPos.top)}px)`);
        };
        const setEvent = (element)=>{
            const handlePullBug = ()=>{
                (0, _config.Config).sounds.playBug();
            };
            const handlePullCarrot = (event)=>{
                (0, _config.Config).sounds.playCarrot();
                _mission.update();
                this.update(event.target);
            };
            if (element.getAttribute("alt") === "bug") element.addEventListener("click", handlePullBug);
            if (element.getAttribute("alt") === "carrot") element.addEventListener("click", handlePullCarrot);
        };
        const imgEls = this.gameAreaContainer.querySelectorAll("img");
        imgEls.forEach((imgEl)=>{
            setEvent(imgEl);
            setPosition(imgEl);
        });
    }
    clear() {
        this.htmlList = [];
        this.gameAreaContainer.innerHTML = "";
    }
}

},{"../config":"2S9PZ","../utils":"gmdam","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lt8wF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleModal", ()=>handleModal);
const backdropRoot = document.getElementById("backdrop-root");
const modalRoot = document.getElementById("modal-root");
const modalTextEl = document.querySelector(".message");
function handleModal(isModalOpen, result) {
    if (modalTextEl) switch(result){
        case "win":
            modalTextEl.innerHTML = "You Win \uD83E\uDD73";
            break;
        case "lose":
            modalTextEl.innerHTML = "You Lose \uD83D\uDE2D";
            break;
        default:
            modalTextEl.innerHTML = "\uB2E4\uC2DC \uC2DC\uC791\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?";
            break;
    }
    if (isModalOpen) {
        backdropRoot?.classList.add("on");
        modalRoot?.classList.add("on"); //
    } else {
        backdropRoot?.classList.remove("on");
        modalRoot?.classList.remove("on");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aiMfF","dPB9w"], "dPB9w", "parcelRequirebede")

//# sourceMappingURL=index.8b3c27a1.js.map
