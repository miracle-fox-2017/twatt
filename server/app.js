const app = require('express')();
const bodyParser = require('body-parser')
const twitter = require('./routers/twitter')
const facebook = require('./routers/fb')
var cors = require('cors')


//require body parser
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json
app.use(cors({credentials: true, origin: true}))

app.use('/api/twitter', twitter)
app.use('/api/fb', facebook)

app.get('/', (req, res)=>{
  let msg = {msg: 'hello world'}
  res.send(msg)
})

app.listen(3000, ()=>{
  console.log('running on 3000');
})