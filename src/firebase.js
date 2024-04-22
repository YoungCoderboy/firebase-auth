// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWvCrTnynsRKMWsnCqtiGyaFsYfTrUveY",
  authDomain: "cc-auth-aca05.firebaseapp.com",
  projectId: "cc-auth-aca05",
  storageBucket: "cc-auth-aca05.appspot.com",
  messagingSenderId: "513065119872",
  appId: "1:513065119872:web:85ed09422e0c1d96c2b665",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();
export default app;
