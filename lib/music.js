'use strict'

let music = [
    {title: 'bohemian rhapsody', artist:'queen', album:'a night at the opera'},
    {title: 'too long', artist:'daft punk', album:'discovery'},
    {title: 'lights', artist:'ellie goulding', album:'lights'},
    {title: 'five more hours - deorro x chris brown', artist:'deorro', album:'good evening'},
    {title: 'hazy shade of winter (feat. ray toro)', artist:'gerard way', album:'hazy shade of winter (feat. ray toro)'},
];

exports.getAll = () => {
  return music;
};

exports.get = (title) => {
  return movies.find((item) => {
    return item.title.toLocaleLowerCase() === title;
  });
};

console.log(music);