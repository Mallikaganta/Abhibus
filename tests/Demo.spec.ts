import { test, expect } from '@playwright/test';
test(' register page ', async ({ browser,page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.getByPlaceholder('First Name').fill('Mallika');
    await page.getByPlaceholder('Last Name').fill('Ganta');
    await page.locator('textarea[ng-model="Adress"]').fill("1-12, Dorsanipadu");
    await page.locator('input[type="email"]').fill("gantamallikchowdary@gmail.com");
    await page.locator('input[type="tel"]').fill("9603056603");
    await page.locator('input[value="FeMale"]').click();
    await page.locator('#checkbox1').check();
    const dropdown=page.locator('#msdd');
    await dropdown.click();
    await page.getByText('English').click();
    await page.locator('#Skills').selectOption('C++');
    // await page.getByText('C++').click();
     await page.locator('#countries').selectOption('Select Country');
    await page.locator('select[id="country"]').selectOption('India');
    // await page.getByText('India').click();
    await page.getByPlaceholder('Year').selectOption('1999');
    await page.getByPlaceholder('Month').selectOption('August');
    await page.getByPlaceholder('Day').selectOption('6');
    await page.locator('#firstpassword').fill("password");
    await page.locator('#secondpassword').fill("password");
    await page.locator('button[type="submit"]').click();
    await page.screenshot({path: 'screenshot1.png', fullPage:true});

})