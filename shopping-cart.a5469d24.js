function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"kkKHF":"shopping-cart.a5469d24.js","ljMJW":"save-the-children.afa9e55b.png","gY1tF":"project-hope.6b951dc9.png","ibwo6":"international-medical-corps.38e7f653.png","8dNy0":"razom.61fc7ccd.png","ft6U1":"action-against-hunger.2a8c3c0d.png","3PaSI":"serhiy-prytula.69cae55e.png","hMNVA":"united24.7e58352b.png","eK3Ks":"medecins-sans-frontieres.9cc61963.png","kFlNH":"world-vision.544fa60d.png","cZUbX":"save-the-children2x.688b6dc7.png","dZnsA":"project-hope2x.ee6ab1e6.png","bwGiv":"international-medical-corps2x.2c438457.png","e2COv":"razom2x.49347143.png","8DGUa":"action-against-hunger2x.68b93551.png","bACnJ":"serhiy-prytula2x.b3afcdef.png","iBcPS":"united24-2x.d41967f5.png","bhhC2":"medecins-sans-frontieres2x.b0544e06.png","3Dl6E":"world-vision2x.01220224.png","kqMTO":"icon.6c821e0f.svg","8mBJW":"books-shopping.fe215912.png"}'));const s={spinner:document.querySelector(".centered-element"),homeCategoryBooksList:document.querySelector(".js-home-category-books-list"),homeObserverTarget:document.querySelector(".js-guard"),homeMainScrollUp:document.querySelector(".js-home-main-scroll-up"),homeButtonsSeeMore:document.getElementsByClassName("home-see-more-btn"),homeMainTitle:document.querySelector(".home-main-title"),homeMainTitleAccent:document.querySelector(".home-main-title-accent"),homeBookTitles:document.getElementsByClassName("home-books-book-title"),categoriesList:document.querySelector(".categories-list"),categoriesContainer:document.querySelector(".js-categories-list"),categoriesContainerItem:document.querySelector(".js-categories-list-item"),toggleEl:document.querySelector("#theme-switcher"),bodyEl:document.querySelector("body"),switcherEl:document.querySelector(".js-dark-switcher"),categoryAllCategories:document.querySelector(".js-all-categories"),btnOpenModalLogin:document.querySelector(".header__menu-login"),modalLogin:document.querySelector("#login-modal"),btnCloseModalLogin:document.querySelector(".modal-close-btn"),btnSignUp:document.querySelector('[data-sign="up"]'),btnSignIn:document.querySelector('[data-sign="in"]'),btnGoogle:document.querySelector('[name="submitUpBtn"]'),switcherCircle:document.querySelector(".switcher-input"),btnOpenBurgerMenu:document.querySelector(".js-open-menu"),headerNav:document.querySelector(".header__nav"),supportUkraineAside:document.querySelector(".support-box"),headerHomeBtn:document.querySelector(".js-nav__list-home"),headerShoppingListBtn:document.querySelector(".js-nav__list-sl")};let l=localStorage.getItem("user-theme")||"light";window.addEventListener("load",(function(){"dark"===localStorage.getItem("user-theme")&&s.bodyEl.classList.add("dark-theme")})),s.toggleEl.addEventListener("click",(function(){l="light"===l?"dark":"light",localStorage.setItem("user-theme",l),s.bodyEl.classList.toggle("dark-theme")}));const a=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),u=document.querySelector(".js-menu-container");a.addEventListener("click",(function(){document.body.style.overflow="hidden",a.classList.add("is-open"),u.classList.add("is-open"),a.classList.contains("is-open")&&(c.classList.add("is-open"),c.classList.toggle("block"),a.style.display="none")})),c.addEventListener("click",(function(){document.body.style.overflow="auto",a.classList.remove("is-open"),c.classList.toggle("block"),c.classList.remove("is-open"),u.classList.remove("is-open"),a.style.display="block"}));getComputedStyle(c).display;var d;d=new URL(i("kyEFX").resolve("ljMJW"),import.meta.url).toString();var m;m=new URL(i("kyEFX").resolve("gY1tF"),import.meta.url).toString();var g;g=new URL(i("kyEFX").resolve("ibwo6"),import.meta.url).toString();var p;p=new URL(i("kyEFX").resolve("8dNy0"),import.meta.url).toString();var h;h=new URL(i("kyEFX").resolve("ft6U1"),import.meta.url).toString();var y;y=new URL(i("kyEFX").resolve("3PaSI"),import.meta.url).toString();var v;v=new URL(i("kyEFX").resolve("hMNVA"),import.meta.url).toString();var S;S=new URL(i("kyEFX").resolve("eK3Ks"),import.meta.url).toString();var b;b=new URL(i("kyEFX").resolve("kFlNH"),import.meta.url).toString();var f;f=new URL(i("kyEFX").resolve("cZUbX"),import.meta.url).toString();var w;w=new URL(i("kyEFX").resolve("dZnsA"),import.meta.url).toString();var k;k=new URL(i("kyEFX").resolve("bwGiv"),import.meta.url).toString();var E;E=new URL(i("kyEFX").resolve("e2COv"),import.meta.url).toString();var _;_=new URL(i("kyEFX").resolve("8DGUa"),import.meta.url).toString();var L;L=new URL(i("kyEFX").resolve("bACnJ"),import.meta.url).toString();var H;H=new URL(i("kyEFX").resolve("iBcPS"),import.meta.url).toString();var F;F=new URL(i("kyEFX").resolve("bhhC2"),import.meta.url).toString();var R;R=new URL(i("kyEFX").resolve("3Dl6E"),import.meta.url).toString();const x=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:t(d),img2x:t(f)},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:t(m),img2x:t(w)},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:t(g),img2x:t(k)},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:t(p),img2x:t(E)},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:t(h),img2x:t(_)},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:t(y),img2x:t(L)},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:t(v),img2x:t(H)},{title:"Medecins Sans Frontieres",url:"https://www.msf.org/ukraine",img:t(S),img2x:t(F)},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:t(b),img2x:t(R)}],q=document.querySelector(".js-support"),A=x.map((({title:e,url:t,img:n,img2x:o},r)=>`<li class="support-link js-support">\n        <a class="js-target" href="${t}" target="_blank">\n          <span class="support-number">${String(r+1).padStart(2,"0")}\n          <img class="support-img" srcset="${n} 1x, ${o} 2x"\n          src="${n}" alt="${e}"/></span>\n        </a>\n      </li>`)).join("");q.insertAdjacentHTML("beforeend",A),q.addEventListener("click",(function(e){if(!e.target.classList.contains("js-support"))return}));let U=0,j=6,M=1;const X=document.querySelector(".slider-container"),$=document.querySelector(".support-list"),C=document.querySelector(".slider-button"),O=document.querySelectorAll(".support-link");let T=O.length,B=J();const N=M*B;O.forEach((e=>{e.style.minHeight=`${B}px`})),C.addEventListener("click",(()=>{(function(){const e=window.innerWidth;return e>=1440?T-(Math.abs(U)+j*B)/75:e>=768?T-(Math.abs(U)+j*B)/73:T-(Math.abs(U)+j*B)/55})()>=M?U-=N:U=0,$.style.transition="transform 0.3s ease-out",I(),setTimeout((()=>{$.style.transition=""}),300)})),window.addEventListener("resize",(()=>{B=J(),O.forEach((e=>{e.style.minHeight=`${B}px`})),T=O.length,I()}));const I=()=>{$.style.transform=`translateY(${U}px)`};function J(){window.innerWidth;return j=6,M=1,X.clientHeight/j}var W;W=new URL(i("kyEFX").resolve("kqMTO"),import.meta.url).toString();var P;P=new URL(i("kyEFX").resolve("8mBJW"),import.meta.url).toString();const z=document.querySelector(".js-sl"),D=`<div class="empty-cart">\n    <p class="sl-message">This page is empty, add some books and proceed to order.</p>\n    <img src="${t(P)}" alt="books">\n  </div>`;let G=JSON.parse(localStorage.getItem("books"));function K(){if(G){z.innerHTML=G.map((({_id:e,book_image:n,description:o,author:r,list_name:i,title:s,buy_links:l})=>{const a=l[0].url,c=l[1].url,u=l[4].url;return`<li><div class="sl-card" data-id=${e}>\n      <img src="${n}" alt="${s}" class="sl-book-img">\n      <div class="sl-book-info">\n          <h3 class="sl-book-title">${s}</h3>\n          <p class="sl-book-cat">${i}</p>\n          <p class="sl-book-descr">${o}</p>\n          <div class="sl-aut-shops">\n            <p class="sl-book-author">${r}</p>\n            <ul class="sl-eshops">\n              <li><a target="_blank" href="${a}">\n                      <svg class="sl-amazon" width="32px" height="11px">\n                      <use href="${t(W)}#icon-amazon"></use></svg></a></li>\n              <li><a target="_blank" href="${c}"><svg class="sl-ibooks" width="16px" height="16px">\n                      <use href="${t(W)}#icon-ibooks"></use></svg></a></li>\n              <li><a target="_blank" href="${u}"><svg class="sl-bookshop" width="16px" height="16px">\n                      <use href="${t(W)}#icon-bookshop"></use></svg></a></li>\n            </ul>\n          </div>\n      </div>\n      <button type="button" class="trash-btn js-remove-book">\n      <svg width="16px" height="16px">\n      <use href="${t(W)}#icon-trash"></use></svg>\n      </button>\n      </div>\n    </li>`})).join("");z.querySelectorAll(".js-remove-book").forEach((e=>e.addEventListener("click",Z)))}else z.innerHTML=D}function Z(e){const t=e.target.closest(".sl-card");t.classList.add("removing"),t.addEventListener("transitionend",(()=>{const e=t.dataset.id;G=G.filter((t=>t._id!==e)),localStorage.setItem("books",JSON.stringify(G)),G.length?K():z.innerHTML=D}))}K(),"/shopping-cart.html"===window.location.pathname&&window.screen.width<1440&&(s.supportUkraineAside.style.display="none"),"/shopping-cart.html"===window.location.pathname&&(s.headerHomeBtn.classList.remove("current"),s.headerShoppingListBtn.classList.add("current"));let Y=window.innerWidth;addEventListener("resize",(function(e){const t=window.innerWidth;(t>=768&&Y<768||t<768&&Y>=768||t>=1440&&Y<1440||t<1440&&Y>=1440)&&location.reload()}));
//# sourceMappingURL=shopping-cart.a5469d24.js.map
