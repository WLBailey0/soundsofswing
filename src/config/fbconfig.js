// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBX8ZwlRLhDvxDR6E87GWhufJNw62IGRJ4",
  authDomain: "soundsofswing-85ec1.firebaseapp.com",
  projectId: "soundsofswing-85ec1",
  storageBucket: "soundsofswing-85ec1.appspot.com",
  messagingSenderId: "99553593424",
  appId: "1:99553593424:web:c16107eb337b5ee6302955",
  measurementId: "G-Z47Z9WP3FK"

};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);