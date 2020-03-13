console.log('Ground Control to Major DOM...');

const form = document.getElementById('blogForm');
const API = 'http://localhost:4000/';

//this is used to grab the id from a URL: 
queryString = location.search
const urlParams = new URLSearchParams(queryString);
const blogId = urlParams.get('id');
console.log(blogId)


//This is the button click to update a blog entry: 

form.addEventListener('click', (event) => {

        event.preventDefault();


        if(event.target.name === 'Submit'){


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


//this is used to go back to the index route:  It may not be working. 
function clickinner(target) { // Target refers to the clicked element

        event.preventDefault();

        window.location ="/";
};
