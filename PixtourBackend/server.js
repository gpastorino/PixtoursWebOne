
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
const PORT  = process.env.PORT || 3000;


//middleware:
app.use(BodyParser.json());  //this is for our request.body

app.use(
        session({
          //to store session in the database
          store: new MongoStore({ url: process.env.MONGO_URI }), 
          secret: process.env.SESSION_SECRET, 
          resave: false, 
          saveUninitialized: false, //this is so we only create a session if a property has been added to the session.. 
          cookie: {
          maxAge: 1000 * 60 * 60 * 24 * 7 * 2 //Expire in 2 weeks
          }
        })
      );

// app.get('/', (req, res)=> res.send('Hello World!'));

app.use('api/v1/comment', routes.comment);
app.use('api/v1/blog', routes.blog);



app.listen(PORT, () => console.log("This is Pixtours Server running!"));

