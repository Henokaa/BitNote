import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyCDkndZZhEEvQuELnFO3iBh8X6sQdbYH7o",
  authDomain: "secproject-3e622.firebaseapp.com",
  databaseURL: "https://secproject-3e622.firebaseio.com",
  projectId: "secproject-3e622",
  storageBucket: "secproject-3e622.appspot.com",
  messagingSenderId: "575554634707",
  appId: "1:575554634707:web:4e72e2811a4f8a9968a526",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

window.firebase = firebase; // for debuging purpose
export default firebase;
