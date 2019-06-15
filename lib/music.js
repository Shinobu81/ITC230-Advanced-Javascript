'use strict'

let music = [
    {song: 'Bohemian Rhapsody', artist:'Queen', album:'A Night At The Opera'},
    {song: 'Too Long', artist:'Daft Punk', album:'Discovery'},
    {song: 'Lights', artist:'Ellie Goulding', album:'Lights'},
    {song: 'Five More Hours', artist:'Deorro x Chris Brown', album:'Good Evening'},
    {song: 'Hazy Shade Of Winter', artist:'Gerard Way (feat. Ray Toro)', album:'Hazy Shade Of Winter (feat. Ray Toro)'}
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
  return {delete:false};
};

exports.add = (newSong) => {
  let checkFor = music.findIndex((music) => {
    return music.song === newSong;
  });
  if (checkFor = -1) {
    music.push(newSong);
  }
  return {add:true};
};

console.log(music);