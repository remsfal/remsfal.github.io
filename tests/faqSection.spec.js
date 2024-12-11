import { test, expect } from '@playwright/test';

test.describe('FAQ Section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5174/');
        await page.waitForSelector('.faq-content');
    });

    test('should display all FAQ items', async ({ page }) => {
        // Check if all FAQ items are present
        const faqItems = await page.locator('.faq-item').all();
        expect(faqItems.length).toBe(7);

        // Verify content of specific items
        const expectedItems = [
            {
                title: 'Project = Liegenschaft',
                content: 'Eine Liegenschaft bezeichnet ein oder mehrere Grundstücke, die wiederum mit ein oder mehreren Gebäuden oder Anlagen bebaut sind und meist eine funktionale Einheit bilden.',
                icon: '🏢'
            },
            {
                title: 'Property = Grundstück',
                content: 'Ein Grundstück ist ein räumlich abgegrenzter Teil, der eine bestimmte Größe besitzt und einer bestimmten Wirtschaftsart und Lage zugeordnet ist. Ein Grundstück entspricht genau einem Eintrag im Bestandsverzeichnis des Grundbuches. Daher können mehrere Grundstücke einer Liegenschaft auch die identische Grundbuch Blattnummer besitzen.',
                icon: '🗺️'
            }
        ];

        for (let i = 0; i < 2; i++) {
            const item = page.locator('.faq-item').nth(i);
            await expect(item.locator('.faq-title')).toHaveText(expectedItems[i].title);
            await expect(item.locator('.faq-icon')).toHaveText(expectedItems[i].icon);
            await expect(item.locator('.faq-body p')).toHaveText(expectedItems[i].content);
        }
    });

    test('should toggle FAQ items correctly', async ({ page }) => {
        // All sections should be open initially
        const faqItems = await page.locator('.faq-item').all();
        for (const item of faqItems) {
            await expect(item).toHaveClass(/active/);
            await expect(item.locator('.faq-arrow')).toHaveText('−');
        }

        // Click first item to close it
        await page.locator('.faq-header').first().click();
        await expect(page.locator('.faq-item').first()).not.toHaveClass(/active/);
        await expect(page.locator('.faq-arrow').first()).toHaveText('+');

        // Click it again to open
        await page.locator('.faq-header').first().click();
        await expect(page.locator('.faq-item').first()).toHaveClass(/active/);
        await expect(page.locator('.faq-arrow').first()).toHaveText('−');
    });

    test('should verify all FAQ content', async ({ page }) => {
        const expectedContent = [
            {
                title: 'Project = Liegenschaft',
                icon: '🏢'
            },
            {
                title: 'Property = Grundstück',
                icon: '🗺️'
            },
            {
                title: 'Site = Außenanlage',
                icon: '🌳'
            },
            {
                title: 'Building = Gebäude',
                icon: '🏗️'
            },
            {
                title: 'Apartment = Wohnung',
                icon: '🏠'
            },
            {
                title: 'Commercial = Gewerbe',
                icon: '🏪'
            },
            {
                title: 'Garage = Nebennutzungsraum',
                icon: '🚗'
            }
        ];

        for (let i = 0; i < expectedContent.length; i++) {
            const item = page.locator('.faq-item').nth(i);
            await expect(item.locator('.faq-title')).toHaveText(expectedContent[i].title);
            await expect(item.locator('.faq-icon')).toHaveText(expectedContent[i].icon);
        }
    });


    test('should maintain FAQ item state after multiple toggles', async ({ page }) => {
        const firstItem = page.locator('.faq-item').first();
        const firstHeader = page.locator('.faq-header').first();

        // Toggle multiple times
        await firstHeader.click();
        await expect(firstItem).not.toHaveClass(/active/);

        await firstHeader.click();
        await expect(firstItem).toHaveClass(/active/);

        await firstHeader.click();
        await expect(firstItem).not.toHaveClass(/active/);
    });
});