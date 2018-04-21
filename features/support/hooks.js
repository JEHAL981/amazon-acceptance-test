const {defineSupportCode} = require('cucumber')

const puppeteer = require('puppeteer')

defineSupportCode(({Before, After}) => {
    Before(async function () {
        const browser = this.browser = await puppeteer.launch({
            headless: false
        })
        this.page = await browser.newPage();
    })

    After(async function () {
        await this.browser.close();
    })
})