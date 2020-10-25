const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extend: true}))


app.post('/usuarios', (req, resp) => {
      console.log(req.body) //Quando o método é POST
      // console.log(req.query) Quando o método for GET
    resp.send('<h1>Usuário Inserido!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
  console.log(req.params.id)
  console.log(req.body)
  resp.send('<h1>Usuário Alterado!</h1>')
})

app.listen(3003)