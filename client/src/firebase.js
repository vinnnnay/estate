// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-512c3.firebaseapp.com",
  projectId: "mern-estate-512c3",
  storageBucket: "mern-estate-512c3.firebasestorage.app",
  messagingSenderId: "1039219352314",
  appId: "1:1039219352314:web:a3c7613e32f707eca85f43"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);