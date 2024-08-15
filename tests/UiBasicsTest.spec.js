const {test} = require('@playwright/test');

test('First Test', async ({browser}) => {

    const context = await browser.newContext()
    const page= await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    
});

test('Second Test', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
});
