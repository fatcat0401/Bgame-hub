import axios from "axios";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSbllkP9uN6FV9u7i82b0P2N4_rJj64RY",
  authDomain: "bgame-fe5c3.firebaseapp.com",
  projectId: "bgame-fe5c3",
  storageBucket: "bgame-fe5c3.appspot.com",
  messagingSenderId: "957076719892",
  appId: "1:957076719892:web:30fa7b4eaf195ec1e19a01",
  measurementId: "G-NHCP4LTZ7X",
  databaseURL:
    "https://bgame-fe5c3-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
const analytics = getAnalytics(app);

// export default axios.create({
//   baseURL: "https://api.geekdo.com/xmlapi/boardgame",
// });
