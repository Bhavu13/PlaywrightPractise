const { test, expect } = require('@playwright/test');

test('Chaining of methods', async ({ page }) => {
const url = "https://www.amazon.in/s?k=watches&ref=nb_sb_noss";
    await page.goto(url);
    //await page.waitForLoadState('networkidle');

    await page.locator("[role='listitem']").first().waitFor();

   await page.locator("[role='listitem']").filter({hasText : 'Casio'}).getByRole("button").click();

})