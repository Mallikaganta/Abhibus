import { test,expect } from "@playwright/test";
import { waitForDebugger } from "inspector";
import { HomePage } from "../pages/HomePage";
test( 'home page', async ({ page }) => {
   
    await page.goto("https://www.abhibus.com/");
   

   await expect(page.locator('id=abhibus-logo')).toBeVisible();
   await page.getByPlaceholder('From Station').click();
   await page.getByPlaceholder('From Station').fill('Hyderabad');
   await page.locator('li[data-id="Hyderabad"]').click();
   await page.getByPlaceholder('To Station').click();
   await page.getByPlaceholder('To Station').fill('Chennai');
   await page.locator('li[data-id="Chennai"]').click();
   await page.getByPlaceholder('Onward Journey Date').click();
   await page.click('text=30');
   await page.locator('#search-button').click();
   await expect(page.getByText('Showing 28 Buses on this route')).toBeVisible();
   await page.getByText('Bus Partner').click();
   await page.locator('div[class="container checkbox-container  md "]').nth(1).click();
   await page.locator('div[class="container checkbox-container  md "]').nth(2).click();
   await expect(page.getByText('Showing 3 Buses on this route')).toBeVisible();
   await expect(page.locator('#service-operator-agent-name-2085709700')).toBeVisible();
   await expect(page.getByText('19:30')).toBeVisible();
   await expect(page.getByText('07:30')).toBeVisible();
   await expect(page.getByText('2,560')).toBeVisible();
 
    // Element is not found or not visible
   // console.log('Element with text "2,730" not found or not visible.');
    // Optionally handle the else condition, such as failing the test or logging an error
    // Example: throw new Error('Element not found');
  
 

    await page.pause();
 
    







});


