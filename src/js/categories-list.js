import axios from 'axios';

const URL = 'https://books-backend.p.goit.global/books/category-list';

const categoriesContainer = document.querySelector('.categories-list-js');

//  Отримуємо масив зі списком категорії з бекенду
const getCategoriesList = async () => {
  const response = await axios(URL);
  return response.data;
};

// Функція створення розмітки для меню з категоріями
function createMurkupForCategoryList(arr) {
  return arr
    .map(
      el =>
        `<li class="categories-list__item"><p data-category='${all-categories}'>${all-categories}'</p></li>`
    )
    .join('');
}

// Рендер розмітки
getCategoriesList()
  .then(categoriesListArray =>
    categoriesContainer.insertAdjacentHTML(
      'beforeend',
      createMurkupForCategoryList(categoriesListArray)
    )
  )
  .catch(error => console.log(error));

  