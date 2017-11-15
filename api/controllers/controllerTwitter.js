const Tweets = require('../models/modelTwitter')

class Twitter {
  static findAll(req,res){
    Tweets.showData()
    .then(result=>{
      res.send(JSON.parse(result))
    })
    .catch(err=>{
      console.log(err);
      res.send(err)
    })
  }

  static getTimeline(req,res){
    Tweets.showTimeline()
    .then(result=>{
      res.send(JSON.parse(result))
    })
    .catch(err=>{
      console.log(err);
      res.send(err)
    })
  }

  static searchingTweet(req,res){
    Tweets.searchTweet(req.params)
    .then(result=>{
      res.send(JSON.parse(result))
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static newTweet(req,res){
    Tweets.createTweet(req.body)
    .then(result=>{
      res.send(JSON.parse(result))
    })
    .catch(err=>{
      res.send(err)
    })
  }
}



module.exports = Twitter
