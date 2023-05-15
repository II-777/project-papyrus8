// import axios from 'axios';

// const URL = 'https://books-backend.p.goit.global/books/category-list';

// const categoriesContainer = document.querySelector('.categories-list-js');

// //  Отримуємо масив зі списком категорії з бекенду
// const getCategoriesList = async () => {
//   const response = await axios(URL);
//   return response.data;
// };

// // Функція створення розмітки для меню з категоріями
// function createMurkupForCategoryList(arr) {
//   return arr
//     .map(
//       el =>
//         `<li class="categories-list__item"><a href="#">${el.list_name}</a></li>`
//     )
//     .join('');
// }

// // Рендер розмітки
// getCategoriesList()
//   .then(categoriesListArray =>
//     categoriesContainer.insertAdjacentHTML(
//       'beforeend',
//       createMurkupForCategoryList(categoriesListArray)
//     )
//   )
//   .catch(error => console.log(error));

import { getCategoryList } from '../js/utils/get-category-list';
import { refs } from './refs-elements';

// Функція створення розмітки для меню з категоріями
function createMarkupCategoryList(arr) {
  return arr
    .map(
      ({ list_name }) =>
        `<li class="categories-list__item categories-list__item-name js-category-name-item" data-category='${list_name}'>${list_name}</li>`
    )
    .join('');
}

// Рендер розмітки

createAllCategories();
getCategoryList()
  .then(data =>
    refs.categoriesContainer.insertAdjacentHTML(
      'beforeend',
      createMarkupCategoryList(data)
    )
  )
  .catch(error => console.log(error));

function createAllCategories() {
  const allCategory = document.createElement('li');
  allCategory.classList.add(
    'js-all-categories',
    'js-category-name-item',
    'categories-list__item',
    'category-active'
  );
  allCategory.textContent = 'All categories';
  refs.categoriesContainer.prepend(allCategory);
}