const checkNode = require('cli-check-node')
const unhandled = require('cli-handle-unhandled')
const welcome = require('cli-welcome')
const boxen = require('boxen');
const pkgJson = require('./../package.json')

module.exports = (minimal, clear) => {
  unhandled()

  checkNode('12')

  !minimal && welcome({
    title: pkgJson.name,
    tagLine: `Nice to meet you`,
    description: pkgJson.description,
    version: pkgJson.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear,
  });

  minimal && console.log(boxen(` Neeraj Kumar `, { padding: 1, float: `center`, dimBorder: true }))
}