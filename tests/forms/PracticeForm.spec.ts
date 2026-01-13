import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';
import { UserBuilder } from '../../builders/user.builder';

test.beforeEach(async ({ page }) => {
  await page.goto('automation-practice-form');
});

test('should submit practice form with all fields and verify success modal', async ({ practiceFormPage }) => {
  const user = await test.step('Generate test user data', async () => {
    return UserBuilder.create()
      .firstName()
      .lastName()
      .email()
      .sex()
      .mobileNumber()
      .withRandomSubjects(1, 3)
      .dateOfBirth()
      .currentAddress()
      .build();
  });

  await test.step('Fill and submit the form', async () => {
    await practiceFormPage.submitUser(user);
  });

  await test.step('Verify success modal appears with correct data', async () => {
    await expect(practiceFormPage.modalTitle).toBeVisible();
    await expect(practiceFormPage.modalTitle).toContainText('Thanks for submitting the form');
    await expect(practiceFormPage.modalContent).toContainText(user.firstName!);
    await expect(practiceFormPage.modalContent).toContainText(user.lastName!);
    await expect(practiceFormPage.modalContent).toContainText(user.email!);
    await expect(practiceFormPage.modalContent).toContainText(user.mobileNumber!);
  });
});
