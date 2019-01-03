const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/login", userController.getNames);
router.post("/add", userController.addName);
router.post("/change", userController.changePassword);

module.exports = router;
