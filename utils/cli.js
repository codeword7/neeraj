const meow = require('meow');
const { green, cyan, yellow } = require('chalk');

const helpText = `
        Usage
           ${green(`npx neeraj-bio`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}
        
        Options
           ${yellow(`--social`)}       Print the social info
           ${yellow(`--no-social`)}    Don't print the social info
           ${yellow(`--ad`)}           Print the ad info
           ${yellow(`--no-ad`)}        Don't print the ad info
           ${yellow(`-d`)}, ${yellow(`--debug`)}    Print debug information
           ${yellow(`-v`)}, ${yellow(`--version`)}  Print CLI version

        Commands
           ${cyan(`help`)}           Print CLI help information

        Examples
           ${green(`npx neeraj-bio`)} ${yellow(`--no-social`)}
           ${green(`npx neeraj-bio`)} ${yellow(`--no-ad`)}

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
    },
    debug: {
      type: 'boolean',
      default: false,
      alias: 'd'
    },
    version: {
      type: 'boolean',
      default: false,
      alias: 'v'
    }
  }
}

module.exports = meow(helpText, options)