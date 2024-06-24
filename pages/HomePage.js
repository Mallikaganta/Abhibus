// HomePage.js
const { expect } = require('@playwright/test');
 
class HomePage {
  constructor(page) {
    this.page = page;
    this.abhibusLogo = page.locator('svg[id="abhibus-logo"]');
    this.fromStation = page.getByPlaceholder('From Station');
    this.toStation = page.getByPlaceholder('To Station');
    this.onwardJourneyDate = page.getByPlaceholder('Onward Journey Date');
    this.searchButton = page.locator('#search-button');
    this.resultText = page.getByText('Showing 29 Buses on this route');
    this.busPartner = page.getByText('Bus Partner');
    this.firstCheckbox = page.locator('div[class="container checkbox-container  md "]').nth(1);
    this.secondCheckbox = page.locator('div[class="container checkbox-container  md "]').nth(2);
    this.filteredResultText = page.getByText('Showing 3 Buses on this route');
    this.agentName = page.locator('#service-operator-agent-name-2085709700');
    this.departureTime = page.getByText('19:30');
    this.arrivalTime = page.getByText('07:30');
    this.price = page.getByText('2,560');
  }
  
  async goto() {
await this.page.goto('https://www.abhibus.com/');
  }
 
  async verifyLogo() {
    await expect(this.abhibusLogo).toBeVisible();
  }
 
  async enterFromStation(station) {
await this.fromStation.click();
    await this.fromStation.fill(station);
await this.page.locator(`li[data-id="${station}"]`).click();
  }
 
  async enterToStation(station) {
await this.toStation.click();
    await this.toStation.fill(station);
await this.page.locator(`li[data-id="${station}"]`).click();
  }
 
  async selectOnwardJourneyDate(date) {
await this.onwardJourneyDate.click();
await this.page.click(`text=${date}`);
  }
 
  async clickSearchButton() {
await this.searchButton.click();
  }
 
  async verifySearchResults() {
    await expect(this.resultText).toBeVisible();
  }
 
  async filterByBusPartner() {
await this.busPartner.click();
await this.firstCheckbox.click();
await this.secondCheckbox.click();
  }
 
  async verifyFilteredResults() {
    await expect(this.filteredResultText).toBeVisible();
    await expect(this.agentName).toBeVisible();
    await expect(this.departureTime).toBeVisible();
    await expect(this.arrivalTime).toBeVisible();
    await expect(this.price).toBeVisible();
  }
}
 
module.exports = { HomePage };