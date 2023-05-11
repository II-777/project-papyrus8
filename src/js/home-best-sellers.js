import { getTopBooks } from './utils/get-top-books';
import { refs } from './refs-elements';

export function createHomeMainSection() {
  getTopBooks()
    .then(data => {
      refs.homeCategoryBooksList.innerHTML = createCategoryBooksList(data);
    })
    .catch(err => console.log(err));
}
createHomeMainSection();

function createCategoryBooksList(bestSellers) {
  return bestSellers
    .map(({ list_name, books }) => {
      return `<li class="home-books-category-item">
        <h3 class="home-books-category-title">${list_name}</h3>
        <ul class="home-books-list">${createBooksList(books)}  </ul>
        <button class="home-see-more-btn" type="button" data-category='${list_name}'>See more</button>
        </li>`;
    })
    .join('');
}
function createBooksList(books) {
  let booksToRender = 1;
  let bookTitleLength = 30;
  if (window.screen.width >= 768 && window.screen.width < 1440) {
    booksToRender = 3;
    bookTitleLength = 25;
  } else if (window.screen.width >= 1440) {
    booksToRender = 5;
    bookTitleLength = 20;
  }

  return books
    .slice(0, booksToRender)
    .map(({ _id, author, book_image, title }) => {
      title.length > bookTitleLength
        ? (title = title.slice(0, bookTitleLength - 3) + '...')
        : title;
      return `  <li class="home-books-item" data-id=${_id}>
                <img class="home-books-book-picture" src="${book_image}" alt="${title}" />
                <p class="home-books-book-title">${title}</p>
                <p class="home-books-book-author">${author}</p>
              </li>`;
    })
    .join('');
}

refs.homeMainScroll.addEventListener('click', scrollByCategories);
function scrollByCategories() {
  console.log(`scroll`);
}
