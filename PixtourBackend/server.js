
//external modules:
const express = require('express');
const bodyParser = require('body-parser');


//instanced modules
const app = express();

//this must be before the declaration of the PORT.
require('dotenv').config();


//configuration variable:  
//heroku port, and local port:  
var PORT  = process.env.PORT || `4000`;

//require Database:
const db = require('./models');


//internal modules:
const routes = require('./routes');



//to put strings together using variables: 
const formatter = require('./middleware/formatter');


//middleware:

app.use(bodyParser.json());  //this is for our request.body

app.use(formatter);

//view routes:
//this is to show the view of the website html:  
//this is also to reach the individual posted blog and comments area

app.use('/', routes.views);



//server public directory:  
//this is to have access to the public forlder for the views:

app.use('/api/v1/comment', routes.comment);


app.use('/api/v1/blog', routes.blog);


// app.listen(process.env.PORT);
app.listen(PORT, () => console.log(`This is Pixtours Server running!`));
// app.listen(PORT, () => console.log(`This is Pixtours Server running! ${PORT}`));



// https://stackoverflow.com/questions/29819114/how-to-display-json-data-in-a-div-when-json-data-is-in-array/29819278
//https://stackoverflow.com/questions/8314712/how-do-i-dynamically-populate-html-elements-with-json-data-with-javascript-not-j


