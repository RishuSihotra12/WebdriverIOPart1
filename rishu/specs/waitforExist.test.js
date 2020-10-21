const { assert } = require("chai");

describe("wait for delete button using waitforExist",function(){
    it("Should wait for delete button",function(){
       browser.url("http://the-internet.herokuapp.com/add_remove_elements/");
       const addElement=$(`//button[text()='Add Element']`);
       const deletElement=$(`//button[text()='Delete']`);
       
       addElement.waitForDisplayed();
       addElement.click();

       deletElement.waitForExist(4000);
       assert.equal(true,deletElement.isExisting())

       deletElement.click();
       console.log(deletElement.isExisting())
       assert.equal(false,deletElement.isExisting())
     //  assert(false,deletElement.isExisting(),"Element not disabled")
       browser.pause(3000)

    });
    it("new functinality",function(){
        browser.url("https://app.hubspot.com/login?__cf_chl_jschl_tk__=78d62cc7447d36414ed3a905b8fadf769090d492-1602149928-0-AVL1gho3Kmri4IcrGUwG_ltJljeg-A03acblEfgEM7Y_PlMOVEY9rY6TMoUWTvP-tpCwxJ9pnt_PVCwgPuVpo-_7t222VfpSIZxGE0TdsegWINW9mCmW7mdX-yxRNs4eVBcjWBrphjru_8lbsDAf_3Y6Q-Vd1X97xSZZlyDe0H8uDpikmXhpVfobC05uBfqiXFKnnB2LxT3EG8z10H86N08xO7FzkFhC79l6YcO9dLmH3J0wppQGcY616aF7wlPMGm8nanae2wuSzZIbCunyejKgDdYkHMk9Sy2aYQcHbMFXWb9_nrSt1b_utI3KbZP3WfB-CyTMDHxw9Xg4A1QjM0I");
        const username=$('#username');
        const pass=$('#password');
        const loginbttn=$('#loginBtn');

        username.waitForDisplayed();
        username.setValue("naveenanimation30@gmail.com")
        pass.setValue("Test@1234");
        loginbttn.click()
      });
});