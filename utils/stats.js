const fetch = require('node-fetch');
const { yellow } = require('chalk');
const handleError = require('cli-handle-error')
const ora = require('ora');
const { prompt } = require('enquirer')

const spinner = ora({ text: '' })
const API_URL = `https://api.github.com/users/codeword7`
module.exports = async () => {
  try {
    spinner.start(`${yellow(`FOLLOWERS`)} fetching...`)
    const res = await fetch(API_URL)
    const data = await res.json()
    const ghFollowers = data.followers
    // spinner.succeed(`${green(`FOLLOWERS`)} fetched`)
    spinner.stop()
    console.log(`
Github Followers: ${ghFollowers}
  `)
  } catch (error) {
    handleError(`API CALL FAILED`, error, false, false)
  }
}