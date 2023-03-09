// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { NotificationManager } from "react-notifications";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

console.log(firebaseConfig);
console.log(process.env);
console.log(process.env.REACT_FB_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  const response = await signInWithPopup(auth, provider)
    .then((response) => {
      return response.user;
    })
    .catch((error) => {
      NotificationManager.error(error.message, "Auth error", 5000);
      throw error;
    });
  return response;
};

const apiAuth = {
  signUp: async ({ email, password, name }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    } catch (error) {
      NotificationManager.error(error.message, "Auth error", 5000);
      throw error;
    }
  },

  signIn: async ({ email, password }) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response;
    } catch (error) {
      // NotificationManager.error(error.message, "Auth error", 5000);
      throw error;
    }
  },
};

export default apiAuth;
