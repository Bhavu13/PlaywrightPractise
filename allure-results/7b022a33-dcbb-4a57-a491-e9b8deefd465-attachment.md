# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ecommerce\rahulShettyOtherway.spec.js >> @Webst Client App login
- Location: tests\ecommerce\rahulShettyOtherway.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('tbody tr').filter({ hasText: ' | 6a0e939917ee3e78ba8d185f | ' }).getByRole('button', { name: 'View' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - heading "Your Orders" [level=1] [ref=e26]
    - table [ref=e27]:
      - rowgroup [ref=e28]:
        - row "Order Id Product Image Name Price Ordered Date View Delete" [ref=e29]:
          - columnheader "Order Id" [ref=e30]
          - columnheader "Product Image" [ref=e31]
          - columnheader "Name" [ref=e32]
          - columnheader "Price" [ref=e33]
          - columnheader "Ordered Date" [ref=e34]
          - columnheader "View" [ref=e35]
          - columnheader "Delete" [ref=e36]
      - rowgroup [ref=e37]:
        - row "6a0e939917ee3e78ba8d185f ZARA COAT 3 $ 11500 Thu May 21 View Delete" [ref=e38]:
          - rowheader "6a0e939917ee3e78ba8d185f" [ref=e39]
          - cell [ref=e40]:
            - img [ref=e41]
          - cell "ZARA COAT 3" [ref=e42]
          - cell "$ 11500" [ref=e43]
          - cell "Thu May 21" [ref=e44]
          - cell "View" [ref=e45]:
            - button "View" [ref=e46] [cursor=pointer]
          - cell "Delete" [ref=e47]:
            - button "Delete" [ref=e48] [cursor=pointer]
        - row "6a0e8ee517ee3e78ba8d118f ZARA COAT 3 $ 11500 Thu May 21 View Delete" [ref=e49]:
          - rowheader "6a0e8ee517ee3e78ba8d118f" [ref=e50]
          - cell [ref=e51]:
            - img [ref=e52]
          - cell "ZARA COAT 3" [ref=e53]
          - cell "$ 11500" [ref=e54]
          - cell "Thu May 21" [ref=e55]
          - cell "View" [ref=e56]:
            - button "View" [ref=e57] [cursor=pointer]
          - cell "Delete" [ref=e58]:
            - button "Delete" [ref=e59] [cursor=pointer]
        - row "6a0e8d9917ee3e78ba8d0dc9 ZARA COAT 3 $ 11500 Thu May 21 View Delete" [ref=e60]:
          - rowheader "6a0e8d9917ee3e78ba8d0dc9" [ref=e61]
          - cell [ref=e62]:
            - img [ref=e63]
          - cell "ZARA COAT 3" [ref=e64]
          - cell "$ 11500" [ref=e65]
          - cell "Thu May 21" [ref=e66]
          - cell "View" [ref=e67]:
            - button "View" [ref=e68] [cursor=pointer]
          - cell "Delete" [ref=e69]:
            - button "Delete" [ref=e70] [cursor=pointer]
        - row "6a0e8cd117ee3e78ba8d0bb8 ZARA COAT 3 $ 11500 Thu May 21 View Delete" [ref=e71]:
          - rowheader "6a0e8cd117ee3e78ba8d0bb8" [ref=e72]
          - cell [ref=e73]:
            - img [ref=e74]
          - cell "ZARA COAT 3" [ref=e75]
          - cell "$ 11500" [ref=e76]
          - cell "Thu May 21" [ref=e77]
          - cell "View" [ref=e78]:
            - button "View" [ref=e79] [cursor=pointer]
          - cell "Delete" [ref=e80]:
            - button "Delete" [ref=e81] [cursor=pointer]
        - row "6a0e86cd17ee3e78ba8d023b ZARA COAT 3 $ 11500 Thu May 21 View Delete" [ref=e82]:
          - rowheader "6a0e86cd17ee3e78ba8d023b" [ref=e83]
          - cell [ref=e84]:
            - img [ref=e85]
          - cell "ZARA COAT 3" [ref=e86]
          - cell "$ 11500" [ref=e87]
          - cell "Thu May 21" [ref=e88]
          - cell "View" [ref=e89]:
            - button "View" [ref=e90] [cursor=pointer]
          - cell "Delete" [ref=e91]:
            - button "Delete" [ref=e92] [cursor=pointer]
        - row "6a0e865717ee3e78ba8d016a ZARA COAT 3 $ 11500 Thu May 21 View Delete" [ref=e93]:
          - rowheader "6a0e865717ee3e78ba8d016a" [ref=e94]
          - cell [ref=e95]:
            - img [ref=e96]
          - cell "ZARA COAT 3" [ref=e97]
          - cell "$ 11500" [ref=e98]
          - cell "Thu May 21" [ref=e99]
          - cell "View" [ref=e100]:
            - button "View" [ref=e101] [cursor=pointer]
          - cell "Delete" [ref=e102]:
            - button "Delete" [ref=e103] [cursor=pointer]
        - row "6a0e85b517ee3e78ba8d005a ZARA COAT 3 $ 11500 Thu May 21 View Delete" [ref=e104]:
          - rowheader "6a0e85b517ee3e78ba8d005a" [ref=e105]
          - cell [ref=e106]:
            - img [ref=e107]
          - cell "ZARA COAT 3" [ref=e108]
          - cell "$ 11500" [ref=e109]
          - cell "Thu May 21" [ref=e110]
          - cell "View" [ref=e111]:
            - button "View" [ref=e112] [cursor=pointer]
          - cell "Delete" [ref=e113]:
            - button "Delete" [ref=e114] [cursor=pointer]
    - generic [ref=e115]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=e117]:
    - button "Go Back to Shop" [ref=e118] [cursor=pointer]
    - button "Go Back to Cart" [ref=e119] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  |  
  3  | test('@Webst Client App login', async ({ page }) => {
  4  |    //js file- Login js, DashboardPage
  5  |    const email = "anshika@gmail.com";
  6  |    const pwd = "Iamking@000";
  7  |    const productName = 'ZARA COAT 3';
  8  |    const products = page.locator(".card-body");
  9  |    await page.goto("https://rahulshettyacademy.com/client");
  10 |    await page.getByPlaceholder("email@example.com").fill(email);
  11 |    await page.getByPlaceholder("enter your passsword").fill(pwd);
  12 |    await page.getByRole("button", {name: "Login"}).click(); // There are two buttons so used the Name of the button
  13 |    await page.waitForLoadState('networkidle');
  14 |    await page.locator(".card-body b").first().waitFor();
  15 | 
  16 |    const titles = await page.locator(".card-body b").allTextContents();
  17 |    console.log(titles); 
  18 | 
  19 |    await page.locator(".card-body").filter({hasText : "ZARA COAT 3"}).getByRole("button", {name : "Add to Cart"}).click(); 
  20 |    //First the selector will have all the items in the page, from that ZARA COAT 3 is filtering and clicking the 
  21 |    // Add to cart button based on the Button name
  22 | 
  23 |    await page.getByRole("listitem").getByRole("button", {name : "Cart"}).click();
  24 |    //First listitem will have all the list items under the tag list and clicking the button which has the Name Cart 
  25 |    // under that li tag
  26 |  
  27 |    //await page.pause();
  28 |  
  29 |    await page.locator("div li").first().waitFor();
  30 | 
  31 |    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
  32 | 
  33 |    await page.getByRole("button", {name : "Checkout"}).click();
  34 |  
  35 |   await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
  36 | 
  37 |   await page.getByRole("button", {name : "India"}).nth(1).click();
  38 |   //Each dropdown values are in button tag, so by using getByRole trying to click India, but two matches will have the name India, 
  39 |   // so using nth(1) which has India and then clicking it
  40 |  
  41 |    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  42 | 
  43 |    await page.getByText("PLACE ORDER").click();
  44 | 
  45 |    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
  46 | 
  47 |    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  48 |    console.log(orderId);
  49 |  
  50 |    await page.getByRole("button", {name : "ORDERS"}).click();
  51 | 
  52 |    await page.locator("tbody").waitFor();
  53 |    const rows = page.locator("tbody tr");
> 54 |  await rows.filter({hasText : orderId}).getByRole("button" , {name : "View"}).click();
     |                                                                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  55 | 
  56 |    // for (let i = 0; i < await rows.count(); ++i) {
  57 |    //    const rowOrderId = await rows.nth(i).locator("th").textContent();
  58 |    //    if (orderId.includes(rowOrderId)) {
  59 |    //       await rows.nth(i).locator("button").first().click();
  60 |    //       break;
  61 |    //    }
  62 |    // }
  63 |    // const orderIdDetails = await page.locator(".col-text").textContent();
  64 |    // expect(orderId.includes(orderIdDetails)).toBeTruthy();
  65 |  
  66 | });
```