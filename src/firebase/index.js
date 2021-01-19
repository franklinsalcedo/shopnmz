import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBgJt1kTdY_4CylPiVfTuf2uj9pgQR18So",
    authDomain: "shop-nmz.firebaseapp.com",
    projectId: "shop-nmz",
    storageBucket: "shop-nmz.appspot.com",
    messagingSenderId: "1065985099227",
    appId: "1:1065985099227:web:6dacf02731e9973ed113fe"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
