// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkwr9Pu1v66KqfHVZ8XOq1yyYX6rYGhPw",
  authDomain: "login-page-47bac.firebaseapp.com",
  projectId: "login-page-47bac",
  storageBucket: "login-page-47bac.firebasestorage.app",
  messagingSenderId: "718188949339",
  appId: "1:718188949339:web:80607bd479d19aaa75347e",
  measurementId: "G-609K25PPFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export {auth, db};