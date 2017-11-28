const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const OAuth = require('oauth');
const dotenv = require('dotenv').config();
const TwitterClient = require('./helpers/twitterClient');
const cors = require('cors')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(cors());

// Route
const twitterRoute = require('./routers/twitterRoute');
app.use('/api/twitter', twitterRoute);

app.get('/', (req, res) => {
  TwitterClient.get("https://api.twitter.com/1.1/trends/place.json?id=23424977")
	  .then((tweet) => {
	  	res.status(200).send(tweet);
	  }).catch(err => {
	  	res.status(500).send(err);
	  })
})

app.listen(3000, (err) => {
	console.log('Listen 3000')
});