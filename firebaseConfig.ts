import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Cấu hình Firebase
const firebaseConfig = {
  // Cấu hình Firebase của bạn
  apiKey: "AIzaSyBs8ReVjGRbmDwabTMgbF4CScgMQF5jCbM",
  authDomain: "agtravel-1.firebaseapp.com",
  projectId: "agtravel-1",
  storageBucket: "agtravel-1.appspot.com",
  messagingSenderId: "298015562795",
  appId: "1:298015562795:web:533d2e4244465369fbde6e",
  measurementId: "G-HVKV2R6DFJ",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
