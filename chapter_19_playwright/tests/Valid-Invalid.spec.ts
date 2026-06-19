import { test, expect } from '@playwright/test'


test("Verify the valid user login into ttacart", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await expect(page).toHaveTitle("TTACart - Login");
    await page.getByRole('heading', { name: 'TTACart' }).click();

    //click on the input box and enter the username 
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');

    //click on the input box and enter the password nd click login button
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('tta_secret');
    await page.locator('[data-test="login-button"]').click();

    //validate the page has text TTACart
    await expect(page.locator('[data-test="primary-header"] span')).toContainText('TTACart');


    //select the product, price add item to cart and checkout
    await page.getByRole('link').filter({ hasText: 'test.all()' }).click();
    await page.locator('[data-test="inventory-item-price"]').click();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.getByRole('main').click();
    await page.locator('[data-test="checkout"]').click();
    await page.waitForTimeout(3000);

});

test('Verify invalid user login to tta cart', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await expect(page).toHaveTitle("TTACart - Login");

    //click on the input box and enter the invalid username 
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');

    //click on the input box and enter the invalid password nd click login button
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret67@');
    await page.locator('[data-test="login-button"]').click();

    //capture the error description
    await page.locator('[data-test="error"]').click();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');



})