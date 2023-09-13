const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Success to connect to API."
    })
})

app.listen(port, () => {
    console.log('App running on port ', port)
})