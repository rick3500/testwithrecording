const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the login screen', async function () {
    await this.driver.url('https://example.com/login');
});

When('I start screen recording', async function () {
    await this.driver.startRecordingScreen();
});

When('I enter a valid username and password', async function () {
    const usernameInput = await this.driver.$('#username');
    await usernameInput.setValue('validUsername');

    const passwordInput = await this.driver.$('#password');
    await passwordInput.setValue('validPassword');
});

When('I press the login button', async function () {
    const loginButton = await this.driver.$('#login-button');
    await loginButton.click();
});

Then('I should see the home screen', async function () {
    const homeScreen = await this.driver.$('#home-screen');
    assert.strictEqual(await homeScreen.isDisplayed(), true);
});

Then('I stop screen recording', async function () {
    const videoData = await this.driver.stopRecordingScreen();
});