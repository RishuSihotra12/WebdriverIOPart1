describe("drop down handling",function(){

   it.skip("select drop down value by text",function(){

       browser.url("https://www.facebook.com/campaign/landing.php?campaign_id=1653993517&extra_1=s%7Cc%7C318504236057%7Ce%7Cfacebook%20%27%7C&placement=&creative=318504236057&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D1653993517%26adgroupid%3D63066387003%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-360705453827%26loc_physical_ms%3D9040242%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwq_D7BRADEiwAVMDdHoJUuoXwP-cQwerF69Z16XohfC1k6Iwq7JCEUUWy7NEZf0rab_nvdxoCgN8QAvD_BwE");
       $('#day').selectByVisibleText('10');
       $('#month').selectByVisibleText("Mar");
       $('#year').selectByVisibleText('1994');
       browser.pause(5000)
   }); 
   it.skip("select drop down value by index",function(){

    browser.url("https://www.facebook.com/campaign/landing.php?campaign_id=1653993517&extra_1=s%7Cc%7C318504236057%7Ce%7Cfacebook%20%27%7C&placement=&creative=318504236057&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D1653993517%26adgroupid%3D63066387003%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-360705453827%26loc_physical_ms%3D9040242%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwq_D7BRADEiwAVMDdHoJUuoXwP-cQwerF69Z16XohfC1k6Iwq7JCEUUWy7NEZf0rab_nvdxoCgN8QAvD_BwE");
    $('#day').selectByIndex(3);
    $('#month').selectByIndex(1);
    $('#year').selectByIndex(13);
    browser.pause(5000)
   });
   it.skip("select drop down value by attribute value",function(){

    browser.url("https://www.facebook.com/campaign/landing.php?campaign_id=1653993517&extra_1=s%7Cc%7C318504236057%7Ce%7Cfacebook%20%27%7C&placement=&creative=318504236057&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D1653993517%26adgroupid%3D63066387003%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-360705453827%26loc_physical_ms%3D9040242%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwq_D7BRADEiwAVMDdHoJUuoXwP-cQwerF69Z16XohfC1k6Iwq7JCEUUWy7NEZf0rab_nvdxoCgN8QAvD_BwE");
    $('#day').selectByAttribute('value','1');
    $('#month').selectByAttribute('value','1');
    $('#year').selectByAttribute('value','2019');
    browser.pause(5000)
   });
   it("get all values from dropdown",function(){
    browser.url("https://www.facebook.com/campaign/landing.php?campaign_id=1653993517&extra_1=s%7Cc%7C318504236057%7Ce%7Cfacebook%20%27%7C&placement=&creative=318504236057&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D1653993517%26adgroupid%3D63066387003%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-360705453827%26loc_physical_ms%3D9040242%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwq_D7BRADEiwAVMDdHoJUuoXwP-cQwerF69Z16XohfC1k6Iwq7JCEUUWy7NEZf0rab_nvdxoCgN8QAvD_BwE");
    let list = $$("#month option");
    console.log("length is ",list.length)
    for(let i=0;i<list.length;i++){
        const element=list[i];
        console.log(i,element.getText())
        if(element.getText() === 'Mar'){
            element.click();
            break;
        }
    }
    browser.pause(5000)
   })
}); 
