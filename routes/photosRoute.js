const express = require("express");
const photoController = require("../controllers/photoController");

const router = express.Router();

router.route("/").post(photoController.createPhoto);
router.route("/:id").get(photoController.getPhotoPage);
router.route("/:id").put(photoController.editPhoto);
router.route("/:id").delete(photoController.deletePhoto);
router.route("/edit/:id").get(photoController.getEditPage);


module.exports = router;
