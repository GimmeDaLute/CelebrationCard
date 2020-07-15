// Relies on having mocha, chai and puppeteer as dev dependencies
const expect = require('chai').expect;
const puppeteer = require('puppeteer'); // https://devdocs.io/puppeteer/

const fs = require('fs');
const { doesNotMatch } = require('assert');

let browser;
let page;

before(async () => {
    try {
        browser = await puppeteer.launch({headless: true});
        page = await browser.newPage();
        const html = fs.readFileSync('index.html', {encoding: 'utf-8'});
        await page.setContent(html)
    } catch {
        done();
    }
    
});

describe('index.html', () => {

    describe('form', () => {
        it('exists', async () => {
            const form = await page.$('form');
            expect(form).to.exist;
        });

        describe('text input', () => {
            let textInput;
            it('has an id of "name""', async () => {
                textInput = await page.$('form input#name');
                expect(textInput).to.exist;
            });

            it('has a placeholder of "Danearys"', async () => {
                const placeholder = await textInput.evaluate(el => el.getAttribute("placeholder"), textInput);
                expect(placeholder).to.equal("Danearys");
            })
        })

        describe('password input', () => {
            let passwordInput;
            it('has an with id of "password""', async () => {
                passwordInput = await page.$('form input#password');
                expect(passwordInput).to.exist;
            });

            it('is a password field', async () => {
                const type = await passwordInput.evaluate(el => el.getAttribute("type"), passwordInput);
                expect(type).to.equal("password");
            })
        })

        describe('submit', () => {

        })
    });

});

after(async () => {
    await browser.close();
});