!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired76b;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired76b=a),a.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.cd2f6211.js","ee16w":"sprite.b12e0b11.svg"}'));var o={};function s(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){s(a,r,i,o,c,"next",e)}function c(e){s(a,r,i,o,c,"throw",e)}o(void 0)}))}};var c={},u=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new k(r||[]);return a._invoke=function(e,t,n){var r=d;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return R()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=j(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function y(){}var w={};c(w,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(M([])));L&&L!==n&&r.call(L,a)&&(w=L);var _=y.prototype=m.prototype=Object.create(w);function x(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(i,a,o,s){var c=l(e[i],e,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function M(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:R}}function R(){return{value:t,done:!0}}return g.prototype=y,c(_,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},x(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new E(u(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(_),c(_,s,"Generator"),c(_,a,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=M,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:M(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(c);try{regeneratorRuntime=u}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=u:Function("r","regeneratorRuntime = r")(u)}
//!!!!!!!!! ОБЕ функции надо вызывать при старте
var l={};function d(){return(d=t(o)(t(c).mark((function e(){var n,r,i;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(API_KEY));case 4:return r=e.sent,e.next=7,r.json();case 7:i=e.sent,n=i.genres,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function f(){return{headerRef:{},homeRef:{},libraryButtonsRef:{btnWatched:document.querySelector(".js-btn-watched"),btnQueue:document.querySelector(".js-btn-queue")},paginationRef:{container:document.querySelector(".pag-container-js"),paginationList:document.querySelector(".pag-list-js"),pages:document.querySelectorAll(".js-page"),prev:document.querySelector(".prev-js"),next:document.querySelector(".next-js"),first:document.querySelector(".first-js"),last:document.querySelector(".last-js"),prevMore:document.querySelector(".prevMore-js"),nextMore:document.querySelector(".nextMore-js")},modalTeamRef:{teamModal:document.querySelector(".team-modal"),teamModalBtn:document.querySelector(".tm-close-btn"),teamModalOpen:document.querySelector(".footer-link")},libraryRef:{},galleryRef:{moviesDiv:document.querySelector("#movies-gallery")},filmDetailsRef:{filmDetailsModalOpen:document.querySelector("li"),filmDetailsModal:document.querySelector(".modal"),image:document.querySelector(".js-image"),title:document.querySelector(".js-title"),voteAverage:document.querySelector(".js-vote"),voteCount:document.querySelector(".js-vote-count"),popularity:document.querySelector(".js-popularity"),originTitle:document.querySelector(".js-title-orig"),genres:document.querySelector(".js-genres"),about:document.querySelector(".js-about"),btnWatched:document.querySelector(".js-btn-modal-watched"),btnQueue:document.querySelector(".js-btn-modal-queue")},footerRef:{}}}(function(){return d.apply(this,arguments)})().then((function(e){e.forEach((function(e){l[e.id]=e.name}))}));var h={KEY_WATCHED:"added-watched",KEY_QUEUE:"added-queue"},p={API_KEY:"06cf6ee022a0922eb5200ae030143d7b",API_BASE_URL:"https://api.themoviedb.org/3/",TRENDING_PATH_PARAMS:"trending/all/day",SEARCH_PATH_PARAMS:"search/movie",DETAILS_PATH_PARAMS:"movie/",IMAGE_BASE_URL:"https://image.tmdb.org/t/p/w1280",GENRES_PATH_PARAMS:"genre/movie/list"},v=p.API_KEY,m=p.API_BASE_URL,g=p.DETAILS_PATH_PARAMS;function y(e){return w.apply(this,arguments)}function w(){return(w=t(o)(t(c).mark((function e(n){var r,i,a,o;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new URL(m+g+n)).searchParams.set("api_key",v),e.prev=2,e.next=5,fetch(r);case 5:if((i=e.sent).ok){e.next=11;break}return e.next=9,i.json();case 9:throw a=e.sent,new Error(a.status_message);case 11:return e.next=13,i.json();case 13:return o=e.sent,e.abrupt("return",o);case 17:e.prev=17,e.t0=e.catch(2),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}var b=f().libraryButtonsRef.btnWatched,L=f().libraryButtonsRef.btnQueue,_=document.querySelector(".pagination"),x=document.createElement("div");function E(e){return'\n        <article class="movie-card" id="'.concat(e.id,'">\n        <div class="thumb">\n        <img class="movie-card__img" src="https://image.tmdb.org/t/p/w1280/').concat(e.poster_path,'" width="300" sizes="100%" alt="').concat(e.title,'"/>\n        </div>\n        <div class="movie-card__description">\n            <p class="movie-card__name">').concat(e.title,'</p>\n            <p class="movie-card__info">Genres | ').concat(Number.parseInt(e.release_date),"</p>\n        </div>\n        </article>")}function j(){L.classList.remove("active"),b.classList.add("active");var e=["453395","921987","667739","616037"];e&&0!==e.length?A(e):x.innerHTML="You don't have any movies you've watched. Add the first one."}function S(){L.classList.add("active"),b.classList.remove("active");var e=["453395","921987","667739","616037"];e&&0!==e.length?A(e):x.innerHTML="You don't have any movies in the queue. Add the first one."}function A(e){return k.apply(this,arguments)}function k(){return(k=t(o)(t(c).mark((function e(n){var r,i,a,o,s,u,l,d,f;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],i=!0,a=!1,o=void 0,e.prev=2,s=n[Symbol.iterator]();case 4:if(i=(u=s.next()).done){e.next=17;break}return l=u.value,e.next=8,y(l);case 8:if(!(d=e.sent)){e.next=13;break}f=E(d),r.push(f),e.next=14;break;case 13:return e.abrupt("continue",14);case 14:i=!0,e.next=4;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(2),a=!0,o=e.t0;case 23:e.prev=23,e.prev=24,i||null==s.return||s.return();case 26:if(e.prev=26,!a){e.next=29;break}throw o;case 29:return e.finish(26);case 30:return e.finish(23);case 31:r=r.join(""),x.innerHTML=r;case 33:case"end":return e.stop()}}),e,null,[[2,19,23,31],[24,,26,30]])})))).apply(this,arguments)}x.style.display="flex",_.insertAdjacentElement("beforebegin",x),console.log(x),b.addEventListener("click",j),L.addEventListener("click",S),j(),b.classList.add("active");var M=f().filmDetailsRef;function R(){return(R=t(o)(t(c).mark((function e(){var n,r,i,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("496450");case 2:n=e.sent,r=p.IMAGE_BASE_URL,n.poster_path||(M.image.src="../images/modal-img.jpg",M.image.alt="Movie photo"),M.image.srcset="".concat(r).concat(n.poster_path),M.image.alt=n.title,M.title.textContent=n.title,M.voteAverage.textContent=n.vote_average,M.voteCount.textContent=n.vote_count,M.popularity.textContent=Number(n.popularity.toFixed(1)),M.originTitle.textContent=n.original_title,i=n.genres.map((function(e){return e.name})),a=i.slice(0,2),i.length>2&&a.push("Others"),i=a.join(", "),M.genres.textContent=i,M.about.textContent=n.overview;case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.querySelector(".modal-btn").addEventListener("click",(function(){return R.apply(this,arguments)}));var q;f().filmDetailsRef;function O(e){for(var n="",r=e>9?"":"is-hidden",i=1;i<=e&&!(window.matchMedia("(max-width: 767px)").matches&&e>5&&6===i)&&!(e>9&&10===i);i+=1)n+='<li class="pagination__item js-page" data-num=\''.concat(i,'\'><a class="pagination__link" href="#">').concat(i,"</a></li>");return'\n  <ul class="pagination__list pag-list-js">\n      <li class="button prev-js pagination__item"><svg class="button__icon" width="16" height ="16">\n          <use href="'.concat(t(q),'#arrow-right"></use>\n        </svg></li>\n      <li class="pagination__item first-js is-hidden hidden"><a class="pagination__link" href="#">1</a></li>\n      <li class="pagination__item prevMore-js is-hidden hidden"><a class="pagination__link" href="#">...</a></li>\n      ').concat(n,'\n      <li class="pagination__item ').concat(r,' nextMore-js hidden"><a class="pagination__link" href="#">...</a></li>\n      <li class="pagination__item ').concat(r,' last-js hidden"><a class="pagination__link" href="#">').concat(e,'</a></li>\n      <li class="button next-js pagination__item"><svg class="button__icon" width="16" height="16">\n          <use href="').concat(t(q),'#arrow-left"></use>\n        </svg></li>\n\n    </ul>')}q=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("ee16w");var T=f().paginationRef;function P(e){var t=O(e);T.container.innerHTML=t}var C;var N,H,D=1;function I(e){N=e,e<=1||(P(e),C=f().paginationRef,U(),B(),F(),C.paginationList.addEventListener("click",G))}function G(e){e.preventDefault(),e.target.classList.contains("pagination__item")&&(e.target.classList.contains("js-page")&&(D=Number(e.target.dataset.num)),e.target.classList.contains("prev-js")&&D>1&&(D-=1),e.target.classList.contains("next-js")&&D<N&&(D+=1),e.target.classList.contains("first-js")&&(D=1,Y()),e.target.classList.contains("last-js")&&(D=N,Y()),e.target.classList.contains("prevMore-js")&&(D=+C.pages[1].dataset.num,Y()),e.target.classList.contains("nextMore-js")&&(D=+C.pages[C.pages.length-2].dataset.num,Y()),U(),B(),F())}function U(){C.pages.forEach((function(e){e.classList.remove("active"),+e.dataset.num===D&&e.classList.add("active")}))}function B(){var e;window.matchMedia("(min-width: 768px)").matches?N>9&&(D<=5?(C.first.classList.add("is-hidden"),C.prevMore.classList.add("is-hidden"),C.pages[0].classList.remove("is-hidden"),C.pages[1].classList.remove("is-hidden")):(C.first.classList.remove("is-hidden"),C.prevMore.classList.remove("is-hidden"),C.pages[0].classList.add("is-hidden"),C.pages[1].classList.add("is-hidden")),e=C.pages.length-1,D>=N-4?(C.last.classList.add("is-hidden"),C.nextMore.classList.add("is-hidden"),C.pages[e-1].classList.remove("is-hidden"),C.pages[e].classList.remove("is-hidden")):(C.last.classList.remove("is-hidden"),C.nextMore.classList.remove("is-hidden"),C.pages[e-1].classList.add("is-hidden"),C.pages[e].classList.add("is-hidden")),D>=4&&D<=N&&Y()):N>5&&D>=2&&D<=N&&Y(),U()}function Y(){var e=D-4;D<=1?e=D:D<=2?e=D-1:D<=3?e=D-2:D<=4&&(e=D-3),D>=N?e=D-8:D>=N-1?e=D-7:D>=N-2?e=D-6:D>=N-3&&(e=D-5),window.matchMedia("(max-width: 767px)").matches&&(e=D-2,D<=1?e=D:D<=2&&(e=D-1),D>=N?e=D-4:D>=N-1?e=D-3:D>=N-2&&(e=D-2));for(var t=e,n=0;n<C.pages.length;t+=1,n+=1)C.pages[n].firstElementChild.textContent=t,C.pages[n].dataset.num=t}function F(){D<=1?C.prev.classList.add("disabled"):C.prev.classList.remove("disabled"),D>=N?C.next.classList.add("disabled"):C.next.classList.remove("disabled")}I(200),window.addEventListener("resize",(function(){if(!C)return;window.matchMedia("(max-width: 767px)").matches&&!C.container.classList.contains("mobile-js")?(C.container.classList.remove("desktop-js"),C.container.classList.add("mobile-js"),I(N)):window.matchMedia("(min-width: 768px)").matches&&!C.container.classList.contains("desktop-js")&&(C.container.classList.remove("mobile-js"),C.container.classList.add("desktop-js"),I(N))})),(H=f().modalTeamRef).teamModalOpen.addEventListener("click",(function(e){function t(){window.removeEventListener("click",r),window.removeEventListener("keydown",n),H.teamModalBtn.removeEventListener("click",i)}function n(e){"Escape"===e.key&&(H.teamModal.classList.add("is-hidden"),t())}function r(e){e.target===H.teamModal&&(H.teamModal.classList.add("is-hidden"),t())}function i(e){H.teamModal.classList.add("is-hidden"),t()}e.preventDefault(),H.teamModal.classList.remove("is-hidden"),window.addEventListener("keydown",n),window.addEventListener("click",r),H.teamModalBtn.addEventListener("click",i)}));var Q,W=h.KEY_WATCHED,K=h.KEY_QUEUE,J=f().filmDetailsRef.btnWatched,z=f().filmDetailsRef.btnQueue;function V(e){var t;return null!==(t=JSON.parse(localStorage.getItem(e)))&&void 0!==t?t:[]}function $(e,t){var n=V(e);console.log(n),n.push(t),localStorage.setItem(e,JSON.stringify(n))}function X(e,t){var n=V(e),r=n.indexOf(t);console.log(r),n.splice(r,1),localStorage.setItem(e,JSON.stringify(n))}function Z(e){V(W).includes(e)?(J.setAttribute("actions","added"),J.classList.add("active"),J.textContent="Remove from Watched"):(J.setAttribute("actions","not-added"),J.classList.remove("active"),J.textContent="Add to Watched")}function ee(e){V(K).includes(e)?(z.setAttribute("actions","added"),z.classList.add("active"),z.textContent="Remove from Queue"):(z.setAttribute("actions","not-added"),z.classList.remove("active"),z.textContent="Add to Queue")}function te(e){var t=e.currentTarget.getAttribute("id");console.log(J.getAttribute("actions")),"added"===J.getAttribute("actions")?(console.log("delete"),X(W,t)):($(W,t),X(K,t)),Z(t),ee(t)}function ne(e){var t=e.currentTarget.getAttribute("id");"added"===z.getAttribute("actions")?X(K,t):($(K,t),X(W,t)),Z(t),ee(t)}Z(Q="921987"),ee(Q),J.setAttribute("id",Q),J.addEventListener("click",te),z.setAttribute("id",Q),z.addEventListener("click",ne)}();
//# sourceMappingURL=index.cd2f6211.js.map