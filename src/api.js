const express = require('express')
const app = express()
const port = 8003
const bodyParser = require('body-parser')
const db = require("./db")

app.use(bodyParser.json())
app.post('/messages', (req, res) => {
  console.log('Entrou na rota', req.body)
  const {id, content} = req.body
  db.save({id, content}, () => {
    console.log('Salvou no banco')
    res.send('Ok!')
    console.log('Respondeu!')
  })

})

app.listen(port, () => console.log(`Daenerys listening on port ${port}!`))
