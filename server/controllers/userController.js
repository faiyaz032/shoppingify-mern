//dependencies

//internal imports
const catchAsync = require('../utils/catchAsync');

const signup = catchAsync(async (req, res, next) => {
   //hash the user given password
   //create the user
   //save the user
});

//export the functions
module.exports = { signup };
