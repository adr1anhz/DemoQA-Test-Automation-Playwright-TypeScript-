import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';
import { User } from '../../models/user.model';

export class WebTablesPage extends BasePage {

    readonly add: Locator;
    readonly registrationForm: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly email: Locator;
    readonly age: Locator;
    readonly salary: Locator;
    readonly department: Locator;
    readonly submitButton: Locator;


    readonly listWebTables: Locator;


  constructor(page: Page) {
    super(page);
    this.add = page.locator('#addNewRecordButton');
    this.registrationForm = page.locator('.modal-header #registration-form-modal');
    this.firstName = page.locator('#userForm #firstName');
    this.lastName = page.locator('#userForm #lastName');
    this.email = page.locator('#userForm #userEmail');
    this.age = page.locator('#userForm #age');
    this.salary = page.locator('#userForm #salary');
    this.department = page.locator('#userForm #department');
    this.submitButton = page.locator('#userForm #submit');
    this.listWebTables = page.locator('.rt-tbody');
  }

  async clickAddNewUser() {
    await this.add.click();
  }

  async fillRegistrationFormAndClickSubmit(user: User) {
    await this.fillIfPresent(this.firstName, user.firstName);
    await this.fillIfPresent(this.lastName, user.lastName);
    await this.fillIfPresent(this.email, user.email);
    await this.fillIfPresent(this.age, user.age);
    await this.fillIfPresent(this.salary, user.salary);
    await this.fillIfPresent(this.department, user.department);
    await this.submitButton.click();
  }
}
