import { createHomeMainSection } from './js/home-best-sellers';
import './js/header';
import './js/categories-list.js';
import './js/support-ua';
import './js/home-best-sellers';
import './js/books-by-category';
import './js/book-modal/book-modal';
import './js/window-reload';
import './js/mobile-menu';
import './js/auth/auth.js';
import './js/modal-footer-team';
import './js/burger';
import './js/scroll-up';

import { auth } from './js/auth/auth-listeners/auth-config-firebase';
import { onAuthStateChanged } from "firebase/auth";
import { refs } from './js/refs-elements';

refs.headerNav.style.display = 'none';

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    refs.headerNav.removeAttribute('style')
  } else {
    refs.headerNav.style.display = 'none';
  }
}
);