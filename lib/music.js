'use strict'

let music = [
    {song: 'bohemian rhapsody', artist:'queen', album:'a night at the opera'},
    {song: 'too long', artist:'daft punk', album:'discovery'},
    {song: 'lights', artist:'ellie goulding', album:'lights'},
    {song: 'five more hours', artist:'deorro x chris brown', album:'good evening'},
    {song: 'hazy shade of winter', artist:'gerard way (feat. ray toro)', album:'hazy shade of winter (feat. ray toro)'},
];

exports.getAll = () => {
  return music;
};

exports.get = (song) => {
  return music.find((item) => {
    return item.song.toLocaleLowerCase() === song;
  });
};

exports.delete = (song) => {
  let search = music.findIndex((music) => {
    return music.song === song;
  });
  music.splice(search, 1);
}

 console.log(music);