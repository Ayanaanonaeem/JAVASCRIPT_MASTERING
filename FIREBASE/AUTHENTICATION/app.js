  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  import { getAuth,onAuthStateChanged,createUserWithEmailAndPassword   } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
  
 
  const firebaseConfig = {
    apiKey: "AIzaSyAABv37MRCAKGt34GNcWuXYM14XPNMSC5Q",
    authDomain: "my-first-project-513f2.firebaseapp.com",
    projectId: "my-first-project-513f2",
    storageBucket: "my-first-project-513f2.firebasestorage.app",
    messagingSenderId: "47101531514",
    appId: "1:47101531514:web:a5a94eb3f967ee5eeef2c3",
    measurementId: "G-FPCWJR1JDF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  console.log(auth);
  

  var email=document.getElementById("email")
  var password=document.getElementById("password")
  var btn=document.getElementById("btn")

  btn.addEventListener("click",createuseracc)

    

  function createuseracc() {
    
  

    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(email.value);
    console.log(password.value);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
   
    
    // ..
  });
  
}
  

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log("user is logged in");
      
      // ...
    } else {
      console.log("user is lged out");
      
    }
  });
