import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';
import { UserBuilder } from '../../builders/user.builder';

test.beforeEach(async ({ page }) => {
  await page.goto('text-box');
});

test('should submit text box form and verify output', async ({ textBoxPage }) => {
  const user = await test.step('Generate test user data', async () => {
    return UserBuilder.create()
      .fullName()
      .email()
      .currentAddress()
      .permanentAddress()
      .build();
  });

  await test.step('Fill and submit the form', async () => {
    await textBoxPage.submitUser(user);
  });

  await test.step('Verify all fields in output', async () => {
    await expect(textBoxPage.outputName).toContainText(user.fullName!);
    await expect(textBoxPage.outputEmail).toContainText(user.email!);
    await expect(textBoxPage.outputCurrentAddress).toContainText(user.currentAddress!);
    await expect(textBoxPage.outputPermamentAddress).toContainText(user.permanentAddress!);
  });
});
