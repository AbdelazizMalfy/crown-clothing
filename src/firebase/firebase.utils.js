import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBtVKaUgLxle1Bt5x0IOmcMKPDew16t5yE",
    authDomain: "crown-clothing-226fa.firebaseapp.com",
    databaseURL: "https://crown-clothing-226fa.firebaseio.com",
    projectId: "crown-clothing-226fa",
    storageBucket: "",
    messagingSenderId: "111971420076",
    appId: "1:111971420076:web:47bf74a0bbf63b5b"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;