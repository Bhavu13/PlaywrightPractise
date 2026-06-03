const {test,expect} = require ('@playwright/test');
const { customtest } = require('../Utils/test-base');
const { POManager } = require("../../pages/POManager");

customtest("Client App login", async ({ page,testDataForOrder }) =>
    {
   
   const poManager = new POManager(page);

   const loginPage = poManager.getLoginPage();
   await loginPage.navigateToURL();
   await loginPage.validLogin(testDataForOrder.username,testDataForOrder.userpassword);

   // await page.locator(".card-body b").first().waitFor();
   await expect(page.locator(".card-body b").first()).toBeVisible();

   const dashboardPage = poManager.getDashboardPage();
   await dashboardPage.addToCart(testDataForOrder.productName);
   
   await dashboardPage.goToCart();

   //await page.pause();

   const cartPage = poManager.getCartPage();
   await cartPage.verifyProductInCart(testDataForOrder.productName);
   await cartPage.checkOut(testDataForOrder.productName);
    });