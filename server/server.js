//	DEPENDENCIES
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Express

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use( (req, res, next) => {
  res.header('Access-Control-Allow-Orgin', '*');
  res.header(
    'Acess-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
  }
});

//Endpoint
const songs = require('../src/json/songs.json');
app.get('/songs', (req, res) => res.json(songs));


const port = 3333
app.listen(port, () => console.log(`Rocking on port ${port}`));