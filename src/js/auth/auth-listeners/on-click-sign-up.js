import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { ref, set } from "firebase/database";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { auth, database } from "./auth-config-firebase";
import { onCloseModalLogin } from "./modal-login";
import { refs } from "../../refs-elements";

export function onClickSignUp (e) {
  refs.btnGoogle.textContent = 'SIGN UP'
  refs.btnSignIn.classList.remove('is-active');
  refs.btnSignUp.classList.add('is-active');
  if(refs.inputName.getAttribute('style')){
    refs.inputName.removeAttribute('style')
  };
  
  // const username = document.querySelector('[name="username"]').value
  // const email = document.querySelector('[name="email"]').value
  // const password = document.querySelector('[name="password"]').value

  // createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   const user = userCredential.user;
  //   set(ref(database, 'users/' + user.uid), {
  //     username,
  //     email,
  //   })
  //   Notify.success('Пользователь зарегистрирован!');
  //   onCloseModalLogin();
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message; 
  //   Notify.failure(errorMessage);
  // });
};




