const  firebase = require ('firebase/compat/app');
const {getFirestore} = require('firebase/firestore');
const { getAuth, GoogleAuthProvider  } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyBlogrAlgDi-Nb64Rl7tjrDC7kbLHqeN-w",
  authDomain: "webproject-56479.firebaseapp.com",
  projectId: "webproject-56479",
  storageBucket: "webproject-56479.appspot.com",
  messagingSenderId: "1094378105520",
  appId: "1:1094378105520:web:edd400fb7fe084efba2975",
  measurementId: "G-5PN75PEEQ3"
}

const app = firebase.initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

module.exports = {app, provider, firebase, db, auth};