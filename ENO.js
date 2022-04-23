const puppeteer = require('puppeteer');
const fs = require('fs')
try{
(async () => {
  
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
 

  await page.goto("https://blinkit.com/prn/eno-lemon-digestive-antacid/prid/10841");
  await page.waitForTimeout(1500);
  await page.waitForSelector('.css-1dbjc4n');
  const title=await page.$eval('.css-cens5h',x=>x.innerText)
  const price=await page.$eval('.r-r0h9e2',x=>x.innerText)
  const product=await page.$eval('.product-details',x=>x.innerText)
  const attr=await page.$eval('.product-attributes--additional-properties',s=>s.innerText)

    let info = [];
   
      info.push({
          title:title,
          price:price,
          product:product,
          attr:attr
       })
  console.log({title,product,attr,price});
  await browser.close();
  fs.writeFile("Security.txt",JSON.stringify(info,'',2),(err) => {
    if(err){console.log(err)}
    else{console.log('File was saved Successfully!')}
  })
  await browser.close();

})();
}
catch(e)
{
  console.log("err",e);
}
