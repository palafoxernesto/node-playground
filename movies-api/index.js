const express = require('express')
const app = express()
const debug = require('debug')('app:server')

const { config: { port } } = require('./config/index')
const { moviesApi } = require('./routes/movies')

const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers')

const notFoundHandler = require('./utils/middleware/notFoundHandler')

// body parser
app.use(express.json())

// routes
moviesApi(app)

// Catch 404
app.use(notFoundHandler)

// Error middleware handeñers
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

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

app.listen(port, function () {
  debug(`Listening http://localhost:${port}`)
})
