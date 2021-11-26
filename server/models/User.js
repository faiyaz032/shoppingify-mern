//dependencies
const mongoose = require('mongoose');

//create user schema
const userSchema = mongoose.Schema(
   {
      name: { type: String, required: [true, 'Name is required'] },
      email: { type: String, required: [true, 'Email is required'] },
      phone: { type: String, required: [true, 'Phone is required'] },
   },
   { timestamps: true }
);

//create User model
const User = mongoose.model('user', userSchema);

//export the model
module.exports = User;
