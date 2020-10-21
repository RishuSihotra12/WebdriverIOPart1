const crmPage= require ("../pageobjects/crmPage");
const internetpage = require("../pageobjects/internetpage");
describe("scroll to element",function(){
    //==================Skip Test=====================//
    it.skip("should scroll to forgot pwd link",function(){
        browser.url("https://classic.crmpro.com/"); 
        console.log("in view port ",crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.forgotpwdLink.scrollIntoView();
        console.log("in view port ",crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.forgotpwdLink.click();
        browser.pause(5000);
    });
    it("should scroll to forgot pwd link,move and click",function(){
        browser.url("https://classic.crmpro.com/"); 
        console.log("in view port ",crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.forgotpwdLink.scrollIntoView();
        console.log("in view port ",crmPage.forgotpwdLink.isDisplayedInViewport());
        crmPage.moveToElement(crmPage.forgotpwdLink);
        crmPage.forgotpwdLink.click();
        browser.pause(5000);
    });
});