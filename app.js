const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
const twitter = require('./routes/twitter')
app.use('/twitter', twitter)

app.listen(3000, function(err){
  if(!err) console.log('server running on port|3000')
})