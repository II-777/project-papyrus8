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
    <img src="${id.book_image}" alt="" class="book-modal-img"/>
    <h2 class="book-modal-title">${id.title}</h2>
    <h3 class="book-modal-author">${id.author}</h3>
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
    <button class='book-modal-btn'>Add to shopping list</button>
  </div>`
          )
          .show();
        document.addEventListener('click', addToCart);
        // localStorage.setItem('book', JSON.stringify(id));
        function addToCart(evt) {
          const btn = evt.target.closest('book-modal-btn');

          if (
            localStorage.getItem('book') ===
            localStorage.setItem('book', JSON.stringify(id))
          ) {
            // localStorage.setItem('book', JSON.stringify(id));
            return;
          } else {
            localStorage.setItem('book', JSON.stringify(id));
          }
        }
      }
    })
    .catch(err => console.log(err));
}

// function removeFromCart() {}
