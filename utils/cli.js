const meow = require('meow');

const helpText = `
        Usage
           npx neeraj-bio [options]
        
        Options
           social       Show the social info
           --no-social  Don't show the social info
           ad           Show the ad info
           --no-ad      Don't show the ad info
           -d, --debug  Print debug information 

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
    },
    debug: {
      type: 'boolean',
      default: false,
      alias: 'd'
    }
  }
}

module.exports = meow(helpText, options)