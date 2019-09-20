const express = require('express')
const app = express()

const { config: { port } } = require('./config/index')
const { moviesApi } = require('./routes/movies')

app.use(express.json())
/*
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/json', function (req, res) {
  res.json({ hello: 'world' })
})

app.get('/year/:year', function (req, res) {
  const { year } = req.params
  const leap = year % 4 === 0 && year % 1000 !== 0
  res.send(`${year} is ${leap ? 'a' : 'not a'} leap year`)
})
*/

moviesApi(app)

app.listen(port, function () {
  console.log(`Listening http://localhost:${port}`)
})
