import { refs } from './refs-elements';
const toggleEl = document.querySelector('#theme-switcher');
const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('.header__container');
const shoppingEl = document.querySelector('.js-icon');
const switcherEl = document.querySelector('.js-dark-switcher');
const menuDarkEl = document.querySelector('.mobile-menu-open-icon');
const btnMoreEl = document.querySelector('.home-see-more-btn');
const logoEl = document.querySelector('.header__logo-name');

/*if (defaultTheme) {
  bodyEl.classList.add(defaultTheme);
}*/
refs.categoriesList.style.setProperty(
  '--scroll-color',
  'rgba(224, 224, 224, 1);'
);
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
  refs.homeMainTitle.classList.toggle('dark-text');
  for (let element of refs.homeButtonsSeeMore) {
    element.classList.toggle('dark-button');
  }
  for (let element of refs.homeBookTitles) {
    element.classList.toggle('dark-text');
  }
  refs.categoriesList.style.setProperty(
    '--scroll-color',
    'rgba(17, 17, 17, 0.6)'
  );
}
