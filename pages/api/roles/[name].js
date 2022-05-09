export default async function handler(req, res) {
    let data = await fetch(`${process.env.URL}/hero/list?type=${req.query.name}&language=en`)
    let json = await data.json()

    res.send(json)
}