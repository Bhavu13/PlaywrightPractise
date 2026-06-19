# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: generalPractice\makeMyTrip.spec.js >> Select departure date and business class
- Location: tests\generalPractice\makeMyTrip.spec.js:3:1

# Error details

```
Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
Call log:
  - navigating to "https://www.makemytrip.com/", waiting until "domcontentloaded"

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - heading "This site can’t be reached" [level=1] [ref=e7]
  - paragraph [ref=e8]:
    - text: The webpage at
    - strong [ref=e9]: https://www.makemytrip.com/
    - text: might be temporarily down or it may have moved permanently to a new web address.
  - generic [ref=e10]: ERR_HTTP2_PROTOCOL_ERROR
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Select departure date and business class', async ({ page }) => {
  4  | 
  5  |     const month = 'August';
  6  |     const year = '2026';
  7  |     const day = '15';
  8  | 
> 9  |     await page.goto('https://www.makemytrip.com/', {
     |                ^ Error: page.goto: net::ERR_HTTP2_PROTOCOL_ERROR at https://www.makemytrip.com/
  10 |         waitUntil: 'domcontentloaded'
  11 |     });
  12 | 
  13 |     // Close login popup
  14 |     await page.locator('body').click();
  15 | 
  16 |     // Select departure date
  17 |     await page.click('//label[@for="departure"]');
  18 | 
  19 |     while (true) {
  20 | 
  21 |         const monthYear = await page
  22 |             .locator('(//div[contains(@class,"DayPicker-Caption")])[1]')
  23 |             .textContent();
  24 | 
  25 |         if (monthYear.includes(month) && monthYear.includes(year)) {
  26 |             break;
  27 |         }
  28 | 
  29 |         await page.click('//span[@aria-label="Next Month"]');
  30 |     }
  31 | 
  32 |     await page.locator(`//p[text()='${day}']`).click();
  33 | 
  34 |     await page.click('//label[@for="travellers"]');
  35 | 
  36 |     // Select Business Class
  37 |     await page.locator('//li[text()="Business"]').click();
  38 | 
  39 |     // Click Apply
  40 |     await page.locator('//button[text()="APPLY"]').click();
  41 | 
  42 |     await page.waitForTimeout(3000);
  43 | });
```