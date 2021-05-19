const checkNode = require('cli-check-node')
const unhandled = require('cli-handle-unhandled')
const welcome = require('cli-welcome')
const pkgJson = require('./../package.json')

module.exports = () => {
  unhandled()

  checkNode('12')

  welcome({
    title: pkgJson.name,
    tagLine: `Nice to meet you`,
    description: pkgJson.description,
    version: pkgJson.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
  });
}