const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

//index:

//  '/api/ goes in front of each of these.  

router.get('/blog', (request, response)=>{
        response.send({type:'GET'});
});



// controllers.blog.index);
// router.get('/', controllers.blog.index);

//create:

router.post('/blog/', controllers.blog.create);

//show:

router.get('/blog/:id', controllers.blog.show);

// update:

router.put('/blog/:id', controllers.blog.update);

// delete blog:
router.delete('/blog/:id', controllers.blog.destroy);

module.exports= router;

