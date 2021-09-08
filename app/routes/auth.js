const express = require("express");
const router = express.Router();

const controller = require("../controllers/authController");

router.post("/login", controller.autenticate);
router.post("/register", controller.register);

module.exports = router;
