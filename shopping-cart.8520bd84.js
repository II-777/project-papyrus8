!function(){function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){r[e]=n},t.parcelRequired7c6=s),s.register("iE7OH",(function(n,t){var o,r;e(n.exports,"register",(function(){return o}),(function(e){return o=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)s[n[t]]=e[n[t]]},r=function(e){var n=s[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),s.register("9DMCT",(function(e,t){var o=s("9laZi"),r=document.querySelector(".js-sl");fetch("https://books-backend.p.goit.global/books/category?category=Hardcover Fiction").then((function(e){return e.json()})).then((function(e){localStorage.setItem("books",JSON.stringify(e))})).catch((function(e){console.log(e)}));var c=JSON.parse(localStorage.getItem("books"))||[];function i(){c&&(r.innerHTML=c.map((function(e){var t=e.book_image,r=e.description,s=e.author,c=e.list_name,i=e.title,a=e.buy_links,l=a[0].url,u=a[1].url,f=a[4].url;return'<li><div class="sl-card"> \n      <img src="'.concat(t,'" alt="').concat(i,'" class="sl-book-img">\n      <div class="sl-book-info">\n          <h3 class="sl-book-title">').concat(i,'</h3>\n          <p class="sl-book-cat">').concat(c,'</p>\n          <p class="sl-book-descr">').concat(r,'</p>\n          <div class="sl-aut-shops">\n            <p class="sl-book-author">').concat(s,'</p>\n            <ul class="sl-eshops">\n              <li><a target="_blank" href="').concat(l,'">\n                      <svg class="sl-amazon" width="32px" height="11px">\n                      <use href="').concat(n(o),'#icon-amazon"></use></svg></a></li>\n              <li><a target="_blank" href="').concat(u,'"><svg class="sl-ibooks" width="16px" height="16px">\n                      <use href="').concat(n(o),'#icon-ibooks"></use></svg></a></li>\n              <li><a target="_blank" href="').concat(f,'"><svg class="sl-bookshop" width="16px" height="16px">\n                      <use href="').concat(n(o),'#icon-bookshop"></use></svg></a></li>\n            </ul>\n          </div>\n      </div>\n      <button type="button" class="trash-btn js-remove-book">\n      <svg width="16px" height="16px">\n      <use href="').concat(n(o),'#icon-trash"></use></svg>\n      </button>\n      </div>\n    </li>')})).join(""),r.querySelectorAll(".js-remove-book").forEach((function(e){return e.addEventListener("click",a)})))}function a(e){var n=e.target.closest(".sl-card").querySelector(".sl-book-title").textContent;c=c.filter((function(e){return e.title!==n})),i()}console.log(c),i()})),s.register("9laZi",(function(e,n){e.exports=s("aNJCr").getBundleURL("aZW66")+s("iE7OH").resolve("k5HmC")})),s.register("aNJCr",(function(n,t){var o;e(n.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function s(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var n=r[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),r[e]=n),n}})),s("iE7OH").register(JSON.parse('{"aZW66":"shopping-cart.8520bd84.js","k5HmC":"icon.6c821e0f.svg"}')),s("9DMCT")}();
//# sourceMappingURL=shopping-cart.8520bd84.js.map
