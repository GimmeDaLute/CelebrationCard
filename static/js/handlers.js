const { getGitHubUserInfo } = require('./api');
const { darkMode, lightMode, renderName } = require('./helpers');

function switchMode(e){
    e.target.checked ? darkMode() : lightMode();
}

function handleFormSubmit(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    getGitHubUserInfo(name);
    renderName(name);
}

module.exports = { switchMode, handleFormSubmit }