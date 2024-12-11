import { test, expect } from '@playwright/test';

test.describe('Educational Benefits Section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5174/');
        await page.waitForSelector('.education-container');
    });

    test('should display correct header content', async ({ page }) => {
        // Check title
        await expect(page.locator('.education-title'))
            .toHaveText('REMSFAL für Studienprojekte');

        // Check description
        await expect(page.locator('.education-description'))
            .toHaveText([
                'REMSFAL ist mehr als nur ein Open-Source-Projekt - es ist eine Plattform für akademisches Wachstum,',
                'praktische Erfahrung und professionelle Entwicklung. Entdecken Sie alle Möglichkeiten,',
                'die REMSFAL für Ihr Studium bietet.'
            ].join(' '));
    });

    test('should display all benefit cards with correct content', async ({ page }) => {
        const expectedBenefits = [
            {
                title: 'Real-world Erfahrung',
                description: 'Arbeiten Sie an realen Projekten mit echten Anforderungen und erproben Sie Ihre Fähigkeiten in einem authentischen Arbeitsumfeld',
                icon: 'pi-briefcase',
                stats: '90% der Studierenden bestätigen verbesserte praktische Fähigkeiten'
            },
            {
                title: 'Zugang zu Ressourcen',
                description: 'Greifen Sie auf umfangreiche Code-Bibliotheken, Dokumentationen und Community-Support zu',
                icon: 'pi-file',
                stats: 'Über 1000+ Code-Beispiele und Dokumentationen verfügbar'
            },
            {
                title: 'Teamarbeit',
                description: 'Entwickeln Sie Ihre Fähigkeiten in kollaborativen Projekten und lernen Sie effektive Zusammenarbeit',
                icon: 'pi-users',
                stats: 'Durchschnittlich 2 Teammitglieder pro Projekt'
            },
            {
                title: 'Networking',
                description: 'Bauen Sie wertvolle Kontakte zu Entwicklern und Fachexperten auf für Ihre zukünftige Karriere',
                icon: 'pi-share-alt',
                stats: 'Über 30+ Community-Mitglieder'
            },
            {
                title: 'Aktuelle Technologien',
                description: 'Arbeiten Sie mit den neuesten Tools und Frameworks der Softwareentwicklung',
                icon: 'pi-code',
                stats: 'Zugang zu über 20+ modernen Technologie-Stacks'
            },
            {
                title: 'Kreative Freiheit',
                description: 'Verwirklichen Sie eigene Ideen und arbeiten Sie unabhängig an innovativen Lösungen',
                icon: 'pi-pencil',
                stats: 'kreative Kontrolle über Ihre Projekte'
            },

        ];

        // Check number of benefit cards
        const cards = await page.locator('.benefit-card').all();
        expect(cards.length).toBe(expectedBenefits.length);

        // Check content of each card
        for (let i = 0; i < expectedBenefits.length; i++) {
            const card = page.locator('.benefit-card').nth(i);
            const expected = expectedBenefits[i];

            // Check title
            await expect(card.locator('.benefit-title')).toHaveText(expected.title);

            // Check description
            await expect(card.locator('.benefit-description')).toHaveText(expected.description);

            // Check icon presence
            await expect(card.locator(`.pi.${expected.icon}`)).toBeVisible();
        }
    });

    test('should show stats on hover', async ({ page }) => {
        // Get the first benefit card
        const firstCard = page.locator('.benefit-card').first();

        // Check stats are not visible initially
        const stats = firstCard.locator('.benefit-stats');
        await expect(stats).not.toHaveClass(/show/);

        // Hover over the card
        await firstCard.hover();

        // Check stats become visible
        await expect(stats).toHaveClass(/show/);
    });

    test('should be responsive', async ({ page }) => {
        // Test tablet layout
        await page.setViewportSize({ width: 1024, height: 768 });

        // Verify grid has 2 columns
        const tabletGridStyle = await page.locator('.benefits-grid').evaluate(el =>
            window.getComputedStyle(el).gridTemplateColumns
        );
        expect(tabletGridStyle.split(' ').length).toBe(2);

        // Test mobile layout
        await page.setViewportSize({ width: 375, height: 667 });

        // Verify grid has 1 column
        const mobileGridStyle = await page.locator('.benefits-grid').evaluate(el =>
            window.getComputedStyle(el).gridTemplateColumns
        );
        expect(mobileGridStyle.split(' ').length).toBe(1);

        // Verify CTA section is stacked
        const ctaSection = page.locator('.cta-section');
        const flexDirection = await ctaSection.evaluate(el =>
            window.getComputedStyle(el).flexDirection
        );
        expect(flexDirection).toBe('column');
    });
});