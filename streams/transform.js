const { Transform } = require('stream')

/*
* Recibe una cadena de texto y la traduce a
* camelCase usando streams
* @param {array} - Array of words
* @return {string} - textoEnCamelCase
*/
function toCamelCase (arrayOfWords) {
  return arrayOfWords.reduce((accum, word) => {
    const firstLetter = word.charAt(0).toUpperCase()
    accum.push(firstLetter + word.slice(1))
    return accum
  }, []).join('')
}
const transformStream = new Transform({
  transform (chunk, encoding, callback) {
    console.log(toCamelCase(chunk.toString().split(' ')), 'dsdas')

    this.push(toCamelCase(chunk.toString().split(' ')))
    callback()
  }
})

process.stdin.pipe(transformStream).pipe(process.stdout)
