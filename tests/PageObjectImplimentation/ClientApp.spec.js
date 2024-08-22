const { test, expect } = require("@playwright/test");
import LoginPage from "../pageObjects/LoginPage.js";
import DashboardPage from "../pageObjects/DashboardPage.js";

test("Login Test", async ({ page }) => {
  const UserEmail = "testtopro@gmail.com";
  const UserPassword = "Aman@1992";
  const ProductToBePurchased = "ZARA COAT 3";

  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.ValidLogin(UserEmail, UserPassword);

  const dashboardPage = new DashboardPage(page);

  await dashboardPage.searchProduct(ProductToBePurchased);
  await dashboardPage.clickCartButton();
});
