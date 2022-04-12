const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
  },
  {
    timestamps: true,
  }
);
console.log(module.exports);
module.exports = mongoose.model("User", userSchema);