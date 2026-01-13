import { expect } from '@playwright/test';
import { test } from '../../fixtures/test.fixture';
import path from 'path';
import fs from 'fs';

test.beforeEach(async ({ page }) => {
  await page.goto('upload-download');
});

test('should download file and verify it exists', async ({ uploadAndDownloadPage }) => {
  await test.step('Download file and verify', async () => {
    const download = await uploadAndDownloadPage.downloadFile();
    expect(download.suggestedFilename()).toBe('sampleFile.jpeg');

    const filePath = path.join(__dirname, '../data/downloads', download.suggestedFilename());
    await download.saveAs(filePath);
    expect(fs.existsSync(filePath)).toBe(true);
  });
});

test('should upload file and verify success message', async ({ uploadAndDownloadPage }) => {
  await test.step('Upload file and verify success message', async () => {
    const filePath = path.resolve(__dirname, '../../data/uploads/sampleFile.jpeg');
    await uploadAndDownloadPage.uploadFile(filePath);

    const uploadedText = await uploadAndDownloadPage.getUploadedFileName();
    expect(uploadedText).toContain('sampleFile.jpeg');
  });
});
