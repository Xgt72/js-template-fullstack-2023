const router = require("express").Router();

const sportControllers = require("../controllers/sportControllers");

router.get("/", sportControllers.browse);
router.get("/:id", sportControllers.read);
router.put("/:id", sportControllers.edit);
router.post("/", sportControllers.add);
router.delete("/:id", sportControllers.destroy);

module.exports = router;
