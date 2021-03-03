let apiHelpers = require('../static/js/api');
let helpers = require('../static/js/helpers');

jest.mock('../static/js/helpers');
global.fetch = require('jest-fetch-mock');

describe('api helpers', () => {
    beforeEach(() => {
        fetch.resetMocks();
    })

    describe('getGitHubUserInfo', () => {
        test('it makes a fetch call to the given user\'s github api url', () => {
            apiHelpers.getGitHubUserInfo('getfutureproof')
            expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/getfutureproof')
        })

        test('it calls renderPublicRepoCount on successful request', async () => {
            fetch.mockResponse(JSON.stringify({ "public_repos": 100 }))
            await apiHelpers.getGitHubUserInfo('gingertonic')
            expect(helpers.renderPublicRepoCount).toHaveBeenCalledWith({ "public_repos": 100 })
        })

        test('it calls renderError on failed request', () => {
            fetch.mockReject(new Error())
            apiHelpers.getGitHubUserInfo('gingertonic')
            expect(helpers.renderError).toHaveBeenCalled()
        })
    })

})