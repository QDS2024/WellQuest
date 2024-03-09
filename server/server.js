// main entry point
// Set up requires
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// dotenv access
require("dotenv").config();
const mongoUser = process.env.MONGOUSER;
const mongoPw = process.env.MONGOPW;
const mongoDb = process.env.MONGODB;
const port = process.env.PORT;

// Routers
const userRouter = require("./routers/userRouter");
const questRouter = require("./routers/questRouter");
const categoryRouter = require("./routers/categoryRouter");
const catalogueRouter = require("./routers/catalogueRouter");
const rewardsRouter = require("./routers/rewardsRouter");

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Sample route
app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

// User endpoints
app.use("/api/user", userRouter);
app.use("/api/quest", questRouter);
app.use("/api/category", categoryRouter);
app.use("/api/catalogue", catalogueRouter);
app.use("/api/reward", rewardsRouter);

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
