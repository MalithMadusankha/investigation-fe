import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKzGrbmttjYR6s6T8migQctof-Xncbne4",
  authDomain: "helaseku.firebaseapp.com",
  projectId: "helaseku",
  storageBucket: "helaseku.appspot.com",
  messagingSenderId: "196768392794",
  appId: "1:196768392794:web:32b9a45ededd5ae31fda63",
};

firebase.initializeApp(firebaseConfig);

export const Auth = firebase.auth();

// from firebase
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBKzGrbmttjYR6s6T8migQctof-Xncbne4",
//   authDomain: "helaseku.firebaseapp.com",
//   projectId: "helaseku",
//   storageBucket: "helaseku.appspot.com",
//   messagingSenderId: "196768392794",
//   appId: "1:196768392794:web:32b9a45ededd5ae31fda63"
// };

// Initialize Firebase
// const Auth = initializeApp(firebaseConfig);
