var Oauth = require('oauth');

var oauth = new Oauth.OAuth(
     'https://api.twitter.com/oauth/request_token',
     'https://api.twitter.com/oauth/access_token',
     'kHQuL1kuOkl19FASsWd5V5xrg',
     'F8vkcNKJWrVA4akuwC0R4NKR2kuBnoW6xNNtfW936InqMdezBW',
     '1.0A',
     null,
     'HMAC-SHA1'
   );


   class Twits {
     static showData() {
       return new Promise ((resolve,reject)=>{
       oauth.get(
        'https://api.twitter.com/1.1/trends/place.json?id=1047378',
        '920471402427191296-lOaVaBAhRJ0rXp9VNgNYbYSEDYEe1Vk', //test user token
        'ZEcEb1O7tWYqSTRuNf1LzMSH2oFBJ8ZDvfiWTa5AJsoIm',
         function(err, data) {
           if (err) {
             reject(err)
           } else {
             resolve(data)
           }
         })
       })
     }

     static showTimeline(){
      return new Promise ((resolve,reject)=>{
       oauth.get(
         'https://api.twitter.com/1.1/statuses/home_timeline.json',
         '920471402427191296-lOaVaBAhRJ0rXp9VNgNYbYSEDYEe1Vk', //test user token
         'ZEcEb1O7tWYqSTRuNf1LzMSH2oFBJ8ZDvfiWTa5AJsoIm',
         function(err,data){
            if (err) {
              reject(err)
            } else {
              resolve(data)
            }
         })
      })
     }

     static searchTweet(params){
      return new Promise ((resolve,reject)=>{
       oauth.get(
       `https://api.twitter.com/1.1/search/tweets.json?q=${params.tweet}`,
       '920471402427191296-lOaVaBAhRJ0rXp9VNgNYbYSEDYEe1Vk', //test user token
       'ZEcEb1O7tWYqSTRuNf1LzMSH2oFBJ8ZDvfiWTa5AJsoIm',
       function(err,data){
          if (err) {
            reject(err)
          } else {
            resolve(data)
          }
       })
      })
     }

     static createTweet(body){
       return new Promise ((resolve,reject)=>{
          oauth.post(
         'https://api.twitter.com/1.1/statuses/update.json',
         '920471402427191296-lOaVaBAhRJ0rXp9VNgNYbYSEDYEe1Vk', //test user token
         'ZEcEb1O7tWYqSTRuNf1LzMSH2oFBJ8ZDvfiWTa5AJsoIm',
         {status: body.status},
         function(err,data){
            if (err) {
             reject(err)
           } else {
             resolve(data)
           }
         })
      })
     }
   }


module.exports = Twits
