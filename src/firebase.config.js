import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBf3PKc09YszOU5iNlP23VDjnym6x5XZvI',
  authDomain: 'house-marketplace-app-bb19c.firebaseapp.com',
  projectId: 'house-marketplace-app-bb19c',
  storageBucket: 'house-marketplace-app-bb19c.appspot.com',
  messagingSenderId: '533768748880',
  appId: '1:533768748880:web:518a019ff47cd86cccb655',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
