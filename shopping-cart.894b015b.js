!function(){function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in r){var n=r[e];delete r[e];var t={id:e,exports:{}};return o[e]=t,n.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){r[e]=n},t.parcelRequired7c6=s),s.register("iE7OH",(function(n,t){var o,r;e(n.exports,"register",(function(){return o}),(function(e){return o=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)s[n[t]]=e[n[t]]},r=function(e){var n=s[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),s.register("aNJCr",(function(n,t){var o;e(n.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function s(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var n=r[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),r[e]=n),n}})),s("iE7OH").register(JSON.parse('{"kSKLY":"shopping-cart.894b015b.js","k5HmC":"icon.6c821e0f.svg","cXZQA":"index.8b81eff8.css","hrENL":"shopping-cart.937bfe9c.js"}')),s("i8Q71"),s("8XLBX");var i;i=s("aNJCr").getBundleURL("kSKLY")+s("iE7OH").resolve("k5HmC");var a=s("a4Mag"),c=document.querySelector(".js-sl"),l=JSON.parse(localStorage.getItem("books"))||[];function u(){l&&(c.innerHTML=l.map((function(e){var t=e.book_image,o=e.description,r=e.author,s=e.list_name,a=e.title,c=e.buy_links,l=c[0].url,u=c[1].url,f=c[4].url;return'<li><div class="sl-card"> \n      <img src="'.concat(t,'" alt="').concat(a,'" class="sl-book-img">\n      <div class="sl-book-info">\n          <h3 class="sl-book-title">').concat(a,'</h3>\n          <p class="sl-book-cat">').concat(s,'</p>\n          <p class="sl-book-descr">').concat(o,'</p>\n          <div class="sl-aut-shops">\n            <p class="sl-book-author">').concat(r,'</p>\n            <ul class="sl-eshops">\n              <li><a target="_blank" href="').concat(l,'">\n                      <svg class="sl-amazon" width="32px" height="11px">\n                      <use href="').concat(n(i),'#icon-amazon"></use></svg></a></li>\n              <li><a target="_blank" href="').concat(u,'"><svg class="sl-ibooks" width="16px" height="16px">\n                      <use href="').concat(n(i),'#icon-ibooks"></use></svg></a></li>\n              <li><a target="_blank" href="').concat(f,'"><svg class="sl-bookshop" width="16px" height="16px">\n                      <use href="').concat(n(i),'#icon-bookshop"></use></svg></a></li>\n            </ul>\n          </div>\n      </div>\n      <button type="button" class="trash-btn js-remove-book">\n      <svg width="16px" height="16px">\n      <use href="').concat(n(i),'#icon-trash"></use></svg>\n      </button>\n      </div>\n    </li>')})).join(""),c.querySelectorAll(".js-remove-book").forEach((function(e){return e.addEventListener("click",f)})));0===l.length&&localStorage.clear()}function f(e){var n=e.target.closest(".sl-card").querySelector(".sl-book-title").textContent;l=l.filter((function(e){return e.title!==n})),u()}console.log(l),u(),"/shopping-cart.html"===window.location.pathname&&window.screen.width<1440&&(a.refs.supportUkraineAside.style.display="none"),s("kBC1b"),s("ed5Ti")}();
//# sourceMappingURL=shopping-cart.894b015b.js.map