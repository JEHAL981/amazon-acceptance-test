const {defineSupportCode} = require('cucumber')

const puppeteer = require('puppeteer')

defineSupportCode(({Before, After}) => {
    Before(async  () => {
        const browser = this.browser = await puppeteer.launch({
            headless: true
        })
        this.page = await browser.newPage();
    })

    After(async () => {
        await this.browser.close();
    })
})