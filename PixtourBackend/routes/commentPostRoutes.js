const express = require('express');
const router = express.Router();
const controllers = require('../controllers');



//  '/api/ goes in front of each of these.  

//index

//show:
// router.get('/:id', (request, response)=>{
//         response.send('HELLO 2');
// });
router.get('/:id', controllers.comment.show);


//create:
router.post('/create', controllers.comment.create);


//update:
router.put('/:id', controllers.comment.update);

//destroy:

router.delete('/:id', controllers.comment.destroy)



module.exports= router;

