const alert = require('cli-alerts-codeword7')

module.exports = (isDebug, cli) => {
  if (!isDebug) {
    return;
  }
  alert({ type: 'warning', msg: `DEBUG INFO ↓` })
  console.log(`CLI.input`, cli.input)
  console.log(`CLI.flags`, cli.flags)
  console.log()
}