var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://hamasakis:passwordopen@itc230-project-b25pu.mongodb.net/test?retryWrites=true';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('itc-230-project');
  var music = { song: 'Too Long', artist: 'Daft Punk', album:'Discovery', year:'2000' };
  dbo.collection("music").insertOne(music, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});