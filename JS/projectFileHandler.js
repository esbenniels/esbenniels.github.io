// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyC_9PErbiUyRt48NERyTPvMzskcCNhGPPg",
   authDomain: "qr-codekundeopdater.firebaseapp.com",
   databaseURL: "https://qr-codekundeopdater-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "qr-codekundeopdater",
   storageBucket: "qr-codekundeopdater.appspot.com",
   messagingSenderId: "568913652858",
   appId: "1:568913652858:web:ebc58b3c6ff9f8f2f15fc3",
   measurementId: "G-C9JBQH20T0"
 };

 const app = initializeApp(firebaseConfig);

 function removeSpaces(input) {
    return input.replace(" ", "_");
  }

import {getStorage, ref, uploadBytes} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
const storage = getStorage(app);

