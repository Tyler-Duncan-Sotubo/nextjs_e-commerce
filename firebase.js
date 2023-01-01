import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbqWaJhQLLlIq6oWBZLB2zh7Q8XKzMPhc",
  authDomain: "ecommerce-39217.firebaseapp.com",
  projectId: "ecommerce-39217",
  storageBucket: "ecommerce-39217.appspot.com",
  messagingSenderId: "468348011519",
  appId: "1:468348011519:web:7d7f8dc2ffd2e0a73d9dca",
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  // eslint-disable-next-line no-unused-vars
  app = firebase.app();
}

export const db = getFirestore();
