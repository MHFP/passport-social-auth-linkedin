var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create User Schema
var User = new Schema({
  pic: String,
  email: String,
  profile: Object,
  name: String,
  someID: String
});


module.exports = mongoose.model('users', User);
