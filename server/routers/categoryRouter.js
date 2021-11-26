//dependencies
const express = require('express');
const { getCategories } = require('../controllers/categoryController');

//initialise the router
const router = express.Router();

//routes here
router.get('/', getCategories);

//export the router
module.exports = router;
