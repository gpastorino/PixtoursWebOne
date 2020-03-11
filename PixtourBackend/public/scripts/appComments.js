// const form = document.getElementById('commentForm');


// const form = document.getElementById('blogForm');

const API = 'http://localhost:4000/';



//get blog posts onto page on loads
fetch('http://localhost:4000/api/v1/blog/5e6684c4b2636e5bc84fed67', {
        method: 'GET'
}).then((response) => response.json())
.then(data => {
        console.log(data);

        let post = data.data;

        //this is for the count:
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
        
})
.catch(err => console.log(err));



// https://mrfrontend.org/2017/10/javascript-basics-select-one-or-multiple-html-elements/


