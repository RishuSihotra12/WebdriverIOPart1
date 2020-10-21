const homePage = require("../pageobjects/homepage")

describe("Home Page Elements Handle", function () {
    it("verify HomePage Elements", function()  {
         browser.url('https://www.freshworks.com/')
          let mainHeader= homePage.pageHeader.getText();
          console.log(mainHeader)
          console.log(homePage.subHeading.getText());
          homePage.supportLink.click();
          browser.pause(5000)
    })
})