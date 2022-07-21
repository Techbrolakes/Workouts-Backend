const user = require("../models/userModel");

const loginUser = async (req, res) => {
  res.json({ msg: "Login User" });
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUsers = await user.signup(email, password);
    res.status(200).json({ email, newUsers });
  } catch {
    res.status(400).json("Error signing up");
  }
};

module.exports = {
  loginUser,
  signupUser,
};
