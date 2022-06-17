require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workout");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/workouts", workoutRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server stated on port ${process.env.PORT}`);
});
