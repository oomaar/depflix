import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyDdtXx3Wwt_NVPFa7WAO7symXD5plB8MXo",
    authDomain: "netflix-4ca0d.firebaseapp.com",
    projectId: "netflix-4ca0d",
    storageBucket: "netflix-4ca0d.appspot.com",
    messagingSenderId: "237521840713",
    appId: "1:237521840713:web:b0b5f62f352f31d8e3ed98"
};

const firebase = Firebase.initializeApp(config);

const auth = Firebase.auth();
const db = firebase.firestore();

// seedDatabase(firebase);

export { firebase };
export { auth };
export default db;
