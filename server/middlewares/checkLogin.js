//dependencies
const jwt = require('jsonwebtoken');

//internal imports
const catchAsync = require('../utils/catchAsync');

const checkLogin = catchAsync(async (req, res, next) => {
   //check if token or cookies exists
   const cookies = Object.keys(req.cookies).length > 0 ? req.cookies : null;

   if (cookies) {
      //extract the token from cookie
      const token = cookies[process.env.COOKIE_NAME];
      //decode the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;
      next();
   }
});

//export the module
module.exports = checkLogin;
