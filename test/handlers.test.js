const { switchMode, handleFormSubmit } = require('../static/js/handlers');
let apiHelpers = require('../static/js/api');
let helpers = require('../static/js/helpers');

jest.mock('../static/js/helpers');
jest.mock('../static/js/api');

describe('handlers', () => {

    describe('switchMode', () => {
        test('it invokes darkMode if target is checked', () => {
            const stubEvent = { target: { checked: true }};
            switchMode(stubEvent);
            expect(helpers.darkMode).toHaveBeenCalled();
        })

        test('it invokes lightMode if target is checked', () => {
            const stubEvent = { target: { checked: false }};
            switchMode(stubEvent);
            expect(helpers.lightMode).toHaveBeenCalled();
        })
    });
    

    describe('handleFormSubmit', () => {
        test('it calls getGitHubUserInfo passing the user input', () => {
            const stubEvent = { preventDefault: jest.fn(), target: { name: { value: 'getfutureproof' }}}
            handleFormSubmit(stubEvent)
            expect(apiHelpers.getGitHubUserInfo).toHaveBeenCalledWith('getfutureproof')
        })

        test('it calls renderName passing the user input', () => {
            const stubEvent = { preventDefault: jest.fn(), target: { name: { value: 'getfutureproof' }}}
            handleFormSubmit(stubEvent)
            expect(helpers.renderName).toHaveBeenCalledWith('getfutureproof')
        })
    });

})