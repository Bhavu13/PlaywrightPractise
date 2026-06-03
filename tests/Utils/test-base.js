const base = require('@playwright/test');


exports.customtest = base.test.extend(
    {
        testDataForOrder : {
            username : "anshika@gmail.com",
    userpassword : "Iamking@000",
   productName : "ZARA COAT" ,
   countryCode : "ind",
   countryName : "India",
   orderConfirmationText : " Thankyou for the order. "
        }
    }
)