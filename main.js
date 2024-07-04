//Objects
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const Photo = require("./models/Photo")

const app = express();

//Database connection
mongoose.connect("mongodb://127.0.0.1:27017/PCAT");

app.set("view engine", "ejs");

//Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.render("index", {
    pageName: "about",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    pageName: "about",
  });
});

app.get("/index", (req, res) => {
  res.render("index", {
    pageName: "index",
  });
});

app.get("/photo", (req, res) => {
  res.render("photo", {
    pageName: "photo",
  });
});

app.get("/add", (req, res) => {
  res.render("add", {
    pageName: "add",
  });
});

app.post("/photos", (req, res) => {
  console.log(req.body);
  res.redirect("/photo");
  Photo.create(req.body);
});

//Port
app.listen(3000, () => {
  console.log("i am listening.");
});
