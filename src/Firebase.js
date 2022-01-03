import * as firebase from 'firebase/app';
require('firebase/auth')

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
});

export const auth = app.auth()
export default app



// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// // TODO: Add SDKs for Firebase products that you want to use

// // https://firebase.google.com/docs/web/setup#available-libraries


// // Your web app's Firebase configuration

// const firebaseConfig = {

//   apiKey: "AIzaSyBxCzSI4tpA5a3B2GuHt8S9H38bWOiytMg",

//   authDomain: "newshash-dev.firebaseapp.com",

//   projectId: "newshash-dev",

//   storageBucket: "newshash-dev.appspot.com",

//   messagingSenderId: "295582966446",

//   appId: "1:295582966446:web:e5e35890456ef986f8833f"

// };


// // Initialize Firebase

// const app = initializeApp(firebaseConfig);