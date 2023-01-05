import { after, before, journey, step, monitor, expect } from '@elastic/synthetics';

journey('Replicator GitHub navigation', ({ page, params }) => {
  // Only relevant for the push command to create
  // monitors in Kibana
  monitor.use({
    id: 'synthetics-replicator-monitor-github-link',
    schedule: 10,
  });

  before(async () => {
    await page.goto(params.url);;
  });

  after(async() => {
    await page.close();
  });

  step('assert initial page load', async () => {
    const header = await page.locator('h1');
    expect(await header.textContent()).toEqual('Replicatr');

    const paragraph = await page.getByTestId('order-prompt');
    expect(await paragraph.textContent()).toContain('To seek out new food');
    expect(await paragraph.textContent()).toContain('To boldly eat');
  });

  step('assert GitHub navigation', async () => {
    const gitHubNav = await page.getByTestId('github-nav');
    await gitHubNav.click();

    const url = page.url();
    expect(url).toContain('github.com')
    expect(url).toContain('synthetics-replicator')
  });
});
