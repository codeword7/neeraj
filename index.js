#!/usr/bin/env node
// const handleError = require('cli-handle-error')
const alert = require('cli-alerts-codeword7')
const init = require('./utils/init')
const data = require('./utils/data')
const cli = require('./utils/cli')
const debug = require('./utils/debug')
const stats = require('./utils/stats')
const log = console.log;


const input = cli.input
const flags = cli.flags

const cliData = async () => {
        //init and help
        init(flags.minimal, flags.clear)
        input.includes('help') && cli.showHelp(0)

        //print out the info
        flags.bio && log(data.bio)
        flags.social && log(data.social)
        flags.ad && alert({ type: 'info', msg: data.ad })

        //stats
        await stats()

        //debug info if needed
        debug(flags.debug, cli)
}

cliData()