'use strict'

const music = require('./lib/music.js');

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

let handlebars = require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

app.get('/', (req,res) => {
  res.type('text/html');
  res.render(__dirname + '/public/home.html'); 
});

app.get('/about', (req, res) => {
  res.type('text/html');
  res.render(__dirname + '/public/about.html');
});

app.get('/details', (req,res) => {
  let result = music.get(req.query.song);
  res.render('details', {song: req.query.song, result: result });
});

app.get('/delete', (req,res) => {
  var result = music.delete(req.query.song);
  res.render("delete", {song: req.query.song, result: result});
});

app.use((req,res) => {
  res.type('text/plain'); 
  res.status(404);
  res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
  console.log('Express started'); 
});