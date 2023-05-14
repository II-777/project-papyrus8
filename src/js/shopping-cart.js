import icon from '../images/icon.svg'
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const removeBtn = document.querySelector('.js-remove-book')
const slPage = document.querySelector('.js-sl')

const url = 'https://books-backend.p.goit.global/books/category?category=Hardcover Fiction';
function getBooks() {
    fetch(url)
  .then(response => response.json())
  .then(data => {
    // Зберігаємо книги в localStorage
    localStorage.setItem('books', JSON.stringify(data));
  })
  .catch(error => {
    console.log(error);
  });
}
getBooks()

// Отримуємо дані з localStorage
let booksData = JSON.parse(localStorage.getItem('books')) || [];

console.log(booksData);

function renderPage() {
    if (booksData) {
      slPage.innerHTML = createCardMarkup(booksData) 
    } 
}
renderPage()

function createCardMarkup(booksData) {
    return booksData.map(({book_image, description, author, list_name, title}) => 
    `<li><div class="sl-card"> 
    <img src="${book_image}" alt="${title}" class="sl-book-img">
    <div class="sl-book-info">
        <h3 class="sl-book-title">${title}</h3>
        <p class="sl-book-cat">${list_name}</p>
        <p class="sl-book-descr">${description}</p>
        <div class="sl-aut-shops">
          <p class="sl-book-author">${author}</p>
          <ul class="sl-eshops">
            <li><a href="">
                    <svg class="sl-amazon" width="32px" height="11px">
                    <use href="${icon}#icon-amazon"></use></svg></a></li>
            <li><a href=""><svg class="sl-ibooks" width="16px" height="16px">
                    <use href="${icon}#icon-ibooks"></use></svg></a></li>
            <li><a href=""><svg class="sl-bookshop" width="16px" height="16px">
                    <use href="${icon}#icon-bookshop"></use></svg></a></li>
        </ul>
        </div>
    </div>
    <button type="button" class="trash-btn js-remove-book">
    <svg width="16px" height="16px">
    <use href="${icon}#icon-trash"></use></svg>
    </button>
    </div>
            </li>
      `).join('')
} 
//  Removing a book from shopping list 

removeBtn.addEventListener('click', removeBookFromCart);

function removeBookFromCart(event) {
  const button = event.target;
  const card = button.closest('.sl-card');
  const title = card.querySelector('.sl-book-title').textContent;

  booksData = booksData.filter(book => book.title !== title);
  
  renderPage();
}

removeBtn.addEventListener('click', removeBookFromCart);

// Pagination

const container = document.getElementById('pagination');
const options = {
  totalItems: 200, 
  itemsPerPage: 4, 
  visiblePages: 3,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
  },
}

const pagination = new Pagination(container, options);
