import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBs8ReVjGRbmDwabTMgbF4CScgMQF5jCbM",
  authDomain: "agtravel-1.firebaseapp.com",
  projectId: "agtravel-1",
  storageBucket: "agtravel-1.appspot.com",
  messagingSenderId: "298015562795",
  appId: "1:298015562795:web:533d2e4244465369fbde6e",
  measurementId: "G-HVKV2R6DFJ",
};

export const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
