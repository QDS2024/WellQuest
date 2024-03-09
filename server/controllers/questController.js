const Quest = require("../models/questModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Create Quest
const createQuest = async (req, res) => {
  res.json({ msg: "create" });
};

// Read Quest
const readQuest = async (req, res) => {
  res.json({ msg: "read" });
};

// Read all Quests
const readAllQuests = async (req, res) => {
  res.json({ msg: "read all" });
};

// Update Quest
const updateQuest = async (req, res) => {
  res.json({ msg: "update" });
};

// Delete Quest
const deleteQuest = async (req, res) => {
  res.json({ msg: "delete" });
};

module.exports = {
  createQuest,
  readQuest,
  readAllQuests,
  updateQuest,
  deleteQuest,
};
