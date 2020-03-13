import { format } from "url";

console.log('Ground Control to Major Tom...');


form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const author= document.getElementById("author").value;
        const content= document.getElementById("content").value;

        console.log(title);
        console.log(author);
        console.log(content);

        const newBlog = {
                title: title,
                author: author, 
                content: content,
        }

        fetch('https://localhost:4000/api/v1/create', {
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