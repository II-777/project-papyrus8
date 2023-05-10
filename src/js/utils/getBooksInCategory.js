import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { instanceApiSelectedCategory } from '../api-service';

export async function getBooksInCategory(category) {
    try {
        instanceApiSelectedCategory.selectedCategory = category;
        const objectResolve = await instanceApiSelectedCategory.fetchPhoto();
        console.log(objectResolve);
        
        if(objectResolve.length === 0) {
          return Notify.failure('Sorry, there are no books matching your search query. Please try again.')
        }
        
      } catch(error) {
        console.log(error.message);
      } 
}