// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGHGAd61_fa_tgwG8D7Nl7CWxoMN7wFfM",
  authDomain: "kcf-vid-lib.firebaseapp.com",
  projectId: "kcf-vid-lib",
  storageBucket: "kcf-vid-lib.appspot.com",
  messagingSenderId: "932118877082",
  appId: "1:932118877082:web:286071314d1a9a0e9ca023",
  measurementId: "G-DGQJ6QK0QM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
