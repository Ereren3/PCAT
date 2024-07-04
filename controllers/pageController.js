exports.getIndexPage = (req, res) => {
  res.render("index", {
    pageName: "index",
  });
};

exports.getAboutPage = (req, res) => {
  res.render("about", {
    pageName: "about",
  });
};

exports.getPhotoPage = (req, res) => {
  res.render("photo", {
    pageName: "photo",
  });
};

exports.getAddPage = (req, res) => {
  res.render("add", {
    pageName: "add",
  });
};
