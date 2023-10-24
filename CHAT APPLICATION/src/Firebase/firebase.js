import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDHMlkHe8dGE3BcLDeCISNlrYz-bm-iVcI",
    authDomain: "web-chat-f0c5c.firebaseapp.com",
    projectId: "web-chat-f0c5c",
    storageBucket: "web-chat-f0c5c.appspot.com",
    messagingSenderId: "355932821570",
    appId: "1:355932821570:web:c9fd3bd5bfd056502a35db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()