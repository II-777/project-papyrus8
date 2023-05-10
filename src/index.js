import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getCategoryList } from '../utils/getCategoryList';
import { getTopBooks } from '../utils/getTopBooks';
import { getBooksInCategory } from '../utils/getBooksInCategory';
import { getBookId } from '../utils/getBooksId';

getCategoryList();
getTopBooks();
const category = 'Series Books'
getBooksInCategory(category);
const id = '643282b3e85766588626a1a8'
getBookId(id);