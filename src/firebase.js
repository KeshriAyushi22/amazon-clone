import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC5n0MoPVWqpCrHX30WgSnRylE3SYJNfkA",
    authDomain: "clone-b6acf.firebaseapp.com",
    databaseURL: "https://clone-b6acf.firebaseio.com",
    projectId: "clone-b6acf",
    storageBucket: "clone-b6acf.appspot.com",
    messagingSenderId: "308030533419",
    appId: "1:308030533419:web:dccf794f28a0c28f799f6e",
    measurementId: "G-SXX8KE6WGL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//initialize db
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };