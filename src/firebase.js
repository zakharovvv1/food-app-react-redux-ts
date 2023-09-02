// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA082BCQlxaF-NSjWkdtPBX4et-GBdm6Hs",
  authDomain: "react-food-app-41d37.firebaseapp.com",
  projectId: "react-food-app-41d37",
  storageBucket: "react-food-app-41d37.appspot.com",
  messagingSenderId: "542271928019",
  appId: "1:542271928019:web:a0badd0f1180e7b5f90626",
  measurementId: "G-HY169EYFQC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
console.log("database", database);
