// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {
  getAuth,
  signOut,
  updateEmail,
  updateProfile,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "fakeflix-9416f.firebaseapp.com",
  projectId: "fakeflix-9416f",
  storageBucket: "fakeflix-9416f.appspot.com",
  messagingSenderId: "1050648784179",
  appId: "1:1050648784179:web:354c6b94959fd4e1bc6246"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  signOut,
  auth,
}
