let userDatabase = JSON.parse(localStorage.getItem('mayUsers')) ||  []

let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')
let terms = document.getElementById('terms')


function signUp(params) {
    let firstNameValue = firstName.value.trim() 
    let lastNameValue = lastName.value.trim() 
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let confirmPasswordValue = confirmPassword.value.trim()
    let termsValue = terms.checked
    let foundUser = userDatabase.find((user , i , arr )=> { return user.email === emailValue  })
    
    
    if (!firstNameValue || !lastNameValue || !emailValue || !passwordValue || !confirmPasswordValue ) {
        alert('all fields are mandatory')
    } else if (!termsValue){
        alert('please agree to terms and conditions')
    } else if ( foundUser  ){  
       alert('user already exists')
    }
    else if (passwordValue !== confirmPasswordValue  ) {
       alert('passwords must match')
    } else if ( passwordValue.length < 8 ){
        alert('password must be at least 8 characters')
    } else {
        document.querySelector('.btn-primary').innerHTML = 'Loading...'
        document.querySelector('.btn-primary').disabled = true



       setTimeout(() => {
        let user = {
        fullName :  `${firstNameValue} ${lastNameValue}`  ,
        email : emailValue , 
        password : passwordValue ,
       }
      userDatabase.push(user)
      localStorage.setItem('mayUsers' , JSON.stringify(userDatabase))
      alert('sign up successful')
       document.querySelector('.btn-primary').innerHTML = 'Create Account'
        document.querySelector('.btn-primary').disabled = false
      window.location.href = './login.html'
        
       }, 3000);

    }
    
}





// let value 

// let array = [ 'watermelon' , 'mango' , 'banana' , 'cherry' , 'orange' , 'pineapple' , 'cherry']


// for (let index = 0; index < array.length; index++) {
//     console.log('hi');
    
//     if (array[index] === 'cherry' ) {
//         value = 'cherry'
//      break
//     }
    
// }


// console.log(value);

// let emailValue = 'david@gmail.com'

// let users  = [
//    {
//         fullName :  'david mech'  ,
//         email :  'david@gmail.com', 
//         password : 'davido123' ,
//        }, 
//         {
//         fullName :  'omotosho daniel'  ,
//         email :  'daniel@gmail.com', 
//         password : 'ilovefood' ,
//        }
// ]



// let foundUser =  users.find(( user , i )=> { return user.email === emailValue })
