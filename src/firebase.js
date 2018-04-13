import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDOWW84uJQ7KOFH_ip4jB-4-cWClN5X_ao",
    authDomain: "vongdaphongthuy-2cf4b.firebaseapp.com",
    databaseURL: "https://vongdaphongthuy-2cf4b.firebaseio.com",
    projectId: "vongdaphongthuy-2cf4b",
    storageBucket: "vongdaphongthuy-2cf4b.appspot.com",
    messagingSenderId: "362546513465"
};

export const firebaseApp = firebase.initializeApp(config);
export const productsRef = firebase.database().ref("products");
export const productsDeletedRef = firebase.database().ref("productsDeleted");
export const usersRef = firebase.database().ref("users");
