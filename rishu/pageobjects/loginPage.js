class LoginPage{
    get username() {return $('#username')};
    get password() {return $('#password')};
    get loginBttn() {return $('button')};

    enterUsername(text){
        this.username.waitForDisplayed();
        this.username.setValue(text)
    }
    enterPassword(text){
        this.password.waitForDisplayed();
        this.password.setValue(text)
    }
    clickOnLogin(){
        this.loginBttn.waitForDisplayed();
        this.loginBttn.click();
    }

}
module.exports = new LoginPage();