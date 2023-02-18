import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCGHGAd61_fa_tgwG8D7Nl7CWxoMN7wFfM",
  authDomain: "kcf-vid-lib.firebaseapp.com",
  projectId: "kcf-vid-lib",
  storageBucket: "kcf-vid-lib.appspot.com",
  messagingSenderId: "932118877082",
  appId: "1:932118877082:web:549e45aecf4b0e569ca023",
  measurementId: "G-2X4ZBX32CW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
