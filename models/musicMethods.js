const Music = require("./music");

exports.getAll = () => {
  return Music.find({}, (err, item) => {
    if (err) return next(err);
  });
};

exports.get = (song) => {
  return Music.findOne({'song':song}, (err, item) => {
    if (err) return next(err);
  });
};

exports.delete = (song) => {
  return Music.deleteOne({'song':song}, (err, item) => {
    if (err) return next(err);
  });
};

exports.updatedb = (newSong) => {
  console.log(newSong)
  return Music.updateOne({song:newSong.song}, newSong, {upsert:true}, (err, item) => {
    if (err) return next(err);
  });
};

// exports.getAll = () => {
//   return music;
// };
//
// exports.get = (song) => {
//   return music.findOne((item) => {
//     return item.song.toLocaleLowerCase() === song;
//   });
// };
// 
// exports.delete = (song) => {
//   let search = music.findIndex((music) => {
//     return music.song === song;
//   });
//   music.splice(search, 1);
//   return {delete:true};
// };
// 
// exports.add = (newSong) => {
//   let checkFor = music.findIndex((music) => {
//     return music.song === newSong;
//   });
//   console.log('found ' + checkFor);
//   if (checkFor = -1) {
//     music.push(newSong);
//   }
//   return {add:false};
// };