const router = require("express").Router();

const userControllers = require("../controllers/userControllers");
const passwordControllers = require("../controllers/passwordControllers");
const authControllers = require("../controllers/authControllers");
const emailControllers = require("../controllers/emailControllers");

router.get("/", userControllers.browse);
router.get("/:id", userControllers.read);
router.put("/:id", passwordControllers.hashPassword, userControllers.edit);
router.post(
  "/",
  passwordControllers.hashPassword,
  userControllers.add,
  emailControllers.sendEmailAndChangePasswordUser
);
router.post(
  "/login",
  userControllers.login,
  passwordControllers.verifyPassword,
  authControllers.createToken
);
router.delete("/:id", userControllers.destroy);

module.exports = router;
