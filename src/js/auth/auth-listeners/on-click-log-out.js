import { signOut } from "firebase/auth";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { auth } from "./auth-config-firebase";
import { refs } from "../../refs-elements";

export function onClickLogOut() {
  signOut(auth).then(() => {
    Notify.success('Користувач вийшов!');
    refs.headerNav.setAttribute('hidden', true);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    Notify.failure(errorMessage);
  });
}