const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

//index:

router.get('/', controllers.blog.index);

//create:

router.post('/', controllers.blog.create);

//show:

router.get('/:id', controllers.blog.show);

//show async refactor..?


// update:

router.put('/:id', controllers.blog.update);



module.exports= router;

