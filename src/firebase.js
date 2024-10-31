// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBT4F3MuGXBDqelszx0yrYG39PceLR7N3M",
  authDomain: "auth-87bac.firebaseapp.com",
  projectId: "auth-87bac",
  storageBucket: "auth-87bac.appspot.com",
  messagingSenderId: "759814177932",
  appId: "1:759814177932:web:2262dc7ebce93c7bede7a9",
  measurementId: "G-YZRBP39NC0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
