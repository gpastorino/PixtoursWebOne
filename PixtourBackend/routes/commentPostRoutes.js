const express = require('express');
const router = express.Router();
const controllers = require('../controllers');



//  /api/ goes in front of each of these.  




// creating a different version of comment:  =======================


//index

router.get('/', controllers.comment.index);

//show:

router.get('/:id', controllers.comment.show);


//create:

//this format will wokr to create a route, and the route can relate to blog and comment as well.  as the server will be able to make sense of it. 

router.post('/:id/create', controllers.comment.create);
        

//associate comment with blog post id here

// router.post('/')


//update:

router.put('/:id', controllers.comment.update);

//destroy:

router.delete('/:id', controllers.comment.destroy)






// //index

// router.get('/', controllers.comment.index);

// //show:

// router.get('/:id', controllers.comment.show);


// //create:
// router.post('/create', controllers.comment.create);
        

// //associate comment with blog post id here

// // router.post('/')


// //update:

// router.put('/:id', controllers.comment.update);

// //destroy:

// router.delete('/:id', controllers.comment.destroy)



module.exports= router;

