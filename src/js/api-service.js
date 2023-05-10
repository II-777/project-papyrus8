import axios from 'axios';
import {Spinner} from 'spin.js';

import { refs } from './refs-elements';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

let spinner = new Spinner();

class ApiService {
  constructor(url) {
    this.url = url;
    this.selectedCategory = '';
    this._id = '';
  }

  async fetchPhoto() {
    spinner.spin(refs.spinner);
    
    try {
      const response = await axios.get(`${BASE_URL}${this.url}${this.selectedCategory}${this._id}`)
      spinner.stop()

      return response.data;
    } catch(error) {
      spinner.stop()

      return;
    }
  };

};

export const instanceApiServiceCategoryList = new ApiService('category-list');
export const instanceApiServiceTopBooks = new ApiService('top-books');
export const instanceApiSelectedCategory = new ApiService('category?category=');
export const instanceApiBookID = new ApiService('');


