import { Page, Locator, Download  } from '@playwright/test';
import { BasePage } from '../base.page';

export class UploadAndDownloadPage extends BasePage {


  readonly downloadButton: Locator;
  readonly uploadInput: Locator;
  readonly uploadedFilePath: Locator;

  constructor(page: Page) {
    super(page);
    this.downloadButton = page.locator('#downloadButton');
    this.uploadInput = page.locator('#uploadFile');
    this.uploadedFilePath = page.locator('#uploadedFilePath');

  }

  async downloadFile(): Promise<Download> {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.downloadButton.click(),
    ]);

    return download;

  }

  async uploadFile(filePath: string): Promise<void> {
    await this.uploadInput.setInputFiles(filePath);
  }

  async getUploadedFileName(): Promise<string | null> {
    return this.uploadedFilePath.textContent();
  }
}
