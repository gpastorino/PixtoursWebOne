
//external modules:
const express = require('express');
const bodyParser = require('body-parser');


//instanced modules
const app = express();


require('dotenv').config();

//internal modules:
const routes = require('./routes');


//configuration variable:  
//heroku port, and local port:  
const PORT  = process.env.PORT;


//middleware:
app.use(bodyParser.json());  //this is for our request.body


// this worked!
app.get('/', function(request, response){
        response.sendFile('views/index.html', {
                root: __dirname
        })
        
})


app.use('/api/v1/comment', routes.comment);
app.use('/api/v1/blog', routes.blog);



app.listen(PORT, () => console.log(`This is Pixtours Server running! ${PORT}`));

