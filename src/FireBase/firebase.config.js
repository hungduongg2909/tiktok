import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAID_0niqT8P8g621Lfk_94aD_EVIXiDsY',
    authDomain: 'tiktok-bbb23.firebaseapp.com',
    projectId: 'tiktok-bbb23',
    storageBucket: 'tiktok-bbb23.appspot.com',
    messagingSenderId: '520742830226',
    appId: '1:520742830226:web:044b77faff638c1ba5a64b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
