// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "linkedin-clone-20c26.firebaseapp.com",
  projectId: "linkedin-clone-20c26",
  storageBucket: "linkedin-clone-20c26.appspot.com",
  messagingSenderId: "560256258098",
  appId: "1:560256258098:web:05e61489070001394dac2b",
  measurementId: "G-GGNFKCK3JS",
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
const db = getFirestore();
const auth = getAuth();
//google authentification
const provider = new GoogleAuthProvider();
const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {})
    .catch((error) => {
      alert("Failed to login witn Google", error);
    });
};
export default firebaseApp;
export { auth, db, signInWithGoogle };
