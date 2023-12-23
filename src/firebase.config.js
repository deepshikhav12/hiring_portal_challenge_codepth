// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import{getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuLK3-LfW_KTqBHjhSqwBwDZBB8QKY6Dk",
  authDomain: "job-portal-28d1f.firebaseapp.com",
  projectId: "job-portal-28d1f",
  storageBucket: "job-portal-28d1f.appspot.com",
  messagingSenderId: "207817247911",
  appId: "1:207817247911:web:3ba5d08467972e607c1f82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth=getAuth()
export { db,auth };
