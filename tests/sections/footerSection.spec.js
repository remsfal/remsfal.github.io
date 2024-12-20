import { test, expect } from '@playwright/test';

test.describe('Footer Section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForSelector('.footer-section');
    });

    test('should display correct copyright and license information', async ({ page }) => {
        // Check license text
        await expect(page.locator('.license'))
            .toHaveText('Released under the MIT License');

        // Check copyright text
        await expect(page.locator('.copyright'))
            .toHaveText('Copyright © 2023-present Prof. Dr.-Ing. Alexander Stanik');
    });

    test('should have all required navigation links', async ({ page }) => {
        const links = [
            { text: 'Impressum', href: '/legal-notice' },
            { text: 'Nutzungsbedingungen', href: '/terms' },
            { text: 'Datenschutz', href: '/privacy' }
        ];

        for (const link of links) {
            const linkElement = page.locator('.footer-right a', { hasText: link.text });
            await expect(linkElement).toBeVisible();
            await expect(linkElement).toHaveAttribute('href', link.href);
        }
    });

    test('should maintain correct layout in desktop view', async ({ page }) => {
        // Set desktop viewport
        await page.setViewportSize({ width: 1024, height: 768 });

        // Check grid layout
        const gridColumns = await page.locator('.footer-grid').evaluate(el =>
            window.getComputedStyle(el).gridTemplateColumns
        );
        expect(gridColumns.split(' ').length).toBe(2);

        // Check right alignment of footer-right section
        const rightAlignment = await page.locator('.footer-right').evaluate(el =>
            window.getComputedStyle(el).textAlign
        );
        expect(rightAlignment).toBe('right');
    });

    test('should switch to mobile layout on small screens', async ({ page }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });

        // Check if grid becomes single column
        const gridColumns = await page.locator('.footer-grid').evaluate(el =>
            window.getComputedStyle(el).gridTemplateColumns
        );
        expect(gridColumns.split(' ').length).toBe(1);

        // Check if right section aligns left in mobile view
        const rightAlignment = await page.locator('.footer-right').evaluate(el =>
            window.getComputedStyle(el).textAlign
        );
        expect(rightAlignment).toBe('left');

        // Check if spacing adjusts for mobile
        const marginTop = await page.locator('.footer-section').evaluate(el =>
            window.getComputedStyle(el).marginTop
        );
        expect(marginTop).toBe('80px');
    });

    test('should maintain correct link spacing', async ({ page }) => {
        const linkParagraphs = await page.locator('.footer-right p').all();

        // Check if we have the correct number of links
        expect(linkParagraphs.length).toBe(3);

        // Verify margin between links
        const marginBottom = await linkParagraphs[0].evaluate(el =>
            window.getComputedStyle(el).marginBottom
        );
        expect(marginBottom).toBe('8px');
    });

    test('should have border at the top', async ({ page }) => {
        const borderTop = await page.locator('.footer-section').evaluate(el =>
            window.getComputedStyle(el).borderTop
        );
        expect(borderTop).toContain('rgba(255, 255, 255, 0.1)');
    });
});