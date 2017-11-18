// require fb
const FB = require('fb');
const fb = new FB.Facebook({version: 'v2.8'});

const setAccessToken = (req, res, next) => {
  if(req.headers.accesstoken){
    FB.setAccessToken(req.headers.accesstoken);
    next()
  }else{
    res.send('Please Login/Register..')
  }
}

let getUserData = (req, res) => {
  FB.api(
    "/me",
    function (response) {
      if (response && !response.error) {
        console.log(response);
        res.send(response)
      }
    }
);
}

let getTimeline = (req, res) => {
  FB.api(
    '/me/feed',
    {fields: 'from,icon,description,link,story,message,source,created_time,picture,status_type'},
    function (response) {
      if(!res || res.error) {
       console.log(!res ? 'error occurred' : res.error);
       return;
      }
      // console.log(response);
      res.send(response)
    });
}

let postStatus = (req, res) => {
  console.log(req.body);
  FB.api(
    "/me/feed",
    "POST",
    {
        "message": req.body.status
    },
    function (response) {
      if (response && !response.error) {
        res.send(response)
      }
    }
);
}

module.exports = {
  setAccessToken,
  getTimeline,
  getUserData,
  postStatus
}
