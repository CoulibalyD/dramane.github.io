import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAQniSDcAkVAnsr52GWgPRm2td6SAwOHOU",
    authDomain: "reunion-app-257ab.firebaseapp.com",
    databaseURL: "https://reunion-app-257ab.firebaseio.com",
    projectId: "reunion-app-257ab",
    storageBucket: "reunion-app-257ab.appspot.com",
    messagingSenderId: "987621562558",
    appId: "1:987621562558:web:08a7ae477e1f131e08e6ef",
    measurementId: "G-ZJRSRSTVMF"
  };
  let app = firebase.initializeApp(firebaseConfig);
  export const db = app.database();