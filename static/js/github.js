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

function getGitHubUserInfo(username){
    const url = `https://api.github.com/users/${username}`

    fetch(url)
        .then(resp => resp.json())
        .then(renderPublicRepoCount)
        .catch(err => console.warn('Oh dear...', err))
};

function renderPublicRepoCount(userData){
    const count = userData.public_repos;
    const span = document.getElementById('repo-count');
    span.textContent = count;
    const result = document.querySelector('#data p')
    result.append(' public repos')
    document.getElementById('name').value = ''
};

