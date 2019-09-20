const fs = require('fs')

fs.mkdir('newDir', { recursive: true }, err => {
  if (err) {
    return console.log(err)
  }
})
