const express = require("express");
const catalogueRouter = express.Router();
const {
  createCatalogue,
  readCatalogue,
  readAllCatalogues,
  updateCatalogue,
  deleteCatalogue,
} = require("../controllers/catalogueController");

// Create
catalogueRouter.post("/create", createCatalogue);

// Read
catalogueRouter.get("/read", readCatalogue);

// Read All
catalogueRouter.get("/read/all", readAllCatalogues);

// Update
catalogueRouter.patch("/update", updateCatalogue);

// Delete
catalogueRouter.delete("/delete", deleteCatalogue);

module.exports = catalogueRouter;
