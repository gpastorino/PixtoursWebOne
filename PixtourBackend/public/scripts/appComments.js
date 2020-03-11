// const form = document.getElementById('commentForm');


// const form = document.getElementById('blogForm');

const API = 'http://localhost:4000/';



// this is where I need to find the ID of the specified Blog Posting:

// How would i get the info from the title to get the ID of the blog post? 





//get blog posts onto page on loads
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


                                                <p id="blogTitle">${post.title}</p>
                                                <p id="blogAuthor">${post.author}</p>
                                                <p id="blogContent">${post.content}</p>
                                                <hr class="my-4">
                                                <button type="button" class="btn btn-danger">Destroy Blog Post</button>
                                                <button type="button" class="btn btn-secondary">Edit Blog Post</button>
                                                <button id="blogSubmit" class="btn btn-primary">Comment</button>
                                                <p class="lead"></p>
                                        </div>`;
                secondCol.appendChild(blogPostCard);




                let idOfComment = document.getElementById('comments');

                let commentOnBlog = document.createElement('div');
                commentOnBlog.innerHTML =       `<div class="card-body">
                                                        <p class="card-text">${post.comment.content}</p>
                                                        <p class="card-text" id="commentauthor">By ${post.comment.author}</p>
                                                        <button type="button" class="btn btn-secondary">Edit Comment</button>
                                                        <button type="button" class="btn btn-danger">Destroy Comment</button>
                                                </div>`;
                idOfContent.appendChild(commentOnBlog);

        
})
.catch(err => console.log(err));



// https://mrfrontend.org/2017/10/javascript-basics-select-one-or-multiple-html-elements/


