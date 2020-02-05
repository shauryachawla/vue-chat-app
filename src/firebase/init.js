import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBRoAMN9ITfk3Oq2fpO2f-e5KsDNyoQfOw",
  authDomain: "ninja-chat-shaurya.firebaseapp.com",
  databaseURL: "https://ninja-chat-shaurya.firebaseio.com",
  projectId: "ninja-chat-shaurya",
  storageBucket: "ninja-chat-shaurya.appspot.com",
  messagingSenderId: "802511095324",
  appId: "1:802511095324:web:6300700f29194e3faec1d9",
  measurementId: "G-BMBSHZ16RC"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()