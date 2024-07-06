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

exports.getPhotoPage = async (req, res) => {

  const photo = await Photo.findById(req.params.id);

  //console.log(photo._id);

  res.render("photo", {
    pageName: "photo",
    photo
  }); 
};
