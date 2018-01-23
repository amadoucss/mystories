
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const userSchema = new mongoose.Schema({
	googleID: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},

	image: {
		type: String
	}
})

userSchema.plugin(findOrCreate);

const User = mongoose.model('users', userSchema);

module.exports = User;

