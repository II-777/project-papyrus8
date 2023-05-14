import { getBookId } from './utils/get-books-id';
import * as basicLightbox from 'basiclightbox';
import icon from '../images/icon.svg';

const book = document.querySelector('.js-home-category-books-list');

book.addEventListener('click', onClick);

function onClick(evt) {
  //   console.log(evt.target);
  const bookCard = evt.target.parentNode;
  const bookCardId = bookCard.dataset.id;

  getBookId(bookCardId)
    .then(id => {
      if (bookCard.classList.contains('home-books-item')) {
        basicLightbox
          .create(
            `<div class="book-modal">
    <img src="${id.book_image}" alt="" />
    <h2>${id.title}</h2>
    <h3>${id.author}</h3>
    <p class='book-modal-desc'>${id.description}</p>
    <ul class='icon-book-modal-list'>
      <li>
        <a href="${id.buy_links[0].url}">
          <svg class='icon-book-modal-amazon'><use href="${icon}#icon-amazon"></use></svg>
        </a>
      </li>
      <li>
        <a href="${id.buy_links[1].url}">
          <svg class='icon-book-modal-ibooks'><use href="${icon}#icon-ibooks"></use></svg>
        </a>
      </li>
      <li>
        <a href="${id.buy_links[4].url}">
          <svg class='icon-book-modal-bookshop'><use href="${icon}#icon-bookshop"></use></svg>
        </a>
      </li>
    </ul>
    <button>Add to shopping list</button>
  </div>`
          )
          .show();

        
        localStorage.setItem('book', JSON.stringify(id));

        // book.addEventListener('click', evt => {
        //   // console.log(evt.target);
        //   // const btnClick = evt.target;
        //   console.log(evt.target);
        //   if (bookCard.classList.contains('book-modal-btn')) {
        //     // evt.preventDefault();
        //     // localStorage.setItem('book', JSON.stringify(id));
        //     console.log('Hello');
      }
    })
    .catch(err => console.log(err));

  // localStorage.setItem('book', JSON.stringify(id));
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
