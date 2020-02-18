const {checkAndGenerate,generateText} = require('./util');
const puppeteer = require('puppeteer');
// test('should output name and age',()=>{
//     const text = generateText('Rishabh Singh',22);
//     expect(text).toBe('Rishabh Singh (22 years old)');
//     const text2 = generateText('Ravi',22);
//     expect(text2).toBe('Ravi (22 years old)'); //double ch3ck
// });

// test('should output data-less text',()=>{
//      const text = generateText('',null);
//      expect(text).toBe(' (null years old)');
// })


// test('should generate a valid text output',()=>{
//     const text3 = checkAndGenerate('Max',29);
//     expect(text3).toBe('Max (29 years old)');
// });
test('Shoud create elemnt with text and correct class',async()=>{  //for automayed texsting using graphical user interface
const browser=await puppeteer.launch({
    headless:false, //run a browser user intereface
    slowMo:80,//slow down the automated process
    args:['--window-size=1920,1080']//launch the browser with window size
   });
   const page = await browser.newPage();
   page.goto('http://127.0.0.1:5500/');

await page.click('input#name');
await page.type('input#name','anna');
await page.click('input#age');
await page.type('input#age','28');
await page.click('#btnAddUser');
await page.$eval('.user-item',el=>el.textContent)
expect(finalText).toBe('Anna (28 years old)');
},10000);//giving ten seconds to test successfully
