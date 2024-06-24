import { test,expect } from "@playwright/test";

import { Busvalidations } from "../pages/Busvalidations";
import { details } from "../pages/details";
import { HomePage } from "../pages/HomePage";

test( 'home page', async ({ page }) => {
   
   // await page.goto("https://www.abhibus.com/");
    const busvalidations=new Busvalidations(page);
   // const Details=new details(page);
    login1.goto();
    login1.logo();
    login1.fromstation();
    login1.tostation();
    login1.date();
    login1.button();
    login1.verify();
    login1.filterByBusPartner();
    login1.verifyFilteredResults();
   
   await page.pause();
 
    







});


