import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyBslNjjpXCrTJQRkU9jw2wgIFJ5TMunrOw",
    authDomain: "vaiga-3ee5b.firebaseapp.com",
    databaseURL: "https://vaiga-3ee5b-default-rtdb.firebaseio.com",
    projectId: "vaiga-3ee5b",
    storageBucket: "vaiga-3ee5b.appspot.com",
    messagingSenderId: "776257079563",
    appId: "1:776257079563:web:b12d946d65a4bc4d3b7a0e",
    measurementId: "G-BD9V6XCFGW"
};

var fire = firebase.initializeApp(firebaseConfig)
export default fire;