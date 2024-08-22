const { test, expect } = require("@playwright/test");
import LoginPage from "../pageObjects/LoginPage.js";

test("Login Test", async ({ page }) => {
  const UserEmail = "testtopro@gmail.com";
  const UserPassword = "Aman@1992";
  const ProductToBePurchased = "ZARA COAT 3";

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.ValidLogin(UserEmail, UserPassword);

  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();

  const products = page.locator(".card-body");
  const count = await products.count();

  const CartButton = page.locator("[routerlink*='/cart']");
  const cartCount = await page
    .locator("[routerlink*='/cart'] label")
    .textContent();
});
