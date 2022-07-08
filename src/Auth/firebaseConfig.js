// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBo5M6riLvmkyS8ts_8etj00wuF7nYFU4c",
  authDomain: "netflix-clone-f26fe.firebaseapp.com",
  projectId: "netflix-clone-f26fe",
  storageBucket: "netflix-clone-f26fe.appspot.com",
  messagingSenderId: "1010281995041",
  appId: "1:1010281995041:web:81554fcac53fa0c6edfc60",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  auth,
  onAuthStateChanged,
}

export default db
