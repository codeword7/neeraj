const fetch = require('node-fetch');
const handleError = require('cli-handle-error')
const API_URL = `https://api.github.com/users/codeword7`
module.exports = async () => {
  try {
    const res = await fetch(API_URL)
    const data = await res.json()
    const ghFollowers = data.followers
    console.log(`
  Github Followers: ${ghFollowers}
  `)
  } catch (error) {
    handleError(`API CALL FAILED`, error, false, false)
  }
}