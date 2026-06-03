const { test, expect } = require('@playwright/test');
const { POManager } = require("../../pages/POManager");
const dataset = JSON.parse(JSON.stringify(require("../Utils/rahulShettyPOTestData.json")));

for(const data of dataset) {
test(`Client App login for ${data.productName}`, async ({ page }) => {
   
   const poManager = new POManager(page);

   const loginPage = poManager.getLoginPage();
   await loginPage.navigateToURL();
   await loginPage.validLogin(data.username,data.userpassword);

   // await page.locator(".card-body b").first().waitFor();
   await expect(page.locator(".card-body b").first()).toBeVisible();

   const dashboardPage = poManager.getDashboardPage();
   await dashboardPage.addToCart(data.productName);
   
   await dashboardPage.goToCart();

   //await page.pause();

   const cartPage = poManager.getCartPage();
   await cartPage.verifyProductInCart(data.productName);
   await cartPage.checkOut(data.productName);
 
const placeOrderPage = poManager.getPlaceOrderPage();
await placeOrderPage.searchAndSelectCountry(data.countryCode,dataset.countryName);
await placeOrderPage.verifyEmailId(data.username);
await placeOrderPage.submitAndPlaceOrder();
await placeOrderPage.orderConfirmation(data.orderConfirmationText);
 
   console.log(orderId);
 
  const ordersPage = poManager.getOrdersPage();
  await dashboardPage.goToOrdersPage();
  await ordersPage.searchAndSelectOrder(orderId);
  expect(orderId.includes(await ordersPage.getOrderId())).toBeTruthy();

   
 
});
}

