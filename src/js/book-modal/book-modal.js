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

      const addBook = document.querySelector('#js-book-modal-btn');

      document.querySelector('.book-modal-buy').style.display = 'none';

      const inStorage = basketArr.some(({ _id }) => _id === obj._id);
      if (inStorage) {
        addBook.addEventListener('click', removeFromCart);
        addBook.classList.remove('js-add');
        addBook.classList.add('js-remove');
        document.querySelector('.book-modal-buy').style.display = 'block';
      } else {
        addBook.addEventListener('click', addToCart);
        addBook.classList.add('js-add');
        addBook.classList.remove('js-remove');
        document.querySelector('.book-modal-buy').style.display = 'none';
      }

      function addToCart(evt) {
        const btnAdd = evt.target.classList.contains('js-add');

        if (btnAdd) {
          evt.target.classList.remove('js-add');
          evt.target.classList.add('js-remove');
          document.querySelector('.book-modal-buy').style.display = 'block';

          basketArr.push(obj);
          localStorage.setItem('books', JSON.stringify(basketArr));
        }
      }
      function removeFromCart(evt) {
        const btnRemove = evt.target.classList.contains('js-remove');

        if (btnRemove) {
          evt.target.classList.remove('js-remove');
          evt.target.classList.add('js-add');

          document.querySelector('.book-modal-buy').style.display = 'none';

          basketArr.splice(obj, 1);
          localStorage.setItem('books', JSON.stringify(basketArr));
        }
      }
    })
    .catch(err => console.log(err));
}

// else if (btnRemove) {
//           evt.target.classList.remove('js-remove');
//           evt.target.classList.add('js-add');

//           document.querySelector('.book-modal-buy').style.display = 'none';

//           const inStorageRemove = basketArr.some(({ _id }) => _id === obj._id);

//           if (inStorageRemove) {
//             basketArr.some(({ _id }) => {
//               basketArr.splice(basketArr.indexOf(_id), 1);
//               localStorage.removeItem('books', JSON.stringify(basketArr));
//             });
//           } else {
//             evt.target.classList.remove('js-remove');
//             evt.target.classList.add('js-add');
//             return;
//           }
//         }
