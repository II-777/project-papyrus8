import { getBookId } from '../utils/get-books-id';
import { createMarkup } from './create-modal';
// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
// import icon from '../../images/icon.svg';

const book = document.querySelector('.js-home-category-books-list');
const basketArr = JSON.parse(localStorage.getItem('books')) ?? [];

book.addEventListener('click', onClick);

function onClick(evt) {
  //   console.log(evt.target);
  const bookCard = evt.target.parentNode;
  const bookCardId = bookCard.dataset.id;

  getBookId(bookCardId)
    .then(obj => {
      if (bookCard.classList.contains('js-home-books-item')) {
        createMarkup(obj);
      }
      document.querySelector('.book-modal-buy').style.display = 'none';

      document.addEventListener('click', addToCart);
      // document.addEventListener('click', removeFromCart);

      function addToCart(evt) {
        const btnAdd = evt.target.classList.contains('js-add');
        const btnRemove = evt.target.classList.contains('js-remove');

        if (btnAdd) {
          evt.target.classList.remove('js-add');
          evt.target.classList.add('js-remove');
          document.querySelector('.book-modal-buy').style.display = 'block';

          const inStorageAdd = basketArr.some(({ _id }) => _id === obj._id);
          if (inStorageAdd) {
            return;
          }
          basketArr.push(obj);
          localStorage.setItem('books', JSON.stringify(basketArr));
        } else if (btnRemove) {
          evt.target.classList.remove('js-remove');
          evt.target.classList.add('js-add');
          document.querySelector('.book-modal-buy').style.display = 'none';

          const inStorageRemove = basketArr.some(({ _id }) => _id === obj._id);
          if (inStorageRemove) {
            basketArr.some(({ _id }) => {
              basketArr.splice(basketArr.indexOf(_id), 1);
              localStorage.removeItem('books', JSON.stringify(basketArr));
            });
          } else {
            return;
            // basketArr.push(obj);
            // localStorage.setItem('books', JSON.stringify(basketArr));
          }
        }
      }
    })
    .catch(err => console.log(err));
}
