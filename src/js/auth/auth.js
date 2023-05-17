import { auth } from "./auth-listeners/auth-config-firebase";
import { onAuthStateChanged } from "firebase/auth";

import { refs } from "../refs-elements";
import { onOpenModalLogin, onCloseModalLogin } from "./auth-listeners/modal-login";
import { onClickSignUp } from "./auth-listeners/on-click-sign-up";
import { onClickSignIn } from "./auth-listeners/on-click-sign-in";
import { onClickGoogle } from "./auth-listeners/on-click-google";

refs.btnOpenModalLogin.addEventListener('click', onOpenModalLogin);
refs.btnCloseModalLogin.addEventListener('click', onCloseModalLogin);
refs.btnSignUp.addEventListener('click', onClickSignUp);
refs.btnSignIn.addEventListener('click', onClickSignIn);
refs.btnGoogle.addEventListener('click', onClickGoogle);

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    refs.btnOpenModalLogin.textContent = 'Log out';
    if(refs.headerNav.getAttribute('style')){
        refs.headerNav.removeAttribute('style')
      }
  } else {
    refs.headerNav.style.visibility = "hidden";
  }
}
);

