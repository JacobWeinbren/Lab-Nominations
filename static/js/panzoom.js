// svg-pan-zoom v3.6.1
// https://github.com/ariutta/svg-pan-zoom
! function s(r, a, l) {
    function u(e, t) {
        if (!a[e]) {
            if (!r[e]) { var o = "function" == typeof require && require; if (!t && o) return o(e, !0); if (h) return h(e, !0); var n = new Error("Cannot find module '" + e + "'"); throw n.code = "MODULE_NOT_FOUND", n }
            var i = a[e] = { exports: {} };
            r[e][0].call(i.exports, function(t) { return u(r[e][1][t] || t) }, i, i.exports, s, r, a, l)
        }
        return a[e].exports
    }
    for (var h = "function" == typeof require && require, t = 0; t < l.length; t++) u(l[t]);
    return u
}({
    1: [function(t, e, o) {
        var s = t("./svg-utilities");
        e.exports = {
            enable: function(t) {
                var e = t.svg.querySelector("defs");
                if (e || (e = document.createElementNS(s.svgNS, "defs"), t.svg.appendChild(e)), !e.querySelector("style#svg-pan-zoom-controls-styles")) {
                    var o = document.createElementNS(s.svgNS, "style");
                    o.setAttribute("id", "svg-pan-zoom-controls-styles"), o.setAttribute("type", "text/css"), o.textContent = ".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }", e.appendChild(o)
                }
                var n = document.createElementNS(s.svgNS, "g");
                n.setAttribute("id", "svg-pan-zoom-controls"), n.setAttribute("transform", "translate(" + (t.width - 70) + " " + (t.height - 76) + ") scale(0.75)"), n.setAttribute("class", "svg-pan-zoom-control"), n.appendChild(this._createZoomIn(t)), n.appendChild(this._createZoomReset(t)), n.appendChild(this._createZoomOut(t)), t.svg.appendChild(n), t.controlIcons = n
            },
            _createZoomIn: function(t) {
                var e = document.createElementNS(s.svgNS, "g");
                e.setAttribute("id", "svg-pan-zoom-zoom-in"), e.setAttribute("transform", "translate(30.5 5) scale(0.015)"), e.setAttribute("class", "svg-pan-zoom-control"), e.addEventListener("click", function() { t.getPublicInstance().zoomIn() }, !1), e.addEventListener("touchstart", function() { t.getPublicInstance().zoomIn() }, !1);
                var o = document.createElementNS(s.svgNS, "rect");
                o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("width", "1500"), o.setAttribute("height", "1400"), o.setAttribute("class", "svg-pan-zoom-control-background"), e.appendChild(o);
                var n = document.createElementNS(s.svgNS, "path");
                return n.setAttribute("d", "M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"), n.setAttribute("class", "svg-pan-zoom-control-element"), e.appendChild(n), e
            },
            _createZoomReset: function(t) {
                var e = document.createElementNS(s.svgNS, "g");
                e.setAttribute("id", "svg-pan-zoom-reset-pan-zoom"), e.setAttribute("transform", "translate(5 35) scale(0.4)"), e.setAttribute("class", "svg-pan-zoom-control"), e.addEventListener("click", function() { t.getPublicInstance().reset() }, !1), e.addEventListener("touchstart", function() { t.getPublicInstance().reset() }, !1);
                var o = document.createElementNS(s.svgNS, "rect");
                o.setAttribute("x", "2"), o.setAttribute("y", "2"), o.setAttribute("width", "182"), o.setAttribute("height", "58"), o.setAttribute("class", "svg-pan-zoom-control-background"), e.appendChild(o);
                var n = document.createElementNS(s.svgNS, "path");
                n.setAttribute("d", "M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"), n.setAttribute("class", "svg-pan-zoom-control-element"), e.appendChild(n);
                var i = document.createElementNS(s.svgNS, "path");
                return i.setAttribute("d", "M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"), i.setAttribute("class", "svg-pan-zoom-control-element"), e.appendChild(i), e
            },
            _createZoomOut: function(t) {
                var e = document.createElementNS(s.svgNS, "g");
                e.setAttribute("id", "svg-pan-zoom-zoom-out"), e.setAttribute("transform", "translate(30.5 70) scale(0.015)"), e.setAttribute("class", "svg-pan-zoom-control"), e.addEventListener("click", function() { t.getPublicInstance().zoomOut() }, !1), e.addEventListener("touchstart", function() { t.getPublicInstance().zoomOut() }, !1);
                var o = document.createElementNS(s.svgNS, "rect");
                o.setAttribute("x", "0"), o.setAttribute("y", "0"), o.setAttribute("width", "1500"), o.setAttribute("height", "1400"), o.setAttribute("class", "svg-pan-zoom-control-background"), e.appendChild(o);
                var n = document.createElementNS(s.svgNS, "path");
                return n.setAttribute("d", "M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"), n.setAttribute("class", "svg-pan-zoom-control-element"), e.appendChild(n), e
            },
            disable: function(t) { t.controlIcons && (t.controlIcons.parentNode.removeChild(t.controlIcons), t.controlIcons = null) }
        }
    }, { "./svg-utilities": 5 }],
    2: [function(t, e, o) {
        function n(t, e) { this.init(t, e) }
        var i = t("./svg-utilities"),
            r = t("./utilities");
        n.prototype.init = function(t, e) {
            this.viewport = t, this.options = e, this.originalState = { zoom: 1, x: 0, y: 0 }, this.activeState = { zoom: 1, x: 0, y: 0 }, this.updateCTMCached = r.proxy(this.updateCTM, this), this.requestAnimationFrame = r.createRequestAnimationFrame(this.options.refreshRate), this.viewBox = { x: 0, y: 0, width: 0, height: 0 }, this.cacheViewBox();
            var o = this.processCTM();
            this.setCTM(o), this.updateCTM()
        }, n.prototype.cacheViewBox = function() {
            var t = this.options.svg.getAttribute("viewBox");
            if (t) {
                var e = t.split(/[\s\,]/).filter(function(t) { return t }).map(parseFloat);
                this.viewBox.x = e[0], this.viewBox.y = e[1], this.viewBox.width = e[2], this.viewBox.height = e[3];
                var o = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height);
                this.activeState.zoom = o, this.activeState.x = (this.options.width - this.viewBox.width * o) / 2, this.activeState.y = (this.options.height - this.viewBox.height * o) / 2, this.updateCTMOnNextFrame(), this.options.svg.removeAttribute("viewBox")
            } else this.simpleViewBoxCache()
        }, n.prototype.simpleViewBoxCache = function() {
            var t = this.viewport.getBBox();
            this.viewBox.x = t.x, this.viewBox.y = t.y, this.viewBox.width = t.width, this.viewBox.height = t.height
        }, n.prototype.getViewBox = function() { return r.extend({}, this.viewBox) }, n.prototype.processCTM = function() {
            var t, e = this.getCTM();
            (this.options.fit || this.options.contain) && (t = this.options.fit ? Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height) : Math.max(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height), e.a = t, e.d = t, e.e = -this.viewBox.x * t, e.f = -this.viewBox.y * t);
            if (this.options.center) {
                var o = .5 * (this.options.width - (this.viewBox.width + 2 * this.viewBox.x) * e.a),
                    n = .5 * (this.options.height - (this.viewBox.height + 2 * this.viewBox.y) * e.a);
                e.e = o, e.f = n
            }
            return this.originalState.zoom = e.a, this.originalState.x = e.e, this.originalState.y = e.f, e
        }, n.prototype.getOriginalState = function() { return r.extend({}, this.originalState) }, n.prototype.getState = function() { return r.extend({}, this.activeState) }, n.prototype.getZoom = function() { return this.activeState.zoom }, n.prototype.getRelativeZoom = function() { return this.activeState.zoom / this.originalState.zoom }, n.prototype.computeRelativeZoom = function(t) { return t / this.originalState.zoom }, n.prototype.getPan = function() { return { x: this.activeState.x, y: this.activeState.y } }, n.prototype.getCTM = function() { var t = this.options.svg.createSVGMatrix(); return t.a = this.activeState.zoom, t.b = 0, t.c = 0, t.d = this.activeState.zoom, t.e = this.activeState.x, t.f = this.activeState.y, t }, n.prototype.setCTM = function(t) {
            var e = this.isZoomDifferent(t),
                o = this.isPanDifferent(t);
            if (e || o) {
                if (e && (!1 === this.options.beforeZoom(this.getRelativeZoom(), this.computeRelativeZoom(t.a)) ? (t.a = t.d = this.activeState.zoom, e = !1) : (this.updateCache(t), this.options.onZoom(this.getRelativeZoom()))), o) {
                    var n = this.options.beforePan(this.getPan(), { x: t.e, y: t.f }),
                        i = !1,
                        s = !1;
                    !1 === n ? (t.e = this.getPan().x, t.f = this.getPan().y, i = s = !0) : r.isObject(n) && (!1 === n.x ? (t.e = this.getPan().x, i = !0) : r.isNumber(n.x) && (t.e = n.x), !1 === n.y ? (t.f = this.getPan().y, s = !0) : r.isNumber(n.y) && (t.f = n.y)), i && s || !this.isPanDifferent(t) ? o = !1 : (this.updateCache(t), this.options.onPan(this.getPan()))
                }(e || o) && this.updateCTMOnNextFrame()
            }
        }, n.prototype.isZoomDifferent = function(t) { return this.activeState.zoom !== t.a }, n.prototype.isPanDifferent = function(t) { return this.activeState.x !== t.e || this.activeState.y !== t.f }, n.prototype.updateCache = function(t) { this.activeState.zoom = t.a, this.activeState.x = t.e, this.activeState.y = t.f }, n.prototype.pendingUpdate = !1, n.prototype.updateCTMOnNextFrame = function() { this.pendingUpdate || (this.pendingUpdate = !0, this.requestAnimationFrame.call(window, this.updateCTMCached)) }, n.prototype.updateCTM = function() {
            var t = this.getCTM();
            i.setCTM(this.viewport, t, this.defs), this.pendingUpdate = !1, this.options.onUpdatedCTM && this.options.onUpdatedCTM(t)
        }, e.exports = function(t, e) { return new n(t, e) }
    }, { "./svg-utilities": 5, "./utilities": 7 }],
    3: [function(t, e, o) {
        var n, i = t("./svg-pan-zoom.js");
        n = window, document, "function" == typeof define && define.amd ? define("svg-pan-zoom", function() { return i }) : void 0 !== e && e.exports && (e.exports = i, n.svgPanZoom = i)
    }, { "./svg-pan-zoom.js": 4 }],
    4: [function(t, e, o) {
        function i(t, e) { this.init(t, e) }
        var n = t("./uniwheel"),
            s = t("./control-icons"),
            r = t("./utilities"),
            a = t("./svg-utilities"),
            l = t("./shadow-viewport"),
            u = { viewportSelector: ".svg-pan-zoom_viewport", panEnabled: !0, controlIconsEnabled: !1, zoomEnabled: !0, dblClickZoomEnabled: !0, mouseWheelZoomEnabled: !0, preventMouseEventsDefault: !0, zoomScaleSensitivity: .1, minZoom: .5, maxZoom: 10, fit: !0, contain: !1, center: !0, refreshRate: "auto", beforeZoom: null, onZoom: null, beforePan: null, onPan: null, customEventsHandler: null, eventsListenerElement: null, onUpdatedCTM: null },
            h = { passive: !0 };
        i.prototype.init = function(t, e) {
            var o = this;
            this.svg = t, this.defs = t.querySelector("defs"), a.setupSvgAttributes(this.svg), this.options = r.extend(r.extend({}, u), e), this.state = "none";
            var n = a.getBoundingClientRectNormalized(t);
            this.width = n.width, this.height = n.height, this.viewport = l(a.getOrCreateViewport(this.svg, this.options.viewportSelector), { svg: this.svg, width: this.width, height: this.height, fit: this.options.fit, contain: this.options.contain, center: this.options.center, refreshRate: this.options.refreshRate, beforeZoom: function(t, e) { if (o.viewport && o.options.beforeZoom) return o.options.beforeZoom(t, e) }, onZoom: function(t) { if (o.viewport && o.options.onZoom) return o.options.onZoom(t) }, beforePan: function(t, e) { if (o.viewport && o.options.beforePan) return o.options.beforePan(t, e) }, onPan: function(t) { if (o.viewport && o.options.onPan) return o.options.onPan(t) }, onUpdatedCTM: function(t) { if (o.viewport && o.options.onUpdatedCTM) return o.options.onUpdatedCTM(t) } });
            var i = this.getPublicInstance();
            i.setBeforeZoom(this.options.beforeZoom), i.setOnZoom(this.options.onZoom), i.setBeforePan(this.options.beforePan), i.setOnPan(this.options.onPan), i.setOnUpdatedCTM(this.options.onUpdatedCTM), this.options.controlIconsEnabled && s.enable(this), this.lastMouseWheelEventTime = Date.now(), this.setupHandlers()
        }, i.prototype.setupHandlers = function() {
            var o = this,
                n = null;
            if (this.eventListeners = { mousedown: function(t) { var e = o.handleMouseDown(t, n); return n = t, e }, touchstart: function(t) { var e = o.handleMouseDown(t, n); return n = t, e }, mouseup: function(t) { return o.handleMouseUp(t) }, touchend: function(t) { return o.handleMouseUp(t) }, mousemove: function(t) { return o.handleMouseMove(t) }, touchmove: function(t) { return o.handleMouseMove(t) }, mouseleave: function(t) { return o.handleMouseUp(t) }, touchleave: function(t) { return o.handleMouseUp(t) }, touchcancel: function(t) { return o.handleMouseUp(t) } }, null != this.options.customEventsHandler) {
                this.options.customEventsHandler.init({ svgElement: this.svg, eventsListenerElement: this.options.eventsListenerElement, instance: this.getPublicInstance() });
                var t = this.options.customEventsHandler.haltEventListeners;
                if (t && t.length)
                    for (var e = t.length - 1; 0 <= e; e--) this.eventListeners.hasOwnProperty(t[e]) && delete this.eventListeners[t[e]]
            }
            for (var i in this.eventListeners)(this.options.eventsListenerElement || this.svg).addEventListener(i, this.eventListeners[i], !this.options.preventMouseEventsDefault && h);
            this.options.mouseWheelZoomEnabled && (this.options.mouseWheelZoomEnabled = !1, this.enableMouseWheelZoom())
        }, i.prototype.enableMouseWheelZoom = function() {
            if (!this.options.mouseWheelZoomEnabled) {
                var e = this;
                this.wheelListener = function(t) { return e.handleMouseWheel(t) };
                var t = !this.options.preventMouseEventsDefault;
                n.on(this.options.eventsListenerElement || this.svg, this.wheelListener, t), this.options.mouseWheelZoomEnabled = !0
            }
        }, i.prototype.disableMouseWheelZoom = function() {
            if (this.options.mouseWheelZoomEnabled) {
                var t = !this.options.preventMouseEventsDefault;
                n.off(this.options.eventsListenerElement || this.svg, this.wheelListener, t), this.options.mouseWheelZoomEnabled = !1
            }
        }, i.prototype.handleMouseWheel = function(t) {
            if (this.options.zoomEnabled && "none" === this.state) {
                var e = t.deltaY || 1,
                    o = Date.now() - this.lastMouseWheelEventTime,
                    n = 3 + Math.max(0, 30 - o);
                this.lastMouseWheelEventTime = Date.now(), "deltaMode" in t && 0 === t.deltaMode && t.wheelDelta && (e = 0 === t.deltaY ? 0 : Math.abs(t.wheelDelta) / t.deltaY), e = -.3 < e && e < .3 ? e : (0 < e ? 1 : -1) * Math.log(Math.abs(e) + 10) / n;
                var i = this.svg.getScreenCTM().inverse(),
                    s = a.getEventPoint(t, this.svg).matrixTransform(i),
                    r = Math.pow(1 + this.options.zoomScaleSensitivity, -1 * e);
                this.zoomAtPoint(r, s)
            }
        }, i.prototype.zoomAtPoint = function(t, e, o) {
            var n = this.viewport.getOriginalState();
            o ? (t = Math.max(this.options.minZoom * n.zoom, Math.min(this.options.maxZoom * n.zoom, t)), t /= this.getZoom()) : this.getZoom() * t < this.options.minZoom * n.zoom ? t = this.options.minZoom * n.zoom / this.getZoom() : this.getZoom() * t > this.options.maxZoom * n.zoom && (t = this.options.maxZoom * n.zoom / this.getZoom());
            var i = this.viewport.getCTM(),
                s = e.matrixTransform(i.inverse()),
                r = this.svg.createSVGMatrix().translate(s.x, s.y).scale(t).translate(-s.x, -s.y),
                a = i.multiply(r);
            a.a !== i.a && this.viewport.setCTM(a)
        }, i.prototype.zoom = function(t, e) { this.zoomAtPoint(t, a.getSvgCenterPoint(this.svg, this.width, this.height), e) }, i.prototype.publicZoom = function(t, e) { e && (t = this.computeFromRelativeZoom(t)), this.zoom(t, e) }, i.prototype.publicZoomAtPoint = function(t, e, o) {
            if (o && (t = this.computeFromRelativeZoom(t)), "SVGPoint" !== r.getType(e)) {
                if (!("x" in e && "y" in e)) throw new Error("Given point is invalid");
                e = a.createSVGPoint(this.svg, e.x, e.y)
            }
            this.zoomAtPoint(t, e, o)
        }, i.prototype.getZoom = function() { return this.viewport.getZoom() }, i.prototype.getRelativeZoom = function() { return this.viewport.getRelativeZoom() }, i.prototype.computeFromRelativeZoom = function(t) { return t * this.viewport.getOriginalState().zoom }, i.prototype.resetZoom = function() {
            var t = this.viewport.getOriginalState();
            this.zoom(t.zoom, !0)
        }, i.prototype.resetPan = function() { this.pan(this.viewport.getOriginalState()) }, i.prototype.reset = function() { this.resetZoom(), this.resetPan() }, i.prototype.handleDblClick = function(t) {
            var e;
            if ((this.options.preventMouseEventsDefault && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), this.options.controlIconsEnabled) && -1 < (t.target.getAttribute("class") || "").indexOf("svg-pan-zoom-control")) return !1;
            e = t.shiftKey ? 1 / (2 * (1 + this.options.zoomScaleSensitivity)) : 2 * (1 + this.options.zoomScaleSensitivity);
            var o = a.getEventPoint(t, this.svg).matrixTransform(this.svg.getScreenCTM().inverse());
            this.zoomAtPoint(e, o)
        }, i.prototype.handleMouseDown = function(t, e) { this.options.preventMouseEventsDefault && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), r.mouseAndTouchNormalize(t, this.svg), this.options.dblClickZoomEnabled && r.isDblClick(t, e) ? this.handleDblClick(t) : (this.state = "pan", this.firstEventCTM = this.viewport.getCTM(), this.stateOrigin = a.getEventPoint(t, this.svg).matrixTransform(this.firstEventCTM.inverse())) }, i.prototype.handleMouseMove = function(t) {
            if (this.options.preventMouseEventsDefault && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), "pan" === this.state && this.options.panEnabled) {
                var e = a.getEventPoint(t, this.svg).matrixTransform(this.firstEventCTM.inverse()),
                    o = this.firstEventCTM.translate(e.x - this.stateOrigin.x, e.y - this.stateOrigin.y);
                this.viewport.setCTM(o)
            }
        }, i.prototype.handleMouseUp = function(t) { this.options.preventMouseEventsDefault && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), "pan" === this.state && (this.state = "none") }, i.prototype.fit = function() {
            var t = this.viewport.getViewBox(),
                e = Math.min(this.width / t.width, this.height / t.height);
            this.zoom(e, !0)
        }, i.prototype.contain = function() {
            var t = this.viewport.getViewBox(),
                e = Math.max(this.width / t.width, this.height / t.height);
            this.zoom(e, !0)
        }, i.prototype.center = function() {
            var t = this.viewport.getViewBox(),
                e = .5 * (this.width - (t.width + 2 * t.x) * this.getZoom()),
                o = .5 * (this.height - (t.height + 2 * t.y) * this.getZoom());
            this.getPublicInstance().pan({ x: e, y: o })
        }, i.prototype.updateBBox = function() { this.viewport.simpleViewBoxCache() }, i.prototype.pan = function(t) {
            var e = this.viewport.getCTM();
            e.e = t.x, e.f = t.y, this.viewport.setCTM(e)
        }, i.prototype.panBy = function(t) {
            var e = this.viewport.getCTM();
            e.e += t.x, e.f += t.y, this.viewport.setCTM(e)
        }, i.prototype.getPan = function() { var t = this.viewport.getState(); return { x: t.x, y: t.y } }, i.prototype.resize = function() {
            var t = a.getBoundingClientRectNormalized(this.svg);
            this.width = t.width, this.height = t.height;
            var e = this.viewport;
            e.options.width = this.width, e.options.height = this.height, e.processCTM(), this.options.controlIconsEnabled && (this.getPublicInstance().disableControlIcons(), this.getPublicInstance().enableControlIcons())
        }, i.prototype.destroy = function() {
            var e = this;
            for (var t in this.beforeZoom = null, this.onZoom = null, this.beforePan = null, this.onPan = null, (this.onUpdatedCTM = null) != this.options.customEventsHandler && this.options.customEventsHandler.destroy({ svgElement: this.svg, eventsListenerElement: this.options.eventsListenerElement, instance: this.getPublicInstance() }), this.eventListeners)(this.options.eventsListenerElement || this.svg).removeEventListener(t, this.eventListeners[t], !this.options.preventMouseEventsDefault && h);
            this.disableMouseWheelZoom(), this.getPublicInstance().disableControlIcons(), this.reset(), c = c.filter(function(t) { return t.svg !== e.svg }), delete this.options, delete this.viewport, delete this.publicInstance, delete this.pi, this.getPublicInstance = function() { return null }
        }, i.prototype.getPublicInstance = function() { var o = this; return this.publicInstance || (this.publicInstance = this.pi = { enablePan: function() { return o.options.panEnabled = !0, o.pi }, disablePan: function() { return o.options.panEnabled = !1, o.pi }, isPanEnabled: function() { return !!o.options.panEnabled }, pan: function(t) { return o.pan(t), o.pi }, panBy: function(t) { return o.panBy(t), o.pi }, getPan: function() { return o.getPan() }, setBeforePan: function(t) { return o.options.beforePan = null === t ? null : r.proxy(t, o.publicInstance), o.pi }, setOnPan: function(t) { return o.options.onPan = null === t ? null : r.proxy(t, o.publicInstance), o.pi }, enableZoom: function() { return o.options.zoomEnabled = !0, o.pi }, disableZoom: function() { return o.options.zoomEnabled = !1, o.pi }, isZoomEnabled: function() { return !!o.options.zoomEnabled }, enableControlIcons: function() { return o.options.controlIconsEnabled || (o.options.controlIconsEnabled = !0, s.enable(o)), o.pi }, disableControlIcons: function() { return o.options.controlIconsEnabled && (o.options.controlIconsEnabled = !1, s.disable(o)), o.pi }, isControlIconsEnabled: function() { return !!o.options.controlIconsEnabled }, enableDblClickZoom: function() { return o.options.dblClickZoomEnabled = !0, o.pi }, disableDblClickZoom: function() { return o.options.dblClickZoomEnabled = !1, o.pi }, isDblClickZoomEnabled: function() { return !!o.options.dblClickZoomEnabled }, enableMouseWheelZoom: function() { return o.enableMouseWheelZoom(), o.pi }, disableMouseWheelZoom: function() { return o.disableMouseWheelZoom(), o.pi }, isMouseWheelZoomEnabled: function() { return !!o.options.mouseWheelZoomEnabled }, setZoomScaleSensitivity: function(t) { return o.options.zoomScaleSensitivity = t, o.pi }, setMinZoom: function(t) { return o.options.minZoom = t, o.pi }, setMaxZoom: function(t) { return o.options.maxZoom = t, o.pi }, setBeforeZoom: function(t) { return o.options.beforeZoom = null === t ? null : r.proxy(t, o.publicInstance), o.pi }, setOnZoom: function(t) { return o.options.onZoom = null === t ? null : r.proxy(t, o.publicInstance), o.pi }, zoom: function(t) { return o.publicZoom(t, !0), o.pi }, zoomBy: function(t) { return o.publicZoom(t, !1), o.pi }, zoomAtPoint: function(t, e) { return o.publicZoomAtPoint(t, e, !0), o.pi }, zoomAtPointBy: function(t, e) { return o.publicZoomAtPoint(t, e, !1), o.pi }, zoomIn: function() { return this.zoomBy(1 + o.options.zoomScaleSensitivity), o.pi }, zoomOut: function() { return this.zoomBy(1 / (1 + o.options.zoomScaleSensitivity)), o.pi }, getZoom: function() { return o.getRelativeZoom() }, setOnUpdatedCTM: function(t) { return o.options.onUpdatedCTM = null === t ? null : r.proxy(t, o.publicInstance), o.pi }, resetZoom: function() { return o.resetZoom(), o.pi }, resetPan: function() { return o.resetPan(), o.pi }, reset: function() { return o.reset(), o.pi }, fit: function() { return o.fit(), o.pi }, contain: function() { return o.contain(), o.pi }, center: function() { return o.center(), o.pi }, updateBBox: function() { return o.updateBBox(), o.pi }, resize: function() { return o.resize(), o.pi }, getSizes: function() { return { width: o.width, height: o.height, realZoom: o.getZoom(), viewBox: o.viewport.getViewBox() } }, destroy: function() { return o.destroy(), o.pi } }), this.publicInstance };
        var c = [];
        e.exports = function(t, e) {
            var o = r.getSvg(t);
            if (null === o) return null;
            for (var n = c.length - 1; 0 <= n; n--)
                if (c[n].svg === o) return c[n].instance.getPublicInstance();
            return c.push({ svg: o, instance: new i(o, e) }), c[c.length - 1].instance.getPublicInstance()
        }
    }, { "./control-icons": 1, "./shadow-viewport": 2, "./svg-utilities": 5, "./uniwheel": 6, "./utilities": 7 }],
    5: [function(t, e, o) {
        var l = t("./utilities"),
            s = "unknown";
        document.documentMode && (s = "ie"), e.exports = {
            svgNS: "http://www.w3.org/2000/svg",
            xmlNS: "http://www.w3.org/XML/1998/namespace",
            xmlnsNS: "http://www.w3.org/2000/xmlns/",
            xlinkNS: "http://www.w3.org/1999/xlink",
            evNS: "http://www.w3.org/2001/xml-events",
            getBoundingClientRectNormalized: function(t) { if (t.clientWidth && t.clientHeight) return { width: t.clientWidth, height: t.clientHeight }; if (t.getBoundingClientRect()) return t.getBoundingClientRect(); throw new Error("Cannot get BoundingClientRect for SVG.") },
            getOrCreateViewport: function(t, e) {
                var o = null;
                if (!(o = l.isElement(e) ? e : t.querySelector(e))) {
                    var n = Array.prototype.slice.call(t.childNodes || t.children).filter(function(t) { return "defs" !== t.nodeName && "#text" !== t.nodeName });
                    1 === n.length && "g" === n[0].nodeName && null === n[0].getAttribute("transform") && (o = n[0])
                }
                if (!o) {
                    var i = "viewport-" + (new Date).toISOString().replace(/\D/g, "");
                    (o = document.createElementNS(this.svgNS, "g")).setAttribute("id", i);
                    var s = t.childNodes || t.children;
                    if (s && 0 < s.length)
                        for (var r = s.length; 0 < r; r--) "defs" !== s[s.length - r].nodeName && o.appendChild(s[s.length - r]);
                    t.appendChild(o)
                }
                var a = [];
                return o.getAttribute("class") && (a = o.getAttribute("class").split(" ")), ~a.indexOf("svg-pan-zoom_viewport") || (a.push("svg-pan-zoom_viewport"), o.setAttribute("class", a.join(" "))), o
            },
            setupSvgAttributes: function(t) { if (t.setAttribute("xmlns", this.svgNS), t.setAttributeNS(this.xmlnsNS, "xmlns:xlink", this.xlinkNS), t.setAttributeNS(this.xmlnsNS, "xmlns:ev", this.evNS), null !== t.parentNode) { var e = t.getAttribute("style") || ""; - 1 === e.toLowerCase().indexOf("overflow") && t.setAttribute("style", "overflow: hidden; " + e) } },
            internetExplorerRedisplayInterval: 300,
            refreshDefsGlobal: l.throttle(function() {
                for (var t = document.querySelectorAll("defs"), e = t.length, o = 0; o < e; o++) {
                    var n = t[o];
                    n.parentNode.insertBefore(n, n)
                }
            }, this ? this.internetExplorerRedisplayInterval : null),
            setCTM: function(t, e, o) {
                var n = this,
                    i = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")";
                t.setAttributeNS(null, "transform", i), "transform" in t.style ? t.style.transform = i : "-ms-transform" in t.style ? t.style["-ms-transform"] = i : "-webkit-transform" in t.style && (t.style["-webkit-transform"] = i), "ie" === s && o && (o.parentNode.insertBefore(o, o), window.setTimeout(function() { n.refreshDefsGlobal() }, n.internetExplorerRedisplayInterval))
            },
            getEventPoint: function(t, e) { var o = e.createSVGPoint(); return l.mouseAndTouchNormalize(t, e), o.x = t.clientX, o.y = t.clientY, o },
            getSvgCenterPoint: function(t, e, o) { return this.createSVGPoint(t, e / 2, o / 2) },
            createSVGPoint: function(t, e, o) { var n = t.createSVGPoint(); return n.x = e, n.y = o, n }
        }
    }, { "./utilities": 7 }],
    6: [function(t, e, o) {
        function n(t, e, o, n) {
            var i;
            i = "wheel" === a ? o : function(t, o) {
                function e(t) { var e = { originalEvent: t = t || window.event, target: t.target || t.srcElement, type: "wheel", deltaMode: "MozMousePixelScroll" == t.type ? 0 : 1, deltaX: 0, delatZ: 0, preventDefault: function() { t.preventDefault ? t.preventDefault() : t.returnValue = !1 } }; return "mousewheel" == a ? (e.deltaY = -.025 * t.wheelDelta, t.wheelDeltaX && (e.deltaX = -.025 * t.wheelDeltaX)) : e.deltaY = t.detail, o(e) }
                return u.push({ element: t, fn: e }), e
            }(t, o), t[s](l + e, i, !!n && h)
        }

        function i(t, e, o, n) {
            var i;
            i = "wheel" === a ? o : function(t) {
                    for (var e = 0; e < u.length; e++)
                        if (u[e].element === t) return u[e].fn;
                    return function() {}
                }(t), t[r](l + e, i, !!n && h),
                function(t) {
                    for (var e = 0; e < u.length; e++)
                        if (u[e].element === t) return u.splice(e, 1)
                }(t)
        }
        var s, r, a, l, u, h;
        e.exports = (u = [], h = { passive: !(l = "") }, window.addEventListener ? (s = "addEventListener", r = "removeEventListener") : (s = "attachEvent", r = "detachEvent", l = "on"), a = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll", { on: function(t, e, o) { n(t, a, e, o), "DOMMouseScroll" == a && n(t, "MozMousePixelScroll", e, o) }, off: function(t, e, o) { i(t, a, e, o), "DOMMouseScroll" == a && i(t, "MozMousePixelScroll", e, o) } })
    }, {}],
    7: [function(t, e, o) {
        function n(e) { return function(t) { window.setTimeout(t, e) } } e.exports = {
            extend: function(t, e) { for (var o in t = t || {}, e) this.isObject(e[o]) ? t[o] = this.extend(t[o], e[o]) : t[o] = e[o]; return t },
            isElement: function(t) { return t instanceof HTMLElement || t instanceof SVGElement || t instanceof SVGSVGElement || t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName },
            isObject: function(t) { return "[object Object]" === Object.prototype.toString.call(t) },
            isNumber: function(t) { return !isNaN(parseFloat(t)) && isFinite(t) },
            getSvg: function(t) {
                var e, o;
                if (this.isElement(t)) e = t;
                else { if (!("string" == typeof t || t instanceof String)) throw new Error("Provided selector is not an HTML object nor String"); if (!(e = document.querySelector(t))) throw new Error("Provided selector did not find any elements. Selector: " + t) }
                if ("svg" === e.tagName.toLowerCase()) o = e;
                else if ("object" === e.tagName.toLowerCase()) o = e.contentDocument.documentElement;
                else {
                    if ("embed" !== e.tagName.toLowerCase()) throw "img" === e.tagName.toLowerCase() ? new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.') : new Error("Cannot get SVG.");
                    o = e.getSVGDocument().documentElement
                }
                return o
            },
            proxy: function(t, e) { return function() { return t.apply(e, arguments) } },
            getType: function(t) { return Object.prototype.toString.apply(t).replace(/^\[object\s/, "").replace(/\]$/, "") },
            mouseAndTouchNormalize: function(t, e) {
                if (void 0 === t.clientX || null === t.clientX)
                    if (t.clientX = 0, void(t.clientY = 0) !== t.touches && t.touches.length) {
                        if (void 0 !== t.touches[0].clientX) t.clientX = t.touches[0].clientX, t.clientY = t.touches[0].clientY;
                        else if (void 0 !== t.touches[0].pageX) {
                            var o = e.getBoundingClientRect();
                            t.clientX = t.touches[0].pageX - o.left, t.clientY = t.touches[0].pageY - o.top
                        }
                    } else void 0 !== t.originalEvent && void 0 !== t.originalEvent.clientX && (t.clientX = t.originalEvent.clientX, t.clientY = t.originalEvent.clientY)
            },
            isDblClick: function(t, e) {
                if (2 === t.detail) return !0;
                if (null == e) return !1;
                var o = t.timeStamp - e.timeStamp,
                    n = Math.sqrt(Math.pow(t.clientX - e.clientX, 2) + Math.pow(t.clientY - e.clientY, 2));
                return o < 250 && n < 10
            },
            now: Date.now || function() { return (new Date).getTime() },
            throttle: function(o, n, i) {
                var s, r, a, l = this,
                    u = null,
                    h = 0;
                i = i || {};

                function c() { h = !1 === i.leading ? 0 : l.now(), u = null, a = o.apply(s, r), u || (s = r = null) }
                return function() {
                    var t = l.now();
                    h || !1 !== i.leading || (h = t);
                    var e = n - (t - h);
                    return s = this, r = arguments, e <= 0 || n < e ? (clearTimeout(u), u = null, h = t, a = o.apply(s, r), u || (s = r = null)) : u || !1 === i.trailing || (u = setTimeout(c, e)), a
                }
            },
            createRequestAnimationFrame: function(t) { var e = null; return "auto" !== t && t < 60 && 1 < t && (e = Math.floor(1e3 / t)), null === e ? window.requestAnimationFrame || n(33) : n(e) }
        }
    }, {}]
}, {}, [3]);