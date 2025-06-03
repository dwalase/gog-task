import { test, expect } from '@playwright/test';

test('cart contains correct amount of products', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('.dropdown').innerText()).toContain('2');
});

test('click on price adds product to cart', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('game-card-5').locator('.lib-button').click();

  expect(await page.locator('.dropdown').innerText()).toContain('3');
});

test('adding product to cart disable button', async ({ page }) => {
  await page.goto('/');

  const button = page.getByTestId('game-card-5').locator('.lib-button');

  await button.click();

  await expect( button).toBeDisabled();
});

test('dropdown is closed by default', async ({ page }) => {
  await page.goto('/');

  await expect( page.locator('.dropdown-panel')).toBeHidden();
});

test('clicking dropdown opens overlay', async ({ page }) => {
  await page.goto('/');

  await page.locator('.dropdown').click();

  await expect( page.locator('.dropdown-panel')).toBeVisible();
});

test('clicking CLEAR CART removes all positions', async ({ page }) => {
  await page.goto('/');

  await page.locator('.dropdown').click();

  await page.locator('.dropdown-panel').locator('.lib-button').click();

  expect(await page.locator('.dropdown').innerText()).toContain('0');
});

test('hovering over cart position reveals remove button', async ({ page }) => {
  await page.goto('/');

  await page.locator('.dropdown').click();

  const position = page.getByTestId('cart-position-6');

  await expect(position.locator('.remove-button')).toBeHidden();

  await position.hover();

  await expect(position.locator('.remove-button')).toBeVisible();
});
