const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes');
const passport = require('passport');
const exhbs = require('express-handlebars');
const config = require('./config/key');

//mongoose connect
mongoose.connect(config.mongoURI).then(() => {
	console.log('MongoDB connected')
})



const app = express();

app.engine('handlebars', exhbs({
	defaultLayout: 'main'
}))

app.set('view engine', 'handlebars');


app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//set local variable
app.use((req, res, next) => {

	res.locals.user = req.user || null;

	next();
})

require('./config/passport')(passport)


app.use('/',indexRoutes);
app.use('/auth', authRoutes);







const port = process.env.PORT || 3000;

app.listen(port, function(){
console.log('server listening at port'+ port)
})