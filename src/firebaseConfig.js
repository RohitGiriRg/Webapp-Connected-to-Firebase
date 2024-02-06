// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyC9ZnTWJW7BmCd7qE15NyUa73F75Rtl1us",
  authDomain: "webapp-connected-to-firebase.firebaseapp.com",
  projectId: "webapp-connected-to-firebase",
  storageBucket: "webapp-connected-to-firebase.appspot.com",
  messagingSenderId: "517082670820",
  appId: "1:517082670820:web:4a9f5f255ff7031879eef1",
  measurementId: "G-CXS9G9VCGQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
