const { test, expect } = require('@playwright/test');

test('Finding Locators using Get By Label', async ({ page }) => {
const url = "https://demoqa.com/automation-practice-form";
    await page.goto(url);
    await page.waitForLoadState('networkidle');

    //cheking for text box using placeholder
    await page.getByPlaceholder("First Name").fill("Bhavani");

    //getBy Role
    await page.getByRole("button" , {name : 'Submit'}).click();

})