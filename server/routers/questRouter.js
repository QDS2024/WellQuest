const express = require("express");
const questRouter = express.Router();
const {
  createQuest,
  readQuest,
  readAllQuests,
  updateQuest,
  deleteQuest,
} = require("../controllers/questController");

// Create 
  questRouter.post("/create", createQuest);

// Read 
  questRouter.get("/read", readQuest);

// Read All 
  questRouter.get("/read/all", readAllQuests);

// Update 
  questRouter.patch("/update", updateQuest);

// Delete 
  questRouter.delete("/delete", deleteQuest);

module.exports = questRouter;
