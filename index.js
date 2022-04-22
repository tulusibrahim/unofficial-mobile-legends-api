require('dotenv').config();
let express = require('express')
let app = express()
let port = 3000 || process.env.port
let index = require('./api/index')

app.use('/api/index', index)

app.listen(port, () => {
    console.log('Running on port 3000 with 💘')
})