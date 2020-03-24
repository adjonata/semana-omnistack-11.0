const express = require('express')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const port = 3333
app.listen(port, () => {
  console.log(`Executando na porta ${port}...`)
})