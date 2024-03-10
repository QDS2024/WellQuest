const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

// Register a new user
const register = async (req, res) => {
  let { email, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
      points: 0,
      questIds: [],
    });
    res.status(200).json({ message: "Registration successful", data: user });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// Login with an existing user
const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1 hour",
    });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
