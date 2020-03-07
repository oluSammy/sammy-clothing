import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhN5jolnmsy9JRx-7i9wPdikgIwgz5v-c",
    authDomain: "sammy-clothing.firebaseapp.com",
    databaseURL: "https://sammy-clothing.firebaseio.com",
    projectId: "sammy-clothing",
    storageBucket: "sammy-clothing.appspot.com",
    messagingSenderId: "564035229136",
    appId: "1:564035229136:web:76e8873164b065a857d5d5",
    measurementId: "G-QN33QSWVD3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({'login_hint': 'Select Account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase; 

