// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg9bvX1TgjASZKd1EkUsLzwc18Eo79hnI",
  authDomain: "netflixgpt-967f7.firebaseapp.com",
  projectId: "netflixgpt-967f7",
  storageBucket: "netflixgpt-967f7.appspot.com",
  messagingSenderId: "695978923929",
  appId: "1:695978923929:web:98a8099967481b5d952508",
  measurementId: "G-ZNQJ70DGSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();