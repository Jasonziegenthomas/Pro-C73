import  firebase from "firebase"
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBAbq3BfTatApEBTlHgNJOOhFC2tN2ErG4",
    authDomain: "wily-5f195.firebaseapp.com",
    projectId: "wily-5f195",
    storageBucket: "wily-5f195.appspot.com",
    messagingSenderId: "522869646318",
    appId: "1:522869646318:web:1a5f2e4c7a4005ae83e4ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 export default firebase.firestore()