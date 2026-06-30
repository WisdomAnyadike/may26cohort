  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAXtub2qbdAD8JHIOB0kftCfCX6dh-nsIU",
    authDomain: "maycohortapp.firebaseapp.com",
    projectId: "maycohortapp",
    storageBucket: "maycohortapp.firebasestorage.app",
    messagingSenderId: "870775929974",
    appId: "1:870775929974:web:39fbacb2aeed86e250b357"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  let emailInput = document.getElementById('email')
  let passwordInput = document.getElementById('password')
  let nameInput = document.getElementById('display-name')
  let btn = document.getElementById('signup-btn')
   

  function signUpUser() {
    let email = emailInput.value.trim()
    let password = passwordInput.value.trim()
    let displayName = nameInput.value.trim()


    if (!email || !password || !displayName ) {
        alert('all fields are mandatory')
        return
    }

   renderButtonState(true)

// Create User
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;

// Udpate users display name
user.updateProfile({
  displayName: displayName
}).then(() => {
    alert('sign up successful')
   renderButtonState(false)
   window.location.href = 'login.html'
}).
//Show error is display name wasnt updated but still sign the user in
catch((error) => {
     alert('sign up successful , but couldnt update name at the moment' )
   renderButtonState(false)
   window.location.href = 'login.html'
});  

 
  })
  // Show error if user wasnt created
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
   renderButtonState(false)
  });
    }

   

function renderButtonState(bool) {
btn.innerHTML =  bool ? 'loading..' : 'Sign Up' 
btn.disabled = bool   
}