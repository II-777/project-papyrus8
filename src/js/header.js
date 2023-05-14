const toggleEl = document.querySelector('#theme-switcher');
const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('.header__container');
const shoppingEl = document.querySelector('.js-icon');
const switcherEl = document.querySelector('.js-dark-switcher');
const menuDarkEl = document.querySelector('.mobile-menu-open-icon');
/*const btnMoreEl = document.querySelector('.home-see-more-btn');*/
const logoEl = document.querySelector('.header__logo-name');


/*if (defaultTheme) {
  bodyEl.classList.add(defaultTheme);
}*/

toggleEl.addEventListener('click', switchTheme);

function switchTheme(e) {
  console.log(e.currentTarget);
  toggleEl.classList.toggle('dark-switcher');
    bodyEl.classList.toggle('dark-theme');
    headerEl.classList.toggle('dark');
    logoEl.classList.toggle('dark__icon');
  shoppingEl.classList.toggle('dark__icon');
  switcherEl.classList.toggle('dark-switcher');
  menuDarkEl.classList.toggle('dark__menu');
 /* btnMoreEl.classList.toggle('dark-button');*/


   
}

 
