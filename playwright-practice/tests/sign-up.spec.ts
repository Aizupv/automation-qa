import test from "@playwright/test";

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/')
})