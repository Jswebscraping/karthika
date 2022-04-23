const puppeteer = require('puppeteer');
const fs = require('fs')
try{

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
 

  await page.goto("https://www.nseindia.com/get-quotes/equity?symbol=SBIN");
  await page.waitForTimeout(3000);
 
  const grabInfo = await page.evaluate(() =>{
    const infoTags = document.querySelectorAll('#securityInfo > thead > tr>th' );
    const metaTags = document.querySelectorAll('#securityInfo > tbody > tr>td' );
    let info = [];
    infoTags.forEach((x)=> {
      info.push(x.innerText)

    })
    metaTags.forEach((x)=> {
      info.push(x.innerText)

    })
    return info
  });
  console.log(grabInfo);
  await browser.close();
  fs.writeFile("Security.txt",JSON.stringify(grabInfo,'',2),(err) => {
    if(err){console.log(err)}
    else{console.log('File was saved Successfully!')}
  });

 
})();
   
}
catch(e)
{
  console.log("err",e);
}