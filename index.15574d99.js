!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired76b;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired76b=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.15574d99.js","ee16w":"sprite.b12e0b11.svg"}'));var o={};function s(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){s(a,r,i,o,c,"next",e)}function c(e){s(a,r,i,o,c,"throw",e)}o(void 0)}))}};var c={},l=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new S(r||[]);return a._invoke=function(e,t,n){var r=d;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return R()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=j(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=u(e,t,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(e,n,o),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function y(){}var w={};c(w,a,(function(){return this}));var L=Object.getPrototypeOf,_=L&&L(L(A([])));_&&_!==n&&r.call(_,a)&&(w=_);var b=y.prototype=m.prototype=Object.create(w);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,a,o,s){var c=u(e[i],e,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(d).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function A(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:R}}function R(){return{value:t,done:!0}}return g.prototype=y,c(b,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},x(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new E(l(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(b),c(b,s,"Generator"),c(b,a,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=A,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;M(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(c);try{regeneratorRuntime=l}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=l:Function("r","regeneratorRuntime = r")(l)}
//!!!!!!!!! ОБЕ функции надо вызывать при старте
var u={};function d(){return(d=t(o)(t(c).mark((function e(){var n,r,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(API_KEY));case 4:return r=e.sent,e.next=7,r.json();case 7:i=e.sent,n=i.genres,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function f(){return{headerRef:{},homeRef:{},libraryButtonsRef:{btnWatched:document.querySelector(".js-btn-watched"),btnQueue:document.querySelector(".js-btn-queue")},paginationRef:{container:document.querySelector(".pag-container-js"),paginationList:document.querySelector(".pag-list-js"),pages:document.querySelectorAll(".js-page"),prev:document.querySelector(".prev-js"),next:document.querySelector(".next-js"),first:document.querySelector(".first-js"),last:document.querySelector(".last-js"),prevMore:document.querySelector(".prevMore-js"),nextMore:document.querySelector(".nextMore-js")},modalTeamRef:{teamModal:document.querySelector(".team-modal"),teamModalBtn:document.querySelector(".tm-close-btn"),teamModalOpen:document.querySelector(".footer-link")},libraryRef:{},galleryRef:{},filmDetailsRef:{},footerRef:{}}}(function(){return d.apply(this,arguments)})().then((function(e){e.forEach((function(e){u[e.id]=e.name}))}));var h={API_KEY:"06cf6ee022a0922eb5200ae030143d7b",API_BASE_URL:"https://api.themoviedb.org/3/",TRENDING_PATH_PARAMS:"trending/all/day",SEARCH_PATH_PARAMS:"search/movie",DETAILS_PATH_PARAMS:"movie/",IMAGE_BASE_URL:"https://image.tmdb.org/t/p/w1280",GENRES_PATH_PARAMS:"genre/movie/list"},p=h.API_KEY,v=h.API_BASE_URL,m=h.DETAILS_PATH_PARAMS;function g(e){return y.apply(this,arguments)}function y(){return(y=t(o)(t(c).mark((function e(n){var r,i,a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL(v+m+n)).searchParams.set("api_key",p),e.prev=2,e.next=5,fetch(r);case 5:if((i=e.sent).ok){e.next=11;break}return e.next=9,i.json();case 9:throw a=e.sent,new Error(a.status_message);case 11:return e.next=13,i.json();case 13:return o=e.sent,e.abrupt("return",o);case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}var w=f().libraryButtonsRef.btnWatched,L=f().libraryButtonsRef.btnQueue,_=document.querySelector(".pagination"),b=document.createElement("div");function x(e){return'\n        <article class="movie-card" id="'.concat(e.id,'">\n        <div class="thumb">\n        <img class="movie-card__img" src="https://image.tmdb.org/t/p/w1280/').concat(e.poster_path,'" width="300" sizes="100%" alt="').concat(e.title,'"/>\n        </div>\n        <div class="movie-card__description">\n            <p class="movie-card__name">').concat(e.title,'</p>\n            <p class="movie-card__info">Genres | ').concat(Number.parseInt(e.release_date),"</p>\n        </div>\n        </article>")}function E(){L.classList.remove("active"),w.classList.add("active");var e=["453395","921987","667739","616037"];e&&0!==e.length?k(e):b.innerHTML="You don't have any movies you've watched. Add the first one."}function j(){L.classList.add("active"),w.classList.remove("active");var e=["453395","921987","667739","616037"];e&&0!==e.length?k(e):b.innerHTML="You don't have any movies in the queue. Add the first one."}function k(e){return M.apply(this,arguments)}function M(){return(M=t(o)(t(c).mark((function e(n){var r,i,a,o,s,l,u,d,f;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],i=!0,a=!1,o=void 0,e.prev=2,s=n[Symbol.iterator]();case 4:if(i=(l=s.next()).done){e.next=17;break}return u=l.value,e.next=8,g(u);case 8:if(!(d=e.sent)){e.next=13;break}f=x(d),r.push(f),e.next=14;break;case 13:return e.abrupt("continue",14);case 14:i=!0,e.next=4;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(2),a=!0,o=e.t0;case 23:e.prev=23,e.prev=24,i||null==s.return||s.return();case 26:if(e.prev=26,!a){e.next=29;break}throw o;case 29:return e.finish(26);case 30:return e.finish(23);case 31:r=r.join(""),b.innerHTML=r;case 33:case"end":return e.stop()}}),e,null,[[2,19,23,31],[24,,26,30]])})))).apply(this,arguments)}b.style.display="flex",_.insertAdjacentElement("beforebegin",b),console.log(b),w.addEventListener("click",E),L.addEventListener("click",j),E(),w.classList.add("active");var S;function A(e){for(var n="",r=e>9?"":"is-hidden",i=1;i<=e&&!(window.matchMedia("(max-width: 767px)").matches&&e>5&&6===i)&&!(e>9&&10===i);i+=1)n+='<li class="pagination__item js-page" data-num=\''.concat(i,'\'><a class="pagination__link" href="#">').concat(i,"</a></li>");return'\n  <ul class="pagination__list pag-list-js">\n      <li class="button prev-js pagination__item"><svg class="button__icon" width="16" height ="16">\n          <use href="'.concat(t(S),'#arrow-right"></use>\n        </svg></li>\n      <li class="pagination__item first-js is-hidden hidden"><a class="pagination__link" href="#">1</a></li>\n      <li class="pagination__item prevMore-js is-hidden hidden"><a class="pagination__link" href="#">...</a></li>\n      ').concat(n,'\n      <li class="pagination__item ').concat(r,' nextMore-js hidden"><a class="pagination__link" href="#">...</a></li>\n      <li class="pagination__item ').concat(r,' last-js hidden"><a class="pagination__link" href="#">').concat(e,'</a></li>\n      <li class="button next-js pagination__item"><svg class="button__icon" width="16" height="16">\n          <use href="').concat(t(S),'#arrow-left"></use>\n        </svg></li>\n\n    </ul>')}S=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("ee16w");var R=f().paginationRef;function P(e){var t=A(e);R.container.innerHTML=t}var O;var T,q,N=1;function H(e){T=e,e<=1||(P(e),O=f().paginationRef,G(),B(),D(),O.paginationList.addEventListener("click",I))}function I(e){e.preventDefault(),e.target.classList.contains("pagination__item")&&(e.target.classList.contains("js-page")&&(N=Number(e.target.dataset.num)),e.target.classList.contains("prev-js")&&N>1&&(N-=1),e.target.classList.contains("next-js")&&N<T&&(N+=1),e.target.classList.contains("first-js")&&(N=1,F()),e.target.classList.contains("last-js")&&(N=T,F()),e.target.classList.contains("prevMore-js")&&(N=+O.pages[1].dataset.num,F()),e.target.classList.contains("nextMore-js")&&(N=+O.pages[O.pages.length-2].dataset.num,F()),G(),B(),D())}function G(){O.pages.forEach((function(e){e.classList.remove("active"),+e.dataset.num===N&&e.classList.add("active")}))}function B(){var e;window.matchMedia("(min-width: 768px)").matches?T>9&&(N<=5?(O.first.classList.add("is-hidden"),O.prevMore.classList.add("is-hidden"),O.pages[0].classList.remove("is-hidden"),O.pages[1].classList.remove("is-hidden")):(O.first.classList.remove("is-hidden"),O.prevMore.classList.remove("is-hidden"),O.pages[0].classList.add("is-hidden"),O.pages[1].classList.add("is-hidden")),e=O.pages.length-1,N>=T-4?(O.last.classList.add("is-hidden"),O.nextMore.classList.add("is-hidden"),O.pages[e-1].classList.remove("is-hidden"),O.pages[e].classList.remove("is-hidden")):(O.last.classList.remove("is-hidden"),O.nextMore.classList.remove("is-hidden"),O.pages[e-1].classList.add("is-hidden"),O.pages[e].classList.add("is-hidden")),N>=4&&N<=T&&F()):T>5&&N>=2&&N<=T&&F(),G()}function F(){var e=N-4;N<=1?e=N:N<=2?e=N-1:N<=3?e=N-2:N<=4&&(e=N-3),N>=T?e=N-8:N>=T-1?e=N-7:N>=T-2?e=N-6:N>=T-3&&(e=N-5),window.matchMedia("(max-width: 767px)").matches&&(e=N-2,N<=1?e=N:N<=2&&(e=N-1),N>=T?e=N-4:N>=T-1?e=N-3:N>=T-2&&(e=N-2));for(var t=e,n=0;n<O.pages.length;t+=1,n+=1)O.pages[n].firstElementChild.textContent=t,O.pages[n].dataset.num=t}function D(){N<=1?O.prev.classList.add("disabled"):O.prev.classList.remove("disabled"),N>=T?O.next.classList.add("disabled"):O.next.classList.remove("disabled")}H(200),window.addEventListener("resize",(function(){if(!O)return;window.matchMedia("(max-width: 767px)").matches&&!O.container.classList.contains("mobile-js")?(O.container.classList.remove("desktop-js"),O.container.classList.add("mobile-js"),H(T)):window.matchMedia("(min-width: 768px)").matches&&!O.container.classList.contains("desktop-js")&&(O.container.classList.remove("mobile-js"),O.container.classList.add("desktop-js"),H(T))})),(q=f().modalTeamRef).teamModalOpen.addEventListener("click",(function(e){function t(){window.removeEventListener("click",r),window.removeEventListener("keydown",n),q.teamModalBtn.removeEventListener("click",i)}function n(e){"Escape"===e.key&&(q.teamModal.classList.add("is-hidden"),t())}function r(e){e.target===q.teamModal&&(q.teamModal.classList.add("is-hidden"),t())}function i(e){q.teamModal.classList.add("is-hidden"),t()}e.preventDefault(),q.teamModal.classList.remove("is-hidden"),window.addEventListener("keydown",n),window.addEventListener("click",r),q.teamModalBtn.addEventListener("click",i)}))}();
//# sourceMappingURL=index.15574d99.js.map
