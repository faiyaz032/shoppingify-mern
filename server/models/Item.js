//dependencies
const mongoose = require('mongoose');
const { default: slugify } = require('slugify');

//Item schema
const itemSchema = mongoose.Schema({
   name: { type: String, required: [true, 'Item name must be required'] },
   slug: String,
   category: { type: String, required: [true, 'You must select a required'] },
   image: { type: String },
});

itemSchema.pre('save', function (next) {
   this.slug = slugify(this.name, { lower: true });
   next();
});

const Item = mongoose.model('item', itemSchema);

module.exports = Item;
