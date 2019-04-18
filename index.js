const music = require("./lib/music.js"); // add music.j library
const http = require("http");
const fs = require("fs");
const query = require('querystring');

http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {
    case '/':
      fs.readFile("public/home.html", (err, data) => {
      if (err) return console.error(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data.toString());
      });
      console.log('HOME');
      break;
    case '/about':
      fs.readFile("public/about.html", (err, data) => {
      if (err) return console.error(err);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data.toString());
      });
      console.log('ABOUT');
      break;
    case '/getall':
      let search = music.getAll();
      console.log(search);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(search));
      break;
    case '/get':
      let find = music.get(query.title);
      //console.log(find); <-- Does this work 
      res.writeHead(200, {'Content-Type': 'text/plain'});
      let results = (find) ? JSON.stringify(find) : "Not found";
      res.end('Results for ' + query.title + "\n" + results);
      console.log(results);
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('No music found');
      break;
    }
}).listen(process.env.PORT || 3000);

console.log('Server running port 3000');