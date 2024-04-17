// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , isSignInWithEmailLink , signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-wv7cu5nDcJFVrLtuabvncdR57tb9-wA",
  authDomain: "mobile-mvrs.firebaseapp.com",
  projectId: "mobile-mvrs",
  storageBucket: "mobile-mvrs.appspot.com",
  messagingSenderId: "935045586026",
  appId: "1:935045586026:web:5d5e7865e9dd95dfa33e13"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
