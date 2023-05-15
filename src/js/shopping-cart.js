import icon from '../images/icon.svg';
import { refs } from './refs-elements';
// // import Pagination from 'tui-pagination';
// // import 'tui-pagination/dist/tui-pagination.css';

const slPage = document.querySelector('.js-sl');

// const url = 'https://books-backend.p.goit.global/books/category?category=Hardcover Fiction';
// function getBooks() {
//     fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     localStorage.setItem('books', JSON.stringify(data));
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }
// getBooks()

// Отримуємо дані з localStorage

let slBooksData = JSON.parse(localStorage.getItem('books')) || [];

console.log(slBooksData);

function renderSlPage() {
  if (slBooksData) {
    slPage.innerHTML = createCardMarkup(slBooksData);
    const removeBtn = slPage.querySelectorAll('.js-remove-book');
    removeBtn.forEach(btn => btn.addEventListener('click', removeBookFromCart));
  }
}
renderSlPage();

//  Removing a book from shopping list

function removeBookFromCart(event) {
  const slTitle = event.target
    .closest('.sl-card')
    .querySelector('.sl-book-title').textContent;

  slBooksData = slBooksData.filter(book => book.title !== slTitle);

  renderSlPage();
}

function createCardMarkup(booksData) {
  return booksData
    .map(({ book_image, description, author, list_name, title, buy_links }) => {
      const amazonUrl = buy_links[0].url;
      const iBooksUrl = buy_links[1].url;
      const bookshopUrl = buy_links[4].url;

      return `<li><div class="sl-card"> 
      <img src="${book_image}" alt="${title}" class="sl-book-img">
      <div class="sl-book-info">
          <h3 class="sl-book-title">${title}</h3>
          <p class="sl-book-cat">${list_name}</p>
          <p class="sl-book-descr">${description}</p>
          <div class="sl-aut-shops">
            <p class="sl-book-author">${author}</p>
            <ul class="sl-eshops">
              <li><a target="_blank" href="${amazonUrl}">
                      <svg class="sl-amazon" width="32px" height="11px">
                      <use href="${icon}#icon-amazon"></use></svg></a></li>
              <li><a target="_blank" href="${iBooksUrl}"><svg class="sl-ibooks" width="16px" height="16px">
                      <use href="${icon}#icon-ibooks"></use></svg></a></li>
              <li><a target="_blank" href="${bookshopUrl}"><svg class="sl-bookshop" width="16px" height="16px">
                      <use href="${icon}#icon-bookshop"></use></svg></a></li>
            </ul>
          </div>
      </div>
      <button type="button" class="trash-btn js-remove-book">
      <svg width="16px" height="16px">
      <use href="${icon}#icon-trash"></use></svg>
      </button>
      </div>
    </li>`;
    })
    .join('');
}

// Pagination

// const container = document.getElementById('pagination');
// const options = {
//   totalItems: 200,
//   itemsPerPage: 4,
//   visiblePages: 3,
//   page: 1,
//   centerAlign: true,
//   firstItemClassName: 'tui-first-child',
//   lastItemClassName: 'tui-last-child',
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//   },
// }

// const pagination = new Pagination(container, options);

console.dir(window);
if (
  window.location.pathname === '/shopping-cart.html' &&
  window.screen.width < 1440
) {
  refs.supportUkraineAside.style.display = 'none';
}
