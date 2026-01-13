import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export class DynamicPropertiesPage extends BasePage {
  readonly willEnablein5SecondsButton: Locator;
  readonly colorChangeButton: Locator;
  readonly visibleAfter5SecondsButton: Locator;

  constructor(page: Page) {
    super(page);
    this.willEnablein5SecondsButton = page.locator('#enableAfter');
    this.colorChangeButton = page.locator('#colorChange');
    this.visibleAfter5SecondsButton = page.locator('#visibleAfter');
  }

  async waitForButtonToBeEnabled(timeout = 6000) {
    await this.willEnablein5SecondsButton.waitFor({ state: 'visible', timeout });
    await this.page.waitForFunction(
      (selector) => {
        const button = document.querySelector(selector);
        return button && !(button as HTMLButtonElement).disabled;
      },
      '#enableAfter',
      { timeout }
    );
  }

  async waitForButtonToAppear(timeout = 6000) {
    await this.visibleAfter5SecondsButton.waitFor({ state: 'visible', timeout });
  }

  async getButtonColor() {
    return await this.colorChangeButton.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });
  }
}
