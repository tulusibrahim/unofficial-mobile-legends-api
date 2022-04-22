export default async function handler(req, res) {
    let data = await fetch(process.env.HERO_LIST, {
        "headers": {
            "accept": "application/json",
            "content-type": "application/json",
        },
        "body": "{\"lang\":\"en\",\"language\":\"en\"}",
        "method": "POST",
    });
    let json = await data.json()
    console.log(json)
    res.send(json.data.channel_data)
}