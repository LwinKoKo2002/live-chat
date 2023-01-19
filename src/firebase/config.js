import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
        apiKey: "AIzaSyBhxSDP_C3a9eXyY6oirnG7Dug9zw1ynk8",
        authDomain: "vue-blog-system-d656c.firebaseapp.com",
        projectId: "vue-blog-system-d656c",
        storageBucket: "vue-blog-system-d656c.appspot.com",
        messagingSenderId: "665351982838",
        appId: "1:665351982838:web:92ac29c890f667e327e6d7"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp();
export {db,auth,timestamp};