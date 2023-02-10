import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCld85ZH52nSwAi8mxKeN0xtVOIXkHK-gc",
  authDomain: "justsearchpro.firebaseapp.com",
  projectId: "justsearchpro",
  storageBucket: "justsearchpro.appspot.com",
  messagingSenderId: "858985474548",
  appId: "1:858985474548:web:76e31211b6924e4557f1a1"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

export {db,auth };