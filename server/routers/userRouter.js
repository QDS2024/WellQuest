const express = require("express");
const userRouter = express.Router();

// Create
userRouter.post("/create", (req, res) => {
  res.json({ msg: "create" });
});

// Read
userRouter.get("/read", (req, res) => {
  res.json({ msg: "read" });
});

// Read All
userRouter.get("/read/all", (req, res) => {
  res.json({ msg: "read all" });
});

// Update
userRouter.patch("/update", (req, res) => {
  res.json({ msg: "update" });
});

// Delete
userRouter.delete("/delete", (req, res) => {
  res.json({ msg: "update" });
});

module.exports = userRouter;
