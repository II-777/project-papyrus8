import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { instanceApiServiceCategoryList } from '../api-service';

export async function getCategoryList() {
  try {
    const objectResolve = await instanceApiServiceCategoryList.fetchPhoto();
    // console.log(objectResolve);

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
