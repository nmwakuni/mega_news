// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "my-blog-44084.firebaseapp.com",
  projectId: "my-blog-44084",
  storageBucket: "my-blog-44084.appspot.com",
  messagingSenderId: "770289295649",
  appId: "1:770289295649:web:983883757331759bfe9e60",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

