// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcSjPTnLVN2QTTFfMcEY0_MBP9hefgBOI",
  authDomain: "workplace-fb6f2.firebaseapp.com",
  projectId: "workplace-fb6f2",
  storageBucket: "workplace-fb6f2.appspot.com",
  messagingSenderId: "846699226908",
  appId: "1:846699226908:web:dd3833549ab231310afcd9",
  measurementId: "G-B103JWG5Y7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);
export const storage = getStorage(app);