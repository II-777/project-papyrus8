import { getTopBooks } from './utils/get-top-books';
const homeCategoryBookList = document.querySelector(
  '.home-category-books-list'
);

export function createHomeMainSection() {
  getTopBooks()
    .then(data => {
      homeCategoryBookList.innerHTML = createCategoryBooksList(data);
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
  const itemMarkup = books.map(({ _id, author, book_image, title }) => {
    return ` 
              <li class="home-books-item" data-id=${_id}>
                <img class="home-books-book-picture" src="${book_image}" alt="${title}" />
                <p class="home-books-book-title">${title}</p>
                <p class="home-books-book-author">${author}</p>
              </li>`;
  });
  if (window.screen.width < 768) {
    return itemMarkup[0];
  } else if (window.screen.width >= 768 && window.screen.width < 1440) {
    let itemTabletMarkup = '';
    for (let i = 0; i < 3; i++) {
      itemTabletMarkup += itemMarkup[i];
    }
    return itemTabletMarkup;
  } else {
    let itemDeskMarkup = '';
    for (let i = 0; i < 5; i++) {
      itemDeskMarkup += itemMarkup[i];
    }
    return itemDeskMarkup;
  }
}
