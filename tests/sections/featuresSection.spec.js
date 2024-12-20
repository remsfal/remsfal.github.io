import { test, expect } from '@playwright/test';

test.describe('Features Section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/');
        await page.waitForSelector('.features-container');
    });

    test('should display correct title and subtitle', async ({ page }) => {
        await expect(page.locator('.features-title')).toHaveText('Unsere Kernfunktionen');
        await expect(page.locator('.features-subtitle'))
            .toHaveText('Entdecken Sie die Werkzeuge, die Ihr Liegenschaftsmanagement revolutionieren');
    });

    test('should display all three feature cards with correct content', async ({ page }) => {
        // Verify we have exactly 3 cards
        const cards = await page.locator('.feature-card').all();
        expect(cards.length).toBe(3);

        // Define expected content
        const expectedContent = [
            {
                title: 'Mängelmanagement',
                description: 'Erfassen und verfolgen Sie Mängel in Echtzeit mit unserem fortschrittlichen System. Organisieren Sie Ihre Aufgaben effizient und behalten Sie den Überblick über den aktuellen Status jedes Mangels.',
                stats: ['98% Effizienz', '24/7 Verfügbar']
            },
            {
                title: 'Dokumentation',
                description: 'Zentrale Verwaltung aller Dokumente. Greifen Sie von überall auf wichtige Unterlagen zu, teilen Sie diese mit relevanten Stakeholdern und nutzen Sie unsere leistungsstarke Suchfunktion.',
                stats: ['100% Digital', 'Cloud-basiert']
            },
            {
                title: 'Überwachung',
                description: 'Echtzeitüberwachung und umfassende Analysen. Erhalten Sie detaillierte Einblicke in Ihre Prozesse, identifizieren Sie Optimierungspotenziale und treffen Sie datenbasierte Entscheidungen.',
                stats: ['Echtzeit Updates', 'KI-gestützt']
            }
        ];

        // Test each card's content
        for (let i = 0; i < cards.length; i++) {
            const card = page.locator('.feature-card').nth(i);
            const content = expectedContent[i];

            // Check title
            await expect(card.locator('.feature-title')).toHaveText(content.title);

            // Check description
            await expect(card.locator('.feature-description')).toHaveText(content.description);

            // Check stats
            const stats = await card.locator('.stat-badge').allTextContents();
            expect(stats).toEqual(content.stats);

            // Check "Mehr erfahren" button exists
            await expect(card.locator('.learn-more-btn')).toHaveText('Mehr erfahren');
            await expect(card.locator('.learn-more-btn')).toBeEnabled();
        }
    });

    test('should display correct icons', async ({ page }) => {
        const expectedIconClasses = [
            'pi-exclamation-circle',
            'pi-folder',
            'pi-chart-line'
        ];

        for (const iconClass of expectedIconClasses) {
            const icon = page.locator(`.pi.${iconClass}`);
            await expect(icon).toBeVisible();
        }
    });

    test('should have clickable "Mehr erfahren" buttons', async ({ page }) => {
        const buttons = await page.locator('.learn-more-btn').all();

        for (const button of buttons) {
            await expect(button).toBeVisible();
            await expect(button).toBeEnabled();
            await expect(button).toContainText('Mehr erfahren');
        }
    });

    test('should maintain correct structure in mobile view', async ({ page }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });

        // Verify all content is still visible
        await expect(page.locator('.features-title')).toBeVisible();
        await expect(page.locator('.features-subtitle')).toBeVisible();

        // Check all cards are visible
        const cards = await page.locator('.feature-card').all();
        for (const card of cards) {
            await expect(card).toBeVisible();
        }
    });
});