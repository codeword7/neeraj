#!/usr/bin/env node
const chalk = require('chalk')
const log = console.log;
const init = require('./utils/init')
//Alerts
const sym = require('log-symbols')
const success = chalk.green.inverse
const info = chalk.blue.inverse
const warning = chalk.keyword(`orange`).inverse
const error = chalk.red.bold.inverse


init()

log(` ${chalk.bgBlue.bold(` Neeraj Kumar `)} - Software Engineer`);

log(`
        ${sym.success} ${success(` SUCCESS `)}: Thanks for checking out my CLI

        ${sym.info} ${info(` INFO `)}: I'm creating a course on Udemy.com

        ${sym.warning} ${warning(` WARNING `)}: Please don't copy me. Be yourself.

        ${sym.error} ${error(` ERROR `)}: I'm on vacation. Contact me next week.
        `)