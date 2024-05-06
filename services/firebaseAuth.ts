// services/firebaseAuth.js
import { auth } from "@/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const signIn = ({ email, password }: any) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUp = ({ email, password }: any) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};
