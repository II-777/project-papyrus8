import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { instanceApiServiceTopBooks } from '../api-service';

export async function getTopBooks() {
  try {
    const objectResolve = await instanceApiServiceTopBooks.fetchPhoto();

    if (objectResolve.length === 0) {
      return Notify.failure(
        'Sorry, there are no books matching your search query. Please try again.'
      );
    }

    return objectResolve;
  } catch (error) {
    console.log(error.message);
  }
}
