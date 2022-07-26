const user = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1h" });
};

// User Login Controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const loggedInUser = await user.login(email, password);
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// User Signup Controller

const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const newUsers = await user.signup(email, password);
    // create a token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
