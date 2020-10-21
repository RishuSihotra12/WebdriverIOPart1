describe("Interaction with elements", function () {
    it("Get Header Value", function()  {
         browser.url('https://www.freshworks.com/')
     
        const headerValue=$('h1')
        let val=headerValue.getText();
        console.log(val)

    })
})