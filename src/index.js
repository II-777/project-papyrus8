import { createHomeMainSection } from './js/home-best-sellers';

//все нижче можна видалити, зроблено щоб бачили у консолі, що повертається
import { getCategoryList } from './js/utils/get-category-list';
import { getBookId } from './js/utils/get-books-id';
import { getBooksInCategory } from './js/utils/get-books-in-category';
import { getTopBooks } from './js/utils/get-top-books';

getCategoryList();
getTopBooks();
const category = 'Business Books';
getBooksInCategory(category);
const id = '643282b1e85766588626a0d6';
getBookId(id);
