const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const catalogueSchema = new Schema({
  rewardsIDs: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Catalogue", catalogueSchema);
