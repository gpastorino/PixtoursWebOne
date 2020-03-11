

console.log('Ground Control to Major Tom...');

const form = document.getElementById('blogForm');
const API = 'http://localhost:4000/';




//get blog posts onto page on loads
fetch('http://localhost:4000/api/v1/blog/', {
        method: 'GET'
}).then((response) => response.json())
.then(data => {
        console.log(data);

        let postArray = data.data;

        //this is for the count:
        let numCallbackRuns = 0;
        postArray.forEach(post => {
                numCallbackRuns++
                let secondCol = document.querySelectorAll('.col-sm')[1];
                
                let blogPostCard = document.createElement('div');
                blogPostCard.innerHTML =  `<div class="jumbotron">
                                                <h1 class="display-3">Blog Entry # ${numCallbackRuns}</h1>
                                                <p id="blogTitle">${post.title}</p>
                                                <p id="blogAuthor">${post.author}</p>
                                                <p id="blogContent">${post.content}</p>
                                                <hr class="my-4">
                                                <button type="button" class="btn btn-secondary">Edit Blog Post</button>
                                                <button type="button" class="btn btn-danger">Destroy Blog Post</button>
                                                <p class="lead"></p>
                                        </div>`;
                secondCol.appendChild(blogPostCard);
        })
})
.catch(err => console.log(err));





// //get comment posts onto page on loads
// fetch('http://localhost:4000/api/v1/comment/:id', {
//         method: 'GET'
// }).then((response) => response.json())
// .then(data => {
//         console.log(data.data);

//         let postArray = data.data;
//         postArray.forEach(post => {
//                 let cardBody = document.querySelectorAll('.card-body')[1];
                
//                 let commentPostCard = document.createElement('div');

//                 commentPostCard.innerHTML = `<div class="jumbotron">
//                                                         <h1 class="display-3">Blog Entry ${post}</h1>
//                                                         <p id="blogTitle">${post.title}</p>
//                                                         <p id="blogAuthor">${post.author}</p>
//                                                         <p id="blogContent">${post.content}</p>
//                                                         <hr class="my-4">
//                                                         <button type="button" class="btn btn-secondary">Edit Blog Post</button>
//                                                         <button type="button" class="btn btn-danger">Destroy Blog Post</button>
//                                                         <p class="lead"></p>
//                                                 </div>`



                
//                 cardBody.appendChild(commentPostCard);
//         })
// })
// .catch(err => console.log(err));






//original:  

// fetch('http://localhost:4000/api/v1/comment/:id', {
//         method: 'GET'
// }).then((response) => response.json())
// .then(data => {
//         console.log(data.data);

//         let postArray = data.data;
//         postArray.forEach(post => {
//                 let cardBody = document.querySelectorAll('.card-body')[1];
                
//                 let commentPostCard = document.createElement('div');
//                 commentPostCard.innerHTML = post.author;
//                 cardBody.appendChild(commentPostCard);
//         })
// })
// .catch(err => console.log(err));




//this code is to save a new blog post
form.addEventListener('submit', (event) =>{

        event.preventDefault();

        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');
        const contentInput = document.getElementById('blogContent');

        //creating object to send over to the server:

        const newBlog = {
                title: titleInput.value, 
                author: authorInput.value, 
                content:  contentInput.value
        };

        console.log(newBlog);

        fetch('http://localhost:4000/api/v1/blog/create', {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBlog),
        })
        .then((response) => response.json())
        .then((data)=> console.log(data))
        .catch((err)=> console.log(err));

});
const commentForm = document.getElementById('commentForm');

commentForm.addEventListener('submit', (event) =>{

        event.preventDefault();

        const authorInput = document.getElementById('commentAuthor');
        const contentInput = document.getElementById('commentContent');

        //creating object to send over to the server:

        const newComment = {
                author: authorInput.value, 
                content:  contentInput.value
        };

        console.log(newComment);

        fetch('http://localhost:4000/api/v1/comment/create', {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
        })
        .then((response) => response.json())
        .then((data)=> console.log(data))
        .catch((err)=> console.log(err));

});




// form.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const title = document.getElementById("title").value;
//         const author= document.getElementById("author").value;
//         const content= document.getElementById("content").value;

//         console.log(title);
//         console.log(author);
//         console.log(content);

//         const newBlog = {
//                 title: title,
//                 author: author, 
//                 content: content,
//         }

//         fetch('https://localhost:4000/api/v1/create', {
//                 method: 'POST',
//                 headers: {
//                         'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newBlog),
//         })
//         .then((response) => response.json())
//         .then((data)=> console.log(data))
//         .catch((err)=> console.log(err));
        
// });






// function blogEntry(){

//         console.log("clicked the blog add");
//         const title = document.getElementById("title").value;
//         const author= document.getElementById("author").value;
//         const content= document.getElementById("content").value;
 
//         console.log(title);
//         console.log(author);
//         console.log(content);
        
// }


// const handleSubmit =  (e) => {
//         e.preventDefault();
        
//           console.log('clicked');
// }


// document.getElementById('blogSubmit').addEventListener('submit', handleSubmit())



// const blogInput = document.getElementById('blogcontent');

// const 