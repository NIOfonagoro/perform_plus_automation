const { By, Key, until } = require('selenium-webdriver');

const x = require('../util');

const enterUserCredentials = async (driver, email, password)=>{
    await driver.findElement(By.name('email')).sendKeys(email);
    await driver.findElement(By.name('password')).sendKeys(password, Key.RETURN);
}

const logIn = async (driver, url, email, password)=>{
    await driver.get(url);
    await enterUserCredentials(driver, email, password)
    await driver.wait(until.urlContains("/dashboard"), 10000);
    await driver.wait(new Promise(resolve => setTimeout(resolve, 5000)));
}

module.exports = {
    logIn,
    enterUserCredentials
}
