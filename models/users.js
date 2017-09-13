var userSchema, mongoose;

mongoose = require('mongoose');

userSchema = mongoose.Schema({
  name: String,
  mobile: String,
  sex:Number,
  number: String
});

module.exports = userSchema;