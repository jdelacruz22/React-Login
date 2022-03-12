// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZkUoilxnWi8DsQJEAqtscqIMIqTZdkzs",
  authDomain: "react-login-2aa49.firebaseapp.com",
  projectId: "react-login-2aa49",
  storageBucket: "react-login-2aa49.appspot.com",
  messagingSenderId: "916606637070",
  appId: "1:916606637070:web:fe72e637bcb3d945da585f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};

