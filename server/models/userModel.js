const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  questIds: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
