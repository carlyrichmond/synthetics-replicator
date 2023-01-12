import { journey, step, monitor, expect } from '@elastic/synthetics';

// Removed context and added params manually for multi-environment support
journey('Recorded Order journey', async ({ page, params }) => {

    // Added monitor config manually without recorder
    monitor.use({
        id: 'synthetics-replicator-monitor-generated',
        schedule: 10,
      });

  step('Go to order items page', async () => {
    // Manually change url to take environment-specific parameter
    await page.goto(params.url);
    await page.locator('[data-testid="order-button"]').click();

    // Manually change URL path to support multiple environments
    expect(page.url()).toContain('order');
  });

  step('Add item to cart successfully', async () => {
    await page.locator('div:nth-child(3) .add-item-button svg').click();
    expect(await page.textContent('[data-testid="cart-count-label"]')).toMatch('1');
  });

  step('Add 2nd item to cart successfully', async () => {
    await page.locator('div:nth-child(6) .add-item-button svg').click();
    expect(await page.textContent('[data-testid="cart-count-label"]')).toMatch('2');
  });

  step('Add 3rd item to cart successfully', async () => {
    await page.locator('div:nth-child(8) .add-item-button svg').click();
    expect(await page.textContent('[data-testid="cart-count-label"]')).toMatch('3');
  });
});