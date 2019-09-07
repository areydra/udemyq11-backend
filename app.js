require('dotenv/config')
const express = require('express')
const logger  = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./src/Routes/root')

const app = express()
const port = process.env.PORT 

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
	console.log(`Server is running in port ${port}`)
})