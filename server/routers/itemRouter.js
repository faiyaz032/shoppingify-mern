//dependencies
const express = require('express');
const { getItems, createItem } = require('../controllers/itemController');
const processMulterImage = require('../utils/processMulterImage');

//initialise the router
const router = express.Router();

//routes here
router.get('/', getItems);
router.post('/', processMulterImage, createItem);

//export the router
module.exports = router;
