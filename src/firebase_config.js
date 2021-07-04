import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCwHyBWULkh77YOvJnwad4qDgOH50NgNUM",
    authDomain: "react-todo-8d233.firebaseapp.com",
    projectId: "react-todo-8d233",
    storageBucket: "react-todo-8d233.appspot.com",
    messagingSenderId: "227993572883",
    appId: "1:227993572883:web:a2b06c5266ff1cc0f751e6",
    measurementId: "G-MSYQHVDFWZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;