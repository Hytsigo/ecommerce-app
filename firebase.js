import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyD-gDHmT6-M-2X3YA33m5ab_Qe6xyExpkc",
    authDomain: "ecommerce-app-2705a.firebaseapp.com",
    projectId: "ecommerce-app-2705a",
    storageBucket: "ecommerce-app-2705a.appspot.com",
    messagingSenderId: "45050931255",
    appId: "1:45050931255:web:5f6b91544fb12508bef7b2",
    measurementId: "G-F5LV2ZVPTZ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
};
export default db;
