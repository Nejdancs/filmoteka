!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequired76b;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequired76b=i),i.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),a[e]=t),t}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=i("8NIkP"))&&n.__esModule?n:{default:n}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.910e8fc3.js","ee16w":"sprite.b12e0b11.svg"}'));var o={};function s(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){s(i,r,a,o,c,"next",e)}function c(e){s(i,r,a,o,c,"throw",e)}o(void 0)}))}};var c={},l=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),o=new R(r||[]);return i._invoke=function(e,t,n){var r=d;return function(a,i){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw i;return M()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var s=j(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(e,n,o),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function y(){}var _={};c(_,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(k([])));L&&L!==n&&r.call(L,i)&&(_=L);var w=y.prototype=m.prototype=Object.create(_);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(a,i,o,s){var c=u(e[a],e,i);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(d).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var a;this._invoke=function(e,r){function i(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(i,i):i()}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=u(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function k(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:M}}function M(){return{value:t,done:!0}}return g.prototype=y,c(w,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},x(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new E(l(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(w),c(w,s,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return s.type="throw",s.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:k(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(c);try{regeneratorRuntime=l}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=l:Function("r","regeneratorRuntime = r")(l)}var u={API_KEY:"06cf6ee022a0922eb5200ae030143d7b",API_BASE_URL:"https://api.themoviedb.org/3/",TRENDING_PATH_PARAMS:"trending/all/day",SEARCH_PATH_PARAMS:"search/movie",DETAILS_PATH_PARAMS:"movie/",IMAGE_BASE_URL:"https://image.tmdb.org/t/p/w1280",GENRES_PATH_PARAMS:"genre/movie/list"},d=u.API_KEY,f=u.API_BASE_URL,h=u.GENRES_PATH_PARAMS;function p(){return(p=t(o)(t(c).mark((function e(){var n,r,a,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL(f+h)).searchParams.set("api_key",d),e.prev=2,e.next=5,fetch(n);case 5:if((r=e.sent).ok){e.next=11;break}return e.next=9,r.json();case 9:throw a=e.sent,new Error(a.status_message);case 11:return e.next=13,r.json();case 13:return i=e.sent,e.abrupt("return",i);case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}var v={};function m(e){var t=[];return e.genre_ids.forEach((function(e){v[e]&&t.push(v[e])})),0===t.length&&t.push("N/A"),t.length>3&&(t.splice(3),t[2]="Other"),t.map((function(e){return"".concat(e)})).join(", ")}(function(){return p.apply(this,arguments)})().then((function(e){e.genres.forEach((function(e){v[e.id]=e.name}))}));var g=u.API_KEY,y=u.API_BASE_URL,_=u.TRENDING_PATH_PARAMS;function b(){return L.apply(this,arguments)}function L(){return L=t(o)(t(c).mark((function e(){var n,r,a,i,o,s=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:1,(r=new URL(y+_)).searchParams.set("api_key",g),r.searchParams.set("page",n),e.prev=4,e.next=7,fetch(r);case 7:if((a=e.sent).ok){e.next=13;break}return e.next=11,a.json();case 11:throw i=e.sent,new Error(i.status_message);case 13:return e.next=15,a.json();case 15:return o=e.sent,e.abrupt("return",o);case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[4,19]])}))),L.apply(this,arguments)}function w(){return{headerRef:{header:document.querySelector(".header"),navLogo:document.querySelector(".navigation__logo"),searchForm:document.querySelector(".js-search-form"),headLibBackGr:document.querySelector(".header--library"),searchInput:document.querySelector(".js-form-input")},searchRef:{},libraryButtonsRef:{btnContainer:document.querySelector(".js-btn-container"),btnWatched:document.querySelector(".js-btn-watched"),btnQueue:document.querySelector(".js-btn-queue")},paginationRef:{container:document.querySelector(".pag-container-js"),paginationList:document.querySelector(".pag-list-js"),pages:document.querySelectorAll(".js-page"),prev:document.querySelector(".prev-js"),next:document.querySelector(".next-js"),first:document.querySelector(".first-js"),last:document.querySelector(".last-js"),prevMore:document.querySelector(".prevMore-js"),nextMore:document.querySelector(".nextMore-js")},modalTeamRef:{teamModal:document.querySelector(".team-modal"),teamModalBtn:document.querySelector(".tm-close-btn"),teamModalOpen:document.querySelector(".footer-link")},libraryRef:{libBtn:document.querySelector(".js-library"),homeBtn:document.querySelector(".js-home")},galleryRef:{moviesDiv:document.querySelector("#movies-gallery")},filmDetailsRef:{filmDetailsModalOpen:document.querySelector("li"),filmDetailsModal:document.querySelector(".modal"),image:document.querySelector(".js-image"),title:document.querySelector(".js-title"),voteAverage:document.querySelector(".js-vote"),voteCount:document.querySelector(".js-vote-count"),popularity:document.querySelector(".js-popularity"),originTitle:document.querySelector(".js-title-orig"),genres:document.querySelector(".js-genres"),about:document.querySelector(".js-about"),btnWatched:document.querySelector(".js-btn-modal-watched"),btnQueue:document.querySelector(".js-btn-modal-queue")},footerRef:{},loaderRef:{loader:document.querySelector(".js-loader")}}}function x(){w().loaderRef.loader.classList.add("is-hidden")}function E(){w().loaderRef.loader.classList.remove("is-hidden")}var j=u.IMAGE_BASE_URL;function S(e,t,n){var r=e.name||e.original_title;return'<li class="gallery-card" data-id ="'.concat(e.id,'">\n<a class="gallery-card__item">\n            <img src="').concat(j+e.poster_path,'" alt="').concat(e.original_title,'"  class="gallery-card__image" >\n<p class="gallery-card__name">').concat(r,'</p>\n<p class="gallery-card__genre">').concat(t," | ").concat(n,'<span class="gallery-card__span"></span></p>\n</a>        \n\t    </li>')}var A=w().galleryRef.moviesDiv;function R(e){var t=e.results.map((function(e){return function(e){var t,n=m(e);t=e.release_date?Number.parseInt(e.release_date):Number.parseInt(e.first_air_date);return S(e,n,t)}(e)})).join("");A.innerHTML='<ul class="gallery-container">'.concat(t,"</ul>")}var k={KEY_WATCHED:"added-watched",KEY_QUEUE:"added-queue"},M=u.API_KEY,q=u.API_BASE_URL,P=u.DETAILS_PATH_PARAMS;function O(e){return T.apply(this,arguments)}function T(){return(T=t(o)(t(c).mark((function e(n){var r,a,i,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL(q+P+n)).searchParams.set("api_key",M),e.prev=2,e.next=5,fetch(r);case 5:if((a=e.sent).ok){e.next=11;break}return e.next=9,a.json();case 9:throw i=e.sent,new Error(i.status_message);case 11:return e.next=13,a.json();case 13:return o=e.sent,e.abrupt("return",o);case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}var I=w().libraryButtonsRef.btnWatched,C=w().libraryButtonsRef.btnQueue,N=document.querySelector(".pagination"),B=document.createElement("div");function D(e){return'\n        <article class="movie-card" id="'.concat(e.id,'">\n        <div class="thumb">\n        <img class="movie-card__img" src="https://image.tmdb.org/t/p/w1280/').concat(e.poster_path,'" width="300" sizes="100%" alt="').concat(e.title,'"/>\n        </div>\n        <div class="movie-card__description">\n            <p class="movie-card__name">').concat(e.title,'</p>\n            <p class="movie-card__info">Genres | ').concat(Number.parseInt(e.release_date),"</p>\n        </div>\n        </article>")}function H(){I.addEventListener("click",U),C.addEventListener("click",G),U(),I.classList.add("active")}function U(){C.classList.remove("active"),I.classList.add("active");var e=["453395","921987","667739","616037"];e&&0!==e.length?F(e):B.innerHTML="You don't have any movies you've watched. Add the first one."}function G(){C.classList.add("active"),I.classList.remove("active");var e=["453395","921987","667739","616037"];e&&0!==e.length?F(e):B.innerHTML="You don't have any movies in the queue. Add the first one."}function F(e){return Y.apply(this,arguments)}function Y(){return(Y=t(o)(t(c).mark((function e(n){var r,a,i,o,s,l,u,d,f;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],a=!0,i=!1,o=void 0,e.prev=2,s=n[Symbol.iterator]();case 4:if(a=(l=s.next()).done){e.next=17;break}return u=l.value,e.next=8,O(u);case 8:if(!(d=e.sent)){e.next=13;break}f=D(d),r.push(f),e.next=14;break;case 13:return e.abrupt("continue",14);case 14:a=!0,e.next=4;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(2),i=!0,o=e.t0;case 23:e.prev=23,e.prev=24,a||null==s.return||s.return();case 26:if(e.prev=26,!i){e.next=29;break}throw o;case 29:return e.finish(26);case 30:return e.finish(23);case 31:r=r.join(""),B.innerHTML=r;case 33:case"end":return e.stop()}}),e,null,[[2,19,23,31],[24,,26,30]])})))).apply(this,arguments)}B.style.display="flex",N.insertAdjacentElement("beforebegin",B),console.log(B);var K;function Q(e){for(var n="",r=e>9?"":"is-hidden",a=1;a<=e&&!(window.matchMedia("(max-width: 767px)").matches&&e>5&&6===a)&&!(e>9&&10===a);a+=1)n+='<li class="pagination__item js-page" data-num=\''.concat(a,'\'><a class="pagination__link" href="#">').concat(a,"</a></li>");return'\n  <ul class="pagination__list pag-list-js">\n      <li class="button prev-js pagination__item"><svg class="button__icon" width="16" height ="16">\n          <use href="'.concat(t(K),'#arrow-right"></use>\n        </svg></li>\n      <li class="pagination__item first-js is-hidden hidden"><a class="pagination__link" href="#">1</a></li>\n      <li class="pagination__item prevMore-js is-hidden hidden"><a class="pagination__link" href="#">...</a></li>\n      ').concat(n,'\n      <li class="pagination__item ').concat(r,' nextMore-js hidden"><a class="pagination__link" href="#">...</a></li>\n      <li class="pagination__item ').concat(r,' last-js hidden"><a class="pagination__link" href="#">').concat(e,'</a></li>\n      <li class="button next-js pagination__item"><svg class="button__icon" width="16" height="16">\n          <use href="').concat(t(K),'#arrow-left"></use>\n        </svg></li>\n\n    </ul>')}K=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("ee16w");var W,J=w().paginationRef;function z(e){var t=Q(e);J.container.innerHTML=t}var $,V=1;function X(e){$=e,e<=1||(z(e),W=w().paginationRef,ee(),te(),re(),W.paginationList.addEventListener("click",Z))}function Z(e){e.preventDefault(),e.target.classList.contains("pagination__item")&&(e.target.classList.contains("js-page")&&(V=Number(e.target.dataset.num)),e.target.classList.contains("prev-js")&&V>1&&(V-=1),e.target.classList.contains("next-js")&&V<$&&(V+=1),e.target.classList.contains("first-js")&&(V=1,ne()),e.target.classList.contains("last-js")&&(V=$,ne()),e.target.classList.contains("prevMore-js")&&(V=+W.pages[1].dataset.num,ne()),e.target.classList.contains("nextMore-js")&&(V=+W.pages[W.pages.length-2].dataset.num,ne()),ee(),te(),re())}function ee(){W.pages.forEach((function(e){e.classList.remove("active"),+e.dataset.num===V&&e.classList.add("active")}))}function te(){var e;window.matchMedia("(min-width: 768px)").matches?$>9&&(V<=5?(W.first.classList.add("is-hidden"),W.prevMore.classList.add("is-hidden"),W.pages[0].classList.remove("is-hidden"),W.pages[1].classList.remove("is-hidden")):(W.first.classList.remove("is-hidden"),W.prevMore.classList.remove("is-hidden"),W.pages[0].classList.add("is-hidden"),W.pages[1].classList.add("is-hidden")),e=W.pages.length-1,V>=$-4?(W.last.classList.add("is-hidden"),W.nextMore.classList.add("is-hidden"),W.pages[e-1].classList.remove("is-hidden"),W.pages[e].classList.remove("is-hidden")):(W.last.classList.remove("is-hidden"),W.nextMore.classList.remove("is-hidden"),W.pages[e-1].classList.add("is-hidden"),W.pages[e].classList.add("is-hidden")),V>=4&&V<=$&&ne()):$>5&&V>=2&&V<=$&&ne(),ee()}function ne(){var e=V-4;V<=1?e=V:V<=2?e=V-1:V<=3?e=V-2:V<=4&&(e=V-3),V>=$?e=V-8:V>=$-1?e=V-7:V>=$-2?e=V-6:V>=$-3&&(e=V-5),window.matchMedia("(max-width: 767px)").matches&&(e=V-2,V<=1?e=V:V<=2&&(e=V-1),V>=$?e=V-4:V>=$-1?e=V-3:V>=$-2&&(e=V-2));for(var t=e,n=0;n<W.pages.length;t+=1,n+=1)W.pages[n].firstElementChild.textContent=t,W.pages[n].dataset.num=t}function re(){V<=1?W.prev.classList.add("disabled"):W.prev.classList.remove("disabled"),V>=$?W.next.classList.add("disabled"):W.next.classList.remove("disabled")}function ae(){return ie.apply(this,arguments)}function ie(){return(ie=t(o)(t(c).mark((function e(){var n;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(),e.next=3,b();case 3:n=e.sent,console.log(n),R(n),X(n.total_pages),x();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){w().headerRef.searchInput.value=null,w().headerRef.header.classList.add("header--home"),w().headerRef.header.classList.remove("header--library"),w().libraryButtonsRef.btnContainer.classList.add("display-none"),w().headerRef.searchForm.classList.remove("display-none"),w().libraryRef.homeBtn.classList.add("current"),w().libraryRef.libBtn.classList.remove("current"),ae()}window.addEventListener("resize",(function(){if(!W)return;window.matchMedia("(max-width: 767px)").matches&&!W.container.classList.contains("mobile-js")?(W.container.classList.remove("desktop-js"),W.container.classList.add("mobile-js"),X($)):window.matchMedia("(min-width: 768px)").matches&&!W.container.classList.contains("desktop-js")&&(W.container.classList.remove("mobile-js"),W.container.classList.add("desktop-js"),X($))})),E(),window.addEventListener("DOMContentLoaded",ae),w().libraryRef.homeBtn.addEventListener("click",oe),w().libraryRef.libBtn.addEventListener("click",(function(){w().headerRef.header.classList.remove("header--home"),w().headerRef.header.classList.add("header--library"),w().headerRef.searchForm.classList.add("display-none"),w().libraryButtonsRef.btnContainer.classList.remove("display-none"),w().libraryRef.libBtn.classList.add("current"),w().libraryRef.homeBtn.classList.remove("current"),w().paginationRef.container.classList.add("display-none"),H()})),w().headerRef.navLogo.addEventListener("click",oe);var se=w().filmDetailsRef;function ce(){return(ce=t(o)(t(c).mark((function e(){var n,r,a,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("496450");case 2:n=e.sent,r=u.IMAGE_BASE_URL,n.poster_path||(se.image.src="../images/modal-img.jpg",se.image.alt="Movie photo"),se.image.srcset="".concat(r).concat(n.poster_path),se.image.alt=n.title,se.title.textContent=n.title,se.voteAverage.textContent=n.vote_average,se.voteCount.textContent=n.vote_count,se.popularity.textContent=Number(n.popularity.toFixed(1)),se.originTitle.textContent=n.original_title,a=n.genres.map((function(e){return e.name})),i=a.slice(0,2),a.length>2&&i.push("Others"),a=i.join(", "),se.genres.textContent=a,se.about.textContent=n.overview;case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.querySelector(".modal-btn").addEventListener("click",(function(){return ce.apply(this,arguments)}));var le;w().filmDetailsRef;(le=w().modalTeamRef).teamModalOpen.addEventListener("click",(function(e){function t(){window.removeEventListener("click",r),window.removeEventListener("keydown",n),le.teamModalBtn.removeEventListener("click",a)}function n(e){"Escape"===e.key&&(le.teamModal.classList.add("is-hidden"),t())}function r(e){e.target===le.teamModal&&(le.teamModal.classList.add("is-hidden"),t())}function a(e){le.teamModal.classList.add("is-hidden"),t()}e.preventDefault(),le.teamModal.classList.remove("is-hidden"),window.addEventListener("keydown",n),window.addEventListener("click",r),le.teamModalBtn.addEventListener("click",a)}));var ue={};Object.defineProperty(ue,"__esModule",{value:!0}),ue.default=function(e){return de.default(e)||fe.default(e)||pe.default(e)||he.default()};var de=ve(i("kMC0W")),fe=ve(i("7AJDX")),he=ve(i("8CtQK")),pe=ve(i("auk6i"));function ve(e){return e&&e.__esModule?e:{default:e}}var me,ge=k.KEY_WATCHED,ye=k.KEY_QUEUE,_e=w().filmDetailsRef.btnWatched,be=w().filmDetailsRef.btnQueue;function Le(e){var t;return null!==(t=JSON.parse(localStorage.getItem(e)))&&void 0!==t?t:[]}function we(e,t){var n=Le(e);console.log(n),n.push(t),localStorage.setItem(e,JSON.stringify(n))}function xe(e,t){var n=Le(e),r=n.indexOf(t);console.log(r),n.splice(r,1),localStorage.setItem(e,JSON.stringify(n))}function Ee(e){Le(ge).includes(e)?(_e.setAttribute("actions","added"),_e.classList.add("active"),_e.textContent="Remove from Watched"):(_e.setAttribute("actions","not-added"),_e.classList.remove("active"),_e.textContent="Add to Watched")}function je(e){Le(ye).includes(e)?(be.setAttribute("actions","added"),be.classList.add("active"),be.textContent="Remove from Queue"):(be.setAttribute("actions","not-added"),be.classList.remove("active"),be.textContent="Add to Queue")}function Se(e){var t=e.currentTarget.getAttribute("id");console.log(_e.getAttribute("actions")),"added"===_e.getAttribute("actions")?(console.log("delete"),xe(ge,t)):(we(ge,t),xe(ye,t)),Ee(t),je(t)}function Ae(e){var t=e.currentTarget.getAttribute("id");"added"===be.getAttribute("actions")?xe(ye,t):(we(ye,t),xe(ge,t)),Ee(t),je(t)}Ee(me="921987"),je(me),_e.setAttribute("id",me),_e.addEventListener("click",Se),be.setAttribute("id",me),be.addEventListener("click",Ae)}();
//# sourceMappingURL=index.910e8fc3.js.map