const User = require("../models/userModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Create user
const createUser = async (req, res) => {
  res.json({ msg: "create" });
};

// Read user
const readUser = async (req, res) => {
  res.json({ msg: "read" });
};

// Read all users
const readAllUsers = async (req, res) => {
  res.json({ msg: "read all" });
};

// Update user
const updateUser = async (req, res) => {
  res.json({ msg: "update" });
};

// Delete user
const deleteUser = async (req, res) => {
  res.json({ msg: "delete" });
};

module.exports = {
  createUser,
  readUser,
  readAllUsers,
  updateUser,
  deleteUser,
};
