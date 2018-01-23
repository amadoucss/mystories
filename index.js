const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const passport = require('passport');

const app = express();

require('./config/passport')(passport)

app.use('/auth', authRoutes);



app.get('/', function(req, res){
	res.send('hello world');
})



const port = process.env.PORT || 3000;

app.listen(port, function(){
console.log('server listening at port'+ port)
})