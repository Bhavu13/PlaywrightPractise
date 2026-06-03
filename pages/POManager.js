const { LoginPage } = require("../pages/LoginPage");
const { DashboardPage } = require("../pages/DashboardPage");
const {CartPage} = require("../pages/CartPage");
const {PlaceOrderPage} = require("../pages/PlaceOrderPage");
const { OrdersPage } = require("./OrdersPage");

class POManager { //all the objects required in tests
    constructor(page){
        this.page = page;
       this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.placeOrderPage = new PlaceOrderPage(this.page);
        this.ordersPage = new OrdersPage(this.page);


    }
    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }
    getCartPage(){
        return this.cartPage;
    }
    getPlaceOrderPage(){
return this.placeOrderPage;
    }

    getOrdersPage(){
        return this.ordersPage;
    }

}
module.exports = { POManager };