const http = require('http')
const server = http.createServer()

// Objeto Map que contiene los nombres de la semana llave - valor
var days = new Map([
  [0, 'Sunday'],
  [1, 'Monday'],
  [2, 'Tuesday'],
  [3, 'Wednesday'],
  [4, 'Thursday'],
  [5, 'Friday'],
  [6, 'Saturday']
])

/*
* Regresa el día de la semana en que naciste dada tu fecha de nacimiento
* @param {number} - año
* @param {number} - mes
* @param {number} - día
* @returns {string} Nombre del día de la semana
*/
function getDayOfBirth (year, month, day) {
  const birthDate = new Date(year, month, day)
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
        // array destructuring
        const [year, month, day] = Buffer.concat(body).toString().split(/\W/) // expresión regular para capturar |-/ etc
        res.end(
          getDayOfBirth(
            year,
            month - 1, // el mes comienza en 0
            day))
      })
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(8001)
console.log('Servidor en la url http://localhost:8001')
