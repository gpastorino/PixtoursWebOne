

console.log('Ground Control to Super Major Timtam...');
const burny = document.getElementById('burny');
const bloggy = document.getElementById('bloggy');

const form = document.getElementById('blogForm');
const API = 'http://localhost:4000/';


//Get blog posts onto page on loads
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
                                                <p class="display-3">Blog Entry # ${numCallbackRuns}</p>
                                                <h3 id="blogTitle">${post.title}</h3>
                                                <p id="blogAuthor">${post.author}</p>
                                                <p id="blogContent">${post.content}</p>
                                                <hr class="my-4">
                                                <button id=${post._id} name="delete" type="button" class="btn btn-danger">Destroy Blog Post</button>
                                                <button id=${post._id} name="edit" type="button" class="btn btn-secondary">Edit Blog Post</button>
                                                <button id=${post._id} name="commentOnBlog" class="btn btn-primary">Comment</button>
                                                <p class="lead"></p>
                                        </div>`;
                secondCol.appendChild(blogPostCard);
        })
})
.catch(err => console.log(err));



//This code is to save a new blog post
//create:

form.addEventListener('submit', (event) => {

        // event.preventDefault();

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

        bloggy.play();
});



//Delete route:  

const deleteBlogPost = document.getElementById('deleteBlogPost'); //this is the div that exists before, and encompasses all of the dynamically added divs.

//this one is dynamically added. 
// const deleteBlog = document.getElementById('deleteBlog'); 

deleteBlogPost.addEventListener('click', (event) => {
        if(event.target.name === 'delete'){
                blogId = event.target.id;  //how did you know this would derive the id? is it the objec property of the div? 
                console.log(blogId)

                fetch(`${API}api/v1/blog/${blogId}`, {
                        method: 'DELETE',
                })
                        .then((response) => {
                                response.json()
                                location.reload();
                        })
                        // .then((data) => getAllBlogs())
                        .catch((err) => console.log(err));
                        burny.play();
        }
        else if(event.target.name === 'edit'){
                blogId = event.target.id;
                console.log(blogId)

                location.href = `/blog/?id=${blogId}`

        }
        else if(event.target.name === 'commentOnBlog'){
                blogId = event.target.id;
                console.log(blogId);
                location.href = `/comments/?id=${blogId}`
        };

});




function clickinner(target) { // Target refers to the clicked element
        window.location ="/";
};




// taken from the div: Will put back to add CRUD in the future:  

/* <button id="commentOnBlog" name="commentOnBlog" class="btn btn-primary">Comment</button> */
