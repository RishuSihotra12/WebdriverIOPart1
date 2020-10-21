const { expect } = require("chai");
const internetPage = require("../pageobjects/internetpage");

describe("Handling Checkboxes ",function(){
    it("check page URL ",function(){
        browser.url('/');
       // expect(browser.getUrl()).equals("http://the-internet.herokuapp.com/");
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}/`);
    });
    it("Check checkbox header",function(){
        browser.url("/");
        internetPage.clickOnLink(6);
       const text= internetPage.h3Header.getText();
       expect(text).equals("Checkboxes")
    });
    it("Should Click checkboxes",function(){
        browser.url("/");
        internetPage.clickOnLink(6);
        browser.pause(5000)
        internetPage.h3Header.waitForDisplayed();
        internetPage.clickOnCheckbox(1);
        expect(internetPage.getCheckboxElement(1).isSelected()).equals(true);
        browser.pause(5000)
    });
    it("Check Checkbox Page URL",function(){
       browser.url("/");
       internetPage.clickOnLink(6);
       expect(browser.getUrl()).equals(`${browser.options.baseUrl}/checkboxes`);
    });
});