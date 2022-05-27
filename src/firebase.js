// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth,signInWithEmailAndPassword ,createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import { useEffect, useState } from "react";
// import Login from "./components/login/Login";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJjygIVnJS2r0zR7GmQkVbKd4MwwKdyUU",
  authDomain: "keyboard-3cfd0.firebaseapp.com",
  projectId: "keyboard-3cfd0",
  storageBucket: "keyboard-3cfd0.appspot.com",
  messagingSenderId: "333324275067",
  appId: "1:333324275067:web:c759cdb31ecdfbcc9c41de",
  measurementId: "G-DJKCVC4RH1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth()

export function logout(){
  return signOut(auth)
}


export function signup(email, password){
   return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password){
  return signInWithEmailAndPassword(auth, email, password)
}

export function useAuth(){
  const [current, setUser] = useState()

  useEffect(() => {
   const unsub =  onAuthStateChanged(auth, (user) => setUser(user) )
   return unsub;
  }, [])
  return current;
}