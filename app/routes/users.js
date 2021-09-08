const express = require("express");
const controller = require("../controllers/userController");

const router = express.Router();

router.get("/", controller.all);
router.get("/:id", controller.find);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
