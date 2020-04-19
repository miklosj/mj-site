import firebase from 'firebase';
//import database from 'firebase/database';

const config = {
  apiKey: "AIzaSyCZs_zi9a1Ux62VgNhuORRO6T948TquFzo",
  authDomain: "miki-blog-bf7b8.firebaseapp.com",
  databaseURL: "https://miki-blog-bf7b8.firebaseio.com",
  projectId: "miki-blog-bf7b8",
  storageBucket: "miki-blog-bf7b8.appspot.com",
  messagingSenderId: "240849284911",
  appId: "1:240849284911:web:ea12e691ca280c536ebbda"
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
}