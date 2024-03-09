const express = require("express");
const catalogueRouter = express.Router();

// Create
catalogueRouter.post("/create", (req, res) => {
  res.json({ msg: "create" });
});

// Read
catalogueRouter.get("/read", (req, res) => {
  res.json({ msg: "read" });
});

// Read All
catalogueRouter.get("/read/all", (req, res) => {
  res.json({ msg: "read all" });
});

// Update
catalogueRouter.patch("/update", (req, res) => {
  res.json({ msg: "update" });
});

// Delete
catalogueRouter.delete("/delete", (req, res) => {
  res.json({ msg: "update" });
});

module.exports = catalogueRouter;
