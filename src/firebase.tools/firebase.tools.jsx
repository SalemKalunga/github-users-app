// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDzqY-F4ITk91z-Ams63N6dCZqrR0in1M",
  authDomain: "github-users-app-a705b.firebaseapp.com",
  projectId: "github-users-app-a705b",
  storageBucket: "github-users-app-a705b.appspot.com",
  messagingSenderId: "171690156471",
  appId: "1:171690156471:web:59e60f2b2758c11b7a8832",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore();
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const goSignInWithGooglePopup = async () => {
  return await signInWithPopup(auth, googleProvider);
};
export const createUserDocumentFromAuthUser = async (
  userOBJ,
  extraData = {}
) => {
  const userDocumentReference = doc(db, "users", userOBJ.uid);
  const userSnapshot = await getDoc(userDocumentReference);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userOBJ;
    const creationDate = new Date();
    try {
      await setDoc(userDocumentReference, {
        displayName,
        email,
        creationDate,
        ...extraData,
      });
    } catch (error) {
      // console.log(error.code);
    }
  }
};
export const createUserDocumentWithEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};