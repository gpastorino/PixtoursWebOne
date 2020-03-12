// const form = document.getElementById('commentForm');


// const form = document.getElementById('blogForm');

const API = 'http://localhost:4000/';



// this is where I need to find the ID of the specified Blog Posting:

// How would i get the info from the title to get the ID of the blog post? 

//need the id of the div.  each div will need a unique id.

//how to populate a unique id for a specific div, and then to access the content from that div. 



//another id to test:  5e6684c4b2636e5bc84fed67

// 5e6934df8f8556a5301a8944

//gets blog posts onto page on loads
fetch('http://localhost:4000/api/v1/blog/5e6684c4b2636e5bc84fed67', {


// fetch(`http://localhost:4000/api/v1/blog/${:id}`, {


        method: 'GET'
}).then((response) => response.json())
.then(data => {
        console.log(data);

        let post = data.data;

                let secondCol = document.getElementById('blog');
                
                let blogPostCard = document.createElement('div');
                blogPostCard.innerHTML =  `<div class="jumbotron">
0
                                                <p id="blogTitle">${post.title}</p>
                                                <p id="blogAuthor">${post.author}</p>
                                                <p id="blogContent">${post.content}</p>
                                                <hr class="my-4">
                                                <button id="deleteBlog" type="button" class="btn btn-danger">Destroy Blog Post</button>
                                                <button id="editBlog" type="button" class="btn btn-secondary">Edit Blog Post</button>
                                                <button id="blogSubmit" class="btn btn-primary">Comment</button>
                                                <p class="lead"></p>
                                        </div>`;
                secondCol.appendChild(blogPostCard);

                //checking that the post.comments works:  

                let commentsArray = post.comments;
                let idOfComment = document.getElementById('commentsPost');
                
                commentsArray.forEach(comment => {
                        console.log(comment)
                        let commentOnBlog = document.createElement('div');
                        commentOnBlog.innerHTML =       `<div class="card-body">
                                                                <p class="card-text">${comment.content}</p>
                                                                <p class="card-text" id="commentauthor">By ${comment.author}</p>
                                                                <button id="editComment" type="button" class="btn btn-secondary">Edit Comment</button>
                                                                <button id="deleteComment" type="button" class="btn btn-danger">Destroy Comment</button>
                                                        </div>`;
                        idOfComment.appendChild(commentOnBlog);
                })

        
})
.catch(err => console.log(err));


const commentForm = document.getElementById('commentForm');

commentForm.addEventListener('submit', (event) => {

        // event.preventDefault();

        const authorInput = document.getElementById('commentAuthor');
        const contentInput = document.getElementById('commentContent');

        //creating object to send over to the server:

        const newComment = {
                author: authorInput.value, 
                content:  contentInput.value
        };

        console.log(JSON.stringify(newComment));
        


        let blogId = '5e6684c4b2636e5bc84fed67';

        fetch(`/api/v1/comment/${blogId}/create`, {
                method: 'POST',
        // fetch(`http://localhost:4000/api/v1/blog/${id}/`, {
        //         method: 'PUT',
                headers: {
                        'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
        })
        .then((response) => response.json())
        .then((data)=> console.log(data))
        .catch((err)=> console.log(err));
});



//original==========================================================================

// const commentForm = document.getElementById('commentForm');

// commentForm.addEventListener('submit', (event) =>{

//         event.preventDefault();

//         const authorInput = document.getElementById('commentAuthor');
//         const contentInput = document.getElementById('commentContent');

//         //creating object to send over to the server:

//         const newComment = {
//                 author: authorInput.value, 
//                 content:  contentInput.value
//         };

//         console.log(newComment);


        
//         fetch('http://localhost:4000/api/v1/comment/create', {
//                 method: 'POST',
//                 headers: {
//                         'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newComment),
//         })
//         .then((response) => response.json())
//         .then((data)=> console.log(data))
//         .catch((err)=> console.log(err));

// });


//how to link this to the Blog post?
//needs to be associated to the blog id


// https://stackoverflow.com/questions/46118666/node-js-blog-post-add-comment-not-working
// building a blog with node:
// https://medium.com/@andrewhartnett/tutorial-building-a-simple-blog-with-node-express-mongo-8e760630db74


//with jquery:
// https://stackoverflow.com/questions/43389704/how-to-send-delete-request-to-node-with-button-and-jquery