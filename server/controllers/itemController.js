//dependencies

//internal imports
const Item = require('../models/Item');
const catchAsync = require('../utils/catchAsync');

const getItems = function (req, res, next) {
   res.send('This is Items');
};

const createItem = catchAsync(async (req, res, next) => {
   const image = `${process.env.APP_URL}/uploads/${req.file.filename}`;
   await Item.create({ ...req.body, image: image });
   res.status(200).json({ status: 'success', message: 'Item created successfully' });
});

//export the functions
module.exports = { getItems, createItem };
