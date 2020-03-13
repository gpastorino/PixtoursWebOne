
//to be used for DRY
const API = 'http://localhost:4000/';


queryString = location.search
const urlParams = new URLSearchParams(queryString);
const blogId = urlParams.get('id');


//Gets blog posts onto page on load
fetch(`http://localhost:4000/api/v1/blog/${blogId}`, {

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
                                                <button id="backToBlog"class="btn btn-primary" name="Back">Back</button>
                                                <p class="lead"></p>
                                        </div>`;
                secondCol.appendChild(blogPostCard);


                let commentsArray = post.comments;
                let idOfComment = document.getElementById('commentsPost');
                
                commentsArray.forEach(comment => {
                        console.log(comment)
                        let commentOnBlog = document.createElement('div');
                        commentOnBlog.innerHTML =       `<div class="card-body">
                                                                <p class="card-text">${comment.content}</p>
                                                                <p class="card-text" id="commentauthor">By ${comment.author}</p>
                                                                <p id="breaker"></p>
                                                               
                                                        </div>`;
                        idOfComment.appendChild(commentOnBlog);
                })
})
.catch(err => console.log(err));


//Back button to get back to the index page.
const backtoHome = document.getElementById('blog');

backtoHome.addEventListener('click', (event) => {

        event.preventDefault();

                window.location ="/";
        
});

//Meant to provide a route to leave a comment. 
const commentForm = document.getElementById('commentForm');

commentForm.addEventListener('click', (event) => {

        // console.log('HELLO')

        console.log(event.target.name);
        // event.preventDefault();

        if(event.target.name === 'Submit'){

                console.log('HELLO')
        event.preventDefault();
                

        const authorInput = document.getElementById('commentAuthor');
        const contentInput = document.getElementById('commentContent');

        //creating object to send over to the server:

        const newComment = {
                author: authorInput.value, 
                content:  contentInput.value
        };

        console.log(JSON.stringify(newComment));

        fetch(`/api/v1/comment/${blogId}/create`, {
                method: 'POST',

                headers: {
                        'Content-Type': 'application/json',
                },
                body: JSON.stringify(newComment),
        })
        .then((response) => response.json())
        .then((data)=> console.log(data))
        .catch((err)=> console.log(err));

        }
        // event.preventDefault();
        // location.reload();
});
