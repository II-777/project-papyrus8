!function(){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},e={},s=o.parcelRequired7c6;null==s&&((s=function(o){if(o in n)return n[o].exports;if(o in e){var s=e[o];delete e[o];var t={id:o,exports:{}};return n[o]=t,s.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+o+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(o,n){e[o]=n},o.parcelRequired7c6=s),s.register("9DMCT",(function(o,n){document.querySelector(".js-remove-book");var e=document.querySelector(".js-sl");fetch("https://books-backend.p.goit.global/books/category?category=Hardcover Fiction").then((function(o){return o.json()})).then((function(o){localStorage.setItem("books",JSON.stringify(o))})).catch((function(o){console.log(o)}));var s=JSON.parse(localStorage.getItem("books"))||[];console.log(s),s&&(e.innerHTML=s.map((function(o){var n=o.book_image,e=o.description,s=o.author,t=o.list_name,i=o.title;return'<ul><li><div class="sl-card">\n \n    <img src="'.concat(n,'" alt="').concat(i,'" class="sl-book-img">\n    <div>\n        <h3 class="sl-book-title">').concat(i,'</h3>\n        <p class="sl-book-cat">').concat(t,'</p>\n        <p class="sl-book-descr">').concat(e,'</p>\n        <div class="sl-aut-shops">\n          <p class="sl-book-author">').concat(s,'</p>\n          <ul class="sl-eshops">\n            <li><a href="">\n                    <svg width="32px" height="11px">\n                    <use href="./icon.svg#icon-amazon"></use></svg></a></li>\n            <li><a href=""><svg width="16px" height="16px">\n                    <use href="./icon.svg#icon-ibooks"></use></svg></a></li>\n            <li><a href=""><svg width="16px" height="16px">\n                    <use href="./icon.svg#icon-bookshop"></use></svg></a></li>\n        </ul>\n        </div>\n    </div>\n    <button type="button" class="trash-btn js-remove-book">\n    <svg width="16px" height="16px">\n    <use href="./icon.svg#icon-trash"></use></svg>\n    </button>\n    </div>\n            </li>\n      </ul>')})).join(""))})),s("9DMCT")}();
//# sourceMappingURL=shopping-cart.f850b879.js.map