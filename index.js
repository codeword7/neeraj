#!/usr/bin/env node
// const handleError = require('cli-handle-error')
const alert = require('cli-alerts-codeword7')
const init = require('./utils/init')
const data = require('./utils/data')
const cli = require('./utils/cli')
const debug = require('./utils/debug')
const log = console.log;


const input = cli.input
const flags = cli.flags

init()
input.includes('help') && cli.showHelp(0)
log(data.bio)
if (flags.social) {
        log(data.social)
}
if (flags.ad) {
        alert({ type: 'info', msg: data.ad })
}
//debug info if needed
debug(flags.debug, cli)