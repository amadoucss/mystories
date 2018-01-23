const GoogleStrategy = require('passport-google-oauth20').Strategy;

const mongoose = require('mongoose');
const User = require('../models/User');
var config = require('../config/key.js');


module.exports = function(passport){

	passport.use(new GoogleStrategy({
		clientID: config.googleClientID,
		clientSecret: config.googleClientSecret,
		callbackURL: '/auth/google/callback',
		proxy: true
	}, (accessToken, refreshToken, profile, done) => {

		const image = profile.photos[0].value.substring(0, profile.photos[0].value.indexOf('?'));

		const newUser = {
			googleID: profile.id,
			firstName:  profile.name.givenName,
			lastName: profile.name.familyName,
			email: profile.emails[0].value,
			image: image
		}

		User.findOrCreate(newUser, function (err, user) {
      	return done(err, user);
    	});


	}
	)
	)

  passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

}