require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");
const cors = require("cors");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/workouts", workoutRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(
    "mongodb+srv://lekan:TpTN07DDOL54632Y@workoutsdb.twhc2.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log(`Connected to the DB & Server stated on port 5000`);
    });
  })
  .catch((error) => {
    console.log(`Hey Boss There is an error - ${error}`);
  });
