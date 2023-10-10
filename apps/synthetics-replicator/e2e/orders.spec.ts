import { test, expect } from '@playwright/test';

test('assert move to order page', async ({ page }) => {
  await page.goto('/');

  const orderButton = await page.getByTestId('order-button');
  await orderButton.click();
  
  const url = page.url();
  expect(url).toContain('/order');

  const menuTiles = await page.getByTestId('menu-item-card');
  expect(await menuTiles.count()).toBeGreaterThan(2);
});

test('assert adding to order', async ({ page }) => {
  await page.goto('/order');

  const addItemButtons = await page.getByTestId('add-item-button');
  expect(await addItemButtons.count()).toBeGreaterThan(10);

  const cartCount = await page.getByTestId('cart-count-label');
  expect(await cartCount.innerText()).toBe('0');

  await addItemButtons.first().click();
  expect(await cartCount.innerText()).toBe('1');

  await addItemButtons.nth(4).click();
  await addItemButtons.last().click();
  expect(await cartCount.innerText()).toBe('3');
});