import refs from './refs';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, update } from 'firebase/database';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { modalInstance } from './modal-auth';

const {
  username: usernameEl,
  email: emailEl,
  password: passwordEl,
  signIn: toggleToSignInForm,
  submitInBtn: signInBtn,
  submitUpBtn: signUpBtn,
} = refs.modalForm.elements;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC7Z7_-Y0HZydiU1oV6nn67k_xdA2wTdKw',
  authDomain: 'auth-4cd7f.firebaseapp.com',
  databaseURL: 'https://auth-4cd7f-default-rtdb.firebaseio.com',
  projectId: 'auth-4cd7f',
  storageBucket: 'auth-4cd7f.appspot.com',
  messagingSenderId: '584186100730',
  appId: '1:584186100730:web:7d9867ccbf4b0067e48243',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const auth = getAuth();

signUpBtn.addEventListener('click', onSignUpFormSubmit);
signInBtn.addEventListener('click', onLoginFormSubmit);

export async function onSignUpFormSubmit(e) {
  e.preventDefault();

  const username = usernameEl.value.trim();
  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();

  await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        username,
        email,
      });
      signOut(auth);

      refs.modalForm.reset();

      // Simulate clicking on the specified element.
      triggerEvent(toggleToSignInForm, 'click');

      Notify.success('Signed up!');
    })
    .catch(error => {
      Notify.failure(error.message);
    });
  await updateProfile(auth.currentUser, {
    displayName: username,
  });
}

export async function onLoginFormSubmit(e) {
  e.preventDefault();

  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();

  await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      refs.backdropLoader.classList.add('is-active');

      const user = userCredential.user;
      const currentDate = new Date();

      update(ref(database, 'users/' + user.uid), {
        last_login_date: currentDate,
      });
      modalInstance.close();
      refs.modalForm.reset();

      refs.backdropLoader.classList.remove('is-active');
      Notify.success('Logged in!', {
        timeout: 2500,
      });
    })
    .catch(error => {
      Notify.failure(error.message);
    });
}

onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    refs.headerNavList.hidden = false;
    refs.signUpHeader.hidden = true;
    refs.authorizedHeader.hidden = false;
    refs.headerUsername.textContent = user.displayName;
    refs.pageHeader.classList.add('logged-in');
    refs.signUpMobileBox.hidden = true;
    refs.authorizedMobileBox.hidden = false;
    refs.mobileUsername.textContent = user.displayName;
    refs.mobileMenuContainer.classList.add('logged-in');
  } else {
    // User is signed out
    refs.headerNavList.hidden = true;
    refs.signUpHeader.hidden = false;
    refs.authorizedHeader.hidden = true;
    refs.pageHeader.classList.remove('logged-in');
    refs.logOutBtn.classList.remove('is-active');
    refs.signUpMobileBox.hidden = false;
    refs.authorizedMobileBox.hidden = true;
    refs.mobileMenuContainer.classList.remove('logged-in');
  }
});

refs.logOutBtn.addEventListener('click', onLogOutBtnClick);
refs.logOutMobileBtn.addEventListener('click', onLogOutBtnClick);

function onLogOutBtnClick(e) {
  signOut(auth);
  window.location = 'index.html';
}

function triggerEvent(elem, event) {
  const clickEvent = new Event(event);
  elem.dispatchEvent(clickEvent);
}
