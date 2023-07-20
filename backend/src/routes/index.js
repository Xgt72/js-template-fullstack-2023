const express = require("express");

const router = express.Router();
const usersRouter = require("./users.routes");
const sportsRouter = require("./sports.routes");
const authControllers = require("../controllers/authControllers");

router.get(
  "/refresh-token",
  authControllers.verifyToken,
  authControllers.refreshToken,
  authControllers.createToken
);
router.use("/users", usersRouter);
router.use("/sports", sportsRouter);

module.exports = router;
