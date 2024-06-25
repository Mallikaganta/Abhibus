import { Given, When, Then } from '@cucumber/cucumber';
import { BasePage } from '../../pages/BasePage';
import { chromium, Browser, Page } from 'playwright';
let browser: Browser;
let page: Page;
let basepage: BasePage;


Given('I open the Abhibus website', async function () {
    browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
    const basepage = new BasePage(page);
    await basepage.goto();
  });Then('I expect the Abhibus logo to be visible', async function () {
 
    await basepage.verifyLogo();
    
  });
  Then('I select {string} in the {string} in the dropdown', async function (Hyderabad, fromStation) {
    
      await basepage.enterFromStation('Hyderabad');
     
    });
  
  
  
    Then('I select {string} in the {string} from the dropdown', async function (Chennai, toStation) {
      
      await basepage.enterToStation('Chennai');
    });
  
  
  
    Then('I select the date {string} in Onward Journey Date', async function (onwardJourneyDate) {
      
      await basepage.selectOnwardJourneyDate('30');
     
    });
  
  
  
    Then('I click the search button', async function () {
      await basepage.clickSearchButton();
    });
  
  
  
    Then('I expect to see {string}', async function (verifySearchResults) {
      await basepage.verifySearchResults();
    });
  
  
  
    Then('I click on {string} and I select bus operators {string} and {string}',async function (busPartner, nth1, nth2) {
      await basepage.filterByBusPartner();
   })
  
  
  
   Then('I expect to see {string} after filter',async  function (Showing)  {
      await basepage.verifyFilteredResults();
     
    });
  
  
  
    Then('I expect the bus operator name to be visible', async function () {
    
    });
  
  
  
    Then('I expect the departure time {string} to be visible',async  function (departureTime) {
      
      
    });
  
  
    Then('I expect the arrival time {string} to be visible',async function (arrivalTime) {
     
     
    });
  
  
  
    Then('I expect the fare {string} to be visible', async function (fare) {
     
    });
   
  

    
  

   

         