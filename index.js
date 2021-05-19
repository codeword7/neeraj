#!/usr/bin/env node
const welcome = require('cli-welcome')
const pkgJson = require('./package.json')
const chalk = require('chalk')
const checkNode = require('cli-check-node')
const log = console.log;

//Alerts
const sym = require('log-symbols')
const success = chalk.green.inverse
const info = chalk.blue.inverse
const warning = chalk.keyword(`orange`).inverse
const error = chalk.red.bold.inverse

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

log(` ${chalk.bgBlue.bold(` Neeraj Kumar `)} - Software Engineer`);

log(`
${sym.success} ${success(` SUCCESS `)}: Thanks for checking out my CLI

${sym.info} ${info(` INFO `)}: I'm creating a course on Udemy.com

${sym.warning} ${warning(` WARNING `)}: Please don't copy me. Be yourself.

${sym.error} ${error(` ERROR `)}: I'm on vacation. Contact me next week.
`)