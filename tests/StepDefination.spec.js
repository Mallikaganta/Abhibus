
const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage } = require('../pages/HomePage');
const { chromium } = require('playwright');
 
let browser, page, homePage;
 
Given('I open the Abhibus website', async function () {
  browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  //const homePage = new HomePage(page);
  await homePage.goto();
});
 
Then('I expect the Abhibus logo to be visible', async function () {
  await homePage.verifyLogo();
});
 
When('I click on {string} input', async function (inputName) {
  if (inputName === "From Station") {
    await page.locator(Locators.fromStation).click();
  } else if (inputName === "To Station") {
    await page.locator(Locators.toStation).click();
  } else if (inputName === "Onward Journey Date") {
    await page.locator(Locators.onwardJourneyDate).click();
  }
});
 
When('I fill in {string} in the {string} input', async function (value, inputName) {
  if (inputName === "From Station") {
    await page.locator(Locators.fromStation).fill(value);
  } else if (inputName === "To Station") {
    await page.locator(Locators.toStation).fill(value);
  }
});
 
When('I select {string} from the dropdown', async function (value) {
  await page.locator(`li[data-id="${value}"]`).click();
});
 
When('I select the date {string}', async function (date) {
await page.click(`text=${date}`);
});
 
When('I click the search button', async function () {
  await homePage.clickSearchButton();
});
 
Then('I expect to see {string}', async function (text) {
  await expect(page.locator(`text=${text}`)).toBeVisible();
});
 
When('I click on {string}', async function (text) {
  await page.locator(`text=${text}`).click();
});
 
When('I select bus operators {string} and {string}', async function (operator1, operator2) {
  await page.locator(Locators.firstCheckbox).click();
  await page.locator(Locators.secondCheckbox).click();
});
 
Then('I expect the bus operator name to be visible', async function () {
  await expect(page.locator(Locators.agentName)).toBeVisible();
});
 
Then('I expect the departure time {string} to be visible', async function (time) {
  await expect(page.locator(`text=${time}`)).toBeVisible();
});
 
Then('I expect the arrival time {string} to be visible', async function (time) {
  await expect(page.locator(`text=${time}`)).toBeVisible();
});
 
Then('I expect the fare {string} to be visible', async function (fare) {
  await expect(page.locator(`text=${fare}`)).toBeVisible();
  StepDefination.veri
});