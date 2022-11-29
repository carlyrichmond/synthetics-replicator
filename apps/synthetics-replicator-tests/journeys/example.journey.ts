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

  step('assert title', async () => {
    const header = await page.locator('h1');
    expect(await header.textContent()).toContain('Welcome to');
    expect(await header.textContent()).toContain('synthetics-replicator');
  });

  step('assert paragraph', async () => {
    const paragraph = await page.locator('p');
    expect(await paragraph.textContent()).toEqual('Can we take your order?');
  });
});
