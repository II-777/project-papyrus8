import { getTopBooks } from './utils/get-top-books';
import { refs } from './refs-elements';
let startCategory = 0;
let endCategory;
let options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};
export let observer = new IntersectionObserver(scrollByCategoriesDown, options);
export let bestsellers = [];
refs.categoriesContainer.addEventListener('click', onAllCategoriesClick);
function onAllCategoriesClick(evt) {
  if (!evt.target.classList.contains('js-all-categories')) {
    return;
  }
  refs.homeCategoryBooksList.innerHTML = '';
  refs.homeMainTitle.textContent = 'Best sellers';
  refs.homeMainTitleAccent.textContent = 'Books';
  bestSellersToRender();
}
function bestSellersToRender() {
  getTopBooks()
    .then(data => {
      bestsellers = data;
      refs.homeCategoryBooksList.insertAdjacentHTML(
        'beforeend',
        createCategoryBooksList(bestsellers)
      );
      observer.observe(refs.homeObserverTarget);
    })
    .catch(err => console.log(err));
}
bestSellersToRender();
function createCategoryBooksList(bestSellers) {
  endCategory = bestSellers.length;
  return bestSellers
    .slice(startCategory, startCategory + 4)
    .map(({ list_name, books }) => {
      return `<li class="home-books-category-item js-category-item">
        <h3 class="home-books-category-title">${list_name}</h3>
        <ul class="home-books-list">${createBooksList(books)}  </ul>
        <button class="home-see-more-btn js-btn-more" type="button" data-category='${list_name}'>See more</button>
        </li>`;
    })
    .join('');
}
function createBooksList(books) {
  let booksToRender = 1;
  let bookTitleLength = 30;
  if (window.screen.width >= 768 && window.screen.width < 1440) {
    booksToRender = 3;
    bookTitleLength = 23;
  } else if (window.screen.width >= 1440) {
    booksToRender = 5;
    bookTitleLength = 19;
  }

  return books
    .slice(0, booksToRender)
    .map(({ _id, author, book_image, title }) => {
      title.length > bookTitleLength
        ? (title = title.slice(0, bookTitleLength - 3) + '...')
        : title;
      return `  <li class="home-books-item js-home-books-item" data-id=${_id}>
                <img class="home-books-book-picture" src="${book_image}" alt="${title}" />
                <p class="home-books-book-title">${title}</p>
                <p class="home-books-book-author">${author}</p>
              </li>`;
    })
    .join('');
}

function scrollByCategoriesDown() {
  startCategory += 4;
  refs.homeCategoryBooksList.insertAdjacentHTML(
    'beforeend',
    createCategoryBooksList(bestsellers)
  );
}
refs.homeMainScrollUp.addEventListener('click', scrollByCategoriesUp);
function scrollByCategoriesUp() {
  const { height: cardHeight } =
    refs.homeCategoryBooksList.getBoundingClientRect();
  window.scrollBy({
    top: -cardHeight,
    behavior: 'smooth',
  });
  refs.homeMainScrollUp.style.display = 'none';
}
