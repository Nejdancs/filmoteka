!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired76b;null==o&&((o=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},n.parcelRequired76b=o),o.register("iE7OH",(function(e,n){var r,i;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var o={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},i=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),o.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var i={};function o(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=i[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return o(t[2])}return"/"}(),i[t]=e),e}})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.a3b960b2.js","ee16w":"sprite.b12e0b11.svg"}'));var a={};function s(){var t;return t={headerRef:{},homeRef:{},libraryRef:{},paginationRef:{container:document.querySelector(".pagination"),items:document.querySelectorAll(".pagination__item"),paginationList:document.querySelector(".pagination__list"),pages:document.querySelectorAll(".js-page"),link:document.querySelectorAll(".pagitation__link"),prev:document.querySelector(".prev-js"),next:document.querySelector(".next-js"),first:document.querySelector(".first-js"),last:document.querySelector(".last-js"),prevMore:document.querySelector(".prevMore-js"),nextMore:document.querySelector(".nextMore-js")},modalTeamRef:{}},e(a)(t,"libraryRef",{}),e(a)(t,"galleryRef",{}),e(a)(t,"filmDetailsRef",{}),e(a)(t,"footerRef",{}),t}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t};var c;function l(t){for(var n="",r=t>9?"":"is-hidden",i=1;i<=t&&!(window.matchMedia("(max-width: 767px)").matches&&t>9&&6===i)&&!(t>9&&10===i);i+=1)n+='<li class="pagination__item js-page" data-num=\''.concat(i,'\'><a class="pagination__link" href="#">').concat(i,"</a></li>");return'\n  <ul class="pagination__list">\n      <li class="button prev-js pagination__item"><svg class="button__icon" width="16" height ="16">\n          <use href="'.concat(e(c),'#arrow-right"></use>\n        </svg></li>\n      <li class="pagination__item first-js is-hidden hidden"><a class="pagination__link" href="#">1</a></li>\n      <li class="pagination__item prevMore-js is-hidden hidden"><a class="pagination__link" href="#">...</a></li>\n      ').concat(n,'\n      <li class="pagination__item ').concat(r,' nextMore-js hidden"><a class="pagination__link" href="#">...</a></li>\n      <li class="pagination__item ').concat(r,' last-js hidden"><a class="pagination__link" href="#">').concat(t,'</a></li>\n      <li class="button next-js pagination__item"><svg class="button__icon" width="16" height="16">\n          <use href="').concat(e(c),'#arrow-left"></use>\n        </svg></li>\n\n    </ul>')}c=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("ee16w");var u=s().paginationRef;function d(t){var e=l(t);u.container.innerHTML=e}var f={};function h(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,i)}Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){h(o,r,i,a,s,"next",t)}function s(t){h(o,r,i,a,s,"throw",t)}a(void 0)}))}};var p={},v=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(t,e,n){var r=d;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return R()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=u(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function g(){}function m(){}function y(){}var w={};c(w,o,(function(){return this}));var L=Object.getPrototypeOf,_=L&&L(L(M([])));_&&_!==n&&r.call(_,o)&&(w=_);var b=y.prototype=g.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(i,o,a,s){var c=u(t[i],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function M(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:R}}function R(){return{value:e,done:!0}}return m.prototype=y,c(b,"constructor",y),c(y,"constructor",m),m.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(E.prototype),c(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new E(l(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),c(b,s,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=M,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(p);try{regeneratorRuntime=v}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=v:Function("r","regeneratorRuntime = r")(v)}var g;var m,y=1;function w(t){t.preventDefault(),t.target.classList.contains("pagination__item")&&(t.target.classList.contains("js-page")&&(y=Number(t.target.dataset.num)),t.target.classList.contains("prev-js")&&y>1&&(y-=1),t.target.classList.contains("next-js")&&y<m&&(y+=1),t.target.classList.contains("first-js")&&(y=1,b()),t.target.classList.contains("last-js")&&(y=m,b()),t.target.classList.contains("prevMore-js")&&(y=+g.pages[1].dataset.num,b()),t.target.classList.contains("nextMore-js")&&(y=+g.pages[g.pages.length-2].dataset.num,b()),L(),_(),x())}function L(){g.items.forEach((function(t){t.classList.remove("active"),+t.dataset.num===y&&t.classList.add("active")}))}function _(){var t;window.matchMedia("(min-width: 768px)").matches?m>9&&(y<=5?(g.first.classList.add("is-hidden"),g.prevMore.classList.add("is-hidden"),g.pages[0].classList.remove("is-hidden"),g.pages[1].classList.remove("is-hidden")):(g.first.classList.remove("is-hidden"),g.prevMore.classList.remove("is-hidden"),g.pages[0].classList.add("is-hidden"),g.pages[1].classList.add("is-hidden")),t=g.pages.length-1,y>=m-4?(g.last.classList.add("is-hidden"),g.nextMore.classList.add("is-hidden"),g.pages[t-1].classList.remove("is-hidden"),g.pages[t].classList.remove("is-hidden")):(g.last.classList.remove("is-hidden"),g.nextMore.classList.remove("is-hidden"),g.pages[t-1].classList.add("is-hidden"),g.pages[t].classList.add("is-hidden")),y>=4&&y<=m-2&&b(),L()):(y>=2&&y<=m-1&&b(),L())}function b(){var t=y-4;y<=1?t=y:y<=3?t=y-2:y<=4&&(t=y-3),y>=m?t=y-8:y>=m-2?t=y-6:y>=m-3&&(t=y-5),window.matchMedia("(max-width: 768px)").matches&&(t=y-2,y<=2&&(t=y-1),y<=1&&(t=y),y>=m-1&&(t=y-3));for(var e=t,n=0;n<g.pages.length;e+=1,n+=1)g.pages[n].firstElementChild.textContent=e,g.pages[n].dataset.num=e}function x(){y<=1?g.prev.classList.add("disabled"):g.prev.classList.remove("disabled"),y>=m?g.next.classList.add("disabled"):g.next.classList.remove("disabled")}!function(t){if(m=t,t<=1)return;d(t),g=s().paginationRef,L(),_(),x(),g.paginationList.addEventListener("click",w)}(20);var E=document.querySelector(".team-modal"),j=document.querySelector(".tm-close-btn");document.querySelector(".footer-link").addEventListener("click",(function(t){function e(t){"Escape"===t.key&&(E.classList.add("is-hidden"),window.removeEventListener("keydown",e),window.removeEventListener("click",n),j.removeEventListener("click",r))}function n(t){t.target===E&&(E.classList.add("is-hidden"),window.removeEventListener("click",n),window.removeEventListener("keydown",e),j.removeEventListener("click",r))}function r(t){E.classList.add("is-hidden"),window.removeEventListener("click",n),window.removeEventListener("keydown",e),j.removeEventListener("click",r)}t.preventDefault(),E.classList.remove("is-hidden"),window.addEventListener("keydown",e),window.addEventListener("click",n),j.addEventListener("click",r)}))}();
//# sourceMappingURL=index.a3b960b2.js.map