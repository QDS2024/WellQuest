const Category = require("../models/categoryModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Create Category
const createCategory = async (req, res) => {
  res.json({ msg: "create" });
};

// Read Category
const readCategory = async (req, res) => {
  res.json({ msg: "read" });
};

// Read all Categorys
const readAllCategorys = async (req, res) => {
  res.json({ msg: "read all" });
};

// Update Category
const updateCategory = async (req, res) => {
  res.json({ msg: "update" });
};

// Delete Category
const deleteCategory = async (req, res) => {
  res.json({ msg: "delete" });
};



module.exports = {
  createCategory,
  readCategory,
  readAllCategorys,
  updateCategory,
  deleteCategory,
};
