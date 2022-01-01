// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4SkAEPhwwYh9mbU7wLXcY45hgVqSh7A4",
  authDomain: "blogproject-8a3b8.firebaseapp.com",
  projectId: "blogproject-8a3b8",
  storageBucket: "blogproject-8a3b8.appspot.com",
  messagingSenderId: "851178245783",
  appId: "1:851178245783:web:fdc344f970e3a6e1f323d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
