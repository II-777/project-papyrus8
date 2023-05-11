import { getTopBooks } from './utils/get-top-books';
import { refs } from './refs-elements';
let startCategory = 0;
let endCategory;
function createHomeMainSection() {
  getTopBooks()
    .then(data => {
      refs.homeCategoryBooksList.insertAdjacentHTML(
        'beforeend',
        createCategoryBooksList(data)
      );
      if (startCategory >= 4) {
        const { height: cardHeight } =
          refs.homeCategoryBooksList.firstElementChild.getBoundingClientRect();
        window.scrollBy({
          top: cardHeight * 1,
          behavior: 'smooth',
        });
      }
    })
    .catch(err => console.log(err));
}
createHomeMainSection();

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
  if (startCategory < endCategory) {
    console.log(`start ${startCategory}, end ${endCategory}`);
    startCategory += 4;
    createHomeMainSection();
  } else {
    startCategory = 0;
    console.log(`start ${startCategory}, end ${endCategory}`);
    refs.homeMainScroll.style.transform = 'rotate(0deg)';
  }
}
