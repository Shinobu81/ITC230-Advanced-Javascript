const chai = require("chai")
const expect = require("chai").expect
const request = require('request');
const song = require('../lib/music.js');

describe('Music module', () => {
  //1
  it("returns requested song", () => {
     let result = song.get("Too Long");
     expect(result).to.deep.equal({song:'Too Long', artist:'Daft Punk', album:'Discovery'});
   });
  //2
  it('fails w/ invalid song', () => {
    let found = song.get('false')

    expect(found).to.be.undefined;
  })
  //3
  it('should delete requested song', () => {
    let removeSong = song.delete('Bohemian Rhapsody')

    expect(removeSong).to.deep.equal({delete:false});
  });
  //4
  it('fails to delete if song is not found', () => {
    let removeSong = song.delete('Hazy Shade Of Winter')

    expect(removeSong).to.deep.equal({delete:false});
  })
  //5
  it('should add new song', () => {
    let success = song.add({song:'Blue Orchid', artist:'The White Stripes', album:'Get Behind Me Satan'})

    expect(success).to.deep.equal({add:true});
  })
  //6
  it('fails to add new song if it exists', () => {
    let fails = song.add({song: 'Lights', artist:'Ellie Goulding', album:'Lights'})

    expect(fails).to.deep.equal({add:true});
  })
})