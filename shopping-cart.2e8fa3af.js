var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},s={},n=o.parcelRequired7c6;null==n&&((n=function(o){if(o in e)return e[o].exports;if(o in s){var n=s[o];delete s[o];var t={id:o,exports:{}};return e[o]=t,n.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+o+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(o,e){s[o]=e},o.parcelRequired7c6=n),n.register("6oj30",(function(o,e){document.querySelector(".js-remove-book");const s=document.querySelector(".js-sl");fetch("https://books-backend.p.goit.global/books/category?category=Hardcover Fiction").then((o=>o.json())).then((o=>{localStorage.setItem("books",JSON.stringify(o))})).catch((o=>{console.log(o)}));let n=JSON.parse(localStorage.getItem("books"))||[];console.log(n),n&&(s.innerHTML=n.map((({book_image:o,description:e,author:s,list_name:n,title:t})=>`<ul><li><div class="sl-card">\n \n    <img src="${o}" alt="${t}" class="sl-book-img">\n    <div>\n        <h3 class="sl-book-title">${t}</h3>\n        <p class="sl-book-cat">${n}</p>\n        <p class="sl-book-descr">${e}</p>\n        <div class="sl-aut-shops">\n          <p class="sl-book-author">${s}</p>\n          <ul class="sl-eshops">\n            <li><a href="">\n                    <svg width="32px" height="11px">\n                    <use href="./icon.svg#icon-amazon"></use></svg></a></li>\n            <li><a href=""><svg width="16px" height="16px">\n                    <use href="./icon.svg#icon-ibooks"></use></svg></a></li>\n            <li><a href=""><svg width="16px" height="16px">\n                    <use href="./icon.svg#icon-bookshop"></use></svg></a></li>\n        </ul>\n        </div>\n    </div>\n    <button type="button" class="trash-btn js-remove-book">\n    <svg width="16px" height="16px">\n    <use href="./icon.svg#icon-trash"></use></svg>\n    </button>\n    </div>\n            </li>\n      </ul>`)).join(""))})),n("6oj30");
//# sourceMappingURL=shopping-cart.2e8fa3af.js.map