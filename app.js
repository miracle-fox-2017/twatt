const app = require('express')();
const bodyParser = require('body-parser')
const logger = require('morgan');
const index = require('./routes/index');
const twitter = require('./routes/twitter');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//route
app.use('/', index);
app.use('/twitter', twitter);

app.listen(3000,(err)=>{
  if(!err){
    console.log('Jalan di port 3000');
  } else {
    console.log(err);
  }
})
