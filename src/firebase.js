// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnFElFSkRkdnCbBqZG1CCznucPqo4qbQk",
  authDomain: "realtor-clone-react-d963e.firebaseapp.com",
  projectId: "realtor-clone-react-d963e",
  storageBucket: "realtor-clone-react-d963e.appspot.com",
  messagingSenderId: "1033759606089",
  appId: "1:1033759606089:web:6a90bc18c9f47dc4abc698"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()