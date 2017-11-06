import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCg87-hdHYHC0I9L3ewzSKhbOpeMMOMT4s",
    authDomain: "octopusher-a6676.firebaseapp.com",
    databaseURL: "https://octopusher-a6676.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>"
}

var fire = firebase.initializeApp(config);
export default fire;
