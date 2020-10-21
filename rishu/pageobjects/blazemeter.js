class BlazePage{

    get mainHeader(){
        return $('h2.home-features_title')
    }

    get productLink(){
        return $('ul.list-nav-links li:nth-child(1)>a');
    }
    clickOnProductLink(){
        if(this.productLink.isDisplayed() === true){
            console.log(this.productLink.getText())
            this.productLink.click();
        }
    }

    get parent(){
       return $('ul.list-nav-links');
    }
    get childElements(){
       return this.parent.$$('li');
    }
   get getTextForLi(){
        return this.childElements.filter(elements => {
         console.log(elements.getText())
        });
    }
    get useCaseElements(){
        return $$("div#main_b_footer_second_block>ul>li");
    }
    get useCaseElementText(){
        return this.useCaseElements.filter(elements =>{
             console.log(elements.getText())
            });
    }
    specificChildElement(index){
        return this.parent.$(`li:nth-child(${index})`)//using numeric character i.e special character next to !
    }
    getSpecificChildElementText(index){
        console.log(this.specificChildElement(index).getText());
    }

}
module.exports = new BlazePage();