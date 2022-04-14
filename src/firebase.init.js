// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc8vzaIBMiOlcSgDjAY5j9AyQE5JsEkQo",
  authDomain: "services-app-c5b47.firebaseapp.com",
  projectId: "services-app-c5b47",
  storageBucket: "services-app-c5b47.appspot.com",
  messagingSenderId: "388657394110",
  appId: "1:388657394110:web:431143d86ba7acb11689ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

export default auth;