const { Client } = require('pg')
const client = new Client({

  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'mockerydb',
  password: process.env.DB_PASSWORD,
  port: 5432,
})

const save = ({id, content}, callback) => {
  client.connect((err) => {
    console.log(err)
    client.query(`insert into messages(id, content) values('${id}', '${content}')`, (err, res) => {
      console.log(err, res)
      callback()
      client.end()
    })
  })
}

module.exports = {
  save: save
}
