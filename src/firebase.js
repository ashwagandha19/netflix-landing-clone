import firebase from 'firebase';

//^ firebase config
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "netflix-clone-aeeea.firebaseapp.com",
    projectId: "netflix-clone-aeeea",
    storageBucket: "netflix-clone-aeeea.appspot.com",
    messagingSenderId: "789421663980",
    appId: "1:789421663980:web:80d0ffcbdea2dc23aee7c9"
};

//^ initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//^ initialize firebase db
const db = firebaseApp.firestore();

//^ initialize firebase auth
const auth = firebase.auth();

//^ u can have one default export but as many as u want explicit exports
export { auth }
export default db;