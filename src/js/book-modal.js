import './utils/get-books-id';
import * as basicLightbox from 'basiclightbox';

const book = document.querySelector('.home-category-books-list');

book.addEventListener('click', onClick, { closable: true });

function onClick(evt) {
  //   evt.preventDefault();

  if (evt.target.classList.contains('home-books-category-item')) {
    return;
  }
  function getDetails(details) {
    return details.map(({}) =>
      basicLightbox
        .create(
          `<div class="book-modal">
      <img src="" alt="" />
      <h2></h2>
      <h3></h3>
      <p></p>
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
        .show()
    );
  }
}
