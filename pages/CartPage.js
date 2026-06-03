const { expect } = require('@playwright/test');
class CartPage{
    constructor(page){
        this.page = page;
        this.productTitles = page.locator(".card-body b");
        this.cartProducts = page.locator("div.cart li").first();
        this.checkoutButton = page.locator("text=Checkout");
    }

    async verifyProductInCart(productName){
        await this.cartProducts.waitFor();
        const bool = await this.getProductLocator(productName).isVisible();
        expect(bool).toBeTruthy();

    }

    async checkOut()
    {
        await this.checkoutButton.click();
    }

    getProductLocator(productName){
        //return this.page.locator("h3:has-text('"+productName+"')");
       return this.page.locator(`h3:has-text("${productName}")`);
    }
}
module.exports = {CartPage};