const alert = require('cli-alerts-codeword7')

module.exports = (isDebug, input, flags) => {
  if (!isDebug) {
    return;
  }
  alert({ type: 'warning', msg: `DEBUG INFO ↓` })
  console.log(`CLI.input`, input)
  console.log(`CLI.flags`, flags)
  console.log()
}