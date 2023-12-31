// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCDjcW-ZFiHzuQG_6RXlAfS7E-gdMnrj04",
  authDomain: "chat-app-a6145.firebaseapp.com",
  projectId: "chat-app-a6145",
  storageBucket: "chat-app-a6145.appspot.com",
  messagingSenderId: "538588438846",
  appId: "1:538588438846:web:c49eb09a761641fe6a0c6f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage();