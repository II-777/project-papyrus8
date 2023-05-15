import { renderFormAuth } from "./render-form-auth";
import { authUser } from "./auth-user";
import { refs } from "../refs-elements";


refs.buttonLogin.addEventListener('click', onClickLogin);
async function onClickLogin(e) {

  await renderFormAuth();
  await authUser();
};






