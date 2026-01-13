import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';
import { UserBuilder } from '../../builders/user.builder';

test.beforeEach(async ({ page }) => {
  await page.goto('webtables');
});

test('should add new user to web table and verify data', async ({ webtablesPage }) => {
  const user = await test.step('Generate test user data', async () => {
    return UserBuilder.create()
      .firstName()
      .lastName()
      .email()
      .age()
      .salary()
      .department()
      .build();
  });

  await test.step('Open registration form', async () => {
    await webtablesPage.clickAddNewUser();
    await expect(webtablesPage.registrationForm).toContainText('Registration Form');
  });

  await test.step('Fill and submit registration form', async () => {
    await webtablesPage.fillRegistrationFormAndClickSubmit(user);
  });

  await test.step('Verify user data appears in table', async () => {
    await expect(webtablesPage.listWebTables).toContainText(user.firstName!);
    await expect(webtablesPage.listWebTables).toContainText(user.lastName!);
    await expect(webtablesPage.listWebTables).toContainText(user.email!);
    await expect(webtablesPage.listWebTables).toContainText(user.age!.toString());
    await expect(webtablesPage.listWebTables).toContainText(user.salary!.toString());
    await expect(webtablesPage.listWebTables).toContainText(user.department!);
  });
});
