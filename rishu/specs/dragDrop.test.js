const internetpage = require("../pageobjects/internetpage");

describe("drag and drop actions feature",function(){
     it("do drag and drop",function(){
        browser.url("https://jqueryui.com/resources/demos/droppable/default.html");
        const sourceElement= $("#draggable");
        const targetElement= $("#droppable")

        sourceElement.dragAndDrop(targetElement);
        browser.pause(5000)
     });
});