// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEfnoDpgMwkWf-bfGssnyICNaMBdbjTcg",
  authDomain: "formation-65b40.firebaseapp.com",
  projectId: "formation-65b40",
  storageBucket: "formation-65b40.appspot.com",
  messagingSenderId: "859098767827",
  appId: "1:859098767827:web:60478f5d1e8a04f941cf26",
  measurementId: "G-N465H2JS2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);