import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDZub80uvWMjhPJLxY8X-bnhZZVygj2b7w",
  authDomain: "filmyverse-36ba1.firebaseapp.com",
  projectId: "filmyverse-36ba1",
  storageBucket: "filmyverse-36ba1.appspot.com",
  messagingSenderId: "359501121727",
  appId: "1:359501121727:web:20fced51a410df9a061e0a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");


export default app;