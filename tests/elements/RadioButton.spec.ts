import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';

test.beforeEach(async ({ page }) => {
  await page.goto('radio-button');
});

test('should select radio buttons and verify states', async ({ radioButtonPage }) => {
  await test.step('Select Yes radio button', async () => {
    await radioButtonPage.checkYes();
    await expect(radioButtonPage.result).toHaveText('Yes');
  });

  await test.step('Select Impressive radio button', async () => {
    await radioButtonPage.checkImpressive();
    await expect(radioButtonPage.result).toHaveText('Impressive');
  });

  await test.step('Verify No button is disabled', async () => {
    await expect(radioButtonPage.no).not.toBeEnabled();
  });
});
