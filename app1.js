const express = require('express')
const app = express()
const port = 2000

let array = []

app.get("/array", (req, res) => {
    res.json(array)
    res.json(1)
    res.json("Hello")
})

app.post("/array", (req, res) => {
    array.push({content:array.length+1})    //post요청을 할 때마다 json 데이터가 들어간다
    res.json({result: "ok"})
})

app.delete("/array", (req, res) => {
    array = []
    res.json({result:"delete ok"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})