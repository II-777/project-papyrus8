import { getBookId } from '../utils/get-books-id';
import { createMarkup } from './create-modal';
// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
// import icon from '../../images/icon.svg';

const book = document.querySelector('.js-home-category-books-list');

book.addEventListener('click', onClick);

function onClick(evt) {
  //   console.log(evt.target);
  const bookCard = evt.target.parentNode;
  const bookCardId = bookCard.dataset.id;
  const basketArr = JSON.parse(localStorage.getItem('books')) ?? [];

  getBookId(bookCardId)
    .then(id => {
      if (bookCard.classList.contains('js-home-books-item')) {
        createMarkup(id);
      }

      document.addEventListener('click', addToCart);

      function addToCart(evt) {
        const btn = evt.target.classList.contains('book-modal-btn');
        if (btn) {
          basketArr.push(id);
          localStorage.setItem('books', JSON.stringify(basketArr));
        }
      }
    })
    .catch(err => console.log(err));
}

function findProduct(elem) {
  const productId = Number(elem.closest('.js-home-books-item').dataset.id);

  return getBookId.find(({ id }) => id === productId);
}
// addToCart();
// function addToCart(evt) {
//   const btn = evt.target.closest('book-modal-btn');

//   bookCart.push(id);
//   console.log(bookCart);
//   localStorage.setItem('book', JSON.stringify(bookCart));
// }
// document.addEventListener('click', addToCart);

// function removeFromCart() {}
