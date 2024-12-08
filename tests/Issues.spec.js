// issues.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Landing Page', () => {
    test.beforeEach(async ({ page }) => {
        // Use env variable or fallback to localhost:5174
        const baseUrl = process.env.CI ? 'http://localhost:4173' : 'http://localhost:5174';
        await page.goto(`${baseUrl}/thesis`);
    });

    test('renders issues header correctly', async ({ page }) => {
        // Check brand name
        await expect(page.locator('.brand-name')).toHaveText('remsfal');

        // Check page title
        await expect(page.locator('.page-title')).toHaveText('Aktuelle Themen');

        // Check subtitle
        await expect(page.locator('.subtitle')).toHaveText('Unsere laufenden Forschungs- und Entwicklungsprojekte');
    });

    test('renders search and filter controls', async ({ page }) => {
        // Check search input
        const searchInput = page.locator('.search-input');
        await expect(searchInput).toBeVisible();
        await expect(searchInput).toHaveAttribute('placeholder', 'Suchen Sie nach Projekten...');

        // Check filter select
        const filterSelect = page.locator('.filter-select');
        await expect(filterSelect).toBeVisible();
    });


    test('filters issues by status', async ({ page }) => {
        // Select 'in_progress' status
        await page.locator('.filter-select').selectOption('in_progress');

        // Verify filtered issues
        const statusBadges = page.locator('.status-badge');
        for (const badge of await statusBadges.all()) {
            await expect(badge).toHaveText('In Bearbeitung');
        }
    });

    test('displays issue details correctly', async ({ page }) => {
        const firstIssue = page.locator('.issue-card').first();

        // Check priority indicator
        await expect(firstIssue.locator('.priority-indicator')).toBeVisible();

        // Check status badge
        await expect(firstIssue.locator('.status-badge')).toBeVisible();

        // Check labels
        await expect(firstIssue.locator('.label').first()).toBeVisible();

        // Check details link
        await expect(firstIssue.locator('.details-link')).toHaveText('Details anzeigen →');
    });

    test('maintains responsive layout', async ({ page }) => {
        // Test mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });
        await expect(page.locator('.controls-section')).toHaveCSS('flex-direction', 'column');

        // Test desktop viewport
        await page.setViewportSize({ width: 1024, height: 768 });
        await expect(page.locator('.controls-section')).not.toHaveCSS('flex-direction', 'column');
    });

    test('handles empty search results', async ({ page }) => {
        // Enter search term that should return no results
        await page.locator('.search-input').fill('xxxnonexistentxxx');

        // Check that no issues are displayed
        const issueCards = page.locator('.issue-card');
        await expect(issueCards).toHaveCount(0);
    });
});