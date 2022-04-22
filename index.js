require('dotenv').config();
let express = require('express')
let app = express()
let port = 3000 || process.env.port
let index = require('./api/index')
let axios = require('axios')

app.use('/', index)

// app.get('/:id', async (req, res) => {
//     // last id == 115
//     let heroID = req.params.id
//     let data = await axios.get(`${process.env.URL}/hero/detail?id=${heroID}&language=en`)
//     res.send(data.data)
// })

// app.get('/heroes', async (req, res) => {
//     let data = await axios.get(`${process.env.URL}/hero/list?language=en`)
//     res.send(data.data)
// })

app.listen(port, () => {
    console.log('Running on port 3000 with 💘')
})