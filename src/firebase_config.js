import firebase from "firebase";

var firebaseConfig = {
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
