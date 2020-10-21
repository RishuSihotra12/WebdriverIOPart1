describe("Interaction with elements", function () {
    it("Get text for element", function()  {
         browser.url('/')
         
        const search = $('#twotabsearchtextbox');
        search.setValue("Apple Mac Book");

    });
    it("Get value in a field", function()  {
        browser.url('/')
       const label=$('span.a-size-base.a-color-base')
       let text=label.getText();
       console.log(text)

   });
   it("Click on a field", function()  {
    browser.url('/')
   const searchIcon=$('input.nav-input')
   searchIcon.click();

});
})