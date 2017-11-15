const app = require('express')();
const bodyParser = require('body-parser')
const twitter = require('./routers/twitter')

//require body parser
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

app.use('/api/twitter', twitter)

app.listen(3000, ()=>{
  console.log('running on 3000');
})