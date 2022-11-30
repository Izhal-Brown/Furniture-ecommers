import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDBdsv2Rk9cpotgPijw1Ufu3IzTGIzdJnU",
  authDomain: "maltimart-d2430.firebaseapp.com",
  projectId: "maltimart-d2430",
  storageBucket: "maltimart-d2430.appspot.com",
  messagingSenderId: "507214744874",
  appId: "1:507214744874:web:a30f1c1266c42465256253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;