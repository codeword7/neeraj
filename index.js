#!/usr/bin/env node
// const handleError = require('cli-handle-error')
const alert = require('cli-alerts-codeword7')
const log = console.log;
const init = require('./utils/init')
const data = require('./utils/data')


init()
log(data.bio);
log(data.social)
alert({ type: 'info', msg: data.ad })