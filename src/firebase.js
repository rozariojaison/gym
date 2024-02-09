// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
 ",
  authDomain: "nextlevelfitnessgy.firebaseapp.com",
  databaseURL: "https://nextlevelfitnessgy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nextlevelfitnessgy",
  storageBucket: "nextlevelfitnessgy.appspot.com",
  de77616",
  measurementId: "G-T364YDX0VN"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//const db = getFirestore(app);
export const database  = getFirestore(app)
export const auth = getAuth(app);
export const db = getFirestore(app);
const perf = getPerformance(app);
export default app
// Useful helpers