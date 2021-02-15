const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('header', () => {
        describe('dark mode checkbox', () => {
            let checkBox;

            beforeEach(() => {
                checkBox = document.querySelector('[type="checkbox"]')
            })

            test('it exists', () => {
                expect(checkBox).toBeTruthy();
            })

            test('it has an id of "dark-mode', () => {
                expect(checkBox.id).toBe('dark-mode')
            })

            test('it has a label', () => {
                const label = document.querySelector('label[for="dark-mode"]')
                expect(label).toBeTruthy();
                expect(label.textContent).toContain("Dark Mode")
            })
        })
    })

    describe('form', () => {
        let form;
        let textInput;
        beforeEach(() => {
            form = document.querySelector('form')
            textInput = form.querySelector('[type="text"]');
            submitBtn = form.querySelector('[type="submit"]');
        })

        test('it exists', () => {
            expect(form).toBeTruthy();
        });

        describe('text input', () => {
            test('it has an id of "name"', () => {
                expect(textInput.id).toBe('name');
            })
    
            test('it has a placeholder of "Enter username"', () => {
                expect(textInput.getAttribute('placeholder')).toBe('Enter username')
            })
        })

        describe('submit button', () => {
            test('it says "Send!', () => {
                expect(submitBtn.value).toBe('Send!');
            })
        })
    })

})