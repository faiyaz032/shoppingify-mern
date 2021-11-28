//dependencies
const express = require('express');
const { signup, login } = require('../controllers/userController');
const checkLogin = require('../middlewares/checkLogin');

//initialise the router
const router = express.Router();

//routes here
router.post('/signup', signup);
router.post('/login', login);

//export the router
module.exports = router;
