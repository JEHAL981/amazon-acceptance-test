const {defineSupportCode} = require('cucumber')
const amazon = require('../page/amazonPage')
const config = require('../../config')

defineSupportCode(({Given, When, Then}) => {
    Given('I have opened Amazon', async () => {
        await amazon.init()
        await amazon.open(config.baseUrl)
        await amazon.waitForSearchPanel();
    })

    When('I search for {string}', async (search) => {
        await amazon.typeRequest(search)


    });
    Then('I should see the results page', async () => {
        await amazon.assertResults()
    });


})
