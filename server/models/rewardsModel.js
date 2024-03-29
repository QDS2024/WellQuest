const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const rewardsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image_tag: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Rewards", rewardsSchema);
