export default async function handler(req, res) {
    console.log(process.env.URL)
    let data = await fetch(`${process.env.URL}/hero/detail?id=${req.query.id}&language=en`)
    let json = await data.json()
    res.send(json)
}