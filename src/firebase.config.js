import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDDlszuiTyrQi86LyjihQvwdfuusFRaZc",
  authDomain: "travel-adventure-4818a.firebaseapp.com",
  projectId: "travel-adventure-4818a",
  storageBucket: "travel-adventure-4818a.firebasestorage.app",
  messagingSenderId: "858699736075",
  appId: "1:858699736075:web:a716a3a9f2b4a1ff68530e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;