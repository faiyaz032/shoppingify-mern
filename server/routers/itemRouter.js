//dependencies
const express = require('express');
const { getItems } = require('../controllers/itemController');

//initialise the router
const router = express.Router();

//routes here
router.get('/', getItems);

//export the router
module.exports = router;
