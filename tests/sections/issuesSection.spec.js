import { test, expect } from '@playwright/test';

test.describe('Issues Section', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/');
        await page.waitForSelector('.issues-container');
    });

    test('should display all issues initially', async ({ page }) => {
        const issueCards = await page.locator('.issue-card').all();
        expect(issueCards.length).toBe(5);
    });

    test('should have working search functionality', async ({ page }) => {
        // Test search by title
        await page.fill('.search-input', 'HAProxy');
        let filteredCards = await page.locator('.issue-card').all();
        expect(filteredCards.length).toBe(2);

        // Test search by description
        await page.fill('.search-input', 'Microservice');
        filteredCards = await page.locator('.issue-card').all();
        expect(filteredCards.length).toBe(1);

        // Test case insensitivity
        await page.fill('.search-input', 'kafka');
        filteredCards = await page.locator('.issue-card').all();
        expect(filteredCards.length).toBe(1);

        // Clear search
        await page.fill('.search-input', '');
        filteredCards = await page.locator('.issue-card').all();
        expect(filteredCards.length).toBe(5);
    });

    test('should have working status filter', async ({ page }) => {
        // Test "In Bearbeitung" filter
        await page.selectOption('.filter-select', 'in_progress');
        let filteredCards = await page.locator('.issue-card').all();
        expect(filteredCards.length).toBe(3);

        // Test "Offen" filter
        await page.selectOption('.filter-select', 'open');
        filteredCards = await page.locator('.issue-card').all();
        expect(filteredCards.length).toBe(2);

        // Reset filter to "Alle"
        await page.selectOption('.filter-select', 'all');
        filteredCards = await page.locator('.issue-card').all();
        expect(filteredCards.length).toBe(5);
    });

    test('should display correct issue card content', async ({ page }) => {
        const firstCard = page.locator('.issue-card').first();

        // Check title
        await expect(firstCard.locator('.issue-title')).toHaveText(
            'Implementierung und Evaluation eines Java-basierten HAProxy Stream Processing Offload Agent zur Event Transformation nach Kafka'
        );

        // Check description
        await expect(firstCard.locator('.issue-description')).toHaveText(
            'Entwicklung eines leistungsfähigen Stream Processing Agents zur Integration von HAProxy mit Kafka-basierten Event-Systemen.'
        );

        // Check labels
        const labels = await firstCard.locator('.label').allTextContents();
        expect(labels).toEqual(['Backend', 'Java', 'Kafka']);

        // Check status badge
        await expect(firstCard.locator('.status-badge')).toHaveText('In Bearbeitung');
    });

    test('should display correct priority indicators', async ({ page }) => {
        // Check high priority indicator
        const highPriorityCard = page.locator('.issue-card').first();
        await expect(highPriorityCard.locator('.priority-indicator')).toHaveText('🔴');

        // Check medium priority indicator
        const mediumPriorityCard = page.locator('.issue-card').nth(1);
        await expect(mediumPriorityCard.locator('.priority-indicator')).toHaveText('🟡');
    });

    test('should contain correct navigation links', async ({ page }) => {
        const firstCard = page.locator('.issue-card').first();

        // Check title link
        await expect(firstCard.locator('.issue-title-link')).toHaveAttribute(
            'href',
            '/issues/haproxy-stream-processing-agent'
        );

        // Check details link
        await expect(firstCard.locator('.details-link')).toHaveAttribute(
            'href',
            '/issues/haproxy-stream-processing-agent'
        );
    });


    test('should combine search and filter functionality', async ({ page }) => {
        // Apply both search and filter
        await page.fill('.search-input', 'HAProxy');
        await page.selectOption('.filter-select', 'in_progress');

        // Should show only in_progress HAProxy issues
        const filteredCards = await page.locator('.issue-card').all();
        expect(filteredCards.length).toBe(1);

        // Verify the correct card is shown
        await expect(page.locator('.issue-card').first().locator('.issue-title'))
            .toContainText('HAProxy Stream Processing');
    });
});