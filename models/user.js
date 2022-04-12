const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String
  }, {
    timestamps: true
  });

  module.exports =
  mongoose.models.User|| mongoose.model('User', userSchema);