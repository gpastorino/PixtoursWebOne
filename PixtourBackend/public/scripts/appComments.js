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
                                                <button type="button" class="btn btn-danger">Destroy Blog Post</button>
                                                <button type="button" class="btn btn-secondary">Edit Blog Post</button>
                                                <button id="blogSubmit" class="btn btn-primary">Comment</button>
                                                <p class="lead"></p>
                                        </div>`;
                secondCol.appendChild(blogPostCard);
        })
})
.catch(err => console.log(err));