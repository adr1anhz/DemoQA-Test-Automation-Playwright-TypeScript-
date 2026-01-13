import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';

test.beforeEach(async ({ page }) => {
  await page.goto('buttons');
});

test('should handle double-click, right-click, and regular click actions', async ({ buttonsPage }) => {
  await test.step('Perform double-click and verify message', async () => {
    await buttonsPage.clickDoubleClickButton();
    await expect(buttonsPage.successDoubleClick).toBeVisible();
    await expect(buttonsPage.successDoubleClick).toHaveText('You have done a double click');
  });

  await test.step('Perform right-click and verify message', async () => {
    await buttonsPage.clickRightClickButton();
    await expect(buttonsPage.successRightClick).toBeVisible();
    await expect(buttonsPage.successRightClick).toHaveText('You have done a right click');
  });

  await test.step('Perform regular click and verify message', async () => {
    await buttonsPage.clickClickMeButton();
    await expect(buttonsPage.successClickMe).toBeVisible();
    await expect(buttonsPage.successClickMe).toHaveText('You have done a dynamic click');
  });
});
