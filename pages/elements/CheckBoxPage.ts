import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export class CheckBoxPage extends BasePage {

  readonly result: Locator;
  readonly homeCheckbox: Locator;

  constructor(page: Page) {
    super(page);
    this.result = page.locator('#result');
    this.homeCheckbox = page.locator('.rct-checkbox');
  }

  async checkHomeBox() {
    await this.homeCheckbox.check();
  }
}
