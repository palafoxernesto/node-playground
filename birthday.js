const http = require('http')
const server = http.createServer()

var days = new Map([
  [0, 'Sunday'],
  [1, 'Monday'],
  [2, 'Tuesday'],
  [3, 'Wednesday'],
  [4, 'Thursday'],
  [5, 'Friday'],
  [6, 'Saturday']
])

function getDayOfBirth (year, month, day) {
  const birthDate = new Date(year, month, day)
  console.log(birthDate)
  const birthDay = birthDate.getDay()
  const birthDayName = days.get(birthDay)
  return birthDayName
}

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url === '/birthday') {
    const body = []

    req.on('data', chunk => {
      body.push(chunk)
    })
      .on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        const [year, month, day] = Buffer.concat(body).toString().split(/\W/)
        console.log(year, month, day)
        res.end(getDayOfBirth(year, month - 1, day))
      })
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(8001)
console.log('Servidor en la url http://localhost:8001')
