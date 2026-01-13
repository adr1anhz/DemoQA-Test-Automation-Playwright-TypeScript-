import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';

test.beforeEach(async ({ page }) => {
  await page.goto('dynamic-properties');
});

test('should wait for button to become enabled after 5 seconds', async ({ dynamicPropertiesPage }) => {
  await test.step('Verify button is initially disabled', async () => {
    await expect(dynamicPropertiesPage.willEnablein5SecondsButton).toBeDisabled();
  });

  await test.step('Wait for button to become enabled', async () => {
    await dynamicPropertiesPage.waitForButtonToBeEnabled();
  });

  await test.step('Verify button is now enabled', async () => {
    await expect(dynamicPropertiesPage.willEnablein5SecondsButton).toBeEnabled();
  });
});

test('should wait for button to appear after 5 seconds', async ({ dynamicPropertiesPage }) => {
  await test.step('Verify button is initially not visible', async () => {
    await expect(dynamicPropertiesPage.visibleAfter5SecondsButton).not.toBeVisible();
  });

  await test.step('Wait for button to appear', async () => {
    await dynamicPropertiesPage.waitForButtonToAppear();
  });

  await test.step('Verify button is now visible', async () => {
    await expect(dynamicPropertiesPage.visibleAfter5SecondsButton).toBeVisible();
  });
});

test('should verify color change button is visible', async ({ dynamicPropertiesPage }) => {
  await test.step('Verify color change button is visible', async () => {
    await expect(dynamicPropertiesPage.colorChangeButton).toBeVisible();
  });
});
