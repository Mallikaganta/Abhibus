const { expect } = require("@playwright/test");


class Busvalidations{
    constructor(page){
        this.page=page;
        
       
        //this.verifylogo=page.locator('id=abhibus-logo');
    }
    async goto() {
       
            await this.page.goto("https://www.abhibus.com/", { timeout: 60000 });
        }
    
    async logo(){
        await expect(this.page.locator('id=abhibus-logo')).toBeVisible();
    }
    async fromstation(){
        await this.page.getByPlaceholder('From Station').click();
        await this.page.getByPlaceholder('From Station').fill('Hyderabad');
        await this.page.locator('li[data-id="Hyderabad"]').click();
    }
    async tostation(){
        await this.page.getByPlaceholder('To Station').click();
        await this.page.getByPlaceholder('To Station').fill('Chennai');
        await this.page.locator('li[data-id="Chennai"]').click();

    }
    async date(){
        await this.page.getByPlaceholder('Onward Journey Date').click();
        await this.page.click('text=30');
        
    }
    async button(){
        await this.page.locator('#search-button').click();
    }
    async verify(){
        await expect(this.page.getByText('Showing 28 Buses on this route',{timeout:50000})).toBeVisible();
    }
    async filterByBusPartner(){
        await this.page.getByText('Bus Partner').click();
        await this.page.locator('div[class="container checkbox-container  md "]').nth(1).click();
        await this.page.locator('div[class="container checkbox-container  md "]').nth(2).click();

    }
    async verifyFilteredResults() {
        await expect(this.page.getByText('Showing 3 Buses on this route')).toBeVisible();
        await expect(this.page.locator('#service-operator-agent-name-2085709700')).toBeVisible();
        await expect(this.page.getByText('19:30')).toBeVisible();
        await expect(this.page.getByText('07:30')).toBeVisible();
        await expect(this.page.getByText('2,730')).toBeVisible();
    

}}
   module.exports = { Busvalidations };








