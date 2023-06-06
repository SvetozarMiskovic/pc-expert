// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { get, getDatabase, onValue, push, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhSokscbYdvAwVvt_1JndAV1X4zHDSl5A",
  authDomain: "pc-expert-42664.firebaseapp.com",
  databaseURL:
    "https://pc-expert-42664-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pc-expert-42664",
  storageBucket: "pc-expert-42664.appspot.com",
  messagingSenderId: "951993303686",
  appId: "1:951993303686:web:9b5d5220ee01aba5740707",
  measurementId: "G-4QKC49VF3T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics =
  app.name && typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const getAllProducts = async () => {
  const productsRef = ref(db, "products");

  const productsProm = await get(productsRef);
  const products = productsProm.val();

  const arr = [];

  Object.keys(products).forEach(product => {
    arr.push({ ...products[product] });
  });
  return products;
};

export { db, analytics, getAllProducts, auth, googleProvider };
