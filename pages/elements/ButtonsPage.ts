import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';

export class ButtonsPage extends BasePage {

    readonly doubleClickMe: Locator;
    readonly rightClickMe: Locator;
    readonly clickMe: Locator;
    readonly successDoubleClick: Locator;
    readonly successRightClick: Locator;
    readonly successClickMe: Locator;


  constructor(page: Page) {
    super(page);
    this.doubleClickMe = page.locator('#doubleClickBtn');
    this.rightClickMe = page.locator('#rightClickBtn');
    this.clickMe = page.locator('button').filter({ hasText: 'Click Me' }).last();
    this.successDoubleClick = page.locator('#doubleClickMessage');
    this.successRightClick = page.locator('#rightClickMessage');
    this.successClickMe = page.locator('#dynamicClickMessage');
  }

  async clickDoubleClickButton() {
    await this.doubleClickMe.dblclick();
    await this.successDoubleClick.waitFor({ state: 'visible' });
  }

  async clickRightClickButton() {
    await this.rightClickMe.click({ button: 'right' });
    await this.successRightClick.waitFor({ state: 'visible' });
  }

  async clickClickMeButton() {
    await this.clickMe.click();
    await this.successClickMe.waitFor({ state: 'visible' });
  }
}
