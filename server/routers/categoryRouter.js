const express = require("express");
const categoryRouter = express.Router();
const {
  createCategory,
  readCategory,
  readAllCategorys,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

// Create
categoryRouter.post("/create", createCategory);

// Read
categoryRouter.get("/read", readCategory);

// Read All
categoryRouter.get("/read/all", readAllCategorys);

// Update
categoryRouter.patch("/update", updateCategory);

// Delete
categoryRouter.delete("/delete", deleteCategory);

module.exports = categoryRouter;
