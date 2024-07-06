//imports
const express = require("express");
const mongoose = require("mongoose");
const pageRoutes = require("./routes/pageRoutes");
const photosRoute = require("./routes/photosRoute");

const app = express();

//Database connection
mongoose.connect("mongodb://127.0.0.1:27017/PCAT");

app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use("/", pageRoutes)
app.use("/photos", photosRoute);

//Port
app.listen(3000, () => {
  console.log("i am listening.");
});
