const twittModel = require('../models/twitterModel')

const getDataByKataKunci = (req, res) => {
    twittModel.getTwitterByKataKunci(req.body.katakunci)
        .then((dataTweets) => {
            res.send(dataTweets)
        })
        .catch((reason) => {
            res.status(500).send(reason)
        })

}

const getDataTimelineFeature = (req, res) => {
    twittModel.getDataTimelineFeature()
        .then((dataTweets) => {
            res.send(dataTweets)
        })
        .catch((reason) => {
            res.status(500).send(reason)
        })

}
const postNewStatus = (req, res) => {
    twittModel.postNewStatus(req.body.status)
        .then((dataStatus) => {
            res.send(dataStatus)
        })
        .catch((reason) => {
            res.send(reason)
        })
}

const getDataUserTimeline = (req, res) => {
    twittModel.getDataUserTimeline()
        .then((dataTweets) => {
            res.send(dataTweets)
        })
        .catch((reason) => {
            res.send(reason)
        })
}



module.exports = {
    getDataByKataKunci,
    getDataTimelineFeature,
    postNewStatus,
    getDataUserTimeline
}