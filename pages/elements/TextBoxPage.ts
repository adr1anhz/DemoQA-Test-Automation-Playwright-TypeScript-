import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';
import { User } from '../../models/user.model';

export class TextBoxPage extends BasePage {
  readonly fullName: Locator;
  readonly email: Locator;
  readonly currentAddress: Locator;
  readonly permanentAddress: Locator;
  readonly submitBtn: Locator;

  readonly outputName: Locator;
  readonly outputEmail: Locator;
  readonly outputCurrentAddress: Locator;
  readonly outputPermamentAddress: Locator;

  constructor(page: Page) {
    super(page);
    this.fullName = page.locator('#userName');
    this.email = page.locator('#userEmail');
    this.currentAddress = page.locator('#currentAddress');
    this.permanentAddress = page.locator('#permanentAddress');
    this.submitBtn = page.getByRole('button', { name: 'Submit' });

    this.outputName = page.locator('#output #name');
    this.outputEmail = page.locator('#output #email');
    this.outputCurrentAddress = page.locator('#output #currentAddress');
    this.outputPermamentAddress = page.locator('#output #permanentAddress');
  }

  async submitUser(user: User) {
    await this.fillIfPresent(this.fullName, user.fullName);
    await this.fillIfPresent(this.email, user.email);
    await this.fillIfPresent(this.currentAddress, user.currentAddress);
    await this.fillIfPresent(this.permanentAddress, user.permanentAddress);
    await this.submitBtn.click();
  }
}
