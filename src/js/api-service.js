import axios from 'axios';
import {Spinner} from 'spin.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { refs } from './refs-elements';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

const opts = {
  zIndex: 100,
};
let spinner = new Spinner(opts);

class ApiBookService {
  constructor() {
  }

  async getCategoryList() {
    spinner.spin(refs.spinner);
  
    try {
      const response = await axios('category-list')
      spinner.stop()

      return response.data;
    } catch(error) {
      spinner.stop()
      Notify.failure('Sorry, there are no books matching your search query. Please try again.')
      
      return error;
    }
  };

  async getCategoryTopBooks() {
    spinner.spin(refs.spinner);
  
    try {
      const response = await axios('top-books')
      spinner.stop()

      return response.data;
    } catch(error) {
      spinner.stop()
      Notify.failure('Sorry, there are no books matching your search query. Please try again.')

      return error;
    }
  };

  async getBooksInCategory(category) {
    spinner.spin(refs.spinner);
  
    try {
      const response = await axios(`category?category=${category}`)
      spinner.stop()

      return response.data;
    } catch(error) {
      spinner.stop()
      Notify.failure('Sorry, there are no books matching your search query. Please try again.')

      return error;
    }
  };

  async getBookOnId(id) {
    spinner.spin(refs.spinner);
  
    try {
      const response = await axios(`${id}`)
      spinner.stop()

      return response.data;
    } catch(error) {
      spinner.stop()
      Notify.failure('Sorry, there are no books matching your search query. Please try again.')

      return error;
    }
  };
};

export const fetchBooks = new ApiBookService();
