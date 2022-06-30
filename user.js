//jshint esversion:6
require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const PLM = require("passport-local-mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  session({
    secret: "this is the secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/USERDATA", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  secret : String,
});

userSchema.plugin(PLM);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.post("/register", function (req, res) {
  User.register(
    {
      username: req.body.username,
    },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
          passport.authenticate("local")(req, res, function () {
          res.redirect("/compose");
        });
      }
    }
  );
});

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.get("/compose" ,function(req,res){
  if (req.isAuthenticated()) {
    res.render("compose");
  } else {
    res.render("login");
  }
})

app.post("/login", function (req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("secrets");
      });
    }
  });
});
// app.post("/submit" ,function(req,res){
//   const secret = req.body.secret;
//   User.findById(req.user.id , function(err,foundUser){
//     if(err){
//       console.log(err)
//     }
//     else{
//       if(foundUser){
//         foundUser.secret = secret;
//         foundUser.save(function(){
//           res.redirect("/secrets")
//         });

//       }
//     }
//   })

// })
app.listen(3000);
