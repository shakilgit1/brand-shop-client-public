// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3YvLGfwH9buT3HCaOsogT2qlNp4NeUBQ",
  authDomain: "brand-shop-website.firebaseapp.com",
  projectId: "brand-shop-website",
  storageBucket: "brand-shop-website.appspot.com",
  messagingSenderId: "713845801971",
  appId: "1:713845801971:web:7759d2a07ce8f6babac886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;