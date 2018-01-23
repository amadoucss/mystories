var express = require("express");
var passport = require("passport");

const Router = express.Router();

Router.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

Router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });
module.exports = Router;
