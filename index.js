'use strict'

let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let handlebars = require('express-handlebars')
let path = require('path')

const Music = require('./models/music')
const musicMethods = require("./models/musicMethods")
const musicRoute = require('./controllers/routerController')

app.use(bodyParser.json())
app.use('/api', require('cors')());
app.use((req, res, next) => {
	 console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
	 next()
})

app.use(musicRoute);
app.use(express.static('views'))

//404 Handler
app.use((req, res, next) => {
	res.status(404).send('Encountered Error 404')
})

//500 Handler
app.use((err, req, res, next) => {
	console.error(err.stack)
	res.sendFile(path.join(__dirname, './lib/500.html'))
})

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/views'))
app.use(bodyParser.urlencoded({extended: true}))
app.engine('.html', handlebars({extname: '.html'}))
app.set('view engine', '.html')

app.listen(app.get('port'), () => {
	console.log('Express started')
});