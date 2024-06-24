import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

//   await page.goto('about:blank');
//   await page.goto('https://www.abhibus.com/');

//   await page.getByPlaceholder('From Station').click();
//   await page.getByText('Hyderabad', { exact: true }).click();
//   await page.getByPlaceholder('To Station').click();
//   await page.getByText('Chennai', { exact: true }).click();
//   await page.getByRole('button', { name: 'Tomorrow' }).click();
//   expect(await page.getByText('Showing 23 Buses on this route')).toBeVisible();
//   await page.locator('div').filter({ hasText: /^Bus Partner$/ }).first().click();
//   await page.locator('div').filter({ hasText: /^Bharathi Travels$/ }).getByRole('checkbox').check();
//   await page.locator('div').filter({ hasText: /^IntrCity SmartBus$/ }).getByRole('checkbox').check();
//   await page.locator('div').filter({ hasText: /^Orange Tours and Travels$/ }).getByRole('checkbox').check();
//   //await page.locator('#sorter-service-count').click();
//   await page.locator('#service-operator-agent-name-2091422773').getByRole('heading', { name: 'IntrCity SmartBus' }).click();
//   await page.getByText('22:15').click();
//   await page.getByText('Jun10:20Chennai').click();
//   await page.getByText('2,008').click();
//redbus
// await page.goto('https://www.redbus.in/');
//   await page.getByRole('button', { name: ' From' }).click();
//   await page.fill('#src','Hyderabad');
//   await page.click('#autoSuggestContainer > div > div:nth-child(1) > div > div.sc-VigVT.ishpWr > ul > li.sc-iwsKbI.jTMXri.cursorPointing > div > text');
//   await page.fill('#dest', 'Guntur') ;
//   await page.click('li[class="sc-iwsKbI jTMXri cursorPointing"]');
 // await page.getByRole('button', { name: ' Date Jun 2024' }).getByTestId('20');
 //await page.locator('#search_button').click();
 await page.goto('https://www.redbus.in/bus-tickets/hyderabad-to-guntur');
 expect(await page.getByText('86 Buses found').isVisible());
 await page.getByPlaceholder('RTC BUS TYPE').click();
 await page.locator('label[title="AMARAVATHI"]').check();
 await page.locator('label[title="INDRA"]').check();
 await page.locator('div[class="button btn-apply rtc-apply"]').click();
 expect(await page.getByText('4 Buses found').isVisible());
 expect(await page.getByText('APSRTC - 4179').isVisible());
  await page.pause();
});