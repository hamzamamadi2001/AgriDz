// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbStnfER6z_3amEa3qHtqVz8mL4iu5K4Y",
  authDomain: "tasoo9.firebaseapp.com",
  projectId: "tasoo9",
  storageBucket: "tasoo9.appspot.com",
  messagingSenderId: "1048414733357",
  appId: "1:1048414733357:web:28bf402b5f2fc2aac0e4a4",
  measurementId: "G-W33T15Q2R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)