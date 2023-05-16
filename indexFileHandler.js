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

const URLParams = new URLSearchParams(window.location.search);

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const selectVal = document.getElementById("status-select").value;
    const images = document.getElementById("upload").files;
    if (selectVal == null) {
        alert("Statusfelt er påkrævet");
    } else {
        // uploading images to Firebase Storage: use resulting image path
        console.log(images.length);
        var imagePath;
        if (images.length > 0) {
          imagePath = "Projects/"+URLParams.get("proj-id")+"/"+removeSpaces(selectVal);
        } else {
          imagePath = "None";
        }
        console.log(imagePath);
        for (var image in images) {
            let ImageRef = ref(storage, "Projects/" + URLParams.get("proj-id") + "/" + removeSpaces(selectVal) + "/" + images[image].name);
            uploadBytes(ImageRef, images[image]).then((e) => {
                console.log("uploaded file");
            })
        }  
        // alert("Opdatering Gennemført");
    }
    
  })

