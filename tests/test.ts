import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('label.svelte-146l4qm')).toBe('Difficulty');
});
