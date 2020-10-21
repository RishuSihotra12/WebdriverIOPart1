describe("Interaction with elements", function () {
    it("Get text for element", function()  {
         browser.url('/')
         
        const search = $('#twotabsearchtextbox');
        search.setValue("Apple Mac Book");
        browser.pause(5000);
        const label=$('span.a-size-base.a-color-base')
        let text=label.getText();
        console.log(text)

    })
})