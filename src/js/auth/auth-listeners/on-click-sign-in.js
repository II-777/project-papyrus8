import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { ref, update } from "firebase/database";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { auth, database } from "./auth-config-firebase";
import { refs } from "../../refs-elements";

export function onClickSignIn(e) {

  const email = document.querySelector('[name="email"]').value
  const password = document.querySelector('[name="password"]').value

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;

    const dt = new Date();
    update(ref(database, 'users/' + user.uid), {
      last_login: dt,
    })

    Notify.success('Пользователь вошел!')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    Notify.failure(errorMessage);
});

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    refs.btnOpenModalLogin.textContent = 'Log out';
    refs.headerNav.removeAttribute("hidden");
    console.log('Вошел зарегистрированный пользователь');
  } else {
  }})
};
