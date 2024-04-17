const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
    res.json("hello world!")
})

app.get("/hello", (req, res) => {
    res.header("content-Type", "text/plan")
    res.send("<h1>Hello</h1>")
    
})

app.get("/data", (req, res) => {
    res.json({name:"Jhon", age: 20})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})