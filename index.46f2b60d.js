!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequired76b;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequired76b=o),o.register("iE7OH",(function(t,r){var n,a;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.46f2b60d.js","ee16w":"sprite.b12e0b11.svg"}'));var i={};function s(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){s(o,n,a,i,c,"next",e)}function c(e){s(o,n,a,i,c,"throw",e)}i(void 0)}))}};var c={},l=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=function(e,t,r){var n=d;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return M()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=R(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=u(e,t,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",m={};function v(){}function g(){}function y(){}var _={};c(_,o,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(k([])));L&&L!==r&&n.call(L,o)&&(_=L);var w=y.prototype=v.prototype=Object.create(_);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(a,o,i,s){var c=u(e[a],e,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function R(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,R(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=u(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function k(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:M}}function M(){return{value:t,done:!0}}return g.prototype=y,c(w,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},E(x.prototype),c(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new x(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(w),c(w,s,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:k(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(c);try{regeneratorRuntime=l}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=l:Function("r","regeneratorRuntime = r")(l)}var u={API_KEY:"06cf6ee022a0922eb5200ae030143d7b",API_BASE_URL:"https://api.themoviedb.org/3/",TRENDING_PATH_PARAMS:"trending/all/day",SEARCH_PATH_PARAMS:"search/movie",DETAILS_PATH_PARAMS:"movie/",IMAGE_BASE_URL:"https://image.tmdb.org/t/p/w1280",GENRES_PATH_PARAMS:"genre/movie/list"},d=u.API_KEY,f=u.API_BASE_URL,h=u.GENRES_PATH_PARAMS;function p(){return(p=t(i)(t(c).mark((function e(){var r,n,a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL(f+h)).searchParams.set("api_key",d),e.prev=2,e.next=5,fetch(r);case 5:if((n=e.sent).ok){e.next=11;break}return e.next=9,n.json();case 9:throw a=e.sent,new Error(a.status_message);case 11:return e.next=13,n.json();case 13:return o=e.sent,e.abrupt("return",o);case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}var m={};function v(e){var t=[];return e.genre_ids?e.genre_ids.forEach((function(e){m[e]&&t.push(m[e])})):t.push("N/A"),0===t.length&&t.push("N/A"),t.length>3&&(t.splice(3),t[2]="Other"),t.map((function(e){return"".concat(e)})).join(", ")}(function(){return p.apply(this,arguments)})().then((function(e){e.genres.forEach((function(e){m[e.id]=e.name}))}));var g=u.API_KEY,y=u.API_BASE_URL,_=u.TRENDING_PATH_PARAMS;function b(){return L.apply(this,arguments)}function L(){return L=t(i)(t(c).mark((function e(){var r,n,a,o,i,s=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>0&&void 0!==s[0]?s[0]:1,(n=new URL(y+_)).searchParams.set("api_key",g),n.searchParams.set("page",r),e.prev=4,e.next=7,fetch(n);case 7:if((a=e.sent).ok){e.next=13;break}return e.next=11,a.json();case 11:throw o=e.sent,new Error(o.status_message);case 13:return e.next=15,a.json();case 15:return i=e.sent,e.abrupt("return",i);case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[4,19]])}))),L.apply(this,arguments)}function w(){return{headerRef:{header:document.querySelector(".header"),navLogo:document.querySelector(".navigation__logo"),searchForm:document.querySelector(".js-search-form"),headLibBackGr:document.querySelector(".header--library"),searchInput:document.querySelector(".js-form-input")},searchRef:{searchForm:document.querySelector(".search-form")},libraryButtonsRef:{btnContainer:document.querySelector(".js-btn-container"),btnWatched:document.querySelector(".js-btn-watched"),btnQueue:document.querySelector(".js-btn-queue")},paginationRef:{container:document.querySelector(".pag-container-js"),paginationList:document.querySelector(".pag-list-js"),pages:document.querySelectorAll(".js-page"),prev:document.querySelector(".prev-js"),next:document.querySelector(".next-js"),first:document.querySelector(".first-js"),last:document.querySelector(".last-js"),prevMore:document.querySelector(".prevMore-js"),nextMore:document.querySelector(".nextMore-js")},modalTeamRef:{teamModal:document.querySelector(".team-modal"),teamModalBtn:document.querySelector(".tm-close-btn"),teamModalOpen:document.querySelector(".footer-link")},libraryRef:{libBtn:document.querySelector(".js-library"),homeBtn:document.querySelector(".js-home")},galleryRef:{moviesDiv:document.querySelector("#movies-gallery")},filmDetailsRef:{filmDetailsModalContainer:document.querySelector("#movies-gallery"),filmDetailsModalClose:document.querySelector('[data-action="close-modal"]'),modalBackdrop:document.querySelector(".modal-backdrop"),filmDetailsModal:document.querySelector(".modal"),image:document.querySelector(".js-image"),title:document.querySelector(".js-title"),voteAverage:document.querySelector(".js-vote"),voteCount:document.querySelector(".js-vote-count"),popularity:document.querySelector(".js-popularity"),originTitle:document.querySelector(".js-title-orig"),genres:document.querySelector(".js-genres"),about:document.querySelector(".js-about"),btnWatched:document.querySelector(".js-btn-modal-watched"),btnQueue:document.querySelector(".js-btn-modal-queue")},footerRef:{},loaderRef:{loader:document.querySelector(".js-loader")},modalErrorRef:{modalError:document.querySelector(".windov-modal"),modalErrorText:document.querySelector(".error-modal__text")}}}function E(){w().loaderRef.loader.classList.add("is-hidden")}function x(){w().loaderRef.loader.classList.remove("is-hidden")}var R=u.IMAGE_BASE_URL;function A(e,t,r){var n=e.name||e.original_title;return'<li class="gallery-card" data-id ="'.concat(e.id,'">\n<a href="#" class="gallery-card__link">\n            <img src="').concat(R+e.poster_path,'" alt="').concat(e.original_title,'"  class="gallery-card__image" >\n  <div class="gallery-card__info">\n<p class="gallery-card__name">').concat(n,'</p>\n<p class="gallery-card__genre">').concat(t," | ").concat(r,"</p>\n</div>\n</a>\n\t    </li>")}var j=w().galleryRef.moviesDiv;function S(e){var t=e.results.map((function(e){return function(e){var t,r=v(e);t=e.release_date?Number.parseInt(e.release_date):Number.parseInt(e.first_air_date);return A(e,r,t)}(e)})).join("");j.innerHTML='<ul class="gallery-container">'.concat(t,"</ul>")}var k={KEY_WATCHED:"added-watched",KEY_QUEUE:"added-queue",CURRENT_QUERY:"current-query",TRENDING:"trending",BY_KEY:"by-key",LIBRARY:"library"},M=u.API_KEY,P=u.API_BASE_URL,q=u.DETAILS_PATH_PARAMS;function T(e){return I.apply(this,arguments)}function I(){return(I=t(i)(t(c).mark((function e(r){var n,a,o,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new URL(P+q+r)).searchParams.set("api_key",M),e.prev=2,e.next=5,fetch(n);case 5:if((a=e.sent).ok){e.next=11;break}return e.next=9,a.json();case 9:throw o=e.sent,new Error(o.status_message);case 11:return e.next=13,a.json();case 13:return i=e.sent,e.abrupt("return",i);case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}var N=u.IMAGE_BASE_URL;function O(e){var t=e.genres.map((function(e){return e.name}));return t=t.length>3?[t[0],t[1],"Other"].join(", "):t.join(", "),'\n  <li class="gallery-card" data-id ="'.concat(e.id,'">\n    <a href="#" class="gallery-card__item">\n      <img src="').concat(N+e.poster_path,'" alt="').concat(e.title,'"  class="gallery-card__image" >\n      <div class="gallery-card__info">\n        <p class="gallery-card__name">').concat(e.title,'</p>\n        <p class="gallery-card__genre">').concat(t," | ").concat(Number.parseInt(e.release_date)||"N/A","\n        </p>\n      </div>\n    </a>        \n\t</li>")}var B={};Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e){return C.default(e)||D.default(e)||U.default(e)||H.default()};var C=Y(o("kMC0W")),D=Y(o("7AJDX")),H=Y(o("8CtQK")),U=Y(o("auk6i"));function Y(e){return e&&e.__esModule?e:{default:e}}function G(e){var t=localStorage.getItem(e);try{return t?JSON.parse(t):[]}catch(e){console.log(e)}}function F(e,r){var n=G(e),a=[];if(n){if(n.includes(r))return;a=t(B)(n).concat([r])}else a=[r];var o=JSON.stringify(a);localStorage.setItem(e,o)}function K(e,r){var n=G(e),a=[];if(n){var o=n.filter((function(e){return e!==r}));a=t(B)(o)}var i=JSON.stringify(a);localStorage.setItem(e,i)}var Q;function W(e){for(var r="",n=e>9?"":"is-hidden",a=1;a<=e&&!(window.matchMedia("(max-width: 767px)").matches&&e>5&&6===a)&&!(e>9&&10===a);a+=1)r+='<li class="pagination__item js-page" data-num=\''.concat(a,'\'><a class="pagination__link" href="#">').concat(a,"</a></li>");return'\n  <ul class="pagination__list pag-list-js">\n      <li class="button prev-js pagination__item"><svg class="button__icon" width="16" height ="16">\n          <use href="'.concat(t(Q),'#arrow-right"></use>\n        </svg></li>\n      <li class="pagination__item first-js is-hidden hidden"><a class="pagination__link" href="#">1</a></li>\n      <li class="pagination__item prevMore-js is-hidden hidden"><a class="pagination__link" href="#">...</a></li>\n      ').concat(r,'\n      <li class="pagination__item ').concat(n,' nextMore-js hidden"><a class="pagination__link" href="#">...</a></li>\n      <li class="pagination__item ').concat(n,' last-js hidden"><a class="pagination__link" href="#">').concat(e,'</a></li>\n      <li class="button next-js pagination__item"><svg class="button__icon" width="16" height="16">\n          <use href="').concat(t(Q),'#arrow-left"></use>\n        </svg></li>\n\n    </ul>')}Q=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("ee16w");var J=w().paginationRef;function z(e){var t=W(e);J.container.innerHTML=t}var $=u.API_KEY,V=u.API_BASE_URL,X=u.SEARCH_PATH_PARAMS;function Z(e){return ee.apply(this,arguments)}function ee(){return ee=t(i)(t(c).mark((function e(r){var n,a,o,i,s,l,u=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,(a=new URL(V+X)).searchParams.set("api_key",$),a.searchParams.set("page",n),a.searchParams.set("query",r),e.prev=5,e.next=8,fetch(a);case 8:if((o=e.sent).ok){e.next=14;break}return e.next=12,o.json();case 12:throw i=e.sent,new Error(i.status_message);case 14:return e.next=16,o.json();case 16:if(s=e.sent,!(l=s).results.length){e.next=22;break}return e.abrupt("return",l);case 22:throw new Error("Nothing is found. Wrong query.");case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(5),console.log(e.t0);case 28:case"end":return e.stop()}}),e,null,[[5,25]])}))),ee.apply(this,arguments)}var te={};Object.defineProperty(te,"__esModule",{value:!0}),te.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e};var re=k.CURRENT_QUERY;function ne(){try{var e=sessionStorage.getItem(re);return JSON.parse(e)}catch(e){console.log(e)}}function ae(e){var r,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=(r={},t(te)(r,e,n),t(te)(r,"page",a),r);try{var i=JSON.stringify(o);sessionStorage.setItem(re,i)}catch(e){console.log(e)}}function oe(e){var t=ne();try{t.page=e;var r=JSON.stringify(t);sessionStorage.setItem(re,r)}catch(e){console.log(e)}}var ie,se,ce=k.TRENDING,le=k.BY_KEY,ue=k.LIBRARY,de=w().paginationRef.container,fe=1;function he(e,t){se=e,oe(t),e<=1?be():(t&&(fe=t),z(e),ie=w().paginationRef,ve(),ge(),_e(),ie.paginationList.addEventListener("click",pe))}function pe(e){e.preventDefault(),e.target.classList.contains("pagination__item")&&(e.target.classList.contains("js-page")&&(fe=Number(e.target.dataset.num)),e.target.classList.contains("prev-js")&&fe>1&&(fe-=1),e.target.classList.contains("next-js")&&fe<se&&(fe+=1),e.target.classList.contains("first-js")&&(fe=1,ye()),e.target.classList.contains("last-js")&&(fe=se,ye()),e.target.classList.contains("prevMore-js")&&(fe=+ie.pages[1].dataset.num,ye()),e.target.classList.contains("nextMore-js")&&(fe=+ie.pages[ie.pages.length-2].dataset.num,ye()),function(e){me.apply(this,arguments)}(fe),ve(),ge(),_e())}function me(){return(me=t(i)(t(c).mark((function e(r){var n,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(oe(r),n=ne(),x(),!n[ce]){e.next=9;break}return e.next=7,b(r);case 7:S(e.sent);case 9:if(!n[le]){e.next=15;break}return a=n[le],e.next=13,Z(a,r);case 13:S(e.sent);case 15:n[ue]&&Pe(r),E();case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(){ie.pages.forEach((function(e){e.classList.remove("active"),+e.dataset.num===fe&&e.classList.add("active")}))}function ge(){var e;window.matchMedia("(min-width: 768px)").matches?se>9&&(fe<=5?(ie.first.classList.add("is-hidden"),ie.prevMore.classList.add("is-hidden"),ie.pages[0].classList.remove("is-hidden"),ie.pages[1].classList.remove("is-hidden")):(ie.first.classList.remove("is-hidden"),ie.prevMore.classList.remove("is-hidden"),ie.pages[0].classList.add("is-hidden"),ie.pages[1].classList.add("is-hidden")),e=ie.pages.length-1,fe>=se-4?(ie.last.classList.add("is-hidden"),ie.nextMore.classList.add("is-hidden"),ie.pages[e-1].classList.remove("is-hidden"),ie.pages[e].classList.remove("is-hidden")):(ie.last.classList.remove("is-hidden"),ie.nextMore.classList.remove("is-hidden"),ie.pages[e-1].classList.add("is-hidden"),ie.pages[e].classList.add("is-hidden")),fe>=4&&fe<=se&&ye()):se>5&&fe>=2&&fe<=se&&ye(),ve()}function ye(){var e=fe-4;fe<=1?e=fe:fe<=2?e=fe-1:fe<=3?e=fe-2:fe<=4&&(e=fe-3),fe>=se?e=fe-8:fe>=se-1?e=fe-7:fe>=se-2?e=fe-6:fe>=se-3&&(e=fe-5),window.matchMedia("(max-width: 767px)").matches&&(e=fe-2,fe<=1?e=fe:fe<=2&&(e=fe-1),fe>=se?e=fe-4:fe>=se-1?e=fe-3:fe>=se-2&&(e=fe-2));for(var t=e,r=0;r<ie.pages.length;t+=1,r+=1)ie.pages[r].firstElementChild.textContent=t,ie.pages[r].dataset.num=t}function _e(){fe<=1?ie.prev.classList.add("disabled"):ie.prev.classList.remove("disabled"),fe>=se?ie.next.classList.add("disabled"):ie.next.classList.remove("disabled")}function be(){de.innerHTML=""}window.addEventListener("resize",(function(){if(!ie)return;window.matchMedia("(max-width: 767px)").matches&&!ie.container.classList.contains("mobile-js")?(ie.container.classList.remove("desktop-js"),ie.container.classList.add("mobile-js"),he(se)):window.matchMedia("(min-width: 768px)").matches&&!ie.container.classList.contains("desktop-js")&&(ie.container.classList.remove("mobile-js"),ie.container.classList.add("desktop-js"),he(se))}));var Le,we=w().libraryButtonsRef.btnWatched,Ee=w().libraryButtonsRef.btnQueue,xe=w().galleryRef.moviesDiv;function Re(){we.addEventListener("click",Ae),Ee.addEventListener("click",Se),Ae(),ae(k.LIBRARY),we.classList.add("active")}function Ae(e){return je.apply(this,arguments)}function je(){return(je=t(i)(t(c).mark((function e(r){var n,a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="number"==typeof r?r:1,Ee.classList.remove("active"),we.classList.add("active"),be(),oe(n),(a=G(k.KEY_WATCHED))&&0!==a.length){e.next=11;break}xe.innerHTML="You don't have any movies you've watched. Add the first one.",e.next=21;break;case 11:return x(),e.next=14,Promise.all(Me(a));case 14:Le=(Le=e.sent).filter((function(e){return void 0!==e})),(o=Math.ceil(Le.length/20))<n&&(n-=1),Pe(n),he(o,n),E();case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Se(e){return ke.apply(this,arguments)}function ke(){return(ke=t(i)(t(c).mark((function e(r){var n,a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="number"==typeof r?r:1,Ee.classList.add("active"),we.classList.remove("active"),be(),oe(n),(a=G(k.KEY_QUEUE))&&0!==a.length){e.next=11;break}xe.innerHTML="You don't have any movies in the queue. Add the first one.",e.next=21;break;case 11:return x(),e.next=14,Promise.all(Me(a));case 14:Le=(Le=e.sent).filter((function(e){return void 0!==e})),(o=Math.ceil(Le.length/20))<n&&(n-=1),Pe(n),he(o,n),E();case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Me(e){return e.map((function(e){return new Promise((function(t){t(T(e)),reject(T(e))}))}))}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;arrayForPage=Le.slice(0+20*(e-1),20+20*(e-1));var t=arrayForPage.map((function(e){if(e)return O(e)})).join("");xe.innerHTML='<ul class="gallery-container">'.concat(t,"</ul>")}function qe(){return Te.apply(this,arguments)}function Te(){return(Te=t(i)(t(c).mark((function e(){var r;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(),be(),e.next=4,b();case 4:S(r=e.sent),ae(k.TRENDING),he(r.total_pages,1),E();case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ie(){w().headerRef.searchInput.value=null,w().headerRef.header.classList.add("header--home"),w().headerRef.header.classList.remove("header--library"),w().libraryButtonsRef.btnContainer.classList.add("display-none"),w().headerRef.searchForm.classList.remove("display-none"),w().libraryRef.homeBtn.classList.add("current"),w().libraryRef.libBtn.classList.remove("current"),qe()}x(),window.addEventListener("DOMContentLoaded",qe),w().libraryRef.homeBtn.addEventListener("click",Ie),w().libraryRef.libBtn.addEventListener("click",(function(){w().headerRef.header.classList.remove("header--home"),w().headerRef.header.classList.add("header--library"),w().headerRef.searchForm.classList.add("display-none"),w().libraryButtonsRef.btnContainer.classList.remove("display-none"),w().libraryRef.libBtn.classList.add("current"),w().libraryRef.homeBtn.classList.remove("current"),be(),Re()})),w().headerRef.navLogo.addEventListener("click",Ie);var Ne=w().modalErrorRef,Oe=Ne.modalError,Be=Ne.modalErrorText,Ce=null;function De(e){Oe.classList.remove("is-hidden"),function(e){Be.innerHTML="".concat(e)}(e),Ce=setTimeout((function(){He()}),3e3)}function He(){Oe.classList.add("is-hidden")}Oe.addEventListener("click",(function(){He(),clearInterval(Ce)}));var Ue=w().galleryRef.moviesDiv,Ye=w().searchRef.searchForm,Ge="";Ye.addEventListener("submit",(function(e){if(e.preventDefault(),""===(Ge=e.target.elements.searchQuery.value.trim())){return De("Enter the name of the movie, for a correct search!")}x(),Ue.innerHTML="",be(),Z(Ge).then((function(e){if(e)ae(k.BY_KEY,Ge),he(e.total_pages,1),S(e);else{De("Nothing is found. Wrong query.")}})).finally(E),Ye.elements.searchQuery.value=""}));var Fe=k.KEY_WATCHED,Ke=k.KEY_QUEUE,Qe=w().libraryButtonsRef,We=Qe.btnWatched,Je=(Qe.btnQueue,w().filmDetailsRef.btnWatched),ze=w().filmDetailsRef.btnQueue;function $e(e){Ve(e),Xe(e),Je.setAttribute("id",e),Je.addEventListener("click",Ze),ze.setAttribute("id",e),ze.addEventListener("click",et)}function Ve(e){G(Fe).includes(e)?(Je.setAttribute("actions","added"),Je.classList.add("active"),Je.textContent="Remove from Watched"):(Je.setAttribute("actions","not-added"),Je.classList.remove("active"),Je.textContent="Add to Watched")}function Xe(e){G(Ke).includes(e)?(ze.setAttribute("actions","added"),ze.classList.add("active"),ze.textContent="Remove from Queue"):(ze.setAttribute("actions","not-added"),ze.classList.remove("active"),ze.textContent="Add to Queue")}function Ze(e){var t=e.currentTarget.getAttribute("id");"added"===Je.getAttribute("actions")?K(Fe,t):(F(Fe,t),K(Ke,t)),Ve(t),Xe(t),ne()[k.LIBRARY]&&(We.classList.contains("active")?Ae(ne().page):Se(ne().page))}function et(e){var t=e.currentTarget.getAttribute("id");"added"===ze.getAttribute("actions")?K(Ke,t):(F(Ke,t),K(Fe,t)),Ve(t),Xe(t),ne()[k.LIBRARY]&&(We.classList.contains("active")?Ae(ne().page):Se(ne().page))}var tt=w().filmDetailsRef;function rt(e){return nt.apply(this,arguments)}function nt(){return(nt=t(i)(t(c).mark((function e(r){var n;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=u.IMAGE_BASE_URL,r.poster_path||(tt.image.src="../images/modal-img.jpg",tt.image.alt="Movie photo"),tt.image.src="".concat(n).concat(r.poster_path),tt.image.alt=r.title,tt.title.textContent=r.title,tt.voteAverage.textContent=r.vote_average,tt.voteCount.textContent=r.vote_count,tt.popularity.textContent=Number(r.popularity.toFixed(1)),tt.originTitle.textContent=r.original_title,tt.genres.textContent=r.genres.map((function(e){return e.name})).join(", "),tt.about.textContent=r.overview;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var at,ot=w().filmDetailsRef;function it(){window.addEventListener("keydown",ct),document.body.classList.add("show-modal"),ot.filmDetailsModal.classList.remove("is-hidden")}function st(){window.removeEventListener("keydown",ct),document.body.classList.remove("show-modal"),ot.filmDetailsModal.classList.add("is-hidden"),document.body.style.overflow="",tt.image.src="#"}function ct(e){"Escape"===e.code&&st()}function lt(){return(lt=t(i)(t(c).mark((function e(r){var n,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),r.target.closest(".gallery-card")){e.next=3;break}return e.abrupt("return");case 3:return x(),n=r.target.closest(".gallery-card").dataset.id,e.next=7,T(n);case 7:(a=e.sent)?(rt(a),$e(n),it()):window.alert("Oops, movie not found. Please, choose another movie"),E();case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}ot.filmDetailsModalClose.addEventListener("click",st),ot.modalBackdrop.addEventListener("click",(function(){st()})),ot.filmDetailsModalContainer.addEventListener("click",(function(e){return lt.apply(this,arguments)})),(at=w().modalTeamRef).teamModalOpen.addEventListener("click",(function(e){function t(){window.removeEventListener("click",n),window.removeEventListener("keydown",r),at.teamModalBtn.removeEventListener("click",a)}function r(e){"Escape"===e.key&&(at.teamModal.classList.add("is-hidden"),t())}function n(e){e.target===at.teamModal&&(at.teamModal.classList.add("is-hidden"),t())}function a(e){at.teamModal.classList.add("is-hidden"),t()}e.preventDefault(),at.teamModal.classList.remove("is-hidden"),window.addEventListener("keydown",r),window.addEventListener("click",n),at.teamModalBtn.addEventListener("click",a)}))}();
//# sourceMappingURL=index.46f2b60d.js.map
