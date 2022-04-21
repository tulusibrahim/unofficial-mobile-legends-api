let express = require('express')
let app = express()
let axios = require('axios')
require('dotenv').config();

app.get('/:id', async (req, res) => {
    // last id == 115
    let heroID = req.params.id
    let data = await axios.get(`${process.env.URL}/hero/detail?id=${heroID}&language=en`)
    res.send(data.data)
})

app.listen(3000, () => {
    console.log('Running on port 3000 with 💘')
})