import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { ref, set } from "firebase/database";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { auth, database } from "./auth-config-firebase";
import { onCloseModalLogin } from "./modal-login";
import { refs } from "../../refs-elements";

export function onClickSignUp (e) {

  const username = document.querySelector('[name="username"]').value
  const email = document.querySelector('[name="email"]').value
  const password = document.querySelector('[name="password"]').value

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    set(ref(database, 'users/' + user.uid), {
      username,
      email,
    })
    Notify.success('Пользователь зарегистрирован!');
    onCloseModalLogin();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message; 
    Notify.failure(errorMessage);
  });
};

  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      refs.btnOpenModalLogin.textContent = 'Log out';
      console.log('Вошел зарегистрированный пользователь');
    } else {
    }
  });

