//dependencies
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//internal imports
const User = require('../models/User');
const catchAsync = require('../utils/catchAsync');

const signup = catchAsync(async (req, res, next) => {
   //hash the user given password
   const hashedPassword = await bcrypt.hash(req.body.password, 10);
   //create the user
   await User.create({ ...req.body, password: hashedPassword });
   //send response
   res.status(200).json({ status: 'success', message: 'User signed up successfully' });
});

const login = catchAsync(async (req, res, next) => {
   //get the user from database by input email
   const user = await User.findOne({ email: req.body.email });

   //check if the password is matched with the corresponsing user
   if (user) {
      const isValidPassword = await bcrypt.compare(req.body.password, user.password);
      if (isValidPassword) {
         //if matchted, sign jwt token and set a cookie
         const userObject = { name: user.name, email: user.email };
         const token = jwt.sign(userObject, process.env.JWT_SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRY_TIME,
         });

         res.cookie(process.env.COOKIE_NAME, token, {
            maxAge: process.env.JWT_EXPIRY_TIME,
            httpOnly: true,
            secure: false, //TODO: need to make it true when we deploy the server to production
            sameSite: 'none',
         });
      }
   }
   //send response
   res.status(200).json({ status: 'success', message: 'User logged in successfully' });
});

//export the functions
module.exports = { signup, login };
