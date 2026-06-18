let allUsers = JSON.parse(localStorage.getItem('mayUsers'))
let inputedEmail = document.getElementById("email")
let inputedPassword = document.getElementById("password")


function signIn() {
    
    let foundUser = allUsers.find((user, i)=> user.email === inputedEmail.value.trim()) 

    if(inputedEmail.value.trim() === "" || savedLogin.value.trim() === "") {
        alert("All fields are mandatory")
    } else if (!foundUser) {
        alert('user does not exist')
    }
     else{
   if (foundUser.password !== inputedPassword.value.trim()) {
      alert('invalid credentials')
   }else {
       alert('sign in successful')
        window.location.href = './dashboard.html'
   }

       
    }
    
}