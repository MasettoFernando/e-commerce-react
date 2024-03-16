import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsGtZFgsXlo9GtC1ZK2dl4IlLuc0oc7y8",
  authDomain: "e-commerce-react-1b09a.firebaseapp.com",
  projectId: "e-commerce-react-1b09a",
  storageBucket: "e-commerce-react-1b09a.appspot.com",
  messagingSenderId: "382692087170",
  appId: "1:382692087170:web:f77173d6fa2154dcbcab9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);