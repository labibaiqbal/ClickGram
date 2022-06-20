// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH_wjRptTvNza__Q6OZnOURe2yWPnKWa8",
  authDomain: "firegram-8840b.firebaseapp.com",
  projectId: "firegram-8840b",
  storageBucket: "firegram-8840b.appspot.com",
  messagingSenderId: "493582039345",
  appId: "1:493582039345:web:3017560e3558125f2c5810"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };