import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2MGAPE-ppc98Xl4uI6xVUHGpvbb0_7FE",
    authDomain: "clone-cb0b6.firebaseapp.com",
    databaseURL: "https://clone-cb0b6.firebaseio.com",
    projectId: "clone-cb0b6",
    storageBucket: "clone-cb0b6.appspot.com",
    messagingSenderId: "965454899928",
    appId: "1:965454899928:web:748befeb8f2ae8995045ad",
    measurementId: "G-K31MBDMN80"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
