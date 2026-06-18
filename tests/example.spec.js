import { test, expect } from '@playwright/test';

test.describe('Example Tests', () => {
  test('should navigate to GitHub', async ({ page }) => {
    await page.goto('https://github.com');
    await expect(page).toHaveTitle(/GitHub/);
  });

  test('should find search box on GitHub', async ({ page }) => {
    await page.goto('https://github.com');
    const searchBox = page.getByPlaceholder(/search/i);
    await expect(searchBox).toBeVisible();
  });

  test('should have correct page heading', async ({ page }) => {
    await page.goto('https://github.com');
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });
});
