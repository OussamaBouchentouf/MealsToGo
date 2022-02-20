// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBG6rUiiHpHwnn5R2plqyK37au1LhcikHQ",
  authDomain: "mealstogo-fbd93.firebaseapp.com",
  projectId: "mealstogo-fbd93",
  storageBucket: "mealstogo-fbd93.appspot.com",
  messagingSenderId: "586160479526",
  appId: "1:586160479526:web:e38dfd460c345aa5c335e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
