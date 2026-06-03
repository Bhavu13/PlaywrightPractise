# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ecommerce\rahulShettyPO.spec.js >> Client App login for Adidas Originals
- Location: tests\ecommerce\rahulShettyPO.spec.js:6:1

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('.card-body b').first() to be visible

```

# Test source

```ts
  1  | 
  2  | class LoginPage{
  3  |     constructor(page)
  4  |     {
  5  |         this.page = page;
  6  |         this.userName = page.locator("#userEmail");
  7  |         this.password = page.locator("#userPassword");
  8  |         this.loginButton = page.locator("[value='Login']");
  9  |     }
  10 | 
  11 |     async navigateToURL(){
  12 |         await this.page.goto("https://rahulshettyacademy.com/client");
  13 |     }
  14 | 
  15 |     async validLogin(username, userpassword)
  16 |     {
  17 |         await this.userName.fill(username);
  18 |         await this.password.fill(userpassword);
  19 |         await this.loginButton.click();
> 20 |         await this.page.locator(".card-body b").first().waitFor();
     |                                                         ^ Error: locator.waitFor: Target page, context or browser has been closed
  21 | 
  22 |     }
  23 | 
  24 | }
  25 | module.exports = {LoginPage};
```