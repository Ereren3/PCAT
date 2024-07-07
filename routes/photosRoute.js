//imports
const express = require("express");
const photoController = require("../controllers/photoController");

//router object defining
const router = express.Router();

//routing
router.route("/").post(photoController.createPhoto);
router.route("/:id").get(photoController.getPhotoPage);
router.route("/:id").delete(photoController.deletePhoto);
router.route("/edit/:id").put(photoController.editPhoto);
router.route("/edit/:id").get(photoController.getPhotoEditPage);

module.exports = router;
