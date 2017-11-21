const app = require('express')()
var bodyParser = require('body-parser')
var cors = require('cors')
 


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//call cors
app.use(cors())

const twatt = require('./routes/twattRoute')
const fb = require('./routes/fbRoute')

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Headers");
//     next();
//   });

console.log('masuk sini')
app.use('/api/twatt', twatt)
app.use('/api/fb', fb)

app.listen(3000, () => {
	console.log('jalan guys');
})