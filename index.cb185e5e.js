function e(e,t,i,s){Object.defineProperty(e,t,{get:i,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},n={},a=i.parcelRequired76b;function o(){return{headerRef:{},homeRef:{},libraryRef:{},paginationRef:{container:document.querySelector(".pagination"),items:document.querySelectorAll(".pagination__item"),paginationList:document.querySelector(".pagination__list"),pages:document.querySelectorAll(".js-page"),link:document.querySelectorAll(".pagitation__link"),prev:document.querySelector(".prev-js"),next:document.querySelector(".next-js"),first:document.querySelector(".first-js"),last:document.querySelector(".last-js"),prevMore:document.querySelector(".prevMore-js"),nextMore:document.querySelector(".nextMore-js")},modalTeamRef:{teamModal:document.querySelector(".team-modal"),teamModalBtn:document.querySelector(".tm-close-btn"),teamModalOpen:document.querySelector(".footer-link")},libraryRef:{},galleryRef:{},filmDetailsRef:{},footerRef:{}}}null==a&&((a=function(e){if(e in s)return s[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},i.parcelRequired76b=a),a.register("kyEFX",(function(t,i){var s,n;e(t.exports,"register",(function(){return s}),(function(e){return s=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var a={};s=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)a[t[i]]=e[t[i]]},n=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"5ZPII":"index.cb185e5e.js","lp5u4":"sprite.b12e0b11.svg"}'));var r;function d(e){let i="";const s=e>9?"":"is-hidden";for(let t=1;t<=e&&!(window.matchMedia("(max-width: 767px)").matches&&e>5&&6===t)&&!(e>9&&10===t);t+=1)i+=`<li class="pagination__item js-page" data-num='${t}'><a class="pagination__link" href="#">${t}</a></li>`;return`\n  <ul class="pagination__list">\n      <li class="button prev-js pagination__item"><svg class="button__icon" width="16" height ="16">\n          <use href="${t(r)}#arrow-right"></use>\n        </svg></li>\n      <li class="pagination__item first-js is-hidden hidden"><a class="pagination__link" href="#">1</a></li>\n      <li class="pagination__item prevMore-js is-hidden hidden"><a class="pagination__link" href="#">...</a></li>\n      ${i}\n      <li class="pagination__item ${s} nextMore-js hidden"><a class="pagination__link" href="#">...</a></li>\n      <li class="pagination__item ${s} last-js hidden"><a class="pagination__link" href="#">${e}</a></li>\n      <li class="button next-js pagination__item"><svg class="button__icon" width="16" height="16">\n          <use href="${t(r)}#arrow-left"></use>\n        </svg></li>\n\n    </ul>`}r=new URL(a("kyEFX").resolve("lp5u4"),import.meta.url).toString();const{paginationRef:l}=o();function c(e){const t=d(e);l.container.innerHTML=t}var u={API_KEY:"06cf6ee022a0922eb5200ae030143d7b",API_BASE_URL:"https://api.themoviedb.org/3/",TRENDING_PATH_PARAMS:"trending/all/day",SEARCH_PATH_PARAMS:"search/movie",DETAILS_PATH_PARAMS:"movie/",IMAGE_BASE_URL:"https://image.tmdb.org/t/p/w1280",GENRES_PATH_PARAMS:"genre/movie/list"};const{API_KEY:m,API_BASE_URL:p,TRENDING_PATH_PARAMS:f}=u;let g,h,v,_=1;function L(e){h=e,e<=1||(c(e),g=o().paginationRef,M(),E(),b(),g.paginationList.addEventListener("click",w))}function w(e){e.preventDefault(),e.target.classList.contains("pagination__item")&&(e.target.classList.contains("js-page")&&(_=Number(e.target.dataset.num)),e.target.classList.contains("prev-js")&&_>1&&(_-=1),e.target.classList.contains("next-js")&&_<h&&(_+=1),e.target.classList.contains("first-js")&&(_=1,y()),e.target.classList.contains("last-js")&&(_=h,y()),e.target.classList.contains("prevMore-js")&&(_=+g.pages[1].dataset.num,y()),e.target.classList.contains("nextMore-js")&&(_=+g.pages[g.pages.length-2].dataset.num,y()),M(),E(),b())}function M(){g.items.forEach((e=>{e.classList.remove("active"),+e.dataset.num===_&&e.classList.add("active")}))}function E(){window.matchMedia("(min-width: 768px)").matches?h>9&&(_<=5?(g.first.classList.add("is-hidden"),g.prevMore.classList.add("is-hidden"),g.pages[0].classList.remove("is-hidden"),g.pages[1].classList.remove("is-hidden")):(g.first.classList.remove("is-hidden"),g.prevMore.classList.remove("is-hidden"),g.pages[0].classList.add("is-hidden"),g.pages[1].classList.add("is-hidden")),function(){const e=g.pages.length-1;_>=h-4?(g.last.classList.add("is-hidden"),g.nextMore.classList.add("is-hidden"),g.pages[e-1].classList.remove("is-hidden"),g.pages[e].classList.remove("is-hidden")):(g.last.classList.remove("is-hidden"),g.nextMore.classList.remove("is-hidden"),g.pages[e-1].classList.add("is-hidden"),g.pages[e].classList.add("is-hidden"))}(),_>=4&&_<=h&&y()):h>5&&_>=2&&_<=h&&y(),M()}function y(){let e=_-4;_<=1?e=_:_<=2?e=_-1:_<=3?e=_-2:_<=4&&(e=_-3),_>=h?e=_-8:_>=h-1?e=_-7:_>=h-2?e=_-6:_>=h-3&&(e=_-5),window.matchMedia("(max-width: 767px)").matches&&(e=_-2,_<=1?e=_:_<=2&&(e=_-1),_>=h?e=_-4:_>=h-1?e=_-3:_>=h-2&&(e=_-2));for(let t=e,i=0;i<g.pages.length;t+=1,i+=1)g.pages[i].firstElementChild.textContent=t,g.pages[i].dataset.num=t}function b(){_<=1?g.prev.classList.add("disabled"):g.prev.classList.remove("disabled"),_>=h?g.next.classList.add("disabled"):g.next.classList.remove("disabled")}function j(){window.removeEventListener("click",closeModalByClick),window.removeEventListener("keydown",closeModalByEsc),v.teamModalBtn.removeEventListener("click",closeModal)}L(200),window.addEventListener("resize",(function(){if(!g)return;window.matchMedia("(max-width: 767px)").matches&&!g.container.classList.contains("mobile-js")?(g.container.classList.remove("desktop-js"),g.container.classList.add("mobile-js"),L(h)):window.matchMedia("(min-width: 768px)").matches&&!g.container.classList.contains("desktop-js")&&(g.container.classList.remove("mobile-js"),g.container.classList.add("desktop-js"),L(h))})),v=o().modalTeamRef,v.teamModalOpen.addEventListener("click",(function(e){e.preventDefault(),v.teamModal.classList.remove("is-hidden"),window.addEventListener("keydown",(function(e){"Escape"===e.key&&(v.teamModal.classList.add("is-hidden"),j())})),window.addEventListener("click",(function(e){e.target===teamModal&&(v.teamModal.classList.add("is-hidden"),j())})),v.teamModalBtn.addEventListener("click",(function(e){v.teamModal.classList.add("is-hidden"),j()}))}));
//# sourceMappingURL=index.cb185e5e.js.map
