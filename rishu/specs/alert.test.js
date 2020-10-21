const { assert } = require("chai");
const alertPage = require("../pageobjects/alertPage")

describe("Handle alert pop up",function(){
    it.skip("accept alert",function(){
        browser.url("http://the-internet.herokuapp.com/javascript_alerts");
        alertPage.clickOnAlertButton(1);
       const alertText= browser.getAlertText();
       assert.equal("I am a JS Alert",alertText);
       browser.acceptAlert();
      console.log( alertPage.getResultText());
      assert.equal("You successfuly clicked an alert",alertPage.getResultText())
      browser.pause(5000)
    });
    it.skip("dismiss alert",function(){
        browser.url("http://the-internet.herokuapp.com/javascript_alerts");
        alertPage.clickOnAlertButton(2);
        browser.dismissAlert()
      console.log( alertPage.getResultText());
      assert.equal("You clicked: Cancel",alertPage.getResultText())
      browser.pause(5000)
    });
    it.skip("enter text on alert and accept ",function(){
        browser.url("http://the-internet.herokuapp.com/javascript_alerts");
        alertPage.clickOnAlertButton(3);
        browser.pause(5000)
        browser.sendAlertText("this is alert text")
        browser.pause(5000)
      //  browser.acceptAlert()
      //  browser.pause(5000)
     console.log( alertPage.getResultText());
       assert.equal("You entered: this is alert text",alertPage.getResultText())
    //  browser.pause(5000)
    });
    it("alert accept message on rediffmail login page",function(){
          browser.url("https://mail.rediff.com/cgi-bin/login.cgi");
          $("//input[@type='submit']").waitForDisplayed();
          $("//input[@type='submit']").click();
          browser.pause(5000)
          const text=browser.getAlertText();
          console.log("========================")
          console.log(text)
          assert.equal("Please enter a valid user name",text)
          browser.acceptAlert()
          browser.pause(5000)

    });
});