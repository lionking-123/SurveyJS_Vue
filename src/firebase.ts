// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD9Iqs6PgETFczxmiYtutf60twHX9-b5GI",
    authDomain: "winged-octagon-411308.firebaseapp.com",
    projectId: "winged-octagon-411308",
    storageBucket: "winged-octagon-411308.appspot.com",
    messagingSenderId: "398199481175",
    appId: "1:398199481175:web:28ca741353b08604401412",
    measurementId: "G-JHLXKXJG9FW"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { db ,auth};
