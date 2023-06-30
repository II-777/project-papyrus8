import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { ref, set, update } from "firebase/database";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { auth, database } from "./auth-config-firebase";
// import { provider } from "./auth-config-firebase";
import { onCloseModalLogin } from "./modal-login";
import { refs } from "../../refs-elements";

export function onClickGoogle() {
    if(refs.btnGoogle.textContent === 'SIGN UP'){

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
            onCloseModalLogin();
            Notify.success('Користувач зареєстрован!');
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
          } else {
          }
        }
      );
    }
    if(refs.btnGoogle.textContent === 'SIGN IN'){
        const email = document.querySelector('[name="email"]').value
        const password = document.querySelector('[name="password"]').value

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            const dt = new Date();
            update(ref(database, 'users/' + user.uid), {
            last_login: dt,
            })
            onCloseModalLogin();
            Notify.success('Користувач увійшов!')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            Notify.failure(errorMessage);
        });
    }
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         set(ref(database, 'users/' + user.uid), {
//           username: user.displayName,
//           email: user.email,
//         })

//         Notify.success('Пользователь зарегистрирован!')
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//       }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });


};