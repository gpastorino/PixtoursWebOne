const express = require("express");
const router = express.Router();
const controller = require("../controllers");

//REGISTER USER

router.post('/register', controller.auth.register);

//LOGIN

router.post('/login', controller.auth.login);

//LOGOUT

router.delete('/logout', controller.auth.logout);

//EXPORT


module.exports = router;


