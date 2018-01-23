const express = require("express");
const passport = require("passport");

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

Router.get('/verify', function(req, res){
	if(req.user){
		console.log(req.user)
	}else{
		console.log('no user found')
	}
})

Router.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
})
module.exports = Router;
