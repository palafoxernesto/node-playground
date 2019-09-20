const fs = require('fs')

fs.copyFile('zenOfJs', 'jsZen', err => {
  if (err) {
    console.log(err)
  }
  console.log('file was copied')
})
