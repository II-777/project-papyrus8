import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { instanceApiBookID } from '../api-service';

export async function getBookId(id) {
    try {
        instanceApiBookID._id = id;
        const objectResolve = await instanceApiBookID.fetchPhoto();

        if(objectResolve.length === 0) {
          return Notify.failure('Sorry, there are no books matching your search query. Please try again.')
        }
        
        return objectResolve
        
      } catch(error) {
        console.log(error.message);
      } 
}