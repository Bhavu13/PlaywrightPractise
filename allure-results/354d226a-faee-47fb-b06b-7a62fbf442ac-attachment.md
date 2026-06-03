# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: generalPractice\chainingOfMethods.spec.js >> Chaining of methods
- Location: tests\generalPractice\chainingOfMethods.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('[role=\'listitem\']').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - link "Amazon.in" [ref=e3] [cursor=pointer]:
    - /url: https://www.amazon.in/ref=cs_503_logo/
    - img "Amazon.in" [ref=e4]
  - paragraph [ref=e5]:
    - generic [ref=e6]:
      - generic [ref=e7]: Oops!
      - generic [ref=e8]:
        - text: It's rush hour and traffic is piling up on that page. Please try again in a short while.
        - text: If you were trying to place an order, it will not have been processed at this time.
  - paragraph [ref=e9]:
    - generic [ref=e10]:
      - img "*" [ref=e11]
      - link "Go to the Amazon.in home page to continue shopping" [ref=e13] [cursor=pointer]:
        - /url: https://www.amazon.in/ref=cs_503_link/
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('Chaining of methods', async ({ page }) => {
  4  | const url = "https://www.amazon.in/s?k=watches&ref=nb_sb_noss";
  5  |     await page.goto(url);
  6  |     //await page.waitForLoadState('networkidle');
  7  | 
> 8  |     await page.locator("[role='listitem']").first().waitFor();
     |                                                     ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  9  | 
  10 |    await page.locator("[role='listitem']").filter({hasText : 'Casio'}).getByRole("button").click();
  11 | 
  12 | })
```