let allUsers = JSON.parse(localStorage.getItem('mayUsers'))
let currentUserIndex = localStorage.getItem('currentUserIndex')
let user = allUsers[currentUserIndex]
let blogTitleInput = document.getElementById('blogTitle')
let blogDescriptionInput = document.getElementById('blogDescription')
let blogImageInput = document.getElementById('blogImage')
let previewImg = document.getElementById('previewImg')
console.log(user);


function checkUserAuth(params) {
    if (!user) {
        alert('unauthorized')
       window.location.href = 'login.html'  
    }
}

checkUserAuth()


let userBlogPosts = user.blogPosts 



function submitPost() {
    let blogTitleValue = blogTitleInput.value.trim()
    let blogDescriptionValue = blogDescriptionInput.value.trim()
    let blogImageValue = previewImg.src
    if (!blogTitleValue || !blogImageValue || !blogDescriptionValue) {
        alert('all fields are mandatory')
    } else {


        
    }

    
}



function displayBlogs(params) {
    if (userBlogPosts.length === 0) {
    postsContainer.innerHTML =    `<div class="no-posts">
            <i class="fas fa-feather-alt"></i>
            <p>No posts yet. Create your first blog post above!</p>
          </div>` 
        } else {


            
        }
    
}

displayBlogs()

function pickImage() {
    let file = blogImageInput.files[0]
   console.log(file);

   if (!file) {
     alert('please attach a file')
     return
   }

   let reader = new FileReader() 
    reader.readAsDataURL(file)

  reader.addEventListener('load' , (e)=> {

   previewImg.src = e.target.result
   previewImg.width = '100'
    previewImg.height = '100'
    imagePreview.style.display = "block"
  })
   

   
    
    
}