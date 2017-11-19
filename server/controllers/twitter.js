const Twitter = require('../models/twitter')

const search = (req, res) => {
  // console.log(req.query);
  Twitter.search(req.query.q)
  .then(tweets => res.send(tweets))
  .catch(err => res.status(500).send(err))
}

const timeline = (req, res) => {
  // console.log('halooo');
  // res.send('halooooo')
  Twitter.timeline()
  .then(tweets => res.send(tweets))
  .catch(err => res.status(500).send(err))
}

const post = (req, res) => {
  Twitter.post(req.body.tweet)
  .then(tweet => res.send(tweet))
  .catch(err => res.status(500).send(err))
}

module.exports = {
  search,
  timeline,
  post
};
