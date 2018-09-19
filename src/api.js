const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')
const db = require("./db")

app.use(bodyParser.json())
app.post('/messages', (req, res) => {
  const {id, content} = req.body
  db.save({id, content}, () => {
    res.send('Ok!')
    console.log('Respondeu!')
  })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
