class CustomLogging {
  constructor (moduleName = 'DEBUG', { moduleColor, logColor } = {}) {
    this.moduleName = `[${moduleName.toUpperCase()}]`
    this.moduleColor = moduleColor || '\x1b[31m'
    this.logColor = logColor || '\x1b[36m'
  }

  log (body = '') {
    console.log(
      `${this.moduleColor}${this.moduleName}${this.logColor} ${body}\x1b[0m`
    )
  }
}

console.log('Log normal')
const customDefaults = new CustomLogging()
customDefaults.log('Log defaults')
const custom = new CustomLogging('MyModule', { moduleColor: '\x1b[33m', logColor: '\x1b[92m' })
custom.log('Log personalizado!')
