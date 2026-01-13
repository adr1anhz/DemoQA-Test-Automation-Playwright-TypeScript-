import { Page } from '@playwright/test';

export class Helpers {
  static async takeScreenshot(page: Page, name: string): Promise<void> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await page.screenshot({ path: `test-results/screenshots/${name}-${timestamp}.png`, fullPage: true });
  }

  static async closeBannerIfPresent(page: Page): Promise<void> {
    try {
      const bannerSelectors = [
        '[aria-label="Close"]',
        '.cookie-banner button',
        '#close-banner',
        'button:has-text("Accept")',
      ];

      for (const selector of bannerSelectors) {
        const banner = page.locator(selector).first();
        if (await banner.isVisible({ timeout: 2000 }).catch(() => false)) {
          await banner.click();
          await banner.waitFor({ state: 'hidden' }).catch(() => {});
          break;
        }
      }
    } catch (error) {
    }
  }
}
