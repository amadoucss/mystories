const express = require("express");

const Router = express.Router();

Router.get('/', (req, res) => {
	res.render('welcome');
})

Router.get('/dashboard', (req, res) => {
	res.send('dashboard');
})

module.exports = Router;