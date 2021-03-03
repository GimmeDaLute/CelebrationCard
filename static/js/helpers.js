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