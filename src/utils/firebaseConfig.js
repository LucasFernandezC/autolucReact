// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZYqYCG4EnxhutT_fd_a2SXq8UR57DzYg",
  authDomain: "autoluc-react.firebaseapp.com",
  projectId: "autoluc-react",
  storageBucket: "autoluc-react.appspot.com",
  messagingSenderId: "712478287789",
  appId: "1:712478287789:web:83846ee42f609aa15aa324"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;