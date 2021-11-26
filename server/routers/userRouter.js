//dependencies
const express = require('express');
const { signup } = require('../controllers/userController');

//initialise the router
const router = express.Router();

//routes here
router.post('/', signup);

//export the router
module.exports = router;
