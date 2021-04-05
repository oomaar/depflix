import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyDe2_gHDIv6bq16KwknA-5j5VwZClPU1sY",
    authDomain: "netflix-a65e5.firebaseapp.com",
    projectId: "netflix-a65e5",
    storageBucket: "netflix-a65e5.appspot.com",
    messagingSenderId: "778352821007",
    appId: "1:778352821007:web:d22de95d269a7b747ef47a",
    measurementId: "G-CML1TNM04W"
};

const firebase = Firebase.initializeApp(config);

const auth = Firebase.auth();
const db = firebase.firestore();

// seedDatabase(firebase);

export { firebase };
export { auth };
export default db;
