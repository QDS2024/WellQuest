const express = require("express");
const categoryRouter = express.Router();

// Create
categoryRouter.post("/create", (req, res) => {
  res.json({ msg: "create" });
});

// Read
categoryRouter.get("/read", (req, res) => {
  res.json({ msg: "read" });
});

// Read All
categoryRouter.get("/read/all", (req, res) => {
  res.json({ msg: "read all" });
});

// Update
categoryRouter.patch("/update", (req, res) => {
  res.json({ msg: "update" });
});

// Delete
categoryRouter.delete("/delete", (req, res) => {
  res.json({ msg: "update" });
});

module.exports = categoryRouter;
