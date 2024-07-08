const Photos = require("../models/Photo");

exports.getIndexPage = async (req, res) => {

  const page = req.query.page || 1;
  const photoPerPage = 3;

  const totalPhoto = await Photos.find({}).countDocuments();

  const photos = await Photos.find({})
  .sort('-createDate')
  .skip((page-1) * photoPerPage)
  .limit(photoPerPage);

  //const totalPhoto = photos.countDocuments;

  res.render("index", {
    pageName: "index",
    current: page,
    pageCount: Math.ceil(totalPhoto/photoPerPage),
    photos
  });
};

exports.getAboutPage = (req, res) => {
  res.render("about", {
    pageName: "about",
  });
};

exports.getAddPage = (req, res) => {
  res.render("add", {
    pageName: "add",
  });
};
