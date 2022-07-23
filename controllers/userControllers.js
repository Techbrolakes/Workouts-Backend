const user = require("../models/userModel");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  res.json({ msg: "Login User" });
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUsers = await user.signup(email, password);
    res.status(200).json({ email, newUsers });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
