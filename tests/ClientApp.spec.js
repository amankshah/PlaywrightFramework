const { test, expect } = require("@playwright/test");

const loginPageUrl = "https://rahulshettyacademy.com/client";
const loginPracticePageUrl =
  "https://rahulshettyacademy.com/loginpagePractise/";

test("Browser Validation for  Error Login", async ({ page }) => {
  await page.goto(loginPageUrl);
  await page.locator("#userEmail").fill("testtopro@gmail.com");
  await page.locator("#userPassword").fill("Aman@1992");
  await page.locator("#login").click();
  // await page.waitForLoadState("networkidle");---> not working (Deprecated)
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();

  console.log(titles);
});

test.only("Browser Validation for  Login", async ({ page }) => {
  await page.goto(loginPracticePageUrl);
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator('[type="password"]').fill("learning");

  await expect(page.locator(".alert-danger")).toContainText("Incorrect");

  await page.locator(".radiotextsty").getByText("User").click();
  await page.locator("#okayBtn").click();
  await page.pause();

  await page.locator("select.form-control").selectOption("consult");
  await page.pause();

  await page.locator("#signInBtn").click();
});
