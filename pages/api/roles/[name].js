export default async function handler(req, res) {
    let data = await fetch(`https://mapi.mobilelegends.com/hero/list?type=${req.query.name}&language=en`)
    let json = await data.json()
    res.send(json)
}