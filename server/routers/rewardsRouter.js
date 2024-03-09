const express = require("express");
const rewardsRouter = express.Router();

// Create
rewardsRouter.post("/create", (req, res) => {
  res.json({ msg: "create" });
});

// Read
rewardsRouter.get("/read", (req, res) => {
  res.json({ msg: "read" });
});

// Read All
rewardsRouter.get("/read/all", (req, res) => {
  res.json({ msg: "read all" });
});

// Update
rewardsRouter.patch("/update", (req, res) => {
  res.json({ msg: "update" });
});

// Delete
rewardsRouter.delete("/delete", (req, res) => {
  res.json({ msg: "update" });
});

module.exports = rewardsRouter;
