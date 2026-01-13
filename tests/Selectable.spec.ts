import { expect } from '@playwright/test';
import { test } from '../fixtures/test.fixture';

test.beforeEach(async ({ page }) => {
  await page.goto('selectable');
});

test('should select multiple list items and verify active state', async ({ selectablePage }) => {
  await test.step('Select first item', async () => {
    await selectablePage.clickcrasJustoOdio();
    await expect(selectablePage.crasJustoOdio).toHaveClass(/active/);
  });

  await test.step('Select second item', async () => {
    await selectablePage.clickdapibusacfacilisisin();
    await expect(selectablePage.dapibusacfacilisisin).toHaveClass(/active/);
  });

  await test.step('Select third item', async () => {
    await selectablePage.clickmorbiLeoRisus();
    await expect(selectablePage.morbiLeoRisus).toHaveClass(/active/);
  });

  await test.step('Select fourth item', async () => {
    await selectablePage.clickportaAcConsecteturAc();
    await expect(selectablePage.portaAcConsecteturAc).toHaveClass(/active/);
  });
});
