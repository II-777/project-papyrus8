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

