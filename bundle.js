(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./helpers":3}],2:[function(require,module,exports){
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
},{"./api":1,"./helpers":3}],3:[function(require,module,exports){
function darkMode(){
    const body = document.querySelector('body');
    body.className = 'dark';
}

function lightMode(){
    const body = document.querySelector('body');
    body.className = 'light';
}

function renderPublicRepoCount(userData){
    const count = userData.public_repos;
    const span = document.getElementById('repo-count');
    span.textContent = count;
    const descrip = document.querySelector('#descrip')
    descrip.textContent = ' public repos'
    document.getElementById('name').value = ''
};

function renderName(name){
    const accountNameHolder = document.getElementById('account-name')
    accountNameHolder.textContent = name;
}

function renderError(err){
    const error = document.createElement('div');
    error.textContent = `Oh no! ${err}`;
    error.className = 'error';
    error.onclick = closeError;
    document.querySelector('header').appendChild(error);
}

function closeError(){
    const error = document.querySelector('.error');
    error.remove();
}

module.exports = { darkMode, lightMode, renderName, renderPublicRepoCount, renderError, closeError }
},{}],4:[function(require,module,exports){
const handlers = require('./handlers');

function init(){
    const modeCheck = document.getElementById('dark-mode');
    const form = document.querySelector('#my-form');
    form.addEventListener('submit', handlers.handleFormSubmit)
    modeCheck.addEventListener('click', handlers.switchMode)
}

init()
},{"./handlers":2}]},{},[4]);
