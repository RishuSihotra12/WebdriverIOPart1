const { assert } = require("chai");
const logindata = require("../../testdata/logindata");


describe("wait for delete button using waituntil",function(){
    it("new functinality",function(){
        browser.url("https://app.hubspot.com/login?__cf_chl_jschl_tk__=78d62cc7447d36414ed3a905b8fadf769090d492-1602149928-0-AVL1gho3Kmri4IcrGUwG_ltJljeg-A03acblEfgEM7Y_PlMOVEY9rY6TMoUWTvP-tpCwxJ9pnt_PVCwgPuVpo-_7t222VfpSIZxGE0TdsegWINW9mCmW7mdX-yxRNs4eVBcjWBrphjru_8lbsDAf_3Y6Q-Vd1X97xSZZlyDe0H8uDpikmXhpVfobC05uBfqiXFKnnB2LxT3EG8z10H86N08xO7FzkFhC79l6YcO9dLmH3J0wppQGcY616aF7wlPMGm8nanae2wuSzZIbCunyejKgDdYkHMk9Sy2aYQcHbMFXWb9_nrSt1b_utI3KbZP3WfB-CyTMDHxw9Xg4A1QjM0I");
        const username=$('#username');
        const pass=$('#password');
        const loginbttn=$('#loginBtn');

        browser.waitUntil(function(){
            return username.isDisplayed() ==true
        }),6000,'username is not displayed after given time'

      //  username.waitForDisplayed();
       // username.setValue("naveenanimation30@gmail.com")
       username.setValue(logindata.username)
       browser.pause(5000)
        pass.setValue("Test@1234");
        //loginbttn.click()
      });
});