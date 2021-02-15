let modeHelpers;

describe('dark mode helpers', () => {
    let body;

    beforeAll(() => {
        document.documentElement.innerHTML = '<body><header><input id="dark-mode"></header>'
        body = document.querySelector('body')
        modeHelpers = require('../static/js/darkMode');
    })

    describe('darkMode', () => {
        test('it updates body class to "dark', () => {
            modeHelpers.darkMode();
            expect(body.className).toBe("dark")
        })
    })

    describe('lightMode', () => {
        test('it updates body class to "light', () => {
            modeHelpers.lightMode();
            expect(body.className).toBe("light")
        })
    })

    describe('switchMode', () => {
        test('it turns on dark mode if box is checked', () => {
            modeHelpers.switchMode({ target: { checked: true }});
            expect(body.className).toBe('dark');
        })
    })

    describe('switchMode', () => {
        test('it turns on light mode if box is unchecked', () => {
            modeHelpers.switchMode({ target: { checked: false }});
            expect(body.className).toBe('light');
        })
    })
})