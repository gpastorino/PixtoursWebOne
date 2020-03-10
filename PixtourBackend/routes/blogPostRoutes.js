const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

//index:

//  '/api/ goes in front of each of these.  

// router.get('/blog', (request, response)=>{
//         response.send({type:'GET'});
// });



// controllers.blog.index);
router.get('/', controllers.blog.index);

//create:

router.post('/create', controllers.blog.create);

//show:

router.get('/:id', controllers.blog.show);

// update:

router.put('/:id', controllers.blog.update);

// delete blog:
router.delete('/:id', controllers.blog.destroy);

module.exports= router;

