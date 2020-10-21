class CRMPage{
    
    get forgotpwdLink() {
        return $('=Forgot Password?') //for text 
        //return $('*=Forgot Password?')  ==> for partial text
    }
    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo();
    }

}
module.exports=new CRMPage();