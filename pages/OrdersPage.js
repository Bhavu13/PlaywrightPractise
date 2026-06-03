class OrdersPage{
    constructor(page){
        this.page = page;
        this.ordersPageLink = page.locator("button[routerlink*='myorders']");
        this.ordersTable = page.locator("tbody");
        this.rows = page.locator("tbody tr");
        this.orderIdDetails =page.locator(".col-text");
    }

    //navigate to orders method has been created in Dashboard.js file
async searchAndSelectOrder(orderId){
   await this.ordersTable.waitFor();
 
   for (let i = 0; i < await this.rows.count(); ++i) {
      const rowOrderId = await this.rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await this.rows.nth(i).locator("button").first().click();
         break;
      }
   }
}

async getOrderId(){
return await this.orderIdDetails.textContent();

}

}
module.exports = {OrdersPage};