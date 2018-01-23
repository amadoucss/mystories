var GoogleStrategy = require('passport-google-oauth20').Strategy;

const mongoose = require('mongoose');
var config = require('../config/key.js');

module.exports = function(passport){

	passport.use(new GoogleStrategy({
		clientID: config.googleClientID,
		clientSecret: config.googleClientSecret,
		callbackURL: '/auth/google/callback',
		proxy: true
	}, (accessToken, refreshToken, profile, done) => {

		console.log(accessToken);
		console.log(profile);
	}
	)
	)

}