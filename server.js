
const express = require('express')
const app = express()

app.use(express.static('.'))

app.get('/', (req, res) => {
    res.sendFile('index')
})

app.listen(3000, e => console.log('rodando em http://localhost:3000'))


