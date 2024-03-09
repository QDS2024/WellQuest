const Catalogue = require("../models/catalogueModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Create Catalogue
const createCatalogue = async (req, res) =>{
  let { rewardIds } = req.body;

  try {
    const catalogue = await Catalogue.create({
      rewardIds,
    });
    res.status(200).json(catalogue);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Read Catalogue
const readCatalogue = async (req, res) => {
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const catalogue = await Catalogue.findById(id);

  if (!catalogue) {
    return res.status(404).json({ error: "catalogue not found" });
  }

  res.status(200).json(catalogue);
};


// Read all Catalogues
const readAllCatalogues = async (req, res) => {
  try {
    const catalogues = await Catalogue.find({}).sort({ createdAt: -1 });
    res.status(200).json(catalogues);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Catalogue
const updateCatalogue = async (req, res) =>  {
  const { id, ...data } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "invalid id" });
  }

  try {
    const catalogue = await Catalogue.findOneAndUpdate(
      { _id: ObjectId.createFromHexString(id) },
      { ...data },
      { runValidators: true }
    );
    res.status(200).json(catalogue);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Delete Catalogue
const deleteCatalogue = async (req, res) =>{
  const { id } = req.query;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const catalogue = await Catalogue.findOneAndDelete({
    _id: ObjectId.createFromHexString(id),
  });

  if (!catalogue) {
    return res.status(404).json({ error: "Catalogue not found" });
  }

  res.status(200).json(catalogue);
};

module.exports = {
  createCatalogue,
  readCatalogue,
  readAllCatalogues,
  updateCatalogue,
  deleteCatalogue,
};
