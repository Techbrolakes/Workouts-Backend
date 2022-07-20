const User = require("../models/userModel");

const loginUser = async (req, res) => {
  res.json({ msg: "Login User" });
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUsers = await User.create({ email, password });
    res.status(200).json(newUsers);
  } catch {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
