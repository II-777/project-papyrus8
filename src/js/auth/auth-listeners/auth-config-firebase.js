import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyC7Z7_-Y0HZydiU1oV6nn67k_xdA2wTdKw",
  authDomain: "auth-4cd7f.firebaseapp.com",
  projectId: "auth-4cd7f",
  storageBucket: "auth-4cd7f.appspot.com",
  messagingSenderId: "584186100730",
  appId: "1:584186100730:web:7d9867ccbf4b0067e48243",
  databaseURL: "https://auth-4cd7f-default-rtdb.firebaseio.com",
};
  
export  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app)
export const provider = new GoogleAuthProvider();