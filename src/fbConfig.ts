// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGOh1uU9jrdBwmNYGLygQwDRiAiCCmXRA",
  authDomain: "todo-30f87.firebaseapp.com",
  projectId: "todo-30f87",
  storageBucket: "todo-30f87.appspot.com",
  messagingSenderId: "257819686610",
  appId: "1:257819686610:web:e3ce1ad2ab9a9859a41f0b",
  measurementId: "G-DD0CE2VNDT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);