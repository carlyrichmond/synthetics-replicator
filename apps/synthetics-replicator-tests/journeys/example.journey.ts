import { journey, step, monitor, expect } from '@elastic/synthetics';

journey('Replicator home', ({ page, params }) => {
  // Only relevant for the push command to create
  // monitors in Kibana
  monitor.use({
    id: 'synthetics-replicator-monitor',
    schedule: 10,
  });
  step('launch application', async () => {
    await page.goto(params.url);
  });

  step('assert initial page load', async () => {
    const header = await page.locator('h1');
    expect(await header.textContent()).toContain('Welcome');
    expect(await header.textContent()).toContain('Carly');

    const paragraph = await page.locator('.order-prompt');
    expect(await paragraph.textContent()).toEqual('Can we take your order?');
  });

  step('assert order increments', async () => {
    const orderButton = await page.locator('button');
    let orderCountParagraph = await page.locator('.order-count');
    
    expect(await orderCountParagraph.textContent()).toEqual('0 items in order');

    await orderButton.click();

    expect(await orderCountParagraph.textContent()).toEqual('1 items in order');
  });
});
