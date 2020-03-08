const express = require('express');
const router = express.Router();
const controllers = require('../controllers');


//index

// router.get('/', controllers.commentPost.index);



//create:
router.post('/', controllers.comment.create);


//show:
router.get('/:id', controllers.comment.show);




//update:
router.put('/:id', controllers.comment.update);
//destroy:

router.delete('/:id', controllers.comment.destroy)



module.exports= router;

