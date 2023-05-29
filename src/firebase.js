import "firebase/auth";
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDfDx6HMJEaatbWD6SwZmrrIWlDUASGGNw",
    authDomain: "linkedin-clone-31248.firebaseapp.com",
    projectId: "linkedin-clone-31248",
    storageBucket: "linkedin-clone-31248.appspot.com",
    messagingSenderId: "386673584539",
    appId: "1:386673584539:web:4696120d71ffc5771b593e",
    measurementId: "G-JRLXX9SE76"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = auth();

export { db, auth };