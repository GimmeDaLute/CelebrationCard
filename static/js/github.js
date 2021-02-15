// API Interaction
const form = document.querySelector('#my-form');
form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e){
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const accountNameHolder = document.getElementById('account-name')
    accountNameHolder.textContent = name;
    getGitHubUserInfo(name);
}

async function getGitHubUserInfo(username){
    const url = `https://api.github.com/users/${username}`
    fetch(url)
        .then(r => r.json())
        .then(renderPublicRepoCount)
        .catch(renderError)
};

function renderPublicRepoCount(userData){
    const count = userData.public_repos;
    const span = document.getElementById('repo-count');
    span.textContent = count;
    const result = document.querySelector('#data p')
    result.append(' public repos')
    document.getElementById('name').value = ''
};

function renderError(err){
    const error = document.createElement('div');
    error.textContent = `Oh no! ${err}`;
    error.className = 'error';
    document.querySelector('header').appendChild(error);
}

try {
    module.exports = { handleFormSubmit, getGitHubUserInfo, renderPublicRepoCount, renderError }
} catch(e) {}