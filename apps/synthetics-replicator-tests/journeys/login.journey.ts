import { journey, step, monitor, expect, before } from '@elastic/synthetics';

journey('Replicator Login Journey', ({ page, params }) => {
  // Only relevant for the push command to create
  // monitors in Kibana
  monitor.use({
    id: 'synthetics-replicator-monitor-login',
    schedule: 10,
  });

  before(async ()=> {
    await page.goto(params.url);
  });

  step('assert home page loads', async () => {
    const header = await page.locator('h1');
    expect(await header.textContent()).toBe('Replicatr');
  });

  step('assert go to login page', async () => {
    const loginButton = await page.getByTestId('account-button');
    expect(loginButton).toHaveText('Login');
    await loginButton.click();
    
    const url = page.url();
    expect(url).toContain('/login');

    const loginForm  = await page.getByTestId('login-form');
    expect(loginForm).toBeDefined();
  });

  step('assert manual login successful', async () => {
    const loginForm  = await page.getByTestId('login-form');
  expect(loginForm).toBeDefined();

   // Check submit button is disabled before entry
   const submitButton = await page.getByTestId('login-button');
   expect(submitButton).toBeDisabled();

   // Add credentials
   const username = params.username;
   const usernameInput = page.getByTestId('username-input');
   usernameInput.fill(username)
   await expect(usernameInput).toHaveValue(username);

   const password = params.password;
   const passwordInput = page.getByTestId('password-input');
   passwordInput.fill(password)
   await expect(passwordInput).toHaveValue(password);

   // Check login button is now enabled
   expect(submitButton).toBeEnabled();
   await submitButton.click();

   // Wait for login
   await page.waitForURL('**/order');

   // Validate we have logged in successfully 
   const loginButton = await page.getByTestId('account-button');
   expect(loginButton).toContainText('Welcome');
   
   // Ensure we have navigated to menu
   const menuTiles = await page.getByTestId('menu-item-card');
   expect(await menuTiles.count()).toBeGreaterThan(0);
  });

  step('assert unable to go to login page when signed in', async () => {
    const loginButton = await page.getByTestId('account-button');
    expect(loginButton).toContainText('Welcome');
    await loginButton.click();
    
    const url = page.url();
    expect(url).toContain('/order');
  });
});
