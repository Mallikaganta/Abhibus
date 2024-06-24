
const { Given, When, Then } = require('@cucumber/cucumber');
const { HomePage }=require('../../pages/HomePage')
const { expect } = require('@playwright/test');
// const { chromium } = require('playwright');
const playwright=require('@playwright/test');
let browser, page, homePage;
 
Given('I open the Abhibus website',{timeout:(100*1000)}, async function () {
 
 const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  const homePage = new HomePage(page);
  
  await homePage.goto();
});
 
Then('I expect the Abhibus logo to be visible',{timeout:(100*1000)}, async function () {
  const homePage = new HomePage(page);
  await homePage.verifyLogo();
  
});
Then('I select {string} in the {string} in the dropdown', async function (Hyderabad, fromStation) {
  
    await homePage.enterFromStation('Hyderabad');
   
  });



  Then('I select {string} in the {string} from the dropdown', async function (Chennai, toStation) {
    
    await homePage.enterToStation('Chennai');
  });



  Then('I select the date {string} in Onward Journey Date', async function (onwardJourneyDate) {
    
    await homePage.selectOnwardJourneyDate('30');
   
  });



  Then('I click the search button', async function () {
    await homePage.clickSearchButton();
  });



  Then('I expect to see {string}', async function (verifySearchResults) {
    await homePage.verifySearchResults();
  });



  Then('I click on {string} and I select bus operators {string} and {string}',async function (busPartner, nth1, nth2) {
    await homePage.filterByBusPartner();
 })



 Then('I expect to see {string} after filter',async  function (Showing)  {
    await homePage.verifyFilteredResults();
   
  });



  Then('I expect the bus operator name to be visible', async function () {
  
  });



  Then('I expect the departure time {string} to be visible',async  function (departureTime) {
    
    
  });


  Then('I expect the arrival time {string} to be visible',async function (arrivalTime) {
   
   
  });



  Then('I expect the fare {string} to be visible', async function (fare) {
   
  });
 
