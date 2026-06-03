import {test as base} from '@playwright/test';
const { POManager } = require("../pages/POManager");

 const test = base.extend({

   loggedInPage: async ({ page }, use) => {

    const username = "superadmin@assaycr.com";
    const userpassword = "Admin@123";

      const poManager = new POManager(page);
      const login = poManager.getLoginPage();
      await login.navigateToURL("https://emrv2.assaycr.in/");
      await login.validLogin(username,userpassword);

      await use(page);
   }

});
module.exports = { test };