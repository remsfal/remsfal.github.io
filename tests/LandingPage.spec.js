// landingPage.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Landing Page', () => {
    test.beforeEach(async ({ page }) => {
        // Use env variable or fallback to localhost:5174
        const baseUrl = process.env.CI ? 'http://localhost:4173' : 'http://localhost:5174';
        await page.goto(`${baseUrl}/`);
    });



    test('rotates words correctly', async ({ page }) => {
        // Get initial word
        const initialWord = await page.locator('.rotating-word').textContent();

        // Wait for rotation (3 seconds)
        await page.waitForTimeout(3000);

        // Get new word
        const newWord = await page.locator('.rotating-word').textContent();
        expect(newWord).not.toBe(initialWord);
    });

    test('renders all feature cards', async ({ page }) => {
        // Check number of feature cards
        const featureCards = page.locator('.feature-card');
        await expect(featureCards).toHaveCount(3);

        // Verify content of each card
        const titles = ['Mängelmanagement', 'Dokumentation', 'Überwachung'];
        for (let i = 0; i < titles.length; i++) {
            await expect(featureCards.nth(i).locator('.feature-title'))
                .toHaveText(titles[i]);
        }
    });

    test('shows hover effects on feature cards', async ({ page }) => {
        const firstFeatureCard = page.locator('.feature-card').first();

        // Hover over card
        await firstFeatureCard.hover();
        await expect(firstFeatureCard).toHaveClass(/active/);

        // Move mouse away
        await page.mouse.move(0, 0);
        await expect(firstFeatureCard).not.toHaveClass(/active/);
    });

    test('renders educational benefits section', async ({ page }) => {
        // Check section title
        await expect(page.locator('.education-title'))
            .toHaveText('Open-Source für Studienprojekte');

        // Check benefit cards
        const benefitCards = page.locator('.benefit-card');
        await expect(benefitCards).toHaveCount(3);

        // Verify content of first benefit card
        const firstBenefit = benefitCards.first();
        await expect(firstBenefit.locator('h3')).toHaveText('Praxiserfahrung');
    });});