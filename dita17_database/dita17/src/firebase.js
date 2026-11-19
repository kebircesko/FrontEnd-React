// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNnSkR90260NJDdeIT7wYPQd2wfKP2cL0",
  authDomain: "dita17-database.firebaseapp.com",
  projectId: "dita17-database",
  storageBucket: "dita17-database.firebasestorage.app",
  messagingSenderId: "86983909861",
  appId: "1:86983909861:web:367a42df3183fee5f64f0c",
  measurementId: "G-KVRXWRDWJ9"
};

export const firebaseConfigured = !Object.values(firebaseConfig).some((value) =>
  value.startsWith('VENDOS_')
);

const app = firebaseConfigured ? initializeApp(firebaseConfig) : null;
export const db = app ? getFirestore(app) : null;
