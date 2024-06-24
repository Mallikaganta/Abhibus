const {test} = require('@playwright/test')

test('login first test',async ({browser,page})=>
{
    test.setTimeout(80000);
await page.goto("https://www.w3schools.com/");
await page .locator('a[class="ga-nav subtopnav_firstitem"]').click();
await page.click('#tnb-google-search-input') ;

})