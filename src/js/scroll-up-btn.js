window.addEventListener('scroll', handleScroll);

function handleScroll() {
  if (window.pageYOffset > 0) {
    refs.homeMainScrollUp.style.display = 'flex';
  } else {
    refs.homeMainScrollUp.style.display = 'none';
  }
}