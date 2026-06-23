let allUsers = JSON.parse(localStorage.getItem('mayUsers'))
let inputedEmail = document.getElementById("email")
let inputedPassword = document.getElementById("password")
let button = document.querySelector('.btn-primary')


function signIn() {
    
    let foundUser = allUsers.find((u, i)=> u.email === inputedEmail.value.trim()) 

    if(inputedEmail.value.trim() === "" || inputedPassword.value.trim() === "") {
        alert("All fields are mandatory")
    } else if (!foundUser) {
        alert('user does not exist')
    }
     else{
 button.innerHTML = 'Loading....'
 button.disabled = true

        setTimeout(()=> {
     if (foundUser.password !== inputedPassword.value.trim()) {
      alert('invalid credentials')
   }else {
       alert('sign in successful')
       let foundUserIndex =  allUsers.findIndex((user, i)=> user.email === inputedEmail.value.trim()) 
       localStorage.setItem( 'currentUserIndex' , foundUserIndex )
        window.location.href = './dashboard.html'
   }

    button.innerHTML = 'Sign In'
    button.disabled = false

        } , 3000)
   
       
    }
    
}


