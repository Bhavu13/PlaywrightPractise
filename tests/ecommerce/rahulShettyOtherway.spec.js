const { test, expect } = require('@playwright/test');
 
test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const pwd = "Iamking@000";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill(pwd);
   await page.getByRole("button", {name: "Login"}).click(); // There are two buttons so used the Name of the button
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();

   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 

   await page.locator(".card-body").filter({hasText : "ZARA COAT 3"}).getByRole("button", {name : "Add to Cart"}).click(); 
   //First the selector will have all the items in the page, from that ZARA COAT 3 is filtering and clicking the 
   // Add to cart button based on the Button name

   await page.getByRole("listitem").getByRole("button", {name : "Cart"}).click();
   //First listitem will have all the list items under the tag list and clicking the button which has the Name Cart 
   // under that li tag
 
   //await page.pause();
 
   await page.locator("div li").first().waitFor();

   await expect(page.getByText("ZARA COAT 3")).toBeVisible();

   await page.getByRole("button", {name : "Checkout"}).click();
 
  await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 

  await page.getByRole("button", {name : "India"}).nth(1).click();
  //Each dropdown values are in button tag, so by using getByRole trying to click India, but two matches will have the name India, 
  // so using nth(1) which has India and then clicking it
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

   await page.getByText("PLACE ORDER").click();

   await expect(page.getByText("Thankyou for the order.")).toBeVisible();

   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.getByRole("button", {name : "ORDERS"}).click();

   await page.locator("tbody").waitFor();
   const rows = page.locator("tbody tr");
 await rows.filter({hasText : orderId}).getByRole("button" , {name : "View"}).click();

   // for (let i = 0; i < await rows.count(); ++i) {
   //    const rowOrderId = await rows.nth(i).locator("th").textContent();
   //    if (orderId.includes(rowOrderId)) {
   //       await rows.nth(i).locator("button").first().click();
   //       break;
   //    }
   // }
   // const orderIdDetails = await page.locator(".col-text").textContent();
   // expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});