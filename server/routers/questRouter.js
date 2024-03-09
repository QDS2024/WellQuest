const express = require("express");
const questRouter = express.Router();

// Create 
  questRouter.post("/create", (req, res) => {
  res.json({ msg: "create" });
});

// Read 
  questRouter.get("/read", (req, res) => {
  res.json({ msg: "read" });
});

// Read All 
  questRouter.get("/read/all", (req, res) => {
  res.json({ msg: "read all" });
});

// Update 
  questRouter.patch("/update", (req, res) => {
  res.json({ msg: "update" });
});

// Delete 
  questRouter.delete("/delete", (req, res) => {
  res.json({ msg: "update" });
});

module.exports = questRouter;
