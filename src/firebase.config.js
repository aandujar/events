// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjbof9iLdnUJMVSuk65JfmEd5kL8_a8y0",
    authDomain: "events-20e60.firebaseapp.com",
    projectId: "events-20e60",
    storageBucket: "events-20e60.firebasestorage.app",
    messagingSenderId: "52315247372",
    appId: "1:52315247372:web:91b48192d946339561ef29"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);