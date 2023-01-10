import { journey, step, monitor, expect } from '@elastic/synthetics';

journey('Replicator Order Journey', ({ page, params }) => {
  // Only relevant for the push command to create
  // monitors in Kibana
  monitor.use({
    id: 'synthetics-replicator-monitor',
    schedule: 10,
  });
  step('launch application', async () => {
    await page.goto(params.url);
  });

  step('assert home page loads', async () => {
    const header = await page.locator('h1');
    expect(await header.textContent()).toBe('Replicatr');
  });

  step('assert move to order page', async () => {
    const orderButton = await page.getByTestId('order-button');
    await orderButton.click();
    
    const url = page.url();
    expect(url).toContain('/order');

    const menuTiles = await page.getByTestId('menu-item-card');
    expect(await menuTiles.count()).toBeGreaterThan(2);
  });
});
