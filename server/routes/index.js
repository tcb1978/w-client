const express = require('express');
const router = express.Router();
const songsData = require('../data/songs.json');
const royaltiesData = require('../data/royalties.json');

/* GET home page. */
router.get('/songs', (req, res, next) => {
  res.send(songsData);
});

router.get('/royalties', (req, res, next) => {
  res.send(royaltiesData);
});

module.exports = router;
