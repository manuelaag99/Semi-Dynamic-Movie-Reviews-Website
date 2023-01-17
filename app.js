const express = require("express");
const bodyParser = require ("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");


const app = express(); // create a constant that runs on express; call it "app"

app.set("view engine", "ejs"); // using the "app" constant, call EJS to be rendered if called 
app.use(bodyParser.urlencoded({extended: true})); // using the "app" constant, call bodyParser to read data from forms 
app.use(express.static("public")); // using the "app" constant, call static files found on a folder called "public" 

// this bit ahead connects to the mongoose port and then to a specific database, in this case moviereviewsDB 
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/moviereviewsDB", {useNewUrlParser: true});

app.get("/", function(req, res) {
    console.log(res.statusCode);
    res.render("home");
});

app.listen(3000, function(req, res) {
    console.log("This server is running on port 3000.");
});