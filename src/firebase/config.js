import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2zv_T2dsNxbcqzJeqy1dUicwcm1HgxmE",
  authDomain: "olxclone-c6de8.firebaseapp.com",
  projectId: "olxclone-c6de8",
  storageBucket: "olxclone-c6de8.appspot.com",
  messagingSenderId: "743497893763",
  appId: "1:743497893763:web:3fed1fd4795451a3ab18b6"
};

export default firebase.initializeApp(firebaseConfig)