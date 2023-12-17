import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBYkCj3MaUT5GsAaeh3w-zCxwnsviYMRXA",
  authDomain: "questionnaire-um.firebaseapp.com",
  projectId: "questionnaire-um",
  storageBucket: "questionnaire-um.appspot.com",
  messagingSenderId: "8308301769",
  appId: "1:8308301769:web:e9e6cd16ce9e28a5de5218"
};

const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);