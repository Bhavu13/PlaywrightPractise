const { test, expect, request} = require('@playwright/test');
const loginPayload = {
    username: "superadmin@assaycr.com",
    password: "Admin@123",
    deviceId: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
    deviceName: "Unknown",
    deviceType: "DESKTOP",
    ipAddress: "2406:7400:51:b6bd:df5:4940:3797:aab5"
}
let token;

test.beforeAll(async()=>
{
const apiContext = await request.newContext();
const loginResponse = await apiContext.post("https://apiemrv2.assaycr.in/api/v1/auth/loginwithpassword", 
    {
        data : loginPayload
    })

    expect(loginResponse.ok()).toBeTruthy();
    const loginRespJson = await loginResponse.json();
    token = loginRespJson.token;
    console.log(token);

})

test("Automating calender with Assertions", async({page})=>
{

    await page.addInitScript(([token]) => {
    window.sessionStorage.setItem('basicauth', token);
    window.sessionStorage.setItem('user', token); // 🔥 IMPORTANT
}, [token]);
    const monthNumber = "6";
    const date = "13";
    const year = "2021";
    const expectedList = [date,monthNumber,year]; 

   await page.goto("https://emrv2.assaycr.in/");

   await page.waitForLoadState('networkidle');

await page.getByRole('link', { name: 'Facilities' }).click();
   await page.getByText('Add Facility').click();

   const calender = page.locator("#regDate")
   
   await calender.click();

   await page.locator('.bs-datepicker-head button.current').first().click();

   await page.locator('.bs-datepicker-head button.current').click();

   await page.getByText(year).click();
   await page.locator('table.months').waitFor();
   const months = page.locator('table.months td span');
   
   await months.nth(Number(monthNumber)-1).click(); //Converts string to Number

   await page.locator("//span[text()='"+date+"']").click();

   const actualValue = await calender.inputValue();

  console.log(actualValue);

  //Checking the Expected value is equal to the value in the Calendar field

  const [actualDate, actualMonthText, actualYear] = actualValue.split(" ");

 const monthsMap = {
  Jan: "1", Feb: "2", Mar: "3", Apr: "4",
  May: "5", Jun: "6", Jul: "7", Aug: "8",
  Sep: "9", Oct: "10", Nov: "11", Dec: "12"
};

const actualMonthNumber = monthsMap[actualMonthText];

const actualList = [actualDate, actualMonthNumber, actualYear];

console.log("Expected:", expectedList);
console.log("Actual:", actualList);

expect(actualList).toEqual(expectedList);

})