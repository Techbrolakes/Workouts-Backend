const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Get all the workouts routes" });
});

router.post("/", (req, res) => {
  res.json({ msg: "Post all the workouts routes", type: "Post Requests" });
});

router.patch("/", (req, res) => {
  res.json({ msg: "Patch all the workouts routes" });
});

router.delete("/", (req, res) => {
  res.json({ msg: "Delete all the workouts routes" });
});
module.exports = router;
