// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMcvtQ4nKMG5QNLdIBO4w0tN4TOo8JT2Y",
  authDomain: "shoes-3bfb8.firebaseapp.com",
  projectId: "shoes-3bfb8",
  storageBucket: "shoes-3bfb8.appspot.com",
  messagingSenderId: "966808228876",
  appId: "1:966808228876:web:993b303e7cb2a66e538a29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
