// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
apiKey: "AIzaSyBLM_R8ZjSsfMTdcO7ji6rmtGFgKXjpmUE",
authDomain: "resume-builder-a83ab.firebaseapp.com",
projectId: "resume-builder-a83ab",
storageBucket: "resume-builder-a83ab.appspot.com",
messagingSenderId: "359977108447",
appId: "1:359977108447:web:fbc5d3d414d6782bdc7a6a",
measurementId: "G-6EHCF0HMPK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db };
export { auth };