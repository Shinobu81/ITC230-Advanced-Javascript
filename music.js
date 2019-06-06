const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://hamasakis:passwordopen@itc230-project-b25pu.mongodb.net/test?retryWrites=true';

mongoose.connect(dbUrl, {dbName: 'itc-230-project', useNewUrlParser:true, useFindAndModify: false }, (err) => {
    console.log('mongo db connection', err)
})

const musicSchema = mongoose.Schema({
 song: { type: String, required: true },
 artist: String,
 album: String,
 year: String
}, {collection: 'music'}); 

module.exports = mongoose.model('Music', musicSchema);