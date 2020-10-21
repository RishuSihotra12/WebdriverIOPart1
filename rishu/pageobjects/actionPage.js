class SpiceJet{
    get loginSignUpLink() {return $('#ctl00_HyperLinkLogin')};
    get spiceClubMember() {return $('=SpiceClub Members')}
    get memberLogin() {return $("=Member Login")};

    get search()      {return $('#target')};
    get resultLabel() {return $('#result')}
    getElementLabelText(){
        this.resultLabel.waitForDisplayed();
        return this.resultLabel.getText();
    }
    enterSearch(text){
      //  this.search.waitForDisplayed();
        this.search.setValue(text);
    }

    moveToElement(element){
        element.waitForDisplayed();
        element.moveTo()
    }
    clickElement(element){
        element.waitForDisplayed();
        element.click();
    }

}
module.exports = new SpiceJet();