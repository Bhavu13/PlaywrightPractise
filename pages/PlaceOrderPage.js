const { expect } = require('@playwright/test');
class PlaceOrderPage{
    constructor(page){
        this.page = page;
        this.selectCountry = page.getByPlaceholder('Select Country');
        this.countryDropdown = page.locator(".ta-results");
        this.emaiIdfield = page.locator(".user__name [type='text']").first();
        this.placeOrderButton = page.locator(".action__submit");
        this.orderConfirmText = page.locator(".hero-primary");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");

    }

    async searchAndSelectCountry(countryCode,countryName){
        await this.selectCountry.pressSequentially(countryCode, { delay: 150 });
        await this.countryDropdown.waitFor();

        const optionsCount = await this.countryDropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await this.countryDropdown.locator("button").nth(i).textContent();
      if (text.trim() === countryName) {
         await this.countryDropdown.locator("button").nth(i).click();
         break;
      }
   }
    }
    async verifyEmailId(username){
          expect(this.emaiIdfield).toHaveText(username);
          
    }

    async submitAndPlaceOrder(){
         await this.placeOrderButton.click();
    }

    async orderConfirmation(orderConfirmationText){
        await expect(this.orderConfirmText).toContainText(orderConfirmationText);
           return await this.orderId.textContent();
    }


}

module.exports = {PlaceOrderPage};
