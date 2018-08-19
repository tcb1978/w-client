const express = require('express');
const router = express.Router();
const songsData = require('../data/songs.json');
const royaltiesData = require('../data/royalties.json');

/* GET home page. */
router.get('/songs', (req, res, next) => {
  res.send({
    items: songsData.items.slice(0, 49).map(s => {
      s.imagePath = 'https://www.popsci.com/sites/popsci.com/files/styles/655_1x_/public/images/2017/10/terrier-puppy.jpg?itok=Ppdi06hH&fc=50,50';
      return s
    })
  });
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
