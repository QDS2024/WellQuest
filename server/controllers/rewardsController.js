const Rewards = require("../models/rewardsModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Create rewards
const createRewards = async (req, res) => {
  res.json({ msg: "create" });
};

// Read rewards
const readRewards = async (req, res) => {
  res.json({ msg: "read" });
};

// Read all rewards
const readAllRewards = async (req, res) => {
  res.json({ msg: "read all" });
};

// Update rewards
const updateRewards = async (req, res) => {
  res.json({ msg: "update" });
};

// Delete rewards
const deleteRewards = async (req, res) => {
  res.json({ msg: "delete" });
};

module.exports = {
  createRewards,
  readRewards,
  readAllRewards,
  updateRewards,
  deleteRewards,
};