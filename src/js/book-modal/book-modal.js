import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/auth-listeners/auth-config-firebase";

import { getBookId } from '../utils/get-books-id';
import { createMarkup } from './create-modal';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../auth/auth-listeners/auth-config-firebase';

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
      const authText = document.querySelector('.js-book-modal-authorized');
      const textBuy = document.querySelector('.book-modal-buy');
      textBuy.style.display = 'none';

      const user = auth.currentUser;
      onAuthStateChanged(auth, user => {
        if (!user) {
          // const uid = user.uid;
          textBuy.style.display = 'none';
          addBook.style.display = 'none';
          authText.style.display = 'block';
        } else {
          authText.style.display = 'none';
        }
      });

      if (inStorage) {
        addBook.addEventListener('click', addToCart);

        addBook.classList.remove('js-add');
        addBook.classList.add('js-remove');
        textBuy.style.display = 'block';
      } else {
        addBook.addEventListener('click', addToCart);

        addBook.classList.add('js-add');
        addBook.classList.remove('js-remove');
        textBuy.style.display = 'none';
      
      function addToCart(evt) {
        const btnAdd = evt.target.classList.contains('js-add');
        const inStorage = basketArr.some(({ _id }) => _id === obj._id);
        
        if (btnAdd) {
          evt.target.classList.remove('js-add');
          evt.target.classList.add('js-remove');
          textBuy.style.display = 'block';

          if (inStorage) {
            return;
          }
          basketArr.push(obj);
          localStorage.setItem('books', JSON.stringify(basketArr));
        } else {
          evt.target.classList.remove('js-remove');
          evt.target.classList.add('js-add');

          textBuy.style.display = 'none';

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
