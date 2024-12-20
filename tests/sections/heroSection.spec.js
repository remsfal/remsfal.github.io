import { test, expect } from '@playwright/test';

// Hero Section Tests
test.describe('Hero Section', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the page where the hero section is rendered
        await page.goto('http://localhost:5173/');
        // Wait for the hero section to be visible
        await page.waitForSelector('.hero-section');
    });

    test('should display the hero section with correct initial state', async ({ page }) => {
        // Check if hero section exists
        const heroSection = await page.locator('.hero-section');
        await expect(heroSection).toBeVisible();

        // Check if brand name is visible and has correct text
        const brandName = await page.locator('.brand-name');
        await expect(brandName).toBeVisible();
        await expect(brandName).toHaveText('remsfal');
    });

    test('should show welcome animation', async ({ page }) => {
        // Check if the show-welcome class is applied after mount
        await expect(page.locator('.hero-section')).toHaveClass(/show-welcome/);

        // Verify the hero content becomes visible (opacity change)
        const heroContent = await page.locator('.hero-content');
        await expect(heroContent).toBeVisible();

        // Check if the transform has been reset (animation completed)
        const transform = await heroContent.evaluate((el) => {
            return window.getComputedStyle(el).transform;
        });
        expect(transform).not.toBe('translateY(30px)');
    });


    test('should display static text correctly', async ({ page }) => {
        const staticText = await page.locator('.static-text');
        await expect(staticText).toBeVisible();
        await expect(staticText).toHaveText('für Ihr Liegenschaftsmanagement');
    });

    test('should have floating shapes rendered', async ({ page }) => {
        // Check if floating shapes container exists
        const shapesContainer = await page.locator('.floating-shapes');
        await expect(shapesContainer).toBeVisible();

        // Verify different shape types are present
        const circles = await page.locator('.shape.circle').count();
        expect(circles).toBeGreaterThan(0);

        const squares = await page.locator('.shape.square').count();
        expect(squares).toBeGreaterThan(0);

        const rectangles = await page.locator('.shape.rectangle').count();
        expect(rectangles).toBeGreaterThan(0);

        const diamonds = await page.locator('.shape.diamond').count();
        expect(diamonds).toBeGreaterThan(0);

        const triangles = await page.locator('.shape.triangle').count();
        expect(triangles).toBeGreaterThan(0);
    });

    test('should be responsive', async ({ page }) => {
        // Test mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });

        // Check if brand name font size is adjusted
        const brandName = await page.locator('.brand-name');
        const fontSize = await brandName.evaluate((el) => {
            return window.getComputedStyle(el).fontSize;
        });
        expect(fontSize).toBe('48px');

        // Check if rotating word is adjusted
        const rotatingWord = await page.locator('.rotating-word');
        const rotatingWordFontSize = await rotatingWord.evaluate((el) => {
            return window.getComputedStyle(el).fontSize;
        });
        expect(rotatingWordFontSize).toBe('32px');
    });
});