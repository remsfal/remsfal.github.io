import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

const baseURL = 'http://localhost:5173'


test.describe('ThesisView Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL + '/thesis');
    await page.waitForLoadState('networkidle');  // Ensure everything is loaded
  });

  test('should display issues', async ({ page }) => {
    // Select all the card elements using the correct class
    const issueCards = await page.$$('.p-card');
    expect(issueCards.length).toBeGreaterThan(0);
  });

  test('should display correct content in issue cards', async ({ page }) => {
    // Select all the card elements using the correct class
    const issueCards = await page.$$('.p-card');

    // Verify content within each card
    for (let card of issueCards) {
      const title = await card.$eval('.issue-title', (el) => el.textContent);
      const footer = await card.$eval('.issue-footer', (el) => el.textContent);
      expect(title).not.toBeNull();
      expect(footer).toContain('Status:');
    }
  });
});