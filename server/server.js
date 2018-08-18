//	DEPENDENCIES

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
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

app.get('https://s3-us-west-2.amazonaws.com/wurrly-data/test/songs.json', (req, res) => {
  // res.status(200).send('https://s3-us-west-2.amazonaws.com/wurrly-data/test/songs.json');
  return res.status(200).json({});
})

const db = app.get('db');

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db)
  }).catch((error) => console.error());

	const port = 3333
	app.listen(port, () => console.log(`Rocking on port ${port}`));