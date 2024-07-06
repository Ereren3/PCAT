const express = require("express");
const photosController = require("../controllers/photosController");

const router = express.Router();

router.route("/").post(photosController.createPhoto);

module.exports = router;
