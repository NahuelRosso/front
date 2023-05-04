// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaDVa5Gio-fVKGBnDJnWAz9IdUtd91Op0",
  authDomain: "capsuladeltiempo-25b82.firebaseapp.com",
  projectId: "capsuladeltiempo-25b82",
  storageBucket: "capsuladeltiempo-25b82.appspot.com",
  messagingSenderId: "281189122250",
  appId: "1:281189122250:web:2f1b3efbeac9408f0bb433",
  measurementId: "G-Q56Z3Z6VZD"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);