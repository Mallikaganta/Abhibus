
const { test, expect } = require('@playwright/test');
import { HomePage } from "../pages/HomePage";
const { Given, When, Then } = require('@cucumber/cucumber');
 
test('home page', async ({ page }) => {
  const homePage = new HomePage(page);
  
  await homePage.goto();
  
  
  await homePage.verifyLogo();
  
  await homePage.enterFromStation('Hyderabad');
  await homePage.enterToStation('Chennai');
  await homePage.selectOnwardJourneyDate('30');
  
  await homePage.clickSearchButton();
  
  await homePage.verifySearchResults();
  
  await homePage.filterByBusPartner();
  
  await homePage.verifyFilteredResults();
  
  await page.pause();
});