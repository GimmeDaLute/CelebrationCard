const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


global.fetch = require('jest-fetch-mock');
let githubHelpers;

describe('github helpers', () => {
    beforeAll(() => {
        document.documentElement.innerHTML = html.toString();
        githubHelpers = require('../static/js/github');
    })

    describe('handleFormSubmit', () => {
        test('it updates the account name holder', () => {
            fetch.mockResponseOnce(JSON.stringify({ "public_repos": 100 }))
            githubHelpers.handleFormSubmit({ preventDefault: jest.fn(), target: { name: { value: 'Gingertonic'}}})
            expect(document.getElementById('account-name').textContent).toContain('Gingertonic')
        })
    });

    describe('getGitHubUserInfo', () => {
        test('it makes a fetch call to the given user\'s github api url', () => {
            fetch.mockResponseOnce(JSON.stringify({ "public_repos": 100 }))
            githubHelpers.getGitHubUserInfo('gingertonic')
            expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/gingertonic')
        })
    })

    describe('renderPublicRepoCount', () => {
        test('it updates the displayed repo count', () => {
            githubHelpers.renderPublicRepoCount({ "public_repos": 50 });
            expect(document.getElementById('repo-count').textContent).toContain("50")
        })

        test('it clears the name input value', () => {
            const nameInput = document.getElementById('name');
            nameInput.value = 'Gingertonic';
            githubHelpers.renderPublicRepoCount({ "public_repos": 50 });
            expect(nameInput.value).toBe("")
        })
    })

    describe('render error', () => {
        test('it renders a red div with the error message', () => {
            githubHelpers.renderError('Disaster has struck');
            const errorDiv = document.querySelector('.error');
            expect(errorDiv).toBeTruthy();
            expect(errorDiv.textContent).toContain('Disaster has struck')
        })
    })

    afterEach(() => {
        fetch.resetMocks();
    })
    
    afterAll(() => {
        console.warn = resetWarn;
    })
})