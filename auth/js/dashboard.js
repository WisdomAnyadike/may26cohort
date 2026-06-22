let allUsers = JSON.parse(localStorage.getItem('mayUsers'))
let currentUserIndex = localStorage.getItem('currentUserIndex')
let user = allUsers[currentUserIndex]
console.log(user);




// let arr =  [3,4,5,6]
// arr[2]

let displayWelcome = document.getElementById('welcomeUser')




function signOut() {
     let canLogout = confirm('are you sure?')
    if (canLogout) {
        localStorage.removeItem('currentUserIndex')
        window.location.href = 'login.html'
    }
    
}

function checkUserAuth(params) {
    if (!user) {
        alert('unauthorized')
       window.location.href = 'login.html'  
    }else {
       displayWelcome.innerHTML = `Welcome ${user.fullName}`
    }
}

checkUserAuth()