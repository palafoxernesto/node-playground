// %s string
// %d number
// %j js9on912º6765
console.log('A %s & a %s', 'black dog', 'white dog')

// info is just an alias of log
console.info('hello world')

// warn is an alias of error
console.warn('this is a warn')

// assert shows error if exists
console.assert(42 === '42')
// console.assert(42 == '42')

// trace gives
// console.trace('hello')

const util = require('util')

// to print this will require to set env var NODE_DEBUG=foo
const debuglog = util.debuglog('foo')

debuglog('hello from foo')
