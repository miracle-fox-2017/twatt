const FB = require('../models/fbModel')

const getFBUserData = (req, res) => {
    FB.getFBUserData(req.headers.accesstoken, req.headers.fbid)
    .then(userData => res.send(userData))
    .catch(err => res.send(err))
}

const getTimeLine = (req, res) => {
    console.log(req)
    FB.getTimeLine(req.headers.accesstoken)
    .then(userTimeLine => res.send(userTimeLine))
}

const postStatus = (req, res) => {
    FB.postStatus(req.headers.accesstoken, req.body.status)
    .then(response => res.send(response))
}

module.exports = {
    getFBUserData,
    getTimeLine,
    postStatus
}