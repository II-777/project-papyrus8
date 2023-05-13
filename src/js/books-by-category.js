import { getBooksInCategory } from '../js/utils/get-books-in-category';
import { refs } from './refs-elements';
import { observer } from './home-best-sellers';
const container = document.querySelector('.home-main-by-category');
const mainTitle = document.querySelector('.home-main-title');
refs.homeCategoryBooksList.addEventListener('click', onBtnMoreClick);

function onBtnMoreClick(evt) {
  if (!evt.target.classList.contains('js-btn-more')) {
    return;
  }

  refs.homeCategoryBooksList.innerHTML = '';
  mainTitle.textContent = '';
  observer.unobserve(refs.homeObserverTarget);
  const categoryName = evt.target.dataset.category;

  addCategoryTitleAccent(categoryName);

  getBooksInCategory(categoryName)
    .then(data =>
      refs.homeCategoryBooksList.insertAdjacentHTML(
        'beforeend',
        createMarkup(data)
      )
    )
    .catch(err => console.log(err));
}

function createMarkup(obj) {
  let bookTitleLength = 28;
  let authorLength = 45;
  if (window.screen.width >= 768 && window.screen.width < 1440) {
    bookTitleLength = 23;
    authorLength = 40;
  } else if (window.screen.width >= 1440) {
    bookTitleLength = 18;
    authorLength = 35;
  }
  return obj
    .map(({ author, book_image, title }) => {
      title.length > bookTitleLength
        ? (title = title.slice(0, bookTitleLength - 3) + '...')
        : title;
      author.length > authorLength
        ? (author = author.slice(0, authorLength - 3) + '...')
        : author;
      return `<li class="home-books-item">
                <img class="home-books-book-picture" src="${book_image}" alt="${title}" />
                <p class="home-books-book-title">${title}</p>
                <p class="home-books-book-author">${author}</p>
              </li>`;
    })
    .join('');
}

function addCategoryTitleAccent(title) {
  const arrCategoryName = title.split(' ');
  const accentWord = arrCategoryName[arrCategoryName.length - 1];
  arrCategoryName.pop();
  const mainTitlePrimary = arrCategoryName.join(' ');

  const titleCategory = document.createElement('span');
  titleCategory.classList.add('home-main-title');
  titleCategory.textContent = mainTitlePrimary;
  const accentCategoryWord = document.createElement('span');
  accentCategoryWord.classList.add('home-main-title-accent', 'accent-word');
  accentCategoryWord.textContent = accentWord;

  container.prepend(accentCategoryWord);
  container.prepend(titleCategory);
}
