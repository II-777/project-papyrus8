import { getBookId } from './utils/get-books-id';
import * as basicLightbox from 'basiclightbox';

const book = document.querySelector('.js-home-category-books-list');

book.addEventListener('click', onClick);

function onClick(evt) {
  //   console.log(evt.target);
  const bookCard = evt.target.parentNode;
  const bookCardId = bookCard.dataset.id;

  getBookId(bookCardId).then(id => {
    if (bookCard.classList.contains('home-books-item')) {
      basicLightbox
        .create(
          `<div class="book-modal">
    <img src="${id.book_image}" alt="" />
    <h2>${id.title}</h2>
    <h3>${id.author}</h3>
    <p>${id.description}</p>
    <ul>
      <li>
        <svg><use href="/src/images/icon.svg#icon-amazon"></use></svg>
      </li>
      <li>  
        <svg><use href="/src/images/icon.svg#icon-ibooks"></use></svg>
      </li>
      <li>
        <svg><use href="/src/images/icon.svg#icon-bookshop"></use></svg>
      </li>
    </ul>
    <button>Add to shopping list</button>
  </div>`
        )
        .show();
    }
  });
}

//   return bookCardId.map(
//     ({
//       book_image,
//       title,
//       author,
//       amazon_product_url,
//       book_uri,
//       buy_links,
//     }) => {
// return getBookId(bookCardId).then(book => {

// function getDetails(id) {
//   getBookId(id).then(book => {
//     book.map({
//       book_image,
//       title,
//       author,
//       amazon_product_url,
//       book_uri,
//       buy_links,
//     });
//   });
// }
