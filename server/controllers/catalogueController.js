const Catalogue = require("../models/catalogueModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Create Catalogue
const createCatalogue = async (req, res) => {
  res.json({ msg: "create" });
};

// Read Catalogue
const readCatalogue = async (req, res) => {
  res.json({ msg: "read" });
};

// Read all Catalogues
const readAllCatalogues = async (req, res) => {
  res.json({ msg: "read all" });
};

// Update Catalogue
const updateCatalogue = async (req, res) => {
  res.json({ msg: "update" });
};

// Delete Catalogue
const deleteCatalogue = async (req, res) => {
  res.json({ msg: "delete" });
};

module.exports = {
  createCatalogue,
  readCatalogue,
  readAllCatalogues,
  updateCatalogue,
  deleteCatalogue,
};
