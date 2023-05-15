import { signOut } from "firebase/auth";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { auth } from "./auth-config-firebase";

export function onClickLogOut() {
  signOut(auth).then(() => {
    Notify.success('Пользователь вышел из сис-мы')

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    Notify.failure(errorMessage);
  });
}