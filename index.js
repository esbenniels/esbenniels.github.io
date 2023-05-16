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

  import {getDatabase, ref, set, onValue, child, get, push, update} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
  const database = getDatabase(app);

//   console.log("URL Arguments: ", window.location.search);

  const URLParams = new URLSearchParams(window.location.search);
  onValue(ref(database, "Projects/" + URLParams.get("proj-id")), (snapshot) => {
    removeAllChildNodes(document.getElementById("status-select"));
    for (var cp in snapshot.val()['CPOrder'].split(", ")) {
        var newOption = document.createElement("option");
        newOption.value = snapshot.val()['CPOrder'].split(", ")[cp];
        newOption.innerText = snapshot.val()['CPOrder'].split(", ")[cp];
        document.getElementById("status-select").appendChild(newOption);
        // console.log("New Option Created: ", cp);
    }
  })


  document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const selectVal = document.getElementById("status-select").value;
    const images = document.getElementById("upload").files;
    if (selectVal == null) {
        alert("Statusfelt er påkrævet");
    } else {
        // send update email
        var today = new Date();
        var dateString = String(today.getDate()).padStart(2, '0') + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + today.getFullYear();
        var imagePath;
        if (images.length > 0) {
          imagePath = "Projects/"+URLParams.get("proj-id")+"/"+selectVal;
        } else {
          imagePath = "None";
        }

        set(ref(database, "Projects/" + URLParams.get("proj-id") + "/checkpoints/" + selectVal), {
            Completed: true,
            DateCompleted: dateString,
            ImagePath: imagePath
        })
    }
    location.reload();
  })


  // utility function
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }


document.getElementById("gen-btn").addEventListener("click", (e) => {
  e.preventDefault();
  var projID = document.getElementById("inputProjID").value;
  var getURL = "https://api.qrserver.com/v1/create-qr-code/?data=https://esbenniels.github.io/?proj-id=" + projID + "&size=200x200";
  console.log(getURL);
  var img = document.createElement("img");
  img.src = getURL;
  img.alt = "";
  img.title = "";
  document.getElementById("qrcode").appendChild(img);
})
