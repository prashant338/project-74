import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDk7tRF3peNrInatit0hydjjnSB8wHmzPQ",
  authDomain: "project-number-74.firebaseapp.com",
  projectId: "project-number-74",
  storageBucket: "project-number-74.appspot.com",
  messagingSenderId: "350476068660",
  appId: "1:350476068660:web:aec60326406db18fb12761"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
