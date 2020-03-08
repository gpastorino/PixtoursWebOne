const express = require('express');
const router = express.Router();
const controllers = require('../controllers');


//index

// router.get('/', controllers.commentPost.index);


//show:
router.get('/:id', controllers.commentPost.show);


//create:
router.post('/', controllers.commentPost.create);



//update:
router.put('/:id', controllers.commentPost.update);
//destroy:

router.delete('/:id', controllers.commentPost.delete)



module.exports= router;

