const Photo = require("../models/Photo");
const fs = require("fs");

exports.createPhoto = (req, res) => {
  try {
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

exports.deletePhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  let deletePath = "D:/PCAT/public" + photo.image;

  await Photo.findByIdAndDelete(photo._id);
  fs.unlinkSync(deletePath);

  res.redirect("/index");
};

exports.editPhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);

  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.save();

  res.redirect(`/photos/${req.params.id}`);
};

exports.getEditPage = async (req, res) => {
  const photo = await Photo.findById(req.params.id);

  res.render("edit", {
    pageName: "edit",
    photo,
  });
};

exports.getPhotoPage = async (req, res) => {
  const photo = await Photo.findById(req.params.id);

  res.render("photo", {
    pageName: "photo",
    photo,
  });
};
