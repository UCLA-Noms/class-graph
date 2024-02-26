// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWUfrnZ3dZFdL4jSOCklva4vQrabaY_6I",
  authDomain: "bruin-planner-2add1.firebaseapp.com",
  projectId: "bruin-planner-2add1",
  storageBucket: "bruin-planner-2add1.appspot.com",
  messagingSenderId: "807606544061",
  appId: "1:807606544061:web:bc2458db54825baacff9d4",
  measurementId: "G-7S03EEN92R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);

let currentUser: any;

onAuthStateChanged(auth, (user: any) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      currentUser = user;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

const getCurrentUser = () => {
    return currentUser;
}
  

export {
    app, analytics, provider, auth, db, getCurrentUser
}
