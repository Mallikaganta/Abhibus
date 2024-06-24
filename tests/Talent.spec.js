const { test, expect } = require('@playwright/test');

test('page first test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://talent.capgemini.com/in');
  try {
    // Wait for the element to appear in the DOM and be visible
    const closeButton = await page.waitForSelector('img[src="/image/responsive/close-cross.jpg"]', { timeout: 5000 });

    // Click the close button if it is found and visible
    await closeButton.click();
    console.log("Close button clicked.");
  } catch (error) {
    console.log("Close button not found or not visible within the timeout.");
  }

  


  // Click on the next link
  await page.locator('a[href="http://degreed.com/?orgsso=capgemini"]').click();

  // Wait for the profile link to be available
  const profile = page.locator('a[href="/profile/dguserDKGX6KM"]');

  // Wait for the new page event and click on the profile link
  const newPage =await Promise.all([
    context.waitForEvent('page'),  // Waits for the new page to be created
    profile.click(),                // Clicks on the profile link
  ])

  // Wait for the new page to load
 // await newPage.waitForLoadState();
  
  // You can now perform further actions on newPage
});
