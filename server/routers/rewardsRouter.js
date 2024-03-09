const express = require("express");
const rewardsRouter = express.Router();
const {
  createRewards,
  readRewards,
  readAllRewards,
  updateRewards,
  deleteRewards,
} = require("../controllers/rewardsController");

// Create
rewardsRouter.post("/create", createRewards);

// Read
rewardsRouter.get("/read", readRewards);

// Read All
rewardsRouter.get("/read/all", readAllRewards);

// Update
rewardsRouter.patch("/update", updateRewards);

// Delete
rewardsRouter.delete("/delete", deleteRewards);

module.exports = rewardsRouter;
