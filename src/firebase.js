// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArqUN08p2tDoIZctkZlTudnKI2pSYMLtg",
  authDomain: "nextlevelfitnessgy.firebaseapp.com",
  databaseURL: "https://nextlevelfitnessgy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nextlevelfitnessgy",
  storageBucket: "nextlevelfitnessgy.appspot.com",
  messagingSenderId: "76843423139",
  appId: "1:76843423139:web:b481256ad49e479de77616",
  measurementId: "G-T364YDX0VN"
};

// Initialize Firebase
//const perf = getPerformance(app);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);