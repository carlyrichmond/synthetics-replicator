import { test, expect } from '@playwright/test';

test('assert home page loads', async ({ page }) => {
  await page.goto('/');

  const header = await page.locator('h1');
  expect(await header.textContent()).toBe('Replicatr');
});