const express = require("express");
const router = express.Router();
const webController = require("../controllers/webController");

const userController = require("../controllers/webController");

router.get("/", webController.home);

router.get("/products", webController.products);

router.post("/products", webController.addComment);

module.exports = router;
