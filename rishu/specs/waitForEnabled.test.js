describe("Wait for Enabled case",function(){
    it.skip("should Wait for button to enabled",function(){
        browser.url("https://www.crmpro.com/register/")
        const checkbox=$(`//input[@name='agreeTerms']`)
        const subButton=$('#submitButton')
        checkbox.click();
        subButton.waitForEnabled(4000);
        assert.equal(true,subButton.isEnabled())
    });
    it("should Wait for button to disabled",function(){
        browser.url("https://www.crmpro.com/register/")
        const checkbox=$(`//input[@name='agreeTerms']`)
        const subButton=$('#submitButton')
        checkbox.waitForDisplayed();
        checkbox.click();
     //   subButton.scrollIntoView();
     subButton.waitForDisplayed();
        subButton.waitForEnabled(3000);
        assert.equal(true,subButton.isEnabled())
       browser.pause(4000);
       checkbox.click();
     //  subButton.scrollIntoView(); 
     subButton.waitForDisplayed();
        subButton.waitForEnabled(6000,true);
        assert.equal(false,subButton.isEnabled())
        
    });
});