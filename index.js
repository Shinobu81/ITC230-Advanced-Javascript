const music = require("./lib/music.js"); // add music.j library
const http = require("http");
const fs = require("fs");
const qs = require('querystring');

http.createServer((req,res) => {
  let url = req.url.split("?");
  let query = qs.parse(url[1]);
  let path = url[0].toLowerCase();
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
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(search));
      break;
    case '/get':
      let find = music.get(query.song);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      let results = (find) ? JSON.stringify(find) : "Not found";
      res.end('Results for ' + query.song + "\n" + results);
      break;
    case '/delete':
      let removed = music.delete(query.song);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      let deleted = (removed) ? JSON.stringify(removed) : "Not found";
      res.end('Results for ' + query.song + "\n" + 'deleted');
      break;      
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('No music found');
      break;
    }
}).listen(process.env.PORT || 3000);

console.log('Server running port 3000');