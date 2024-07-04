const Photo = require("../models/Photo")

exports.createPhoto = async (req,res) => {
    try{
        console.log("here");
        const photo = await Photo.create(req.body);

        res.render("photo", {
            pageName: "photo",
          });
    }
    catch(error){
        console.log(error);
    }
}