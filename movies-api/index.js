const express = require('express')
const app = express()

const { config: { port } } = require('./config/index')

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

app.listen(port, function () {
  console.log(`Listening http://localhost:${port}`)
})
