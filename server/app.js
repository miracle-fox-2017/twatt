const app = require('express')();
const morgan = require('morgan');
const OAuth = require('oauth')
const bodyParser = require('body-parser')
const Twitt = require('./router/twitt');
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/twitt', Twitt);


app.listen(3001);