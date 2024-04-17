const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 2000
app.use(bodyParser.json())

app.post("/calc1/:num1/:num2", (req, res) => {
    const num1 = +req.params.num1
    const num2 = +req.params.num2
    res.json({result: num1 + num2})
})

app.post("/calc2", (req, res) => {
    const num1 = +req.query.num1
    const num2 = +req.query.num2
    res.json({result: num1 + num2})
})

app.post("/body_data", (req, res) => {
    console.log(req.body)
    res.json({})
})

app.post("/calc3", (req, res) => {
    console.log(JSON.stringify(req.headers))
    const num1 = +req.header("My-Number1")
    const num2 = +req.header("My-Number2")
    res.json({result: num1 + num2})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})