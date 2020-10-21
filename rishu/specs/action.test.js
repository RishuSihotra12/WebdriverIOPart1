const { assert } = require("chai");
const spicejetpage = require ("../pageobjects/actionPage");
const internetpage = require("../pageobjects/internetpage");

describe("Page action Feature",function(){
//    it("move to element",function(){
//       browser.url("https://www.spicejet.com/");
//       spicejetpage.moveToElement(spicejetpage.loginSignUpLink);
//       spicejetpage.moveToElement(spicejetpage.spiceClubMember);
//       spicejetpage.clickElement(spicejetpage.memberLogin)
//       browser.pause(5000)

//    });
   it("Key Action Perform",function(){
    browser.url('http://the-internet.herokuapp.com/key_presses');
    spicejetpage.enterSearch("Tab");
    browser.pause(5000)
    const text= spicejetpage.getElementLabelText();
    console.log(text)
    // assert.equal("You entered: TAB",text)
    // browser.pause(5000)
   });
});