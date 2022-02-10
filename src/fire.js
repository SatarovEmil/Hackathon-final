import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd0ieHufnsSxaEr_q8ThovTL1lJo5_x94",
  authDomain: "hakaton-d2308.firebaseapp.com",
  projectId: "hakaton-d2308",
  storageBucket: "hakaton-d2308.appspot.com",
  messagingSenderId: "1086399084359",
  appId: "1:1086399084359:web:2d4e60a7279730589d3e62",
  measurementId: "G-562V9G6V27"
};

const fire = firebase.initializeApp(firebaseConfig);

export const googleAcc = getAuth(fire);
export default fire;
