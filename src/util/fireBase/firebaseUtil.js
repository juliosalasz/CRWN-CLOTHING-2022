import { initializedApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB88Zi0gqKezDEnjarhozj45PqNV9et95g",
  authDomain: "crwn-db-2022-7e970.firebaseapp.com",
  projectId: "crwn-db-2022-7e970",
  storageBucket: "crwn-db-2022-7e970.appspot.com",
  messagingSenderId: "823075752404",
  appId: "1:823075752404:web:059e81154d628399b56e41",
  measurementId: "G-QBRTM8VQTQ",
};

const firebaseApp = initializedApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error Creating the user", error.message);
    }
  }
  return userDocRef;
};
