export default async function handler(req, res) {
    let param = {
        "headers": {
            "accept": "application/json",
            "content-type": "application/json",
        },
        "body": "{\"lang\":\"en\",\"language\":\"en\"}",
        "method": "POST",
    }

    let data = await fetch(process.env.HERO_LIST, param);
    let json = await data.json()
    console.log(json)
    res.send(json.data.channel_data)
}