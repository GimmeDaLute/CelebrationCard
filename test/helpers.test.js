const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let helpers = require('../static/js/helpers');

describe('helpers', () => {

    describe('mode helpers', () => {
        let body;
        beforeEach(() => {
            document.documentElement.innerHTML = '<body></body>'
            body = document.querySelector('body');
        })
        
        describe('darkMode', () => {
            test('it updates body class to "dark', () => {
                helpers.darkMode();
                expect(body.className).toBe("dark")
            })
        })
    
        describe('lightMode', () => {
            test('it updates body class to "light', () => {
                helpers.lightMode();
                expect(body.className).toBe("light")
            })
        })
    })

    describe('layout helpers', () => {
        beforeEach(() => {
            document.documentElement.innerHTML = html.toString();
        })

        describe('renderName', () => {
            test('it renders the submitted name', () => {
                helpers.renderName('getfutureproof');
                const accountName = document.getElementById('account-name');
                expect(accountName.textContent).toContain('getfutureproof')
            })
        })
        
        describe('renderPublicRepoCount', () => {
            test('it updates the displayed repo count', () => {
                helpers.renderPublicRepoCount({ "public_repos": 50 });
                expect(document.getElementById('repo-count').textContent).toContain("50")
            })
    
            test('it clears the name input value', () => {
                const nameInput = document.getElementById('name');
                nameInput.value = 'Gingertonic';
                helpers.renderPublicRepoCount({ "public_repos": 50 });
                expect(nameInput.value).toBe("")
            })
        })
    
        describe('renderError', () => {
            test('it renders a red div with the error message', () => {
                helpers.renderError('Disaster has struck');
                const errorDiv = document.querySelector('.error');
                expect(errorDiv).toBeTruthy();
                expect(errorDiv.textContent).toContain('Disaster has struck')
            })
        })

        describe('closeError', () => {
            test('it removes the first element with class of error', () => {
                const testError = document.createElement('span')
                testError.className = 'error';
                testError.id = 'test-err'
                document.querySelector('header').appendChild(testError);
                helpers.closeError();
                expect(document.querySelector('#test-err')).toBeFalsy()
            })
        })
    })


})