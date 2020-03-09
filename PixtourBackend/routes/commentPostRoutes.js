const express = require('express');
const router = express.Router();
const controllers = require('../controllers');



//  '/api/ goes in front of each of these.  

//index

router.get('/blog',  (request, response) => {
response.send('HELLO 2');
});

//show:
// router.get('/comment/:id', (request, response)=>{
       
// });
// router.get('/comment/:id', controllers.comment.show);


//create:
router.post('/comment/create', controllers.comment.create);


//update:
router.put('/comment/:id', controllers.comment.update);

//destroy:

router.delete('/comment/:id', controllers.comment.destroy)



module.exports= router;

