const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Today's date Jun 7 2022")
})

app.get('/about', (req, res) => {
    res.send("Thanks for learning more about us")
})

app.listen(3000)