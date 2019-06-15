var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});

// const chai = require("chai")
// const expect = require("chai").expect
// const request = require('request');
// const movie = require('../lib/music.js')

// describe('Music module', () => {
//   it('should return requested song', () => {
//     let song = song.get('Bohemian Rhapsody')
// 
//     expect(song).to.deep.equal({song: 'Bohemian Rhapsody', artist:'Queen', album:'A Night At The Opera'})
//   })
// 
//   it('fails w/ invalid song', () => {
//     let found = song.get('false')
// 
//     expect(found).to.be.undefined
//   })
// 
//   it('should delete requested song', () => {
//     let song = song.delete('Bohemian Rhapsody')
// 
//     expect(song).to.be.true
//   });
// 
//   it('fails to delete if song is not found', () => {
//     let song = song.delete('Hazy Shade Of Winter')
// 
//     expect(song).to.be.false
//   })
// 
//   it('should add new song', () => {
//     let success = song.add({song: 'Blue Orchid', artist:'The White Stripes', album:'Get Behind Me Satan'})
// 
//     expect(success).to.be.true
//   })
// 
//   it('fails to add new song if it exists', () => {
//     let success = song.add({song: 'Lights', artist:'Ellie Goulding', album:'Lights'})
// 
//     expect(success).to.be.false
//   })
// })