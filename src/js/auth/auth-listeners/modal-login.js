import { refs } from "../../refs-elements";
import { onClickLogOut } from "./on-click-log-out";

export function onOpenModalLogin(e){
  if(e.target.textContent === 'Log out'){
    onClickLogOut();
    refs.btnOpenModalLogin.textContent = 'Sign in';
    return
  }
  refs.modalLogin.removeAttribute("hidden");
};

export function onCloseModalLogin(){
  refs.modalLogin.setAttribute("hidden", true);
};
