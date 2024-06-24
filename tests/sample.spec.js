const { test, expect } = require('@playwright/test');

test('page first test', async ({ page }) => {
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
  await page.locator('a[title="NEXT"]').click();

});


