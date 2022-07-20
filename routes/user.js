const router = require("express").Router();
const { loginUser, signupUser } = require("../controllers/userControllers");

// LOGIN ROUTES
router.post("/login", loginUser);
// SIGNUP ROUTES
router.post("/signup", signupUser);

module.exports = router;
