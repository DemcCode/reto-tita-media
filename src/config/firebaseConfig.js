import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC25OjQsSYOKlSvNe6aDJpq6m47ub0_C3w",
    // authDomain: "newproject-74399.firebaseapp.com",
    projectId: "newproject-74399",
    storageBucket: "newproject-74399.appspot.com",
    messagingSenderId: "851873985337",
    appId: "1:851873985337:web:d5a7a9da7a3267213caee8",
    measurementId: "G-3W6E8Q4990"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);




