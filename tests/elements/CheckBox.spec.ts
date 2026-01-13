import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';

test.beforeEach(async ({ page }) => {
  await page.goto('checkbox');
});

test('should check home checkbox and verify result', async ({ checkBoxPage }) => {
  await test.step('Check home checkbox', async () => {
    await checkBoxPage.checkHomeBox();
  });

  await test.step('Verify result message appears', async () => {
    await expect(checkBoxPage.result).toBeVisible();
    await expect(checkBoxPage.result).toContainText('home');
  });
});
