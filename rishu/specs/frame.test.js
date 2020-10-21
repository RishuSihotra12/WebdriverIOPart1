describe("Handling frames",function(){
    it("Multiple frames",function(){
        browser.url("https://angularjs.org/");
        const data=$('div.hero h2').getText()
        console.log(data)
        // browser.switchToFrame(1);
        // $("input[type='text']").setValue("abcdd");
        // browser.switchToFrame("frame3");
        // $("#a").click();


    });
});
/* switch to frame
1.using index
2.using id
3.name
4.xpath
*/ 