import { refs } from './refs-elements';

/*if (defaultTheme) {
  bodyEl.classList.add(defaultTheme);
}*/

refs.toggleEl.addEventListener('click', switchTheme);

function switchTheme(e) {
  console.log(e.currentTarget);
  refs.bodyEl.classList.toggle('dark-theme');
}
