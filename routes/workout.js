const express = require("express");
const {
  getWorkouts,
  createWorkouts,
  getWorkout,
  updateWorkouts,
  deleteWorkouts,
} = require("../controllers/workoutControllers");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// ROUTES FOR ALL WORKOUTS
router.get("/", getWorkouts);

// ROUTES FOR SINGLE WORKOUT
router.get("/:id", getWorkout);

// ROUTES FOR CREATING A WORKOUT
router.post("/", createWorkouts);

// ROUTES FOR UPDATING A WORKOUT
router.patch("/:id", updateWorkouts);

// ROUTES FOR DELETING A WORKOUT
router.delete("/:id", deleteWorkouts);

module.exports = router;
