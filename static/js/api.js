const helpers = require('./helpers');

async function getGitHubUserInfo(username){
    try {
        const url = `https://api.github.com/users/${username}`
        const response = await fetch(url)
        const data = await response.json()
        helpers.renderPublicRepoCount(data)
    } catch (err) {
        helpers.renderError(err)
    }
   
};


module.exports = { getGitHubUserInfo }