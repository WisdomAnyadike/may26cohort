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
    let allBlogs =  [] 
    
    allUsers.forEach((user)=>  {
        user.blogPosts.forEach((blog)=> {
          allBlogs.push(blog)
        })  
    }  )

    if (!blogTitleValue || !blogImageValue || !blogDescriptionValue) {
        alert('all fields are mandatory')
    } 
     else if ( allBlogs.find(( blog)=> blog.title === blogTitleValue.toLowerCase() )){
       alert('Blog already exists')
     }
    
    
    else {
      
      let blog = {
        title: blogTitleValue.toLowerCase() ,
        description : blogDescriptionValue.toLowerCase() ,
        image : blogImageValue , 
        isLiked : false 
      }
    
      userBlogPosts.push(blog)
     localStorage.setItem('mayUsers' , JSON.stringify(allUsers))
      displayBlogs()   
    } 
}



function displayBlogs(params) {
    if (userBlogPosts.length === 0) {
    postsContainer.innerHTML =    `<div class="no-posts">
            <i class="fas fa-feather-alt"></i>
            <p>No posts yet. Create your first blog post above!</p>
          </div>` 
        } else {
           postsContainer.innerHTML =  ''
          for (let index = 0; index < userBlogPosts.length; index++) {
          

            postsContainer.innerHTML += `  <div class="blog-card">
            <img class="blog-card-image" src="${userBlogPosts[index].image}" alt="The Art of Writing">
            <div class="blog-card-body">
              <div class="blog-card-date">
                <i class="fas fa-calendar-alt"></i> June 22, 2026
              </div>
              <h3 class="blog-card-title"> ${userBlogPosts[index].title}</h3>
              <p class="blog-card-description">${userBlogPosts[index].description}</p>
            </div>
            <div class="blog-card-footer">
              <div class="blog-card-author">
                <div class="author-avatar">WA</div>
                <span class="author-name">Wisdom Anyadike</span>
              </div>
              <div class="card-actions">
                <button onclick="likePost(${index})" class="btn-like ${userBlogPosts[index].isLiked ?  'liked' : ''}">
                  <i class="fas fa-heart"></i> Liked
                </button>
                <button class="btn-delete" onclick="deleteBlog(${index})">
                  <i class="fas fa-trash-alt"></i> Delete
                </button>
              </div>
            </div>
          </div> `
       }
            
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


function deleteBlog(i) {
 userBlogPosts.splice(i , 1)
   localStorage.setItem('mayUsers' , JSON.stringify(allUsers))
      displayBlogs()   
  
}


function likePost(i) {
  if (userBlogPosts[i].isLiked ) {
    userBlogPosts[i].isLiked = false
  }else {
    userBlogPosts[i].isLiked = true
  }

  // userBlogPosts[i].isLiked = !userBlogPosts[i].isLiked
     localStorage.setItem('mayUsers' , JSON.stringify(allUsers))
      displayBlogs()   
}