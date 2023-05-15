import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref, set } from "firebase/database";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { auth, database } from "./auth-config-firebase";
import { provider } from "./auth-config-firebase";

export function onClickGoogle() {
    
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        set(ref(database, 'users/' + user.uid), {
          username: user.displayName,
          email: user.email,
        })

        Notify.success('Пользователь зарегистрирован!')
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
};