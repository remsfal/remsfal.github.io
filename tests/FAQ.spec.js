// faq.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Landing Page', () => {
    test.beforeEach(async ({ page }) => {
        // Use env variable or fallback to localhost:5174
        const baseUrl = process.env.CI ? 'http://localhost:4173' : 'http://localhost:5174';
        await page.goto(`${baseUrl}/faq`);
    });

    test('renders FAQ header correctly', async ({ page }) => {
        // Check brand name
        await expect(page.locator('.brand-name')).toHaveText('FAQ');

        // Check page title
        await expect(page.locator('.page-title')).toHaveText('Objekthierarchie');

        // Check subtitle
        await expect(page.locator('.subtitle')).toHaveText('Wie ist die Objekthierarchie einer Liegenschaft aufgebaut?');
    });

    test('shows all FAQ items', async ({ page }) => {
        // Check number of FAQ items
        const faqItems = page.locator('.faq-item');
        await expect(faqItems).toHaveCount(7);

        // Verify content of first FAQ item
        const firstItem = faqItems.first();
        await expect(firstItem.locator('.faq-title')).toHaveText('Project = Liegenschaft');
    });

    test('toggles FAQ items when clicked', async ({ page }) => {
        const firstFaqItem = page.locator('.faq-item').first();
        const faqHeader = firstFaqItem.locator('.faq-header');

        // Check initial state (closed)
        await expect(firstFaqItem).not.toHaveClass(/active/);

        // Click to open
        await faqHeader.click();
        await expect(firstFaqItem).toHaveClass(/active/);

        // Click to close
        await faqHeader.click();
        await expect(firstFaqItem).not.toHaveClass(/active/);
    });

    test('displays correct FAQ content', async ({ page }) => {
        const faqItems = page.locator('.faq-item');

        // Check icons are displayed
        await expect(faqItems.first().locator('.faq-icon')).toBeVisible();

        // Check toggle indicators
        await expect(faqItems.first().locator('.faq-arrow')).toHaveText('+');

        // Open item and check content
        await faqItems.first().locator('.faq-header').click();
        await expect(faqItems.first().locator('.faq-body p')).toBeVisible();
    });

    test('maintains responsive layout', async ({ page }) => {
        // Test mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });
        await expect(page.locator('.brand-name')).toHaveCSS('font-size', '48px');

        // Test desktop viewport
        await page.setViewportSize({ width: 1024, height: 768 });
        await expect(page.locator('.brand-name')).toHaveCSS('font-size', '64px');
    });
});