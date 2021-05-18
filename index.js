#!/usr/bin/env node
const welcome = require('cli-welcome')
const pkgJson = require('./package.json')
const chalk = require('chalk')
const log = console.log;

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