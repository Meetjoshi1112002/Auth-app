// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBL3gIBJuhYYg5coA9vN4UWgGmfHw42zE",
  authDomain: "mern-auth-d7bd7.firebaseapp.com",
  projectId: "mern-auth-d7bd7",
  storageBucket: "mern-auth-d7bd7.appspot.com",
  messagingSenderId: "408353065703",
  appId: "1:408353065703:web:47c13d2e3da36ccafaf042"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);