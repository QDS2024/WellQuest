const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  categoryIds: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Quest", questSchema);
