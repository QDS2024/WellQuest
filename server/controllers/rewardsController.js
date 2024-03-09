const Rewards = require("../models/rewardsModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Create Rewards
const createRewards = async (req, res) => {
  let { name, description, price } = req.body;

  try {
    const rewards = await Rewards.create({
      name,
      description,
      price,
    });
    res.status(200).json(rewards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read rewards
const readRewards = async (req, res) => {
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const rewards = await Rewards.findById(id);

  if (!rewards) {
    return res.status(404).json({ error: "Rewards not found" });
  }

  res.status(200).json(rewards);
};

// Read all rewards
const readAllRewards = async (req, res) => {
  try {
    const rewards = await Rewards.find({}).sort({ createdAt: -1 });
    res.status(200).json(rewards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update rewards
const updateRewards = async (req, res) => {
  const { id, ...data } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const rewards = await Rewards.findOneAndUpdate(
      { _id: ObjectId.createFromHexString(id) },
      { ...data },
      { runValidators: true }
    );
    if (!rewards) {
      return res.status(404).json({ error: "Rewards not found" });
    }
    res.status(200).json(rewards);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete rewards
const deleteRewards = async (req, res) => {
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const rewards = await Rewards.findOneAndDelete({
    _id: ObjectId.createFromHexString(id),
  });

  if (!rewards) {
    return res.status(404).json({ error: "Rewards not found" });
  }

  res.status(200).json(rewards);
};

module.exports = {
  createRewards,
  readRewards,
  readAllRewards,
  updateRewards,
  deleteRewards,
};