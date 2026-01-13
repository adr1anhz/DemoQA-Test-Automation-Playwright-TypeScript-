import { Page, Locator, BrowserContext } from '@playwright/test';
import { BasePage } from '../base.page';

type ApiLink =
  | 'created'
  | 'no-content'
  | 'moved'
  | 'bad-request'
  | 'unauthorized'
  | 'forbidden'
  | 'invalid-url';

export class LinksPage extends BasePage {


    readonly homeLink: Locator;
    readonly homeDynamicLink: Locator;
    readonly createdLink: Locator;
    readonly noContentLink: Locator;
    readonly movedLink: Locator;
    readonly badRequestLink: Locator;
    readonly unauthorizedLink: Locator;
    readonly forbiddenLink: Locator;
    readonly notFoundLink: Locator;


  constructor(page: Page) {
    super(page);
    this.homeLink = page.locator('#simpleLink');
    this.homeDynamicLink = page.locator('#dynamicLink');
    this.createdLink = page.locator('#created');
    this.noContentLink = page.locator('#no-content');
    this.movedLink = page.locator('#moved');
    this.badRequestLink = page.locator('#bad-request');
    this.unauthorizedLink = page.locator('#unauthorized');
    this.forbiddenLink = page.locator('#forbidden');
    this.notFoundLink = page.locator('#invalid-url');
  }

  async clickHomeLink(context: BrowserContext): Promise<Page> {
    const pagePromise = context.waitForEvent('page', { timeout: 30000 });
    await this.homeLink.click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    return newPage;
  }

  async clickDynamicLink(context: BrowserContext): Promise<Page> {
    const pagePromise = context.waitForEvent('page', { timeout: 30000 });
    await this.homeDynamicLink.click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    return newPage;
  }

  async clickCreatedAndGetResponse() {
    const [response] = await Promise.all([
      this.page.waitForResponse(res => res.url().includes('/created')),
      this.createdLink.click(),
    ]);

    return response;
  }
}
