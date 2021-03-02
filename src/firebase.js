import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB7Z_qrQ2F6t2uusbmj4-S16lsih8pP7ps",
  authDomain: "fecundity-91b35.firebaseapp.com",
  databaseURL: "https://fecundity-91b35-default-rtdb.firebaseio.com",
  projectId: "fecundity-91b35",
  storageBucket: "fecundity-91b35.appspot.com",
  messagingSenderId: "800104935001",
  appId: "1:800104935001:web:aba22d08ab8f46ac4f0b48",
  measurementId: "G-XY5WT472H7"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const database = firebase.database();
export default firebase;