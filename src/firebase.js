// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5BHdE0je81-m2OlkHX6-Bv5V9f-Nidns",
  authDomain: "whatsapp-5dc35.firebaseapp.com",
  projectId: "whatsapp-5dc35",
  storageBucket: "whatsapp-5dc35.appspot.com",
  messagingSenderId: "841237099192",
  appId: "1:841237099192:web:3760c903382a49e0567a4d",
  measurementId: "G-N9JS63NK98",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
