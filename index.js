'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const handlebars = require('express-handlebars');
const Music = require('./models/music');
const musicMethods = require("./models/musicMethods");

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: true}));
app.engine('.html', handlebars({extname: '.html'}));
app.set('view engine', '.html');


app.get('/', (req,res) => {
	Music.find((err,music) => {
		if (err) return next(err);
		res.render('home', {music:music});
	});
});

app.get('/about', (req, res) => {
	res.type('text/html');
	res.render('about');
});

app.get('/details', (req, res, next) => {
	musicMethods.get(req.query.song).then((item) => {
		res.render('details', {music:item}); 
	}).catch((err) => {
		return next(err);
	});
});

app.get('/delete', (req, res, next) => {
	musicMethods.delete(req.query.song).then((item) => {
		res.render('delete', {music:item});
	}).catch((err) => {
		return next(err);
	});
});

app.post('/details', (req, res, next) => {
	musicMethods.updatedb(req.body).then((item) => {
		res.render('details', {body:item});
	}).catch((err) => {
		return next(err);
	});
});

app.use((req,res) => {
	res.type('text/plain'); 
	res.status(404);
	res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
	console.log('Express started'); 
});