!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=()=>{const e=document.getElementsByClassName("hat-swatch__grid");if(e.length>0)for(let n=0;n<e.length;n++){const i=e[n].querySelectorAll(".hat-swatch__btn-list");for(let e=0;e<i.length;e++){const r=i[e],o=r.querySelectorAll(".hat-swatch__swatch"),s=o.length;if(r.style.gridTemplateColumns=s<4?`repeat(${s}, 20%)`:"repeat(4, 20%)",o.length>1)for(let i=0;i<o.length;i++){o[i].addEventListener("click",i=>t(i,n,e))}}}function t(t,n,i){const r=t.target.dataset.productImage;e[n].querySelectorAll(".hat-swatch")[i].querySelector(".hat-swatch__product-image").src=r}};var r=()=>{const e=document.getElementById("main-header-nav"),t=document.getElementById("mobile-nav-button"),n=document.getElementById("desktop-search-input"),i=document.getElementsByClassName("header__hidden-nav"),r=document.getElementsByClassName("header__dropdown-btn"),o=document.body,s=e.classList,a=t.classList;document.addEventListener("click",e=>function(e){const t=n.parentElement;t.contains(e.target)?t.classList.add("active"):t.classList.remove("active")}(e));for(let e=0;e<r.length;e++){r[e].addEventListener("click",t=>u(t,e))}t.addEventListener("click",e=>(o.classList.toggle("hide-overflow"),s.toggle("active"),void a.toggle("active"))),window.addEventListener("resize",e=>{l.matches&&(o.classList.remove("hide-overflow"),s.remove("active"),a.remove("active"))});let l=window.matchMedia("(min-width: 992px)");function u(e,t){e.preventDefault;const n=r[t].classList,o=i[t].classList;if(l.matches&&!n.contains("header__dropdown-btn-with-border"))for(let e=0;e<r.length;e++){const n=r[e],o=i[e];e!==t&&(n.classList.remove("active"),o.classList.remove("active"))}n.toggle("active"),o.toggle("active")}},o={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};
/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */function s(e){console.error("[Glide warn]: "+e)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};function h(e){return parseInt(e)}function v(e){return"string"==typeof e}function m(e){var t=void 0===e?"undefined":a(e);return"function"===t||"object"===t&&!!e}function p(e){return"function"==typeof e}function g(e){return void 0===e}function y(e){return e.constructor===Array}function b(e,t,n){var i={};for(var r in t)p(t[r])?i[r]=t[r](e,i,n):s("Extension must be a function");for(var o in i)p(i[o].mount)&&i[o].mount();return i}function w(e,t,n){Object.defineProperty(e,t,n)}function _(e,t){var n=c({},e,t);return t.hasOwnProperty("classes")&&(n.classes=c({},e.classes,t.classes),t.classes.hasOwnProperty("direction")&&(n.classes.direction=c({},e.classes.direction,t.classes.direction))),t.hasOwnProperty("breakpoints")&&(n.breakpoints=c({},e.breakpoints,t.breakpoints)),n}var k=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(this,e),this.events=t,this.hop=t.hasOwnProperty}return u(e,[{key:"on",value:function(e,t){if(y(e))for(var n=0;n<e.length;n++)this.on(e[n],t);this.hop.call(this.events,e)||(this.events[e]=[]);var i=this.events[e].push(t)-1;return{remove:function(){delete this.events[e][i]}}}},{key:"emit",value:function(e,t){if(y(e))for(var n=0;n<e.length;n++)this.emit(e[n],t);this.hop.call(this.events,e)&&this.events[e].forEach((function(e){e(t||{})}))}}]),e}(),S=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l(this,e),this._c={},this._t=[],this._e=new k,this.disabled=!1,this.selector=t,this.settings=_(o,n),this.index=this.settings.startAt}return u(e,[{key:"mount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),m(e)?this._c=b(this,e,this._e):s("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return y(e)?this._t=e:s("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=_(this.settings,e),e.hasOwnProperty("startAt")&&(this.index=e.startAt),this._e.emit("update"),this}},{key:"go",value:function(e){return this._c.Run.make(e),this}},{key:"move",value:function(e){return this._c.Transition.disable(),this._c.Move.make(e),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e&&(this.settings.autoplay=e),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(e,t){return this._e.on(e,t),this}},{key:"isType",value:function(e){return this.settings.type===e}},{key:"settings",get:function(){return this._o},set:function(e){m(e)?this._o=e:s("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(e){this._i=h(e)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(e){this._d=!!e}}]),e}();function L(){return(new Date).getTime()}function x(e,t,n){var i=void 0,r=void 0,o=void 0,s=void 0,a=0;n||(n={});var l=function(){a=!1===n.leading?0:L(),i=null,s=e.apply(r,o),i||(r=o=null)},u=function(){var u=L();a||!1!==n.leading||(a=u);var c=t-(u-a);return r=this,o=arguments,c<=0||c>t?(i&&(clearTimeout(i),i=null),a=u,s=e.apply(r,o),i||(r=o=null)):i||!1===n.trailing||(i=setTimeout(l,c)),s};return u.cancel=function(){clearTimeout(i),a=0,i=r=o=null},u}var T={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function E(e){if(e&&e.parentNode){for(var t=e.parentNode.firstChild,n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}return[]}function O(e){return!!(e&&e instanceof window.HTMLElement)}var H=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l(this,e),this.listeners=t}return u(e,[{key:"on",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];v(e)&&(e=[e]);for(var r=0;r<e.length;r++)this.listeners[e[r]]=n,t.addEventListener(e[r],this.listeners[e[r]],i)}},{key:"off",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];v(e)&&(e=[e]);for(var i=0;i<e.length;i++)t.removeEventListener(e[i],this.listeners[e[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),e}();var C=["ltr","rtl"],M={">":"<","<":">","=":"="};function A(e,t){return{modify:function(e){return t.Direction.is("rtl")?-e:e}}}function j(e,t){return{modify:function(n){return n+t.Gaps.value*e.index}}}function P(e,t){return{modify:function(e){return e+t.Clones.grow/2}}}function B(e,t){return{modify:function(n){if(e.settings.focusAt>=0){var i=t.Peek.value;return m(i)?n-i.before:n-i}return n}}}function z(e,t){return{modify:function(n){var i=t.Gaps.value,r=t.Sizes.width,o=e.settings.focusAt,s=t.Sizes.slideWidth;return"center"===o?n-(r/2-s/2):n-s*o-i*o}}}var D=!1;try{var N=Object.defineProperty({},"passive",{get:function(){D=!0}});window.addEventListener("testPassive",null,N),window.removeEventListener("testPassive",null,N)}catch(e){}var R=D,q=["touchstart","mousedown"],I=["touchmove","mousemove"],W=["touchend","touchcancel","mouseup","mouseleave"],V=["mousedown","mousemove","mouseup","mouseleave"];function G(e,t,n){var i=new H,r=0,o=0,s=0,a=!1,l=!!R&&{passive:!0},u={mount:function(){this.bindSwipeStart()},start:function(t){if(!a&&!e.disabled){this.disable();var i=this.touches(t);r=null,o=h(i.pageX),s=h(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!e.disabled){var a=e.settings,l=a.touchAngle,u=a.touchRatio,c=a.classes,d=this.touches(i),f=h(d.pageX)-o,v=h(d.pageY)-s,m=Math.abs(f<<2),p=Math.abs(v<<2),g=Math.sqrt(m+p),y=Math.sqrt(p);if(!(180*(r=Math.asin(y/g))/Math.PI<l))return!1;i.stopPropagation(),t.Move.make(f*parseFloat(u)),t.Html.root.classList.add(c.dragging),n.emit("swipe.move")}},end:function(i){if(!e.disabled){var s=e.settings,a=this.touches(i),l=this.threshold(i),u=a.pageX-o,c=180*r/Math.PI,d=Math.round(u/t.Sizes.slideWidth);this.enable(),u>l&&c<s.touchAngle?(s.perTouch&&(d=Math.min(d,h(s.perTouch))),t.Direction.is("rtl")&&(d=-d),t.Run.make(t.Direction.resolve("<"+d))):u<-l&&c<s.touchAngle?(s.perTouch&&(d=Math.max(d,-h(s.perTouch))),t.Direction.is("rtl")&&(d=-d),t.Run.make(t.Direction.resolve(">"+d))):t.Move.make(),t.Html.root.classList.remove(s.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,r=e.settings;r.swipeThreshold&&i.on(q[0],t.Html.wrapper,(function(e){n.start(e)}),l),r.dragThreshold&&i.on(q[1],t.Html.wrapper,(function(e){n.start(e)}),l)},unbindSwipeStart:function(){i.off(q[0],t.Html.wrapper,l),i.off(q[1],t.Html.wrapper,l)},bindSwipeMove:function(){var n=this;i.on(I,t.Html.wrapper,x((function(e){n.move(e)}),e.settings.throttle),l)},unbindSwipeMove:function(){i.off(I,t.Html.wrapper,l)},bindSwipeEnd:function(){var e=this;i.on(W,t.Html.wrapper,(function(t){e.end(t)}))},unbindSwipeEnd:function(){i.off(W,t.Html.wrapper)},touches:function(e){return V.indexOf(e.type)>-1?e:e.touches[0]||e.changedTouches[0]},threshold:function(t){var n=e.settings;return V.indexOf(t.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,t.Transition.enable(),this},disable:function(){return a=!0,t.Transition.disable(),this}};return n.on("build.after",(function(){t.Html.root.classList.add(e.settings.classes.swipeable)})),n.on("destroy",(function(){u.unbindSwipeStart(),u.unbindSwipeMove(),u.unbindSwipeEnd(),i.destroy()})),u}function F(e,t,n){var i=new H,r=!!R&&{passive:!0},o={mount:function(){this._n=t.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=t.Html.root.querySelectorAll('[data-glide-el^="controls"]'),this.addBindings()},setActive:function(){for(var e=0;e<this._n.length;e++)this.addClass(this._n[e].children)},removeActive:function(){for(var e=0;e<this._n.length;e++)this.removeClass(this._n[e].children)},addClass:function(t){var n=e.settings,i=t[e.index];i&&(i.classList.add(n.classes.activeNav),E(i).forEach((function(e){e.classList.remove(n.classes.activeNav)})))},removeClass:function(t){var n=t[e.index];n&&n.classList.remove(e.settings.classes.activeNav)},addBindings:function(){for(var e=0;e<this._c.length;e++)this.bind(this._c[e].children)},removeBindings:function(){for(var e=0;e<this._c.length;e++)this.unbind(this._c[e].children)},bind:function(e){for(var t=0;t<e.length;t++)i.on("click",e[t],this.click),i.on("touchstart",e[t],this.click,r)},unbind:function(e){for(var t=0;t<e.length;t++)i.off(["click","touchstart"],e[t])},click:function(e){e.preventDefault(),t.Run.make(t.Direction.resolve(e.currentTarget.getAttribute("data-glide-dir")))}};return w(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],(function(){o.setActive()})),n.on("destroy",(function(){o.removeBindings(),o.removeActive(),i.destroy()})),o}function Y(e){return m(e)?(t=e,Object.keys(t).sort().reduce((function(e,n){return e[n]=t[n],e[n],e}),{})):(s("Breakpoints option must be an object"),{});var t}function X(e,t,n){var i=new H,r=e.settings,o=Y(r.breakpoints),s=c({},r),a={match:function(e){if(void 0!==window.matchMedia)for(var t in e)if(e.hasOwnProperty(t)&&window.matchMedia("(max-width: "+t+"px)").matches)return e[t];return s}};return c(r,a.match(o)),i.on("resize",window,x((function(){e.settings=_(r,a.match(o))}),e.settings.throttle)),n.on("update",(function(){o=Y(o),s=c({},r)})),n.on("destroy",(function(){i.off("resize",window)})),a}var $={Html:function(e,t){var n={mount:function(){this.root=e.selector,this.track=this.root.querySelector('[data-glide-el="track"]'),this.slides=Array.prototype.slice.call(this.wrapper.children).filter((function(t){return!t.classList.contains(e.settings.classes.cloneSlide)}))}};return w(n,"root",{get:function(){return n._r},set:function(e){v(e)&&(e=document.querySelector(e)),O(e)?n._r=e:s("Root element must be a existing Html node")}}),w(n,"track",{get:function(){return n._t},set:function(e){O(e)?n._t=e:s('Could not find track element. Please use [data-glide-el="track"] attribute.')}}),w(n,"wrapper",{get:function(){return n.track.children[0]}}),n},Translate:function(e,t,n){var i={set:function(n){var i=function(e,t,n){var i=[j,P,B,z].concat(e._t,[A]);return{mutate:function(r){for(var o=0;o<i.length;o++){var a=i[o];p(a)&&p(a().modify)?r=a(e,t,n).modify(r):s("Transformer should be a function that returns an object with `modify()` method")}return r}}}(e,t).mutate(n);t.Html.wrapper.style.transform="translate3d("+-1*i+"px, 0px, 0px)"},remove:function(){t.Html.wrapper.style.transform=""}};return n.on("move",(function(r){var o=t.Gaps.value,s=t.Sizes.length,a=t.Sizes.slideWidth;return e.isType("carousel")&&t.Run.isOffset("<")?(t.Transition.after((function(){n.emit("translate.jump"),i.set(a*(s-1))})),i.set(-a-o*s)):e.isType("carousel")&&t.Run.isOffset(">")?(t.Transition.after((function(){n.emit("translate.jump"),i.set(0)})),i.set(a*s+o*s)):i.set(r.movement)})),n.on("destroy",(function(){i.remove()})),i},Transition:function(e,t,n){var i=!1,r={compose:function(t){var n=e.settings;return i?t+" 0ms "+n.animationTimingFunc:t+" "+this.duration+"ms "+n.animationTimingFunc},set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";t.Html.wrapper.style.transition=this.compose(e)},remove:function(){t.Html.wrapper.style.transition=""},after:function(e){setTimeout((function(){e()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return w(r,"duration",{get:function(){var n=e.settings;return e.isType("slider")&&t.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){r.set()})),n.on(["build.before","resize","translate.jump"],(function(){r.disable()})),n.on("run",(function(){r.enable()})),n.on("destroy",(function(){r.remove()})),r},Direction:function(e,t,n){var i={mount:function(){this.value=e.settings.direction},resolve:function(e){var t=e.slice(0,1);return this.is("rtl")?e.split(t).join(M[t]):e},is:function(e){return this.value===e},addClass:function(){t.Html.root.classList.add(e.settings.classes.direction[this.value])},removeClass:function(){t.Html.root.classList.remove(e.settings.classes.direction[this.value])}};return w(i,"value",{get:function(){return i._v},set:function(e){C.indexOf(e)>-1?i._v=e:s("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){i.removeClass()})),n.on("update",(function(){i.mount()})),n.on(["build.before","update"],(function(){i.addClass()})),i},Peek:function(e,t,n){var i={mount:function(){this.value=e.settings.peek}};return w(i,"value",{get:function(){return i._v},set:function(e){m(e)?(e.before=h(e.before),e.after=h(e.after)):e=h(e),i._v=e}}),w(i,"reductor",{get:function(){var t=i.value,n=e.settings.perView;return m(t)?t.before/n+t.after/n:2*t/n}}),n.on(["resize","update"],(function(){i.mount()})),i},Sizes:function(e,t,n){var i={setupSlides:function(){for(var e=this.slideWidth+"px",n=t.Html.slides,i=0;i<n.length;i++)n[i].style.width=e},setupWrapper:function(e){t.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var e=t.Html.slides,n=0;n<e.length;n++)e[n].style.width="";t.Html.wrapper.style.width=""}};return w(i,"length",{get:function(){return t.Html.slides.length}}),w(i,"width",{get:function(){return t.Html.root.offsetWidth}}),w(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+t.Gaps.grow+t.Clones.grow}}),w(i,"slideWidth",{get:function(){return i.width/e.settings.perView-t.Peek.reductor-t.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i},Gaps:function(e,t,n){var i={apply:function(e){for(var n=0,i=e.length;n<i;n++){var r=e[n].style,o=t.Direction.value;r[T[o][0]]=0!==n?this.value/2+"px":"",n!==e.length-1?r[T[o][1]]=this.value/2+"px":r[T[o][1]]=""}},remove:function(e){for(var t=0,n=e.length;t<n;t++){var i=e[t].style;i.marginLeft="",i.marginRight=""}}};return w(i,"value",{get:function(){return h(e.settings.gap)}}),w(i,"grow",{get:function(){return i.value*(t.Sizes.length-1)}}),w(i,"reductor",{get:function(){var t=e.settings.perView;return i.value*(t-1)/t}}),n.on(["build.after","update"],x((function(){i.apply(t.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(t.Html.wrapper.children)})),i},Move:function(e,t,n){var i={mount:function(){this._o=0},make:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),t.Transition.after((function(){n.emit("move.after",{movement:e.value})}))}};return w(i,"offset",{get:function(){return i._o},set:function(e){i._o=g(e)?0:h(e)}}),w(i,"translate",{get:function(){return t.Sizes.slideWidth*e.index}}),w(i,"value",{get:function(){var e=this.offset,n=this.translate;return t.Direction.is("rtl")?n+e:n-e}}),n.on(["build.before","run"],(function(){i.make()})),i},Clones:function(e,t,n){var i={mount:function(){this.items=[],e.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=t.Html.slides,r=e.settings,o=r.perView,s=r.classes,a=+!!e.settings.peek,l=o+a,u=i.slice(0,l),c=i.slice(-l),d=0;d<Math.max(1,Math.floor(o/i.length));d++){for(var f=0;f<u.length;f++){var h=u[f].cloneNode(!0);h.classList.add(s.cloneSlide),n.push(h)}for(var v=0;v<c.length;v++){var m=c[v].cloneNode(!0);m.classList.add(s.cloneSlide),n.unshift(m)}}return n},append:function(){for(var e=this.items,n=t.Html,i=n.wrapper,r=n.slides,o=Math.floor(e.length/2),s=e.slice(0,o).reverse(),a=e.slice(o,e.length),l=t.Sizes.slideWidth+"px",u=0;u<a.length;u++)i.appendChild(a[u]);for(var c=0;c<s.length;c++)i.insertBefore(s[c],r[0]);for(var d=0;d<e.length;d++)e[d].style.width=l},remove:function(){for(var e=this.items,n=0;n<e.length;n++)t.Html.wrapper.removeChild(e[n])}};return w(i,"grow",{get:function(){return(t.Sizes.slideWidth+t.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){e.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i},Resize:function(e,t,n){var i=new H,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,x((function(){n.emit("resize")}),e.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Build:function(e,t,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){t.Html.root.classList.add(e.settings.classes[e.settings.type])},activeClass:function(){var n=e.settings.classes,i=t.Html.slides[e.index];i&&(i.classList.add(n.activeSlide),E(i).forEach((function(e){e.classList.remove(n.activeSlide)})))},removeClasses:function(){var n=e.settings.classes;t.Html.root.classList.remove(n[e.settings.type]),t.Html.slides.forEach((function(e){e.classList.remove(n.activeSlide)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i},Run:function(e,t,n){var i={mount:function(){this._o=!1},make:function(i){var r=this;e.disabled||(e.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),t.Transition.after((function(){r.isStart()&&n.emit("run.start",r.move),r.isEnd()&&n.emit("run.end",r.move),(r.isOffset("<")||r.isOffset(">"))&&(r._o=!1,n.emit("run.offset",r.move)),n.emit("run.after",r.move),e.enable()})))},calculate:function(){var t=this.move,n=this.length,i=t.steps,r=t.direction,o="number"==typeof h(i)&&0!==h(i);switch(r){case">":">"===i?e.index=n:this.isEnd()?e.isType("slider")&&!e.settings.rewind||(this._o=!0,e.index=0):o?e.index+=Math.min(n-e.index,-h(i)):e.index++;break;case"<":"<"===i?e.index=0:this.isStart()?e.isType("slider")&&!e.settings.rewind||(this._o=!0,e.index=n):o?e.index-=Math.min(e.index,h(i)):e.index--;break;case"=":e.index=i;break;default:s("Invalid direction pattern ["+r+i+"] has been used")}},isStart:function(){return 0===e.index},isEnd:function(){return e.index===this.length},isOffset:function(e){return this._o&&this.move.direction===e}};return w(i,"move",{get:function(){return this._m},set:function(e){var t=e.substr(1);this._m={direction:e.substr(0,1),steps:t?h(t)?h(t):t:0}}}),w(i,"length",{get:function(){var n=e.settings,i=t.Html.slides.length;return e.isType("slider")&&"center"!==n.focusAt&&n.bound?i-1-(h(n.perView)-1)+h(n.focusAt):i-1}}),w(i,"offset",{get:function(){return this._o}}),i}},U=function(e){function t(){return l(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"mount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"mount",this).call(this,c({},$,e))}}]),t}(S);var J=()=>{let e=document.getElementsByClassName("homepage-slider");if(e.length>0){e=e[0];let t=e.getElementsByClassName("image-container")[0],n=(document.querySelectorAll(".homepage-slider .glide__slide:not(.glide__slide--clone)").length,new Image);n.onload=()=>{e.classList.remove("loading")};let i=new U(".homepage-slider",{type:"carousel",startAt:0,gap:0,perView:1,animationDuration:600});i.on(["run","mount.after"],()=>{e.classList.add("transition");let t=document.getElementsByClassName("glide__slide-"+i.index)[0];var r;window.matchMedia("(max-width: 767px")?n.src=t.dataset.mobileImage:n.src=t.dataset.image,(r=n).complete&&0!==r.naturalHeight||e.classList.add("loading")}),i.on("move.after",r=>{t.style.backgroundImage=`url('${n.src}')`,e.classList.remove("transition"),function(){const e=document.getElementsByClassName("homepage-slider__indicator-button"),t=document.getElementsByClassName("homepage-slider__progress-bar")[0],n=i.index,r=e.length;let o=(n+1)/r*100;t.style.width=o+"%"}()}),i.mount({Controls:F,Breakpoints:X})}};var K=()=>{if(document.getElementsByClassName("instagram-glide").length>0){new U(".instagram-glide",{type:"carousel",startAt:0,perView:4,gap:20,breakpoints:{768:{perView:1,peek:{before:50,after:50}},992:{perView:2},1140:{perView:3,autoplay:3e3}}}).mount({Controls:F,Breakpoints:X,Swipe:G})}};var Q=()=>{const e=document.getElementById("product-filter-section");if(null!==e){const r=document.getElementById("product-filter-button"),o=document.getElementById("product-filter-container"),s=document.getElementById("close-product-filter"),a=e.querySelectorAll(".dropdown-button"),l=e.querySelectorAll(".product-filter__hidden-list"),u=e.querySelectorAll(".product-filter__checkbox"),c="https://vintagestateapparel.com/collections/all/";let d="",f=[];!function(){let e=window.location.href;const t=new URLSearchParams(window.location.search).get("page");let n=[];if(e.includes("collections/all")){let i=e.split("/").pop();"all"!==i&&(i=i.replace("?page="+t,""),n=i.split("+"))}else if(e.includes("/collections/")){let t=e.split("/").pop();switch(t){case"original":t="iconic";break;case"hats-and-headwear":t="headwear";break;case"bottles":t="drinkware"}n=t.split("+")}null!==t&&(d="?page=1");for(let e=0;e<n.length;e++){const t=n[e];f=[...f,t]}}(),function(e){for(let t=0;t<u.length;t++){const n=u[t];for(let t=0;t<e.length;t++){const i=e[t];n.value===i&&(n.checked=!0)}}}(f),n();for(let e=0;e<u.length;e++){u[e].addEventListener("click",e=>t(e))}for(let e=0;e<a.length;e++){a[e].addEventListener("click",t=>i(e))}r.addEventListener("click",e=>(document.body.classList.add("hide-overflow"),o.classList.add("active"),void window.scrollTo(0,0))),s.addEventListener("click",e=>(document.body.classList.remove("hide-overflow"),void o.classList.remove("active"))),window.addEventListener("resize",e=>{h.matches&&(document.body.classList.remove("hide-overflow"),o.classList.remove("active"))});let h=window.matchMedia("(min-width: 992px)");function t(e){const t=e.target,i=t.value,r=t.checked,o=t.dataset.filterType,s=document.querySelectorAll(`[data-filter-type='${o}']`);for(let e=0;e<s.length;e++){const t=s[e];t.checked=!1;const n=f.indexOf(t.value);n>-1&&f.splice(n,1)}r&&(t.checked=!0,f.push(i));let a=f.join("+");window.location.href=c+a+d,n()}function n(){const e=document.getElementsByClassName("product-filter__selected-items"),t=["headwear","drinkware"];let n,i;for(let r=0;r<u.length;r++){const o=u[r];o.checked&&(n=o.value,n=n.split("-").join(" "),i=o.dataset.filterType);for(let e=0;e<t.length;e++){t[e]===n&&(a[1].disabled=!0)}for(let t=0;t<e.length;t++){const r=e[t];r.dataset.filterType===i&&(r.innerHTML=n)}}}function i(e){const t=a[e].classList,n=l[e].classList;if(h.matches)for(let t=0;t<a.length;t++){const n=a[t],i=l[t];t!==e&&(n.classList.remove("active"),i.classList.remove("active"))}n.toggle("active"),t.toggle("active")}}};i(),r(),J(),K(),Q()}]);
//# sourceMappingURL=bundle.js.map