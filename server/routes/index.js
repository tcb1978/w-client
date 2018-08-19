const express = require('express');
const router = express.Router();
const songsData = require('../data/songs.json');
const royaltiesData = require('../data/royalties.json');

/* GET home page. */
router.get('/songs', (req, res, next) => {
  res.send(songsData);
});

router.get('/songs/:id', (req, res) => {
  const song = songsData.items.find(song => song.id === +req.param('id'));
  if (!song) {
    res.status(404);
    res.end();
  }
  res.json(song);
});

router.get('/royalties', (req, res, next) => {
  res.send(royaltiesData);
});

module.exports = router;
