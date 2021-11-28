//dependencies
const mongoose = require('mongoose');

//create user schema
const userSchema = mongoose.Schema(
   {
      name: { type: String, required: [true, 'Name is required'] },
      email: { type: String, required: [true, 'Email is required'] },
      password: { type: String, required: [true, 'Password is required'] },
   },
   { timestamps: true }
);

//create User model
const User = mongoose.model('user', userSchema);

//export the model
module.exports = User;
