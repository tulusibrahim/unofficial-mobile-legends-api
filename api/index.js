const express = require('express')
const router = express.Router()
let axios = require('axios')

router.get('/:id', async (req, res) => {
    // last id == 115
    let heroID = req.params.id
    let data = await axios.get(`${process.env.URL}/hero/detail?id=${heroID}&language=en`)
    res.send(data.data)
})

module.exports = router