import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {
  f_apiKey,
  f_authDomain,
  f_projectId,
  f_storageBucket,
  f_messagingSenderId,
  f_appId,
} from "./secret";

const firebaseConfig = {
  apiKey: f_apiKey,
  authDomain: f_authDomain,
  projectId: f_projectId,
  storageBucket: f_storageBucket,
  messagingSenderId: f_messagingSenderId,
  appId: f_appId,
};

firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();
export const firebaseInstance = firebase;
export const dbService = firebase.firestore();
