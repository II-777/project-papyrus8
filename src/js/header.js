import { refs } from "./refs-elements";

const toggleEl = document.querySelector('#theme-switcher');
const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('.header__container');
const shoppingEl = document.querySelector('.js-icon');
const switcherEl = document.querySelector('.js-dark-switcher');
const menuDarkEl = document.querySelector('.mobile-menu-open-icon');
const closeDark=document.querySelector('.mobile-menu-close-icon')


const logoEl = document.querySelector('.header__logo-name');
/*const Theme = {
  LIGHT: 'light',
  DARK:'dark'
}
const currentTheme = 'light';
const nextTheme = currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;*/
toggleEl.addEventListener('click', switchTheme);

function switchTheme(e) {
 
  toggleEl.classList.toggle('dark-switcher');
    bodyEl.classList.toggle('dark-theme');
    headerEl.classList.toggle('dark');
    logoEl.classList.toggle('dark__icon');
  shoppingEl.classList.toggle('dark__icon');
  switcherEl.classList.toggle('dark-switcher');
  menuDarkEl.classList.toggle('dark__menu');
  closeDark.classList.toggle('dark__close');
 /* refs.homeBtnSeeMore.classList.toggle('dark-button');
  refs.homeMainTitle.classList.toggle('dark__text');
  refs.homeMainTitleAccent.classList.toggle('dark__accent');*/
}
refs.toggleEl.addEventListener('click', switchTheme);
export function switchTheme() {
  saveUserTheme === 'light'
    ? (saveUserTheme = 'dark')
    : (saveUserTheme = 'light');

  localStorage.setItem('user-theme', saveUserTheme);
  refs.bodyEl.classList.toggle('dark-theme');
}
