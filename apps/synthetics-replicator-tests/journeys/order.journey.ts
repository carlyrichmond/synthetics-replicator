import { after, before, journey, step, monitor, expect } from '@elastic/synthetics';

journey('Replicator order flow', ({ page, params }) => {
  // Only relevant for the push command to create
  // monitors in Kibana
  monitor.use({
    id: 'synthetics-replicator-monitor-orders',
    schedule: 1,
  });

  before(async () => {
    await page.goto(params.url);
  });

  after(async() => {
    await page.close();
  });

  step('assert home page load', async () => {
    const header = await page.locator('h1');
    expect(await header.textContent()).toEqual('Replicatr');

    const paragraph = await page.getByTestId('order-prompt');
    expect(await paragraph.textContent()).toContain('To seek out new food');
    expect(await paragraph.textContent()).toContain('To boldly eat');
  });

  step('assert move to order page', async () => {
    const orderButton = await page.getByTestId('order-button');
    await orderButton.click();
    
    const url = page.url();
    expect(url).toContain('/order');

    const menuTiles = await page.getByTestId('menu-item-card');
    expect(await menuTiles.count()).toBeGreaterThan(2);
  });

  step('assert adding to order', async () => {
    await page.goto(`${params.url}/order`);

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
});
