const blazePage = require("../pageobjects/blazemeter")

describe("Blaze Page element Handle", function () {
    it("Get Text of all main links", function()  {
         browser.url('https://www.blazemeter.com/')
         //browser.maximizeWindow();
         //browser.pause(5000)
         blazePage.getTextForLi;
         browser.pause(5000)
         blazePage.useCaseElementText;
         console.log("This is Third Element : ",
                          blazePage.specificChildElement(3).getText());
        blazePage.getSpecificChildElementText(4);
       })
    it("main heading displayed?", function()  {
        console.log(blazePage.mainHeader.getText())
        console.log(blazePage.mainHeader.isDisplayed()) ;
    })
    it("main heading enabled? ", function()  {
       console.log(blazePage.mainHeader.isEnabled()) ;
    })
    it("main heading exist ? ", function()  {
    console.log(blazePage.mainHeader.isExisting()) ;
    })
    it("main heading displayed in view port ? ", function()  {
        console.log(blazePage.mainHeader.isDisplayedInViewport()) ;
     })
    it("click on Product link if displayed ", function()  {
        blazePage.clickOnProductLink();
        browser.pause(5000);
    })
})