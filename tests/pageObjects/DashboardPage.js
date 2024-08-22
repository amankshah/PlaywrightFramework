class DashboardPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator(".card-body");
    this.productsName = page.locator(".card-body b");
    this.cartButton = page.locator("[routerlink*='/cart']");
    this.cartCount = page.locator("[routerlink*='/cart'] label");
  }
  async searchProduct(productName) {
    const titles = await this.productsName.allTextContents();

    const products = this.products;
    const count = await products.count();

    const CartButton = await this.cartButton;
    const cartCount = await this.cartCount.textContent();

    for (let i = 0; i < count; i++) {
      const title = await products.nth(i).locator("b").textContent();

      if (title === ProductToBePurchased) {
        await products.nth(i).getByText("Add To Cart").click();
        break; //stop the loop
      }
    }
  }

  async clickCartButton() {
    await this.cartButton.click();
  }
}

export default DashboardPage;
