const { Given, When, Then, AfterAll, Before, After } = require('cucumber');
const { Builder, By, Capabilities, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

const stageUrl = 'https://dev-profile.performplus.pwc.com/'
const email = 'nicholas+luffy@play-consult.net'
const password = 'Performplus123'
const { enterUserCredentials } = require('../util/login');


// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', {"w3c":false});
const driver = new Builder().withCapabilities(capabilities).build();

    Given('I go to the Perform environment',async function () {
      await driver.get(stageUrl);
    });

    When('I enter valid Login credentials <email> <password>', async function () {
      await enterUserCredentials(driver, email, password)
    });

    Then('I should land on the Perform Homepage', async function () {
      await driver.wait(until.urlContains("/dashboard"), 10000);
    });

    AfterAll('end', async function(){
      await driver.close();
    });