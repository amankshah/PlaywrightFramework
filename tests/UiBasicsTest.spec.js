const { test, expect } = require("@playwright/test");

test("First Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //LoginPage Practise | Rahul Shetty Academy

  console.log(await page.title());

  //   await page.locator("#username").fill("rahulshettyacademy");
  await page.locator("#username").fill("rahulshetty"); //wong fill

  //   await page.locator("#password").fill("learning");
  await page.locator('[type="password"]').fill("learning");

  await page.locator("#signInBtn").click();

  let errorMessage = page.locator("[style*='block']");
  console.log(await errorMessage.textContent());

  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  //now filling correct informations

  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator('[type="password"]').fill("learning");
  await page.locator("#signInBtn").click();

  //   expect(await page.title()).toBe("LoginPage Practise | Rahul Shetty Academy");  //also correct
});

test("Second Test", async ({ page }) => {
  await page.goto("https://google.com");
  console.log("Page Title: " + (await page.title()));
  //   expect(await page.title()).toBe("Google");
  await expect(page).toHaveTitle("Google");
});
