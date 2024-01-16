import { test, expect } from '@playwright/test';

test('assert go to login page', async ({ page }) => {
  await page.goto('/');

  const loginButton = await page.getByTestId('account-button');
  expect(loginButton).toHaveText('Login');
  await loginButton.click();
  
  const url = page.url();
  expect(url).toContain('/login');

  const loginForm  = await page.getByTestId('login-form');
  expect(loginForm).toBeDefined();
});

test('assert manual login successful', async ({ page }) => {
  await page.goto('/login');

  const loginForm  = await page.getByTestId('login-form');
  expect(loginForm).toBeDefined();

   // Check submit button is disabled before entry
   const submitButton = await page.getByTestId('login-button');
   expect(submitButton).toBeDisabled();

   // Add credentials
   const username = 'me@me.com';
   const usernameInput = page.getByTestId('username-input');
   usernameInput.fill(username)
   await expect(usernameInput).toHaveValue(username);

   const password = 'Rand0mPa$$w0rd';
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