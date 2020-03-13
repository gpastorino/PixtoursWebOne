const express = require('express');
const router = express.Router();
const path = require('path');

//starts at localhost:4000/


//public folder serve:
router.use(express.static(path.join(__dirname, '../public')));


router.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, '../views/index.html')); 
})

router.get('/comments', (request, response) => {
        response.sendFile(path.join(__dirname, '../views/comments.html'));
})

router.get(`/blog`, (request, response) => {
        response.sendFile(path.join(__dirname, '../views/updateBlog.html'));
})


// //make route for creating comments form

        //TODO: Inside comments form, add an event listener to redirect to main comments page on submission of comments form


module.exports = router;