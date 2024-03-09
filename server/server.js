// main entry point
// Set up requires
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// dotenv access
require("dotenv").config();
const mongoUser = process.env.MONGOUSER;
const mongoPw = process.env.MONGOPW;
const mongoDb = process.env.MONGODB;
const port = process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

// Mongodb Connection
const mongoUri = `mongodb+srv://${mongoUser}:${mongoPw}@cluster0.hg1ibzx.mongodb.net/${mongoDb}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log(`Connected to MongoDB! Database: ${mongoDb}`);
    // Server start
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
