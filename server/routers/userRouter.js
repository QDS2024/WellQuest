const express = require("express");
const userRouter = express.Router();
const {
  createUser,
  readUser,
  readAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// Create
userRouter.post("/create", createUser);

// Read
userRouter.get("/read", readUser);

// Read All
userRouter.get("/read/all", readAllUsers);

// Update
userRouter.patch("/update", updateUser);

// Delete
userRouter.delete("/delete", deleteUser);

module.exports = userRouter;
