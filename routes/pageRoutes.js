//imports
const express = require("express");
const pageController = require("../controllers/pageController");

//router object defining
const router = express.Router();

//routing
router.route("/").get(pageController.getIndexPage);
router.route("/index").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/add").get(pageController.getAddPage);

module.exports = router;