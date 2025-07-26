// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGtN12sF_bVzq-BajQb4sf0l1BOz3qGRE",
  authDomain: "moha-milon-9f25a.firebaseapp.com",
  projectId: "moha-milon-9f25a",
  storageBucket: "moha-milon-9f25a.firebasestorage.app",
  messagingSenderId: "521620052002",
  appId: "1:521620052002:web:48e6ff48771f02b640d27b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;