const Photo = require("../models/Photo");

exports.createPhoto = async (req, res) => {
  try {
    await Photo.create(req.body);

    res.render("photo", {
      pageName: "photo",
    });
  } catch (error) {
    console.log(error);
  }
};
