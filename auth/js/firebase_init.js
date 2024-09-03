// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAjmCHBvta6k1mD7xhLEryowlf-sKz_3U",
  authDomain: "survive-agency.firebaseapp.com",
  projectId: "survive-agency",
  storageBucket: "survive-agency.appspot.com",
  messagingSenderId: "760179885969",
  appId: "1:760179885969:web:c51ed3aab2eb209bfd3c30",
  measurementId: "G-NNW202E0P3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
