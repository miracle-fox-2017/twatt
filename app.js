const app = require('express')()
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

const twatt = require('./routes/twattRoute')

app.use('/api/twatt', twatt)

app.listen(3000, () => {
	console.log('jalan guys');
})