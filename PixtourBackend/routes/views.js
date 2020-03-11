const express = require('express');
const router = express.Router();
const path = require('path');

//starts at localhost:4000/


//public folder serve:
router.use(express.static(path.join(__dirname, '../public')));


router.get('/', (request, response) => {
        response.sendFile(path.join(__dirname, '../views/index.html')); 
})


module.exports = router;