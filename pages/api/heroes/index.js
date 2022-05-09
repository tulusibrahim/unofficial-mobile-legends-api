// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let data = await fetch(`${process.env.URL}/hero/list?language=en`)
  let json = await data.json()
  res.send(json)
}