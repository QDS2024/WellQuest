const Category = require("../models/categoryModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Create Category
const createCategory = async (req, res) => {
  let { title, description } = req.body;

  try {
    const category = await Category.create({
      title,
      description,
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read Category
const readCategory = async (req, res) => {
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const category = await Category.findById(id);

  if (!category) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(category);
};


// Read all Categorys
const readAllCategorys = async (req, res) => {
  try {
    const categorys = await Category.find({}).sort({ createdAt: -1 });
    res.status(200).json(categorys);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Update Category
const updateCategory = async (req, res) => {
  const { id, ...data } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid id" });
  }

  try {
    const category = await Category.findOneAndUpdate(
      { _id: ObjectId.createFromHexString(id) },
      { ...data },
      { runValidators: true }
    );
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Delete Category
const deleteCategory = async (req, res) =>  {
  const { id } = req.query;
  //res.json({ msg: "delete" });
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const category = await Category.findOneAndDelete({
    _id: ObjectId.createFromHexString(id),
  });

  if (!category) {
    return res.status(404).json({ error: "category not found" });
  }

  res.status(200).json(category);
};



module.exports = {
  createCategory,
  readCategory,
  readAllCategorys,
  updateCategory,
  deleteCategory,
};
