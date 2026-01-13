import { Page, Locator } from '@playwright/test';
import { Helpers } from '../utils/helpers';

export abstract class BasePage {
  protected readonly page: Page;

  protected constructor(page: Page) {
    this.page = page;
  }

  protected async fillIfPresent(locator: Locator, value?: string | number): Promise<void> {
    if (value !== undefined && value !== null) {
      await locator.fill(String(value));
    }
  }

  public async getUrl(): Promise<string> {
    return this.page.url();
  }

  public async goto(path: string): Promise<void> {
    await this.page.goto(path);
    await Helpers.closeBannerIfPresent(this.page);
  }
}