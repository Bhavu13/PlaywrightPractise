const { test, expect } = require('@playwright/test');
 
 
 
 
test('Finding Locators using Get By Label', async ({ page }) => {
const url = "https://demoqa.com/automation-practice-form";
    await page.goto(url);
    await page.waitForLoadState('networkidle');
    //Checkbox
    await page.getByLabel("Music").check();
    await page.getByLabel("Sports").check();
     //Radio Button
    await page.getByLabel("Other").check();

    //cheking for text box
    await page.getByPlaceholder("First Name").fill("Bhavani");
    //await page.getByLabel("Email").fill("bhavani@yopmail.com"); //this will not work
})