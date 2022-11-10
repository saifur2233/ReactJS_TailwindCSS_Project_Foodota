// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const API_KEY = process.env.APIKEY;
const AUTH_DOMAIN = process.env.AUTH_DOMAIN;
const PROJECT_ID = process.env.PROJECT_ID;
const STROAGE_BUCKET = process.env.STROAGE_BUCKET;
const MESSAGING_SENDERID = process.env.MESSAGING_SENDERID;
const APPID = process.env.APPID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STROAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDERID,
  appId: APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
