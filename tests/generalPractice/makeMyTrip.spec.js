const { test, expect } = require('@playwright/test');

test('Select departure date and business class', async ({ page }) => {

    const month = 'August';
    const year = '2026';
    const day = '15';

    await page.goto('https://www.makemytrip.com/', {
        waitUntil: 'domcontentloaded'
    });

    // Close login popup
    await page.locator('body').click();

    // Select departure date
    await page.click('//label[@for="departure"]');

    while (true) {

        const monthYear = await page
            .locator('(//div[contains(@class,"DayPicker-Caption")])[1]')
            .textContent();

        if (monthYear.includes(month) && monthYear.includes(year)) {
            break;
        }

        await page.click('//span[@aria-label="Next Month"]');
    }

    await page.locator(`//p[text()='${day}']`).click();

    await page.click('//label[@for="travellers"]');

    // Select Business Class
    await page.locator('//li[text()="Business"]').click();

    // Click Apply
    await page.locator('//button[text()="APPLY"]').click();

    await page.waitForTimeout(3000);
});