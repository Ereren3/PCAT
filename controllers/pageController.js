const Photos = require("../models/Photo");

exports.getIndexPage = async (req, res) => {
  const photos = await Photos.find({});
  res.render("index", {
    pageName: "index",
    photos,
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

exports.getEditPage = (req, res) => {
  res.render("edit", {
    pageName: "edit",
  });
};
