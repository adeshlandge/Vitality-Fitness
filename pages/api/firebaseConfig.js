// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnqsE_x5C_3NfOdP5SUho9O-OqTTY4umo",
  authDomain: "vitalityfitness-4190c.firebaseapp.com",
  projectId: "vitalityfitness-4190c",
  storageBucket: "vitalityfitness-4190c.appspot.com",
  messagingSenderId: "808593947893",
  appId: "1:808593947893:web:f17cd3a2b5e01e6b7c59bc",
  measurementId: "G-VB7NBS1RLJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);