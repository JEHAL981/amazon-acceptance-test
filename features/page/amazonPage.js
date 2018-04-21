const PageObject = require('puppeteer-page-object')
const puppeteer = require('puppeteer')

const elem = {

    SEARCH_PANEL: "#twotabsearchtextbox",
    RESULT_PANEL: "#s-result-info-bar"

}

class amazonPage extends PageObject {
    constructor() {
        super({
            scenarioName: 'amazon_search'
        })
    }

    async waitForSearchPanel() {
        await this.page.waitForSelector(elem.SEARCH_PANEL)
    }

    async typeRequest(text) {
        await this.page.type(elem.SEARCH_PANEL, text);
        await this.page.keyboard.down('Enter');
    }


    async assertResults() {
        await this.page.waitForSelector(elem.RESULT_PANEL)
    }
}

module.exports = new amazonPage()
