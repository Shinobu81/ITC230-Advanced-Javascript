let Music = require('../models/music')
let express = require('express')
let router = express.Router()

//POST route
router.post('/api/song', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }
  let model = new Music(req.body)
  model.save()
  .then(doc => {
    if(!doc || doc.length === 0) {
      return res.status(500).send(doc)
    }
    res.status(200).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

//GET route
router.get('/api/song', (req, res) => {
  if(!req.query.song) {
    return res.status(400).send('Missing URL parameter: song')
  }
  Music.findOne({
    song:req.query.song
  })
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

//GETALL route
router.get('/api/songs', (req, res) => {
  Music.find({
  })
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

//UPDATE route
router.put('/api/song', (req, res) => {
  if(!req.query.song) {
    return res.status(400).send('Missing URL parameter: song')
  }
  Music.findOneAndUpdate({
    song:req.query.song
  }, req.body, {
    new:true
  })
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

//DELETE route
router.delete('/api/song', (req, res) => {
  if(!req.query.song) {
    return res.status(400).send('Missing URL parameter: song')
  }
  Music.findOneAndRemove({
    song:req.query.song
  })
  .then(doc => {
    res.json(doc)
  })
  .catch(err => {
    res.status(500).json(err)
  })
})

module.exports = router