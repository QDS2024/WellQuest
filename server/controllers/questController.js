const Quest = require("../models/questModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Create Quest
const createQuest = async (req, res) => {
  let { title, description, points, userId, categoryIds } = req.body;

  try {
    const quest = await Quest.create({
      title,
      description,
      points,
      userId,
      categoryIds,
    });
    res.status(200).json(quest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read Quest
const readQuest = async (req, res) => {
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const quest = await Quest.findById(id);

  if (!quest) {
    return res.status(404).json({ error: "Quest not found" });
  }

  res.status(200).json(quest);
};

// Read all Quests
const readAllQuests = async (req, res) => {
  try {
    const quests = await Quest.find({}).sort({ createdAt: -1 });
    res.status(200).json(quests);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Quest
const updateQuest = async (req, res) => {
  const { id, ...data } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid id" });
  }

  try {
    const quest = await Quest.findOneAndUpdate(
      { _id: ObjectId.createFromHexString(id) },
      { ...data },
      { runValidators: true }
    );
    res.status(200).json(quest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete Quest
const deleteQuest = async (req, res) => {
  const { id } = req.query;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const quest = await Quest.findOneAndDelete({
    _id: ObjectId.createFromHexString(id),
  });

  if (!quest) {
    return res.status(404).json({ error: "Quest not found" });
  }

  res.status(200).json(quest);
};

module.exports = {
  createQuest,
  readQuest,
  readAllQuests,
  updateQuest,
  deleteQuest,
};
