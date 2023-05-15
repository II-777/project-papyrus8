import icon from '../images/icon.svg'


const slPage = document.querySelector('.js-sl')

// Getting data from local Storage

let slBooksData = JSON.parse(localStorage.getItem('books')) || [];

console.log(slBooksData);

function renderSlPage() {

    if (slBooksData) {
      slPage.innerHTML = createCardMarkup(slBooksData);
      const removeBtn = slPage.querySelectorAll('.js-remove-book');
      removeBtn.forEach(btn => btn.addEventListener('click', removeBookFromCart));
    } 

    if (slBooksData.length === 0) {
      localStorage.clear();
    }
    
}
renderSlPage()

//  Removing a book from shopping list 

function removeBookFromCart(event) {
  const slTitle = event.target.closest('.sl-card').querySelector('.sl-book-title').textContent;

  slBooksData = slBooksData.filter(book => book.title !== slTitle);
  
  renderSlPage();
}

function createCardMarkup(booksData) {
  return booksData.map(({book_image, description, author, list_name, title, buy_links}) => {
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
  }).join('');
}
