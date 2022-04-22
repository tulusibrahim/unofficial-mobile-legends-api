const express = require('express')
const router = express.Router()
let axios = require('axios')

router.get('/heroes/', async (req, res) => {
    let data = await axios.get(`${process.env.URL}/hero/list?language=${lang ? lang : 'en'}`)
    res.send(data.data)
})

router.get('/hero/:id/', async (req, res) => {
    // last id == 115
    let heroID = req.params.id
    let data = await axios.get(`${process.env.URL}/hero/detail?id=${heroID}&language=${lang ? lang : 'en'}`)
    res.send(data.data)
})

router.get('/roles', async (req, res) => {
    let tes = await axios.post(process.env.URL_HERO_LIST, { "lang": "en", "language": "en" })
    res.send(tes.data.data.channel_data)
})

router.get('/roles/:name', async (req, res) => {
    let name = req.params.name
    let data = await axios.get(`${process.env.URL}/hero/list?type=${name}&language=en`)
    res.send(data.data)
})

module.exports = router