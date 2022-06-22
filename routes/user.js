const router = require("express").Router();
const User = require("../models/userModel");

router.get("/", (req, res) => {
  res.json({ msg: "Get all the Users routes" });
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const userHub = await User.create({ username, password });
    res.status(200).json(userHub);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/", (req, res) => {
  res.json({ msg: "Delete all the users routes" });
});

module.exports = router;
