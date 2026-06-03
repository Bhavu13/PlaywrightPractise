
class LoginPage{
    constructor(page)
    {
        this.page = page;
    //     this.userName = page.locator("#userEmail");
    //     this.password = page.locator("#userPassword");
    //     this.loginButton = page.locator("[value='Login']");
     this.userName = page.getByLabel("Username");
    this.password = page.getByLabel("Password");
   this.loginButton = page.getByRole("button", {name : "Login"});
     }

    async navigateToURL(){
        //await this.page.goto("https://rahulshettyacademy.com/client");
        await this.page.goto("https://emrv2.assaycr.in/");
    }

    async validLogin(username, userpassword)
    {
        await this.userName.fill(username);
        await this.password.fill(userpassword);
        await this.loginButton.click();
        //await this.page.locator(".card-body b").first().waitFor();

    }

}
module.exports = {LoginPage};