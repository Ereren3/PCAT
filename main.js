//imports
const express = require("express");
const mongoose = require("mongoose");
const pageRoutes = require("./routes/pageRoutes");
const photosRoute = require("./routes/photosRoute");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");

const app = express();

//Database connection
mongoose.connect("mongodb://127.0.0.1:27017/PCAT");

//Template engine added
app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//Routes
app.use("/", pageRoutes);
app.use("/photos", photosRoute);

//Port
app.listen(3000, () => {
  console.log("Server started!");
});
