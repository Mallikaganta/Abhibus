
const { test, expect, } = require('@playwright/test');
import { BasePage } from "../pages/BasePage";
const { Given, When, Then } = require('@cucumber/cucumber');
 
test('home page', async ({ page }) => {
  const basepage = new BasePage(page);
  
  await basepage.goto();
  
  
  await basepage.verifyLogo();
  
  await basepage.enterFromStation('Hyderabad');
  await basepage.enterToStation('Chennai');
  await basepage.selectOnwardJourneyDate('30');
  
  await basepage.clickSearchButton();
  
  await basepage.verifySearchResults();
  
  await basepage.filterByBusPartner();
  
  await basepage.verifyFilteredResults();
  
  await page.pause();
});