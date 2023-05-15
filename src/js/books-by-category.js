import { getBooksInCategory } from '../js/utils/get-books-in-category';
import { refs } from './refs-elements';
import { observer } from './home-best-sellers';

refs.homeCategoryBooksList.addEventListener('click', onBtnMoreClick);
refs.categoriesContainer.addEventListener('click', onCategoryClick);

function onBtnMoreClick(evt) {
  if (!evt.target.classList.contains('js-btn-more')) {
    return;
  }
  refs.homeCategoryBooksList.innerHTML = '';
  observer.unobserve(refs.homeObserverTarget);
  const categoryName = evt.target.dataset.category;

  const arrClass = [...refs.categoriesContainer.children];
  arrClass.map(item => {
    const categ = item.dataset.category;
    item.classList.remove('category-active');
    if (categ === categoryName) {
      item.classList.add('category-active');
    }
  });
  console.log(arrClass[2].dataset.category);

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

function onCategoryClick(evt) {
  if (!evt.target.classList.contains('js-category-name-item')) {
    return;
  }
  const arrClass = [...refs.categoriesContainer.children];
  arrClass.map(item => item.classList.remove('category-active'));
  evt.target.classList.add('category-active');

  console.log(evt.target.textContent.length);

  refs.homeCategoryBooksList.innerHTML = '';
  observer.unobserve(refs.homeObserverTarget);
  const categoryName = evt.target.dataset.category;

  // const title = evt.target;
  // const str = title.textContent.slice(0, 22);

  // if (
  //   evt.target.classList.contains('category-active') &&
  //   evt.target.textContent.length > 25
  // ) {
  //   const reminder = title.textContent.slice(22);
  //   title.setAttribute('data-title', reminder);
  //   title.textContent = str + '...';
  // } else {
  //   const reminder = title.dataset.title;
  //   if (reminder) {
  //     title.textContent = str + reminder;
  //   }
  // }

  if (categoryName) {
    addCategoryTitleAccent(categoryName);

    getBooksInCategory(categoryName)
      .then(data =>
        refs.homeCategoryBooksList.insertAdjacentHTML(
          'beforeend',
          createMarkup(data)
        )
      )
      .catch(err => console.log(err));
  } else {
  }
}

function createMarkup(obj) {
  let bookTitleLength = 28;
  let authorLength = 40;

  if (window.screen.width >= 768 && window.screen.width < 1440) {
    bookTitleLength = 23;
    authorLength = 30;
  } else if (window.screen.width >= 1440) {
    bookTitleLength = 19;
    authorLength = 25;
  }
  return obj
    .map(({ author, book_image, title, _id }) => {
      title.length > bookTitleLength
        ? (title = title.slice(0, bookTitleLength - 3) + '...')
        : title;
      author.length > authorLength
        ? (author = author.slice(0, authorLength - 3) + '...')
        : author;
      return `<li class="home-books-item js-home-books-item" data-id=${_id}>
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
  // const titleCategory = document.createElement('span');
  // titleCategory.classList.add('home-main-title');
  // titleCategory.textContent = mainTitlePrimary;
  // const accentCategoryWord = document.createElement('span');
  // accentCategoryWord.classList.add('home-main-title-accent', 'accent-word');
  // accentCategoryWord.textContent = accentWord;
  // container.prepend(accentCategoryWord);
  // container.prepend(titleCategory);
  refs.homeMainTitle.textContent = mainTitlePrimary;
  refs.homeMainTitleAccent.textContent = accentWord;
}
