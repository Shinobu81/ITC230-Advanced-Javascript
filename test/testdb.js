const Music = require("../models/music");

Music.find({}, (err, result) => {
 if (err) {
   //return err;
 } 
console.log(result);
});