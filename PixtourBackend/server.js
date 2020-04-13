

//for th admin panel after our users can create account, login, and make blogposts.
// Resource to get this done:  https://www.google.com/search?sxsrf=ALeKk00AwL6920_SZ8KpJuFMCjUTi9LN2Q%3A1584924951321&source=hp&ei=Fwl4XqqbEdDZ-gT52aDQBw&q=how+to+make+an+admin+panel+in+node&oq=how+to+make+an+admin+panel+in+node&gs_l=psy-ab.3..0i22i30l2.24.5319..5457...3.0..2.167.3352.27j10......0....1..gws-wiz.......35i39j0i273j0i67j0i131i273j0j0i131j0i3j33i160.V1qksK0VhYE&ved=0ahUKEwjqgt7Fsa_oAhXQrJ4KHfksCHoQ4dUDCAg&uact=5#kpvalbx=_HQl4XqyLDs39-gS4i4jgAQ28
//allow someone to leave a comment on a comment. 



//external modules:
const express = require('express');
const bodyParser = require('body-parser');

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
// https://en.wikipedia.org/wiki/Cross-origin_resource_sharing

const cors = require("cors");



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



//MIDDLEWARE:=====================================================================

const corsOptions = {

        origin: ["http://localhost:3000"], 
        credentials: true, 
        optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

//to put strings together using variables: 
const formatter = require('./middleware/formatter');


//middleware:

//body parser middleware:  
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());  //this is for our request.body


//Serve public directory




app.use(formatter);

//view routes/HTML routes:
//this is to show the view of the website html:  
//this is also to reach the individual posted blog and comments area

app.use('/', routes.views);



//server public directory:  

//this is to have access to the public folder for the views:

app.use('/api/v1/comment', routes.comment);


app.use('/api/v1/blog', routes.blog);


//added for AUTH --- USER SESSION
app.use("/api/v1/auth", routes.auth);


// app.listen(process.env.PORT);
app.listen(PORT, () => console.log(`This is Pixtours Server running!`));
// app.listen(PORT, () => console.log(`This is Pixtours Server running! ${PORT}`));



// https://stackoverflow.com/questions/29819114/how-to-display-json-data-in-a-div-when-json-data-is-in-array/29819278
//https://stackoverflow.com/questions/8314712/how-do-i-dynamically-populate-html-elements-with-json-data-with-javascript-not-j


