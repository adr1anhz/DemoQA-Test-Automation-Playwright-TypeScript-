import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';

test.beforeEach(async ({ page }) => {
  await page.goto('links');
});

test('should open new page when clicking static home link', async ({ linksPage, context }) => {
  await test.step('Click static home link', async () => {
    const newPage = await linksPage.clickHomeLink(context);
    await expect(newPage).toHaveURL('https://demoqa.com/');
  });
});

test('should open new page when clicking dynamic home link', async ({ linksPage, context }) => {
  await test.step('Verify dynamic link has correct href', async () => {
    await expect(linksPage.homeDynamicLink).toHaveAttribute('href', /demoqa/);
  });

  await test.step('Click dynamic link', async () => {
    await linksPage.clickDynamicLink(context);
  });
});

test('should return 201 status code when clicking created link', async ({ linksPage }) => {
  await test.step('Click created link and verify response status', async () => {
    const response = await linksPage.clickCreatedAndGetResponse();
    expect(response.status()).toBe(201);
  });
});
