const express = require("express");
const app = express();

const path = require("path");
const dotenv = require("dotenv").config();
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

// const listingRouter = require("./routes/listing.js");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/public")));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.redirect("/crypto");
});

app.get("/crypto", (req, res) => {
    res.render("main/crypto.ejs");
});

app.get("/login", (req, res) => {
    res.render("main/login.ejs");
});

app.get("/plans", (req, res) => {
    res.render("main/plans.ejs");
});

app.get("/support", (req, res) => {
    res.render("main/support.ejs");
});

app.get("/services", (req, res) => {
    res.render("main/services.ejs");
});

app.get("/signup", (req, res) => {
    res.render("main/signup.ejs");
});

app.listen(PORT, (req, res) => {
    console.log("Server is listening to port", PORT);
});
