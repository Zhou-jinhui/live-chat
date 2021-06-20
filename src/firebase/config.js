import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDBJeetiWq3lf5jYwZ2mUa1zw86eyAAu58',
  authDomain: 'udemy-vue-firebase-sites-c3766.firebaseapp.com',
  projectId: 'udemy-vue-firebase-sites-c3766',
  storageBucket: 'udemy-vue-firebase-sites-c3766.appspot.com',
  messagingSenderId: '153187338793',
  appId: '1:153187338793:web:c8037b80626316fa86ea38',
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
