var FB = require('fb');

const getTimeLine = (req, res, next) => {
  FB.setAccessToken(req.headers.fb_access_token)
  next()
}

const me = (req, res) => {
  FB.api('/me', { fields: ['id', 'name', 'email'] }, (response)=>{
    res.send(response)
  })
}  

const meFeed = (req, res) => {
  FB.api('/me/feed', (response)=>{
    res.send(response)
  })
}

module.exports = {
  getTimeLine,
  me,
  meFeed
};