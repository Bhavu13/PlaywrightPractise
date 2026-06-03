const {test} = require ('@playwright/test');
test('Add to Cart',async({page})=>
{
    // const productName = "";
    // const products = page.locator(".product-item");

    const url = "https://demo.nopcommerce.com/electronics";
    await page.goto(url);
    await page.waitForLoadState('networkidle');

    await page.locator("img[title='Show products in category Cell phones']").click();
     await page.waitForLoadState('networkidle');
    await page.locator(".product-item a").first().waitFor();
    const titles = await page.locator(".product-item a").allTextContents();
    console.log(titles);


//     const count = products.count();
//     for (let i=0; i < count; ++i)
// {
//    if( await products.nth(i).locator("a").textContent() === productName)
//    {
//     await products.nth(i).locator("text=Add to basket").click();
//     break;
//    }
// }


})