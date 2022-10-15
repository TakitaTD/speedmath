import { expect, test } from '@playwright/test';

test('Difficulty exists', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('label.svelte-146l4qm')).toBe('Difficulty');
});
