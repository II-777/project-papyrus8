const scrollBtn = document.querySelector('.js-scroll-button');
scrollBtn.addEventListener('click', onScrollBtnClick);
window.addEventListener('scroll', onScroll);

function onScroll() {
  if (scrollY > 100) {
    scrollBtn.classList.remove('visually-hidden-scroll');
  } else {
    scrollBtn.classList.add('visually-hidden-scroll');
  }
}
function onScrollBtnClick() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
