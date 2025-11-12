// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "linkedin-clone-2a8ac.firebaseapp.com",
  projectId: "linkedin-clone-2a8ac",
  storageBucket: "linkedin-clone-2a8ac.firebasestorage.app",
  messagingSenderId: "420100477170",
  appId: "1:420100477170:web:471b5a2354e1a7e608806b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore(app);

export { app, auth, firestore };
