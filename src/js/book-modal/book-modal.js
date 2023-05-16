import { getBookId } from '../utils/get-books-id';
import { createMarkup } from './create-modal';

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
      const inStorage = basketArr.some(({ _id }) => _id === obj._id);
      document.querySelector('.book-modal-buy').style.display = 'none';

      if (inStorage) {
        addBook.addEventListener('click', addToCart);

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
        const inStorage = basketArr.some(({ _id }) => _id === obj._id);

        if (btnAdd) {
          evt.target.classList.remove('js-add');
          evt.target.classList.add('js-remove');
          document.querySelector('.book-modal-buy').style.display = 'block';

          if (inStorage) {
            return;
          }
          basketArr.push(obj);
          localStorage.setItem('books', JSON.stringify(basketArr));
        } else {
          evt.target.classList.remove('js-remove');
          evt.target.classList.add('js-add');

          document.querySelector('.book-modal-buy').style.display = 'none';

          basketArr.map(localBook => {
            if (localBook._id === obj._id) {
              basketArr.splice(basketArr.indexOf(localBook), 1);
              localStorage.setItem('books', JSON.stringify(basketArr));
            }
          });
        }
      }
    })
    .catch(err => console.log(err));
}
// localStorage.clear();
