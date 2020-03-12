console.log('Ground Control to Major DOM...');

const form = document.getElementById('blogForm');
const API = 'http://localhost:4000/';


//this is how to reference the the id in a url.  
//https://www.sitepoint.com/get-url-parameters-with-javascript/
//https://itnext.io/coding-the-5-basic-restful-actions-for-javascript-c25279483e4f
//https://jsao.io/2018/04/creating-a-rest-api-handling-post-put-and-delete-requests/


queryString = location.search
const urlParams = new URLSearchParams(queryString);
const blogId = urlParams.get('id');
console.log(blogId)


// const updateBlogPost = document.getElementById('updateBlogPost');

form.addEventListener('click', (event) => {

        event.preventDefault(); 


        if(event.target.name === 'Submit'){
                // blogId = event.target.id;
                        // console.log(blogId)

                const titleInput = document.getElementById('title');
                const authorInput = document.getElementById('author');
                const contentInput = document.getElementById('blogContent');

                //creating object to send over to the server:

                const updatedBlog = {
                        title: titleInput.value, 
                        author: authorInput.value, 
                        content:  contentInput.value
                };

                console.log(updatedBlog);

                fetch(`http://localhost:4000/api/v1/blog/${blogId}`, {
                        method: 'PUT',
                        headers: {
                                'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(updatedBlog),
                })
                .then((response) => response.json())
                .then((data)=> console.log(data))
                .catch((err)=> console.log(err));

        }else if(event.target.name === 'Back'){
              
                event.preventDefault();
        
                window.location ="/";
        }
});


function clickinner(target) { // Target refers to the clicked element

        event.preventDefault();

        window.location ="/";
};


// form.addEventListener('submit', (event) => {

//         // event.preventDefault();

//         const titleInput = document.getElementById('title');
//         const authorInput = document.getElementById('author');
//         const contentInput = document.getElementById('blogContent');

//         //creating object to send over to the server:

//         const newBlog = {
//                 title: titleInput.value, 
//                 author: authorInput.value, 
//                 content:  contentInput.value
//         };

//         console.log(newBlog);

//         fetch('http://localhost:4000/api/v1/blog/create', {
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