#!/usr/bin/env node
// const handleError = require('cli-handle-error')
const meow = require('meow');
const alert = require('cli-alerts-codeword7')
const init = require('./utils/init')
const data = require('./utils/data')
const log = console.log;

const helpText = `
        Usage
           npx neeraj-bio [options]
        
        Options
           social       Show the social info
           --no-social  Don't show the social info
           ad       Show the ad info
           --no-ad  Don't show the ad info

        Examples
           npx neeraj-bio --no-social

`
const options = {
        flags: {
                social: {
                        type: 'boolean',
                        default: true
                },
                ad: {
                        type: 'boolean',
                        default: true
                }
        }
}

const cli = meow(helpText, options)
const input = cli.input
const flags = cli.flags

init()
log(data.bio)
if (flags.social) {
        log(data.social)
}
if (flags.ad) {
        alert({ type: 'info', msg: data.ad })
}
alert({ type: 'info', msg: `CLI DATA ↓` })
console.log(`CLI.input`, input)
console.log(`CLI.flags`, flags)
console.log()