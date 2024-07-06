const Photo = require("../models/Photo");
const fs = require("fs");

exports.createPhoto = (req, res) => {
  try {
    console.log("here1");
    const uploadDir = "public/uploads";

    if (fs.existsSync(uploadDir)) {
      let file = req.files.image;
      let uploadPath = "D:/PCAT/public/uploads/" + file.name;

      file.mv(uploadPath, async () => {
        await Photo.create({
          ...req.body,
          image: "/uploads/" + file.name,
        });
      });
    } else {
      fs.mkdirSync(uploadDir);
    }
    res.redirect("/index");
  } catch (error) {
    console.log(error);
  }
};

exports.getPhotoPage = async (req, res) => {
  const photo = await Photo.findById(req.params.id);

  res.render("photo", {
    pageName: "photo",
    photo,
  });
};
