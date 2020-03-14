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

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    
    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date(); 
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(e){
            console.log('Error Creating User', e.message);
        }
    }

    return userRef;
}




export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

export default firebase; 

