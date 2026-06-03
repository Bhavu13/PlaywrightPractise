const { test, expect} = require ('@playwright/test');

test("Automating calender with Assertions", async({page})=>
{
    const email = "superadmin@assaycr.com";
    const pwd = "Admin@123";
    const monthNumber = "6";
    const date = "13";
    const year = "2021";
    const expectedList = [date,monthNumber,year]; 

   await page.goto("https://emrv2.assaycr.in/");
   await page.getByLabel("Username").fill(email);
   await page.getByLabel("Password").fill(pwd);
   await page.getByRole("button", {name : "Login"}).click();

   await page.waitForLoadState('networkidle');

   await page.locator('span').filter({ hasText: 'Facilities' }).click();

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