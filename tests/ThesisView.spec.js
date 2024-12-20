import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file
const baseURL = process.env.BASE_URL || 'http://localhost:5173';  // Fallback URL
console.log(process.env.BASE_URL);



test.describe('ThesisView Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL + '/thesis');
    await page.waitForLoadState('networkidle');  // Ensure everything is loaded
  });

  test('should display issues', async ({ page }) => {
    // Select all the card elements using the correct class
    const issueCards = await page.$$('.p-card');
    console.log(`Found ${issueCards.length} issue cards`); // Debug output to confirm what is found
    expect(issueCards.length).toBeGreaterThan(0);

    // Verify content within each card
    for (let card of issueCards) {
      const title = await card.$eval('.issue-title', (el) => el.textContent);
      const footer = await card.$eval('.issue-footer', (el) => el.textContent);

      console.log(`Title: ${title}, Footer: ${footer}`); // Additional debug output
      expect(title).not.toBeNull();
      expect(footer).toContain('Status:');
    }
  });
});