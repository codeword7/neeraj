#!/usr/bin/env node
const welcome = require('cli-welcome')
const pkgJson = require('./package.json')

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

console.log(`Neeraj Kumar - Software Engineer`);