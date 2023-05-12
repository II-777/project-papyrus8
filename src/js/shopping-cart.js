
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
    return booksData.map(({book_image, description, author, list_name, title}) => `<ul><li><div class="sl-card">
 
    <img src="${book_image}" alt="${title}" class="sl-book-img">
    <div>
        <h3 class="sl-book-title">${title}</h3>
        <p class="sl-book-cat">${list_name}</p>
        <p class="sl-book-descr">${description}</p>
        <div class="sl-aut-shops">
          <p class="sl-book-author">${author}</p>
          <ul class="sl-eshops">
            <li><a href="">
                    <svg width="32px" height="11px">
                    <use href="./icon.svg#icon-amazon"></use></svg></a></li>
            <li><a href=""><svg width="16px" height="16px">
                    <use href="./icon.svg#icon-ibooks"></use></svg></a></li>
            <li><a href=""><svg width="16px" height="16px">
                    <use href="./icon.svg#icon-bookshop"></use></svg></a></li>
        </ul>
        </div>
    </div>
    <button type="button" class="trash-btn js-remove-book">
    <svg width="16px" height="16px">
    <use href="./icon.svg#icon-trash"></use></svg>
    </button>
    </div>
            </li>
      </ul>`).join('')
} 
