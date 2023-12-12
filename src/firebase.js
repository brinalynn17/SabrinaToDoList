// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBneGnJdOrQ8e4hCV3_jOV7g3bH5bSwQRE",
  authDomain: "learning317-5082e.firebaseapp.com",
  projectId: "learning317-5082e",
  storageBucket: "learning317-5082e.appspot.com",
  messagingSenderId: "757671584067",
  appId: "1:757671584067:web:dc5198b67af1a6694bcff6",
  measurementId: "G-SYRN117VKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);