import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export class RadioButtonPage extends BasePage {

  readonly yes: Locator;
  readonly impressive: Locator;
  readonly no: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    super(page);
    this.yes = page.locator('label[for="yesRadio"]');
    this.impressive = page.locator('label[for="impressiveRadio"]');
    this.no = page.locator('label[for="noRadio"]');
    this.result = page.locator('p .text-success');
  }

  async checkYes() {
    await this.yes.click();
  }

  async checkImpressive() {
    await this.impressive.click();
  }

  async checkResult() {
    return this.result;
  }
}
